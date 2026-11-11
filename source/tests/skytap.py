import asyncio, json, sys
from playwright.async_api import async_playwright
# Real taps: LIGHT button toggles the flashlight; admin panel (PIN 0346) time and weather buttons work; night->day run with a round going.
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    import sys
    for w, h in [tuple(map(int, sys.argv[1].split("x")))]:
      pg = await (await br.new_context(viewport={'width': w, 'height': h}, has_touch=True, is_mobile=True)).new_page(); errs = []
      pg.on('pageerror', lambda e: errs.append(str(e)[:200])); pg.on('console', lambda m: m.type == 'error' and errs.append(m.text[:200]))
      await pg.goto(sys.argv[2] if len(sys.argv) > 2 else 'http://localhost:8112/index.html'); await pg.wait_for_timeout(2500)
      await pg.evaluate("document.getElementById('bPlay').click()"); await pg.wait_for_timeout(600)
      await pg.evaluate("(()=>{const b=document.getElementById('bUpright'); if(b && b.offsetParent) b.click();})()"); await pg.wait_for_timeout(600)
      r = {'start': await pg.evaluate("({clock:__ds.SKY.clock(), flash:__ds.SKY.flash})")}
      bb = await pg.evaluate("(()=>{const r=document.getElementById('bLight').getBoundingClientRect(); return [r.left+r.width/2, r.top+r.height/2];})()")
      await pg.touchscreen.tap(*bb); await pg.wait_for_timeout(900); a = await pg.evaluate("__ds.SKY.flash")
      await pg.touchscreen.tap(*bb); await pg.wait_for_timeout(900); b = await pg.evaluate("__ds.SKY.flash")
      r['tapLight'] = [a, b]
      # admin
      async def tapsel(sel):
        c = await pg.evaluate("(s)=>{const e=document.querySelector(s); const r=e.getBoundingClientRect(); return [r.left+r.width/2, r.top+r.height/2, !!e.offsetParent];}", sel)
        await pg.touchscreen.tap(c[0], c[1]); await pg.wait_for_timeout(250); return c[2]
      await tapsel('.tb[data-b=pause]'); await pg.wait_for_timeout(300)
      await pg.evaluate("(()=>{const b=[...document.querySelectorAll('button')].find(x=>/ADMIN/.test(x.textContent)&&x.offsetParent); b.click();})()"); await pg.wait_for_timeout(300)
      for d in '0346': await pg.evaluate("(d)=>{const b=[...document.querySelectorAll('button')].find(x=>x.textContent.trim()===d&&x.offsetParent); b.click();}", d); await pg.wait_for_timeout(80)
      await pg.wait_for_timeout(300)
      vis = await pg.evaluate("!!document.getElementById('admWorld').offsetParent")
      if vis:
        await pg.evaluate("document.getElementById('admWorld').scrollIntoView()")
        await tapsel('#admWorld [data-h="12"]'); await tapsel('#admWorld [data-w="storm"]')
      r['admin'] = {'worldRowVisible': vis, **await pg.evaluate("({hour:+__ds.SKY.hour.toFixed(2), kind:__ds.SKY.kind})")}
      await pg.evaluate("(()=>{const d=__ds; if(d.G.state!=='play') d.togglePause ? d.togglePause() : document.getElementById('bResume')?.click();})()"); await pg.wait_for_timeout(300)
      # play through a day while a round runs: zombies keep coming and dying, no errors
      r['day_run'] = await pg.evaluate("""(()=>{const d=__ds,P=d.P,G=d.G,S=d.SKY; G.god=true; S.hour=17; S.setWeather('rain'); P.x=120; P.z=86; d.giveGun('viper',false); const k0=G.kills||0; const log=[];
        for(let i=0;i<8;i++){ d.sim(30,true); log.push(S.clock()+' '+S.kind+' L'+S.light.toFixed(1)+' F'+(S.flash?1:0)+' z'+d.zombies.filter(z=>!z.dead).length); } return {kills:(G.kills||0)-k0, round:G.round, log};})()""")
      r['state'] = await pg.evaluate("__ds.G.state")
      await pg.screenshot(path=f'/home/sprite/perf/run-shots/skytap_{w}x{h}.png')
      r['errors'] = errs[:4]; print(w, h, json.dumps(r))
    await br.close()
asyncio.run(main())
