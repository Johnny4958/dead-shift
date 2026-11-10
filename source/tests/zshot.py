import asyncio, sys
from playwright.async_api import async_playwright
# usage: zshot.py out.png [url]
OUT = sys.argv[1]; URL = sys.argv[2] if len(sys.argv) > 2 else 'http://localhost:8112/index.html'
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    pg = await (await br.new_context(viewport={'width': 960, 'height': 540})).new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    await pg.goto(URL); await pg.wait_for_timeout(3000)
    await pg.evaluate("localStorage.setItem('ds_set', JSON.stringify({q:'high'}));document.getElementById('bPlay').click()"); await pg.wait_for_timeout(500)
    await pg.evaluate('''(()=>{const d=__ds,P=d.P;d.G.god=true;d.G.toSpawn=0;
      if(d.openDoor) d.doors.forEach(x=>{if(!x.open)d.openDoor(x)});
      d.startRound(12); d.G.toSpawn=0;
      for(const t of ['walker','runner','fat','toxic','walker']) d.spawnZombie(t);
      d.sim(2.0);
      const Z=d.zombies; P.x=Z[0].x; P.z=Z[0].z+6; P.yaw=0; P.pitch=-0.12;
      Z.forEach((z,i)=>{z.state='move';z.x=P.x-3.2+i*1.6;z.z=P.z-3.6-(i%2)*0.8;z.speed=0.01;});
    })()''')
    await pg.wait_for_timeout(1800)
    await pg.evaluate('__ds.zombies.forEach(z=>{z.speed=0.01})')
    await pg.screenshot(path=OUT)
    print('ERR', errs[:5]); await br.close()
asyncio.run(main())
