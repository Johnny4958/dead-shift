// Lockwood and beyond: a tile grid (2 m tiles) that drives collision, zombie pathing, building and the meshes.
// West: the motel and the town of Lockwood. Middle: the woods and the old mall. East: Pine Hollow.
// South: the graveyard and the army base behind it. Below the flood wall: sealed bunkers (reached through hatches).
// The hand-built map ("core", CW x CH tiles) never changes shape. Around it the world goes on forever:
// proc.js generates woods, roads, towns and abandoned buildings chunk by chunk. The tile arrays below are a
// GW x GH window that slides with the player (origin OI, OJ in world tiles); tiles are always addressed in
// world tile coordinates through idx()/inb().
export const S = 2, CW = 180, CH = 118, GW = 320, GH = 320, WALL_H = 3.4;
export let OI = 0, OJ = 0;
export const OUT = 0, FLOOR = 1, WALL = 2, WIN = 3, DOOR = 4, FENCE = 5, PROP = 6, BWALL = 7, BDOOR = 8, SPIKE = 9, GLASS = 10, OPEN = 11, TREE = 12, GRAVE = 13, MINE = 14, LAMP = 15;
export const ZONES = ['Lobby', 'Outside', 'Diner', 'Garage'];
// area of each tile: what the ground looks like and how dangerous it is
export const A_TOWN = 0, A_WOODS = 1, A_GRAVE = 2, A_PINE = 3, A_BASE = 4, A_BUNKER = 5, A_MALL = 6, A_CARNIVAL = 7, A_LOT = 8, A_ASHFORD = 9, A_WILDS = 10, A_STOP = 11;
export const AREA_NAMES = ['Lockwood', 'The Woods', 'Graveyard', 'Pine Hollow', 'Fort Calder', 'Bunker', 'Greenbrook Park Mall', 'Carnival', 'Motel Lot', 'Ashford', 'Deep Woods', 'Route 9 Truck Stop'];

export const grid = new Uint8Array(GW * GH);
export const zone = new Int16Array(GW * GH).fill(-1);
export const owner = new Int16Array(GW * GH).fill(-1);   // door id / window id / built piece id at the tile
export const area = new Uint8Array(GW * GH);
export const surf = new Uint8Array(GW * GH);            // 0 grass, 1 asphalt lot, 2 road, 3 dirt, 4 gravel, 5 concrete pad
export const safe = new Uint8Array(GW * GH);            // zombies cannot enter while the base holds
export const idx = (i, j) => (j - OJ) * GW + (i - OI);
export const inb = (i, j) => i >= OI && j >= OJ && i < OI + GW && j < OJ + GH;
export const ijOf = k => [k % GW + OI, ((k / GW) | 0) + OJ];
export const inCore = (i, j) => i >= 0 && j >= 0 && i < CW && j < CH;
// a tree's trunk sits a little off its tile centre, the same on every load
export function treeOff(i, j) { let h = Math.imul(i, 73856093) ^ Math.imul(j, 19349663); h = Math.imul(h ^ (h >>> 13), 1274126177); return [((h & 255) / 255 - 0.5) * 0.7, (((h >>> 8) & 255) / 255 - 0.5) * 0.7]; }
export const TRUNK_R = 0.32;
export const at = (i, j) => inb(i, j) ? grid[idx(i, j)] : FENCE;
export const tAt = (x, z) => at(Math.floor(x / 2), Math.floor(z / 2));
export const tileOf = v => Math.floor(v / S);
export const cx = i => i * S + S / 2;

export const doors = [];    // {id, tiles:[[i,j]], cost, zone, open, label, axis}
export const windows = [];  // {id, i, j, planks, axis:'x'|'z', outDir:[di,dj]}
export const rooms = [];    // {name, z, i0, j0, i1, j1, floorKind, wallKind, kind}
export const openZones = new Set([3]);
export const hatches = [];  // {i, j, kind:'manhole'|'cellar', bunker}
export const bunkers = [];  // {i0,j0,i1,j1, ladder:{i,j}, crate:{i,j}, hatch}
export const loots = [];    // {i, j, kind, label, used}
export const groundGuns = []; // {i, j, key}
export const intelSpots = []; // {i, j, n}
export const boxSpotList = []; // {i, j, face, name}
export const carSpots = [];  // {x, z, yaw, kind}
export const generatorSpots = []; // {i,j} generators lying around to pick up
export const craftSpots = []; // {i,j,face}
export const traderSpots = []; // {x,z,name}
export const trees = [];     // {i,j,s}
export const graves = [];    // {i,j,kind}
export const glassTiles = [];
export const special = {};   // named points: coaster, wheel, pad, heli, gate...
export let safeOn = true; export function setSafe(v) { safeOn = v; }

let seed = 1234; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

