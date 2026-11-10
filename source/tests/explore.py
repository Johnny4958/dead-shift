import asyncio, sys
from playwright.async_api import async_playwright
# Walk/teleport to every area of the open world, start a round there and check zombies spawn near you, path to you and die to auto-aim.
URL = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:8112/index.html'
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    pg = await (await br.new_context(viewport={'width': 640, 'height': 360})).new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e) + ' @ ' + (e.stack or '')[:200]))
    await pg.goto(URL); await pg.wait_for_timeout(3000)
    await pg.evaluate("document.getElementById('bPlay').click()"); await pg.wait_for_timeout(500)
    # 1) really walk out of the garage through the Outside door after buying it (real keyboard input)
    info = await pg.evaluate('''(()=>{const d=__ds,P=d.P,G=d.G; G.god=true; G.toSpawn=0; d.zombies.forEach(z=>z.dead=true);
      const door=d.doors.find(x=>x.label==='Outside'); d.openDoor(door); return {start:[P.x,P.z], door:door.tiles};})()''')
    print('start', info)
    route = [(21, 25), (21, 34), (12, 40), (12, 72), (40, 86), (96, 86), (140, 86)]
    await pg.keyboard.down('KeyW')
    for (tx, tz) in route:
      for n in range(60):
        r = await pg.evaluate('''(([tx,tz])=>{const P=__ds.P; const dx=tx-P.x, dz=tz-P.z; P.yaw=Math.atan2(-dx,-dz); P.pitch=0; __ds.G.toSpawn=0; if(Math.hypot(dx,dz)>1.2) __ds.sim(0.3,false); const ex=tx-P.x, ez=tz-P.z; return [P.x,P.z,Math.hypot(ex,ez)];})''', [tx, tz])
        if r[2] < 1.2: break
      print('waypoint', (tx, tz), 'reached at', [round(r[0], 1), round(r[1], 1)], 'left', round(r[2], 1))
    await pg.keyboard.up('KeyW')
    if len(sys.argv) > 2: await br.close(); return
    spots = {'Motel lot': [50, 50], 'Lockwood Main St': [120, 86], 'Gas station': [110, 78], 'Carnival': [176, 120], 'Woods': [230, 40], 'Mall lot': [236, 96], 'Pine Hollow': [320, 60], 'Graveyard': [50, 168]}
    for name, (x, z) in spots.items():
      r = await pg.evaluate('''(([x,z])=>{const d=__ds,P=d.P,G=d.G; G.god=true; d.zombies.forEach(q=>{q.dead=true;q.m.root.visible=false}); d.zombies.length=0;
        P.x=x; P.z=z; P.y=0; G.fly=false; d.giveGun('viper',false); d.startRound(6); d.sim(4,false);
        const near=()=>{let m=1e9; for(const q of d.zombies) if(!q.dead) m=Math.min(m,Math.hypot(q.x-P.x,q.z-P.z)); return m;};
        const spawned=d.zombies.length, d0=near(); d.sim(10,false); const d1=near(); const k0=G.kills||0; d.sim(25,true);
        return {spawned, nearest0:d0.toFixed(0), nearest10s:d1.toFixed(0), kills:(G.kills||0)-k0, round:G.round, state:G.state};})''', [x, z])
      print(name, r)
    print('ERR', errs[:5]); await br.close()
asyncio.run(main())
