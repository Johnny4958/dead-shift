import asyncio, sys
from playwright.async_api import async_playwright
# For every gun: stand a zombie still 7 m away, point the camera at its visible head centre, fire once (hip and aimed) and count head hits.
URL = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:8112/index.html'
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    pg = await (await br.new_context(viewport={'width': 800, 'height': 450})).new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    await pg.goto(URL); await pg.wait_for_timeout(3000)
    await pg.evaluate("document.getElementById('bPlay').click()"); await pg.wait_for_timeout(400)
    r = await pg.evaluate('''(()=>{const d=__ds,P=d.P,G=d.G; G.god=true; G.toSpawn=0; d.doors.forEach(x=>{if(!x.open)d.openDoor(x)}); const out=[];
      const V=d.P.constructor; 
      for(const k of Object.keys(d.W)){ for(const ads of [0,1]){ let hits=0, heads=0; const N=6;
        for(let n=0;n<N;n++){
          d.zombies.forEach(z=>{z.dead=true; z.m.root.visible=false;}); d.zombies.length=0;
          d.spawnZombie('walker'); const z=d.zombies[d.zombies.length-1]; z.state='move'; z.x=P.x; z.z=P.z-7; z.speed=0; z.hp=1e9;
          d.giveGun(k,false); const g=P.guns[P.cur]; g.clip=g.mag;
          d.sim(0.1,false); z.x=P.x; z.z=P.z-7;
          z.m.root.position.set(z.x,0,z.z); z.m.root.updateMatrixWorld(true);
          const h=z.m.headC.clone(); z.m.head.localToWorld(h);
          const ey=1.62+P.y; P.yaw=Math.atan2(-(h.x-P.x),-(h.z-P.z)); P.pitch=Math.atan2(h.y-ey, Math.hypot(h.x-P.x,h.z-P.z));
          P.ads=ads; d.inp.aim=!!ads; P.recoil=0; P.fireT=0; P.reloadT=0; P.swapT=0; P.knifeT=0; P.speed=0;
          d.sim(0.04,false); z.x=P.x; z.z=P.z-7; P.ads=ads;
          const hp0=z.hp, hs0=G.heads; d.fireOnce(); if(z.hp<hp0) hits++; if(G.heads>hs0 || z.lastHead) heads++;
        }
        out.push(k+(ads?' ADS':' hip')+': '+hits+'/'+N+' hits');
      }}
      d.inp.aim=false; return out;})()''')
    print('\n'.join(r)); print('ERR', errs[:5]); await br.close()
asyncio.run(main())
