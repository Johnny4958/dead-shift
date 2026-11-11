import asyncio, sys, json
from playwright.async_api import async_playwright
# Stage 2 test: place generator, floodlight, workbench from the build bar with taps; craft at the bench; trade with a survivor;
# a bear trap holds a zombie, a mine kills one; generator power range.
W, H = map(int, sys.argv[1].split('x'))
URL = sys.argv[2] if len(sys.argv) > 2 else 'http://localhost:8112/index.html'
SHOT = '/home/sprite/perf/run-shots/'
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    ctx = await br.new_context(viewport={'width': W, 'height': H}, has_touch=True, is_mobile=True, device_scale_factor=1, user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1')
    pg = await ctx.new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append('pageerror:' + str(e)[:300]))
    pg.on('console', lambda m: errs.append('console:' + m.text[:300]) if m.type == 'error' else None)
    cdp = await ctx.new_cdp_session(pg); ev = pg.evaluate
    async def tch(kind, pts): await cdp.send('Input.dispatchTouchEvent', {'type': kind, 'touchPoints': [{'x': x, 'y': y, 'id': i} for i, x, y in pts]})
    async def tapxy(x, y): await tch('touchStart', [(9, x, y)]); await pg.wait_for_timeout(100); await tch('touchEnd', []); await pg.wait_for_timeout(150)
    async def tap(sel):
      b = await pg.locator(sel).first.bounding_box(); await tapxy(b['x'] + b['width'] / 2, b['y'] + b['height'] / 2)
    await pg.goto(URL); await pg.wait_for_timeout(3500)
    if H > W: await tap('#bUpright'); await pg.wait_for_timeout(300)
    await tap('#bPlay'); await pg.wait_for_timeout(1500)
    await ev('(()=>{const d=__ds;d.G.points=50000;d.G.god=true;d.G.toSpawn=0;for(const z of d.zombies)z.dead=true;})()')
    await ev('(()=>{const d=__ds,P=d.P;P.x=d.car.x+6;P.z=d.car.z+6;P.yaw=0;P.pitch=-0.3})()')
    out = {}
    await tap('#touch [data-b="build"]'); await pg.wait_for_timeout(300)
    names = await ev('[...document.querySelectorAll("#buildbar [data-bi]")].map(e=>e.textContent)')
    out['bar'] = names
    bb = await ev('(()=>{const r=[...document.querySelectorAll("#buildbar [data-bi]")].map(e=>e.getBoundingClientRect()); return {minX:Math.min(...r.map(q=>q.left)),maxX:Math.max(...r.map(q=>q.right)),minY:Math.min(...r.map(q=>q.top)),maxY:Math.max(...r.map(q=>q.bottom)),vw:innerWidth,vh:innerHeight};})()')
    out['barBox'] = bb
    # overlap with touch buttons?
    out['barOverlap'] = await ev('''(()=>{const bar=[...document.querySelectorAll("#buildbar [data-bi]")].map(e=>e.getBoundingClientRect()); const btn=[...document.querySelectorAll("#touch .tb")].filter(e=>e.offsetParent).map(e=>[e.dataset.b,e.getBoundingClientRect()]); const hit=[]; for(const a of bar) for(const [n,b] of btn) if(a.left<b.right&&b.left<a.right&&a.top<b.bottom&&b.top<a.bottom) hit.push(n); return [...new Set(hit)];})()''')
    placed = {}
    for kind, dx in [('gen', 0), ('lamp', 4.2), ('bench', 8.4), ('lamp', 30)]:
      k = await ev(f'__ds.PIECES.findIndex(p=>p.kind==="{kind}")')
      await ev(f'(()=>{{const d=__ds,P=d.P;P.x=d.car.x+6+{dx};P.z=d.car.z+6;P.yaw=0;P.pitch=-0.3}})()'); await pg.wait_for_timeout(250)
      await tap(f'#buildbar [data-bi="{k}"]'); await pg.wait_for_timeout(250)
      okc = await ev('[__ds.build.ok, __ds.build.promptTxt||""]')
      n0 = await ev('__ds.pieces.length'); await tap('#touch [data-b="place"]'); await pg.wait_for_timeout(250)
      placed[kind + str(dx)] = [okc, await ev('__ds.pieces.length') - n0]
    out['placed'] = placed
    out['power'] = await ev('__ds.pieces.filter(p=>p.kind==="lamp"||p.kind==="bench").map(p=>[p.kind, +Math.hypot(p.x-__ds.pieces.find(q=>q.kind==="gen").x,p.z-__ds.pieces.find(q=>q.kind==="gen").z).toFixed(1), p.powered])')
    out['lampLights'] = await ev('__ds.WD.lightSrc.filter(s=>s.kind==="lamp").length')
    # trap/mine without any -> refused with reason
    kt = await ev('__ds.PIECES.findIndex(p=>p.kind==="trap")'); await tap(f'#buildbar [data-bi="{kt}"]'); await pg.wait_for_timeout(250)
    out['trapNoneReason'] = await ev('[__ds.build.ok, __ds.build.promptTxt||document.getElementById("prompt").textContent]')
    await tap('#touch [data-b="build"]'); await pg.wait_for_timeout(250)
    # night shot of the base
    await ev('(()=>{const d=__ds; d.SKY.hour=23; d.SKY.setWeather("clear"); const g=d.pieces.find(q=>q.kind==="gen"); d.P.x=g.x+4; d.P.z=g.z+9; d.P.yaw=Math.atan2(d.P.x-(g.x+4),d.P.z-g.z); d.P.pitch=-0.15; d.sim(0.5,false);})()')
    await pg.wait_for_timeout(500); await pg.screenshot(path=SHOT + f'base_night_{W}x{H}.png')
    # workbench: craft with scrap via real taps on USE and the panel
    await ev('(()=>{const d=__ds; d.G.scrap=12; d.SKY.hour=12; const b=d.pieces.find(q=>q.kind==="bench"); d.P.x=b.x; d.P.z=b.z+1.6; d.P.yaw=0; d.sim(0.3,false);})()')
    await pg.wait_for_timeout(300)
    out['benchPrompt'] = await ev('document.getElementById("prompt").textContent')
    await tap('#touch [data-b="use"]'); await pg.wait_for_timeout(400)
    out['benchOpen'] = await ev('[!document.getElementById("upgPanel").classList.contains("hidden"), document.getElementById("upgTitle").textContent]')
    await pg.screenshot(path=SHOT + f'bench_{W}x{H}.png')
    await tap('#upgList button[data-w="trap"]'); await tap('#upgList button[data-w="mine"]'); await tap('#upgList button[data-w="mine"]')
    out['crafted'] = await ev('[__ds.G.scrap, __ds.G.inv.trap, __ds.G.inv.mine]')
    await tap('#upgClose'); await pg.wait_for_timeout(300)
    out['closed'] = await ev('[document.getElementById("upgPanel").classList.contains("hidden"), __ds.G.state]')
    # place trap and mine in the open, then walk zombies into them
    await tap('#touch [data-b="build"]'); await pg.wait_for_timeout(250)
    res = {}
    for kind, dz in [('trap', 14), ('mine', 22)]:
      k = await ev(f'__ds.PIECES.findIndex(p=>p.kind==="{kind}")')
      await ev(f'(()=>{{const d=__ds,P=d.P,g=d.pieces.find(q=>q.kind==="gen");P.x=g.x;P.z=g.z+{dz};P.yaw=0;P.pitch=-0.3}})()'); await pg.wait_for_timeout(250)
      await tap(f'#buildbar [data-bi="{k}"]'); await pg.wait_for_timeout(250)
      n0 = await ev('__ds.pieces.length'); await tap('#touch [data-b="place"]'); await pg.wait_for_timeout(250)
      res[kind + '_placed'] = await ev('__ds.pieces.length') - n0
    await tap('#touch [data-b="build"]'); await pg.wait_for_timeout(250)
    out['inv_after_place'] = await ev('[__ds.G.inv.trap, __ds.G.inv.mine]')
    # zombie walks into the trap
    res['trap'] = await ev('''(()=>{const d=__ds; const t=d.baseTraps.find(p=>p.kind==="trap"); if(!t) return 'no trap'; d.P.x=t.x+12; d.P.z=t.z; d.G.toSpawn=1; d.G.spawnT=0; let z=null; for(let i=0;i<90&&!z;i++){d.sim(0.1,false); z=d.zombies.find(q=>!q.dead);} if(!z) return 'no zombie';
       z.x=t.x-1.2; z.z=t.z; z.hp=1e6; z.m.root.position.set(z.x,0,z.z); let held=0, hp0=z.hp; for(let i=0;i<30;i++){ d.sim(0.1,false); if(z.holdT>0) held++; } const moved=Math.hypot(z.x-t.x,z.z-t.z); return {heldFrames:held, hpLost: hp0-z.hp, usesLeft:t.uses, distFromTrap:+moved.toFixed(2)};})()''')
    s0 = await ev('__ds.G.scrap')
    res['mine'] = await ev('''(()=>{const d=__ds; for(const q of d.zombies) q.dead=true; const m=d.baseTraps.find(p=>p.kind==="mine"); if(!m) return 'no mine'; d.P.x=m.x+12; d.P.z=m.z; d.G.toSpawn=1; d.G.spawnT=0; let z=null; for(let i=0;i<90&&!z;i++){d.sim(0.1,false); z=d.zombies.find(q=>!q.dead);} if(!z) return 'no zombie';
       z.x=m.x-1.6; z.z=m.z; z.m.root.position.set(z.x,0,z.z); for(let i=0;i<20&&!z.dead;i++) d.sim(0.1,false); return {zombieDead:z.dead, mineGone: !d.baseTraps.includes(m)};})()''')
    out['traps'] = res
    scrapMine = await ev('__ds.G.scrap') - s0
    # survivor: go to Dale, tap USE, buy, sell
    dale = await ev('(()=>{const d=__ds; for(const q of d.zombies) q.dead=true; const t=d.traders[0]; d.P.x=t.x+30; d.P.z=t.z; for(let k=0;k<30&&!t.ready;k++) d.sim(0.25,false); return [t.ready, +t.x.toFixed(1), +t.z.toFixed(1)];})()')
    out['dale'] = dale
    await ev('(()=>{const d=__ds,t=d.traders[0]; d.P.x=t.x; d.P.z=t.z+2.2; d.P.yaw=0; d.P.pitch=-0.1; d.sim(0.6,false);})()'); await pg.wait_for_timeout(400)
    await pg.screenshot(path=SHOT + f'dale_{W}x{H}.png')
    out['tradePrompt'] = await ev('document.getElementById("prompt").textContent')
    await tap('#touch [data-b="use"]'); await pg.wait_for_timeout(400)
    out['tradeOpen'] = await ev('[!document.getElementById("upgPanel").classList.contains("hidden"), document.getElementById("upgTitle").textContent]')
    await ev('(()=>{__ds.G.scrap=10; __ds.G.points=3000;})()'); await ev('__ds.shopBuy("trap")')
    before = await ev('[__ds.G.points, __ds.G.inv.trap, __ds.G.scrap]')
    await tap('#upgList button[data-w="mine"]'); await tap('#upgList button[data-w="sell"]')
    out['trade'] = {'before': before, 'after': await ev('[__ds.G.points, __ds.G.inv.mine, __ds.G.scrap]')}
    await pg.screenshot(path=SHOT + f'trade_{W}x{H}.png')
    await tap('#upgClose'); await pg.wait_for_timeout(300)
    out['allTraders'] = await ev('(()=>{const d=__ds; return d.traders.map(t=>{ d.P.fly=true; d.P.x=t.x+30; d.P.z=t.z; for(let k=0;k<90&&!t.ready;k++) d.sim(0.25,false); d.P.fly=false; return [t.name, t.ready, +t.x.toFixed(0), +t.z.toFixed(0)];});})()')
    # scrap from kills
    out['scrapFromMineKill'] = scrapMine
    out['errors'] = errs[:10]
    print(json.dumps(out))
    await br.close()
asyncio.run(main())
