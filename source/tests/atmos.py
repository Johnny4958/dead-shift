import asyncio, sys, json
from playwright.async_api import async_playwright
from airlib import T, VIS, OVERLAP
# Stage 4: story logs (journals + tapes), hallucinations, ghostly echoes, admin HAUNT NOW
W, H = map(int, sys.argv[1].split('x'))
URL = sys.argv[2] if len(sys.argv) > 2 else 'http://localhost:8112/index.html'
async def main():
  async with async_playwright() as p:
    t = T(); await t.start(p, W, H, URL); ev = t.ev; M = t.mobile; r = {}
    await ev('localStorage.removeItem("ds_logs"); __ds.logFound.clear();')
    logs = await ev('__ds.logs.map(l=>[l.id,l.kind,+l.x.toFixed(1),+l.z.toFixed(1)])')
    r['logCount'] = len(logs)
    r['logsOnSolid'] = await ev('__ds.logs.filter(l=>__ds.inb(__ds.tileOf(l.x),__ds.tileOf(l.z)) && __ds.solidPlayer(__ds.at(__ds.tileOf(l.x),__ds.tileOf(l.z)))).map(l=>l.id)')
    async def use():
      if M: await t.tap('#touch [data-b="use"]')
      else: await t.key('KeyF')
      await t.sim(0.1); await t.pg.wait_for_timeout(150)
    read = []
    for lid, kind, x, z in logs:
      await ev('([x,z])=>{const d=__ds; d.P.x=x+1.2; d.P.z=z; d.P.fly=false; d.P.y=0; d.recenter(Math.floor(d.P.x/2),Math.floor(d.P.z/2),true); d.HAUNT.t=999;}', [x, z])
      await t.sim(0.4); await t.pg.wait_for_timeout(250)
      pr = await ev('document.getElementById("prompt").textContent')
      await use()
      box = await ev('(()=>{const b=document.getElementById("readbox"); const r=b.getBoundingClientRect(); return [!b.classList.contains("hidden"), b.classList.contains("radio"), b.textContent.slice(0,40), r.top>=0&&r.bottom<=innerHeight];})()')
      if lid == 2: await t.shot('tape')
      if lid == 3: await t.shot('journal')
      await use()
      closed = await ev('document.getElementById("readbox").classList.contains("hidden")')
      read.append({'id': lid, 'kind': kind, 'prompt': pr, 'opened': box[0], 'tapeStyle': box[1], 'fitsScreen': box[3], 'head': box[2], 'closedOnUse': closed})
    r['logs'] = read
    r['found'] = await ev('[__ds.logFound.size, JSON.parse(localStorage.getItem("ds_logs")||"[]").length]')
    # forced haunts: one of each kind
    await ev('(()=>{const d=__ds; d.P.x=93; d.P.z=110; d.P.yaw=0; d.P.pitch=0; d.recenter(46,55,true); d.HAUNT.events=3; d.ECHOES.forEach((e,i)=>d.HAUNT.echoSeen.add(i)); d.HAUNT.ghost=null; d.ghostMesh.visible=false;})()')
    await t.sim(0.5)
    kinds = []
    for k in range(4):
      await ev('(()=>{const d=__ds; d.HAUNT.ghost=null; d.ghostMesh.visible=false; d.haunt(true);})()')
      info = {'kind': await ev('__ds.HAUNT.last')}
      if info['kind'] == 'phantom':
        await t.pg.wait_for_timeout(700)
        info['visible'] = await ev('__ds.ghostMesh.visible'); info['opacity'] = round(await ev('__ds.ghostMesh.material.opacity'), 2)
        info['dist'] = await ev('+Math.hypot(__ds.ghostMesh.position.x-__ds.P.x,__ds.ghostMesh.position.z-__ds.P.z).toFixed(1)')
        await t.shot('phantom')
        # look straight at it: it should vanish
        await ev('(()=>{const d=__ds,g=d.ghostMesh.position; d.P.yaw=Math.atan2(-(g.x-d.P.x),-(g.z-d.P.z));})()')
        await t.sim(1.2)
        info['goneWhenLookedAt'] = not await ev('__ds.ghostMesh.visible')
      elif info['kind'] == 'steps':
        await t.pg.wait_for_timeout(1800); info['text'] = await ev('document.getElementById("haunt").textContent')
      elif info['kind'] == 'wail':
        info['flicker'] = round(await ev('__ds.SKY ? __ds.SKY.flicker : -1'), 1)
      elif info['kind'] == 'pulse':
        await t.pg.wait_for_timeout(300); info['pulse'] = await ev('document.getElementById("hauntfx").classList.contains("pulse")'); info['text'] = await ev('document.getElementById("haunt").textContent')
        await t.shot('pulse')
      await t.sim(4)
      kinds.append(info)
    r['haunts'] = kinds
    # echo in the graveyard (shows any time of day)
    e = await ev('__ds.ECHOES[2]')
    await ev('([x,z])=>{const d=__ds; d.HAUNT.ghost=null; d.ghostMesh.visible=false; d.HAUNT.echoSeen.delete(2); d.P.x=x+8; d.P.z=z; d.P.yaw=Math.PI/2; d.recenter(Math.floor(d.P.x/2),Math.floor(d.P.z/2),true);}', [e['x'], e['z']])
    await t.sim(0.3); await t.pg.wait_for_timeout(1500)
    r['echo'] = {'last': await ev('__ds.HAUNT.last'), 'visible': await ev('__ds.ghostMesh.visible'), 'opacity': round(await ev('__ds.ghostMesh.material.opacity'), 2), 'text': await ev('document.getElementById("haunt").textContent')}
    await t.shot('echo')
    await t.sim(8)
    r['echoGone'] = not await ev('__ds.ghostMesh.visible')
    r['echoOnce'] = await ev('(()=>{const d=__ds; d.sim(2,false); return d.HAUNT.ghost===null;})()')
    # natural rate: night in the graveyard for 3 minutes vs daytime on Main Street for 3 minutes
    r['rate'] = await ev('''(()=>{const d=__ds; d.HAUNT.ghost=null; d.ECHOES.forEach((e,i)=>d.HAUNT.echoSeen.add(i)); d.SKY.hour=0; d.P.x=50; d.P.z=170; d.HAUNT.t=60; const e0=d.HAUNT.events; for(let i=0;i<180;i++) d.sim(1,false); const night=d.HAUNT.events-e0; d.SKY.hour=12; d.P.x=93; d.P.z=110; d.HAUNT.t=60; const e1=d.HAUNT.events; for(let i=0;i<180;i++) d.sim(1,false); return {graveyardNight3min: night, mainStreetDay3min: d.HAUNT.events-e1, dreadDay:+d.HAUNT.dread.toFixed(2)};})()''')
    # admin HAUNT NOW with real taps
    if M:
      await t.tap('.tb[data-b=pause]')
    else:
      await ev("document.querySelector('.tb[data-b=pause]') && 0"); await t.key('Escape')
    await t.pg.wait_for_timeout(300)
    await ev("(()=>{const b=[...document.querySelectorAll('button')].find(x=>/ADMIN/.test(x.textContent)&&x.offsetParent); b.click();})()"); await t.pg.wait_for_timeout(300)
    for dgt in '0346': await ev("(d)=>{const b=[...document.querySelectorAll('button')].find(x=>x.textContent.trim()===d&&x.offsetParent); b.click();}", dgt); await t.pg.wait_for_timeout(80)
    await t.pg.wait_for_timeout(300)
    e0 = await ev('__ds.HAUNT.events')
    vis = await ev('!!document.querySelector("#admExtra [data-a=haunt]") && !!document.querySelector("#admExtra [data-a=haunt]").offsetParent')
    if vis:
      await ev('document.querySelector("#admExtra [data-a=haunt]").scrollIntoView()')
      if M: await t.tap('#admExtra [data-a=haunt]')
      else: await t.pg.click('#admExtra [data-a=haunt]')
    r['adminHaunt'] = {'buttonVisible': vis, 'fired': (await ev('__ds.HAUNT.events')) - e0}
    r['errors'] = t.errs[:10]
    print(json.dumps(r)); await t.br.close()
asyncio.run(main())
