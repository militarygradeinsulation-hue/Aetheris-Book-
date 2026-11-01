import React from 'react';
import { Bookmark, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { MANUSCRIPT_PAGES, BOOK_METADATA } from '../data/manuscriptData';
import { BookmarkItem, ManuscriptBlock, ManuscriptPage, TextLayoutSettings } from '../types/book';

interface ReaderInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  spreadIndex: number;
  onSpreadChange: (newSpread: number) => void;
  layoutSettings: TextLayoutSettings;
  bookmarks: BookmarkItem[];
  onToggleBookmark: (pageNumber: number) => void;
}

const PAPER_CLASSES: Record<
  TextLayoutSettings['paperTone'],
  { bg: string; text: string; muted: string; border: string; accent: string; callout: string }
> = {
  cream: {
    bg: 'bg-[#f7f3e8]',
    text: 'text-[#1c1917]',
    muted: 'text-[#57534e]',
    border: 'border-[#d6d0c2]',
    accent: 'text-[#b45309]',
    callout: 'bg-[#efe9d8]',
  },
  white: {
    bg: 'bg-[#fbfbfc]',
    text: 'text-[#0f172a]',
    muted: 'text-[#475569]',
    border: 'border-[#cbd5e1]',
    accent: 'text-[#9a5b13]',
    callout: 'bg-[#f1f5f9]',
  },
  sepia: {
    bg: 'bg-[#eadcc3]',
    text: 'text-[#291d12]',
    muted: 'text-[#654f3a]',
    border: 'border-[#c7b496]',
    accent: 'text-[#8c3b08]',
    callout: 'bg-[#dfd0b4]',
  },
  obsidian: {
    bg: 'bg-[#141417]',
    text: 'text-[#e7e5e4]',
    muted: 'text-[#a8a29e]',
    border: 'border-[#2e2e34]',
    accent: 'text-[#eab308]',
    callout: 'bg-[#1c1c21]',
  },
};

