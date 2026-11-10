// The Lockwood Motel: a tile grid (2 m tiles) that drives collision, zombie pathing, building and the meshes.
export const S = 2, GW = 44, GH = 40, WALL_H = 3.4;
export const OUT = 0, FLOOR = 1, WALL = 2, WIN = 3, DOOR = 4, FENCE = 5, PROP = 6, BWALL = 7, BDOOR = 8, SPIKE = 9;
export const ZONES = ['Lobby', 'Parking Lot', 'Diner', 'Garage'];

export const grid = new Uint8Array(GW * GH);
export const zone = new Int8Array(GW * GH).fill(-1);
export const owner = new Int16Array(GW * GH).fill(-1);   // door id / window id / built piece id at the tile
export const idx = (i, j) => j * GW + i;
export const inb = (i, j) => i >= 0 && j >= 0 && i < GW && j < GH;
export const at = (i, j) => inb(i, j) ? grid[idx(i, j)] : FENCE;
export const tileOf = v => Math.floor(v / S);
export const cx = i => i * S + S / 2;

export const doors = [];    // {id, tiles:[[i,j]], cost, zone, open, label, axis}
export const windows = [];  // {id, i, j, planks, axis:'x'|'z', outDir:[di,dj]}
export const rooms = [];
export const openZones = new Set([0]);

function room(name, z, i0, j0, i1, j1, floorKind) {
  rooms.push({ name, z, i0, j0, i1, j1, floorKind });
  for (let j = j0 - 1; j <= j1 + 1; j++) for (let i = i0 - 1; i <= i1 + 1; i++) {
    const k = idx(i, j);
    if (i >= i0 && i <= i1 && j >= j0 && j <= j1) { grid[k] = FLOOR; zone[k] = z; } else if (grid[k] === OUT) grid[k] = WALL;
  }
}
function door(tiles, cost, z, label) {
  const id = doors.length; const axis = tiles.length > 1 && tiles[0][1] === tiles[1][1] ? 'x' : 'z';
  doors.push({ id, tiles, cost, zone: z, open: false, label, axis });
  for (const [i, j] of tiles) { grid[idx(i, j)] = DOOR; owner[idx(i, j)] = id; }
}
function win(i, j) {
  const id = windows.length; const axis = (at(i - 1, j) === WALL || at(i + 1, j) === WALL) ? 'x' : 'z';
  let outDir = axis === 'x' ? (at(i, j + 1) === OUT ? [0, 1] : [0, -1]) : (at(i + 1, j) === OUT ? [1, 0] : [-1, 0]);
  windows.push({ id, i, j, planks: 6, axis, outDir, rip: 0 });
  grid[idx(i, j)] = WIN; owner[idx(i, j)] = id;
}
export function prop(i, j) { if (inb(i, j)) grid[idx(i, j)] = PROP; }

export function buildMap() {
  grid.fill(OUT); zone.fill(-1); owner.fill(-1); doors.length = 0; windows.length = 0; rooms.length = 0; openZones.clear(); openZones.add(0);
  for (let j = 0; j < GH; j++) for (let i = 0; i < GW; i++) { const k = idx(i, j); if (i === 0 || j === 0 || i === GW - 1 || j === GH - 1) grid[k] = FENCE; else zone[k] = 1; }
  room('Lobby', 0, 17, 22, 26, 29, 'carpet');
  room('Diner', 2, 28, 22, 37, 29, 'checker');
  room('Garage', 3, 6, 6, 15, 13, 'concrete');
  // the lobby and diner share the wall at i=27
  door([[21, 21], [22, 21]], 750, 1, 'Parking Lot');
  door([[27, 25], [27, 26]], 1000, 2, 'Diner');
  door([[10, 14], [11, 14]], 1250, 3, 'Garage');
  for (const [i, j] of [[18, 21], [25, 21], [19, 30], [24, 30], [16, 25], [16, 28]]) win(i, j);       // lobby
  for (const [i, j] of [[31, 21], [35, 21], [38, 24], [38, 28], [33, 30]]) win(i, j);                 // diner
  for (const [i, j] of [[8, 5], [13, 5], [5, 9], [16, 10]]) win(i, j);                              // garage
}

// --- solidity -------------------------------------------------------------
export function solidPlayer(t) { return t === WALL || t === WIN || t === DOOR || t === FENCE || t === PROP || t === BWALL; }
export function solidZombie(t, k) { return t === WALL || t === FENCE || t === PROP || t === DOOR || t === BWALL || t === BDOOR || (t === WIN && windows[owner[k]].planks > 0); }
export function solidCar(t) { return t !== OUT && t !== SPIKE; }
export function blocksBullet(t) { return t === WALL || t === DOOR || t === PROP; }

