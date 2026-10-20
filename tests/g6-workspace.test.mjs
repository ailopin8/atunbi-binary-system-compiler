import {test} from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import {createHash} from 'node:crypto';import {loadDomain} from './domain-loader.mjs';
const {G6Workspace,syncSandbox}=await loadDomain('engines/g6.ts');
function example(){const w=new G6Workspace(),a=w.addSandbox('diffusion'),b=w.addSandbox('oscillator'),growth=w.addLayer(a,'growth'),automaton=w.addLayer(b,'automaton');a.innerLinks.push({id:1,from:1,to:growth.id,strength:.65,mode:'excite',enabled:true});b.innerLinks.push({id:1,from:1,to:automaton.id,strength:.65,mode:'excite',enabled:true});b.outputLayerId=automaton.id;syncSandbox(b);w.edges.push({id:w.nextEdgeId++,from:a.id,to:b.id,targetLayerId:automaton.id,strength:.65,mode:'excite',enabled:true});return w;}
test('headless G6 preserves all original fields, registers and influences over baseline workloads',()=>{
 assert.equal(typeof globalThis.document,'undefined');const fixture=JSON.parse(fs.readFileSync(new URL('./fixtures/g6-baseline.json',import.meta.url),'utf8'));
 for(const row of fixture.cases){const w=row.algorithm==='example'?example():new G6Workspace();if(row.algorithm!=='example')w.addSandbox(row.algorithm);for(let i=0;i<row.ticks;i++)w.step();assert.equal(createHash('sha256').update(JSON.stringify(w.snapshot())).digest('hex'),row.sha256,JSON.stringify(row));}
});
test('G6 restore rejects malformed graphs atomically and exported values do not alias model state',()=>{
 const w=example();w.step();const before=w.snapshot(),bad=structuredClone(before);bad.sandboxes[1].layers[0].state[999]=NaN;assert.throws(()=>w.restore(bad));assert.deepEqual(w.snapshot(),before);
 const badEdge=structuredClone(before);badEdge.relationships[0].to=999;assert.throws(()=>w.restore(badEdge));assert.deepEqual(w.snapshot(),before);
 const detached=w.snapshot();detached.sandboxes[0].innerLinks[0].enabled=false;detached.sandboxes[0].layers[0].state.fill(0);assert.deepEqual(w.snapshot(),before);
 const restored=new G6Workspace();restored.restore(before);w.step();restored.step();assert.deepEqual(restored.snapshot(),w.snapshot());
});
test('G6 numeric continuation, independent instances, reset and failed tick preserve owned state',()=>{
 const a=new G6Workspace();a.addSandbox('library-gray');for(let i=0;i<6;i++)a.step();const b=new G6Workspace();b.restore(a.snapshot());a.step();b.step();assert.deepEqual(a.snapshot(),b.snapshot());a.reset();assert.equal(a.tick,0);assert.equal(b.tick,7);
 const fresh=new G6Workspace();fresh.addSandbox('library-gray');assert.deepEqual(a.snapshot(),fresh.snapshot());
 const w=example();w.nodes[1].layers[1].algorithm='custom-missing';const before=w.snapshot();assert.throws(()=>w.step());assert.deepEqual(w.snapshot(),before);
 const empty=new G6Workspace();const initial=empty.snapshot();assert.throws(()=>empty.addSandbox('custom-missing'));assert.deepEqual(empty.snapshot(),initial);assert.equal(empty.nextNodeId,1);
});
test('G6 ownership and graph limits reject foreign layers and leave other instances untouched',()=>{
 const a=new G6Workspace(),b=new G6Workspace(),foreign=b.addSandbox('diffusion');assert.throws(()=>a.addLayer(foreign,'growth'));assert.equal(foreign.layers.length,1);
 for(let i=0;i<6;i++)a.addSandbox();assert.throws(()=>a.addSandbox());assert.equal(a.nodes.length,6);for(let i=0;i<4;i++)a.addLayer(a.nodes[0],'growth');assert.throws(()=>a.addLayer(a.nodes[0],'growth'));assert.equal(a.nodes[0].layers.length,4);
});
