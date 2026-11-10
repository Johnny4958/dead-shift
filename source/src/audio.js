// All sound is synthesized with WebAudio (no files).
let ctx = null, master = null, noiseBuf = null, engine = null, music = null;
export let volume = 0.8;
export function initAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
  const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
  ctx = new AC(); master = ctx.createGain(); master.gain.value = volume;
  const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 6; master.connect(comp); comp.connect(ctx.destination);
  noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 1.5, ctx.sampleRate); const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  ambience();
}
export function setVolume(v) { volume = v; if (master) master.gain.value = v; }
const now = () => ctx.currentTime;
function env(g, t, a, peak, dec, sus = 0.0001) { g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(sus, t + a + dec); }
function noise(t, dur, freq, q, peak, type = 'lowpass', dest = master, rate = 1) { const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.playbackRate.value = rate; const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q; const g = ctx.createGain(); env(g, t, 0.003, peak, dur); s.connect(f); f.connect(g); g.connect(dest); s.start(t, Math.random()); s.stop(t + dur + 0.05); return f; }
function tone(t, f0, f1, dur, peak, type = 'sine', dest = master) { const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur); const g = ctx.createGain(); env(g, t, 0.005, peak, dur); o.connect(g); g.connect(dest); o.start(t); o.stop(t + dur + 0.05); }
function pan(x) { const p = ctx.createStereoPanner ? ctx.createStereoPanner() : null; if (!p) return master; p.pan.value = Math.max(-1, Math.min(1, x)); p.connect(master); return p; }

