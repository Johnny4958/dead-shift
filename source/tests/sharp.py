# Sharpness check at an iPhone-like 3x device pixel ratio: screenshots of the Mustang and the first-person pistol,
# plus pixel ratio / canvas size / antialias / fps. usage: sharp.py URL WxH tag [waitSecs]
import asyncio, sys, json
from playwright.async_api import async_playwright
url = sys.argv[1]; W, H = map(int, sys.argv[2].split('x')); tag = sys.argv[3]; wait = int(sys.argv[4]) if len(sys.argv) > 4 else 14
OUT = '/home/sprite/perf/sharp/'
SET = '''(()=>{const d=__ds; d.G.god=true; d.G.toSpawn=0; for(const z of d.zombies) z.dead=true; d.SKY.hour=12; d.SKY.setWeather('clear');
 const c=d.cars[0]; const a=c.h||0; d.P.x=c.x+4.2; d.P.z=c.z+3.2; d.P.yaw=Math.atan2(-(c.x-d.P.x),-(c.z-d.P.z)); d.P.pitch=-0.12; d.P.view='fp'; d.sim(0.3,false);})()'''
INFO = "(()=>{const r=__ds.renderer; const c=r.domElement; return {pr:+r.getPixelRatio().toFixed(2), canvas:c.width+'x'+c.height, fps:document.getElementById('fps').textContent, aa:r.getContext().getContextAttributes().antialias, calls:r.info.render.calls, tris:r.info.render.triangles}})()"
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    ctx = await br.new_context(viewport={'width': W, 'height': H}, has_touch=True, is_mobile=True, device_scale_factor=3, user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1')
    pg = await ctx.new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e))); pg.on('console', lambda m: m.type == 'error' and errs.append(m.text))
    await pg.goto(url); await pg.wait_for_timeout(3500)
    if H > W: await pg.evaluate("document.getElementById('bUpright') && document.getElementById('bUpright').click()")
    await pg.evaluate("document.getElementById('bPlay').click()"); await pg.wait_for_timeout(1500)
    await pg.evaluate(SET); await pg.wait_for_timeout(wait * 1000)
    await pg.evaluate(SET); await pg.wait_for_timeout(1200)
    info = await pg.evaluate(INFO)
    await pg.screenshot(path=OUT + f'{tag}_car_{W}x{H}.png')
    # gun close-up: look at the sky-ish so the gun is on a plain background
    await pg.evaluate("(()=>{const d=__ds; d.P.pitch=0.05; d.P.yaw+=1.2; d.sim(0.2,false);})()"); await pg.wait_for_timeout(900)
    await pg.screenshot(path=OUT + f'{tag}_gun_{W}x{H}.png')
    print(tag, W, H, json.dumps(info), 'errors', len(errs), errs[:3])
    await br.close()
asyncio.run(main())
