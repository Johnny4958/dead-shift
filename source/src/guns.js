// Gun models built from side-profile extrusions (real silhouettes, bevelled edges) plus barrels,
// sights, rails, magazines and trigger guards. Parts are merged per material, so each gun costs
// only a handful of draw calls. Forward = -z, origin = the firing hand. Returns { group, muzzle }.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { T } from './tex.js';

const std = (o) => new THREE.MeshStandardMaterial(o);
let MATS = null;
function mats() {
  if (MATS) return MATS;
  MATS = {
    metal: std({ color: 0x2b2d31, metalness: 0.7, roughness: 0.42 }),
    blued: std({ color: 0x1d2128, metalness: 0.85, roughness: 0.3 }),
    steel: std({ color: 0x9a9ea4, metalness: 0.9, roughness: 0.25 }),
    wood: std({ map: T.wood(), color: 0xa8703f, roughness: 0.55 }),
    poly: std({ color: 0x1c1d20, roughness: 0.78 }),
    olive: std({ color: 0x4a5236, roughness: 0.72 }),
    tan: std({ color: 0x8a7a5a, roughness: 0.75 }),
    rubber: std({ color: 0x0e0e0f, roughness: 0.95 }),
    brass: std({ color: 0xc8a04a, metalness: 0.9, roughness: 0.3 }),
    lens: new THREE.MeshStandardMaterial({ color: 0x0a1830, metalness: 0.2, roughness: 0.05, emissive: 0x081830, emissiveIntensity: 0.6 }),
    red: new THREE.MeshBasicMaterial({ color: 0xff2020 }),
    pap: std({ map: T.pap(), emissive: 0x6a1ab0, emissiveIntensity: 0.55, metalness: 0.5, roughness: 0.3 }),
    glow: new THREE.MeshBasicMaterial({ color: 0x66ff88 }),
    glowP: new THREE.MeshBasicMaterial({ color: 0xe080ff }),
  };
  return MATS;
}

const tmpM = new THREE.Matrix4(), tmpQ = new THREE.Quaternion(), tmpE = new THREE.Euler(), tmpV = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1);
function clean(g) {
  g = g.index ? g.toNonIndexed() : g;
  for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k);
  if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
  return g;
}

