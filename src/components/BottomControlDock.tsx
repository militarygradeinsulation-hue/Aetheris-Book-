import React, { useState } from 'react';
import {
  Bookmark,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Compass,
  Flame,
  CloudRain,
  Radio,
  Sun,
  Type,
  Volume2,
  VolumeX,
  BookOpen,
} from 'lucide-react';
import {
  AmbientAudioSettings,
  BookmarkItem,
  CameraPresetId,
  LightingPresetId,
  LightingSettings,
  TextLayoutSettings,
} from '../types/book';
import { MANUSCRIPT_PAGES, TABLE_OF_CONTENTS } from '../data/manuscriptData';

interface BottomControlDockProps {
  spreadIndex: number;
  onSpreadChange: (newSpread: number) => void;
  layoutSettings: TextLayoutSettings;
  onLayoutChange: (next: TextLayoutSettings) => void;
  lightingSettings: LightingSettings;
  onLightingChange: (next: LightingSettings) => void;
  cameraPreset: CameraPresetId;
  onCameraPresetChange: (preset: CameraPresetId) => void;
  audioSettings: AmbientAudioSettings;
  onAudioChange: (next: AmbientAudioSettings) => void;
  bookmarks: BookmarkItem[];
  onToggleBookmark: (pageNumber: number) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

type DockTab = 'pages' | 'typography' | 'lighting' | 'audio';

export const BottomControlDock: React.FC<BottomControlDockProps> = ({
  spreadIndex,
  onSpreadChange,
  layoutSettings,
  onLayoutChange,
  lightingSettings,
  onLightingChange,
  cameraPreset,
  onCameraPresetChange,
  audioSettings,
  onAudioChange,
  bookmarks,
  onToggleBookmark,
  isCollapsed,
  onToggleCollapse,
}) => {
  const [activeTab, setActiveTab] = useState<DockTab>('pages');

  const currentRightPage =
    spreadIndex <= 0 ? 1 : spreadIndex >= 36 ? 69 : Math.min(69, spreadIndex * 2 - 1);
  const currentLeftPage =
    spreadIndex <= 1 ? null : spreadIndex >= 36 ? 68 : spreadIndex * 2 - 2;

  const isCurrentBookmarked = bookmarks.some(
    (b) => b.pageNumber === currentRightPage || (currentLeftPage && b.pageNumber === currentLeftPage)
  );

  const currentPageData = MANUSCRIPT_PAGES[currentRightPage - 1];

  const applyLightingPreset = (preset: LightingPresetId) => {
    if (preset === 'study') {
      onLightingChange({
        ...lightingSettings,
        preset: 'study',
        intensity: 1.35,
        warmth: 0.78,
        lightAngle: 28,
        deskLampOn: true,
      });
    } else if (preset === 'daylight') {
      onLightingChange({
        ...lightingSettings,
        preset: 'daylight',
        intensity: 1.65,
        warmth: 0.22,
        lightAngle: 15,
        deskLampOn: false,
      });
    } else if (preset === 'fireside') {
      onLightingChange({
        ...lightingSettings,
        preset: 'fireside',
        intensity: 1.2,
        warmth: 0.96,
        lightAngle: -35,
        deskLampOn: true,
      });
    } else {
      onLightingChange({
        ...lightingSettings,
        preset: 'moonlight',
        intensity: 0.95,
        warmth: 0.05,
        lightAngle: -20,
        deskLampOn: false,
      });
    }
  };

  return (
    <div
      className="fixed z-30 transition-transform duration-200"
      style={{
        bottom: '18px',
        left: '50%',
        transform: `translateX(-50%) translateY(${isCollapsed ? 'calc(100% - 34px)' : '0px'})`,
        width: 'min(920px, 94vw)',
      }}
    >
      {/* Collapse / Expand Zen Mode Toggle Tab */}
      <div className="flex justify-center mb-1.5">
        <button
          onClick={onToggleCollapse}
          className="px-3.5 py-1 text-xs font-mono-code text-stone-300 hover:text-amber-300 bg-[#161412] border border-stone-800 rounded-t-lg shadow-lg flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0"
          title="Toggle Studio Controls (Shortcut: H)"
        >
          {isCollapsed ? (
            <>
              <ChevronUp className="w-3.5 h-3.5 text-amber-400" />
              <span>Show Controls (H)</span>
            </>
          ) : (
            <>
              <ChevronDown className="w-3.5 h-3.5 text-amber-400" />
              <span>Hide Controls (H)</span>
            </>
          )}
        </button>
      </div>

      {/* Main Dock Container (Solid high-contrast dark obsidian surface, no backdrop-filter over WebGL) */}
      <div
        className="rounded-xl border border-stone-800 shadow-2xl p-3.5"
        style={{ backgroundColor: 'rgba(18, 16, 14, 0.96)' }}
      >
        {/* Top Dock Row: Mode Tabs + Quick Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-3 border-b border-stone-800/90">
          <div className="flex items-center gap-1 p-1 bg-[#0c0a09] rounded-lg border border-stone-800/80">
            <button
              onClick={() => setActiveTab('pages')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'pages'
                  ? 'bg-amber-600 text-white'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Pages & Chapters</span>
            </button>

            <button
              onClick={() => setActiveTab('typography')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'typography'
                  ? 'bg-amber-600 text-white'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Type className="w-3.5 h-3.5" />
              <span>Text Layout</span>
            </button>

            <button
              onClick={() => setActiveTab('lighting')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'lighting'
                  ? 'bg-amber-600 text-white'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>3D Lighting & Camera</span>
            </button>

            <button
              onClick={() => setActiveTab('audio')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'audio'
                  ? 'bg-amber-600 text-white'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Ambient Sound</span>
            </button>
          </div>

          {/* Unboxed clean metadata indicator + Quick Bookmark Button */}
          <div className="flex items-center gap-3 text-xs text-stone-400">
            <span className="font-mono-code text-stone-300 truncate max-w-[260px]">
              {spreadIndex === 0
                ? 'Front Cover · Closed Codex'
                : spreadIndex === 36
                ? 'Back Cover · Synopsis & Colophon'
                : `${currentLeftPage ? `pp. ${currentLeftPage}–${currentRightPage}` : `p. ${currentRightPage}`} · ${currentPageData?.chapterTitle || ''}`}
            </span>

            {spreadIndex >= 1 && spreadIndex <= 35 && (
              <button
                onClick={() => onToggleBookmark(currentRightPage)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1 transition-colors whitespace-nowrap shrink-0 ${
                  isCurrentBookmarked
                    ? 'bg-amber-600 text-white'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
                title="Bookmark current page"
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>{isCurrentBookmarked ? 'Bookmarked' : 'Bookmark Page'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Active Tab Controls */}
        {activeTab === 'pages' && (
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Turn Buttons */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => onSpreadChange(0)}
                disabled={spreadIndex === 0}
                className="px-2.5 py-1.5 text-xs font-medium bg-stone-800 hover:bg-stone-700 disabled:opacity-40 text-stone-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Cover
              </button>
              <button
                onClick={() => onSpreadChange(Math.max(0, spreadIndex - 1))}
                disabled={spreadIndex <= 0}
                className="px-3 py-1.5 text-xs font-medium bg-stone-800 hover:bg-stone-700 disabled:opacity-40 text-stone-100 rounded-lg flex items-center gap-1 transition-colors whitespace-nowrap shrink-0"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </button>
              <button
                onClick={() => onSpreadChange(Math.min(36, spreadIndex + 1))}
                disabled={spreadIndex >= 36}
                className="px-3 py-1.5 text-xs font-medium bg-amber-600 hover:bg-amber-500 disabled:opacity-40 text-white rounded-lg flex items-center gap-1 transition-colors whitespace-nowrap shrink-0"
              >
                <span>Turn Page</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Spread Scrubber Slider */}
            <div className="flex-1 min-w-[180px] flex items-center gap-3">
              <span className="text-[11px] font-mono-code text-stone-400 whitespace-nowrap">
                Spread {spreadIndex}/36
              </span>
              <input
                type="range"
                min={0}
                max={36}
                step={1}
                value={spreadIndex}
                onChange={(e) => onSpreadChange(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-1.5 bg-stone-800 rounded-lg"
                aria-label="Book spread scrubber"
              />
            </div>

            {/* Quick Chapter Jump Dropdown */}
            <div className="shrink-0">
              <select
                value={
                  TABLE_OF_CONTENTS.slice()
                    .reverse()
                    .find((t) => t.pageNumber <= currentRightPage)?.pageNumber || 1
                }
                onChange={(e) => {
                  const p = Number(e.target.value);
                  onSpreadChange(Math.ceil((p + 1) / 2));
                }}
                className="px-3 py-1.5 text-xs bg-stone-900 border border-stone-700 rounded-lg text-stone-200 focus:outline-none focus:border-amber-500 max-w-[230px] truncate"
                aria-label="Jump to chapter"
              >
                {TABLE_OF_CONTENTS.map((entry) => (
                  <option key={entry.id} value={entry.pageNumber}>
                    p.{entry.pageNumber} — {entry.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {activeTab === 'typography' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center text-xs">
            {/* Render Mode & Font Family */}
            <div className="space-y-1.5">
              <div className="text-[11px] text-stone-400 font-mono-code">Page Texture Mode & Typeface</div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => onLayoutChange({ ...layoutSettings, renderMode: 'typeset' })}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                    layoutSettings.renderMode === 'typeset'
                      ? 'bg-amber-600 text-white'
                      : 'bg-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  Reflow Typeset
                </button>
                <button
                  onClick={() => onLayoutChange({ ...layoutSettings, renderMode: 'pdf' })}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                    layoutSettings.renderMode === 'pdf'
                      ? 'bg-amber-600 text-white'
                      : 'bg-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  Original PDF
                </button>
              </div>
              <div className="flex items-center gap-1 pt-0.5">
                {(['serif', 'sans', 'mono'] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => onLayoutChange({ ...layoutSettings, fontFamily: f, renderMode: 'typeset' })}
                    className={`px-2.5 py-1 rounded text-xs capitalize transition-colors whitespace-nowrap shrink-0 ${
                      layoutSettings.fontFamily === f && layoutSettings.renderMode === 'typeset'
                        ? 'bg-stone-200 text-stone-900 font-semibold'
                        : 'bg-stone-800/80 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Font Size & Line Spacing */}
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-[11px] text-stone-400 font-mono-code mb-0.5">
                  <span>Text Size Scale</span>
                  <span>{Math.round(layoutSettings.fontSizeScale * 100)}%</span>
                </div>
                <input
                  type="range"
                  min={0.8}
                  max={1.25}
                  step={0.05}
                  value={layoutSettings.fontSizeScale}
                  onChange={(e) =>
                    onLayoutChange({
                      ...layoutSettings,
                      renderMode: 'typeset',
                      fontSizeScale: Number(e.target.value),
                    })
                  }
                  className="w-full accent-amber-500 h-1.5 bg-stone-800 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-stone-400 font-mono-code mb-0.5">
                  <span>Line Spacing</span>
                  <span>{layoutSettings.lineHeightScale.toFixed(2)}x</span>
                </div>
                <input
                  type="range"
                  min={1.25}
                  max={1.75}
                  step={0.05}
                  value={layoutSettings.lineHeightScale}
                  onChange={(e) =>
                    onLayoutChange({
                      ...layoutSettings,
                      renderMode: 'typeset',
                      lineHeightScale: Number(e.target.value),
                    })
                  }
                  className="w-full accent-amber-500 h-1.5 bg-stone-800 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Margins & Columns */}
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-[11px] text-stone-400 font-mono-code mb-0.5">
                  <span>Page Margins</span>
                  <span>{Math.round(layoutSettings.marginScale * 100)}%</span>
                </div>
                <input
                  type="range"
                  min={0.75}
                  max={1.3}
                  step={0.05}
                  value={layoutSettings.marginScale}
                  onChange={(e) =>
                    onLayoutChange({
                      ...layoutSettings,
                      renderMode: 'typeset',
                      marginScale: Number(e.target.value),
                    })
                  }
                  className="w-full accent-amber-500 h-1.5 bg-stone-800 rounded-lg cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between pt-0.5">
                <span className="text-[11px] text-stone-400 font-mono-code">Columns</span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onLayoutChange({ ...layoutSettings, renderMode: 'typeset', columns: 1 })}
                    className={`px-2.5 py-1 rounded text-xs whitespace-nowrap shrink-0 ${
                      layoutSettings.columns === 1
                        ? 'bg-amber-600 text-white'
                        : 'bg-stone-800 text-stone-400'
                    }`}
                  >
                    1-Column
                  </button>
                  <button
                    onClick={() => onLayoutChange({ ...layoutSettings, renderMode: 'typeset', columns: 2 })}
                    className={`px-2.5 py-1 rounded text-xs whitespace-nowrap shrink-0 ${
                      layoutSettings.columns === 2
                        ? 'bg-amber-600 text-white'
                        : 'bg-stone-800 text-stone-400'
                    }`}
                  >
                    2-Column
                  </button>
                </div>
              </div>
            </div>

            {/* Paper Stock Tone */}
            <div className="space-y-1.5">
              <div className="text-[11px] text-stone-400 font-mono-code">Archival Paper Stock</div>
              <div className="grid grid-cols-2 gap-1.5">
                {(
                  [
                    { id: 'cream', label: 'Ivory Cream', swatch: '#f7f3e8', text: '#1c1917' },
                    { id: 'white', label: 'Crisp Vellum', swatch: '#fbfbfc', text: '#0f172a' },
                    { id: 'sepia', label: 'Aged Sepia', swatch: '#eadcc3', text: '#291d12' },
                    { id: 'obsidian', label: 'Carbon Dark', swatch: '#1c1c21', text: '#e7e5e4' },
                  ] as const
                ).map((tone) => (
                  <button
                    key={tone.id}
                    onClick={() => onLayoutChange({ ...layoutSettings, paperTone: tone.id })}
                    className={`px-2.5 py-1.5 rounded-md text-xs font-medium border flex items-center gap-1.5 transition-all whitespace-nowrap shrink-0 ${
                      layoutSettings.paperTone === tone.id
                        ? 'border-amber-400 ring-1 ring-amber-400/50'
                        : 'border-stone-700 opacity-80 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: tone.swatch, color: tone.text }}
                  >
                    <span className="truncate">{tone.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'lighting' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center text-xs">
            {/* Lighting Presets */}
            <div className="space-y-1.5">
              <div className="text-[11px] text-stone-400 font-mono-code">Atmosphere Presets</div>
              <div className="grid grid-cols-2 gap-1.5">
                {(
                  [
                    { id: 'study', label: 'Study Lamp' },
                    { id: 'daylight', label: 'Daylight' },
                    { id: 'fireside', label: 'Fireside' },
                    { id: 'moonlight', label: 'Moonlight' },
                  ] as const
                ).map((p) => (
                  <button
                    key={p.id}
                    onClick={() => applyLightingPreset(p.id)}
                    className={`px-2.5 py-1.5 rounded text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                      lightingSettings.preset === p.id
                        ? 'bg-amber-600 text-white'
                        : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Intensity & Color Warmth */}
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-[11px] text-stone-400 font-mono-code mb-0.5">
                  <span>Key Light Intensity</span>
                  <span>{Math.round(lightingSettings.intensity * 100)}%</span>
                </div>
                <input
                  type="range"
                  min={0.35}
                  max={2.1}
                  step={0.05}
                  value={lightingSettings.intensity}
                  onChange={(e) =>
                    onLightingChange({ ...lightingSettings, intensity: Number(e.target.value) })
                  }
                  className="w-full accent-amber-500 h-1.5 bg-stone-800 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-stone-400 font-mono-code mb-0.5">
                  <span>Color Temp (Cool ↔ Warm)</span>
                  <span>{Math.round(2800 + (1 - lightingSettings.warmth) * 3700)}K</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.04}
                  value={lightingSettings.warmth}
                  onChange={(e) =>
                    onLightingChange({ ...lightingSettings, warmth: Number(e.target.value) })
                  }
                  className="w-full accent-amber-500 h-1.5 bg-stone-800 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Light Angle & Desk Lamp */}
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-[11px] text-stone-400 font-mono-code mb-0.5">
                  <span>Light Azimuth Angle</span>
                  <span>{lightingSettings.lightAngle}°</span>
                </div>
                <input
                  type="range"
                  min={-60}
                  max={60}
                  step={2}
                  value={lightingSettings.lightAngle}
                  onChange={(e) =>
                    onLightingChange({ ...lightingSettings, lightAngle: Number(e.target.value) })
                  }
                  className="w-full accent-amber-500 h-1.5 bg-stone-800 rounded-lg cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between pt-0.5">
                <span className="text-[11px] text-stone-400 font-mono-code">Banker’s Desk Lamp</span>
                <button
                  onClick={() =>
                    onLightingChange({ ...lightingSettings, deskLampOn: !lightingSettings.deskLampOn })
                  }
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                    lightingSettings.deskLampOn
                      ? 'bg-amber-600 text-white'
                      : 'bg-stone-800 text-stone-400'
                  }`}
                >
                  {lightingSettings.deskLampOn ? 'Lamp On' : 'Lamp Off'}
                </button>
              </div>
            </div>

            {/* Camera View Presets */}
            <div className="space-y-1.5">
              <div className="text-[11px] text-stone-400 font-mono-code flex items-center gap-1">
                <Compass className="w-3 h-3 text-amber-400" />
                <span>Camera Angles</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {(
                  [
                    { id: 'perspective', label: '3/4 Desk View' },
                    { id: 'reading', label: 'Overhead Read' },
                    { id: 'closeup', label: 'Close-Up Zoom' },
                    { id: 'cover', label: 'Cover Portrait' },
                  ] as const
                ).map((cam) => (
                  <button
                    key={cam.id}
                    onClick={() => onCameraPresetChange(cam.id)}
                    className={`px-2.5 py-1.5 rounded text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                      cameraPreset === cam.id
                        ? 'bg-stone-200 text-stone-900 font-semibold'
                        : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                    }`}
                  >
                    {cam.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'audio' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center text-xs">
            {/* Master & Foley Controls */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    onAudioChange({ ...audioSettings, masterMuted: !audioSettings.masterMuted })
                  }
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 ${
                    audioSettings.masterMuted
                      ? 'bg-red-900/60 text-red-200 border border-red-700/50'
                      : 'bg-stone-800 text-stone-200 hover:bg-stone-700'
                  }`}
                >
                  {audioSettings.masterMuted ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5" />
                      <span>Muted</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>Audio Active</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() =>
                    onAudioChange({ ...audioSettings, pageTurnSound: !audioSettings.pageTurnSound })
                  }
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                    audioSettings.pageTurnSound
                      ? 'bg-amber-600 text-white'
                      : 'bg-stone-800 text-stone-400'
                  }`}
                >
                  Page Foley: {audioSettings.pageTurnSound ? 'On' : 'Off'}
                </button>
              </div>
            </div>

            {/* Hearth Fire Ambience */}
            <div>
              <div className="flex items-center justify-between text-[11px] text-stone-300 font-mono-code mb-1">
                <span className="flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  <span>Study Hearth Fire</span>
                </span>
                <span>{Math.round(audioSettings.hearthVolume * 100)}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={audioSettings.hearthVolume}
                onChange={(e) =>
                  onAudioChange({
                    ...audioSettings,
                    masterMuted: false,
                    hearthVolume: Number(e.target.value),
                  })
                }
                className="w-full accent-amber-500 h-1.5 bg-stone-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Rain on Conservatory Glass */}
            <div>
              <div className="flex items-center justify-between text-[11px] text-stone-300 font-mono-code mb-1">
                <span className="flex items-center gap-1">
                  <CloudRain className="w-3.5 h-3.5 text-sky-400" />
                  <span>Rain on Study Glass</span>
                </span>
                <span>{Math.round(audioSettings.rainVolume * 100)}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={audioSettings.rainVolume}
                onChange={(e) =>
                  onAudioChange({
                    ...audioSettings,
                    masterMuted: false,
                    rainVolume: Number(e.target.value),
                  })
                }
                className="w-full accent-amber-500 h-1.5 bg-stone-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Deep Archive Room Tone */}
            <div>
              <div className="flex items-center justify-between text-[11px] text-stone-300 font-mono-code mb-1">
                <span className="flex items-center gap-1">
                  <Radio className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Archive Focus Tone</span>
                </span>
                <span>{Math.round(audioSettings.archiveDroneVolume * 100)}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={audioSettings.archiveDroneVolume}
                onChange={(e) =>
                  onAudioChange({
                    ...audioSettings,
                    masterMuted: false,
                    archiveDroneVolume: Number(e.target.value),
                  })
                }
                className="w-full accent-amber-500 h-1.5 bg-stone-800 rounded-lg cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
