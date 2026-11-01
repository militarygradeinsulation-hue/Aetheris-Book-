import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BookScene } from './three/BookScene';
import { BottomControlDock } from './components/BottomControlDock';
import { ContentsBookmarksDrawer } from './components/ContentsBookmarksDrawer';
import { ReaderInspectorModal } from './components/ReaderInspectorModal';
import { soundEngine } from './audio/soundEngine';
import { MANUSCRIPT_PAGES } from './data/manuscriptData';
import {
  AmbientAudioSettings,
  BookmarkItem,
  CameraPresetId,
  LightingSettings,
  TextLayoutSettings,
} from './types/book';

const DEFAULT_BOOKMARKS: BookmarkItem[] = [
  {
    id: 'bm-p1',
    pageNumber: 1,
    title: 'Title & Evidence Classification',
    note: 'Core AIFM thesis & five-system investigative scope by Joseph Toney.',
    color: '#d97706',
    createdAt: '2026-11-01',
  },
  {
    id: 'bm-p16',
    pageNumber: 16,
    title: '8. The Seven-Phase Forensic Operating Protocol',
    note: 'Identify -> Baseline -> Trace -> Human Layer -> Price -> Correct -> Verify.',
    color: '#dc2626',
    createdAt: '2026-11-01',
  },
  {
    id: 'bm-p38',
    pageNumber: 38,
    title: 'Part II. Ask Intros Relationship Intervention Layer',
    note: 'Diagnose -> Map -> Score -> Connect -> Compound execution loop.',
    color: '#059669',
    createdAt: '2026-11-01',
  },
];

const STORAGE_KEY_BOOKMARKS = 'aetheris_codex_bookmarks_v1';

