// Furniture, clutter and story props for building interiors and yards. Everything is baked into vertex-coloured
// geometry so a whole chunk (or the whole core town) costs one draw call for its props. Big pieces also leave a
// box collider (obstacles) so you can't walk through beds and counters.
import * as THREE from 'three';
import { B, C, bake } from './models.js';

// ---- colliders: axis-aligned boxes bucketed by 2 m tile ----
export const obstacles = new Map();
const okey = (i, j) => (i + 32768) * 65536 + (j + 32768);
export function addObstacle(x0, z0, x1, z1, owner) {
  const b = [Math.min(x0, x1), Math.min(z0, z1), Math.max(x0, x1), Math.max(z0, z1), owner];
  for (let j = Math.floor(b[1] / 2); j <= Math.floor(b[3] / 2); j++) for (let i = Math.floor(b[0] / 2); i <= Math.floor(b[2] / 2); i++) { const k = okey(i, j); let a = obstacles.get(k); if (!a) obstacles.set(k, a = []); a.push(b); }
}
export function dropObstacles(owner) { for (const [k, a] of obstacles) { const f = a.filter(b => b[4] !== owner); if (!f.length) obstacles.delete(k); else if (f.length !== a.length) obstacles.set(k, f); } }
// push a circle out of any furniture box near it; returns true if it touched one
export function pushOut(p, r) {
  let hit = false; const i0 = Math.floor((p.x - r) / 2), i1 = Math.floor((p.x + r) / 2), j0 = Math.floor((p.z - r) / 2), j1 = Math.floor((p.z + r) / 2);
  for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
    const a = obstacles.get(okey(i, j)); if (!a) continue;
    for (const b of a) {
      const nx = Math.max(b[0], Math.min(p.x, b[2])), nz = Math.max(b[1], Math.min(p.z, b[3])); const dx = p.x - nx, dz = p.z - nz, d2 = dx * dx + dz * dz;
      if (d2 >= r * r) continue; hit = true;
      if (d2 > 1e-8) { const d = Math.sqrt(d2); p.x += dx / d * (r - d); p.z += dz / d * (r - d); }
      else { const l = p.x - b[0], rr = b[2] - p.x, u = p.z - b[1], dd = b[3] - p.z, m = Math.min(l, rr, u, dd); if (m === l) p.x = b[0] - r; else if (m === rr) p.x = b[2] + r; else if (m === u) p.z = b[1] - r; else p.z = b[3] + r; }
    }
  }
  return hit;
}

// ---- a little kit that places parts in a rotated local frame ----
export class Kit {
  constructor(out, owner) { this.out = out; this.owner = owner; this.ox = 0; this.oz = 0; this.ry = 0; this.c = 1; this.s = 0; }
  at(x, z, ry = 0) { this.ox = x; this.oz = z; this.ry = ry; this.c = Math.cos(ry); this.s = Math.sin(ry); return this; }
  wx(lx, lz) { return this.ox + this.c * lx + this.s * lz; }
  wz(lx, lz) { return this.oz - this.s * lx + this.c * lz; }
  box(w, h, d, lx, ly, lz, col, rx = 0, ryl = 0, rz = 0) { if ([w, h, d, lx, ly, lz, rx, ryl, rz, this.ox, this.oz, this.ry].some(Number.isNaN)) console.warn('NANBOX', [w, h, d, lx, ly, lz, this.ox, this.oz, this.ry].join(), new Error().stack.split('\n').slice(2, 5).join('|')); this.out.vc.push(bake(B(w, h, d), { x: this.wx(lx, lz), y: ly, z: this.wz(lx, lz), rx, ry: this.ry + ryl, rz, c: col })); return this; }
  cyl(r1, r2, h, lx, ly, lz, col, seg = 8, rx = 0, rz = 0) { this.out.vc.push(bake(C(r1, r2, h, seg), { x: this.wx(lx, lz), y: ly, z: this.wz(lx, lz), rx, ry: this.ry, rz, c: col })); return this; }
  geo(g, lx, ly, lz, col, rx = 0, ryl = 0, rz = 0) { this.out.vc.push(bake(g, { x: this.wx(lx, lz), y: ly, z: this.wz(lx, lz), rx, ry: this.ry + ryl, rz, c: col })); return this; }
  solid(w, d, lx = 0, lz = 0) { // footprint in local frame (frames are always multiples of 90 deg)
    const ax = Math.abs(this.c) > 0.5; const hw = (ax ? w : d) / 2, hd = (ax ? d : w) / 2; const x = this.wx(lx, lz), z = this.wz(lx, lz);
    if (this.out.obst) this.out.obst.push([x - hw, z - hd, x + hw, z + hd]); return this;
  }
  label(text, w, h, lx, ly, lz, opts = {}) { this.out.labels.push({ text, w, h, x: this.wx(lx, lz), y: ly, z: this.wz(lx, lz), ry: this.ry + (opts.ry || 0), rz: opts.rz || 0, bg: opts.bg, fg: opts.fg, kind: opts.kind || 'sign' }); return this; }
  read(text, lx, lz) { this.out.reads.push({ x: this.wx(lx, lz), z: this.wz(lx, lz), text }); return this; }
}

