import asyncio, sys, time
from playwright.async_api import async_playwright
OUT = sys.argv[1]; VW, VH = map(int, (sys.argv[2] if len(sys.argv) > 2 else '960x540').split('x'))
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    pg = await (await br.new_context(viewport={'width': VW, 'height': VH})).new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)+' @ '+(e.stack or '')[:300]))
    pg.on('console', lambda m: errs.append('console:' + m.text) if m.type in ('error', 'warning') else None)
    t0 = time.time(); await pg.goto(sys.argv[3] if len(sys.argv) > 3 else 'http://localhost:8112/index.html'); await pg.wait_for_timeout(3000)
    await pg.evaluate("document.getElementById('bPlay').click()"); await pg.wait_for_timeout(800)
    print('load+start s', round(time.time() - t0, 1))
    info = await pg.evaluate('''(()=>{const d=__ds; return {P:[d.P.x|0,d.P.z|0], keys:Object.keys(d).join(',')}})()''')
    print(info)
    shots = [('start', None), ('high', 'P.y=60;P.pitch=-0.75;'), ('town', 'P.x+=0;P.y=25;P.pitch=-0.35;P.yaw=Math.PI/2;'), ('east', 'P.y=25;P.pitch=-0.3;P.yaw=-Math.PI/2;')]
    for name, js in shots:
      if js: await pg.evaluate('(()=>{const d=__ds,P=d.P; d.G.fly=true; d.G.god=true; ' + js + '})()')
      await pg.wait_for_timeout(1500)
      fps = await pg.evaluate('''new Promise(r=>{let n=0;const t=performance.now();function f(){n++; if(performance.now()-t<2000) requestAnimationFrame(f); else r(n/((performance.now()-t)/1000));} requestAnimationFrame(f);})''')
      await pg.screenshot(path=OUT + '_' + name + '.png'); print(name, 'fps(swiftshader)', round(fps, 1))
    print('ERR', errs[:8]); await br.close()
asyncio.run(main())
