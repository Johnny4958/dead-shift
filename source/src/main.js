// Dead Shift: core game loop, zombies, rounds, weapons, buying, building, car
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { inp, took, endFrame, setupInput, setDevice, pollKeyboard, pollGamepad, rumble, touchSprint } from './input.js';
import { initAudio, setVolume, sfx, setEngine } from './audio.js';
import { S, GW, GH, OUT, FLOOR, WIN, DOOR, BWALL, BDOOR, SPIKE, grid, zone, owner, idx, inb, tileOf, cx, doors, windows, openZones, buildMap, solidPlayer, solidZombie, solidCar, blocksBullet, collide, gridRay, dist, flow, lotSpawns } from './map.js';
import { makeZombie, animZombie, makeSoldier, animSoldier, makeGun as gunModel, makeArms, buildMats, pieceGeo } from './models.js';
import { T, setAniso } from './tex.js';
import { W, BOX_POOL, PAP_NAMES, makeGun } from './weapons.js';
import { clamp, lerp, R, pick, angDiff, $ } from './util.js';
import { buildWorld } from './world.js';

// ---------------- settings ----------------
const SET = Object.assign({ q: 'auto', sens: 1, fov: 75, vol: 0.8, inv: 0, fps: 0 }, JSON.parse(localStorage.getItem('ds_set') || '{}'));
const saveSet = () => localStorage.setItem('ds_set', JSON.stringify(SET));
const isTouch = matchMedia('(pointer:coarse)').matches || 'ontouchstart' in window;
if (isTouch) setDevice('touch');
const qual = () => SET.q === 'auto' ? (isTouch ? 'low' : 'medium') : SET.q;

// ---------------- renderer / scene ----------------
const canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: !isTouch, powerPreference: 'high-performance' });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.4;
renderer.autoClear = false;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0d16);
scene.fog = new THREE.FogExp2(0x0a0d16, 0.024);
const pmrem = new THREE.PMREMGenerator(renderer);
const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
const camera = new THREE.PerspectiveCamera(75, 1, 0.05, 300); camera.rotation.order = 'YXZ';
const vmScene = new THREE.Scene(); const vmCam = new THREE.PerspectiveCamera(60, 1, 0.01, 10);
vmScene.add(new THREE.HemisphereLight(0xb0b8d0, 0x302820, 1.4)); const vmDir = new THREE.DirectionalLight(0xffe0c0, 1.2); vmDir.position.set(1, 2, 1); vmScene.add(vmDir);

buildMap();
const WD = buildWorld(scene, env, qual());
// night, but readable: lift the ambient and moon so the lot is visible on phones
WD.hemi.intensity = 1.3; WD.moonL.intensity = 1.2; scene.environment = env; scene.environmentIntensity = 0.22;
let pixelScale = 1;
function applyQuality() {
  const q = qual();
  const dpr = Math.min(devicePixelRatio || 1, q === 'high' ? 2 : q === 'medium' ? 1.5 : 1.25);
  renderer.setPixelRatio(dpr * pixelScale);
  renderer.shadowMap.enabled = q !== 'low';
  WD.moonL.castShadow = q !== 'low';
  if (q !== 'low') { const s = q === 'high' ? 2048 : 1024; WD.moonL.shadow.mapSize.set(s, s); const c = WD.moonL.shadow.camera; c.left = c.bottom = -30; c.right = c.top = 30; c.near = 1; c.far = 250; c.updateProjectionMatrix(); }
  setAniso(q === 'low' ? 2 : q === 'medium' ? 4 : 8);
  $('qInfo').textContent = 'Graphics now: ' + q.toUpperCase() + (SET.q === 'auto' ? ' (auto picks LOW on phones, MED on computers)' : '');
}
function resize() {
  const w = innerWidth, h = innerHeight; renderer.setSize(w, h, false);
  canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
  camera.aspect = vmCam.aspect = w / h; baseFov();
  vmCam.updateProjectionMatrix();
}
function baseFov() { const a = camera.aspect; camera.userData.fov = a < 1 ? Math.min(100, SET.fov * 1.3) : SET.fov; }
addEventListener('resize', resize);

// ---------------- helpers ----------------
const fx = []; // short lived sprites
function spriteFx(map, color, x, y, z, s, life, opts = {}) {
  const m = new THREE.SpriteMaterial({ map, color, transparent: true, depthWrite: false, blending: opts.add ? THREE.AdditiveBlending : THREE.NormalBlending, opacity: opts.op ?? 1 });
  const sp = new THREE.Sprite(m); sp.position.set(x, y, z); sp.scale.set(s, s, 1); scene.add(sp);
  fx.push({ sp, life, t: 0, grow: opts.grow || 0, vy: opts.vy || 0, op: opts.op ?? 1 }); return sp;
}
function updFx(dt) {
  for (let i = fx.length - 1; i >= 0; i--) { const f = fx[i]; f.t += dt; const k = f.t / f.life; f.sp.position.y += f.vy * dt; const s = f.sp.scale.x + f.grow * dt; f.sp.scale.set(s, s, 1); f.sp.material.opacity = f.op * (1 - k); if (k >= 1) { scene.remove(f.sp); f.sp.material.dispose(); fx.splice(i, 1); } }
}
let toastT = 0; function toast(msg) { const t = $('toast'); t.textContent = msg; t.classList.add('show'); toastT = 2.6; }
let centerT = 0; function center(html, t = 3) { const c = $('center'); c.innerHTML = html; c.classList.add('show'); centerT = t; }
const keyName = a => inp.device === 'pad' ? ({ use: 'SQUARE', build: 'CIRCLE' }[a] || a) : inp.device === 'touch' ? ({ use: 'USE', build: 'BUILD' }[a] || a) : ({ use: 'F', build: 'B' }[a] || a);
const V3 = new THREE.Vector3(), V3b = new THREE.Vector3();

// ---------------- game state ----------------
const G = { state: 'title', t: 0, round: 0, toSpawn: 0, spawnT: 0, between: false, betweenT: 0, kills: 0, heads: 0, points: 0, power: false, flowT: 0, flowDirty: true, lastFlowK: -1, insta: 0, dbl: 0, pupsRound: 0, repairPts: 0, god: false, mapDirty: true };
const P = { x: 0, z: 0, y: 0, vy: 0, yaw: 0, pitch: 0, hp: 100, maxHp: 100, lastHit: -9, guns: [], cur: 0, reloadT: 0, fireT: 0, knifeT: 0, swapT: 0, nades: 2, perks: new Set(), view: 'fp', bob: 0, ads: 0, recoil: 0, repT: 0, driving: false, semi: false, heartT: 0, speed: 0 };
const zombies = []; const pups = []; const gases = []; const nades = []; const pieces = [];
const spawns = lotSpawns.filter(([i, j]) => grid[idx(i, j)] === OUT);
const startPos = { x: cx(21) + 1, z: cx(25) + 1 };

// viewmodel
const vm = new THREE.Group(); vmScene.add(vm); const arms = makeArms(); vm.add(arms.group); let vmGun = null;
function setVmGun() { if (vmGun) vm.remove(vmGun.group); const g = P.guns[P.cur]; vmGun = g ? gunModel(g.key, g.pap) : null; if (vmGun) vm.add(vmGun.group); if (soldierGun) soldier.hand.remove(soldierGun.group); soldierGun = g ? gunModel(g.key, g.pap) : null; if (soldierGun) soldier.hand.add(soldierGun.group); updHud(); }
const soldier = makeSoldier(); scene.add(soldier.wrap); soldier.wrap.visible = false; let soldierGun = null;

// bodies stay on the ground this long before sinking away; capped so big rounds stay smooth
const CORPSE_T = isTouch ? 9 : 14, MAX_CORPSES = isTouch ? 8 : 14;
// ---------------- light pool ----------------
const lpTmp = [];
function updLights(dt) {
  const px = camera.position.x, pz = camera.position.z, S = WD.lightSrc, pool = WD.lightPool;
  lpTmp.length = 0; for (const s of S) { s.d = Math.hypot(s.x - px, s.z - pz); lpTmp.push(s); }
  lpTmp.sort((a, b) => a.d - b.d); const want = lpTmp.slice(0, pool.length);
  for (const sl of pool) { if (sl.src && !want.includes(sl.src)) { sl.w -= dt * 3; if (sl.w <= 0) { sl.w = 0; sl.src = null; } } }
  for (const s of want) if (!pool.some(sl => sl.src === s)) { const free = pool.find(sl => !sl.src); if (free) { free.src = s; free.w = 0; const L = free.light; L.color.setHex(s.col); L.distance = s.dist; L.decay = s.decay; L.position.set(s.x, s.y, s.z); } }
  for (const sl of pool) {
    const s = sl.src, L = sl.light; if (!s) { L.intensity = 0; continue; }
    if (want.includes(s)) sl.w = Math.min(1, sl.w + dt * 3);
    const k = s.kind === 'fire' ? (9 + Math.sin(G.t * 11 + s.i * 3) * 1.5 + R()) / 10 : 1 - (R() < s.flick * 0.05 ? 0.8 : 0);
    L.intensity = s.base * k * sl.w;
  }
}

