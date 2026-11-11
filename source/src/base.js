// Stage 2: base gear (generator, floodlight, workbench, bear trap, mine) and the survivors you trade with.
// Models are baked + merged like the build pieces (one wood and one metal draw each), so a base costs little to draw.
import * as THREE from 'three';
import { bake, merge, B, C, makeSoldier } from './models.js';

const cache = {};
const once = (k, f) => cache[k] || (cache[k] = f());
const Sph = (r, w = 8, h = 6) => new THREE.SphereGeometry(r, w, h);
const Tor = (r, t, a = 5, b = 12) => new THREE.TorusGeometry(r, t, a, b);

// { wood, metal } geometry for each base piece; y = 0 is the ground, centred on the tile
export function baseGeo(kind) {
  return once('base' + kind, () => {
    const w = [], m = [];
    if (kind === 'gen') {
      // a yellow portable generator in a tube frame on a pallet, with a fuel tank, engine, panel and exhaust
      for (let k = 0; k < 3; k++) w.push(bake(B(1.5, 0.08, 0.22), { y: 0.14, z: -0.42 + k * 0.42, c: 0xa88a62 }));
      for (const x of [-0.6, 0, 0.6]) w.push(bake(B(0.14, 0.1, 1.15), { x, y: 0.05, c: 0x8a6a48 }));
      for (const x of [-0.55, 0.55]) for (const z of [-0.36, 0.36]) m.push(bake(C(0.03, 0.03, 0.78, 6), { x, y: 0.57, z, c: 0x2a2a2a }));
      for (const z of [-0.36, 0.36]) { m.push(bake(C(0.03, 0.03, 1.1, 6), { y: 0.96, z, rz: Math.PI / 2, c: 0x2a2a2a })); m.push(bake(C(0.03, 0.03, 1.1, 6), { y: 0.2, z, rz: Math.PI / 2, c: 0x2a2a2a })); }
      m.push(bake(B(0.62, 0.3, 0.6), { x: -0.18, y: 0.82, c: 0xe8b420 })); // fuel tank
      m.push(bake(C(0.05, 0.05, 0.06, 8), { x: -0.18, y: 1.0, c: 0x222222 })); // cap
      m.push(bake(B(0.5, 0.42, 0.5), { x: -0.2, y: 0.43, c: 0x3a3a3a })); // engine block
      for (let k = 0; k < 5; k++) m.push(bake(B(0.52, 0.03, 0.52), { x: -0.2, y: 0.3 + k * 0.07, c: 0x555555 })); // cooling fins
      m.push(bake(B(0.4, 0.48, 0.55), { x: 0.3, y: 0.48, c: 0xd8a418 })); // alternator housing
      m.push(bake(B(0.02, 0.3, 0.4), { x: 0.51, y: 0.55, c: 0x1a1a1a })); // panel
      for (let k = 0; k < 2; k++) m.push(bake(B(0.03, 0.06, 0.06), { x: 0.53, y: 0.52, z: -0.08 + k * 0.16, c: 0xd0d0d0 })); // outlets
      m.push(bake(C(0.06, 0.06, 0.35, 8), { x: -0.5, y: 0.5, z: 0.2, rz: Math.PI / 2, c: 0x6a6a6a })); // muffler
      m.push(bake(C(0.025, 0.025, 0.12, 6), { x: -0.7, y: 0.5, z: 0.2, rz: Math.PI / 2, c: 0x333333 }));
      m.push(bake(B(0.1, 0.06, 0.1), { x: -0.5, y: 0.5, z: -0.3, c: 0x222222 })); // pull start
      // a red jerry can beside it and a cable coiled on the pallet
      m.push(bake(B(0.3, 0.42, 0.16), { x: 0.55, y: 0.39, z: 0.55, c: 0xa82418 })); m.push(bake(C(0.03, 0.03, 0.1, 6), { x: 0.62, y: 0.65, z: 0.55, rz: 0.4, c: 0xa82418 }));
      m.push(bake(Tor(0.16, 0.025, 4, 12), { x: 0.4, y: 0.22, z: -0.42, rx: Math.PI / 2, c: 0x111111 }));
    } else if (kind === 'lamp') {
      // a work floodlight on a tripod: three legs, a mast, a crossbar with two lamp heads and a cable down the leg
      for (let k = 0; k < 3; k++) { const a = k * Math.PI * 2 / 3; m.push(bake(C(0.025, 0.025, 1.4, 6), { x: Math.sin(a) * 0.32, y: 0.62, z: Math.cos(a) * 0.32, rx: Math.cos(a) * 0.5, rz: -Math.sin(a) * 0.5, c: 0xc8a020 })); }
      m.push(bake(C(0.04, 0.04, 2.3, 8), { y: 1.75, c: 0xb0b0b0 }));
      m.push(bake(B(0.9, 0.05, 0.05), { y: 2.9, c: 0x333333 }));
      for (const x of [-0.32, 0.32]) { m.push(bake(B(0.34, 0.28, 0.14), { x, y: 2.98, z: 0.04, rx: -0.3, c: 0xd8b020 })); m.push(bake(B(0.3, 0.24, 0.02), { x, y: 2.96, z: 0.12, rx: -0.3, c: 0x202020 })); }
      m.push(bake(B(0.04, 0.04, 0.3), { y: 0.06, z: 0.3, c: 0x111111 }));
    } else if (kind === 'bulbs') {
      // the glowing faces of the two lamp heads (drawn with a bright material when powered)
      for (const x of [-0.32, 0.32]) m.push(bake(B(0.27, 0.21, 0.01), { x, y: 2.95, z: 0.135, rx: -0.3 }));
    } else if (kind === 'bench') {
      // a workbench: a thick top on four legs, a lower shelf, a vise, a pegboard with tools and a hanging work light
      w.push(bake(B(1.8, 0.1, 0.8), { y: 0.9, c: 0x9a7a52 }));
      for (const x of [-0.82, 0.82]) for (const z of [-0.32, 0.32]) w.push(bake(B(0.09, 0.88, 0.09), { x, y: 0.44, z, c: 0x7a5a3a }));
      w.push(bake(B(1.7, 0.05, 0.7), { y: 0.25, c: 0x8a6a48 }));
      w.push(bake(B(1.8, 1.0, 0.04), { y: 1.5, z: -0.38, c: 0xb89870 })); // pegboard
      for (const x of [-0.85, 0.85]) w.push(bake(B(0.08, 1.1, 0.08), { x, y: 1.5, z: -0.38, c: 0x7a5a3a }));
      m.push(bake(B(0.2, 0.14, 0.18), { x: 0.72, y: 1.02, z: 0.3, c: 0x2a4a8a })); m.push(bake(C(0.015, 0.015, 0.25, 6), { x: 0.72, y: 1.02, z: 0.45, rx: Math.PI / 2, c: 0x999999 })); // vise
      m.push(bake(B(0.04, 0.32, 0.03), { x: -0.6, y: 1.55, z: -0.34, rz: 0.3, c: 0x888888 })); m.push(bake(B(0.12, 0.05, 0.04), { x: -0.64, y: 1.7, z: -0.34, c: 0x333333 })); // hammer
      m.push(bake(B(0.03, 0.34, 0.02), { x: -0.3, y: 1.5, z: -0.34, c: 0xaaaaaa })); m.push(bake(B(0.06, 0.12, 0.04), { x: -0.3, y: 1.7, z: -0.34, c: 0xa82418 })); // screwdriver
      m.push(bake(B(0.04, 0.36, 0.02), { x: 0.0, y: 1.5, z: -0.34, rz: -0.2, c: 0x9a9a9a })); // wrench
      m.push(bake(B(0.42, 0.1, 0.03), { x: 0.4, y: 1.75, z: -0.34, c: 0x777777 })); m.push(bake(B(0.42, 0.2, 0.02), { x: 0.4, y: 1.62, z: -0.35, c: 0x9a9a9a })); // saw
      m.push(bake(B(0.4, 0.18, 0.22), { x: -0.45, y: 1.04, z: 0.05, c: 0xa82418 })); // toolbox
      m.push(bake(B(0.42, 0.03, 0.04), { x: -0.45, y: 1.16, z: 0.05, c: 0x222222 }));
      for (let k = 0; k < 4; k++) m.push(bake(B(0.08 + k * 0.03, 0.04, 0.06), { x: 0.2 + k * 0.1, y: 0.97, z: 0.1 - k * 0.05, ry: k, c: 0x8a8a8a })); // scrap bits
      m.push(bake(C(0.008, 0.008, 0.5, 4), { x: 0.1, y: 2.25, z: 0.0, c: 0x111111 })); m.push(bake(C(0.06, 0.12, 0.12, 8), { x: 0.1, y: 1.95, c: 0x2a2a2a })); // hanging light
    } else if (kind === 'trap') {
      // an open bear trap: a base plate, two toothed jaws laid flat, a spring each side and a chain to a stake
      m.push(bake(C(0.12, 0.12, 0.03, 12), { y: 0.03, c: 0x5a4a3a }));
      for (const s of [-1, 1]) {
        m.push(bake(new THREE.TorusGeometry(0.3, 0.025, 4, 14, Math.PI), { y: 0.04, z: s * 0.02, rx: Math.PI / 2, rz: s > 0 ? 0 : Math.PI, c: 0x6a5a4a }));
        for (let k = 0; k < 7; k++) { const a = (k + 0.5) / 7 * Math.PI; m.push(bake(new THREE.ConeGeometry(0.025, 0.08, 4), { x: Math.cos(a) * 0.3, y: 0.06, z: s * Math.sin(a) * 0.3, rx: s * -Math.PI / 2 * 0.0, c: 0x9a9a9a })); }
        m.push(bake(B(0.42, 0.03, 0.06), { x: s * 0.42, y: 0.03, c: 0x4a3a2a }));
      }
      for (let k = 0; k < 4; k++) m.push(bake(Tor(0.035, 0.01, 4, 6), { x: 0.66 + k * 0.06, y: 0.02, ry: k % 2 ? Math.PI / 2 : 0, rx: Math.PI / 2, c: 0x7a7a7a }));
      m.push(bake(C(0.03, 0.01, 0.2, 6), { x: 0.92, y: 0.06, c: 0x5a5a5a }));
    } else if (kind === 'mine') {
      // a buried landmine: a dirt mound, an olive steel disc, a pressure plate and a red tell-tale light
      w.push(bake(Sph(0.36, 10, 5), { y: -0.02, sy: 0.2, c: 0x5a4a32 }));
      m.push(bake(C(0.22, 0.24, 0.07, 14), { y: 0.06, c: 0x4a5236 }));
      m.push(bake(C(0.1, 0.1, 0.03, 12), { y: 0.11, c: 0x3a4028 }));
      for (let k = 0; k < 6; k++) { const a = k / 6 * Math.PI * 2; m.push(bake(C(0.015, 0.015, 0.02, 6), { x: Math.cos(a) * 0.17, y: 0.1, z: Math.sin(a) * 0.17, c: 0x2a2a2a })); }
    } else if (kind === 'camp') {
      // a survivor's camp: a tarp lean-to, crates of goods, a barrel fire and sandbags
      w.push(bake(B(2.4, 0.04, 1.8), { x: 0, y: 1.55, z: -0.9, rx: 0.45, c: 0x3a5a7a })); // tarp
      for (const x of [-1.15, 1.15]) w.push(bake(C(0.05, 0.05, 2.0, 6), { x, y: 1.0, z: -0.15, c: 0x6a4a2a }));
      for (const [x, z, s] of [[-0.9, -1.1, 0.6], [-0.3, -1.3, 0.55], [-0.6, -1.2, 0.45]]) w.push(bake(B(s, s, s), { x, y: s / 2 + (z < -1.25 ? 0 : 0), z, ry: x, c: 0x8a6a42 }));
      w.push(bake(B(0.45, 0.45, 0.45), { x: -0.6, y: 0.82, z: -1.2, ry: 0.4, c: 0x9a7a52 }));
      for (let k = 0; k < 6; k++) w.push(bake(Sph(0.22, 7, 5), { x: -1.1 + k * 0.42, y: 0.13, z: 0.95, sx: 0.95, sy: 0.5, sz: 0.62, c: 0x8a7a58 }));
      m.push(bake(C(0.3, 0.3, 0.85, 12), { x: 1.0, y: 0.42, z: 0.2, c: 0x5a3a2a })); // burn barrel
      for (const y of [0.15, 0.7]) m.push(bake(Tor(0.305, 0.02, 4, 14), { x: 1.0, y, z: 0.2, rx: Math.PI / 2, c: 0x3a2a1a }));
      m.push(bake(B(0.6, 0.04, 0.3), { x: 0.2, y: 0.82, z: -1.25, c: 0x2a2a2a })); // a radio on the crates
      m.push(bake(B(0.3, 0.18, 0.12), { x: 0.2, y: 0.93, z: -1.25, c: 0x3a3a3a }));
    }
    return { wood: w.length ? merge(w) : null, metal: m.length ? merge(m) : null };
  });
}

