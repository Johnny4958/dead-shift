// Low-poly but detailed models built from primitives: zombies, the soldier, guns, the fastback, machines, build pieces.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { T } from './tex.js';

const std = (o) => new THREE.MeshStandardMaterial(o);
const cache = {};
const once = (k, f) => cache[k] || (cache[k] = f());

// a box/cylinder/etc geometry baked with transform + vertex color, for merging
export function bake(geo, { x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1, c = 0xffffff } = {}) {
  const m = new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), new THREE.Vector3(sx, sy, sz));
  const g = (geo.index ? geo.toNonIndexed() : geo.clone()); g.applyMatrix4(m);
  const col = new THREE.Color(c); const n = g.attributes.position.count; const a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = col.r; a[i * 3 + 1] = col.g; a[i * 3 + 2] = col.b; }
  g.setAttribute('color', new THREE.BufferAttribute(a, 3));
  if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2));
  return g;
}
export const merge = parts => mergeGeometries(parts, false);
export const B = (w, h, d) => new THREE.BoxGeometry(w, h, d);
export const C = (r1, r2, h, s = 10) => new THREE.CylinderGeometry(r1, r2, h, s);

// ---------------------------------------------------------------------------
// Zombies
const ZG = () => once('zg', () => ({
  torso: new THREE.CapsuleGeometry(0.19, 0.34, 4, 10),
  pelvis: new THREE.CapsuleGeometry(0.16, 0.08, 4, 8),
  head: (() => { const h = new THREE.SphereGeometry(0.135, 14, 10); const jaw = B(0.17, 0.07, 0.14); jaw.translate(0, -0.11, 0.04); const brow = B(0.2, 0.04, 0.06); brow.translate(0, 0.03, 0.11); const nose = B(0.035, 0.05, 0.05); nose.translate(0, -0.02, 0.135); return mergeGeometries([h.toNonIndexed(), jaw.toNonIndexed(), brow.toNonIndexed(), nose.toNonIndexed()]); })(),
  upper: (() => { const g = new THREE.CapsuleGeometry(0.06, 0.22, 3, 8); g.translate(0, -0.15, 0); return g; })(),
  fore: (() => { const g = new THREE.CapsuleGeometry(0.05, 0.22, 3, 8); g.translate(0, -0.14, 0); const hand = B(0.07, 0.11, 0.04); hand.translate(0, -0.32, 0.0); const f = B(0.075, 0.06, 0.03); f.translate(0, -0.4, 0.02); f.rotateX(0.3); return mergeGeometries([g.toNonIndexed(), hand.toNonIndexed(), f.toNonIndexed()]); })(),
  thigh: (() => { const g = new THREE.CapsuleGeometry(0.085, 0.3, 3, 8); g.translate(0, -0.22, 0); return g; })(),
  shin: (() => { const g = new THREE.CapsuleGeometry(0.068, 0.3, 3, 8); g.translate(0, -0.2, 0); const foot = B(0.1, 0.07, 0.24); foot.translate(0, -0.42, 0.05); return mergeGeometries([g.toNonIndexed(), foot.toNonIndexed()]); })(),
  eyes: (() => { const a = new THREE.SphereGeometry(0.022, 6, 5); const b = a.clone(); a.translate(-0.045, 0.0, 0.118); b.translate(0.045, 0.0, 0.118); return mergeGeometries([a, b]); })(),
}));
const ZM = () => once('zm', () => {
  const skins = ['#8e9a86', '#9c9283', '#7f8a7c', '#a19a8a'].map(c => std({ map: T.skin(c), roughness: 0.85 }));
  const shirts = ['#cfc9b8', '#7b2b25', '#2f4d6e', '#2b2b2b', '#5d6b3a', '#8a6d3b'].map(c => std({ map: T.cloth(c), roughness: 0.95 }));
  const pants = ['#2f3d55', '#5a4d35', '#252525', '#4a4a44'].map(c => std({ map: T.cloth(c), roughness: 0.95 }));
  const toxicSkin = std({ map: T.skin('#5f8f3a'), roughness: 0.6, emissive: 0x3cff2a, emissiveIntensity: 0.35 });
  const toxicCloth = std({ map: T.cloth('#2c3a1c'), roughness: 0.9, emissive: 0x1a6a10, emissiveIntensity: 0.2 });
  const fatSkin = std({ map: T.skin('#a39383'), roughness: 0.8 });
  const eyes = new THREE.MeshBasicMaterial({ color: 0xffb030 });
  const eyesG = new THREE.MeshBasicMaterial({ color: 0x9dff4a });
  const eyesR = new THREE.MeshBasicMaterial({ color: 0xff3a20 });
  return { skins, shirts, pants, toxicSkin, toxicCloth, fatSkin, eyes, eyesG, eyesR };
});

