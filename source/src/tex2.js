// More canvas textures for the town, the woods and the zombies.
import * as THREE from 'three';
import { make, speckle, blotches } from './tex.js';
import { rng } from './util.js';

const stripes = (x, w, h, n, col, vertical) => { for (let i = 0; i < n; i++) { x.fillStyle = col; if (vertical) x.fillRect(i * w / n, 0, 2, h); else x.fillRect(0, i * h / n, w, 2); } };

export const T2 = {
  grass: () => make('grass', 256, 256, (x, w, h) => {
    x.fillStyle = '#3b4426'; x.fillRect(0, 0, w, h);
    blotches(x, w, h, 18, 'rgba(70,62,38,.5)', 14, 40, 101); blotches(x, w, h, 14, 'rgba(34,48,22,.55)', 10, 36, 102);
    const r = rng(103); for (let i = 0; i < 2600; i++) { const px = r() * w, py = r() * h, l = 3 + r() * 7; x.strokeStyle = r() < 0.5 ? 'rgba(96,110,52,.55)' : 'rgba(40,52,24,.6)'; x.lineWidth = 1; x.beginPath(); x.moveTo(px, py); x.lineTo(px + (r() - 0.5) * 3, py - l); x.stroke(); }
  }),
  road: () => make('road', 256, 512, (x, w, h) => {
    x.fillStyle = '#2e2e2f'; x.fillRect(0, 0, w, h);
    speckle(x, w, h, 5000, ['rgba(255,255,255,.07)', 'rgba(0,0,0,.25)', 'rgba(90,90,90,.2)'], 1, 3, 111);
    blotches(x, w, h, 10, 'rgba(15,15,15,.4)', 12, 40, 112);
    // faded center dashes
    x.fillStyle = 'rgba(190,160,60,.55)'; for (let y = 0; y < h; y += 128) x.fillRect(w / 2 - 4, y + 20, 8, 70);
    // cracks with weeds poking through
    const r = rng(113); for (let c = 0; c < 9; c++) { let px = r() * w, py = r() * h; x.strokeStyle = 'rgba(10,10,10,.8)'; x.lineWidth = 1.5; x.beginPath(); x.moveTo(px, py); for (let s = 0; s < 8; s++) { px += (r() - 0.5) * 30; py += (r() - 0.5) * 30; x.lineTo(px, py); } x.stroke(); x.fillStyle = 'rgba(70,90,35,.7)'; for (let s = 0; s < 6; s++) x.fillRect(px + (r() - 0.5) * 10, py + (r() - 0.5) * 10, 2, 4); }
  }),
  weeds: () => make('weeds', 128, 128, (x, w, h) => {
    x.clearRect(0, 0, w, h); const r = rng(121);
    for (let i = 0; i < 70; i++) { const bx = 8 + r() * (w - 16), l = 30 + r() * 90; x.strokeStyle = ['#56662c', '#6f7a34', '#3e4d22', '#7d7440'][(r() * 4) | 0]; x.lineWidth = 1.5 + r() * 2; x.beginPath(); x.moveTo(bx, h); x.quadraticCurveTo(bx + (r() - 0.5) * 30, h - l * 0.6, bx + (r() - 0.5) * 40, h - l); x.stroke(); }
    for (let i = 0; i < 6; i++) { x.fillStyle = 'rgba(160,140,70,.8)'; x.beginPath(); x.arc(10 + r() * (w - 20), 10 + r() * 50, 3, 0, 7); x.fill(); }
  }),
  siding: (base = '#7d8a8c') => make('siding' + base, 256, 256, (x, w, h) => {
    x.fillStyle = base; x.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 16) { x.fillStyle = 'rgba(0,0,0,.28)'; x.fillRect(0, y + 13, w, 3); x.fillStyle = 'rgba(255,255,255,.07)'; x.fillRect(0, y, w, 2); }
    blotches(x, w, h, 12, 'rgba(40,45,30,.35)', 10, 36, 131); speckle(x, w, h, 900, ['rgba(0,0,0,.2)'], 1, 3, 132);
    // peeling paint and streaks
    const r = rng(133); for (let i = 0; i < 14; i++) { x.fillStyle = 'rgba(60,50,40,.45)'; x.fillRect(r() * w, r() * h, 6 + r() * 20, 3 + r() * 6); }
    for (let i = 0; i < 10; i++) { x.fillStyle = 'rgba(30,25,15,.18)'; x.fillRect(r() * w, 0, 3 + r() * 5, h * (0.3 + r() * 0.7)); }
  }),
  logs: () => make('logs', 256, 256, (x, w, h) => {
    x.fillStyle = '#5a3f26'; x.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 32) { const g = x.createLinearGradient(0, y, 0, y + 32); g.addColorStop(0, '#3a2715'); g.addColorStop(0.5, '#7a5634'); g.addColorStop(1, '#2c1d10'); x.fillStyle = g; x.fillRect(0, y, w, 32); }
    speckle(x, w, h, 1400, ['rgba(0,0,0,.25)', 'rgba(140,100,60,.2)'], 1, 4, 141);
  }),
  stone: () => make('stone', 256, 256, (x, w, h) => {
    x.fillStyle = '#6d6a63'; x.fillRect(0, 0, w, h); const r = rng(151);
    for (let y = 0; y < h; y += 32) for (let xx = (y / 32) % 2 ? -24 : 0; xx < w; xx += 48) { x.fillStyle = `rgb(${90 + r() * 30 | 0},${88 + r() * 28 | 0},${82 + r() * 24 | 0})`; x.fillRect(xx + 2, y + 2, 44, 28); }
    blotches(x, w, h, 14, 'rgba(50,60,30,.35)', 8, 30, 152); speckle(x, w, h, 2000, ['rgba(0,0,0,.25)', 'rgba(255,255,255,.08)'], 1, 3, 153);
  }),
  barn: () => make('barn', 256, 256, (x, w, h) => {
    x.fillStyle = '#6b2a20'; x.fillRect(0, 0, w, h); stripes(x, w, h, 12, 'rgba(0,0,0,.45)', true);
    blotches(x, w, h, 16, 'rgba(80,70,60,.5)', 8, 28, 161); speckle(x, w, h, 1500, ['rgba(0,0,0,.25)', 'rgba(200,170,140,.12)'], 1, 4, 162);
  }),
  metal: () => make('metal', 256, 256, (x, w, h) => {
    x.fillStyle = '#6f7472'; x.fillRect(0, 0, w, h);
    for (let i = 0; i < w; i += 16) { const g = x.createLinearGradient(i, 0, i + 16, 0); g.addColorStop(0, 'rgba(0,0,0,.25)'); g.addColorStop(0.5, 'rgba(255,255,255,.12)'); g.addColorStop(1, 'rgba(0,0,0,.25)'); x.fillStyle = g; x.fillRect(i, 0, 16, h); }
    blotches(x, w, h, 18, 'rgba(120,60,20,.4)', 6, 30, 171); speckle(x, w, h, 800, ['rgba(100,50,20,.5)'], 1, 4, 172);
  }),
  bunker: () => make('bunker', 256, 256, (x, w, h) => {
    x.fillStyle = '#4d4f4a'; x.fillRect(0, 0, w, h); for (let y = 0; y < h; y += 64) { x.fillStyle = 'rgba(0,0,0,.4)'; x.fillRect(0, y, w, 3); }
    blotches(x, w, h, 14, 'rgba(30,40,20,.4)', 10, 40, 181); speckle(x, w, h, 2500, ['rgba(0,0,0,.3)', 'rgba(255,255,255,.06)'], 1, 3, 182);
    x.fillStyle = 'rgba(200,170,40,.6)'; for (let i = 0; i < w; i += 32) { x.save(); x.translate(i, h - 20); x.rotate(-0.6); x.fillRect(0, 0, 12, 40); x.restore(); }
  }),
  mallTile: () => make('mallTile', 256, 256, (x, w, h) => {
    x.fillStyle = '#b7b0a2'; x.fillRect(0, 0, w, h); for (let j = 0; j < 4; j++) for (let i = 0; i < 4; i++) { x.fillStyle = (i + j) % 2 ? '#a69f90' : '#c2bcae'; x.fillRect(i * 64 + 1, j * 64 + 1, 62, 62); }
    blotches(x, w, h, 12, 'rgba(60,50,30,.35)', 10, 40, 191); speckle(x, w, h, 1500, ['rgba(0,0,0,.2)'], 1, 4, 192);
    const r = rng(193); for (let i = 0; i < 5; i++) { x.strokeStyle = 'rgba(30,30,30,.6)'; x.beginPath(); let px = r() * w, py = r() * h; x.moveTo(px, py); for (let s = 0; s < 6; s++) { px += (r() - 0.5) * 40; py += (r() - 0.5) * 40; x.lineTo(px, py); } x.stroke(); }
  }),
  roof: () => make('roof', 256, 256, (x, w, h) => { x.fillStyle = '#2b2a28'; x.fillRect(0, 0, w, h); speckle(x, w, h, 4000, ['rgba(255,255,255,.06)', 'rgba(0,0,0,.3)'], 1, 3, 201); blotches(x, w, h, 10, 'rgba(60,70,40,.4)', 10, 40, 202); }),
  bark: () => make('bark', 64, 256, (x, w, h) => { x.fillStyle = '#3b2c20'; x.fillRect(0, 0, w, h); const r = rng(211); for (let i = 0; i < 40; i++) { x.fillStyle = r() < 0.5 ? 'rgba(0,0,0,.4)' : 'rgba(110,90,70,.3)'; x.fillRect(r() * w, 0, 1 + r() * 3, h); } }),
  leaves: () => make('leaves', 256, 256, (x, w, h) => {
    x.clearRect(0, 0, w, h); const r = rng(221);
    for (let i = 0; i < 900; i++) { const px = r() * w, py = r() * h; const dx = px - w / 2, dy = py - h / 2; if (dx * dx + dy * dy > (w / 2 - 6) ** 2 * (0.6 + r() * 0.4)) continue; x.fillStyle = ['#1f2d16', '#2b3b1b', '#384a22', '#1a2412', '#4a4a24'][(r() * 5) | 0]; x.beginPath(); x.ellipse(px, py, 4 + r() * 6, 2 + r() * 3, r() * 3, 0, 7); x.fill(); }
  }),
  shards: () => make('shards', 128, 128, (x, w, h) => {
    x.clearRect(0, 0, w, h); x.fillStyle = 'rgba(170,200,210,.35)'; const r = rng(231);
    for (let i = 0; i < 9; i++) { const ox = r() < 0.5 ? 0 : w, oy = r() * h; x.beginPath(); x.moveTo(ox, oy); x.lineTo(w / 2 + (r() - 0.5) * 90, oy + (r() - 0.5) * 60); x.lineTo(ox, oy + 10 + r() * 30); x.fill(); }
    for (let i = 0; i < 6; i++) { const oy = r() < 0.5 ? 0 : h, ox = r() * w; x.beginPath(); x.moveTo(ox, oy); x.lineTo(ox + (r() - 0.5) * 50, h / 2 + (r() - 0.5) * 60); x.lineTo(ox + 12 + r() * 20, oy); x.fill(); }
  }),
  // rotting zombie skin: bruises, veins, open sores
  zskin: (base) => make('zskin' + base, 256, 256, (x, w, h) => {
    x.fillStyle = base; x.fillRect(0, 0, w, h);
    blotches(x, w, h, 26, 'rgba(70,90,60,.35)', 8, 30, 241); blotches(x, w, h, 18, 'rgba(90,40,70,.35)', 6, 24, 242);
    blotches(x, w, h, 10, 'rgba(110,15,10,.6)', 4, 14, 243); blotches(x, w, h, 7, 'rgba(40,10,5,.75)', 3, 8, 244);
    const r = rng(245); x.lineWidth = 1.2;
    for (let v = 0; v < 26; v++) { x.strokeStyle = r() < 0.5 ? 'rgba(40,30,70,.45)' : 'rgba(70,20,30,.4)'; let px = r() * w, py = r() * h; x.beginPath(); x.moveTo(px, py); for (let s = 0; s < 7; s++) { px += (r() - 0.5) * 18; py += (r() - 0.3) * 18; x.lineTo(px, py); } x.stroke(); }
    speckle(x, w, h, 3000, ['rgba(0,0,0,.18)', 'rgba(255,255,230,.06)', 'rgba(60,70,40,.2)'], 1, 3, 246);
  }),
  // a face wrapped onto the front of the head: sunken eyes, torn mouth, teeth
  zface: (base) => make('zface' + base, 256, 256, (x, w, h) => {
    x.fillStyle = base; x.fillRect(0, 0, w, h);
    blotches(x, w, h, 20, 'rgba(70,90,60,.35)', 8, 26, 251); blotches(x, w, h, 10, 'rgba(100,20,15,.55)', 4, 14, 252);
    // front of the head is the middle of the texture (u 0.25..0.75 wraps the front)
    const fx = w * 0.5;
    // dark sunken eye sockets
    for (const s of [-1, 1]) {
      const ex = fx + s * 17, ey = h * 0.4;
      let g = x.createRadialGradient(ex, ey, 2, ex, ey, 17); g.addColorStop(0, 'rgba(10,0,0,.95)'); g.addColorStop(0.55, 'rgba(40,10,15,.75)'); g.addColorStop(1, 'rgba(40,10,15,0)'); x.fillStyle = g; x.beginPath(); x.ellipse(ex, ey, 17, 14, 0, 0, 7); x.fill();
      g = x.createRadialGradient(ex, ey + 1, 0, ex, ey + 1, 6); g.addColorStop(0, 'rgba(255,250,200,1)'); g.addColorStop(0.4, 'rgba(230,210,120,.95)'); g.addColorStop(1, 'rgba(120,90,30,0)'); x.fillStyle = g; x.beginPath(); x.arc(ex, ey + 1, 6, 0, 7); x.fill();
      x.fillStyle = 'rgba(60,0,0,.9)'; x.beginPath(); x.arc(ex + s * 1, ey + 1, 2.4, 0, 7); x.fill();
      x.strokeStyle = 'rgba(30,10,10,.8)'; x.lineWidth = 3; x.beginPath(); x.moveTo(ex - 12, ey - 11 - s * 3); x.lineTo(ex + 12, ey - 11 + s * 3); x.stroke();  // furrowed brow
    }
    // nose: rotted away to a dark cavity
    x.fillStyle = 'rgba(20,5,5,.9)'; x.beginPath(); x.moveTo(fx - 7, h * 0.58); x.lineTo(fx + 7, h * 0.58); x.lineTo(fx, h * 0.5); x.fill();
    // torn mouth, gums and crooked teeth
    const my = h * 0.7; x.fillStyle = 'rgba(25,0,0,.95)'; x.beginPath(); x.ellipse(fx + 2, my, 20, 11, 0.06, 0, 7); x.fill();
    x.fillStyle = 'rgba(120,20,30,.9)'; x.fillRect(fx - 18, my - 10, 38, 4); x.fillRect(fx - 16, my + 6, 34, 4);
    const r = rng(253); for (let t = 0; t < 8; t++) { if (r() < 0.2) continue; x.fillStyle = `rgb(${190 + r() * 40 | 0},${170 + r() * 30 | 0},${110 + r() * 30 | 0})`; x.fillRect(fx - 16 + t * 4.4, my - 7, 3.4, 5 + r() * 3); x.fillRect(fx - 15 + t * 4.4, my + 2 + r() * 2, 3.4, 4 + r() * 3); }
    // blood down the chin, gash on the cheek
    x.fillStyle = 'rgba(110,5,5,.85)'; for (let d = 0; d < 6; d++) x.fillRect(fx - 14 + r() * 28, my + 8, 3, 12 + r() * 28);
    x.strokeStyle = 'rgba(90,5,5,.9)'; x.lineWidth = 4; x.beginPath(); x.moveTo(fx + 26, h * 0.46); x.lineTo(fx + 36, h * 0.64); x.stroke();
    speckle(x, w, h, 2400, ['rgba(0,0,0,.18)', 'rgba(60,70,40,.2)'], 1, 3, 254);
    // hair patches on the back and top
    x.fillStyle = 'rgba(25,20,15,.85)'; for (let i = 0; i < 260; i++) { const px = r() < 0.5 ? r() * w * 0.22 : w * 0.78 + r() * w * 0.22; x.fillRect(px, r() * h * 0.5, 2, 6 + r() * 8); } x.fillRect(0, 0, w, h * 0.08);
  }),
  paper: () => make('paper', 128, 128, (x, w, h) => { x.fillStyle = '#d9cfb0'; x.fillRect(0, 0, w, h); for (let y = 18; y < h; y += 10) { x.fillStyle = 'rgba(40,40,80,.45)'; x.fillRect(12, y, 60 + Math.sin(y) * 40, 2); } blotches(x, w, h, 5, 'rgba(110,20,10,.5)', 4, 12, 261); }),
  wood2: () => make('wood2', 256, 256, (x, w, h) => { x.fillStyle = '#5b4632'; x.fillRect(0, 0, w, h); for (let y = 0; y < h; y += 21) { x.fillStyle = 'rgba(0,0,0,.35)'; x.fillRect(0, y, w, 2); } speckle(x, w, h, 1600, ['rgba(0,0,0,.2)', 'rgba(160,120,80,.15)'], 1, 5, 271); blotches(x, w, h, 10, 'rgba(30,20,10,.4)', 10, 40, 272); }),
};
