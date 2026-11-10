// All sound is synthesized with WebAudio (no files).
let ctx = null, master = null, noiseBuf = null, engine = null, music = null;
export let volume = 0.8;
export function initAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
  const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
  ctx = new AC(); master = ctx.createGain(); master.gain.value = volume;
  const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 6; master.connect(comp); comp.connect(ctx.destination);
  noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 1.5, ctx.sampleRate); const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  verb = ctx.createConvolver(); const L = ctx.sampleRate * 1.6 | 0; const ib = ctx.createBuffer(2, L, ctx.sampleRate);
  for (let c = 0; c < 2; c++) { const d2 = ib.getChannelData(c); for (let i = 0; i < L; i++) d2[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / L, 3.2); }
  verb.buffer = ib; verbIn = ctx.createGain(); verbIn.gain.value = 0.3; verbIn.connect(verb); verb.connect(master);
  ambience();
}
let verb = null, verbIn = null, voices = 0;
export const audioReady = () => !!ctx && ctx.state === 'running';
export function setVolume(v) { volume = v; if (master) master.gain.value = v; }
const now = () => ctx.currentTime;
function env(g, t, a, peak, dec, sus = 0.0001) { g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(sus, t + a + dec); }
function noise(t, dur, freq, q, peak, type = 'lowpass', dest = master, rate = 1) { const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.playbackRate.value = rate; const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q; const g = ctx.createGain(); env(g, t, 0.003, peak, dur); s.connect(f); f.connect(g); g.connect(dest); s.start(t, Math.random()); s.stop(t + dur + 0.05); return f; }
function tone(t, f0, f1, dur, peak, type = 'sine', dest = master) { const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur); const g = ctx.createGain(); env(g, t, 0.005, peak, dur); o.connect(g); g.connect(dest); o.start(t); o.stop(t + dur + 0.05); }
function pan(x) { const p = ctx.createStereoPanner ? ctx.createStereoPanner() : null; if (!p) return master; p.pan.value = Math.max(-1, Math.min(1, x)); p.connect(master); return p; }

