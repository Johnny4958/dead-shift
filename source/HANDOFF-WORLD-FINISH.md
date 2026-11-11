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

## Checkpoint: build snapping + driving HUD (Nov 10 evening)
- Build pieces snap to the 2 m grid. Walls use `wallGeo(key)` (models.js): centre post + one arm per joined side; arms reach the tile edge, so
  runs and L/T/X corners meet flush. Keys are recomputed for neighbours on place/destroy (`refreshAround`). A lone piece faces across your view;
  ROTATE flips that. Doors/spikes take the axis of the run they join. The ghost preview shows the snapped shape (`setGhostShape`).
- Driving: "USE Get out" shows 2.5 s after entering, or after the car has been stopped 1.2 s. USE/FLIP moved off the minimap (right of it in
  landscape, below the zombie count in portrait). Steer hint fades after 4 steers (localStorage ds_steerN). Gun name/ammo hidden while driving.
- Tests: tests/square.json (closed 5x5 ring + door, 1440 rays per height, 0 gaps), tests/buildsnap.json (real touch taps build an L + door +
  spikes), tests/carhud.json (prompt timing, overlap check of USE/FLIP against every visible HUD element).
- Next per plan: Mustang + first-person gun models (check the Patrol .45 shows its detailed model), then smart zombies, day/night, vehicles, base.

## Checkpoint: Looks (Mustang + first-person guns)
- makeCar (models.js) rebuilt as a '69-'70 Mach 1 fastback: rounder bevelled body, curved roofline, tumblehome (every part is baked into
  `inner` space then the upper body/roof is tucked in and the nose pinched), blacked-out hood + shaker scoop + hood pins, recessed grille with
  quad headlights and chrome bezels, chin spoiler, triple-bar tail lights on a black panel, centre gas cap, ducktail, plate, twin exhausts,
  quarter scoops, mirrors, handles, rocker stripe, arch lips, interior seats/dash/wheel, Magnum 500 style wheels with white-letter tyres.
  Same 8 materials, 23 meshes, ~6.7k tris. Not eyeballed (no image viewer); tests/looks.json saves car-34.png / car-rear.png in perf/run-shots.
- First-person: guns were the detailed models already (pistol 1680 verts) but seen straight from behind, so they read as blocks. Hip pose now
  cants the gun (yaw 0.3, roll 0.12, pitch 0.06, fades to 0 in ADS so sights are unchanged); muzzle flash uses the muzzle's world position.
  Upright screens: vmCam fov widens (gun went from ~98% to ~49% of screen width). aim.py: all 11 guns 6/6 ADS.
- Next: stage 2 smart zombies (sight / sound: gunshots + engine / blood trail, lose you when hidden), then day/night, vehicles, base.
