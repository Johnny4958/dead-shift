export const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
export const lerp = (a, b, t) => a + (b - a) * t;
export function rng(seed) { let s = seed >>> 0 || 1; return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; }
export const R = Math.random;
export const pick = a => a[(Math.random() * a.length) | 0];
export function angDiff(a, b) { let d = b - a; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return d; }
export const $ = id => document.getElementById(id);
