// Dead Shift: core game loop, zombies, rounds, weapons, buying, building, car
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { inp, took, endFrame, setupInput, setDevice, pollKeyboard, pollGamepad, rumble, touchSprint, resetDriveTouch } from './input.js';
import { initAudio, setVolume, sfx, setEngine, setSqueal } from './audio.js';
import { initCarFx, clearCarFx, stepCar, unstick, idleCarFx, carBlocked, roomy } from './car.js';
import { S, GW, GH, surf, OUT, FLOOR, WIN, DOOR, BWALL, BDOOR, SPIKE, grid, zone, owner, idx, inb, at, tileOf, cx, doors, windows, openZones, buildMap, solidPlayer, solidZombie, solidCar, blocksBullet, collide, gridRay, dist, flow, spawnSpot, recenter, setProcProvider, ijOf, TREE, TRUNK_R, treeOff, safe, area, AREA_NAMES, windowShifts, rooms, WALL, GLASS, FENCE } from './map.js';
import { genChunk, initProc, roadAt, furnishFixed } from './proc.js';
import { initStream, updateStream, readsNear, live as liveChunks, stats as streamStats } from './stream.js';
import { pushOut } from './props.js';
import { makeZombie, animZombie, warmZombies, makeSoldier, animSoldier, makeGun as gunModel, makeArms, buildMats, pieceGeo, wallGeo } from './models.js';
import { T, setAniso } from './tex.js';
import { T2 } from './tex2.js';
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
setProcProvider(genChunk); initProc(scene); initStream(scene); initCarFx(scene);
// furniture for the original Lockwood buildings (houses, shops, police, bar, school, church, cabin, garage), kept clear of every doorway,
// window, wall-buy, perk, box spot and existing prop
const LW_FURN = (() => { try {
  const KIND = { house: 'house', police: 'police', bar: 'bar', church: 'church', school: 'school', cabin: 'cabin', garage: 'garage', food: 'diner' };
  const byName = { 'Gas Station': 'gas', 'Pharmacy': 'pharmacy', "Hank's Market": 'store', 'Hardware': 'hardware', 'Sporting Goods': 'hardware', 'Department Store': 'store' };
  const pts = []; const P2 = (x, z, r = 1.7) => pts.push([x, z, r]);
  for (const w of WD.wallbuys || []) P2(w.use.x, w.use.z, 2.2); for (const p of WD.perks || []) P2(p.use.x, p.use.z, 2.2); for (const b of WD.boxSpots || []) P2(b.use.x, b.use.z, 2.4);
  if (WD.swUse) P2(WD.swUse.x, WD.swUse.z, 2.2); if (WD.forgeUse) P2(WD.forgeUse.x, WD.forgeUse.z, 2.4);
  const list = [];
  for (const rm of rooms) {
    if (rm.z <= 3) continue; const kind = byName[rm.name] || KIND[rm.kind]; if (!kind) continue;
    const keep = pts.filter(p => p[0] > rm.i0 * S - 3 && p[0] < (rm.i1 + 1) * S + 3 && p[1] > rm.j0 * S - 3 && p[1] < (rm.j1 + 1) * S + 3);
    for (let j = rm.j0 - 1; j <= rm.j1 + 1; j++) for (let i = rm.i0 - 1; i <= rm.i1 + 1; i++) { const t = at(i, j), edge = i < rm.i0 || i > rm.i1 || j < rm.j0 || j > rm.j1;
      if (edge ? (t !== WALL && t !== GLASS && t !== FENCE) : t !== FLOOR) keep.push([cx(i), cx(j), edge ? 1.9 : 1.3]); }
    list.push({ kind, x0: rm.i0 * S, z0: rm.j0 * S, x1: (rm.i1 + 1) * S, z1: (rm.j1 + 1) * S, keep, story: { photo: rm.kind === 'house' } });
  }
  return { rooms: list.length, ...furnishFixed(list) };
} catch (e) { console.warn('lockwood furniture failed', e); return { rooms: 0, error: String(e) }; } })();
recenter(60, 30, true);
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
setProcProvider(genChunk);
const startPos = { x: cx(11), z: cx(10) }; // you wake up in the motel garage

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
const mmC = $('minimap'), mm = mmC.getContext('2d'); const mapImg = document.createElement('canvas'); const PPM = 3.6; let mapO = [0, 0];
const MMCOL = (() => { const h = c => [parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16)]; return { out: h('#20261c'), road: h('#3a3c3a'), dirt: h('#3a3226'), floorO: h('#6a6458'), floor: h('#3a3630'), win: h('#c09040'), door: h('#d0b050'), bw: h('#a07040'), spike: h('#805030'), tree: h('#142010'), wall: h('#9a9a9a') }; })();
function drawMapImg() { // 1 pixel per tile for the whole window; scaled up when drawn
  if (mapImg.width !== GW) { mapImg.width = GW; mapImg.height = GH; }
  const x = mapImg.getContext('2d'), im = x.createImageData(GW, GH), d = im.data;
  for (let k = 0; k < GW * GH; k++) { const t = grid[k]; const c = t === OUT ? (surf[k] === 2 || surf[k] === 1 ? MMCOL.road : surf[k] === 3 ? MMCOL.dirt : MMCOL.out) : t === FLOOR ? (openZones.has(zone[k]) ? MMCOL.floorO : MMCOL.floor) : t === WIN ? MMCOL.win : t === DOOR ? MMCOL.door : t === BWALL || t === BDOOR ? MMCOL.bw : t === SPIKE ? MMCOL.spike : t === TREE ? MMCOL.tree : t === 6 ? MMCOL.out : MMCOL.wall; d[k * 4] = c[0]; d[k * 4 + 1] = c[1]; d[k * 4 + 2] = c[2]; d[k * 4 + 3] = 255; }
  x.putImageData(im, 0, 0); mapO = [ijOf(0)[0], ijOf(0)[1]];
  G.mapDirty = false;
}
function drawMinimap() {
  if (G.mapDirty) drawMapImg();
  const w = mmC.width, px = P.driving ? car.x : P.x, pz = P.driving ? car.z : P.z, yaw = P.driving ? car.h : P.yaw;
  mm.clearRect(0, 0, w, w); mm.save(); mm.translate(w / 2, w / 2); mm.rotate(yaw); mm.imageSmoothingEnabled = false; mm.drawImage(mapImg, (mapO[0] * S - px) * PPM, (mapO[1] * S - pz) * PPM, GW * S * PPM, GH * S * PPM);
  mm.fillStyle = '#ff3030'; for (const z of zombies) if (!z.dead) { mm.beginPath(); mm.arc((z.x - px) * PPM, (z.z - pz) * PPM, 4, 0, 7); mm.fill(); }
  mm.fillStyle = '#5ab0ff'; const b = WD.boxSpots[box.spot].pos; mm.fillRect((b.x - px) * PPM - 5, (b.z - pz) * PPM - 5, 10, 10);
  mm.fillStyle = '#ffd040'; mm.fillRect((car.x - px) * PPM - 4, (car.z - pz) * PPM - 7, 8, 14);
  mm.restore(); mm.fillStyle = '#fff'; mm.beginPath(); mm.moveTo(w / 2, w / 2 - 10); mm.lineTo(w / 2 - 7, w / 2 + 8); mm.lineTo(w / 2 + 7, w / 2 + 8); mm.fill();
}

