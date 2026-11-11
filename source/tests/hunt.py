import asyncio, sys, json
from playwright.async_api import async_playwright
# Hunting zombies: sight (cone + line of sight), sound (gun, engine), blood (smell + trail), losing you when you hide,
# and that a normal round still brings zombies to you and they still die.
URL = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:8112/index.html'
VP = [(1280, 720), (844, 390), (390, 844)]
SETUP = '''(()=>{const d=__ds,P=d.P,G=d.G; G.god=true; G.toSpawn=0; d.zombies.forEach(z=>{z.dead=true;z.m.root.visible=false}); d.zombies.length=0;
  const door=d.doors.find(x=>x.label==='Outside'); if(door && !door.open) d.openDoor(door); if(P.driving) d.exitCar(); P.bleedT=0; d.blood.length=0; return 1;})()'''
# put player at (px,pz), one zombie at (zx,zz) facing angle fa (radians, 0 = +z), idle, not drifting
PLACE = '''(([px,pz,zx,zz,fa])=>{const d=__ds,P=d.P,G=d.G; d.zombies.forEach(z=>{z.dead=true;z.m.root.visible=false}); d.zombies.length=0; G.toSpawn=0;
  G.screamAdds=99; P.x=px; P.z=pz; P.y=0; P.bleedT=0; d.blood.length=0; d.spawnZombie(); const z=d.zombies[d.zombies.length-1]; window.__tz=z; G.toSpawn=0;
  z.x=zx; z.z=zz; z.yaw=fa; z.state='walk'; z.t=5; d.initAI(z); z.ai='idle'; z.alert=0; z.wx=zx; z.wz=zz; z.driftAt=1e9; z.driftT=0; z.senseT=0; z.wanderT=99; z.gx=zx; z.gz=zz; z.speed=Math.min(z.speed,2.2);
  return {los:d.losTo(zx,zz,px,pz), type:z.type};})'''
