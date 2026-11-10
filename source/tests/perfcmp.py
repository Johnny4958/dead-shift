import asyncio, json, sys
from playwright.async_api import async_playwright
SPOTS = [('garage start', None), ('Main Street', (93, 70, 0)), ('carnival/woods edge', (300, 160, 1.5)), ('mall area', (200, 300, 3.1))]
HOOK = '''(()=>{window.__gl={calls:0,tris:0,frames:0,t:[]}; for(const C of [WebGLRenderingContext,WebGL2RenderingContext]){const P=C.prototype; const de=P.drawElements, da=P.drawArrays, dei=P.drawElementsInstanced, dai=P.drawArraysInstanced; P.drawElements=function(m,c,t,o){__gl.calls++; __gl.tris+=c/3; return de.call(this,m,c,t,o)}; P.drawArrays=function(m,f,c){__gl.calls++; __gl.tris+=c/3; return da.call(this,m,f,c)}; if(dei) P.drawElementsInstanced=function(m,c,t,o,n){__gl.calls++; __gl.tris+=c/3*n; return dei.call(this,m,c,t,o,n)}; if(dai) P.drawArraysInstanced=function(m,f,c,n){__gl.calls++; __gl.tris+=c/3*n; return dai.call(this,m,f,c,n)};} const raf=window.requestAnimationFrame; window.requestAnimationFrame=function(cb){return raf.call(window,(ts)=>{__gl.frames++; __gl.t.push(ts); cb(ts);});};})()'''
JS = '''(async (spot)=>{const d=__ds; d.G.god=true; if(spot){d.P.x=spot[0]; d.P.z=spot[1]; d.P.yaw=spot[2]; if(d.recenter) d.recenter(Math.floor(spot[0]/2),Math.floor(spot[1]/2),true); if(d.updateStream) d.updateStream(d.P.x,d.P.z,true,999,true);} d.sim(1.5); await new Promise(r=>setTimeout(r,1500)); __gl.calls=0; __gl.tris=0; __gl.frames=0; __gl.t=[]; await new Promise(r=>setTimeout(r,4000)); const f=Math.max(1,__gl.frames); const ts=__gl.t; const ms=ts.length>1?(ts[ts.length-1]-ts[0])/(ts.length-1):0; return {calls:__gl.calls/f|0, tris:__gl.tris/f|0, ms:Math.round(ms)};})'''
async def run(url, vp):
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    w, h = map(int, vp.split('x'))
    ctx = await br.new_context(viewport={'width': w, 'height': h}, has_touch=w < 900, is_mobile=w < 900)
    pg = await ctx.new_page(); errs = []; await pg.add_init_script(HOOK)
    pg.on('pageerror', lambda e: errs.append(str(e))); pg.on('console', lambda m: m.type == 'error' and errs.append(m.text))
    await pg.goto(url); await pg.wait_for_timeout(3000)
    await pg.evaluate("document.getElementById('bPlay').click()"); await pg.wait_for_timeout(1500)
    out = []
    for name, spot in SPOTS:
      r = await pg.evaluate(JS + '(' + json.dumps(spot) + ')'); out.append((name, r))
    await br.close(); return out, errs
async def main():
  for vp in ['844x390', '1280x720']:
    for lbl, url in [('LIVE', 'http://localhost:8113/index.html'), ('NEW ', 'http://localhost:8112/index.html')]:
      out, errs = await run(url, vp)
      print(vp, lbl, ' | '.join(f"{n}: {r['calls']} calls {r['tris']//1000}k tris {r['ms']}ms" for n, r in out), '| errors', len(errs), errs[:2])
asyncio.run(main())
