import {validateRule} from '../algorithms/library';
import {evolveExpanded,seedExpanded,expandedMetadata,validateRegisters} from '../algorithms/g6-library';
import type {ExpandedAlgorithm,Registers} from '../algorithms/g6-library';
import type {CustomRule} from '../algorithms/library';
export const N = 10;
export const CELLS = N ** 3;
export const MAX_NODES = 6;
export const MAX_LAYERS = 4;
export type Algorithm = 'empty' | 'diffusion' | 'oscillator' | 'growth' | 'automaton' | ExpandedAlgorithm;
export type Mode = 'excite' | 'inhibit';
export type ActiveAlgorithm = Exclude<Algorithm, 'empty'>;
export interface Layer {
  id: number;
  algorithm: ActiveAlgorithm;
  state: Float32Array;
  influence: number;
  registers?:Registers;
  definition?:CustomRule;
  parameter?:number;
}
export interface InnerLink {
  id: number;
  from: number;
  to: number;
  strength: number;
  mode: Mode;
  enabled: boolean;
}
export interface Sandbox {
  id: number;
  algorithm: Algorithm;
  x: number;
  y: number;
  state: Float32Array;
  influence: number;
  layers: Layer[];
  innerLinks: InnerLink[];
  outputLayerId: number | null;
}
export interface Relation {
  id: number;
  from: number;
  to: number;
  targetLayerId: number;
  mode: Mode;
  strength: number;
  enabled: boolean;
}
export const legacy=(id:Algorithm)=>['empty','diffusion','oscillator','growth','automaton'].includes(id);
export const zero = new Float32Array(CELLS);
export const at = (x: number, y: number, z: number) => x + N * (y + N * z);
export const clamp = (x: number) => Math.min(1, Math.max(0, x));
export const logistic = (x: number) => 1 / (1 + Math.exp(-x));
export const noise = (x: number, y: number, z: number, seed: number) => {
  const p = Math.sin((x + 1) * 127.1 + (y + 1) * 311.7 + (z + 1) * 74.7 + seed * 13.79) * 43758.5453;
  return p - Math.floor(p);
};
export function seed(algorithm: Algorithm, id: number, definition?:CustomRule): Float32Array {
  const data = new Float32Array(CELLS);
  if (algorithm === 'empty') return data;
  if(!legacy(algorithm))return seedExpanded(algorithm as ExpandedAlgorithm,id,definition);
  for (let z = 0; z < N; z++) for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const r = (x - 4.5) ** 2 + (y - 4.5) ** 2 + (z - 4.5) ** 2;
    const random = noise(x, y, z, id);
    const i = at(x, y, z);
    if (algorithm === 'diffusion') data[i] = clamp(0.92 * Math.exp(-r / 9) + random * 0.055);
    if (algorithm === 'oscillator') data[i] = clamp(0.22 + 0.26 * Math.sin(x * 0.7 + y * 0.4) * Math.cos(z * 0.75));
    if (algorithm === 'growth') data[i] = clamp(0.93 * Math.exp(-r / 7) + random * 0.07);
    if (algorithm === 'automaton') data[i] = clamp(0.65 * Math.exp(-r / 13) + random * 0.18);
  }
  return data;
}
export function neighbours(f: Float32Array, x: number, y: number, z: number): number {
  let total = 0;
  let count = 0;
  for (const [dx, dy, dz] of [[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]) {
    const xx=x+dx, yy=y+dy, zz=z+dz;
    if (xx>=0 && yy>=0 && zz>=0 && xx<N && yy<N && zz<N) {
      total += f[at(xx,yy,zz)];
      count++;
    }
  }
  return total / count;
}
export function mean(f: Float32Array): number {
  let sum = 0;
  for (let i=0; i<CELLS; i++) sum += f[i];
  return sum / CELLS;
}
export function evolve(node: Layer, input: Float32Array, currentTick: number): Float32Array {
  const next = new Float32Array(CELLS);
  const f = node.state;
  for (let z=0; z<N; z++) for (let y=0; y<N; y++) for (let x=0; x<N; x++) {
    const i = at(x,y,z);
    const p = f[i];
    const u = input[i];
    const nb = neighbours(f,x,y,z);
    const phase = currentTick * 0.11;
    if (node.algorithm === 'diffusion') {
      const sourceD = (x - (4.5 + 2.3 * Math.sin(phase))) ** 2 + (y - (4.5 + 2.2 * Math.cos(phase * 0.83))) ** 2 + (z - 4.5) ** 2;
      const source = 0.09 * Math.exp(-sourceD / 3.5);
      next[i] = clamp(p + 0.31 * (nb - p) + source - 0.018 * p + 0.24 * u);
    } else if (node.algorithm === 'oscillator') {
      const wave = 0.5 + 0.37 * Math.sin(x * 0.55 + z * 0.82 - phase * 2.2) * Math.cos(y * 0.45 + phase);
      next[i] = clamp(0.73 * p + 0.27 * wave + 0.21 * u);
    } else if (node.algorithm === 'growth') {
      next[i] = clamp(p + 0.18 * (nb - p) + 0.055 * p * (1 - p) - 0.006 + 0.27 * u);
    } else {
      const texture = 0.058 * Math.sin(x * 1.41 + z * 0.76) * Math.cos(y * 0.87);
      next[i] = clamp(0.77 * p + 0.23 * logistic(9 * (0.5 * p + 0.5 * nb + texture - 0.36 + 0.8 * u)));
    }
  }
  return next;
}
export function transitionG6(layer:Layer,input:Float32Array,time:number){return legacy(layer.algorithm)?{state:evolve(layer,input,time),registers:layer.registers}:evolveExpanded(layer as Layer & {algorithm:ExpandedAlgorithm},input);}
export function syncSandbox(n: Sandbox): void {
  const chosen = n.layers.find(layer => layer.id === n.outputLayerId) || n.layers[0];
  n.outputLayerId = chosen?.id ?? null;
  n.algorithm = chosen?.algorithm ?? 'empty';
  n.state = chosen?.state ?? zero;
  n.influence = chosen?.influence ?? 0;
}
export class G6Workspace {
 restore(parsed:unknown){
    if (!parsed || typeof parsed !== 'object') throw new Error('Invalid network.');
    const record = parsed as {
      format?: string; sandboxes?: unknown; relationships?: unknown; tick?: number
    };
    if (!['atunbi.node-network.v2', 'atunbi.node-network.v3'].includes(record.format ?? '') ||
        !Array.isArray(record.sandboxes) || !Array.isArray(record.relationships)) {
      throw new Error('Expected an ÀTÚNBÍ v2 or v3 network.');
    }
    if (record.sandboxes.length > MAX_NODES || record.relationships.length > 48) {
      throw new Error('Too many environments or relationships.');
    }
    const isActive = (value: unknown): value is ActiveAlgorithm =>
      typeof value === 'string' && value !== 'empty' &&
      (legacy(value as Algorithm)||expandedMetadata().some(entry=>entry.id===value)||this.customRules.some(rule=>rule.id===value));
    const validateState = (value: unknown): Float32Array => {
      if (!Array.isArray(value) || value.length !== CELLS ||
          !value.every(v => typeof v === 'number' && Number.isFinite(v) && v >= 0 && v <= 1)) {
        throw new Error('A pattern must contain exactly 1,000 finite values in [0,1].');
      }
      return Float32Array.from(value);
    };
    const incoming: Sandbox[] = record.sandboxes.map((item: unknown) => {
      if (!item || typeof item !== 'object') throw new Error('Malformed environment.');
      const n = item as {
        id:number; algorithm?:Algorithm; state?:unknown;
        position?:{x:number;y:number}; outputLayerId?:number|null;
        layers?:unknown; innerLinks?:unknown
      };
      if (!Number.isSafeInteger(n.id) || n.id < 1) throw new Error('Invalid environment identifier.');
      const obj: Sandbox = {
        id:n.id, algorithm:'empty', state:zero, influence:0,
        x:Math.max(0, Math.min(836, Number(n.position?.x) || 58)),
        y:Math.max(0, Math.min(375, Number(n.position?.y) || 65)),
        layers:[], innerLinks:[], outputLayerId:null
      };
      if (record.format === 'atunbi.node-network.v2') {
        if (isActive(n.algorithm)&&legacy(n.algorithm)) obj.layers.push({
          id:1, algorithm:n.algorithm, state:validateState(n.state), influence:0
        });
        else if (n.algorithm !== 'empty') throw new Error('Invalid algorithm.');
        obj.outputLayerId=obj.layers[0]?.id ?? null;
      } else {
        if (!Array.isArray(n.layers) || n.layers.length > MAX_LAYERS) {
          throw new Error('Too many algorithms or invalid algorithm layers.');
        }
        obj.layers=n.layers.map((item:unknown) => {
          if (!item || typeof item !== 'object') throw new Error('Invalid algorithm layer.');
          const layer=item as {id:number;algorithm:unknown;state:unknown;registers?:unknown;definition?:CustomRule;parameter?:number};
          if(layer.definition){validateRule(layer.definition);if(layer.algorithm!==layer.definition.id)throw Error('Embedded rule does not match the algorithm.');}
          if (!Number.isSafeInteger(layer.id) || layer.id < 1 || !(isActive(layer.algorithm)||(typeof layer.algorithm==='string'&&layer.definition?.id===layer.algorithm))) {
            throw new Error('Invalid algorithm type or layer ID.');
          }
          if(typeof layer.algorithm==='string'&&layer.algorithm.startsWith('custom-')&&layer.definition?.id!==layer.algorithm)throw Error('Missing embedded custom definition.');if(layer.parameter!==undefined&&(!Number.isFinite(layer.parameter)||layer.parameter<0||layer.parameter>4))throw Error('Invalid algorithm parameter.');return {id:layer.id,algorithm:layer.algorithm as ActiveAlgorithm,state:validateState(layer.state),influence:0,registers:validateRegisters(layer.registers),definition:layer.definition?structuredClone(layer.definition):undefined,parameter:layer.parameter};
        });
        if (new Set(obj.layers.map(l => l.id)).size !== obj.layers.length) {
          throw new Error('Duplicate algorithm IDs.');
        }
        if (n.outputLayerId != null && !obj.layers.some(l => l.id === n.outputLayerId)) {
          throw new Error('Exported pattern output is missing.');
        }
        obj.outputLayerId=n.outputLayerId ?? obj.layers[0]?.id ?? null;
        if (!Array.isArray(n.innerLinks) || n.innerLinks.length > 16) {
          throw new Error('Invalid internal relationship list.');
        }
        obj.innerLinks=n.innerLinks.map((item:unknown) => {
          const e=item as InnerLink;
          if (!e || !Number.isSafeInteger(e.id) || e.id < 1 ||
              !obj.layers.some(l => l.id === e.from) ||
              !obj.layers.some(l => l.id === e.to) || e.from === e.to ||
              (e.mode !== 'excite' && e.mode !== 'inhibit') ||
              !Number.isFinite(e.strength) || e.strength < 0 || e.strength > 1 ||
              typeof e.enabled !== 'boolean') throw new Error('Invalid internal connection.');
          return {id:e.id,from:e.from,to:e.to,strength:e.strength,mode:e.mode,enabled:e.enabled};
        });
        if (new Set(obj.innerLinks.map(e => e.from + ':' + e.to)).size !== obj.innerLinks.length ||
            new Set(obj.innerLinks.map(e => e.id)).size !== obj.innerLinks.length) {
          throw new Error('Duplicate internal connections.');
        }
      }
      syncSandbox(obj);
      return obj;
    });
    if (new Set(incoming.map(n => n.id)).size !== incoming.length) {
      throw new Error('Duplicate environment IDs.');
    }
    const outgoing: Relation[] = record.relationships.map((item:unknown) => {
      if (!item || typeof item !== 'object') throw new Error('Invalid relationship.');
      const e=item as Relation;
      const target=incoming.find(n => n.id === e.to);
      const source=incoming.find(n => n.id === e.from);
      const layerId=record.format === 'atunbi.node-network.v2' ? target?.outputLayerId : e.targetLayerId;
      if (!Number.isSafeInteger(e.id) || e.id < 1 || !target || !source ||
          source.id === target.id || !source.layers.length ||
          !target.layers.some(l => l.id === layerId) ||
          !Number.isFinite(e.strength) || e.strength < 0 || e.strength > 1 ||
          (e.mode !== 'excite' && e.mode !== 'inhibit') ||
          typeof e.enabled !== 'boolean') throw new Error('Invalid external relationship.');
      return {id:e.id,from:e.from,to:e.to,targetLayerId:layerId!,mode:e.mode,
        strength:e.strength,enabled:e.enabled};
    });
    if (new Set(outgoing.map(e => e.from + ':' + e.to)).size !== outgoing.length ||
        new Set(outgoing.map(e => e.id)).size !== outgoing.length) {
      throw new Error('Duplicate external relationships.');
    }
    this.nodes=incoming; this.edges=outgoing;
    this.tick=Number.isSafeInteger(record.tick) && record.tick! >= 0 && record.tick! < 10_000_000 ? record.tick! : 0;
    this.nextNodeId=Math.max(0,...this.nodes.map(n=>n.id))+1;
    this.nextEdgeId=Math.max(0,...this.edges.map(e=>e.id))+1;
 }
 snapshot(clockHz=7){
  return structuredClone({
    format: 'atunbi.node-network.v3',
    architecture: 'Empty spatial environments host independently evolving algorithms. Pattern ports and typed transformations form inner and outer graphs.',
    spatialDomain: [N, N, N], tick: this.tick, clockHz,
    sandboxes: this.nodes.map(n => ({
      id: n.id, position: { x: n.x, y: n.y },
      outputLayerId: n.outputLayerId,
      layers: n.layers.map(l => ({
        id: l.id, algorithm: l.algorithm, state: Array.from(l.state), registers:l.registers?{u:Array.from(l.registers.u),phase:Array.from(l.registers.phase)}:undefined,definition:l.definition,parameter:l.parameter,
        lastTickInfluenceRMS: l.influence
      })),
      innerLinks: n.innerLinks
    })),
    relationships: this.edges.map(e => ({
      ...e, sourcePort: 'selected_pattern_field',
      targetPort: 'specific_algorithm_input', mapping: 'identity_xyz'
    }))
  });
 }

 nodes:Sandbox[]=[]; edges:Relation[]=[]; tick=0; nextNodeId=1; nextEdgeId=1; customRules:CustomRule[]=[];
 definitionFor(id:Algorithm){return this.customRules.find(r=>r.id===id)||this.nodes.flatMap(n=>n.layers).find(l=>l.algorithm===id)?.definition;}
 seed(algorithm:Algorithm,id:number){return seed(algorithm,id,this.definitionFor(algorithm));}
 addLayer(n:Sandbox,algorithm:ActiveAlgorithm){
  if(!this.nodes.includes(n))throw Error('Environment is not owned by this workspace.');
  if(n.layers.length>=MAX_LAYERS)throw Error('Each environment supports up to four algorithms in this prototype.');
  const id=Math.max(0,...n.layers.map(l=>l.id))+1,definition=this.definitionFor(algorithm);
  const layer:Layer={id,algorithm,state:this.seed(algorithm,n.id*17+id),influence:0,definition:definition?structuredClone(definition):undefined};
  n.layers.push(layer);if(n.outputLayerId===null)n.outputLayerId=id;syncSandbox(n);return layer;
 }
 addSandbox(algorithm:Algorithm='empty'){
  if(this.nodes.length>=MAX_NODES)throw Error('The prototype supports up to six environments.');
  const id=this.nextNodeId++,count=this.nodes.length;
  const n:Sandbox={id,algorithm:'empty',x:58+(count%3)*295,y:65+Math.floor(count/3)*260,state:new Float32Array(CELLS),influence:0,layers:[],innerLinks:[],outputLayerId:null};
  this.nodes.push(n);try{if(algorithm!=='empty')this.addLayer(n,algorithm);}catch(error){this.nodes.pop();this.nextNodeId--;throw error;}return n;
 }
 reset(){this.tick=0;for(const n of this.nodes){for(const l of n.layers){l.state=seed(l.algorithm,n.id*17+l.id,l.definition);l.influence=0;l.registers=undefined;}syncSandbox(n);}}
 step(): void {
  if (!this.nodes.some(n => n.layers.length)) return;
  // All inputs are calculated from the previous tick. No algorithm sees a
  // partially updated pattern from another layer or sandbox.
  const updates = this.nodes.map(n => ({
    id: n.id,
    layers: n.layers.map(layer => {
      const input = new Float32Array(CELLS);
      for (const edge of n.innerLinks) {
        if (!edge.enabled || edge.to !== layer.id) continue;
        const source = n.layers.find(l => l.id === edge.from);
        if (!source) continue;
        const factor = edge.strength * (edge.mode === 'excite' ? 1 : -1);
        for (let i = 0; i < CELLS; i++) input[i] += factor * source.state[i];
      }
      for (const edge of this.edges) {
        if (!edge.enabled || edge.to !== n.id || edge.targetLayerId !== layer.id) continue;
        const sourceSandbox = this.nodes.find(other => other.id === edge.from);
        if (!sourceSandbox || !sourceSandbox.layers.length) continue;
        const factor = edge.strength * (edge.mode === 'excite' ? 1 : -1);
        for (let i = 0; i < CELLS; i++) input[i] += factor * sourceSandbox.state[i];
      }
      const result = transitionG6(layer, input, this.tick);const next=result.state;
      const uncoupled = transitionG6(layer, zero, this.tick).state;
      let error = 0;
      for (let i = 0; i < CELLS; i++) error += (next[i] - uncoupled[i]) ** 2;
      return { id: layer.id, state: next, registers:result.registers, influence: Math.sqrt(error / CELLS) };
    })
  }));
  for (const update of updates) {
    const n = this.nodes.find(node => node.id === update.id);
    if (!n) continue;
    for (const result of update.layers) {
      const layer = n.layers.find(l => l.id === result.id);
      if (!layer) continue;
      layer.state = result.state;layer.registers=result.registers;
      layer.influence = result.influence;
    }
    syncSandbox(n);
  }
  this.tick++;

}

}