// push a circle out of solid tiles
export function collide(p, r, solidFn) {
  const i0 = tileOf(p.x - r), i1 = tileOf(p.x + r), j0 = tileOf(p.z - r), j1 = tileOf(p.z + r);
  let hit = false;
  for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
    const k = inb(i, j) ? idx(i, j) : -1; const t = k < 0 ? FENCE : grid[k];
    if (!solidFn(t, k)) continue;
    const nx = Math.max(i * S, Math.min(p.x, i * S + S)), nz = Math.max(j * S, Math.min(p.z, j * S + S));
    let dx = p.x - nx, dz = p.z - nz; const d = Math.hypot(dx, dz);
    if (d < r) {
      hit = true;
      if (d > 1e-5) { p.x += dx / d * (r - d); p.z += dz / d * (r - d); }
      else { const cxx = i * S + S / 2, czz = j * S + S / 2; dx = p.x - cxx; dz = p.z - czz; if (Math.abs(dx) > Math.abs(dz)) p.x = cxx + Math.sign(dx || 1) * (S / 2 + r); else p.z = czz + Math.sign(dz || 1) * (S / 2 + r); }
    }
  }
  return hit;
}

// march a 2D ray through the grid; returns distance to the first tile where test(t) is true
export function gridRay(ox, oz, dx, dz, maxD, test) {
  const l = Math.hypot(dx, dz); if (l < 1e-6) return maxD; dx /= l; dz /= l;
  let i = tileOf(ox), j = tileOf(oz); const si = dx > 0 ? 1 : -1, sj = dz > 0 ? 1 : -1;
  const tdx = Math.abs(S / (dx || 1e-9)), tdz = Math.abs(S / (dz || 1e-9));
  let tx = dx > 0 ? ((i + 1) * S - ox) / dx : dx < 0 ? (i * S - ox) / dx : Infinity;
  let tz = dz > 0 ? ((j + 1) * S - oz) / dz : dz < 0 ? (j * S - oz) / dz : Infinity;
  let t = 0;
  for (let n = 0; n < 200 && t < maxD; n++) {
    if (tx < tz) { t = tx; tx += tdx; i += si; } else { t = tz; tz += tdz; j += sj; }
    if (t > maxD) break;
    const k = inb(i, j) ? idx(i, j) : -1; if (test(k < 0 ? FENCE : grid[k], k)) return t;
  }
  return maxD;
}

// --- zombie flow field (Dijkstra from the player's tile) -------------------
export const dist = new Float32Array(GW * GH);
const heap = []; const INF = 1e9;
export function stepCost(k) {
  const t = grid[k];
  if (t === OUT || t === FLOOR || t === SPIKE) return t === SPIKE ? 4 : 1;
  if (t === WIN) return windows[owner[k]].planks > 0 ? 3 + windows[owner[k]].planks : 1.5;
  if (t === BWALL || t === BDOOR) return 30;
  return INF;
}
export function flow(pi, pj) {
  dist.fill(INF); heap.length = 0;
  if (!inb(pi, pj)) return;
  const s = idx(pi, pj); dist[s] = 0; heap.push([0, s]);
  const N = [[1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1], [1, 1, 1.414], [1, -1, 1.414], [-1, 1, 1.414], [-1, -1, 1.414]];
  while (heap.length) {
    const [d, k] = hpop(); if (d > dist[k]) continue;
    const i = k % GW, j = (k / GW) | 0;
    for (const [di, dj, m] of N) {
      const ni = i + di, nj = j + dj; if (!inb(ni, nj)) continue; const nk = idx(ni, nj);
      if (di && dj && (stepCost(idx(i + di, j)) >= 2 || stepCost(idx(i, j + dj)) >= 2)) continue; // no corner cutting past walls/barriers
      const c = stepCost(nk); if (c >= INF) continue;
      const nd = d + c * m; if (nd < dist[nk]) { dist[nk] = nd; hpush([nd, nk]); }
    }
  }
}
function hpush(e) { heap.push(e); let i = heap.length - 1; while (i > 0) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } }
function hpop() { const top = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let i = 0; for (;;) { const l = i * 2 + 1, r = l + 1; let m = i; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === i) break; [heap[m], heap[i]] = [heap[i], heap[m]]; i = m; } } return top; }

// ground spawn points in the lot (zombies claw up out of the dirt)
export const lotSpawns = [[3, 3], [22, 2], [40, 3], [2, 20], [41, 17], [3, 36], [14, 37], [30, 37], [40, 36], [41, 30], [25, 16], [3, 28]];
