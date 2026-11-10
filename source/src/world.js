// Builds the Lockwood Motel meshes from the grid, plus props, lights, sky and machine placements.
import * as THREE from 'three';
import { T } from './tex.js';
import { S, GW, GH, WALL_H, OUT, FLOOR, WALL, WIN, DOOR, FENCE, PROP, grid, zone, idx, at, inb, doors, windows, rooms, prop, cx } from './map.js';
import { makeBox, makeCrate, makePerk, makeSwitch, makeForge, makeCar, B, C, bake, merge } from './models.js';
import { WALLBUYS, W } from './weapons.js';

const std = o => new THREE.MeshStandardMaterial(o);
const SILL = 0.9, LINTEL = 2.3, DOOR_H = 2.6;

class Bucket { constructor() { this.p = []; this.n = []; this.u = []; }
  quad(a, b, c, d, n, ua, ub, uc, ud) { // a,b,c,d corners in order; flips winding to face n
    const e1 = [b[0] - a[0], b[1] - a[1], b[2] - a[2]], e2 = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
    const cr = [e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], e1[0] * e2[1] - e1[1] * e2[0]];
    let v = [a, b, c, a, c, d], uv = [ua, ub, uc, ua, uc, ud];
    if (cr[0] * n[0] + cr[1] * n[1] + cr[2] * n[2] < 0) { v = [a, c, b, a, d, c]; uv = [ua, uc, ub, ua, ud, uc]; }
    for (let i = 0; i < 6; i++) { this.p.push(...v[i]); this.n.push(...n); this.u.push(...uv[i]); }
  }
  // vertical rectangle on plane facing n (n is axis-aligned in xz), spanning along-axis from s0..s1 at fixed coord, y0..y1
  wall(axis, fixed, s0, s1, y0, y1, n) {
    const P = (s, y) => axis === 'x' ? [s, y, fixed] : [fixed, y, s];
    const U = (s, y) => [s / S, y / WALL_H];
    this.quad(P(s0, y0), P(s1, y0), P(s1, y1), P(s0, y1), n, U(s0, y0), U(s1, y0), U(s1, y1), U(s0, y1));
  }
  flat(x0, z0, x1, z1, y, up, us = 1 / S) { const n = [0, up ? 1 : -1, 0]; this.quad([x0, y, z0], [x1, y, z0], [x1, y, z1], [x0, y, z1], n, [x0 * us, z0 * us], [x1 * us, z0 * us], [x1 * us, z1 * us], [x0 * us, z1 * us]); }
  mesh(mat) { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(this.n, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(this.u, 2)); g.computeTangents?.call; const m = new THREE.Mesh(g, mat); m.receiveShadow = true; m.castShadow = true; return m; }
}

// Static batching: props that never move are merged per look-alike material and per 32 m cell,
// so the renderer issues a few dozen draw calls for them instead of hundreds. Cells keep
// frustum culling useful.
function matKey(m) {
  const c = (v) => v ? v.getHexString() : '-';
  return [m.type, c(m.color), m.map ? m.map.uuid : '-', m.roughness, m.metalness, c(m.emissive), m.emissiveIntensity, m.transparent, m.opacity, m.side, m.vertexColors, m.blending, m.depthWrite].join('|');
}
function batchStatics(scene, list) {
  scene.updateMatrixWorld(true);
  const groups = new Map();
  for (const o of list) {
    if (!o.parent || Array.isArray(o.material)) continue;
    const p = new THREE.Vector3(); o.getWorldPosition(p);
    const key = matKey(o.material) + '#' + Math.floor(p.x / 32) + ',' + Math.floor(p.z / 32);
    if (!groups.has(key)) groups.set(key, []); groups.get(key).push(o);
  }
  let before = 0, after = 0;
  for (const objs of groups.values()) {
    before += objs.length; if (objs.length < 2) { after++; continue; }
    const geos = []; let cast = false;
    for (const o of objs) {
      let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
      for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv' && k !== 'color') g.deleteAttribute(k);
      if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
      g.applyMatrix4(o.matrixWorld); geos.push(g); cast = cast || o.castShadow;
    }
    const keys = Object.keys(geos[0].attributes).sort().join();
    if (!geos.every(g => Object.keys(g.attributes).sort().join() === keys)) { after += objs.length; continue; }
    const m = new THREE.Mesh(merge(geos), objs[0].material); m.castShadow = cast; m.receiveShadow = true; scene.add(m);
    for (const o of objs) o.parent.remove(o);
    after++;
  }
  return { before, after };
}

