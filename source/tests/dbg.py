import asyncio, sys
from playwright.async_api import async_playwright
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    pg = await (await br.new_context(viewport={'width': 900, 'height': 500})).new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    await pg.goto('http://localhost:8112/index.html'); await pg.wait_for_timeout(2500)
    await pg.mouse.click(450, 250); await pg.evaluate("document.getElementById('bPlay').click()"); await pg.wait_for_timeout(500)
    await pg.evaluate('__ds.G.god=true')
    for t in range(int(sys.argv[1]) if len(sys.argv) > 1 else 8):
      await pg.wait_for_timeout(3000)
      print(await pg.evaluate('''JSON.stringify({t:__ds.G.t.toFixed(1),st:__ds.G.state,P:[__ds.P.x.toFixed(1),__ds.P.z.toFixed(1)],z:__ds.zombies.map(z=>[z.type[0],z.state,z.x.toFixed(1),z.z.toFixed(1),Math.round(z.hp),z.stuckT.toFixed(0)]),win:__ds.windows.map(w=>w.planks).join('')})'''))
    print('ERR', errs[:5]); await br.close()
asyncio.run(main())
