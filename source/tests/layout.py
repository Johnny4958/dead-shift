import asyncio, sys
from playwright.async_api import async_playwright
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    for W, H in [(390, 844), (844, 390), (1280, 720)]:
      t = W < 1000
      kw = dict(viewport={'width': W, 'height': H})
      if t: kw.update(has_touch=True, is_mobile=True, user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Version/17.0 Mobile/15E148 Safari/604.1')
      pg = await (await br.new_context(**kw)).new_page()
      await pg.goto('http://localhost:8112/index.html'); await pg.wait_for_timeout(2500)
      await pg.evaluate("document.body.classList.add('upright'); document.getElementById('bPlay').click()"); await pg.wait_for_timeout(800)
      r = await pg.evaluate('''(()=>{const vis=e=>{const s=getComputedStyle(e);const b=e.getBoundingClientRect();return s.display!=='none'&&s.visibility!=='hidden'&&b.width>0&&e.offsetParent!==null};
        const els=[...document.querySelectorAll('#touch .tb, #touch [data-b], #hud > *, #minimapWrap, #points, #gunbox')].filter(vis);
        const out=[];const bx=els.map(e=>[e.id||e.dataset.b||e.className,e.getBoundingClientRect()]);
        for(const [n,b] of bx){if(b.left<-1||b.top<-1||b.right>innerWidth+1||b.bottom>innerHeight+1)out.push('OFF '+n+' '+[b.left,b.top,b.right,b.bottom].map(Math.round))}
        const btn=bx.filter(([n])=>!/hud|toast|center|prompt|dmg|flash|scope|cross|hit|toxic|stick|pad|look/i.test(n));
        for(let i=0;i<btn.length;i++)for(let j=i+1;j<btn.length;j++){const a=btn[i][1],b=btn[j][1];const ox=Math.min(a.right,b.right)-Math.max(a.left,b.left),oy=Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top);if(ox>4&&oy>4)out.push('OVERLAP '+btn[i][0]+' / '+btn[j][0])}
        return {n:btn.length, names:btn.map(b=>b[0]).join(' '), issues:out}})()''')
      print(W, H, r)
      await pg.screenshot(path=f'/home/sprite/dead-shift/tests/shots/layout_{W}x{H}.png')
    await br.close()
asyncio.run(main())
