import asyncio
from playwright.async_api import async_playwright
JS = r'''(async()=>{const d=__ds,P=d.P,G=d.G,o={};
const use=(n=1)=>{for(let i=0;i<n;i++){d.inp.pressed.add('use');d.sim(1/30);} };
G.god=true;G.points=50000;d.G.toSpawn=0;
// door
const dr=d.doors[0];let sx=0,sz=0;for(const [i,j] of dr.tiles){sx+=i*2+1;sz+=j*2+1}sx/=dr.tiles.length;sz/=dr.tiles.length;
P.x=sx+(dr.axis==='x'?0:1.2);P.z=sz+(dr.axis==='x'?1.2:0);use();o.door=[dr.label,dr.open];
if(!dr.open){P.x=sx-(dr.axis==='x'?0:1.2);P.z=sz-(dr.axis==='x'?1.2:0);use();o.door2=dr.open}
// power + perk
P.x=d.WD.swUse.x;P.z=d.WD.swUse.z;use();o.power=G.power;
const pk=d.WD.perks[1];P.x=pk.use.x;P.z=pk.use.z;use();o.perk=[pk.key,P.perks.has(pk.key),P.maxHp];
// wallbuy
const wb=d.WD.wallbuys[0];P.x=wb.use.x;P.z=wb.use.z;use();o.wallbuy=P.guns.map(g=>g.key).join();
// box
const s=d.WD.boxSpots[d.box.spot];P.x=s.use.x;P.z=s.use.z;use();o.boxState1=d.box.state;d.sim(3.5);o.boxState2=d.box.state+':'+d.box.key;if(d.box.state==='ready'){use();o.boxTake=P.guns.map(g=>g.key).join()}
// forge
P.x=d.WD.forgeUse.x;P.z=d.WD.forgeUse.z;use();o.forge=P.guns[P.cur].name+' pap='+P.guns[P.cur].pap;
// powerups
const n0=G.points;d.dropPup(P.x,P.z,'dbl');d.sim(0.2);o.dbl=G.dbl>0;d.dropPup(P.x,P.z,'max');d.sim(0.2);
// build
P.x=30;P.z=30;d.toggleBuild();d.sim(0.1);o.buildOk=d.build.ok;d.inp.fire=true;d.sim(1/30);d.inp.fire=false;o.pieces=d.pieces.length;d.toggleBuild();
// car
P.x=d.car.x+1.5;P.z=d.car.z;use();o.driving=P.driving;d.inp.device='touch';const c0=[d.car.x,d.car.z];d.inp.tGas=1;d.inp.steer=0.3;d.sim(2);d.inp.tGas=0;d.inp.steer=0;o.mph=document.getElementById('carhud').innerText;o.carH=d.car.h.toFixed(2);o.carMoved=Math.hypot(d.car.x-c0[0],d.car.z-c0[1]).toFixed(1);use();o.exit=!P.driving;
// window repair
const w=d.windows[0];w.planks=3;d.WD.planks[w.id].list.slice(3).forEach(p=>p.visible=false);P.x=w.i*2+1-w.outDir[0]*1.1;P.z=w.j*2+1-w.outDir[1]*1.1;d.inp.use=true;d.sim(2.5);d.inp.use=false;o.repair=w.planks;
// view toggle
d.inp.pressed.add('view');d.sim(1/30);o.view=P.view;
// round 25 spawn check
d.startRound(25);d.sim(6);o.r25=[...new Set(d.zombies.map(z=>z.type))].join()+' hp'+Math.round(d.zombies[0]?.maxHp||0);
return JSON.stringify(o)})()'''
async def main():
  async with async_playwright() as p:
    br = await p.chromium.launch(args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    pg = await (await br.new_context(viewport={'width': 640, 'height': 360})).new_page(); errs=[]
    pg.on('pageerror', lambda e: errs.append(str(e))); pg.on('console', lambda m: errs.append(m.text) if m.type=='error' else None)
    await pg.goto('http://localhost:8112/index.html'); await pg.wait_for_timeout(2500)
    await pg.evaluate("document.getElementById('bPlay').click()"); await pg.wait_for_timeout(300)
    print(await pg.evaluate(JS)); await pg.wait_for_timeout(1500)
    await pg.evaluate("__ds.P.view='tp'"); await pg.wait_for_timeout(1500); await pg.screenshot(path='/home/sprite/dead-shift/tests/shots/tp.png')
    print('ERR', errs[:8]); await br.close()
asyncio.run(main())
