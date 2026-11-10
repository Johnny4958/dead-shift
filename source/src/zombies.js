// Zombies: organic bodies (lathe torsos, tapered limbs, hands with fingers), real faces and a jaw that moves.
// Types: walker, runner, fat, toxic, screamer, boss. Each zombie is folded into ONE SkinnedMesh (3-4 draw calls).
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { T2 as TX2 } from './tex2.js';
import { rng } from './util.js';
const std = (o) => new THREE.MeshStandardMaterial(o);
const cache = {};
const once = (k, f) => cache[k] || (cache[k] = f());
function bake(geo, { x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1, c = 0xffffff } = {}) {
  const m = new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), new THREE.Vector3(sx, sy, sz));
  const g = (geo.index ? geo.toNonIndexed() : geo.clone()); g.applyMatrix4(m);
  const col = new THREE.Color(c); const n = g.attributes.position.count; const a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = col.r; a[i * 3 + 1] = col.g; a[i * 3 + 2] = col.b; }
  g.setAttribute('color', new THREE.BufferAttribute(a, 3));
  if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2));
  return g;
}
const merge = parts => mergeGeometries(parts, false);
const B = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const C = (r1, r2, h, s = 10) => new THREE.CylinderGeometry(r1, r2, h, s);
// Zombies: organic bodies (lathe torsos, tapered limbs, hands with fingers), real faces and a jaw that moves.
// Each bone is one merged mesh with vertex colours (skin vs clothes) so a horde stays cheap to draw.
const SK = 0xffffff;
const lathe = (pts, seg = 14) => new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg);
function ragged(geo, below, amt, seed) { // jitter the hem of a clothing lathe so it looks torn
  const p = geo.attributes.position; let s = seed; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < p.count; i++) if (p.getY(i) < below) p.setY(i, p.getY(i) + (r() - 0.3) * amt);
  return geo;
}
function limb(r0, r1, len, seg = 9) { const g = new THREE.CylinderGeometry(r1, r0, len, seg, 3); g.translate(0, -len / 2, 0); return g; }
function hand(sc = 1, claw = false) {
  const parts = []; const palm = new THREE.SphereGeometry(0.045 * sc, 8, 6); parts.push(bake(palm, { y: -0.04 * sc, sx: 1, sy: 1.2, sz: 0.5, c: SK }));
  for (let f = 0; f < 4; f++) { const fg = limb(0.011 * sc, 0.008 * sc, (claw ? 0.085 : 0.07) * sc, 5); parts.push(bake(fg, { x: (-0.03 + f * 0.02) * sc, y: -0.085 * sc, z: 0.008, rx: 0.5 + f * 0.08, c: SK })); }
  parts.push(bake(limb(0.012 * sc, 0.009 * sc, 0.05 * sc, 5), { x: 0.042 * sc, y: -0.03 * sc, z: 0.015, rz: 0.9, rx: 0.4, c: SK }));
  return parts;
}
const ZG = () => once('zg2', () => {
  const sphere = (r, w = 10, h = 8) => new THREE.SphereGeometry(r, w, h);
  return {
    // torso profiles: radius at height (pelvis 0 -> neck 0.68)
    torso: lathe([[0.001, -0.06], [0.13, -0.04], [0.15, 0.06], [0.135, 0.2], [0.15, 0.32], [0.18, 0.44], [0.19, 0.52], [0.165, 0.6], [0.07, 0.67], [0.045, 0.72], [0.001, 0.73]]),
    shirt: ragged(lathe([[0.152, 0.05], [0.14, 0.2], [0.157, 0.32], [0.187, 0.44], [0.198, 0.52], [0.174, 0.6], [0.08, 0.665], [0.06, 0.68]], 16), 0.1, 0.12, 7),
    belly: lathe([[0.001, -0.06], [0.16, -0.04], [0.22, 0.08], [0.25, 0.2], [0.23, 0.34], [0.22, 0.46], [0.2, 0.55], [0.17, 0.61], [0.07, 0.67], [0.05, 0.72], [0.001, 0.73]]),
    bellyShirt: ragged(lathe([[0.17, 0.22], [0.24, 0.3], [0.232, 0.4], [0.212, 0.5], [0.18, 0.6], [0.08, 0.665], [0.06, 0.68]], 16), 0.27, 0.08, 9),
    ribs: (() => { const g = []; for (let n = 0; n < 5; n++) { const t = new THREE.TorusGeometry(0.17 - n * 0.006, 0.008, 4, 14, Math.PI * 0.9); g.push(bake(t, { y: 0.3 + n * 0.055, rx: Math.PI / 2, rz: Math.PI * 0.05, sx: 1.04, sy: 0.6, c: 0xd9cfb6 })); } return merge(g); })(),
    pelvis: (() => { const g = sphere(0.16, 12, 8); return g; })(),
    head: (() => { const g = sphere(0.115, 18, 14); g.rotateY(-Math.PI / 2); return g; })(),
    brow: (() => { const g = new THREE.CapsuleGeometry(0.026, 0.11, 3, 8); g.rotateZ(Math.PI / 2); return g; })(),
    ear: sphere(0.03, 6, 5),
    jaw: (() => { const g = new THREE.SphereGeometry(0.095, 12, 6, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2); return g; })(),
    teeth: (() => { const g = []; for (let n = 0; n < 7; n++) g.push(bake(B(0.013, 0.022, 0.012), { x: -0.039 + n * 0.013, y: 0.005, z: 0.082 - Math.abs(n - 3) * 0.006, ry: (n - 3) * 0.15, c: 0xd8cfa0 })); return merge(g); })(),
    eye: sphere(0.017, 8, 6),
    pustule: sphere(0.03, 6, 5),
    neck: limb(0.05, 0.045, 0.12, 8),
    upper: limb(0.058, 0.045, 0.29), sleeve: ragged(limb(0.067, 0.06, 0.15, 10), -0.12, 0.05, 3), shoulder: sphere(0.068),
    fore: limb(0.044, 0.033, 0.27), elbow: sphere(0.046),
    thigh: limb(0.088, 0.062, 0.44), knee: sphere(0.063),
    shin: limb(0.06, 0.042, 0.42), shoe: (() => { const g = new THREE.CapsuleGeometry(0.05, 0.14, 4, 8); g.rotateX(Math.PI / 2); return g; })(),
    hand: merge(hand(1)), claw: merge(hand(1.2, true)),
  };
});
const ZM = () => once('zm2', () => {
  const body = (c, e = 0, ei = 0) => std({ map: TX2.zskin('#c9c6bc'), vertexColors: true, roughness: 0.82, emissive: e, emissiveIntensity: ei });
  const face = (c, e = 0, ei = 0) => std({ map: TX2.zface(c), roughness: 0.75, emissive: e, emissiveIntensity: ei });
  return {
    body: body(), toxicBody: body(0, 0x2aff20, 0.28), bossBody: body(0, 0x5a0800, 0.25),
    faces: ['#8e9a86', '#9c9283', '#7f8a7c', '#a19a8a', '#b0a796'].map(c => face(c)), toxicFace: face('#6f9a48', 0x3cff2a, 0.3), screamFace: face('#c4c0b4'), bossFace: face('#7a6a5c', 0x600800, 0.3),
    eyes: new THREE.MeshBasicMaterial({ color: 0xffd060 }), eyesG: new THREE.MeshBasicMaterial({ color: 0x9dff4a }), eyesR: new THREE.MeshBasicMaterial({ color: 0xff3a20 }), eyesW: new THREE.MeshBasicMaterial({ color: 0xe8f4ff }),
    pus: new THREE.MeshStandardMaterial({ color: 0x9dff4a, emissive: 0x66ff22, emissiveIntensity: 1.2, roughness: 0.3 }),
  };
});
const SKINS = [0x8e9a86, 0x9c9283, 0x7f8a7c, 0xa19a8a, 0xb0a796];
const SHIRTS = [0xcfc9b8, 0x7b2b25, 0x2f4d6e, 0x2b2b2b, 0x5d6b3a, 0x8a6d3b, 0x6b4a6e, 0x3c5a5a];
const PANTS = [0x2f3d55, 0x5a4d35, 0x252525, 0x4a4a44, 0x3b4a6b];
const SKIN_CACHE = {}, CENT = {}, VARIANTS = 3, EMPTY = new THREE.BufferGeometry(), NOP = () => null;
const _inv = new THREE.Matrix4(), _mm = new THREE.Matrix4();
// Fold one zombie's bone meshes into ONE SkinnedMesh whose bones are the joint groups; the merged geometry is cached per type+variant.
function skinify(key, root, meshes, roleOf, matList) {
  root.updateMatrixWorld(true);
  _inv.copy(root.matrixWorld).invert();
  const bones = [];
  for (const o of meshes) if (!bones.includes(o.parent)) bones.push(o.parent);
  let geo = SKIN_CACHE[key];
  if (!geo) {
    const byRole = [[], [], [], []];
    for (const o of meshes) {
      let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
      for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv' && k !== 'color') g.deleteAttribute(k);
      const n = g.attributes.position.count;
      if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2));
      if (!g.attributes.color) g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(n * 3).fill(1), 3));
      g.applyMatrix4(_mm.multiplyMatrices(_inv, o.matrixWorld));
      const bi = bones.indexOf(o.parent);
      const si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
      for (let i = 0; i < n; i++) { si[i * 4] = bi; sw[i * 4] = 1; }
      g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(si, 4)); g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(sw, 4));
      byRole[roleOf[o.material.uuid] ?? 0].push(g);
    }
    const list = [], counts = [];
    for (const r of byRole) { if (r.length) { const mm = mergeGeometries(r, false); list.push(mm); counts.push(mm.attributes.position.count); } else counts.push(0); }
    geo = mergeGeometries(list, false); geo.clearGroups();
    let start = 0; counts.forEach((c, i) => { if (c) geo.addGroup(start, c, i); start += c; });
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0.9, 0), 1.6);
    SKIN_CACHE[key] = geo;
    // centre of each bone's own geometry, in that bone's space: hit tests use the real visible head/torso, not the joint pivot
    const sums = bones.map(() => [0, 0, 0, 0]); const pa = geo.attributes.position, sia = geo.attributes.skinIndex;
    for (let i = 0; i < pa.count; i++) { const b = sums[sia.getX(i)]; b[0] += pa.getX(i); b[1] += pa.getY(i); b[2] += pa.getZ(i); b[3]++; }
    CENT[key] = sums.map((b, bi) => { const v = new THREE.Vector3(b[0] / (b[3] || 1), b[1] / (b[3] || 1), b[2] / (b[3] || 1)); v.applyMatrix4(root.matrixWorld); return bones[bi].worldToLocal(v); });
  }
  const sk = new THREE.SkinnedMesh(geo, matList);
  sk.castShadow = true; root.add(sk); sk.updateMatrixWorld(true);
  sk.bind(new THREE.Skeleton(bones));
  sk.userData.cent = CENT[key];
  return sk;
}
export function warmZombies() { for (const t of ['walker', 'runner', 'fat', 'toxic', 'screamer', 'boss']) for (let v = 0; v < VARIANTS; v++) makeZombie(t, v); }
export function makeZombie(type, variant) {
  const v = variant ?? ((Math.random() * VARIANTS) | 0), key = type + v, cached = !!SKIN_CACHE[key];
  const rr = rng(17 + v * 7919 + type.charCodeAt(0) * 131 + type.length * 977); // same look for the same variant
  const bk = cached ? NOP : bake, mg = cached ? NOP : merge;
  const g = ZG(), m = ZM();
  const pickA = a => a[(rr() * a.length) | 0];
  const si = (rr() * SKINS.length) | 0; let skin = SKINS[si], shirt = pickA(SHIRTS), pant = pickA(PANTS), eye = m.eyes, faceM = m.faces[si], bodyM = m.body;
  const fat = type === 'fat' || type === 'boss', thin = type === 'runner' || type === 'screamer';
  if (type === 'toxic') { skin = 0x6f9a48; shirt = 0x2c3a1c; pant = 0x2c3a1c; eye = m.eyesG; faceM = m.toxicFace; bodyM = m.toxicBody; }
  if (type === 'runner') eye = m.eyesR;
  if (type === 'screamer') { skin = 0xc4c0b4; eye = m.eyesW; faceM = m.screamFace; shirt = 0x8c8478; }
  if (type === 'boss') { skin = 0x7a6a5c; eye = m.eyesR; faceM = m.bossFace; bodyM = m.bossBody; shirt = 0x3a2a20; pant = 0x2a2420; }
  const mesh = (geo, mat = bodyM) => new THREE.Mesh(cached || !geo ? EMPTY : geo, mat);
  const root = new THREE.Group();
  const body = new THREE.Group(); root.add(body);
  const hips = new THREE.Group(); hips.position.y = 0.95; body.add(hips);
  hips.add(mesh(mg([bk(g.pelvis, { y: -0.02, sx: fat ? 1.35 : 1.05, sy: 0.75, sz: fat ? 1.0 : 0.72, c: pant })])));
  const spine = new THREE.Group(); hips.add(spine);
  const bare = type === 'runner' || (type !== 'boss' && rr() < 0.15);
  const tparts = [bk(fat ? g.belly : g.torso, { sx: fat ? 1.25 : (thin ? 1.05 : 1.2), sz: fat ? 1.0 : (thin ? 0.62 : 0.72), c: skin })];
  if (bare) tparts.push(bk(g.ribs, { sx: thin ? 1.0 : 1.12, sz: thin ? 0.68 : 0.78, y: 0 }));
  else tparts.push(bk(fat ? g.bellyShirt : g.shirt, { sx: fat ? 1.25 : (thin ? 1.06 : 1.21), sz: fat ? 1.0 : (thin ? 0.64 : 0.74), c: shirt }));
  spine.add(mesh(mg(tparts)));
  if (type === 'toxic' || type === 'boss') for (let n = 0; n < (type === 'boss' ? 0 : 7); n++) { const p = new THREE.Mesh(g.pustule, m.pus); const a = rr() * 6.28; p.position.set(Math.cos(a) * 0.18, 0.15 + rr() * 0.4, Math.sin(a) * 0.12); p.scale.setScalar(0.5 + rr() * 0.8); spine.add(p); }
  if (type === 'boss') { // bone spikes out of the back
    const sp = []; for (let n = 0; n < 6; n++) sp.push(bk(C(0.0, 0.04, 0.3, 6), { x: (n % 2 ? 1 : -1) * 0.08, y: 0.25 + n * 0.07, z: -0.2, rx: -0.9, c: 0xd9cfb6 }));
    spine.add(mesh(mg(sp)));
  }
  const neck = new THREE.Group(); neck.position.y = 0.68; spine.add(neck);
  neck.add(mesh(mg([bk(g.neck, { y: 0.1, c: skin })])));
  const head = new THREE.Group(); head.position.set(0, 0.12, 0.02); neck.add(head);
  const skull = mesh(g.head, faceM); skull.scale.set(0.92, 1.08, 1.0); head.add(skull);
  const det = [bk(g.brow, { y: 0.035, z: 0.088, sy: 0.7, sz: 0.8, c: skin }), bk(g.ear, { x: -0.105, y: 0.0, sz: 0.5, sx: 0.4, c: skin }), bk(g.ear, { x: 0.105, y: 0.0, sz: 0.5, sx: 0.4, c: skin }),
    bk(new THREE.SphereGeometry(0.03, 6, 5), { y: -0.005, z: 0.11, sx: 0.7, sy: 0.9, c: skin })]; // cheekbone/nose bridge
  if (type === 'screamer') det.push(bk(new THREE.SphereGeometry(0.12, 10, 8), { y: 0.03, sx: 0.95, sy: 1.0, c: 0x2a2620 }));
  head.add(mesh(mg(det)));
  const jaw = new THREE.Group(); jaw.position.set(0, -0.045, 0.012); head.add(jaw);
  jaw.add(mesh(mg([bk(g.jaw, { sx: 0.82, sy: type === 'screamer' ? 0.8 : 0.55, sz: 1.0, c: skin }), bk(g.teeth, { y: 0, sx: 0.9 })])));
  for (const s of [-1, 1]) { const e = new THREE.Mesh(g.eye, eye); e.position.set(s * 0.036, 0.012, 0.095); head.add(e); }
  const arm = (s) => {
    const sh = new THREE.Group(); sh.position.set((fat ? 0.27 : thin ? 0.2 : 0.23) * s, 0.55, 0); spine.add(sh);
    const up = [bk(g.shoulder, { c: bare ? skin : shirt }), bk(g.upper, { c: skin })]; if (!bare) up.push(bk(g.sleeve, { c: shirt })); sh.add(mesh(mg(up)));
    const el = new THREE.Group(); el.position.y = -0.29; sh.add(el);
    el.add(mesh(mg([bk(g.elbow, { c: skin }), bk(g.fore, { c: skin }), bk(type === 'runner' || type === 'boss' ? g.claw : g.hand, { y: -0.27, c: skin })])));
    return { sh, el };
  };
  const leg = (s) => {
    const hp = new THREE.Group(); hp.position.set((fat ? 0.12 : 0.09) * s, -0.03, 0); hips.add(hp);
    hp.add(mesh(mg([bk(g.thigh, { c: pant })])));
    const kn = new THREE.Group(); kn.position.y = -0.44; hp.add(kn);
    const torn = rr() < 0.35;
    kn.add(mesh(mg([bk(g.knee, { c: pant }), bk(g.shin, { c: torn ? skin : pant, sx: torn ? 1 : 1.12, sz: torn ? 1 : 1.12 }), bk(g.shoe, { y: -0.44, z: 0.05, c: 0x2a2420 })])));
    return { hp, kn };
  };
  const aL = arm(-1), aR = arm(1), lL = leg(-1), lR = leg(1);
  let sc = 1;
  if (type === 'fat') sc = 1.2;
  if (type === 'runner') { sc = 1.02; root.scale.set(0.92, 1, 0.92); }
  if (type === 'screamer') sc = 1.06;
  if (type === 'boss') sc = 1.85;
  root.scale.multiplyScalar(sc);
  const all = []; root.traverse(o => { if (o.isMesh) all.push(o); });
  const sk = skinify(key, root, all, { [bodyM.uuid]: 0, [faceM.uuid]: 1, [eye.uuid]: 2, [m.pus.uuid]: 3 }, [bodyM, faceM, eye, m.pus]);
  for (const o of all) o.parent.remove(o);
  const cent = sk.userData.cent, bi = o => sk.skeleton.bones.indexOf(o);
  const headC = bi(head) >= 0 ? cent[bi(head)].clone() : new THREE.Vector3(0, 0.12, 0), bodyC = bi(spine) >= 0 ? cent[bi(spine)].clone() : new THREE.Vector3(0, 0.25, 0);
  return { headC, bodyC, sk, root, body, hips, spine, neck, head, jaw, aL, aR, lL, lR, meshes: [sk], scale: sc, type, phase: Math.random() * 10, armUp: 0.6 + Math.random() * 0.8, limp: Math.random() < 0.3 ? 0.4 : 0, tilt: (Math.random() - 0.5) * 0.5, scream: 0 };
}
// procedural gait: speed in m/s, attack 0..1
export function animZombie(z, t, speed, attack, climb) {
  const run = speed > 2.2; const f = run ? 2.4 + speed * 0.5 : 1.3 + speed * 0.9; const ph = t * f + z.phase; const s = Math.sin(ph), c = Math.cos(ph);
  const amp = Math.min(1, speed / (run ? 4 : 1.6));
  z.lL.hp.rotation.x = s * (run ? 0.9 : 0.5) * amp; z.lR.hp.rotation.x = -s * (run ? 0.9 : 0.5) * amp * (1 - z.limp);
  z.lL.kn.rotation.x = Math.max(0, -c) * (run ? 1.3 : 0.6) * amp; z.lR.kn.rotation.x = Math.max(0, c) * (run ? 1.3 : 0.6) * amp;
  z.hips.position.y = 0.95 - Math.abs(c) * 0.05 * amp - (run ? 0.06 : 0);
  z.spine.rotation.x = run ? 0.45 : 0.2 + Math.sin(t * 0.7 + z.phase) * 0.05;
  z.spine.rotation.z = z.tilt * 0.3 + s * 0.06 * amp;
  z.neck.rotation.z = z.tilt + Math.sin(t * 1.3 + z.phase) * 0.1; z.neck.rotation.x = run ? -0.35 : -0.15;
  // jaw hangs and works: wide open when attacking or screaming
  z.jaw.rotation.x = 0.12 + Math.max(0, Math.sin(t * 2.1 + z.phase)) * 0.18 + attack * 0.45 + (z.scream || 0) * 0.7;
  if (z.scream) { z.neck.rotation.x = -0.6 * z.scream; z.aL.sh.rotation.x = -0.4; z.aR.sh.rotation.x = -0.4; z.aL.sh.rotation.z = 0.6; z.aR.sh.rotation.z = -0.6; return; }
  const reach = run ? 1.0 : z.armUp;
  const sw = run ? c * 0.9 : Math.sin(t * 1.7 + z.phase) * 0.12;
  z.aL.sh.rotation.x = -reach - sw - attack * 1.2; z.aR.sh.rotation.x = -reach + sw - attack * 1.4 * Math.max(0, Math.sin(t * 14));
  z.aL.sh.rotation.z = 0.08; z.aR.sh.rotation.z = -0.08;
  z.aL.el.rotation.x = -0.3 - attack * 0.4; z.aR.el.rotation.x = -0.25 - attack * 0.6 * Math.max(0, Math.cos(t * 14));
  if (climb) { z.spine.rotation.x = 0.9; z.aL.sh.rotation.x = -2.2; z.aR.sh.rotation.x = -2.0; z.lL.hp.rotation.x = -1.0; z.lL.kn.rotation.x = 1.4; }
}

// ---------------------------------------------------------------------------