// One zombie = ~15 separate meshes (a draw call each). skinify() folds them into ONE SkinnedMesh
// whose bones are the existing joint groups, so animation code is unchanged but the zombie costs
// 4 draw calls (one per material) instead of ~15. Merged geometry is cached per zombie type.
const SKIN_CACHE = {};
const _inv = new THREE.Matrix4(), _mm = new THREE.Matrix4();
function skinify(type, root, meshes, roleOf, matList) {
  root.updateMatrixWorld(true);
  _inv.copy(root.matrixWorld).invert();
  const bones = [];
  for (const o of meshes) if (!bones.includes(o.parent)) bones.push(o.parent);
  let geo = SKIN_CACHE[type];
  if (!geo) {
    const byRole = [[], [], [], []];
    for (const o of meshes) {
      let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
      for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k);
      if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
      g.applyMatrix4(_mm.multiplyMatrices(_inv, o.matrixWorld));
      const n = g.attributes.position.count, bi = bones.indexOf(o.parent);
      const si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
      for (let i = 0; i < n; i++) { si[i * 4] = bi; sw[i * 4] = 1; }
      g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(si, 4)); g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(sw, 4));
      byRole[roleOf[o.material.uuid] ?? 2].push(g);
    }
    const list = [], counts = [];
    for (const r of byRole) { if (r.length) { const m = mergeGeometries(r, false); list.push(m); counts.push(m.attributes.position.count); } else counts.push(0); }
    geo = mergeGeometries(list, false); geo.clearGroups();
    let start = 0; counts.forEach((c, i) => { if (c) geo.addGroup(start, c, i); start += c; });
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0.9, 0), 1.6);
    SKIN_CACHE[type] = geo;
  }
  const sk = new THREE.SkinnedMesh(geo, matList);
  sk.castShadow = true; root.add(sk); sk.updateMatrixWorld(true);
  sk.bind(new THREE.Skeleton(bones));
  for (const o of meshes) { o.visible = false; o.castShadow = false; }
}
export function makeZombie(type) {
  const g = ZG(), m = ZM();
  const pickA = a => a[(Math.random() * a.length) | 0];
  let skin = pickA(m.skins), shirt = pickA(m.shirts), pant = pickA(m.pants), eye = m.eyes;
  if (type === 'toxic') { skin = m.toxicSkin; shirt = m.toxicCloth; pant = m.toxicCloth; eye = m.eyesG; }
  if (type === 'fat') { skin = m.fatSkin; }
  if (type === 'runner') eye = m.eyesR;
  const root = new THREE.Group();
  const body = new THREE.Group(); root.add(body);              // leans/falls
  const hips = new THREE.Group(); hips.position.y = 0.95; body.add(hips);
  const pelvis = new THREE.Mesh(g.pelvis, pant); pelvis.rotation.z = Math.PI / 2; pelvis.scale.set(1, 1.2, 0.8); hips.add(pelvis);
  const spine = new THREE.Group(); hips.add(spine);
  const torso = new THREE.Mesh(g.torso, shirt); torso.position.y = 0.3; torso.scale.set(1.25, 1, 0.75); spine.add(torso);
  const neck = new THREE.Group(); neck.position.y = 0.66; spine.add(neck);
  const head = new THREE.Mesh(g.head, skin); head.position.y = 0.08; neck.add(head);
  const eyes = new THREE.Mesh(g.eyes, eye); head.add(eyes);
  const arm = (s) => { const sh = new THREE.Group(); sh.position.set(0.28 * s, 0.53, 0); spine.add(sh); const u = new THREE.Mesh(g.upper, shirt); sh.add(u); const el = new THREE.Group(); el.position.y = -0.31; sh.add(el); const f = new THREE.Mesh(g.fore, skin); el.add(f); return { sh, el }; };
  const leg = (s) => { const hp = new THREE.Group(); hp.position.set(0.11 * s, -0.02, 0); hips.add(hp); const th = new THREE.Mesh(g.thigh, pant); hp.add(th); const kn = new THREE.Group(); kn.position.y = -0.45; hp.add(kn); const sn = new THREE.Mesh(g.shin, pant); kn.add(sn); return { hp, kn }; };
  const aL = arm(-1), aR = arm(1), lL = leg(-1), lR = leg(1);
  let sc = 1;
  if (type === 'fat') { torso.scale.set(1.9, 1.15, 1.55); pelvis.scale.set(1.6, 1.6, 1.3); aL.sh.position.x = -0.38; aR.sh.position.x = 0.38; lL.hp.position.x = -0.17; lR.hp.position.x = 0.17; sc = 1.22; }
  if (type === 'runner') { torso.scale.set(1.0, 1.05, 0.62); sc = 1.04; root.scale.set(0.9, 1, 0.9); }
  if (type === 'toxic') sc = 1.02;
  root.scale.multiplyScalar(sc);
  const all = []; root.traverse(o => { if (o.isMesh) { o.castShadow = true; all.push(o); } });
  eyes.castShadow = false;
  // random posture so the horde does not move in lockstep
  skinify(type, root, all, { [pant.uuid]: 0, [shirt.uuid]: 1, [skin.uuid]: 2, [eye.uuid]: 3 }, [pant, shirt, skin, eye]);
  const r = { root, body, hips, spine, neck, head, aL, aR, lL, lR, meshes: all, scale: sc, phase: Math.random() * 10, armUp: 0.6 + Math.random() * 0.8, limp: Math.random() < 0.3 ? 0.4 : 0, tilt: (Math.random() - 0.5) * 0.5 };
  return r;
}
// procedural gait: speed in m/s, mode 'walk'|'run', attack 0..1
export function animZombie(z, t, speed, attack, climb) {
  const run = speed > 2.2; const f = run ? 2.4 + speed * 0.5 : 1.3 + speed * 0.9; const ph = t * f + z.phase; const s = Math.sin(ph), c = Math.cos(ph);
  const amp = Math.min(1, speed / (run ? 4 : 1.6));
  z.lL.hp.rotation.x = s * (run ? 0.9 : 0.5) * amp; z.lR.hp.rotation.x = -s * (run ? 0.9 : 0.5) * amp * (1 - z.limp);
  z.lL.kn.rotation.x = Math.max(0, -c) * (run ? 1.3 : 0.6) * amp; z.lR.kn.rotation.x = Math.max(0, c) * (run ? 1.3 : 0.6) * amp;
  z.hips.position.y = 0.95 - Math.abs(c) * 0.05 * amp - (run ? 0.06 : 0);
  z.spine.rotation.x = run ? 0.45 : 0.18 + Math.sin(t * 0.7 + z.phase) * 0.05;
  z.spine.rotation.z = z.tilt * 0.3 + s * 0.06 * amp;
  z.neck.rotation.z = z.tilt + Math.sin(t * 1.3 + z.phase) * 0.1; z.neck.rotation.x = run ? -0.3 : -0.1;
  const reach = run ? 1.0 : z.armUp;
  const sw = run ? c * 0.9 : Math.sin(t * 1.7 + z.phase) * 0.12;
  z.aL.sh.rotation.x = -reach - sw - attack * 1.2; z.aR.sh.rotation.x = -reach + sw - attack * 1.4 * Math.max(0, Math.sin(t * 14));
  z.aL.sh.rotation.z = 0.08; z.aR.sh.rotation.z = -0.08;
  z.aL.el.rotation.x = -0.3 - attack * 0.4; z.aR.el.rotation.x = -0.25 - attack * 0.6 * Math.max(0, Math.cos(t * 14));
  if (climb) { z.spine.rotation.x = 0.9; z.aL.sh.rotation.x = -2.2; z.aR.sh.rotation.x = -2.0; z.lL.hp.rotation.x = -1.0; z.lL.kn.rotation.x = 1.4; }
}

