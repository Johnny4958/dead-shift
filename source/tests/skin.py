import asyncio
from playwright.async_api import async_playwright
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    pg = await (await br.new_context(viewport={'width': 640, 'height': 360})).new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    await pg.goto('http://localhost:8112/index.html'); await pg.wait_for_timeout(2500)
    await pg.evaluate("document.getElementById('bPlay').click()"); await pg.wait_for_timeout(300)
    r = await pg.evaluate('''(()=>{const d=__ds; d.G.god=true; d.G.toSpawn=0; const out=[];
      for(const t of ['walker','runner','fat','toxic','screamer','boss']) d.spawnZombie(t);
      d.sim(3,false);
      for(const z of d.zombies){ const sk=z.m.sk; z.m.root.updateMatrixWorld(true); sk.skeleton.update();
        const V=sk.geometry.attributes.position.count, si=sk.geometry.attributes.skinIndex; const hb=sk.skeleton.bones.indexOf(z.m.head);
        let sx=0,sy=0,sz=0,n=0; const v=new (z.m.root.position.constructor)();
        for(let i=0;i<V;i+=3){ if(si.getX(i)!==hb) continue; sk.getVertexPosition(i,v); sk.localToWorld(v); sx+=v.x;sy+=v.y;sz+=v.z;n++; }
        const h=new (z.m.root.position.constructor)(); z.m.head.getWorldPosition(h);
        const c=new (z.m.root.position.constructor)(sx/n,sy/n,sz/n); z.m.head.worldToLocal(c); z.loc=(z.loc||[]); z.loc.push(c.toArray().map(q=>+q.toFixed(3)));
        out.push(z.type+' loc='+JSON.stringify(z.loc)+' verts='+V+' bones='+sk.skeleton.bones.length+' headVerts='+n+' headErr='+(n?Math.hypot(sx/n-h.x,sy/n-h.y,sz/n-h.z).toFixed(3):'na')+' headY='+h.y.toFixed(2)); }
      return out; })()''')
    await pg.evaluate('__ds.sim(1.3,false)')
    r2 = await pg.evaluate(r'''(()=>{const d=__ds,out=[]; for(const z of d.zombies){const sk=z.m.sk; z.m.root.updateMatrixWorld(true); sk.skeleton.update(); const si=sk.geometry.attributes.skinIndex, V=si.count, hb=sk.skeleton.bones.indexOf(z.m.head); let sx=0,sy=0,sz=0,n=0; const v=new (z.m.root.position.constructor)(); for(let i=0;i<V;i+=3){ if(si.getX(i)!==hb) continue; sk.getVertexPosition(i,v); sk.localToWorld(v); sx+=v.x;sy+=v.y;sz+=v.z;n++; } const c=new (z.m.root.position.constructor)(sx/n,sy/n,sz/n); z.m.head.worldToLocal(c); out.push(z.type+' loc2='+JSON.stringify(c.toArray().map(q=>+q.toFixed(3)))+' pos='+z.x.toFixed(1)+','+z.z.toFixed(1)+' st='+z.state);} return out;})()''')
    print('\n'.join(r2))
    print('\n'.join(r)); print('ERR', errs[:5]); await br.close()
asyncio.run(main())
