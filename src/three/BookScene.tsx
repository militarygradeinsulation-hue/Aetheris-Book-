import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import {
  BookmarkItem,
  CameraPresetId,
  LightingSettings,
  TextLayoutSettings,
} from '../types/book';
import {
  createBackCoverTexture,
  createEndpaperTexture,
  createFrontCoverTexture,
  renderPageTexture,
} from './pageTextureRenderer';
import { soundEngine } from '../audio/soundEngine';

interface BookSceneProps {
  spreadIndex: number; // 0 = Front Cover, 1..35 = spreads (1: Endpaper+P1, 2: P2+P3, ..., 35: P68+P69), 36 = Back Cover
  onSpreadChange: (newSpread: number) => void;
  layoutSettings: TextLayoutSettings;
  lightingSettings: LightingSettings;
  cameraPreset: CameraPresetId;
  bookmarks: BookmarkItem[];
}

const PAGE_W = 3.2;
const PAGE_H = 4.52;
const COVER_W = 3.34;
const COVER_H = 4.68;
const COVER_THICK = 0.06;
const MAX_STACK_THICK = 0.36;
const TOTAL_SPREADS = 35; // spreads 1..35 hold pages 1..69

// Reusable module-scope math objects (Zero GC in render loop)
const _targetCamPos = new THREE.Vector3();
const _targetLookAt = new THREE.Vector3();
const _keyColor = new THREE.Color();
const _warmColor = new THREE.Color('#ffaa55');
const _coolColor = new THREE.Color('#dbeafe');