// ---------------------------------------------------------------------------
// Third-person soldier
export function makeSoldier() {
  const g = ZG();
  const camo = std({ map: T.camo(), roughness: 0.9 });
  const vest = std({ color: 0x2a2c24, roughness: 0.8 });
  const skin = std({ color: 0xb98a6a, roughness: 0.7 });
  const dark = std({ color: 0x1a1a1a, roughness: 0.7 });
  const helmetM = std({ color: 0x3a4030, roughness: 0.75 });
  const root = new THREE.Group();
  const hips = new THREE.Group(); hips.position.y = 0.95; root.add(hips);
  const pelvis = new THREE.Mesh(g.pelvis, camo); pelvis.rotation.z = Math.PI / 2; pelvis.scale.set(1, 1.2, 0.85); hips.add(pelvis);
  const spine = new THREE.Group(); hips.add(spine);
  const torso = new THREE.Mesh(g.torso, camo); torso.position.y = 0.3; torso.scale.set(1.3, 1, 0.8); spine.add(torso);
  const vestM = new THREE.Mesh(B(0.46, 0.42, 0.34), vest); vestM.position.y = 0.36; spine.add(vestM);
  for (let i = 0; i < 3; i++) { const p = new THREE.Mesh(B(0.11, 0.13, 0.06), vest); p.position.set(-0.13 + i * 0.13, 0.26, 0.19); spine.add(p); }
  const pack = new THREE.Mesh(B(0.36, 0.4, 0.16), dark); pack.position.set(0, 0.36, -0.24); spine.add(pack);
  const neck = new THREE.Group(); neck.position.y = 0.66; spine.add(neck);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.13, 12, 10), skin); head.position.y = 0.08; neck.add(head);
  const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.155, 14, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), helmetM); helmet.position.y = 0.12; neck.add(helmet);
  const gog = new THREE.Mesh(B(0.2, 0.05, 0.05), dark); gog.position.set(0, 0.2, 0.12); neck.add(gog);
  const arm = (s) => { const sh = new THREE.Group(); sh.position.set(0.29 * s, 0.53, 0); spine.add(sh); sh.add(new THREE.Mesh(g.upper, camo)); const el = new THREE.Group(); el.position.y = -0.31; sh.add(el); el.add(new THREE.Mesh(g.fore, dark)); return { sh, el }; };
  const leg = (s) => { const hp = new THREE.Group(); hp.position.set(0.11 * s, -0.02, 0); hips.add(hp); hp.add(new THREE.Mesh(g.thigh, camo)); const kn = new THREE.Group(); kn.position.y = -0.45; hp.add(kn); const sn = new THREE.Mesh(g.shin, camo); kn.add(sn); const boot = new THREE.Mesh(B(0.12, 0.12, 0.26), dark); boot.position.set(0, -0.4, 0.04); kn.add(boot); return { hp, kn }; };
  const aL = arm(-1), aR = arm(1), lL = leg(-1), lR = leg(1);
  const hand = new THREE.Group(); hand.position.set(0.12, 0.38, 0.32); spine.add(hand); // gun mount
  root.traverse(o => { if (o.isMesh) o.castShadow = true; });
  root.rotation.y = Math.PI; // model faces +z; game forward is -z
  const wrap = new THREE.Group(); wrap.add(root);
  return { wrap, root, hips, spine, neck, aL, aR, lL, lR, hand };
}
export function animSoldier(s, t, speed, pitch, sprint) {
  const f = 2 + speed * 1.1, ph = t * f, a = Math.min(1, speed / 4);
  s.lL.hp.rotation.x = Math.sin(ph) * 0.7 * a; s.lR.hp.rotation.x = -Math.sin(ph) * 0.7 * a;
  s.lL.kn.rotation.x = Math.max(0, -Math.cos(ph)) * 1.0 * a; s.lR.kn.rotation.x = Math.max(0, Math.cos(ph)) * 1.0 * a;
  s.hips.position.y = 0.95 - Math.abs(Math.cos(ph)) * 0.04 * a;
  s.spine.rotation.x = sprint ? 0.25 : 0.05; s.neck.rotation.x = -pitch * 0.5;
  // both arms hold the rifle forward, aiming with the camera pitch
  const aim = sprint ? -0.6 : -1.45 - pitch * 0.9;
  s.aR.sh.rotation.set(aim, 0, -0.15); s.aR.el.rotation.x = -0.35;
  s.aL.sh.rotation.set(aim + 0.1, 0, 0.55); s.aL.el.rotation.x = -0.7;
  s.hand.rotation.x = sprint ? 0.9 : -pitch * 0.9; s.hand.position.y = sprint ? 0.25 : 0.38 + pitch * 0.15;
}