// ---------------- HUD ----------------
let shownPts = -1;
function addPts(n, neg) {
  if (!neg && G.dbl > 0) n *= 2; G.points += neg ? -n : n;
  const p = document.createElement('div'); p.className = 'pop' + (neg ? ' neg' : ''); p.textContent = (neg ? '-' : '+') + n; p.style.bottom = (20 + R() * 30) + 'px'; $('points').appendChild(p); setTimeout(() => p.remove(), 1000);
}
function drawRound() {
  const r = G.round, el = $('round');
  if (r <= 5) { let h = '<span class="tally">'; for (let i = 0; i < Math.min(r, 4); i++) h += '<i></i>'; if (r === 5) h += '<i class="x"></i>'; el.innerHTML = h + '</span>'; } else el.textContent = r;
}
function updHud() {
  if (shownPts !== G.points) { $('pts').textContent = G.points; shownPts = G.points; }
  const g = P.guns[P.cur];
  if (g) { $('gunName').textContent = g.name; $('gunName').className = g.pap ? 'pap' : ''; $('clip').innerHTML = g.clip + '<small> / ' + g.reserve + '</small>'; $('clip').className = g.clip <= g.mag * 0.25 ? 'low' : ''; }
  $('nades').textContent = 'Grenades: ' + P.nades;
  $('perks').innerHTML = [...P.perks].map(k => { const p = WD.perks.find(q => q.key === k); return `<b style="background:${p.col};color:${p.col}"><span style="color:#fff">${p.name[0]}</span></b>`; }).join('');
  $('powerups').innerHTML = (G.insta > 0 ? `<div class="${G.insta < 5 ? 'blink' : ''}">INSTA-KILL<br>${Math.ceil(G.insta)}</div>` : '') + (G.dbl > 0 ? `<div class="${G.dbl < 5 ? 'blink' : ''}">DOUBLE POINTS<br>${Math.ceil(G.dbl)}</div>` : '');
  const left = G.toSpawn + zombies.filter(z => !z.dead).length; $('zcount').textContent = G.between ? 'Next round soon' : 'Zombies left: ' + left;
}
// minimap
const mmC = $('minimap'), mm = mmC.getContext('2d'); const mapImg = document.createElement('canvas'); const PPM = 3.6;
function drawMapImg() {
  mapImg.width = GW * S * PPM; mapImg.height = GH * S * PPM; const x = mapImg.getContext('2d');
  for (let j = 0; j < GH; j++) for (let i = 0; i < GW; i++) { const t = grid[idx(i, j)]; x.fillStyle = t === OUT ? '#20261c' : t === FLOOR ? (openZones.has(zone[idx(i, j)]) ? '#6a6458' : '#3a3630') : t === WIN ? '#c09040' : t === DOOR ? '#d0b050' : t === BWALL || t === BDOOR ? '#a07040' : t === SPIKE ? '#805030' : t === 6 ? '#2c3028' : '#9a9a9a'; x.fillRect(i * S * PPM, j * S * PPM, S * PPM + 0.5, S * PPM + 0.5); }
  G.mapDirty = false;
}
function drawMinimap() {
  if (G.mapDirty) drawMapImg();
  const w = mmC.width, px = P.driving ? car.x : P.x, pz = P.driving ? car.z : P.z, yaw = P.driving ? car.h : P.yaw;
  mm.clearRect(0, 0, w, w); mm.save(); mm.translate(w / 2, w / 2); mm.rotate(yaw); mm.drawImage(mapImg, -px * PPM, -pz * PPM);
  mm.fillStyle = '#ff3030'; for (const z of zombies) if (!z.dead) { mm.beginPath(); mm.arc((z.x - px) * PPM, (z.z - pz) * PPM, 4, 0, 7); mm.fill(); }
  mm.fillStyle = '#5ab0ff'; const b = WD.boxSpots[box.spot].pos; mm.fillRect((b.x - px) * PPM - 5, (b.z - pz) * PPM - 5, 10, 10);
  mm.fillStyle = '#ffd040'; mm.fillRect((car.x - px) * PPM - 4, (car.z - pz) * PPM - 7, 8, 14);
  mm.restore(); mm.fillStyle = '#fff'; mm.beginPath(); mm.moveTo(w / 2, w / 2 - 10); mm.lineTo(w / 2 - 7, w / 2 + 8); mm.lineTo(w / 2 + 7, w / 2 + 8); mm.fill();
}

// ---------------- world objects state ----------------
const box = { spot: 0, state: 'idle', t: 0, key: null, uses: 0, cycleT: 0, model: null };
function placeBox() { const s = WD.boxSpots[box.spot]; WD.box.group.position.set(s.pos.x, 0, s.pos.z); WD.box.group.rotation.y = s.rot; WD.boxSpots.forEach((q, i) => q.crate.visible = i !== box.spot); }
const car = { x: 0, z: 0, h: 0, v: 0, steer: 0 };
function findCarSpot() { for (const [i, j] of [[27, 12], [24, 11], [30, 14], [20, 16], [32, 8]]) { let ok = true; for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) if (!inb(i + a, j + b) || grid[idx(i + a, j + b)] !== OUT) ok = false; if (ok) return { x: cx(i), z: cx(j) }; } return { x: cx(27), z: cx(12) }; }
const carStart = findCarSpot();
const forge = { t: 0 };
const BM = buildMats();
const PIECES = [{ kind: 'wall', name: 'Wall', cost: 250, hp: 900, tile: BWALL }, { kind: 'door', name: 'Door', cost: 400, hp: 700, tile: BDOOR }, { kind: 'spikes', name: 'Spikes', cost: 300, hp: 1600, tile: SPIKE }];
const build = { on: false, sel: 0, rot: 0, ghost: null, gi: -1, gj: -1, ok: false };

// ---------------- reset / start ----------------
function clearAll() {
  for (const z of zombies) scene.remove(z.m.root); zombies.length = 0;
  for (const p of pups) scene.remove(p.g); pups.length = 0;
  for (const g of gases) scene.remove(g.sp); gases.length = 0;
  for (const n of nades) scene.remove(n.m); nades.length = 0;
  for (const p of pieces) { scene.remove(p.g); for (const [i, j] of [[p.i, p.j]]) { grid[idx(i, j)] = p.under; owner[idx(i, j)] = -1; } } pieces.length = 0;
}
function newGame() {
  clearAll();
  buildMap(); // restores doors/windows/grid
  // props placed by the world are lost by buildMap; re-mark them
  for (const k of propTiles) grid[k] = 6;
  for (const d of doors) WD.doorMeshes[d.id].visible = true;
  for (const w of windows) { w.planks = 6; WD.planks[w.id].list.forEach(p => p.visible = true); }
  Object.assign(G, { t: 0, round: 0, toSpawn: 0, between: false, kills: 0, heads: 0, points: 500, power: false, flowDirty: true, insta: 0, dbl: 0, mapDirty: true, downs: 0, god: false });
  Object.assign(P, { x: startPos.x, z: startPos.z, y: 0, vy: 0, yaw: Math.PI, pitch: 0, hp: 100, maxHp: 100, lastHit: -9, cur: 0, reloadT: 0, fireT: 0, knifeT: 0, swapT: 0, nades: 2, view: 'fp', ads: 0, driving: false });
  P.perks.clear(); P.guns = [makeGun('pistol')]; setVmGun();
  setPower(false);
  box.spot = 0; box.state = 'idle'; box.uses = 0; if (box.model) { WD.box.gunSlot.remove(box.model); box.model = null; } WD.box.lid.rotation.x = 0; placeBox();
  Object.assign(car, { x: carStart.x, z: carStart.z, h: 0, v: 0 }); setEngine(false);
  build.on = false; document.body.classList.remove('building', 'driving'); $('buildbar').classList.add('hidden'); $('carhud').classList.add('hidden');
  startRound(1); updHud();
}
const propTiles = []; for (let k = 0; k < grid.length; k++) if (grid[k] === 6) propTiles.push(k);
function setPower(on) {
  G.power = on; WD.sw.lever.rotation.x = on ? -0.6 : 0.6; WD.sw.lamp.material.color.set(on ? 0x30ff40 : 0x441111);
  for (const p of WD.perks) { const lit = on || !p.needsPower; p.m.face.material?.forEach?.(() => {}); p.m.bulbM.color.set(lit ? p.col : 0x222222); p.m.glow.material.opacity = lit ? 0.35 : 0; const f = Array.isArray(p.m.face) ? null : p.m.face; if (f) f.emissiveIntensity = lit ? 0.8 : 0; }
  WD.forge.glowM.emissiveIntensity = on ? 1.4 : 0; WD.forge.glow.material.opacity = on ? 0.4 : 0;
}

