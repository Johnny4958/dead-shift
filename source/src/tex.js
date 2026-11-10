// Procedural canvas textures (no image files). Each returns a cached THREE texture.
import * as THREE from 'three';
import { rng } from './util.js';

const cache = new Map();
export let ANISO = 4;
export function setAniso(a) { ANISO = a; for (const t of cache.values()) { t.anisotropy = a; t.needsUpdate = true; } }
export function make(key, w, h, draw, srgb = true) {
  if (cache.has(key)) return cache.get(key);
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const x = c.getContext('2d'); draw(x, w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = ANISO;
  cache.set(key, t); return t;
}
export function speckle(x, w, h, n, cols, s0, s1, seed) { const r = rng(seed); for (let i = 0; i < n; i++) { x.fillStyle = cols[(r() * cols.length) | 0]; const s = s0 + r() * (s1 - s0); x.fillRect(r() * w, r() * h, s, s); } }
export function blotches(x, w, h, n, col, r0, r1, seed) { const r = rng(seed); for (let i = 0; i < n; i++) { const cx = r() * w, cy = r() * h, rad = r0 + r() * (r1 - r0); for (const ox of [-w, 0, w]) for (const oy of [-h, 0, h]) { const g = x.createRadialGradient(cx + ox, cy + oy, 0, cx + ox, cy + oy, rad); g.addColorStop(0, col); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(cx + ox - rad, cy + oy - rad, rad * 2, rad * 2); } } }
// grime gradient from the bottom of a wall
export function bottomGrime(x, w, h, a) { const g = x.createLinearGradient(0, h, 0, h * 0.55); g.addColorStop(0, `rgba(25,20,15,${a})`); g.addColorStop(1, 'rgba(25,20,15,0)'); x.fillStyle = g; x.fillRect(0, 0, w, h); }

// Bump map: derive a normal map from a grayscale height canvas
export function normalFrom(key, w, h, drawHeight, strength = 2) {
  return make(key, w, h, (x) => {
    const c = document.createElement('canvas'); c.width = w; c.height = h; const hx = c.getContext('2d'); drawHeight(hx, w, h);
    const src = hx.getImageData(0, 0, w, h).data; const out = x.createImageData(w, h); const d = out.data;
    const H = (i, j) => src[(((j + h) % h) * w + ((i + w) % w)) * 4] / 255;
    for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) {
      const dx = (H(i + 1, j) - H(i - 1, j)) * strength, dy = (H(i, j + 1) - H(i, j - 1)) * strength;
      const l = Math.hypot(dx, dy, 1); const k = (j * w + i) * 4;
      d[k] = (-dx / l * 0.5 + 0.5) * 255; d[k + 1] = (dy / l * 0.5 + 0.5) * 255; d[k + 2] = (1 / l * 0.5 + 0.5) * 255; d[k + 3] = 255;
    }
    x.putImageData(out, 0, 0);
  }, false);
}

const brickH = (x, w, h) => { x.fillStyle = '#fff'; x.fillRect(0, 0, w, h); x.fillStyle = '#444'; const bh = h / 16, bw = w / 4; for (let j = 0; j < 16; j++) { x.fillRect(0, j * bh, w, 3); const o = j % 2 ? bw / 2 : 0; for (let i = 0; i <= 4; i++) x.fillRect(o + i * bw - 1.5, j * bh, 3, bh); } speckle(x, w, h, 1500, ['#ddd', '#bbb'], 1, 3, 3); };

