# Dead Shift - world update finish (Nov 10, 2026, evening)

Read after HANDOFF-INFINITE.md. This round finished the car, build mode, Lockwood furniture and readable notes, then tested and published.

## What changed
- **src/car.js (new)**: car physics. Three body circles test against `solidCar` tiles + `pushOut` prop obstacles, so trees block only at the
  trunk (TREE is not in solidCar; trunks are prop obstacles). Grip/slide model with front steer, handbrake (low rear grip),
  brake-stand burnouts (gas + brake under 4 m/s), wheelspin launches, skid marks (ring-buffer mesh, 1400 quads), tyre smoke (28 sprites).
  `unstick(car)` finds the nearest roomy spot (prefers a road, faces along it). `carBlocked`, `roomy` exported for tests.
- **audio.js**: `setSqueal(level)` tyre squeal loop; `sfx.radio()` static burst; stronger crash.
- **main.js**: new `updCar` (fixed 1/60 substeps), FLIP (touch) / R (keyboard) / Triangle (pad), "Stuck? ..." hint under the MPH when
  pinned for 1.5 s, body roll. Exit-car spot search uses `at()` so it works in the endless world. Removed the old world clamp in fly mode.
- **Touch driving**: GAS, BRAKE/REV, HANDBRAKE on the left, drag anywhere on the right 60% to steer (a slider appears where you touch),
  FLIP top-left. Keyboard: W/S, A/D, Space = handbrake. Pad: R2/L2, stick, Cross = handbrake.
- **Build mode**: item bar is tappable/clickable (also 1-3 keys, SWAP still cycles), PLACE button on touch, green/red ghost + ring preview,
  reason shown in the prompt and a toast + deny sound when a piece can't go there (standing there, zombie, car, already built, wall, points).
  Aim/reload/knife/grenade/jump hidden while building. New models for wall (log posts, planks, nails, tin patches, sandbags, wire),
  door frame + leaf (straps, Z brace, handle) and spikes (cheval-de-frise with sharpened stakes and wire).
- **Lockwood furniture**: `furnishFixed()` in proc.js furnishes 36 original rooms (houses, shops, police, bar, school, church, cabin,
  garage, diner) once at startup as one merged mesh. Keeps clear of every doorway/window/wall-buy/perk/box (checked: 0 blocked).
- **Readables**: walking near a note/journal/radio shows "Read the note" / "Listen to the radio"; USE opens a paper or radio-style box,
  USE again or walking away closes it.
- **Fog cull** (`fogCull` in main.js): meshes whose nearest edge is over 80 m away at ground level move to a hidden layer (fog is ~97%
  there). Off when flying above 8 m. Cut the new build's draw calls back to about the live build's level.

## Tests (all emulated Chromium with SwiftShader, never a real iPhone)
- tests/drive2.json: Lockwood -> Route 9 -> Ashford by car, then three cross-country woods legs (bot driver with look-ahead).
- tests/touchdrive.json: real touch events on GAS/BRAKE/HB/FLIP/steer at 844x390 and 390x844.
- tests/buildtouch.json: real touch taps on the item bar + PLACE, several pieces, overlap/offscreen check, both orientations.
- tests/reads.json: note + radio open/close.
- tests/final.json: walk garage -> Ashford, fly over the world.
- tests/perfcmp.py: draw calls / triangles live (8113) vs new (8112).
- tests/aim.py, feat.py, explore.py: regressions (feat.py car step updated for the new touch controls).

## Known limits / next
- Mustang model unchanged (still the old blocky one) - next visual job.
- The bot driver still bumped trees a few times off-road and recovered by reversing; a human may too in thick woods.
- explore.py's walk from the garage south stalls briefly at ~(12,46) in the new world (same in the pre-change snapshot); sidestepping clears it.
- Real-phone frame rate unknown. If it lags: lower stream radius on touch (stream.js), or lower the fog-cull distance.
- Still not built: zombies hunting by noise/blood/sight, more cars + upgrades, generators/crafting, traders, day/night, drone,
  helicopter, story intro, 4-player.
