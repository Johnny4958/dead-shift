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
// Zombies live in zombies.js
export { makeZombie, animZombie, warmZombies } from './zombies.js';
// shared body parts still used by the third-person soldier
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
  // 1969-70 Mustang fastback (Mach 1 style). x = forward, y = up, z = side, in `inner`.
  const g = new THREE.Group(); const inner = new THREE.Group(); inner.rotation.y = Math.PI / 2; g.add(inner);
  const paint = std({ color: 0x6e0b10, metalness: 0.6, roughness: 0.3, envMap: env, envMapIntensity: 0.9 });
  const white = std({ color: 0xece8de, metalness: 0.4, roughness: 0.35, envMap: env, envMapIntensity: 0.7 });
  const chrome = std({ color: 0xdadde0, metalness: 1, roughness: 0.15, envMap: env, envMapIntensity: 1.2 });
  const glass = std({ color: 0x0b1118, metalness: 0.9, roughness: 0.08, envMap: env, envMapIntensity: 1.3, side: THREE.DoubleSide });
  const black = std({ color: 0x111111, roughness: 0.6 });
  const tire = std({ color: 0x151515, roughness: 0.92 });
  const lamp = new THREE.MeshBasicMaterial({ color: 0xfff2c8 });
  const tail = new THREE.MeshBasicMaterial({ color: 0xff2a1a });
  const AR = 0.47; // wheel arch radius (after bevel ~0.41, tyre 0.34)
  const sh = new THREE.Shape();
  sh.moveTo(-2.22, 0.3); sh.lineTo(-1.4 - AR, 0.3); sh.absarc(-1.4, 0.3, AR, Math.PI, 0, true); sh.lineTo(1.38 - AR, 0.3); sh.absarc(1.38, 0.3, AR, Math.PI, 0, true);
  sh.lineTo(2.2, 0.3); sh.lineTo(2.3, 0.4); sh.quadraticCurveTo(2.36, 0.62, 2.3, 0.78); sh.lineTo(2.12, 0.83); sh.lineTo(0.78, 0.9); sh.lineTo(-1.8, 0.93); sh.quadraticCurveTo(-2.18, 0.95, -2.27, 0.9); sh.lineTo(-2.3, 0.62); sh.lineTo(-2.26, 0.36); sh.closePath();
  const body = new THREE.ExtrudeGeometry(sh, { depth: 1.68, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.06, bevelSegments: 3, curveSegments: 12 }); body.translate(0, 0, -0.84);
  inner.add(new THREE.Mesh(body, paint));
  const gh = new THREE.Shape(); gh.moveTo(0.78, 0.9); gh.quadraticCurveTo(0.3, 1.2, 0.02, 1.3); gh.quadraticCurveTo(-0.35, 1.36, -0.7, 1.32); gh.lineTo(-1.95, 0.96); gh.lineTo(-1.95, 0.9); gh.closePath();
  const cab = new THREE.ExtrudeGeometry(gh, { depth: 1.36, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.04, bevelSegments: 2, curveSegments: 8 }); cab.translate(0, 0, -0.68);
  inner.add(new THREE.Mesh(cab, paint));
  const add = (geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) => { const o = new THREE.Mesh(geo, mat); o.position.set(x, y, z); o.rotation.set(rx, ry, rz); inner.add(o); return o; };
  // glass: side windows, windshield, fastback rear glass (slightly inset)
  const pane = (pts, z) => { const s = new THREE.Shape(); s.moveTo(pts[0][0], pts[0][1]); for (const p of pts.slice(1)) s.lineTo(p[0], p[1]); add(new THREE.ShapeGeometry(s), glass, 0, 0, z); };
  const SW = [[0.64, 0.98], [0.3, 1.18], [0.02, 1.27], [-0.62, 1.28], [-1.05, 1.15], [-1.05, 0.98]];
  pane(SW, 0.73); pane(SW, -0.73);
  for (const zz of [-0.73, 0.73]) add(B(0.03, 0.31, 0.012), black, -0.42, 1.13, zz * 1.005); // door / quarter glass divider
  const slab = (w, len, mid, along) => { const y = new THREE.Vector3(along[0], along[1], 0).normalize(), x = new THREE.Vector3(0, 0, -1), z = new THREE.Vector3().crossVectors(x, y); const m = add(new THREE.PlaneGeometry(w, len), glass, mid[0] + z.x * 0.05, mid[1] + z.y * 0.05, 0); m.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(x, y, z)); };
  slab(1.26, 0.78, [0.42, 1.1], [-0.73, 0.4]);
  slab(1.2, 1.1, [-1.28, 1.15], [-0.956, -0.296]);
  // Mach 1 blacked-out hood centre, shaker scoop, hood pins
  add(B(1.2, 0.012, 0.9), black, 1.52, 0.905, 0, 0, 0, -0.06);
  add(B(0.5, 0.1, 0.56), black, 1.2, 0.95, 0); add(B(0.04, 0.06, 0.46), black, 1.47, 0.95, 0); add(B(0.46, 0.012, 0.6), chrome, 1.2, 1.0, 0);
  for (const zz of [-0.62, 0.62]) add(C(0.025, 0.025, 0.03, 8), chrome, 2.05, 0.86, zz);
  // grille: recessed black, chrome surround, quad headlights with bezels, chin spoiler, chrome bumper
  add(B(0.06, 0.28, 1.5), black, 2.33, 0.6, 0);
  add(B(0.03, 0.025, 1.52), chrome, 2.36, 0.75, 0); add(B(0.03, 0.025, 1.52), chrome, 2.36, 0.46, 0);
  for (let k = -3; k <= 3; k++) add(B(0.02, 0.24, 0.012), chrome, 2.35, 0.6, k * 0.1);
  for (const zz of [-0.66, -0.42, 0.42, 0.66]) { add(C(0.085, 0.085, 0.04, 14), lamp, 2.36, 0.62, zz, 0, 0, Math.PI / 2); add(new THREE.TorusGeometry(0.09, 0.014, 6, 14), chrome, 2.38, 0.62, zz, 0, Math.PI / 2); }
  add(B(0.22, 0.05, 1.6), black, 2.2, 0.27, 0);
  add(B(0.1, 0.1, 1.84), chrome, 2.42, 0.36, 0); for (const zz of [-1, 1]) add(B(0.3, 0.1, 0.06), chrome, 2.3, 0.36, zz * 0.9, 0, zz * 0.35);
  for (const zz of [-0.55, 0.55]) add(B(0.03, 0.04, 0.16), lamp, 2.47, 0.36, zz);
  // rear: black tail panel, triple-bar tail lights, pop-open gas cap, ducktail spoiler, plate, bumper, twin exhausts
  add(B(0.04, 0.3, 1.56), black, -2.33, 0.68, 0);
  for (const sd of [-1, 1]) for (let k = 0; k < 3; k++) add(B(0.05, 0.19, 0.075), tail, -2.345, 0.68, sd * (0.4 + k * 0.11));
  add(C(0.07, 0.07, 0.03, 14), chrome, -2.35, 0.68, 0, 0, 0, Math.PI / 2);
  add(B(0.26, 0.05, 1.62), paint, -2.18, 0.97, 0, 0, 0, 0.12);
  add(B(0.02, 0.15, 0.32), white, -2.37, 0.48, 0);
  add(B(0.1, 0.1, 1.8), chrome, -2.36, 0.37, 0); for (const zz of [-1, 1]) add(B(0.28, 0.1, 0.06), chrome, -2.25, 0.37, zz * 0.88, 0, -zz * 0.35);
  for (const zz of [-0.5, 0.5]) add(C(0.045, 0.045, 0.22, 10), chrome, -2.3, 0.26, zz, 0, 0, Math.PI / 2);
  // sides: rear quarter scoops, mirrors, door handles, Mach 1 rocker stripe, chrome window trim, gas door line
  for (const sd of [-1, 1]) {
    add(B(0.44, 0.17, 0.05), black, -0.88, 0.68, sd * 0.88, 0, 0, 0.12); add(B(0.46, 0.02, 0.06), chrome, -0.88, 0.78, sd * 0.88, 0, 0, 0.12);
    add(B(0.1, 0.06, 0.1), chrome, 0.58, 1.0, sd * 0.86); add(C(0.012, 0.012, 0.1, 6), chrome, 0.6, 0.95, sd * 0.84);
    add(B(0.13, 0.025, 0.03), chrome, -0.22, 0.83, sd * 0.88);
    add(B(3.1, 0.07, 0.02), white, 0.0, 0.43, sd * 0.89); add(B(3.1, 0.06, 0.02), black, 0.0, 0.34, sd * 0.89);
    add(B(1.75, 0.02, 0.025), chrome, -0.2, 0.97, sd * 0.745);
    add(B(0.012, 0.42, 0.012), black, 0.6, 0.62, sd * 0.89); add(B(0.012, 0.42, 0.012), black, -0.55, 0.62, sd * 0.89);
    // wheel-arch lips
    for (const wx of [1.38, -1.4]) add(new THREE.TorusGeometry(AR - 0.05, 0.03, 5, 18, Math.PI), black, wx, 0.3, sd * 0.88);
  }
  // interior: dash, bucket seats, steering wheel, so the glass does not look hollow
  add(B(1.5, 0.36, 1.3), black, -0.45, 0.82, 0); add(B(0.3, 0.2, 1.36), black, 0.55, 1.0, 0);
  for (const zz of [-0.34, 0.34]) add(B(0.12, 0.42, 0.44), black, -0.35, 1.12, zz, 0, 0, 0.18);
  add(new THREE.TorusGeometry(0.15, 0.02, 5, 14), black, 0.35, 1.06, 0.34, 0, Math.PI / 2 - 0.0, 0).rotation.x = 0; inner.children[inner.children.length - 1].rotation.set(0, Math.PI / 2, 0.45);
  // tumblehome: bake every part into `inner` space, then tuck the upper body and roof inward and pinch the nose
  for (const o of [...inner.children]) if (o.isMesh) { o.updateMatrix(); o.geometry = o.geometry.clone().applyMatrix4(o.matrix); o.position.set(0, 0, 0); o.rotation.set(0, 0, 0); o.quaternion.identity(); o.scale.set(1, 1, 1);
    const pa = o.geometry.attributes.position; for (let i = 0; i < pa.count; i++) { const x = pa.getX(i), y = pa.getY(i); let f = 1;
      if (y > 0.92) f *= 1 - 0.17 * Math.min(1, (y - 0.92) / 0.42); else if (y > 0.55) f *= 1 - 0.035 * (y - 0.55) / 0.37; else if (y < 0.34) f *= 1 - 0.025;
      if (x > 1.95) f *= 1 - 0.04 * Math.min(1, (x - 1.95) / 0.45); if (x < -2.05) f *= 1 - 0.025 * Math.min(1, (-2.05 - x) / 0.3);
      pa.setZ(i, pa.getZ(i) * f); } pa.needsUpdate = true; o.geometry.computeVertexNormals(); }
  // wheels: Magnum 500 style chrome five-spoke, raised white letter tyres
  const wheels = [];
  const tireG = C(0.34, 0.34, 0.27, 22).rotateX(Math.PI / 2), rimG = C(0.215, 0.215, 0.275, 18).rotateX(Math.PI / 2), capG = C(0.065, 0.065, 0.29, 10).rotateX(Math.PI / 2), wl = new THREE.TorusGeometry(0.29, 0.012, 4, 22);
  for (const [x, zz] of [[1.38, 0.8], [1.38, -0.8], [-1.4, 0.8], [-1.4, -0.8]]) {
    const w = new THREE.Group(); w.position.set(x, 0.34, zz); inner.add(w);
    const spin = new THREE.Group(); w.add(spin); const sd = zz > 0 ? 1 : -1;
    spin.add(new THREE.Mesh(tireG, tire)); spin.add(new THREE.Mesh(rimG, black)); spin.add(new THREE.Mesh(capG, chrome));
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.018, 5, 18), chrome); ring.position.z = sd * 0.14; spin.add(ring);
    const lt = new THREE.Mesh(wl, white); lt.position.z = sd * 0.137; spin.add(lt);
    for (let k = 0; k < 5; k++) { const sp = new THREE.Mesh(B(0.07, 0.17, 0.02), chrome); const a = k * Math.PI * 2 / 5; sp.position.set(Math.sin(a) * 0.11, Math.cos(a) * 0.11, sd * 0.138); sp.rotation.z = -a; spin.add(sp); }
    wheels.push({ w, spin, front: x > 0 });
  }
  mergeChildren(inner); for (const w of wheels) mergeChildren(w.spin);
  g.traverse(o => { if (o.isMesh) o.castShadow = true; });
  return { group: g, wheels, inner };
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
    const parts = [], metal = []; const PL = [0xd0b090, 0xb89870, 0xc8a882, 0xa88a68];
    const nail = (x, y, z) => metal.push(bake(C(0.022, 0.022, 0.02, 6), { x, y, z, rx: Math.PI / 2, c: 0x9a9a9a }));
    if (kind === 'wall') {
      // round log posts with chopped tops, planks with gaps and nails, a rusted sheet patch, sandbags, barbed wire
      for (const x of [-0.94, 0, 0.94]) { parts.push(bake(C(0.1, 0.12, 2.5, 8), { x, y: 1.25, c: 0x7a5a3a })); parts.push(bake(new THREE.ConeGeometry(0.1, 0.28, 8), { x, y: 2.64, c: 0x8a6a4a })); }
      for (let k = 0; k < 6; k++) { const y = 0.42 + k * 0.36, rz = Math.sin(k * 7.3) * 0.035, w = 2.0 + Math.sin(k * 3.1) * 0.06;
        parts.push(bake(B(w, 0.3, 0.05), { x: Math.sin(k * 5.7) * 0.04, y, z: 0.13, rz, c: PL[k % 4] }));
        for (const x of [-0.94, 0, 0.94]) nail(x + 0.03, y, 0.165); }
      parts.push(bake(B(2.3, 0.13, 0.05), { y: 1.25, z: 0.18, rz: 0.88, c: 0x8a6a4a }));
      metal.push(bake(B(0.85, 0.95, 0.025), { x: 0.42, y: 1.45, z: 0.2, rz: 0.06, c: 0xd8b8a0 }));
      metal.push(bake(B(0.6, 0.55, 0.025), { x: -0.55, y: 0.8, z: 0.2, rz: -0.09, c: 0xb0a090 }));
      for (let k = 0; k < 5; k++) parts.push(bake(new THREE.SphereGeometry(0.22, 7, 5), { x: -0.8 + k * 0.4, y: 0.13, z: 0.42, sx: 0.95, sy: 0.5, sz: 0.62, c: 0x8a7a58 }));
      for (let k = 0; k < 4; k++) parts.push(bake(new THREE.SphereGeometry(0.22, 7, 5), { x: -0.6 + k * 0.4, y: 0.33, z: 0.42, sx: 0.95, sy: 0.5, sz: 0.62, c: 0x7e6e50 }));
      for (let k = 0; k < 2; k++) metal.push(bake(new THREE.TorusGeometry(0.14, 0.012, 4, 10), { x: -0.7 + k * 0, y: 2.62, z: 0, sx: 1, c: 0x888888 }));
      for (let k = 0; k < 13; k++) metal.push(bake(new THREE.TorusGeometry(0.1, 0.01, 4, 8), { x: -0.9 + k * 0.15, y: 2.55, ry: Math.PI / 2, c: 0x8a8a8a }));
    } else if (kind === 'door') {
      // a heavy frame: log posts, a lintel with corner braces and steel hinge plates
      for (const x of [-0.98, 0.98]) { parts.push(bake(C(0.12, 0.14, 2.75, 8), { x, y: 1.37, c: 0x6a4a2a })); parts.push(bake(new THREE.ConeGeometry(0.12, 0.3, 8), { x, y: 2.9, c: 0x7a5a3a })); }
      parts.push(bake(B(2.3, 0.22, 0.24), { y: 2.62, c: 0x7a5a3a }));
      for (const sx of [-1, 1]) parts.push(bake(B(0.7, 0.12, 0.12), { x: sx * 0.7, y: 2.3, z: 0.06, rz: sx * 0.75, c: 0x8a6a4a }));
      for (const y of [0.55, 1.85]) metal.push(bake(B(0.12, 0.2, 0.26), { x: -0.98, y, c: 0x777777 }));
      metal.push(bake(B(0.14, 0.16, 0.26), { x: 0.98, y: 1.15, c: 0x777777 }));
      for (const x of [-0.98, 0.98]) for (const y of [0.25, 2.45]) metal.push(bake(B(0.3, 0.06, 0.3), { x, y, c: 0x5a5a5a }));
    } else if (kind === 'gate') {
      // the door leaf: planks, a Z brace, steel straps with bolts and a handle
      for (let k = 0; k < 7; k++) parts.push(bake(B(0.252, 2.25, 0.06), { x: 0.14 + k * 0.25, y: 1.15 + Math.sin(k * 4.1) * 0.03, c: PL[k % 4] }));
      for (const y of [0.45, 1.85]) parts.push(bake(B(1.76, 0.18, 0.06), { x: 0.88, y, z: 0.06, c: 0x8a6a4a }));
      parts.push(bake(B(1.75, 0.14, 0.06), { x: 0.88, y: 1.15, z: 0.06, rz: 0.82, c: 0x8a6a4a }));
      for (const y of [0.45, 1.85]) { metal.push(bake(B(0.7, 0.08, 0.02), { x: 0.35, y, z: 0.1, c: 0x666666 })); for (let k = 0; k < 3; k++) nail(0.08 + k * 0.25, y, 0.115); }
      metal.push(bake(new THREE.TorusGeometry(0.07, 0.015, 5, 10, Math.PI), { x: 1.6, y: 1.1, z: 0.12, rz: -Math.PI / 2, c: 0x555555 }));
    } else if (kind === 'spikes') {
      // cheval de frise: a log spine with sharpened stakes crossing through it, wrapped in wire
      parts.push(bake(C(0.11, 0.11, 2.0, 8), { y: 0.42, rz: Math.PI / 2, c: 0x6a4a2a }));
      for (let k = 0; k < 6; k++) { const x = -0.8 + k * 0.32, lean = 0.62;
        for (const sd of [-1, 1]) { const ry = sd * lean; const L = 1.25;
          parts.push(bake(C(0.045, 0.05, L, 6), { x, y: 0.42 + Math.cos(lean) * 0.08, z: 0, rx: ry, c: 0xb08860 }));
          for (const e of [-1, 1]) { const ty = 0.42 + e * Math.cos(ry) * L / 2, tz = e * Math.sin(ry) * L / 2; if (ty < 0.1) continue; parts.push(bake(new THREE.ConeGeometry(0.05, 0.22, 6), { x, y: ty + Math.cos(ry) * 0.1 * e, z: tz + Math.sin(ry) * 0.1 * e, rx: e > 0 ? ry : ry + Math.PI, c: 0xd8b890 })); } } }
      for (let k = 0; k < 14; k++) metal.push(bake(new THREE.TorusGeometry(0.16, 0.009, 4, 8), { x: -0.95 + k * 0.145, y: 0.45, ry: Math.PI / 2, c: 0x8a8a8a }));
      parts.push(bake(B(2.0, 0.08, 0.5), { y: 0.04, c: 0x4a3a22 }));
    }
    return { wood: merge(parts), metal: metal.length ? merge(metal) : null };
  });
}
// Snapping walls: a wall tile is a centre post plus one arm per joined side, so runs and corners meet flush at the
// tile edges. key = 'd:v,d:v' with d 0:+x 1:-x 2:+z 3:-z and v c (joined), p (joined, owns the shared edge post), e (free end).
const ARM_RY = [0, Math.PI, -Math.PI / 2, Math.PI / 2];
function wallArm(v) { return once('arm' + v, () => wallArm0(v)); }
function wallArm0(v) {
  const parts = [], metal = []; const PL = [0xd0b090, 0xb89870, 0xc8a882, 0xa88a68];
  const nail = (x, y, z) => metal.push(bake(C(0.022, 0.022, 0.02, 6), { x, y, z, rx: Math.PI / 2, c: 0x9a9a9a }));
  const len = v === 'e' ? 0.98 : 1.0; // joined arms reach the tile edge exactly
  for (let k = 0; k < 6; k++) { const y = 0.42 + k * 0.36; parts.push(bake(B(len, 0.375, 0.06), { x: len / 2, y, z: 0, c: PL[k % 4] })); for (const s of [-1, 1]) nail(0.5, y, s * 0.035); }
  parts.push(bake(C(0.075, 0.085, 2.4, 7), { x: 0.5, y: 1.2, z: -0.07, c: 0x7a5a3a }));
  if (v === 'p' || v === 'e') { const px = v === 'p' ? 1.0 : 0.9; parts.push(bake(C(0.11, 0.13, 2.5, 8), { x: px, y: 1.25, c: 0x7a5a3a })); parts.push(bake(new THREE.ConeGeometry(0.11, 0.28, 8), { x: px, y: 2.64, c: 0x8a6a4a })); }
  parts.push(bake(B(1.12, 0.12, 0.05), { x: 0.5, y: 1.25, z: -0.06, rz: 1.0, c: 0x8a6a4a }));
  metal.push(bake(B(0.6, 0.8, 0.02), { x: 0.52, y: 1.45, z: 0.045, rz: 0.05, c: 0xd8b8a0 }));
  for (const x of [0.32, 0.72]) parts.push(bake(new THREE.SphereGeometry(0.22, 7, 5), { x, y: 0.13, z: 0.3, sx: 0.9, sy: 0.5, sz: 0.62, c: 0x8a7a58 }));
  parts.push(bake(new THREE.SphereGeometry(0.22, 7, 5), { x: 0.52, y: 0.33, z: 0.3, sx: 0.9, sy: 0.5, sz: 0.62, c: 0x7e6e50 }));
  for (let k = 0; k < 7; k++) metal.push(bake(new THREE.TorusGeometry(0.1, 0.01, 4, 8), { x: 0.07 + k * 0.143, y: 2.55, ry: Math.PI / 2, c: 0x8a8a8a }));
  return { wood: merge(parts), metal: merge(metal) };
}
export function wallGeo(key) {
  return once('wall:' + key, () => {
    const wood = [bake(C(0.12, 0.14, 2.55, 8), { y: 1.27, c: 0x6e5034 }), bake(new THREE.ConeGeometry(0.12, 0.3, 8), { y: 2.7, c: 0x8a6a4a })], metal = [];
    for (const s of key.split(',')) { const [d, v] = s.split(':'); const a = wallArm(v); const w = a.wood.clone(); w.rotateY(ARM_RY[+d]); wood.push(w); const m = a.metal.clone(); m.rotateY(ARM_RY[+d]); metal.push(m); }
    return { wood: merge(wood), metal: merge(metal) };
  });
}
export { makeGun } from './guns.js';