// gunshot: sharp transient crack + noisy blast body + chest thump + action clack + echo slap. weight 0 pistol .. 1 heavy
function gunshot(pitch, weight, wonder, kind) {
  if (!ctx) return; const t = now();
  if (kind === 'ray' || (wonder && kind !== 'wave')) { // ray gun: zappy descending laser
    const o = ctx.createOscillator(); o.type = 'square'; o.frequency.setValueAtTime(2400 * pitch, t); o.frequency.exponentialRampToValueAtTime(260, t + 0.22);
    const lfo = ctx.createOscillator(); lfo.frequency.value = 60; const lg = ctx.createGain(); lg.gain.value = 300; lfo.connect(lg); lg.connect(o.frequency);
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1400; f.Q.value = 1.2; const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.4, t + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
    o.connect(f); f.connect(g); g.connect(master); if (verbIn) g.connect(verbIn); o.start(t); lfo.start(t); o.stop(t + 0.3); lfo.stop(t + 0.3);
    tone(t, 900, 120, 0.25, 0.2, 'sawtooth'); noise(t, 0.12, 4000, 3, 0.15, 'bandpass'); return;
  }
  if (kind === 'wave') { // shockwave cannon: deep whump and a rushing gust
    tone(t, 90, 28, 0.9, 1.0, 'sine'); tone(t, 180, 40, 0.5, 0.5, 'triangle');
    const s = ctx.createBufferSource(); s.buffer = noiseBuf; const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 0.8; f.frequency.setValueAtTime(300, t); f.frequency.exponentialRampToValueAtTime(3000, t + 0.25); f.frequency.exponentialRampToValueAtTime(200, t + 1.2);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.9, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.2); s.connect(f); f.connect(g); g.connect(master); if (verbIn) g.connect(verbIn); s.start(t); s.stop(t + 1.4); return;
  }
  const w = weight;
  noise(t, 0.018, 7000 * pitch, 0.6, 0.85, 'highpass');
  const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.playbackRate.value = 0.9 + Math.random() * 0.2;
  const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.Q.value = 0.9; f.frequency.setValueAtTime((5200 - w * 2600) * pitch, t); f.frequency.exponentialRampToValueAtTime(380 + 300 * (1 - w), t + 0.12 + w * 0.2);
  const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.9, t + 0.002); g.gain.exponentialRampToValueAtTime(0.25, t + 0.04 + w * 0.05); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22 + w * 0.45);
  s.connect(f); f.connect(g); g.connect(master); if (verbIn) g.connect(verbIn); s.start(t, Math.random()); s.stop(t + 0.9);
  tone(t, (120 + 40 * (1 - w)) * pitch, 38, 0.1 + w * 0.22, 0.6 + w * 0.45, 'sine');
  noise(t + 0.045 + w * 0.02, 0.02, 2200, 4, 0.12, 'bandpass');
  noise(t + 0.11 + w * 0.06, 0.18 + w * 0.2, 900 + 700 * (1 - w), 0.6, 0.1 + w * 0.06);
}
// a rotting throat: sawtooth source with jittered pitch (vocal fry), breath rasp, two formant filters and a gurgle
function throat(t, dur, f0, f1, o = {}) {
  if (voices > 7) return; voices++; setTimeout(() => voices--, (dur + 0.2) * 1000);
  const dest = o.dest || master; const vol = o.vol ?? 0.3;
  const src = ctx.createOscillator(); src.type = 'sawtooth'; src.frequency.setValueAtTime(f0, t); src.frequency.linearRampToValueAtTime(f1, t + dur);
  const jit = ctx.createOscillator(); jit.type = 'sawtooth'; jit.frequency.value = o.fry ?? (18 + Math.random() * 14); const jg = ctx.createGain(); jg.gain.value = f0 * (o.rough ?? 0.35); jit.connect(jg); jg.connect(src.frequency);
  const n = ctx.createBufferSource(); n.buffer = noiseBuf; n.playbackRate.value = 0.6; const nf = ctx.createBiquadFilter(); nf.type = 'bandpass'; nf.frequency.value = o.rasp ?? 1100; nf.Q.value = 0.9; const ng = ctx.createGain(); ng.gain.value = o.breath ?? 0.5; n.connect(nf); nf.connect(ng);
  const mix = ctx.createGain(); src.connect(mix); ng.connect(mix);
  const v = o.vowel || [520, 900]; const cl = o.close ?? 0.7;
  const fa = ctx.createBiquadFilter(); fa.type = 'bandpass'; fa.frequency.setValueAtTime(v[0], t); fa.frequency.linearRampToValueAtTime(v[0] * cl, t + dur); fa.Q.value = 5;
  const fb = ctx.createBiquadFilter(); fb.type = 'bandpass'; fb.frequency.setValueAtTime(v[1], t); fb.frequency.linearRampToValueAtTime(v[1] * cl, t + dur); fb.Q.value = 7;
  const am = ctx.createGain(); am.gain.value = 0.6; const gurg = ctx.createOscillator(); gurg.frequency.value = o.gurgle ?? 7 + Math.random() * 5; const gg = ctx.createGain(); gg.gain.value = 0.45; gurg.connect(gg); gg.connect(am.gain);
  const out = ctx.createGain(); out.gain.setValueAtTime(0.0001, t); out.gain.exponentialRampToValueAtTime(vol, t + (o.att ?? 0.08)); out.gain.setValueAtTime(vol, t + dur * 0.6); out.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  mix.connect(fa); mix.connect(fb); fa.connect(am); fb.connect(am); am.connect(out); out.connect(dest); if (verbIn && !o.dry) out.connect(verbIn);
  for (const x of [src, jit, n, gurg]) { x.start(t); x.stop(t + dur + 0.05); }
}
const ZV = {
  walker: { f: 85, vowel: [480, 820], rough: 0.4 }, runner: { f: 150, vowel: [700, 1300], rough: 0.55, rasp: 1800 }, fat: { f: 55, vowel: [380, 700], rough: 0.5, rasp: 700 },
  toxic: { f: 95, vowel: [420, 1000], rough: 0.6, gurgle: 14 }, screamer: { f: 220, vowel: [900, 1700], rough: 0.3, rasp: 2600 }, boss: { f: 42, vowel: [320, 600], rough: 0.7, rasp: 600 } };