// ---------------------------------------------------------------------------
// Guns (forward = -z, origin = grip). Returns { group, muzzle }
const GM = () => once('gm', () => ({
  metal: std({ color: 0x232427, metalness: 0.75, roughness: 0.38 }),
  steel: std({ color: 0x8f9398, metalness: 0.9, roughness: 0.28 }),
  wood: std({ map: T.wood(), color: 0xa06a3c, roughness: 0.6 }),
  poly: std({ color: 0x1b1c1e, roughness: 0.75 }),
  olive: std({ color: 0x3d4630, roughness: 0.7 }),
  pap: std({ map: T.pap(), emissive: 0x6a1ab0, emissiveIntensity: 0.55, metalness: 0.5, roughness: 0.3 }),
  glow: new THREE.MeshBasicMaterial({ color: 0x66ff88 }),
  glowP: new THREE.MeshBasicMaterial({ color: 0xe080ff }),
}));
function makeGunOld(key, pap) {
  const m = GM(); const g = new THREE.Group();
  const M = pap ? m.pap : m.metal, Wd = pap ? m.pap : m.wood, P = pap ? m.pap : m.poly;
  const add = (geo, mat, x, y, z, rx = 0) => { const o = new THREE.Mesh(geo, mat); o.position.set(x, y, z); o.rotation.x = rx; g.add(o); return o; };
  const barrel = (len, r, z0, y = 0.06) => add(C(r, r, len, 10).rotateX(Math.PI / 2), m.steel, 0, y, z0 - len / 2);
  let mz = -0.5;
  switch (key) {
    case 'pistol': case 'brawler': {
      const big = key === 'brawler';
      add(B(0.045, 0.1, 0.17), P, 0, -0.02, 0.0, 0.25);                       // grip
      add(B(0.05, 0.055, big ? 0.3 : 0.24), big ? m.steel : M, 0, 0.055, big ? -0.1 : -0.07);
      if (big) { add(C(0.04, 0.04, 0.07, 8), m.steel, 0, 0.04, 0.0).rotation.z = Math.PI / 2; barrel(0.18, 0.018, -0.24); mz = -0.43; }
      else { add(B(0.015, 0.015, 0.02), m.steel, 0, 0.09, -0.17); mz = -0.21; }
      add(B(0.012, 0.04, 0.05), M, 0, -0.005, -0.02); break;
    }
    case 'smg': case 'ripper': case 'viper': {
      add(B(0.05, 0.1, 0.06), P, 0, -0.04, 0.04, 0.2); add(B(0.06, 0.08, 0.36), M, 0, 0.05, -0.1); add(B(0.035, 0.18, 0.05), M, 0, -0.06, -0.12, 0.15);
      add(B(0.03, 0.03, 0.22), P, 0, 0.04, 0.2); add(B(0.05, 0.07, 0.03), P, 0, 0.03, 0.31); barrel(0.12, 0.016, -0.28); add(B(0.02, 0.03, 0.04), m.steel, 0, 0.1, -0.05); mz = -0.41; break;
    }
    case 'trench': {
      add(B(0.05, 0.11, 0.07), Wd, 0, -0.04, 0.06, 0.25); add(B(0.065, 0.08, 0.3), M, 0, 0.05, -0.08); add(B(0.06, 0.09, 0.32), Wd, 0, -0.0, 0.3, -0.12);
      barrel(0.55, 0.022, -0.22, 0.075); add(C(0.028, 0.028, 0.32, 10).rotateX(Math.PI / 2), Wd, 0, 0.025, -0.42); mz = -0.78; break;
    }
    case 'widow': case 'ranger': {
      const sn = key === 'widow';
      add(B(0.05, 0.1, 0.07), Wd, 0, -0.04, 0.05, 0.25); add(B(0.06, 0.075, 0.42), M, 0, 0.05, -0.12); add(B(0.065, 0.07, 0.5), Wd, 0, 0.02, -0.22);
      add(B(0.06, 0.1, 0.34), Wd, 0, 0.0, 0.3, -0.1); barrel(sn ? 0.6 : 0.42, 0.016, -0.45, 0.065); add(B(0.03, 0.1, 0.05), M, 0, -0.06, -0.06);
      if (sn) { add(C(0.032, 0.032, 0.36, 12).rotateX(Math.PI / 2), m.metal, 0, 0.14, -0.1); add(C(0.042, 0.032, 0.06, 12).rotateX(Math.PI / 2), m.metal, 0, 0.14, -0.3); }
      mz = sn ? -1.05 : -0.87; break;
    }
    case 'kestrel': {
      add(B(0.05, 0.11, 0.06), P, 0, -0.05, 0.05, 0.25); add(B(0.065, 0.09, 0.42), m.olive === M ? M : (pap ? M : m.olive), 0, 0.05, -0.12); add(B(0.04, 0.2, 0.08), M, 0, -0.07, -0.13, 0.25);
      add(B(0.06, 0.08, 0.26), P, 0, 0.04, -0.42); add(B(0.05, 0.08, 0.28), P, 0, 0.03, 0.28); add(B(0.03, 0.05, 0.12), M, 0, 0.12, -0.05); barrel(0.14, 0.015, -0.55); mz = -0.7; break;
    }
    case 'hammer': {
      add(B(0.05, 0.11, 0.06), P, 0, -0.05, 0.05, 0.25); add(B(0.1, 0.12, 0.5), M, 0, 0.05, -0.12); add(B(0.12, 0.16, 0.14), m.olive, 0.06, -0.08, -0.12);
      add(C(0.05, 0.05, 0.4, 12).rotateX(Math.PI / 2), P, 0, 0.05, -0.55); barrel(0.25, 0.018, -0.75); add(B(0.06, 0.1, 0.28), P, 0, 0.02, 0.3); mz = -1.0; break;
    }
    case 'ion': {
      add(B(0.05, 0.11, 0.06), P, 0, -0.05, 0.05, 0.25); add(B(0.1, 0.1, 0.4), M, 0, 0.05, -0.12);
      for (let i = 0; i < 4; i++) add(new THREE.TorusGeometry(0.065, 0.015, 6, 14), m.steel, 0, 0.05, -0.12 - i * 0.09);
      add(C(0.03, 0.03, 0.3, 10).rotateX(Math.PI / 2), pap ? m.glowP : m.glow, 0, 0.05, -0.25); add(C(0.05, 0.02, 0.1, 10).rotateX(Math.PI / 2), m.steel, 0, 0.05, -0.47);
      add(new THREE.SphereGeometry(0.05, 10, 8), pap ? m.glowP : m.glow, 0, 0.13, 0.02); mz = -0.53; break;
    }
  }
  g.traverse(o => { if (o.isMesh) o.castShadow = true; });
  const muzzle = new THREE.Object3D(); muzzle.position.set(0, 0.06, mz); g.add(muzzle);
  return { group: g, muzzle };
}
// first-person arms (sleeves + gloves) holding the gun
export function makeArms() {
  const sleeve = std({ map: T.camo(), roughness: 0.9 }), glove = std({ color: 0x1c1c1c, roughness: 0.7 });
  const g = new THREE.Group();
  const r = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.32, 3, 8), sleeve); r.rotation.x = Math.PI / 2 - 0.25; r.position.set(0.03, -0.09, 0.22); g.add(r);
  const rh = new THREE.Mesh(B(0.07, 0.08, 0.1), glove); rh.position.set(0, -0.03, 0.03); g.add(rh);
  const l = new THREE.Mesh(new THREE.CapsuleGeometry(0.042, 0.36, 3, 8), sleeve); l.rotation.set(Math.PI / 2 - 0.2, 0, -0.45); l.position.set(-0.11, -0.08, 0.0); g.add(l);
  const lh = new THREE.Mesh(B(0.07, 0.07, 0.1), glove); lh.position.set(-0.02, 0.0, -0.17); g.add(lh);
  return { group: g, leftHand: lh, leftArm: l };
}

