import asyncio
from playwright.async_api import async_playwright
Q = '''JSON.stringify({t:__ds.G.t.toFixed(0),st:__ds.G.state,round:__ds.G.round,kills:__ds.G.kills,heads:__ds.G.heads,pts:__ds.G.points,hp:Math.round(__ds.P.hp),alive:__ds.zombies.filter(z=>!z.dead).length,left:__ds.G.toSpawn,types:[...new Set(__ds.zombies.map(z=>z.type))].join(),gun:__ds.P.guns.map(g=>g.key+':'+g.clip+'/'+g.reserve).join(),win:__ds.windows.map(w=>w.planks).join(''),stuck:__ds.zombies.filter(z=>z.stuckT>10).length})'''
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    pg = await (await br.new_context(viewport={'width': 640, 'height': 360})).new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.on('console', lambda m: errs.append('console:' + m.text) if m.type == 'error' else None)
    await pg.goto('http://localhost:8112/index.html'); await pg.wait_for_timeout(2500)
    await pg.evaluate("document.getElementById('bPlay').click()"); await pg.wait_for_timeout(300)
    ev = pg.evaluate
    await ev('__ds.G.god=true; __ds.G.state="play"')
    for k in range(14):
      await ev('(()=>{for(const g of __ds.P.guns){g.reserve=g.maxReserve}})()')
      await ev('__ds.sim(20,true)'); print(await ev(Q))
    # box, door, power, perk, build, car via direct state
    print('ERR so far', errs[:8])
    await ev('__ds.G.god=false; __ds.P.guns.forEach(g=>{g.clip=0;g.reserve=0}); for(let i=0;i<5;i++) __ds.spawnZombie()')
    st = await ev('__ds.sim(120,false)'); print('death run ->', st, await ev(Q))
    await pg.wait_for_timeout(2000)
    print('over visible', await ev('!document.getElementById("over").classList.contains("hidden")'), await ev('document.getElementById("stats").innerText'))
    await ev("document.getElementById('bAgain').click()"); await pg.wait_for_timeout(500)
    print('restart', await ev(Q))
    print('ERR', errs[:8]); await br.close()
asyncio.run(main())