function zdest(d = 6, px = 0) { const g = ctx.createGain(); g.gain.value = Math.max(0.05, Math.min(1, 6 / Math.max(2, d))); g.connect(pan(px)); return g; }
const ZSFX = {
  zgroan(type = 'walker', d = 6, px = 0) { if (!ctx) return; const t = now(); const p = ZV[type] || ZV.walker; const r = Math.random(); const dest = zdest(d, px);
    if (type === 'runner') throat(t, 0.5 + r * 0.4, p.f * 1.2, p.f * 0.8, { ...p, dest, vol: 0.32, close: 0.8, att: 0.03 });
    else if (type === 'toxic') { throat(t, 1.0 + r * 0.6, p.f, p.f * 0.75, { ...p, dest, vol: 0.3 }); noise(t + 0.3, 0.5, 400, 3, 0.08, 'bandpass', dest); }
    else throat(t, 0.9 + r * 0.9, p.f * (0.9 + r * 0.25), p.f * (0.7 + r * 0.15), { ...p, dest, vol: type === 'boss' ? 0.5 : 0.3 }); },
  zattack(type = 'walker', d = 2, px = 0) { if (!ctx) return; const t = now(); const p = ZV[type] || ZV.walker; const dest = zdest(d, px);
    throat(t, 0.32, p.f * 1.9, p.f * 1.2, { ...p, dest, vol: 0.42, rough: 0.8, att: 0.015, vowel: [p.vowel[0] * 1.3, p.vowel[1] * 1.3], close: 1.0, breath: 0.8 });
    noise(t + 0.18, 0.06, 1800, 2, 0.25, 'bandpass', dest); },
  zhurt(type = 'walker', d = 4, px = 0) { if (!ctx) return; const t = now(); const p = ZV[type] || ZV.walker; throat(t, 0.18, p.f * 1.6, p.f * 1.1, { ...p, dest: zdest(d, px), vol: 0.3, att: 0.01, close: 0.9, rough: 0.6, dry: true }); },
  zdeath(type = 'walker', d = 4, px = 0) { if (!ctx) return; const t = now(); const p = ZV[type] || ZV.walker; const dest = zdest(d, px);
    throat(t, 0.9, p.f * 1.3, p.f * 0.45, { ...p, dest, vol: 0.34, close: 0.5, gurgle: 16, breath: 0.9 }); noise(t + 0.5, 0.4, 500, 2, 0.12, 'bandpass', dest); },
  zscream(d = 8, px = 0) { if (!ctx) return; const t = now(); const dest = zdest(d * 0.5, px);
    throat(t, 1.6, 420, 300, { dest, vol: 0.6, vowel: [1000, 2000], rough: 0.25, rasp: 3000, breath: 1.2, att: 0.05, close: 0.85, fry: 40 });
    throat(t + 0.05, 1.5, 610, 380, { dest, vol: 0.35, vowel: [1300, 2600], rough: 0.2, rasp: 3500, breath: 0.8, close: 0.9, fry: 55 }); },
  zboss(d = 8, px = 0) { if (!ctx) return; const t = now(); const dest = zdest(d * 0.4, px); throat(t, 2.2, 48, 30, { dest, vol: 0.7, vowel: [300, 560], rough: 0.8, rasp: 500, breath: 1.0, close: 0.6 }); tone(t, 60, 30, 2.0, 0.4, 'sine', dest); },
  whisper(px = 0) { if (!ctx) return; const t = now(); const dest = pan(px); for (let n = 0; n < 5; n++) noise(t + n * 0.18 + Math.random() * 0.1, 0.16, 2500 + Math.random() * 2500, 6, 0.06, 'bandpass', dest); },
  skid(amt = 1) { if (!ctx) return; const t = now(); noise(t, 0.25, 1800 + Math.random() * 600, 3, 0.1 * amt, 'bandpass'); },
  nos() { if (!ctx) return; const t = now(); noise(t, 0.8, 900, 0.6, 0.4, 'highpass'); tone(t, 200, 900, 0.6, 0.1, 'sawtooth'); },
  rotor(on = 1) { if (!ctx) return; const t = now(); for (let n = 0; n < 4; n++) noise(t + n * 0.075, 0.06, 220, 1.5, 0.3 * on, 'lowpass'); },
  droneBuzz() { if (!ctx) return; const t = now(); tone(t, 240, 260, 0.2, 0.05, 'sawtooth'); },
  beep(f = 880) { if (!ctx) return; const t = now(); tone(t, f, f, 0.08, 0.1, 'square'); },
  page() { if (!ctx) return; const t = now(); noise(t, 0.25, 3000, 1, 0.12, 'bandpass'); },
};

