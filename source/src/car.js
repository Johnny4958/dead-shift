// Car driving: a grip/slide model (one body, front steer, rear can break loose), handbrake drifts, burnouts,
// skid marks, tyre smoke, and collision that slides along trunks and walls instead of sticking.
import * as THREE from 'three';
import { collide, solidCar, at, tileOf, OUT, surf, idx, inb } from './map.js';
import { pushOut } from './props.js';
import { roadAt } from './proc.js';

const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
export const CAR = { wheelbase: 2.75, vmax: 31, accel: 13.5, brake: 15, revMax: 9, grip: 12, hbGrip: 1.3, r: 0.95, off: 1.35, grass: 0.62, dirt: 0.82 };
// the car you are driving: copy its specs (and off-road tyres) into CAR
export function useSpec(sp, tires) { Object.assign(CAR, sp); if (tires) { CAR.grass = Math.max(sp.grass, 0.97); CAR.dirt = 1; CAR.grip = sp.grip * 1.08; } }
function surfK(x, z) { const i = tileOf(x), j = tileOf(z); if (!inb(i, j)) return 1; const k = idx(i, j); if (at(i, j) !== OUT) return 1; const s = surf[k]; return s === 0 ? CAR.grass : s === 3 || s === 4 ? CAR.dirt : 1; }

// ---- skid marks: one ring-buffer mesh ----
const NQ = 1400;
let skid = null, skidPos = null, skidN = 0;
const lastW = [null, null];
// ---- smoke: a small sprite pool ----
const smoke = []; let smokeTex = null, smokeI = 0;
export function initCarFx(scene) {
  skidPos = new Float32Array(NQ * 18);
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(skidPos, 3).setUsage(THREE.DynamicDrawUsage));
  skid = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0x0a0a0a, transparent: true, opacity: 0.55, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }));
  skid.frustumCulled = false; skid.renderOrder = 1; scene.add(skid);
  const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
  const gr = x.createRadialGradient(32, 32, 2, 32, 32, 31); gr.addColorStop(0, 'rgba(235,235,235,0.9)'); gr.addColorStop(0.5, 'rgba(210,210,210,0.45)'); gr.addColorStop(1, 'rgba(200,200,200,0)');
  x.fillStyle = gr; x.fillRect(0, 0, 64, 64); smokeTex = new THREE.CanvasTexture(c);
  for (let n = 0; n < 28; n++) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: smokeTex, transparent: true, depthWrite: false, opacity: 0 })); s.visible = false; scene.add(s); smoke.push({ s, life: 0, max: 1, vx: 0, vy: 0, vz: 0, sz: 1 }); }
}
export function clearCarFx() { if (!skid) return; skidPos.fill(0); skid.geometry.attributes.position.needsUpdate = true; skidN = 0; lastW[0] = lastW[1] = null; for (const p of smoke) { p.life = 0; p.s.visible = false; } }
function addSkid(w, x, z, hx, hz) {
  const L = lastW[w]; if (!L) { lastW[w] = { x, z }; return; }
  const dx = x - L.x, dz = z - L.z, d = Math.hypot(dx, dz); if (d < 0.3) return; if (d > 3) { lastW[w] = { x, z }; return; }
  const nx = -dz / d * 0.13, nz = dx / d * 0.13, y = 0.016; const o = (skidN % NQ) * 18; skidN++;
  const q = [L.x - nx, y, L.z - nz, L.x + nx, y, L.z + nz, x + nx, y, z + nz, L.x - nx, y, L.z - nz, x + nx, y, z + nz, x - nx, y, z - nz];
  skidPos.set(q, o); const a = skid.geometry.attributes.position; a.needsUpdate = true; lastW[w] = { x, z };
}
function puff(x, z, v, big) {
  const p = smoke[smokeI++ % smoke.length]; p.life = p.max = 1.2 + Math.random() * 0.9; p.s.visible = true; p.s.position.set(x + (Math.random() - 0.5) * 0.4, 0.35, z + (Math.random() - 0.5) * 0.4);
  p.vx = v[0] * 0.25 + (Math.random() - 0.5) * 0.8; p.vz = v[1] * 0.25 + (Math.random() - 0.5) * 0.8; p.vy = 0.5 + Math.random() * 0.6; p.sz = big ? 1.4 : 0.9; p.s.scale.setScalar(p.sz);
}
function updSmoke(dt) {
  for (const p of smoke) { if (p.life <= 0) continue; p.life -= dt; if (p.life <= 0) { p.s.visible = false; continue; } const k = p.life / p.max;
    p.s.position.x += p.vx * dt; p.s.position.y += p.vy * dt; p.s.position.z += p.vz * dt; p.vx *= 0.97; p.vz *= 0.97; p.sz += dt * 2.2; p.s.scale.setScalar(p.sz); p.s.material.opacity = 0.55 * k * Math.min(1, (1 - k) * 8); }
}

