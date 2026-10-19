// Maintainer-only fixture generator. Requires the original baseline commit in Git history.
import {execFileSync} from 'node:child_process';import fs from 'node:fs';import ts from 'typescript';import {createHash} from 'node:crypto';
const baseline='ed6f9540ee43cf332eb1670e7826eedc8aaacec1',cases=[];
for(const name of ['g7','g8']){
 let source=execFileSync('git',['show',baseline+':src/'+name+'.ts'],{encoding:'utf8'});
 source=source.slice(source.indexOf(name==='g7'?'type Opcode':'type MatrixID'),source.indexOf(name==='g7'?'function el<':'const section=document.createElement'))+(name==='g7'?'\nexport {parseSource,BinaryMachine,PRESETS};':'\nexport {compile,VM,examples};');
 const code=ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ES2022}}).outputText;
 const m=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
 for(const [preset,text] of Object.entries(m.PRESETS||m.examples))for(const coupled of (name==='g7'?[0.75,0]:[true,false]))for(const ticks of [0,1,8,24]){
  const vm=name==='g7'?new m.BinaryMachine(m.parseSource(text),coupled):new m.VM(m.compile(text),coupled);vm.run(ticks);
  cases.push({engine:name,preset,coupled,ticks,sha256:createHash('sha256').update(JSON.stringify(vm)).digest('hex')});
 }
}
fs.writeFileSync('tests/fixtures/kernel-baseline.json',JSON.stringify({baseline,method:'SHA256 of complete JSON-serialized VM including program, state, queues and counters',cases},null,2)+'\n');
