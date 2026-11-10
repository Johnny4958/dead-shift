// Builds the town, the woods, the graveyard, the base, the mall and the carnival from the map lists.
// Everything static is merged into a handful of meshes so phones can draw it.
import * as THREE from 'three';
import { T } from './tex.js';
import { T2 } from './tex2.js';
import { S, GW, GH, WALL_H, OUT, FENCE, PROP, GLASS, grid, idx, at, inb, surf, area, rooms, cx, trees, graves, glassTiles, hatches, bunkers, loots, intelSpots, groundGuns, special, generatorSpots, craftSpots, A_GRAVE, A_BASE, A_BUNKER, ZONES } from './map.js';
import { B, C, bake, merge, makeGun, makeCrate } from './models.js';

const std = o => new THREE.MeshStandardMaterial(o);
let seed = 99; const r = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

export function buildTown(scene, W_, M, add, q) {
  const lotW = GW * S, lotH = GH * S;
  const meshOf = (parts, mat, shadow = true) => { if (!parts.length) return null; const m = new THREE.Mesh(merge(parts), mat); m.castShadow = shadow; m.receiveShadow = true; add(m); return m; };
  const vc = (o = {}) => std({ vertexColors: true, roughness: 0.85, ...o });

  // ---- ground surfaces: roads, the motel lot, dirt, gravel, concrete pads ----
  const sb = {}; const flat = (key, x0, z0, x1, z1, y) => { (sb[key] ||= []).push(x0, y, z0, x1, y, z0, x1, y, z1, x0, y, z0, x1, y, z1, x0, y, z1); };
  for (let j = 0; j < GH; j++) for (let i = 0; i < GW; i++) { const s = surf[idx(i, j)]; if (s) flat(s, i * S, j * S, i * S + S, j * S + S, 0.006 + s * 0.001); }
  const roadM = std({ map: T2.road(), roughness: 0.85, polygonOffset: true, polygonOffsetFactor: -1 });
  const surfMat = { 1: W_.asphaltM, 2: roadM, 3: std({ map: T.dirt(), roughness: 1, color: 0x6a5a48 }), 4: std({ map: T.concrete(), roughness: 1, color: 0x7a7468 }), 5: std({ map: T.concrete(), roughness: 0.95, color: 0x8a8a84 }) };
  for (const k in sb) {
    const p = sb[k]; const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
    const uv = []; const sc = k == 2 ? 1 / 8 : 1 / 6; for (let n = 0; n < p.length; n += 3) uv.push(p[n] * sc, p[n + 2] * sc); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.computeVertexNormals();
    const m = new THREE.Mesh(g, surfMat[k]); m.receiveShadow = true; add(m);
  }

  // ---- border walls (concrete flood wall), graveyard iron fence, base blast walls ----
  const wallParts = [], ironParts = [], wireParts = [];
  for (let j = 0; j < GH; j++) for (let i = 0; i < GW; i++) {
    if (at(i, j) !== FENCE) continue; const x = cx(i), z = cx(j);
    const graveFence = (j === 77 && i >= 3 && i <= 45) || ((i === 3 || i === 45) && j >= 77 && j < 91);
    if (graveFence) {
      ironParts.push(bake(B(2, 0.08, 0.08), { x, y: 0.3, z, c: 0x1a1a1a }), bake(B(2, 0.08, 0.08), { x, y: 1.9, z, c: 0x1a1a1a }));
      const horiz = j === 77; for (let n = 0; n < 5; n++) { const o = -0.8 + n * 0.4; ironParts.push(bake(C(0.025, 0.025, 2.1, 4), { x: x + (horiz ? o : 0), y: 1.05, z: z + (horiz ? 0 : o), c: 0x161616 }), bake(C(0, 0.05, 0.16, 4), { x: x + (horiz ? o : 0), y: 2.18, z: z + (horiz ? 0 : o), c: 0x161616 })); }
      continue;
    }
    const base = area[idx(i, Math.min(GH - 1, j))] === A_BASE || j === 91 || j === 105 && i <= 45 || (i === 3 || i === 45) && j > 91 && j <= 105;
    const h = base ? 3.6 : 5;
    wallParts.push(bake(B(2.02, h, 2.02), { x, y: h / 2, z, c: base ? 0x7a7a70 : 0x6a6862 }));
    if (base) wireParts.push(bake(new THREE.TorusGeometry(0.32, 0.025, 4, 10), { x, y: h + 0.3, z, ry: (i + j) % 2 ? 0 : Math.PI / 2, c: 0x8a8a8a }));
  }
  meshOf(wallParts, std({ map: T.concrete(), vertexColors: true, roughness: 0.95 }));
  meshOf(ironParts, vc({ metalness: 0.6, roughness: 0.5 }), false);
  meshOf(wireParts, vc({ metalness: 0.7 }), false);

  // ---- trees: pines in the woods, a few dead ones in the graveyard ----
  const trunkP = [], pineP = [], deadP = [];
  for (const t of trees) {
    const x = cx(t.i) + (r() - 0.5) * 0.8, z = cx(t.j) + (r() - 0.5) * 0.8, s = t.s;
    if (area[idx(t.i, t.j)] === A_GRAVE || r() < 0.08) { // dead tree
      deadP.push(bake(C(0.12 * s, 0.25 * s, 5 * s, 6), { x, y: 2.5 * s, z, c: 0x2c241c }));
      for (let b = 0; b < 4; b++) deadP.push(bake(C(0.03 * s, 0.08 * s, 2.2 * s, 4), { x: x + Math.cos(b * 1.7) * 0.6 * s, y: (3 + b * 0.5) * s, z: z + Math.sin(b * 1.7) * 0.6 * s, rz: Math.cos(b * 1.7) * 0.9, rx: Math.sin(b * 1.7) * 0.9, c: 0x2c241c }));
      continue;
    }
    trunkP.push(bake(C(0.14 * s, 0.24 * s, 3 * s, 6), { x, y: 1.5 * s, z, c: 0x3a2c20 }));
    const h = 6 + r() * 5; const col = new THREE.Color().setHSL(0.27 + r() * 0.06, 0.3, 0.1 + r() * 0.06).getHex();
    for (let n = 0; n < 3; n++) pineP.push(bake(new THREE.ConeGeometry((2.2 - n * 0.55) * s, h * 0.45 * s, 7), { x, y: (2.2 + n * h * 0.22) * s + h * 0.2 * s, z, ry: r() * 3, c: col }));
  }
  // graveyard dead trees
  for (const [i, j] of [[8, 87], [20, 80], [33, 86], [42, 81], [15, 89]]) { const x = cx(i), z = cx(j); deadP.push(bake(C(0.16, 0.32, 6, 6), { x, y: 3, z, c: 0x241e18 })); for (let b = 0; b < 5; b++) deadP.push(bake(C(0.03, 0.09, 2.6, 4), { x: x + Math.cos(b * 1.3) * 0.7, y: 3.4 + b * 0.5, z: z + Math.sin(b * 1.3) * 0.7, rz: Math.cos(b * 1.3), rx: Math.sin(b * 1.3), c: 0x241e18 })); }
  meshOf(trunkP, std({ map: T2.bark(), vertexColors: true, roughness: 1 }), false);
  meshOf(pineP, vc({ roughness: 1 }), q === 'high');
  meshOf(deadP, vc({ roughness: 1 }), false);

  // ---- weeds everywhere: through cracks, along walls, over the lots ----
  const weedG = (() => { const a = new THREE.PlaneGeometry(1.2, 0.9); a.translate(0, 0.45, 0); const b = a.clone(); b.rotateY(Math.PI / 2); return merge([bake(a, { c: 0xffffff }), bake(b, { c: 0xffffff })]); })();
  const weedM = std({ map: T2.weeds(), alphaTest: 0.45, side: THREE.DoubleSide, roughness: 1, vertexColors: true });
  const spots = [];
  for (let j = 1; j < 105; j++) for (let i = 1; i < GW - 1; i++) {
    const k = idx(i, j); if (grid[k] !== OUT) continue; const s = surf[k];
    const nearWall = at(i + 1, j) >= 2 && at(i + 1, j) !== 12 || at(i - 1, j) >= 2 && at(i - 1, j) !== 12 || at(i, j + 1) >= 2 || at(i, j - 1) >= 2;
    const p = nearWall ? 0.55 : s === 0 ? 0.16 : s === 2 ? 0.07 : 0.1;
    if (r() < p * (q === 'low' ? 0.5 : 1)) spots.push([cx(i) + (r() - 0.5) * 1.6, cx(j) + (r() - 0.5) * 1.6, nearWall ? 1.2 : 0.7 + r() * 0.6]);
  }
  const weeds = new THREE.InstancedMesh(weedG, weedM, spots.length); const mx = new THREE.Matrix4(), qq = new THREE.Quaternion(), e = new THREE.Euler(), sv = new THREE.Vector3();
  spots.forEach(([x, z, s], n) => { e.set(0, r() * 6.28, 0); qq.setFromEuler(e); sv.set(s, s * (0.7 + r() * 0.6), s); mx.compose(new THREE.Vector3(x, 0, z), qq, sv); weeds.setMatrixAt(n, mx); weeds.setColorAt(n, new THREE.Color().setHSL(0.18 + r() * 0.08, 0.35, 0.45 + r() * 0.25)); });
  weeds.receiveShadow = true; add(weeds);
  // ivy climbing building walls
  const ivyM = std({ map: T2.leaves(), alphaTest: 0.5, side: THREE.DoubleSide, roughness: 1, color: 0x8a9a70 }); const ivyP = [];
  for (let j = 1; j < 105; j++) for (let i = 1; i < GW - 1; i++) {
    if (grid[idx(i, j)] !== 2 || r() > 0.06) continue;
    for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) if (at(i + di, j + dj) === OUT) { const pg = new THREE.PlaneGeometry(1.6 + r(), 1.8 + r() * 1.4); pg.translate(0, 0.9, 0); ivyP.push(bake(pg, { x: cx(i) + di * 1.03, y: r() * 0.6, z: cx(j) + dj * 1.03, ry: di ? Math.PI / 2 : 0, c: 0xffffff })); break; }
  }
  meshOf(ivyP, ivyM, false);

  // ---- busted windows: jagged glass left in the frames ----
  const shardP = [];
  for (const [i, j] of glassTiles) { const horiz = at(i - 1, j) !== OUT && at(i + 1, j) !== OUT && (at(i, j - 1) === OUT || at(i, j + 1) === OUT || at(i, j - 1) !== 2); const pg = new THREE.PlaneGeometry(1.9, 1.4); shardP.push(bake(pg, { x: cx(i), y: 1.6, z: cx(j), ry: horiz ? 0 : Math.PI / 2, c: 0xffffff })); }
  meshOf(shardP, std({ map: T2.shards(), transparent: true, depthWrite: false, side: THREE.DoubleSide, roughness: 0.1, metalness: 0.6, vertexColors: true }), false);

  // ---- building name signs over the doors ----
  const named = new Set(); W_.signs = [];
  for (const rm of rooms) {
    if (rm.z <= 3 || rm.name === 'House' || rm.name === 'Bunker' || rm.name === 'Shop' || named.has(rm.name) || /Hall|hall|Court|Entrance/.test(rm.name)) continue; named.add(rm.name);
    // find the doorway tile
    let best = null; for (let j = rm.j0 - 1; j <= rm.j1 + 1; j++) for (let i = rm.i0 - 1; i <= rm.i1 + 1; i++) if (at(i, j) === 11) { best = [i, j]; break; }
    if (!best) continue; const [i, j] = best; const outN = at(i, j + 1) === OUT || at(i, j + 1) === 0 ? [0, 1] : at(i, j - 1) === OUT ? [0, -1] : at(i + 1, j) === OUT ? [1, 0] : [-1, 0];
    const w = Math.min(6, 1.4 + rm.name.length * 0.32);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, 0.8), std({ map: T.label(rm.name.toUpperCase(), '#1c1a16', '#d8c89a', 512, 86, 'bold 52px Arial Black, Arial'), roughness: 0.8 }));
    m.position.set(cx(i) + outN[0] * 1.06, 2.95, cx(j) + outN[1] * 1.06); m.rotation.y = Math.atan2(outN[0], outN[1]); m.rotation.z = (r() - 0.5) * 0.12; add(m);
  }
  // mall sign
  { const m = new THREE.Mesh(new THREE.PlaneGeometry(14, 1.6), std({ map: T.label('GREENBROOK PARK MALL', '#2a2420', '#c8b890', 1024, 116, 'bold 76px Arial Black, Arial'), roughness: 0.8 })); m.position.set(cx(118), 3.1, cx(50) - 1.06); m.rotation.y = Math.PI; add(m); }

  // ---- graveyard: headstones, crosses, a few open graves, low fog ----
  const stoneP = [];
  for (const g of graves) {
    const x = cx(g.i) + (r() - 0.5) * 0.4, z = cx(g.j) + (r() - 0.5) * 0.3, tilt = (r() - 0.5) * 0.3, c = new THREE.Color().setHSL(0.1, 0.05, 0.3 + r() * 0.15).getHex();
    if (g.kind === 0) { stoneP.push(bake(B(0.8, 1.0, 0.18), { x, y: 0.5, z, rz: tilt, c })); stoneP.push(bake(C(0.4, 0.4, 0.18, 10, 1, false, 0, Math.PI).rotateX(Math.PI / 2).rotateZ(Math.PI / 2), { x, y: 1.0, z, rz: tilt + Math.PI / 2, c })); }
    else if (g.kind === 1) { stoneP.push(bake(B(0.16, 1.4, 0.16), { x, y: 0.7, z, rx: tilt, c })); stoneP.push(bake(B(0.7, 0.16, 0.16), { x, y: 1.05, z, rx: tilt, c })); }
    else if (g.kind === 2) stoneP.push(bake(C(0.12, 0.28, 1.8, 4), { x, y: 0.9, z, ry: 0.78, c }), bake(B(0.7, 0.3, 0.7), { x, y: 0.15, z, c }));
    else stoneP.push(bake(B(0.9, 0.7, 0.22), { x, y: 0.35, z, rz: tilt * 2, c }));
    stoneP.push(bake(B(0.9, 0.08, 1.8), { x, y: 0.04, z: z + 1.0, c: 0x2a2018 }));
  }
  meshOf(stoneP, std({ map: T2.stone(), vertexColors: true, roughness: 0.95 }));
  W_.graveFog = [];
  const fogM = new THREE.SpriteMaterial({ map: T.glow(), color: 0x8a9a8a, transparent: true, opacity: 0.22, depthWrite: false, fog: true });
  for (let n = 0; n < 26; n++) { const s = new THREE.Sprite(fogM); s.position.set(cx(5 + r() * 38), 0.6 + r() * 0.8, cx(78 + r() * 12)); s.scale.set(10 + r() * 8, 2.6 + r() * 1.5, 1); add(s); W_.graveFog.push(s); }
  // sign at the gate
  { const m = new THREE.Mesh(new THREE.PlaneGeometry(4.5, 0.9), std({ map: T.label('LOCKWOOD CEMETERY', '#151412', '#a89a80', 512, 96, 'bold 50px Georgia, serif'), roughness: 0.9 })); m.position.set(cx(24) + 1, 2.7, cx(77) - 0.2); m.rotation.y = Math.PI; add(m);
    for (const x of [cx(22) + 1, cx(27) - 1]) { const p = new THREE.Mesh(B(0.5, 3, 0.5), M.stone); p.position.set(x, 1.5, cx(77)); add(p); } }
  { const m = new THREE.Mesh(new THREE.PlaneGeometry(5, 0.9), std({ map: T.label('FORT CALDER - RESTRICTED', '#2a3020', '#e0d8b0', 512, 96, 'bold 44px Arial Black, Arial'), roughness: 0.9 })); m.position.set(cx(24) + 1, 3.0, cx(91) - 1.05); m.rotation.y = Math.PI; add(m); }

  // ---- Fort Calder: tanks, sandbags, a helicopter on its pad ----
  const armyP = []; const olive = 0x4a5232;
  for (const [i, j, ry] of special.tanks) {
    const x = cx(i), z = cx(j); const R = (dx, dz) => [x + dx * Math.cos(ry) + dz * Math.sin(ry), z - dx * Math.sin(ry) + dz * Math.cos(ry)];
    armyP.push(bake(B(3.2, 1.0, 5.6), { x, y: 0.8, z, ry, c: olive }), bake(B(2.4, 0.7, 2.6), { x: R(0, -0.3)[0], y: 1.6, z: R(0, -0.3)[1], ry, c: 0x434a2c }));
    const bp = R(0, 2.2); armyP.push(bake(C(0.12, 0.14, 3.2, 8).rotateX(Math.PI / 2), { x: bp[0], y: 1.7, z: bp[1], ry, c: 0x3a4028 }));
    for (const s of [-1, 1]) { const tp = R(s * 1.55, 0); armyP.push(bake(B(0.6, 0.9, 5.8), { x: tp[0], y: 0.45, z: tp[1], ry, c: 0x222222 })); }
  }
  for (let n = 0; n < 18; n++) { const a = n / 18 * Math.PI * 2; armyP.push(bake(new THREE.CapsuleGeometry(0.28, 0.6, 3, 6).rotateZ(Math.PI / 2), { x: cx(24) + 1 + Math.cos(a) * 3.2 * (n < 9 ? 1 : 0) + (n >= 9 ? (n - 13) * 0.8 : 0), y: 0.28, z: cx(93) + (n < 9 ? Math.sin(a) * 0.3 : 0.6), ry: n < 9 ? a + Math.PI / 2 : 0, c: 0x8a7a58 })); }
  meshOf(armyP, vc({ roughness: 0.9 }));
  W_.heli = makeHeli(); W_.heli.group.position.set(special.heli.x, 0, special.heli.z); W_.heli.group.rotation.y = -0.4; add(W_.heli.group);
  { const pad = new THREE.Mesh(new THREE.CircleGeometry(4.5, 24), std({ map: T.label('H', '#3a3a36', '#e8e0c0', 256, 256, 'bold 200px Arial Black, Arial'), roughness: 0.9 })); pad.rotation.x = -Math.PI / 2; pad.position.set(special.heli.x, 0.02, special.heli.z); add(pad); }

  // ---- carnival: Ferris wheel (lights up red when a boss is near), coaster, tents ----
  const wheel = new THREE.Group(); wheel.position.set(special.wheel.x, 0, special.wheel.z); add(wheel);
  const rustM = std({ map: T.rust(), roughness: 0.8, metalness: 0.4, color: 0xa08070 });
  for (const s of [-1, 1]) { const leg = new THREE.Mesh(C(0.15, 0.2, 13, 6), rustM); leg.position.set(s * 3.5, 6, 0.9); leg.rotation.z = s * 0.28; wheel.add(leg); const l2 = leg.clone(); l2.position.z = -0.9; wheel.add(l2); }
  const rim = new THREE.Group(); rim.position.y = 12; wheel.add(rim);
  rim.add(new THREE.Mesh(new THREE.TorusGeometry(9, 0.14, 6, 40), rustM)); const rim2 = new THREE.Mesh(new THREE.TorusGeometry(9, 0.14, 6, 40), rustM); rim2.position.z = 1.2; rim.add(rim2);
  for (let n = 0; n < 12; n++) { const sp = new THREE.Mesh(C(0.05, 0.05, 9, 4), rustM); sp.rotation.z = n / 12 * Math.PI * 2; sp.position.set(Math.sin(n / 12 * Math.PI * 2) * -4.5, Math.cos(n / 12 * Math.PI * 2) * 4.5, 0.6); rim.add(sp); }
  W_.wheelBulbM = new THREE.MeshBasicMaterial({ color: 0x3a1a14 });
  const bulbs = []; for (let n = 0; n < 36; n++) { const a = n / 36 * Math.PI * 2; bulbs.push(bake(new THREE.SphereGeometry(0.13, 5, 4), { x: Math.cos(a) * 9.2, y: Math.sin(a) * 9.2, z: 0.6, c: 0xffffff })); } rim.add(new THREE.Mesh(merge(bulbs), W_.wheelBulbM));
  const cars = []; for (let n = 0; n < 8; n++) { const a = n / 8 * Math.PI * 2; cars.push(bake(B(1.3, 1.0, 1.0), { x: Math.cos(a) * 9, y: Math.sin(a) * 9 - 0.9, z: 0.6, c: [0x8a2a20, 0x2a4a6a, 0xa08a2a][n % 3] })); }
  rim.add(new THREE.Mesh(merge(cars), vc({ map: T.rust() })));
  W_.wheel = { group: wheel, rim, glow: null };
  { const g = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.glow(), color: 0xff2010, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false })); g.scale.set(26, 26, 1); g.position.set(special.wheel.x, 12, special.wheel.z + 0.6); add(g); W_.wheel.glow = g; }
  // roller coaster: closed loop with hills, on pylons
  const C0 = special.coaster; const pts = [];
  for (let n = 0; n < 16; n++) { const a = n / 16 * Math.PI * 2; const rx = 12.5, rz = 18; pts.push(new THREE.Vector3(C0.cx + Math.cos(a) * rx * (1 + 0.15 * Math.sin(a * 3)), 4 + 3.5 * Math.max(0, Math.sin(a * 2 + 0.6)) + (n === 4 ? 6 : 0), C0.cz + Math.sin(a) * rz)); }
  const curve = new THREE.CatmullRomCurve3(pts, true, 'catmullrom', 0.5);
  const railM = std({ color: 0x8a2a1a, roughness: 0.6, metalness: 0.5, map: T.rust() });
  const trackP = [];
  for (const s of [-0.5, 0.5]) { const off = []; for (let n = 0; n <= 200; n++) { const t = n / 200; const p = curve.getPointAt(t), tg = curve.getTangentAt(t); const side = new THREE.Vector3(-tg.z, 0, tg.x).normalize(); off.push(p.clone().addScaledVector(side, s)); } trackP.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(off, true), 200, 0.07, 5, true)); }
  const ties = []; for (let n = 0; n < 120; n++) { const t = n / 120; const p = curve.getPointAt(t), tg = curve.getTangentAt(t); ties.push(bake(B(1.3, 0.08, 0.18), { x: p.x, y: p.y - 0.08, z: p.z, ry: Math.atan2(tg.x, tg.z), c: 0x4a3020 })); if (n % 6 === 0) ties.push(bake(C(0.12, 0.16, p.y, 6), { x: p.x, y: p.y / 2, z: p.z, c: 0x5a4a40 })); }
  for (const tp of trackP) { const m = new THREE.Mesh(tp, railM); add(m); }
  meshOf(ties, vc({ map: T.rust() }), false);
  W_.coaster = { curve, cart: makeCart(), t: 0 }; add(W_.coaster.cart);
  { const p = curve.getPointAt(0.0); W_.coaster.cart.position.copy(p); }
  // control booth with a dead power box
  { const b = C0.booth; const bx = cx(b.i), bz = cx(b.j); const m = new THREE.Mesh(B(1.8, 2.4, 1.8), std({ map: T.metal(), color: 0x6a3a2a, roughness: 0.7 })); m.position.set(bx, 1.2, bz); m.castShadow = true; add(m);
    W_.coasterLamp = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), new THREE.MeshBasicMaterial({ color: 0x400000 })); W_.coasterLamp.position.set(bx + 0.95, 2.0, bz); add(W_.coasterLamp);
    const lab = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.4), std({ map: T.label('THE WIDOWMAKER', '#200a08', '#ff6040', 512, 128, 'bold 62px Arial Black, Arial') })); lab.position.set(bx + 0.92, 2.5, bz); lab.rotation.y = Math.PI / 2; add(lab); }
  // striped tents
  const tentP = []; for (const [i, j, c] of [[84, 52, 0xa02a20], [93, 64, 0x2a4a90], [83, 58, 0xa08a20]]) { tentP.push(bake(new THREE.ConeGeometry(3, 3.5, 10), { x: cx(i), y: 3.4, z: cx(j), c }), bake(C(2.9, 2.9, 1.8, 10, 1, true), { x: cx(i), y: 0.9, z: cx(j), c: 0xd8d0b8 })); prop(i, j); }
  meshOf(tentP, vc({ side: THREE.DoubleSide }));

  // ---- gas pumps + canopy, chop shop upgrade pad, mall fountain ----
  const gasP = [];
  for (const [i, j] of special.pumps) gasP.push(bake(B(0.8, 1.7, 0.6), { x: cx(i), y: 0.85, z: cx(j), c: 0xb02a20 }), bake(B(0.82, 0.4, 0.62), { x: cx(i), y: 1.5, z: cx(j), c: 0xe0d8c8 }));
  for (const [x, z] of [[cx(53) - 0.5, cx(38)], [cx(58) + 0.5, cx(38)], [cx(53) - 0.5, cx(40) + 1], [cx(58) + 0.5, cx(40) + 1]]) gasP.push(bake(C(0.15, 0.15, 4.4, 8), { x, y: 2.2, z, c: 0xd8d8d0 }));
  gasP.push(bake(B(13, 0.5, 7), { x: (cx(53) + cx(58)) / 2, y: 4.6, z: cx(39) + 0.5, c: 0xc8c0b0 }));
  meshOf(gasP, vc({ metalness: 0.3 }));
  { const pad = new THREE.Mesh(new THREE.PlaneGeometry(6, 6), std({ map: T.label('UPGRADES', '#3a3a20', '#f0d040', 256, 256, 'bold 46px Arial Black, Arial'), roughness: 0.9, transparent: true, opacity: 0.9 })); pad.rotation.x = -Math.PI / 2; pad.position.set(special.pad.x, 0.03, special.pad.z); add(pad); }
  { const f = special.fountain; const fm = std({ map: T2.stone(), roughness: 0.9 }); const a = new THREE.Mesh(C(3, 3.2, 0.7, 20), fm); a.position.set(f.x, 0.35, f.z); add(a); const b = new THREE.Mesh(C(0.5, 0.7, 2.2, 10), fm); b.position.set(f.x, 1.1, f.z); add(b); const w = new THREE.Mesh(new THREE.CircleGeometry(2.8, 20), std({ color: 0x1a2a18, roughness: 0.1, metalness: 0.3 })); w.rotation.x = -Math.PI / 2; w.position.set(f.x, 0.55, f.z); add(w); }
  // mall food court tables + broken benches
  const mallP = []; for (let n = 0; n < 8; n++) { const x = cx(103 + (n % 2) * 3) + 1, z = cx(63 + Math.floor(n / 2) * 3); mallP.push(bake(C(0.6, 0.6, 0.06, 10), { x, y: 0.75, z, c: 0xc8c0b0 }), bake(C(0.05, 0.05, 0.75, 6), { x, y: 0.37, z, c: 0x555555 })); }
  meshOf(mallP, vc(), false);

  // ---- hatches (manholes, cellar doors) and the bunkers below ----
  W_.hatchUse = [];
  const hatchP = [];
  for (const h of hatches) {
    const x = cx(h.i), z = cx(h.j);
    if (h.kind === 'manhole') hatchP.push(bake(C(0.6, 0.6, 0.05, 16), { x, y: 0.03, z, c: 0x2a2a2a }), bake(new THREE.TorusGeometry(0.62, 0.05, 4, 16).rotateX(Math.PI / 2), { x, y: 0.04, z, c: 0x3a3a3a }));
    else hatchP.push(bake(B(1.6, 0.3, 1.4), { x, y: 0.15, z, rx: 0.15, c: 0x5a3020 }), bake(B(0.04, 0.32, 1.36), { x, y: 0.17, z, rx: 0.15, c: 0x2a1a10 }));
  }
  meshOf(hatchP, vc({ map: T.rust(), metalness: 0.5 }));
  W_.bunkerCrates = [];
  const ladderP = [];
  for (const b of bunkers) {
    const lx = cx(b.ladder.i), lz = cx(b.ladder.j) - 0.9;
    for (const s of [-0.3, 0.3]) ladderP.push(bake(B(0.06, WALL_H, 0.06), { x: lx + s, y: WALL_H / 2, z: lz, c: 0x6a6a6a }));
    for (let n = 0; n < 8; n++) ladderP.push(bake(B(0.6, 0.04, 0.04), { x: lx, y: 0.3 + n * 0.4, z: lz, c: 0x6a6a6a }));
    const cr = makeCrate(); cr.position.set(cx(b.crate.i), 0, cx(b.crate.j)); add(cr); W_.bunkerCrates.push(cr);
    // bunker lamp
    const l = new THREE.Mesh(B(0.8, 0.1, 0.3), new THREE.MeshBasicMaterial({ color: 0xffe0a0 })); l.position.set(cx(b.i0 + 4), WALL_H - 0.05, cx(b.j0 + 3)); add(l);
    // racks
    for (let n = 0; n < 3; n++) ladderP.push(bake(B(0.5, 2.2, 1.6), { x: cx(b.i1) + 0.6, y: 1.1, z: cx(b.j0 + 1 + n * 2), c: 0x3a4a30 }));
  }
  meshOf(ladderP, vc({ metalness: 0.5 }));
  W_.bunkerLight = new THREE.PointLight(0xffd8a0, 0, 16, 1.4); add(W_.bunkerLight);

  // ---- loot containers: registers, fridges, cabinets, lockers, safes, toolboxes, shelves ----
  const lootP = [];
  for (const l of loots) {
    const x = cx(l.i), z = cx(l.j);
    const k = l.kind; const ry = 0;
    if (k === 'register') lootP.push(bake(B(1.8, 1.0, 1.0), { x, y: 0.5, z, c: 0x5a4a3a }), bake(B(0.5, 0.3, 0.4), { x, y: 1.15, z, c: 0x2a2a2a }));
    else if (k === 'fridge') lootP.push(bake(B(1.0, 1.9, 0.9), { x, y: 0.95, z, c: 0xd8d4c8 }));
    else if (k === 'locker') lootP.push(bake(B(1.6, 1.9, 0.6), { x, y: 0.95, z, c: 0x4a5a6a }));
    else if (k === 'safe') lootP.push(bake(B(0.9, 1.0, 0.9), { x, y: 0.5, z, c: 0x2a2c2e }), bake(C(0.12, 0.12, 0.05, 10).rotateX(Math.PI / 2), { x, y: 0.6, z: z + 0.47, c: 0xaaaaaa }));
    else if (k === 'toolbox') lootP.push(bake(B(1.4, 1.0, 0.7), { x, y: 0.5, z, c: 0xa02020 }));
    else if (k === 'shelf') { for (let n = 0; n < 4; n++) lootP.push(bake(B(1.9, 0.05, 0.7), { x, y: 0.2 + n * 0.5, z, c: 0x6a6a60 })); lootP.push(bake(B(0.05, 1.8, 0.7), { x: x - 0.93, y: 0.9, z, c: 0x5a5a50 }), bake(B(0.05, 1.8, 0.7), { x: x + 0.93, y: 0.9, z, c: 0x5a5a50 })); for (let n = 0; n < 5; n++) lootP.push(bake(B(0.25, 0.3, 0.25), { x: x - 0.7 + r() * 1.4, y: 0.4 + Math.floor(r() * 3) * 0.5, z, c: [0xa03020, 0x2a6a3a, 0xc0a040][n % 3] })); }
    else if (k === 'medicine') lootP.push(bake(B(1.8, 1.6, 0.6), { x, y: 0.8, z, c: 0xd8d8d8 }), bake(B(0.4, 0.4, 0.05), { x, y: 1.3, z: z + 0.32, c: 0xc02020 }));
    else lootP.push(bake(B(1.4, 1.2, 0.7), { x, y: 0.6, z, c: 0x6a5038 }));
  }
  meshOf(lootP, vc({ map: T.metal() }));
  // generators lying around + craft benches
  W_.genMeshes = generatorSpots.map(g => { const m = makeGenerator(); m.position.set(cx(g.i), 0, cx(g.j)); add(m); return m; });
  const benchP = []; for (const c of craftSpots) { prop(c.i, c.j); benchP.push(bake(B(1.9, 0.95, 1.0), { x: cx(c.i), y: 0.48, z: cx(c.j), c: 0x6a4a2a }), bake(B(1.9, 0.6, 0.1), { x: cx(c.i) - c.face[0] * 0.45, y: 1.3, z: cx(c.j) - c.face[1] * 0.45, ry: c.face[0] ? Math.PI / 2 : 0, c: 0x4a3a2a })); }
  meshOf(benchP, vc({ map: T.wood() }));

  // ---- intel notes and guns on the ground (glow so you can spot them) ----
  const glowM = c => new THREE.SpriteMaterial({ map: T.glow(), color: c, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false });
  W_.intel = intelSpots.map(s => { const g = new THREE.Group(); g.position.set(cx(s.i), 0, cx(s.j)); const p = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.5), std({ map: T2.paper(), roughness: 0.9, side: THREE.DoubleSide })); p.rotation.x = -Math.PI / 2; p.rotation.z = r() * 3; p.position.y = 0.95; g.add(p); const tb = new THREE.Mesh(B(0.9, 0.9, 0.6), M.wood); tb.position.y = 0.45; g.add(tb); const gl = new THREE.Sprite(glowM(0xfff0a0)); gl.scale.set(1.2, 1.2, 1); gl.position.y = 1.0; g.add(gl); add(g); return g; });
  W_.groundGuns = groundGuns.map(gg => { const g = new THREE.Group(); g.position.set(cx(gg.i) + 0.3, 0.06, cx(gg.j) + 0.2); const m = makeGun(gg.key, false); m.group ? g.add(m.group) : g.add(m); g.rotation.y = r() * 6; (m.group || m).rotation.z = Math.PI / 2; (m.group || m).scale.setScalar(1.6); const gl = new THREE.Sprite(glowM(0x90c0ff)); gl.scale.set(1.4, 1.4, 1); gl.position.y = 0.3; g.add(gl); add(g); return g; });
}

