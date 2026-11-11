import asyncio, json, sys
from playwright.async_api import async_playwright
# Day/night + weather: screenshots, draw cost, brightness at each time/weather, flashlight auto on/off, errors. Compares to the live build at night.
HOOK = '''(()=>{window.__gl={calls:0,tris:0,frames:0,t:[]}; for(const C of [WebGLRenderingContext,WebGL2RenderingContext]){const P=C.prototype; const de=P.drawElements, da=P.drawArrays, dei=P.drawElementsInstanced, dai=P.drawArraysInstanced; P.drawElements=function(m,c,t,o){__gl.calls++; __gl.tris+=c/3; return de.call(this,m,c,t,o)}; P.drawArrays=function(m,f,c){__gl.calls++; __gl.tris+=c/3; return da.call(this,m,f,c)}; if(dei) P.drawElementsInstanced=function(m,c,t,o,n){__gl.calls++; __gl.tris+=c/3*n; return dei.call(this,m,c,t,o,n)}; if(dai) P.drawArraysInstanced=function(m,f,c,n){__gl.calls++; __gl.tris+=c/3*n; return dai.call(this,m,f,c,n)};} const raf=window.requestAnimationFrame; window.requestAnimationFrame=function(cb){return raf.call(window,(ts)=>{__gl.frames++; __gl.t.push(ts); cb(ts);});};})()'''
JS = '''(async (spot)=>{const d=__ds; d.G.god=true; if(spot){d.P.x=spot[0]; d.P.z=spot[1]; d.P.yaw=spot[2]; if(d.recenter) d.recenter(Math.floor(spot[0]/2),Math.floor(spot[1]/2),true); if(d.updateStream) d.updateStream(d.P.x,d.P.z,true,999,true);} d.sim(1.5); await new Promise(r=>setTimeout(r,1500)); __gl.calls=0; __gl.tris=0; __gl.frames=0; __gl.t=[]; await new Promise(r=>setTimeout(r,4000)); const f=Math.max(1,__gl.frames); const ts=__gl.t; const ms=ts.length>1?(ts[ts.length-1]-ts[0])/(ts.length-1):0; return {calls:__gl.calls/f|0, tris:__gl.tris/f|0, ms:Math.round(ms)};})'''
CASES = [('night', 0, 'clear'), ('noon', 12, 'clear'), ('dusk', 18.2, 'clear'), ('noon fog', 12, 'fog'), ('night rain', 1, 'rain'), ('noon storm', 13, 'storm')]
SPOTS = [('Main Street', (93, 70, 0)), ('woods edge', (300, 160, 1.5))]
LUM = '''(()=>{const c=document.getElementById('c'); const t=document.createElement('canvas'); t.width=64; t.height=36; const x=t.getContext('2d'); x.drawImage(c,0,0,64,36); const d=x.getImageData(0,18,64,18).data; let s=0; for(let i=0;i<d.length;i+=4) s+=0.2126*d[i]+0.7152*d[i+1]+0.0722*d[i+2]; return +(s/(d.length/4)).toFixed(1);})()'''
async def run(url, vp, new):
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    w, h = map(int, vp.split('x'))
    ctx = await br.new_context(viewport={'width': w, 'height': h}, has_touch=w < 900, is_mobile=w < 900)
    pg = await ctx.new_page(); errs = []; await pg.add_init_script(HOOK)
    pg.on('pageerror', lambda e: errs.append(str(e)[:200])); pg.on('console', lambda m: m.type == 'error' and errs.append(m.text[:200]))
    await pg.goto(url); await pg.wait_for_timeout(3000)
    await pg.evaluate("document.getElementById('bPlay').click()"); await pg.wait_for_timeout(800)
    await pg.evaluate("(()=>{const b=document.getElementById('bUpright'); if(b && b.offsetParent) b.click();})()"); await pg.wait_for_timeout(800)
    await pg.evaluate("(()=>{const d=__ds; d.zombies.forEach(z=>{z.dead=true;z.m.root.visible=false}); d.zombies.length=0; d.G.toSpawn=0; d.P.pitch=-0.12;})()")
    out = {}
    for cname, hr, wk in (CASES if new else CASES[:1]):
      if new: await pg.evaluate("(([h,w])=>{const S=__ds.SKY; S.hour=h; S.setWeather(w); for(const k of ['fog','rain','storm']) S.wk[k]=(w===k||(k==='rain'&&w==='storm'))?1:0; S.flashK=0; S.nextBolt=99;})", [hr, wk])
      for sname, spot in SPOTS:
        r = await pg.evaluate(JS + '(' + json.dumps(spot) + ')')
        await pg.evaluate("(()=>{const d=__ds; d.zombies.forEach(z=>{z.dead=true;z.m.root.visible=false}); d.zombies.length=0; d.G.toSpawn=0; d.P.pitch=-0.12;})()")
        await pg.wait_for_timeout(600)
        info = await pg.evaluate("(()=>{const S=__ds.SKY; return S? {clock:S.clock(), flash:S.flash, light:+S.light.toFixed(2), sight:+S.sightMul.toFixed(2), clockHud:document.getElementById('clock').textContent}:{};})()") if new else {}
        fn = f"/home/sprite/perf/run-shots/sky_{'new' if new else 'live'}_{vp}_{cname.replace(' ','_')}_{sname.replace(' ','_')}.png"; await pg.screenshot(path=fn)
        from PIL import Image
        im = Image.open(fn).convert('L'); W, H = im.size; px = im.crop((0, int(H * 0.55), W, int(H * 0.85))).resize((64, 16)); lum = round(sum(px.getdata()) / 1024, 1)
        out[f'{cname} @ {sname}'] = {'calls': r['calls'], 'ktris': r['tris'] // 1000, 'ms': r['ms'], 'groundLum': lum, **info}
    # flashlight auto: run time from 17.5 to 19.5 and from 5 to 7.5
    if new:
      out['flash_auto'] = await pg.evaluate("""(()=>{const d=__ds,S=d.SKY; const r={}; S.setFlash(false,false); S.flashAuto=true; S.hour=12; d.sim(0.2); S.wasDark=false; S.hour=17.8; let on=null; for(let i=0;i<60;i++){ d.sim(2); if(S.flash&&on===null) on=S.clock(); } r.onAt=on;
        let off=null; S.hour=4.8; for(let i=0;i<60;i++){ d.sim(2); if(!S.flash&&off===null) off=S.clock(); } r.offAt=off; return r;})()""")
      out['light_button'] = await pg.evaluate("(()=>{const b=document.getElementById('bLight'); const r=b.getBoundingClientRect(); return {visible: getComputedStyle(b).display!=='none', box:[r.left|0,r.top|0,r.width|0,r.height|0]};})()")
    await br.close(); return out, errs
async def main():
  vps = sys.argv[1:] or ['844x390', '390x844', '1280x720']
  for vp in vps:
    lo, le = await run('http://localhost:8113/index.html', vp, False)
    no, ne = await run('http://localhost:8112/index.html', vp, True)
    print('==', vp, 'LIVE', json.dumps(lo), 'errors', le[:2])
    print('==', vp, 'NEW errors', len(ne), ne[:3])
    for k, v in no.items(): print('   ', k, v)
asyncio.run(main())
