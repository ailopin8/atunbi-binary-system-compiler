/** Pure G8 compiler and execution kernel. No DOM, timers or persistence. */
export type MatrixID = 'A' | 'B';
export type Instruction = { word: number; line: number };
export type SourceUnit = { id: number; name: MatrixID; code: Instruction[] };
export type Program = { source: string; units: SourceUnit[] };
export type State = { id: number; name: MatrixID; bits: Uint8Array; rule: number; destination: number; limit: number; receive: { from: number; gate: number }[]; flips: number; packets: number };
export type Packet = { tick: number; word: number };
export const addr = (x:number,y:number,z:number) => x + 10*y + 100*z;
export const binary = (n:number,len:number) => (n>>>0).toString(2).padStart(len,'0');
export const examples:Record<string,string> = {
  feedback: ['MATRIX A RULE 01011010','MATRIX B RULE 00011110','A BIT (4,4,4) = 1','B BIT (5,5,5) = 1','A RECEIVE FROM B USING XOR','B RECEIVE FROM A USING XOR','A SEND TO B LIMIT 32','B SEND TO A LIMIT 32'].join('\n'),
  oneway: ['MATRIX A RULE 01011010','MATRIX B RULE 00000000','A BIT (4,4,4) = 1','A BIT (5,4,4) = 1','B RECEIVE FROM A USING OR','A SEND TO B LIMIT 48'].join('\n'),
  isolated: ['MATRIX A RULE 00011110','MATRIX B RULE 01101110','A BIT (4,4,4) = 1','B BIT (4,4,4) = 1'].join('\n')
};
export function enc(op:number,address=0,arg=0,flags=0):number {
  if (![op,address,arg,flags].every(Number.isInteger) || op<0||op>15||address<0||address>=1000||arg<0||arg>255||flags<0||flags>3) throw Error('Invalid 24-bit instruction');
  return ((op<<20)|(address<<10)|(arg<<2)|flags)>>>0;
}
export function dec(w:number){return {op:(w>>>20)&15,address:(w>>>10)&1023,arg:(w>>>2)&255,flags:w&3};}
export function pack(src:number,dst:number,address:number,kind:number,data:number):number {
  if(![src,dst,address,kind,data].every(Number.isInteger)||src<0||src>15||dst<0||dst>15||kind<0||kind>15||address<0||address>=1000||data<0||data>1)throw Error('Packet bounds');
  return ((src<<28)|(dst<<24)|(address<<14)|(kind<<10)|(data<<2))>>>0;
}
export function unpack(w:number){return {src:(w>>>28)&15,dst:(w>>>24)&15,address:(w>>>14)&1023,kind:(w>>>10)&15,data:(w>>>2)&255,flags:w&3};}
export function compile(text:string):Program {
  const lines=text.split(/\r?\n/).map((text,i)=>({line:i+1,text:text.trim().toUpperCase()})).filter(r=>r.text&&!r.text.startsWith('#'));
  const units:SourceUnit[]=[];const errors:string[]=[];
  for(const row of lines){
    if(!row.text.startsWith('MATRIX '))continue;
    const match=row.text.match(/^MATRIX ([AB]) RULE ([01]{8})$/);
    if(!match){errors.push('Line '+row.line+': expected MATRIX A RULE 01011010');continue;}
    if(units.some(u=>u.name===match[1])){errors.push('Line '+row.line+': duplicate definition');continue;}
    units.push({id:match[1]==='A'?1:2,name:match[1] as MatrixID,code:[{word:enc(2,0,parseInt(match[2],2)),line:row.line}]});
  }
  if(!units.length)errors.push('Declare a matrix and its 8-bit rule.');
  for(const row of lines){
    if(row.text.startsWith('MATRIX '))continue;
    const m=row.text.match(/^([AB]) (.*)$/);
    if(!m){errors.push('Line '+row.line+': expected A or B');continue;}
    const unit=units.find(u=>u.name===m[1]);
    if(!unit){errors.push('Line '+row.line+': undeclared matrix');continue;}
    let g:RegExpMatchArray|null;const stmt=m[2];
    const add=(op:number,a=0,arg=0,flag=0)=>unit.code.push({word:enc(op,a,arg,flag),line:row.line});
    if((g=stmt.match(/^BIT \((\d+),(\d+),(\d+)\) = ([01])$/))){
      const [x,y,z]=[Number(g[1]),Number(g[2]),Number(g[3])];
      if(x>9||y>9||z>9)errors.push('Line '+row.line+': coordinate must be 0..9');
      else add(1,addr(x,y,z),Number(g[4]));
    }else if((g=stmt.match(/^SEND TO ([AB]) LIMIT (\d+)$/))){
      const other=units.find(u=>u.name===g![1]),limit=Number(g[2]);
      if(!other||other.id===unit.id)errors.push('Line '+row.line+': invalid destination');
      else if(limit<1||limit>255)errors.push('Line '+row.line+': limit must be 1..255');
      else{add(3,0,other.id);add(4,0,limit);}
    }else if((g=stmt.match(/^RECEIVE FROM ([AB]) USING (XOR|OR|AND)$/))){
      const other=units.find(u=>u.name===g![1]);
      if(!other||other.id===unit.id)errors.push('Line '+row.line+': invalid source');
      else add(5,0,other.id,['XOR','OR','AND'].indexOf(g[2]));
    }else if((g=stmt.match(/^NOT AT \((\d+),(\d+),(\d+)\)$/))){
      const [x,y,z]=[Number(g[1]),Number(g[2]),Number(g[3])];
      if(x>9||y>9||z>9)errors.push('Line '+row.line+': coordinate must be 0..9');
      else add(6,addr(x,y,z));
    }else errors.push('Line '+row.line+': unsupported statement');
    if(unit.code.length>64)errors.push('Line '+row.line+': 64-instruction limit');
  }
  if(errors.length)throw Error(errors.join('\n'));
  return {source:text,units};
}
export class VM{
  states:State[];tick=0;queue:number[]=[];trace:Packet[]=[];sent=0;
  constructor(public program:Program,receiveEnabled=true){
    this.states=program.units.map(u=>{
      const s:State={id:u.id,name:u.name,bits:new Uint8Array(1000),rule:0,destination:0,limit:16,receive:[],flips:0,packets:0};
      for(const w of u.code){const d=dec(w.word);
        if(d.op===1)s.bits[d.address]=d.arg&1;
        if(d.op===2)s.rule=d.arg;
        if(d.op===3)s.destination=d.arg;
        if(d.op===4)s.limit=d.arg;
        if(d.op===5&&receiveEnabled)s.receive.push({from:d.arg,gate:d.flags});
      }
      return s;
    });
  }
  step(){
    this.tick++;const delivered=this.queue;this.queue=[];
    const outputs=this.states.map(s=>{
      const next=new Uint8Array(1000);
      for(let z=0;z<10;z++)for(let y=0;y<10;y++)for(let x=0;x<10;x++){
        const old=s.bits;
        const triple=(old[addr((x+9)%10,y,z)]<<2)|(old[addr(x,y,z)]<<1)|old[addr((x+1)%10,y,z)];
        next[addr(x,y,z)]=(s.rule>>>triple)&1;
      }
      for(const word of delivered){const p=unpack(word);
        if(p.dst!==s.id||p.kind!==1||p.data>1||p.address>=1000)continue;
        const rx=s.receive.find(r=>r.from===p.src);
        if(!rx)continue;
        const bit=next[p.address];
        next[p.address]=rx.gate===0 ? bit^p.data : rx.gate===1 ? bit|p.data : bit&p.data;
        s.packets++;
      }
      const program=this.program.units.find(u=>u.id===s.id)!;
      for(const w of program.code){const d=dec(w.word);if(d.op===6)next[d.address]^=1;}
      return {state:s,next};
    });
    for(const {state,next} of outputs){
      let emitted=0;state.flips=0;
      for(let i=0;i<1000;i++){
        if(next[i]===state.bits[i])continue;
        state.flips++;
        if(state.destination&&emitted<state.limit){
          const word=pack(state.id,state.destination,i,1,next[i]);
          this.queue.push(word);this.trace.push({tick:this.tick,word});this.sent++;emitted++;
        }
      }
    }
    for(const {state,next} of outputs)state.bits=next;
    if(this.trace.length>500)this.trace.splice(0,this.trace.length-500);
  }
  run(count:number){for(let i=0;i<count;i++)this.step();}
}
export function experiment(program:Program){
  const a=new VM(program,true),b=new VM(program,false);a.run(24);b.run(24);
  return a.states.map(s=>{const t=b.states.find(v=>v.id===s.id)!;let delta=0;
    for(let i=0;i<1000;i++)delta+=s.bits[i]^t.bits[i];
    return {matrix:s.name,differentBits:delta,hamming:delta/1000};
  });
}
export function check(){
  for(const n of [0,1,421,999])if(dec(enc(1,n,1)).address!==n||unpack(pack(1,2,n,1,1)).address!==n)throw Error('Binary roundtrip');
  const p=compile(examples.feedback),v=new VM(p);v.run(5);
  if(!v.sent||v.states.some(s=>s.bits.some(bit=>bit!==0&&bit!==1)))throw Error('State bit invariant');
  try{compile('MATRIX A RULE 01011010\nA BIT (10,0,0) = 1');}
  catch{return 'PASS · binary encoding, bounds, packet exchange, 0/1-only state';}
  throw Error('Invalid address accepted');
}
