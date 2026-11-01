import React, { useState } from 'react';
import { Bookmark, BookOpen, Plus, Search, Trash2, X } from 'lucide-react';
import { MANUSCRIPT_PAGES, TABLE_OF_CONTENTS } from '../data/manuscriptData';
import { BookmarkItem } from '../types/book';

interface ContentsBookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: 'toc' | 'bookmarks';
  setActiveTab: (tab: 'toc' | 'bookmarks') => void;
  currentSpread: number;
  onJumpToPage: (pageNumber: number) => void;
  bookmarks: BookmarkItem[];
  onAddBookmark: (pageNumber: number, note: string, color: BookmarkItem['color']) => void;
  onDeleteBookmark: (id: string) => void;
}

const RIBBON_COLORS: { value: BookmarkItem['color']; label: string }[] = [
  { value: '#d97706', label: 'Amber Gold' },
  { value: '#dc2626', label: 'Crimson Silk' },
  { value: '#059669', label: 'Archival Emerald' },
  { value: '#2563eb', label: 'Royal Sapphire' },
];

export const ContentsBookmarksDrawer: React.FC<ContentsBookmarksDrawerProps> = ({
  isOpen,
  onClose,
  activeTab,
  setActiveTab,
  currentSpread,
  onJumpToPage,
  bookmarks,
  onAddBookmark,
  onDeleteBookmark,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [newNote, setNewNote] = useState('');
  const [selectedColor, setSelectedColor] = useState<BookmarkItem['color']>('#d97706');

  if (!isOpen) return null;

  const currentRightPage = Math.max(1, Math.min(69, currentSpread === 0 ? 1 : currentSpread * 2 - 1));

  const filteredToc = TABLE_OF_CONTENTS.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.part.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Full-text manuscript search when query >= 2 chars
  const matchingPages =
    searchQuery.trim().length >= 2
      ? MANUSCRIPT_PAGES.filter((p) =>
          p.blocks.some(
            (b) =>
              b.text?.toLowerCase().includes(searchQuery.toLowerCase()) ||
              b.caption?.toLowerCase().includes(searchQuery.toLowerCase()) ||
              b.items?.some((it) => it.toLowerCase().includes(searchQuery.toLowerCase()))
          )
        )
      : [];

  const handleCreateBookmark = (e: React.FormEvent) => {
    e.preventDefault();
    onAddBookmark(currentRightPage, newNote.trim() || `Notes on Page ${currentRightPage}`, selectedColor);
    setNewNote('');
  };

  return (
    <div
      className="fixed inset-0 z-40 flex justify-end"
      style={{ backgroundColor: 'rgba(10, 9, 8, 0.72)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md h-full bg-[#151311] border-l border-stone-800 flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-800">
          <div className="flex items-center gap-1 p-1 bg-stone-900 rounded-lg border border-stone-800">
            <button
              onClick={() => setActiveTab('toc')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'toc'
                  ? 'bg-amber-600 text-white'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Table of Contents</span>
            </button>
            <button
              onClick={() => setActiveTab('bookmarks')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'bookmarks'
                  ? 'bg-amber-600 text-white'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Bookmarks ({bookmarks.length})</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white bg-stone-800/80 hover:bg-stone-700 rounded-lg transition-colors"
            aria-label="Close Drawer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {activeTab === 'toc' ? (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Search input */}
            <div className="p-4 border-b border-stone-800/80">
              <div className="relative">
                <Search className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search chapters, equations, or terms..."
                  className="w-full pl-9 pr-3 py-2 text-xs bg-stone-900 border border-stone-800 rounded-lg text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-1.5">
              {filteredToc.map((entry) => {
                const isCurrent =
                  Math.ceil((entry.pageNumber + 1) / 2) === currentSpread;
                return (
                  <button
                    key={entry.id}
                    onClick={() => {
                      onJumpToPage(entry.pageNumber);
                      onClose();
                    }}
                    className={`w-full text-left px-3.5 py-2.5 rounded-lg border transition-colors flex items-center justify-between gap-3 ${
                      isCurrent
                        ? 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                        : 'bg-stone-900/50 border-stone-800/60 text-stone-300 hover:bg-stone-800/80 hover:text-white'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono-code text-stone-500">
                        {entry.part}
                      </div>
                      <div className="text-xs font-medium truncate">{entry.title}</div>
                    </div>
                    <span className="text-xs font-mono-code text-amber-400 shrink-0">
                      p. {entry.pageNumber}
                    </span>
                  </button>
                );
              })}

              {matchingPages.length > 0 && (
                <div className="pt-4 mt-4 border-t border-stone-800">
                  <div className="text-xs font-mono-code text-amber-400 mb-2">
                    Full-Text Matches ({matchingPages.length} pages)
                  </div>
                  <div className="space-y-1.5">
                    {matchingPages.map((mp) => (
                      <button
                        key={mp.pageNumber}
                        onClick={() => {
                          onJumpToPage(mp.pageNumber);
                          onClose();
                        }}
                        className="w-full text-left px-3.5 py-2 rounded-lg bg-stone-900 border border-stone-800 hover:border-amber-500/40 text-xs text-stone-300 flex items-center justify-between"
                      >
                        <span className="truncate">{mp.chapterTitle}</span>
                        <span className="font-mono-code text-amber-400 shrink-0 ml-2">
                          Page {mp.pageNumber}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Add bookmark form for current page */}
            <form onSubmit={handleCreateBookmark} className="p-4 border-b border-stone-800 space-y-3 bg-stone-900/40">
              <div className="flex items-center justify-between text-xs text-stone-300">
                <span className="font-medium">Add 3D Ribbon Bookmark</span>
                <span className="font-mono-code text-amber-400">Target: Page {currentRightPage}</span>
              </div>

              <input
                type="text"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Annotation or research note for this page..."
                className="w-full px-3 py-2 text-xs bg-stone-900 border border-stone-800 rounded-lg text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-amber-500"
              />

              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  {RIBBON_COLORS.map((rc) => (
                    <button
                      key={rc.value}
                      type="button"
                      onClick={() => setSelectedColor(rc.value)}
                      className={`w-6 h-6 rounded-md border transition-transform ${
                        selectedColor === rc.value
                          ? 'scale-110 border-white'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                      style={{ backgroundColor: rc.value }}
                      title={rc.label}
                    />
                  ))}
                </div>

                <button
                  type="submit"
                  className="px-3.5 py-1.5 text-xs font-medium bg-amber-600 hover:bg-amber-500 text-white rounded-lg flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Save Ribbon</span>
                </button>
              </div>
            </form>

            {/* Saved Bookmarks list */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
              {bookmarks.length === 0 ? (
                <div className="text-center py-12 px-4">
                  <Bookmark className="w-8 h-8 text-stone-600 mx-auto mb-2" />
                  <p className="text-xs text-stone-400">
                    No bookmarks saved yet. Place a ribbon on any page to spawn a physical 3D silk marker on the codex.
                  </p>
                </div>
              ) : (
                bookmarks.map((bm) => (
                  <div
                    key={bm.id}
                    className="p-3.5 rounded-lg bg-stone-900/80 border border-stone-800 hover:border-stone-700 flex items-start justify-between gap-3"
                  >
                    <button
                      onClick={() => {
                        onJumpToPage(bm.pageNumber);
                        onClose();
                      }}
                      className="text-left flex-1 min-w-0"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono-code text-stone-400 mb-1">
                        <span
                          className="inline-block w-2.5 h-2.5 rounded-sm shrink-0"
                          style={{ backgroundColor: bm.color }}
                        />
                        <span className="text-amber-400 font-semibold">Page {bm.pageNumber}</span>
                        <span aria-hidden="true">·</span>
                        <span className="truncate">{bm.title}</span>
                      </div>
                      <p className="text-xs text-stone-200 line-clamp-2">{bm.note}</p>
                    </button>

                    <button
                      onClick={() => onDeleteBookmark(bm.id)}
                      className="p-1.5 text-stone-500 hover:text-red-400 rounded transition-colors shrink-0"
                      title="Remove Bookmark"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
