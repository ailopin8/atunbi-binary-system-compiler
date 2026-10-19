/** Independent equation implementations; references and adaptations are in the catalogue. */
export const sources={maps:'https://www.scholarpedia.org/article/Coupled_maps',ca:'https://github.com/c0re-i5/3d-cellular-automata',eca:'https://reference.wolfram.com/language/ref/CellularAutomaton.html',tent:'https://www.mdpi.com/2504-3110/8/6/344',gray:'https://groups.csail.mit.edu/mac/projects/amorphous/GrayScott/',code:'https://github.com/cselab/gray-scott',osc:'https://arxiv.org/abs/2310.00821',lenia:'https://arxiv.org/abs/1812.05433'};
export type Builtin = 'xor'|'rule30'|'majority'|'life'|'diffusion'|'advection'|'logistic'|'tent'|'coupled'|'oscillator'|'kuramoto'|'gray';
export type Algorithm=Builtin|`custom-${string}`;
export type RuleInput='self'|'left'|'right'|'down'|'up'|'back'|'front'|'zero'|'one';
export type CustomRule={format:'atunbi.binary-rule.v1';id:`custom-${string}`;name:string;type:string;purpose:string;aim:string;color:string;inputs:[RuleInput,RuleInput,RuleInput];table:string};
export type CatalogueEntry={id:Algorithm;name:string;type:string;purpose:string;aim:string;formula:string;color:string;source:string};
export const catalogue:CatalogueEntry[]=[
 {id:'xor',name:'XOR / rule 90',type:'Boolean',purpose:'Propagate differences',aim:'Interference',formula:'b′ = left XOR right',color:'#ff709c',source:sources.eca},
 {id:'rule30',name:'Rule 30',type:'Boolean',purpose:'Asymmetric mixing',aim:'Irregular propagation',formula:'b′ = left XOR (center OR right)',color:'#ffa94d',source:sources.eca},
 {id:'majority',name:'Face majority',type:'Boolean',purpose:'Local consensus',aim:'Coarsening',formula:'b′ = 1[count(six neighbors + self) ≥ 4]',color:'#ffe066',source:sources.ca},
 {id:'life',name:'3D B6/S567',type:'Boolean',purpose:'Birth / survival',aim:'Local organization',formula:'b′ = (n26=6) OR (b AND 5≤n26≤7)',color:'#a9e34b',source:sources.ca},
 {id:'diffusion',name:'Diffusion',type:'Transport',purpose:'Spread a signal',aim:'Smoothing',formula:'x′ = x + D·(mean6(x) − x)',color:'#38d9a9',source:sources.gray},
 {id:'advection',name:'Periodic shift',type:'Transport',purpose:'Move information',aim:'Traveling signals',formula:'b′(x,y,z) = b(x−1,y,z)',color:'#3bc9db',source:sources.ca},
 {id:'logistic',name:'Logistic map',type:'Nonlinear maps',purpose:'Amplify local differences',aim:'Sensitivity / cycles',formula:'x′ = r·x·(1−x), 0≤r≤4',color:'#74c0fc',source:sources.maps},
 {id:'tent',name:'Tent map',type:'Nonlinear maps',purpose:'Stretch and fold',aim:'Mixing',formula:'x′ = a·min(x,1−x), 0≤a≤2',color:'#748ffc',source:sources.tent},
 {id:'coupled',name:'Coupled logistic lattice',type:'Nonlinear maps',purpose:'Mix local growth with neighbors',aim:'Spatial order / disorder',formula:'x′ = (1−ε)f(x) + ε·mean6(f(x))',color:'#b197fc',source:sources.maps},
 {id:'oscillator',name:'Sine oscillator',type:'Oscillators',purpose:'Periodic driving',aim:'Rhythms',formula:'θ′=θ+ω; x=(1+sin θ′)/2',color:'#e599f7',source:sources.osc},
 {id:'kuramoto',name:'Local phase coupling',type:'Oscillators',purpose:'Synchronize neighbors',aim:'Phase coordination',formula:'θ′=θ+ω+K·mean6(sin(θj−θ))',color:'#f783ac',source:sources.osc},
 {id:'gray',name:'Gray–Scott',type:'Reaction–diffusion',purpose:'Competing reaction and diffusion',aim:'Pattern formation',formula:'u′=u+dt(Du·Δu−uv²+F(1−u)); v′=v+dt(Dv·Δv+uv²−(F+k)v)',color:'#c0eb75',source:sources.gray}
];
export type NodeConfig={id:string;algorithm:Algorithm;parameter:number;threshold:number};
export type Edge={from:string;to:string;weight:number};
export type Config={seed:number;nodes:NodeConfig[];edges:Edge[];definitions?:CustomRule[]};
type State={x:Float64Array;u:Float64Array;phase:Float64Array;bits:Uint8Array};
export const defaults:Config={seed:42,nodes:[{id:'A',algorithm:'xor',parameter:.2,threshold:.5},{id:'B',algorithm:'coupled',parameter:3.8,threshold:.5},{id:'C',algorithm:'gray',parameter:.04,threshold:.15}],edges:[{from:'A',to:'B',weight:.3},{from:'B',to:'C',weight:.25},{from:'C',to:'A',weight:.2}]};
export const neighbors=Array.from({length:1000},(_,i)=>{const x=i%10,y=Math.floor(i/10)%10,z=Math.floor(i/100);return [(x+9)%10+y*10+z*100,(x+1)%10+y*10+z*100,x+(y+9)%10*10+z*100,x+(y+1)%10*10+z*100,x+y*10+(z+9)%10*100,x+y*10+(z+1)%10*100];});