export const sfx = {
  shot(pitch = 1, weight = 0.25, wonder = false) { if (!ctx) return; const t = now();
    if (wonder) { tone(t, 1800 * pitch, 200, 0.35, 0.3, 'sawtooth'); tone(t, 900, 80, 0.4, 0.25, 'square'); noise(t, 0.2, 3000, 2, 0.2, 'bandpass'); return; }
    noise(t, 0.08 + weight * 0.25, 2600 * pitch, 0.7, 0.55 + weight * 0.4); noise(t, 0.05, 6000 * pitch, 1, 0.25, 'highpass'); tone(t, 160 * pitch, 40, 0.12 + weight * 0.25, 0.5 + weight * 0.5, 'sine');
    noise(t + 0.02, 0.4 + weight, 900, 0.5, 0.06 + weight * 0.06); },
  dry() { if (!ctx) return; const t = now(); tone(t, 1800, 1500, 0.03, 0.15, 'square'); },
  reload(step) { if (!ctx) return; const t = now(); noise(t, 0.05, step ? 3500 : 1800, 3, 0.35, 'bandpass'); tone(t, step ? 900 : 500, 300, 0.05, 0.12, 'square'); },
  hit(head) { if (!ctx) return; const t = now(); noise(t, 0.06, head ? 2500 : 1100, 1.5, 0.35, 'bandpass'); if (head) tone(t, 1400, 900, 0.08, 0.15, 'triangle'); },
  hitmarker() { if (!ctx) return; const t = now(); tone(t, 2600, 2400, 0.03, 0.08, 'square'); },
  kill() { if (!ctx) return; const t = now(); noise(t, 0.18, 600, 1, 0.3); },
  knife() { if (!ctx) return; const t = now(); noise(t, 0.12, 4500, 2, 0.35, 'bandpass', master, 1.4); },
  groan(x = 0, d = 5) { if (!ctx) return; const t = now(); const v = Math.min(0.35, 1.6 / (d + 1)); const dest = pan(x); const f = 70 + Math.random() * 70; const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(f, t); o.frequency.linearRampToValueAtTime(f * (0.6 + Math.random() * 0.5), t + 0.8); const flt = ctx.createBiquadFilter(); flt.type = 'bandpass'; flt.frequency.value = 500 + Math.random() * 400; flt.Q.value = 3; const lfo = ctx.createOscillator(); lfo.frequency.value = 7 + Math.random() * 8; const lg = ctx.createGain(); lg.gain.value = 18; lfo.connect(lg); lg.connect(o.frequency); const g = ctx.createGain(); env(g, t, 0.15, v, 0.9); o.connect(flt); flt.connect(g); g.connect(dest); o.start(t); lfo.start(t); o.stop(t + 1.2); lfo.stop(t + 1.2); },
  scream(x = 0) { if (!ctx) return; const t = now(); const dest = pan(x); tone(t, 700, 300, 0.6, 0.2, 'sawtooth', dest); noise(t, 0.5, 1500, 4, 0.2, 'bandpass', dest); },
  plank() { if (!ctx) return; const t = now(); noise(t, 0.25, 700, 2, 0.5, 'bandpass'); tone(t, 180, 90, 0.15, 0.25, 'triangle'); },
  nail() { if (!ctx) return; const t = now(); tone(t, 1600, 1200, 0.05, 0.3, 'square'); noise(t, 0.08, 4000, 3, 0.3, 'bandpass'); },
  hurt() { if (!ctx) return; const t = now(); noise(t, 0.2, 400, 1, 0.6); tone(t, 120, 60, 0.25, 0.4); },
  buy() { if (!ctx) return; const t = now(); [1046, 1318, 1568].forEach((f, i) => tone(t + i * 0.06, f, f, 0.18, 0.18, 'triangle')); noise(t, 0.1, 6000, 1, 0.1, 'highpass'); },
  deny() { if (!ctx) return; const t = now(); tone(t, 220, 180, 0.2, 0.2, 'square'); },
  door() { if (!ctx) return; const t = now(); noise(t, 0.8, 300, 1, 0.5); tone(t, 90, 40, 0.6, 0.4, 'sawtooth'); },
  round(start) { if (!ctx) return; const t = now(); const notes = start ? [196, 233, 196, 174, 196] : [196, 247, 294, 247, 220, 196]; notes.forEach((f, i) => { tone(t + i * 0.32, f, f * 0.99, 0.5, 0.22, 'sawtooth'); tone(t + i * 0.32, f / 2, f / 2, 0.55, 0.18, 'triangle'); }); noise(t, 2.2, 120, 0.5, 0.15); },
  box() { if (!ctx) return; const t = now(); const tune = [784, 659, 698, 587, 659, 523, 587, 494, 523, 659, 784, 1046]; tune.forEach((f, i) => tone(t + i * 0.2, f, f, 0.22, 0.12, 'triangle')); },
  boxReveal() { if (!ctx) return; const t = now(); tone(t, 523, 1046, 0.4, 0.2, 'triangle'); tone(t + 0.1, 784, 1568, 0.4, 0.15, 'triangle'); },
  teddy() { if (!ctx) return; const t = now(); tone(t, 300, 80, 1.2, 0.3, 'sawtooth'); },
  power() { if (!ctx) return; const t = now(); tone(t, 50, 300, 2.0, 0.4, 'sawtooth'); noise(t, 1.5, 800, 1, 0.3); tone(t + 1.6, 900, 900, 0.3, 0.2, 'square'); },
  perk() { if (!ctx) return; const t = now(); noise(t, 0.15, 2000, 1, 0.2); [523, 659, 784, 1046].forEach((f, i) => tone(t + 0.25 + i * 0.09, f, f, 0.2, 0.15, 'triangle')); },
  powerup(kind) { if (!ctx) return; const t = now(); const n = kind === 'nuke' ? [200, 100, 50] : [660, 880, 1100, 1320]; n.forEach((f, i) => tone(t + i * 0.08, f, f, 0.25, 0.25, kind === 'nuke' ? 'sawtooth' : 'square')); if (kind === 'nuke') noise(t, 1.6, 200, 0.5, 0.8); },
  boom() { if (!ctx) return; const t = now(); noise(t, 1.2, 380, 0.4, 1.0); tone(t, 90, 25, 0.9, 0.8); },
  spike() { if (!ctx) return; const t = now(); noise(t, 0.12, 1500, 2, 0.25, 'bandpass'); },
  build() { if (!ctx) return; const t = now(); for (let i = 0; i < 3; i++) { tone(t + i * 0.09, 1500, 1100, 0.05, 0.25, 'square'); noise(t + i * 0.09, 0.07, 3500, 3, 0.25, 'bandpass'); } },
  splat() { if (!ctx) return; const t = now(); noise(t, 0.25, 500, 1, 0.5); tone(t, 200, 60, 0.2, 0.3); },
  toxic() { if (!ctx) return; const t = now(); noise(t, 0.6, 900, 1, 0.5); tone(t, 300, 60, 0.5, 0.3, 'square'); },
  heartbeat() { if (!ctx) return; const t = now(); tone(t, 60, 40, 0.12, 0.6); tone(t + 0.2, 55, 40, 0.12, 0.45); },
  carDoor() { if (!ctx) return; const t = now(); noise(t, 0.12, 600, 1, 0.5); tone(t, 140, 80, 0.1, 0.3, 'square'); },
  crash(v) { if (!ctx) return; const t = now(); noise(t, 0.4, 500, 0.6, Math.min(1, v * 0.08)); },
};
export function setEngine(on, rpm = 0) {
  if (!ctx) return;
  if (on && !engine) { const o = ctx.createOscillator(); o.type = 'sawtooth'; const o2 = ctx.createOscillator(); o2.type = 'square'; const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 500; const g = ctx.createGain(); g.gain.value = 0.0001; o.connect(f); o2.connect(f); f.connect(g); g.connect(master); o.start(); o2.start(); engine = { o, o2, f, g }; }
  if (!engine) return;
  const t = now();
  if (!on) { engine.g.gain.setTargetAtTime(0.0001, t, 0.1); return; }
  const base = 34 + rpm * 70; engine.o.frequency.setTargetAtTime(base, t, 0.05); engine.o2.frequency.setTargetAtTime(base * 0.5, t, 0.05); engine.f.frequency.setTargetAtTime(380 + rpm * 900, t, 0.05); engine.g.gain.setTargetAtTime(0.12 + rpm * 0.1, t, 0.05);
}
function ambience() { // low wind + distant drone
  const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true; const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 260; const g = ctx.createGain(); g.gain.value = 0.05; s.connect(f); f.connect(g); g.connect(master); s.start();
  const o = ctx.createOscillator(); o.frequency.value = 55; const og = ctx.createGain(); og.gain.value = 0.02; const lfo = ctx.createOscillator(); lfo.frequency.value = 0.07; const lg = ctx.createGain(); lg.gain.value = 0.015; lfo.connect(lg); lg.connect(og.gain); o.connect(og); og.connect(master); o.start(); lfo.start();
  music = { g, og };
}
