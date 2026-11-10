import asyncio, sys
from playwright.async_api import async_playwright
OUT = sys.argv[1]; Q = sys.argv[2] if len(sys.argv) > 2 else 'high'; URL = 'http://localhost:8112/index.html'
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    pg = await (await br.new_context(viewport={'width': 960, 'height': 540})).new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.on('console', lambda m: errs.append('console:' + m.text) if m.type == 'error' else None)
    await pg.goto(URL); await pg.wait_for_timeout(3000)
    await pg.evaluate("localStorage.setItem('ds_set', JSON.stringify({q:'%s'}));document.getElementById('bPlay').click()" % Q); await pg.wait_for_timeout(500)
    await pg.evaluate('''(()=>{const d=__ds,P=d.P;d.G.god=true;d.G.toSpawn=0;
      d.doors.forEach(x=>{if(!x.open)d.openDoor(x)});
      d.startRound(12); d.G.toSpawn=0; d.G.bosses=0;
      for(const t of ['walker','runner','fat','toxic','screamer','boss']) d.spawnZombie(t);
      d.sim(2.0);
      const Z=d.zombies; P.x=Z[0].x; P.z=Z[0].z+6; P.yaw=0; P.pitch=-0.1;
      Z.forEach((z,i)=>{z.state='move';z.x=P.x-4+i*1.6;z.z=P.z-4.2-(i%2)*0.8;z.speed=0.01;z.screamCd=99;});
    })()''')
    await pg.wait_for_timeout(1800)
    await pg.evaluate('__ds.zombies.forEach(z=>{z.speed=0.01})')
    await pg.screenshot(path=OUT)
    print('types', await pg.evaluate('__ds.zombies.map(z=>z.type+":"+z.m.meshes.length+":"+(z.m.sk&&z.m.sk.isSkinnedMesh)).join(" ")'))
    print('ERR', errs[:5]); await br.close()
asyncio.run(main())