function room(name, z, i0, j0, i1, j1, floorKind, wallKind = 'stucco', kind = 'shop') {
  rooms.push({ name, z, i0, j0, i1, j1, floorKind, wallKind, kind });
  for (let j = j0 - 1; j <= j1 + 1; j++) for (let i = i0 - 1; i <= i1 + 1; i++) {
    if (!inb(i, j)) continue; const k = idx(i, j);
    if (i >= i0 && i <= i1 && j >= j0 && j <= j1) { grid[k] = FLOOR; zone[k] = z; } else if (grid[k] === OUT || grid[k] === TREE) { grid[k] = WALL; zone[k] = z; }
  }
}
function door(tiles, cost, z, label) {
  const id = doors.length; const axis = tiles.length > 1 && tiles[0][1] === tiles[1][1] ? 'x' : 'z';
  doors.push({ id, tiles, cost, zone: z, open: false, label, axis });
  for (const [i, j] of tiles) { grid[idx(i, j)] = DOOR; owner[idx(i, j)] = id; }
}
function win(i, j) {
  const id = windows.length; const axis = (at(i - 1, j) === WALL || at(i + 1, j) === WALL) ? 'x' : 'z';
  let outDir = axis === 'x' ? (at(i, j + 1) === OUT ? [0, 1] : [0, -1]) : (at(i + 1, j) === OUT ? [1, 0] : [-1, 0]);
  windows.push({ id, i, j, planks: 6, axis, outDir, rip: 0 });
  grid[idx(i, j)] = WIN; owner[idx(i, j)] = id;
}
export function prop(i, j) { if (inb(i, j)) grid[idx(i, j)] = PROP; }
const fill = (i0, j0, i1, j1, f) => { for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) if (inb(i, j)) f(idx(i, j), i, j); };
const setArea = (i0, j0, i1, j1, a) => fill(i0, j0, i1, j1, k => { area[k] = a; });
const setSurf = (i0, j0, i1, j1, s) => fill(i0, j0, i1, j1, k => { surf[k] = s; });

let zid = 4;
// a free-standing building: open doorway(s), busted windows, lootables
function bld(name, i0, j0, i1, j1, o = {}) {
  const z = zid++; ZONES[z] = name; openZones.add(z);
  room(name, z, i0, j0, i1, j1, o.floor || 'wood', o.wall || 'siding', o.kind || 'house');
  const doorsAt = o.doors || [[o.side || 's', 0.5]];
  for (const [side, f, w = o.kind === 'house' ? 1 : 2] of doorsAt) {
    const along = side === 'n' || side === 's'; const a0 = along ? i0 : j0, a1 = along ? i1 : j1;
    const c = Math.round(a0 + (a1 - a0) * f - (w - 1) / 2);
    for (let n = 0; n < w; n++) { const i = along ? c + n : (side === 'w' ? i0 - 1 : i1 + 1), j = along ? (side === 'n' ? j0 - 1 : j1 + 1) : c + n; grid[idx(i, j)] = OPEN; zone[idx(i, j)] = z; }
  }
  // busted windows every few tiles of plain wall
  const step = o.winStep || 3;
  const tryGlass = (i, j) => { if (at(i, j) !== WALL) return; if (at(i - 1, j) === OPEN || at(i + 1, j) === OPEN || at(i, j - 1) === OPEN || at(i, j + 1) === OPEN) return; grid[idx(i, j)] = GLASS; glassTiles.push([i, j]); };
  if (!o.noWin) {
    for (let i = i0 + 1; i < i1; i += step) { tryGlass(i, j0 - 1); tryGlass(i, j1 + 1); }
    for (let j = j0 + 1; j < j1; j += step) { tryGlass(i0 - 1, j); tryGlass(i1 + 1, j); }
  }
  for (const l of o.loot || []) loots.push({ i: l[0] < 0 ? i1 + 1 + l[0] : i0 + l[0], j: l[1] < 0 ? j1 + 1 + l[1] : j0 + l[1], kind: l[2], used: false, zone: z });
  return z;
}