ST = '''(()=>{const d=__ds,P=d.P,z=window.__tz; return {ai:z.ai, sees:z.sees, d:+Math.hypot(z.x-P.x,z.z-P.z).toFixed(1), lk:[+z.lkx.toFixed(1),+z.lkz.toFixed(1)], hud:document.getElementById('stealth').textContent};})()'''
async def main():
  out = {}
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    for (w, h) in VP:
      ctx = await br.new_context(viewport={'width': w, 'height': h}, has_touch=(w < 1000), is_mobile=(w < 1000))
      pg = await ctx.new_page(); errs = []
      pg.on('pageerror', lambda e: errs.append(str(e)[:200])); pg.on('console', lambda m: errs.append(m.text[:200]) if m.type == 'error' else None)
      await pg.goto(URL); await pg.wait_for_timeout(2500)
      await pg.evaluate("document.getElementById('bPlay').click()"); await pg.wait_for_timeout(400)
      await pg.evaluate(SETUP)
      r = {}
      async def place(*a): return await pg.evaluate(PLACE, list(a))
      async def sim(t, aim=False): await pg.evaluate('([t,a])=>__ds.sim(t,a)', [t, aim])
      async def st(): return await pg.evaluate(ST)
      # find an open stretch of road: Main Street
      PX, PZ = 120.0, 86.0
      # 1 sight: zombie 14 m away, facing the player
      import math
      l = await place(PX, PZ, PX + 14, PZ, -math.pi / 2); await sim(1.0); r['sight_facing'] = {**await st(), 'los': l['los']}
      # 2 facing away, player standing still at 14 m: should not notice
      l = await place(PX, PZ, PX + 14, PZ, math.pi / 2); await pg.evaluate('(()=>{const z=window.__tz; z.gx=z.x+6; z.paused=false;})()'); await sim(2.0); r['sight_back_turned'] = await st()
      # 3 gunshot heard from 35 m behind its back
      await place(PX, PZ, PX + 35, PZ, math.pi / 2); await sim(0.3)
      await pg.evaluate("(()=>{const d=__ds; d.P.yaw=0; d.fireOnce(0,0);})()"); await sim(0.4); r['gunshot_35m'] = await st()
      await sim(10); r['gunshot_after10s'] = await st()
      # 4 car engine heard at ~25 m
      await place(PX, PZ, PX + 25, PZ, math.pi / 2)
      await pg.evaluate("(([x,z])=>{const d=__ds; d.car.x=x; d.car.z=z; d.car.v=0; d.car.h=0; d.enterCar(); d.inp.keys&&0;})", [PX, PZ]); await pg.keyboard.down('KeyW'); await sim(1.0); await pg.keyboard.up('KeyW')
      r['engine_25m'] = {**await st(), 'carSpeed': await pg.evaluate('+Math.hypot(__ds.car.vx,__ds.car.vz).toFixed(1)')}; await pg.evaluate('__ds.exitCar()')
      # 5 blood smell: bleeding player 15 m away behind its back
      await place(PX, PZ, PX + 15, PZ, math.pi / 2); await pg.evaluate('__ds.P.bleedT=14'); await sim(1.0); r['blood_smell_15m'] = await st()
      # 6 blood trail: walk a bleeding player 30 m away; idle zombie standing by the start of the trail picks it up
      await place(PX, PZ, PX - 80, PZ, math.pi)
      tr = await pg.evaluate('''(([px,pz])=>{const d=__ds,P=d.P,z=window.__tz; P.bleedT=14; z.speed=0.01;
        for(let i=0;i<60;i++){ P.x=px+i*0.5; d.sim(0.05,false); }
        P.bleedT=0; const b=d.blood[0]; z.x=b.x-1.5; z.z=b.z; z.yaw=-Math.PI/2; z.ai='idle'; z.alert=0; z.senseT=0; z.speed=2; z.wanderT=99; z.gx=z.x; z.gz=z.z;
        return {drops:d.blood.length, firstDrop:[+b.x.toFixed(1),+b.z.toFixed(1)], lastDrop:[+d.blood[d.blood.length-1].x.toFixed(1)], playerDist:+Math.hypot(z.x-P.x,z.z-P.z).toFixed(1)};})''', [PX, PZ])
      await sim(0.5); a = await st(); await sim(6); r['blood_trail'] = {**tr, 'after0.5s': a, 'after6.5s': await st()}
      # 7 hiding: zombie hunting you, then you go behind walls 22 m away and stand still
      hide = await pg.evaluate('''(()=>{const d=__ds; for(let x=100;x<150;x+=1) for(let z=70;z<100;z+=1){ for(const [ox,oz] of [[22,0],[-22,0],[0,22],[0,-22],[16,16],[-16,16],[16,-16],[-16,-16]]){ const zx=x+ox, zz=z+oz; if(d.tileOf && !d.losTo(zx,zz,x,z) && d.losTo(zx,zz,zx+(x-zx)*0.3,zz+(z-zz)*0.3)) { const t=d.at? d.at(x,z):0; return [x,z,zx,zz]; } } } return null;})()''')
      if hide:
        hx, hz, zx, zz = hide
        await place(hx, hz, zx, zz, math.atan2(hx - zx, hz - zz))
        await pg.evaluate('''(([x,z])=>{const zz=window.__tz; zz.ai='hunt'; zz.alert=0.5; zz.lkx=x; zz.lkz=z; zz.speed=0.01;})''', [hx, hz])
        await sim(1.5); r['hide_1.5s'] = await st(); await sim(8); r['hide_9.5s'] = await st()
      else: r['hide'] = 'no spot found'
      # 8 normal round: zombies still come and die
      rr = await pg.evaluate('''(()=>{const d=__ds,P=d.P,G=d.G; d.zombies.forEach(q=>{q.dead=true;q.m.root.visible=false}); d.zombies.length=0; P.x=120; P.z=86; d.giveGun('viper',false); d.startRound(6); d.sim(4,false);
        const near=()=>{let m=1e9; for(const q of d.zombies) if(!q.dead) m=Math.min(m,Math.hypot(q.x-P.x,q.z-P.z)); return m;};
        const d0=near(); d.sim(12,false); const d1=near(); const k0=G.kills||0; d.sim(25,true); return {spawned:d.zombies.length, near0:+d0.toFixed(0), near12s:+d1.toFixed(0), kills:(G.kills||0)-k0, hud:document.getElementById('stealth').textContent, round:G.round};})()''')
      r['round6'] = rr
      await pg.screenshot(path=f'/home/sprite/perf/run-shots/hunt_{w}x{h}.png')
      r['errors'] = errs[:5]; out[f'{w}x{h}'] = r; await ctx.close()
    await br.close()
  print(json.dumps(out, indent=1))
asyncio.run(main())
