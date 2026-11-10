// Unified input: keyboard + mouse (pointer lock), touch (dual-zone), and gamepads (PS5 DualSense / any standard-mapped pad).
export const inp = { mx: 0, my: 0, lx: 0, ly: 0, fire: false, aim: false, sprint: false, use: false, gas: 0, brake: 0, pressed: new Set(), device: 'kbm', padName: '', sens: 1, invertY: false };
const keys = new Set();
const press = a => inp.pressed.add(a);
export const took = a => inp.pressed.has(a);
export function endFrame() { inp.pressed.clear(); inp.lx = 0; inp.ly = 0; }

const KEYMAP = { KeyR: 'reload', KeyF: 'use', KeyE: 'use', KeyQ: 'swap', Digit1: 'slot1', Digit2: 'slot2', Digit3: 'slot3', KeyV: 'knife', KeyG: 'grenade', KeyC: 'view', KeyB: 'build', Space: 'jump', Escape: 'pause', KeyP: 'pause', KeyT: 'rotate', KeyX: 'rotate', Tab: 'scores' };
export function setupInput(canvas, ui) {
  // ---- keyboard / mouse ----
  addEventListener('keydown', e => {
    if (e.repeat) { if (e.code === 'KeyF' || e.code === 'KeyE') return; }
    keys.add(e.code); const a = KEYMAP[e.code]; if (a && !e.repeat) press(a); if (a === 'use') inp.use = true;
    if (e.code === 'Tab' || e.code === 'Space') e.preventDefault();
    if (inp.device !== 'kbm' && /Key|Digit|Space|Shift/.test(e.code)) setDevice('kbm');
  });
  addEventListener('keyup', e => { keys.delete(e.code); if (KEYMAP[e.code] === 'use') inp.use = keys.has('KeyF') || keys.has('KeyE'); });
  addEventListener('blur', () => { keys.clear(); inp.fire = inp.aim = inp.use = false; });
  canvas.addEventListener('mousedown', e => {
    if (inp.device === 'touch') return;
    setDevice('kbm');
    if (document.pointerLockElement !== canvas) { if (ui.canLock()) canvas.requestPointerLock?.(); return; }
    if (e.button === 0) inp.fire = true; if (e.button === 2) inp.aim = true;
  });
  addEventListener('mouseup', e => { if (e.button === 0) inp.fire = false; if (e.button === 2) inp.aim = false; });
  canvas.addEventListener('contextmenu', e => e.preventDefault());
  addEventListener('mousemove', e => { if (document.pointerLockElement === canvas) { inp.lx += e.movementX * 0.0022 * inp.sens; inp.ly += e.movementY * 0.0022 * inp.sens * (inp.invertY ? -1 : 1); } });
  addEventListener('wheel', e => { if (document.pointerLockElement === canvas) press(e.deltaY > 0 ? 'swap' : 'swapBack'); }, { passive: true });
  document.addEventListener('pointerlockchange', () => { if (document.pointerLockElement !== canvas) { inp.fire = inp.aim = false; ui.onUnlock(); } });
  // ---- touch ----
  setupTouch(ui);
  addEventListener('gamepadconnected', e => { inp.padName = e.gamepad.id; ui.toast((/dualsense|054c|wireless controller|ps5/i.test(e.gamepad.id) ? 'PS5 controller' : 'Controller') + ' connected'); });
  addEventListener('gamepaddisconnected', () => { ui.toast('Controller disconnected'); });
}
export function setDevice(d) { if (inp.device === d) return; inp.device = d; document.body.dataset.device = d; }

export function pollKeyboard() {
  if (inp.device !== 'kbm') return;
  inp.mx = (keys.has('KeyD') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('KeyA') || keys.has('ArrowLeft') ? 1 : 0);
  inp.my = (keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0) - (keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0);
  inp.up = keys.has('Space') ? 1 : 0; inp.down = keys.has('ControlLeft') || keys.has('ControlRight') || keys.has('KeyZ') ? 1 : 0;
  inp.sprint = keys.has('ShiftLeft') || keys.has('ShiftRight');
  inp.gas = inp.my > 0 ? 1 : 0; inp.brake = inp.my < 0 ? 1 : 0; inp.hb = keys.has('Space');
}

