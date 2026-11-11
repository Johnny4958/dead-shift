// More vehicles (pickup truck, police cruiser), their driving specs, and the upgrade parts that bolt onto any of them.
import * as THREE from 'three';
import { mergeChildren } from './models.js';

const std = o => new THREE.MeshStandardMaterial(o);
const B = (x, y, z) => new THREE.BoxGeometry(x, y, z);
const C = (a, b, h, s) => new THREE.CylinderGeometry(a, b, h, s);

// grip on grass / dirt+gravel; offroad tyres raise both to near 1
export const SPECS = {
  mustang: { name: 'Mustang', wheelbase: 2.75, vmax: 31, accel: 13.5, brake: 15, revMax: 9, grip: 12, hbGrip: 1.3, r: 0.95, off: 1.35, grass: 0.62, dirt: 0.82, armor: 0, len: 4.7, wid: 1.8, roof: 1.3 },
  pickup: { name: 'Pickup truck', wheelbase: 3.1, vmax: 27, accel: 11.5, brake: 14, revMax: 9, grip: 11, hbGrip: 1.5, r: 1.0, off: 1.5, grass: 0.85, dirt: 0.95, armor: 0.2, len: 5.2, wid: 1.95, roof: 1.85 },
  cruiser: { name: 'Police cruiser', wheelbase: 2.9, vmax: 34, accel: 14.5, brake: 16, revMax: 9, grip: 13, hbGrip: 1.3, r: 0.97, off: 1.4, grass: 0.6, dirt: 0.8, armor: 0.1, len: 5.0, wid: 1.85, roof: 1.45, turX: 0.02, turLift: 0.22 },
};
export const UPGRADES = [
  { id: 'nos', name: 'NOS', cost: 2500, desc: 'Hold NOS for a 3 second boost. Refills in 12 seconds.' },
  { id: 'armor', name: 'Armor plating', cost: 2000, desc: 'Steel plates. Zombies hurt you 70% less while you drive.' },
  { id: 'tires', name: 'Off-road tires', cost: 1500, desc: 'Big knobby tires. Full speed and grip on grass and dirt.' },
  { id: 'spikes', name: 'Ram spikes', cost: 1750, desc: 'Spikes on the front. Kill zombies at any speed without slowing down.' },
  { id: 'turret', name: 'Roof turret', cost: 4000, desc: 'Auto-fires at the nearest zombie in front of you while you drive.' },
];

function wheelSet(inner, mats, pos, R, wdt, offroad) {
  const wheels = [];
  const tireG = C(R, R, wdt, 22).rotateX(Math.PI / 2), rimG = C(R * 0.6, R * 0.6, wdt + 0.005, 16).rotateX(Math.PI / 2), capG = C(R * 0.2, R * 0.2, wdt + 0.02, 10).rotateX(Math.PI / 2);
  for (const [x, zz] of pos) {
    const w = new THREE.Group(); w.position.set(x, R, zz); inner.add(w); const spin = new THREE.Group(); w.add(spin); const sd = zz > 0 ? 1 : -1;
    spin.add(new THREE.Mesh(tireG, mats.tire)); spin.add(new THREE.Mesh(rimG, mats.rim)); spin.add(new THREE.Mesh(capG, mats.chrome));
    for (let k = 0; k < 6; k++) { const a = k * Math.PI / 3; const sp = new THREE.Mesh(B(0.05, R * 0.5, 0.02), mats.rim2); sp.position.set(Math.sin(a) * R * 0.32, Math.cos(a) * R * 0.32, sd * (wdt / 2)); sp.rotation.z = -a; spin.add(sp); }
    wheels.push({ w, spin, front: x > 0 });
  }
  return wheels;
}
function bake(inner) { // bake parts into inner space and soften the upper body (tumblehome) like the Mustang
  for (const o of [...inner.children]) if (o.isMesh) { o.updateMatrix(); o.geometry = o.geometry.clone().applyMatrix4(o.matrix); o.position.set(0, 0, 0); o.rotation.set(0, 0, 0); o.scale.set(1, 1, 1); }
}

