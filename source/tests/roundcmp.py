import asyncio, sys, json
from playwright.async_api import async_playwright
# Same round on two builds: how fast zombies reach you and how many die to auto-aim, at a few spots.
async def run(url):
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    pg = await (await br.new_context(viewport={'width': 640, 'height': 360})).new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)[:200]))
    await pg.goto(url); await pg.wait_for_timeout(2500)
    await pg.evaluate("document.getElementById('bPlay').click()"); await pg.wait_for_timeout(300)
    res = {}
    for name, (x, z, rnd) in {'MainSt r6': (120, 86, 6), 'Woods r6': (230, 40, 6), 'MainSt r12': (120, 86, 12), 'Ashford r4': (470, 86, 4)}.items():
      r = await pg.evaluate('''(([x,z,rnd])=>{const d=__ds,P=d.P,G=d.G; G.god=true; Math.random=(()=>{let s=7;return()=>(s=(s*16807)%2147483647)/2147483647;})();
        d.zombies.forEach(q=>{q.dead=true;q.m.root.visible=false}); d.zombies.length=0; P.x=x; P.z=z; P.y=0; d.giveGun('viper',false); d.startRound(rnd); d.sim(4,false);
        const near=()=>{let m=1e9; for(const q of d.zombies) if(!q.dead) m=Math.min(m,Math.hypot(q.x-P.x,q.z-P.z)); return m;};
        const d0=near(); d.sim(10,false); const d1=near(); const k0=G.kills||0; d.sim(20,true); const k1=(G.kills||0)-k0; d.sim(20,true);
        return {near4s:+d0.toFixed(0), near14s:+d1.toFixed(0), kills20s:k1, kills40s:(G.kills||0)-k0};})''', [x, z, rnd])
      res[name] = r
    res['errors'] = errs[:3]; await br.close(); return res
async def main():
  for u in sys.argv[1:]: print(u, json.dumps(await run(u)))
asyncio.run(main())