export function buildMap() {
  OI = 0; OJ = 0;
  grid.fill(OUT); zone.fill(-1); owner.fill(-1); area.fill(A_TOWN); surf.fill(0); safe.fill(0);
  for (const a of [doors, windows, rooms, hatches, bunkers, loots, groundGuns, intelSpots, boxSpotList, carSpots, generatorSpots, craftSpots, traderSpots, trees, graves, glassTiles]) a.length = 0;
  openZones.clear(); openZones.add(3); ZONES.length = 4; zid = 4; seed = 1234; safeOn = true;
  zone.fill(1); // no border: the core runs straight into the generated woods
  // areas and ground
  setArea(1, 1, 43, 39, A_LOT); setSurf(1, 1, 43, 39, 1);
  setArea(96, 1, 139, 105, A_WOODS);
  setArea(140, 1, 178, 105, A_PINE);
  setArea(4, 78, 44, 90, A_GRAVE); setSurf(4, 78, 44, 90, 3);
  setArea(4, 92, 44, 104, A_BASE); setSurf(4, 92, 44, 104, 5);
  setArea(80, 48, 95, 70, A_CARNIVAL); setSurf(80, 48, 95, 70, 4);
  setArea(98, 46, 138, 88, A_MALL); setSurf(100, 46, 136, 49, 1);
  setArea(0, 106, CW - 1, CH - 1, A_WOODS); setArea(0, 0, 0, CH - 1, A_WOODS); setArea(CW - 1, 0, CW - 1, CH - 1, A_PINE); setArea(0, 0, CW - 1, 0, A_WOODS);
  // roads: Main St runs all the way east through the woods to Pine Hollow
  setSurf(0, 41, CW - 1, 45, 2); setSurf(46, 0, 49, CH - 1, 2); setSurf(0, 72, 95, 75, 2); setSurf(159, 0, 162, CH - 1, 2); // these roads carry on out of the core
  setSurf(50, 38, 60, 40, 5);   // gas station apron
  setSurf(64, 16, 78, 20, 5);   // chop shop pad

  // ---- the motel (where you wake up) ----
  room('Lobby', 0, 17, 22, 26, 29, 'carpet', 'stucco', 'motel');
  room('Diner', 2, 28, 22, 37, 29, 'checker', 'stucco', 'motel');
  room('Garage', 3, 6, 6, 15, 13, 'concrete', 'brick', 'motel');
  door([[10, 14], [11, 14]], 750, 1, 'Outside');
  door([[21, 21], [22, 21]], 1000, 0, 'Lobby');
  door([[27, 25], [27, 26]], 1000, 2, 'Diner');
  for (const [i, j] of [[18, 21], [25, 21], [19, 30], [24, 30], [16, 25], [16, 28]]) win(i, j);
  for (const [i, j] of [[31, 21], [35, 21], [38, 24], [38, 28], [33, 30]]) win(i, j);
  for (const [i, j] of [[8, 5], [13, 5], [5, 9], [16, 10]]) win(i, j);

  // ---- Lockwood: north of Main, east of Elm ----
  const gas = bld('Gas Station', 52, 31, 59, 36, { wall: 'stucco', floor: 'checker', kind: 'shop', loot: [[0, 0, 'register'], [7, 0, 'cabinet']] });
  special.pumps = [[54, 39], [57, 39]]; for (const [i, j] of special.pumps) prop(i, j);
  bld('Pharmacy', 62, 30, 69, 36, { wall: 'brick', floor: 'checker', kind: 'shop', loot: [[0, 0, 'medicine'], [7, 0, 'medicine'], [3, 0, 'register']] });
  bld("Hank's Market", 72, 28, 83, 36, { wall: 'brick', floor: 'checker', kind: 'store', doors: [['s', 0.5, 2]], loot: [[0, 0, 'register'], [1, 0, 'register'], [11, 0, 'cabinet'], [11, 8, 'fridge'], [0, 8, 'shelf'], [5, 3, 'shelf'], [6, 3, 'shelf']] });
  bld('Hardware', 86, 28, 94, 36, { wall: 'metal', floor: 'concrete', kind: 'store', loot: [[0, 0, 'toolbox'], [8, 8, 'shelf'], [8, 0, 'toolbox']] });
  craftSpots.push({ i: 90, j: 28, face: [0, 1], name: 'Hardware' }); generatorSpots.push({ i: 93, j: 33 });
  bld('Police Station', 52, 6, 61, 15, { wall: 'brick', floor: 'concrete', kind: 'police', loot: [[0, 0, 'locker'], [1, 0, 'locker'], [9, 9, 'safe']] });
  bld('Chop Shop', 66, 6, 76, 15, { wall: 'metal', floor: 'concrete', kind: 'garage', doors: [['s', 0.5, 3]], loot: [[0, 0, 'toolbox'], [10, 0, 'toolbox']] });
  special.pad = { x: cx(71), z: cx(18) + 1 };
  bld('The Rusty Nail', 80, 6, 90, 14, { wall: 'wood', floor: 'wood', kind: 'bar', loot: [[0, 0, 'register'], [10, 8, 'fridge']] });
  // ---- south of Main, east of Elm ----
  bld('St. Jude Church', 52, 49, 59, 61, { wall: 'stone', floor: 'wood', kind: 'church', side: 'n', loot: [[3, 12, 'cabinet']] });
  bld('Lockwood High', 64, 49, 77, 60, { wall: 'brick', floor: 'checker', kind: 'school', side: 'n', loot: [[0, 11, 'locker'], [1, 11, 'locker'], [13, 11, 'cabinet']] });
  // carnival: outdoor, rides are props/solid
  special.wheel = { x: cx(91), z: cx(52) }; for (const [i, j] of [[90, 52], [91, 52], [92, 52]]) prop(i, j);
  special.coaster = { cx: cx(87), cz: cx(60), booth: { i: 82, j: 67 }, station: { x: cx(84) + 1, z: cx(66) } };
  prop(82, 67); for (const [i, j] of [[81, 49], [94, 49], [81, 69], [94, 69], [87, 49], [87, 69], [81, 59], [94, 59]]) prop(i, j); // coaster pylons
  // ---- west houses, south of Main ----
  const hl = [[0, 0, 'cabinet'], [-1, -1, 'fridge']];
  for (const [i0, j0, side, wall] of [[4, 50, 'n', 'siding'], [16, 50, 'n', 'brick'], [28, 50, 'n', 'siding'], [4, 61, 's', 'brick'], [16, 61, 's', 'siding'], [28, 61, 's', 'siding']]) bld('House', i0, j0, i0 + 7, j0 + 6, { side, wall, loot: hl });
  // ---- south of South Ave, east of Elm ----
  for (const [i0, j0, side, wall] of [[52, 79, 'n', 'siding'], [64, 79, 'n', 'brick'], [52, 92, 's', 'siding'], [64, 92, 's', 'siding']]) bld('House', i0, j0, i0 + 7, j0 + 6, { side, wall, loot: hl });
  bld('Old Barn', 78, 80, 90, 92, { wall: 'barn', floor: 'dirt', kind: 'barn', doors: [['w', 0.5, 3]], loot: [[0, 0, 'toolbox'], [12, 12, 'cabinet']] });
  generatorSpots.push({ i: 88, j: 82 });

  // ---- graveyard (bad ground) and Fort Calder behind it ----
  for (let i = 3; i <= 45; i++) { if (i < 23 || i > 26) grid[idx(i, 77)] = FENCE; grid[idx(i, 91)] = (i >= 23 && i <= 26) ? OUT : FENCE; }
  for (let j = 77; j <= 105; j++) { grid[idx(3, j)] = FENCE; grid[idx(45, j)] = FENCE; }
  for (let i = 3; i <= 45; i++) grid[idx(i, 105)] = FENCE;
  special.graveGateN = { i0: 23, i1: 26, j: 77 }; special.baseGate = { i0: 23, i1: 26, j: 91 };
  for (let j = 79; j <= 89; j += 2) for (let i = 6; i <= 43; i += 2) { if (i >= 22 && i <= 27) continue; if (rnd() < 0.78) { grid[idx(i, j)] = GRAVE; graves.push({ i, j, kind: (rnd() * 4) | 0 }); } }
  bld('Mausoleum', 7, 80, 12, 84, { wall: 'stone', floor: 'stone', kind: 'crypt', side: 'e', noWin: true, loot: [[0, 0, 'safe']] });
  setArea(4, 78, 44, 90, A_GRAVE);
  // base: everything inside the blast walls is safe while it holds
  const hz = bld('Fort Calder Hangar', 7, 95, 20, 102, { wall: 'metal', floor: 'concrete', kind: 'base', side: 'n', doors: [['n', 0.5, 3]], winStep: 4 });
  fill(4, 92, 44, 104, (k) => { if (grid[k] !== FENCE) safe[k] = 1; });
  setArea(4, 92, 44, 104, A_BASE);
  traderSpots.push({ x: cx(10), z: cx(99), name: 'Sarge' }, { x: cx(16), z: cx(99), name: 'Doc Reyes' });
  craftSpots.push({ i: 19, j: 95, face: [-1, 0], name: 'Hangar' });
  special.trophy = { x: cx(13) + 1, z: cx(102) + 1.2 };
  special.tanks = [[28, 95, 0.3], [38, 101, -0.4]]; for (const [i, j] of special.tanks) fill(i - 1, j - 1, i + 1, j + 1, k => { grid[k] = PROP; });
  special.heli = { x: cx(33), z: cx(99), i: 33, j: 99 };
  special.hangarZone = hz;

  // ---- the woods + the cabin ----
  bld('Hunting Cabin', 112, 18, 118, 23, { wall: 'log', floor: 'wood', kind: 'cabin', side: 's', loot: [[0, 0, 'cabinet'], [6, 0, 'locker']] });
  generatorSpots.push({ i: 117, j: 22 });
  // ---- Greenbrook Park Mall: grid of hallways, a big atrium, anchors in the corners ----
  buildMall();
  // ---- Pine Hollow ----
  for (const [i0, j0, side, wall] of [[142, 30, 's', 'siding'], [151, 30, 's', 'brick'], [164, 30, 's', 'siding'], [142, 16, 's', 'siding'], [164, 16, 's', 'brick'], [142, 50, 'n', 'brick'], [151, 50, 'n', 'siding'], [164, 50, 'n', 'siding'], [142, 62, 'n', 'siding'], [164, 62, 'n', 'brick']]) bld('House', i0, j0, i0 + 7, j0 + 6, { side, wall, loot: hl });
  bld('Gas & Go', 151, 62, 158, 68, { wall: 'stucco', floor: 'checker', kind: 'shop', side: 'n', loot: [[0, 0, 'register'], [7, 6, 'shelf']] });
  bld('Pine Chapel', 165, 78, 172, 87, { wall: 'stone', floor: 'wood', kind: 'church', side: 'w', loot: [[0, 9, 'cabinet']] });

  // trees: dense in the woods, a few around the towns; roads, the mall lot and buildings stay clear
  for (let j = 0; j < CH; j++) for (let i = 0; i < CW; i++) {
    const k = idx(i, j); if (grid[k] !== OUT || surf[k] !== 0) continue;
    const a = area[k]; let p = a === A_WOODS ? 0.11 : (a === A_PINE || a === A_TOWN) ? 0.025 : 0;
    if (a === A_WOODS && (Math.abs(j - 2 * Math.sin(i * 0.11) - 24) < 2 || Math.abs(i - 3 * Math.sin(j * 0.09) - 118) < 2)) p = 0; // dirt trails through the woods
    if (a === A_TOWN && i < 96 && j < 106 && (i < 50 || j < 72)) p = 0.012;
    if (j >= 39 && j <= 47) p = 0;  // keep the road shoulders open
    if (rnd() < p) { grid[k] = TREE; trees.push({ i, j, s: 0.7 + rnd() * 0.7 }); }
  }

  // ---- bunkers below the flood wall ----
  const bl = [[6, 109], [26, 109], [80, 109], [118, 109], [140, 109]];
  const hl2 = [[70, 25, 'manhole'], [8, 59, 'cellar'], [92, 95, 'cellar'], [110, 48, 'manhole'], [151, 26, 'manhole']];
  bl.forEach(([i0, j0], n) => {
    const z = zid++; ZONES[z] = 'Bunker'; openZones.add(z);
    room('Bunker', z, i0, j0, i0 + 7, j0 + 6, 'concrete', 'bunker', 'bunker');
    const [hi, hj, kind] = hl2[n]; const t = grid[idx(hi, hj)]; if (t !== OUT) grid[idx(hi, hj)] = OUT;
    for (let jj = j0 - 2; jj <= j0 + 8; jj++) for (let ii = i0 - 2; ii <= i0 + 9; ii++) { const kk = idx(ii, jj); if (grid[kk] === TREE) grid[kk] = OUT; }
    hatches.push({ i: hi, j: hj, kind, bunker: n });
    bunkers.push({ i0, j0, i1: i0 + 7, j1: j0 + 6, ladder: { i: i0 + 1, j: j0 + 1 }, crate: { i: i0 + 6, j: j0 + 5 }, hatch: n, zone: z });
    prop(i0 + 6, j0 + 5);
  });
  // the mystery box can be anywhere in town
  boxSpotList.push(
    { i: 12, j: 6, face: [0, 1], name: 'Garage' }, { i: 21, j: 29, face: [0, -1], name: 'Lobby' }, { i: 36, j: 22, face: [0, 1], name: 'Diner' },
    { i: 37, j: 14, face: [-1, 0], name: 'Motel Lot' }, { i: 83, j: 32, face: [-1, 0], name: "Hank's Market" }, { i: 61, j: 10, face: [-1, 0], name: 'Police Station' },
    { i: 53, j: 60, face: [0, -1], name: 'Church' }, { i: 85, j: 6, face: [0, 1], name: 'The Rusty Nail' }, { i: 88, j: 92, face: [0, -1], name: 'Old Barn' },
    { i: 114, j: 64, face: [0, 1], name: 'Mall Atrium' }, { i: 142, j: 56, face: [1, 0], name: 'Pine Hollow' }, { i: 113, j: 18, face: [0, 1], name: 'Hunting Cabin' },
    { i: 28, j: 79, face: [0, 1], name: 'Graveyard' }, { i: 77, j: 49, face: [0, 1], name: 'Lockwood High' });
  groundGuns.push({ i: 30, j: 58, key: 'brawler' }, { i: 57, j: 13, key: 'trench' }, { i: 75, j: 35, key: 'viper' }, { i: 115, j: 21, key: 'ranger' }, { i: 104, j: 70, key: 'kestrel' },
    { i: 147, j: 34, key: 'ripper' }, { i: 86, j: 88, key: 'trench' }, { i: 10, j: 88, key: 'kestrel' }, { i: 132, j: 55, key: 'hammer' });
  intelSpots.push({ i: 14, j: 12, n: 0 }, { i: 25, j: 27, n: 1 }, { i: 60, j: 14, n: 2 }, { i: 64, j: 35, n: 3 }, { i: 58, j: 60, n: 4 }, { i: 10, j: 84, n: 5 }, { i: 106, j: 66, n: 6 }, { i: 116, j: 22, n: 7 }, { i: 170, j: 80, n: 8 }, { i: 12, j: 101, n: 9 });
  carSpots.push({ x: 55, z: 25, yaw: 0, kind: 'mustang' }, { x: cx(57), z: cx(40) + 2, yaw: Math.PI / 2, kind: 'pickup' }, { x: cx(58), z: cx(18), yaw: 0, kind: 'cruiser' },
    { x: cx(120), z: cx(47), yaw: Math.PI / 2, kind: 'van' }, { x: cx(150), z: cx(46) + 1, yaw: -Math.PI / 2, kind: 'pickup' }, { x: cx(115), z: cx(26), yaw: 0.4, kind: 'pickup' }, { x: cx(40), z: cx(96), yaw: 0, kind: 'jeep' });
  for (const g of groundGuns) if (grid[idx(g.i, g.j)] !== FLOOR && grid[idx(g.i, g.j)] !== OUT) grid[idx(g.i, g.j)] = (zone[idx(g.i, g.j)] >= 0 ? FLOOR : OUT);
  for (const s of intelSpots) { const k = idx(s.i, s.j); if (grid[k] === TREE || grid[k] === GRAVE) grid[k] = OUT; }
  for (const c of carSpots) { const ci = tileOf(c.x), cj = tileOf(c.z); fill(ci - 2, cj - 2, ci + 2, cj + 2, k => { if (grid[k] === TREE) grid[k] = OUT; }); }
  for (let n = trees.length - 1; n >= 0; n--) if (grid[idx(trees[n].i, trees[n].j)] !== TREE) trees.splice(n, 1);
  for (let n = graves.length - 1; n >= 0; n--) if (grid[idx(graves[n].i, graves[n].j)] !== GRAVE) graves.splice(n, 1);
  for (const l of loots) prop(l.i, l.j);
  for (const g of generatorSpots) { const k = idx(g.i, g.j); if (grid[k] === TREE) grid[k] = OUT; }
}