// One survivor: the soldier rig, re-dressed in civilian colours, standing at their camp.
export function makeSurvivor(look) {
  const s = makeSoldier();
  const std = (o) => new THREE.MeshStandardMaterial(o);
  const shirt = std({ color: look.shirt, roughness: 0.9 }), pants = std({ color: look.pants, roughness: 0.9 }), hat = std({ color: look.hat, roughness: 0.85 });
  const skin = std({ color: look.skin, roughness: 0.7 });
  s.root.traverse(o => { if (!o.isMesh || !o.material) return; const mt = o.material;
    if (mt.map) o.material = shirt; else if (mt.color?.getHex() === 0x3a4030) o.material = hat; else if (mt.color?.getHex() === 0xb98a6a) o.material = skin; });
  for (const c of s.hips.children) if (c !== s.spine) c.traverse(o => { if (o.isMesh && o.material === shirt) o.material = pants; }); // legs and pelvis
  return s;
}

export const TRADERS = [
  { id: 'dale', name: 'Dale', where: 'Lockwood, behind the chop shop', x: 150, z: 70,
    look: { shirt: 0x8a2a22, pants: 0x2a3550, hat: 0x6a5032, skin: 0xc49a78 },
    hello: ["Easy now. I don't bite, they do.", 'Got scrap? I got what keeps you breathing.', "Keep that noise down, they hear everything."] },
  { id: 'marisol', name: 'Marisol', where: 'the Route 9 truck stop', x: 1316, z: 84,
    look: { shirt: 0x3a6a4a, pants: 0x3a3a3a, hat: 0x222222, skin: 0x9a6a48 },
    hello: ["Truckers left a lot behind. I sell what's useful.", "You came all this way on foot? Brave or dumb.", 'Trade fair and you can come back.'] },
  { id: 'pastor', name: 'Pastor Hale', where: 'Ashford, by the church', x: 1638, z: 25,
    look: { shirt: 0x1a1a1a, pants: 0x1a1a1a, hat: 0x2a2a2a, skin: 0xd8b090 },
    hello: ['They said evac at the church. Nobody came.', 'Bless you for staying alive. Now, what do you need?', 'I traded my faith for shotgun shells. Mostly.'] },
];

// what every trader sells (cost in points), plus selling scrap
export const WARES = [
  { id: 'sell', name: 'Sell 10 scrap', desc: 'Get 800 points for 10 scrap', cost: 0, scrap: 10 },
  { id: 'trap', name: 'Bear trap', desc: 'Holds a zombie in place and hurts it', cost: 700 },
  { id: 'mine', name: 'Landmine', desc: 'Blows up the first zombie to step near it', cost: 1100 },
  { id: 'nades', name: '2 grenades', desc: 'Up to 4 carried', cost: 500 },
  { id: 'ammo', name: 'Ammo for both guns', desc: 'Fills both guns all the way', cost: 900 },
];
// what the workbench makes (cost in scrap)
export const RECIPES = [
  { id: 'trap', name: 'Bear trap', desc: 'Holds a zombie for about 4 seconds, 3 uses', scrap: 4 },
  { id: 'mine', name: 'Landmine', desc: 'Big blast when a zombie steps near it', scrap: 6 },
  { id: 'nades', name: '2 grenades', desc: 'Up to 4 carried', scrap: 4 },
  { id: 'ammo', name: 'Ammo for both guns', desc: 'Fills both guns all the way', scrap: 5 },
];
