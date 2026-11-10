import asyncio
from playwright.async_api import async_playwright
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    pg = await (await br.new_context(viewport={'width': 960, 'height': 540})).new_page()
    await pg.goto('http://localhost:8112/index.html'); await pg.wait_for_timeout(3000)
    await pg.evaluate("document.getElementById('bPlay').click()"); await pg.wait_for_timeout(1500)
    r = await pg.evaluate('''(()=>{const d=__ds,out=[]; let tot=0; d.scene.traverse(o=>{ if(!(o.isMesh||o.isInstancedMesh)) return; const g=o.geometry; if(!g.boundingSphere) g.computeBoundingSphere(); const n=(g.index?g.index.count:g.attributes.position.count)/3*(o.isInstancedMesh?o.count:1); tot+=n; out.push([n|0, g.boundingSphere.radius|0, o.isInstancedMesh?'inst'+o.count:'', (o.material.map&&o.material.map.image&&o.material.map.image.width)||'', o.frustumCulled]); }); out.sort((a,b)=>b[0]-a[0]); const R=d.renderer; R.info.reset(); R.render(d.scene,d.camera); return {tot:tot|0, calls:R.info.render.calls, tris:R.info.render.triangles, top:out.slice(0,18)};})()''')
    print(r['tot'], r['calls'], r['tris']); [print(x) for x in r['top']]
    await br.close()
asyncio.run(main())