export const T = {
  asphalt: () => make('asphalt', 512, 512, (x, w, h) => {
    x.fillStyle = '#2b2c2e'; x.fillRect(0, 0, w, h);
    speckle(x, w, h, 26000, ['#242527', '#333436', '#3b3c3e', '#1f2022', '#46474a'], 1, 2.5, 1);
    blotches(x, w, h, 14, 'rgba(10,10,12,.35)', 30, 90, 2); blotches(x, w, h, 10, 'rgba(90,85,70,.12)', 20, 70, 3);
    const r = rng(4); x.strokeStyle = 'rgba(8,8,8,.75)'; x.lineCap = 'round';
    for (let i = 0; i < 9; i++) { x.lineWidth = 1 + r() * 2; x.beginPath(); let px = r() * w, py = r() * h; x.moveTo(px, py); for (let k = 0; k < 7; k++) { px += (r() - 0.5) * 70; py += (r() - 0.5) * 70; x.lineTo(px, py); } x.stroke(); }
  }),
  asphaltN: () => normalFrom('asphaltN', 256, 256, (x, w, h) => { x.fillStyle = '#888'; x.fillRect(0, 0, w, h); speckle(x, w, h, 9000, ['#666', '#aaa', '#999', '#777'], 1, 2, 5); }, 3),
  stucco: () => make('stucco', 256, 256, (x, w, h) => { x.fillStyle = '#b8a98c'; x.fillRect(0, 0, w, h); speckle(x, w, h, 9000, ['#ab9c80', '#c4b597', '#a29378', '#cdbfa2'], 1, 3, 6); blotches(x, w, h, 10, 'rgba(70,60,40,.18)', 20, 60, 7); bottomGrime(x, w, h, 0.55); }),
  stuccoN: () => normalFrom('stuccoN', 128, 128, (x, w, h) => { x.fillStyle = '#888'; x.fillRect(0, 0, w, h); speckle(x, w, h, 3000, ['#555', '#bbb'], 1, 3, 8); }, 2.5),
  brick: () => make('brick', 256, 256, (x, w, h) => {
    x.fillStyle = '#6d6a63'; x.fillRect(0, 0, w, h); const r = rng(9); const bh = h / 16, bw = w / 4;
    for (let j = 0; j < 16; j++) { const o = j % 2 ? bw / 2 : 0; for (let i = -1; i <= 4; i++) { const v = 0.75 + r() * 0.35; x.fillStyle = `rgb(${120 * v | 0},${52 * v | 0},${38 * v | 0})`; x.fillRect(o + i * bw + 1.5, j * bh + 1.5, bw - 3, bh - 3); } }
    speckle(x, w, h, 3000, ['rgba(0,0,0,.18)', 'rgba(255,220,200,.07)'], 1, 3, 10); bottomGrime(x, w, h, 0.6);
  }),
  brickN: () => normalFrom('brickN', 256, 256, brickH, 4),
  panel: () => make('panel', 256, 256, (x, w, h) => { // interior: dingy wallpaper over wood wainscot
    x.fillStyle = '#5d6b55'; x.fillRect(0, 0, w, h); x.strokeStyle = 'rgba(30,40,25,.35)'; x.lineWidth = 2; for (let i = 0; i < w; i += 16) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, h); x.stroke(); }
    for (let j = 8; j < h * 0.62; j += 32) for (let i = 8; i < w; i += 32) { x.fillStyle = 'rgba(200,190,140,.16)'; x.beginPath(); x.arc(i + ((j / 32) % 2) * 16, j, 4, 0, 7); x.fill(); }
    blotches(x, w, h, 12, 'rgba(60,50,20,.25)', 15, 50, 11);
    x.fillStyle = '#4b3220'; x.fillRect(0, h * 0.66, w, h * 0.34); x.fillStyle = '#2e1d12'; x.fillRect(0, h * 0.66, w, 5);
    for (let i = 0; i < w; i += 32) { x.fillStyle = 'rgba(0,0,0,.35)'; x.fillRect(i, h * 0.66, 2, h); }
    bottomGrime(x, w, h, 0.5);
  }),
  dinerWall: () => make('dinerwall', 256, 256, (x, w, h) => { x.fillStyle = '#9a9a92'; x.fillRect(0, 0, w, h); const tw = 32, th = 16; for (let j = 0; j < h / th; j++) for (let i = -1; i < w / tw + 1; i++) { const o = j % 2 ? tw / 2 : 0; x.fillStyle = j > 9 && j < 12 ? '#7a1a1a' : '#d8d6cc'; x.fillRect(i * tw + o + 1, j * th + 1, tw - 2, th - 2); } blotches(x, w, h, 10, 'rgba(70,55,25,.35)', 15, 45, 43); bottomGrime(x, w, h, 0.55); }),
  block: () => make('block', 256, 256, (x, w, h) => { x.fillStyle = '#5c5b57'; x.fillRect(0, 0, w, h); const r = rng(44); for (let j = 0; j < 8; j++) { const o = j % 2 ? 64 : 0; for (let i = -1; i < 3; i++) { const v = 0.8 + r() * 0.25; x.fillStyle = `rgb(${128 * v | 0},${126 * v | 0},${118 * v | 0})`; x.fillRect(i * 128 + o + 2, j * 32 + 2, 124, 28); } } speckle(x, w, h, 4000, ['rgba(0,0,0,.15)', 'rgba(255,255,255,.06)'], 1, 3, 45); blotches(x, w, h, 6, 'rgba(30,25,15,.4)', 15, 50, 46); bottomGrime(x, w, h, 0.6); }),
  tileChecker: () => make('checker', 256, 256, (x, w, h) => { const s = 32; for (let j = 0; j < 8; j++) for (let i = 0; i < 8; i++) { x.fillStyle = (i + j) % 2 ? '#1d1d1f' : '#d9d4c5'; x.fillRect(i * s, j * s, s, s); } speckle(x, w, h, 2500, ['rgba(60,50,30,.18)', 'rgba(0,0,0,.2)'], 1, 3, 12); blotches(x, w, h, 10, 'rgba(50,35,15,.3)', 15, 50, 13); x.strokeStyle = 'rgba(0,0,0,.4)'; x.lineWidth = 1; for (let i = 0; i <= 8; i++) { x.beginPath(); x.moveTo(i * s, 0); x.lineTo(i * s, h); x.stroke(); x.beginPath(); x.moveTo(0, i * s); x.lineTo(w, i * s); x.stroke(); } }),
  carpet: () => make('carpet', 256, 256, (x, w, h) => { x.fillStyle = '#5a1e1e'; x.fillRect(0, 0, w, h); speckle(x, w, h, 9000, ['#4a1818', '#6a2626', '#3e1313', '#702d24'], 1, 2.5, 14); x.strokeStyle = 'rgba(200,160,80,.25)'; x.lineWidth = 3; for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) { x.beginPath(); x.moveTo(i * 64 + 32, j * 64 + 12); x.lineTo(i * 64 + 52, j * 64 + 32); x.lineTo(i * 64 + 32, j * 64 + 52); x.lineTo(i * 64 + 12, j * 64 + 32); x.closePath(); x.stroke(); } blotches(x, w, h, 8, 'rgba(20,10,5,.35)', 20, 60, 15); }),
  concrete: () => make('concrete', 256, 256, (x, w, h) => { x.fillStyle = '#6f6e6a'; x.fillRect(0, 0, w, h); speckle(x, w, h, 7000, ['#666561', '#787773', '#5e5d59', '#82817c'], 1, 3, 16); blotches(x, w, h, 6, 'rgba(15,12,8,.5)', 20, 55, 17); x.strokeStyle = 'rgba(0,0,0,.35)'; x.lineWidth = 2; x.strokeRect(0, 0, w, h); }),
  wood: () => make('wood', 256, 64, (x, w, h) => { x.fillStyle = '#7a5434'; x.fillRect(0, 0, w, h); const r = rng(18); for (let i = 0; i < 45; i++) { x.strokeStyle = `rgba(40,20,8,${0.08 + r() * 0.18})`; x.lineWidth = 1 + r() * 2; x.beginPath(); const y = r() * h; x.moveTo(0, y); x.bezierCurveTo(w * 0.3, y + r() * 8 - 4, w * 0.6, y + r() * 8 - 4, w, y + r() * 4 - 2); x.stroke(); } for (let i = 0; i < 3; i++) { x.fillStyle = 'rgba(30,15,5,.5)'; x.beginPath(); x.ellipse(r() * w, r() * h, 5, 3, 0, 0, 7); x.fill(); } }),
  plank: () => make('plank', 256, 64, (x, w, h) => { x.fillStyle = '#8a6a48'; x.fillRect(0, 0, w, h); const r = rng(19); for (let i = 0; i < 40; i++) { x.strokeStyle = `rgba(50,30,10,${0.1 + r() * 0.2})`; x.lineWidth = 1 + r() * 2; x.beginPath(); const y = r() * h; x.moveTo(0, y); x.lineTo(w, y + r() * 6 - 3); x.stroke(); } x.fillStyle = '#333'; for (const px of [14, w - 14]) { x.beginPath(); x.arc(px, h * 0.3, 3, 0, 7); x.fill(); x.beginPath(); x.arc(px, h * 0.7, 3, 0, 7); x.fill(); } bottomGrime(x, w, h, 0.25); }),
  metal: () => make('metal', 128, 128, (x, w, h) => { x.fillStyle = '#5b5f62'; x.fillRect(0, 0, w, h); for (let i = 0; i < w; i += 16) { const g = x.createLinearGradient(i, 0, i + 16, 0); g.addColorStop(0, '#4c5053'); g.addColorStop(0.5, '#73777a'); g.addColorStop(1, '#4c5053'); x.fillStyle = g; x.fillRect(i, 0, 16, h); } blotches(x, w, h, 8, 'rgba(110,55,20,.45)', 8, 30, 20); }),
  rust: () => make('rust', 128, 128, (x, w, h) => { x.fillStyle = '#5a3a26'; x.fillRect(0, 0, w, h); speckle(x, w, h, 3000, ['#6d4630', '#4a2d1c', '#7d5236', '#3a2416'], 1, 4, 21); blotches(x, w, h, 6, 'rgba(60,70,70,.5)', 10, 40, 22); }),
  ceiling: () => make('ceiling', 128, 128, (x, w, h) => { x.fillStyle = '#8f8b80'; x.fillRect(0, 0, w, h); speckle(x, w, h, 1200, ['rgba(0,0,0,.12)', 'rgba(255,255,255,.06)'], 1, 2, 23); blotches(x, w, h, 4, 'rgba(90,70,30,.35)', 10, 40, 24); x.strokeStyle = '#5e5a52'; x.lineWidth = 3; x.strokeRect(0, 0, w, h); }),
  chain: () => make('chain', 128, 128, (x, w, h) => { x.clearRect(0, 0, w, h); x.strokeStyle = 'rgba(170,175,175,1)'; x.lineWidth = 2.2; const s = 16; for (let i = -h; i < w + h; i += s) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i + h, h); x.stroke(); x.beginPath(); x.moveTo(i + h, 0); x.lineTo(i, h); x.stroke(); } }),
  glow: () => make('glow', 64, 64, (x, w, h) => { const g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.3, 'rgba(255,255,255,.5)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, w, h); }),
  puff: () => make('puff', 64, 64, (x, w, h) => { const r = rng(25); for (let i = 0; i < 18; i++) { const a = r() * 6.28, d = r() * 14, cx = 32 + Math.cos(a) * d, cy = 32 + Math.sin(a) * d, rad = 8 + r() * 12; const g = x.createRadialGradient(cx, cy, 0, cx, cy, rad); g.addColorStop(0, 'rgba(255,255,255,.3)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, w, h); } }),
  flame: () => make('flame', 64, 128, (x, w, h) => { for (let i = 0; i < 3; i++) { const g = x.createRadialGradient(32, 96, 2, 32, 84, 40 - i * 9); g.addColorStop(0, 'rgba(255,255,255,.95)'); g.addColorStop(0.5, 'rgba(255,255,255,.4)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.beginPath(); x.moveTo(32, 4 + i * 14); x.bezierCurveTo(60, 50, 62, 112, 32, 124); x.bezierCurveTo(2, 112, 4, 50, 32, 4 + i * 14); x.fill(); } }),
  blood: () => make('blood', 128, 128, (x, w, h) => { x.clearRect(0, 0, w, h); const r = rng(26); x.fillStyle = 'rgba(70,4,4,.9)'; x.beginPath(); x.arc(64, 64, 22, 0, 7); x.fill(); for (let i = 0; i < 26; i++) { const a = r() * 6.28, d = 18 + r() * 40, s = 2 + r() * 8; x.beginPath(); x.arc(64 + Math.cos(a) * d, 64 + Math.sin(a) * d, s, 0, 7); x.fill(); } }),
  sky: () => make('sky', 16, 256, (x, w, h) => { const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, '#02030a'); g.addColorStop(0.42, '#0b1224'); g.addColorStop(0.5, '#1f2a36'); g.addColorStop(0.53, '#2a2a2a'); g.addColorStop(1, '#0a0a0a'); x.fillStyle = g; x.fillRect(0, 0, w, h); }),
  moon: () => make('moon', 128, 128, (x, w, h) => { const g = x.createRadialGradient(64, 64, 0, 64, 64, 64); g.addColorStop(0, 'rgba(240,240,255,1)'); g.addColorStop(0.33, 'rgba(220,225,240,1)'); g.addColorStop(0.36, 'rgba(160,180,230,.35)'); g.addColorStop(1, 'rgba(100,120,200,0)'); x.fillStyle = g; x.fillRect(0, 0, w, h); x.fillStyle = 'rgba(150,150,170,.35)'; for (const [a, b, c] of [[56, 54, 7], [72, 70, 5], [60, 76, 4], [74, 52, 3]]) { x.beginPath(); x.arc(a, b, c, 0, 7); x.fill(); } }),
  label: (text, bg, fg, w = 256, h = 64, font = 'bold 38px Arial') => make('lbl' + text + bg + fg + w + h, w, h, (x) => { x.fillStyle = bg; x.fillRect(0, 0, w, h); x.fillStyle = fg; x.font = font; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(text, w / 2, h / 2 + 2); }),
  chalk: (name, draw) => make('chalk' + name, 256, 128, (x, w, h) => { x.clearRect(0, 0, w, h); x.strokeStyle = 'rgba(240,235,215,.9)'; x.lineWidth = 3; x.lineJoin = 'round'; x.shadowColor = 'rgba(255,255,240,.6)'; x.shadowBlur = 4; draw(x, w, h); }),
  neon: (text, col, w = 512, h = 128, size = 72) => make('neon' + text + col, w, h, (x) => { x.clearRect(0, 0, w, h); x.font = `bold ${size}px Arial Black, Arial`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.shadowColor = col; x.shadowBlur = 24; x.fillStyle = col; x.fillText(text, w / 2, h / 2); x.shadowBlur = 8; x.fillStyle = '#fff'; x.globalAlpha = 0.65; x.fillText(text, w / 2, h / 2); }),
  perk: (name, col, sub) => make('perk' + name, 128, 256, (x, w, h) => { const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, col); g.addColorStop(1, '#111'); x.fillStyle = g; x.fillRect(0, 0, w, h); x.fillStyle = 'rgba(0,0,0,.35)'; x.fillRect(10, 150, w - 20, 80); x.fillStyle = '#fff'; x.font = 'bold 22px Arial Black, Arial'; x.textAlign = 'center'; const words = name.split(' '); words.forEach((wd, i) => x.fillText(wd.toUpperCase(), w / 2, 40 + i * 26)); x.font = 'bold 15px Arial'; x.fillText(sub, w / 2, 185); x.strokeStyle = 'rgba(255,255,255,.6)'; x.lineWidth = 3; x.strokeRect(6, 6, w - 12, h - 12); for (let i = 0; i < 3; i++) { x.fillStyle = 'rgba(255,255,255,.25)'; x.beginPath(); x.arc(w / 2, 100, 20 - i * 6, 0, 7); x.fill(); } }),
  boxSide: () => make('boxside', 256, 128, (x, w, h) => { x.fillStyle = '#4a3420'; x.fillRect(0, 0, w, h); const r = rng(30); for (let i = 0; i < 30; i++) { x.strokeStyle = `rgba(20,10,4,${0.15 + r() * 0.2})`; x.beginPath(); const y = r() * h; x.moveTo(0, y); x.lineTo(w, y + r() * 4 - 2); x.stroke(); } x.font = 'bold 84px Arial Black, Arial'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillStyle = '#d8c79a'; x.fillText('?', w / 2, h / 2 + 4); x.strokeStyle = '#2a1a0d'; x.lineWidth = 8; x.strokeRect(4, 4, w - 8, h - 8); x.fillStyle = '#8a7a50'; for (const [a, b] of [[4, 4], [w - 20, 4], [4, h - 20], [w - 20, h - 20]]) x.fillRect(a, b, 16, 16); }),
  skin: (base) => make('skin' + base, 128, 128, (x, w, h) => { x.fillStyle = base; x.fillRect(0, 0, w, h); speckle(x, w, h, 1800, ['rgba(60,20,20,.25)', 'rgba(40,50,30,.25)', 'rgba(255,255,255,.06)'], 1, 4, 31); blotches(x, w, h, 7, 'rgba(90,10,10,.45)', 6, 22, 32); blotches(x, w, h, 5, 'rgba(30,40,20,.4)', 8, 26, 33); }),
  cloth: (base) => make('cloth' + base, 128, 128, (x, w, h) => { x.fillStyle = base; x.fillRect(0, 0, w, h); for (let i = 0; i < h; i += 3) { x.fillStyle = 'rgba(0,0,0,.06)'; x.fillRect(0, i, w, 1); } blotches(x, w, h, 9, 'rgba(80,5,5,.55)', 6, 26, 34); blotches(x, w, h, 6, 'rgba(20,15,10,.45)', 8, 28, 35); speckle(x, w, h, 500, ['rgba(0,0,0,.25)'], 1, 3, 36); }),
  camo: () => make('camo', 128, 128, (x, w, h) => { x.fillStyle = '#4b5136'; x.fillRect(0, 0, w, h); blotches(x, w, h, 14, 'rgba(30,32,20,.8)', 8, 22, 37); blotches(x, w, h, 10, 'rgba(110,100,70,.6)', 6, 18, 38); }),
  pap: () => make('pap', 128, 128, (x, w, h) => { const g = x.createLinearGradient(0, 0, w, h); g.addColorStop(0, '#3b0d5e'); g.addColorStop(0.5, '#8a2ad8'); g.addColorStop(1, '#1d6fd8'); x.fillStyle = g; x.fillRect(0, 0, w, h); x.strokeStyle = 'rgba(255,180,255,.55)'; x.lineWidth = 2; const r = rng(39); for (let i = 0; i < 18; i++) { x.beginPath(); let px = r() * w, py = r() * h; x.moveTo(px, py); for (let k = 0; k < 4; k++) { px += (r() - 0.5) * 40; py += (r() - 0.5) * 40; x.lineTo(px, py); } x.stroke(); } }),
  lines: () => make('lines', 64, 256, (x, w, h) => { x.clearRect(0, 0, w, h); x.fillStyle = 'rgba(220,210,170,.75)'; x.fillRect(24, 0, 16, h); speckle(x, w, h, 900, ['rgba(0,0,0,.9)'], 1, 4, 40); }, true),
  dirt: () => make('dirt', 128, 128, (x, w, h) => { x.clearRect(0, 0, w, h); blotches(x, w, h, 10, 'rgba(48,38,24,.55)', 12, 40, 41); speckle(x, w, h, 900, ['rgba(40,30,20,.6)', 'rgba(70,60,40,.4)'], 1, 3, 42); })
};