// 1980s-style full-size pickup: square cab, long bed, chrome grille, roll bar with lights
export function makePickup(env, color = 0x2c4a5e) {
  const g = new THREE.Group(); const inner = new THREE.Group(); inner.rotation.y = Math.PI / 2; g.add(inner);
  const paint = std({ color, metalness: 0.45, roughness: 0.42, envMap: env, envMapIntensity: 0.8 }), two = std({ color: 0xd8d2c4, metalness: 0.3, roughness: 0.5, envMap: env, envMapIntensity: 0.5 });
  const chrome = std({ color: 0xd8dade, metalness: 1, roughness: 0.18, envMap: env, envMapIntensity: 1.2 }), black = std({ color: 0x141414, roughness: 0.65 }), glass = std({ color: 0x0b1118, metalness: 0.9, roughness: 0.08, envMap: env, envMapIntensity: 1.3, side: THREE.DoubleSide });
  const lamp = new THREE.MeshBasicMaterial({ color: 0xfff2c8 }), tail = new THREE.MeshBasicMaterial({ color: 0xff2a1a }), rust = std({ color: 0x6a3a1e, roughness: 0.95 });
  const add = (geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) => { const o = new THREE.Mesh(geo, mat); o.position.set(x, y, z); o.rotation.set(rx, ry, rz); inner.add(o); return o; };
  const AR = 0.5;
  const sh = new THREE.Shape(); // lower body side profile, x forward
  sh.moveTo(-2.55, 0.45); sh.lineTo(-1.6 - AR, 0.45); sh.absarc(-1.6, 0.45, AR, Math.PI, 0, true); sh.lineTo(1.5 - AR, 0.45); sh.absarc(1.5, 0.45, AR, Math.PI, 0, true);
  sh.lineTo(2.5, 0.45); sh.lineTo(2.58, 0.6); sh.lineTo(2.58, 1.02); sh.lineTo(2.45, 1.1); sh.lineTo(0.9, 1.15); sh.lineTo(0.9, 1.1); sh.lineTo(-2.5, 1.12); sh.lineTo(-2.58, 1.05); sh.lineTo(-2.58, 0.5); sh.closePath();
  const body = new THREE.ExtrudeGeometry(sh, { depth: 1.84, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.04, bevelSegments: 2, curveSegments: 10 }); body.translate(0, 0, -0.92); add(body, paint, 0, 0, 0);
  const ch = new THREE.Shape(); ch.moveTo(0.92, 1.12); ch.lineTo(0.45, 1.78); ch.lineTo(-0.75, 1.8); ch.lineTo(-0.82, 1.12); ch.closePath();
  const cab = new THREE.ExtrudeGeometry(ch, { depth: 1.7, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.04, bevelSegments: 2 }); cab.translate(0, 0, -0.85); add(cab, paint, 0, 0, 0);
  add(B(1.3, 0.06, 1.82), two, -0.15, 1.83, 0); // two-tone roof cap
  // bed: hollow box (floor + walls), tailgate, a spare tyre and some junk
  add(B(1.6, 0.06, 1.7), black, -1.75, 0.9, 0);
  for (const zz of [-0.88, 0.88]) add(B(1.66, 0.04, 0.08), chrome, -1.72, 1.16, zz);
  add(C(0.36, 0.36, 0.22, 16), black, -1.5, 1.04, 0.35, Math.PI / 2, 0, 0); add(B(0.5, 0.35, 0.4), rust, -2.1, 1.08, -0.4);
  // glass
  const pane = (pts, z) => { const s = new THREE.Shape(); s.moveTo(pts[0][0], pts[0][1]); for (const p of pts.slice(1)) s.lineTo(p[0], p[1]); add(new THREE.ShapeGeometry(s), glass, 0, 0, z); };
  pane([[0.78, 1.2], [0.42, 1.7], [-0.1, 1.71], [-0.1, 1.2]], 0.9); pane([[0.78, 1.2], [0.42, 1.7], [-0.1, 1.71], [-0.1, 1.2]], -0.9);
  pane([[-0.18, 1.2], [-0.18, 1.71], [-0.68, 1.71], [-0.72, 1.2]], 0.9); pane([[-0.18, 1.2], [-0.18, 1.71], [-0.68, 1.71], [-0.72, 1.2]], -0.9);
  add(new THREE.PlaneGeometry(1.5, 0.62), glass, 0.7, 1.46, 0, 0, Math.PI / 2, 0).rotation.set(0, Math.PI / 2, 0.0); inner.children[inner.children.length - 1].rotateX(-0.65);
  add(new THREE.PlaneGeometry(1.4, 0.45), glass, -0.86, 1.48, 0, 0, -Math.PI / 2, 0);
  // front: grille, quad square lights, bumper
  add(B(0.06, 0.4, 1.4), black, 2.6, 0.82, 0); for (let k = -3; k <= 3; k++) add(B(0.03, 0.38, 0.02), chrome, 2.62, 0.82, k * 0.2); add(B(0.04, 0.04, 1.44), chrome, 2.63, 0.82, 0);
  for (const zz of [-0.78, 0.78]) { add(B(0.04, 0.2, 0.26), lamp, 2.62, 0.86, zz); add(B(0.03, 0.08, 0.24), new THREE.MeshBasicMaterial({ color: 0xffa020 }), 2.62, 0.66, zz); }
  add(B(0.16, 0.18, 2.0), chrome, 2.7, 0.52, 0);
  // rear
  add(B(0.05, 0.5, 1.7), paint, -2.6, 0.85, 0); for (const zz of [-0.84, 0.84]) add(B(0.06, 0.32, 0.12), tail, -2.62, 0.88, zz); add(B(0.14, 0.14, 1.96), chrome, -2.66, 0.52, 0);
  // sides: mirrors, handles, trim, mud flaps, step, arches
  for (const sd of [-1, 1]) {
    add(B(0.06, 0.2, 0.14), chrome, 0.75, 1.38, sd * 1.02); add(C(0.012, 0.012, 0.15, 6), chrome, 0.8, 1.3, sd * 0.96, Math.PI / 2, 0, 0);
    add(B(0.14, 0.025, 0.03), chrome, -0.05, 1.05, sd * 0.94); add(B(5.0, 0.04, 0.02), chrome, 0, 0.78, sd * 0.945);
    add(B(1.1, 0.06, 0.18), black, 0.0, 0.42, sd * 0.98); add(B(0.03, 0.3, 0.28), black, -2.2, 0.35, sd * 0.85);
    for (const wx of [1.5, -1.6]) add(new THREE.TorusGeometry(AR - 0.02, 0.04, 5, 18, Math.PI), black, wx, 0.45, sd * 0.94);
  }
  add(B(1.2, 0.36, 1.5), black, 0.0, 1.22, 0); for (const zz of [-0.4, 0.4]) add(B(0.15, 0.4, 0.48), black, -0.45, 1.4, zz, 0, 0, 0.12); // bench + dash
  bake(inner);
  const wheels = wheelSet(inner, { tire: std({ color: 0x161616, roughness: 0.92 }), rim: std({ color: 0xbfc3c8, metalness: 0.8, roughness: 0.3, envMap: env }), rim2: chrome, chrome }, [[1.5, 0.85], [1.5, -0.85], [-1.6, 0.85], [-1.6, -0.85]], 0.42, 0.3);
  mergeChildren(inner); for (const w of wheels) mergeChildren(w.spin);
  g.traverse(o => { if (o.isMesh) o.castShadow = true; });
  return { group: g, wheels, inner };
}

