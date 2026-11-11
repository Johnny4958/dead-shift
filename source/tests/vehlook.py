import asyncio, json, sys
from playwright.async_api import async_playwright
# Look check: each car parked at noon, seen from the side and the front-quarter, plain and with every upgrade on.
URL = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:8112/index.html'
OUT = '/home/sprite/perf/vlook'
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    pg = await (await br.new_context(viewport={'width': 960, 'height': 540})).new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)[:200])); pg.on('console', lambda m: m.type == 'error' and errs.append(m.text[:200]))
    await pg.goto(URL); await pg.wait_for_timeout(2500)
    await pg.evaluate("document.getElementById('bPlay').click()"); await pg.wait_for_timeout(800)
    await pg.evaluate("(()=>{const d=__ds; d.G.god=true; d.G.toSpawn=0; d.zombies.forEach(z=>{z.dead=true;z.m.root.visible=false}); d.zombies.length=0; d.SKY.hour=12.5; d.SKY.setWeather('clear'); d.sim(25,false);})()")
    for i in range(3):
      for up in [0, 1]:
        for ang, nm in [(0, 'side'), (0.75, 'quarter')]:
          info = await pg.evaluate("""(([i,up,ang])=>{const d=__ds,P=d.P,v=d.cars[i]; v.x=40; v.z=82; v.h=0; v.upg=up?{nos:1,armor:1,tires:1,spikes:1,turret:1}:{}; d.showParts(v.parts, v.upg); const g=v.mdl.group; g.position.set(v.x,0,v.z); g.rotation.set(0,v.h,0);
              for(const c of d.cars) if(c!==v){c.x=400+d.cars.indexOf(c)*20; c.z=400; c.mdl.group.position.set(c.x,0,c.z);}
              const a=Math.PI/2+ang; const r=7.5; P.x=v.x+Math.sin(a)*r; P.z=v.z+Math.cos(a)*r; P.yaw=Math.atan2(P.x-v.x,P.z-v.z); P.pitch=-0.12; P.view='fp'; d.sim(0.4,false); d.vm.visible=false; return {parts: v.parts? Object.keys(v.parts).filter(k=>k!=='tires'&&v.parts[k].visible): null};})""", [i, up, ang])
          await pg.wait_for_timeout(250)
          await pg.screenshot(path=f'{OUT}/car{i}_{"up" if up else "plain"}_{nm}.png')
          print(i, up, nm, info)
    print('errors', errs[:5])
    await br.close()
asyncio.run(main())
