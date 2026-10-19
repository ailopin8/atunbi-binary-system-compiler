/** Portable graph contracts. Binary values always occupy a 10×10×10 matrix. */
export type ValueType='bits'|'number'|'text';
export type Value={type:'bits';data:string}|{type:'number';data:number}|{type:'text';data:string};
export type Kind='input'|'output'|'bits'|'number'|'text'|'not'|'and'|'or'|'xor'|'shift'|'rule'|'delay'|'counter'|'encode-number'|'decode-number'|'encode-text'|'decode-text'|'tool';
export type Params={type?:ValueType;value?:string|number;shift?:number;rule?:string;initial?:number;step?:number};
export type Node={id:string;kind:Kind;name:string;color:string;x:number;y:number;params:Params;toolId?:string};
export type Edge={id:string;from:string;out:string;to:string;input:string};
export type Graph={format:'atunbi.workspace.v1';name:string;nodes:Node[];edges:Edge[];tools:Tool[]};
export type Tool={id:string;name:string;purpose:string;color:string;graph:Graph};
export type Port={id:string;name:string;type:ValueType};
export type Spec={name:string;group:string;purpose:string};
export const specs:Record<Kind,Spec>={
 input:{name:'Tool input',group:'Inputs',purpose:'Receive a value through an exposed input, or use its configured default.'},
 output:{name:'Tool output',group:'Outputs',purpose:'Expose a connected result for viewing or reuse.'},
 bits:{name:'Binary input',group:'Inputs',purpose:'Supply a 1,000-bit matrix; shorter bit strings are padded with zeros.'},
 number:{name:'Number input',group:'Inputs',purpose:'Supply an integer from 0 to 255.'},text:{name:'Text input',group:'Inputs',purpose:'Supply text for explicit UTF-8 encoding.'},
 not:{name:'Invert bits',group:'Logic',purpose:'Flip each of the 1,000 bits.'},and:{name:'Both bits',group:'Logic',purpose:'Output 1 where both incoming bits are 1.'},or:{name:'Either bit',group:'Logic',purpose:'Output 1 where either incoming bit is 1.'},xor:{name:'Different bits',group:'Logic',purpose:'Output 1 where the incoming bits differ.'},
 shift:{name:'Move bits',group:'Patterns',purpose:'Rotate flattened matrix addresses by a chosen distance.'},rule:{name:'Apply binary rule',group:'Patterns',purpose:'Apply an eight-bit truth table to left, self and right cells on periodic rows of length ten.'},
 delay:{name:'Remember one tick',group:'Memory',purpose:'Output the previous tick’s input. Enables explicit feedback.'},counter:{name:'Count ticks',group:'Memory',purpose:'Output an eight-bit count in the first byte of the matrix, then advance modulo 256.'},
 'encode-number':{name:'Number to bits',group:'Encoding',purpose:'Encode 0–255 as the first eight bits, most significant bit first; pad the rest with zeros.'},'decode-number':{name:'Bits to number',group:'Encoding',purpose:'Read the first eight bits as an unsigned integer.'},
 'encode-text':{name:'Text to bits',group:'Encoding',purpose:'Encode UTF-8 with an eight-bit byte-count header and at most 124 data bytes.'},'decode-text':{name:'Bits to text',group:'Encoding',purpose:'Decode the byte-count header and UTF-8 data; reject invalid frames.'},
 tool:{name:'Saved tool',group:'Reusable',purpose:'Run an embedded graph with independent instance memory.'}
};
export const emptyGraph=():Graph=>({format:'atunbi.workspace.v1',name:'Untitled tool',nodes:[],edges:[],tools:[]});
export function newNode(kind:Kind,id:string,x=30,y=30):Node {return {id,kind,name:specs[kind].name,color:'#55c9b2',x,y,params:kind==='input'||kind==='output'?{type:'bits',value:'1'}:kind==='counter'?{initial:0,step:1}:kind==='shift'?{shift:1}:kind==='rule'?{rule:'01011010'}:kind==='number'?{value:0}:{value:kind==='text'?'Hello':'1'}};}
export function ports(node:Node,graph:Graph):{inputs:Port[];outputs:Port[]} {
 const p=(id:string,type:ValueType,name=id):Port=>({id,name,type});
 if(node.kind==='tool'){const tool=graph.tools.find(t=>t.id===node.toolId);if(!tool)throw Error('Missing saved tool definition.');return {inputs:tool.graph.nodes.filter(n=>n.kind==='input').map(n=>p(n.id,n.params.type||'bits',n.name)),outputs:tool.graph.nodes.filter(n=>n.kind==='output').map(n=>p(n.id,n.params.type||'bits',n.name))};}
 const type=node.params.type||'bits';
 if(node.kind==='input')return {inputs:[],outputs:[p('value',type)]};
 if(node.kind==='output')return {inputs:[p('value',type)],outputs:[]};
 if(['bits','number','text','counter'].includes(node.kind))return {inputs:[],outputs:[p('value',node.kind==='number'?'number':node.kind==='text'?'text':'bits')]};
 const inputType=node.kind==='encode-number'?'number':node.kind==='encode-text'?'text':'bits';
 const outputType=node.kind==='decode-number'?'number':node.kind==='decode-text'?'text':'bits';
 return {inputs:['and','or','xor'].includes(node.kind)?[p('a','bits'),p('b','bits')]:[p('value',inputType)],outputs:[p('value',outputType)]};
}
export function bitMatrix(value:unknown):string {if(typeof value!=='string'||!/^[01]{1,1000}$/.test(value))throw Error('Enter 1 to 1000 binary digits.');return value.padEnd(1000,'0');}
export function checkValue(value:Value,type:ValueType):Value {if(!value||value.type!==type)throw Error('Signal type does not match its port.');if(type==='bits'&&(typeof value.data!=='string'||!/^[01]{1000}$/.test(value.data)))throw Error('A binary signal must contain exactly 1000 bits.');if(type==='number'&&(!Number.isInteger(value.data)||Number(value.data)<0||Number(value.data)>255))throw Error('Numbers must be integers from 0 to 255.');if(type==='text'&&(typeof value.data!=='string'||value.data.length>1024))throw Error('Text must contain at most 1024 characters.');return value;}
function integer(value:unknown,min:number,max:number,label:string){if(typeof value!=='number'||!Number.isInteger(value)||value<min||value>max)throw Error(label+' must be an integer from '+min+' to '+max+'.');}
function shortText(value:unknown,label:string,max=80){if(typeof value!=='string'||!value.trim()||value.length>max)throw Error(label+' must contain 1 to '+max+' characters.');}
export function executionOrder(graph:Graph):Node[]{const pending=graph.nodes.filter(n=>n.kind!=='delay'),done=new Set(graph.nodes.filter(n=>n.kind==='delay').map(n=>n.id)),result:Node[]=[];while(pending.length){const index=pending.findIndex(n=>graph.edges.filter(e=>e.to===n.id).every(e=>done.has(e.from)));if(index<0)throw Error('A feedback loop needs a Remember one tick module.');const [node]=pending.splice(index,1);done.add(node.id);result.push(node);}return result;}
export function validateGraph(value:unknown,complete=false):asserts value is Graph {
 let serialized:string;try{serialized=JSON.stringify(value);}catch{throw Error('Workspace must be serializable without cycles.');}if(!serialized||serialized.length>1_000_000)throw Error('Workspace exceeds the 1 MB limit.');
 let definitionNodes=0;
 function visit(raw:unknown,depth:number){if(depth>4)throw Error('Use at most four nested graph levels.');if(!raw||typeof raw!=='object')throw Error('Invalid workspace.');const g=raw as Graph;if(g.format!=='atunbi.workspace.v1'||!Array.isArray(g.nodes)||!Array.isArray(g.edges)||!Array.isArray(g.tools))throw Error('Unsupported workspace format.');shortText(g.name,'Workspace name');if(g.nodes.length>64||g.edges.length>128||g.tools.length>16)throw Error('Limit: 64 modules, 128 connections and 16 embedded tools.');definitionNodes+=g.nodes.length;if(definitionNodes>256)throw Error('Definitions exceed 256 modules.');const tools=new Set<string>();for(const t of g.tools){if(!t||!/^tool-[\w-]{1,60}$/.test(t.id)||tools.has(t.id))throw Error('Invalid or duplicate tool ID.');tools.add(t.id);shortText(t.name,'Tool name');shortText(t.purpose,'Tool purpose',240);if(!/^#[\da-f]{6}$/i.test(t.color))throw Error('Choose a six-digit hex color.');visit(t.graph,depth+1);}
 const ids=new Set<string>();for(const n of g.nodes){if(!n||!/^n-[\w-]{1,60}$/.test(n.id)||ids.has(n.id)||!Object.prototype.hasOwnProperty.call(specs,n.kind))throw Error('Invalid or duplicate module.');ids.add(n.id);shortText(n.name,'Module name');if(!/^#[\da-f]{6}$/i.test(n.color))throw Error('Choose a six-digit hex color.');integer(n.x,0,3000,'X position');integer(n.y,0,3000,'Y position');if(!n.params||typeof n.params!=='object'||Array.isArray(n.params))throw Error('Invalid module parameters.');if(n.kind==='tool'&&!tools.has(n.toolId||''))throw Error('Missing saved tool definition.');if(['input','output'].includes(n.kind)&&!['bits','number','text'].includes(n.params.type||''))throw Error('Choose an input/output type.');if(n.kind==='bits'||n.kind==='delay'||(n.kind==='input'&&n.params.type==='bits'))bitMatrix(n.params.value);if(n.kind==='number'||(n.kind==='input'&&n.params.type==='number'))integer(n.params.value,0,255,'Number');if(n.kind==='text'||(n.kind==='input'&&n.params.type==='text'))checkValue({type:'text',data:n.params.value as string},'text');if(n.kind==='shift')integer(n.params.shift,-999,999,'Shift');if(n.kind==='rule'&&(typeof n.params.rule!=='string'||!/^[01]{8}$/.test(n.params.rule)))throw Error('Rule requires eight output bits ordered 000 through 111.');if(n.kind==='counter'){integer(n.params.initial,0,255,'Initial count');integer(n.params.step,0,255,'Count step');}}
 const edgeIds=new Set<string>(),destinations=new Set<string>();for(const e of g.edges){if(!e||!/^e-[\w-]{1,60}$/.test(e.id)||edgeIds.has(e.id))throw Error('Invalid or duplicate connection.');edgeIds.add(e.id);const from=g.nodes.find(n=>n.id===e.from),to=g.nodes.find(n=>n.id===e.to);if(!from||!to)throw Error('A connection endpoint is missing.');const out=ports(from,g).outputs.find(p=>p.id===e.out),input=ports(to,g).inputs.find(p=>p.id===e.input);if(!out||!input||out.type!==input.type)throw Error('Choose matching input and output types.');const key=e.to+'.'+e.input;if(destinations.has(key))throw Error('Each input accepts one connection.');destinations.add(key);}
 executionOrder(g);if(complete)for(const n of g.nodes)if(n.kind!=='delay')for(const p of ports(n,g).inputs)if(!destinations.has(n.id+'.'+p.id))throw Error(n.name+': connect input '+p.name+'.');
 }
 visit(value,1);
 let expanded=0;function count(g:Graph){expanded+=g.nodes.length;if(expanded>256)throw Error('Expanded tool instances exceed 256 modules.');for(const n of g.nodes)if(n.kind==='tool')count(g.tools.find(t=>t.id===n.toolId)!.graph);}count(value as Graph);
}
export function parseGraph(text:string):Graph {if(text.length>1_000_000)throw Error('Workspace exceeds the 1 MB limit.');let graph:unknown;try{graph=JSON.parse(text);}catch{throw Error('Choose a valid JSON workspace file.');}validateGraph(graph);return structuredClone(graph);}