// late-80s police sedan: black and white, light bar that flashes while you drive
export function makeCruiser(env) {
  const g = new THREE.Group(); const inner = new THREE.Group(); inner.rotation.y = Math.PI / 2; g.add(inner);
  const blackP = std({ color: 0x0e0f12, metalness: 0.55, roughness: 0.3, envMap: env, envMapIntensity: 0.9 }), white = std({ color: 0xe8e6e0, metalness: 0.45, roughness: 0.32, envMap: env, envMapIntensity: 0.8 });
  const chrome = std({ color: 0xd8dade, metalness: 1, roughness: 0.18, envMap: env, envMapIntensity: 1.2 }), black = std({ color: 0x141414, roughness: 0.65 }), glass = std({ color: 0x0b1118, metalness: 0.9, roughness: 0.08, envMap: env, envMapIntensity: 1.3, side: THREE.DoubleSide });
  const lamp = new THREE.MeshBasicMaterial({ color: 0xfff2c8 }), tail = new THREE.MeshBasicMaterial({ color: 0xff2a1a });
  const red = new THREE.MeshBasicMaterial({ color: 0x501010 }), blue = new THREE.MeshBasicMaterial({ color: 0x101850 });
  const add = (geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) => { const o = new THREE.Mesh(geo, mat); o.position.set(x, y, z); o.rotation.set(rx, ry, rz); inner.add(o); return o; };
  const AR = 0.46;
  const prof = (top) => { const s = new THREE.Shape(); s.moveTo(-2.45, 0.32); s.lineTo(-1.5 - AR, 0.32); s.absarc(-1.5, 0.32, AR, Math.PI, 0, true); s.lineTo(1.45 - AR, 0.32); s.absarc(1.45, 0.32, AR, Math.PI, 0, true); s.lineTo(2.42, 0.32); s.lineTo(2.5, 0.45); s.lineTo(2.5, top ? 0.8 : 0.6); s.lineTo(2.3, top ? 0.86 : 0.6); s.lineTo(0.8, top ? 0.9 : 0.6); s.lineTo(-1.7, top ? 0.92 : 0.6); s.lineTo(-2.45, top ? 0.88 : 0.6); s.lineTo(-2.5, 0.6); s.lineTo(-2.5, 0.38); s.closePath(); return s; };
  // doors white (lower band at door area), rest black: body black + white door panels
  const body = new THREE.ExtrudeGeometry(prof(true), { depth: 1.7, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.05, bevelSegments: 3, curveSegments: 10 }); body.translate(0, 0, -0.85); add(body, blackP, 0, 0, 0);
  for (const sd of [-1, 1]) add(B(2.3, 0.5, 0.02), white, -0.25, 0.64, sd * 0.915);
  const ch = new THREE.Shape(); ch.moveTo(0.8, 0.9); ch.lineTo(0.15, 1.38); ch.lineTo(-1.0, 1.4); ch.lineTo(-1.6, 0.93); ch.closePath();
  const cab = new THREE.ExtrudeGeometry(ch, { depth: 1.5, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.04, bevelSegments: 2 }); cab.translate(0, 0, -0.75); add(cab, white, 0, 0, 0);
  const pane = (pts, z) => { const s = new THREE.Shape(); s.moveTo(pts[0][0], pts[0][1]); for (const p of pts.slice(1)) s.lineTo(p[0], p[1]); add(new THREE.ShapeGeometry(s), glass, 0, 0, z); };
  for (const z of [0.8, -0.8]) { pane([[0.66, 0.96], [0.14, 1.33], [-0.4, 1.34], [-0.4, 0.96]], z); pane([[-0.48, 0.96], [-0.48, 1.34], [-0.98, 1.35], [-1.4, 0.96]], z); }
  add(new THREE.PlaneGeometry(1.42, 0.7), glass, 0.5, 1.15, 0, 0, Math.PI / 2, 0).rotateX(-0.94);
  add(new THREE.PlaneGeometry(1.42, 0.62), glass, -1.33, 1.17, 0, 0, -Math.PI / 2, 0).rotateX(-0.85);
  // light bar
  add(B(0.32, 0.06, 1.3), black, -0.4, 1.44, 0); const lbR = add(B(0.26, 0.12, 0.55), red, -0.4, 1.52, 0.33), lbB = add(B(0.26, 0.12, 0.55), blue, -0.4, 1.52, -0.33);
  // push bar, grille, lights
  add(B(0.06, 0.24, 1.3), black, 2.52, 0.6, 0); for (const zz of [-0.66, 0.66]) add(B(0.04, 0.16, 0.3), lamp, 2.53, 0.62, zz);
  for (const zz of [-0.45, 0.45]) { add(B(0.08, 0.5, 0.08), black, 2.72, 0.62, zz); } add(B(0.08, 0.08, 1.0), black, 2.72, 0.85, 0); add(B(0.08, 0.08, 1.0), black, 2.72, 0.45, 0);
  add(B(0.14, 0.14, 1.86), chrome, 2.58, 0.4, 0);
  add(B(0.05, 0.3, 1.66), blackP, -2.52, 0.62, 0); for (const zz of [-0.68, 0.68]) add(B(0.05, 0.18, 0.34), tail, -2.55, 0.66, zz); add(B(0.14, 0.14, 1.86), chrome, -2.58, 0.4, 0);
  for (const sd of [-1, 1]) { add(B(0.06, 0.07, 0.12), black, 0.6, 1.0, sd * 0.92); add(B(0.14, 0.025, 0.03), chrome, -0.3, 0.84, sd * 0.93); add(B(0.4, 0.1, 0.01), new THREE.MeshBasicMaterial({ color: 0x1a2a6a }), -0.3, 0.7, sd * 0.928); for (const wx of [1.45, -1.5]) add(new THREE.TorusGeometry(AR - 0.03, 0.03, 5, 18, Math.PI), black, wx, 0.32, sd * 0.91); }
  add(B(1.4, 0.34, 1.4), black, -0.4, 0.82, 0); add(new THREE.CylinderGeometry(0.01, 0.01, 0.9, 4), black, -2.1, 1.35, 0.6);
  // keep the light bar separate (it flashes); bake the rest
  inner.remove(lbR); inner.remove(lbB); bake(inner); inner.add(lbR); inner.add(lbB);
  const wheels = wheelSet(inner, { tire: std({ color: 0x161616, roughness: 0.92 }), rim: std({ color: 0x2a2a2a, metalness: 0.5, roughness: 0.4 }), rim2: std({ color: 0x9a9a9a, metalness: 0.8, roughness: 0.3 }), chrome }, [[1.45, 0.8], [1.45, -0.8], [-1.5, 0.8], [-1.5, -0.8]], 0.34, 0.26);
  for (const o of [...inner.children]) if (o === lbR || o === lbB) inner.remove(o);
  mergeChildren(inner); inner.add(lbR); inner.add(lbB); for (const w of wheels) mergeChildren(w.spin);
  g.traverse(o => { if (o.isMesh) o.castShadow = true; });
  return { group: g, wheels, inner, bar: [red, blue] };
}

