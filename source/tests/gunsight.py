import asyncio, json
from playwright.async_api import async_playwright
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    pg = await (await br.new_context(viewport={'width': 640, 'height': 360})).new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    await pg.goto('http://localhost:8112/index.html'); await pg.wait_for_timeout(2500)
    r = await pg.evaluate('''(()=>{const d=__ds,out={};
      for(const k of Object.keys(d.W)){ const gm=d.gunModel(k,false); let mx=-9,front=-9,rear=-9,fmin=9,fmax=-9;
        gm.group.traverse(o=>{ if(!o.isMesh) return; const a=o.geometry.attributes.position; for(let i=0;i<a.count;i++){ const y=a.getY(i), f=-a.getZ(i), x=a.getX(i); if(Math.abs(x)>0.03) continue; if(y>mx) mx=y; fmin=Math.min(fmin,f); fmax=Math.max(fmax,f); } });
        gm.group.traverse(o=>{ if(!o.isMesh) return; const a=o.geometry.attributes.position; for(let i=0;i<a.count;i++){ const y=a.getY(i), f=-a.getZ(i), x=a.getX(i); if(Math.abs(x)>0.012) continue; if(f>fmax-0.25*(fmax-fmin)) front=Math.max(front,y); else if(f>-0.02 && f<0.35*(fmax)) rear=Math.max(rear,y); } });
        out[k]={mx:+mx.toFixed(3),front:+front.toFixed(3),rear:+rear.toFixed(3),my:+gm.muzzle.position.y.toFixed(3),mf:+(-gm.muzzle.position.z).toFixed(3),f:[+fmin.toFixed(2),+fmax.toFixed(2)]}; }
      return out;})()''')
    for k,v in r.items(): print(k, v)
    print('ERR', errs[:3]); await br.close()
asyncio.run(main())
