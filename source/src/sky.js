// Day/night cycle, weather and the flashlight. One full day takes DAY_SEC real seconds.
// Everything here reuses lights that already exist (hemi, moon/sun, light pool) plus one flashlight SpotLight that is always in the
// scene (intensity 0 when off), so the number of lights never changes and no shaders recompile.
import * as THREE from 'three';
import { T } from './tex.js';
import { clamp, lerp, R } from './util.js';

export const DAY_SEC = 720;          // 12 real minutes per day: about 7 of daylight, 1.5 of dusk/dawn, 3.5 of night
export const START_HOUR = 21.5;      // a new game starts after dark, like before; dawn comes about 4 minutes in
const WEATHER = ['clear', 'clear', 'fog', 'rain', 'storm'];
const c = h => new THREE.Color(h);
const NIGHT = { fog: c(0x121a28), sky: c(0x4a5a80), gnd: c(0x241c16), hemi: 1.75, sun: c(0x8aa0d8), sunI: 1.4, exp: 1.6 };
const DUSK = { fog: c(0x4a3a3c), sky: c(0xb08070), gnd: c(0x3a2a20), hemi: 2.0, sun: c(0xffa060), sunI: 2.2, exp: 1.45 };
const DAY = { fog: c(0x8b949c), sky: c(0xc4ccd8), gnd: c(0x6a5e4a), hemi: 2.7, sun: c(0xfff0dc), sunI: 3.6, exp: 1.35 };