const prop = (i, j) => { if (inb(i, j)) grid[idx(i, j)] = PROP; };

export function makeGenerator() {
  const g = new THREE.Group(); const body = std({ color: 0xb8a020, roughness: 0.5, metalness: 0.3 }), frame = std({ color: 0x222222, roughness: 0.6, metalness: 0.6 });
  const b = new THREE.Mesh(B(1.0, 0.6, 0.65), body); b.position.y = 0.5; g.add(b); const t = new THREE.Mesh(C(0.25, 0.25, 0.9, 10).rotateZ(Math.PI / 2), body); t.position.set(0, 0.95, 0); g.add(t);
  for (const s of [-1, 1]) { const f = new THREE.Mesh(B(0.05, 0.9, 0.7), frame); f.position.set(s * 0.52, 0.5, 0); g.add(f); }
  g.traverse(o => { if (o.isMesh) o.castShadow = true; }); return g;
}
function makeCart() {
  const g = new THREE.Group(); const m = std({ color: 0xc02a20, roughness: 0.4, metalness: 0.4 });
  const b = new THREE.Mesh(B(1.3, 0.6, 2.2), m); b.position.y = 0.45; g.add(b); const s = new THREE.Mesh(B(1.1, 0.5, 0.15), std({ color: 0x222222 })); s.position.set(0, 0.9, -0.6); g.add(s);
  return g;
}
export function makeHeli() {
  const g = new THREE.Group(); const olive = std({ color: 0x4a5232, roughness: 0.6, metalness: 0.3 }), dark = std({ color: 0x1a1c18, roughness: 0.5 }), glass = std({ color: 0x0b1118, metalness: 0.9, roughness: 0.1 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(1.2, 3.2, 6, 12).rotateX(Math.PI / 2), olive); body.position.set(0, 1.9, 0); body.scale.set(1, 0.95, 1); g.add(body);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(1.15, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2).rotateX(Math.PI / 2), glass); nose.position.set(0, 2.0, 2.3); g.add(nose);
  const tail = new THREE.Mesh(C(0.25, 0.5, 6, 8).rotateX(Math.PI / 2), olive); tail.position.set(0, 2.4, -4.8); g.add(tail);
  const fin = new THREE.Mesh(B(0.12, 1.6, 1.0), olive); fin.position.set(0, 3.0, -7.6); g.add(fin);
  for (const s of [-1, 1]) { const sk = new THREE.Mesh(B(0.12, 0.12, 4.4), dark); sk.position.set(s * 1.2, 0.25, 0.2); g.add(sk); for (const z of [-1, 1.2]) { const st = new THREE.Mesh(B(0.08, 0.7, 0.08), dark); st.position.set(s * 1.1, 0.6, z); st.rotation.z = s * 0.3; g.add(st); } }
  const mast = new THREE.Mesh(C(0.12, 0.12, 0.7, 8), dark); mast.position.set(0, 3.3, 0); g.add(mast);
  const rotor = new THREE.Group(); rotor.position.set(0, 3.65, 0); g.add(rotor);
  for (let n = 0; n < 4; n++) { const bl = new THREE.Mesh(B(0.35, 0.05, 6.5), dark); bl.position.z = 3.25; const h = new THREE.Group(); h.rotation.y = n * Math.PI / 2; h.add(bl); rotor.add(h); }
  const trot = new THREE.Group(); trot.position.set(0.2, 3.1, -7.6); g.add(trot); for (let n = 0; n < 2; n++) { const bl = new THREE.Mesh(B(0.05, 1.6, 0.18), dark); bl.rotation.x = n * Math.PI / 2; trot.add(bl); }
  g.traverse(o => { if (o.isMesh) o.castShadow = true; });
  return { group: g, rotor, trot };
}
