// Weapon table. All names are original. dmg is per bullet/pellet; rpm is fire rate.
export const W = {
  pistol: { name: 'Patrol .45', kind: 'pistol', dmg: 50, rpm: 420, auto: false, mag: 8, reserve: 80, reload: 1.5, spread: 0.010, head: 2.5, pierce: 1, col: 0x2a2a2c, sound: [0.9, 0.18] },
  ranger: { name: 'Ranger Rifle', kind: 'rifle', dmg: 120, rpm: 330, auto: false, mag: 10, reserve: 120, reload: 2.1, spread: 0.006, head: 3, pierce: 2, col: 0x5a3b22, sound: [0.6, 0.3] },
  viper: { name: 'Viper SMG', kind: 'smg', dmg: 55, rpm: 780, auto: true, mag: 30, reserve: 180, reload: 2.0, spread: 0.022, head: 2.2, pierce: 1, col: 0x1e1f22, sound: [1.15, 0.14] },
  trench: { name: 'Trench 12', kind: 'shotgun', dmg: 70, pellets: 8, rpm: 80, auto: false, mag: 6, reserve: 48, reload: 2.8, spread: 0.075, head: 1.5, pierce: 2, col: 0x4a3020, sound: [0.45, 0.42] },
  kestrel: { name: 'Kestrel AR', kind: 'ar', dmg: 95, rpm: 640, auto: true, mag: 30, reserve: 210, reload: 2.3, spread: 0.014, head: 2.5, pierce: 2, col: 0x303a2a, sound: [0.75, 0.24] },
  hammer: { name: 'Hammer LMG', kind: 'lmg', dmg: 130, rpm: 700, auto: true, mag: 100, reserve: 400, reload: 4.2, spread: 0.026, head: 2.2, pierce: 3, col: 0x2c2f2c, sound: [0.55, 0.3] },
  brawler: { name: 'Brawler Magnum', kind: 'pistol', dmg: 520, rpm: 160, auto: false, mag: 6, reserve: 60, reload: 2.4, spread: 0.008, head: 3, pierce: 3, col: 0x8f9296, sound: [0.5, 0.45] },
  ripper: { name: 'Ripper SMG', kind: 'smg', dmg: 80, rpm: 950, auto: true, mag: 40, reserve: 280, reload: 2.2, spread: 0.028, head: 2.2, pierce: 1, col: 0x3a2a40, sound: [1.3, 0.13] },
  widow: { name: 'Widowmaker', kind: 'sniper', dmg: 1600, rpm: 50, auto: false, mag: 5, reserve: 40, reload: 3.2, spread: 0.001, head: 4, pierce: 6, col: 0x23282a, sound: [0.35, 0.6], zoom: 2.6 },
  ion: { name: 'Ion Ray', kind: 'ray', dmg: 1400, rpm: 260, auto: false, mag: 20, reserve: 160, reload: 2.4, spread: 0.004, head: 1, pierce: 1, splash: 3.2, col: 0x1a5a2a, sound: [1.6, 0.35], wonder: true },
};
export const BOX_POOL = ['ranger', 'viper', 'trench', 'kestrel', 'hammer', 'brawler', 'ripper', 'widow', 'ion', 'hammer', 'kestrel', 'ripper', 'ion'];
export const PAP_NAMES = { pistol: 'Hellfire .45', ranger: 'Longshot Rapture', viper: 'Venom Kiss', trench: 'Doomsayer 24', kestrel: 'Raptor Reign', hammer: 'Anvil of Ruin', brawler: 'Judgment Day', ripper: 'Shredder Supreme', widow: 'Black Widow Queen', ion: 'Ion Annihilator' };

export function makeGun(key, pap = false) {
  const d = W[key];
  const g = { key, pap, def: d, name: pap ? PAP_NAMES[key] : d.name, dmg: d.dmg * (pap ? 2.4 : 1), mag: Math.round(d.mag * (pap ? 1.5 : 1)), maxReserve: Math.round(d.reserve * (pap ? 2 : 1)), clip: 0, reserve: 0, rpm: d.rpm * (pap ? 1.12 : 1) };
  g.clip = g.mag; g.reserve = g.maxReserve;
  return g;
}
// wall buys: weapon, cost, where (tile + facing)
export const WALLBUYS = [
  { key: 'ranger', cost: 500, i: 16, j: 23, face: [1, 0] },     // lobby west wall, inside
  { key: 'viper', cost: 1000, i: 32, j: 30, face: [0, -1] },     // diner south wall, inside
  { key: 'trench', cost: 1500, i: 13, j: 14, face: [0, 1] },     // garage south wall, outside (parking lot)
  { key: 'kestrel', cost: 1400, i: 5, j: 12, face: [1, 0] },     // garage west wall, inside
];
