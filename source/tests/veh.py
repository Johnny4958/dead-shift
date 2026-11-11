import asyncio, json, sys
from playwright.async_api import async_playwright
# Vehicles: 3 cars spawn and can be driven, upgrades bought through the pad with real taps, each upgrade does its job, grass/dirt speed, fuel.
URL = sys.argv[2] if len(sys.argv) > 2 else 'http://localhost:8112/index.html'
async def main():
  w, h = map(int, sys.argv[1].split('x'))
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    pg = await (await br.new_context(viewport={'width': w, 'height': h}, has_touch=w < 1000, is_mobile=w < 1000)).new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)[:200])); pg.on('console', lambda m: m.type == 'error' and errs.append(m.text[:200]))
    await pg.goto(URL); await pg.wait_for_timeout(2500)
    await pg.evaluate("document.getElementById('bPlay').click()"); await pg.wait_for_timeout(600)
    await pg.evaluate("(()=>{const b=document.getElementById('bUpright'); if(b && b.offsetParent) b.click();})()"); await pg.wait_for_timeout(400)
    await pg.evaluate("(()=>{const d=__ds; d.G.god=true; d.G.toSpawn=0; d.zombies.forEach(z=>{z.dead=true;z.m.root.visible=false}); d.zombies.length=0; const door=d.doors.find(x=>x.label==='Outside'); if(door&&!door.open) d.openDoor(door);})()")
    r = {}
    r['spawn'] = await pg.evaluate("__ds.cars.map(v=>({id:v.id, x:+v.x.toFixed(1), z:+v.z.toFixed(1), visible:v.mdl.group.visible, inScene:!!v.mdl.group.parent}))")
    # drive each one 4 s on the road
    drive = {}
    for i in range(3):
      drive[i] = await pg.evaluate("""((i)=>{const d=__ds,P=d.P,v=d.cars[i]; P.x=v.x+Math.cos(v.h)*2.5; P.z=v.z-Math.sin(v.h)*2.5; const n=d.nearVeh(3.4); if(n!==v) return 'near failed '+(n&&n.id);
        d.driveCar(i); return {entered:d.P.driving, car:d.car.id};})""", i)
      await pg.keyboard.down('KeyW'); await pg.evaluate("__ds.sim(4,false)"); await pg.keyboard.up('KeyW')
      drive[i].update(await pg.evaluate("((i)=>{const d=__ds,v=d.cars[i]; const hud=document.getElementById('carhud').textContent; const r={moved:+Math.hypot(v.x-d.vehStart[v.id].x, v.z-d.vehStart[v.id].z).toFixed(1), hud}; d.exitCar(); d.sim(0.3,false); return r;})", i))
    r['drive'] = drive
    # upgrade pad with real taps: park the pickup on the pad, walk up, press USE, buy everything
    await pg.evaluate("""(()=>{const d=__ds,P=d.P,v=d.cars[1]; d.addPts ? d.addPts(20000) : (d.G.points+=20000); v.x=d.special? d.special.pad.x : v.x; })()""")
    pad = await pg.evaluate("(()=>{const d=__ds; const s=d.special||null; return s&&s.pad? [s.pad.x,s.pad.z]: null;})()")
    r['pad'] = pad
    if pad:
      await pg.evaluate("(([x,z])=>{const d=__ds,v=d.cars[1]; v.x=x+5.5; v.z=z; v.mdl.group.position.set(v.x,0,v.z); d.P.x=x; d.P.z=z-1; d.sim(0.3,false);})", pad)
      r['prompt'] = await pg.evaluate("document.getElementById('prompt')?.textContent")
      if w < 1000:
        u = await pg.evaluate("(()=>{const e=document.querySelector('.tb[data-b=use]'); const r=e.getBoundingClientRect(); return [r.left+r.width/2,r.top+r.height/2, !!e.offsetParent];})()")
        cdp = await pg.context.new_cdp_session(pg)  # a real finger holds ~100 ms; touchscreen.tap() is instant
        await cdp.send('Input.dispatchTouchEvent', {'type': 'touchStart', 'touchPoints': [{'x': w*0.6, 'y': h*0.5}]}); await pg.wait_for_timeout(80)  # keys were used above: first touch switches back to touch controls
        await cdp.send('Input.dispatchTouchEvent', {'type': 'touchEnd', 'touchPoints': []}); await pg.wait_for_timeout(200)
        u = await pg.evaluate("(()=>{const e=document.querySelector('.tb[data-b=use]'); const r=e.getBoundingClientRect(); return [r.left+r.width/2,r.top+r.height/2, !!e.offsetParent];})()")
        await cdp.send('Input.dispatchTouchEvent', {'type': 'touchStart', 'touchPoints': [{'x': u[0], 'y': u[1]}]}); await pg.wait_for_timeout(150)
        await cdp.send('Input.dispatchTouchEvent', {'type': 'touchEnd', 'touchPoints': []}); await pg.wait_for_timeout(500)
      else:
        await pg.keyboard.down('KeyF'); await pg.wait_for_timeout(150); await pg.keyboard.up('KeyF'); await pg.wait_for_timeout(500)
      r['panelOpen'] = await pg.evaluate("[!document.getElementById('upgPanel').classList.contains('hidden'), __ds.G.state, __ds.P.driving, document.getElementById('prompt').textContent]")
      bought = []
      for uid in ['nos', 'armor', 'tires', 'spikes', 'turret']:
        c = await pg.evaluate("(u)=>{const e=document.querySelector('#upgList button[data-u='+u+']'); if(!e) return null; e.scrollIntoView(); const r=e.getBoundingClientRect(); return [r.left+r.width/2,r.top+r.height/2];}", uid)
        if not c: bought.append(uid + ':nobutton'); continue
        if w < 1000: await pg.touchscreen.tap(c[0], c[1])
        else: await pg.mouse.click(c[0], c[1])
        await pg.wait_for_timeout(150)
      r['installed'] = await pg.evaluate("Object.keys(__ds.cars[1].upg)"); r['partsVisible'] = await pg.evaluate("(()=>{const p=__ds.cars[1].parts; return {armor:p.armor.visible,spikes:p.spikes.visible,nos:p.nos.visible,turret:p.turret.visible,tires:p.tires.every(t=>t.visible)};})()")
      await pg.screenshot(path=f'/home/sprite/perf/run-shots/veh_panel_{w}x{h}.png')
      c = await pg.evaluate("(()=>{const r=document.getElementById('upgClose').getBoundingClientRect(); return [r.left+r.width/2,r.top+r.height/2];})()")
      if w < 1000: await pg.touchscreen.tap(c[0], c[1])
      else: await pg.mouse.click(c[0], c[1])
      await pg.wait_for_timeout(300); r['closed'] = await pg.evaluate("[document.getElementById('upgPanel').classList.contains('hidden'), __ds.G.state]")
    # each upgrade's effect, measured on the same car with the part on and off
    async def hold(key, sec):
      await pg.keyboard.down(key); await pg.evaluate(f"__ds.sim({sec},false)"); await pg.keyboard.up(key)
    E = {}
    # find a straight open stretch of road and of grass near Main Street
    spots = await pg.evaluate("""(()=>{const d=__ds; const f=(want)=>{ for(let z=40;z<200;z+=2) for(let x=40;x<300;x+=2){ let ok=true; for(let k=0;k<=60;k+=2){ const s=d.surfAt(x+k,z); if(!s||s[0]!==0||(want==='road'? s[1]!==1&&s[1]!==2 : s[1]!==0)) {ok=false;break;} for(const o of [-3,3]){ const q=d.surfAt(x+k,z+o); if(!q||q[0]!==0){ok=false;break;} } if(!ok) break; } if(ok) return [x,z]; } return null; }; return {road:f('road'), grass:f('grass')};})()""")
    E['spots'] = spots
    async def run(i, spot, upg, key='KeyW', sec=3.0, nos=False):
      await pg.evaluate("(([i,s,u])=>{const d=__ds,v=d.cars[i]; if(d.P.driving) d.exitCar(); v.upg=Object.assign({},u); v.nos=1; v.nosLock=false; v.x=s[0]; v.z=s[1]; v.h=-Math.PI/2; v.vx=v.vz=v.v=0; v.yr=0; d.driveCar(i);})", [i, spot, upg])
      if nos: await pg.keyboard.down('ShiftLeft')
      await hold(key, sec)
      if nos: await pg.keyboard.up('ShiftLeft')
      return await pg.evaluate("(([s])=>{const d=__ds; return {mph:+(d.carSpeed()*2.237).toFixed(0), dist:+Math.hypot(d.car.x-s[0],d.car.z-s[1]).toFixed(1), surfK:d.car.surfK};})", [spot])
    if spots['road']:
      E['road_plain'] = await run(2, spots['road'], {})
      E['road_nos'] = await run(2, spots['road'], {'nos': True}, nos=True)
    if spots['grass']:
      E['grass_plain_cruiser'] = await run(2, spots['grass'], {})
      E['grass_offroad_tires_cruiser'] = await run(2, spots['grass'], {'tires': True})
      E['grass_pickup'] = await run(1, spots['grass'], {})
    # armor: same hit while driving, with and without
    E['armor'] = await pg.evaluate("""(()=>{const d=__ds,P=d.P,G=d.G; G.god=false; const r={}; for(const a of [false,true]){ d.cars[2].upg={armor:a}; d.driveCar(2); P.hp=100; d.hurt(30); r[a?'with':'without']=+(100-P.hp).toFixed(1); } P.hp=100; G.god=true; d.exitCar(); return r;})()""")
    # spikes: zombie right in front of a car rolling at about 4 mph
    E['spikes'] = await pg.evaluate("""(([s])=>{const d=__ds,r={}; for(const sp of [false,true]){ d.zombies.forEach(z=>{z.dead=true;z.m.root.visible=false}); d.zombies.length=0; const v=d.cars[2]; if(d.P.driving) d.exitCar(); v.upg={spikes:sp}; v.x=s[0]; v.z=s[1]; v.h=-Math.PI/2; v.vx=1.8; v.vz=0; d.driveCar(2); d.car.vx=1.8; d.car.vz=0; d.spawnZombie(); const z=d.zombies[d.zombies.length-1]; z.state='walk'; z.x=s[0]+2.2; z.z=s[1]; z.speed=0.01; d.sim(0.6,false); r[sp?'with':'without']=z.dead?'killed':'pushed aside'; } d.exitCar(); return r;})""", [spots['road'] or [120,86]])
    # turret: zombie 12 m ahead of a parked car with you in it
    E['turret'] = await pg.evaluate("""(([s])=>{const d=__ds,r={}; for(const t of [false,true]){ d.zombies.forEach(z=>{z.dead=true;z.m.root.visible=false}); d.zombies.length=0; const v=d.cars[2]; if(d.P.driving) d.exitCar(); v.upg={turret:t}; v.x=s[0]; v.z=s[1]; v.h=-Math.PI/2; v.vx=v.vz=0; d.driveCar(2); d.spawnZombie(); const z=d.zombies[d.zombies.length-1]; z.state='walk'; z.x=s[0]+12; z.z=s[1]; z.speed=0.01; z.hp=Math.min(z.hp,800); d.sim(3,false); r[t?'with':'without']=z.dead?'killed':'alive'; } d.exitCar(); return r;})""", [spots['road'] or [120,86]])
    E['fuel_after_tests'] = await pg.evaluate("(()=>{const d=__ds; return d.cars.map(v=>+(v.fuel*100).toFixed(3));})()")
    if spots['road']:
      E['fuel_drain'] = await pg.evaluate("""(([s])=>{const d=__ds,v=d.cars[0]; if(d.P.driving) d.exitCar(); v.fuel=1; v.x=s[0]; v.z=s[1]; v.h=-Math.PI/2; v.vx=v.vz=v.v=0; d.driveCar(0); return 1;})""", [spots['road']])
      await pg.keyboard.down('KeyW'); await pg.evaluate("__ds.sim(3,false)"); await pg.keyboard.up('KeyW')
      fd = await pg.evaluate("""(([s])=>{const d=__ds,v=d.car; const used=1-v.fuel; const m=Math.hypot(v.x-s[0],v.z-s[1]); const hud=document.getElementById('carhud').textContent; v.fuel=0.1501; v.vx=20; d.sim(2,false); const floor=v.fuel; d.exitCar(); return {meters:+m.toFixed(1), usedPct:+(used*100).toFixed(4), kmPerTank:+(m/used/1000).toFixed(0), floorPct:+(floor*100).toFixed(2), hud};})""", [spots['road']])
      E['fuel_drain'] = fd
    r['effects'] = E
    r['errors'] = errs[:5]
    print(w, h, json.dumps(r))
    await br.close()
asyncio.run(main())
