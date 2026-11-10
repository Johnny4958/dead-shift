// Streams generated chunks in and out around the camera: only what is near you exists.
import { CW, CH } from './map.js';
import { meshChunk, disposeChunk, genChunk } from './proc.js';

const CSM = 64; // chunk size in metres
export const live = new Map();
export const stats = { built: 0, disposed: 0, lastMs: 0, maxMs: 0 };
let scene = null;
export function initStream(sc) { scene = sc; }
const coreOnly = (ci, cj) => ci >= 0 && cj >= 0 && (ci + 1) * 32 <= CW && (cj + 1) * 32 <= CH;
// call every frame. budgetMs: time allowed for building new chunks this frame
export function updateStream(x, z, high, budgetMs = 6, all = false) {
  const R = high ? 5 : 3, ci0 = Math.floor(x / CSM), cj0 = Math.floor(z / CSM);
  const want = [];
  for (let b = -R; b <= R; b++) for (let a = -R; a <= R; a++) {
    if (a * a + b * b > (R + 0.5) * (R + 0.5)) continue; const ci = ci0 + a, cj = cj0 + b; if (coreOnly(ci, cj)) continue;
    const k = ci + ',' + cj; if (!live.has(k)) want.push([a * a + b * b, ci, cj, k]);
  }
  want.sort((p, q) => p[0] - q[0]);
  const t0 = performance.now();
  for (const [, ci, cj, k] of want) {
    const t1 = performance.now(); const g = meshChunk(ci, cj); scene.add(g); live.set(k, g); stats.built++;
    const ms = performance.now() - t1; stats.lastMs = ms; stats.maxMs = Math.max(stats.maxMs, ms);
    if (!all && performance.now() - t0 > budgetMs) break;
  }
  // drop chunks well outside the radius
  for (const [k, g] of live) { const [ci, cj] = k.split(',').map(Number); if (Math.abs(ci - ci0) > R + 2 || Math.abs(cj - cj0) > R + 2) { scene.remove(g); disposeChunk(g); live.delete(k); stats.disposed++; } }
  return want.length;
}
// story notes, radios and so on near a point
export function readsNear(x, z) {
  let best = null, bd = 1e9;
  const ci = Math.floor(x / CSM), cj = Math.floor(z / CSM);
  for (let b = -1; b <= 1; b++) for (let a = -1; a <= 1; a++) { const g = live.get((ci + a) + ',' + (cj + b)); if (!g) continue; for (const r of g.userData.reads) { const d = Math.hypot(r.x - x, r.z - z); if (d < (r.r || 3) && d < bd) { bd = d; best = r; } } }
  return best;
}
export { genChunk };
