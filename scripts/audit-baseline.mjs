// Read-only route review in an isolated browser context. No user browser storage is touched.
import {chromium} from 'playwright';
import fs from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
const base=process.env.TEST_BASE_URL||'http://127.0.0.1:4173';
const manifest=JSON.parse(await fs.readFile('docs/pages.json','utf8'));
const browser=await chromium.launch({channel:process.env.BROWSER_CHANNEL||'chrome',headless:true});
const report={commit:execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim(),capturedAt:new Date().toISOString(),base,method:'Fresh isolated context; route visibility and control inventory. This does not prove every control functions.',routes:[],errors:[],requests:[]};
await fs.mkdir('output/playwright/sg01',{recursive:true});
try{
const context=await browser.newContext({viewport:{width:1280,height:900}});const page=await context.newPage();
page.on('pageerror',e=>report.errors.push(e.message));page.on('request',r=>{if(['fetch','xhr','websocket'].includes(r.resourceType()))report.requests.push({url:r.url(),type:r.resourceType()});});
for(const route of [{id:'home'},...manifest.pages]){
 await page.goto(base+'/?page='+route.id);await page.locator(route.id==='home'?'#home-page':'#page-'+route.id).waitFor();
 const selector=route.id==='home'?'#home-page':'#page-'+route.id;
 const data=await page.locator(selector).evaluate(el=>({headings:[...el.querySelectorAll('h1,h2,h3')].map(e=>e.textContent.trim()),controls:[...el.querySelectorAll('button,input,select,textarea,a')].map(e=>({tag:e.tagName,id:e.id,type:e.getAttribute('type'),text:(e.labels?.[0]?.textContent||e.textContent||e.getAttribute('aria-label')||'').trim().slice(0,180),disabled:!!e.disabled,visible:!!e.getClientRects().length})),visuals:[...el.querySelectorAll('canvas,svg,table')].map(e=>({tag:e.tagName,id:e.id,label:e.getAttribute('aria-label')}))}));
 report.routes.push({id:route.id,status:'observed rendering; function coverage recorded separately',...data});
 await page.screenshot({path:'output/playwright/sg01/'+route.id+'-wide.png'});
 await page.setViewportSize({width:390,height:844});await page.screenshot({path:'output/playwright/sg01/'+route.id+'-narrow.png'});report.routes.at(-1).narrowOverflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);await page.setViewportSize({width:1280,height:900});
}
await page.goto(base+'/?page=builder');await page.locator('#wb-load-example').click();await page.locator('#wb-step').click();report.populatedBuilder={status:await page.locator('#wb-status').textContent(),outputs:await page.locator('#wb-outputs').textContent()};await page.screenshot({path:'output/playwright/sg01/builder-populated.png'});
report.storageKeys=await page.evaluate(()=>Object.keys(localStorage));
await fs.writeFile('docs/system-programme/baseline-routes.json',JSON.stringify(report,null,2)+'\n');
if(report.errors.length||report.routes.some(r=>r.narrowOverflow))throw Error('Baseline contains runtime errors or narrow overflow; inspect report.');
console.log(`Reviewed ${report.routes.length} routes; ${report.routes.reduce((n,r)=>n+r.controls.length,0)} controls inventoried. Screenshots in output/playwright/sg01.`);
}finally{await browser.close();}