export function makeSky(scene, camera, WD, renderer) {
  const S = { hour: START_HOUR, light: 0, kind: 'clear', wk: { fog: 0, rain: 0, storm: 0 }, nextW: 200, flash: false, flashAuto: true, wasDark: true,
    boltT: 0, nextBolt: 8, flashK: 0, sightMul: 1, fogBase: 0.024, indoor: false, thunderAt: -1 };
  // daytime sky dome over the night one, faded in by daylight
  const dayTex = (() => { const cv = document.createElement('canvas'); cv.width = 16; cv.height = 256; const x = cv.getContext('2d'); const g = x.createLinearGradient(0, 0, 0, 256);
    g.addColorStop(0, '#4f6178'); g.addColorStop(0.38, '#7f8c9c'); g.addColorStop(0.5, '#a6adb3'); g.addColorStop(0.53, '#8b949c'); g.addColorStop(1, '#5a5f62'); x.fillStyle = g; x.fillRect(0, 0, 16, 256);
    const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t; })();
  const dayDome = new THREE.Mesh(new THREE.SphereGeometry(690, 24, 16), new THREE.MeshBasicMaterial({ map: dayTex, side: THREE.BackSide, fog: false, depthWrite: false, transparent: true, opacity: 0 }));
  dayDome.renderOrder = -1; dayDome.frustumCulled = false; scene.add(dayDome);
  const sun = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.glow(), color: 0xfff2d0, fog: false, depthWrite: false, transparent: true, opacity: 0 })); sun.scale.set(150, 150, 1); scene.add(sun);
  // rain: one draw call; drops wrap around the camera on the GPU
  const N = 1400, pos = new Float32Array(N * 6), end = new Float32Array(N * 2);
  for (let n = 0; n < N; n++) { const x = R() * 36, y = R() * 18, z = R() * 36; pos.set([x, y, z, x, y, z], n * 6); end[n * 2] = 0; end[n * 2 + 1] = 1; }
  const rg = new THREE.BufferGeometry(); rg.setAttribute('position', new THREE.BufferAttribute(pos, 3)); rg.setAttribute('e', new THREE.BufferAttribute(end, 1));
  const rainM = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, uniforms: { uT: { value: 0 }, uC: { value: new THREE.Vector3() }, uA: { value: 0 }, uCol: { value: new THREE.Color(0xa8b4c8) } },
    vertexShader: `attribute float e; uniform float uT; uniform vec3 uC; varying float vE;
      void main(){ vec3 p = position; p.y = mod(p.y - uT * 17.0, 18.0) - 4.0 + uC.y; p.xz = mod(p.xz - uC.xz + 18.0, 36.0) - 18.0 + uC.xz; p += vec3(0.12, 0.65, 0.05) * e; vE = e;
        gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0); }`,
    fragmentShader: `uniform float uA; uniform vec3 uCol; varying float vE; void main(){ gl_FragColor = vec4(uCol, uA * (0.25 + 0.75 * vE)); }` });
  const rain = new THREE.LineSegments(rg, rainM); rain.frustumCulled = false; rain.visible = false; rain.renderOrder = 2; scene.add(rain);
  // flashlight
  const flash = new THREE.SpotLight(0xfff2dc, 0, 30, 0.44, 0.5, 1.35); flash.castShadow = false; scene.add(flash); scene.add(flash.target);
  const _f = new THREE.Vector3();
  S.setFlash = (on, manual) => { S.flash = on; if (manual) S.flashAuto = false; };
  S.newGame = () => { S.hour = START_HOUR; S.kind = 'clear'; S.wk.fog = S.wk.rain = S.wk.storm = 0; S.nextW = 150 + R() * 120; S.flash = true; S.flashAuto = true; S.wasDark = true; S.flashK = 0; };
  S.setWeather = k => { S.kind = k; S.nextW = 180 + R() * 180; };
  S.clock = () => { const h = Math.floor(S.hour) % 24, m = Math.floor((S.hour % 1) * 60 / 10) * 10; return ((h + 11) % 12 + 1) + ':' + String(m).padStart(2, '0') + (h < 12 ? ' AM' : ' PM'); };
  // dt: game seconds; air 0..1 (fly height); px,pz camera; sfx hooks for thunder
  S.update = (dt, air, cam, hooks) => {
    S.hour = (S.hour + dt * 24 / DAY_SEC) % 24;
    if ((S.nextW -= dt) <= 0) { const k = WEATHER[(R() * WEATHER.length) | 0]; S.setWeather(k); hooks.weather && hooks.weather(k); }
    for (const k of ['fog', 'rain', 'storm']) { const want = S.kind === k || (k === 'rain' && S.kind === 'storm') ? 1 : 0; S.wk[k] += clamp(want - S.wk[k], -dt / 20, dt / 20); }
    const elev = Math.sin((S.hour - 6) / 12 * Math.PI); // sun height: +1 noon, -1 midnight
    const light = clamp((elev + 0.12) / 0.4, 0, 1), dusk = clamp(1 - Math.abs(elev) / 0.22, 0, 1) * (1 - light * 0.4);
    S.light = light;
    const wet = Math.max(S.wk.rain * 0.6, S.wk.storm), dim = 1 - wet * 0.35 - S.wk.fog * 0.15;
    const mix = (a, b, d, t) => a.clone().lerp(b, light).lerp(d, dusk * 0.6);
    const fogC = mix(NIGHT.fog, DAY.fog, DUSK.fog); fogC.multiplyScalar(lerp(1, dim, light)); fogC.lerp(c(0x9aa0a6), S.wk.fog * 0.35 * Math.max(light, 0.25));
    scene.fog.color.copy(fogC); scene.background.copy(fogC);
    const dens = lerp(0.024, 0.02, light) * (1 + S.wk.fog * 0.9 + wet * 0.2); S.fogBase = dens;
    scene.fog.density = dens * (1 - air * 0.82);
    WD.hemi.color.copy(mix(NIGHT.sky, DAY.sky, DUSK.sky)); WD.hemi.groundColor.copy(mix(NIGHT.gnd, DAY.gnd, DUSK.gnd));
    // lightning
    S.flashK = Math.max(0, S.flashK - dt * 6);
    if (S.wk.storm > 0.6) { if ((S.nextBolt -= dt) <= 0) { S.nextBolt = 6 + R() * 12; S.flashK = 1; S.thunderAt = 0.4 + R() * 1.8; } }
    if (S.thunderAt >= 0 && (S.thunderAt -= dt) < 0) { S.thunderAt = -1; hooks.thunder && hooks.thunder(); }
    const bolt = S.flashK > 0.5 || (S.flashK > 0.2 && S.flashK < 0.35) ? S.flashK : 0;
    WD.hemi.intensity = lerp(NIGHT.hemi, DAY.hemi * dim, light) + air * 1.6 + bolt * 3;
    const sunDir = light > 0.02 || dusk > 0.3 ? 1 : 0;
    WD.moonL.color.copy(mix(NIGHT.sun, DAY.sun, DUSK.sun)); WD.moonL.intensity = lerp(NIGHT.sunI, DAY.sunI * lerp(1, 0.45, wet + S.wk.fog * 0.5), light);
    const ang = (S.hour - 6) / 12 * Math.PI; // sun travels east -> west
    if (sunDir) WD.moonL.position.set(cam.x - Math.cos(ang) * 70, 25 + Math.max(0, elev) * 60, cam.z - 30); else WD.moonL.position.set(cam.x - 30, 60, cam.z - 40);
    WD.moonL.target.position.set(cam.x, 0, cam.z);
    renderer.toneMappingExposure = lerp(NIGHT.exp, DAY.exp, light) + air * 0.6 * (1 - light);
    // sky dome, stars, moon, sun
    dayDome.position.set(cam.x, 0, cam.z); dayDome.material.opacity = clamp(light * 1.1, 0, 1); dayDome.visible = light > 0.01;
    dayDome.material.color.setRGB(1, 1, 1).lerp(c(0xd09080), dusk * 0.7).multiplyScalar(lerp(1, 0.7, wet + S.wk.fog * 0.3));
    if (WD.skyParts) { WD.skyParts.stars.material.opacity = 0.8 * (1 - light) * (1 - wet * 0.8); WD.skyParts.moon.material.opacity = (1 - light) * (1 - wet * 0.7); }
    sun.position.set(cam.x - Math.cos(ang) * 500, Math.max(-60, elev * 380), cam.z - 220); sun.material.opacity = clamp((elev + 0.08) * 4, 0, 0.9) * (1 - wet * 0.85 - S.wk.fog * 0.5);
    sun.material.color.copy(c(0xfff2d0).lerp(c(0xff9050), dusk));
    // rain
    const ra = Math.max(S.wk.rain, S.wk.storm) * (S.indoor ? 0 : 1);
    rain.visible = ra > 0.02 && air < 0.5; rainM.uniforms.uA.value = ra * lerp(0.35, 0.55, light); rainM.uniforms.uT.value += dt; rainM.uniforms.uC.value.set(cam.x, cam.y, cam.z);
    rainM.uniforms.uCol.value.copy(c(0x8a96aa).lerp(c(0xc8d0dc), light));
    // flashlight: switches itself on at dusk and off at dawn unless you flipped it yourself
    const dark = light < 0.35;
    if (dark !== S.wasDark) { S.wasDark = dark; if (S.flashAuto) S.flash = dark; else S.flashAuto = true; }
    S.flicker = Math.max(0, (S.flicker || 0) - dt); flash.intensity = S.flash && !hooks.driving ? lerp(46, 18, light) * (S.flicker > 0 && Math.random() < 0.55 ? 0.04 : 1) : 0;
    camera.getWorldDirection(_f); flash.position.copy(cam).addScaledVector(_f, 0.3); flash.position.y -= 0.12; flash.target.position.copy(cam).addScaledVector(_f, 10);
    // how far zombies see: farther by day, less in fog and rain; a lit flashlight in the dark gives you away
    let sm = lerp(0.7, 1.25, light) * (1 - S.wk.fog * 0.3) * (1 - wet * 0.2);
    if (S.flash && dark && !hooks.driving) sm = Math.max(sm, 1.05);
    S.sightMul = sm;
    return S;
  };
  return S;
}