// ---------------- rounds ----------------
const zCount = r => r <= 4 ? [6, 8, 13, 18][r - 1] : Math.min(24 + (r - 5) * 5, 220);
const zHp = r => r < 10 ? 150 + 100 * (r - 1) : Math.round(950 * Math.pow(1.1, r - 9));
const maxAlive = () => isTouch ? 16 : 24;
function startRound(r) {
  G.round = r; G.toSpawn = zCount(r); G.spawnT = r === 1 ? 3 : 1.5; G.between = false; G.pupsRound = 0; G.repairPts = 0;
  if (r > 1) { P.nades = Math.min(4, P.nades + 2); sfx.round(true); center('ROUND ' + r + (r === 100 ? '<small>THE LAST ONE</small>' : ''), 3); }
  else center('DEAD SHIFT<small>SURVIVE THE NIGHT</small>', 3.5);
  drawRound(); $('round').classList.add('flash'); setTimeout(() => $('round').classList.remove('flash'), 1200); updHud();
}
function updRounds(dt) {
  if (G.between) { G.betweenT -= dt; if (G.betweenT <= 0) startRound(G.round + 1); return; }
  const alive = zombies.filter(z => !z.dead).length;
  G.spawnT -= dt;
  if (G.toSpawn > 0 && alive < maxAlive() && G.spawnT <= 0) { spawnZombie(); G.toSpawn--; G.spawnT = Math.max(0.35, 2.0 - G.round * 0.08) * (0.6 + R() * 0.8); updHud(); }
  if (G.toSpawn === 0 && alive === 0) { G.between = true; G.betweenT = 8; sfx.round(false); center(G.round === 100 ? 'YOU SURVIVED ROUND 100<small>KEEP GOING IF YOU DARE</small>' : 'ROUND ' + G.round + ' SURVIVED', 4); updHud(); }
}

// ---------------- zombies ----------------
function spawnZombie() {
  const r = G.round, roll = R();
  let type = 'walker'; if (r >= 6 && roll < 0.1) type = 'toxic'; else if (r >= 4 && roll < 0.24) type = 'fat'; else if (r >= 3 && roll < 0.42) type = 'runner';
  const px = P.driving ? car.x : P.x, pz = P.driving ? car.z : P.z;
  let cand = spawns.filter(([i, j]) => { const d = Math.hypot(cx(i) - px, cx(j) - pz); return d > 12 && d < 50; }); if (!cand.length) cand = spawns.filter(([i, j]) => Math.hypot(cx(i) - px, cx(j) - pz) > 8); if (!cand.length) cand = spawns;
  const [si, sj] = pick(cand); let x = cx(si) + (R() - 0.5) * 1.4, z = cx(sj) + (R() - 0.5) * 1.4;
  const m = makeZombie(type); let hp = zHp(r), sp = Math.min(1.0 + r * 0.1, 1.9) * (0.85 + R() * 0.3);
  if (r >= 8 && type === 'walker' && R() < Math.min(0.6, (r - 7) * 0.08)) sp = 2.8 + R() * 0.6;
  if (type === 'runner') { sp = 3.9 + Math.min(r * 0.04, 1.2); hp *= 0.75; }
  if (type === 'fat') { sp = Math.min(0.9 + r * 0.05, 1.6); hp *= 2.3; }
  if (type === 'toxic') { sp = 1.7; hp *= 0.9; }
  m.root.position.set(x, -1.8, z); scene.add(m.root);
  zombies.push({ m, type, x, z, hp, maxHp: hp, speed: sp, state: 'rise', t: 0, atk: 0, atkCd: 0, dead: false, deadT: 0, yaw: R() * 6.28, rip: 0, groanT: 2 + R() * 6, best: 1e9, stuckT: 0, cur: 0, head: false });
}
function losTo(x0, z0, x1, z1) { const d = Math.hypot(x1 - x0, z1 - z0); return gridRay(x0, z0, x1 - x0, z1 - z0, d, (t, k) => solidZombie(t, k) || t === WIN) >= d - 0.01; }
const N8 = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
function updZombie(z, dt, tx, tz) {
  const m = z.m;
  if (z.dead) { z.deadT += dt; const k = Math.min(1, z.deadT / 0.6); m.body.rotation.x = -k * Math.PI / 2 * z.fallDir; m.body.position.y = -k * 0.75 * (m.scale || 1) + Math.sin(k * Math.PI) * 0.2; const ss = CORPSE_T; if (z.deadT > ss) m.root.position.y = -(z.deadT - ss) * 0.8; if (z.deadT > ss + 1.6) { scene.remove(m.root); zombies.splice(zombies.indexOf(z), 1); } return; }
  if (z.state === 'rise') { z.t += dt; const k = Math.min(1, z.t / 1.4); m.root.position.y = -1.8 * (1 - k); m.root.rotation.y = z.yaw; animZombie(m, G.t, 0, 0.6, true); if (k >= 1) z.state = 'move'; return; }
  const dx = tx - z.x, dz = tz - z.z, dp = Math.hypot(dx, dz);
  const i = tileOf(z.x), j = tileOf(z.z), k = inb(i, j) ? idx(i, j) : 0;
  let gx = tx, gz = tz, mode = 'walk', target = null;
  if (!(dp < 8 && losTo(z.x, z.z, tx, tz))) {
    let best = dist[k], bk = -1;
    for (const [di, dj] of N8) { const ni = i + di, nj = j + dj; if (!inb(ni, nj)) continue; if (di && dj && (solidZombie(grid[idx(i + di, j)], idx(i + di, j)) || solidZombie(grid[idx(i, j + dj)], idx(i, j + dj)) || grid[idx(i + di, j)] === WIN || grid[idx(i, j + dj)] === WIN)) continue; const nk = idx(ni, nj); if (dist[nk] < best) { best = dist[nk]; bk = nk; } }
    if (bk >= 0) {
      const t = grid[bk], bi = bk % GW, bj = (bk / GW) | 0; gx = cx(bi); gz = cx(bj);
      if (t === WIN && windows[owner[bk]].planks > 0) { const w = windows[owner[bk]]; mode = 'window'; target = w; gx = cx(w.i) + w.outDir[0] * 1.15; gz = cx(w.j) + w.outDir[1] * 1.15; }
      else if (t === BWALL || t === BDOOR) { mode = 'piece'; target = pieces.find(p => p.k === bk); }
    }
  }
  let speed = z.speed; const onT = grid[k];
  if (onT === WIN) speed *= 0.45;
  if (onT === SPIKE) { speed *= 0.5; const p = pieces.find(q => q.k === k); z.hp -= 160 * dt * Math.max(1, G.round / 6); if (p) { p.hp -= 12 * dt; if (p.hp <= 0) removePiece(p); } if (R() < dt * 2) sfx.spike(); if (z.hp <= 0) { killZombie(z, 'spike'); return; } }
  let mvx = gx - z.x, mvz = gz - z.z; const ml = Math.hypot(mvx, mvz);
  let attacking = false;
  if (mode === 'window' && ml < 0.35) { attacking = true; z.yaw = Math.atan2(-target.outDir[0], -target.outDir[1]); z.rip += dt; if (z.rip > 1.5) { z.rip = 0; target.planks = Math.max(0, target.planks - 1); WD.planks[target.id].list[target.planks].visible = false; sfx.plank(); G.flowDirty = true; } }
  else if (mode === 'piece' && target && Math.hypot(target.x - z.x, target.z - z.z) < 1.55) { attacking = true; z.yaw = Math.atan2(target.x - z.x, target.z - z.z); target.hp -= 30 * dt; if (R() < dt * 1.2) sfx.plank(); if (target.hp <= 0) removePiece(target); }
  else if (dp < 1.25 + (z.type === 'fat' ? 0.2 : 0)) { attacking = true; z.yaw = Math.atan2(dx, dz); }
  else if (ml > 0.01) { const st = Math.min(ml, speed * dt); z.x += mvx / ml * st; z.z += mvz / ml * st; z.yaw += angDiff(z.yaw, Math.atan2(mvx, mvz)) * Math.min(1, dt * 8); }
  // player attack
  z.atkCd -= dt;
  if (dp < 1.3 + (z.type === 'fat' ? 0.2 : 0) && z.atkCd <= 0 && z.atk === 0) z.atk = 0.001;
  if (z.atk > 0) { const prev = z.atk; z.atk += dt / 0.8; if (prev < 0.5 && z.atk >= 0.5 && dp < 1.6) hurt(P.driving ? 18 : 34); if (z.atk >= 1) { z.atk = 0; z.atkCd = 0.4; } }
  const p = { x: z.x, z: z.z }; collide(p, 0.3, solidZombie); z.x = p.x; z.z = p.z;
  // progress / stuck
  const d = dist[k]; if (d < z.best - 0.5) { z.best = d; z.stuckT = 0; } else z.stuckT += dt;
  if (z.stuckT > 22 && dp > 18) { const [si, sj] = pick(spawns); z.x = cx(si); z.z = cx(sj); z.best = 1e9; z.stuckT = 0; z.state = 'rise'; z.t = 0; }
  m.root.position.set(z.x, 0, z.z); m.root.rotation.y = z.yaw;
  z.cur = lerp(z.cur, attacking ? 0 : speed, Math.min(1, dt * 6));
  animZombie(m, G.t, z.cur, Math.max(attacking ? 0.5 + 0.5 * Math.sin(G.t * 6) : 0, z.atk > 0 ? Math.sin(z.atk * Math.PI) : 0), onT === WIN);
  z.groanT -= dt; if (z.groanT <= 0) { z.groanT = 3 + R() * 7; if (dp < 30) { const rel = angDiff(P.yaw, Math.atan2(-dx, -dz)); sfx.groan(clamp(-Math.sin(rel), -1, 1), dp); } }
}
function separate() {
  for (let a = 0; a < zombies.length; a++) { const A = zombies[a]; if (A.dead || A.state === 'rise') continue;
    for (let b = a + 1; b < zombies.length; b++) { const Bz = zombies[b]; if (Bz.dead || Bz.state === 'rise') continue; const dx = Bz.x - A.x, dz = Bz.z - A.z, d = Math.hypot(dx, dz); if (d < 0.62 && d > 1e-4) { const pu = (0.62 - d) / 2; A.x -= dx / d * pu; A.z -= dz / d * pu; Bz.x += dx / d * pu; Bz.z += dz / d * pu; } }
    if (!P.driving) { const dx = P.x - A.x, dz = P.z - A.z, d = Math.hypot(dx, dz); if (d < 0.7 && d > 1e-4) { A.x -= dx / d * (0.7 - d); A.z -= dz / d * (0.7 - d); } }
  }
}
function damageZombie(z, dmg, head, how) {
  if (z.dead) return;
  if (G.insta > 0) dmg = 1e12;
  z.hp -= dmg; sfx.hit(head);
  if (z.hp <= 0) killZombie(z, how, head); else { addPts(10); hitMark(false); }
}
function killZombie(z, how, head) {
  z.dead = true; z.deadT = 0; z.fallDir = R() < 0.5 ? 1 : -1;
  { const dead = zombies.filter(q => q.dead && q !== z && q.deadT < CORPSE_T); if (dead.length >= MAX_CORPSES) { dead.sort((a, b) => b.deadT - a.deadT); for (let n = 0; n <= dead.length - MAX_CORPSES; n++) dead[n].deadT = CORPSE_T; } } G.kills++; if (head) G.heads++;
  addPts(how === 'knife' ? 130 : head ? 100 : how === 'nuke' ? 0 : 60); hitMark(true); sfx.kill();
  spriteFx(T.blood(), 0xffffff, z.x, 1.1, z.z, 0.9, 0.5, { grow: 1.5 });
  if (z.type === 'toxic') { sfx.toxic(); const sp = spriteFx(T.puff(), 0x60ff40, z.x, 1, z.z, 3.5, 6, { op: 0.55, grow: 0.4 }); gases.push({ x: z.x, z: z.z, t: 6 }); }
  if (how !== 'nuke' && G.pupsRound < 4 && R() < 0.035) dropPup(z.x, z.z);
  updHud();
}
let hitT = 0; function hitMark(kill) { const h = $('hit'); h.className = kill ? 'kill' : ''; h.style.opacity = 1; hitT = 0.18; if (!kill) sfx.hitmarker(); }

