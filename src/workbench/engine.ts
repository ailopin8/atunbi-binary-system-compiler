import {type Graph,type Value,type Node,validateGraph,ports,executionOrder,bitMatrix,checkValue} from './model';
export type Memory=Record<string,{bits?:string;count?:number;child?:Memory}>;
export type Frame={tick:number;outputs:Record<string,Value>;nodes:Record<string,Record<string,Value>>;operations:number};
export type Evaluator=(node:Node,input:Record<string,Value>,memory:Memory[string]|undefined)=>{outputs:Record<string,Value>;memory?:Memory[string]};
/** Evaluation is staged: no memory is committed until the complete nested tick succeeds. */
export class GraphEngine {
 readonly graph:Graph;tick=0;private memory:Memory={};last:Frame|null=null;
 constructor(graph:Graph,private evaluator:Evaluator){validateGraph(graph,true);this.graph=structuredClone(graph);}
 step(external:Record<string,Value>={}):Frame {const budget={operations:0};const result=this.evaluate(this.graph,this.memory,external,budget);const frame={tick:this.tick+1,outputs:result.outputs,nodes:result.nodes,operations:budget.operations};this.memory=result.memory;this.tick++;this.last=structuredClone(frame);return structuredClone(frame);}
 private evaluate(graph:Graph,previous:Memory,external:Record<string,Value>,budget:{operations:number}):{outputs:Record<string,Value>;nodes:Frame['nodes'];memory:Memory} {
 const nodes:Frame['nodes']={},memory:Memory={},outputs:Record<string,Value>={};
 const allowed=graph.nodes.filter(n=>n.kind==='input');for(const key of Object.keys(external))if(!allowed.some(n=>n.id===key))throw Error('Unknown exposed input: '+key);
 const inputFor=(n:Node)=>{const values:Record<string,Value>={};for(const p of ports(n,graph).inputs){const e=graph.edges.find(e=>e.to===n.id&&e.input===p.id);if(e){const value=nodes[e.from]?.[e.out];if(!value)throw Error('Missing signal for '+n.name+'.'+p.name);values[p.id]=checkValue(value,p.type);}}return values;};
 for(const n of graph.nodes.filter(n=>n.kind==='delay')){nodes[n.id]={value:{type:'bits',data:previous[n.id]?.bits||bitMatrix(n.params.value)}};if(++budget.operations>4096)throw Error('Tick processing budget exceeded.');}
 for(const n of executionOrder(graph)){if(++budget.operations>4096)throw Error('Tick processing budget exceeded.');const inputs=inputFor(n);
 if(n.kind==='input'){const type=n.params.type!;const value=external[n.id]||({type,data:type==='bits'?bitMatrix(n.params.value):n.params.value} as Value);nodes[n.id]={value:checkValue(value,type)};}
 else if(n.kind==='output'){outputs[n.id]=structuredClone(inputs.value);nodes[n.id]={value:structuredClone(inputs.value)};}
 else if(n.kind==='tool'){const tool=graph.tools.find(t=>t.id===n.toolId)!;const child=this.evaluate(tool.graph,previous[n.id]?.child||{},inputs,budget);nodes[n.id]=child.outputs;memory[n.id]={child:child.memory};}
 else {const result=this.evaluator(n,inputs,previous[n.id]);for(const p of ports(n,graph).outputs)checkValue(result.outputs[p.id],p.type);nodes[n.id]=result.outputs;if(result.memory)memory[n.id]=result.memory;}
 }
 for(const n of graph.nodes.filter(n=>n.kind==='delay')){const input=inputFor(n).value;memory[n.id]={bits:input?String(input.data):String(nodes[n.id].value.data)};}
 return {outputs,nodes,memory};
 }
 reset(){this.memory={};this.tick=0;this.last=null;}
}
