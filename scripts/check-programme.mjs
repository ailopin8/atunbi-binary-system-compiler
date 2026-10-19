import fs from 'node:fs';
import assert from 'node:assert/strict';
const root='docs/system-programme/';
const objective=fs.readFileSync(root+'OBJECTIVE.md','utf8');
const ledger=JSON.parse(fs.readFileSync(root+'ledger.json','utf8'));
const requirements=JSON.parse(fs.readFileSync(root+'requirements.json','utf8')).requirements;
const titles=[...objective.matchAll(/^### (SG\d+) — (.+)$/gm)];
assert.equal(titles.length,25);assert.equal(ledger.subgoals.length,25);
const ids=new Set();for(const requirement of requirements){assert.ok(!ids.has(requirement.id),'Duplicate requirement');ids.add(requirement.id);for(const key of ['owner','acceptance','verificationMethod','priority','status'])assert.ok(requirement[key],requirement.id+' missing '+key);}
for(const [i,entry] of ledger.subgoals.entries()){
 assert.equal(entry.id,titles[i][1]);assert.equal(entry.title,titles[i][2]);
 assert.ok(['not started','in progress','blocked','verified'].includes(entry.status));
 assert.ok(entry.requirements.length,entry.id+' has no requirements');
 for(const id of entry.requirements)assert.ok(ids.has(id),entry.id+' references missing '+id);
 if(entry.status==='verified'){assert.ok(entry.evidence.length,entry.id+' lacks evidence');assert.ok(entry.artifacts.length,entry.id+' lacks artifacts');for(const path of entry.artifacts)assert.ok(fs.existsSync(root+path),path+' missing');}
}
for(const match of objective.matchAll(/### (SG\d+) — .*?\n(.*?)(?=\n### SG|\n## Required page relationships)/gs)){
 for(const paragraph of match[2].split('\n\n').map(s=>s.trim()).filter(s=>s&&!s.startsWith('**Depends'))){assert.ok(requirements.some(r=>r.subgoal===match[1]&&r.acceptance===paragraph),'Original scope omitted: '+match[1]+' '+paragraph.slice(0,80));}
}
assert.equal(requirements.filter(r=>r.id.startsWith('DEMO')).length,7);
console.log('PASS: all 25 subgoals, original clauses, seven mandatory demonstrations, stable requirement IDs and verified-stage artifacts accounted for. This checks record integrity, not product completion.');