// ---------------- power-ups ----------------
const PUPS = { max: ['MAX AMMO', 0x40ff60], insta: ['INSTA-KILL', 0xff4040], dbl: ['DOUBLE POINTS', 0xffd040], nuke: ['NUKE', 0xff8020], carp: ['CARPENTER', 0x40a0ff] };
function dropPup(x, z, kind) {
  kind = kind || pick(Object.keys(PUPS)); G.pupsRound++;
  const g = new THREE.Group(); g.position.set(x, 1, z);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.glow(), color: PUPS[kind][1], transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })); glow.scale.set(1.8, 1.8, 1); g.add(glow);
  const lab = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.label(PUPS[kind][0], 'rgba(0,0,0,0)', '#fff', 512, 96, 'bold 52px Arial Black, Arial'), transparent: true, depthWrite: false })); lab.scale.set(1.9, 0.36, 1); lab.position.y = 0.75; g.add(lab);
  scene.add(g); pups.push({ g, kind, x, z, t: 26 });
}
function takePup(p) {
  sfx.powerup(p.kind); center(PUPS[p.kind][0], 2);
  if (p.kind === 'max') { for (const g of P.guns) { g.reserve = g.maxReserve; } P.nades = Math.max(P.nades, 4); }
  if (p.kind === 'insta') G.insta = 30;
  if (p.kind === 'dbl') G.dbl = 30;
  if (p.kind === 'nuke') { $('flash').style.opacity = 1; flashT = 1; for (const z of zombies) if (!z.dead && z.state !== 'rise') killZombie(z, 'nuke'); for (const z of zombies) if (!z.dead) killZombie(z, 'nuke'); addPts(400); sfx.boom(); }
  if (p.kind === 'carp') { for (const w of windows) { w.planks = 6; WD.planks[w.id].list.forEach(q => q.visible = true); } G.flowDirty = true; addPts(200); }
  updHud();
}
let flashT = 0;

// ---------------- player ----------------
function hurt(n) {
  if (G.god || G.state !== 'play') return;
  P.hp -= n; P.lastHit = G.t; sfx.hurt(); rumble(0.8, 0.5, 200); $('dmg').style.opacity = 1;
  if (P.hp <= 0) {
    if (P.perks.has('revive')) { P.perks.delete('revive'); P.hp = P.maxHp; center('SECOND WIND<small>YOU GOT BACK UP</small>', 2.5); for (const z of zombies) if (!z.dead && Math.hypot(z.x - P.x, z.z - P.z) < 5) { z.x += (z.x - P.x) * 0.8; z.z += (z.z - P.z) * 0.8; } updHud(); }
    else gameOver();
  }
}
function gameOver() {
  G.state = 'over'; P.hp = 0; setEngine(false); if (document.pointerLockElement) document.exitPointerLock();
  const best = Math.max(+localStorage.getItem('ds_best') || 0, G.round); localStorage.setItem('ds_best', best);
  $('stats').innerHTML = `You made it to <b>round ${G.round}</b><br>Kills: <b>${G.kills}</b> &nbsp; Headshots: <b>${G.heads}</b><br>Points left: <b>${G.points}</b><br>Best round: <b>${best}</b>`;
  setTimeout(() => { $('hud').classList.add('hidden'); $('touch').classList.remove('live'); $('over').classList.remove('hidden'); }, 1200);
  center('YOU DIED', 2);
}
function gunNow() { return P.guns[P.cur]; }
function startReload() { const g = gunNow(); if (!g || P.reloadT > 0 || g.clip >= g.mag || g.reserve <= 0) return; P.reloadT = g.def.reload * (P.perks.has('rapid') ? 0.5 : 1); P.reloadMax = P.reloadT; sfx.reload(0); }
function giveGun(key, pap = false) {
  const have = P.guns.findIndex(g => g.key === key);
  const g = makeGun(key, pap);
  if (have >= 0) { P.guns[have] = g; P.cur = have; }
  else if (P.guns.length < 2) { P.guns.push(g); P.cur = P.guns.length - 1; }
  else P.guns[P.cur] = g;
  P.reloadT = 0; P.swapT = 0.4; setVmGun();
}
const rayO = new THREE.Vector3(), rayD = new THREE.Vector3();
function fireGun() {
  const g = gunNow(); if (!g) return;
  g.clip--; P.fireT = 60 / (g.rpm * (P.perks.has('double') ? 1.33 : 1)); P.recoil = Math.min(1, P.recoil + 0.35);
  const d = g.def; sfx.shot(d.sound[0], d.sound[1], !!d.wonder); rumble(0.3, 0.6, 60);
  camera.getWorldPosition(rayO);
  const pellets = d.pellets || 1;
  for (let n = 0; n < pellets; n++) {
    const spr = d.spread * (P.ads > 0.5 ? 0.35 : 1) * (P.speed > 1 ? 1.6 : 1);
    rayD.set((R() - 0.5) * 2 * spr, (R() - 0.5) * 2 * spr, -1).normalize().applyQuaternion(camera.quaternion);
    shootRay(rayO, rayD, g);
  }
  P.pitch = clamp(P.pitch + 0.006 + d.sound[1] * 0.01, -1.45, 1.45);
  muzzleT = 0.05; updHud();
  if (g.clip === 0) startReload();
}
let muzzleT = 0;
const muzzle = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.glow(), color: 0xffc070, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })); muzzle.scale.set(0.25, 0.25, 1); vmScene.add(muzzle);
const headP = new THREE.Vector3(), bodyP = new THREE.Vector3();
function shootRay(o, d, g) {
  const hl = Math.hypot(d.x, d.z); let maxT = 150;
  if (hl > 1e-4) maxT = gridRay(o.x, o.z, d.x, d.z, 150 * hl, t => blocksBullet(t)) / hl;
  if (d.y < -1e-4) maxT = Math.min(maxT, -o.y / d.y);
  if (d.y > 1e-4) maxT = Math.min(maxT, (3.4 - o.y) / d.y);
  const hits = [];
  for (const z of zombies) {
    if (z.dead || z.state === 'rise' && z.t < 0.7) continue;
    if (Math.hypot(z.x - o.x, z.z - o.z) > maxT + 2) continue;
    const sc = z.m.scale || 1; z.m.head.getWorldPosition(headP); z.m.spine.getWorldPosition(bodyP); bodyP.y += 0.25 * sc;
    const tests = [[headP, 0.17 * sc, true], [bodyP, (z.type === 'fat' ? 0.48 : 0.32) * sc, false]];
    let bestT = Infinity, head = false;
    for (const [c, r, hd] of tests) { const ox = c.x - o.x, oy = c.y - o.y, oz = c.z - o.z; const t = ox * d.x + oy * d.y + oz * d.z; if (t < 0) continue; const d2 = ox * ox + oy * oy + oz * oz - t * t; if (d2 < r * r) { const tt = t - Math.sqrt(r * r - d2); if (tt < bestT) { bestT = tt; head = hd; } } }
    // legs: vertical capsule
    if (bestT === Infinity) { const ox = z.x - o.x, oz = z.z - o.z; const t = (ox * d.x + oz * d.z) / Math.max(1e-6, hl * hl); const px = o.x + d.x * t - z.x, pz = o.z + d.z * t - z.z, py = o.y + d.y * t; if (t > 0 && px * px + pz * pz < 0.09 && py > 0 && py < 0.9 * sc) bestT = t; }
    if (bestT < maxT) hits.push([bestT, z, head]);
  }
  hits.sort((a, b) => a[0] - b[0]);
  const pierce = g.def.pierce || 1; let endT = maxT;
  for (let n = 0; n < Math.min(pierce, hits.length); n++) { const [t, z, head] = hits[n]; damageZombie(z, g.dmg * (head ? g.def.head : 1) * Math.pow(0.75, n), head, 'gun'); spriteFx(T.blood(), 0xffffff, o.x + d.x * t, o.y + d.y * t, o.z + d.z * t, 0.4, 0.35, { grow: 1 }); if (n === pierce - 1) endT = t; }
  const ex = o.x + d.x * endT, ey = o.y + d.y * endT, ez = o.z + d.z * endT;
  if (g.def.splash) { spriteFx(T.glow(), 0x50ff70, ex, ey, ez, 2.5, 0.4, { add: true, grow: 4 }); for (const z of zombies) if (!z.dead && Math.hypot(z.x - ex, z.z - ez) < g.def.splash) damageZombie(z, g.dmg, false, 'gun'); }
  else if (!hits.length) spriteFx(T.puff(), 0x999080, ex, ey, ez, 0.25, 0.4, { grow: 0.8 });
}
function knife() {
  if (P.knifeT > 0) return; P.knifeT = 0.5; sfx.knife();
  let best = null, bd = 1.9;
  for (const z of zombies) { if (z.dead || z.state === 'rise') continue; const dx = z.x - P.x, dz = z.z - P.z, d = Math.hypot(dx, dz); const a = Math.abs(angDiff(Math.atan2(-dx, -dz), P.yaw)); if (d < bd && a < 1.0) { bd = d; best = z; } }
  if (best) damageZombie(best, 150 + G.round * 25, false, 'knife');
}
function throwNade() {
  if (P.nades <= 0) return; P.nades--; updHud();
  const m = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), new THREE.MeshStandardMaterial({ color: 0x3a4a2a, roughness: 0.6 })); scene.add(m);
  camera.getWorldDirection(V3); camera.getWorldPosition(V3b);
  nades.push({ m, x: V3b.x + V3.x * 0.5, y: V3b.y, z: V3b.z + V3.z * 0.5, vx: V3.x * 14, vy: V3.y * 14 + 3, vz: V3.z * 14, t: 2.2 });
}
function updNades(dt) {
  for (let i = nades.length - 1; i >= 0; i--) { const n = nades[i]; n.t -= dt; n.vy -= 18 * dt; const nx = n.x + n.vx * dt, nz = n.z + n.vz * dt; const tt = grid[idx(clamp(tileOf(nx), 0, GW - 1), clamp(tileOf(nz), 0, GH - 1))]; if (solidPlayer(tt) || tt === WIN) { n.vx *= -0.4; n.vz *= -0.4; } else { n.x = nx; n.z = nz; } n.y += n.vy * dt; if (n.y < 0.08) { n.y = 0.08; n.vy *= -0.35; n.vx *= 0.7; n.vz *= 0.7; } n.m.position.set(n.x, n.y, n.z);
    if (n.t <= 0) { scene.remove(n.m); nades.splice(i, 1); sfx.boom(); rumble(1, 1, 300); spriteFx(T.glow(), 0xffa040, n.x, 1, n.z, 3, 0.4, { add: true, grow: 10 }); spriteFx(T.puff(), 0x505050, n.x, 1.2, n.z, 2, 1.6, { grow: 3, vy: 0.8, op: 0.8 });
      for (const z of zombies) { if (z.dead) continue; const d = Math.hypot(z.x - n.x, z.z - n.z); if (d < 5.5) damageZombie(z, (900 + G.round * 120) * (1 - d / 6), false, 'nade'); }
      const pd = Math.hypot(P.x - n.x, P.z - n.z); if (pd < 3.5 && !P.driving) hurt(25 * (1 - pd / 3.5)); } }
}

