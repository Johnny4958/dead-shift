import asyncio, sys, json
from playwright.async_api import async_playwright
# usage: run.py WxH tag touch(0/1) [url]
size, tag, touch = sys.argv[1], sys.argv[2], sys.argv[3] == '1'
URL = sys.argv[4] if len(sys.argv) > 4 else 'http://localhost:8112/index.html'
W, H = map(int, size.split('x'))
OUT = '/home/sprite/perf/run-shots/'
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'])
    kw = dict(viewport={'width': W, 'height': H})
    if touch: kw.update(has_touch=True, is_mobile=True, device_scale_factor=3, user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1')
    ctx = await br.new_context(**kw)
    pg = await ctx.new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append('pageerror:' + str(e)))
    pg.on('console', lambda m: errs.append('console:' + m.text) if m.type == 'error' else None)
    cdp = await ctx.new_cdp_session(pg)
    ev = pg.evaluate
    async def tch(kind, pts):
      await cdp.send('Input.dispatchTouchEvent', {'type': kind, 'touchPoints': [{'x': x, 'y': y, 'id': i} for i, x, y in pts]})
    async def tap(sel):
      b = await pg.locator(sel).bounding_box(); x, y = b['x'] + b['width'] / 2, b['y'] + b['height'] / 2
      if touch:
        await tch('touchStart', [(9, x, y)]); await pg.wait_for_timeout(80); await tch('touchEnd', [])
      else: await pg.mouse.click(x, y)
    async def center(sel):
      b = await pg.locator(sel).bounding_box(); return b['x'] + b['width'] / 2, b['y'] + b['height'] / 2
    await pg.goto(URL); await pg.wait_for_timeout(3500)
    if H > W: await tap('#bUpright'); await pg.wait_for_timeout(300)
    await pg.screenshot(path=OUT + f'{tag}_menu.png')
    await tap('#bPlay'); await pg.wait_for_timeout(1500)
    st = await ev('({state:__ds.G.state, x:__ds.P.x, z:__ds.P.z, round:__ds.G.round, dev:document.body.dataset.device})'); print('start', st)
    if touch:
      # joystick: move forward 1.2s while looking
      sx, sy = W * 0.18, H * 0.75
      await tch('touchStart', [(1, sx, sy)])
      for k in range(12):
        await tch('touchMove', [(1, sx, sy - 50)]); await pg.wait_for_timeout(100)
      await tch('touchEnd', [])
      p1 = await ev('[__ds.P.x,__ds.P.z,__ds.P.yaw]'); print('after stick', p1)
      lx, ly = W * 0.65, H * 0.4
      await tch('touchStart', [(2, lx, ly)])
      for k in range(6): await tch('touchMove', [(2, lx + 20 * (k + 1), ly)]); await pg.wait_for_timeout(40)
      await tch('touchEnd', [])
      print('after look yaw', await ev('__ds.P.yaw'))
      c0 = await ev('__ds.P.guns[__ds.P.cur].clip')
      fx, fy = await center('#touch [data-b="fire"]')
      await tch('touchStart', [(3, fx, fy)]); await pg.wait_for_timeout(400); await tch('touchEnd', [])
      print('fire clip', c0, '->', await ev('__ds.P.guns[__ds.P.cur].clip'))
    else:
      await pg.keyboard.down('w'); await pg.wait_for_timeout(1200); await pg.keyboard.up('w')
      print('after W', await ev('[__ds.P.x,__ds.P.z]'))
      c0 = await ev('__ds.P.guns[__ds.P.cur].clip')
      await pg.mouse.down(); await pg.wait_for_timeout(100); await pg.mouse.up(); await pg.wait_for_timeout(300)
      print('fire clip', c0, '->', await ev('__ds.P.guns[__ds.P.cur].clip'))
    await ev('__ds.G.god=true'); await ev('__ds.sim(22,true)')
    await ev('(()=>{const P=__ds.P;let b=null,bd=1e9;for(const z of __ds.zombies){if(z.dead||z.state==="rise")continue;const d=Math.hypot(z.x-P.x,z.z-P.z);if(d<bd){bd=d;b=z}}if(b){P.yaw=Math.atan2(-(b.x-P.x),-(b.z-P.z));P.pitch=-0.08}})()')
    await pg.wait_for_timeout(1500); await pg.screenshot(path=OUT + f'{tag}_play.png')
    print('mid', await ev('({round:__ds.G.round,kills:__ds.G.kills,pts:__ds.G.points,alive:__ds.zombies.filter(z=>!z.dead).length,hp:__ds.P.hp,gun:__ds.P.guns[0].clip+"/"+__ds.P.guns[0].reserve})'))
    # die for real: zombies attack
    await ev('__ds.G.god=false; __ds.P.guns[0].clip=0; __ds.P.guns[0].reserve=0; for(let i=0;i<4;i++) __ds.spawnZombie();')
    print('death sim', await ev('__ds.sim(90,false)'))
    await pg.wait_for_timeout(1800)
    print('state', await ev('({state:__ds.G.state, overShown:!document.getElementById("over").classList.contains("hidden"), stats:document.getElementById("stats").innerText})'))
    await pg.screenshot(path=OUT + f'{tag}_over.png')
    await tap('#bAgain'); await pg.wait_for_timeout(1500)
    print('restart', await ev('({state:__ds.G.state, round:__ds.G.round, hp:__ds.P.hp, kills:__ds.G.kills, pts:__ds.G.points})'))
    print('ERRORS', len(errs)); [print(' ', e[:300]) for e in errs[:15]]
    await br.close()
asyncio.run(main())
