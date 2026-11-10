# Dead Shift: state after the open-world checkpoint (Nov 10, 2026)

The working project is /home/sprite/dead-shift-live. Build it with `node scripts/build.mjs` (output goes to dist/). To publish, copy dist/* into /home/sprite/dead-shift-pub, put the sources under source/, then commit and push. Live: https://johnny4958.github.io/dead-shift/ (commit 0b74b62).

## Live and tested
- **Open world:** you start in the motel garage. Then come the Lockwood town, the gas station, the carnival, the woods, the mall, Pine Hollow, and the graveyard by the army base. map.js, town.js and world.js came from /home/sprite/dead-shift. world.js was merged without conflicts against base eefab35.
- **Culling:** the static wall buckets and the huge merged meshes are split into 32 m cells. camera.far is 125 on the ground and 260 in the air. Fog thins and the light gets brighter as you fly higher.
- **Zombies:** six types, built in zombies.js. Each one is a single SkinnedMesh, and the geometry is cached for each type and variant (3 variants). Hit tests use the centres of the visible head and torso (headC and bodyC).
- **Sounds:** the new audio.js (gun cracks and the zombie voices for each type).
- **Bosses:** a boss comes every 10 rounds (up to 3 of them), and each one leaves a trophy head near the start. Screamers enrage the horde and call in extra zombies.
- **Surge Cannon:** a wave gun that comes from the mystery box.
- **Aiming:** fixed on every gun with a per-gun SIGHT table in guns.js. tests/aim.py scored 6/6 aimed shots on every gun at 7 m.
- **Admin FLY toggle:** behind the PIN. You fly where you look. Space goes up, Ctrl or Z goes down, Shift goes fast.
- **Tests:** tests/run.py (desktop, phone portrait, phone landscape, 0 errors), tests/explore.py (walking out of the garage plus spawning, pathing and kills in 8 areas) and tests/world.py. All ran in software-rendered Chromium. Nothing was run on a real iPhone.

## Known issues
- **Rendering cost:** the open world costs about 1.5 to 2 times as much to render as the old map in the same software renderer. Real phone frame rate has not been measured.
- **Dark at night:** on the ground the night is as dark as it was before.

## Next steps, in order
1. Zombies that stay down for a while after they die, and hunting by sight, sound and blood with hiding.
2. Extra cars and car upgrades, and the long-lasting fuel gauge.
3. Generators, the craft table, mines and the loot bag.
4. Traders and survivors, day and night, the flashlight, weather and hordes.
5. The story intro and journals, the drone and the helicopter.
6. Multiplayer, and only if free hosting is feasible.