// ---------------- interactions ----------------
function near(p, r) { return Math.hypot(p.x - P.x, p.z - P.z) < r; }
function prompt(txt) { $('prompt').innerHTML = txt; }
function buy(cost) { if (G.points < cost) { sfx.deny(); toast('Not enough points'); return false; } addPts(cost, true); sfx.buy(); updHud(); return true; }
const K = () => `<span class="k">${keyName('use')}</span>`;
function interact(dt) {
  let txt = ''; const use = took('use'), hold = inp.use;
  if (P.driving) { prompt(K() + ' Get out'); if (use) exitCar(); return; }
  // window repair
  let repairing = false;
  for (const w of windows) { const ip = { x: cx(w.i) - w.outDir[0] * 1.1, z: cx(w.j) - w.outDir[1] * 1.1 }; if (w.planks < 6 && near(ip, 1.6)) { txt = 'Hold ' + K() + ' to rebuild the barrier'; if (hold) { repairing = true; P.repT += dt; if (P.repT > 0.7) { P.repT = 0; WD.planks[w.id].list[w.planks].visible = true; w.planks++; sfx.nail(); G.flowDirty = true; if (G.repairPts < 500) { addPts(10); G.repairPts += 10; } updHud(); } } break; } }
  if (!repairing) P.repT = 0;
  if (!txt) for (const d of doors) { if (d.open) continue; let sx = 0, sz = 0; for (const [i, j] of d.tiles) { sx += cx(i); sz += cx(j); } if (near({ x: sx / d.tiles.length, z: sz / d.tiles.length }, 2.6)) { txt = K() + ' Open door to ' + d.label + ' [' + d.cost + ']'; if (use && buy(d.cost)) openDoor(d); break; } }
  if (!txt) for (const wb of WD.wallbuys) if (near(wb.use, 1.6)) { const have = P.guns.find(g => g.key === wb.key); const c = have ? (have.pap ? 4500 : Math.round(wb.cost / 2)) : wb.cost; txt = K() + (have ? ' Buy ammo for ' + have.name : ' Buy ' + W[wb.key].name) + ' [' + c + ']'; if (use && buy(c)) { if (have) { have.reserve = have.maxReserve; have.clip = have.mag; updHud(); } else giveGun(wb.key); } break; }
  if (!txt) for (const p of WD.perks) if (near(p.use, 1.7)) { if (P.perks.has(p.key)) txt = p.name + ': you have it'; else if (p.needsPower && !G.power) txt = p.name + ': turn on the power first'; else { txt = K() + ' ' + p.name + ' (' + p.desc + ') [' + p.cost + ']'; if (use && buy(p.cost)) { P.perks.add(p.key); sfx.perk(); if (p.key === 'tank') { P.maxHp = 250; P.hp = 250; } toast(p.name + ': ' + p.desc); updHud(); } } break; }
  if (!txt && !G.power && near(WD.swUse, 1.8)) { txt = K() + ' Turn on the power'; if (use) { setPower(true); sfx.power(); center('POWER ON', 2.5); } }
  if (!txt && near(WD.forgeUse, 2.0)) { const g = gunNow(); if (!G.power) txt = 'The Forge: turn on the power first'; else if (forge.t > 0) txt = 'The Forge is working...'; else if (!g || g.pap) txt = 'The Forge: this gun is already upgraded'; else { txt = K() + ' Upgrade ' + g.name + ' [5000]'; if (use && buy(5000)) { forge.t = 2.5; const key = g.key; P.guns[P.cur] = makeGun(key, true); setVmGun(); sfx.power(); center(PAP_NAMES[key] || 'UPGRADED', 2); forge.model = gunModel(key, true).group; forge.model.scale.setScalar(1.8); WD.forge.slot.add(forge.model); } } }
  if (!txt) { const s = WD.boxSpots[box.spot]; if (near(s.use, 2.0)) {
    if (box.state === 'idle') { txt = K() + ' Mystery Box [950]'; if (use && buy(950)) openBox(); }
    else if (box.state === 'ready') { txt = K() + ' Take ' + W[box.key].name; if (use) { giveGun(box.key); closeBox(); } }
    else txt = '';
  } }
  if (!txt && near(car, 3.2)) { txt = K() + ' Drive the car'; if (use) enterCar(); }
  prompt(txt);
}
function openDoor(d) { d.open = true; for (const [i, j] of d.tiles) { grid[idx(i, j)] = FLOOR; zone[idx(i, j)] = d.zone; } openZones.add(d.zone); WD.doorMeshes[d.id].visible = false; sfx.door(); G.flowDirty = true; G.mapDirty = true; toast(d.label + ' opened'); }
function openBox() { box.state = 'rolling'; box.t = 0; box.cycleT = 0; box.uses++; sfx.box(); }
function closeBox() { box.state = 'idle'; if (box.model) { WD.box.gunSlot.remove(box.model); box.model = null; } }
function setBoxModel(key) { if (box.model) WD.box.gunSlot.remove(box.model); box.model = gunModel(key, false).group; box.model.scale.setScalar(2); box.model.rotation.y = Math.PI / 2; WD.box.gunSlot.add(box.model); }
function updBox(dt) {
  const lid = WD.box.lid; lid.rotation.x = lerp(lid.rotation.x, box.state === 'idle' || box.state === 'moving' ? 0 : -1.2, Math.min(1, dt * 6));
  WD.box.beam.visible = box.state !== 'moving';
  if (box.state === 'rolling') { box.t += dt; box.cycleT -= dt; const k = box.t / 3.2; if (box.model) box.model.position.y = k * 0.6; if (box.cycleT <= 0) { box.cycleT = 0.08 + k * 0.15; setBoxModel(pick(BOX_POOL.filter(q => !P.guns.some(g => g.key === q)))); }
    if (box.t >= 3.2) { if (box.uses > 4 && R() < 0.3) { box.state = 'teddy'; box.t = 0; sfx.teddy(); addPts(950); toast('The box is moving! You got your points back.'); if (box.model) { WD.box.gunSlot.remove(box.model); box.model = null; } }
      else { box.key = pick(BOX_POOL.filter(q => !P.guns.some(g => g.key === q))); setBoxModel(box.key); box.model.position.y = 0.6; box.state = 'ready'; box.t = 0; sfx.boxReveal(); } } }
  else if (box.state === 'ready') { box.t += dt; if (box.model) box.model.position.y = 0.6 - box.t / 9 * 0.6; if (box.t > 9) closeBox(); }
  else if (box.state === 'teddy') { box.t += dt; WD.box.group.position.y = Math.min(6, box.t * box.t); if (box.t > 2.5) { WD.box.group.position.y = 0; const opts = WD.boxSpots.map((s, i) => i).filter(i => i !== box.spot); box.spot = pick(opts); box.uses = 0; box.state = 'idle'; placeBox(); toast('The box moved to the ' + WD.boxSpots[box.spot].name); } }
}

