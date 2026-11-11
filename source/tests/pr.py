import asyncio, sys
from playwright.async_api import async_playwright
url = sys.argv[1]; W, H = map(int, sys.argv[2].split('x')); secs = int(sys.argv[3]) if len(sys.argv) > 3 else 15
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    ctx = await br.new_context(viewport={'width': W, 'height': H}, has_touch=True, is_mobile=True, device_scale_factor=3, user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1')
    pg = await ctx.new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e))); pg.on('console', lambda m: m.type == 'error' and errs.append(m.text))
    await pg.goto(url); await pg.wait_for_timeout(3000)
    await pg.evaluate("document.getElementById('bPlay').click()")
    for t in range(0, secs, 3):
      await pg.wait_for_timeout(3000)
      r = await pg.evaluate("(()=>{const r=__ds.renderer; const c=r.domElement; return [r.getPixelRatio().toFixed(2), c.width+'x'+c.height, document.getElementById('fps').textContent, r.getContext().getContextAttributes().antialias]})()")
      print(t + 3, 's', r)
    print('errors', errs[:3])
    await br.close()
asyncio.run(main())