// test the car's three body circles at (x, z, h); returns true if any touches something solid
export function carBlocked(x, z, h) {
  const fx = -Math.sin(h), fz = -Math.cos(h);
  for (const o of [CAR.off, 0, -CAR.off]) { const p = { x: x + fx * o, z: z + fz * o }; if (collide(p, CAR.r, solidCar) | pushOut(p, CAR.r)) return true; }
  return false;
}
// find a clear spot near the car (strongly prefer a road, with room around it), set it upright, stopped, facing along the road
export function roomy(x, z, h) {
  const fx = -Math.sin(h), fz = -Math.cos(h);
  for (const o of [CAR.off + 0.6, 0, -CAR.off - 0.6]) { const p = { x: x + fx * o, z: z + fz * o }; if (collide(p, CAR.r + 0.5, solidCar) | pushOut(p, CAR.r + 0.5)) return false; }
  return true;
}
const near = (h, t) => { let d = t - h; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; return h + d; };
export function unstick(car) {
  let best = null, bs = 1e9;
  for (let r = 0; r <= 24; r += 1.5) { const n = Math.max(1, Math.round(r * 2.5)); for (let a = 0; a < n; a++) {
    const ang = a / n * Math.PI * 2, x = car.x + Math.cos(ang) * r, z = car.z + Math.sin(ang) * r;
    const rd = roadAt(Math.floor(x / 2), Math.floor(z / 2));
    const hs = rd === 1 ? [Math.PI / 2, -Math.PI / 2] : rd === 2 ? [0, Math.PI] : [car.h, car.h + Math.PI / 2, car.h - Math.PI / 2, car.h + Math.PI];
    hs.sort((p, q) => Math.abs(near(car.h, p) - car.h) - Math.abs(near(car.h, q) - car.h));
    for (const h0 of hs) { const h = near(car.h, h0); if (!roomy(x, z, h)) continue; const s = r + (rd === 1 || rd === 2 ? -10 : 0); if (s < bs) { bs = s; best = { x, z, h }; } break; }
  } if (best && bs < r - 10) break; }
  if (!best) return false;
  Object.assign(car, best, { vx: 0, vz: 0, v: 0, yr: 0, stuckT: 0, steer: 0 }); lastW[0] = lastW[1] = null; return true;
}