// ---------------- building ----------------
function toggleBuild() { build.on = !build.on; document.body.classList.toggle('building', build.on); $('buildbar').classList.toggle('hidden', !build.on); if (!build.on && build.ghost) build.ghost.visible = false; drawBuildbar(); if (build.on) toast('Build mode: aim at the ground, ' + (inp.device === 'touch' ? 'tap FIRE to place, SWAP to change piece' : inp.device === 'pad' ? 'R2 to place, Triangle to change piece' : 'click to place, Q to change piece')); }
function drawBuildbar() { $('buildbar').innerHTML = PIECES.map((p, i) => `<div class="${i === build.sel ? 'sel' : ''}">${p.name}<span>${p.cost}</span></div>`).join(''); }
const ghostMat = new THREE.MeshBasicMaterial({ color: 0x40ff60, transparent: true, opacity: 0.35, depthWrite: false });
function updBuild() {
  if (!build.on) return;
  if (took('swap')) { build.sel = (build.sel + 1) % PIECES.length; drawBuildbar(); if (build.ghost) { scene.remove(build.ghost); build.ghost = null; } }
  if (took('rotate')) build.rot ^= 1;
  const pc = PIECES[build.sel];
  if (!build.ghost) { build.ghost = new THREE.Mesh(pieceGeo(pc.kind).wood, ghostMat); scene.add(build.ghost); }
  const fx_ = -Math.sin(P.yaw), fz = -Math.cos(P.yaw); const gi = tileOf(P.x + fx_ * 2.4), gj = tileOf(P.z + fz * 2.4); const k = inb(gi, gj) ? idx(gi, gj) : -1;
  const t = k >= 0 ? grid[k] : -1; const pt = tileOf(P.x) === gi && tileOf(P.z) === gj;
  build.ok = (t === OUT || t === FLOOR) && !pt && !zombies.some(z => !z.dead && tileOf(z.x) === gi && tileOf(z.z) === gj) && !(Math.abs(cx(gi) - car.x) < 2.6 && Math.abs(cx(gj) - car.z) < 2.6);
  build.gi = gi; build.gj = gj; build.ghost.visible = true; build.ghost.position.set(cx(gi), 0, cx(gj)); build.ghost.rotation.y = build.rot ? Math.PI / 2 : 0; ghostMat.color.set(build.ok && G.points >= pc.cost ? 0x40ff60 : 0xff4030);
  prompt(pc.name + ' [' + pc.cost + ']' + (build.ok ? '' : ' - cannot build here'));
  if (inp.fire && !P.semi) { P.semi = true; if (!build.ok) sfx.deny(); else if (buy(pc.cost)) placePiece(pc, gi, gj, build.rot); }
}
function placePiece(pc, i, j, rot) {
  const k = idx(i, j); const g = new THREE.Group(); const geo = pieceGeo(pc.kind);
  const w = new THREE.Mesh(geo.wood, BM.wood); w.castShadow = true; g.add(w); if (geo.metal) g.add(new THREE.Mesh(geo.metal, BM.metal));
  let gate = null; if (pc.kind === 'door') { gate = new THREE.Group(); gate.position.x = -0.88; const gm = new THREE.Mesh(pieceGeo('gate').wood, BM.wood); gate.add(gm); g.add(gate); }
  g.position.set(cx(i), 0, cx(j)); g.rotation.y = rot ? Math.PI / 2 : 0; scene.add(g);
  const p = { k, i, j, x: cx(i), z: cx(j), g, gate, hp: pc.hp, kind: pc.kind, under: grid[k] }; pieces.push(p); grid[k] = pc.tile; owner[k] = pieces.length - 1; sfx.build(); G.flowDirty = true; G.mapDirty = true;
}
function removePiece(p) { const i = pieces.indexOf(p); if (i < 0) return; scene.remove(p.g); grid[p.k] = p.under; owner[p.k] = -1; pieces.splice(i, 1); sfx.crash(0.4); G.flowDirty = true; G.mapDirty = true; }

// ---------------- car ----------------
function enterCar() { P.driving = true; sfx.carDoor(); document.body.classList.add('driving'); $('carhud').classList.remove('hidden'); build.on = false; document.body.classList.remove('building'); $('buildbar').classList.add('hidden'); if (build.ghost) build.ghost.visible = false; setEngine(true, 0); }
function exitCar() {
  P.driving = false; sfx.carDoor(); document.body.classList.remove('driving'); $('carhud').classList.add('hidden'); setEngine(false); WD.carLight.intensity = 0;
  for (const s of [1, -1]) { const x = car.x + Math.cos(car.h) * 1.8 * s, z = car.z - Math.sin(car.h) * 1.8 * s; const t = grid[idx(clamp(tileOf(x), 0, GW - 1), clamp(tileOf(z), 0, GH - 1))]; if (!solidPlayer(t)) { P.x = x; P.z = z; break; } }
  P.yaw = car.h; car.v = 0;
}
function updCar(dt) {
  const cg = WD.car.group;
  if (P.driving) {
    const thr = inp.gas - inp.brake; car.steer = lerp(car.steer, -inp.mx, Math.min(1, dt * 6));
    car.v += thr * (thr * car.v < 0 ? 22 : 11) * dt; car.v *= Math.pow(0.55, dt); car.v = clamp(car.v, -7, 24);
    car.h += car.steer * car.v * 0.11 * dt;
    const nx = car.x - Math.sin(car.h) * car.v * dt, nz = car.z - Math.cos(car.h) * car.v * dt;
    const p = { x: nx, z: nz }; const hit = collide(p, 1.15, solidCar) | collide({ x: nx - Math.sin(car.h) * 1.3, z: nz - Math.cos(car.h) * 1.3 }, 1.0, solidCar) | collide({ x: nx + Math.sin(car.h) * 1.3, z: nz + Math.cos(car.h) * 1.3 }, 1.0, solidCar);
    if (hit) { if (Math.abs(car.v) > 6) { sfx.crash(Math.min(1, Math.abs(car.v) / 20)); rumble(1, 0.6, 200); } car.v *= -0.25; } else { car.x = p.x; car.z = p.z; }
    for (const z of zombies) { if (z.dead || z.state === 'rise') continue; if (Math.hypot(z.x - car.x, z.z - car.z) < 1.9) { if (Math.abs(car.v) > 5) { sfx.splat(); damageZombie(z, 400 + Math.abs(car.v) * 120 + G.round * 40, false, 'car'); car.v *= 0.9; } else { const dx = z.x - car.x, dz = z.z - car.z, d = Math.hypot(dx, dz) || 1; z.x = car.x + dx / d * 1.9; z.z = car.z + dz / d * 1.9; } } }
    P.x = car.x; P.z = car.z; setEngine(true, Math.abs(car.v) / 24);
    $('carhud').innerHTML = Math.round(Math.abs(car.v) * 2.237) + ' <small>MPH</small>';
    WD.carLight.intensity = 60; WD.carLight.position.set(car.x - Math.sin(car.h) * 2.4, 0.8, car.z - Math.cos(car.h) * 2.4); WD.carLight.target.position.set(car.x - Math.sin(car.h) * 14, 0, car.z - Math.cos(car.h) * 14);
  }
  cg.position.set(car.x, 0, car.z); cg.rotation.y = car.h;
  for (const w of WD.car.wheels) { w.spin.rotation.z -= car.v * dt / 0.34; if (w.front) w.w.rotation.y = car.steer * 0.5; }
}

