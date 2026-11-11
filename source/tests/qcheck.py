# Render resolution per graphics setting, device pixel ratio, helicopter, and the dynamic scale going down and back up.
import asyncio, json
from playwright.async_api import async_playwright
URL = 'http://localhost:8112/index.html'
CASES = [('iPhone Pro Max 3x', 932, 430, 3, True), ('older phone 2x', 844, 390, 2, True)]
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    for name, W, H, dpr, mob in CASES:
      ctx = await br.new_context(viewport={'width': W, 'height': H}, has_touch=mob, is_mobile=mob, device_scale_factor=dpr)
      pg = await ctx.new_page(); errs = []
      pg.on('pageerror', lambda e: errs.append(str(e))); pg.on('console', lambda m: m.type == 'error' and errs.append(m.text))
      await pg.goto(URL); await pg.wait_for_timeout(2500)
      await pg.evaluate("window.__fixedRes=true; localStorage.removeItem('ds_set'); document.getElementById('bPlay').click()"); await pg.wait_for_timeout(1200)
      out = {}
      for q in ['auto', 'low', 'medium', 'high']:
        await pg.evaluate(f"document.querySelector('#qSeg [data-q=\"{q}\"]').click()"); await pg.wait_for_timeout(200)
        out[q] = await pg.evaluate("(()=>{const r=__ds.renderer,c=r.domElement; return r.getPixelRatio()+' ('+c.width+'x'+c.height+')'})()")
      await pg.evaluate("document.querySelector('#qSeg [data-q=\"auto\"]').click()")
      out['qInfo'] = await pg.evaluate("document.getElementById('qInfo').textContent")
      out['aa'] = await pg.evaluate("__ds.renderer.getContext().getContextAttributes().antialias")
      # dynamic scale: 4 s at 20 fps steps down, then 5 s at 60 fps steps back up, and a 30 fps cap changes nothing
      dyn = await pg.evaluate('''(()=>{const d=__ds; window.__fixedRes=false; const seq=[]; const run=(fps,s)=>{for(let i=0;i<fps*s;i++) d.fpsTick(1/fps); seq.push(fps+'fps '+s+'s -> '+d.renderer.getPixelRatio());};
        run(30,5); run(20,4); run(20,4); run(20,12); run(60,5); run(60,5); run(60,20); window.__fixedRes=true; return seq;})()''')
      out['dynamic'] = dyn
      # helicopter
      hp = await pg.evaluate("(()=>{const g=__ds.WDh; return [g.group.position.x, g.group.position.z]})()")
      await pg.evaluate("([x,z])=>{const d=__ds; d.P.x=x+4; d.P.z=z; d.sim(0.4,false); d.enterHeli && d.enterHeli(); d.sim(0.1,false);}", hp)
      await pg.wait_for_timeout(300)
      out['heli'] = await pg.evaluate("__ds.AIR.mode+' '+__ds.renderer.getPixelRatio()")
      await pg.evaluate("(()=>{const d=__ds; d.H.y=0; d.exitHeli && d.exitHeli(); d.sim(0.1,false);})()"); await pg.wait_for_timeout(300)
      out['afterHeli'] = await pg.evaluate("__ds.AIR.mode+' '+__ds.renderer.getPixelRatio()")
      print(name, json.dumps(out, indent=1), 'errors', len(errs), errs[:3])
      await ctx.close()
    await br.close()
asyncio.run(main())
