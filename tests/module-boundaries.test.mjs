import {test} from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import ts from 'typescript';import {createHash} from 'node:crypto';
const modules={};
for(const name of ['g7','g8']){
 const source=fs.readFileSync(new URL('../src/engines/'+name+'.ts',import.meta.url),'utf8');
 const ast=ts.createSourceFile(name+'.ts',source,ts.ScriptTarget.Latest,true);
 // These kernels have no external dependencies or host effects: the whole real module is loaded.
 assert.equal(ast.statements.filter(ts.isImportDeclaration).length,0);
 const code=ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ES2022}}).outputText;
 modules[name]=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
}
const fixture=JSON.parse(fs.readFileSync(new URL('./fixtures/kernel-baseline.json',import.meta.url),'utf8'));
test('extracted kernels preserve full baseline execution state across presets, clocks and coupling',()=>{
 assert.equal(typeof globalThis.document,'undefined');assert.equal(typeof globalThis.window,'undefined');
 for(const row of fixture.cases){const m=modules[row.engine],source=(m.PRESETS||m.examples)[row.preset];const vm=row.engine==='g7'?new m.BinaryMachine(m.parseSource(source),row.coupled):new m.VM(m.compile(source),row.coupled);vm.run(row.ticks);assert.equal(createHash('sha256').update(JSON.stringify(vm)).digest('hex'),row.sha256,JSON.stringify(row));}
});
test('compiler errors leave independent running instances intact without a page',()=>{
 for(const name of ['g7','g8']){const m=modules[name],compile=m.parseSource||m.compile,VM=m.BinaryMachine||m.VM,source=Object.values(m.PRESETS||m.examples)[0];const a=new VM(compile(source)),b=new VM(compile(source));a.run(3);const before=JSON.stringify(a);assert.throws(()=>compile('this is not an instruction'));assert.equal(JSON.stringify(a),before);assert.equal(b.tick,0);b.run(3);assert.deepEqual(a,b);}
});