// one physics step. ctl: { gas, brake, hb, steer(-1 left..1 right) }. returns events for sound / camera
export function stepCar(car, ctl, dt, onHit) {
  const fx = -Math.sin(car.h), fz = -Math.cos(car.h), rx = Math.cos(car.h), rz = -Math.sin(car.h);
  let vF = car.vx * fx + car.vz * fz, vS = car.vx * rx + car.vz * rz; const spd = Math.abs(vF);
  // steering: full lock at low speed, less at high speed; the wheel turns at a finite rate
  const maxA = 0.62 - 0.4 * clamp(spd / CAR.vmax, 0, 1);
  const want = -ctl.steer * maxA; car.steer += clamp(want - car.steer, -dt * 3.2, dt * 3.2);
  // longitudinal
  const burn = ctl.gas > 0.5 && ctl.brake > 0.5 && spd < 4; // brake-stand burnout
  car.launch = ctl.gas > 0.5 && vF < 6 && vF > -1 && !burn ? Math.min(0.9, (car.launch || 0) + dt) : (ctl.gas > 0.5 && vF < 12 && car.launch > 0 ? car.launch : 0);
  const spin = burn || (car.launch > 0 && car.launch < 0.75 && vF < 9); // wheelspin off the line
  const sk = surfK(car.x, car.z), nos = ctl.nos ? 1 : 0; car.surfK = sk;
  const vmax = CAR.vmax * (0.55 + 0.45 * sk) * (nos ? 1.35 : 1), acc = CAR.accel * (0.6 + 0.4 * sk) * (nos ? 2 : 1);
  let a = 0;
  if (burn) { a = -vF * 5; }
  else {
    if (ctl.gas > 0 || nos) a += vF < -0.5 ? CAR.brake * Math.max(ctl.gas, nos) : acc * Math.max(ctl.gas, nos) * (1 - Math.pow(clamp(vF / vmax, 0, 1), 2)) * (spin ? 0.75 : 1);
    if (vF > vmax) a -= (vF - vmax) * 1.2; // rough ground slows you to its own top speed
    if (ctl.brake > 0) a += vF > 0.6 ? -CAR.brake * ctl.brake : (vF > -CAR.revMax ? -7 * ctl.brake : 0);
  }
  if (ctl.hb) a -= Math.sign(vF) * Math.min(Math.abs(vF) / dt, 5.5);
  if (!ctl.gas && !ctl.brake && !ctl.hb && !nos) a -= Math.sign(vF) * Math.min(Math.abs(vF) / dt, 1.4 + spd * 0.06);
  vF += a * dt;
  // apply the new forward speed in world space (velocity does not turn with the body by itself)
  car.vx = fx * vF + rx * vS; car.vz = fz * vF + rz * vS;
  // yaw: bicycle model; the handbrake lets the back step out so the car rotates more
  const sliding = Math.abs(vS) > 3;
  let target = vF * Math.tan(car.steer) / CAR.wheelbase;
  if (ctl.hb && spd > 3) target *= 1.8; else if (sliding) target *= 1.25;
  if (burn && Math.abs(ctl.steer) > 0.2) target = ctl.steer * -1.6 * (ctl.hb ? 1.4 : 1); // donut off a burnout
  car.yr = (car.yr || 0) + (target - (car.yr || 0)) * (1 - Math.exp(-dt * (ctl.hb || sliding ? 3.5 : 9)));
  car.h += car.yr * dt;
  // tyres pull the velocity toward the new heading: strong grip normally, weak on the handbrake, eased while sliding on power
  const nfx = -Math.sin(car.h), nfz = -Math.cos(car.h), nrx = Math.cos(car.h), nrz = -Math.sin(car.h);
  const f2 = car.vx * nfx + car.vz * nfz; let s2 = car.vx * nrx + car.vz * nrz;
  let grip = (ctl.hb ? CAR.hbGrip : CAR.grip) * (0.7 + 0.3 * sk); if (Math.abs(s2) > 3 && !ctl.hb) grip = ctl.gas > 0.5 ? 2.6 : 4.5;
  const s3 = s2 * Math.exp(-grip * dt); const lost = Math.abs(s2) - Math.abs(s3);
  // grip that turns sideways speed into forward speed keeps the car moving (minus some scrub)
  const f3 = Math.sign(f2 || 1) * Math.sqrt(Math.max(0, f2 * f2 + lost * lost * 0.0)) - Math.sign(f2) * lost * 0.15;
  car.vx = nfx * f3 + nrx * s3; car.vz = nfz * f3 + nrz * s3;
  // move + collide: three circles; slide along what they touch
  car.x += car.vx * dt; car.z += car.vz * dt;
  let hitN = null, hitV = 0;
  for (let it = 0; it < 2; it++) {
    let cxs = 0, czs = 0, any = false;
    for (const o of [CAR.off, 0, -CAR.off]) {
      const px = car.x + nfx * o, pz = car.z + nfz * o; const p = { x: px, z: pz };
      const h1 = collide(p, CAR.r, solidCar), h2 = pushOut(p, CAR.r);
      if (h1 || h2) { any = true; const dx = p.x - px, dz = p.z - pz; if (Math.abs(dx) > Math.abs(cxs)) cxs = dx; if (Math.abs(dz) > Math.abs(czs)) czs = dz; if (o !== 0) car.h += (dx * nrx + dz * nrz) * (o > 0 ? -0.05 : 0.05); }
    }
    if (!any) break;
    car.x += cxs; car.z += czs; const d = Math.hypot(cxs, czs);
    if (d > 1e-5) { const nx = cxs / d, nz = czs / d; const vn = car.vx * nx + car.vz * nz; if (vn < 0) { car.vx -= 1.25 * vn * nx; car.vz -= 1.25 * vn * nz; car.vx *= 0.85; car.vz *= 0.85; if (-vn > hitV) { hitV = -vn; hitN = [nx, nz]; } } }
  }
  if (hitN && onHit) onHit(hitV);
  // effects
  const nvF = car.vx * nfx + car.vz * nfz, nvS = car.vx * nrx + car.vz * nrz;
  car.v = nvF; car.slip = Math.abs(nvS);
  const hardBrake = ctl.brake > 0.8 && nvF > 14;
  const skidding = spin || (car.slip > 3.2 && Math.abs(nvF) + car.slip > 6) || (ctl.hb && Math.abs(nvF) > 4) || hardBrake;
  const smoky = spin || car.slip > 5 || (ctl.hb && Math.abs(nvF) > 9);
  car.squeal = skidding ? clamp((spin ? 0.9 : 0) + car.slip / 10 + (ctl.hb ? 0.3 : 0) + (hardBrake ? 0.4 : 0), 0.25, 1) : 0;
  for (let w = 0; w < 2; w++) {
    const side = w ? 0.72 : -0.72; const wx = car.x - nfx * 1.25 + nrx * side, wz = car.z - nfz * 1.25 + nrz * side;
    if (skidding) addSkid(w, wx, wz); else lastW[w] = null;
    car.smokeAcc = (car.smokeAcc || 0) + (smoky ? dt : 0);
    if (smoky && car.smokeAcc > 0.05) { puff(wx, wz, [car.vx, car.vz], spin); if (w) car.smokeAcc = 0; }
  }
  updSmoke(dt);
  // stuck detector: pressing gas or reverse and going nowhere
  if ((ctl.gas > 0.5 || ctl.brake > 0.5) && !burn && Math.abs(nvF) < 0.6 && hitN) car.stuckT = (car.stuckT || 0) + dt; else if (Math.abs(nvF) > 2) car.stuckT = 0;
  return { skidding, smoky, spin };
}
export function idleCarFx(dt) { updSmoke(dt); }
