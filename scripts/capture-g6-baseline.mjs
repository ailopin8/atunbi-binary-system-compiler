import {execFileSync} from 'node:child_process';import fs from 'node:fs';import ts from 'typescript';import {createHash} from 'node:crypto';import {domainURL} from '../tests/domain-loader.mjs';
const baseline='ed6f9540ee43cf332eb1670e7826eedc8aaacec1';let source=execFileSync('git',['show',baseline+':src/editor.ts'],{encoding:'utf8'});
source=source.slice(source.indexOf('const N ='),source.indexOf('const root = document.querySelector'));
const imports=`import {expandedMetadata,evolveExpanded,seedExpanded,validateRegisters} from ${JSON.stringify(domainURL('algorithms/g6-library.ts'))};import {validateRule} from ${JSON.stringify(domainURL('algorithms/library.ts'))};`;
const stubs="let result;function notice(){}function redraw(){}function refreshDynamic(){}function sendEvidence(_id,_name,data){result=data;return true;}";
source=imports+stubs+source+"\nexport function capture(algorithm,ticks){nodes=[];edges=[];tick=0;nextNodeId=1;nextEdgeId=1;if(algorithm==='example')loadExample();else addSandbox(algorithm);for(let i=0;i<ticks;i++)step();exportGraph();return result;}\nexport {expandedMetadata};";
const code=ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ES2022}}).outputText,m=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
const cases=[];for(const algorithm of ['example','diffusion','oscillator','growth','automaton',...m.expandedMetadata().map(x=>x.id)])for(const ticks of [0,1,8,24])cases.push({algorithm,ticks,sha256:createHash('sha256').update(JSON.stringify(m.capture(algorithm,ticks))).digest('hex')});
fs.writeFileSync('tests/fixtures/g6-baseline.json',JSON.stringify({baseline,cases},null,2)+'\n');console.log(cases.length+' G6 baseline cases captured.');
