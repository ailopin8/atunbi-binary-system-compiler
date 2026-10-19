/** Pure G7 compiler and execution kernel. No DOM, timers or persistence. */
export type Opcode = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type Word = { word: number; line: number; label: string };
export type UnitSpec = {
  id: number; name: string; position: [number, number, number];
  energy: number; bias: number; purpose: string; code: Word[];
};
export type Program = { units: UnitSpec[]; source: string; warnings: string[] };
export type Packet = { tick: number; word: number; from: number; to: number };
export type UnitState = UnitSpec & {
  at: [number, number, number]; e: number; b: number;
  model: number; error: number; last: number; phase: number;
  oscillator: number; gain: number; target: number;
  inbox: number[]; path: number[][]; received: number;
};
export const MAX_CODE = 32;
export const DICTIONARY: Record<number, string> = {
  1:'RECEIVE', 2:'MOVE', 3:'SEND', 4:'OSCILLATE', 5:'ADAPT',
  6:'RESTORE', 7:'TARGET', 8:'SEEK', 9:'OBSERVE', 10:'OUTPUT_GAIN'
};
export const PRESETS = {
  feedback: [
    'SYSTEM A AT (1,3,1) ENERGY 180 BIAS 0.20 PURPOSE "Generate an adaptive pulse"',
    'SYSTEM B AT (8,5,8) ENERGY 120 BIAS -0.20 PURPOSE "Predict incoming signals"',
    'A RECEIVES FROM B WITH GAIN 0.75',
    'A MOVES ALONG X AUTOMATICALLY',
    'A OSCILLATES AT RATE 0.36',
    'A ADAPTS MODEL AT RATE 0.20',
    'A RESTORES ENERGY TO 160',
    'A SENDS TYPE 1 TO B',
    'B RECEIVES FROM A WITH GAIN 0.90',
    'B MOVES ALONG Z AUTOMATICALLY',
    'B OSCILLATES AT RATE 0.21',
    'B ADAPTS MODEL AT RATE 0.35',
    'B RESTORES ENERGY TO 128',
    'B SENDS TYPE 3 TO A'
  ].join('\n'),
  seek: [
    'SYSTEM A AT (1,1,1) ENERGY 220 BIAS 0.10 PURPOSE "Seek a spatial target"',
    'SYSTEM B AT (8,8,8) ENERGY 100 BIAS -0.10 PURPOSE "Regulate received input"',
    'A OSCILLATES AT RATE 0.45',
    'A SEEKS CELL (7,7,7)',
    'A SETS OUTPUT GAIN TO 1.80',
    'A SENDS TYPE 1 TO B',
    'B RECEIVES FROM A WITH GAIN 1.25',
    'B ADAPTS MODEL AT RATE 0.60',
    'B RESTORES ENERGY TO 128 WITH STRENGTH FAST',
    'B OBSERVES CELL (8,8,8)',
    'B SENDS TYPE 2 TO A',
    'A RECEIVES FROM B WITH GAIN 0.50'
  ].join('\n')
};
export const bound = (v: number, l: number, h: number) => Math.max(l, Math.min(h, v));
export const bits = (n: number, width: number) => (n >>> 0).toString(2).padStart(width, '0');
export const cell = (p: number[]) => 100 * p[2] + 10 * p[1] + p[0];
export const coords = (n: number): [number,number,number] => [n % 10, Math.floor(n / 10) % 10, Math.floor(n / 100)];
export const num = (s: string) => Number(s);
export const q = (v: number, scale: number) => bound(Math.round(v * scale), 0, 255);
export const nameId = (s: string) => ({ A:1, B:2 } as Record<string, number>)[s] || 0;
export function encode(op: number, addr = 0, arg = 0, flags = 0): number {
  if (![op,addr,arg,flags].every(Number.isInteger) ||
    op < 0 || op > 15 || addr < 0 || addr >= 1000 ||
    arg < 0 || arg > 255 || flags < 0 || flags > 3) {
    throw Error('Invalid 24-bit instruction field');
  }
  return ((op << 20) | (addr << 10) | (arg << 2) | flags) >>> 0;
}
export function decode(w: number) {
  return { op: (w >>> 20) & 15, address: (w >>> 10) & 1023,
    arg: (w >>> 2) & 255, flags: w & 3 };
}
export function pack(src: number, dst: number, addr: number, kind: number, data: number, flags: number) {
  if (![src,dst,addr,kind,data,flags].every(Number.isInteger) ||
    src < 0 || src > 15 || dst < 0 || dst > 15 || addr < 0 || addr >= 1000 ||
    kind < 0 || kind > 15 || data < 0 || data > 255 || flags < 0 || flags > 3) {
    throw Error('Invalid 32-bit packet field');
  }
  return ((src << 28) | (dst << 24) | (addr << 14) |
    (kind << 10) | (data << 2) | flags) >>> 0;
}
export function unpack(w: number) {
  return { src: (w >>> 28) & 15, dst: (w >>> 24) & 15,
    address: (w >>> 14) & 1023, kind: (w >>> 10) & 15,
    data: (w >>> 2) & 255, flags: w & 3 };
}
export function parseSource(source: string): Program {
  const units: UnitSpec[] = [];
  const errors: string[] = [];
  const warnings: string[] = [];
  const statements: { no:number; text:string }[] = [];
  for (const [i, raw] of source.split(/\r?\n/).entries()) {
    const text = raw.trim();
    if (!text || text.startsWith('#')) continue;
    statements.push({ no:i + 1, text });
  }
  for (const entry of statements) {
    if (!entry.text.toUpperCase().startsWith('SYSTEM ')) continue;
    const m = entry.text.match(/^SYSTEM ([AB]) AT \((\d+),(\d+),(\d+)\) ENERGY (\d+) BIAS (-?\d+(?:\.\d+)?) PURPOSE "([^"]{1,120})"$/i);
    if (!m) { errors.push('Line ' + entry.no + ': invalid SYSTEM declaration'); continue; }
    const name = m[1].toUpperCase();
    const p = [num(m[2]),num(m[3]),num(m[4])] as [number,number,number];
    const energy = num(m[5]);
    const bias = num(m[6]);
    if (units.some(u => u.name === name) || p.some(v => v < 0 || v > 9) ||
      energy > 255 || !Number.isFinite(bias) || Math.abs(bias) > 1) {
      errors.push('Line ' + entry.no + ': duplicate or out-of-range system declaration');
      continue;
    }
    units.push({ id:nameId(name), name, position:p, energy, bias, purpose:m[7], code:[] });
  }
  if (!units.length) errors.push('Declare at least one SYSTEM before compiling.');
  if (units.length > 2) errors.push('G7 currently supports at most two sandbox processors.');
  for (const entry of statements) {
    if (entry.text.toUpperCase().startsWith('SYSTEM ')) continue;
    const match = entry.text.match(/^([AB]) (.*)$/i);
    if (!match) { errors.push('Line ' + entry.no + ': expected A or B at start'); continue; }
    const who = units.find(u => u.name === match[1].toUpperCase());
    if (!who) { errors.push('Line ' + entry.no + ': undeclared system ' + match[1].toUpperCase()); continue; }
    const t = match[2].toUpperCase();
    let m: RegExpMatchArray | null;
    const add = (op: Opcode, addr: number, arg: number, flags: number, label: string) => {
      who.code.push({ word:encode(op,addr,arg,flags), line:entry.no, label });
    };
    if ((m = t.match(/^RECEIVES FROM ([AB]) WITH GAIN (\d+(?:\.\d+)?)$/))) {
      const gain = num(m[2]);
      if (gain > 1.992) errors.push('Line ' + entry.no + ': gain must be between 0 and 1.992');
      else if (!units.some(u => u.name === m![1])) errors.push('Line ' + entry.no + ': source is not declared');
      else add(1,0,q(gain,128),nameId(m[1]),'RECEIVE from ' + m[1]);
    } else if ((m = t.match(/^MOVES ALONG ([XYZ]) (AUTOMATICALLY|POSITIVE|NEGATIVE)$/))) {
      add(2,0,'XYZ'.indexOf(m[1]),({ AUTOMATICALLY:0,POSITIVE:1,NEGATIVE:2 } as Record<string,number>)[m[2]],'MOVE ' + m[1]);
    } else if ((m = t.match(/^OSCILLATES AT RATE (\d+(?:\.\d+)?)$/))) {
      const rate = num(m[1]);
      if (rate > 2.55) errors.push('Line ' + entry.no + ': frequency cannot exceed 2.55 rad/tick');
      else add(4,0,q(rate,100),0,'OSCILLATE');
    } else if ((m = t.match(/^ADAPTS MODEL AT RATE (\d+(?:\.\d+)?)$/))) {
      const rate = num(m[1]);
      if (rate > 1) errors.push('Line ' + entry.no + ': learning rate cannot exceed 1');
      else add(5,0,q(rate,255),0,'ADAPT MODEL');
    } else if ((m = t.match(/^RESTORES ENERGY TO (\d+)(?: WITH STRENGTH (SLOW|MEDIUM|FAST))?$/))) {
      const target = num(m[1]);
      if (target > 255) errors.push('Line ' + entry.no + ': energy target cannot exceed 255');
      else add(6,0,target,({ SLOW:1,MEDIUM:2,FAST:3 } as Record<string,number>)[m[2] || 'MEDIUM'],'RESTORE ENERGY');
    } else if ((m = t.match(/^SENDS TYPE (\d+) TO ([AB])$/))) {
      const kind = num(m[1]);
      if (kind > 15 || kind < 1) errors.push('Line ' + entry.no + ': message type must be 1..15');
      else if (!units.some(u => u.name === m![2])) errors.push('Line ' + entry.no + ': destination is not declared');
      else {
        add(7,0,nameId(m[2]),0,'TARGET ' + m[2]);
        add(3,0,kind,0,'SEND TYPE ' + kind);
      }
    } else if ((m = t.match(/^SEEKS CELL \((\d+),(\d+),(\d+)\)$/))) {
      const xyz = [num(m[1]),num(m[2]),num(m[3])];
      if (xyz.some(v => v > 9)) errors.push('Line ' + entry.no + ': address must fit the 10×10×10 space');
      else add(8,cell(xyz),1,0,'SEEK CELL');
    } else if ((m = t.match(/^OBSERVES CELL \((\d+),(\d+),(\d+)\)$/))) {
      const xyz = [num(m[1]),num(m[2]),num(m[3])];
      if (xyz.some(v => v > 9)) errors.push('Line ' + entry.no + ': address must fit the 10×10×10 space');
      else add(9,cell(xyz),0,0,'OBSERVE CELL');
    } else if ((m = t.match(/^SETS OUTPUT GAIN TO (\d+(?:\.\d+)?)$/))) {
      const gain = num(m[1]);
      if (gain > 1.992) errors.push('Line ' + entry.no + ': output gain must not exceed 1.992');
      else add(10,0,q(gain,128),0,'OUTPUT GAIN');
    } else {
      errors.push('Line ' + entry.no + ': unsupported sentence. Use the documented grammar.');
    }
    if (who.code.length > MAX_CODE) errors.push('System ' + who.name + ' exceeds 32 machine instructions.');
  }
  for (const u of units) {
    if (u.code.length === 0) warnings.push('System ' + u.name + ' has no executable instructions.');
    if (!u.code.some(x => decode(x.word).op === 3)) warnings.push('System ' + u.name + ' sends no messages.');
  }
  if (errors.length) throw Error(errors.join('\n'));
  return { units:units.sort((a,b) => a.id - b.id), source, warnings };
}
export class BinaryMachine {
  program: Program;
  units: UnitState[];
  tick = 0;
  pending: number[] = [];
  trace: Packet[] = [];
  coupling: number;
  totalPackets = 0;
  constructor(program: Program, coupling = 0.75) {
    this.program = program;
    this.coupling = coupling;
    this.units = program.units.map(u => ({
      ...u, at:[...u.position], e:u.energy, b:u.bias, model:0,
      error:0,last:0,phase:0,oscillator:0,gain:1,target:0,
      inbox:[],path:[[...u.position]],received:0
    }));
  }
  step() {
    this.tick++;
    const delivering = this.pending;
    this.pending = [];
    for (const word of delivering) {
      const p = unpack(word);
      const target = this.units.find(u => u.id === p.dst);
      if (target) target.inbox.push(word);
    }
    for (const u of this.units) {
      for (const item of u.code) {
        const d = decode(item.word);
        switch (d.op) {
          case 1: {
            const keep: number[] = [];
            for (const word of u.inbox) {
              const packet = unpack(word);
              if (d.flags !== 0 && d.flags !== packet.src) { keep.push(word); continue; }
              const sign = packet.kind === 2 ? -1 : 1;
              const measurement = sign * (packet.data - 128) / 127;
              const effect = measurement * (d.arg / 128) * this.coupling;
              u.last = bound(effect,-2,2);
              u.b = bound(u.b * 0.99 + effect * 0.12,-1,1);
              u.e = bound(Math.round(u.e + effect * 10),0,255);
              u.received++;
            }
            u.inbox = keep;
            break;
          }
          case 2: {
            const axis = d.arg;
            const direction = d.flags === 1 ? 1 : d.flags === 2 ? -1 :
              (Math.sin(this.tick * 0.30 + u.phase + u.b * 2) > -0.20 ? 1 : -1);
            let next = u.at[axis] + direction;
            if (next > 9) next = 8;
            if (next < 0) next = 1;
            u.at[axis] = next;
            break;
          }
          case 3: {
            const payload = bound(Math.round(128 + (u.oscillator * 86 +
              u.b * 40 + (u.e - 128) * 0.11) * u.gain),0,255);
            if (this.units.some(v => v.id === u.target)) {
              const word = pack(u.id,u.target,cell(u.at),d.arg,payload,u.b >= 0 ? 1 : 0);
              this.pending.push(word);
              this.totalPackets++;
              this.trace.push({ tick:this.tick,word,from:u.id,to:u.target });
              if (this.trace.length > 512) this.trace.shift();
            }
            break;
          }
          case 4:
            u.oscillator = Math.sin(this.tick * (d.arg / 100) + u.phase);
            break;
          case 5: {
            const residual = u.last - u.model;
            u.error = residual;
            u.model = bound(u.model + (d.arg / 255) * residual,-2,2);
            break;
          }
          case 6: {
            const rate = d.flags === 1 ? 0.05 : d.flags === 3 ? 0.35 : 0.15;
            u.e = bound(Math.round(u.e + (d.arg - u.e) * rate),0,255);
            break;
          }
          case 7:
            u.target = d.arg;
            break;
          case 8: {
            const dest = coords(d.address);
            for (let axis = 0; axis < 3; axis++) {
              if (u.at[axis] !== dest[axis]) {
                u.at[axis] += Math.sign(dest[axis] - u.at[axis]);
                break;
              }
            }
            break;
          }
          case 9:
            u.last = u.at.every((c,i) => c === coords(d.address)[i]) ? 1 : 0;
            break;
          case 10:
            u.gain = d.arg / 128;
            break;
        }
      }
      u.phase += u.b * 0.012;
      u.path.push([...u.at]);
      if (u.path.length > 100) u.path.shift();
    }
  }
  run(n: number) { for (let i = 0; i < n; i++) this.step(); }
}
export function paired(program: Program, n = 60) {
  const connected = new BinaryMachine(program,0.75);
  const control = new BinaryMachine(program,0);
  connected.run(n); control.run(n);
  const perUnit = connected.units.map((u,i) => {
    const b = control.units[i];
    return { name:u.name, biasDelta:Math.abs(u.b - b.b),
      modelDelta:Math.abs(u.model - b.model),
      energyDelta:Math.abs(u.e - b.e),
      positionDelta:Math.hypot(...u.at.map((v,k) => v - b.at[k])) };
  });
  return { ticks:n, connectedPackets:connected.totalPackets,
    couplingOn:0.75,couplingOff:0,perUnit };
}
export function checkBinary(): string {
  for (const addr of [0,1,345,999]) {
    const w = encode(8,addr,1,0), d = decode(w);
    if (d.address !== addr || encode(d.op,d.address,d.arg,d.flags) !== w) throw Error('Instruction roundtrip failed');
    const p = pack(1,2,addr,3,200,1), p2 = unpack(p);
    if (p2.src !== 1 || p2.dst !== 2 || p2.address !== addr ||
      p2.data !== 200 || p2.flags !== 1) throw Error('Packet roundtrip failed');
  }
  const example = parseSource(PRESETS.feedback);
  const network = new BinaryMachine(example);
  network.run(12);
  if (network.tick !== 12 || network.totalPackets < 20 ||
    network.units.some(u => u.at.some(v => v < 0 || v > 9))) throw Error('Virtual machine failed');
  try { parseSource('SYSTEM A AT (10,1,1) ENERGY 128 BIAS 0 PURPOSE "Bad"'); }
  catch { return 'PASS · binary roundtrip, coordinate bounds, execution, validation'; }
  throw Error('Invalid coordinates were accepted');
}