// upgrade parts: one group per part, added to the vehicle's inner group (x forward, z side). Shown only when bought.
export function makeUpgradeParts(mdl, spec, env) {
  const steel = std({ color: 0x4a4c50, metalness: 0.75, roughness: 0.5, envMap: env, envMapIntensity: 0.5 }), dark = std({ color: 0x1a1a1c, metalness: 0.6, roughness: 0.5 });
  const rivet = std({ color: 0x8a8a8a, metalness: 0.9, roughness: 0.3 }), nosM = std({ color: 0x2050c0, metalness: 0.6, roughness: 0.3, envMap: env }), spikeM = std({ color: 0xb0b4b8, metalness: 0.9, roughness: 0.25, envMap: env });
  const L = spec.len / 2, W = spec.wid / 2, H = spec.roof;
  const P = {};
  const grp = (name) => { const gg = new THREE.Group(); gg.visible = false; mdl.inner.add(gg); P[name] = gg; return gg; };
  const add = (gg, geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) => { const o = new THREE.Mesh(geo, mat); o.position.set(x, y, z); o.rotation.set(rx, ry, rz); o.castShadow = true; gg.add(o); return o; };
  { const a = grp('armor'); // side plates over the doors, grille cage, window bars
    for (const sd of [-1, 1]) { add(a, B(L * 1.3, 0.42, 0.04), steel, -0.1, 0.62, sd * (W + 0.03)); for (let k = -3; k <= 3; k++) add(a, C(0.02, 0.02, 0.02, 6), rivet, k * L * 0.18, 0.78, sd * (W + 0.055), Math.PI / 2, 0, 0);
      for (let k = 0; k < 4; k++) add(a, B(0.03, 0.4, 0.03), dark, 0.5 - k * 0.32, H - 0.25, sd * (W - 0.06)); }
    add(a, B(0.05, 0.42, W * 1.7), steel, L + 0.08, 0.66, 0); for (let k = -2; k <= 2; k++) add(a, B(0.06, 0.05, W * 1.7), dark, L + 0.11, 0.5 + k * 0.07 + 0.16, 0);
    mergeChildren(a); }
  { const s = grp('spikes'); add(s, B(0.12, 0.12, W * 2.1), dark, L + 0.2, 0.5, 0); const cone = new THREE.ConeGeometry(0.06, 0.45, 8).rotateZ(-Math.PI / 2);
    for (let k = -4; k <= 4; k++) { add(s, cone, spikeM, L + 0.45, 0.5, k * W * 0.24); if (k % 2 === 0) add(s, cone, spikeM, L + 0.4, 0.72, k * W * 0.24); } mergeChildren(s); }
  { const n = grp('nos'); for (const zz of [-0.22, 0.22]) { add(n, C(0.09, 0.09, 0.62, 12), nosM, -L + 0.9, H > 1.6 ? 1.12 : 0.98, zz, 0, 0, Math.PI / 2); add(n, C(0.03, 0.03, 0.08, 8), rivet, -L + 0.56, H > 1.6 ? 1.12 : 0.98, zz, 0, 0, Math.PI / 2); }
    for (const zz of [-0.45, 0.45]) add(n, C(0.06, 0.07, 0.3, 10), rivet, -L - 0.05, 0.3, zz, 0, 0, Math.PI / 2); mergeChildren(n); }
  { const t = grp('turret'); const tx = spec.turX ?? -0.2, ty = H + (spec.turLift || 0); if (spec.turLift) { add(t, C(0.07, 0.09, spec.turLift + 0.14, 8), dark, tx, H - 0.07 + (spec.turLift + 0.14) / 2, 0); add(t, B(0.5, 0.04, 0.1), dark, tx, ty, 0); } // cruiser: a short post lifts it clear of the light bar
    add(t, C(0.32, 0.36, 0.12, 14), dark, tx, ty + 0.08, 0); const head = new THREE.Group(); head.position.set(tx, ty + 0.26, 0); t.add(head);
    add(head, B(0.42, 0.24, 0.32), steel, 0, 0, 0); add(head, C(0.035, 0.035, 0.9, 8), dark, 0.62, 0.02, 0.07, 0, 0, Math.PI / 2); add(head, C(0.035, 0.035, 0.9, 8), dark, 0.62, 0.02, -0.07, 0, 0, Math.PI / 2); add(head, B(0.2, 0.18, 0.04), steel, 0.18, 0.06, 0.2); add(head, B(0.2, 0.18, 0.04), steel, 0.18, 0.06, -0.2);
    const flash = new THREE.Sprite(new THREE.SpriteMaterial({ color: 0xffd080, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending })); flash.scale.set(0.6, 0.6, 1); flash.position.set(1.15, 0.02, 0); head.add(flash);
    P.turretHead = head; P.turretFlash = flash; }
  // off-road tyres: fatter knobby rings around each tyre
  { P.tires = []; const R = mdl.wheels[0].w.position.y; const knob = std({ color: 0x1c1c1a, roughness: 0.98 }); const tg = new THREE.TorusGeometry(R * 0.98, 0.1, 6, 16);
    for (const w of mdl.wheels) { const o = new THREE.Mesh(tg, knob); o.visible = false; o.castShadow = true; w.spin.add(o); P.tires.push(o); }
    P.lift = { o: mdl.inner, y: R * 0.98 + 0.1 - R }; } // the bigger tyres lift the body so they sit on the ground, not in it
  return P;
}
export function showParts(P, upg) { for (const k of ['armor', 'spikes', 'nos', 'turret']) if (P[k]) P[k].visible = !!upg[k]; for (const o of P.tires) o.visible = !!upg.tires; if (P.lift) P.lift.o.position.y = upg.tires ? P.lift.y : 0; }