// ---------------- world objects state ----------------
const box = { spot: 0, state: 'idle', t: 0, key: null, uses: 0, cycleT: 0, model: null };
function placeBox() { const s = WD.boxSpots[box.spot]; WD.box.group.position.set(s.pos.x, 0, s.pos.z); WD.box.group.rotation.y = s.rot; WD.boxSpots.forEach((q, i) => q.crate.visible = i !== box.spot); }
const car = { x: 0, z: 0, h: 0, v: 0, vx: 0, vz: 0, yr: 0, steer: 0, slip: 0, squeal: 0, stuckT: 0, launch: 0 };
function findCarSpot() { for (const [i, j] of [[27, 12], [24, 11], [30, 14], [20, 16], [32, 8]]) { let ok = true; for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) if (!inb(i + a, j + b) || grid[idx(i + a, j + b)] !== OUT) ok = false; if (ok) return { x: cx(i), z: cx(j) }; } return { x: cx(27), z: cx(12) }; }
const carStart = findCarSpot();
const forge = { t: 0 };
const BM = buildMats();
const PIECES = [{ kind: 'wall', name: 'Wall', cost: 250, hp: 900, tile: BWALL }, { kind: 'door', name: 'Door', cost: 400, hp: 700, tile: BDOOR }, { kind: 'spikes', name: 'Spikes', cost: 300, hp: 1600, tile: SPIKE }];
const build = { on: false, sel: 0, rot: 0, ghost: null, gi: -1, gj: -1, ok: false };

// ---------------- reset / start ----------------
// boss heads on spikes near where you start: one per boss you drop this game
const trophies = [];
function addTrophy() {
  const n = trophies.length; const g = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.05, 1.5, 6), new THREE.MeshStandardMaterial({ color: 0x5a4632, roughness: 0.9 })); pole.position.y = 0.75; g.add(pole);
  const skin = new THREE.MeshStandardMaterial({ map: T2.zface ? T2.zface('#6f5f52') : null, color: 0x9a8a7a, roughness: 0.8 });
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 14, 10), skin); head.scale.set(1, 1.15, 1.05); head.position.y = 1.62; head.rotation.y = Math.PI; g.add(head);
  for (const sx of [-0.07, 0.07]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 4), new THREE.MeshBasicMaterial({ color: 0xff3020 })); e.position.set(sx, 1.66, 0.18); g.add(e); }
  const lab = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.label('BOSS ' + (n + 1) + ' - RD ' + G.round, 'rgba(0,0,0,0.5)', '#ffcc66', 512, 96, 'bold 44px Arial'), transparent: true, depthWrite: false })); lab.scale.set(1.0, 0.19, 1); lab.position.y = 2.0; g.add(lab);
  const spot = trophySpots[n % trophySpots.length]; g.position.set(spot.x, 0, spot.z); scene.add(g); trophies.push(g);
  toast('Boss trophy added near the start (' + trophies.length + ')');
}
function clearAll() {
  for (const t of trophies) scene.remove(t); trophies.length = 0;
  for (const z of zombies) scene.remove(z.m.root); zombies.length = 0;
  for (const p of pups) scene.remove(p.g); pups.length = 0;
  for (const g of gases) scene.remove(g.sp); gases.length = 0;
  for (const n of nades) scene.remove(n.m); nades.length = 0;
  for (const p of pieces) { scene.remove(p.g); if (inb(p.i, p.j)) { grid[idx(p.i, p.j)] = p.under; owner[idx(p.i, p.j)] = -1; } } pieces.length = 0;
}
function newGame() {
  clearAll();
  buildMap(); // restores doors/windows/grid (window back at the origin)
  // props placed by the world are lost by buildMap; re-mark them
  for (const [i, j] of propTiles) grid[idx(i, j)] = 6;
  recenter(startPos.x, startPos.z, true);
  for (const d of doors) WD.doorMeshes[d.id].visible = true;
  for (const w of windows) { w.planks = 6; WD.planks[w.id].list.forEach(p => p.visible = true); }
  Object.assign(G, { t: 0, round: 0, toSpawn: 0, between: false, kills: 0, heads: 0, points: 500, power: false, flowDirty: true, insta: 0, dbl: 0, mapDirty: true, downs: 0, god: false });
  Object.assign(P, { x: startPos.x, z: startPos.z, y: 0, vy: 0, yaw: Math.PI, pitch: 0, hp: 100, maxHp: 100, lastHit: -9, cur: 0, reloadT: 0, fireT: 0, knifeT: 0, swapT: 0, nades: 2, view: 'fp', ads: 0, driving: false });
  P.perks.clear(); P.guns = [makeGun('pistol')]; setVmGun();
  setPower(false);
  box.spot = 0; box.state = 'idle'; box.uses = 0; if (box.model) { WD.box.gunSlot.remove(box.model); box.model = null; } WD.box.lid.rotation.x = 0; placeBox();
  Object.assign(car, { x: carStart.x, z: carStart.z, h: 0, v: 0, vx: 0, vz: 0, yr: 0, steer: 0, stuckT: 0 }); setEngine(false); setSqueal(0); clearCarFx();
  build.on = false; document.body.classList.remove('building', 'driving'); $('buildbar').classList.add('hidden'); $('carhud').classList.add('hidden');
  startRound(1); updHud();
}
const propTiles = []; for (let k = 0; k < grid.length; k++) if (grid[k] === 6) propTiles.push(ijOf(k));
const trophySpots = (() => { const out = [], si = tileOf(startPos.x), sj = tileOf(startPos.z); const c = [];
  for (let di = -5; di <= 5; di++) for (let dj = -5; dj <= 5; dj++) { const i = si + di, j = sj + dj; if (!inb(i, j) || Math.hypot(di, dj) < 1.5) continue; let ok = true; for (let a = -1; a <= 1 && ok; a++) for (let b = -1; b <= 1; b++) if (!inb(i + a, j + b) || grid[idx(i + a, j + b)] !== FLOOR) { ok = false; break; } if (ok) c.push([Math.hypot(di, dj), i, j]); }
  c.sort((p, q) => p[0] - q[0]); for (const [, i, j] of c.slice(0, 6)) out.push({ x: cx(i), z: cx(j) }); if (!out.length) out.push({ x: startPos.x + 1, z: startPos.z + 1 }); return out; })();
setTimeout(() => { try { warmZombies(); } catch (e) { console.warn(e); } }, 50);
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
  G.round = r; G.toSpawn = zCount(r); G.bosses = r % 10 === 0 ? Math.min(3, r / 10) : 0; G.screamAdds = 0; G.spawnT = r === 1 ? 3 : 1.5; G.between = false; G.pupsRound = 0; G.repairPts = 0;
  if (r > 1) { P.nades = Math.min(4, P.nades + 2); sfx.round(true); center('ROUND ' + r + (r === 100 ? '<small>THE LAST ONE</small>' : ''), 3); }
  else center('DEAD SHIFT<small>SURVIVE THE NIGHT</small>', 3.5);
  drawRound(); $('round').classList.add('flash'); setTimeout(() => $('round').classList.remove('flash'), 1200); updHud();
}
function updRounds(dt) {
  if (G.between) { G.betweenT -= dt; if (G.betweenT <= 0) startRound(G.round + 1); return; }
  const alive = zombies.filter(z => !z.dead).length;
  G.spawnT -= dt;
  if (G.bosses > 0 && G.toSpawn <= zCount(G.round) * (0.75 - 0.25 * (Math.min(3, G.round / 10) - G.bosses)) && alive < maxAlive() + 1) { G.bosses--; spawnZombie('boss'); updHud(); }
  if (G.toSpawn > 0 && alive < maxAlive() && G.spawnT <= 0) { spawnZombie(); G.toSpawn--; G.spawnT = Math.max(0.35, 2.0 - G.round * 0.08) * (0.6 + R() * 0.8); updHud(); }
  if (G.toSpawn === 0 && alive === 0 && !(G.bosses > 0)) { G.between = true; G.betweenT = 8; sfx.round(false); center(G.round === 100 ? 'YOU SURVIVED ROUND 100<small>KEEP GOING IF YOU DARE</small>' : 'ROUND ' + G.round + ' SURVIVED', 4); updHud(); }
}