export function buildWorld(scene, env, q) {
  const W_ = {}; const add = o => { scene.add(o); return o; }; const STATICS = [];
  const rep = (t, x, y) => { const c = t.clone(); c.needsUpdate = true; c.repeat.set(x, y); return c; };
  const M = {
    stucco: std({ map: T.stucco(), normalMap: T.stuccoN(), roughness: 0.92, color: 0xd8ccb8 }),
    brick: std({ map: T.brick(), normalMap: T.brickN(), roughness: 0.9 }),
    panel: std({ map: T.panel(), roughness: 0.85 }),
    diner: std({ map: T.dinerWall(), roughness: 0.6 }),
    block: std({ map: T.block(), roughness: 0.9 }),
    ceiling: std({ map: T.ceiling(), roughness: 0.95 }),
    carpet: std({ map: T.carpet(), roughness: 0.98 }),
    checker: std({ map: T.tileChecker(), roughness: 0.45 }),
    concrete: std({ map: T.concrete(), roughness: 0.9 }),
    wood: std({ map: T.wood(), roughness: 0.75 }),
    plank: std({ map: T.plank(), roughness: 0.85 }),
    metal: std({ map: T.metal(), roughness: 0.6, metalness: 0.5 }),
    rust: std({ map: T.rust(), roughness: 0.85, metalness: 0.2 }),
    dark: std({ color: 0x1a1a1c, roughness: 0.7 }),
    trim: std({ color: 0x3a2a1c, roughness: 0.7 }),
  };
  W_.M = M;
  const extFor = z => z === 3 ? M.brick : M.stucco;
  const intFor = z => z === 0 ? M.panel : z === 2 ? M.diner : M.block;
  // which building a wall/window/door tile belongs to (nearest floor zone)
  const bz = (i, j) => { for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]]) { const t = at(i + di, j + dj); if (t === FLOOR) return zone[idx(i + di, j + dj)]; } return 0; };

  // ---- ground ----
  const lotW = GW * S, lotH = GH * S;
  const asphalt = std({ map: rep(T.asphalt(), lotW / 8, lotH / 8), normalMap: rep(T.asphaltN(), lotW / 4, lotH / 4), normalScale: new THREE.Vector2(0.6, 0.6), roughness: 0.82, color: 0x9a9a9a });
  const ground = add(new THREE.Mesh(new THREE.PlaneGeometry(lotW, lotH), asphalt)); ground.rotation.x = -Math.PI / 2; ground.position.set(lotW / 2, 0, lotH / 2); ground.receiveShadow = true;
  const outer = add(new THREE.Mesh(new THREE.PlaneGeometry(600, 600), std({ color: 0x15140f, roughness: 1 }))); outer.rotation.x = -Math.PI / 2; outer.position.set(lotW / 2, -0.02, lotH / 2);
  // parking stripes + dirt
  const lineM = new THREE.MeshStandardMaterial({ map: T.lines(), transparent: true, depthWrite: false, roughness: 0.8, polygonOffset: true, polygonOffsetFactor: -2 });
  const lineG = new THREE.PlaneGeometry(0.5, 5); lineG.rotateX(-Math.PI / 2);
  for (let k = 0; k < 10; k++) { const l = new THREE.Mesh(lineG, lineM); l.position.set(48 + k * 3.2, 0.01, 6.5); add(l); const l2 = l.clone(); l2.position.set(6 + k * 3.2, 0.01, 72); add(l2); }
  const dirtM = new THREE.MeshStandardMaterial({ map: T.dirt(), transparent: true, depthWrite: false, roughness: 1, polygonOffset: true, polygonOffsetFactor: -1 });
  for (const [x, z, s] of [[8, 8, 10], [80, 10, 12], [10, 70, 12], [82, 70, 10], [44, 4, 9], [6, 40, 9], [84, 36, 9], [30, 74, 9], [60, 74, 10], [52, 34, 8], [22, 40, 7]]) { const d = add(new THREE.Mesh(new THREE.PlaneGeometry(s, s), dirtM)); d.rotation.x = -Math.PI / 2; d.rotation.z = x; d.position.set(x, 0.012, z); }

  // ---- walls, windows, doors, ceilings, floors ----
  const buckets = new Map(); const bk = m => { if (!buckets.has(m)) buckets.set(m, new Bucket()); return buckets.get(m); };
  for (let j = 0; j < GH; j++) for (let i = 0; i < GW; i++) {
    const t = at(i, j); const x0 = i * S, x1 = x0 + S, z0 = j * S, z1 = z0 + S;
    if (t === FLOOR) { bk(M.ceiling).flat(x0, z0, x1, z1, WALL_H, false); continue; }
    if (t !== WALL && t !== WIN && t !== DOOR) continue;
    const z = bz(i, j); const ext = extFor(z), int = intFor(z);
    bk(M.ceiling).flat(x0, z0, x1, z1, WALL_H, false);
    const sides = [[1, 0, 'z', x1, z0, z1, [1, 0, 0]], [-1, 0, 'z', x0, z0, z1, [-1, 0, 0]], [0, 1, 'x', z1, x0, x1, [0, 0, 1]], [0, -1, 'x', z0, x0, x1, [0, 0, -1]]];
    for (const [di, dj, axis, fixed, s0, s1, n] of sides) {
      const nt = at(i + di, j + dj);
      const mat = nt === FLOOR ? intFor(zone[idx(i + di, j + dj)]) : ext;
      if (t === WALL) {
        if (nt === WALL) continue;
        if (nt === WIN) { bk(ext).wall(axis, fixed, s0, s1, SILL, LINTEL, n); continue; }
        if (nt === DOOR) { bk(ext).wall(axis, fixed, s0, s1, 0, DOOR_H, n); continue; }
        bk(mat).wall(axis, fixed, s0, s1, 0, WALL_H, n);
      } else if (nt === FLOOR || nt === OUT || nt === PROP) {
        const y0 = t === WIN ? LINTEL : DOOR_H; bk(mat).wall(axis, fixed, s0, s1, y0, WALL_H, n);
        if (t === WIN) bk(mat).wall(axis, fixed, s0, s1, 0, SILL, n);
      }
    }
    if (t === WIN) { bk(M.wood).flat(x0, z0, x1, z1, SILL, true); bk(ext).flat(x0, z0, x1, z1, LINTEL, false); }
    if (t === DOOR) bk(ext).flat(x0, z0, x1, z1, DOOR_H, false);
  }
  for (const r of rooms) {
    const m = r.floorKind === 'carpet' ? M.carpet : r.floorKind === 'checker' ? M.checker : M.concrete;
    const b = bk(m); b.flat(r.i0 * S, r.j0 * S, (r.i1 + 1) * S, (r.j1 + 1) * S, 0.01, true, r.floorKind === 'checker' ? 1 / 4 : 1 / 3);
  }
  // door and window floor strips
  for (let j = 0; j < GH; j++) for (let i = 0; i < GW; i++) { const t = at(i, j); if (t === DOOR) bk(M.concrete).flat(i * S, j * S, i * S + S, j * S + S, 0.012, true); }
  for (const [m, b] of buckets) { const mesh = b.mesh(m); add(mesh); }

  // window frames + planks
  const frameParts = [];
  const plankG = new THREE.BoxGeometry(2.1, 0.22, 0.05);
  W_.planks = []; const allPlanks = [];
  for (const w of windows) {
    const x = cx(w.i), zz = cx(w.j); const ry = w.axis === 'x' ? 0 : Math.PI / 2;
    const o = w.outDir; // planks sit on the inside face
    for (const s of [-1, 1]) frameParts.push(bake(B(0.12, LINTEL - SILL, 0.25), { x: x + (w.axis === 'x' ? s * 0.94 : 0), z: zz + (w.axis === 'z' ? s * 0.94 : 0), y: (SILL + LINTEL) / 2, ry, c: 0x3a2a1c }));
    const g = new THREE.Group(); g.position.set(x - o[0] * 0.55, 0, zz - o[1] * 0.55); g.rotation.y = ry; add(g);
    const list = [];
    for (let k = 0; k < 6; k++) { const p = new THREE.Object3D(); const y = SILL + 0.18 + (k % 3) * 0.45 + (k > 2 ? 0.2 : 0); p.position.set(0, y, (k > 2 ? -0.06 : 0)); p.rotation.z = (k % 2 ? 1 : -1) * (0.12 + (k * 0.13) % 0.3); g.add(p); list.push(p); allPlanks.push(p); }
    W_.planks[w.id] = { group: g, list, base: list.map(p => ({ y: p.position.y, rz: p.rotation.z })) };
  }
  // every barricade plank is one instance of a single InstancedMesh (1 draw call instead of ~80);
  // setting plank.visible shows or hides its instance, so game code is unchanged
  { const im = new THREE.InstancedMesh(plankG, M.plank, allPlanks.length); im.castShadow = true; im.receiveShadow = true; add(im);
    scene.updateMatrixWorld(true); const zero = new THREE.Matrix4().makeScale(0, 0, 0);
    allPlanks.forEach((p, i) => { const mw = p.matrixWorld.clone(); let vis = true; im.setMatrixAt(i, mw);
      Object.defineProperty(p, 'visible', { get: () => vis, set: (v) => { v = !!v; if (v === vis) return; vis = v; im.setMatrixAt(i, v ? mw : zero); im.instanceMatrix.needsUpdate = true; }, configurable: true }); });
    im.instanceMatrix.needsUpdate = true; im.computeBoundingSphere(); }
  const frames = new THREE.Mesh(merge(frameParts), std({ vertexColors: true, roughness: 0.8 })); frames.castShadow = true; add(frames);

  // buyable doors: boarded slabs
  W_.doorMeshes = [];
  const doorM = std({ map: rep(T.plank(), 1, 3), roughness: 0.85, color: 0xb09070 });
  for (const d of doors) {
    const g = new THREE.Group(); let sx = 0, sz = 0; for (const [i, j] of d.tiles) { sx += cx(i); sz += cx(j); } g.position.set(sx / d.tiles.length, 0, sz / d.tiles.length); g.rotation.y = d.axis === 'x' ? 0 : Math.PI / 2; add(g);
    const slab = new THREE.Mesh(B(4, DOOR_H, 0.14), doorM); slab.position.y = DOOR_H / 2; slab.castShadow = slab.receiveShadow = true; g.add(slab);
    for (const s of [-1, 1]) { const p = new THREE.Mesh(B(4.4, 0.25, 0.06), M.plank); p.position.set(0, 1.3, s * 0.11); p.rotation.z = s * 0.5; g.add(p); }
    const lab = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.36), new THREE.MeshBasicMaterial({ map: T.label('$' + d.cost, '#1a1208', '#f0d080', 256, 76, 'bold 50px Arial Black, Arial'), transparent: true }));
    for (const s of [-1, 1]) { const l = lab.clone(); l.position.set(0, 1.9, s * 0.15); l.rotation.y = s < 0 ? Math.PI : 0; g.add(l); }
    W_.doorMeshes[d.id] = g;
  }

  // ---- fence + treeline ----
  const chain = std({ map: rep(T.chain(), lotW / 2.6, 1), alphaTest: 0.5, side: THREE.DoubleSide, metalness: 0.6, roughness: 0.5, color: 0x9aa0a0 });
  const fenceParts = [];
  const fh = 2.8;
  const fenceSide = (x0, z0, x1, z1) => { const len = Math.hypot(x1 - x0, z1 - z0); const m = new THREE.Mesh(new THREE.PlaneGeometry(len, fh), chain); m.position.set((x0 + x1) / 2, fh / 2, (z0 + z1) / 2); m.rotation.y = -Math.atan2(z1 - z0, x1 - x0); m.material.map.repeat.set(len / 2.6, 1); add(m); for (let s = 0; s <= len; s += 4) { const t = s / len; fenceParts.push(bake(C(0.05, 0.05, fh + 0.1, 6), { x: x0 + (x1 - x0) * t, z: z0 + (z1 - z0) * t, y: fh / 2, c: 0x777b7c })); } fenceParts.push(bake(C(0.03, 0.03, len, 6), { x: (x0 + x1) / 2, z: (z0 + z1) / 2, y: fh, rz: Math.PI / 2, ry: -Math.atan2(z1 - z0, x1 - x0), c: 0x777b7c })); };
  const e = S;
  fenceSide(e, e, lotW - e, e); fenceSide(lotW - e, e, lotW - e, lotH - e); fenceSide(lotW - e, lotH - e, e, lotH - e); fenceSide(e, lotH - e, e, e);
  add(new THREE.Mesh(merge(fenceParts), std({ vertexColors: true, metalness: 0.7, roughness: 0.45 })));
  const treeParts = [], trunkParts = []; let seed = 7; const r = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let n = 0; n < 220; n++) { const a = r() * Math.PI * 2, d = 62 + r() * 70; const x = lotW / 2 + Math.cos(a) * d * 1.05, z = lotH / 2 + Math.sin(a) * d; const h = 8 + r() * 10; treeParts.push(bake(new THREE.ConeGeometry(2 + r() * 1.6, h, 7), { x, y: h / 2 + 1.5, z, c: new THREE.Color().setHSL(0.3, 0.25, 0.08 + r() * 0.05).getHex() })); trunkParts.push(bake(C(0.25, 0.35, 3, 5), { x, y: 1.5, z, c: 0x2a1d12 })); }
  add(new THREE.Mesh(merge(treeParts), std({ vertexColors: true, roughness: 1 }))); add(new THREE.Mesh(merge(trunkParts), std({ vertexColors: true, roughness: 1 })));

  // ---- sky ----
  const sky = add(new THREE.Mesh(new THREE.SphereGeometry(420, 24, 16), new THREE.MeshBasicMaterial({ map: T.sky(), side: THREE.BackSide, fog: false, depthWrite: false }))); sky.position.set(lotW / 2, 0, lotH / 2); sky.renderOrder = -1;
  const starG = new THREE.BufferGeometry(); const sp = []; for (let n = 0; n < 900; n++) { const a = r() * Math.PI * 2, el = 0.08 + r() * 1.4; sp.push(Math.cos(a) * Math.cos(el) * 400 + lotW / 2, Math.sin(el) * 400, Math.sin(a) * Math.cos(el) * 400 + lotH / 2); } starG.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
  add(new THREE.Points(starG, new THREE.PointsMaterial({ color: 0xc8d0ff, size: 1.3, sizeAttenuation: false, fog: false, transparent: true, opacity: 0.8, depthWrite: false })));
  const moon = add(new THREE.Sprite(new THREE.SpriteMaterial({ map: T.moon(), fog: false, depthWrite: false, transparent: true }))); moon.scale.set(60, 60, 1); moon.position.set(lotW / 2 - 180, 210, lotH / 2 - 260);

  // ---- props ----
  const glowMat = (c, o = 0.9) => new THREE.SpriteMaterial({ map: T.glow(), color: c, transparent: true, opacity: o, blending: THREE.AdditiveBlending, depthWrite: false });
  const solid = (i0, j0, i1 = i0, j1 = j0) => { for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) prop(i, j); };
  const meshAt = (geo, mat, x, y, z, ry = 0) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.y = ry; if (!geo.boundingSphere) geo.computeBoundingSphere(); m.castShadow = geo.boundingSphere.radius > 0.9; m.receiveShadow = true; add(m); STATICS.push(m); return m; };
  // wrecked cars
  const wreck = (x, z, ry, col) => {
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = ry; add(g); const paint = std({ map: T.rust(), color: col, roughness: 0.8, metalness: 0.3 });
    const b = new THREE.Mesh(B(1.8, 0.7, 4.4), paint); b.position.y = 0.55; g.add(b); const t = new THREE.Mesh(B(1.6, 0.55, 2.2), paint); t.position.set(0, 1.15, 0.2); g.add(t);
    const gl = new THREE.Mesh(B(1.62, 0.4, 2.0), M.dark); gl.position.set(0, 1.15, 0.2); gl.scale.set(1.0, 1, 1.02); g.add(gl);
    for (const [a, c] of [[0.85, 1.4], [-0.85, 1.4], [0.85, -1.4], [-0.85, -1.4]]) { const w = new THREE.Mesh(C(0.32, 0.32, 0.22, 10), M.dark); w.rotation.z = Math.PI / 2; w.position.set(a, 0.28, c); g.add(w); }
    g.rotation.z = (r() - 0.5) * 0.08; g.traverse(o => { if (o.isMesh) { o.castShadow = o.receiveShadow = true; STATICS.push(o); } });
  };
  wreck(41, 21, 0.2, 0x7a8a9a); solid(20, 9, 20, 11);
  wreck(13, 49, 1.4, 0x9a8a5a); solid(5, 23, 7, 25);
  wreck(70, 66, 0.4, 0x5a6a5a); solid(34, 32, 35, 34);
  wreck(18, 18, 0.1, 0x6a5a7a); solid(8, 8, 9, 10);       // garage: on the lift
  // dumpster
  meshAt(B(3.4, 1.5, 1.8), std({ map: T.metal(), color: 0x2f5a3a, roughness: 0.7, metalness: 0.4 }), 55, 0.75, 35); solid(27, 17);
  // counters & furniture
  meshAt(B(3.6, 1.1, 0.9), M.wood, 50, 0.55, 57); solid(24, 28, 25, 28);                     // lobby reception
  meshAt(B(3.8, 0.12, 1.0), std({ color: 0x8a1a1a, roughness: 0.5 }), 50, 1.13, 57);
  meshAt(B(2.2, 0.8, 0.9), std({ color: 0x3a2a4a, roughness: 0.95 }), 37, 0.4, 45.2); solid(18, 22);  // couch
  meshAt(B(9.6, 1.05, 1.0), std({ color: 0xc8c0a8, roughness: 0.5 }), 65, 0.52, 47); solid(30, 23, 34, 23); // diner counter
  meshAt(B(9.8, 0.08, 1.2), std({ color: 0x9a1a1a, roughness: 0.3, metalness: 0.3 }), 65, 1.08, 47);
  for (let k = 0; k < 6; k++) { meshAt(C(0.22, 0.22, 0.12, 12), std({ color: 0xa01818, roughness: 0.4 }), 61 + k * 1.6, 0.75, 48.3); meshAt(C(0.04, 0.04, 0.7, 6), M.metal, 61 + k * 1.6, 0.35, 48.3); }
  for (const zz of [51, 53]) { meshAt(B(1.6, 0.9, 0.5), std({ color: 0x8a1a1a, roughness: 0.5 }), 75, 0.45, zz - 0.7); meshAt(B(1.6, 0.9, 0.5), std({ color: 0x8a1a1a, roughness: 0.5 }), 75, 0.45, zz + 0.7); meshAt(B(1.2, 0.08, 0.8), std({ color: 0xd8d0b8, roughness: 0.4 }), 75, 0.78, zz); } solid(37, 25, 37, 26);
  meshAt(B(3.6, 0.95, 0.8), M.metal, 13, 0.48, 23); solid(6, 11);      // workbench (garage)
  meshAt(B(1.0, 1.4, 0.6), std({ color: 0xa01a1a, roughness: 0.4, metalness: 0.4 }), 31, 0.7, 13); solid(15, 6);   // tool chest
  // lift posts under the garage wreck
  for (const [x, z] of [[15.6, 16.4], [20.4, 16.4], [15.6, 19.6], [20.4, 19.6]]) meshAt(C(0.12, 0.12, 0.6, 8), M.metal, x, 0.3, z);
  // barrels with fire
  W_.fires = [];
  const barrelM = std({ map: T.rust(), color: 0x8a5030, roughness: 0.8, metalness: 0.3 });
  for (const [i, j] of [[24, 18], [14, 19], [36, 18], [9, 31], [31, 35], [40, 9]]) {
    const x = cx(i), z = cx(j); meshAt(C(0.42, 0.42, 1.0, 12), barrelM, x, 0.5, z); solid(i, j);
    const fl = []; for (let k = 0; k < 3; k++) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.flame(), color: k ? 0xff7a20 : 0xffc060, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })); s.position.set(x + (k - 1) * 0.12, 1.3, z); s.scale.set(0.6, 1.1, 1); add(s); fl.push(s); }
    const gl = new THREE.Sprite(glowMat(0xff7020, 0.5)); gl.scale.set(5, 4, 1); gl.position.set(x, 1.3, z); add(gl);
    W_.fires.push({ x, z, fl, gl });
  }
  // light poles with sodium lamps
  const poleM = std({ color: 0x4a4c4e, metalness: 0.6, roughness: 0.5 });
  W_.poles = [];
  for (const [i, j] of [[12, 19], [33, 17], [10, 34], [36, 33], [29, 4], [4, 13]]) {
    const x = cx(i), z = cx(j); meshAt(C(0.12, 0.16, 7, 8), poleM, x, 3.5, z); meshAt(B(1.4, 0.15, 0.4), poleM, x + 0.6, 7, z); solid(i, j);
    const lm = meshAt(B(0.6, 0.08, 0.3), new THREE.MeshBasicMaterial({ color: 0xffc070 }), x + 1.1, 6.9, z); lm.castShadow = false;
    const gl = new THREE.Sprite(glowMat(0xffa040, 0.55)); gl.scale.set(4, 4, 1); gl.position.set(x + 1.1, 6.8, z); add(gl);
    const pool = add(new THREE.Mesh(new THREE.CircleGeometry(4.5, 20), new THREE.MeshBasicMaterial({ map: T.glow(), color: 0x6a4a20, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }))); pool.rotation.x = -Math.PI / 2; pool.position.set(x + 1.1, 0.03, z);
    W_.poles.push({ x: x + 1.1, z });
  }
  // neon signs
  const neon = (text, col, x, y, z, w, h, ry = 0) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: T.neon(text, col), transparent: true, depthWrite: false, side: THREE.DoubleSide })); m.position.set(x, y, z); m.rotation.y = ry; add(m); const g = new THREE.Sprite(glowMat(col, 0.35)); g.scale.set(w * 1.2, h * 2.5, 1); g.position.set(x, y, z + (ry ? 0 : -0.2)); add(g); return m; };
  const signBoard = meshAt(B(9, 2.0, 0.2), M.dark, 43, 4.6, 41.8); signBoard.castShadow = false;
  for (const x of [39.5, 46.5]) meshAt(C(0.08, 0.08, 1.4, 6), poleM, x, 3.6, 41.8);
  W_.motelSign = neon('LOCKWOOD MOTEL', '#ff3a6a', 43, 4.75, 41.65, 8.6, 1.6, Math.PI);
  W_.vacancy = neon('NO VACANCY', '#ff2a20', 43, 3.85, 41.65, 3.4, 0.6, Math.PI);
  neon('DINER', '#3ae0ff', 66, 4.2, 41.85, 4, 1.1, Math.PI); meshAt(B(4.4, 1.3, 0.15), M.dark, 66, 4.2, 41.95);
  const gsign = new THREE.Mesh(new THREE.PlaneGeometry(5, 0.9), new THREE.MeshStandardMaterial({ map: T.label('ED\'S AUTO REPAIR', '#c8b070', '#2a1a0a', 512, 96, 'bold 58px Arial Black, Arial'), roughness: 0.8 })); gsign.position.set(18, 2.95, 30.02); add(gsign);

  // ---- interactable machines ----
  // facing: direction the front of the machine points (toward the player)
  const place = (obj, i, j, face, inset = 0.45) => { const x = cx(i) - face[0] * inset, z = cx(j) - face[1] * inset; obj.position.set(x, 0, z); obj.rotation.y = Math.atan2(face[0], face[1]); add(obj); return { x: cx(i) + face[0] * 0.6, z: cx(j) + face[1] * 0.6 }; };
  W_.boxSpots = [
    { i: 21, j: 29, face: [0, -1], name: 'Lobby' }, { i: 36, j: 22, face: [0, 1], name: 'Diner' },
    { i: 12, j: 6, face: [0, 1], name: 'Garage' }, { i: 37, j: 14, face: [-1, 0], name: 'Parking Lot' },
  ];
  W_.box = makeBox(); add(W_.box.group);
  for (const s of W_.boxSpots) { prop(s.i, s.j); s.crate = makeCrate(); s.use = place(s.crate, s.i, s.j, s.face, 0.2); s.pos = { x: cx(s.i) - s.face[0] * 0.2, z: cx(s.j) - s.face[1] * 0.2 }; s.rot = Math.atan2(s.face[0], s.face[1]); }
  W_.perks = [
    { key: 'revive', name: 'Second Wind', col: '#3a8aff', sub: 'SELF-REVIVE', cost: 500, i: 26, j: 23, face: [-1, 0], needsPower: false, desc: 'Get back up once when you go down' },
    { key: 'tank', name: 'Tank Tonic', col: '#e02020', sub: 'MORE HEALTH', cost: 2500, i: 29, j: 29, face: [0, -1], needsPower: true, desc: 'Take 2.5x more hits' },
    { key: 'rapid', name: 'Rapid Brew', col: '#2ac040', sub: 'FAST RELOAD', cost: 3000, i: 37, j: 29, face: [0, -1], needsPower: true, desc: 'Reload twice as fast' },
    { key: 'double', name: 'Double Shot', col: '#e0b020', sub: 'FIRE RATE', cost: 2000, i: 15, j: 13, face: [0, -1], needsPower: true, desc: 'Shoot 33% faster' },
    { key: 'stamina', name: 'Fleetfoot', col: '#f07020', sub: 'MOVE FASTER', cost: 2000, i: 33, j: 22, face: [0, 1], needsPower: true, desc: 'Run faster and longer' },
  ];
  for (const p of W_.perks) { prop(p.i, p.j); p.m = makePerk(p.name, p.col, p.sub); p.use = place(p.m.group, p.i, p.j, p.face, 0.2); }
  W_.sw = makeSwitch(); W_.swUse = place(W_.sw.group, 16, 7, [-1, 0], -0.08 - 1.0); // mounted on the garage east wall, inside
  W_.forge = makeForge(); prop(7, 7); W_.forgeUse = place(W_.forge.group, 7, 7, [0, 1], 0.1);
  // wall buys: chalk outlines
  W_.wallbuys = WALLBUYS.map(wb => {
    const d = W[wb.key]; const tex = T.chalk(wb.key, (x, w, h) => chalkGun(x, w, h, d.kind));
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 0.9), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, color: 0xd8d0c0 }));
    const x = cx(wb.i) + wb.face[0] * 1.02, z = cx(wb.j) + wb.face[1] * 1.02; m.position.set(x, 1.55, z); m.rotation.y = Math.atan2(wb.face[0], wb.face[1]); add(m);
    return { ...wb, mesh: m, use: { x: cx(wb.i) + wb.face[0] * 1.6, z: cx(wb.j) + wb.face[1] * 1.6 } };
  });

  // ---- the car ----
  W_.car = makeCar(env); add(W_.car.group);

  // ---- lights ----
  W_.hemi = add(new THREE.HemisphereLight(0x4a5a80, 0x1a1410, 0.55));
  W_.moonL = add(new THREE.DirectionalLight(0x8aa0d8, 0.55)); W_.moonL.position.set(-60, 90, -80); add(W_.moonL.target);
  // Light sources are data only. A small fixed pool of real PointLights is moved to the nearest
  // sources every frame (main.js updLights), so phones shade 3 lights per pixel instead of 9,
  // and the light count never changes (no shader recompiles).
  W_.lightSrc = [
    { col: 0xffc890, base: 14, dist: 16, decay: 1.6, x: 43, y: 3.0, z: 51, flick: 0.25, kind: 'room' },
    { col: 0xc8f0ff, base: 14, dist: 17, decay: 1.6, x: 66, y: 3.0, z: 52, flick: 0.05, kind: 'room' },
    { col: 0xffd890, base: 13, dist: 17, decay: 1.6, x: 22, y: 3.0, z: 20, flick: 0.12, kind: 'room' },
  ];
  // ceiling light fixtures (emissive panels)
  const fixM = new THREE.MeshBasicMaterial({ color: 0xfff0d8 });
  for (const [x, z] of [[43, 51], [36, 47], [50, 55], [66, 52], [60, 50], [72, 56], [22, 20], [14, 16], [28, 24]]) { const f = meshAt(B(1.4, 0.06, 0.3), fixM, x, WALL_H - 0.04, z); f.castShadow = false; }
  W_.fires.forEach((f, i) => W_.lightSrc.push({ col: 0xff7a30, base: 10, dist: 13, decay: 1.7, x: f.x, y: 1.6, z: f.z, kind: 'fire', i }));
  W_.lightPool = [0, 1, 2].map(() => { const l = new THREE.PointLight(0xffffff, 0, 16, 1.6); l.position.set(0, -50, 0); add(l); return { light: l, src: null, w: 0 }; });
  W_.carLight = new THREE.SpotLight(0xfff0d0, 0, 30, 0.55, 0.5, 1.2); add(W_.carLight); add(W_.carLight.target);
  W_.batched = batchStatics(scene, STATICS);
  return W_;
}

