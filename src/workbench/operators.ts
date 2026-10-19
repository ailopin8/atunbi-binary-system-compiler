import {type Evaluator,GraphEngine} from './engine';
import {type Graph,type Value,bitMatrix} from './model';
const binary=(data:string):Value=>({type:'bits',data});
export function encodeNumber(value:number):string{return value.toString(2).padStart(8,'0').padEnd(1000,'0');}
export const evaluateOperator:Evaluator=(node,inputs,memory)=>{const bits=()=>String(inputs.value.data);let value:Value;switch(node.kind){
 case 'bits':value=binary(bitMatrix(node.params.value));break;
 case 'number':value={type:'number',data:Number(node.params.value)};break;
 case 'text':value={type:'text',data:String(node.params.value)};break;
 case 'not':value=binary([...bits()].map(b=>b==='1'?'0':'1').join(''));break;
 case 'and':case 'or':case 'xor':{const a=String(inputs.a.data),b=String(inputs.b.data);value=binary([...a].map((v,i)=>String(node.kind==='and'?Number(v)&Number(b[i]):node.kind==='or'?Number(v)|Number(b[i]):Number(v)^Number(b[i]))).join(''));break;}
 case 'shift':{const b=bits(),shift=((node.params.shift||0)%1000+1000)%1000;value=binary(b.slice(1000-shift)+b.slice(0,1000-shift));break;}
 case 'rule':{const b=bits(),rule=node.params.rule!;value=binary([...b].map((_,i)=>{const row=Math.floor(i/10)*10,x=i%10;return rule[Number(b[row+(x+9)%10])*4+Number(b[i])*2+Number(b[row+(x+1)%10])];}).join(''));break;}
 case 'counter':{const count=memory?.count??node.params.initial!;return {outputs:{value:binary(encodeNumber(count))},memory:{count:(count+node.params.step!)%256}};}
 case 'encode-number':value=binary(encodeNumber(Number(inputs.value.data)));break;
 case 'decode-number':value={type:'number',data:parseInt(bits().slice(0,8),2)};break;
 case 'encode-text':{const bytes=new TextEncoder().encode(String(inputs.value.data));if(bytes.length>124)throw Error('Text requires more than the 124 UTF-8 bytes available in one matrix.');value=binary((bytes.length.toString(2).padStart(8,'0')+[...bytes].map(b=>b.toString(2).padStart(8,'0')).join('')).padEnd(1000,'0'));break;}
 case 'decode-text':{const b=bits(),length=parseInt(b.slice(0,8),2);if(length>124||/1/.test(b.slice(8+length*8)))throw Error('Invalid text frame: byte count or zero padding is incorrect.');const bytes=Uint8Array.from({length},(_,i)=>parseInt(b.slice(8+i*8,16+i*8),2));try{value={type:'text',data:new TextDecoder('utf-8',{fatal:true,ignoreBOM:true}).decode(bytes)};}catch{throw Error('The matrix contains invalid UTF-8 text.');}break;}
 default:throw Error('Unsupported operation: '+node.kind);
}return {outputs:{value}};};
export const createEngine=(graph:Graph)=>new GraphEngine(graph,evaluateOperator);
export function verifyReplay(graph:Graph,ticks=8){if(!Number.isInteger(ticks)||ticks<1||ticks>32)throw Error('Verify between 1 and 32 ticks.');const a=createEngine(graph),b=createEngine(graph),frames=[];for(let i=0;i<ticks;i++){const x=a.step(),y=b.step();if(JSON.stringify(x)!==JSON.stringify(y))throw Error('Replay differs at tick '+(i+1));frames.push(x);}return frames;}