const WOOD = 0x5a3e28, DKWOOD = 0x3a281a, METAL = 0x6a6e70, DKMETAL = 0x3a3c3e, WHITE = 0xc8c4b8, FABRIC = [0x5a3a32, 0x3a4a5a, 0x5a5a3a, 0x6a5040, 0x3a3a3a];
const GOODS = [0xa83a2a, 0x2a6aa8, 0xd8b030, 0x3a8a3a, 0xc8c0b0, 0x8a3a8a, 0xd07020];

// ---- individual props (local frame: +z points into the room from the wall they stand against) ----
export const PR = {
  bed(k, r) { const f = FABRIC[(r() * 5) | 0]; k.box(1.5, 0.35, 2.1, 0, 0.25, 0, DKWOOD).box(1.4, 0.22, 2.0, 0, 0.53, 0, 0xb8b0a0).box(1.42, 0.08, 1.4, 0, 0.66, 0.3, f, 0, 0, (r() - 0.5) * 0.1).box(0.6, 0.14, 0.4, -0.35, 0.72, -0.75, 0xd8d4c8).box(1.5, 0.9, 0.08, 0, 0.55, -1.05, DKWOOD).solid(1.5, 2.1); if (r() < 0.4) k.box(0.7, 0.02, 0.5, 0.2, 0.67, 0.2, 0x5a1010); },
  bunk(k) { for (const y of [0.4, 1.5]) k.box(0.9, 0.12, 2, 0, y, 0, METAL).box(0.85, 0.15, 1.95, 0, y + 0.13, 0, 0x4a5a3a); for (const [a, b] of [[-0.45, -1], [0.45, -1], [-0.45, 1], [0.45, 1]]) k.box(0.05, 1.8, 0.05, a, 0.9, b, DKMETAL); k.solid(0.9, 2); },
  couch(k, r) { const f = FABRIC[(r() * 5) | 0]; k.box(2.1, 0.42, 0.9, 0, 0.21, 0, f).box(2.1, 0.55, 0.22, 0, 0.62, -0.34, f).box(0.22, 0.6, 0.9, -1.0, 0.36, 0, f).box(0.22, 0.6, 0.9, 1.0, 0.36, 0, f).box(0.6, 0.12, 0.55, -0.45, 0.48, 0.05, f).solid(2.1, 0.9); if (r() < 0.5) k.box(0.5, 0.12, 0.4, 0.4, 0.5, 0.05, 0x8a2a20, 0.3); },
  tv(k, r) { k.box(1.3, 0.55, 0.5, 0, 0.27, 0, DKWOOD).box(0.95, 0.6, 0.45, 0, 0.85, 0, 0x1c1c1c).box(0.8, 0.48, 0.02, 0, 0.87, 0.23, r() < 0.5 ? 0x223030 : 0x101012).solid(1.3, 0.5); },
  ctable(k) { k.box(1.1, 0.06, 0.6, 0, 0.42, 0, WOOD); for (const [a, b] of [[-0.5, -0.25], [0.5, -0.25], [-0.5, 0.25], [0.5, 0.25]]) k.box(0.05, 0.4, 0.05, a, 0.2, b, DKWOOD); },
  table(k, r, w = 1.4, d = 0.9) { k.box(w, 0.06, d, 0, 0.76, 0, WOOD); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) k.box(0.06, 0.74, 0.06, a * (w / 2 - 0.08), 0.37, b * (d / 2 - 0.08), DKWOOD); k.solid(w, d); if (r() < 0.6) k.box(0.25, 0.02, 0.3, (r() - 0.5) * 0.6, 0.8, 0, 0xd8d4c4, 0, r()); if (r() < 0.5) k.cyl(0.04, 0.04, 0.12, 0.3, 0.85, 0.1, 0x6a8aa0); },
  chair(k, r, fallen = r() < 0.4) { if (fallen) { k.box(0.45, 0.45, 0.05, 0, 0.23, 0, WOOD, 0, 0, 0).box(0.45, 0.05, 0.45, 0, 0.03, 0.3, WOOD).box(0.05, 0.05, 0.45, -0.2, 0.2, 0.3, DKWOOD).box(0.05, 0.05, 0.45, 0.2, 0.2, 0.3, DKWOOD); return; } k.box(0.45, 0.05, 0.45, 0, 0.46, 0, WOOD).box(0.45, 0.5, 0.05, 0, 0.72, -0.2, WOOD); for (const [a, b] of [[-0.2, -0.2], [0.2, -0.2], [-0.2, 0.2], [0.2, 0.2]]) k.box(0.04, 0.45, 0.04, a, 0.22, b, DKWOOD); },
  counter(k, r, w = 2.4, col = 0x6a5a48, top = 0x9a9488) { k.box(w, 0.9, 0.65, 0, 0.45, 0, col).box(w + 0.04, 0.05, 0.7, 0, 0.92, 0, top).solid(w, 0.65); },
  kitchen(k, r) { // counters with a sink, stove and fridge along one wall
    PR.counter(k, r, 2.0, 0x8a7a60, 0xb0aca0); k.box(0.5, 0.04, 0.38, -0.4, 0.95, 0, 0x8a8e90).cyl(0.02, 0.02, 0.3, -0.4, 1.1, -0.2, METAL);
    k.box(0.75, 0.9, 0.65, 1.4, 0.45, 0, WHITE).box(0.75, 0.04, 0.65, 1.4, 0.92, 0, 0x2a2a2a); for (const a of [-0.17, 0.17]) for (const b of [-0.15, 0.15]) k.cyl(0.09, 0.09, 0.02, 1.4 + a, 0.95, b, 0x1a1a1a, 10);
    k.box(0.8, 1.8, 0.7, -1.45, 0.9, 0, 0xd0ccc0).box(0.02, 0.5, 0.02, -1.15, 1.2, 0.36, METAL).solid(0.8, 0.7, -1.45, 0).solid(0.75, 0.65, 1.4, 0);
    k.box(0.16, 0.2, 0.005, -1.4, 1.3, 0.355, 0xf0eccc, 0, 0, 0.1); // a note on the fridge
    k.box(2.0, 0.6, 0.35, 0, 1.75, -0.15, 0x7a6a50); // upper cabinets
    if (r() < 0.5) k.box(0.3, 0.02, 0.4, 0.5, 0.94, 0.05, 0xd8d0c0, 0, 0.5);
  },
  fridge(k) { k.box(0.8, 1.8, 0.7, 0, 0.9, 0, 0xd0ccc0).solid(0.8, 0.7); },
  dresser(k, r) { k.box(1.1, 0.9, 0.5, 0, 0.45, 0, DKWOOD); for (let n = 0; n < 3; n++) k.box(1.0, 0.24, 0.02, 0, 0.18 + n * 0.28, 0.26, WOOD); if (r() < 0.5) k.box(0.45, 0.24, 0.5, 0.3, 0.3, 0.55, WOOD, 0, 0.3); k.solid(1.1, 0.5); },
  shelf(k, r, w = 2, h = 1.8) { k.box(w, h, 0.05, 0, h / 2, -0.22, METAL); for (let n = 0; n < 4; n++) k.box(w, 0.04, 0.45, 0, 0.12 + n * (h - 0.2) / 3, 0, METAL); for (let n = 0; n < 4; n++) for (let g = 0; g < w * 3; g++) if (r() < 0.55) k.box(0.18 + r() * 0.12, 0.18 + r() * 0.15, 0.25, -w / 2 + 0.2 + g * 0.31, 0.24 + n * (h - 0.2) / 3, 0, GOODS[(r() * 7) | 0]); k.solid(w, 0.5); },
  aisle(k, r, w = 3) { k.box(w, 1.5, 0.1, 0, 0.75, 0, METAL); for (const s of [-1, 1]) for (let n = 0; n < 3; n++) { k.box(w, 0.04, 0.4, 0, 0.12 + n * 0.55, s * 0.24, METAL); for (let g = 0; g < w * 3; g++) if (r() < 0.6) k.box(0.18, 0.2 + r() * 0.12, 0.22, -w / 2 + 0.2 + g * 0.31, 0.26 + n * 0.55, s * 0.24, GOODS[(r() * 7) | 0]); } k.solid(w, 0.9); },
  spill(k, r) { for (let n = 0; n < 6; n++) k.box(0.16 + r() * 0.1, 0.16, 0.2, (r() - 0.5) * 1.6, 0.08, (r() - 0.5) * 1.2, GOODS[(r() * 7) | 0], 0, r() * 3, r() < 0.5 ? 1.57 : 0); },
  register(k) { PR.counter(k, () => 0.5, 2.2, 0x4a3a2a); k.box(0.45, 0.25, 0.4, 0.5, 1.07, 0, 0x2a2a2c).box(0.4, 0.06, 0.32, 0.5, 1.25, 0.05, 0x3a3a3c, -0.4); },
  cooler(k, r, w = 2.4) { k.box(w, 2.1, 0.8, 0, 1.05, 0, 0x8a8e90); for (let n = 0; n < 3; n++) { k.box(w / 3 - 0.06, 1.8, 0.02, -w / 3 + n * w / 3, 1.05, 0.41, 0x203038); for (let s = 0; s < 4; s++) for (let g = 0; g < 4; g++) if (r() < 0.5) k.cyl(0.04, 0.04, 0.22, -w / 3 + n * w / 3 - 0.24 + g * 0.16, 0.3 + s * 0.45, 0.2, GOODS[(r() * 7) | 0], 6); } k.solid(w, 0.8); },
  booth(k, r) { const f = r() < 0.5 ? 0x8a2a24 : 0x2a5a6a; k.box(1.3, 0.45, 0.55, 0, 0.22, -0.55, f).box(1.3, 0.75, 0.15, 0, 0.75, -0.8, f).box(1.3, 0.45, 0.55, 0, 0.22, 0.95, f).box(1.3, 0.75, 0.15, 0, 0.75, 1.2, f).box(1.2, 0.05, 0.8, 0, 0.76, 0.2, 0xc8c0a8).cyl(0.05, 0.05, 0.74, 0, 0.37, 0.2, METAL).solid(1.3, 2.1, 0, 0.2); if (r() < 0.6) k.cyl(0.1, 0.1, 0.02, 0.3, 0.8, 0.1, WHITE, 10); if (r() < 0.4) k.cyl(0.04, 0.035, 0.1, -0.3, 0.84, 0.3, 0xd8d4c8); },
  stool(k) { k.cyl(0.2, 0.2, 0.08, 0, 0.75, 0, 0x8a2a24, 10).cyl(0.03, 0.03, 0.72, 0, 0.36, 0, METAL, 6).cyl(0.2, 0.2, 0.03, 0, 0.02, 0, METAL, 10); },
  grill(k) { k.box(1.8, 0.9, 0.75, 0, 0.45, 0, 0x6a6e70).box(1.2, 0.04, 0.6, -0.2, 0.92, 0, 0x1a1a1a).box(0.4, 0.3, 0.6, 0.65, 1.05, 0, 0x8a8e90).box(1.8, 0.6, 0.6, 0, 2.0, -0.05, 0x7a7e80).solid(1.8, 0.75); },
  jukebox(k) { k.box(0.9, 1.4, 0.6, 0, 0.7, 0, 0x6a2a1a).cyl(0.45, 0.45, 0.6, 0, 1.4, 0, 0xc0a040, 12, Math.PI / 2).box(0.6, 0.4, 0.02, 0, 1.0, 0.31, 0xe0c060).solid(0.9, 0.6); },
  pew(k, r, w = 3) { k.box(w, 0.08, 0.45, 0, 0.45, 0, DKWOOD).box(w, 0.6, 0.06, 0, 0.75, -0.22, DKWOOD).box(0.06, 0.9, 0.5, -w / 2, 0.45, 0, DKWOOD).box(0.06, 0.9, 0.5, w / 2, 0.45, 0, DKWOOD).solid(w, 0.5); },
  altar(k) { k.box(2, 1, 0.8, 0, 0.5, 0, 0xd8d0c0).box(2.1, 0.05, 0.9, 0, 1.02, 0, 0x8a1a1a).box(0.12, 2.2, 0.12, 0, 2.4, -0.6, 0x5a3a1a).box(1.1, 0.12, 0.12, 0, 2.9, -0.6, 0x5a3a1a).solid(2, 0.8); for (let n = 0; n < 4; n++) k.cyl(0.03, 0.03, 0.2 + n * 0.05, -0.8 + n * 0.5, 1.15, 0.2, 0xe8e0c8, 6); },
  desk(k, r) { k.box(1.5, 0.06, 0.75, 0, 0.76, 0, 0x6a5a48).box(0.06, 0.74, 0.7, -0.7, 0.37, 0, 0x5a4a38).box(0.45, 0.74, 0.7, 0.5, 0.37, 0, 0x5a4a38).solid(1.5, 0.75); if (r() < 0.7) k.box(0.45, 0.35, 0.35, -0.2, 0.97, -0.1, 0xb8b4a8).box(0.38, 0.28, 0.01, -0.2, 0.98, 0.08, 0x1a2a2a); for (let n = 0; n < 3; n++) if (r() < 0.6) k.box(0.22, 0.01, 0.3, 0.3 + (r() - 0.5) * 0.3, 0.8, (r() - 0.5) * 0.3, 0xe0dccc, 0, r() * 2); },
  locker(k, r, n = 3) { for (let a = 0; a < n; a++) { k.box(0.45, 1.9, 0.5, -((n - 1) * 0.23) + a * 0.46, 0.95, 0, 0x4a5a4a); if (r() < 0.3) k.box(0.42, 1.8, 0.03, -((n - 1) * 0.23) + a * 0.46 + 0.2, 0.95, 0.45, 0x4a5a4a, 0, 1.2); } k.solid(n * 0.46, 0.5); },
  cell(k, r, w = 3.6) { for (let n = 0; n <= w / 0.2; n++) k.cyl(0.02, 0.02, 2.4, -w / 2 + n * 0.2, 1.2, 0, 0x2a2a2a, 4); k.box(w, 0.06, 0.06, 0, 2.4, 0, 0x2a2a2a).box(w, 0.06, 0.06, 0, 1.1, 0, 0x2a2a2a).solid(w, 0.15); },
  radio(k) { k.box(0.5, 0.28, 0.25, 0, 0.94, 0, 0x2a2a24).cyl(0.06, 0.06, 0.02, 0.12, 0.96, 0.13, 0x8a8a80, 8, Math.PI / 2).box(0.02, 0.5, 0.02, -0.18, 1.3, 0, METAL).box(0.04, 0.04, 0.02, -0.05, 1.02, 0.13, 0xff2010); },
  lift(k, r) { // car lift with a car up on it
    for (const s of [-1, 1]) k.box(0.3, 3, 0.3, s * 1.6, 1.5, 0, 0xc0a020).box(0.15, 0.1, 2.4, s * 0.8, 1.6, 0, 0xc0a020);
    const c = [0x7a2a20, 0x2a4a6a, 0x5a5a50][(r() * 3) | 0]; k.box(1.8, 0.6, 4.2, 0, 2.0, 0, c).box(1.6, 0.5, 2.0, 0, 2.55, -0.2, c).box(1.5, 0.42, 1.9, 0, 2.55, -0.2, 0x1a2228); for (const [a, b] of [[-0.85, -1.3], [0.85, -1.3], [-0.85, 1.3], [0.85, 1.3]]) k.cyl(0.33, 0.33, 0.24, a, 1.75, b, 0x141414, 10, 0, Math.PI / 2); k.solid(3.4, 1.2, 0, -1.6).solid(3.4, 1.2, 0, 1.6);
  },
  toolchest(k, r) { k.box(1.2, 1.0, 0.55, 0, 0.5, 0, 0xa02018); for (let n = 0; n < 5; n++) k.box(1.12, 0.14, 0.02, 0, 0.15 + n * 0.17, 0.28, 0x701410); k.box(1.2, 0.5, 0.45, 0, 1.25, -0.05, 0xa02018).solid(1.2, 0.55); if (r() < 0.5) for (let n = 0; n < 3; n++) k.box(0.3, 0.03, 0.05, (r() - 0.5) * 1.2, 0.02, 0.6 + r() * 0.5, METAL, 0, r() * 3); },
  tires(k, r) { const n = 2 + ((r() * 4) | 0); for (let a = 0; a < n; a++) k.geo(new THREE.TorusGeometry(0.3, 0.12, 6, 12), 0, 0.12 + a * 0.24, 0, 0x151515, Math.PI / 2); k.solid(0.8, 0.8); },
  drum(k, r) { k.cyl(0.3, 0.3, 0.9, 0, 0.45, 0, [0x2a4a6a, 0x6a2a1a, 0x4a5a2a][(r() * 3) | 0], 12).solid(0.6, 0.6); },
  bench(k, r) { k.box(2, 0.06, 0.7, 0, 0.9, 0, WOOD).box(2, 0.85, 0.05, 0, 0.45, -0.3, DKWOOD); for (const s of [-0.95, 0.95]) k.box(0.06, 0.88, 0.65, s, 0.44, 0, DKWOOD); k.box(2, 1.0, 0.04, 0, 1.45, -0.34, 0x7a6a50); for (let n = 0; n < 6; n++) k.box(0.05, 0.25 + r() * 0.2, 0.03, -0.8 + n * 0.32, 1.45, -0.3, DKMETAL, 0, 0, r() - 0.5); k.solid(2, 0.7); },
  stove(k) { k.box(0.7, 0.8, 0.6, 0, 0.4, 0, 0x1a1a1a).cyl(0.08, 0.08, 2.4, 0.15, 2.0, -0.1, 0x1a1a1a, 8).box(0.3, 0.25, 0.02, 0, 0.45, 0.31, 0x3a1a0a).solid(0.7, 0.6); },
  mapboard(k) { k.box(1.6, 1.1, 0.04, 0, 1.6, 0, 0x8a7050).box(1.4, 0.9, 0.01, 0, 1.6, 0.03, 0xc8c0a0); for (let n = 0; n < 5; n++) k.box(0.15, 0.15, 0.01, -0.5 + n * 0.25, 1.5 + (n % 2) * 0.3, 0.04, 0xd02020); },
  barricade(k, r, w = 2) { // furniture and planks shoved against a doorway: someone's last stand
    k.box(w * 0.7, 0.9, 0.6, -0.2, 0.45, 0, DKWOOD, 0, 0.1).box(1.0, 0.5, 0.5, 0.3, 1.15, 0.05, WOOD, 0.2, -0.3).box(0.45, 0.9, 0.45, w * 0.35, 0.45, 0.3, WOOD, 0, 0, 1.2);
    for (let n = 0; n < 4; n++) k.box(w + 0.4, 0.18, 0.04, 0, 0.6 + n * 0.45, -0.32, 0x7a5a38, 0, 0, (r() - 0.5) * 0.5);
    for (let n = 0; n < 10; n++) k.cyl(0.012, 0.012, 0.06, (r() - 0.5) * 2.5, 0.02, 0.6 + r() * 1.6, 0xc09030, 5, 1.57, r() * 3); // spent shells
  },
  blood(k, r, s = 1) { k.cyl(0.5 * s, 0.5 * s, 0.01, (r() - 0.5), 0.015, (r() - 0.5), 0x4a0808, 9).box(0.25 * s, 0.01, 1.2 * s, (r() - 0.5), 0.016, (r() - 0.5), 0x3a0606, 0, r() * 3); },
  papers(k, r, n = 7) { for (let a = 0; a < n; a++) k.box(0.22, 0.004, 0.3, (r() - 0.5) * 2.2, 0.012 + a * 0.002, (r() - 0.5) * 2.2, r() < 0.8 ? 0xd8d4c4 : 0xc8b890, 0, r() * 3); },
  trash(k, r, n = 3) { for (let a = 0; a < n; a++) { const t = r(); if (t < 0.4) k.geo(new THREE.IcosahedronGeometry(0.28, 0), (r() - 0.5) * 1.6, 0.2, (r() - 0.5) * 1.6, 0x18181a, 0, r() * 3); else if (t < 0.7) k.cyl(0.035, 0.035, 0.12, (r() - 0.5) * 1.8, 0.035, (r() - 0.5) * 1.8, GOODS[(r() * 7) | 0], 6, 1.57, r() * 3); else k.box(0.3, 0.2, 0.25, (r() - 0.5) * 1.8, 0.1, (r() - 0.5) * 1.8, 0x8a6a40, 0, r() * 3); } },
  photo(k, r, ly = 1.6) { k.box(0.42, 0.32, 0.03, 0, ly, 0, 0x3a2a1a).label('photo', 0.36, 0.26, 0, ly, 0.02, { kind: 'photo' }); },
  bike(k, r) { const c = [0xc02020, 0x2050c0, 0xd060a0][(r() * 3) | 0]; for (const z of [-0.45, 0.45]) k.geo(new THREE.TorusGeometry(0.25, 0.03, 4, 12), 0, 0.12, z, 0x111111, 0, 0, Math.PI / 2 - 1.45); k.box(0.05, 0.05, 0.85, 0, 0.18, 0, c, 0.2, 0, 1.45).box(0.05, 0.4, 0.05, 0.1, 0.32, -0.2, c, 0, 0, 1.45).box(0.4, 0.04, 0.04, 0.25, 0.3, 0.4, 0x222222, 0, 0, 1.45); },
  mattress(k, r) { k.box(1.4, 0.2, 2, 0, 0.1, 0, 0xa8a090, 0, r() - 0.5).box(1.0, 0.06, 0.8, 0, 0.21, 0.3, FABRIC[(r() * 5) | 0], 0, r()); },
  lantern(k) { k.cyl(0.08, 0.1, 0.25, 0, 0.9, 0, 0x6a5a30, 8).cyl(0.06, 0.06, 0.12, 0, 0.92, 0, 0xffd080, 8); },
  logs(k, r) { for (let n = 0; n < 6; n++) k.cyl(0.18, 0.18, 2.4, 0, 0.18 + (n > 2 ? 0.32 : 0), -0.4 + (n % 3) * 0.38 + (n > 2 ? 0.19 : 0), 0x5a4028, 8, 0, Math.PI / 2); k.solid(2.4, 1.2); },
  sawtable(k) { k.box(3.5, 0.9, 1.2, 0, 0.45, 0, 0x5a4a38).cyl(0.5, 0.5, 0.03, 0, 1.0, 0, 0x9a9a9a, 16, Math.PI / 2).solid(3.5, 1.2); },
  pump(k) { k.box(0.7, 1.7, 0.5, 0, 0.85, 0, 0xb02a20).box(0.5, 0.45, 0.02, 0, 1.3, 0.26, 0x1a1a1a).box(0.6, 0.25, 0.4, 0, 1.85, 0, 0xd8d0c0).box(1, 0.15, 0.8, 0, 0.07, 0, 0x8a8a84).cyl(0.03, 0.03, 0.9, 0.38, 0.9, 0.1, 0x111111, 5, 0.3).solid(1, 0.8); },
  dumpster(k, r) { k.box(2.0, 1.3, 1.3, 0, 0.7, 0, 0x2a4a2a).box(2.05, 0.08, 1.35, 0, 1.38, -0.2, 0x1a2a1a, -0.4).solid(2, 1.3); PR.trash(k, r, 3); },
  wreck(k, r, col) { // an abandoned car: flat tyres, smashed glass, doors hanging
    const c = col || [0x5a2a22, 0x2a3a4a, 0x6a6a60, 0x3a4a2a, 0x7a6a40][(r() * 5) | 0]; const tilt = (r() - 0.5) * 0.06;
    k.box(1.8, 0.55, 4.4, 0, 0.55, 0, c, 0, 0, tilt).box(1.6, 0.5, 2.1, 0, 1.08, -0.2, c, 0, 0, tilt).box(1.62, 0.36, 1.2, 0, 1.08, 0.35, 0x111518, 0, 0, tilt).box(1.62, 0.36, 0.6, 0, 1.08, -1.0, 0x111518, 0, 0, tilt);
    for (const [a, b] of [[-0.85, -1.4], [0.85, -1.4], [-0.85, 1.4], [0.85, 1.4]]) k.cyl(0.33, 0.33, 0.22, a, 0.26, b, 0x121212, 10, 0, Math.PI / 2);
    if (r() < 0.5) k.box(0.05, 0.8, 1.1, 1.3, 0.75, 0.4, c, 0, 0.7); if (r() < 0.6) k.box(0.9, 0.2, 0.6, 0, 1.38, -0.1, 0x3a3a3a, 0.2); // a suitcase on the roof
    k.solid(1.9, 4.4);
  },
  semi(k, r) { const c = [0x8a1a14, 0x2a4a7a, 0xd0ccc0][(r() * 3) | 0]; k.box(2.5, 2.8, 2.6, 0, 1.9, 4.6, c).box(2.4, 1.0, 0.05, 0, 2.6, 5.92, 0x111518).box(2.6, 3.4, 9, 0, 2.3, -1.4, 0xb8b4ac); for (const b of [5.2, 2.6, -4, -5.2]) for (const a of [-1.15, 1.15]) k.cyl(0.5, 0.5, 0.35, a, 0.5, b, 0x121212, 10, 0, Math.PI / 2); k.solid(2.6, 12, 0, 0.3); },
  sign(k, text, w = 1.4) { k.box(0.08, 2.2, 0.08, 0, 1.1, 0, 0x5a5a5a).label(text, w, 0.6, 0, 2.0, 0.05, { kind: 'roadsign' }); },
  porchChair(k, r) { k.box(0.6, 0.06, 0.55, 0, 0.42, 0, 0x8a7a5a).box(0.6, 0.6, 0.05, 0, 0.75, -0.26, 0x8a7a5a, -0.2); for (const [a, b] of [[-0.27, -0.24], [0.27, -0.24], [-0.27, 0.24], [0.27, 0.24]]) k.box(0.04, 0.42, 0.04, a, 0.21, b, 0x6a5a3a); },
  rug(k, r, w = 2, d = 1.4) { k.box(w, 0.01, d, 0, 0.018, 0, [0x6a2a24, 0x2a3a5a, 0x5a4a2a][(r() * 3) | 0]); },
  lamp(k) { k.cyl(0.12, 0.15, 0.04, 0, 0.02, 0, 0x2a2a2a).cyl(0.015, 0.015, 1.4, 0, 0.7, 0, 0x2a2a2a, 5).cyl(0.14, 0.22, 0.26, 0, 1.45, 0, 0xc8b890, 10); },
  crate(k, r) { k.box(0.9, 0.7, 0.9, 0, 0.35, 0, 0x6a5232, 0, r()).solid(0.9, 0.9); },
  gascan(k) { k.box(0.3, 0.35, 0.18, 0, 0.18, 0, 0xb02018); },
  mower(k) { k.box(0.5, 0.25, 0.7, 0, 0.25, 0, 0xc02020).box(0.04, 0.9, 0.04, 0, 0.6, -0.5, METAL, -0.6); },
};

