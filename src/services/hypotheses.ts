/** Observer metadata service. No execution imports, DOM, or implicit storage access. */
export type NoteStore={getItem(key:string):string|null;setItem(key:string,value:string):void};
export type Hypothesis={text:string;status:string;pattern:string;bits:string;source:string;config:Record<string,unknown>};
export const hypothesisStatuses=['Untested','Consistent with this experiment','Contradicted by this experiment','Inconclusive'] as const;
const key='atunbi.g9.notes';
function validate(value:unknown):asserts value is Hypothesis{
 if(!value||typeof value!=='object')throw Error('Invalid hypothesis record.');const n=value as Hypothesis;
 if(typeof n.text!=='string'||!n.text.trim()||n.text.length>240||!hypothesisStatuses.includes(n.status as typeof hypothesisStatuses[number]))throw Error('Invalid hypothesis text or status.');
 if(typeof n.pattern!=='string'||!n.pattern||typeof n.bits!=='string'||!/^[01]{1000}$/.test(n.bits)||typeof n.source!=='string'||!n.config||typeof n.config!=='object'||Array.isArray(n.config))throw Error('Hypothesis requires its pattern and experiment source.');
 if(JSON.stringify(n).length>100_000)throw Error('Hypothesis is too large.');
}
export class HypothesisNotebook{
 private records:Hypothesis[]=[];private unreadable=false;private original:string|null=null;private problem='';
 constructor(private store:NoteStore){try{this.original=store.getItem(key);if(this.original!==null){if(this.original.length>2_000_000)throw Error('Notebook exceeds 2 MB.');const parsed:unknown=JSON.parse(this.original);if(!Array.isArray(parsed)||parsed.length>100)throw Error('Invalid notebook collection.');parsed.forEach(validate);this.records=structuredClone(parsed);}}catch(error){this.unreadable=true;this.problem=(error as Error).message;}}
 get loadError(){return this.problem;}
 list(){return structuredClone(this.records);}
 recovery(){return {format:'atunbi.notebook-recovery.v1',original:this.original,sessionHypotheses:this.list(),error:this.problem};}
 add(value:Hypothesis):{persisted:boolean;error?:string}{validate(value);const next=[...this.records,structuredClone(value)].slice(-100);this.records=next;
  if(this.unreadable)return {persisted:false,error:'Stored notebook could not be read. Export recovery data before replacing it.'};
  try{const serialized=JSON.stringify(next);if(serialized.length>2_000_000)throw Error('Notebook exceeds 2 MB.');this.store.setItem(key,serialized);return {persisted:true};}catch(error){return {persisted:false,error:(error as Error).message};}
 }
}
