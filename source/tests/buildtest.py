import asyncio, sys
from playwright.async_api import async_playwright
# usage: buildtest.py WxH  -- touch build-mode test: BUILD, SWAP through pieces, place several
W, H = map(int, sys.argv[1].split('x'))
URL = sys.argv[2] if len(sys.argv) > 2 else 'http://localhost:8112/index.html'
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    ctx = await br.new_context(viewport={'width': W, 'height': H}, has_touch=True, is_mobile=True, device_scale_factor=2, user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1')
    pg = await ctx.new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append('pageerror:' + str(e)))
    pg.on('console', lambda m: errs.append('console:' + m.text) if m.type == 'error' else None)
    cdp = await ctx.new_cdp_session(pg); ev = pg.evaluate
    async def tch(kind, pts): await cdp.send('Input.dispatchTouchEvent', {'type': kind, 'touchPoints': [{'x': x, 'y': y, 'id': i} for i, x, y in pts]})
    async def tapxy(x, y): await tch('touchStart', [(9, x, y)]); await pg.wait_for_timeout(90); await tch('touchEnd', []); await pg.wait_for_timeout(120)
    async def tap(sel):
      b = await pg.locator(sel).bounding_box(); await tapxy(b['x'] + b['width'] / 2, b['y'] + b['height'] / 2)
    await pg.goto(URL); await pg.wait_for_timeout(3500)
    if H > W: await tap('#bUpright'); await pg.wait_for_timeout(300)
    await tap('#bPlay'); await pg.wait_for_timeout(1500)
    await ev('(()=>{const d=__ds;d.G.points=50000;d.G.toSpawn=0;for(const z of d.zombies)z.dead=true;})()')
    # walk outside the garage into the open lot
    await ev('(()=>{const d=__ds,P=d.P;P.x=d.car.x+6;P.z=d.car.z+6;P.yaw=0;P.pitch=-0.3})()')
    await tap('#touch [data-b="build"]'); await pg.wait_for_timeout(300)
    out = {'on': await ev('__ds.build.on')}
    sels = []
    bar = await ev('document.querySelectorAll("#buildbar [data-i]").length')
    out['barItems'] = bar
    # select each piece by tapping it in the bar (fallback: SWAP), place one, then step sideways
    n = await ev('document.querySelectorAll("#buildbar > div").length')
    for k in range(n):
      if bar: await tap(f'#buildbar [data-i="{k}"]')
      elif k: await tap('#touch [data-b="swap"]')
      sels.append(await ev('__ds.build.sel'))
      await pg.wait_for_timeout(150)
      okc = await ev('[__ds.build.ok, __ds.build.ghost&&__ds.build.ghost.visible]')
      before = await ev('__ds.pieces.length')
      sel = '#touch [data-b="place"]' if await ev('!!document.querySelector("#touch [data-b=place]")') else '#touch [data-b="fire"]'
      await tap(sel); await pg.wait_for_timeout(200)
      after = await ev('__ds.pieces.length')
      sels[-1] = (sels[-1], okc, before, after)
      await ev('(()=>{const P=__ds.P;P.x+=4.2;})()')
      await pg.wait_for_timeout(150)
      if k == 1: await pg.screenshot(path=f'/home/sprite/perf/run-shots/build_{W}x{H}.png')
    out['steps'] = sels
    out['kinds'] = await ev('__ds.pieces.map(p=>p.kind).join()')
    print(out); print('ERRORS', len(errs)); [print(' ', e[:300]) for e in errs[:10]]
    await br.close()
asyncio.run(main())