function buildMall() {
  const i0 = 100, j0 = 50, i1 = 136, j1 = 86;
  const z = zid++; ZONES[z] = 'Greenbrook Park Mall'; openZones.add(z);
  fill(i0, j0, i1, j1, k => { grid[k] = WALL; zone[k] = z; });
  const carve = (a, b, c, d, nm, kind = 'mall') => { fill(a, b, c, d, k => { grid[k] = FLOOR; zone[k] = z; }); rooms.push({ name: nm, z, i0: a, j0: b, i1: c, j1: d, floorKind: kind === 'mall' ? 'mall' : 'shop', wallKind: 'mall', kind }); };
  const gap = (a, b, c, d) => fill(a, b, c, d, k => { grid[k] = OPEN; zone[k] = z; });
  // corridors: two east-west, two north-south, and narrow cross-halls through the atrium
  carve(102, 58, 134, 60, 'North Hall'); carve(102, 76, 134, 78, 'South Hall');
  carve(109, 52, 111, 84, 'West Hall'); carve(125, 52, 127, 84, 'East Hall');
  carve(113, 64, 123, 72, 'Center Court');
  carve(112, 68, 112, 68, 'hall'); carve(124, 68, 124, 68, 'hall'); carve(118, 61, 118, 63, 'hall'); carve(118, 73, 118, 75, 'hall');
  carve(117, 51, 119, 57, 'Main Entrance');
  gap(117, 50, 119, 50);                    // front doors onto the parking lot
  gap(i1, 59, i1, 59); gap(i0, 77, i0, 77);  // side exits
  // anchors in the four corners, each with two ways in
  carve(101, 51, 107, 56, 'Department Store', 'store'); gap(104, 57, 104, 57); gap(108, 54, 108, 54);
  carve(129, 51, 135, 56, 'Sporting Goods', 'store'); gap(132, 57, 132, 57); gap(128, 54, 128, 54);
  carve(101, 80, 107, 85, 'Department Store', 'store'); gap(104, 79, 104, 79); gap(108, 82, 108, 82);
  carve(129, 80, 135, 85, 'Department Store', 'store'); gap(132, 79, 132, 79); gap(128, 82, 128, 82);
  // food court on the west side, open to the west hall
  carve(102, 62, 107, 74, 'Food Court', 'food'); gap(108, 64, 108, 66); gap(108, 70, 108, 72);
  // small shops
  const shops = [[113, 51, 115, 56, 114, 57], [121, 51, 123, 56, 122, 57], [113, 80, 115, 85, 114, 79], [117, 80, 119, 85, 118, 79], [121, 80, 123, 85, 122, 79],
    [129, 62, 135, 66, 128, 64], [129, 70, 135, 74, 128, 72], [113, 62, 116, 62, 0, 0]];
  for (const [a, b, c, d, gi, gj] of shops) { if (!gi) continue; carve(a, b, c, d, 'Shop', 'shop'); gap(gi, gj, gi, gj); }
  // busted storefront glass on the outer walls
  for (let i = i0 + 2; i < i1; i += 4) for (const j of [j0, j1]) if (grid[idx(i, j)] === WALL && grid[idx(i, j + (j === j0 ? 1 : -1))] === FLOOR) { grid[idx(i, j)] = GLASS; glassTiles.push([i, j]); }
  loots.push({ i: 102, j: 62, kind: 'register', used: false, zone: z }, { i: 107, j: 74, kind: 'fridge', used: false, zone: z }, { i: 135, j: 51, kind: 'locker', used: false, zone: z },
    { i: 101, j: 85, kind: 'shelf', used: false, zone: z }, { i: 135, j: 85, kind: 'shelf', used: false, zone: z }, { i: 115, j: 51, kind: 'register', used: false, zone: z }, { i: 135, j: 74, kind: 'safe', used: false, zone: z });
  special.fountain = { x: cx(118), z: cx(68) }; prop(118, 68);
}