// ---------------- update ----------------
let lastT = performance.now(), fpsAcc = 0, fpsN = 0, fpsShow = 0, slowT = 0;
function update(dt) {
  G.t += dt;
  pollKeyboard(); pollGamepad(dt); inp.sens = SET.sens; inp.invertY = !!SET.inv;
  if (took('pause')) { pause(); return; }
  // look
  if (!P.driving) { P.yaw -= inp.lx; P.pitch = clamp(P.pitch - inp.ly, -1.45, 1.45); }
  if (took('view')) P.view = P.view === 'fp' ? 'tp' : 'fp';
  if (took('build') && !P.driving) toggleBuild();
  if (!inp.fire) P.semi = false;
  // movement
  if (!P.driving) {
    const sprint = (inp.sprint || touchSprint()) && inp.my > 0.3 && !inp.aim && P.reloadT <= 0;
    let sp = (sprint ? 6.4 : 4.2) * (P.perks.has('stamina') ? 1.15 : 1) * (inp.aim ? 0.6 : 1);
    const ml = Math.min(1, Math.hypot(inp.mx, inp.my)); const fx_ = -Math.sin(P.yaw), fz = -Math.cos(P.yaw), rx = Math.cos(P.yaw), rz = -Math.sin(P.yaw);
    let vx = (fx_ * inp.my + rx * inp.mx), vz = (fz * inp.my + rz * inp.mx); const vl = Math.hypot(vx, vz); if (vl > 1e-4) { vx = vx / vl * ml * sp; vz = vz / vl * ml * sp; } else vx = vz = 0;
    const p = { x: P.x + vx * dt, z: P.z + vz * dt }; collide(p, 0.35, (t, k) => solidPlayer(t, k) || t === BWALL); P.x = p.x; P.z = p.z; P.speed = Math.hypot(vx, vz); P.sprinting = sprint && P.speed > 1;
    if (took('jump') && P.y <= 0) P.vy = 4.6; P.vy -= 14 * dt; P.y = Math.max(0, P.y + P.vy * dt); if (P.y === 0) P.vy = Math.max(0, P.vy);
    P.bob += P.speed * dt * 1.8;
    // weapons
    const g = gunNow();
    P.fireT -= dt; P.knifeT -= dt; P.swapT -= dt;
    if (P.reloadT > 0) { P.reloadT -= dt; if (P.reloadT <= 0 && g) { const n = Math.min(g.mag - g.clip, g.reserve); g.clip += n; g.reserve -= n; sfx.reload(1); updHud(); } }
    if (!build.on) {
      if (took('reload')) startReload();
      if ((took('swap') || took('swapBack')) && P.guns.length > 1) { P.cur = (P.cur + 1) % P.guns.length; P.reloadT = 0; P.swapT = 0.35; setVmGun(); }
      if (took('slot1') && P.guns[0]) { P.cur = 0; setVmGun(); } if (took('slot2') && P.guns[1]) { P.cur = 1; setVmGun(); }
      if (took('knife')) knife(); if (took('grenade')) throwNade();
      if (inp.fire && g && P.reloadT <= 0 && P.swapT <= 0 && P.knifeT <= 0 && !P.sprinting) {
        if (g.clip <= 0) { if (!P.semi) { sfx.dry(); P.semi = true; startReload(); } }
        else if (P.fireT <= 0 && (g.def.auto || !P.semi || inp.device === 'touch')) { fireGun(); P.semi = true; }
      }
    }
    P.ads = lerp(P.ads, inp.aim && !P.sprinting && P.reloadT <= 0 && !build.on ? 1 : 0, Math.min(1, dt * 12));
    updBuild();
  }
  P.recoil = Math.max(0, P.recoil - dt * 4);
  interact(dt);
  updCar(dt);
  // health
  if (G.t - P.lastHit > 3.5 && P.hp < P.maxHp) P.hp = Math.min(P.maxHp, P.hp + P.maxHp * 0.5 * dt);
  $('dmg').style.opacity = clamp(1 - P.hp / P.maxHp, 0, 1) * 0.9;
  if (P.hp < P.maxHp * 0.35) { P.heartT -= dt; if (P.heartT <= 0) { sfx.heartbeat(); P.heartT = 0.9; } }
  // flow field
  G.flowT -= dt; const pk = idx(clamp(tileOf(P.x), 0, GW - 1), clamp(tileOf(P.z), 0, GH - 1));
  if (G.flowDirty || (pk !== G.lastFlowK && G.flowT <= 0)) { flow(tileOf(P.x), tileOf(P.z)); G.lastFlowK = pk; G.flowT = 0.25; G.flowDirty = false; for (const z of zombies) { z.best = 1e9; } }
  for (let i = zombies.length - 1; i >= 0; i--) { const z = zombies[i]; if (z) updZombie(z, dt, P.x, P.z); }
  separate();
  if (G.state !== 'play') return;
  updRounds(dt); updNades(dt); updBox(dt);
  // gas
  let inGas = false; for (let i = gases.length - 1; i >= 0; i--) { const gz = gases[i]; gz.t -= dt; if (gz.t <= 0) { gases.splice(i, 1); continue; } if (Math.hypot(gz.x - P.x, gz.z - P.z) < 2.6 && !P.driving) { inGas = true; if (R() < dt * 2) hurt(8); } }
  $('toxicfx').style.opacity = inGas ? 0.7 : 0;
  // power-ups
  for (let i = pups.length - 1; i >= 0; i--) { const p = pups[i]; p.t -= dt; p.g.position.y = 1 + Math.sin(G.t * 3) * 0.15; p.g.visible = p.t > 5 || Math.sin(G.t * 18) > 0; if (Math.hypot(p.x - P.x, p.z - P.z) < 1.6) { takePup(p); scene.remove(p.g); pups.splice(i, 1); } else if (p.t <= 0) { scene.remove(p.g); pups.splice(i, 1); } }
  if (G.insta > 0) G.insta -= dt; if (G.dbl > 0) G.dbl -= dt;
  if (forge.t > 0) { forge.t -= dt; if (forge.model) forge.model.rotation.y += dt * 3; if (forge.t <= 0 && forge.model) { WD.forge.slot.remove(forge.model); forge.model = null; } }
  // doors of built pieces swing open when player is near
  for (const p of pieces) if (p.gate) { const open = Math.hypot(p.x - P.x, p.z - P.z) < 2.2; p.gate.rotation.y = lerp(p.gate.rotation.y, open ? 1.5 : 0, Math.min(1, dt * 6)); }
  // world flicker
  for (const f of WD.fires) for (const s of f.fl) s.scale.y = 1.0 + Math.sin(G.t * 13 + s.id) * 0.15;
  updLights(dt);
  updFx(dt);
  // timers
  if (toastT > 0) { toastT -= dt; if (toastT <= 0) $('toast').classList.remove('show'); }
  if (centerT > 0) { centerT -= dt; if (centerT <= 0) $('center').classList.remove('show'); }
  if (hitT > 0) { hitT -= dt; if (hitT <= 0) $('hit').style.opacity = 0; }
  if (flashT > 0) { flashT -= dt; $('flash').style.opacity = Math.max(0, flashT); }
  if ((G.t * 4 | 0) !== ((G.t - dt) * 4 | 0)) updHud();
}