// ---------------------------------------------------------------------------
// The '68-style fastback (no badges). Forward = -z.
// merge a group's direct mesh children per material (keeps sub-groups such as wheels separate)
export function mergeChildren(parent) {
  const by = new Map();
  for (const o of [...parent.children]) { if (!o.isMesh || o.isSkinnedMesh || o.isInstancedMesh || Array.isArray(o.material)) continue; if (!by.has(o.material)) by.set(o.material, []); by.get(o.material).push(o); }
  for (const [mat, list] of by) {
    if (list.length < 2) continue;
    const geos = list.map(o => { o.updateMatrix(); let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone(); for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k); if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2)); return g.applyMatrix4(o.matrix); });
    const m = new THREE.Mesh(mergeGeometries(geos, false), mat); parent.add(m); for (const o of list) parent.remove(o);
  }
}
export function makeCar(env) {
  const g = new THREE.Group(); const inner = new THREE.Group(); inner.rotation.y = Math.PI / 2; g.add(inner);
  const paint = std({ color: 0x6e0b10, metalness: 0.6, roughness: 0.3, envMap: env, envMapIntensity: 0.9 });
  const white = std({ color: 0xece8de, metalness: 0.4, roughness: 0.35, envMap: env, envMapIntensity: 0.7 });
  const chrome = std({ color: 0xdadde0, metalness: 1, roughness: 0.15, envMap: env, envMapIntensity: 1.2 });
  const glass = std({ color: 0x0b1118, metalness: 0.9, roughness: 0.08, envMap: env, envMapIntensity: 1.3, side: THREE.DoubleSide });
  const black = std({ color: 0x111111, roughness: 0.6 });
  const tire = std({ color: 0x151515, roughness: 0.92 });
  const lamp = new THREE.MeshBasicMaterial({ color: 0xfff2c8 });
  const tail = new THREE.MeshBasicMaterial({ color: 0xff2a1a });
  const sh = new THREE.Shape();
  sh.moveTo(-2.25, 0.3); sh.lineTo(-1.82, 0.3); sh.absarc(-1.4, 0.3, 0.42, Math.PI, 0, true); sh.lineTo(0.96, 0.3); sh.absarc(1.38, 0.3, 0.42, Math.PI, 0, true);
  sh.lineTo(2.24, 0.3); sh.lineTo(2.36, 0.42); sh.lineTo(2.37, 0.66); sh.lineTo(2.22, 0.8); sh.lineTo(0.78, 0.9); sh.lineTo(-1.8, 0.94); sh.lineTo(-2.27, 0.9); sh.lineTo(-2.35, 0.62); sh.lineTo(-2.3, 0.36); sh.closePath();
  const body = new THREE.ExtrudeGeometry(sh, { depth: 1.72, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 3, curveSegments: 10 }); body.translate(0, 0, -0.86);
  inner.add(new THREE.Mesh(body, paint));
  const gh = new THREE.Shape(); gh.moveTo(0.78, 0.9); gh.lineTo(0.05, 1.3); gh.lineTo(-0.7, 1.33); gh.lineTo(-1.95, 0.95); gh.lineTo(-1.95, 0.9); gh.closePath();
  const cab = new THREE.ExtrudeGeometry(gh, { depth: 1.36, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.04, bevelSegments: 2 }); cab.translate(0, 0, -0.68);
  inner.add(new THREE.Mesh(cab, paint));
  // glass: windshield, side windows, fastback rear glass
  const pane = (pts, z, flip) => { const s = new THREE.Shape(); s.moveTo(pts[0][0], pts[0][1]); for (const p of pts.slice(1)) s.lineTo(p[0], p[1]); const m = new THREE.Mesh(new THREE.ShapeGeometry(s), glass); m.position.z = z; if (flip) m.rotation.y = Math.PI, m.scale.x = -1; inner.add(m); };
  pane([[0.66, 0.97], [0.06, 1.27], [-0.62, 1.29], [-0.95, 1.18], [-0.95, 0.97]], 0.725); pane([[0.66, 0.97], [0.06, 1.27], [-0.62, 1.29], [-0.95, 1.18], [-0.95, 0.97]], -0.725, true);
  const slab = (w, len, mid, along) => { const y = new THREE.Vector3(along[0], along[1], 0).normalize(), x = new THREE.Vector3(0, 0, -1), z = new THREE.Vector3().crossVectors(x, y); const m = new THREE.Mesh(new THREE.PlaneGeometry(w, len), glass); m.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(x, y, z)); m.position.set(mid[0] + z.x * 0.045, mid[1] + z.y * 0.045, 0); inner.add(m); };
  slab(1.24, 0.8, [0.42, 1.1], [-0.73, 0.4]);
  slab(1.22, 1.1, [-1.28, 1.15], [-0.956, -0.296]);
  // stripes
  for (const zz of [-0.15, 0.15]) {
    const st = (len, x, y, rz, w = 0.17) => { const m = new THREE.Mesh(B(len, 0.012, w), white); m.position.set(x, y, zz); m.rotation.z = rz; inner.add(m); };
    st(1.46, 1.5, 0.89, -0.062); st(0.75, -0.33, 1.375, -0.04); st(1.32, -1.32, 1.18, 0.29); st(0.32, -2.1, 0.985, 0.08);
  }
  // hood scoop, grille, lights, bumpers, side scoops
  const add = (geo, mat, x, y, z, ry = 0) => { const o = new THREE.Mesh(geo, mat); o.position.set(x, y, z); o.rotation.y = ry; inner.add(o); return o; };
  add(B(0.45, 0.07, 0.5), black, 1.25, 0.92, 0);
  add(B(0.05, 0.26, 1.4), black, 2.41, 0.58, 0);
  for (const zz of [-0.62, 0.62]) { add(C(0.09, 0.09, 0.05, 14), lamp, 2.42, 0.6, zz).rotation.z = Math.PI / 2; add(B(0.06, 0.2, 0.36), tail, -2.39, 0.66, zz * 0.95); add(C(0.035, 0.035, 0.2, 8), chrome, -2.3, 0.3, zz * 0.6).rotation.z = Math.PI / 2; add(B(0.42, 0.18, 0.04), black, -0.95, 0.66, zz > 0 ? 0.92 : -0.92); }
  add(B(0.1, 0.09, 1.86), chrome, 2.44, 0.36, 0); add(B(0.1, 0.09, 1.86), chrome, -2.4, 0.38, 0);
  // wheels
  const wheels = [];
  const tireG = C(0.34, 0.34, 0.26, 20).rotateX(Math.PI / 2), hubG = C(0.2, 0.2, 0.27, 14).rotateX(Math.PI / 2), capG = C(0.07, 0.07, 0.28, 8).rotateX(Math.PI / 2);
  for (const [x, zz] of [[1.38, 0.8], [1.38, -0.8], [-1.4, 0.8], [-1.4, -0.8]]) {
    const w = new THREE.Group(); w.position.set(x, 0.34, zz); inner.add(w);
    const spin = new THREE.Group(); w.add(spin); spin.add(new THREE.Mesh(tireG, tire)); spin.add(new THREE.Mesh(hubG, chrome)); spin.add(new THREE.Mesh(capG, black));
    for (let k = 0; k < 5; k++) { const sp = new THREE.Mesh(B(0.04, 0.3, 0.02), black); sp.rotation.z = k * Math.PI / 2.5; sp.position.z = zz > 0 ? 0.14 : -0.14; spin.add(sp); }
    wheels.push({ w, spin, front: x > 0 });
  }
  // interior shadow block + seats so the glass does not look hollow
  add(B(1.6, 0.4, 1.3), black, -0.4, 0.85, 0);
  mergeChildren(inner); for (const w of wheels) mergeChildren(w.spin);
  g.traverse(o => { if (o.isMesh) o.castShadow = true; });
  return { group: g, wheels };
}

