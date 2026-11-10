import asyncio
from playwright.async_api import async_playwright
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    pg = await (await br.new_context(viewport={'width': 960, 'height': 540})).new_page(); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    await pg.goto('http://localhost:8112/index.html'); await pg.wait_for_timeout(3000)
    await pg.evaluate("document.getElementById('bPlay').click()"); await pg.wait_for_timeout(1500)
    r = await pg.evaluate('''(()=>{const d=__ds; d.G.god=true; const out={};
      let t=performance.now(); d.sim(1,false); out.update_ms_per_step=((performance.now()-t)/30).toFixed(2);
      const R=d.renderer; R.info.autoReset=false; R.info.reset(); t=performance.now(); for(let i=0;i<5;i++) R.render(d.scene,d.camera); out.render_ms=((performance.now()-t)/5).toFixed(1);
      out.calls=R.info.render.calls/5; out.tris=R.info.render.triangles/5; out.geoms=R.info.memory.geometries; out.tex=R.info.memory.textures;
      let meshes=0,vis=0; d.scene.traverse(o=>{if(o.isMesh||o.isInstancedMesh||o.isSprite||o.isPoints){meshes++; if(o.visible) vis++;}}); out.meshes=meshes;
      const lights=[]; d.scene.traverse(o=>{if(o.isLight) lights.push(o.type+(o.castShadow?'*':'')+':'+o.intensity.toFixed(1));}); out.lights=lights.join(' ');
      out.shadowMap=R.shadowMap.enabled; out.pr=R.getPixelRatio();
      return out;})()''')
    print(r); print(errs[:3]); await br.close()
asyncio.run(main())