// ---------------- zombies ----------------
function spawnZombie(force) {
  const r = G.round, roll = R();
  let type = 'walker'; if (r >= 5 && roll < 0.05) type = 'screamer'; else if (r >= 6 && roll < 0.15) type = 'toxic'; else if (r >= 4 && roll < 0.28) type = 'fat'; else if (r >= 3 && roll < 0.46) type = 'runner';
  if (force) type = force;
  const px = P.driving ? car.x : P.x, pz = P.driving ? car.z : P.z;
  const spot = spawnSpot(px, pz); const cand = spot ? [spot] : [[tileOf(px) + 6, tileOf(pz) + 6]];
  const [si, sj] = pick(cand); let x = cx(si) + (R() - 0.5) * 1.4, z = cx(sj) + (R() - 0.5) * 1.4;
  const m = makeZombie(type); let hp = zHp(r), sp = Math.min(1.0 + r * 0.1, 1.9) * (0.85 + R() * 0.3);
  if (r >= 8 && type === 'walker' && R() < Math.min(0.6, (r - 7) * 0.08)) sp = 2.8 + R() * 0.6;
  if (type === 'runner') { sp = 3.9 + Math.min(r * 0.04, 1.2); hp *= 0.75; }
  if (type === 'fat') { sp = Math.min(0.9 + r * 0.05, 1.6); hp *= 2.3; }
  if (type === 'toxic') { sp = 1.7; hp *= 0.9; }
  if (type === 'screamer') { sp = 2.3; hp *= 0.7; }
  if (type === 'boss') { sp = 1.6 + Math.min(r * 0.01, 0.6); hp = zHp(r) * 14 + 4000; x = cx(si); z = cx(sj); sfx.zboss(Math.hypot(x - px, z - pz), 0); center('BOSS ZOMBIE<small>IT HEARD YOU</small>', 3); rumble(0.8, 0.8, 500); }
  m.root.position.set(x, -1.8, z); scene.add(m.root);
  zombies.push({ m, type, x, z, hp, maxHp: hp, speed: sp, state: 'rise', t: 0, atk: 0, atkCd: 0, dead: false, deadT: 0, yaw: R() * 6.28, rip: 0, stun: 0, rage: 0, screamCd: 4 + R() * 4, screamT: 0, groanT: 2 + R() * 6, best: 1e9, stuckT: 0, cur: 0, head: false });
}
function losTo(x0, z0, x1, z1) { const d = Math.hypot(x1 - x0, z1 - z0); return gridRay(x0, z0, x1 - x0, z1 - z0, d, (t, k) => solidZombie(t, k) || t === WIN) >= d - 0.01; }
const N8 = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
function updZombie(z, dt, tx, tz) {
  const m = z.m;
  if (z.dead) { z.deadT += dt; const k = Math.min(1, z.deadT / 0.6); m.body.rotation.x = -k * Math.PI / 2 * z.fallDir; m.body.position.y = -k * 0.75 * (m.scale || 1) + Math.sin(k * Math.PI) * 0.2; const ss = CORPSE_T; if (z.deadT > ss) m.root.position.y = -(z.deadT - ss) * 0.8; if (z.deadT > ss + 1.6) { scene.remove(m.root); zombies.splice(zombies.indexOf(z), 1); } return; }
  if (z.state === 'rise') { z.t += dt; const k = Math.min(1, z.t / 1.4); m.root.position.y = -1.8 * (1 - k); m.root.rotation.y = z.yaw; animZombie(m, G.t, 0, 0.6, true); if (k >= 1) z.state = 'move'; return; }
  const dx = tx - z.x, dz = tz - z.z, dp = Math.hypot(dx, dz);
  if (z.stun > 0) { z.stun -= dt; m.root.position.set(z.x, 0, z.z); animZombie(m, G.t, 0, 0, false); return; }
  if (z.rage > 0) z.rage -= dt;
  if (z.type === 'screamer') {
    z.screamCd -= dt;
    if (z.screamT > 0) { z.screamT -= dt; m.scream = Math.min(1, m.scream + dt * 4); z.yaw += angDiff(z.yaw, Math.atan2(dx, dz)) * Math.min(1, dt * 6); m.root.position.set(z.x, 0, z.z); m.root.rotation.y = z.yaw; animZombie(m, G.t, 0, 0, false); if (z.screamT <= 0) { m.scream = 0; screamAlert(z); } return; }
    if (z.screamCd <= 0 && dp < 24 && dp > 3 && losTo(z.x, z.z, tx, tz)) { z.screamT = 1.5; z.screamCd = 14 + R() * 6; sfx.zscream(dp, zPan(dx, dz)); return; }
  }
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
  let speed = z.speed * (z.rage > 0 ? 1.35 : 1); const onT = grid[k];
  if (onT === WIN) speed *= 0.45;
  if (onT === SPIKE) { speed *= 0.5; const p = pieces.find(q => q.k === k); z.hp -= 160 * dt * Math.max(1, G.round / 6); if (p) { p.hp -= 12 * dt; if (p.hp <= 0) removePiece(p); } if (R() < dt * 2) sfx.spike(); if (z.hp <= 0) { killZombie(z, 'spike'); return; } }
  let mvx = gx - z.x, mvz = gz - z.z; const ml = Math.hypot(mvx, mvz);
  let attacking = false;
  if (mode === 'window' && ml < 0.35) { attacking = true; z.yaw = Math.atan2(-target.outDir[0], -target.outDir[1]); z.rip += dt; if (z.rip > 1.5) { z.rip = 0; target.planks = Math.max(0, target.planks - 1); WD.planks[target.id].list[target.planks].visible = false; sfx.plank(); G.flowDirty = true; } }
  else if (mode === 'piece' && target && Math.hypot(target.x - z.x, target.z - z.z) < 1.55) { attacking = true; z.yaw = Math.atan2(target.x - z.x, target.z - z.z); target.hp -= 30 * dt; if (R() < dt * 1.2) sfx.plank(); if (target.hp <= 0) removePiece(target); }
  else if (dp < 1.25 + (z.type === 'fat' ? 0.2 : z.type === 'boss' ? 0.5 : 0)) { attacking = true; z.yaw = Math.atan2(dx, dz); }
  else if (ml > 0.01) { const st = Math.min(ml, speed * dt); z.x += mvx / ml * st; z.z += mvz / ml * st; z.yaw += angDiff(z.yaw, Math.atan2(mvx, mvz)) * Math.min(1, dt * 8); }
  // player attack
  z.atkCd -= dt;
  const reachX = z.type === 'fat' ? 0.2 : z.type === 'boss' ? 0.6 : 0;
  if (dp < 1.3 + reachX && z.atkCd <= 0 && z.atk === 0) { z.atk = 0.001; if (R() < 0.6) sfx.zattack(z.type, dp, zPan(dx, dz)); }
  if (z.atk > 0) { const prev = z.atk; z.atk += dt / (z.type === 'boss' ? 1.0 : 0.8); if (prev < 0.5 && z.atk >= 0.5 && dp < 1.6 + reachX && P.y < 1.2) hurt(z.type === 'boss' ? (P.driving ? 30 : 60) : P.driving ? 18 : 34); if (z.atk >= 1) { z.atk = 0; z.atkCd = 0.4; } }
  const p = { x: z.x, z: z.z }; collide(p, 0.3, solidZombie); z.x = p.x; z.z = p.z;
  // progress / stuck
  const d = dist[k]; if (d < z.best - 0.5) { z.best = d; z.stuckT = 0; } else z.stuckT += dt;
  if ((z.stuckT > 22 && dp > 18) || dp > 140 || !inb(tileOf(z.x), tileOf(z.z))) { const sp = spawnSpot(P.x, P.z) || [tileOf(P.x) + 8, tileOf(P.z)]; const [si, sj] = sp; z.x = cx(si); z.z = cx(sj); z.best = 1e9; z.stuckT = 0; z.state = 'rise'; z.t = 0; }
  m.root.position.set(z.x, 0, z.z); m.root.rotation.y = z.yaw;
  z.cur = lerp(z.cur, attacking ? 0 : speed, Math.min(1, dt * 6));
  animZombie(m, G.t, z.cur, Math.max(attacking ? 0.5 + 0.5 * Math.sin(G.t * 6) : 0, z.atk > 0 ? Math.sin(z.atk * Math.PI) : 0), onT === WIN);
  z.groanT -= dt; if (z.groanT <= 0) { z.groanT = 3 + R() * 7; if (dp < 30) { if (z.type === 'boss' && R() < 0.4) sfx.zboss(dp, zPan(dx, dz)); else sfx.zgroan(z.type, dp, zPan(dx, dz)); } }
}
function zPan(dx, dz) { const rel = angDiff(P.yaw, Math.atan2(-dx, -dz)); return clamp(-Math.sin(rel), -1, 1); }
// a screamer's shriek enrages nearby zombies and calls a few more in
function screamAlert(z) {
  for (const q of zombies) if (!q.dead && q !== z && Math.hypot(q.x - z.x, q.z - z.z) < 30) q.rage = 9;
  if (G.screamAdds < 8) { G.toSpawn += 2; G.screamAdds += 2; }
  toast('A screamer called the horde'); updHud();
}
function separate() {
  for (let a = 0; a < zombies.length; a++) { const A = zombies[a]; if (A.dead || A.state === 'rise') continue;
    for (let b = a + 1; b < zombies.length; b++) { const Bz = zombies[b]; if (Bz.dead || Bz.state === 'rise') continue; const dx = Bz.x - A.x, dz = Bz.z - A.z, d = Math.hypot(dx, dz); if (d < 0.62 && d > 1e-4) { const pu = (0.62 - d) / 2; A.x -= dx / d * pu; A.z -= dz / d * pu; Bz.x += dx / d * pu; Bz.z += dz / d * pu; } }
    if (!P.driving) { const dx = P.x - A.x, dz = P.z - A.z, d = Math.hypot(dx, dz); if (d < 0.7 && d > 1e-4) { A.x -= dx / d * (0.7 - d); A.z -= dz / d * (0.7 - d); } }
  }
}
function damageZombie(z, dmg, head, how) {
  if (z.dead) return;
  if (G.insta > 0 && z.type !== 'boss') dmg = 1e12;
  z.hp -= dmg; sfx.hit(head);
  if (z.hp <= 0) killZombie(z, how, head); else { addPts(10); hitMark(false); if (R() < 0.2) sfx.zhurt(z.type, Math.hypot(z.x - P.x, z.z - P.z), zPan(z.x - P.x, z.z - P.z)); }
}
function killZombie(z, how, head) {
  z.dead = true; z.deadT = 0; z.fallDir = R() < 0.5 ? 1 : -1;
  { const dead = zombies.filter(q => q.dead && q !== z && q.deadT < CORPSE_T); if (dead.length >= MAX_CORPSES) { dead.sort((a, b) => b.deadT - a.deadT); for (let n = 0; n <= dead.length - MAX_CORPSES; n++) dead[n].deadT = CORPSE_T; } } G.kills++; if (head) G.heads++;
  addPts(z.type === 'boss' ? 1500 : how === 'knife' ? 130 : head ? 100 : how === 'nuke' ? 0 : 60); hitMark(true); sfx.kill(); if (how !== 'nuke' || R() < 0.2) sfx.zdeath(z.type, Math.hypot(z.x - P.x, z.z - P.z), zPan(z.x - P.x, z.z - P.z));
  if (z.type === 'boss') { addTrophy(); dropPup(z.x, z.z, 'max'); }
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
  if (p.kind === 'nuke') { $('flash').style.opacity = 1; flashT = 1; for (const z of zombies) if (!z.dead && z.type !== 'boss') killZombie(z, 'nuke'); addPts(400); sfx.boom(); }
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
  const d = g.def; sfx.shot(d.sound[0], d.sound[1], !!d.wonder, d.kind); rumble(0.3, 0.6, 60);
  camera.getWorldPosition(rayO);
  const pellets = d.pellets || 1;
  for (let n = 0; n < pellets; n++) {
    const spr = d.spread * (P.ads > 0.5 ? 0.35 : 1) * (P.speed > 1 ? 1.6 : 1);
    rayD.set((R() - 0.5) * 2 * spr, (R() - 0.5) * 2 * spr, -1).normalize().applyQuaternion(camera.quaternion);
    if (!d.wave) shootRay(rayO, rayD, g);
  }
  if (d.wave) waveBlast(rayO, rayD, g);
  P.pitch = clamp(P.pitch + 0.006 + d.sound[1] * 0.01, -1.45, 1.45);
  muzzleT = 0.05; updHud();
  if (g.clip === 0) startReload();
}
let muzzleT = 0;
const muzzle = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.glow(), color: 0xffc070, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })); muzzle.scale.set(0.25, 0.25, 1); vmScene.add(muzzle);
const headP = new THREE.Vector3(), bodyP = new THREE.Vector3();
// Surge Cannon: a cone shockwave that hits every zombie in front of you and throws them back
function waveBlast(o, d, g) {
  const range = g.def.wave * (g.pap ? 1.3 : 1), fx = d.x, fz = d.z, fl = Math.hypot(fx, fz) || 1;
  for (let n = 1; n <= 5; n++) { const t = n * range / 5.5; spriteFx(T.glow(), 0x60c8ff, o.x + fx / fl * t, 1.1, o.z + fz / fl * t, 0.8 + n * 0.7, 0.3 + n * 0.05, { add: true, grow: 3 }); }
  for (const z of zombies) {
    if (z.dead || z.state === 'rise') continue;
    const ox = z.x - o.x, oz = z.z - o.z, dd = Math.hypot(ox, oz); if (dd > range || dd < 0.01) continue;
    if ((ox * fx + oz * fz) / (dd * fl) < 0.78) continue; // ~38 degree half-angle
    if (!losTo(o.x, o.z, z.x, z.z)) continue;
    const k = 1 - dd / (range * 1.15);
    const push = (z.type === 'boss' ? 0.6 : z.type === 'fat' ? 1.6 : 3.2) * k; const p = { x: z.x + ox / dd * push, z: z.z + oz / dd * push }; collide(p, 0.3, solidZombie); z.x = p.x; z.z = p.z;
    z.stun = 0.8 * k; damageZombie(z, g.dmg * (0.4 + 0.6 * k), false, 'gun');
  }
}
function shootRay(o, d, g) {
  const hl = Math.hypot(d.x, d.z); let maxT = 150;
  if (hl > 1e-4) maxT = gridRay(o.x, o.z, d.x, d.z, 150 * hl, t => blocksBullet(t)) / hl;
  if (d.y < -1e-4) maxT = Math.min(maxT, -o.y / d.y);
  if (d.y > 1e-4) maxT = Math.min(maxT, (3.4 - o.y) / d.y);
  const hits = [];
  for (const z of zombies) {
    if (z.dead || z.state === 'rise' && z.t < 0.7) continue;
    if (Math.hypot(z.x - o.x, z.z - o.z) > maxT + 2) continue;
    const sc = z.m.scale || 1; z.m.root.updateMatrixWorld(true); headP.copy(z.m.headC); z.m.head.localToWorld(headP); bodyP.copy(z.m.bodyC); z.m.spine.localToWorld(bodyP);
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
  for (let i = nades.length - 1; i >= 0; i--) { const n = nades[i]; n.t -= dt; n.vy -= 18 * dt; const nx = n.x + n.vx * dt, nz = n.z + n.vz * dt; const tt = at(tileOf(nx), tileOf(nz)); if (solidPlayer(tt) || tt === WIN) { n.vx *= -0.4; n.vz *= -0.4; } else { n.x = nx; n.z = nz; } n.y += n.vy * dt; if (n.y < 0.08) { n.y = 0.08; n.vy *= -0.35; n.vx *= 0.7; n.vz *= 0.7; } n.m.position.set(n.x, n.y, n.z);
    if (n.t <= 0) { scene.remove(n.m); nades.splice(i, 1); sfx.boom(); rumble(1, 1, 300); spriteFx(T.glow(), 0xffa040, n.x, 1, n.z, 3, 0.4, { add: true, grow: 10 }); spriteFx(T.puff(), 0x505050, n.x, 1.2, n.z, 2, 1.6, { grow: 3, vy: 0.8, op: 0.8 });
      for (const z of zombies) { if (z.dead) continue; const d = Math.hypot(z.x - n.x, z.z - n.z); if (d < 5.5) damageZombie(z, (900 + G.round * 120) * (1 - d / 6), false, 'nade'); }
      const pd = Math.hypot(P.x - n.x, P.z - n.z); if (pd < 3.5 && !P.driving) hurt(25 * (1 - pd / 3.5)); } }
}

// ---------------- interactions ----------------
function near(p, r) { return Math.hypot(p.x - P.x, p.z - P.z) < r; }
function prompt(txt) { $('prompt').innerHTML = txt; }
function buy(cost) { if (G.points < cost) { sfx.deny(); toast('Not enough points'); return false; } addPts(cost, true); sfx.buy(); updHud(); return true; }
const K = () => `<span class="k">${keyName('use')}</span>`;
let readOpen = null;
function showRead(r) { const el = $('readbox'); el.innerHTML = '<div>' + r.text.replace(/</g, '&lt;') + '</div><small>' + (inp.device === 'touch' ? 'Tap USE to close, or walk away' : 'Press ' + keyName('use') + ' to close') + '</small>'; el.classList.remove('hidden'); el.classList.toggle('radio', !!r.radio); readOpen = { r, t: performance.now() }; if (r.radio) sfx.radio(); else sfx.click?.(); }
function closeRead() { $('readbox').classList.add('hidden'); readOpen = null; }
function readables(use) {
  if (readOpen) return '';
  const r = readsNear(P.x, P.z); if (!r) return '';
  if (use) { showRead(r); return ''; }
  return K() + (r.radio ? ' Listen to the radio' : r.text.startsWith('Journal') ? ' Read the journal page' : ' Read the note left here');
}
function interact(dt) {
  let txt = ''; const use = took('use'), hold = inp.use;
  if (P.driving) { const since = (performance.now() - (P.carT || 0)) / 1000; P.carStillT = Math.abs(car.v) < 1 ? (P.carStillT || 0) + dt : 0; prompt(since < 2.5 || P.carStillT > 1.2 ? K() + ' Get out' : ''); if (use) exitCar(); return; }
  if (readOpen) { const r = readOpen.r; if (Math.hypot(r.x - P.x, r.z - P.z) > (r.r || 3) + 2 || performance.now() - readOpen.t > 12000) closeRead(); else if (use) { closeRead(); prompt(''); return; } }
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
  if (!txt) txt = readables(use);
  prompt(txt || (build.on ? build.promptTxt || '' : ''));
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
function toggleBuild() { build.on = !build.on; document.body.classList.toggle('building', build.on); $('buildbar').classList.toggle('hidden', !build.on); if (!build.on) { if (build.ghost) build.ghost.visible = false; if (build.ring) build.ring.visible = false; } drawBuildbar(); if (build.on) toast('Build mode: ' + (inp.device === 'touch' ? 'tap a piece below, aim at the ground, then tap PLACE' : inp.device === 'pad' ? 'Triangle changes piece, R2 places, Square rotates' : 'click a piece or press 1-3 / Q to choose, click to place, T rotates') ); }
function drawBuildbar() { const pc = PIECES; $('buildbar').innerHTML = pc.map((p, i) => `<div data-bi="${i}" class="${i === build.sel ? 'sel' : ''}${G.points < p.cost ? ' poor' : ''}"><b>${i + 1}</b> ${p.name}<span>${p.cost} pts</span></div>`).join(''); build.barPts = G.points < pc[0].cost ? 0 : G.points; }
function selectPiece(i) { if (i === build.sel || i < 0 || i >= PIECES.length) return; build.sel = i; drawBuildbar(); if (build.ghost) { scene.remove(build.ghost); build.ghost = null; } sfx.click?.(); toast(PIECES[i].name + ' selected'); }
document.getElementById('buildbar')?.addEventListener('click', e => { const el = e.target.closest('[data-bi]'); if (el) { inp.buildSel = +el.dataset.bi; e.stopPropagation(); } });
const ghostMat = new THREE.MeshBasicMaterial({ color: 0x40ff60, transparent: true, opacity: 0.42, depthWrite: false });
const ringMat = new THREE.MeshBasicMaterial({ color: 0x40ff60, transparent: true, opacity: 0.8, depthWrite: false, side: THREE.DoubleSide });
function makeGhost(kind) { const g = new THREE.Group(); const geo = pieceGeo(kind); g.add(new THREE.Mesh(geo.wood, ghostMat)); if (geo.metal) g.add(new THREE.Mesh(geo.metal, ghostMat)); if (kind === 'door') { const gm = new THREE.Mesh(pieceGeo('gate').wood, ghostMat); gm.position.x = -0.88; g.add(gm); } g.traverse(o => { o.renderOrder = 2; }); return g; }
// ---- snapping: pieces sit on the 2 m grid; walls grow an arm toward every joined neighbour so runs and corners meet flush
const ADJ = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const viewAxis = () => Math.abs(Math.sin(P.yaw)) > Math.abs(Math.cos(P.yaw)) ? 1 : 0; // a lone piece faces you
function joins(i, j) {
  const pc = [], st = [];
  for (let d = 0; d < 4; d++) { const t = at(i + ADJ[d][0], j + ADJ[d][1]); if (t === BWALL || t === BDOOR) pc.push(d); else if (t === WALL || t === GLASS || t === WIN || t === FENCE) st.push(d); }
  if (pc.length < 2) for (const d of st) if (!pc.includes(d)) pc.push(d); // butt a short run up against a building wall
  return pc;
}
function wallKey(i, j, defAxis) {
  const J = joins(i, j), m = new Map();
  for (const d of J) m.set(d, d === 0 || d === 2 ? 'p' : 'c');
  if (J.length === 0) for (const d of (defAxis ? [2, 3] : [0, 1])) m.set(d, 'e');
  else if (J.length === 1) m.set(J[0] ^ 1, 'e');
  return [...m].sort((a, b) => a[0] - b[0]).map(([d, v]) => d + ':' + v).join(',');
}
function pieceAxis(kind, i, j, defAxis) {
  let J; if (kind === 'spikes') { J = []; for (let d = 0; d < 4; d++) if (at(i + ADJ[d][0], j + ADJ[d][1]) === SPIKE) J.push(d); } else J = joins(i, j);
  const x = J.some(d => d < 2), z = J.some(d => d >= 2); return x && !z ? 0 : z && !x ? 1 : defAxis;
}
function shapeOf(kind, i, j, defAxis) { return kind === 'wall' ? { key: 'w' + wallKey(i, j, defAxis), geo: wallGeo(wallKey(i, j, defAxis)), ry: 0 } : { key: kind + pieceAxis(kind, i, j, defAxis), geo: null, ry: pieceAxis(kind, i, j, defAxis) ? Math.PI / 2 : 0 }; }
function refreshPieceAt(i, j) {
  const p = pieces.find(q => q.i === i && q.j === j); if (!p) return;
  const sh = shapeOf(p.kind, i, j, p.defAxis); if (sh.key === p.shape) return; p.shape = sh.key;
  if (sh.geo) { p.g.children[0].geometry = sh.geo.wood; p.g.children[1].geometry = sh.geo.metal; } else p.g.rotation.y = sh.ry;
}
function refreshAround(i, j) { for (const [di, dj] of ADJ) refreshPieceAt(i + di, j + dj); }
function setGhostShape(pc, gi, gj, defAxis) {
  const sh = shapeOf(pc.kind, gi, gj, defAxis);
  if (build.ghost && build.ghostKey === sh.key) return;
  if (build.ghost) scene.remove(build.ghost);
  if (sh.geo) { const g = new THREE.Group(); g.add(new THREE.Mesh(sh.geo.wood, ghostMat)); g.add(new THREE.Mesh(sh.geo.metal, ghostMat)); g.traverse(o => { o.renderOrder = 2; }); build.ghost = g; }
  else { build.ghost = makeGhost(pc.kind); build.ghost.rotation.y = sh.ry; }
  build.ghostKey = sh.key; scene.add(build.ghost);
}
function buildReason(pc, gi, gj) {
  if (!inb(gi, gj)) return 'Too far out';
  const t = grid[idx(gi, gj)];
  if (tileOf(P.x) === gi && tileOf(P.z) === gj) return 'You are standing there - step back';
  if (t !== OUT && t !== FLOOR) return t === BWALL || t === BDOOR || t === SPIKE ? 'Already built here' : 'Something is in the way';
  if (zombies.some(z => !z.dead && tileOf(z.x) === gi && tileOf(z.z) === gj)) return 'A zombie is in the way';
  if (Math.abs(cx(gi) - car.x) < 2.6 && Math.abs(cx(gj) - car.z) < 2.6) return 'The car is in the way';
  if (pushOut({ x: cx(gi), z: cx(gj) }, 0.7)) return 'Something is in the way';
  if (G.points < pc.cost) return 'Need ' + pc.cost + ' points (you have ' + G.points + ')';
  return '';
}
function updBuild() {
  if (!build.on) { if (build.ring) build.ring.visible = false; return; }
  if (took('swap')) selectPiece((build.sel + 1) % PIECES.length);
  for (let n = 0; n < PIECES.length; n++) if (took('slot' + (n + 1))) selectPiece(n);
  if (inp.buildSel != null) { selectPiece(inp.buildSel); inp.buildSel = null; }
  if (took('rotate')) { build.rot ^= 1; }
  if ((build.barPts === 0) !== (G.points < PIECES[0].cost) || G.points !== build.lastPts) { build.lastPts = G.points; drawBuildbar(); }
  const pc = PIECES[build.sel];
  if (!build.ring) { const r = new THREE.Mesh(new THREE.RingGeometry(1.25, 1.42, 4, 1), ringMat); r.rotation.x = -Math.PI / 2; r.geometry.rotateZ(Math.PI / 4); r.renderOrder = 2; scene.add(r); build.ring = r; }
  const fx_ = -Math.sin(P.yaw), fz = -Math.cos(P.yaw); const gi = tileOf(P.x + fx_ * 2.4), gj = tileOf(P.z + fz * 2.4);
  const why = buildReason(pc, gi, gj); build.reason = why; build.ok = !why || why.startsWith('Need ');
  const good = !why;
  const defAxis = viewAxis() ^ build.rot; setGhostShape(pc, gi, gj, defAxis);
  build.gi = gi; build.gj = gj; build.ghost.visible = true; build.ghost.position.set(cx(gi), 0.02, cx(gj));
  build.ring.visible = true; build.ring.position.set(cx(gi), 0.04, cx(gj));
  const flash = build.flashT > 0; build.flashT = Math.max(0, (build.flashT || 0) - 1 / 60);
  const col = good ? 0x40ff60 : 0xff4030; ghostMat.color.set(col); ringMat.color.set(col); ghostMat.opacity = flash ? 0.75 : 0.42 + Math.sin(performance.now() / 180) * 0.08;
  build.promptTxt = (good ? pc.name + ' - ' + pc.cost + ' pts - ' + (inp.device === 'touch' ? 'tap PLACE' : inp.device === 'pad' ? 'R2 to place' : 'click to place') : pc.name + ': ' + why);
  const want = took('place') || (inp.fire && !P.semi);
  if (inp.fire) P.semi = true;
  if (want) { if (why) { sfx.deny(); build.flashT = 0.4; toast("Can't place: " + why); } else if (buy(pc.cost)) { placePiece(pc, gi, gj, defAxis); drawBuildbar(); build.ghostKey = null; } }
}
function placePiece(pc, i, j, defAxis) {
  const k = idx(i, j); const g = new THREE.Group(); const geo = pc.kind === 'wall' ? wallGeo(wallKey(i, j, defAxis)) : pieceGeo(pc.kind);
  const w = new THREE.Mesh(geo.wood, BM.wood); w.castShadow = true; g.add(w); if (geo.metal) g.add(new THREE.Mesh(geo.metal, BM.metal));
  let gate = null; if (pc.kind === 'door') { gate = new THREE.Group(); gate.position.x = -0.88; const gm = new THREE.Mesh(pieceGeo('gate').wood, BM.wood); gate.add(gm); g.add(gate); }
  const sh = shapeOf(pc.kind, i, j, defAxis);
  g.position.set(cx(i), 0, cx(j)); g.rotation.y = sh.ry; scene.add(g);
  const p = { k, i, j, x: cx(i), z: cx(j), g, gate, hp: pc.hp, kind: pc.kind, tile: pc.tile, under: grid[k], defAxis, shape: sh.key }; pieces.push(p); grid[k] = pc.tile; owner[k] = pieces.length - 1; sfx.build(); G.flowDirty = true; G.mapDirty = true;
  refreshAround(i, j); return p;
}
function onWindowMoved() { // tile arrays slid with the player: re-lay built pieces, redo the flow field and the map
  for (let n = 0; n < pieces.length; n++) { const p = pieces[n]; if (inb(p.i, p.j)) { p.k = idx(p.i, p.j); if (grid[p.k] !== p.tile) { p.under = grid[p.k]; grid[p.k] = p.tile; } owner[p.k] = n; } else p.k = -1; }
  G.flowDirty = true; G.mapDirty = true;
}
function removePiece(p) { const i = pieces.indexOf(p); if (i < 0) return; scene.remove(p.g); if (p.k >= 0 && inb(p.i, p.j)) { const k = idx(p.i, p.j); grid[k] = p.under; owner[k] = -1; } pieces.splice(i, 1); refreshAround(p.i, p.j); sfx.crash(0.4); G.flowDirty = true; G.mapDirty = true; }

// ---------------- car ----------------
function enterCar() { resetDriveTouch(); P.driving = true; P.carT = performance.now(); P.carStillT = 0; sfx.carDoor(); document.body.classList.add('driving'); $('carhud').classList.remove('hidden'); build.on = false; document.body.classList.remove('building'); $('buildbar').classList.add('hidden'); if (build.ghost) build.ghost.visible = false; setEngine(true, 0); }
function exitCar() {
  resetDriveTouch(); if (readOpen) closeRead();
  P.driving = false; sfx.carDoor(); document.body.classList.remove('driving'); $('carhud').classList.add('hidden'); setEngine(false); WD.carLight.intensity = 0;
  for (const s of [1, -1]) { const x = car.x + Math.cos(car.h) * 1.8 * s, z = car.z - Math.sin(car.h) * 1.8 * s; const t = at(tileOf(x), tileOf(z)); if (!solidPlayer(t)) { P.x = x; P.z = z; break; } }
  P.yaw = car.h; car.v = car.vx = car.vz = car.yr = 0; setSqueal(0);
}
// Fog cull: past ~80 m at ground level the fog hides everything (about 97% fog colour), so meshes whose nearest edge is that far
// away are moved to a hidden layer. This cuts draw calls a lot without changing what you can see. From the air the fog thins
// and nothing is culled.
const _v = new THREE.Vector3(); let fogN = 0; const FOGL = 1;
camera.layers.enable(0);
function fogCull() {
  if (++fogN % 10) return; const air = P.y > 8; const lim = 80, cx_ = camera.position.x, cz_ = camera.position.z;
  scene.traverse(o => {
    if (!(o.isMesh || o.isInstancedMesh) || o.frustumCulled === false) return;
    const g = o.geometry; if (!g.boundingSphere) g.computeBoundingSphere(); const bs = g.boundingSphere; if (!bs || bs.radius > 160 || o.isInstancedMesh) return;
    _v.copy(bs.center).applyMatrix4(o.matrixWorld); const r = bs.radius * o.matrixWorld.getMaxScaleOnAxis();
    const far = !air && Math.hypot(_v.x - cx_, _v.z - cz_) - r > lim;
    if (far) { if (o.layers.mask !== 2) o.layers.set(FOGL); } else if (o.layers.mask === 2) o.layers.set(0);
  });
}
function carCtl() {
  const t = inp.device === 'touch';
  return { gas: t ? (inp.tGas || 0) : inp.gas, brake: t ? (inp.tBrake || 0) : inp.brake, hb: !!inp.hb, steer: t ? (inp.steer || 0) : inp.mx };
}
function flipCar() { if (unstick(car)) { toast('Car back on its wheels'); sfx.carDoor(); } else toast('No clear spot nearby'); }
function updCar(dt) {
  const cg = WD.car.group;
  if (P.driving) {
    if (took('flip') || (inp.device === 'kbm' && took('reload')) || (inp.device === 'pad' && took('swap'))) flipCar();
    const ctl = carCtl(); let left = dt;
    while (left > 1e-4) { const h = Math.min(left, 1 / 60); left -= h; stepCar(car, ctl, h, v => { if (v > 4) { sfx.crash(Math.min(1, v / 20)); rumble(1, 0.6, 200); } }); }
    const spd = Math.hypot(car.vx, car.vz);
    for (const z of zombies) { if (z.dead || z.state === 'rise') continue; if (Math.hypot(z.x - car.x, z.z - car.z) < 1.9) { if (spd > 5) { sfx.splat(); damageZombie(z, 400 + spd * 120 + G.round * 40, false, 'car'); car.vx *= 0.9; car.vz *= 0.9; } else { const dx = z.x - car.x, dz = z.z - car.z, d = Math.hypot(dx, dz) || 1; z.x = car.x + dx / d * 1.9; z.z = car.z + dz / d * 1.9; } } }
    P.x = car.x; P.z = car.z;
    const rev = car.launch > 0 && car.launch < 0.75 || (ctl.gas > 0.5 && ctl.brake > 0.5) ? 0.85 : Math.min(1, spd / 31 + ctl.gas * 0.12);
    setEngine(true, rev); setSqueal(car.squeal);
    $('carhud').innerHTML = Math.round(spd * 2.237) + ' <small>MPH</small>' + (car.stuckT > 1.5 ? '<div class="stuck">Stuck? ' + (inp.device === 'touch' ? 'Tap FLIP' : inp.device === 'pad' ? 'Press TRIANGLE' : 'Press R') + '</div>' : '');
    WD.carLight.intensity = 60; WD.carLight.position.set(car.x - Math.sin(car.h) * 2.4, 0.8, car.z - Math.cos(car.h) * 2.4); WD.carLight.target.position.set(car.x - Math.sin(car.h) * 14, 0, car.z - Math.cos(car.h) * 14);
  } else idleCarFx(dt);
  cg.position.set(car.x, 0, car.z); cg.rotation.y = car.h;
  cg.rotation.z = P.driving ? clamp(-(car.yr || 0) * car.v * 0.0035, -0.05, 0.05) : 0; // body roll in corners
  for (const w of WD.car.wheels) { w.spin.rotation.z -= (car.launch > 0 && car.launch < 0.75 ? 25 : car.v) * dt / 0.34; if (w.front) w.w.rotation.y = car.steer * 0.9; }
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
    if (G.fly) { // admin flight: fly where you look, no walls. Space/Ctrl (or Z) for straight up/down on keyboard.
      const fs = (inp.sprint || touchSprint() ? 26 : 12) * ml, cp = Math.cos(P.pitch), dl = Math.hypot(inp.mx, inp.my) || 1;
      const fwd = inp.my / dl, side = inp.mx / dl;
      P.x += (fx_ * cp * fwd + rx * side) * fs * dt; P.z += (fz * cp * fwd + rz * side) * fs * dt;
      P.y += (Math.sin(P.pitch) * fwd * fs + ((inp.up || 0) - (inp.down || 0)) * 10) * dt;
      P.y = clamp(P.y, 0, 90); P.vy = 0; P.speed = 0; P.sprinting = false;
    } else {
    const p = { x: P.x + vx * dt, z: P.z + vz * dt }; collide(p, 0.35, (t, k) => solidPlayer(t, k) || t === BWALL); pushOut(p, 0.35); P.x = p.x; P.z = p.z; P.speed = Math.hypot(vx, vz); P.sprinting = sprint && P.speed > 1;
    if (took('jump') && P.y <= 0) P.vy = 4.6; P.vy -= 14 * dt; P.y = Math.max(0, P.y + P.vy * dt); if (P.y === 0) P.vy = Math.max(0, P.vy);
    if (P.y > 0 && P.vy === 0 && !G.fly) P.vy = -0.01; // dropping out of flight: fall back down
    }
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
  if (recenter(P.x, P.z)) onWindowMoved();
  if (G.flowDirty || (pk !== G.lastFlowK && G.flowT <= 0)) { flow([[tileOf(P.x), tileOf(P.z)]]); G.lastFlowK = pk; G.flowT = 0.25; G.flowDirty = false; for (const z of zombies) { z.best = 1e9; } }
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
  $('scope').style.opacity = zoom > 1 ? 1 : 0; const scoped = zoom > 1; $('cross').classList.toggle('hide', scoped || P.driving); $('cross').classList.toggle('ads', P.ads > 0.6 && !scoped);
  // soldier (third person)
  soldier.wrap.visible = tp && !P.driving; if (soldier.wrap.visible) { soldier.wrap.position.set(P.x, P.y, P.z); soldier.wrap.rotation.y = P.yaw; animSoldier(soldier, G.t, P.speed, P.pitch, P.sprinting); }
  // viewmodel
  vm.visible = !tp && !build.on && !(g && g.def.zoom && P.ads > 0.8); const ads = P.ads, rl = P.reloadT > 0 ? Math.sin(Math.min(1, 1 - P.reloadT / (P.reloadMax || 1)) * Math.PI) : 0;
  const sw = P.swapT > 0 ? P.swapT / 0.4 : 0, kn = P.knifeT > 0 ? Math.sin((0.5 - P.knifeT) / 0.5 * Math.PI) : 0;
  const sightY = vmGun ? vmGun.sight : 0.095; vm.position.set(lerp(0.17, 0, ads) + kn * -0.1, lerp(-0.19, -sightY, ads) - rl * 0.12 - sw * 0.3 + Math.sin(P.bob * 2) * 0.008 * (1 - ads), lerp(-0.38, -0.27, ads) + P.recoil * 0.05 - kn * 0.15);
  vm.rotation.set(rl * 0.6 + P.recoil * 0.08 * (1 - ads * 0.85) + (P.sprinting ? -0.35 : 0), (P.sprinting ? 0.6 : 0) + kn * 0.8, rl * 0.4);
  if (muzzleT > 0) { muzzleT -= dt; muzzle.visible = !tp; muzzle.position.set(vm.position.x, vm.position.y + (vmGun ? vmGun.muzzle.position.y : 0.06), vm.position.z + (vmGun ? vmGun.muzzle.position.z : -0.55)); } else muzzle.visible = false;
  // shadows follow the player
  { const far = P.y > 8 ? 260 : 125; if (camera.far !== far) { camera.far = far; camera.updateProjectionMatrix(); } }
  { // the higher you fly, the thinner the fog and the brighter the moon, so the whole map is visible from the air
    const air = clamp((P.y - 4) / 30, 0, 1); scene.fog.density = 0.024 * (1 - air * 0.82); WD.hemi.intensity = 1.3 + air * 1.6; renderer.toneMappingExposure = 1.4 + air * 0.6; }
  WD.moonL.position.set(P.x - 30, 60, P.z - 40); WD.moonL.target.position.set(P.x, 0, P.z);
  updateStream(camera.position.x, camera.position.z, P.y > 20, dt > 0.03 ? 3 : 6); WD.followGround(camera.position.x, camera.position.z); WD.followSky(camera.position.x, camera.position.z);
  fogCull();
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
    G.t += dt; camera.position.set(44 + Math.sin(G.t * 0.08) * 30, 9, 40 + Math.cos(G.t * 0.08) * 30); camera.lookAt(44, 1, 46); updateStream(44, 46, false, 4); if (camera.fov !== 60) { camera.fov = 60; camera.updateProjectionMatrix(); } renderer.clear(); renderer.render(scene, camera);
  }
  endFrame();
}

// ---------------- menus ----------------
const screens = ['title', 'pause', 'settings', 'controls', 'over', 'admin', 'pin'];
let back = 'title';
function show(id) { for (const s of screens) $(s).classList.toggle('hidden', s !== id); }
function play() {
  initAudio(); setVolume(SET.vol);
  newGame(); admOpen = false; G.state = 'play'; show(null); $('hud').classList.remove('hidden'); $('touch').classList.add('live');
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
  $('admExtra').children[2].textContent = 'FLY: ' + (G.fly ? 'ON' : 'OFF'); $('admExtra').children[2].classList.toggle('on', !!G.fly);
}
function admMsg(t) { $('admMsg').textContent = t; }
$('admGuns').innerHTML = Object.keys(W).map(k => `<button data-k="${k}">${W[k].name}</button>`).join('');
// PIN gate: unlocked once per game. Stored as a hash so it isn't shown anywhere in the UI.
let admOpen = false, pinBuf = '';
const pinHash = s => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 7);
function openAdmin() { admMsg(''); admSync(); show('admin'); }
function pinDraw() { [...$('pinDots').children].forEach((d, i) => d.classList.toggle('f', i < pinBuf.length)); }
function pinKey(k) {
  if (k === 'x') { show('pause'); return; }
  if (k === 'b') { pinBuf = pinBuf.slice(0, -1); pinDraw(); return; }
  if (pinBuf.length >= 4) return;
  pinBuf += k; $('pinMsg').textContent = ''; pinDraw();
  if (pinBuf.length === 4) {
    if (pinHash(pinBuf) === 7945292) { admOpen = true; pinBuf = ''; pinDraw(); openAdmin(); }
    else { pinBuf = ''; $('pinMsg').textContent = 'Wrong PIN'; setTimeout(pinDraw, 250); }
  }
}
for (const b of $('pinPad').children) b.onclick = () => pinKey(b.dataset.k);
addEventListener('keydown', e => {
  if ($('pin').classList.contains('hidden')) return;
  e.stopImmediatePropagation(); e.preventDefault();
  if (/^\d$/.test(e.key)) pinKey(e.key); else if (e.key === 'Backspace') pinKey('b'); else if (e.key === 'Escape') pinKey('x');
}, true);
$('bAdmin').onclick = () => { if (admOpen) return openAdmin(); pinBuf = ''; pinDraw(); $('pinMsg').textContent = ''; show('pin'); };
$('bAdmBack').onclick = () => show('pause');
for (const b of $('admMoney').children) b.onclick = () => { const n = +b.dataset.n; G.points += n; updHud(); admSync(); admMsg('Added ' + n.toLocaleString() + ' points to you.'); };
for (const b of $('admPapSeg').children) b.onclick = () => { admPap = b.dataset.v === '1'; admSync(); };
for (const b of $('admGuns').children) b.onclick = () => { giveGun(b.dataset.k, admPap); updHud(); admMsg('You now have the ' + gunNow().name + '.'); };
$('admExtra').children[0].onclick = () => { for (const g of P.guns) { g.clip = g.mag; g.reserve = g.maxReserve; } P.nades = Math.max(P.nades, 4); updHud(); admMsg('Ammo and grenades refilled.'); };
$('admExtra').children[2].onclick = () => { G.fly = !G.fly; if (!G.fly) P.vy = -0.01; admSync(); admMsg(G.fly ? 'Flight on: fly where you look. Keyboard: Space up, Ctrl or Z down, Shift fast. Phone/controller: look up or down while moving.' : 'Flight off: you drop back to the ground.'); };
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
window.__ds = { pieceRay: (ox, oy, oz, dx, dz, far) => { const rc = new THREE.Raycaster(new THREE.Vector3(ox, oy, oz), new THREE.Vector3(dx, 0, dz).normalize(), 0, far); const h = rc.intersectObjects(pieces.map(p => p.g), true)[0]; return h ? +h.distance.toFixed(3) : -1; }, idx, cx, placePiece, PIECES, wallKey, joins, updateStream, recenter, onWindowMoved, liveChunks, streamStats, windowShifts, readsNear, rooms, LW_FURN, pushOut, renderer, scene, camera, fireOnce: () => { camera.rotation.set(P.pitch, P.yaw, 0, 'YXZ'); camera.position.set(P.x, 1.62 + P.y, P.z); camera.updateMatrixWorld(); fireGun(); }, gunModel, W, inp, WD, box, build, toggleBuild, sim, G, P, zombies, pups, windows, doors, startRound, giveGun, hurt, gameOver, car, pieces, dropPup, spawnZombie, openDoor, damageZombie, enterCar, exitCar, carBlocked, unstick, flipCar, at, tileOf, roadAt, roomy };