function chalkGun(x, w, h, kind) {
  x.beginPath();
  const L = kind === 'smg' ? 150 : kind === 'pistol' ? 90 : 210, x0 = (w - L) / 2, y0 = h / 2 - 12;
  x.moveTo(x0, y0); x.lineTo(x0 + L * 0.75, y0); x.lineTo(x0 + L * 0.75, y0 - 6); x.lineTo(x0 + L, y0 - 6); x.lineTo(x0 + L, y0 + 4); x.lineTo(x0 + L * 0.72, y0 + 4); x.lineTo(x0 + L * 0.72, y0 + 16);
  x.lineTo(x0 + L * 0.48, y0 + 16);
  if (kind !== 'pistol') { x.lineTo(x0 + L * 0.46, y0 + 40); x.lineTo(x0 + L * 0.4, y0 + 40); x.lineTo(x0 + L * 0.4, y0 + 18); }
  x.lineTo(x0 + L * 0.3, y0 + 18); x.lineTo(x0 + L * 0.24, y0 + 44); x.lineTo(x0 + L * 0.15, y0 + 44); x.lineTo(x0 + L * 0.2, y0 + 16);
  if (kind !== 'pistol') { x.lineTo(x0 + 10, y0 + 26); x.lineTo(x0 - 6, y0 + 30); x.lineTo(x0 - 6, y0 + 2); }
  x.closePath(); x.stroke();
  x.beginPath(); x.moveTo(x0 + L * 0.3, y0 + 8); x.lineTo(x0 + L * 0.6, y0 + 8); x.stroke();
}
