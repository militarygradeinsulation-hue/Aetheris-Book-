import * as THREE from 'three';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { BOOK_METADATA, MANUSCRIPT_PAGES } from '../data/manuscriptData';
import { BookmarkItem, ManuscriptBlock, ManuscriptPage, PaperToneOption, TextLayoutSettings } from '../types/book';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

const TEX_W = 1240;
const TEX_H = 1754; // Standard book page ratio (~1 : 1.414)

const PAPER_PALETTES: Record<
  PaperToneOption,
  {
    bg: string;
    bgInner: string;
    text: string;
    muted: string;
    accent: string;
    accentSoft: string;
    border: string;
    tableHeaderBg: string;
    tableHeaderText: string;
    calloutBg: string;
  }
> = {
  cream: {
    bg: '#f7f3e8',
    bgInner: '#efe9d8',
    text: '#1c1917',
    muted: '#57534e',
    accent: '#b45309',
    accentSoft: '#fef3c7',
    border: '#d6d0c2',
    tableHeaderBg: '#1c1917',
    tableHeaderText: '#f7f3e8',
    calloutBg: '#f0ead8',
  },
  white: {
    bg: '#fbfbfc',
    bgInner: '#f1f3f5',
    text: '#0f172a',
    muted: '#475569',
    accent: '#9a5b13',
    accentSoft: '#f8f0e3',
    border: '#cbd5e1',
    tableHeaderBg: '#0f172a',
    tableHeaderText: '#ffffff',
    calloutBg: '#f1f5f9',
  },
  sepia: {
    bg: '#eadcc3',
    bgInner: '#dfd0b4',
    text: '#291d12',
    muted: '#654f3a',
    accent: '#8c3b08',
    accentSoft: '#e2cfb0',
    border: '#c7b496',
    tableHeaderBg: '#291d12',
    tableHeaderText: '#eadcc3',
    calloutBg: '#e2d2b5',
  },
  obsidian: {
    bg: '#141417',
    bgInner: '#0d0d0f',
    text: '#e7e5e4',
    muted: '#a8a29e',
    accent: '#eab308',
    accentSoft: '#221f17',
    border: '#2e2e34',
    tableHeaderBg: '#27272c',
    tableHeaderText: '#f5f5f4',
    calloutBg: '#1c1c21',
  },
};

function getFontStack(family: TextLayoutSettings['fontFamily']): {
  heading: string;
  body: string;
  mono: string;
} {
  if (family === 'sans') {
    return {
      heading: '"Plus Jakarta Sans", -apple-system, sans-serif',
      body: '"Plus Jakarta Sans", -apple-system, sans-serif',
      mono: '"JetBrains Mono", monospace',
    };
  }
  if (family === 'mono') {
    return {
      heading: '"JetBrains Mono", monospace',
      body: '"JetBrains Mono", monospace',
      mono: '"JetBrains Mono", monospace',
    };
  }
  return {
    heading: '"Cormorant Garamond", Georgia, serif',
    body: 'Georgia, "Cormorant Garamond", serif',
    mono: '"JetBrains Mono", monospace',
  };
}

let cachedPdfDoc: pdfjsLib.PDFDocumentProxy | null = null;
let pdfLoadPromise: Promise<pdfjsLib.PDFDocumentProxy | null> | null = null;

async function getPdfDocument(): Promise<pdfjsLib.PDFDocumentProxy | null> {
  if (cachedPdfDoc) return cachedPdfDoc;
  if (!pdfLoadPromise) {
    pdfLoadPromise = pdfjsLib
      .getDocument(BOOK_METADATA.pdfUrl)
      .promise.then((doc) => {
        cachedPdfDoc = doc;
        return doc;
      })
      .catch((err) => {
        console.warn('PDF load fallback to typeset:', err);
        return null;
      });
  }
  return pdfLoadPromise;
}

function drawPaperBackground(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  palette: (typeof PAPER_PALETTES)['cream'],
  isLeftPage: boolean
) {
  ctx.fillStyle = palette.bg;
  ctx.fillRect(0, 0, w, h);

  // Spine gutter gradient for 3D depth
  const gutterGrad = ctx.createLinearGradient(isLeftPage ? w - 130 : 0, 0, isLeftPage ? w : 130, 0);
  if (isLeftPage) {
    gutterGrad.addColorStop(0, 'rgba(0,0,0,0)');
    gutterGrad.addColorStop(0.7, 'rgba(0,0,0,0.04)');
    gutterGrad.addColorStop(1, 'rgba(0,0,0,0.18)');
  } else {
    gutterGrad.addColorStop(0, 'rgba(0,0,0,0.18)');
    gutterGrad.addColorStop(0.3, 'rgba(0,0,0,0.04)');
    gutterGrad.addColorStop(1, 'rgba(0,0,0,0)');
  }
  ctx.fillStyle = gutterGrad;
  ctx.fillRect(0, 0, w, h);

  // Subtle archival frame border
  ctx.strokeStyle = palette.border;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(44, 44, w - 88, h - 88);
}

function wrapTextLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  const paragraphs = text.split('\n');
  const lines: string[] = [];
  for (const para of paragraphs) {
    const words = para.split(/\s+/);
    let current = '';
    for (const word of words) {
      if (!word) continue;
      const test = current ? `${current} ${word}` : word;
      if (ctx.measureText(test).width > maxWidth && current) {
        lines.push(current);
        current = word;
      } else {
        current = test;
      }
    }
    if (current) lines.push(current);
  }
  return lines;
}

function drawFigureDiagram(
  ctx: CanvasRenderingContext2D,
  block: ManuscriptBlock,
  x: number,
  y: number,
  w: number,
  palette: (typeof PAPER_PALETTES)['cream'],
  fonts: ReturnType<typeof getFontStack>
): number {
  const boxH = 215;
  ctx.save();
  ctx.fillStyle = palette.calloutBg;
  ctx.strokeStyle = palette.accent;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(x, y, w, boxH, 10);
  ctx.fill();
  ctx.stroke();

  const ft = block.figureType;
  const cx = x + w / 2;

  if (ft === 'corpus') {
    const stats = BOOK_METADATA.stats;
    const cardW = (w - 60) / stats.length;
    stats.forEach((st, idx) => {
      const sx = x + 16 + idx * (cardW + 7);
      const sy = y + 24;
      ctx.fillStyle = palette.bg;
      ctx.strokeStyle = palette.border;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(sx, sy, cardW, 125, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = palette.accent;
      ctx.fillRect(sx + 10, sy + 10, cardW - 20, 4);

      ctx.fillStyle = palette.text;
      ctx.font = `700 28px ${fonts.mono}`;
      ctx.textAlign = 'center';
      ctx.fillText(st.value, sx + cardW / 2, sy + 64);

      ctx.fillStyle = palette.muted;
      ctx.font = `600 13px ${fonts.body}`;
      ctx.fillText(st.label.toUpperCase(), sx + cardW / 2, sy + 98);
    });
  } else if (ft === 'progression' || ft === 'phases' || ft === 'five_stage' || ft === 'ledger') {
    const steps =
      ft === 'progression'
        ? ['01 DETECTED', '02 CORROBORATED', '03 QUANTIFIED', '04 TESTED', '05 REALIZED']
        : ft === 'phases'
        ? ['01 IDENTIFY', '02 BASELINE', '03 TRACE', '04 HUMAN', '05 PRICE', '06 CORRECT', '07 VERIFY']
        : ft === 'five_stage'
        ? ['01 DIAGNOSE', '02 MAP', '03 SCORE', '04 CONNECT', '05 COMPOUND']
        : ['SOURCE CLAIMS', 'ELIGIBILITY', 'DEDUPLICATION', 'ALLOCATION', 'RECONCILIATION'];

    const stepW = (w - 48) / steps.length;
    steps.forEach((st, i) => {
      const sx = x + 20 + i * stepW;
      const sy = y + 36;
      ctx.fillStyle = i === steps.length - 1 ? palette.tableHeaderBg : palette.bg;
      ctx.strokeStyle = palette.accent;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(sx + 4, sy, stepW - 12, 92, 6);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = i === steps.length - 1 ? palette.tableHeaderText : palette.text;
      ctx.font = `700 14px ${fonts.mono}`;
      ctx.textAlign = 'center';
      ctx.fillText(st, sx + stepW / 2 - 2, sy + 52, stepW - 20);
    });
  } else if (ft === 'mechanisms' || ft === 'bridge' || ft === 'matching_bars' || ft === 'outcome_funnel' || ft === 'non_additive') {
    const bars =
      ft === 'mechanisms'
        ? [
            { label: 'F01 Lead Routing', v1: 400, v2: 320, max: 420, unit: '$320k / $400k' },
            { label: 'F02 Quote Follow-up', v1: 192, v2: 120, max: 420, unit: '$120k / $192k' },
            { label: 'F03 Admin Rework', v1: 117, v2: 39, max: 420, unit: '$39k / $117k' },
            { label: 'F04 Billing Exceptions', v1: 90, v2: 55, max: 420, unit: '$55k / $90k' },
          ]
        : ft === 'matching_bars'
        ? [
            { label: 'Offer Fits Goal (H)', v1: 16.0, v2: 16.0, max: 18, unit: '16.0 pts' },
            { label: 'Your Offer Fits (Y)', v1: 12.6, v2: 12.6, max: 18, unit: '12.6 pts' },
            { label: 'Strategic Fit (R)', v1: 12.5, v2: 12.5, max: 18, unit: '12.5 pts' },
            { label: 'Trust Path (T)', v1: 10.8, v2: 10.8, max: 18, unit: '10.8 pts' },
          ]
        : ft === 'outcome_funnel'
        ? [
            { label: 'Accepted Intros', v1: 100, v2: 100, max: 105, unit: '100' },
            { label: 'Meetings Reached', v1: 65, v2: 65, max: 105, unit: '65 (65%)' },
            { label: 'Concrete Next Step', v1: 30, v2: 30, max: 105, unit: '30 (46%)' },
            { label: 'Reported Outcome', v1: 12, v2: 12, max: 105, unit: '12 (12%)' },
          ]
        : [
            { label: 'Incremental Sales', v1: 440, v2: 440, max: 460, unit: '$440k' },
            { label: 'Contribution @35%', v1: 154, v2: 154, max: 460, unit: '$154k' },
            { label: 'Pre-Cost Benefit', v1: 193, v2: 193, max: 460, unit: '$193k' },
            { label: 'Net Economic Benefit', v1: 108, v2: 108, max: 460, unit: '$108k (127% ROI)' },
          ];

    bars.forEach((b, idx) => {
      const by = y + 20 + idx * 34;
      ctx.fillStyle = palette.text;
      ctx.font = `600 15px ${fonts.body}`;
      ctx.textAlign = 'left';
      ctx.fillText(b.label, x + 22, by + 16);

      const barX = x + 230;
      const maxBarW = w - 390;
      ctx.fillStyle = palette.border;
      ctx.fillRect(barX, by + 2, (b.v1 / b.max) * maxBarW, 18);

      ctx.fillStyle = palette.accent;
      ctx.fillRect(barX, by + 2, (b.v2 / b.max) * maxBarW, 18);

      ctx.fillStyle = palette.text;
      ctx.font = `700 14px ${fonts.mono}`;
      ctx.fillText(b.unit, barX + (b.v1 / b.max) * maxBarW + 12, by + 16);
    });
  } else {
    // Architectural triad / system flow diagram
    const boxes = ['GOLDEN REPORT\nOrganizational Forensics', 'MINDPRINT\nHuman & Role Evidence', 'ASK INTROS\nConsented Execution'];
    const boxW = (w - 90) / 3;
    boxes.forEach((label, idx) => {
      const bx = x + 24 + idx * (boxW + 21);
      const by = y + 24;
      ctx.fillStyle = palette.bg;
      ctx.strokeStyle = palette.accent;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(bx, by, boxW, 68, 8);
      ctx.fill();
      ctx.stroke();

      const parts = label.split('\n');
      ctx.fillStyle = palette.text;
      ctx.font = `700 16px ${fonts.mono}`;
      ctx.textAlign = 'center';
      ctx.fillText(parts[0], bx + boxW / 2, by + 30);
      ctx.fillStyle = palette.muted;
      ctx.font = `500 14px ${fonts.body}`;
      ctx.fillText(parts[1] || '', bx + boxW / 2, by + 52);
    });

    // Bottom ledger bar
    ctx.fillStyle = palette.tableHeaderBg;
    ctx.beginPath();
    ctx.roundRect(x + 80, y + 108, w - 160, 44, 6);
    ctx.fill();
    ctx.fillStyle = palette.tableHeaderText;
    ctx.font = `700 15px ${fonts.mono}`;
    ctx.textAlign = 'center';
    ctx.fillText('CANONICAL FORENSIC EVIDENCE & DECISION LEDGER', cx, y + 135);
  }

  // Caption
  if (block.caption) {
    ctx.fillStyle = palette.muted;
    ctx.font = `italic 15px ${fonts.body}`;
    ctx.textAlign = 'left';
    const capLines = wrapTextLines(ctx, block.caption, w - 36);
    capLines.slice(0, 2).forEach((line, idx) => {
      ctx.fillText(line, x + 18, y + boxH - 28 + idx * 18);
    });
  }

  ctx.restore();
  return boxH + 22;
}

export function renderTypesetPageToCanvas(
  canvas: HTMLCanvasElement,
  page: ManuscriptPage,
  layout: TextLayoutSettings,
  bookmark?: BookmarkItem
) {
  canvas.width = TEX_W;
  canvas.height = TEX_H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const palette = PAPER_PALETTES[layout.paperTone] || PAPER_PALETTES.cream;
  const fonts = getFontStack(layout.fontFamily);
  const isLeftPage = page.pageNumber % 2 === 0;

  drawPaperBackground(ctx, TEX_W, TEX_H, palette, isLeftPage);

  const marginX = Math.round(92 * layout.marginScale);
  const marginY = 92;
  const contentW = TEX_W - marginX * 2;

  // Running Header
  ctx.fillStyle = palette.muted;
  ctx.font = `600 15px ${fonts.mono}`;
  ctx.textAlign = isLeftPage ? 'left' : 'right';
  ctx.fillText(page.runningHeader, isLeftPage ? marginX : TEX_W - marginX, marginY - 12);

  ctx.strokeStyle = palette.border;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(marginX, marginY + 4);
  ctx.lineTo(TEX_W - marginX, marginY + 4);
  ctx.stroke();

  // Bookmark Ribbon graphic if bookmarked
  if (bookmark) {
    ctx.save();
    const rx = isLeftPage ? marginX + 24 : TEX_W - marginX - 68;
    ctx.fillStyle = bookmark.color;
    ctx.beginPath();
    ctx.moveTo(rx, 0);
    ctx.lineTo(rx + 44, 0);
    ctx.lineTo(rx + 44, 118);
    ctx.lineTo(rx + 22, 96);
    ctx.lineTo(rx, 118);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  let cursorY = marginY + 48;
  const maxContentY = TEX_H - 115;

  const baseFontSize = Math.round(21 * layout.fontSizeScale);
  const lineHeight = Math.round(baseFontSize * layout.lineHeightScale);

  for (const block of page.blocks) {
    if (cursorY > maxContentY - 30) break;

    if (block.type === 'heading1' && block.text) {
      cursorY += 10;
      ctx.fillStyle = palette.text;
      const h1Size = Math.round(baseFontSize * 1.62);
      ctx.font = `700 ${h1Size}px ${fonts.heading}`;
      ctx.textAlign = 'left';
      const lines = wrapTextLines(ctx, block.text, contentW);
      for (const line of lines) {
        ctx.fillText(line, marginX, cursorY);
        cursorY += Math.round(h1Size * 1.24);
      }
      // Subtle gold accent rule under H1 on page 1
      if (page.pageNumber === 1) {
        ctx.strokeStyle = palette.accent;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(marginX, cursorY - 6);
        ctx.lineTo(TEX_W - marginX, cursorY - 6);
        ctx.stroke();
        cursorY += 18;
      }
      if (block.subtitle) {
        ctx.fillStyle = palette.muted;
        const subSize = Math.round(baseFontSize * 1.12);
        ctx.font = `italic 500 ${subSize}px ${fonts.heading}`;
        const subLines = wrapTextLines(ctx, block.subtitle, contentW);
        for (const sLine of subLines) {
          ctx.fillText(sLine, marginX, cursorY);
          cursorY += Math.round(subSize * 1.35);
        }
      }
      cursorY += 10;
    } else if (block.type === 'heading2' && block.text) {
      cursorY += 8;
      ctx.fillStyle = palette.accent;
      const h2Size = Math.round(baseFontSize * 1.18);
      ctx.font = `700 ${h2Size}px ${fonts.heading}`;
      ctx.textAlign = 'left';
      const lines = wrapTextLines(ctx, block.text, contentW);
      for (const line of lines) {
        ctx.fillText(line, marginX, cursorY);
        cursorY += Math.round(h2Size * 1.3);
      }
      cursorY += 4;
    } else if (block.type === 'paragraph' && block.text) {
      ctx.fillStyle = palette.text;
      ctx.font = `400 ${baseFontSize}px ${fonts.body}`;
      ctx.textAlign = 'left';

      if (layout.columns === 2 && block.text.length > 220) {
        const colGap = 36;
        const colW = (contentW - colGap) / 2;
        const lines = wrapTextLines(ctx, block.text, colW);
        const half = Math.ceil(lines.length / 2);
        const leftLines = lines.slice(0, half);
        const rightLines = lines.slice(half);
        let maxColY = cursorY;
        leftLines.forEach((l, idx) => {
          const ly = cursorY + idx * lineHeight;
          if (ly < maxContentY) {
            ctx.fillText(l, marginX, ly);
            maxColY = Math.max(maxColY, ly);
          }
        });
        rightLines.forEach((l, idx) => {
          const ry = cursorY + idx * lineHeight;
          if (ry < maxContentY) {
            ctx.fillText(l, marginX + colW + colGap, ry);
            maxColY = Math.max(maxColY, ry);
          }
        });
        cursorY = maxColY + lineHeight + 10;
      } else {
        const lines = wrapTextLines(ctx, block.text, contentW);
        for (const line of lines) {
          if (cursorY > maxContentY) break;
          ctx.fillText(line, marginX, cursorY);
          cursorY += lineHeight;
        }
        cursorY += 12;
      }
    } else if (block.type === 'equation' && block.text) {
      const eqFontSize = Math.round(baseFontSize * 0.96);
      ctx.font = `600 ${eqFontSize}px ${fonts.mono}`;
      const eqLines = wrapTextLines(ctx, block.text, contentW - 48);
      const boxH = eqLines.length * (eqFontSize + 12) + 28;
      if (cursorY + boxH <= maxContentY + 20) {
        ctx.fillStyle = palette.calloutBg;
        ctx.strokeStyle = palette.border;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(marginX, cursorY - 16, contentW, boxH, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = palette.text;
        ctx.textAlign = 'center';
        eqLines.forEach((line, idx) => {
          ctx.fillText(line, TEX_W / 2, cursorY + 12 + idx * (eqFontSize + 12));
        });
        ctx.textAlign = 'left';
        cursorY += boxH + 18;
      }
    } else if (block.type === 'callout' && block.text) {
      ctx.font = `600 ${Math.round(baseFontSize * 0.96)}px ${fonts.body}`;
      const cLines = wrapTextLines(ctx, block.text, contentW - 48);
      const boxH = cLines.length * lineHeight + 26;
      if (cursorY + boxH <= maxContentY + 20) {
        ctx.fillStyle = palette.calloutBg;
        ctx.strokeStyle = palette.accent;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(marginX, cursorY - 14, contentW, boxH, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = palette.text;
        cLines.forEach((line, idx) => {
          ctx.fillText(line, marginX + 24, cursorY + 14 + idx * lineHeight);
        });
        cursorY += boxH + 18;
      }
    } else if (block.type === 'metadata' && block.items) {
      const metaSize = Math.round(baseFontSize * 0.92);
      ctx.font = `500 ${metaSize}px ${fonts.body}`;
      ctx.fillStyle = palette.text;
      for (const item of block.items) {
        const mLines = wrapTextLines(ctx, item, contentW - 16);
        for (const ml of mLines) {
          if (cursorY > maxContentY) break;
          ctx.fillText(ml, marginX + 8, cursorY);
          cursorY += Math.round(metaSize * 1.38);
        }
        cursorY += 6;
      }
      cursorY += 8;
    } else if (block.type === 'code' && block.text) {
      const codeSize = Math.round(baseFontSize * 0.82);
      ctx.font = `500 ${codeSize}px ${fonts.mono}`;
      const rawLines = block.text.split('\n');
      const lineH = Math.round(codeSize * 1.38);
      const boxH = rawLines.length * lineH + 30;
      ctx.fillStyle = palette.calloutBg;
      ctx.strokeStyle = palette.border;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(marginX, cursorY - 14, contentW, Math.min(boxH, maxContentY - cursorY + 14), 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = palette.text;
      rawLines.forEach((cl, idx) => {
        const yPos = cursorY + 12 + idx * lineH;
        if (yPos < maxContentY) {
          ctx.fillText(cl, marginX + 20, yPos, contentW - 40);
        }
      });
      cursorY += boxH + 16;
    } else if (block.type === 'table' && block.headers && block.rows) {
      const colCount = block.headers.length;
      const colW = contentW / colCount;
      const tblFontSize = Math.round(baseFontSize * 0.78);
      const rowH = Math.round(tblFontSize * 2.55);

      // Table Header
      ctx.fillStyle = palette.tableHeaderBg;
      ctx.fillRect(marginX, cursorY - 16, contentW, 42);
      ctx.fillStyle = palette.tableHeaderText;
      ctx.font = `700 ${tblFontSize}px ${fonts.body}`;
      block.headers.forEach((h, cIdx) => {
        ctx.fillText(h, marginX + cIdx * colW + 12, cursorY + 10, colW - 20);
      });
      cursorY += 32;

      // Table Rows
      ctx.font = `400 ${tblFontSize}px ${fonts.body}`;
      for (const row of block.rows) {
        if (cursorY + rowH > maxContentY + 15) break;
        ctx.strokeStyle = palette.border;
        ctx.lineWidth = 1;
        ctx.strokeRect(marginX, cursorY - 6, contentW, rowH);

        row.forEach((cell, cIdx) => {
          ctx.fillStyle = cIdx === 0 ? palette.accent : palette.text;
          ctx.font = `${cIdx === 0 ? '600' : '400'} ${tblFontSize}px ${fonts.body}`;
          const cellLines = wrapTextLines(ctx, cell, colW - 20);
          cellLines.slice(0, 2).forEach((cl, lIdx) => {
            ctx.fillText(cl, marginX + cIdx * colW + 10, cursorY + 14 + lIdx * (tblFontSize + 3), colW - 18);
          });
        });
        cursorY += rowH;
      }
      cursorY += 22;
    } else if (block.type === 'figure') {
      if (cursorY + 225 <= maxContentY + 25) {
        const usedH = drawFigureDiagram(ctx, block, marginX, cursorY - 8, contentW, palette, fonts);
        cursorY += usedH;
      }
    }
  }

  // Running Footer
  ctx.strokeStyle = palette.border;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(marginX, TEX_H - 96);
  ctx.lineTo(TEX_W - marginX, TEX_H - 96);
  ctx.stroke();

  ctx.fillStyle = palette.muted;
  ctx.font = `600 15px ${fonts.mono}`;
  ctx.textAlign = 'left';
  ctx.fillText('JOSEPH TONEY / RESEARCH MANUSCRIPT / NOVEMBER 2026', marginX, TEX_H - 64);

  ctx.fillStyle = palette.accent;
  ctx.font = `700 18px ${fonts.mono}`;
  ctx.textAlign = 'right';
  ctx.fillText(`PAGE ${page.pageNumber}`, TEX_W - marginX, TEX_H - 64);
}

export async function renderPageTexture(
  pageNumber: number,
  layout: TextLayoutSettings,
  bookmark?: BookmarkItem,
  maxAnisotropy = 8
): Promise<THREE.CanvasTexture> {
  const canvas = document.createElement('canvas');
  canvas.width = TEX_W;
  canvas.height = TEX_H;

  const pageData = MANUSCRIPT_PAGES[pageNumber - 1] || MANUSCRIPT_PAGES[0];

  if (layout.renderMode === 'pdf') {
    const pdfDoc = await getPdfDocument();
    if (pdfDoc && pageNumber >= 1 && pageNumber <= pdfDoc.numPages) {
      try {
        const pdfPage = await pdfDoc.getPage(pageNumber);
        const viewport = pdfPage.getViewport({ scale: 1 });
        const scale = Math.min(TEX_W / viewport.width, TEX_H / viewport.height);
        const scaledViewport = pdfPage.getViewport({ scale });

        const ctx = canvas.getContext('2d');
        if (ctx) {
          const palette = PAPER_PALETTES[layout.paperTone] || PAPER_PALETTES.cream;
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, TEX_W, TEX_H);

          await pdfPage.render({
            canvasContext: ctx,
            viewport: scaledViewport,
            canvas,
          }).promise;

          // Apply paper stock tint / night mode inversion if requested
          if (layout.paperTone === 'obsidian') {
            ctx.globalCompositeOperation = 'difference';
            ctx.fillStyle = '#e5e5e0';
            ctx.fillRect(0, 0, TEX_W, TEX_H);
            ctx.globalCompositeOperation = 'source-over';
          } else if (layout.paperTone !== 'white') {
            ctx.globalCompositeOperation = 'multiply';
            ctx.fillStyle = palette.bg;
            ctx.fillRect(0, 0, TEX_W, TEX_H);
            ctx.globalCompositeOperation = 'source-over';
          }

          // Spine shading & bookmark
          const isLeft = pageNumber % 2 === 0;
          const gutterGrad = ctx.createLinearGradient(isLeft ? TEX_W - 110 : 0, 0, isLeft ? TEX_W : 110, 0);
          if (isLeft) {
            gutterGrad.addColorStop(0, 'rgba(0,0,0,0)');
            gutterGrad.addColorStop(1, 'rgba(0,0,0,0.2)');
          } else {
            gutterGrad.addColorStop(0, 'rgba(0,0,0,0.2)');
            gutterGrad.addColorStop(1, 'rgba(0,0,0,0)');
          }
          ctx.fillStyle = gutterGrad;
          ctx.fillRect(0, 0, TEX_W, TEX_H);

          if (bookmark) {
            const rx = isLeft ? 100 : TEX_W - 144;
            ctx.fillStyle = bookmark.color;
            ctx.beginPath();
            ctx.moveTo(rx, 0);
            ctx.lineTo(rx + 44, 0);
            ctx.lineTo(rx + 44, 118);
            ctx.lineTo(rx + 22, 96);
            ctx.lineTo(rx, 118);
            ctx.closePath();
            ctx.fill();
          }
        }
      } catch {
        renderTypesetPageToCanvas(canvas, pageData, layout, bookmark);
      }
    } else {
      renderTypesetPageToCanvas(canvas, pageData, layout, bookmark);
    }
  } else {
    renderTypesetPageToCanvas(canvas, pageData, layout, bookmark);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = maxAnisotropy;
  texture.needsUpdate = true;
  return texture;
}

export function createFrontCoverTexture(maxAnisotropy = 8): {
  colorMap: THREE.CanvasTexture;
  spineMap: THREE.CanvasTexture;
} {
  const coverCanvas = document.createElement('canvas');
  coverCanvas.width = 1024;
  coverCanvas.height = 1448;
  const ctx = coverCanvas.getContext('2d')!;

  // Draw procedural luxury dark gold-stamped fallback immediately
  ctx.fillStyle = '#0c0b09';
  ctx.fillRect(0, 0, 1024, 1448);
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 6;
  ctx.strokeRect(42, 42, 940, 1364);

  ctx.fillStyle = '#d4af37';
  ctx.font = '700 28px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('AETHERIS TECHNOLOGY', 512, 130);
  ctx.font = '700 84px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('FORENSIC', 512, 260);
  ctx.fillText('METHODOLOGY', 512, 345);
  ctx.font = '600 26px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#e7e5e4';
  ctx.fillText('JOSEPH TONEY', 512, 1310);

  const spineCanvas = document.createElement('canvas');
  spineCanvas.width = 256;
  spineCanvas.height = 1448;
  const sCtx = spineCanvas.getContext('2d')!;
  sCtx.fillStyle = '#0c0b09';
  sCtx.fillRect(0, 0, 256, 1448);
  sCtx.strokeStyle = '#b48a28';
  sCtx.lineWidth = 3;
  sCtx.strokeRect(16, 20, 224, 1408);

  sCtx.save();
  sCtx.translate(128, 724);
  sCtx.rotate(Math.PI / 2);
  sCtx.fillStyle = '#d4af37';
  sCtx.font = '700 32px "Cormorant Garamond", Georgia, serif';
  sCtx.textAlign = 'center';
  sCtx.fillText('THE AETHERIS INTEGRATED FORENSIC METHODOLOGY   —   AETHERIS®', 0, 10);
  sCtx.restore();

  const colorMap = new THREE.CanvasTexture(coverCanvas);
  colorMap.colorSpace = THREE.SRGBColorSpace;
  colorMap.anisotropy = maxAnisotropy;

  const spineMap = new THREE.CanvasTexture(spineCanvas);
  spineMap.colorSpace = THREE.SRGBColorSpace;
  spineMap.anisotropy = maxAnisotropy;

  // Load the actual uploaded cover artwork and map the front cover & spine portions accurately
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    // The uploaded image has the spine on the left (~9.2% width) and front cover on the right (~90.8% width)
    const spineSplitX = Math.floor(img.width * 0.092);
    ctx.drawImage(
      img,
      spineSplitX,
      0,
      img.width - spineSplitX,
      img.height,
      0,
      0,
      coverCanvas.width,
      coverCanvas.height
    );
    colorMap.needsUpdate = true;

    sCtx.drawImage(img, 0, 0, spineSplitX, img.height, 0, 0, spineCanvas.width, spineCanvas.height);
    spineMap.needsUpdate = true;
  };
  img.src = BOOK_METADATA.coverImageUrl;

  return { colorMap, spineMap };
}

export function createBackCoverTexture(maxAnisotropy = 8): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1448;
  const ctx = canvas.getContext('2d')!;

  // Rich obsidian leather gradient
  const grad = ctx.createRadialGradient(512, 600, 80, 512, 724, 860);
  grad.addColorStop(0, '#1c1813');
  grad.addColorStop(0.6, '#0f0d0a');
  grad.addColorStop(1, '#070605');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 1448);

  // Double gold foil border
  ctx.strokeStyle = '#c99e32';
  ctx.lineWidth = 3;
  ctx.strokeRect(56, 56, 912, 1336);
  ctx.strokeStyle = 'rgba(201, 158, 50, 0.45)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(70, 70, 884, 1308);

  // Header
  ctx.fillStyle = '#d4af37';
  ctx.font = '600 22px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('AETHERIS TECHNOLOGY  ·  RESEARCH MANUSCRIPT V2.0', 512, 145);

  ctx.fillStyle = '#f5f5f4';
  ctx.font = '700 46px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('THREE-SYSTEM FORENSIC ARCHITECTURE', 512, 220);

  // Synopsis paragraphs
  ctx.fillStyle = '#d6d3d1';
  ctx.font = '400 24px Georgia, serif';
  const blurb =
    'Traditional business audits examine revenue, marketing, processes, technology, and human behavior in isolation. Financial leakage instead emerges at the interfaces between subsystems: incomplete handoffs, incompatible qualification definitions, ambiguous decision authority, and fragmented records.\n\nThe Aetheris Integrated Forensic Methodology (AIFM) connects Golden Report organizational diagnostics, Mindprint source-constrained relationship evidence, and Ask Intros consent-gated execution into a single falsifiable financial recovery discipline.';
  const lines = wrapTextLines(ctx, blurb, 760);
  let y = 310;
  for (const line of lines) {
    ctx.fillText(line, 512, y);
    y += 38;
  }

  // Three pillars
  const pillars = [
    { title: 'GOLDEN REPORT®', sub: 'Canonical Financial Leak Ledger v6' },
    { title: 'MINDPRINT®', sub: 'Source-Linked Role & Decision Graph' },
    { title: 'ASK INTROS®', sub: 'Two-Party Consented Execution OS' },
  ];
  pillars.forEach((p, idx) => {
    const py = 690 + idx * 118;
    ctx.fillStyle = 'rgba(212, 175, 55, 0.08)';
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.65)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(162, py, 700, 92, 12);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#eab308';
    ctx.font = '700 24px "JetBrains Mono", monospace';
    ctx.fillText(p.title, 512, py + 40);
    ctx.fillStyle = '#e7e5e4';
    ctx.font = '500 20px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(p.sub, 512, py + 72);
  });

  // Footer colophon
  ctx.fillStyle = '#a8a29e';
  ctx.font = '500 18px "JetBrains Mono", monospace';
  ctx.fillText('1,910 REPORTS  ·  1,067 COMPANIES  ·  22,282 INDEXED FINDINGS', 512, 1180);

  ctx.fillStyle = '#d4af37';
  ctx.font = '700 26px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('JOSEPH TONEY — FOUNDER, AETHERIS TECHNOLOGY', 512, 1275);
  ctx.fillStyle = '#78716c';
  ctx.font = '500 16px "JetBrains Mono", monospace';
  ctx.fillText('NOVEMBER 1, 2026  ·  69 PAGES  ·  CODEX EDITION', 512, 1315);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = maxAnisotropy;
  return tex;
}

export function createEndpaperTexture(maxAnisotropy = 8): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1448;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#141210';
  ctx.fillRect(0, 0, 1024, 1448);

  // Subtle geometric forensic lattice pattern
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.12)';
  ctx.lineWidth = 1;
  const step = 64;
  for (let x = 0; x <= 1024; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 1448);
    ctx.stroke();
  }
  for (let y = 0; y <= 1448; y += step) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(1024, y);
    ctx.stroke();
  }

  // Ex-Libris bookplate in center
  ctx.fillStyle = '#1c1917';
  ctx.strokeStyle = '#c99e32';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.roundRect(262, 520, 500, 360, 10);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#d4af37';
  ctx.font = '700 20px "JetBrains Mono", monospace';
  ctx.textAlign = 'center';
  ctx.fillText('EX LIBRIS · ARCHIVAL RECORD', 512, 595);

  ctx.fillStyle = '#f5f5f4';
  ctx.font = '700 38px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('AETHERIS CODEX', 512, 665);

  ctx.fillStyle = '#a8a29e';
  ctx.font = 'italic 22px Georgia, serif';
  ctx.fillText('Organizational Evidence, Human Relationships,', 512, 725);
  ctx.fillText('Financial Exposure & Verified Outcomes', 512, 758);

  ctx.fillStyle = '#d4af37';
  ctx.font = '600 16px "JetBrains Mono", monospace';
  ctx.fillText('OBSERVE -> ATTRIBUTE -> VALIDATE -> PRICE -> VERIFY', 512, 830);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = maxAnisotropy;
  return tex;
}
