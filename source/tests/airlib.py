import asyncio, sys, json
from playwright.async_api import async_playwright
SHOT = '/home/sprite/perf/run-shots/'
VIS = '(()=>[...document.querySelectorAll("#touch .tb")].filter(e=>e.offsetParent&&getComputedStyle(e).display!="none").map(e=>e.dataset.b))()'
OVERLAP = '(()=>{const b=[...document.querySelectorAll("#touch .tb")].filter(e=>e.offsetParent&&getComputedStyle(e).display!="none").map(e=>[e.dataset.b,e.getBoundingClientRect()]); const o=[]; for(let i=0;i<b.length;i++){const r=b[i][1]; if(r.left<0||r.top<0||r.right>innerWidth||r.bottom>innerHeight)o.push(b[i][0]+":off"); for(let j=i+1;j<b.length;j++){const q=b[j][1]; if(r.left<q.right-2&&q.left<r.right-2&&r.top<q.bottom-2&&q.top<r.bottom-2)o.push(b[i][0]+"/"+b[j][0]);}} for(const id of ["airhud","minimap","zc","stealth","prompt"]){const e=document.getElementById(id); if(!e||!e.offsetParent||!e.textContent&&id!="minimap")continue; const r=e.getBoundingClientRect(); for(const [n,q] of b) if(r.left<q.right-2&&q.left<r.right-2&&r.top<q.bottom-2&&q.top<r.bottom-2)o.push(id+"/"+n);} return o;})()'

class T:
  async def start(self, p, W, H, url):
    self.W, self.H = W, H; self.mobile = min(W, H) < 500
    self.br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    if self.mobile:
      self.ctx = await self.br.new_context(viewport={'width': W, 'height': H}, has_touch=True, is_mobile=True, device_scale_factor=1, user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1')
    else:
      self.ctx = await self.br.new_context(viewport={'width': W, 'height': H})
    self.pg = pg = await self.ctx.new_page(); self.errs = []
    pg.on('pageerror', lambda e: self.errs.append('pageerror:' + str(e)[:300]))
    pg.on('console', lambda m: self.errs.append('console:' + m.text[:300]) if m.type == 'error' else None)
    if self.mobile: self.cdp = await self.ctx.new_cdp_session(pg)
    await pg.goto(url); await pg.wait_for_timeout(3500)
    if self.mobile and H > W: await self.tap('#bUpright'); await pg.wait_for_timeout(300)
    if self.mobile: await self.tap('#bPlay')
    else: await self.ev("document.getElementById('bPlay').click()")
    await pg.wait_for_timeout(1500)
    await self.ev('(()=>{const d=__ds;d.G.points=50000;d.G.god=true;d.G.toSpawn=0;for(const z of d.zombies)z.dead=true;})()')
    if not self.mobile: await pg.mouse.click(W / 2, H / 2); await pg.wait_for_timeout(200)
  async def ev(self, s, a=None): return await self.pg.evaluate(s, a) if a is not None else await self.pg.evaluate(s)
  async def sim(self, t): await self.ev('t=>__ds.sim(t,false)', t)
  async def tch(self, kind, pts): await self.cdp.send('Input.dispatchTouchEvent', {'type': kind, 'touchPoints': [{'x': x, 'y': y, 'id': i} for i, x, y in pts]})
  async def ctr(self, sel):
    b = await self.pg.locator(sel).first.bounding_box(); return (b['x'] + b['width'] / 2, b['y'] + b['height'] / 2)
  async def tap(self, sel):
    x, y = await self.ctr(sel); await self.tch('touchStart', [(9, x, y)]); await self.pg.wait_for_timeout(100); await self.tch('touchEnd', []); await self.pg.wait_for_timeout(150)
  async def hold(self, sel, secs):
    x, y = await self.ctr(sel); await self.tch('touchStart', [(9, x, y)]); await self.pg.wait_for_timeout(60); await self.sim(secs); await self.tch('touchEnd', []); await self.pg.wait_for_timeout(80)
  async def key(self, code): await self.pg.keyboard.press(code); await self.pg.wait_for_timeout(120)
  async def keyhold(self, code, secs):
    await self.pg.keyboard.down(code); await self.pg.wait_for_timeout(60); await self.sim(secs); await self.pg.keyboard.up(code); await self.pg.wait_for_timeout(60)
  async def stick(self, mx, my, secs):
    await self.ev('([mx,my,n])=>{for(let i=0;i<n;i++){__ds.inp.mx=mx;__ds.inp.my=my;__ds.sim(1/30,false);} __ds.inp.mx=0;__ds.inp.my=0;}', [mx, my, int(secs * 30)])
  async def shot(self, name): await self.pg.screenshot(path=SHOT + f'{name}_{self.W}x{self.H}.png')
