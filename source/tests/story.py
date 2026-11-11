import asyncio, sys, json
from playwright.async_api import async_playwright
# Stage 3a: the story intro (forced on, as test browsers skip it) and a horde event.
W, H = map(int, sys.argv[1].split('x'))
URL = sys.argv[2] if len(sys.argv) > 2 else 'http://localhost:8112/index.html'
SHOT = '/home/sprite/perf/run-shots/'
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    ctx = await br.new_context(viewport={'width': W, 'height': H}, has_touch=True, is_mobile=True)
    await ctx.add_init_script("window.__forceIntro = true")
    pg = await ctx.new_page(); errs = []; ev = pg.evaluate
    pg.on('pageerror', lambda e: errs.append('pageerror:' + str(e)[:300])); pg.on('console', lambda m: errs.append('console:' + m.text[:300]) if m.type == 'error' else None)
    await pg.goto(URL, timeout=60000); await pg.wait_for_timeout(3000)
    out = {}
    if H > W: await pg.tap('#bUpright'); await pg.wait_for_timeout(300)
    await pg.tap('#bPlay'); await pg.wait_for_timeout(1200)
    out['introShown'] = await ev('[!document.getElementById("intro").classList.contains("hidden"), __ds.G.state, document.getElementById("introText").innerText.slice(0,60)]')
    await pg.screenshot(path=SHOT + f'intro_{W}x{H}.png')
    pages = []
    for i in range(6):
      st = await ev('__ds.G.state')
      if st != 'intro': break
      pages.append(await ev('document.getElementById("introText").innerText.split("\\n")[0]'))
      await pg.tap('#introText' if i % 2 else '#intro'); await pg.wait_for_timeout(700)
    out['pages'] = pages
    out['afterTaps'] = await ev('[__ds.G.state, document.getElementById("intro").classList.contains("hidden"), !document.getElementById("hud").classList.contains("hidden"), localStorage.getItem("ds_intro")]')
    # replay from title via STORY, then SKIP
    await ev('document.getElementById("bQuit").click()'); await pg.wait_for_timeout(500)
    await pg.tap('#bStory'); await pg.wait_for_timeout(600)
    s1 = await ev('__ds.G.state')
    await pg.tap('#bSkipIntro'); await pg.wait_for_timeout(800)
    out['storySkip'] = [s1, await ev('__ds.G.state')]
    # the next PLAY after seeing it goes straight in
    await ev('document.getElementById("bQuit").click()'); await pg.wait_for_timeout(400)
    await pg.tap('#bPlay'); await pg.wait_for_timeout(800)
    out['secondPlay'] = await ev('__ds.G.state')
    # horde: round 4, warning at 20 s, spawns a pack that hunts you, reward when cleared
    h = await ev('''(()=>{const d=__ds,G=d.G; G.god=true; G.round=4; G.toSpawn=0; for(const z of d.zombies) z.dead=true; G.between=false; G.hordeIn=22; G.hordeLeft=0;
       const log=[]; let warned=-1, start=-1; for(let i=0;i<120;i++){ d.sim(0.25,false); if(warned<0&&G.hordeWarned) warned=i*0.25; if(start<0&&G.hordeLeft>0) start=i*0.25; }
       const hz=d.zombies.filter(z=>!z.dead&&z.horde); return {warnedAt:warned, startedAt:start, centerText: document.getElementById('center').innerText, hordeAlive:hz.length, hunting:hz.filter(z=>z.ai==='hunt').length, left:G.hordeLeft, hordes:G.hordes};})()''')
    out['horde'] = h
    await pg.screenshot(path=SHOT + f'horde_{W}x{H}.png')
    out['hordeClear'] = await ev('''(()=>{const d=__ds,G=d.G; for(let i=0;i<120&&G.hordeLeft>0;i++){ d.sim(0.25,false); for(const z of d.zombies) if(!z.dead&&!z.horde){z.dead=true;z.m.root.visible=false;} G.toSpawn=0; } G.hordeBonus=0; const p0=G.points; let k=0; for(const z of d.zombies) if(!z.dead&&z.horde){ d.damageZombie(z,1e9,false,'gun'); k++; } for(let i=0;i<8;i++) d.sim(0.25,false); return {killed:k, pointsGained:G.points-p0, bonus:G.hordeBonus, done:G.hordeDone, nextIn: Math.round(G.hordeIn), toast: document.getElementById('toast').innerText};})()''')
    out['errors'] = errs[:8]
    print(json.dumps(out)); await br.close()
asyncio.run(main())