export const ReaderInspectorModal: React.FC<ReaderInspectorModalProps> = ({
  isOpen,
  onClose,
  spreadIndex,
  onSpreadChange,
  layoutSettings,
  bookmarks,
  onToggleBookmark,
}) => {
  if (!isOpen) return null;

  const palette = PAPER_CLASSES[layoutSettings.paperTone];
  const fontClass =
    layoutSettings.fontFamily === 'sans'
      ? 'font-sans-ui'
      : layoutSettings.fontFamily === 'mono'
      ? 'font-mono-code'
      : 'font-display';

  const leftPageNum = spreadIndex >= 1 && spreadIndex <= 35 ? spreadIndex * 2 - 2 : null;
  const rightPageNum = spreadIndex >= 1 && spreadIndex <= 35 ? spreadIndex * 2 - 1 : null;

  const leftPage: ManuscriptPage | null =
    leftPageNum && leftPageNum >= 1 ? MANUSCRIPT_PAGES[leftPageNum - 1] || null : null;
  const rightPage: ManuscriptPage | null =
    rightPageNum && rightPageNum >= 1 ? MANUSCRIPT_PAGES[rightPageNum - 1] || null : null;

  const renderBlock = (block: ManuscriptBlock, idx: number) => {
    const baseRem = 1.02 * layoutSettings.fontSizeScale;
    const lh = layoutSettings.lineHeightScale;

    if (block.type === 'heading1') {
      return (
        <div key={idx} className="mb-4">
          <h2
            className={`font-bold tracking-tight ${palette.text}`}
            style={{ fontSize: `${baseRem * 1.48}rem`, lineHeight: 1.22 }}
          >
            {block.text}
          </h2>
          {block.subtitle && (
            <p className={`mt-1.5 italic ${palette.muted}`} style={{ fontSize: `${baseRem * 1.02}rem` }}>
              {block.subtitle}
            </p>
          )}
        </div>
      );
    }

    if (block.type === 'heading2') {
      return (
        <h3
          key={idx}
          className={`mt-5 mb-2 font-bold ${palette.accent}`}
          style={{ fontSize: `${baseRem * 1.12}rem`, lineHeight: 1.3 }}
        >
          {block.text}
        </h3>
      );
    }

    if (block.type === 'paragraph') {
      return (
        <p
          key={idx}
          className={`mb-3.5 ${palette.text} ${layoutSettings.columns === 2 ? 'md:columns-2 md:gap-6' : ''}`}
          style={{ fontSize: `${baseRem}rem`, lineHeight: lh }}
        >
          {block.text}
        </p>
      );
    }

    if (block.type === 'equation') {
      return (
        <div
          key={idx}
          className={`my-4 p-3.5 rounded-lg border ${palette.border} ${palette.callout} font-mono-code text-center overflow-x-auto ${palette.text}`}
          style={{ fontSize: `${baseRem * 0.9}rem` }}
        >
          {block.text}
        </div>
      );
    }

    if (block.type === 'callout') {
      return (
        <div
          key={idx}
          className={`my-4 p-4 rounded-lg border ${palette.border} ${palette.callout} ${palette.text} font-medium`}
          style={{ fontSize: `${baseRem * 0.94}rem`, lineHeight: lh }}
        >
          {block.text}
        </div>
      );
    }

    if (block.type === 'metadata' && block.items) {
      return (
        <ul key={idx} className={`my-3 space-y-1.5 ${palette.text}`} style={{ fontSize: `${baseRem * 0.92}rem` }}>
          {block.items.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    }

    if (block.type === 'code') {
      return (
        <pre
          key={idx}
          className={`my-4 p-4 rounded-lg border ${palette.border} ${palette.callout} font-mono-code overflow-x-auto ${palette.text}`}
          style={{ fontSize: `${baseRem * 0.8}rem`, lineHeight: 1.45 }}
        >
          {block.text}
        </pre>
      );
    }

    if (block.type === 'table' && block.headers && block.rows) {
      return (
        <div key={idx} className={`my-4 overflow-x-auto border ${palette.border} rounded-lg`}>
          <table className="w-full text-left border-collapse" style={{ fontSize: `${baseRem * 0.82}rem` }}>
            <thead>
              <tr className="bg-stone-900 text-stone-100">
                {block.headers.map((h, hIdx) => (
                  <th key={hIdx} className="py-2 px-3 font-semibold border-b border-stone-700">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rIdx) => (
                <tr key={rIdx} className={`border-b ${palette.border}`}>
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className={`py-2 px-3 align-top ${cIdx === 0 ? `font-semibold ${palette.accent}` : palette.text}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    if (block.type === 'figure') {
      return (
        <div key={idx} className={`my-4 p-4 rounded-lg border ${palette.border} ${palette.callout}`}>
          <div className={`text-xs font-mono-code uppercase tracking-wider mb-1 ${palette.accent}`}>
            Manuscript Figure Schematic · {block.figureType}
          </div>
          <p className={`italic ${palette.muted}`} style={{ fontSize: `${baseRem * 0.88}rem` }}>
            {block.caption}
          </p>
        </div>
      );
    }

    return null;
  };

  const renderPageSheet = (page: ManuscriptPage | null, isCoverPlaceholder?: 'front' | 'back' | 'endpaper') => {
    const padPx = Math.round(32 * layoutSettings.marginScale);

    if (isCoverPlaceholder === 'front') {
      return (
        <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-[#0c0b09] text-stone-100 rounded-lg border border-amber-500/30">
          <img
            src={BOOK_METADATA.coverImageUrl}
            alt={BOOK_METADATA.title}
            referrerPolicy="no-referrer"
            className="max-h-[480px] w-auto object-contain rounded shadow-2xl border border-amber-500/20 mb-4"
          />
          <p className="text-xs font-mono-code text-amber-400">
            FRONT HARDCOVER · CLICK NEXT SPREAD TO OPEN CODEX
          </p>
        </div>
      );
    }

    if (isCoverPlaceholder === 'endpaper') {
      return (
        <div
          className={`flex flex-col items-center justify-center h-full rounded-lg border ${palette.border} ${palette.bg} p-8 text-center`}
        >
          <div className={`p-8 border ${palette.border} rounded-lg max-w-sm`}>
            <p className={`text-xs font-mono-code tracking-widest ${palette.accent} mb-2`}>
              EX LIBRIS · ARCHIVAL RECORD
            </p>
            <h3 className={`text-2xl font-display font-bold ${palette.text} mb-2`}>
              {BOOK_METADATA.title}
            </h3>
            <p className={`text-sm ${palette.muted} mb-4`}>{BOOK_METADATA.edition}</p>
            <p className={`text-xs font-mono-code ${palette.muted}`}>
              {BOOK_METADATA.author} · {BOOK_METADATA.authorRole}
            </p>
          </div>
        </div>
      );
    }

    if (!page) {
      return (
        <div
          className={`flex flex-col items-center justify-center h-full rounded-lg border ${palette.border} ${palette.bg} p-8 text-center`}
        >
          <p className={`text-sm font-mono-code ${palette.muted}`}>End of Manuscript Codex</p>
        </div>
      );
    }

    const isBookmarked = bookmarks.some((b) => b.pageNumber === page.pageNumber);

    return (
      <div
        className={`relative flex flex-col justify-between h-full rounded-lg border ${palette.border} ${palette.bg} ${fontClass} overflow-y-auto select-text shadow-inner`}
        style={{ padding: `${padPx}px` }}
      >
        <div>
          <div className={`flex items-center justify-between pb-2.5 mb-5 border-b ${palette.border} text-xs font-mono-code ${palette.muted}`}>
            <span className="truncate">{page.runningHeader}</span>
            <button
              onClick={() => onToggleBookmark(page.pageNumber)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors whitespace-nowrap shrink-0 ${
                isBookmarked
                  ? 'bg-amber-600 text-white'
                  : 'hover:bg-stone-500/15 text-stone-500'
              }`}
              title="Bookmark this page"
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>
          </div>

          <div>{page.blocks.map((b, i) => renderBlock(b, i))}</div>
        </div>

        <div className={`flex items-center justify-between pt-3 mt-6 border-t ${palette.border} text-xs font-mono-code ${palette.muted}`}>
          <span>JOSEPH TONEY · NOVEMBER 2026</span>
          <span className={`font-bold ${palette.accent}`}>PAGE {page.pageNumber}</span>
        </div>
      </div>
    );
  };

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: 'rgba(10, 9, 8, 0.88)' }}
    >
      <div className="w-full max-w-6xl h-[86vh] flex flex-col bg-[#161412] border border-stone-800 rounded-xl shadow-2xl overflow-hidden">
        {/* Top Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-stone-800 bg-[#12100e]">
          <div className="flex items-center gap-3 text-sm text-stone-300">
            <span className="font-display font-semibold text-base text-amber-400">
              Synchronized Manuscript Inspector
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-xs text-stone-400 font-mono-code">
              {spreadIndex === 0
                ? 'Front Cover'
                : spreadIndex === 36
                ? 'Back Cover'
                : `Pages ${leftPageNum || 'Endpaper'} – ${rightPageNum}`}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSpreadChange(Math.max(0, spreadIndex - 1))}
              disabled={spreadIndex <= 0}
              className="px-3 py-1.5 text-xs font-medium text-stone-200 bg-stone-800 hover:bg-stone-700 disabled:opacity-40 rounded-lg flex items-center gap-1 transition-colors whitespace-nowrap shrink-0"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Prev Spread</span>
            </button>
            <button
              onClick={() => onSpreadChange(Math.min(36, spreadIndex + 1))}
              disabled={spreadIndex >= 36}
              className="px-3 py-1.5 text-xs font-medium text-stone-200 bg-stone-800 hover:bg-stone-700 disabled:opacity-40 rounded-lg flex items-center gap-1 transition-colors whitespace-nowrap shrink-0"
            >
              <span>Next Spread</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="ml-2 p-1.5 text-stone-400 hover:text-white bg-stone-800/80 hover:bg-stone-700 rounded-lg transition-colors"
              aria-label="Close Inspector"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Two-Page Spread Container */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 md:p-6 overflow-hidden bg-[#0c0a09]">
          {spreadIndex === 0 ? (
            <div className="lg:col-span-2 h-full">{renderPageSheet(null, 'front')}</div>
          ) : spreadIndex === 36 ? (
            <div className="lg:col-span-2 h-full">{renderPageSheet(null)}</div>
          ) : (
            <>
              <div className="h-full overflow-hidden">
                {leftPageNum === 0 ? renderPageSheet(null, 'endpaper') : renderPageSheet(leftPage)}
              </div>
              <div className="h-full overflow-hidden">{renderPageSheet(rightPage)}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
