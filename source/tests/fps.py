import asyncio, sys
from playwright.async_api import async_playwright
PORT=sys.argv[1]; Q=sys.argv[2] if len(sys.argv)>2 else None
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    pg = await (await br.new_context(viewport={'width': 960, 'height': 540})).new_page()
    await pg.goto(f'http://localhost:{PORT}/index.html'); await pg.wait_for_timeout(3000)
    if Q: await pg.evaluate("localStorage.setItem('ds_set', JSON.stringify({q:'%s'}))" % Q); await pg.reload(); await pg.wait_for_timeout(3000)
    await pg.evaluate("document.getElementById('bPlay').click()"); await pg.wait_for_timeout(2000)
    for name, js in [('start',''),('turn','__ds.P.yaw+=Math.PI;'),('outside','__ds.P.x=40;__ds.P.z=40;')]:
      await pg.evaluate('(()=>{__ds.G.god=true;'+js+'})()'); await pg.wait_for_timeout(800)
      fps = await pg.evaluate('''new Promise(r=>{let n=0;const t=performance.now();function f(){n++; if(performance.now()-t<2500) requestAnimationFrame(f); else r(n/((performance.now()-t)/1000));} requestAnimationFrame(f);})''')
      print(PORT, Q, name, round(fps,1))
    await br.close()
asyncio.run(main())