// ---------------------------------------------------------------------------
// Mystery box
export function makeBox() {
  const g = new THREE.Group();
  const side = std({ map: T.boxSide(), roughness: 0.7 });
  const wood = std({ map: T.wood(), color: 0x6a4626, roughness: 0.75 });
  const trim = std({ color: 0x8a7a4a, metalness: 0.7, roughness: 0.4 });
  const base = new THREE.Mesh(B(1.7, 0.62, 0.8), [wood, wood, wood, wood, side, side]); base.position.y = 0.31; g.add(base);
  for (const x of [-0.82, 0.82]) { const t = new THREE.Mesh(B(0.06, 0.66, 0.84), trim); t.position.set(x, 0.33, 0); g.add(t); }
  const lid = new THREE.Group(); lid.position.set(0, 0.62, -0.4); g.add(lid);
  const lm = new THREE.Mesh(B(1.72, 0.16, 0.82), [wood, wood, wood, wood, side, side]); lm.position.set(0, 0.08, 0.41); lid.add(lm);
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.9, 40, 16, 1, true), new THREE.MeshBasicMaterial({ color: 0x5aa8ff, transparent: true, opacity: 0.16, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
  beam.position.y = 20; g.add(beam);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.glow(), color: 0x6ab0ff, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false })); glow.scale.set(3, 1.6, 1); glow.position.y = 0.8; g.add(glow);
  const gunSlot = new THREE.Group(); gunSlot.position.y = 0.75; g.add(gunSlot);
  g.traverse(o => { if (o.isMesh && o !== beam) o.castShadow = true; });
  return { group: g, lid, beam, glow, gunSlot };
}
export function makeCrate() { // empty box location marker
  const g = new THREE.Group(); const wood = std({ map: T.wood(), color: 0x5a3e24, roughness: 0.8 });
  const m = new THREE.Mesh(B(1.7, 0.62, 0.8), wood); m.position.y = 0.31; m.castShadow = true; g.add(m); return g;
}

