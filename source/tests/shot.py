import asyncio
from playwright.async_api import async_playwright
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    pg = await (await br.new_context(viewport={'width':844,'height':390}, has_touch=True, is_mobile=True, device_scale_factor=3, user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Version/17.0 Mobile/15E148 Safari/604.1')).new_page()
    await pg.goto('https://johnny4958.github.io/dead-shift/'); await pg.wait_for_timeout(3000)
    await pg.evaluate("document.getElementById('bPlay').click()"); await pg.wait_for_timeout(500)
    await pg.evaluate('''(()=>{const d=__ds,P=d.P;d.G.god=true;d.sim(12);P.x=44;P.z=64;P.yaw=Math.PI;P.pitch=-0.05;d.G.toSpawn=0;
      d.zombies.forEach((z,i)=>{z.state='move';z.x=43+i*1.1-2;z.z=70+(i%2)*1.5;});d.sim(0.3);P.yaw=Math.PI;})()''')
    await pg.wait_for_timeout(2500); await pg.screenshot(path='tests/shots/land_play2.png')
    await pg.evaluate("__ds.P.view='tp'"); await pg.wait_for_timeout(2000); await pg.screenshot(path='tests/shots/land_play_tp.png')
    await br.close()
asyncio.run(main())