// ---- gamepad ----
const prevBtn = [];
let padIdle = 0;
export function pollGamepad(dt) {
  const pads = navigator.getGamepads ? navigator.getGamepads() : [];
  let gp = null; for (const p of pads) if (p && p.connected) { gp = p; break; }
  if (!gp) return;
  const b = i => gp.buttons[i] ? gp.buttons[i].value > 0.4 || gp.buttons[i].pressed : false;
  const bv = i => gp.buttons[i] ? gp.buttons[i].value : 0;
  const dz = (v, d = 0.16) => Math.abs(v) < d ? 0 : (v - Math.sign(v) * d) / (1 - d);
  const ax = dz(gp.axes[0] || 0), ay = dz(gp.axes[1] || 0), rx = dz(gp.axes[2] || 0, 0.12), ry = dz(gp.axes[3] || 0, 0.12);
  let any = Math.abs(ax) + Math.abs(ay) + Math.abs(rx) + Math.abs(ry) > 0;
  for (let i = 0; i < 16; i++) if (b(i)) any = true;
  if (any) { setDevice('pad'); padIdle = 0; } else padIdle += dt;
  if (inp.device !== 'pad') { for (let i = 0; i < 17; i++) prevBtn[i] = b(i); return; }
  inp.mx = ax; inp.my = -ay;
  // response curve: fine aim near center, fast turns at full tilt
  const curve = v => Math.sign(v) * Math.pow(Math.abs(v), 1.8);
  const ads = b(6) ? 0.55 : 1;
  inp.lx += curve(rx) * 3.4 * dt * inp.sens * ads; inp.ly += curve(ry) * 2.4 * dt * inp.sens * ads * (inp.invertY ? -1 : 1);
  inp.fire = b(7); inp.aim = b(6); inp.gas = bv(7); inp.brake = bv(6); inp.hb = b(0);
  if (b(10) && !prevBtn[10]) inp.sprintToggle = !inp.sprintToggle;
  if (Math.hypot(ax, ay) < 0.3) inp.sprintToggle = false;
  inp.sprint = !!inp.sprintToggle;
  inp.use = b(2);
  const edge = (i, a) => { if (b(i) && !prevBtn[i]) press(a); };
  edge(0, 'jump'); edge(1, 'build'); edge(2, 'use'); edge(2, 'reload'); edge(3, 'swap'); edge(5, 'knife'); edge(4, 'grenade'); edge(11, 'knife');
  edge(9, 'pause'); edge(12, 'view'); edge(13, 'rotate'); edge(14, 'swapBack'); edge(15, 'swap'); edge(8, 'scores');
  for (let i = 0; i < 17; i++) prevBtn[i] = b(i);
}
export function rumble(strong, weak, ms) {
  if (inp.device !== 'pad') return; const pads = navigator.getGamepads ? navigator.getGamepads() : [];
  for (const p of pads) if (p && p.vibrationActuator) { p.vibrationActuator.playEffect?.('dual-rumble', { duration: ms, strongMagnitude: strong, weakMagnitude: weak }).catch?.(() => {}); }
}