export function makeGun(key, pap) {
  const m = mats();
  const parts = new Map();
  // pick the material, swapped for the upgraded (pack-a-punch style) skin
  const mat = (k) => (pap && k !== 'steel' && k !== 'lens' && k !== 'red' && k !== 'brass' && k !== 'rubber' && k !== 'glow') ? m.pap : (k === 'glow' && pap ? m.glowP : m[k]);
  const put = (geo, k, f = 0, y = 0, x = 0, rx = 0, ry = 0, rz = 0) => {
    tmpM.compose(tmpV.set(x, y, -f), tmpQ.setFromEuler(tmpE.set(rx, ry, rz)), one); geo.applyMatrix4(tmpM);
    const M = mat(k); if (!parts.has(M)) parts.set(M, []); parts.get(M).push(clean(geo));
  };
  // side profile: pts are [forward, up] pairs; w = width; b = bevel
  const side = (pts, w, k, b = 0.004, x = 0) => {
    const s = new THREE.Shape(); s.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < pts.length; i++) s.lineTo(pts[i][0], pts[i][1]); s.closePath();
    const d = Math.max(0.002, w - 2 * b);
    const g = new THREE.ExtrudeGeometry(s, { depth: d, bevelEnabled: b > 0, bevelThickness: b, bevelSize: b, bevelSegments: 2, curveSegments: 4 });
    g.translate(0, 0, -d / 2); g.rotateY(Math.PI / 2); put(g, k, 0, 0, x);
  };
  // tube along the barrel axis from f0 to f1
  const tube = (f0, f1, r, y, k, seg = 14, r2 = r, x = 0) => put(new THREE.CylinderGeometry(r2, r, Math.abs(f1 - f0), seg).rotateX(-Math.PI / 2), k, (f0 + f1) / 2, y, x);
  const box = (f, y, w, h, l, k, x = 0, rx = 0) => put(new THREE.BoxGeometry(w, h, l), k, f, y, x, rx);
  const guard = (f, y, r = 0.022, l = 0.05) => { // trigger guard loop + trigger
    const g = new THREE.TorusGeometry(r, 0.0042, 5, 12, Math.PI); g.rotateZ(Math.PI); g.scale(l / (2 * r), 1, 1); g.rotateY(Math.PI / 2); put(g, 'metal', f, y);
    box(f + 0.004, y - 0.008, 0.006, 0.02, 0.006, 'steel', 0, 0.35);
  };
  const rail = (f0, f1, y, k = 'metal') => { box((f0 + f1) / 2, y, 0.024, 0.006, f1 - f0, k); for (let f = f0 + 0.01; f < f1; f += 0.02) box(f, y + 0.006, 0.026, 0.006, 0.009, k); };
  let mf = 0.5, my = 0.06;
  switch (key) {
    case 'pistol': { // full-size .45 auto
      side([[-0.05, 0.046], [0.165, 0.046], [0.172, 0.052], [0.172, 0.086], [0.005, 0.09], [-0.045, 0.088], [-0.054, 0.078]], 0.033, 'blued', 0.004);
      for (let i = 0; i < 6; i++) box(-0.042 + i * 0.006, 0.066, 0.035, 0.03, 0.0025, 'rubber');
      side([[-0.046, 0.047], [0.158, 0.047], [0.158, 0.032], [0.07, 0.028], [0.045, 0.022], [-0.03, 0.022], [-0.046, 0.03]], 0.029, 'metal', 0.003);
      side([[-0.045, 0.03], [0.014, 0.03], [0.0, -0.092], [-0.006, -0.104], [-0.058, -0.104], [-0.066, -0.088], [-0.053, 0.0]], 0.035, 'wood', 0.005);
      box(-0.032, -0.109, 0.033, 0.009, 0.05, 'steel', 0, 0.12);
      tube(0.165, 0.178, 0.009, 0.07, 'steel');
      box(0.155, 0.094, 0.006, 0.01, 0.012, 'metal'); box(-0.036, 0.094, 0.03, 0.012, 0.01, 'metal');
      box(-0.058, 0.08, 0.012, 0.016, 0.012, 'steel', 0, -0.4);
      box(0.02, 0.04, 0.008, 0.008, 0.02, 'steel', 0.018);
      guard(0.035, 0.022); mf = 0.18; my = 0.07; break;
    }
    case 'brawler': { // heavy revolver
      side([[-0.045, 0.03], [0.075, 0.03], [0.075, 0.094], [0.0, 0.098], [-0.03, 0.094], [-0.052, 0.074]], 0.03, 'steel', 0.004);
      put(new THREE.CylinderGeometry(0.033, 0.033, 0.064, 12).rotateX(-Math.PI / 2), 'steel', 0.035, 0.062);
      for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; put(new THREE.CylinderGeometry(0.0075, 0.0075, 0.066, 6).rotateX(-Math.PI / 2), 'rubber', 0.035, 0.062 + Math.sin(a) * 0.019, Math.cos(a) * 0.019); }
      tube(0.07, 0.27, 0.012, 0.074, 'steel', 14);
      box(0.17, 0.088, 0.013, 0.012, 0.2, 'steel'); box(0.14, 0.054, 0.016, 0.022, 0.13, 'steel');
      box(0.262, 0.1, 0.004, 0.016, 0.014, 'red'); box(-0.03, 0.1, 0.022, 0.01, 0.012, 'metal');
      box(-0.055, 0.09, 0.01, 0.014, 0.024, 'metal', 0, -0.6);
      side([[-0.046, 0.034], [0.0, 0.034], [-0.012, -0.08], [-0.024, -0.096], [-0.066, -0.096], [-0.072, -0.07], [-0.062, 0.0]], 0.037, 'wood', 0.006);
      guard(0.03, 0.025); mf = 0.275; my = 0.074; break;
    }
    case 'viper': case 'ripper': { // compact sub-machine gun
      const rip = key === 'ripper';
      side([[-0.08, 0.03], [0.2, 0.03], [0.205, 0.04], [0.205, 0.076], [0.1, 0.086], [-0.08, 0.086]], 0.05, rip ? 'poly' : 'metal', 0.006);
      tube(0.08, 0.33, 0.012, 0.09, 'metal', 10);
      side([[0.2, 0.026], [0.34, 0.032], [0.345, 0.04], [0.345, 0.074], [0.2, 0.078]], 0.058, 'poly', 0.008);
      for (let i = 0; i < 4; i++) box(0.235 + i * 0.028, 0.03, 0.06, 0.006, 0.012, 'rubber');
      tube(0.34, 0.39, 0.011, 0.056, 'steel'); tube(0.38, 0.405, 0.016, 0.056, 'metal', 10);
      side([[-0.035, 0.03], [0.02, 0.03], [0.004, -0.088], [-0.004, -0.096], [-0.046, -0.096], [-0.054, -0.08], [-0.048, 0.0]], 0.04, 'poly', 0.006);
      const L = rip ? 1.35 : 1;
      side([[0.052, 0.03], [0.092, 0.03], [0.1 + 0.03 * L, -0.1 * L], [0.12 + 0.03 * L, -0.17 * L], [0.085 + 0.03 * L, -0.18 * L], [0.07 + 0.01 * L, -0.1 * L], [0.056, 0.03]], 0.03, 'metal', 0.004);
      guard(0.03, 0.026);
      for (const xx of [-0.018, 0.018]) tube(-0.08, -0.27, 0.006, 0.066, 'steel', 8, 0.006, xx);
      side([[-0.29, -0.005], [-0.265, -0.005], [-0.265, 0.09], [-0.29, 0.096]], 0.052, 'rubber', 0.006);
      put(new THREE.CylinderGeometry(0.015, 0.015, 0.03, 10).rotateZ(Math.PI / 2), 'metal', -0.06, 0.1);
      box(0.325, 0.108, 0.004, 0.018, 0.008, 'metal', 0.012); box(0.325, 0.108, 0.004, 0.018, 0.008, 'metal', -0.012); box(0.325, 0.104, 0.003, 0.012, 0.004, 'steel');
      mf = 0.41; my = 0.056; break;
    }
    case 'trench': { // pump shotgun
      side([[-0.06, 0.025], [0.14, 0.025], [0.14, 0.086], [-0.02, 0.09], [-0.06, 0.078]], 0.05, 'blued', 0.006);
      box(0.04, 0.06, 0.004, 0.026, 0.06, 'steel', 0.026);
      tube(0.14, 0.74, 0.013, 0.074, 'blued', 14); tube(0.14, 0.64, 0.012, 0.043, 'metal', 12);
      tube(0.63, 0.66, 0.016, 0.058, 'metal', 10);
      side([[0.3, 0.02], [0.5, 0.02], [0.51, 0.035], [0.5, 0.066], [0.3, 0.066], [0.29, 0.035]], 0.054, 'wood', 0.009);
      for (let i = 0; i < 7; i++) box(0.32 + i * 0.025, 0.043, 0.058, 0.03, 0.005, 'rubber');
      side([[-0.055, 0.08], [-0.055, 0.025], [-0.025, -0.01], [-0.03, -0.075], [-0.07, -0.08], [-0.085, -0.02], [-0.42, -0.04], [-0.43, -0.035], [-0.43, 0.07], [-0.36, 0.08]], 0.044, 'wood', 0.008);
      box(-0.44, 0.015, 0.046, 0.115, 0.02, 'rubber');
      put(new THREE.SphereGeometry(0.005, 6, 5), 'steel', 0.735, 0.09);
      guard(0.02, 0.024); mf = 0.75; my = 0.074; break;
    }
    case 'ranger': case 'widow': { // bolt-action rifle / scoped sniper
      const sn = key === 'widow';
      side([[0.48, 0.062], [0.48, 0.036], [0.06, 0.026], [0.03, 0.006], [0.0, -0.07], [-0.046, -0.07], [-0.052, -0.02], [-0.1, 0.004], [-0.44, -0.035], [-0.455, -0.03], [-0.455, 0.078], [-0.1, 0.068], [-0.06, 0.062]], 0.046, sn ? 'tan' : 'wood', 0.008);
      box(-0.465, 0.022, 0.048, 0.11, 0.02, 'rubber');
      tube(-0.06, 0.18, 0.02, 0.076, 'blued', 14);
      put(new THREE.CylinderGeometry(0.005, 0.005, 0.05, 6).rotateZ(Math.PI / 2), 'steel', -0.01, 0.07, 0.035, 0, 0, -0.5); put(new THREE.SphereGeometry(0.01, 8, 6), 'steel', -0.01, 0.058, 0.056);
      const bl = sn ? 0.8 : 0.64; tube(0.18, bl, 0.012, 0.076, 'blued', 12, 0.009);
      if (sn) {
        tube(bl - 0.01, bl + 0.05, 0.016, 0.076, 'metal', 10);
        tube(-0.06, 0.18, 0.018, 0.136, 'poly', 16); tube(0.18, 0.24, 0.018, 0.136, 'poly', 16, 0.031); tube(-0.11, -0.06, 0.025, 0.136, 'poly', 16, 0.018);
        put(new THREE.CircleGeometry(0.028, 16), 'lens', 0.241, 0.136, 0, 0, Math.PI); put(new THREE.CircleGeometry(0.022, 16), 'lens', -0.111, 0.136);
        put(new THREE.CylinderGeometry(0.012, 0.012, 0.03, 10), 'metal', 0.06, 0.162); put(new THREE.CylinderGeometry(0.012, 0.012, 0.03, 10).rotateZ(Math.PI / 2), 'metal', 0.06, 0.136, 0.026);
        box(0.0, 0.108, 0.02, 0.03, 0.02, 'metal'); box(0.14, 0.108, 0.02, 0.03, 0.02, 'metal');
        for (const xx of [-0.02, 0.02]) tube(0.47, 0.6, 0.004, 0.02, 'metal', 6, 0.004, xx);
      } else {
        box(0.62, 0.094, 0.004, 0.016, 0.01, 'metal'); box(0.12, 0.096, 0.02, 0.012, 0.012, 'metal');
        tube(0.42, 0.47, 0.016, 0.076, 'metal', 10);
      }
      guard(0.0, 0.004, 0.022, 0.06); mf = bl + (sn ? 0.06 : 0.01); my = 0.076; break;
    }
    case 'kestrel': { // modern assault rifle
      side([[-0.08, 0.04], [0.16, 0.04], [0.16, 0.088], [-0.08, 0.088]], 0.044, 'olive', 0.005);
      side([[-0.065, 0.042], [0.12, 0.042], [0.12, 0.012], [0.08, 0.0], [-0.02, 0.0], [-0.065, 0.02]], 0.04, 'metal', 0.004);
      rail(-0.07, 0.42, 0.094);
      tube(0.16, 0.42, 0.031, 0.064, 'poly', 8);
      for (let i = 0; i < 5; i++) box(0.19 + i * 0.05, 0.064, 0.066, 0.012, 0.02, 'rubber');
      tube(0.42, 0.53, 0.01, 0.064, 'steel', 10); tube(0.52, 0.565, 0.015, 0.064, 'metal', 8);
      side([[0.37, 0.09], [0.385, 0.135], [0.4, 0.135], [0.41, 0.09]], 0.012, 'metal', 0.002);
      side([[0.06, 0.012], [0.108, 0.012], [0.128, -0.1], [0.152, -0.172], [0.108, -0.184], [0.088, -0.1], [0.064, 0.012]], 0.027, 'metal', 0.004);
      side([[-0.032, 0.012], [0.01, 0.012], [-0.006, -0.088], [-0.014, -0.096], [-0.05, -0.096], [-0.058, -0.08]], 0.035, 'poly', 0.006);
      guard(0.03, 0.006);
      tube(-0.08, -0.27, 0.016, 0.062, 'metal', 12);
      side([[-0.19, 0.084], [-0.36, 0.088], [-0.372, 0.08], [-0.372, -0.024], [-0.34, -0.024], [-0.2, 0.034]], 0.042, 'poly', 0.006);
      box(0.04, 0.108, 0.026, 0.012, 0.05, 'metal'); tube(0.015, 0.075, 0.019, 0.128, 'metal', 14);
      put(new THREE.CircleGeometry(0.015, 14), 'lens', 0.076, 0.128, 0, 0, Math.PI); put(new THREE.SphereGeometry(0.002, 4, 3), 'red', 0.045, 0.128);
      box(-0.075, 0.094, 0.03, 0.01, 0.014, 'metal');
      mf = 0.57; my = 0.064; break;
    }
    case 'hammer': { // belt-fed light machine gun
      side([[-0.1, 0.02], [0.22, 0.02], [0.22, 0.1], [-0.1, 0.1]], 0.07, 'metal', 0.007);
      side([[-0.06, 0.098], [0.17, 0.098], [0.15, 0.118], [-0.06, 0.118]], 0.066, 'blued', 0.004);
      rail(-0.05, 0.15, 0.124);
      box(0.06, -0.035, 0.07, 0.12, 0.14, 'olive', 0.065); box(0.06, 0.03, 0.074, 0.012, 0.144, 'metal', 0.065);
      for (let i = 0; i < 5; i++) put(new THREE.CylinderGeometry(0.006, 0.006, 0.04, 6).rotateZ(Math.PI / 2), 'brass', 0.03 + i * 0.014, 0.06 - i * 0.003, 0.05);
      tube(0.22, 0.6, 0.032, 0.062, 'poly', 12);
      for (let i = 0; i < 6; i++) { box(0.26 + i * 0.055, 0.062, 0.068, 0.014, 0.02, 'rubber'); box(0.26 + i * 0.055, 0.062, 0.014, 0.068, 0.02, 'rubber'); }
      tube(0.6, 0.75, 0.012, 0.062, 'blued', 12); tube(0.74, 0.79, 0.017, 0.062, 'metal', 8);
      { const g = new THREE.TorusGeometry(0.04, 0.006, 5, 12, Math.PI); g.rotateY(Math.PI / 2); put(g, 'metal', 0.3, 0.1); }
      for (const xx of [-0.012, 0.012]) tube(0.48, 0.72, 0.005, 0.025, 'metal', 6, 0.005, xx);
      side([[-0.034, 0.02], [0.01, 0.02], [-0.004, -0.088], [-0.012, -0.096], [-0.05, -0.096], [-0.058, -0.08]], 0.038, 'poly', 0.006);
      guard(0.025, 0.016);
      side([[-0.1, 0.092], [-0.39, 0.082], [-0.405, 0.072], [-0.405, -0.03], [-0.375, -0.03], [-0.12, 0.03]], 0.05, 'poly', 0.007);
      mf = 0.8; my = 0.062; break;
    }
    case 'ion': { // sci-fi ray gun
      side([[-0.085, 0.02], [0.2, 0.03], [0.28, 0.052], [0.2, 0.09], [-0.06, 0.102], [-0.095, 0.08]], 0.07, 'metal', 0.014);
      for (let i = 0; i < 4; i++) put(new THREE.TorusGeometry(0.06, 0.012, 8, 18), 'steel', 0.06 + i * 0.075, 0.058);
      tube(0.0, 0.33, 0.026, 0.058, 'glow', 12);
      tube(0.3, 0.37, 0.022, 0.058, 'steel', 16, 0.05);
      for (const xx of [-0.03, 0, 0.03]) side([[0.0, 0.1], [0.16, 0.096], [0.12, 0.14], [0.03, 0.135]], 0.006, 'steel', 0.0015, xx);
      put(new THREE.SphereGeometry(0.045, 14, 10), 'glow', -0.04, 0.13); put(new THREE.TorusGeometry(0.047, 0.008, 6, 16).rotateX(Math.PI / 2), 'steel', -0.04, 0.13);
      side([[-0.036, 0.024], [0.012, 0.024], [-0.004, -0.088], [-0.012, -0.096], [-0.05, -0.096], [-0.058, -0.08]], 0.04, 'poly', 0.008);
      guard(0.02, 0.02); mf = 0.37; my = 0.058; break;
    }
  }
  const group = new THREE.Group();
  for (const [M, list] of parts) { const mesh = new THREE.Mesh(mergeGeometries(list, false), M); mesh.castShadow = true; group.add(mesh); }
  const muzzle = new THREE.Object3D(); muzzle.position.set(0, my, -mf); group.add(muzzle);
  return { group, muzzle };
}
