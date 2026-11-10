import asyncio, collections
from playwright.async_api import async_playwright
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    ctx = await br.new_context(viewport={'width': 960, 'height': 540}); pg = await ctx.new_page()
    await pg.goto('http://localhost:8112/index.html'); await pg.wait_for_timeout(3000)
    await pg.evaluate("document.getElementById('bPlay').click()"); await pg.wait_for_timeout(1500)
    print('state', await pg.evaluate('__ds.G.state'))
    cdp = await ctx.new_cdp_session(pg); await cdp.send('Profiler.enable'); await cdp.send('Profiler.start')
    await pg.wait_for_timeout(4000)
    prof = (await cdp.send('Profiler.stop'))['profile']
    nodes = {n['id']: n for n in prof['nodes']}; self_t = collections.Counter()
    dt = prof['timeDeltas']; 
    for sid, d in zip(prof['samples'], dt): n = nodes[sid]['callFrame']; self_t[(n['functionName'] or '(anon)') + ':' + str(n['lineNumber']) + ':' + str(n['columnNumber'])] += d
    tot = sum(self_t.values())
    for k, v in self_t.most_common(15): print(round(v / tot * 100, 1), '%', k)
    await br.close()
asyncio.run(main())