function deformTurningPage(
  geo: THREE.PlaneGeometry,
  progress: number, // 0 (right side) to 1 (left side)
  cornerBiasY: number // -1 (bottom corner) to +1 (top corner)
) {
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const count = pos.count;
  const angle = progress * Math.PI;
  const sinP = Math.sin(progress * Math.PI); // peaks at mid-turn (0.5)

  for (let i = 0; i < count; i++) {
    // Original plane is created with width PAGE_W, height PAGE_H, shifted so x in [0, PAGE_W]
    const u = pos.getX(i) / PAGE_W; // 0 at spine, 1 at outer page edge
    const v = pos.getY(i) / (PAGE_H * 0.5); // -1 at bottom, +1 at top

    const radius = u * PAGE_W;
    // Conical/cylindrical paper curl flex: outer edge lags slightly during the first half and settles in the second half
    const lag = Math.sin(u * Math.PI * 0.85) * sinP * 0.42;
    const cornerPull = cornerBiasY * v * u * sinP * 0.24;
    const localAngle = Math.max(0, Math.min(Math.PI, angle - lag + cornerPull));

    // Arch height near spine so paper lifts gracefully over the binding
    const spineArch = Math.sin(u * Math.PI) * sinP * 0.38;

    const x = Math.cos(localAngle) * radius;
    const z = Math.sin(localAngle) * radius + spineArch;

    pos.setX(i, x);
    pos.setZ(i, z);
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
}

export const BookScene: React.FC<BookSceneProps> = ({
  spreadIndex,
  onSpreadChange,
  layoutSettings,
  lightingSettings,
  cameraPreset,
  bookmarks,
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  // Mutable state ref for animation loop access without re-mounting WebGL
  const stateRef = useRef({
    spreadIndex,
    visualSpread: spreadIndex, // continuous float 0..36
    targetSpread: spreadIndex,
    isDraggingPage: false,
    dragDirection: 0 as -1 | 0 | 1,
    dragStartX: 0,
    dragStartY: 0,
    dragProgress: 0,
    cornerBiasY: 0,
    lighting: lightingSettings,
    layout: layoutSettings,
    cameraPreset,
    userInteractingWithOrbit: false,
  });

  stateRef.current.lighting = lightingSettings;
  stateRef.current.layout = layoutSettings;
  stateRef.current.cameraPreset = cameraPreset;

  const requestRenderRef = useRef<() => void>(() => {});
  const updateTexturesRef = useRef<() => void>(() => {});
  const rebuildBookmarksRef = useRef<(bms: BookmarkItem[]) => void>(() => {});

  useEffect(() => {
    const prevTarget = stateRef.current.targetSpread;
    if (prevTarget !== spreadIndex) {
      if (spreadIndex === 0 || prevTarget === 0 || spreadIndex === 36 || prevTarget === 36) {
        soundEngine.playCoverThud();
      } else {
        soundEngine.playPageTurn(spreadIndex > prevTarget ? 'next' : 'prev');
      }
      stateRef.current.targetSpread = spreadIndex;
      stateRef.current.userInteractingWithOrbit = false;
      requestRenderRef.current();
    }
  }, [spreadIndex]);

  useEffect(() => {
    stateRef.current.userInteractingWithOrbit = false;
    requestRenderRef.current();
  }, [cameraPreset, lightingSettings]);

  useEffect(() => {
    updateTexturesRef.current();
  }, [layoutSettings, spreadIndex, bookmarks]);

  useEffect(() => {
    rebuildBookmarksRef.current(bookmarks);
  }, [bookmarks]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Software WebGL detection per Three.js skill directive
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0c0a09');
    scene.fog = new THREE.FogExp2('#0c0a09', 0.042);

    // Mandatory Studio Environment Reflection
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    const camera = new THREE.PerspectiveCamera(
      38,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 6.2, 5.2);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = !isSoftwareGl;
    controls.dampingFactor = 0.07;
    controls.minDistance = 2.6;
    controls.maxDistance = 13.5;
    controls.maxPolarAngle = Math.PI * 0.46;
    controls.minPolarAngle = 0.08;
    controls.target.set(0, 0.1, 0);

    controls.addEventListener('start', () => {
      stateRef.current.userInteractingWithOrbit = true;
    });

    // 2. Balanced 3-Point Studio Lighting Rig + Desk Study Lamp
    const hemiLight = new THREE.HemisphereLight('#dceeff', '#291d12', 0.55);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight('#ffdfa8', 1.65);
    keyLight.position.set(3.5, 7.5, 4.2);
    keyLight.castShadow = !isSoftwareGl;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    const d = 5.5;
    keyLight.shadow.camera.left = -d;
    keyLight.shadow.camera.right = d;
    keyLight.shadow.camera.top = d;
    keyLight.shadow.camera.bottom = -d;
    keyLight.shadow.camera.near = 1;
    keyLight.shadow.camera.far = 20;
    keyLight.shadow.bias = -0.0005;
    keyLight.shadow.normalBias = 0.02;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight('#93c5fd', 0.55);
    rimLight.position.set(-4.5, 5.0, -4.5);
    scene.add(rimLight);

    const deskLampLight = new THREE.PointLight('#ff9e44', 1.8, 12, 1.6);
    deskLampLight.position.set(-3.6, 3.3, -1.9);
    scene.add(deskLampLight);

    // 3. Reading Desk & Props (Composite 3D Environment)
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // Procedural wood-grain desk surface
    const deskCanvas = document.createElement('canvas');
    deskCanvas.width = 512;
    deskCanvas.height = 512;
    const dCtx = deskCanvas.getContext('2d')!;
    dCtx.fillStyle = '#18120e';
    dCtx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 400; i++) {
      dCtx.fillStyle = i % 2 === 0 ? 'rgba(42, 30, 21, 0.35)' : 'rgba(12, 9, 6, 0.35)';
      dCtx.fillRect(0, Math.random() * 512, 512, 1 + Math.random() * 3);
    }
    const deskTex = new THREE.CanvasTexture(deskCanvas);
    deskTex.colorSpace = THREE.SRGBColorSpace;
    deskTex.wrapS = THREE.RepeatWrapping;
    deskTex.wrapT = THREE.RepeatWrapping;
    deskTex.repeat.set(4, 4);

    const deskGeo = new THREE.BoxGeometry(18, 0.4, 12);
    const deskMat = new THREE.MeshStandardMaterial({
      map: deskTex,
      roughness: 0.42,
      metalness: 0.08,
    });
    const deskMesh = new THREE.Mesh(deskGeo, deskMat);
    deskMesh.position.set(0, -0.22, 0);
    deskMesh.receiveShadow = true;
    worldGroup.add(deskMesh);

    // Brass inlay border on desk
    const inlayGeo = new THREE.RingGeometry(4.8, 4.84, 64);
    inlayGeo.rotateX(-Math.PI / 2);
    const brassMat = new THREE.MeshPhysicalMaterial({
      color: '#d4af37',
      metalness: 0.92,
      roughness: 0.22,
      clearcoat: 0.4,
    });
    const inlayMesh = new THREE.Mesh(inlayGeo, brassMat);
    inlayMesh.position.set(0, -0.015, 0);
    inlayMesh.material.polygonOffset = true;
    inlayMesh.material.polygonOffsetFactor = -1;
    worldGroup.add(inlayMesh);

    // Contact shadow plane directly beneath the book
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sCtx = shadowCanvas.getContext('2d')!;
    const radGrad = sCtx.createRadialGradient(128, 128, 20, 128, 128, 124);
    radGrad.addColorStop(0, 'rgba(0,0,0,0.75)');
    radGrad.addColorStop(0.65, 'rgba(0,0,0,0.32)');
    radGrad.addColorStop(1, 'rgba(0,0,0,0)');
    sCtx.fillStyle = radGrad;
    sCtx.fillRect(0, 0, 256, 256);
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);

    const contactShadowMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(8.2, 6.2),
      new THREE.MeshBasicMaterial({
        map: shadowTex,
        transparent: true,
        depthWrite: false,
        opacity: 0.65,
      })
    );
    contactShadowMesh.rotation.x = -Math.PI / 2;
    contactShadowMesh.position.set(0, -0.01, 0);
    worldGroup.add(contactShadowMesh);

    // Banker's Brass Study Lamp on upper-left corner of desk
    const lampGroup = new THREE.Group();
    lampGroup.position.set(-4.2, -0.02, -2.5);
    lampGroup.rotation.y = 0.55;
    worldGroup.add(lampGroup);

    const lampBase = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.58, 0.14, 32), brassMat);
    lampBase.position.y = 0.07;
    lampGroup.add(lampBase);

    const lampStem = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 2.8, 16), brassMat);
    lampStem.position.y = 1.45;
    lampGroup.add(lampStem);

    const lampArm = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 1.3, 16), brassMat);
    lampArm.position.set(0.48, 2.75, 0);
    lampArm.rotation.z = -Math.PI / 2.4;
    lampGroup.add(lampArm);

    const lampShadeMat = new THREE.MeshPhysicalMaterial({
      color: '#14532d',
      emissive: '#fb923c',
      emissiveIntensity: 0.35,
      roughness: 0.25,
      metalness: 0.1,
      clearcoat: 0.8,
    });
    const lampShade = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.55, 0.42, 24, 1, false),
      lampShadeMat
    );
    lampShade.position.set(0.95, 2.52, 0);
    lampGroup.add(lampShade);

    // Forensic Brass Magnifying Glass prop on the right side of the desk (homage to cover art)
    const magGroup = new THREE.Group();
    magGroup.position.set(4.35, 0.06, 1.35);
    magGroup.rotation.y = -0.48;
    worldGroup.add(magGroup);

    const magRim = new THREE.Mesh(new THREE.TorusGeometry(0.56, 0.055, 20, 48), brassMat);
    magRim.rotation.x = Math.PI / 2;
    magGroup.add(magRim);

    const magLensMat = new THREE.MeshPhysicalMaterial({
      color: '#ffffff',
      transmission: isSoftwareGl ? 0 : 0.92,
      transparent: true,
      opacity: isSoftwareGl ? 0.28 : 1,
      roughness: 0.05,
      ior: 1.52,
      thickness: 0.3,
    });
    const magLens = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.52, 0.04, 32), magLensMat);
    magGroup.add(magLens);

    const magHandle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.055, 0.075, 1.15, 16),
      new THREE.MeshStandardMaterial({ color: '#29180e', roughness: 0.35, metalness: 0.1 })
    );
    magHandle.rotation.x = Math.PI / 2;
    magHandle.position.set(0, 0, 1.12);
    magGroup.add(magHandle);

    // 4. Composite 3D Hardcover Codex Book Assembly
    const bookRoot = new THREE.Group();
    bookRoot.position.set(0, 0.02, 0);
    worldGroup.add(bookRoot);

    const { colorMap: frontCoverTex, spineMap: spineTex } = createFrontCoverTexture(maxAnisotropy);
    const backCoverTex = createBackCoverTexture(maxAnisotropy);
    const endpaperTex = createEndpaperTexture(maxAnisotropy);

    const darkLeatherMat = new THREE.MeshStandardMaterial({
      color: '#12100e',
      roughness: 0.45,
      metalness: 0.18,
    });

    const goldEdgeCanvas = document.createElement('canvas');
    goldEdgeCanvas.width = 256;
    goldEdgeCanvas.height = 256;
    const gCtx = goldEdgeCanvas.getContext('2d')!;
    gCtx.fillStyle = '#e5dcc5';
    gCtx.fillRect(0, 0, 256, 256);
    for (let y = 0; y < 256; y += 2) {
      gCtx.fillStyle = y % 4 === 0 ? 'rgba(180, 150, 95, 0.35)' : 'rgba(120, 100, 70, 0.2)';
      gCtx.fillRect(0, y, 256, 1);
    }
    const pageEdgeTex = new THREE.CanvasTexture(goldEdgeCanvas);
    pageEdgeTex.colorSpace = THREE.SRGBColorSpace;
    const pageEdgeMat = new THREE.MeshStandardMaterial({
      map: pageEdgeTex,
      roughness: 0.55,
      metalness: 0.12,
    });

    // Back Hardcover Pivot (hinges at x = 0)
    const backCoverPivot = new THREE.Group();
    bookRoot.add(backCoverPivot);

    const backBoardGeo = new THREE.BoxGeometry(COVER_W, COVER_THICK, COVER_H);
    backBoardGeo.translate(COVER_W / 2, 0, 0);
    const backCoverFaceMat = new THREE.MeshStandardMaterial({
      map: backCoverTex,
      roughness: 0.35,
      metalness: 0.22,
    });
    const endpaperMat = new THREE.MeshStandardMaterial({
      map: endpaperTex,
      roughness: 0.65,
      metalness: 0.05,
    });
    // Box faces: +x, -x, +y (top/inner), -y (bottom/outer back cover), +z, -z
    const backBoardMesh = new THREE.Mesh(backBoardGeo, [
      darkLeatherMat,
      darkLeatherMat,
      endpaperMat,
      backCoverFaceMat,
      darkLeatherMat,
      darkLeatherMat,
    ]);
    backBoardMesh.castShadow = true;
    backBoardMesh.receiveShadow = true;
    backCoverPivot.add(backBoardMesh);

    // Front Hardcover Pivot (hinges at x = 0, y = MAX_STACK_THICK)
    const frontCoverPivot = new THREE.Group();
    frontCoverPivot.position.set(0, MAX_STACK_THICK + COVER_THICK, 0);
    bookRoot.add(frontCoverPivot);

    const frontBoardGeo = new THREE.BoxGeometry(COVER_W, COVER_THICK, COVER_H);
    frontBoardGeo.translate(COVER_W / 2, 0, 0);
    const frontCoverFaceMat = new THREE.MeshStandardMaterial({
      map: frontCoverTex,
      roughness: 0.28,
      metalness: 0.32,
    });
    const frontBoardMesh = new THREE.Mesh(frontBoardGeo, [
      darkLeatherMat,
      darkLeatherMat,
      frontCoverFaceMat,
      endpaperMat,
      darkLeatherMat,
      darkLeatherMat,
    ]);
    frontBoardMesh.castShadow = true;
    frontBoardMesh.receiveShadow = true;
    frontCoverPivot.add(frontBoardMesh);

    // Curved Spine Mesh with 5 raised hub cords
    const spineGroup = new THREE.Group();
    bookRoot.add(spineGroup);

    const spineGeo = new THREE.CylinderGeometry(
      (MAX_STACK_THICK + COVER_THICK * 2) * 0.55,
      (MAX_STACK_THICK + COVER_THICK * 2) * 0.55,
      COVER_H,
      24,
      1,
      false,
      Math.PI,
      Math.PI
    );
    spineGeo.rotateX(Math.PI / 2);
    const spineMat = new THREE.MeshStandardMaterial({
      map: spineTex,
      roughness: 0.36,
      metalness: 0.25,
    });
    const spineMesh = new THREE.Mesh(spineGeo, spineMat);
    spineMesh.position.set(0, (MAX_STACK_THICK + COVER_THICK) * 0.5, 0);
    spineMesh.castShadow = true;
    spineGroup.add(spineMesh);

    // 5 raised gold-trimmed spine hub ribs
    for (let i = -2; i <= 2; i++) {
      const hub = new THREE.Mesh(
        new THREE.TorusGeometry((MAX_STACK_THICK + COVER_THICK * 2) * 0.56, 0.018, 12, 24, Math.PI),
        brassMat
      );
      hub.rotation.y = Math.PI / 2;
      hub.position.set(0, (MAX_STACK_THICK + COVER_THICK) * 0.5, i * 0.88);
      spineGroup.add(hub);
    }

    // Left & Right Page Block Stacks
    const leftPageTopMat = new THREE.MeshStandardMaterial({
      color: '#ffffff',
      roughness: 0.72,
      metalness: 0.02,
    });
    const rightPageTopMat = new THREE.MeshStandardMaterial({
      color: '#ffffff',
      roughness: 0.72,
      metalness: 0.02,
    });

    const leftStackGeo = new THREE.BoxGeometry(PAGE_W, 1, PAGE_H);
    leftStackGeo.translate(-PAGE_W / 2, 0.5, 0);
    const leftStackMesh = new THREE.Mesh(leftStackGeo, [
      pageEdgeMat,
      pageEdgeMat,
      leftPageTopMat,
      pageEdgeMat,
      pageEdgeMat,
      pageEdgeMat,
    ]);
    leftStackMesh.position.set(-0.01, COVER_THICK * 0.5, 0);
    leftStackMesh.castShadow = true;
    leftStackMesh.receiveShadow = true;
    bookRoot.add(leftStackMesh);

    const rightStackGeo = new THREE.BoxGeometry(PAGE_W, 1, PAGE_H);
    rightStackGeo.translate(PAGE_W / 2, 0.5, 0);
    const rightStackMesh = new THREE.Mesh(rightStackGeo, [
      pageEdgeMat,
      pageEdgeMat,
      rightPageTopMat,
      pageEdgeMat,
      pageEdgeMat,
      pageEdgeMat,
    ]);
    rightStackMesh.position.set(0.01, COVER_THICK * 0.5, 0);
    rightStackMesh.castShadow = true;
    rightStackMesh.receiveShadow = true;
    bookRoot.add(rightStackMesh);

    // 3D Bookmark Ribbon Tabs Group (protruding from top of page block)
    const bookmarkGroup = new THREE.Group();
    bookRoot.add(bookmarkGroup);

    rebuildBookmarksRef.current = (bms: BookmarkItem[]) => {
      while (bookmarkGroup.children.length > 0) {
        const child = bookmarkGroup.children[0] as THREE.Mesh;
        child.geometry.dispose();
        (child.material as THREE.Material).dispose();
        bookmarkGroup.remove(child);
      }
      bms.forEach((bm, idx) => {
        const ribbonGeo = new THREE.BoxGeometry(0.14, 0.012, 0.42);
        const ribbonMat = new THREE.MeshStandardMaterial({
          color: bm.color,
          roughness: 0.4,
          metalness: 0.15,
        });
        const ribbonMesh = new THREE.Mesh(ribbonGeo, ribbonMat);
        const isEvenLeft = bm.pageNumber % 2 === 0;
        const xOffset = isEvenLeft
          ? -PAGE_W * (0.35 + (idx % 4) * 0.14)
          : PAGE_W * (0.35 + (idx % 4) * 0.14);
        ribbonMesh.position.set(
          xOffset,
          COVER_THICK + MAX_STACK_THICK * 0.65,
          -PAGE_H * 0.5 - 0.12
        );
        bookmarkGroup.add(ribbonMesh);
      });
      requestRenderRef.current();
    };
    rebuildBookmarksRef.current(bookmarks);

    // Dynamic 3D Bending Page Sheet (used during active page turns between spreads)
    const turningGeo = new THREE.PlaneGeometry(PAGE_W, PAGE_H, 48, 24);
    turningGeo.translate(PAGE_W / 2, 0, 0);
    turningGeo.rotateX(-Math.PI / 2);

    const turnFrontMat = new THREE.MeshStandardMaterial({
      color: '#ffffff',
      roughness: 0.7,
      metalness: 0.02,
      side: THREE.FrontSide,
    });
    const turnBackMat = new THREE.MeshStandardMaterial({
      color: '#ffffff',
      roughness: 0.7,
      metalness: 0.02,
      side: THREE.BackSide,
    });

    // Back-side UV flip so text on the reverse of the turning sheet reads left-to-right!
    const turningBackGeo = turningGeo.clone();
    const uvAttr = turningBackGeo.attributes.uv as THREE.BufferAttribute;
    for (let i = 0; i < uvAttr.count; i++) {
      uvAttr.setX(i, 1 - uvAttr.getX(i));
    }
    uvAttr.needsUpdate = true;

    const turningSheetGroup = new THREE.Group();
    turningSheetGroup.position.set(0, MAX_STACK_THICK + COVER_THICK + 0.01, 0);
    turningSheetGroup.visible = false;
    bookRoot.add(turningSheetGroup);

    const turningFrontMesh = new THREE.Mesh(turningGeo, turnFrontMat);
    turningFrontMesh.castShadow = true;
    turningFrontMesh.receiveShadow = true;
    turningSheetGroup.add(turningFrontMesh);

    const turningBackMesh = new THREE.Mesh(turningBackGeo, turnBackMat);
    turningBackMesh.castShadow = true;
    turningBackMesh.receiveShadow = true;
    turningSheetGroup.add(turningBackMesh);

    // Texture Cache for rapid spread transitions
    const pageTexCache = new Map<string, THREE.CanvasTexture>();

    const getCachedPageTex = async (pageNum: number): Promise<THREE.CanvasTexture> => {
      if (pageNum <= 0) return endpaperTex;
      if (pageNum > 69) return endpaperTex;
      const l = stateRef.current.layout;
      const bm = bookmarks.find((b) => b.pageNumber === pageNum);
      const key = `${pageNum}_${l.renderMode}_${l.fontFamily}_${l.fontSizeScale}_${l.lineHeightScale}_${l.marginScale}_${l.columns}_${l.paperTone}_${bm?.id || ''}_${bm?.color || ''}`;
      if (pageTexCache.has(key)) {
        return pageTexCache.get(key)!;
      }
      const tex = await renderPageTexture(pageNum, l, bm, maxAnisotropy);
      pageTexCache.set(key, tex);
      return tex;
    };

    let lastRenderedBaseSpread = -1;
    let textureUpdateCounter = 0;

    const syncSpreadTextures = async (baseSpread: number, force = false) => {
      if (baseSpread === lastRenderedBaseSpread && !force) return;
      lastRenderedBaseSpread = baseSpread;
      const token = ++textureUpdateCounter;

      const clamped = Math.max(1, Math.min(TOTAL_SPREADS, baseSpread));
      const leftPageNum = clamped * 2 - 2; // 0 (endpaper), 2, 4, ..., 68
      const rightPageNum = clamped * 2 - 1; // 1, 3, ..., 69
      const nextLeftPageNum = (clamped + 1) * 2 - 2;
      const nextRightPageNum = (clamped + 1) * 2 - 1;

      const [leftTex, rightTex, nextLeftTex, nextRightTex] = await Promise.all([
        getCachedPageTex(leftPageNum),
        getCachedPageTex(rightPageNum),
        getCachedPageTex(nextLeftPageNum),
        getCachedPageTex(nextRightPageNum),
      ]);

      if (token !== textureUpdateCounter) return;

      // Update static stacks and turning sheet materials depending on whether mid-turn
      const vs = stateRef.current.visualSpread;
      const frac = vs - Math.floor(vs);

      if (frac > 0.005 && Math.floor(vs) >= 1 && Math.floor(vs) < TOTAL_SPREADS) {
        // Currently turning between spread k and k+1:
        // Static left shows spread k's left page; Static right shows spread k+1's right page;
        // Turning sheet front shows spread k's right page; Turning sheet back shows spread k+1's left page!
        leftPageTopMat.map = leftTex;
        leftPageTopMat.needsUpdate = true;

        rightPageTopMat.map = nextRightTex;
        rightPageTopMat.needsUpdate = true;

        turnFrontMat.map = rightTex;
        turnFrontMat.needsUpdate = true;

        turnBackMat.map = nextLeftTex;
        turnBackMat.needsUpdate = true;
      } else {
        leftPageTopMat.map = leftTex;
        leftPageTopMat.needsUpdate = true;

        rightPageTopMat.map = rightTex;
        rightPageTopMat.needsUpdate = true;

        turnFrontMat.map = rightTex;
        turnFrontMat.needsUpdate = true;

        turnBackMat.map = nextLeftTex;
        turnBackMat.needsUpdate = true;
      }

      requestRenderRef.current();
    };

    updateTexturesRef.current = () => {
      const base = Math.max(1, Math.min(TOTAL_SPREADS, Math.floor(stateRef.current.visualSpread)));
      syncSpreadTextures(base, true);
    };

    syncSpreadTextures(Math.max(1, stateRef.current.spreadIndex), true);

    // 5. Touch & Pointer Gesture Handling (Drag to Curl Page + Click Edge to Flip)
    const domEl = renderer.domElement;

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0 && e.pointerType === 'mouse') return;
      const rect = domEl.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      // Check if pointer is inside the central book interaction region
      if (Math.abs(nx) < 0.72 && Math.abs(ny) < 0.78) {
        const cur = stateRef.current.targetSpread;
        // Dragging from right side -> turn forward; dragging from left side -> turn backward
        if (nx > 0.08 && cur < 36) {
          stateRef.current.isDraggingPage = true;
          stateRef.current.dragDirection = 1;
          stateRef.current.dragStartX = e.clientX;
          stateRef.current.dragStartY = e.clientY;
          stateRef.current.dragProgress = 0;
          stateRef.current.cornerBiasY = Math.max(-1, Math.min(1, ny * 1.4));
          controls.enabled = false;
        } else if (nx < -0.08 && cur > 0) {
          stateRef.current.isDraggingPage = true;
          stateRef.current.dragDirection = -1;
          stateRef.current.dragStartX = e.clientX;
          stateRef.current.dragStartY = e.clientY;
          stateRef.current.dragProgress = 0;
          stateRef.current.cornerBiasY = Math.max(-1, Math.min(1, ny * 1.4));
          controls.enabled = false;
        }
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!stateRef.current.isDraggingPage) return;
      const rect = domEl.getBoundingClientRect();
      const dx = e.clientX - stateRef.current.dragStartX;
      const dy = e.clientY - stateRef.current.dragStartY;
      const dragSpan = rect.width * 0.38;

      if (stateRef.current.dragDirection === 1) {
        const p = Math.max(0, Math.min(0.98, -dx / dragSpan));
        stateRef.current.dragProgress = p;
        stateRef.current.visualSpread = stateRef.current.targetSpread + p;
      } else if (stateRef.current.dragDirection === -1) {
        const p = Math.max(0, Math.min(0.98, dx / dragSpan));
        stateRef.current.dragProgress = p;
        stateRef.current.visualSpread = stateRef.current.targetSpread - p;
      }

      stateRef.current.cornerBiasY = Math.max(-1, Math.min(1, stateRef.current.cornerBiasY - dy * 0.002));
      requestRenderRef.current();
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!stateRef.current.isDraggingPage) return;
      const dx = e.clientX - stateRef.current.dragStartX;
      const dy = e.clientY - stateRef.current.dragStartY;
      const dist = Math.hypot(dx, dy);
      const p = stateRef.current.dragProgress;
      const dir = stateRef.current.dragDirection;
      const cur = stateRef.current.targetSpread;

      stateRef.current.isDraggingPage = false;
      stateRef.current.dragDirection = 0;
      controls.enabled = true;

      // Tap on edge OR drag past 22% threshold completes the turn
      if (dist < 8) {
        const rect = domEl.getBoundingClientRect();
        const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        if (nx > 0.22 && cur < 36) {
          onSpreadChange(cur + 1);
        } else if (nx < -0.22 && cur > 0) {
          onSpreadChange(cur - 1);
        }
      } else if (p > 0.22) {
        const next = Math.max(0, Math.min(36, cur + dir));
        onSpreadChange(next);
      }
      requestRenderRef.current();
    };

    domEl.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // 6. On-Demand + Software-WebGL Paced Render Loop
    let frameId = 0;
    let renderBusy = false;
    let renderDirty = false;
    let lastTime = performance.now();

    function afterDraw(cb: () => void) {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
      gl.flush();
      const poll = () => {
        const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (state === gl.UNSIGNALED) {
          frameId = window.setTimeout(poll, 5);
        } else {
          if (sync) gl.deleteSync(sync);
          frameId = window.setTimeout(cb, 80);
        }
      };
      frameId = window.setTimeout(poll, 5);
    }

    function updateSceneKinematics(dt: number) {
      let needsMoreFrames = false;

      // 1. Update lighting smoothly
      const l = stateRef.current.lighting;
      _keyColor.copy(_coolColor).lerp(_warmColor, l.warmth);
      keyLight.color.copy(_keyColor);
      keyLight.intensity = l.intensity * 1.35;

      const rad = THREE.MathUtils.degToRad(l.lightAngle);
      keyLight.position.set(Math.sin(rad) * 5.5, 7.2, Math.cos(rad) * 4.5);

      deskLampLight.intensity = l.deskLampOn ? l.intensity * 1.45 : 0;
      lampShadeMat.emissiveIntensity = l.deskLampOn ? 0.45 * l.intensity : 0.02;

      // 2. Smoothly damp visualSpread toward targetSpread when not actively dragging
      if (!stateRef.current.isDraggingPage) {
        const diff = stateRef.current.targetSpread - stateRef.current.visualSpread;
        if (Math.abs(diff) > 0.0015) {
          stateRef.current.visualSpread = THREE.MathUtils.damp(
            stateRef.current.visualSpread,
            stateRef.current.targetSpread,
            8.5,
            dt
          );
          needsMoreFrames = true;
        } else {
          stateRef.current.visualSpread = stateRef.current.targetSpread;
        }
        stateRef.current.cornerBiasY = THREE.MathUtils.damp(stateRef.current.cornerBiasY, 0, 8, dt);
      } else {
        needsMoreFrames = true;
      }

      const vs = stateRef.current.visualSpread;

      // 3. Position & rotate hardcover boards, spine, page stacks, and turning sheet
      if (vs <= 1) {
        // Opening/Closing Front Cover (vs in [0, 1])
        const openT = Math.max(0, Math.min(1, vs));
        // When closed (openT=0), shift book left by -COVER_W/2 so cover is centered at X=0
        bookRoot.position.x = THREE.MathUtils.lerp(-COVER_W * 0.48, 0, openT);
        frontCoverPivot.rotation.z = THREE.MathUtils.lerp(0, Math.PI * 0.985, openT);
        backCoverPivot.rotation.z = 0;

        leftStackMesh.visible = openT > 0.15;
        leftStackMesh.scale.y = 0.02;
        rightStackMesh.visible = true;
        rightStackMesh.scale.y = MAX_STACK_THICK;
        turningSheetGroup.visible = false;
      } else if (vs >= TOTAL_SPREADS) {
        // Closing onto Back Cover (vs in [35, 36])
        const closeT = Math.max(0, Math.min(1, vs - TOTAL_SPREADS));
        bookRoot.position.x = THREE.MathUtils.lerp(0, COVER_W * 0.48, closeT);
        frontCoverPivot.rotation.z = Math.PI * 0.985;
        backCoverPivot.rotation.z = THREE.MathUtils.lerp(0, Math.PI * 0.985, closeT);

        leftStackMesh.visible = closeT < 0.85;
        leftStackMesh.scale.y = MAX_STACK_THICK * (1 - closeT * 0.5);
        rightStackMesh.visible = closeT < 0.85;
        rightStackMesh.scale.y = 0.02;
        turningSheetGroup.visible = false;
      } else {
        // Open Book Interior Spreads (1 <= vs < 35)
        bookRoot.position.x = 0;
        frontCoverPivot.rotation.z = Math.PI * 0.985;
        backCoverPivot.rotation.z = 0;

        const baseSpread = Math.floor(vs);
        const turnFrac = vs - baseSpread;

        if (baseSpread !== lastRenderedBaseSpread) {
          syncSpreadTextures(baseSpread, true);
        }

        const leftRatio = Math.max(0.04, (vs - 1) / (TOTAL_SPREADS - 1));
        const rightRatio = Math.max(0.04, 1 - leftRatio);

        leftStackMesh.visible = true;
        leftStackMesh.scale.y = MAX_STACK_THICK * leftRatio;

        rightStackMesh.visible = true;
        rightStackMesh.scale.y = MAX_STACK_THICK * rightRatio;

        if (turnFrac > 0.004) {
          turningSheetGroup.visible = true;
          const sheetY =
            COVER_THICK * 0.5 +
            Math.max(leftStackMesh.scale.y, rightStackMesh.scale.y) +
            0.015;
          turningSheetGroup.position.y = sheetY;
          deformTurningPage(turningGeo, turnFrac, stateRef.current.cornerBiasY);
          deformTurningPage(turningBackGeo, turnFrac, stateRef.current.cornerBiasY);
        } else {
          turningSheetGroup.visible = false;
        }
      }

      // 4. Smooth Camera Presets (unless user is actively orbiting)
      if (!stateRef.current.userInteractingWithOrbit) {
        const preset = stateRef.current.cameraPreset;
        if (preset === 'reading') {
          _targetCamPos.set(0, 6.45, 2.35);
          _targetLookAt.set(0, 0.1, 0.05);
        } else if (preset === 'perspective') {
          _targetCamPos.set(0.35, 5.2, 5.1);
          _targetLookAt.set(0, 0.1, 0.15);
        } else if (preset === 'cover') {
          _targetCamPos.set(-0.2, 5.1, 4.2);
          _targetLookAt.set(0, 0.15, 0);
        } else {
          // closeup
          _targetCamPos.set(0, 4.35, 1.45);
          _targetLookAt.set(0, 0.15, 0);
        }

        if (camera.position.distanceToSquared(_targetCamPos) > 0.0005) {
          camera.position.x = THREE.MathUtils.damp(camera.position.x, _targetCamPos.x, 5.5, dt);
          camera.position.y = THREE.MathUtils.damp(camera.position.y, _targetCamPos.y, 5.5, dt);
          camera.position.z = THREE.MathUtils.damp(camera.position.z, _targetCamPos.z, 5.5, dt);
          controls.target.lerp(_targetLookAt, 1 - Math.exp(-6 * dt));
          needsMoreFrames = true;
        }
      }

      controls.update();
      return needsMoreFrames;
    }

    function requestRender() {
      if (renderBusy) {
        renderDirty = true;
        return;
      }
      renderBusy = true;
      frameId = requestAnimationFrame((now) => {
        renderDirty = false;
        const dt = Math.min(0.1, (now - lastTime) / 1000 || 0.016);
        lastTime = now;

        const keepAnimating = updateSceneKinematics(dt);
        renderer.render(scene, camera);

        const done = () => {
          renderBusy = false;
          if (renderDirty || keepAnimating) {
            requestRender();
          }
        };
        if (isSoftwareGl) afterDraw(done);
        else done();
      });
    }

    requestRenderRef.current = requestRender;
    controls.addEventListener('change', requestRender);

    if (!isSoftwareGl) {
      renderer.compile(scene, camera);
    }
    requestRender();

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      requestRender();
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      window.removeEventListener('resize', onResize);
      domEl.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      controls.dispose();
      pageTexCache.forEach((t) => t.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full relative cursor-grab active:cursor-grabbing"
      aria-label="Interactive 3D Codex Viewport — Drag horizontally across the pages or tap page edges to flip"
    />
  );
};