// Perk machine
export function makePerk(name, col, sub) {
  const g = new THREE.Group();
  const face = std({ map: T.perk(name, col, sub), emissiveMap: T.perk(name, col, sub), emissive: 0xffffff, emissiveIntensity: 0.0, roughness: 0.5 });
  const bodyM = std({ color: new THREE.Color(col).multiplyScalar(0.45), roughness: 0.55, metalness: 0.3 });
  const b = new THREE.Mesh(B(1.0, 2.1, 0.8), [bodyM, bodyM, bodyM, bodyM, face, bodyM]); b.position.y = 1.05; g.add(b);
  const top = new THREE.Mesh(C(0.35, 0.45, 0.25, 12), bodyM); top.position.y = 2.22; g.add(top);
  const bulbM = new THREE.MeshBasicMaterial({ color: 0x222222 }); const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 8), bulbM); bulb.position.y = 2.42; g.add(bulb);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.glow(), color: col, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false })); glow.scale.set(2.4, 3.2, 1); glow.position.set(0, 1.2, 0.5); g.add(glow);
  g.traverse(o => { if (o.isMesh) o.castShadow = true; });
  return { group: g, face, bulbM, glow, col };
}
// Power switch on a wall panel
export function makeSwitch() {
  const g = new THREE.Group(); const m = std({ color: 0x55585a, metalness: 0.6, roughness: 0.5 });
  const p = new THREE.Mesh(B(0.7, 1.0, 0.18), m); p.position.y = 1.4; g.add(p);
  const warn = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.18), new THREE.MeshBasicMaterial({ map: T.label('POWER', '#d8b020', '#111', 256, 80) })); warn.position.set(0, 1.78, 0.095); g.add(warn);
  const lever = new THREE.Group(); lever.position.set(0, 1.3, 0.1); g.add(lever);
  const arm = new THREE.Mesh(B(0.06, 0.45, 0.06), std({ color: 0x222222 })); arm.position.y = 0.2; lever.add(arm);
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), std({ color: 0xc02020, roughness: 0.4 })); knob.position.y = 0.43; lever.add(knob);
  lever.rotation.x = 0.6;
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), new THREE.MeshBasicMaterial({ color: 0x441111 })); lamp.position.set(0.25, 1.75, 0.1); g.add(lamp);
  return { group: g, lever, lamp };
}
// The Forge (weapon upgrade machine)
export function makeForge() {
  const g = new THREE.Group(); const m = std({ color: 0x2e2a30, metalness: 0.7, roughness: 0.45 });
  const glowM = std({ color: 0x220830, emissive: 0xa040ff, emissiveIntensity: 0, roughness: 0.4 });
  const base = new THREE.Mesh(B(1.8, 1.0, 1.2), m); base.position.y = 0.5; g.add(base);
  const mid = new THREE.Mesh(B(1.4, 0.5, 0.9), glowM); mid.position.y = 1.25; g.add(mid);
  const top = new THREE.Mesh(B(1.8, 0.4, 1.2), m); top.position.y = 1.7; g.add(top);
  for (const x of [-0.75, 0.75]) { const p = new THREE.Mesh(C(0.1, 0.1, 1.4, 8), std({ color: 0x8a8a8a, metalness: 0.9, roughness: 0.3 })); p.position.set(x, 1.4, 0.45); g.add(p); }
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.3), new THREE.MeshBasicMaterial({ map: T.label('THE FORGE', '#14081c', '#c88aff', 512, 100, 'bold 60px Arial Black, Arial') })); sign.position.set(0, 2.1, 0.0); g.add(sign); sign.position.z = 0.61;
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.glow(), color: 0xa040ff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false })); glow.scale.set(3.4, 2.4, 1); glow.position.set(0, 1.25, 0.7); g.add(glow);
  const slot = new THREE.Group(); slot.position.set(0, 1.25, 0.2); g.add(slot);
  g.traverse(o => { if (o.isMesh) o.castShadow = true; });
  return { group: g, glowM, glow, slot };
}

