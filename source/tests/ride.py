import asyncio, sys, json
from playwright.async_api import async_playwright
from airlib import T, VIS, OVERLAP
W, H = map(int, sys.argv[1].split('x'))
URL = sys.argv[2] if len(sys.argv) > 2 else 'http://localhost:8112/index.html'
async def main():
  async with async_playwright() as p:
    t = T(); await t.start(p, W, H, URL); ev = t.ev; M = t.mobile; r = {}
    bp = await ev('(()=>{const b=__ds.special.coaster.booth; return [__ds.cx(b.i), __ds.cx(b.j)];})()')
    async def goto(x, z, yaw=0):
      await ev('([x,z,y])=>{const d=__ds; d.P.x=x; d.P.z=z; d.P.yaw=y; d.P.pitch=-0.3; d.P.fly=false; if(d.recenter) d.recenter(Math.floor(x/2),Math.floor(z/2),true);}', [x, z, yaw])
      await t.sim(0.5); await t.pg.wait_for_timeout(500)
    await goto(bp[0] + 1.6, bp[1], 1.57)
    r['booth'] = [round(v) for v in bp]
    r['playerAt'] = await ev('[+__ds.P.x.toFixed(1), +__ds.P.z.toFixed(1)]')
    r['deadPrompt'] = await ev('document.getElementById("prompt").textContent')
    if M: await t.tap('#touch [data-b="use"]')
    else: await t.key('KeyF')
    await t.sim(0.1); r['deadUse'] = await ev('__ds.AIR.mode')
    # build a generator with the build bar ~10 m from the booth
    placed = None
    for ox, oz, yaw in [(10, 0, 1.57), (-10, 0, -1.57), (0, 10, 0), (0, -10, 3.14), (8, 8, 0), (-8, -8, 3.14), (12, 4, 1.57), (-6, 10, 0)]:
      await goto(bp[0] + ox, bp[1] + oz, yaw)
      if M: await t.tap('#touch [data-b="build"]')
      else: await t.key('KeyB')
      k = await ev('__ds.PIECES.findIndex(p=>p.kind==="gen")')
      if M: await t.tap(f'#buildbar [data-bi="{k}"]')
      else: await ev(f'(()=>{{const e=document.querySelector("#buildbar [data-bi=\\"{k}\\"]"); e.dispatchEvent(new PointerEvent("pointerdown",{{bubbles:true}})); e.click();}})()')
      await t.sim(0.2); await t.pg.wait_for_timeout(200)
      ok = await ev('[__ds.build.ok, __ds.build.promptTxt||""]')
      n0 = await ev('__ds.pieces.length')
      if M: await t.tap('#touch [data-b="place"]')
      else: await t.pg.mouse.down(); await t.sim(0.1); await t.pg.mouse.up(); await t.pg.wait_for_timeout(200)
      await t.sim(0.1)
      n1 = await ev('__ds.pieces.length')
      if M: await t.tap('#touch [data-b="build"]')
      else: await t.key('KeyB')
      if n1 > n0: placed = [ox, oz, ok]; break
    r['genPlaced'] = placed
    if not placed: r['buildDbg'] = await ev('[__ds.build.on, __ds.build.sel, __ds.build.ok, __ds.inp.device]')
    r['genDist'] = await ev('([x,z])=>{const g=__ds.pieces.find(p=>p.kind==="gen"); return g?+Math.hypot(g.x-x,g.z-z).toFixed(1):null}', bp)
    await t.sim(1.0)
    r['powered'] = await ev('__ds.RIDE.powered')
    await goto(bp[0] + 1.6, bp[1], 1.57)
    r['livePrompt'] = await ev('document.getElementById("prompt").textContent')
    pts0 = await ev('__ds.G.points')
    if M: await t.tap('#touch [data-b="use"]')
    else: await t.key('KeyF')
    await t.sim(0.1)
    r['mode'] = await ev('__ds.AIR.mode'); r['paid'] = pts0 - await ev('__ds.G.points')
    if M: r['buttons'] = await ev(VIS); r['overlap'] = await ev(OVERLAP)
    track = await ev('(()=>{const d=__ds,o={maxY:0,maxV:0,secs:0,samples:[]}; for(let i=0;i<30*120&&d.AIR.mode==="ride";i++){d.sim(1/30,false); o.secs+=1/30; const y=d.P.y; if(y>o.maxY)o.maxY=y; if(d.RIDE.v>o.maxV)o.maxV=d.RIDE.v; if(i%150===0)o.samples.push([+d.P.x.toFixed(0),+y.toFixed(1),Math.round(d.RIDE.v*2.237)]);} o.endMode=d.AIR.mode; o.maxY=+o.maxY.toFixed(1); o.maxMph=Math.round(o.maxV*2.237); o.secs=Math.round(o.secs); return o;})()')
    r['ride'] = track
    r['afterRide'] = await ev('[+__ds.P.x.toFixed(1), +__ds.P.z.toFixed(1), __ds.P.y]')
    r['canWalkAfter'] = await ev('(()=>{const d=__ds,x0=d.P.x,z0=d.P.z,r=[]; for(let k=0;k<4;k++){d.P.x=x0;d.P.z=z0;d.P.yaw=k*Math.PI/2; for(let i=0;i<30;i++){d.inp.my=1;d.sim(1/30,false);} r.push(+Math.hypot(d.P.x-x0,d.P.z-z0).toFixed(1));} d.inp.my=0; return r;})()') if M else None
    if M: r['footAgain'] = 'drone' in await ev(VIS)
    # shot from the top of the lift hill, looking toward town
    await ev('(()=>{const d=__ds; d.startRide(); d.RIDE.t=0.23; d.RIDE.ly=0; d.sim(0.05,false);})()')
    await t.pg.wait_for_timeout(2500)
    r['camTopY'] = await ev('+__ds.camera.position.y.toFixed(1)')
    r['hud'] = await ev('document.getElementById("airhud").textContent')
    await t.shot('ride')
    r['errors'] = t.errs[:10]
    print(json.dumps(r)); await t.br.close()
asyncio.run(main())
