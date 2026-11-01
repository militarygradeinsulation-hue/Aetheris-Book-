import { AmbientAudioSettings } from '../types/book';

class SoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private hearthGain: GainNode | null = null;
  private rainGain: GainNode | null = null;
  private droneGain: GainNode | null = null;
  private crackleTimer: number | null = null;
  private initialized = false;
  private currentSettings: AmbientAudioSettings = {
    masterMuted: false,
    masterVolume: 0.7,
    pageTurnSound: true,
    hearthVolume: 0,
    rainVolume: 0,
    archiveDroneVolume: 0,
  };

  private ensureContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return null;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this.currentSettings.masterMuted ? 0 : this.currentSettings.masterVolume;
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  private setupAmbientLoops() {
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain || this.initialized) return;
    this.initialized = true;

    // Create 4-second noise buffer for ambient beds
    const bufferSize = ctx.sampleRate * 4;
    const pinkBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const brownBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const pinkData = pinkBuffer.getChannelData(0);
    const brownData = brownBuffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    let lastBrown = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      pinkData[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
      b6 = white * 0.115926;

      lastBrown = (lastBrown + 0.02 * white) / 1.02;
      brownData[i] = lastBrown * 1.6;
    }

    // 1. Hearth Fire warm rumble bed
    const hearthSource = ctx.createBufferSource();
    hearthSource.buffer = brownBuffer;
    hearthSource.loop = true;
    const hearthFilter = ctx.createBiquadFilter();
    hearthFilter.type = 'lowpass';
    hearthFilter.frequency.value = 260;
    this.hearthGain = ctx.createGain();
    this.hearthGain.gain.value = this.currentSettings.hearthVolume * 0.45;
    hearthSource.connect(hearthFilter);
    hearthFilter.connect(this.hearthGain);
    this.hearthGain.connect(this.masterGain);
    hearthSource.start();

    // Stochastic fireplace crackles
    const scheduleCrackle = () => {
      if (this.ctx && this.hearthGain && !this.currentSettings.masterMuted && this.currentSettings.hearthVolume > 0.02) {
        if (Math.random() < 0.65) {
          this.triggerFireCrackle();
        }
      }
      this.crackleTimer = window.setTimeout(scheduleCrackle, 120 + Math.random() * 380);
    };
    scheduleCrackle();

    // 2. Soft Rain on Study Glass
    const rainSource = ctx.createBufferSource();
    rainSource.buffer = pinkBuffer;
    rainSource.loop = true;
    const rainFilter = ctx.createBiquadFilter();
    rainFilter.type = 'bandpass';
    rainFilter.frequency.value = 1150;
    rainFilter.Q.value = 0.55;
    this.rainGain = ctx.createGain();
    this.rainGain.gain.value = this.currentSettings.rainVolume * 0.35;
    rainSource.connect(rainFilter);
    rainFilter.connect(this.rainGain);
    this.rainGain.connect(this.masterGain);
    rainSource.start();

    // 3. Deep Archive Room Tone (Warm acoustic study resonance)
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    osc1.type = 'sine';
    osc2.type = 'triangle';
    osc1.frequency.value = 65.41; // C2
    osc2.frequency.value = 98.0;  // G2
    const droneFilter = ctx.createBiquadFilter();
    droneFilter.type = 'lowpass';
    droneFilter.frequency.value = 160;
    this.droneGain = ctx.createGain();
    this.droneGain.gain.value = this.currentSettings.archiveDroneVolume * 0.14;
    osc1.connect(droneFilter);
    osc2.connect(droneFilter);
    droneFilter.connect(this.droneGain);
    this.droneGain.connect(this.masterGain);
    osc1.start();
    osc2.start();
  }

  private triggerFireCrackle() {
    if (!this.ctx || !this.hearthGain) return;
    const now = this.ctx.currentTime;
    const duration = 0.015 + Math.random() * 0.025;
    const buf = this.ctx.createBuffer(1, Math.floor(this.ctx.sampleRate * duration), this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (data.length * 0.3));
    }
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2200 + Math.random() * 2600;
    filter.Q.value = 3.5;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.18 * Math.random(), now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.hearthGain);
    src.start(now);
  }

  public updateSettings(settings: AmbientAudioSettings) {
    this.currentSettings = settings;
    const hasActiveAmbience =
      settings.hearthVolume > 0 || settings.rainVolume > 0 || settings.archiveDroneVolume > 0;
    if (hasActiveAmbience && !this.initialized) {
      this.setupAmbientLoops();
    }
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const targetMaster = settings.masterMuted ? 0 : settings.masterVolume;
    this.masterGain.gain.setTargetAtTime(targetMaster, now, 0.08);
    if (this.hearthGain) {
      this.hearthGain.gain.setTargetAtTime(settings.hearthVolume * 0.45, now, 0.12);
    }
    if (this.rainGain) {
      this.rainGain.gain.setTargetAtTime(settings.rainVolume * 0.35, now, 0.12);
    }
    if (this.droneGain) {
      this.droneGain.gain.setTargetAtTime(settings.archiveDroneVolume * 0.14, now, 0.12);
    }
  }

  public playPageTurn(direction: 'next' | 'prev' = 'next') {
    if (this.currentSettings.masterMuted || !this.currentSettings.pageTurnSound) return;
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain) return;

    const now = ctx.currentTime;
    const duration = 0.34;
    const sampleCount = Math.floor(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, sampleCount, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < sampleCount; i++) {
      const t = i / sampleCount;
      // Smooth paper rustle envelope with initial peel and soft settle
      const env = Math.sin(t * Math.PI) * (0.7 + 0.3 * Math.sin(t * Math.PI * 3));
      data[i] = (Math.random() * 2 - 1) * env * 0.28;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    const startFreq = direction === 'next' ? 750 : 950;
    const peakFreq = direction === 'next' ? 1650 : 1400;
    filter.frequency.setValueAtTime(startFreq, now);
    filter.frequency.exponentialRampToValueAtTime(peakFreq, now + duration * 0.45);
    filter.frequency.exponentialRampToValueAtTime(620, now + duration);
    filter.Q.value = 1.4;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.32, now + 0.06);
    gain.gain.exponentialRampToValueAtTime(0.008, now + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    noise.start(now);
  }

  public playCoverThud() {
    if (this.currentSettings.masterMuted || !this.currentSettings.pageTurnSound) return;
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(115, now);
    osc.frequency.exponentialRampToValueAtTime(38, now + 0.22);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.28, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.25);
  }

  public playBookmarkRibbon() {
    if (this.currentSettings.masterMuted) return;
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(780, now + 0.09);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.13);
  }
}

export const soundEngine = new SoundEngine();
