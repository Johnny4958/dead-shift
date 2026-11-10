import asyncio, sys
from playwright.async_api import async_playwright
PORT = sys.argv[1] if len(sys.argv) > 1 else '8112'
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    pg = await (await br.new_context(viewport={'width': 960, 'height': 540})).new_page()
    await pg.goto(f'http://localhost:{PORT}/index.html'); await pg.wait_for_timeout(3000)
    await pg.evaluate("document.getElementById('bPlay').click()"); await pg.wait_for_timeout(2500)
    r = await pg.evaluate('''(()=>{const d=__ds,R=d.renderer,gl=R.getContext(),px=new Uint8Array(4); d.G.state='pause_test';
      const T=()=>{R.render(d.scene,d.camera); gl.readPixels(0,0,1,1,gl.RGBA,gl.UNSIGNED_BYTE,px); let t=performance.now(); for(let i=0;i<4;i++){R.render(d.scene,d.camera); gl.readPixels(0,0,1,1,gl.RGBA,gl.UNSIGNED_BYTE,px);} return ((performance.now()-t)/4).toFixed(0);};
      const out={zombies:d.zombies.length, P:[d.P.x|0,d.P.z|0,d.P.yaw.toFixed(2)]}; out.all=T();
      d.zombies.forEach(z=>z.m.root.visible=false); out.noZ=T(); d.zombies.forEach(z=>z.m.root.visible=true);
      const sm=R.shadowMap.enabled; R.shadowMap.enabled=false; d.scene.traverse(o=>{if(o.material){[].concat(o.material).forEach(m=>m.needsUpdate=true)}}); out.noShadow=T(); R.shadowMap.enabled=sm; d.scene.traverse(o=>{if(o.material){[].concat(o.material).forEach(m=>m.needsUpdate=true)}}); T();
      const L=[]; d.scene.traverse(o=>{if(o.isPointLight||o.isSpotLight){L.push([o,o.intensity]); }}); L.forEach(([o])=>o.visible=false); d.scene.traverse(o=>{if(o.material){[].concat(o.material).forEach(m=>m.needsUpdate=true)}}); out.noPointLights=T(); L.forEach(([o])=>o.visible=true);
      d.scene.traverse(o=>{if(o.material){[].concat(o.material).forEach(m=>m.needsUpdate=true)}}); T();
      const tr=[]; d.scene.traverse(o=>{if((o.isMesh||o.isSprite||o.isPoints) && [].concat(o.material).some(m=>m.transparent)) tr.push(o);}); tr.forEach(o=>o.visible=false); out.noTransp=T()+' ('+tr.length+')'; tr.forEach(o=>o.visible=true);
      const sp=[]; d.scene.traverse(o=>{if(o.isSprite) sp.push(o)}); out.sprites=sp.length;
      const big=[]; d.scene.traverse(o=>{ if(o.isMesh && o.geometry){ if(!o.geometry.boundingSphere) o.geometry.computeBoundingSphere(); if(o.geometry.boundingSphere.radius*Math.max(o.scale.x,o.scale.z)>150) big.push(o);} }); big.forEach(o=>o.visible=false); out.noBigPlanes=T()+' ('+big.length+')'; big.forEach(o=>o.visible=true);
      const inst=[]; d.scene.traverse(o=>{if(o.isInstancedMesh) inst.push(o)}); inst.forEach(o=>o.visible=false); out.noInst=T()+' ('+inst.length+')'; inst.forEach(o=>o.visible=true);
      const env=d.scene.environment; d.scene.environment=null; d.scene.traverse(o=>{if(o.material){[].concat(o.material).forEach(m=>m.needsUpdate=true)}}); out.noEnv=T(); d.scene.environment=env;
      R.setPixelRatio(0.5); out.halfRes=T(); R.setPixelRatio(1);
      out.vm = 0; return out;})()''')
    print(PORT, r); await br.close()
asyncio.run(main())
