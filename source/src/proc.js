// The world past the hand-built map. Everything here is deterministic from the chunk coordinates, so a place
// looks the same every time you come back. Chunks are 32 x 32 tiles (64 m).
//   genChunk(ci, cj)  -> tile data (grid/zone/area/surf) used by collision, zombies and the minimap
//   meshChunk(ci, cj) -> a THREE.Group with the trees, roads, buildings, interiors and clutter
import * as THREE from 'three';
import { S, CW, CH, OUT, FLOOR, WALL, OPEN, GLASS, TREE, A_WILDS, A_ASHFORD, A_STOP, treeOff } from './map.js';
import { T, make } from './tex.js';
import { T2 } from './tex2.js';
import { B, C, bake, merge } from './models.js';
import { Kit, PR, furnish, addObstacle, dropObstacles } from './props.js';

const CS = 32;
const std = o => new THREE.MeshStandardMaterial(o);
const md = (a, m) => ((a % m) + m) % m;
export function h32(a, b, c = 0) { let h = Math.imul(a | 0, 374761393) + Math.imul(b | 0, 668265263) + Math.imul(c | 0, 1274126177); h = Math.imul(h ^ (h >>> 13), 1274126177); h ^= h >>> 16; return (h >>> 0) / 4294967296; }
export function rngOf(a, b, c = 0) { let s = (h32(a, b, c) * 4294967296) >>> 0; return () => { s = (s + 0x6D2B79F5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function vnoise(x, z, seed) { const xi = Math.floor(x), zi = Math.floor(z), fx = x - xi, fz = z - zi, u = fx * fx * (3 - 2 * fx), v = fz * fz * (3 - 2 * fz); const a = h32(xi, zi, seed), b = h32(xi + 1, zi, seed), c = h32(xi, zi + 1, seed), d = h32(xi + 1, zi + 1, seed); return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v; }

// ---- the road network: it lines up with the roads leaving the core and goes on forever ----
// 1 = asphalt running east-west, 2 = asphalt north-south, 3 = dirt trail
export function roadAt(i, j) {
  if (md(j - 41, 480) <= 4) return 1;                         // Main St / Route 9 and its parallels
  if (md(i - 46, 600) <= 3 || md(i - 159, 600) <= 3) return 2; // Elm St and Pine Rd and their parallels
  if (i < 0 && j >= 72 && j <= 75) return 1;                  // South Ave heading west
  if (Math.abs(i - 300 - 600 * Math.round((i - 300) / 600) - 16 * Math.sin(j / 41) - 7 * Math.sin(j / 17)) < 1.2) return 3;
  if (Math.abs(j - 281 - 480 * Math.round((j - 281) / 480) - 14 * Math.sin(i / 37) - 6 * Math.sin(i / 13)) < 1.2) return 3;
  return 0;
}
const nearRoad = (i, j, d) => { for (let b = -d; b <= d; b++) for (let a = -d; a <= d; a++) { const r = roadAt(i + a, j + b); if (r === 1 || r === 2) return true; } return false; };
const inCoreM = (i, j, m) => i >= -m && j >= -m && i < CW + m && j < CH + m;

// ---- towns ----
export const ASH = { i0: 735, j0: -30, i1: 885, j1: 100 }, STOP = { i0: 626, j0: 20, i1: 674, j1: 64 };
const inR = (R, i, j, m = 0) => i >= R.i0 - m && i <= R.i1 + m && j >= R.j0 - m && j <= R.j1 + m;
const HAMLET_NAMES = ['Cedar Gap', "Miller's Crossing", 'Black Creek', 'Dunmore', 'Redfield', 'Hollow Pines', 'Stillwater', 'Grayson', 'Wren Hill', 'Ludlow', 'Fairbanks', 'Coal Run'];

// building spec: tile rect i0..i1, j0..j1 includes the wall ring; side = door side; dw = door width in tiles
function spec(kind, i0, j0, w, h, side, r, o = {}) {
  const b = { kind, i0, j0, i1: i0 + w - 1, j1: j0 + h - 1, side, dw: o.dw || (/garage|barn|sawmill/.test(kind) ? 3 : 1), name: o.name || null, wall: o.wall, tint: o.tint, story: o.story || {}, open: [], part: null, seed: (r() * 1e9) | 0 };
  const storefront = /diner|gas|store|pharmacy|hardware|truckstop|police/.test(kind);
  const len = s => (s === 'n' || s === 's') ? w - 2 : h - 2;
  const doorAt = o.doorAt != null ? o.doorAt : Math.floor((len(side) - b.dw) / 2);
  for (const s of ['n', 's', 'e', 'w']) {
    const L = len(s);
    for (let t = 0; t < L; t++) {
      if (s === side && t >= doorAt && t < doorAt + b.dw) { b.open.push({ s, t, type: 'door' }); continue; }
      if (kind === 'burned' && r() < 0.18) { b.open.push({ s, t, type: 'gap' }); continue; }
      if (/barn|sawmill|shed/.test(kind)) continue;
      const nearDoor = s === side && (t === doorAt - 1 || t === doorAt + b.dw);
      if (nearDoor && !(storefront && s === side)) continue;
      const win = storefront && s === side ? true : (t % 2 === 1 && r() < (kind === 'church' ? 0.9 : 0.65));
      if (win) b.open.push({ s, t, type: 'win', boarded: r() < (o.boarded != null ? o.boarded : 0.3) });
    }
  }
  if (/house|farmhouse/.test(kind) && w >= 7) { const pi = i0 + Math.floor(w * 0.58); b.part = { i: pi, gap: j0 + Math.floor(h / 2) }; }
  return b;
}

const ASH_LIST = (() => {
  const r = rngOf(9, 9, 9), L = [];
  const add = (kind, i0, j0, w, h, side, o = {}) => L.push(spec(kind, i0, j0, w, h, side, r, o));
  add('gas', 744, 29, 8, 7, 's', { name: 'ASHFORD FUEL', wall: 'stucco' });
  add('diner', 776, 29, 10, 8, 's', { name: "ROSIE'S DINER", wall: 'diner' });
  add('pharmacy', 788, 29, 8, 8, 's', { name: 'ASHFORD PHARMACY', wall: 'brick' });
  add('hardware', 798, 28, 10, 9, 's', { name: 'MILLER HARDWARE', wall: 'metal' });
  add('police', 824, 28, 10, 9, 's', { name: 'ASHFORD POLICE', wall: 'brick', story: { radio: 1 } });
  add('house', 838, 30, 8, 7, 's', { story: { photo: 1, note: 1 } }); add('house', 850, 30, 8, 7, 's', { story: { bike: 1 } }); add('house', 862, 30, 8, 7, 's', {});
  add('church', 806, 6, 9, 13, 'e', { name: "ST. ANNE'S CHURCH", wall: 'stone', story: { laststand: 1 } });
  add('house', 824, 6, 8, 7, 'w', { story: { photo: 1 } }); add('house', 824, 16, 8, 7, 'w', { story: { note: 1 } }); add('house', 806, -6, 8, 7, 'e', {});
  add('garage', 768, 49, 12, 10, 'n', { name: 'ASHFORD AUTO REPAIR', wall: 'metal' });
  add('house', 784, 49, 8, 7, 'n', { story: { bike: 1, photo: 1 } }); add('house', 796, 49, 8, 7, 'n', {});
  add('store', 824, 49, 10, 9, 'n', { name: 'GENERAL STORE', wall: 'wood' });
  add('house', 838, 49, 8, 7, 'n', { story: { note: 1 } }); add('house', 850, 49, 8, 7, 'n', {}); add('burned', 862, 49, 8, 7, 'n', {});
  add('house', 806, 62, 8, 7, 'e', { story: { photo: 1 } }); add('sawmill', 824, 64, 14, 12, 'w', { name: 'ASHFORD LUMBER' });
  add('trailer', 790, 66, 7, 4, 'n', {}); add('trailer', 790, 74, 7, 4, 'n', { story: { note: 1 } });
  return L;
})();
const STOP_LIST = (() => { const r = rngOf(7, 7, 7); return [spec('truckstop', 652, 28, 12, 9, 's', r, { name: 'ROUTE 9 TRUCK STOP', wall: 'stucco', story: { radio: 1 } }), spec('diner', 630, 29, 9, 8, 's', r, { name: 'EATS', wall: 'diner' }), spec('shed', 666, 30, 4, 3, 's', r, {})]; })();

const hamlets = new Map();
function hamletAt(ci0, cj0) { // a crossing of two roads with a few buildings around it
  const key = ci0 + ',' + cj0; if (hamlets.has(key)) return hamlets.get(key);
  let H = null; const r = rngOf(ci0, cj0, 31);
  if (r() < 0.75) {
    H = { ci: ci0, cj: cj0, name: HAMLET_NAMES[(r() * HAMLET_NAMES.length) | 0], R: { i0: ci0 - 46, j0: cj0 - 42, i1: ci0 + 50, j1: cj0 + 46 }, list: [] };
    const pool = ['house', 'house', 'store', 'gas', 'diner', 'church', 'garage', 'house', 'trailer', 'police', 'house', 'pharmacy', 'burned', 'bar'];
    const walls = r() < 0.5 ? ['siding', 'brick'] : ['wood', 'log', 'siding'];
    for (const [qx, qz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      const n = 1 + ((r() * 3) | 0);
      for (let a = 0; a < n; a++) {
        const kind = pool[(r() * pool.length) | 0]; const w = kind === 'church' ? 9 : kind === 'trailer' ? 7 : 8 + ((r() * 2) | 0), h = kind === 'church' ? 12 : kind === 'trailer' ? 4 : 7 + ((r() * 2) | 0);
        const alongMain = r() < 0.6; let i0, j0, side;
        if (alongMain) { i0 = qx < 0 ? ci0 - 8 - (a + 1) * 12 : ci0 + 8 + a * 12; j0 = qz < 0 ? cj0 - 3 - h : cj0 + 7; side = qz < 0 ? 's' : 'n'; }
        else { i0 = qx < 0 ? ci0 - 3 - w : ci0 + 7; j0 = qz < 0 ? cj0 - 8 - (a + 1) * 11 : cj0 + 9 + a * 11; side = qx < 0 ? 'e' : 'w'; }
        const nm = { store: H.name.toUpperCase() + ' GROCERY', gas: 'GAS', diner: 'DINER', church: 'CHURCH', garage: 'AUTO SERVICE', police: H.name.toUpperCase() + ' SHERIFF', pharmacy: 'DRUGS', bar: 'TAVERN' }[kind];
        const b = spec(kind, i0, j0, w, h, side, r, { name: nm, wall: walls[(r() * walls.length) | 0], story: { photo: r() < 0.4, note: r() < 0.4, bike: r() < 0.25, laststand: kind === 'church' && r() < 0.6, radio: kind === 'police' } });
        if (!H.list.some(o => o.i0 <= b.i1 + 2 && b.i0 <= o.i1 + 2 && o.j0 <= b.j1 + 2 && b.j0 <= o.j1 + 2)) H.list.push(b);
      }
    }
  }
  hamlets.set(key, H); return H;
}
// crossings of the asphalt roads near a chunk (except the core, Ashford and the truck stop, which are hand placed)
function hamletsNear(i, j) {
  const out = []; const n0 = Math.round((j - 41) / 480);
  for (let n = n0 - 1; n <= n0 + 1; n++) for (const base of [46, 159]) { const m0 = Math.round((i - base) / 600); for (let m = m0 - 1; m <= m0 + 1; m++) {
    const ci0 = base + 600 * m + 2, cj0 = 41 + 480 * n + 2; if (n === 0 && (m === 0 || (base === 46 && m === 1) || (base === 159 && m === 1))) continue;
    if (Math.abs(ci0 - i) > 120 || Math.abs(cj0 - j) > 120) continue; const H = hamletAt(ci0, cj0); if (H) out.push(H); } }
  return out;
}

// a lonely building in the woods, maybe one per chunk
const WILD_KINDS = [['cabin', 5, 5], ['cabin', 6, 5], ['shed', 4, 3], ['trailer', 7, 4], ['farmhouse', 9, 7], ['ranger', 7, 6], ['house', 8, 7], ['burned', 8, 7], ['barn', 9, 10], ['church', 8, 11]];
const WILD_W = [16, 10, 12, 10, 7, 5, 8, 7, 4, 2];
function wildBuildings(ci, cj) {
  const r = rngOf(ci, cj, 5), out = [], i00 = ci * CS, j00 = cj * CS;
  if (inCoreM(i00 + 16, j00 + 16, 40) || inR(ASH, i00 + 16, j00 + 16, 30) || inR(STOP, i00 + 16, j00 + 16, 24)) return out;
  for (const H of hamletsNear(i00 + 16, j00 + 16)) if (inR(H.R, i00 + 16, j00 + 16, 24)) return out;
  let road = false; for (let a = 0; a < CS; a += 4) for (let b = 0; b < CS; b += 4) { const t = roadAt(i00 + a, j00 + b); if (t === 1 || t === 2) road = true; }
  if (r() > (road ? 0.55 : 0.33)) return out;
  let tot = 0; for (const w of WILD_W) tot += w; let pick = r() * tot, kk = 0; while (pick > WILD_W[kk]) pick -= WILD_W[kk++];
  const [kind, w0, h0] = WILD_KINDS[kk]; const rot = r() < 0.5; const w = rot ? h0 : w0, h = rot ? w0 : h0;
  for (let tries = 0; tries < 8; tries++) {
    const i0 = i00 + 2 + ((r() * (CS - w - 4)) | 0), j0 = j00 + 2 + ((r() * (CS - h - 4)) | 0);
    let bad = false; for (let b = -2; b < h + 2 && !bad; b++) for (let a = -2; a < w + 2; a++) if (roadAt(i0 + a, j0 + b)) { bad = true; break; }
    if (bad) continue;
    // face the nearest road
    let side = ['n', 's', 'e', 'w'][(r() * 4) | 0], best = 99;
    for (const [s, di, dj] of [['n', 0, -1], ['s', 0, 1], ['w', -1, 0], ['e', 1, 0]]) for (let d = 3; d < 14; d++) { const t = roadAt(i0 + w / 2 + di * (w / 2 + d), j0 + h / 2 + dj * (h / 2 + d)); if (t && d < best) { best = d; side = s; } }
    const story = { photo: r() < 0.5, note: r() < 0.45, bike: r() < 0.2, laststand: kind === 'church' || r() < 0.08, radio: kind === 'ranger' || r() < 0.06 };
    const wall = { cabin: 'log', shed: r() < 0.5 ? 'metal' : 'wood', trailer: 'trailer', farmhouse: 'siding', ranger: 'wood', house: r() < 0.5 ? 'siding' : 'brick', burned: 'siding', barn: 'barn', church: 'wood' }[kind];
    const b = spec(kind, i0, j0, w, h, side, r, { wall, story, name: kind === 'ranger' ? 'RANGER STATION' : kind === 'church' ? 'CHAPEL' : null });
    b.drive = best < 14 ? best : 0; out.push(b);
    if (kind === 'farmhouse' && r() < 0.7) { const bi = i0 + w + 3; if (bi + 8 < i00 + CS - 1) out.push(spec('barn', bi, j0, 8, 9, side === 'e' ? 'e' : 'w', r, { wall: 'barn' })); }
    else if ((kind === 'cabin' || kind === 'house') && r() < 0.5) { const si = i0 + w + 2; if (si + 4 < i00 + CS - 1) out.push(spec('shed', si, j0 + 1, 3, 3, side, r, { wall: 'wood' })); }
    break;
  }
  // a camp or a deer stand out in the trees
  if (!out.length && r() < 0.25) out.push({ kind: 'camp', i: i00 + 8 + ((r() * 16) | 0), j: j00 + 8 + ((r() * 16) | 0), seed: (r() * 1e9) | 0 });
  return out;
}
export function buildingsFor(ci, cj) {
  const i0 = ci * CS, j0 = cj * CS, i1 = i0 + CS - 1, j1 = j0 + CS - 1; const out = [];
  const ov = b => b.i0 <= i1 && b.i1 >= i0 && b.j0 <= j1 && b.j1 >= j0;
  if (inR(ASH, i0, j0, CS)) for (const b of ASH_LIST) if (ov(b)) out.push(b);
  if (inR(STOP, i0, j0, CS)) for (const b of STOP_LIST) if (ov(b)) out.push(b);
  for (const H of hamletsNear(i0 + 16, j0 + 16)) for (const b of H.list) if (ov(b)) out.push(b);
  for (const b of wildBuildings(ci, cj)) out.push(b);
  return out;
}
function townOf(i, j) { if (inR(ASH, i, j)) return { area: A_ASHFORD, name: 'Ashford' }; if (inR(STOP, i, j)) return { area: A_STOP, name: 'Truck stop' }; for (const H of hamletsNear(i, j)) if (inR(H.R, i, j)) return { area: A_ASHFORD, name: H.name, H }; return null; }

// ---- tile data ----
const cache = new Map();
export function genChunk(ci, cj) {
  const key = ci * 100003 + cj; let ch = cache.get(key); if (ch) return ch;
  const N = CS * CS; ch = { grid: new Uint8Array(N), zone: new Int16Array(N), area: new Uint8Array(N), surf: new Uint8Array(N), trees: [], blds: buildingsFor(ci, cj) };
  ch.zone.fill(1); const i00 = ci * CS, j00 = cj * CS;
  const town = townOf(i00 + 16, j00 + 16);
  const resv = new Uint8Array(N); // no trees here (yards, driveways)
  for (let b = 0; b < CS; b++) for (let a = 0; a < CS; a++) {
    const i = i00 + a, j = j00 + b, l = b * CS + a; const tw = townOf(i, j);
    ch.area[l] = tw ? tw.area : A_WILDS; const rd = roadAt(i, j);
    if (rd === 1 || rd === 2) ch.surf[l] = 2; else if (rd === 3) ch.surf[l] = 3;
    if (tw && !ch.surf[l]) { // sidewalks along the main road through town
      const m = md(j - 41, 480); if (m === 5 || m === 479) ch.surf[l] = 5;
    }
  }
  for (const b of ch.blds) {
    if (b.kind === 'camp') { for (let y = -3; y <= 3; y++) for (let x = -3; x <= 3; x++) { const a = b.i + x - i00, c = b.j + y - j00; if (a >= 0 && c >= 0 && a < CS && c < CS) resv[c * CS + a] = 1; } continue; }
    const ring = (i, j) => i === b.i0 || i === b.i1 || j === b.j0 || j === b.j1;
    for (let j = b.j0 - 3; j <= b.j1 + 3; j++) for (let i = b.i0 - 3; i <= b.i1 + 3; i++) {
      const a = i - i00, c = j - j00; if (a < 0 || c < 0 || a >= CS || c >= CS) continue; const l = c * CS + a; resv[l] = 1;
      if (i < b.i0 || i > b.i1 || j < b.j0 || j > b.j1) continue;
      ch.grid[l] = ring(i, j) ? WALL : FLOOR; ch.surf[l] = 0;
    }
    for (const o of b.open) { const [i, j] = openTile(b, o); const a = i - i00, c = j - j00; if (a < 0 || c < 0 || a >= CS || c >= CS) continue; ch.grid[c * CS + a] = o.type === 'win' ? (o.boarded ? WALL : GLASS) : OPEN; }
    // concrete apron in front of shops, dirt drive for lonely buildings
    const [di, dj] = { n: [0, -1], s: [0, 1], w: [-1, 0], e: [1, 0] }[b.side]; const d0 = b.open.find(o => o.type === 'door'); const [ti, tj] = openTile(b, d0);
    const pave = /gas|store|truckstop|diner|garage|police|pharmacy|hardware/.test(b.kind);
    const L = b.drive || (pave ? 3 : 2);
    for (let s = 1; s <= L; s++) for (let wv = -1; wv <= (pave ? b.dw + 1 : 0); wv++) { const i = ti + di * s + (dj ? wv : 0), j = tj + dj * s + (di ? wv : 0); const a = i - i00, c = j - j00; if (a < 0 || c < 0 || a >= CS || c >= CS) continue; const l = c * CS + a; if (ch.grid[l] === OUT && ch.surf[l] !== 2) ch.surf[l] = pave ? (b.kind === 'gas' || b.kind === 'truckstop' ? 1 : 5) : 3; resv[l] = 1; }
  }
  // trees: thick woods with clearings, thinner in towns, never on roads or right beside them
  for (let b = 0; b < CS; b++) for (let a = 0; a < CS; a++) {
    const l = b * CS + a, i = i00 + a, j = j00 + b; if (ch.grid[l] !== OUT || ch.surf[l] || resv[l]) continue;
    if (inCoreM(i, j, 0)) continue;
    if (nearRoad(i, j, 1)) continue;
    let p;
    if (ch.area[l] !== A_WILDS) p = 0.02;
    else { const n = vnoise(i / 22, j / 22, 3); p = n < 0.3 ? 0.008 : 0.03 + (n - 0.3) * 0.13; const edge = Math.max(-i, -j, i - CW + 1, j - CH + 1); if (edge < 30) p = Math.min(p, 0.06 + edge * 0.001); }
    const hh = h32(i, j, 11); if (hh < p) { ch.grid[l] = TREE; ch.trees.push(i, j, h32(i, j, 12)); }
  }
  cache.set(key, ch); return ch;
}
export function openTile(b, o) {
  const t = o.t + 1; return o.s === 'n' ? [b.i0 + t, b.j0] : o.s === 's' ? [b.i0 + t, b.j1] : o.s === 'w' ? [b.i0, b.j0 + t] : [b.i1, b.j0 + t];
}

// ---- meshes ----
let MAT = null, GROUP = null;
const sprayCols = ['#c81e1e', '#e8e4d8', '#2a2a2a', '#d8a020'];
const SPRAY = ["DON'T GO IN", 'EVAC AT CHURCH', 'DEAD INSIDE', 'THEY HEAR YOU', 'NO WATER', 'FT CALDER SOUTH', 'GOD HELP US', 'AIM FOR THE HEAD', 'LOOTERS WILL BE SHOT', 'SARAH WE WENT NORTH', 'STILL ALIVE', 'NOT SAFE', 'INFECTED INSIDE', 'HELP'];
const NOTES = ["Fridge note: \"Mom - took the kids to the church. Don't wait for us. Love you. D\"", 'Fridge note: "Out of insulin. Going to the pharmacy in town. Back before dark. R"', 'Note: "If you\'re reading this, the water is bad. Boil it first."', 'Note: "Gone to Fort Calder. Follow Route 9 west. Leave the car if you have to."', 'Note: "Dad got bit. He says it\'s nothing. I don\'t believe him."', 'Note: "Day 6. They come out at night. Stay quiet, stay upstairs."', 'Note: "To whoever finds this house: there\'s canned food under the floor. Take it. We won\'t need it."'];
const RADIO = ['The radio crackles: "...emergency broadcast. Survivors make your way to Fort Calder, past the Lockwood graveyard..."', 'The radio crackles: "...do not enter Lockwood. Repeat, the town is lost..."', 'The radio crackles: "...if anyone can hear this, we\'re at the Ashford church. We have food. Please..."', 'The radio crackles: "...they\'re drawn to noise. Engines, gunfire. Keep it quiet out there..."'];
function spray(text, col) { return make('spray' + text + col, 512, 128, (x, w, h) => { x.clearRect(0, 0, w, h); x.font = 'bold 66px Impact, Arial Black, Arial'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillStyle = col; x.shadowColor = col; x.shadowBlur = 6; x.fillText(text, w / 2, h / 2); x.shadowBlur = 0; for (let n = 0; n < 14; n++) { const px = 40 + Math.random() * (w - 80); x.fillRect(px, h / 2 + 18, 3, 12 + Math.random() * 30); } }); }
function photoTex(v) { return make('photo' + v, 128, 96, (x, w, h) => { x.fillStyle = ['#8a9aa8', '#a89a7a', '#7a8a6a'][v]; x.fillRect(0, 0, w, h); x.fillStyle = '#5a6a4a'; x.fillRect(0, h * 0.7, w, h * 0.3); const ppl = 2 + v; for (let n = 0; n < ppl; n++) { const px = 20 + n * (w - 40) / Math.max(1, ppl - 1), s = n >= 2 ? 0.7 : 1; x.fillStyle = ['#3a3a5a', '#7a3a3a', '#3a5a3a', '#5a4a2a'][n % 4]; x.fillRect(px - 8 * s, h * 0.45, 16 * s, 34 * s); x.fillStyle = '#d8b898'; x.beginPath(); x.arc(px, h * 0.38 + (1 - s) * 18, 8 * s, 0, 7); x.fill(); } x.strokeStyle = '#f0ece0'; x.lineWidth = 6; x.strokeRect(0, 0, w, h); }); }
function menuTex() { return make('menuboard', 256, 192, (x, w, h) => { x.fillStyle = '#1a1c18'; x.fillRect(0, 0, w, h); x.fillStyle = '#e8e4d0'; x.font = 'bold 22px Arial'; x.textAlign = 'center'; x.fillText("TODAY'S SPECIAL", w / 2, 30); x.font = '18px Arial'; x.fillText('MEATLOAF & MASH  $4.99', w / 2, 70); x.fillText('PIE OF THE DAY: CHERRY', w / 2, 100); x.fillStyle = '#e06040'; x.font = 'bold 20px Arial'; x.fillText('NO MORE COFFEE', w / 2, 140); x.font = 'italic 14px Arial'; x.fillStyle = '#c8c4b0'; x.fillText('closing early - stay safe', w / 2, 172); }); }
function signTex(text, kind) {
  if (kind === 'roadsign') return T.label(text, '#1e5a2a', '#f0f0e8', 512, 200, 'bold 64px Arial');
  if (kind === 'welcome') return T.label(text, '#e8e0c8', '#2a2a2a', 1024, 220, 'bold 84px Georgia, serif');
  return T.label(text, '#1c1a16', '#d8c89a', 1024, 160, 'bold 96px Arial Black, Arial');
}
const WALLTEX = () => ({ siding: [T2.siding('#8a9590'), 0.9], sidingB: [T2.siding('#9a8c6e'), 0.9], sidingW: [T2.siding('#b8b4a6'), 0.9], brick: [T.brick(), 0.9], stucco: [T.stucco(), 0.92], wood: [T2.wood2(), 0.85], log: [T2.logs(), 0.95], stone: [T2.stone(), 0.95], barn: [T2.barn(), 0.9], metal: [T2.metal(), 0.6], diner: [T.dinerWall(), 0.6], trailer: [T2.metal(), 0.5] });
export function initProc(group) {
  GROUP = group; const wt = WALLTEX(); MAT = { wall: {}, floor: {} };
  for (const k in wt) MAT.wall[k] = std({ map: wt[k][0], roughness: wt[k][1], vertexColors: true, metalness: k === 'metal' || k === 'trailer' ? 0.35 : 0 });
  MAT.liner = std({ map: T.stucco(), roughness: 0.95, vertexColors: true });
  MAT.floor.wood = std({ map: T.wood(), roughness: 0.8, vertexColors: true }); MAT.floor.checker = std({ map: T.tileChecker(), roughness: 0.5, vertexColors: true }); MAT.floor.carpet = std({ map: T.carpet(), roughness: 0.98, vertexColors: true }); MAT.floor.concrete = std({ map: T.concrete(), roughness: 0.9, vertexColors: true });
  MAT.roof = std({ map: T2.roof(), roughness: 1, vertexColors: true }); MAT.metalRoof = std({ map: T2.metal(), roughness: 0.7, metalness: 0.3, vertexColors: true });
  MAT.vc = std({ vertexColors: true, roughness: 0.85 });
  MAT.tree = std({ vertexColors: true, roughness: 1, flatShading: true });
  MAT.road = std({ map: T2.road(), roughness: 0.85, polygonOffset: true, polygonOffsetFactor: -1 });
  MAT.dirt = std({ map: T.concrete(), roughness: 1, color: 0x8a7050, polygonOffset: true, polygonOffsetFactor: -1 });
  MAT.conc = std({ map: T.concrete(), roughness: 1, color: 0x8a8a84, polygonOffset: true, polygonOffsetFactor: -1 });
  MAT.asph = std({ map: T.asphalt(), roughness: 0.85, color: 0x8a8a8a, polygonOffset: true, polygonOffsetFactor: -1 });
  MAT.labels = new Map();
}
function labelMat(l) {
  const key = l.kind + '|' + l.text; let m = MAT.labels.get(key); if (m) return m;
  if (l.kind === 'photo') m = std({ map: photoTex(l.text.length % 3), roughness: 0.4 });
  else if (l.kind === 'spray') m = std({ map: spray(l.text, l.col || '#c81e1e'), transparent: true, alphaTest: 0.25, depthWrite: false, roughness: 0.9, polygonOffset: true, polygonOffsetFactor: -2 });
  else if (l.kind === 'menu') m = std({ map: menuTex(), roughness: 0.9 });
  else m = std({ map: signTex(l.text, l.kind), roughness: 0.8 });
  MAT.labels.set(key, m); return m;
}
// world-scale UVs so wall textures tile at the same size on every box
function wuv(g, sc = 0.4) {
  const p = g.attributes.position, n = g.attributes.normal, uv = g.attributes.uv;
  for (let v = 0; v < p.count; v++) { const ax = Math.abs(n.getX(v)), ay = Math.abs(n.getY(v)), az = Math.abs(n.getZ(v)); const x = p.getX(v), y = p.getY(v), z = p.getZ(v); if (ay > ax && ay > az) uv.setXY(v, x * sc, z * sc); else if (ax > az) uv.setXY(v, z * sc, y * sc); else uv.setXY(v, x * sc, y * sc); }
  return g;
}
function triGeo(ax, ay, az, bx, by, bz, cx, cy, cz, col) {
  const g = new THREE.BufferGeometry(); const P = [ax, ay, az, bx, by, bz, cx, cy, cz, ax, ay, az, cx, cy, cz, bx, by, bz];
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.computeVertexNormals();
  const c = new THREE.Color(col); g.setAttribute('color', new THREE.Float32BufferAttribute([c.r, c.g, c.b, c.r, c.g, c.b, c.r, c.g, c.b, c.r, c.g, c.b, c.r, c.g, c.b, c.r, c.g, c.b], 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(12), 2)); return wuv(g);
}
const WH = { house: 3.2, farmhouse: 3.3, cabin: 2.9, shed: 2.5, trailer: 2.6, ranger: 3, church: 5, barn: 4.6, sawmill: 4.6, garage: 4.4, burned: 3.0, bar: 3.4 };
const ROOF = { house: 'gable', farmhouse: 'gable', cabin: 'gable', shed: 'gable', ranger: 'gable', church: 'gable', barn: 'gambrel', sawmill: 'gable', trailer: 'trailer', burned: 'none' };
const FLOOR_OF = { diner: 'checker', gas: 'checker', store: 'checker', pharmacy: 'checker', truckstop: 'checker', police: 'concrete', hardware: 'concrete', garage: 'concrete', barn: 'concrete', sawmill: 'concrete', shed: 'concrete', house: 'wood', farmhouse: 'wood', cabin: 'wood', trailer: 'carpet', ranger: 'wood', church: 'wood', burned: 'concrete', bar: 'wood' };
const SILL = 0.9, LINTEL = 2.25, DOORH = 2.35, TH = 0.6, INSET = 0.4;

function meshBuilding(b, out, k) {
  const r = rngOf(b.seed, 3, 1); const H = WH[b.kind] || 3.9; const wallKey = b.wall === 'siding' ? ['siding', 'sidingB', 'sidingW'][b.seed % 3] : (b.wall || 'stucco');
  const burned = b.kind === 'burned'; const tint = burned ? 0x3a3430 : new THREE.Color().setHSL(0.08 + r() * 0.1, 0.1 + r() * 0.15, 0.55 + r() * 0.3).getHex();
  const W = (out.wall[wallKey] ||= []);
  // wall centre lines
  const xa = b.i0 * S + 1 + INSET, xb = b.i1 * S + 1 - INSET, za = b.j0 * S + 1 + INSET, zb = b.j1 * S + 1 - INSET, cxm = (xa + xb) / 2, czm = (za + zb) / 2;
  const sides = { n: { ax: 'x', f: za, a0: xa - TH / 2, a1: xb + TH / 2, inn: 1 }, s: { ax: 'x', f: zb, a0: xa - TH / 2, a1: xb + TH / 2, inn: -1 }, w: { ax: 'z', f: xa, a0: za + TH / 2, a1: zb - TH / 2, inn: 1 }, e: { ax: 'z', f: xb, a0: za + TH / 2, a1: zb - TH / 2, inn: -1 } };
  const wbox = (sd, s0, s1, y0, y1) => {
    if (s1 - s0 < 0.02 || y1 - y0 < 0.02) return; const c = (s0 + s1) / 2, L = s1 - s0, h = y1 - y0, y = (y0 + y1) / 2;
    const g = sd.ax === 'x' ? bake(B(L, h, TH), { x: c, y, z: sd.f, c: tint }) : bake(B(TH, h, L), { x: sd.f, y, z: c, c: tint }); W.push(wuv(g));
    const lo = sd.inn * (TH / 2 + 0.012); const lc = 0xe0d8c8 - (burned ? 0x908880 : 0);
    const lg = sd.ax === 'x' ? bake(B(L, h, 0.02), { x: c, y, z: sd.f + lo, c: lc }) : bake(B(0.02, h, L), { x: sd.f + lo, y, z: c, c: lc }); out.liner.push(wuv(lg, 0.5));
  };
  const ops = { n: [], s: [], e: [], w: [] };
  for (const o of b.open) { const [i, j] = openTile(b, o); const sd = sides[o.s]; const c = sd.ax === 'x' ? i * S + 1 : j * S + 1; ops[o.s].push({ c, o }); }
  // merge neighbouring door tiles into one wide opening
  for (const s in ops) { ops[s].sort((a, b2) => a.c - b2.c); const m = []; for (const p of ops[s]) { const last = m[m.length - 1]; if (last && last.o.type === 'door' && p.o.type === 'door' && p.c - last.c1 < 2.1) { last.c1 = p.c; } else m.push({ c0: p.c, c1: p.c, o: p.o }); } ops[s] = m; }
  const at = (sd, s, y) => sd.ax === 'x' ? [s, y, sd.f] : [sd.f, y, s];
  const outDir = s => ({ n: [0, -1], s: [0, 1], w: [-1, 0], e: [1, 0] })[s];
  let doorW = null;
  for (const s in sides) {
    const sd = sides[s]; let cur = sd.a0; const od = outDir(s); const face = TH / 2 + 0.03;
    for (const p of ops[s]) {
      const t = p.o.type; const half = t === 'door' ? (p.c1 - p.c0) / 2 + (p.c1 > p.c0 ? 0.85 : 0.8) : t === 'win' ? 0.65 : 0.95; const c = (p.c0 + p.c1) / 2;
      const s0 = c - half, s1 = c + half; wbox(sd, cur, s0, 0, H);
      const topY = t === 'gap' ? H - 0.6 - r() * 1.2 : t === 'door' ? (p.c1 > p.c0 ? Math.min(H - 0.3, 3.4) : DOORH) : LINTEL;
      wbox(sd, s0, s1, topY, H); if (t === 'win') wbox(sd, s0, s1, 0, SILL); if (t === 'gap') wbox(sd, s0, s1, 0, 0.3 + r() * 0.6);
      const [px, , pz] = at(sd, c, 0); const fx = px + od[0] * face, fz = pz + od[1] * face, ry = sd.ax === 'x' ? 0 : Math.PI / 2;
      const trim = burned ? 0x1a1816 : 0xd8d4c8;
      if (t === 'win') {
        k.at(fx, fz, ry); k.box(1.45, 0.1, 0.12, 0, SILL - 0.02, 0, trim).box(1.45, 0.1, 0.08, 0, LINTEL + 0.03, 0, trim).box(0.08, LINTEL - SILL, 0.08, -0.69, (SILL + LINTEL) / 2, 0, trim).box(0.08, LINTEL - SILL, 0.08, 0.69, (SILL + LINTEL) / 2, 0, trim);
        if (p.o.boarded) for (let n = 0; n < 3; n++) k.box(1.6, 0.2, 0.04, 0, SILL + 0.25 + n * 0.45, 0.04, 0x7a5a38, 0, 0, (r() - 0.5) * 0.35);
        else { k.at(px, pz, ry); for (let n = 0; n < 3; n++) k.geo(new THREE.ConeGeometry(0.12, 0.3 + r() * 0.3, 3), -0.5 + r(), SILL + 0.15, 0, 0x8aa0a8, 0, r(), r() < 0.5 ? 0 : Math.PI); k.box(1.3, 0.008, 0.6, 0, 0.03, sd.inn * (sd.ax === 'x' ? 0.6 : -0.6) * (sd.ax === 'x' ? 1 : -1), 0x6a7a80); }
        if (/house|farmhouse|cabin/.test(b.kind) && !burned) { k.at(fx, fz, ry); const sc = [0x2a3a2a, 0x3a2a22, 0x2a2a3a][b.seed % 3]; k.box(0.45, 1.4, 0.05, -1.0, (SILL + LINTEL) / 2, 0.02, sc); if (r() < 0.8) k.box(0.45, 1.4, 0.05, 1.0, (SILL + LINTEL) / 2, 0.02, sc, 0, r() < 0.2 ? 0.6 : 0); }
      } else if (t === 'door') {
        const dw = half * 2; k.at(fx, fz, ry); k.box(dw + 0.16, 0.14, 0.1, 0, topY + 0.05, 0, trim).box(0.1, topY, 0.1, -half - 0.03, topY / 2, 0, trim).box(0.1, topY, 0.1, half + 0.03, topY / 2, 0, trim);
        if (p.c1 === p.c0) { // the door itself: hanging open or kicked in
          const st = r(); k.at(px, pz, ry);
          if (st < 0.6) k.box(0.95, 2.2, 0.06, -half + 0.05 + Math.cos(1.2) * 0.48, 1.12, sd.inn * (sd.ax === 'x' ? 1 : -1) * Math.sin(1.2) * 0.48, [0x5a3a22, 0x7a2a20, 0x2a3a4a, 0xc8c4b8][b.seed % 4], 0, sd.inn * (sd.ax === 'x' ? 1 : -1) * 1.2);
          else if (st < 0.85) k.box(0.95, 0.06, 2.2, 0.2, 0.06, sd.inn * (sd.ax === 'x' ? 1 : -1) * 1.4, 0x5a3a22, 0, 0.3);
        } else { k.at(px, pz, ry); k.box(dw, 0.9, 0.08, 0, topY - 0.35, 0.05, 0x6a6e70); } // roll-up door stuck half open
        doorW = { x: px - od[0] * 1.2, z: pz - od[1] * 1.2, s, c, fx, fz, ry, out: od, half };
      }
      cur = s1;
    }
    wbox(sd, cur, sd.a1, 0, H);
    // foundation strip and grime band
    k.at(...(sd.ax === 'x' ? [cxm, sd.f + od[1] * (TH / 2 + 0.04)] : [sd.f + od[0] * (TH / 2 + 0.04), czm]), sd.ax === 'x' ? 0 : Math.PI / 2).box(sd.a1 - sd.a0 + 0.1, 0.35, 0.06, 0, 0.17, 0, burned ? 0x1a1816 : 0x4a4640);
  }
  // corner boards
  if (!burned) for (const [x, z] of [[xa, za], [xb, za], [xa, zb], [xb, zb]]) k.at(x, z).box(TH + 0.12, H, TH + 0.12, 0, H / 2, 0, /brick|stone/.test(wallKey) ? 0x5a5650 : 0xc8c4b8);
  // floor
  const fk = FLOOR_OF[b.kind] || 'concrete'; const ix0 = xa + TH / 2, ix1 = xb - TH / 2, iz0 = za + TH / 2, iz1 = zb - TH / 2;
  (out.floor[fk] ||= []).push(wuv(bake(B(ix1 - ix0, 0.04, iz1 - iz0), { x: cxm, y: 0.02, z: czm, c: burned ? 0x3a3430 : 0xffffff }), fk === 'checker' ? 0.25 : 0.33));
  // roof
  const kind = ROOF[b.kind] || 'flat', ov = 0.5;
  const RX0 = xa - TH / 2 - ov, RX1 = xb + TH / 2 + ov, RZ0 = za - TH / 2 - ov, RZ1 = zb + TH / 2 + ov;
  const rcol = burned ? 0x2a2420 : [0xffffff, 0xc8b8a8, 0xa8b0b8, 0xb8a090][b.seed % 4];
  if (kind === 'gable' || kind === 'gambrel') {
    const alongX = (RX1 - RX0) >= (RZ1 - RZ0); const L = alongX ? RX1 - RX0 : RZ1 - RZ0, Wd = alongX ? RZ1 - RZ0 : RX1 - RX0, hs = Wd / 2;
    const a = kind === 'gambrel' ? 0.75 : b.kind === 'church' ? 0.8 : 0.52, rise = (hs - ov) * Math.tan(a), sl = hs / Math.cos(a) + 0.06; const yb = H - ov * Math.tan(a);
    for (const sg of [-1, 1]) {
      const c = sg * hs / 2; const y = yb + hs * Math.tan(a) / 2 + 0.06;
      const g = alongX ? bake(B(L, 0.14, sl), { x: (RX0 + RX1) / 2, y, z: czm + c, rx: sg * a, c: rcol }) : bake(B(sl, 0.14, L), { x: cxm + c, y, z: (RZ0 + RZ1) / 2, rz: -sg * a, c: rcol });
      (out.roof).push(wuv(g, 0.35));
    }
    // gable ends
    const hw = (alongX ? zb - za : xb - xa) / 2 + TH / 2;
    for (const e of alongX ? [xa, xb] : [za, zb]) {
      const g = alongX ? triGeo(e, H, czm - hw, e, H, czm + hw, e, H + hw * Math.tan(a), czm, tint) : triGeo(cxm - hw, H, e, cxm + hw, H, e, cxm, H + hw * Math.tan(a), e, tint);
      W.push(g); const g2 = alongX ? triGeo(e + (e === xa ? -1 : 1) * TH / 2, H, czm - hw, e + (e === xa ? -1 : 1) * TH / 2, H, czm + hw, e + (e === xa ? -1 : 1) * TH / 2, H + hw * Math.tan(a), czm, tint) : triGeo(cxm - hw, H, e + (e === za ? -1 : 1) * TH / 2, cxm + hw, H, e + (e === za ? -1 : 1) * TH / 2, cxm, H + hw * Math.tan(a), e + (e === za ? -1 : 1) * TH / 2, tint); W.push(g2);
    }
    if (b.kind === 'church') { // steeple over the door end
      const ex = doorW ? doorW.fx : cxm, ez = doorW ? doorW.fz : czm; const sx = (ex + cxm) / 2 * 0.3 + ex * 0.7 - (doorW ? doorW.out[0] * 1.6 : 0), sz = (ez + czm) / 2 * 0.3 + ez * 0.7 - (doorW ? doorW.out[1] * 1.6 : 0);
      k.at(sx, sz).box(2, 4, 2, 0, H + rise + 1.2, 0, tint).geo(new THREE.ConeGeometry(1.6, 4, 4), 0, H + rise + 5.2, 0, 0x3a3a3a, 0, Math.PI / 4).box(0.12, 1.2, 0.12, 0, H + rise + 7.7, 0, 0xc8c0a0).box(0.7, 0.12, 0.12, 0, H + rise + 7.9, 0, 0xc8c0a0);
    }
  } else if (kind === 'trailer') {
    out.metalRoof.push(wuv(bake(B(RX1 - RX0 - 0.6, 0.18, RZ1 - RZ0 - 0.6), { x: cxm, y: H + 0.09, z: czm, c: 0xd8d4c8 })));
    for (const [x, z] of [[xa + 1, za], [xb - 1, za], [xa + 1, zb], [xb - 1, zb]]) k.at(x, z).box(0.3, 0.4, 0.3, 0, 0.2, 0, 0x5a5a5a);
  } else if (kind === 'flat') {
    out.roof.push(wuv(bake(B(RX1 - RX0 - 2 * ov + 0.2, 0.25, RZ1 - RZ0 - 2 * ov + 0.2), { x: cxm, y: H + 0.12, z: czm, c: 0x9a9690 }), 0.35));
    for (const s in sides) { const sd = sides[s]; const g = sd.ax === 'x' ? bake(B(sd.a1 - sd.a0 + 0.2, 0.7, 0.3), { x: cxm, y: H + 0.35, z: sd.f, c: tint }) : bake(B(0.3, 0.7, sd.a1 - sd.a0), { x: sd.f, y: H + 0.35, z: czm, c: tint }); W.push(wuv(g)); }
    k.at(cxm + (r() - 0.5) * 3, czm + (r() - 0.5) * 2).box(1.4, 0.9, 1.0, 0, H + 0.7, 0, 0x8a8e90).box(0.9, 0.1, 0.9, 0, H + 1.2, 0, 0x5a5e60);
    // awning over shop doors
    if (doorW && /diner|gas|store|pharmacy|hardware|truckstop/.test(b.kind)) { const ac = [0x8a2a24, 0x2a5a3a, 0x2a3a6a, 0xa87a2a][b.seed % 4]; k.at(doorW.fx + doorW.out[0] * 0.8, doorW.fz + doorW.out[1] * 0.8, doorW.ry).box(Math.min(sides[doorW.s].a1 - sides[doorW.s].a0 - 1, 9), 0.08, 1.7, 0, 2.75, 0, ac, sd2(doorW) * 0.25); }
  } else if (burned) { // charred rafters
    for (let n = 0; n < 4; n++) k.at(xa + (xb - xa) * (n + 0.5) / 4, czm).box(0.18, 0.18, zb - za + 0.4, 0, H + 0.1, 0, 0x141210, r() * 0.4 - 0.2, 0, r() * 0.3);
  }
  // porch on the door side of houses and cabins
  if (doorW && /house|farmhouse|cabin|ranger/.test(b.kind)) {
    const sd = sides[doorW.s], len = Math.min(sd.a1 - sd.a0, b.kind === 'farmhouse' ? 99 : 7); const pc = doorW.c; k.at(doorW.fx + doorW.out[0] * 1.0, doorW.fz + doorW.out[1] * 1.0, sd.ax === 'x' ? (doorW.s === 'n' ? Math.PI : 0) : (doorW.s === 'w' ? -Math.PI / 2 : Math.PI / 2));
    const off = Math.max(-((sd.a1 - sd.a0) - len) / 2, Math.min(((sd.a1 - sd.a0) - len) / 2, ((sd.a0 + sd.a1) / 2 - pc) * (doorW.s === 'n' || doorW.s === 'e' ? -1 : 1)));
    k.box(len, 0.14, 1.9, off, 0.07, 0, 0x6a5238); for (const px of [-len / 2 + 0.15, len / 2 - 0.15, off > 0 ? -1 : 1]) k.box(0.14, 2.6, 0.14, off + px * (Math.abs(px) < 2 ? 0 : 1), 1.35, 0.8, 0xd0ccc0);
    k.box(len + 0.3, 0.1, 2.3, off, 2.75, 0.15, 0x5a4a3a, 0.18).box(1.4, 0.1, 0.4, 0, 0.04, 1.15, 0x5a4a32);
    PR.porchChair(k.at(k.wx(off + len / 2 - 0.8, 0.3), k.wz(off + len / 2 - 0.8, 0.3), k.ry + 2.6), r);
  }
  // sign over the door
  if (b.name && doorW) { const w = Math.min(8, 1.6 + b.name.length * 0.34); k.at(doorW.fx + doorW.out[0] * 0.05, doorW.fz + doorW.out[1] * 0.05, doorW.ry + (doorW.s === 'n' || doorW.s === 'w' ? Math.PI : 0)).box(w + 0.2, 1.0, 0.1, 0, H - 0.25 + (ROOF[b.kind] === 'flat' || !ROOF[b.kind] ? 0.6 : 0), 0, 0x2a2622).label(b.name, w, 0.8, 0, H - 0.25 + (ROOF[b.kind] === 'flat' || !ROOF[b.kind] ? 0.6 : 0), 0.07, { kind: 'sign', rz: (r() - 0.5) * 0.06 }); }
  // graffiti
  if (doorW && (r() < 0.55 || b.story.laststand)) { const txt = b.kind === 'church' ? (b.story.laststand ? 'WE HELD THEM 3 DAYS' : 'GOD HELP US') : SPRAY[(r() * SPRAY.length) | 0]; const sd = sides[doorW.s]; const off = doorW.c + (doorW.c - sd.a0 > sd.a1 - doorW.c ? -2.6 : 2.6); const [px, , pz] = sd.ax === 'x' ? [off, 0, sd.f] : [sd.f, 0, off]; out.labels.push({ kind: 'spray', text: txt, col: sprayCols[(r() * 4) | 0], w: 2.6, h: 0.65, x: px + doorW.out[0] * (TH / 2 + 0.05), y: 1.5 + r() * 0.4, z: pz + doorW.out[1] * (TH / 2 + 0.05), ry: doorW.ry + (doorW.s === 'n' || doorW.s === 'w' ? Math.PI : 0), rz: (r() - 0.5) * 0.1 }); }
  // interior
  const rect = { x0: ix0, z0: iz0, x1: ix1, z1: iz1 }; const door = doorW ? [doorW.x, doorW.z] : null;
  if (b.part) {
    const px = b.part.i * S + 1; const gz = b.part.gap * S + 1; const lc = 0xd8d0c0;
    for (const [z0, z1] of [[iz0, gz - 0.8], [gz + 0.8, iz1]]) if (z1 > z0) { const g = bake(B(0.16, H, z1 - z0), { x: px, y: H / 2, z: (z0 + z1) / 2, c: lc }); out.liner.push(wuv(g, 0.5)); out.obst.push([px - 0.12, z0, px + 0.12, z1]); }
    out.liner.push(wuv(bake(B(0.16, H - DOORH, 1.6), { x: px, y: (H + DOORH) / 2, z: gz, c: lc }), 0.5));
    const doorLeft = door && door[0] < px;
    furnish(b.kind === 'farmhouse' ? 'house' : 'house', doorLeft ? { ...rect, x1: px - 0.1 } : { ...rect, x0: px + 0.1 }, k, r, door ? door : null, b.story);
    furnish('bedroom', doorLeft ? { ...rect, x0: px + 0.1 } : { ...rect, x1: px - 0.1 }, k, r, [px, gz], b.story);
  } else furnish(b.kind, rect, k, r, door, b.story);
  if (b.kind === 'diner' && doorW) { const sd = sides[doorW.s]; const back = { n: 's', s: 'n', e: 'w', w: 'e' }[doorW.s]; const bs = sides[back]; const [px, , pz] = bs.ax === 'x' ? [cxm + 1.5, 0, bs.f] : [bs.f, 0, czm + 1.5]; out.labels.push({ kind: 'menu', text: 'menu', w: 1.6, h: 1.2, x: px + bs.inn * (bs.ax === 'x' ? 0 : TH / 2 + 0.04), y: 2.1, z: pz + bs.inn * (bs.ax === 'x' ? TH / 2 + 0.04 : 0), ry: bs.ax === 'x' ? (bs.inn > 0 ? 0 : Math.PI) : (bs.inn > 0 ? Math.PI / 2 : -Math.PI / 2) }); }
  // stories you can read
  if (b.story.note && /house|farmhouse|trailer|cabin/.test(b.kind)) out.reads.push({ x: cxm, z: czm, text: NOTES[b.seed % NOTES.length], r: Math.max(ix1 - ix0, iz1 - iz0) / 2 + 0.5 });
  if (b.story.radio || b.kind === 'ranger' || b.kind === 'police' || b.kind === 'truckstop') out.reads.push({ x: cxm, z: czm, text: RADIO[b.seed % RADIO.length], r: Math.max(ix1 - ix0, iz1 - iz0) / 2 + 0.5, radio: true });
  if (b.story.laststand && b.kind === 'church') out.reads.push({ x: cxm, z: czm, text: 'Scratched into a pew: "Day 3. Ammo gone. They got in through the back. If you find this, keep going south to the fort."', r: 5 });
  if (doorW && b.story.bike) PR.bike(k.at(doorW.fx + doorW.out[0] * 4 + 1.5, doorW.fz + doorW.out[1] * 4 + 1.2, r() * 6), r);
  if (doorW && /gas|truckstop/.test(b.kind)) { // pumps under a canopy out front
    const cx2 = doorW.fx + doorW.out[0] * 6.5, cz2 = doorW.fz + doorW.out[1] * 6.5; k.at(cx2, cz2, doorW.ry);
    for (const px of [-3, 3]) { PR.pump(k.at(k.wx(px, 0), k.wz(px, 0), doorW.ry), r); k.at(cx2, cz2, doorW.ry); }
    k.box(11, 0.5, 6, 0, 4.4, 0, 0xc8c4b8).box(11.1, 0.3, 6.1, 0, 4.1, 0, 0x8a1a14); for (const px of [-4.5, 4.5]) k.box(0.35, 4.2, 0.35, px, 2.1, 0, 0xc8c4b8);
    out.obst.push([cx2 - 0.3, cz2 - 0.3, cx2 + 0.3, cz2 + 0.3]);
  }
}
const sd2 = d => (d.s === 'n' || d.s === 'w') ? -1 : 1;

function meshCamp(c, k) {
  const r = rngOf(c.seed, 1, 1); const x = c.i * S + 1, z = c.j * S + 1;
  k.at(x, z, r() * 6); k.cyl(0.5, 0.6, 0.15, 0, 0.07, 0, 0x2a2a28, 10); for (let n = 0; n < 6; n++) k.box(0.25, 0.2, 0.25, Math.cos(n) * 0.65, 0.1, Math.sin(n) * 0.65, 0x6a6a64);
  // a collapsed tent and a sleeping bag
  k.geo(new THREE.ConeGeometry(1.4, 1.4, 4), 2.4, 0.6, 0.5, [0x3a5a3a, 0x8a5a2a, 0x2a4a6a][(r() * 3) | 0], 0.25, 0.78, 0.1).box(0.8, 0.12, 2, -2, 0.06, 0.6, 0x5a2a2a, 0, 0.3);
  PR.logs(k.at(x - 0.5, z - 2.4, r()), r); PR.lantern(k.at(x + 1.2, z + 1.4)); PR.blood(k.at(x - 1, z + 1.5), r, 0.8);
  return { text: ['Note in a backpack: "Lost the others at the river. Heading for the truck stop on Route 9."', 'Note pinned to a tree: "Camp is NOT safe. They followed the fire."', 'Journal page: "Heard a helicopter over the fort. Maybe someone is still there."'][c.seed % 3], x, z };
}

function treeParts(i, j, s, kind, out) {
  const o = treeOff(i, j), x = i * S + 1 + o[0], z = j * S + 1 + o[1];
  if (kind < 0.12) { out.push(bake(C(0.12 * s, 0.24 * s, 5 * s, 5), { x, y: 2.5 * s, z, c: 0x2c241c })); for (let b = 0; b < 3; b++) out.push(bake(C(0.03 * s, 0.07 * s, 2 * s, 4), { x: x + Math.cos(b * 2.1) * 0.5 * s, y: (3 + b * 0.5) * s, z: z + Math.sin(b * 2.1) * 0.5 * s, rz: Math.cos(b * 2.1) * 0.9, rx: Math.sin(b * 2.1) * 0.9, c: 0x2c241c })); return; }
  out.push(bake(C(0.14 * s, 0.26 * s, 3.2 * s, 5), { x, y: 1.6 * s, z, c: 0x3a2c20 }));
  if (kind < 0.42) { // leafy tree, autumn colours
    const col = new THREE.Color().setHSL(0.05 + kind * 0.5, 0.45, 0.17 + kind * 0.1).getHex();
    for (let n = 0; n < 3; n++) out.push(bake(new THREE.IcosahedronGeometry((1.5 - n * 0.2) * s, 0), { x: x + Math.cos(n * 2.3) * 0.7 * s, y: (3.6 + n * 0.7) * s, z: z + Math.sin(n * 2.3) * 0.7 * s, ry: n, c: col }));
  } else { const h = 6 + kind * 5; const col = new THREE.Color().setHSL(0.27 + kind * 0.05, 0.3, 0.09 + kind * 0.05).getHex(); for (let n = 0; n < 2; n++) out.push(bake(new THREE.ConeGeometry((2.0 - n * 0.6) * s, h * 0.5 * s, 6), { x, y: (2.4 + n * h * 0.26) * s + h * 0.2 * s, z, ry: kind * 9, c: col })); }
}

const roadSignAt = (i, j) => {
  const ns = [];
  if (i === CW + 6 && j === 47) ns.push(['ASHFORD 1.2 MI  >', 0]); if (i === -8 && j === 39) ns.push(['<  FORT CALDER', Math.PI]);
  if (i === 726 && j === 47) ns.push(['WELCOME TO ASHFORD', 0, 'welcome']); if (i === 618 && j === 47) ns.push(['TRUCK STOP  >', 0]); if (i === 640 && j === 39) ns.push(['<  LOCKWOOD 1 MI', Math.PI]);
  return ns;
};

export function meshChunk(ci, cj) {
  const ch = genChunk(ci, cj); const i00 = ci * CS, j00 = cj * CS; const owner = 'c' + ci + ',' + cj;
  const out = { vc: [], wall: {}, liner: [], floor: {}, roof: [], metalRoof: [], labels: [], reads: [], obst: [] };
  const k = new Kit(out); const g = new THREE.Group(); g.name = owner;
  const r = rngOf(ci, cj, 77);
  const inCh = (x, z) => x >= i00 * S && x < (i00 + CS) * S && z >= j00 * S && z < (j00 + CS) * S;
  // buildings whose middle is in this chunk
  for (const b of ch.blds) {
    if (b.kind === 'camp') { const t = meshCamp(b, k); out.reads.push({ ...t, r: 3 }); continue; }
    if (!inCh((b.i0 + b.i1 + 1), (b.j0 + b.j1 + 1))) continue; meshBuilding(b, out, k);
  }
  // trees
  const tp = []; for (let n = 0; n < ch.trees.length; n += 3) treeParts(ch.trees[n], ch.trees[n + 1], 0.8 + ch.trees[n + 2] * 0.6, h32(ch.trees[n], ch.trees[n + 1], 13), tp);
  // ground clutter: bushes, rocks, fallen logs; wrecks and signs on the roads
  const bushG = new THREE.IcosahedronGeometry(0.6, 0);
  for (let b = 0; b < CS; b++) for (let a = 0; a < CS; a++) {
    const l = b * CS + a, i = i00 + a, j = j00 + b; if (inCoreM(i, j, 0)) continue; const x = i * S + 1, z = j * S + 1; const hv = h32(i, j, 21);
    if (ch.grid[l] === OUT && !ch.surf[l]) {
      if (hv < 0.05) tp.push(bake(bushG, { x: x + (hv - 0.025) * 20, y: 0.25, z, sx: 1 + hv * 10, sy: 0.7, c: new THREE.Color().setHSL(0.22 + hv, 0.35, 0.12).getHex() }));
      else if (hv < 0.058) tp.push(bake(new THREE.DodecahedronGeometry(0.5, 0), { x, y: 0.2, z, sy: 0.6, ry: hv * 99, c: 0x5a5a54 }));
      else if (hv < 0.062 && ch.area[l] === A_WILDS) tp.push(bake(C(0.22, 0.25, 3.5, 6), { x, y: 0.22, z, rz: Math.PI / 2, ry: hv * 300, c: 0x3a2c20 }));
    }
    if (ch.surf[l] === 2 && hv < 0.004) { // abandoned car on the road
      const rd = roadAt(i, j); PR.wreck(k.at(x, z, (rd === 1 ? Math.PI / 2 : 0) + (hv - 0.002) * 300), r);
    }
    for (const [txt, ry, kind] of roadSignAt(i, j)) { k.at(x, z, ry); k.box(0.1, 2.6, 0.1, -1.2, 1.3, 0, 0x5a5a5a).box(0.1, 2.6, 0.1, 1.2, 1.3, 0, 0x5a5a5a).label(txt, 2.8, 0.8, 0, 2.3, 0.06, { kind: kind || 'roadsign' }).label(txt, 2.8, 0.8, 0, 2.3, -0.06, { kind: kind || 'roadsign', ry: Math.PI }); }
  }
  // street lights through the towns
  for (let a = 0; a < CS; a += 8) { const i = i00 + a, j = 41 + 480 * Math.round((j00 + 16 - 41) / 480) - 2; if (j < j00 || j >= j00 + CS) continue; if (!townOf(i, j)) continue; k.at(i * S + 1, j * S + 1).box(0.14, 6, 0.14, 0, 3, 0, 0x3a3a3a).box(1.6, 0.1, 0.1, 0.8, 5.9, 0, 0x3a3a3a).box(0.5, 0.15, 0.3, 1.5, 5.82, 0, 0x5a5a50); }
  // ground surfaces
  const sb = { 2: [], 3: [], 5: [], 1: [] }, su = { 2: [], 3: [], 5: [], 1: [] };
  for (let b = 0; b < CS; b++) for (let a = 0; a < CS; a++) {
    const l = b * CS + a, s = ch.surf[l]; if (!s) continue; const i = i00 + a, j = j00 + b; if (inCoreM(i, j, 0)) continue;
    const x0 = i * S, z0 = j * S, x1 = x0 + S, z1 = z0 + S, y = 0.006 + s * 0.001; sb[s].push(x0, y, z0, x1, y, z1, x1, y, z0, x0, y, z0, x0, y, z1, x1, y, z1);
    const rd = roadAt(i, j);
    for (const [x, z] of [[x0, z0], [x1, z1], [x1, z0], [x0, z0], [x0, z1], [x1, z1]]) {
      if (s === 2 && rd === 1) { const cz = (41 + 480 * Math.round((j - 41) / 480) + 2) * S + 1; su[s].push((z - cz) / 10 + 0.5, x / 8); }
      else if (s === 2) { const base = md(i - 46, 600) <= 3 ? 46 : 159; const cxr = (base + 600 * Math.round((i - base) / 600) + 2) * S; su[s].push((x - cxr) / 8 + 0.5, z / 8); }
      else su[s].push(x / 6, z / 6);
    }
  }
  const gmat = { 2: MAT.road, 3: MAT.dirt, 5: MAT.conc, 1: MAT.asph };
  for (const s in sb) if (sb[s].length) { const gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.Float32BufferAttribute(sb[s], 3)); gg.setAttribute('uv', new THREE.Float32BufferAttribute(su[s], 2)); gg.computeVertexNormals(); const m = new THREE.Mesh(gg, gmat[s]); m.receiveShadow = true; g.add(m); }
  // merge everything per material
  const addM = (parts, mat, cast = true) => { if (!parts.length) return; const m = new THREE.Mesh(merge(parts), mat); m.castShadow = cast; m.receiveShadow = true; g.add(m); for (const p of parts) p.dispose(); };
  addM(tp, MAT.tree, false); addM(out.vc, MAT.vc);
  for (const key in out.wall) addM(out.wall[key], MAT.wall[key]); addM(out.liner, MAT.liner, false);
  for (const key in out.floor) addM(out.floor[key], MAT.floor[key], false); addM(out.roof, MAT.roof); addM(out.metalRoof, MAT.metalRoof);
  for (const l of out.labels) { const m = new THREE.Mesh(new THREE.PlaneGeometry(l.w, l.h), labelMat(l)); m.position.set(l.x, l.y, l.z); m.rotation.set(0, l.ry || 0, l.rz || 0); g.add(m); }
  for (const o of out.obst) addObstacle(o[0], o[1], o[2], o[3], owner);
  g.userData = { owner, reads: out.reads };
  return g;
}
export function disposeChunk(g) { dropObstacles(g.userData.owner); g.traverse(o => { if (o.isMesh) o.geometry.dispose(); }); }

// furniture for the hand-built Lockwood rooms. rooms: [{kind, x0, z0, x1, z1, keep: [[x, z, r], ...]}]; built once
export function furnishFixed(list, seed = 99) {
  const out = { vc: [], wall: {}, liner: [], floor: {}, roof: [], metalRoof: [], labels: [], reads: [], obst: [] };
  const k = new Kit(out, 'lockwood'); let n = 0;
  for (const rm of list) { const r = rngOf(seed, n++, 3); try { furnish(rm.kind, { x0: rm.x0, z0: rm.z0, x1: rm.x1, z1: rm.z1 }, k, r, rm.keep, rm.story || {}); } catch (e) { console.warn('furnish', rm.kind, e); } }
  const g = new THREE.Group(); g.name = 'lockwood-furniture';
  if (out.vc.length) { const m = new THREE.Mesh(merge(out.vc), MAT.vc); m.castShadow = true; m.receiveShadow = true; g.add(m); for (const p of out.vc) p.dispose(); }
  for (const l of out.labels) { const m = new THREE.Mesh(new THREE.PlaneGeometry(l.w, l.h), labelMat(l)); m.position.set(l.x, l.y, l.z); m.rotation.set(0, l.ry || 0, l.rz || 0); g.add(m); }
  for (const o of out.obst) addObstacle(o[0], o[1], o[2], o[3], 'lockwood');
  GROUP.add(g); return { pieces: out.obst.length, group: g };
}