export default function App() {
  // spreadIndex: 0 = Closed Front Cover, 1..35 = Open Interior Spreads (Pages 1..69), 36 = Closed Back Cover
  const [spreadIndex, setSpreadIndex] = useState<number>(0);
  const [cameraPreset, setCameraPreset] = useState<CameraPresetId>('perspective');
  const [isDockCollapsed, setIsDockCollapsed] = useState<boolean>(false);

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [drawerTab, setDrawerTab] = useState<'toc' | 'bookmarks'>('toc');
  const [inspectorOpen, setInspectorOpen] = useState<boolean>(false);

  const [layoutSettings, setLayoutSettings] = useState<TextLayoutSettings>({
    renderMode: 'typeset',
    fontFamily: 'serif',
    fontSizeScale: 1.0,
    lineHeightScale: 1.45,
    marginScale: 1.0,
    columns: 1,
    paperTone: 'cream',
    showAnnotations: true,
  });

  const [lightingSettings, setLightingSettings] = useState<LightingSettings>({
    preset: 'study',
    intensity: 1.35,
    warmth: 0.78,
    lightAngle: 28,
    shadowsEnabled: true,
    deskLampOn: true,
  });

  const [audioSettings, setAudioSettings] = useState<AmbientAudioSettings>({
    masterMuted: false,
    masterVolume: 0.75,
    pageTurnSound: true,
    hearthVolume: 0,
    rainVolume: 0,
    archiveDroneVolume: 0,
  });

  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // ignore storage error
    }
    return DEFAULT_BOOKMARKS;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(bookmarks));
    } catch {
      // ignore storage error
    }
  }, [bookmarks]);

  const handleAudioChange = (next: AmbientAudioSettings) => {
    setAudioSettings(next);
    soundEngine.updateSettings(next);
  };

  const handleJumpToPage = (pageNumber: number) => {
    const clampedPage = Math.max(1, Math.min(69, pageNumber));
    const targetSpread = Math.ceil((clampedPage + 1) / 2);
    setSpreadIndex(targetSpread);
    if (cameraPreset === 'cover') {
      setCameraPreset('reading');
    }
  };

  const handleToggleBookmark = (pageNumber: number) => {
    soundEngine.playBookmarkRibbon();
    setBookmarks((prev) => {
      const exists = prev.some((b) => b.pageNumber === pageNumber);
      if (exists) {
        return prev.filter((b) => b.pageNumber !== pageNumber);
      }
      const pageMeta = MANUSCRIPT_PAGES[pageNumber - 1];
      const newBm: BookmarkItem = {
        id: `bm-${Date.now()}`,
        pageNumber,
        title: pageMeta?.chapterTitle || `Page ${pageNumber}`,
        note: `Bookmarked from ${pageMeta?.partLabel || 'Codex'} (Page ${pageNumber})`,
        color: '#d97706',
        createdAt: new Date().toISOString().slice(0, 10),
      };
      return [newBm, ...prev];
    });
  };

  const handleAddBookmarkWithNote = (
    pageNumber: number,
    note: string,
    color: BookmarkItem['color']
  ) => {
    soundEngine.playBookmarkRibbon();
    const pageMeta = MANUSCRIPT_PAGES[pageNumber - 1];
    setBookmarks((prev) => {
      const filtered = prev.filter((b) => b.pageNumber !== pageNumber);
      return [
        {
          id: `bm-${Date.now()}`,
          pageNumber,
          title: pageMeta?.chapterTitle || `Page ${pageNumber}`,
          note,
          color,
          createdAt: new Date().toISOString().slice(0, 10),
        },
        ...filtered,
      ];
    });
  };

  const handleDeleteBookmark = (id: string) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id));
  };

  // Global keyboard shortcuts for effortless reading & inspection
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setSpreadIndex((prev) => Math.min(36, prev + 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setSpreadIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === 'h' || e.key === 'H') {
        e.preventDefault();
        setIsDockCollapsed((prev) => !prev);
      } else if (e.key === 'i' || e.key === 'I') {
        e.preventDefault();
        setInspectorOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0c0a09] text-stone-100 select-none">
      {/* Strict 3-Zone Top Bar Contract */}
      <header
        className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between gap-8 px-6 py-3.5 border-b border-stone-800/80"
        style={{ backgroundColor: 'rgba(14, 12, 10, 0.92)' }}
      >
        {/* Zone 1: Brand Title, single text element */}
        <a
          href="#cover"
          onClick={(e) => {
            e.preventDefault();
            setSpreadIndex(0);
            setCameraPreset('cover');
          }}
          className="text-lg font-display font-bold tracking-tight text-amber-400 whitespace-nowrap shrink-0"
        >
          Aetheris Codex
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-stone-300">
          <a
            href="#cover"
            onClick={(e) => {
              e.preventDefault();
              setSpreadIndex(0);
              setCameraPreset('cover');
            }}
            className="hover:text-amber-300 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Cover
          </a>
          <a
            href="#part-1"
            onClick={(e) => {
              e.preventDefault();
              handleJumpToPage(1);
            }}
            className="hover:text-amber-300 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Part I: Methodology
          </a>
          <a
            href="#part-2"
            onClick={(e) => {
              e.preventDefault();
              handleJumpToPage(38);
            }}
            className="hover:text-amber-300 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Part II: Ask Intros
          </a>
          <a
            href="#contents"
            onClick={(e) => {
              e.preventDefault();
              setDrawerTab('toc');
              setDrawerOpen(true);
            }}
            className="hover:text-amber-300 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Chapters
          </a>
          <a
            href="#bookmarks"
            onClick={(e) => {
              e.preventDefault();
              setDrawerTab('bookmarks');
              setDrawerOpen(true);
            }}
            className="hover:text-amber-300 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Bookmarks ({bookmarks.length})
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center shrink-0">
          <button
            onClick={() => setInspectorOpen(true)}
            className="px-4 py-2 text-xs font-medium text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Inspect Spread
          </button>
        </div>
      </header>

      {/* 100% Unobstructed Central 3D Flipbook Viewport */}
      <main className="w-full h-full relative">
        <BookScene
          spreadIndex={spreadIndex}
          onSpreadChange={setSpreadIndex}
          layoutSettings={layoutSettings}
          lightingSettings={lightingSettings}
          cameraPreset={cameraPreset}
          bookmarks={bookmarks}
        />

        {/* Discreet Edge Page-Turn Affordances */}
        {spreadIndex > 0 && (
          <button
            onClick={() => setSpreadIndex((s) => Math.max(0, s - 1))}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-stone-900/80 hover:bg-amber-600 text-stone-300 hover:text-white border border-stone-700/70 shadow-xl transition-colors"
            aria-label="Turn to previous spread"
            title="Previous Spread (Left Arrow)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {spreadIndex < 36 && (
          <button
            onClick={() => setSpreadIndex((s) => Math.min(36, s + 1))}
            className="fixed right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-stone-900/80 hover:bg-amber-600 text-stone-300 hover:text-white border border-stone-700/70 shadow-xl transition-colors"
            aria-label="Turn to next spread"
            title="Next Spread (Right Arrow)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Quiet Top-Center Gesture Hint when on Cover */}
        {spreadIndex === 0 && (
          <div className="fixed top-16 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center px-4 py-1.5 rounded-lg bg-[#141210]/90 border border-stone-800 text-xs text-stone-300 whitespace-nowrap">
            Drag horizontally across the cover or click <span className="text-amber-400 font-medium">Turn Page</span> to open the 69-page 3D manuscript
          </div>
        )}
      </main>

      {/* Unified Collapsible Bottom Control Dock */}
      <BottomControlDock
        spreadIndex={spreadIndex}
        onSpreadChange={setSpreadIndex}
        layoutSettings={layoutSettings}
        onLayoutChange={setLayoutSettings}
        lightingSettings={lightingSettings}
        onLightingChange={setLightingSettings}
        cameraPreset={cameraPreset}
        onCameraPresetChange={setCameraPreset}
        audioSettings={audioSettings}
        onAudioChange={handleAudioChange}
        bookmarks={bookmarks}
        onToggleBookmark={handleToggleBookmark}
        isCollapsed={isDockCollapsed}
        onToggleCollapse={() => setIsDockCollapsed((c) => !c)}
      />

      {/* Table of Contents & Bookmarks Slide-Over Drawer */}
      <ContentsBookmarksDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeTab={drawerTab}
        setActiveTab={setDrawerTab}
        currentSpread={spreadIndex}
        onJumpToPage={handleJumpToPage}
        bookmarks={bookmarks}
        onAddBookmark={handleAddBookmarkWithNote}
        onDeleteBookmark={handleDeleteBookmark}
      />

      {/* Synchronized Two-Page DOM Text Inspector Modal */}
      <ReaderInspectorModal
        isOpen={inspectorOpen}
        onClose={() => setInspectorOpen(false)}
        spreadIndex={spreadIndex}
        onSpreadChange={setSpreadIndex}
        layoutSettings={layoutSettings}
        bookmarks={bookmarks}
        onToggleBookmark={handleToggleBookmark}
      />
    </div>
  );
}