// --- solidity -------------------------------------------------------------
export function solidPlayer(t) { return t === WALL || t === WIN || t === DOOR || t === FENCE || t === PROP || t === BWALL || t === GLASS || t === TREE || t === GRAVE || t === LAMP; }
export function solidZombie(t, k) { return t === WALL || t === FENCE || t === PROP || t === DOOR || t === BWALL || t === BDOOR || t === GLASS || t === TREE || t === GRAVE || t === LAMP || (t === WIN && windows[owner[k]].planks > 0) || (k >= 0 && safeOn && safe[k]); }
export function solidCar(t) { return t !== OUT && t !== SPIKE && t !== MINE; }
export function blocksBullet(t) { return t === WALL || t === DOOR || t === PROP || t === TREE; }

// push a circle out of solid tiles
export function collide(p, r, solidFn) {
  const i0 = tileOf(p.x - r), i1 = tileOf(p.x + r), j0 = tileOf(p.z - r), j1 = tileOf(p.z + r);
  let hit = false;
  for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
    const k = inb(i, j) ? idx(i, j) : -1; const t = k < 0 ? FENCE : grid[k];
    if (!solidFn(t, k)) continue;
    if (t === TREE) { const o = treeOff(i, j), tx = i * S + 1 + o[0], tz = j * S + 1 + o[1]; const dx = p.x - tx, dz = p.z - tz, d = Math.hypot(dx, dz), rr = r + TRUNK_R; if (d < rr) { hit = true; const n = d > 1e-4 ? d : 1; p.x += (d > 1e-4 ? dx / n : 1) * (rr - d); p.z += (d > 1e-4 ? dz / n : 0) * (rr - d); } continue; }
    const nx = Math.max(i * S, Math.min(p.x, i * S + S)), nz = Math.max(j * S, Math.min(p.z, j * S + S));
    let dx = p.x - nx, dz = p.z - nz; const d = Math.hypot(dx, dz);
    if (d < r) {
      hit = true;
      if (d > 1e-5) { p.x += dx / d * (r - d); p.z += dz / d * (r - d); }
      else { const cxx = i * S + S / 2, czz = j * S + S / 2; dx = p.x - cxx; dz = p.z - czz; if (Math.abs(dx) > Math.abs(dz)) p.x = cxx + Math.sign(dx || 1) * (S / 2 + r); else p.z = czz + Math.sign(dz || 1) * (S / 2 + r); }
    }
  }
  return hit;
}