// ---- furnish an interior rectangle (metres) by building kind. door = [x, z] of the doorway (kept clear) ----
// walls: { n, s, e, w } tell which sides are solid enough to put things against
export function furnish(kind, rc, k, r, door, story) {
  const { x0, z0, x1, z1 } = rc; const W = x1 - x0, D = z1 - z0; if (W < 2.2 || D < 2.2) return;
  const keep = !door ? [] : Array.isArray(door[0]) ? door : [door];
  const clear = (x, z, rad = 1.6) => keep.every(d => Math.hypot(x - d[0], z - d[1]) > (d[2] || rad));
  // spots along each wall: [x, z, ry] where ry turns +z into the room
  const along = (side, f) => side === 'n' ? [x0 + W * f, z0 + 0.5, 0] : side === 's' ? [x0 + W * f, z1 - 0.5, Math.PI] : side === 'w' ? [x0 + 0.5, z0 + D * f, Math.PI / 2] : [x1 - 0.5, z0 + D * f, -Math.PI / 2];
  const place = (fn, side, f, inset = 0, ...a) => { const [x, z, ry] = along(side, f); const ix = x + Math.sin(ry) * inset, iz = z + Math.cos(ry) * inset; if (!clear(ix, iz)) return false; fn(k.at(ix, iz, ry), r, ...a); return true; };
  const mid = (fn, f = 0.5, g = 0.5, ry = 0, ...a) => { const x = x0 + W * f, z = z0 + D * g; if (!clear(x, z, 1.4)) return false; fn(k.at(x, z, ry), r, ...a); return true; };
  const sides = ['n', 's', 'e', 'w'];
  const clutter = (n = 2) => { for (let a = 0; a < n; a++) { const x = x0 + 0.8 + r() * (W - 1.6), z = z0 + 0.8 + r() * (D - 1.6); if (!clear(x, z, 1.1)) continue; const t = r(); k.at(x, z, r() * 6); if (t < 0.35) PR.papers(k, r, 5); else if (t < 0.6) PR.trash(k, r, 2); else if (t < 0.75) PR.chair(k, r, true); else if (t < 0.88) PR.blood(k, r, 0.8); else PR.spill(k, r); } };
  switch (kind) {
    case 'house': case 'farmhouse': {
      place(PR.couch, 'n', 0.3, 0.1); place(PR.tv, 's', 0.3, 0); mid(PR.rug, 0.3, 0.5); mid(PR.ctable, 0.3, 0.45);
      place(PR.kitchen, 'e', 0.3, 0.05) || place(PR.kitchen, 'w', 0.7, 0.05); mid(PR.table, 0.72, 0.6); mid(PR.chair, 0.72, 0.8, Math.PI); mid(PR.chair, 0.65, 0.4, 0.3, true);
      place(PR.lamp, 'n', 0.08, 0); place(PR.photo, 'n', 0.55, -0.38, 1.6); story && story.photo && place(PR.photo, 'w', 0.4, -0.38, 1.5); clutter(3); break;
    }
    case 'bedroom': place(PR.bed, 'n', 0.35, 0.6); place(PR.dresser, 's', 0.7, 0); place(PR.photo, 'e', 0.5, -0.38, 1.5); if (r() < 0.5) place(PR.mattress, 'w', 0.6, 0.8); clutter(2); break;
    case 'cabin': place(PR.bed, 'n', 0.25, 0.6); place(PR.stove, 'e', 0.5, 0); mid(PR.table, 0.6, 0.6); mid(PR.chair, 0.6, 0.8, Math.PI, true); place(PR.shelf, 's', 0.7, 0, 1.4, 1.6); mid(PR.lantern, 0.6, 0.6); clutter(2); break;
    case 'shed': place(PR.bench, 'n', 0.5, 0); place(PR.shelf, 'e', 0.5, 0, 1.4); place(PR.gascan, 'w', 0.3, 0.2); place(PR.mower, 'w', 0.7, 0.4); break;
    case 'trailer': place(PR.bed, 'w', 0.5, 0.6); place(PR.couch, 'n', 0.75, 0.05); place(PR.kitchen, 'n', 0.45, 0.05); clutter(3); break;
    case 'ranger': place(PR.desk, 'n', 0.3, 0.1); place(PR.radio, 'n', 0.3, 0.1); place(PR.mapboard, 'e', 0.5, -0.4); place(PR.bunk, 's', 0.75, 0.5); place(PR.locker, 'w', 0.5, 0); place(PR.chair, 'n', 0.3, 0.9, true); clutter(2); break;
    case 'diner': {
      const n = Math.max(1, Math.floor((W - 1) / 2.1)); for (let a = 0; a < n; a++) place(PR.booth, 's', (a + 0.5) / n, 0.6);
      place(PR.counter, 'n', 0.5, 1.4, Math.min(W - 2, 6)); for (let a = 0; a < Math.min(6, (W - 2) / 1.1); a++) mid(PR.stool, 0.2 + a * 0.12, 0.5, 0);
      place(PR.grill, 'n', 0.3, 0); place(PR.fridge, 'n', 0.8, 0); place(PR.jukebox, 'w', 0.5, 0); clutter(3); break;
    }
    case 'gas': case 'store': case 'truckstop': {
      place(PR.register, 's', 0.8, 1.0); place(PR.cooler, 'n', 0.5, 0, Math.min(W - 1, 5)); for (let a = 0; a < Math.max(1, Math.floor((W - 3) / 3)); a++) mid(PR.aisle, 0.25 + a * 0.25, 0.48, Math.PI / 2, Math.min(D - 3, 3.5)); for (let a = 0; a < 3; a++) mid(PR.spill, r(), 0.3 + r() * 0.4); clutter(2); break;
    }
    case 'pharmacy': place(PR.counter, 'n', 0.5, 0.9, Math.min(W - 2, 5), 0xd8d4c8); place(PR.shelf, 'n', 0.5, 0, Math.min(W - 2, 5)); for (let a = 0; a < 2; a++) mid(PR.aisle, 0.33 + a * 0.33, 0.6, Math.PI / 2, 2.5); place(PR.register, 's', 0.8, 1.0); for (let a = 0; a < 4; a++) mid(PR.spill, r(), 0.4 + r() * 0.3); clutter(2); break;
    case 'hardware': place(PR.shelf, 'n', 0.3, 0, 3, 2.4); place(PR.shelf, 'n', 0.75, 0, 3, 2.4); place(PR.bench, 'e', 0.5, 0); place(PR.logs, 'w', 0.5, 0.4); mid(PR.aisle, 0.45, 0.55, Math.PI / 2, 3); place(PR.register, 's', 0.8, 1.0); clutter(2); break;
    case 'police': place(PR.counter, 's', 0.5, 1.6, Math.min(W - 2, 4)); mid(PR.desk, 0.3, 0.45); mid(PR.desk, 0.7, 0.45); place(PR.cell, 'n', 0.3, 1.2, Math.min(W * 0.45, 4)); place(PR.locker, 'e', 0.5, 0, 4); place(PR.radio, 'w', 0.5, 0.3); place(PR.mapboard, 'w', 0.2, -0.4); clutter(3); break;
    case 'church': {
      for (let rr = 0; rr < Math.floor((D - 4) / 1.3); rr++) for (const f of [0.27, 0.73]) mid(PR.pew, f, 0.25 + rr * 1.3 / D, 0, Math.min(W * 0.36, 3.2));
      place(PR.altar, 'n', 0.5, 0.6); story && story.laststand && door && PR.barricade(k.at(door[0], door[1] + (door[1] > z0 + D / 2 ? -1.2 : 1.2), door[1] > z0 + D / 2 ? Math.PI : 0), r, 2.4); clutter(3); break;
    }
    case 'garage': place(PR.lift, 'n', 0.4, 2.2); place(PR.toolchest, 'e', 0.3, 0); place(PR.bench, 'e', 0.7, 0); place(PR.tires, 'w', 0.3, 0.5); place(PR.drum, 'w', 0.7, 0.4); place(PR.drum, 'w', 0.8, 0.5); clutter(2); break;
    case 'barn': place(PR.logs, 'n', 0.3, 0.7); mid(PR.crate, 0.6, 0.4); mid(PR.crate, 0.65, 0.5); place(PR.bench, 'e', 0.6, 0); place(PR.drum, 'w', 0.4, 0.4); place(PR.tires, 'w', 0.7, 0.4); break;
    case 'sawmill': mid(PR.sawtable, 0.5, 0.5); place(PR.logs, 'n', 0.3, 0.7); place(PR.logs, 's', 0.7, 0.7); place(PR.bench, 'e', 0.5, 0); break;
    case 'bar': place(PR.counter, 'n', 0.5, 1.2, Math.min(W - 2, 5), 0x3a2414, 0x5a3a20); place(PR.shelf, 'n', 0.5, 0, Math.min(W - 2, 4)); mid(PR.table, 0.3, 0.7, 0, 0.9, 0.9); mid(PR.table, 0.7, 0.7, 0, 0.9, 0.9); for (let a = 0; a < 4; a++) mid(PR.chair, 0.2 + a * 0.2, 0.82, r() * 6); place(PR.jukebox, 'w', 0.3, 0); clutter(3); break;
    case 'school': for (let a = 0; a < 3; a++) for (let b = 0; b < 2; b++) mid(PR.desk, 0.25 + a * 0.25, 0.4 + b * 0.25); place(PR.mapboard, 'n', 0.5, -0.4); place(PR.locker, 'e', 0.5, 0, 4); clutter(3); break;
    case 'office': case 'base': mid(PR.desk, 0.3, 0.4); mid(PR.desk, 0.7, 0.4); place(PR.locker, 'e', 0.5, 0, 3); place(PR.mapboard, 'n', 0.5, -0.4); place(PR.radio, 'w', 0.4, 0.3); clutter(2); break;
    case 'burned': for (let a = 0; a < 4; a++) mid(PR.crate, r(), r()); clutter(4); break;
    default: clutter(2);
  }
}