// ---- touch ----
function setupTouch(ui) {
  const root = document.getElementById('touch');
  const stick = document.getElementById('stick'), knob = document.getElementById('knob');
  const wheel = document.getElementById('steer'), wknob = document.getElementById('steerKnob');
  let moveId = null, mox = 0, moy = 0, steerId = null, sx0 = 0; const lookIds = new Map();
  const driving = () => document.body.classList.contains('driving');
  const SR = () => Math.min(90, innerWidth * 0.16);
  const setSteer = dx => { const r = SR(); dx = Math.max(-r, Math.min(r, dx)); inp.steer = dx / r; wknob.style.transform = `translate(calc(-50% + ${dx}px), -50%)`; };
  const R = () => Math.min(70, innerHeight * 0.12);
  const start = e => {
    if (inp.device !== 'touch') setDevice('touch');
    if (!ui.playing()) return;
    for (const t of e.changedTouches) {
      const el = document.elementFromPoint(t.clientX, t.clientY);
      const btn = el && el.closest && el.closest('[data-b]');
      if (btn) { const a = btn.dataset.b; btn.classList.add('on'); lookIds.set(t.identifier, { x: t.clientX, y: t.clientY, btn: a, el: btn }); if (a === 'fire') inp.fire = true; else if (a === 'aim') { inp.aim = !inp.aim; btn.classList.toggle('lock', inp.aim); } else if (a === 'use') { inp.use = true; press('use'); } else if (a === 'gas') inp.tGas = 1; else if (a === 'brake') inp.tBrake = 1; else if (a === 'hb') inp.hb = true; else if (a === 'sprint') { inp.sprintToggle = !inp.sprintToggle; btn.classList.toggle('lock', inp.sprintToggle); } else press(a); e.preventDefault(); continue; }
      if (document.body.classList.contains('building')) { const bi = document.elementsFromPoint(t.clientX, t.clientY).find(el => el.dataset && el.dataset.bi != null); if (bi) { inp.buildSel = +bi.dataset.bi; e.preventDefault(); continue; } }
      if (driving()) { if (t.clientX > innerWidth * 0.4 && steerId === null) { steerId = t.identifier; sx0 = t.clientX; wheel.style.left = t.clientX + 'px'; wheel.style.top = t.clientY + 'px'; wheel.classList.add('on'); setSteer(0); } e.preventDefault(); continue; }
      if (t.clientX < innerWidth * 0.42 && moveId === null) { moveId = t.identifier; mox = t.clientX; moy = t.clientY; stick.style.left = mox + 'px'; stick.style.top = moy + 'px'; stick.classList.add('on'); knob.style.transform = 'translate(-50%,-50%)'; }
      else lookIds.set(t.identifier, { x: t.clientX, y: t.clientY, btn: null });
      e.preventDefault();
    }
  };
  const move = e => {
    for (const t of e.changedTouches) {
      if (t.identifier === steerId) { setSteer(t.clientX - sx0); continue; }
      if (t.identifier === moveId) { let dx = t.clientX - mox, dy = t.clientY - moy; const l = Math.hypot(dx, dy), r = R(); if (l > r) { dx *= r / l; dy *= r / l; } inp.mx = dx / r; inp.my = -dy / r; inp.gas = Math.max(0, inp.my); inp.brake = Math.max(0, -inp.my); knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`; if (Math.hypot(inp.mx, inp.my) > 0.97 && inp.my > 0.8) inp.autoSprint = true; else if (inp.my < 0.5) inp.autoSprint = false; }
      const L = lookIds.get(t.identifier);
      if (L && (L.btn === null || L.btn === 'fire' || L.btn === 'aim')) { const k = 0.0052 * inp.sens * (inp.aim ? 0.6 : 1); inp.lx += (t.clientX - L.x) * k; inp.ly += (t.clientY - L.y) * k * 0.85 * (inp.invertY ? -1 : 1); L.x = t.clientX; L.y = t.clientY; }
    }
    e.preventDefault();
  };
  const end = e => {
    for (const t of e.changedTouches) {
      if (t.identifier === moveId) { moveId = null; inp.mx = inp.my = 0; inp.gas = inp.brake = 0; inp.autoSprint = false; stick.classList.remove('on'); }
      if (t.identifier === steerId) { steerId = null; inp.steer = 0; wheel.classList.remove('on'); }
      const L = lookIds.get(t.identifier); if (L) { if (L.btn === 'gas') inp.tGas = 0; if (L.btn === 'brake') inp.tBrake = 0; if (L.btn === 'hb') inp.hb = false; if (L.btn === 'fire') inp.fire = false; if (L.btn === 'use') inp.use = false; if (L.el) L.el.classList.remove('on'); lookIds.delete(t.identifier); }
    }
  };
  root.addEventListener('touchstart', start, { passive: false }); root.addEventListener('touchmove', move, { passive: false });
  root.addEventListener('touchend', end); root.addEventListener('touchcancel', end);
  addEventListener('touchstart', () => { if (inp.device !== 'touch' && !ui.playing()) setDevice('touch'); }, { passive: true });
}
export function resetDriveTouch() { inp.tGas = inp.tBrake = 0; inp.steer = 0; if (inp.device === 'touch') inp.hb = false; document.getElementById('steer')?.classList.remove('on'); for (const el of document.querySelectorAll('#touch .tb.on')) el.classList.remove('on'); }
export function touchSprint() { return inp.device === 'touch' && (inp.sprintToggle || inp.autoSprint); }