// march a 2D ray through the grid; returns distance to the first tile where test(t) is true
export function gridRay(ox, oz, dx, dz, maxD, test) {
  const l = Math.hypot(dx, dz); if (l < 1e-6) return maxD; dx /= l; dz /= l;
  let i = tileOf(ox), j = tileOf(oz); const si = dx > 0 ? 1 : -1, sj = dz > 0 ? 1 : -1;
  const tdx = Math.abs(S / (dx || 1e-9)), tdz = Math.abs(S / (dz || 1e-9));
  let tx = dx > 0 ? ((i + 1) * S - ox) / dx : dx < 0 ? (i * S - ox) / dx : Infinity;
  let tz = dz > 0 ? ((j + 1) * S - oz) / dz : dz < 0 ? (j * S - oz) / dz : Infinity;
  let t = 0;
  for (let n = 0; n < 400 && t < maxD; n++) {
    if (tx < tz) { t = tx; tx += tdx; i += si; } else { t = tz; tz += tdz; j += sj; }
    if (t > maxD) break;
    const k = inb(i, j) ? idx(i, j) : -1; if (test(k < 0 ? FENCE : grid[k], k)) return t;
  }
  return maxD;
}
// can a zombie at (ax,az) see (bx,bz)? walls, trees and glass-less walls block sight
export const blocksSight = t => t === WALL || t === DOOR || t === FENCE && false || t === TREE || t === BWALL || t === BDOOR || t === PROP;
export function canSee(ax, az, bx, bz) { const d = Math.hypot(bx - ax, bz - az); return gridRay(ax, az, bx - ax, bz - az, d, blocksSight) >= d - 0.5; }