// ---------------------------------------------------------------------------
// Build pieces (merged geometry, vertex colored, one draw each)
const BM = () => once('bm', () => ({ wood: std({ map: T.plank(), vertexColors: true, roughness: 0.85 }), metal: std({ map: T.rust(), vertexColors: true, roughness: 0.8, metalness: 0.3 }) }));
export function buildMats() { return BM(); }
export function pieceGeo(kind) {
  return once('piece' + kind, () => {
    const parts = [], metal = [];
    if (kind === 'wall') {
      for (const x of [-0.92, 0, 0.92]) parts.push(bake(B(0.16, 2.6, 0.16), { x, y: 1.3, c: 0x8a6a4a }));
      for (let k = 0; k < 6; k++) parts.push(bake(B(2.05, 0.3, 0.06), { y: 0.3 + k * 0.38, z: 0.1, rz: (Math.sin(k * 7.3) * 0.04), c: [0xd0b090, 0xb89870, 0xc8a882][k % 3] }));
      parts.push(bake(B(2.5, 0.14, 0.06), { y: 1.2, z: -0.1, rz: 0.85, c: 0x9a7a5a }));
      metal.push(bake(B(0.8, 0.9, 0.03), { x: 0.4, y: 1.4, z: 0.15, rz: 0.06, c: 0xffffff }));
      for (const x of [-0.92, 0, 0.92]) parts.push(bake(new THREE.ConeGeometry(0.1, 0.3, 6), { x, y: 2.75, c: 0x8a6a4a }));
    } else if (kind === 'door') {
      for (const x of [-0.95, 0.95]) parts.push(bake(B(0.18, 2.7, 0.18), { x, y: 1.35, c: 0x7a5a3a }));
      parts.push(bake(B(2.1, 0.2, 0.2), { y: 2.6, c: 0x7a5a3a }));
    } else if (kind === 'gate') {
      for (let k = 0; k < 7; k++) parts.push(bake(B(0.24, 2.2, 0.06), { x: 0.14 + k * 0.25, y: 1.15, c: [0xd0b090, 0xb89870, 0xc8a882][k % 3] }));
      for (const y of [0.5, 1.8]) parts.push(bake(B(1.76, 0.16, 0.06), { x: 0.88, y, z: 0.06, c: 0x9a7a5a }));
      parts.push(bake(B(2.1, 0.14, 0.06), { x: 0.88, y: 1.15, z: 0.06, rz: 0.62, c: 0x9a7a5a }));
    } else if (kind === 'spikes') {
      parts.push(bake(B(1.9, 0.12, 0.12), { y: 0.25, c: 0x6a4a2a })); parts.push(bake(B(1.9, 0.12, 0.12), { y: 0.25, z: 0.5, c: 0x6a4a2a })); parts.push(bake(B(1.9, 0.12, 0.12), { y: 0.25, z: -0.5, c: 0x6a4a2a }));
      for (let k = 0; k < 12; k++) { const x = -0.8 + (k % 6) * 0.32, zz = k < 6 ? 0.28 : -0.28; parts.push(bake(new THREE.ConeGeometry(0.06, 1.0, 5), { x, y: 0.55, z: zz, rx: k < 6 ? 0.55 : -0.55, c: 0xc8a070 })); }
      metal.push(bake(B(1.9, 0.04, 0.04), { y: 0.42, c: 0xffffff }));
    }
    return { wood: merge(parts), metal: metal.length ? merge(metal) : null };
  });
}
export { makeGun } from './guns.js';
