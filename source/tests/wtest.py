import asyncio, sys, json, time
from playwright.async_api import async_playwright
# usage: wtest.py WxH steps.json [url]   steps: list of ["eval", js] | ["wait", ms] | ["shot", name] | ["tap", sel] | ["key", code, ms]
W, H = map(int, sys.argv[1].split('x'))
steps = json.load(open(sys.argv[2]))
URL = sys.argv[3] if len(sys.argv) > 3 else 'http://localhost:8112/index.html'
mobile = H > 0 and (W < 1000)
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    kw = dict(viewport={'width': W, 'height': H})
    if mobile: kw.update(has_touch=True, is_mobile=True, device_scale_factor=2, user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1')
    ctx = await br.new_context(**kw); pg = await ctx.new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append('pageerror:' + str(e)))
    pg.on('console', lambda m: errs.append('console:' + m.text) if m.type == 'error' else None)
    cdp = await ctx.new_cdp_session(pg)
    async def tch(kind, pts): await cdp.send('Input.dispatchTouchEvent', {'type': kind, 'touchPoints': [{'x': x, 'y': y, 'id': i} for i, x, y in pts]})
    await pg.goto(URL); await pg.wait_for_timeout(3000)
    for st in steps:
      t = st[0]
      try:
        if t == 'eval':
          r = await pg.evaluate(st[1]);
          if r is not None: print('>', json.dumps(r)[:1500])
        elif t == 'wait': await pg.wait_for_timeout(st[1])
        elif t == 'shot': await pg.screenshot(path='/home/sprite/perf/run-shots/' + st[1] + '.png')
        elif t == 'click': await pg.click(st[1])
        elif t == 'tapIf':
          if await pg.evaluate('window.__tapIt'):
            b = await pg.locator(st[1]).bounding_box(); x, y = b['x'] + b['width'] / 2, b['y'] + b['height'] / 2
            await tch('touchStart', [(9, x, y)]); await pg.wait_for_timeout(90); await tch('touchEnd', []); await pg.wait_for_timeout(300)
        elif t == 'tap':
          b = await pg.locator(st[1]).bounding_box(); x, y = b['x'] + b['width'] / 2, b['y'] + b['height'] / 2
          await tch('touchStart', [(9, x, y)]); await pg.wait_for_timeout(90); await tch('touchEnd', []); await pg.wait_for_timeout(100)
        elif t == 'touch': # ["touch", [[id,x,y],...], ms]  hold touches for ms then release
          await tch('touchStart', [tuple(a) for a in st[1]]); await pg.wait_for_timeout(st[2]); await tch('touchEnd', [])
        elif t == 'touchmove':  # ["touchmove", [[id,x,y]...] start, [[id,x,y]...] moved, ms]
          await tch('touchStart', [tuple(a) for a in st[1]]); await pg.wait_for_timeout(60); await tch('touchMove', [tuple(a) for a in st[2]]); await pg.wait_for_timeout(st[3]); await tch('touchEnd', [])
        elif t == 'keydown': await pg.keyboard.down(st[1]); await pg.wait_for_timeout(100)
        elif t == 'keyup': await pg.keyboard.up(st[1])
        elif t == 'key': await pg.keyboard.down(st[1]); await pg.wait_for_timeout(st[2]); await pg.keyboard.up(st[1])
        elif t == 'keys':  # hold several
          for k in st[1]: await pg.keyboard.down(k)
          await pg.wait_for_timeout(st[2])
          for k in st[1]: await pg.keyboard.up(k)
        elif t == 'print': print(st[1])
        elif t in ('touchB','touchBB','touchBsteer','touchBBsteer'):
          B = await pg.evaluate('window.B'); names = [n for n in st[1:] if isinstance(n, str)]; nums = [n for n in st[1:] if not isinstance(n, str)]
          pts = [(i + 1, B[n][0], B[n][1]) for i, n in enumerate(names)]
          if t.endswith('steer'):
            dx, ms = nums; sx, sy = int(W * 0.75), int(H * 0.6)
            await tch('touchStart', pts + [(8, sx, sy)]); await pg.wait_for_timeout(60); await tch('touchMove', pts + [(8, sx + dx, sy)]); await pg.wait_for_timeout(ms)
          else:
            ms = nums[0]; await tch('touchStart', pts); await pg.wait_for_timeout(ms)
          await tch('touchEnd', []); await pg.wait_for_timeout(80)
      except Exception as e: print('STEP FAIL', st[:2], str(e)[:300])
    print('ERRORS', len(errs)); [print(' ', e[:400]) for e in errs[:12]]
    await br.close()
asyncio.run(main())