// --- zombie flow field (multi-source Dijkstra, capped radius) -------------
export const dist = new Float32Array(GW * GH);
const INF = 1e9; const MAXD = 90;
export function stepCost(k) {
  const t = grid[k];
  if (safeOn && safe[k]) return INF;
  if (t === OUT || t === FLOOR || t === OPEN || t === MINE) return 1;
  if (t === SPIKE) return 4;
  if (t === WIN) return windows[owner[k]].planks > 0 ? 3 + windows[owner[k]].planks : 1.5;
  if (t === BWALL || t === BDOOR) return 30;
  return INF;
}
// typed binary heap
const hk = new Int32Array(GW * GH * 4), hd = new Float32Array(GW * GH * 4); let hn = 0;
function hpush(d, k) { let i = hn++; hk[i] = k; hd[i] = d; while (i > 0) { const p = (i - 1) >> 1; if (hd[p] <= hd[i]) break; const tk = hk[p], td = hd[p]; hk[p] = hk[i]; hd[p] = hd[i]; hk[i] = tk; hd[i] = td; i = p; } }
function hpop() { const k = hk[0]; hn--; if (hn > 0) { hk[0] = hk[hn]; hd[0] = hd[hn]; let i = 0; for (;;) { const l = i * 2 + 1, r = l + 1; let m = i; if (l < hn && hd[l] < hd[m]) m = l; if (r < hn && hd[r] < hd[m]) m = r; if (m === i) break; const tk = hk[m], td = hd[m]; hk[m] = hk[i]; hd[m] = hd[i]; hk[i] = tk; hd[i] = td; i = m; } } return k; }
const NB = [[1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1], [1, 1, 1.414], [1, -1, 1.414], [-1, 1, 1.414], [-1, -1, 1.414]];
// sources: array of [i, j]
export function flow(sources) {
  dist.fill(INF); hn = 0;
  for (const [pi, pj] of sources) { if (!inb(pi, pj)) continue; const s = idx(pi, pj); dist[s] = 0; hpush(0, s); }
  while (hn) {
    const d0 = hd[0]; const k = hpop(); if (d0 > dist[k] || d0 > MAXD) continue;
    const i = k % GW + OI, j = ((k / GW) | 0) + OJ;
    for (let n = 0; n < 8; n++) {
      const di = NB[n][0], dj = NB[n][1]; const ni = i + di, nj = j + dj; if (!inb(ni, nj)) continue; const nk = idx(ni, nj);
      if (di && dj && (stepCost(idx(i + di, j)) >= 2 || stepCost(idx(i, j + dj)) >= 2)) continue;
      const c = stepCost(nk); if (c >= INF) continue;
      const nd = d0 + c * NB[n][2]; if (nd < dist[nk]) { dist[nk] = nd; hpush(nd, nk); }
    }
  }
}