export const sfx = {
  ...ZSFX,
  shot(pitch = 1, weight = 0.25, wonder = false, kind = '') { gunshot(pitch, weight, wonder, kind); },
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
  radio() { if (!ctx) return; const t = now(); noise(t, 1.1, 1900, 2, 0.22, 'bandpass'); noise(t + 0.15, 0.5, 900, 2, 0.12, 'bandpass'); },
  crash(v) { if (!ctx) return; const t = now(); noise(t, 0.4, 500, 0.6, Math.min(1, 0.15 + v * 0.7)); tone(t, 90, 40, 0.25, Math.min(0.6, v * 0.6)); },
};
export function setEngine(on, rpm = 0) {
  if (!ctx) return;
  if (on && !engine) { const o = ctx.createOscillator(); o.type = 'sawtooth'; const o2 = ctx.createOscillator(); o2.type = 'square'; const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 500; const g = ctx.createGain(); g.gain.value = 0.0001; o.connect(f); o2.connect(f); f.connect(g); g.connect(master); o.start(); o2.start(); engine = { o, o2, f, g }; }
  if (!engine) return;
  const t = now();
  if (!on) { engine.g.gain.setTargetAtTime(0.0001, t, 0.1); return; }
  const base = 34 + rpm * 70; engine.o.frequency.setTargetAtTime(base, t, 0.05); engine.o2.frequency.setTargetAtTime(base * 0.5, t, 0.05); engine.f.frequency.setTargetAtTime(380 + rpm * 900, t, 0.05); engine.g.gain.setTargetAtTime(0.12 + rpm * 0.1, t, 0.05);
}
let squeal = null;
export function setSqueal(level) { // tyre squeal: a narrow band of noise plus a wobbling whine
  if (!ctx) return;
  if (!squeal && level > 0) { const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true; const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 2100; f.Q.value = 6; const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = 980; const lfo = ctx.createOscillator(); lfo.frequency.value = 9; const lg = ctx.createGain(); lg.gain.value = 60; lfo.connect(lg); lg.connect(o.frequency); const og = ctx.createGain(); og.gain.value = 0.25; o.connect(og); const g = ctx.createGain(); g.gain.value = 0.0001; s.connect(f); f.connect(g); og.connect(g); g.connect(master); s.start(); o.start(); lfo.start(); squeal = { g, f, o }; }
  if (!squeal) return; const t = now();
  squeal.g.gain.setTargetAtTime(Math.max(0.0001, level * 0.22), t, 0.06); squeal.f.frequency.setTargetAtTime(1700 + level * 900, t, 0.1); squeal.o.frequency.setTargetAtTime(860 + level * 260, t, 0.1);
}
function ambience() { // low wind + distant drone
  const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true; const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 260; const g = ctx.createGain(); g.gain.value = 0.05; s.connect(f); f.connect(g); g.connect(master); s.start();
  const o = ctx.createOscillator(); o.frequency.value = 55; const og = ctx.createGain(); og.gain.value = 0.02; const lfo = ctx.createOscillator(); lfo.frequency.value = 0.07; const lg = ctx.createGain(); lg.gain.value = 0.015; lfo.connect(lg); lg.connect(og.gain); o.connect(og); og.connect(master); o.start(); lfo.start();
  music = { g, og };
}
