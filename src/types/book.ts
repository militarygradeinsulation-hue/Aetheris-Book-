export type FontFamilyOption = 'serif' | 'sans' | 'mono';
export type PaperToneOption = 'cream' | 'white' | 'sepia' | 'obsidian';
export type RenderModeOption = 'typeset' | 'pdf';

export interface TextLayoutSettings {
  renderMode: RenderModeOption;
  fontFamily: FontFamilyOption;
  fontSizeScale: number; // 0.85 to 1.3
  lineHeightScale: number; // 1.3 to 1.85
  marginScale: number; // 0.75 to 1.35
  columns: 1 | 2;
  paperTone: PaperToneOption;
  showAnnotations: boolean;
}

export type LightingPresetId = 'study' | 'daylight' | 'fireside' | 'moonlight';

export interface LightingSettings {
  preset: LightingPresetId;
  intensity: number; // 0.3 to 2.2
  warmth: number; // 0 (cool) to 1 (warm amber)
  lightAngle: number; // -60 to 60 degrees
  shadowsEnabled: boolean;
  deskLampOn: boolean;
}

export type CameraPresetId = 'reading' | 'perspective' | 'cover' | 'closeup';

export interface AmbientAudioSettings {
  masterMuted: boolean;
  masterVolume: number; // 0 to 1
  pageTurnSound: boolean;
  hearthVolume: number; // 0 to 1
  rainVolume: number; // 0 to 1
  archiveDroneVolume: number; // 0 to 1
}

export interface BookmarkItem {
  id: string;
  pageNumber: number; // 1 to 69
  title: string;
  note: string;
  color: '#d97706' | '#dc2626' | '#059669' | '#2563eb';
  createdAt: string;
}

export interface ManuscriptBlock {
  type: 'heading1' | 'heading2' | 'paragraph' | 'equation' | 'table' | 'figure' | 'code' | 'callout' | 'metadata';
  text?: string;
  subtitle?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  caption?: string;
  figureType?: 'architecture' | 'corpus' | 'progression' | 'ledger' | 'graph' | 'phases' | 'time' | 'did' | 'mechanisms' | 'bridge' | 'heatmap' | 'validation' | 'trinity' | 'relationship_graph' | 'five_stage' | 'matching_bars' | 'outcome_funnel' | 'non_additive' | 'three_arm';
}

export interface ManuscriptPage {
  pageNumber: number;
  partLabel: string;
  chapterTitle: string;
  runningHeader: string;
  blocks: ManuscriptBlock[];
}

export interface TocEntry {
  id: string;
  title: string;
  part: 'Front Matter' | 'Part I' | 'Part II' | 'Appendices';
  pageNumber: number;
}
