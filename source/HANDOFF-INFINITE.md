# Dead Shift: endless world, work in progress (NOT deployed)

Status on Nov 10, 2026: committed locally on branch `wip-endless-world`. The live site still runs the previous build.

## Done in code (builds without errors; only lightly checked in a desktop emulator)
- map.js: the tile arrays are now a 320x320 sliding window (OI/OJ origin) over an endless world. The hand-built core (180x118) is untouched and kept in core copies (commitCore/recenter). Border fences and the flood wall are gone. Bunker 2 moved to i=26. Woods are thinner (0.11) with two dirt trails. Trees now collide only at their trunk (TRUNK_R 0.32, treeOff), not the whole 2 m tile. spawnSpot() samples spawn points around the player instead of using the fixed lot list.
- proc.js (new): deterministic chunks (32 tiles = 64 m) beyond the core. Endless roads line up with Main St, Elm and Pine. Ashford is a new woods town about 1.4 km east on Route 9 with 25 buildings (diner, gas, pharmacy, hardware, police, church with a last stand, garage with a lift, store, sawmill, houses, trailers). There's also a Route 9 truck stop, small hamlets at road crossings, and lone cabins, sheds, trailers, farmhouses with barns, ranger stations, chapels, burned houses and camps in the woods. Buildings have porches, gable or gambrel roofs with overhangs, trim, shutters, boarded or broken windows, hanging doors, signs, graffiti, interiors (props.js furnish), family photos, fridge notes, radios and bikes. Abandoned cars on the roads, road signs and street lights too.
- props.js (new): furniture and clutter kit with box colliders (pushOut applies to the player).
- stream.js (new): streams chunk meshes in and out around the camera (radius 3 chunks, 5 when flying) on a per-frame time budget.
- world.js: the ground and sky follow the camera. main.js: the window recenters as you move, the minimap is now one pixel per tile, and zombies more than 140 m away respawn near you.

## Measured (desktop emulator, 960x540, renderer info after a forced full stream)
Draw calls and triangles at start, Main St, east woods, deep woods and Ashford were printed by tests/wtest.py with /tmp/s2.json. They have NOT been compared carefully against the live build, and they have NOT been checked on phone sizes.

## Not done
1. Car: new handling (grip and slide model, handbrake, drifts, burnouts with smoke, squeal and skid marks), the split phone controls (steer on the right; gas, brake and handbrake on the left), the unstick/flip button, and car collision with trunk circles. solidCar still treats TREE tiles as full blocks, so the car can still snag in the woods. Fix that first.
2. Build mode: the bar items need to be tappable, there needs to be a PLACE button and an aimed ghost preview, more pieces, and better models. The test is tests/buildtest.py. In emulation, SWAP plus FIRE did place pieces, so the likely bug is the untappable bar plus unclear failure reasons.
3. Furnishing the old core town buildings (only the new chunks are furnished).
4. Story reads: readsNear() exists but isn't shown as a prompt in main.js yet.
5. Testing: walk and drive between towns, zombie spawns in several areas, fly mode, phone portrait and landscape, frame cost compared with live. Then publish to dead-shift-pub and check the live link.