// ---------------- camera / render ----------------
function render(dt) {
  const tp = P.view === 'tp' || P.driving;
  if (P.driving) { const bx = car.x + Math.sin(car.h) * 7, bz = car.z + Math.cos(car.h) * 7; camera.position.lerp(V3.set(bx, 3.2, bz), Math.min(1, dt * 5)); camera.lookAt(car.x - Math.sin(car.h) * 4, 1, car.z - Math.cos(car.h) * 4); }
  else {
    const eye = 1.62 + P.y + Math.sin(P.bob * 2) * 0.035 * (P.speed > 0.5 ? 1 : 0);
    camera.rotation.set(P.pitch + P.recoil * 0.02, P.yaw, 0);
    if (tp) { const back = 2.6; let cxp = P.x + Math.sin(P.yaw) * back * Math.cos(P.pitch) + Math.cos(P.yaw) * 0.6, czp = P.z + Math.cos(P.yaw) * back * Math.cos(P.pitch) - Math.sin(P.yaw) * 0.6; const dd = gridRay(P.x, P.z, cxp - P.x, czp - P.z, Math.hypot(cxp - P.x, czp - P.z), t => solidPlayer(t)); const full = Math.hypot(cxp - P.x, czp - P.z); const k = Math.max(0.2, (dd - 0.3) / full); camera.position.set(P.x + (cxp - P.x) * k, eye + 0.3 + Math.sin(P.pitch) * back * 0.5, P.z + (czp - P.z) * k); }
    else camera.position.set(P.x, eye, P.z);
  }
  const g = gunNow(); const zoom = g && g.def.zoom && P.ads > 0.8 ? g.def.zoom : 1;
  const fov = (camera.userData.fov || SET.fov) / (1 + P.ads * 0.25) / zoom; if (Math.abs(camera.fov - fov) > 0.01) { camera.fov = fov; camera.updateProjectionMatrix(); }
  $('scope').style.opacity = zoom > 1 ? 1 : 0; $('cross').classList.toggle('hide', P.ads > 0.6 || P.driving);
  // soldier (third person)
  soldier.wrap.visible = tp && !P.driving; if (soldier.wrap.visible) { soldier.wrap.position.set(P.x, P.y, P.z); soldier.wrap.rotation.y = P.yaw; animSoldier(soldier, G.t, P.speed, P.pitch, P.sprinting); }
  // viewmodel
  vm.visible = !tp && !build.on; const ads = P.ads, rl = P.reloadT > 0 ? Math.sin(Math.min(1, 1 - P.reloadT / (P.reloadMax || 1)) * Math.PI) : 0;
  const sw = P.swapT > 0 ? P.swapT / 0.4 : 0, kn = P.knifeT > 0 ? Math.sin((0.5 - P.knifeT) / 0.5 * Math.PI) : 0;
  vm.position.set(lerp(0.17, 0, ads) + kn * -0.1, lerp(-0.19, -0.095, ads) - rl * 0.12 - sw * 0.3 + Math.sin(P.bob * 2) * 0.008 * (1 - ads), lerp(-0.38, -0.27, ads) + P.recoil * 0.05 - kn * 0.15);
  vm.rotation.set(rl * 0.6 + P.recoil * 0.08 + (P.sprinting ? -0.35 : 0), (P.sprinting ? 0.6 : 0) + kn * 0.8, rl * 0.4);
  if (muzzleT > 0) { muzzleT -= dt; muzzle.visible = !tp; muzzle.position.set(vm.position.x, vm.position.y + 0.06, vm.position.z - 0.55); } else muzzle.visible = false;
  // shadows follow the player
  WD.moonL.position.set(P.x - 30, 60, P.z - 40); WD.moonL.target.position.set(P.x, 0, P.z);
  renderer.clear(); renderer.render(scene, camera);
  if (vm.visible) { renderer.clearDepth(); renderer.render(vmScene, vmCam); }
  if (G.t % 0.1 < dt) drawMinimap();
}
function loop(now) {
  requestAnimationFrame(loop);
  const dt = Math.min(0.05, (now - lastT) / 1000); lastT = now;
  fpsAcc += dt; fpsN++; if (fpsAcc > 1) { fpsShow = Math.round(fpsN / fpsAcc); fpsAcc = 0; fpsN = 0; $('fps').textContent = fpsShow + ' FPS'; if (G.state === 'play' && SET.q === 'auto') { if (fpsShow < 35) slowT++; else slowT = 0; if (slowT >= 3 && pixelScale > 0.6) { pixelScale -= 0.15; applyQuality(); slowT = 0; } } }
  if (G.state === 'play') update(dt);
  else if (G.state === 'over') { G.t += dt; updFx(dt); for (const z of zombies) updZombie(z, dt, P.x, P.z); }
  if (G.state === 'play' || G.state === 'over' || G.state === 'pause') render(G.state === 'pause' ? 0 : dt);
  else { // title: slow orbit
    G.t += dt; camera.position.set(44 + Math.sin(G.t * 0.08) * 30, 9, 40 + Math.cos(G.t * 0.08) * 30); camera.lookAt(44, 1, 46); if (camera.fov !== 60) { camera.fov = 60; camera.updateProjectionMatrix(); } renderer.clear(); renderer.render(scene, camera);
  }
  endFrame();
}

// ---------------- menus ----------------
const screens = ['title', 'pause', 'settings', 'controls', 'over', 'admin'];
let back = 'title';
function show(id) { for (const s of screens) $(s).classList.toggle('hidden', s !== id); }
function play() {
  initAudio(); setVolume(SET.vol);
  newGame(); G.state = 'play'; show(null); $('hud').classList.remove('hidden'); $('touch').classList.add('live');
  if (inp.device === 'kbm' && !isTouch) canvas.requestPointerLock?.();
}
function pause() { if (G.state !== 'play') return; G.state = 'pause'; inp.fire = inp.aim = false; setEngine(false); show('pause'); $('touch').classList.remove('live'); if (document.pointerLockElement) document.exitPointerLock(); }
function resume() { G.state = 'play'; show(null); $('touch').classList.add('live'); lastT = performance.now(); if (P.driving) setEngine(true, 0); if (inp.device === 'kbm' && !isTouch) canvas.requestPointerLock?.(); }
function toMenu() { G.state = 'title'; clearAll(); show('title'); $('hud').classList.add('hidden'); $('touch').classList.remove('live'); setEngine(false); showBest(); }
function showBest() { const b = +localStorage.getItem('ds_best') || 0; $('best').textContent = b ? 'Best: round ' + b : ''; }
$('bUpright').onclick = () => document.body.classList.add('upright');
$('bPlay').onclick = play; $('bAgain').onclick = play; $('bMenu').onclick = toMenu; $('bResume').onclick = resume; $('bQuit').onclick = toMenu;
$('bControls').onclick = () => { back = 'title'; show('controls'); }; $('bControls2').onclick = () => { back = 'pause'; show('controls'); };
$('bSettings').onclick = () => { back = 'title'; syncSet(); show('settings'); }; $('bSettings2').onclick = () => { back = 'pause'; syncSet(); show('settings'); };
// ---- admin panel (pause menu). Only touches this player's own points, guns and health. ----
let admPap = false;
function admSync() {
  $('admPts').textContent = G.points.toLocaleString();
  for (const b of $('admPapSeg').children) b.classList.toggle('on', (+b.dataset.v === 1) === admPap);
  $('admExtra').children[1].textContent = 'GOD MODE: ' + (G.god ? 'ON' : 'OFF'); $('admExtra').children[1].classList.toggle('on', !!G.god);
}
function admMsg(t) { $('admMsg').textContent = t; }
$('admGuns').innerHTML = Object.keys(W).map(k => `<button data-k="${k}">${W[k].name}</button>`).join('');
$('bAdmin').onclick = () => { admMsg(''); admSync(); show('admin'); };
$('bAdmBack').onclick = () => show('pause');
for (const b of $('admMoney').children) b.onclick = () => { const n = +b.dataset.n; G.points += n; updHud(); admSync(); admMsg('Added ' + n.toLocaleString() + ' points to you.'); };
for (const b of $('admPapSeg').children) b.onclick = () => { admPap = b.dataset.v === '1'; admSync(); };
for (const b of $('admGuns').children) b.onclick = () => { giveGun(b.dataset.k, admPap); updHud(); admMsg('You now have the ' + gunNow().name + '.'); };
$('admExtra').children[0].onclick = () => { for (const g of P.guns) { g.clip = g.mag; g.reserve = g.maxReserve; } P.nades = Math.max(P.nades, 4); updHud(); admMsg('Ammo and grenades refilled.'); };
$('admExtra').children[1].onclick = () => { G.god = !G.god; admSync(); admMsg(G.god ? 'God mode on: zombies cannot hurt you.' : 'God mode off.'); };
$('bSetBack').onclick = () => show(back); $('bCtlBack').onclick = () => show(back);
function syncSet() {
  for (const b of $('qSeg').children) b.classList.toggle('on', b.dataset.q === SET.q);
  for (const b of $('invSeg').children) b.classList.toggle('on', +b.dataset.v === SET.inv);
  for (const b of $('fpsSeg').children) b.classList.toggle('on', +b.dataset.v === SET.fps);
  $('sens').value = SET.sens; $('fov').value = SET.fov; $('vol').value = SET.vol; $('fps').classList.toggle('hidden', !SET.fps); applyQuality();
}
for (const b of $('qSeg').children) b.onclick = () => { SET.q = b.dataset.q; pixelScale = 1; saveSet(); syncSet(); };
for (const b of $('invSeg').children) b.onclick = () => { SET.inv = +b.dataset.v; saveSet(); syncSet(); };
for (const b of $('fpsSeg').children) b.onclick = () => { SET.fps = +b.dataset.v; saveSet(); syncSet(); };
$('sens').oninput = e => { SET.sens = +e.target.value; saveSet(); };
$('fov').oninput = e => { SET.fov = +e.target.value; baseFov(); saveSet(); };
$('vol').oninput = e => { SET.vol = +e.target.value; setVolume(SET.vol); saveSet(); };

setupInput(canvas, { canLock: () => G.state === 'play', onUnlock: () => { if (G.state === 'play' && inp.device === 'kbm') pause(); }, toast, playing: () => G.state === 'play' });
resize(); applyQuality(); syncSet(); showBest(); placeBox(); Object.assign(car, carStart); updCar(0);
$('loading').textContent = ''; $('titleHint').textContent = isTouch ? 'Plays best with your phone sideways. A PS5 controller works too.' : 'Keyboard and mouse or a PS5 controller.';
requestAnimationFrame(loop);
// test hooks
const sim = (sec, aim) => { for (let n = 0; n < sec * 30 && G.state === 'play'; n++) { if (aim) autoAim(); update(1 / 30); endFrame(); } return G.state; };
function autoAim() { let b = null, bd = 1e9; for (const z of zombies) { if (z.dead || z.state === 'rise') continue; const d = Math.hypot(z.x - P.x, z.z - P.z); if (d < bd) { bd = d; b = z; } } inp.fire = false; if (b && bd < 25 && losTo(P.x, P.z, b.x, b.z)) { P.yaw = Math.atan2(-(b.x - P.x), -(b.z - P.z)); P.pitch = Math.atan2(1.2 * (b.m.scale || 1) - 1.62, bd); camera.rotation.set(P.pitch, P.yaw, 0); camera.position.set(P.x, 1.62, P.z); camera.updateMatrixWorld(); inp.fire = !inp.fire_last; inp.fire_last = inp.fire; } }
window.__ds = { inp, WD, box, build, toggleBuild, sim, G, P, zombies, pups, windows, doors, startRound, giveGun, hurt, gameOver, car, pieces, dropPup, spawnZombie, openDoor, damageZombie };