export const ruleInputs:RuleInput[]=['self','left','right','down','up','back','front','zero','one'];
export function validateRule(rule:CustomRule){
 if(!rule||rule.format!=='atunbi.binary-rule.v1'||!/^custom-[a-z0-9-]{1,40}$/.test(rule.id))throw Error('Invalid rule format or ID.');
 for(const key of ['name','type','purpose','aim'] as const)if(typeof rule[key]!=='string'||!rule[key].trim()||rule[key].length>160)throw Error('Name, category, purpose and aim need 1–160 characters.');
 if(!/^#[0-9a-fA-F]{6}$/.test(rule.color)||!Array.isArray(rule.inputs)||rule.inputs.length!==3||rule.inputs.some(input=>!ruleInputs.includes(input))||typeof rule.table!=='string'||!/^[01]{8}$/.test(rule.table))throw Error('Choose a color, three supported input bits and exactly eight output bits.');
}
export function validateRules(rules:CustomRule[]){if(!Array.isArray(rules)||rules.length>32)throw Error('Use at most 32 custom rules.');const ids=new Set();for(const rule of rules){validateRule(rule);if(ids.has(rule.id))throw Error('Duplicate custom rule ID.');ids.add(rule.id);}}
export function installRules(rules:CustomRule[]){validateRules(rules);const entries=rules.map(rule=>({id:rule.id,name:rule.name,type:rule.type,purpose:rule.purpose,aim:rule.aim,color:rule.color,formula:'LUT(a,b,c) = '+rule.table+'; inputs '+rule.inputs.join(', '),source:''}));catalogue.splice(12,catalogue.length-12,...entries);}
export function evaluateRule(rule:CustomRule,bits:Uint8Array,i:number){const ns=neighbors[i];const read=(input:RuleInput)=>input==='self'?bits[i]:input==='zero'?0:input==='one'?1:bits[ns[ruleInputs.indexOf(input)-1]];return Number(rule.table[read(rule.inputs[0])*4+read(rule.inputs[1])*2+read(rule.inputs[2])]);}

const clamp=(x:number)=>Math.max(0,Math.min(1,x));
export function validate(config:Config){
 validateRules(config.definitions||[]);
 if(!Number.isInteger(config.seed)||config.seed<0||config.seed>4294967295)throw Error('Seed must be a 32-bit unsigned integer.');
 if(config.nodes.length<1||config.nodes.length>6)throw Error('Use one to six nodes.');
 const ids=new Set<string>();for(const n of config.nodes){if(!/^[A-Za-z][A-Za-z0-9_-]{0,15}$/.test(n.id)||ids.has(n.id))throw Error('Node IDs must be unique.');ids.add(n.id);if(!(catalogue.slice(0,12).some(a=>a.id===n.algorithm)||(config.definitions||[]).some(a=>a.id===n.algorithm))||!Number.isFinite(n.parameter)||n.parameter<0||n.parameter>4||!Number.isFinite(n.threshold)||n.threshold<0||n.threshold>1)throw Error('Invalid algorithm, parameter or threshold.');}
 const keys=new Set<string>();if(config.edges.length>30)throw Error('At most 30 edges.');for(const e of config.edges){const key=e.from+'>'+e.to;if(!ids.has(e.from)||!ids.has(e.to)||e.from===e.to||keys.has(key)||!Number.isFinite(e.weight)||Math.abs(e.weight)>1)throw Error('Edges require different existing nodes, unique pairs and weights −1 to 1.');keys.add(key);}
}
export class LibraryEngine{
 config:Config;states:State[];tick=0;influence:Record<string,Uint8Array>={};
 constructor(config:Config=defaults){validate(config);this.config=structuredClone(config);let s=config.seed>>>0;const random=()=>{s=(Math.imul(1664525,s)+1013904223)>>>0;return s/4294967296;};this.states=config.nodes.map(n=>{const x=Float64Array.from({length:1000},()=>n.algorithm==='gray'?(random()<.1?.7:0):random());return {x,u:Float64Array.from(x,v=>1-v*.5),phase:Float64Array.from(x,v=>v*Math.PI*2),bits:Uint8Array.from(x,v=>Number(v>=n.threshold))};});}
 private evaluate(k:number,omit=-1):State{
  const n=this.config.nodes[k],s=this.states[k],p=n.parameter;
  const x=new Float64Array(1000),u=s.u.slice(),phase=s.phase.slice();
  for(let i=0;i<1000;i++){
   const ns=neighbors[i],mean=ns.reduce((a,j)=>a+s.x[j],0)/6,b=s.bits;
   let value=s.x[i];
   switch(n.algorithm){
    default:{const rule=this.config.definitions?.find(rule=>rule.id===n.algorithm);if(!rule)throw Error('Missing embedded custom rule.');value=evaluateRule(rule,b,i);break;}
    case 'xor':value=b[ns[0]]^b[ns[1]];break;
    case 'rule30':value=b[ns[0]]^(b[i]|b[ns[1]]);break;
    case 'majority':value=Number(ns.reduce((a,j)=>a+b[j],b[i])>=4);break;
    case 'life':{let count=0;const xx=i%10,yy=Math.floor(i/10)%10,zz=Math.floor(i/100);for(let z=-1;z<=1;z++)for(let y=-1;y<=1;y++)for(let a=-1;a<=1;a++)if(a||y||z)count+=b[(xx+a+10)%10+((yy+y+10)%10)*10+((zz+z+10)%10)*100];value=Number(count===6||(b[i]&&count>=5&&count<=7));break;}
    case 'diffusion':value+=Math.min(1,p)*(mean-value);break;
    case 'advection':value=s.x[ns[0]];break;
    case 'logistic':value=p*value*(1-value);break;
    case 'tent':value=Math.min(2,p)*Math.min(value,1-value);break;
    case 'coupled':value=.75*p*value*(1-value)+.25*ns.reduce((a,j)=>a+p*s.x[j]*(1-s.x[j]),0)/6;break;
    case 'oscillator':case 'kuramoto':phase[i]=(s.phase[i]+.05+p*.2+(n.algorithm==='kuramoto'?.15*ns.reduce((a,j)=>a+Math.sin(s.phase[j]-s.phase[i]),0)/6:0))%(2*Math.PI);value=(1+Math.sin(phase[i]))/2;break;
    case 'gray':{const v=s.x[i],a=s.u[i],reaction=a*v*v,lapV=(mean-v)*6,lapU=ns.reduce((sum,j)=>sum+s.u[j]-a,0);u[i]=clamp(a+.2*(.16*lapU-reaction+Math.min(.1,p)*(1-a)));value=v+.2*(.08*lapV+reaction-(Math.min(.1,p)+.06)*v);break;}
   }
   let delta=0,weight=0;this.config.edges.forEach((e,index)=>{if(e.to!==n.id||index===omit)return;const source=this.states[this.config.nodes.findIndex(v=>v.id===e.from)].bits[i];delta+=e.weight*(source-value);weight+=Math.abs(e.weight);});
   x[i]=clamp(value+delta/Math.max(1,weight));
  }
  return {x,u,phase,bits:Uint8Array.from(x,v=>Number(v>=n.threshold))};
 }
 step(){const next=this.states.map((_,k)=>this.evaluate(k));this.influence={};this.config.edges.forEach((e,index)=>{const k=this.config.nodes.findIndex(n=>n.id===e.to),without=this.evaluate(k,index);this.influence[e.from+'>'+e.to]=Uint8Array.from(next[k].bits,(b,i)=>Number(b!==without.bits[i]));});this.states=next;this.tick++;}
 snapshot(){return {tick:this.tick,config:structuredClone(this.config),states:this.states.map((s,i)=>({id:this.config.nodes[i].id,bits:Array.from(s.bits),registers:Array.from(s.x),u:Array.from(s.u),phase:Array.from(s.phase)}))};}
}
export function compare(config:Config,ticks=32){if(!Number.isInteger(ticks)||ticks<1||ticks>128)throw Error('Comparison duration must be 1–128.');const coupled=new LibraryEngine(config),isolated=new LibraryEngine({...config,edges:[]});const trajectory:number[][]=[];const seen=new Set<string>();let repeats=0;for(let t=0;t<ticks;t++){coupled.step();isolated.step();const differences=coupled.states.map((s,k)=>s.bits.reduce((a,b,i)=>a+Number(b!==isolated.states[k].bits[i]),0));trajectory.push(differences);const key=coupled.states.map(s=>Array.from(s.bits).join('')).join('|');if(seen.has(key))repeats++;seen.add(key);}return {config:structuredClone(config),ticks,trajectory,finalHamming:trajectory[ticks-1],observedBinaryRepeats:repeats,distinctBinaryOutputs:seen.size,final:coupled.snapshot(),note:'Binary output recurrence is not a complete register-state period. Divergence is evidence of coupling, not proof of emergence.'};}
