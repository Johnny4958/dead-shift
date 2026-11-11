import asyncio, json, sys
from playwright.async_api import async_playwright
HOOK = '''(()=>{window.__gl={calls:0,tris:0,frames:0,t:[]}; for(const C of [WebGLRenderingContext,WebGL2RenderingContext]){const P=C.prototype; const de=P.drawElements, da=P.drawArrays, dei=P.drawElementsInstanced, dai=P.drawArraysInstanced; P.drawElements=function(m,c,t,o){__gl.calls++; __gl.tris+=c/3; return de.call(this,m,c,t,o)}; P.drawArrays=function(m,f,c){__gl.calls++; __gl.tris+=c/3; return da.call(this,m,f,c)}; if(dei) P.drawElementsInstanced=function(m,c,t,o,n){__gl.calls++; __gl.tris+=c/3*n; return dei.call(this,m,c,t,o,n)}; if(dai) P.drawArraysInstanced=function(m,f,c,n){__gl.calls++; __gl.tris+=c/3*n; return dai.call(this,m,f,c,n)};} const raf=window.requestAnimationFrame; window.requestAnimationFrame=function(cb){return raf.call(window,(ts)=>{__gl.frames++; __gl.t.push(ts); cb(ts);});};})()'''
# draw cost: fly mode at 40 m over Main Street vs helicopter at 40 m vs drone at 25 m (same spot, same heading)
MEAS = '''(async ()=>{await new Promise(r=>setTimeout(r,2500)); __gl.calls=0; __gl.tris=0; __gl.frames=0; __gl.t=[]; await new Promise(r=>setTimeout(r,4000)); const f=Math.max(1,__gl.frames); return {calls:__gl.calls/f|0, tris:__gl.tris/f|0};})()'''
async def main():
  url = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:8112/index.html'
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    ctx = await br.new_context(viewport={'width': 844, 'height': 390}, has_touch=True, is_mobile=True)
    pg = await ctx.new_page(); errs = []; await pg.add_init_script(HOOK)
    pg.on('pageerror', lambda e: errs.append(str(e))); pg.on('console', lambda m: m.type == 'error' and errs.append(m.text))
    await pg.goto(url); await pg.wait_for_timeout(3000)
    await pg.evaluate("document.getElementById('bPlay').click()"); await pg.wait_for_timeout(1500)
    await pg.evaluate("(()=>{const d=__ds;d.G.god=true;d.G.toSpawn=0;for(const z of d.zombies)z.dead=true;})()")
    out = {}
    await pg.evaluate("(()=>{const d=__ds; d.P.fly=true; d.P.x=93; d.P.z=110; d.P.y=40; d.P.yaw=0; d.P.pitch=-0.35; d.recenter(46,55,true); d.sim(1,false); d.P.x=93; d.P.z=110; d.P.y=40;})()")
    out['flyMode40m'] = await pg.evaluate(MEAS)
    await pg.evaluate("(()=>{const d=__ds; d.P.fly=false; d.P.y=0; d.sim(0.3,false); d.enterHeli(); Object.assign(d.H,{x:93,z:125,y:40,h:Math.PI,spool:1}); d.sim(0.2,false);})()")
    out['heli40m'] = await pg.evaluate(MEAS)
    await pg.evaluate("(()=>{const d=__ds; d.H.y=0; d.sim(0.1,false); d.exitHeli(); d.P.x=93; d.P.z=110; d.sim(0.3,false); d.launchDrone(); Object.assign(d.D,{x:93,z:110,y:25,yaw:0,pitch:-0.5}); d.sim(0.1,false);})()")
    out['drone25m'] = await pg.evaluate(MEAS)
    await pg.evaluate("(()=>{const d=__ds; d.landDrone(); d.P.x=166.6; d.P.z=135; d.P.yaw=1.57; d.recenter(83,67,true); d.sim(0.5,false);})()")
    out['groundAtBooth'] = await pg.evaluate(MEAS)
    await pg.evaluate("(()=>{const d=__ds; d.startRide(); d.RIDE.t=0.23; d.RIDE.v=0.0001; d.sim(0.05,false); d.RIDE.ly=1.2;})()")
    out['rideTopLookTown'] = await pg.evaluate(MEAS)
    out['errors'] = errs[:5]; print(json.dumps(out)); await br.close()
asyncio.run(main())
