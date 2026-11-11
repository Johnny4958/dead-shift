import asyncio, sys, json
from playwright.async_api import async_playwright
from airlib import T, VIS, OVERLAP
W, H = map(int, sys.argv[1].split('x'))
URL = sys.argv[2] if len(sys.argv) > 2 else 'http://localhost:8112/index.html'
async def main():
  async with async_playwright() as p:
    t = T(); await t.start(p, W, H, URL); ev = t.ev; M = t.mobile; d = {}
    d['dev'] = await ev('__ds.inp.device')
    if M: d['footButtons'] = await ev(VIS); d['footOverlap'] = await ev(OVERLAP); await t.tap('#touch [data-b="drone"]')
    else: await t.key('KeyN')
    await t.sim(0.05)
    d['mode'] = await ev('__ds.AIR.mode')
    b0 = await ev('[__ds.P.x, __ds.P.z]')
    if M: d['buttons'] = await ev(VIS); d['overlap'] = await ev(OVERLAP)
    y0 = await ev('__ds.D.y')
    if M: await t.hold('#touch [data-b="up"]', 1.5)
    else: await t.keyhold('Space', 1.5)
    d['climb'] = [round(y0, 1), round(await ev('__ds.D.y'), 1)]
    p0 = await ev('[__ds.D.x,__ds.D.z]')
    if M: await t.stick(0, 1, 2)
    else: await t.keyhold('KeyW', 2)
    p1 = await ev('[__ds.D.x,__ds.D.z]')
    d['flewMeters2s'] = round(((p1[0] - p0[0]) ** 2 + (p1[1] - p0[1]) ** 2) ** 0.5, 1)
    b1 = await ev('[__ds.P.x, __ds.P.z]')
    d['bodyMoved'] = round(((b1[0] - b0[0]) ** 2 + (b1[1] - b0[1]) ** 2) ** 0.5, 2)
    await t.pg.wait_for_timeout(1500)
    d['camToDrone'] = await ev('+Math.hypot(__ds.camera.position.x-__ds.D.x,__ds.camera.position.z-__ds.D.z,__ds.camera.position.y-__ds.D.y).toFixed(2)')
    d['hud'] = await ev('document.getElementById("airhud").textContent')
    res = []
    for k in range(2):
      await ev('(()=>{const d=__ds; d.zombies.forEach(z=>{z.dead=true;z.m.root.visible=false}); d.zombies.length=0; d.D.y=12; d.D.vx=d.D.vz=0; d.spawnZombie(); const z=d.zombies[d.zombies.length-1]; z.x=d.D.x+0.6; z.z=d.D.z; z.speed=0.01; window.__zz=z; d.AIR.dropT=0;})()')
      g0 = await ev('__ds.AIR.drops')
      if M: await t.tap('#touch [data-b="drop"]')
      else: await t.key('KeyG')
      await t.sim(2.0)
      res.append({'before': g0, 'after': await ev('__ds.AIR.drops'), 'zombieDead': await ev('window.__zz.dead')})
    d['drops'] = res
    await t.pg.wait_for_timeout(400); await t.shot('drone')
    d['leash'] = await ev('(()=>{const d=__ds; d.D.x=d.P.x+400; d.sim(0.1,false); return +Math.hypot(d.D.x-d.P.x,d.D.z-d.P.z).toFixed(0);})()')
    if M: await t.tap('#touch [data-b="recall"]')
    else: await t.key('KeyN')
    await t.sim(0.1)
    d['landedMode'] = await ev('__ds.AIR.mode')
    if M: d['footAgain'] = await ev(VIS) == d['footButtons']
    d['battery'] = await ev('(()=>{const d=__ds; d.AIR.bat=1; d.launchDrone(); d.sim(80,false); const m=d.AIR.mode, b=d.AIR.bat; d.sim(30,false); return [m, +b.toFixed(2), +d.AIR.bat.toFixed(2), d.AIR.drops];})()')
    d['launchAt10pct'] = await ev('(()=>{const d=__ds; d.AIR.bat=0.1; d.launchDrone(); const m=d.AIR.mode; d.AIR.bat=1; return m;})()')
    d['errors'] = t.errs[:10]
    print(json.dumps(d)); await t.br.close()
asyncio.run(main())
