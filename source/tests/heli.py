import asyncio, sys, json
from playwright.async_api import async_playwright
from airlib import T, VIS, OVERLAP
W, H = map(int, sys.argv[1].split('x'))
URL = sys.argv[2] if len(sys.argv) > 2 else 'http://localhost:8112/index.html'
async def main():
  async with async_playwright() as p:
    t = T(); await t.start(p, W, H, URL); ev = t.ev; M = t.mobile; h = {}
    hp = await ev('(()=>{const g=__ds.WDh; return g ? [g.group.position.x, g.group.position.z] : null;})()')
    h['heliAt'] = [round(v) for v in hp] if hp else None
    h['area'] = await ev('([x,z])=>{const d=__ds; return d.AREA_NAMES ? d.AREA_NAMES[d.area ? d.area(d.tileOf(x), d.tileOf(z)) : 0] : null}', hp) if False else None
    await ev('([x,z])=>{const d=__ds; d.P.x=x+4; d.P.z=z; d.P.fly=false; if(d.recenter) d.recenter(Math.floor(d.P.x/2),Math.floor(d.P.z/2),true);}', hp)
    await t.sim(0.6); await t.pg.wait_for_timeout(500)
    h['prompt'] = await ev('document.getElementById("prompt").textContent')
    if M: await t.tap('#touch [data-b="use"]')
    else: await t.key('KeyF')
    await t.sim(0.1)
    h['mode'] = await ev('__ds.AIR.mode')
    if M: h['buttons'] = await ev(VIS); h['overlap'] = await ev(OVERLAP)
    if h['mode'] != 'heli': h['dbg'] = await ev('[__ds.P.x,__ds.P.z,__ds.H.x,__ds.H.z,__ds.H.y,__ds.WDh.group.position.x]'); print(json.dumps(h)); return
    if M: await t.hold('#touch [data-b="up"]', 5)
    else: await t.keyhold('Space', 5)
    h['altAfter5sLift'] = round(await ev('__ds.H.y'), 1)
    p0 = await ev('[__ds.H.x,__ds.H.z]')
    if M: await t.stick(0, 1, 5)
    else: await t.keyhold('KeyW', 5)
    p1 = await ev('[__ds.H.x,__ds.H.z]')
    h['forward5s_m'] = round(((p1[0] - p0[0]) ** 2 + (p1[1] - p0[1]) ** 2) ** 0.5, 1)
    h0 = await ev('__ds.H.h')
    if M: await t.stick(1, 0.5, 2)
    else: await t.keyhold('KeyD', 2)
    h['turned2s_deg'] = round(abs(await ev('__ds.H.h') - h0) * 57.3)
    await t.pg.wait_for_timeout(1500)
    h['hud'] = await ev('document.getElementById("airhud").textContent')
    h['camBehind_m'] = await ev('+Math.hypot(__ds.camera.position.x-__ds.H.x,__ds.camera.position.z-__ds.H.z).toFixed(1)')
    await t.shot('heli')
    await t.stick(0, 1, 10)
    h['cruise10s'] = {'alt': round(await ev('__ds.H.y'), 1), 'x': round(await ev('__ds.H.x')), 'z': round(await ev('__ds.H.z'))}
    if M: await t.tap('#touch [data-b="use"]')
    else: await t.key('KeyF')
    await t.sim(0.1)
    h['exitRefusedInAir'] = (await ev('__ds.AIR.mode')) == 'heli'
    if M: await t.hold('#touch [data-b="down"]', 25)
    else: await t.keyhold('ControlLeft', 25)
    h['altAfterDown'] = round(await ev('__ds.H.y'), 2)
    await t.pg.wait_for_timeout(300)
    if M: h['useShown'] = 'use' in await ev(VIS); await t.tap('#touch [data-b="use"]')
    else: await t.key('KeyF')
    await t.sim(0.2)
    h['outMode'] = await ev('__ds.AIR.mode')
    h['playerToHeli_m'] = await ev('+Math.hypot(__ds.P.x-__ds.H.x,__ds.P.z-__ds.H.z).toFixed(1)')
    h['playerY'] = await ev('__ds.P.y')
    await t.sim(1.0)
    h['canWalk4dirs'] = await ev('(()=>{const d=__ds,r=[]; const x0=d.P.x,z0=d.P.z; for(let k=0;k<4;k++){d.P.x=x0;d.P.z=z0;d.P.yaw=k*Math.PI/2; const x=d.P.x,z=d.P.z; for(let i=0;i<30;i++){d.inp.my=1;d.sim(1/30,false);} r.push(+Math.hypot(d.P.x-x,d.P.z-z).toFixed(1));} d.inp.my=0; return r;})()')
    if M: h['footAgain'] = 'drone' in await ev(VIS)
    h['rotorSpinsDown'] = await ev('(()=>{__ds.sim(8,false); return +__ds.H.spool.toFixed(2);})()')
    h['errors'] = t.errs[:10]
    print(json.dumps(h)); await t.br.close()
asyncio.run(main())
