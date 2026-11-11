# Dead Shift: staged roadmap (hunting zombies -> day/night -> vehicles -> base/survivors -> extras)
Read after HANDOFF-WORLD-FINISH.md. Each stage is published only after tests pass. Publish = `node scripts/build.mjs`, copy dist/index.html,
dist/main.js to ../dead-shift-pub, rsync src/tests/scripts/index.html/HANDOFF*.md into ../dead-shift-pub/source, commit, push, then re-run tests on
https://johnny4958.github.io/dead-shift/ . Local servers: 8112 = dist (new), 8113 = ../dead-shift-pub (live copy).

## Stage 1: hunting zombies (DONE, published)
- main.js "zombie senses" block: per-zombie `ai` = idle | drift | go | search | hunt, `alert` timer, `lkx/lkz` last known spot.
  - sight: SIGHT 30 m * G.sightMul (day/night hook, 1 now) * stealth (still 0.65, walk 0.8, sprint 1, car 1.4), 66 deg cone unless already hunting, losTo().
  - sound: noise(x,z,r) from guns (NOISE per kind), grenades 70, car engine 18+1.5*speed every 0.35 s, footsteps (sprint 10, walk 4),
    knife 5, doors 16, mystery box 22, building 14, boarding windows 10. Zombies head to the spot (less exact with distance).
  - blood: hurt() sets P.bleedT 14 s. Smell within 20 m (10 m in car) and an instanced trail of decals (blood[], max 40, 45 s).
  - damage always reveals you (damageZombie -> spotP). Screamers only scream when they see you.
  - lose you: hunt -> search around last seen (6 s) -> idle wander. Idle zombies drift toward you after 6-16 s, new spawns drift at once
    (0.85 speed) and switch to search 5-9 m out, so rounds still come to you. Bosses always hunt.
  - HUD: HIDDEN / SEARCHING / SPOTTED badge next to the zombie count; minimap dots dim for zombies not hunting.
- **Big pre-existing bug fixed**: path following used `bk % GW` instead of ijOf(bk), so once the streaming window moved off the origin
  (anywhere away from the motel) zombies walked the wrong way. Kills in 40 s with auto-aim (tests/roundcmp.py): Main St 11->16, Woods 0->13,
  Ashford 7->15.
- tests/hunt.py (sight, back turned, gunshot 35 m, engine 25 m, blood smell, blood trail, hiding, round) at 1280x720, 844x390, 390x844.

## Stage 2: day/night, weather, flashlight (DONE, published)
- src/sky.js: makeSky() drives hemi/moonL (sun by day), fog colour/density, exposure, a fading day sky dome + sun sprite, stars/moon
  fade (W_.skyParts in world.js), GPU rain (one LineSegments draw), lightning + thunder (sfx.thunder), rain hiss (audio setRain).
  DAY_SEC 720 (12 real min/day), new game starts 9:30 PM so the classic night opener stays; dawn about 4 min in.
  Weather picks every 3-6 min from clear, clear, fog, rain, storm; fades over ~20 s; toast on change.
- Flashlight: one SpotLight always in the scene (intensity 0 when off, so no shader recompiles). Auto on at dusk / off at dawn unless
  toggled; LIGHT touch button (under BUILD, hidden while building/driving), L key, D-pad down outside build mode.
- Nights are brighter than before (ground ~30% brighter in screenshots). Light pool lamps dim 70% by day (fires stay).
- G.sightMul = SKY.sightMul: zombies see 0.7x at night, 1.25x by day, less in fog/rain; flashlight on in the dark raises it to 1.05.
- Admin panel: Time/weather row (NOON, DUSK, MIDNIGHT, CLEAR, FOG, RAIN, STORM).
- Fog culling limit follows fog density (min(105, 1.87/density)), so clear noon draws ~10% more at Main St landscape, fog draws less.
- tests/sky.py (screens + cost + brightness per time/weather vs live), tests/skytap.py (real taps on LIGHT + admin, a day running with a round).

## Stage 3: vehicles (DONE, published)
- src/vehicles.js: SPECS (mustang, pickup, cruiser), UPGRADES (nos 2500, armor 2000, tires 1500, spikes 1750, turret 4000), makePickup,
  makeCruiser (light bar flashes while driven, main.js car.mdl.bar), makeUpgradeParts/showParts. Off-road tyres lift the body (P.lift).
  Cruiser turret sits on a post above the light bar (spec.turX/turLift).
- **Shop bug cause**: not the USE code. After keyboard use the touch controls are hidden (inp.device 'kbd'), and input.js only switched back
  to touch on a touchstart when NOT playing, so a finger mid-game could not reach USE. Fixed: any touchstart switches back to touch.
  (veh.py also uses keys first, then taps; it now taps once to wake the touch controls.)
- tests/veh.py (all 3 sizes): pad opens on a real USE tap, all 5 upgrades install, parts visible, close works; NOS 66->94 mph,
  off-road tyres on grass 52->62 mph, armor 27->9 damage, spikes kill, turret kills, fuel ~420 km per tank and floors at 15%.
- tests/vehlook.py screenshots to /home/sprite/perf/vlook (geometry checked by bounding boxes; not eyeballed).
- perfcmp (844x390): garage same 229 calls; chop shop/police 124->152 calls, 71k->80k tris; Main St 279->308 calls, 94k->99k tris.

## Stage 4: base and survivors (DONE, published)
- src/base.js: baseGeo(kind) for gen/lamp/bulbs/bench/trap/mine/camp (baked + merged, 2 draws each), makeSurvivor(look) (soldier rig
  recoloured), TRADERS (Dale ~150,78 by the chop shop; Marisol 1316,84 truck stop; Pastor Hale 1638,25 by Ashford church), WARES, RECIPES.
- main.js "Stage 2" block (search "Stage 2: base gear"): PIECES gained gen 1500, lamp 400, bench 1000, trap/mine (from inventory, cost 0).
  placeBase/repower (POWER_R 16 m: floodlights light up and benches work only near a generator), floodlights add a lightSrc,
  zTraps (trap holds 4 s, 1.5 s for bosses, 3 uses; mine = blast()), traders set up lazily within 140 m (campSpot finds open ground),
  shop panel reuses #upgPanel (openShop/renderShop/shopBuy). Scrap: 1 per kill, 15 per boss; G.scrap and G.inv reset on new game.
  Admin extra row: +20 SCRAP, TRAPS, MINES. Build bar wraps; on touch landscape it sits at the bottom and the ammo box hides while building.
- tests/base.py WxH: places gen/lamp/bench with taps, power range, craft, trap holds, mine kills, trade with Dale, all 3 camps appear.
- Perf (844x390): 10-piece base +19 calls/+4% tris at night; Dale's camp +24 calls/+3.6k tris when in view; perfcmp spots unchanged.

Stages 4 (generators, crafting table, traps/mines, traders) and 5 (intro, journals, hallucinations, hordes, drone, helicopter,
roller coaster, co-op) not started.