// open ground where zombies can climb out of the dirt
// find a spot to climb out of the ground: open outdoor tile, not the safe zone, 12-50 m from the player and
// reachable by the flow field (so it is never behind a wall or a river of trees)
export function spawnSpot(px, pz, rnd = Math.random) {
  for (let pass = 0; pass < 3; pass++) for (let n = 0; n < 60; n++) {
    const a = rnd() * Math.PI * 2, d = (pass === 2 ? 6 : 12) + rnd() * (pass === 0 ? 38 : 60);
    const i = Math.floor((px + Math.sin(a) * d) / S), j = Math.floor((pz + Math.cos(a) * d) / S);
    if (!inb(i, j)) continue; const k = idx(i, j);
    if (grid[k] !== OUT || safe[k] || zone[k] > 1) continue;
    if (pass < 2 && !(dist[k] < 1e8)) continue;
    return [i, j];
  }
  return null;
}
// ---- the sliding window ----
const CN = CW * CH;
const cGrid = new Uint8Array(CN), cZone = new Int16Array(CN), cOwner = new Int16Array(CN), cArea = new Uint8Array(CN), cSurf = new Uint8Array(CN), cSafe = new Uint8Array(CN);
let procChunk = null; export function setProcProvider(f) { procChunk = f; }
const ARRS = () => [[grid, cGrid], [zone, cZone], [owner, cOwner], [area, cArea], [surf, cSurf], [safe, cSafe]];
// copy the core tiles that are inside the window back into the core store (doors opened, pieces built...)
export function commitCore() {
  const i0 = Math.max(0, OI), j0 = Math.max(0, OJ), i1 = Math.min(CW, OI + GW), j1 = Math.min(CH, OJ + GH);
  if (i1 <= i0 || j1 <= j0) return;
  for (const [w, c] of ARRS()) for (let j = j0; j < j1; j++) { const s0 = idx(i0, j); c.set(w.subarray(s0, s0 + (i1 - i0)), j * CW + i0); }
}
function fillRect(i0, j0, i1, j1) { // world tiles [i0,i1) x [j0,j1), all inside the window
  for (let j = j0; j < j1; j++) {
    let i = i0;
    while (i < i1) {
      if (j >= 0 && j < CH && i >= 0 && i < CW) { const e = Math.min(i1, CW), s0 = idx(i, j), c0 = j * CW + i; for (const [w, c] of ARRS()) w.set(c.subarray(c0, c0 + (e - i)), s0); i = e; continue; }
      const ci = Math.floor(i / 32), cj = Math.floor(j / 32), ch = procChunk(ci, cj), lj = j - cj * 32;
      let e = Math.min(i1, (ci + 1) * 32); if (j >= 0 && j < CH && i < 0) e = Math.min(e, 0);
      for (; i < e; i++) { const l = lj * 32 + (i - ci * 32), k = idx(i, j); grid[k] = ch.grid[l]; zone[k] = ch.zone[l]; owner[k] = -1; area[k] = ch.area[l]; surf[k] = ch.surf[l]; safe[k] = 0; }
    }
  }
}
export const windowShifts = { n: 0, ms: 0 };
// slide the window so the player is near its middle. Returns true when it moved.
export function recenter(x, z, force) {
  const pi = Math.floor(x / S), pj = Math.floor(z / S);
  if (!force && Math.abs(pi - (OI + GW / 2)) < 64 && Math.abs(pj - (OJ + GH / 2)) < 64) return false;
  const t0 = performance.now();
  commitCore();
  const nOI = Math.round((pi - GW / 2) / 32) * 32, nOJ = Math.round((pj - GH / 2) / 32) * 32;
  const di = nOI - OI, dj = nOJ - OJ;
  if (force || Math.abs(di) >= GW || Math.abs(dj) >= GH) { OI = nOI; OJ = nOJ; fillRect(OI, OJ, OI + GW, OJ + GH); }
  else {
    const w = GW - Math.abs(di), dst = Math.max(0, -di), src = Math.max(0, di);
    for (const [a] of ARRS()) {
      if (dj >= 0) for (let r = 0; r < GH - dj; r++) a.copyWithin(r * GW + dst, (r + dj) * GW + src, (r + dj) * GW + src + w);
      else for (let r = GH - 1; r >= -dj; r--) a.copyWithin(r * GW + dst, (r + dj) * GW + src, (r + dj) * GW + src + w);
    }
    OI = nOI; OJ = nOJ;
    // fill the strips that came into view
    if (dj > 0) fillRect(OI, OJ + GH - dj, OI + GW, OJ + GH); else if (dj < 0) fillRect(OI, OJ, OI + GW, OJ - dj);
    const ja = dj > 0 ? OJ : OJ - dj, jb = dj > 0 ? OJ + GH - dj : OJ + GH;
    if (di > 0) fillRect(OI + GW - di, ja, OI + GW, jb); else if (di < 0) fillRect(OI, ja, OI - di, jb);
  }
  dist.fill(1e9);
  windowShifts.n++; windowShifts.ms = performance.now() - t0;
  return true;
}
