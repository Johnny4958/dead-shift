# For every gun: the hands mesh must touch the gun (glove vertices near gun vertices) and the gun close-up is screenshotted.
import asyncio, sys, json
from playwright.async_api import async_playwright
url = sys.argv[1]; tag = sys.argv[2]
KEYS = sys.argv[3].split(',') if len(sys.argv) > 3 else ['pistol','brawler','viper','ripper','trench','ranger','widow','kestrel','hammer','ion','surge']
CHK = '''(k)=>{const d=__ds; d.giveGun(k,false); d.sim(0.6,false); d.vm.updateMatrixWorld(true); const T=d.THREE||null;
 const g=d.vmGunNow().group; const gv=[]; g.traverse(o=>{if(o.isMesh){const p=o.geometry.attributes.position; const m=o.matrixWorld.elements; for(let i=0;i<p.count;i+=2){const x=p.getX(i),y=p.getY(i),z=p.getZ(i); gv.push([m[0]*x+m[4]*y+m[8]*z+m[12],m[1]*x+m[5]*y+m[9]*z+m[13],m[2]*x+m[6]*y+m[10]*z+m[14]]);}}});
 const arms=d.vm.children.find(c=>c!==g&&c.isGroup&&c.children.length===2); const glove=arms.children[1]; const p=glove.geometry.attributes.position; const m=glove.matrixWorld.elements;
 let near=0,n=0; for(let i=0;i<p.count;i+=6){const x=p.getX(i),y=p.getY(i),z=p.getZ(i); const X=m[0]*x+m[4]*y+m[8]*z+m[12],Y=m[1]*x+m[5]*y+m[9]*z+m[13],Z=m[2]*x+m[6]*y+m[10]*z+m[14]; n++; for(const v of gv){if(Math.abs(v[0]-X)<0.008&&Math.abs(v[1]-Y)<0.008&&Math.abs(v[2]-Z)<0.008){near++;break;}}}
 return {gun:d.P.guns[d.P.cur].name, gloveTouch:+(near/n*100).toFixed(0)}}'''
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    ctx = await br.new_context(viewport={'width': 932, 'height': 430}, has_touch=True, is_mobile=True, device_scale_factor=3)
    pg = await ctx.new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e))); pg.on('console', lambda m: m.type == 'error' and errs.append(m.text))
    await pg.goto(url); await pg.wait_for_timeout(3000)
    await pg.evaluate("window.__fixedRes=true; document.getElementById('bPlay').click()"); await pg.wait_for_timeout(1500)
    await pg.evaluate("(()=>{const d=__ds; d.G.god=true; d.G.toSpawn=0; for(const z of d.zombies) z.dead=true; d.SKY.hour=12; d.SKY.setWeather('clear'); d.P.pitch=0.25; d.P.view='fp';})()")
    for k in KEYS:
      try: r = await pg.evaluate(CHK, k)
      except Exception as e: r = 'no hand check'; await pg.evaluate("(k)=>{__ds.giveGun(k,false);__ds.sim(0.6,false)}", k)
      await pg.wait_for_timeout(700)
      await pg.screenshot(path=f'/home/sprite/perf/sharp/{tag}_hands_{k}.png', clip={'x': 300, 'y': 120, 'width': 632, 'height': 310})
      print(k, json.dumps(r))
    print('errors', len(errs), errs[:3]); await br.close()
asyncio.run(main())
