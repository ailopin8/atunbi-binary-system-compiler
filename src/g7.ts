import {registerView, publishState, sendEvidence} from './flow/site';
import './g7.css';

import {Program, UnitState, DICTIONARY, PRESETS, bits, cell, num, encode, decode, pack, unpack, parseSource, BinaryMachine, paired, checkBinary} from './engines/g7';
function el<T extends HTMLElement = HTMLElement>(id: string): T {
  const found = document.getElementById(id);
  if (!found) throw Error('Missing G7 element ' + id);
  return found as T;
}
function download(name: string, content: unknown) {sendEvidence('g7',name,content);}
const panel = document.createElement('section');
panel.className = 'g7 panel4';
panel.innerHTML = [
  '<div class="section-head"><div><span class="micro">08 / G7 · BINARY SENTENCE COMPILER</span><h3>System sentences → instructions → observable behaviour</h3></div><span class="hint">DETERMINISTIC VIRTUAL MACHINE · 10³ SPACE</span></div>',
  '<div class="g7-content"><p class="g7-lead">Write bounded, machine-readable system sentences. Compile them into verified 24-bit instructions, then observe the resulting algorithms and their 32-bit messages. This is a separate experimental runtime; it does not overwrite your G6 node network.</p>',
  '<div class="g7-editor"><div class="g7-author"><div class="g7-bar"><strong>01 / SYSTEM SENTENCES</strong><select id="g7-preset" aria-label="Example program"><option value="feedback">Adaptive feedback</option><option value="seek">Spatial seeking</option></select></div>',
  '<textarea id="g7-source" spellcheck="false" aria-label="System sentence source"></textarea>',
  '<div class="g7-actions"><button id="g7-compile" class="g7-primary">⚙ Compile & load</button><button id="g7-help">Grammar reference</button><span id="g7-diagnostics" role="status"></span></div>',
  '<details id="g7-grammar"><summary>Supported system sentence forms</summary><pre>SYSTEM A AT (1,3,1) ENERGY 180 BIAS 0.20 PURPOSE "..."',
  'A RECEIVES FROM B WITH GAIN 0.75',
  'A MOVES ALONG X AUTOMATICALLY',
  'A OSCILLATES AT RATE 0.36',
  'A ADAPTS MODEL AT RATE 0.20',
  'A RESTORES ENERGY TO 160 WITH STRENGTH FAST',
  'A SENDS TYPE 1 TO B',
  'A SEEKS CELL (7,7,7)',
  'A OBSERVES CELL (5,4,3)',
  'A SETS OUTPUT GAIN TO 1.80</pre><p>Range restrictions: positions 0..9; energy 0..255; bias -1..1; receive and output gain 0..1.992; learning rate 0..1. Invalid or unknown sentences never execute.</p></details></div>',
  '<div class="g7-code"><div class="g7-bar"><strong>02 / 24-BIT PROGRAMS</strong><span id="g7-codelen">No program</span></div><div id="g7-assembly" class="g7-assembly"><p>Compile to inspect real encoded instructions and their source lines.</p></div></div></div>',
  '<div class="g7-transport"><div class="g7-buttons"><button id="g7-run" disabled>▶ Run</button><button id="g7-step" disabled>Step +1</button><button id="g7-reset" disabled>↻ Reset</button><button id="g7-paired" disabled>Compare coupling vs zero</button><button id="g7-export" disabled>↓ Export binary evidence</button></div><label>Coupling <input id="g7-coupling" type="range" min="0" max="100" value="75"><output id="g7-coupling-label">75%</output></label><label>Rate <input id="g7-speed" type="range" min="1" max="20" value="6"><output id="g7-speed-label">6/s</output></label></div>',
  '<div class="g7-cubes"><div class="g7-volume"><div class="g7-bar"><strong class="g7-gold">SANDBOX A</strong><span id="g7-state-a">No algorithm</span></div><canvas id="g7-canvas-a"></canvas><div class="g7-unit" id="g7-read-a">Empty coordinate space</div></div><div class="g7-volume"><div class="g7-bar"><strong class="g7-cyan">SANDBOX B</strong><span id="g7-state-b">No algorithm</span></div><canvas id="g7-canvas-b"></canvas><div class="g7-unit" id="g7-read-b">Empty coordinate space</div></div></div>',
  '<div class="g7-bottom"><div class="g7-packet"><div class="g7-bar"><strong>03 / 32-BIT RELATIONSHIP PACKET</strong><span id="g7-tick">TICK 0</span></div><div id="g7-lastpacket" class="g7-bits">No output yet</div><p class="g7-key">SOURCE 4 · DESTINATION 4 · ADDRESS 10 · TYPE 4 · DATA 8 · FLAGS 2</p><div id="g7-log" class="g7-log">Messages arrive on the next tick. The receiving algorithm interprets the data through its own instructions.</div></div><div class="g7-evidence"><div class="g7-bar"><strong>04 / CONTROLLED OBSERVATION</strong></div><div id="g7-control">Compile a program and select “Compare coupling vs zero” to run 60 matched ticks with and without message influence.</div><small id="g7-selftest"></small></div></div>',
  '<p class="g7-foot">10 bits address 1,000 valid positions; 24 unused codes are rejected. Source sentences are a constrained domain-specific language, not unrestricted natural-language understanding. Instruction meaning comes from the VM specification, not from binary bits alone.</p></div>'
].join('\n');
const anchor = document.querySelector('.g6-experiment');
if (anchor) anchor.insertAdjacentElement('afterend',panel);
else document.querySelector('#app')?.appendChild(panel);
const textArea = el<HTMLTextAreaElement>('g7-source');
const preset = el<HTMLSelectElement>('g7-preset');
textArea.value = PRESETS.feedback;
let compiled: Program | null = null;
let vm: BinaryMachine | null = null;
let live = false;
let timer: number | null = null;
let hz = 6;
let cp = 0.75;
let comparison: ReturnType<typeof paired> | null = null;
const setRun = (on: boolean) => {
  live = on;
  el('g7-run').textContent = live ? 'Ⅱ Pause' : '▶ Run';
  if (timer !== null) window.clearInterval(timer);
  timer = live ? window.setInterval(() => { vm?.step(); update(); },1000 / hz) : null;
};
function refreshPrograms() {
  if (!compiled) return;
  const section = el('g7-assembly');
  section.replaceChildren();
  const length = compiled.units.reduce((sum,u) => sum + u.code.length,0);
  el('g7-codelen').textContent = length + ' instructions · ' + (length * 3) + ' bytes';
  for (const u of compiled.units) {
    const heading = document.createElement('h4');
    heading.textContent = 'SANDBOX ' + u.name + ' · ' + u.purpose;
    section.appendChild(heading);
    for (const instruction of u.code) {
      const entry = document.createElement('div');
      entry.className = 'g7-instruction';
      const decodeWord = decode(instruction.word);
      const binary = document.createElement('code');
      binary.textContent = bits(instruction.word,24);
      const label = document.createElement('span');
      label.textContent = 'L' + instruction.line + ' · ' + instruction.label +
        ' (' + DICTIONARY[decodeWord.op] + ')';
      entry.append(binary,label);
      section.appendChild(entry);
    }
  }
}
function project(pos: number[], width: number, height: number) {
  const X = pos[0] - 4.5, Y = pos[1] - 4.5, Z = pos[2] - 4.5;
  const az = -0.7, tilt = 0.43, c = Math.cos(az), s = Math.sin(az);
  const x = X * c - Z * s, d = X * s + Z * c;
  const y = Y * Math.cos(tilt) - d * Math.sin(tilt);
  const scale = Math.min(width,height) * 0.058;
  return [width * 0.5 + x * scale, height * 0.52 - y * scale];
}
const cubeCorners = [[0,0,0],[9,0,0],[9,9,0],[0,9,0],
  [0,0,9],[9,0,9],[9,9,9],[0,9,9]];
const cubeEdges = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],
  [6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];
function draw(canvas: HTMLCanvasElement, u: UnitState | undefined, color: string) {
  const rect = canvas.getBoundingClientRect();
  const width = Math.max(rect.width,200), height = Math.max(rect.height,200);
  const dpi = Math.min(window.devicePixelRatio || 1,2);
  canvas.width = Math.round(width * dpi);
  canvas.height = Math.round(height * dpi);
  const context = canvas.getContext('2d');
  if (!context) return;
  context.scale(dpi,dpi);
  context.clearRect(0,0,width,height);
  context.lineWidth = 1;
  context.strokeStyle = '#294360';
  for (const [a,b] of cubeEdges) {
    const p = project(cubeCorners[a],width,height);
    const r = project(cubeCorners[b],width,height);
    context.beginPath();context.moveTo(p[0],p[1]);context.lineTo(r[0],r[1]);context.stroke();
  }
  for (let n = 1; n < 9; n++) {
    for (const pair of [[[n,0,0],[n,0,9]],[[0,0,n],[9,0,n]]]) {
      const p = project(pair[0],width,height);
      const r = project(pair[1],width,height);
      context.strokeStyle = '#1a2a41';
      context.beginPath();context.moveTo(p[0],p[1]);context.lineTo(r[0],r[1]);context.stroke();
    }
  }
  if (!u) return;
  if (u.path.length > 1) for (let i = 1; i < u.path.length; i++) {
    const p = project(u.path[i - 1],width,height);
    const r = project(u.path[i],width,height);
    context.globalAlpha = i / u.path.length * 0.65 + 0.1;
    context.strokeStyle = color;
    context.lineWidth = 1.5;
    context.beginPath();context.moveTo(p[0],p[1]);context.lineTo(r[0],r[1]);context.stroke();
  }
  context.globalAlpha = 1;
  const p = project(u.at,width,height);
  const glow = context.createRadialGradient(p[0],p[1],1,p[0],p[1],28);
  glow.addColorStop(0,color);glow.addColorStop(1,'rgba(0,0,0,0)');
  context.globalAlpha = 0.3;
  context.fillStyle = glow;
  context.beginPath();context.arc(p[0],p[1],28,0,Math.PI * 2);context.fill();
  context.globalAlpha = 1;
  context.fillStyle = color;
  context.beginPath();context.arc(p[0],p[1],5,0,Math.PI * 2);context.fill();
  context.font = '11px monospace';
  context.fillText('(' + u.at.join(',') + ')',p[0] + 9,p[1] - 10);
}
function render_g7() {
  el('g7-tick').textContent = 'TICK ' + (vm?.tick || 0);
  for (const [label,color] of [['a','#efbc6b'],['b','#58d7e9']]) {
    const u = vm?.units.find(x => x.name.toLowerCase() === label);
    el('g7-state-' + label).textContent = u ? 'ENERGY ' + bits(u.e,8) : 'EMPTY';
    el('g7-read-' + label).textContent = u ?
      'Position (' + u.at.join(',') + ') · bias ' + u.b.toFixed(3) +
      ' · model ' + u.model.toFixed(3) + ' · error ' + u.error.toFixed(3) +
      ' · received ' + u.received : 'Empty coordinate space';
    draw(el<HTMLCanvasElement>('g7-canvas-' + label),u,color);
  }
  if (!vm?.trace.length) {
    el('g7-lastpacket').textContent = 'No output yet';
    el('g7-log').textContent = 'Step the program to emit a 32-bit relationship message.';
    return;
  }
  const last = vm.trace[vm.trace.length - 1];
  const packet = unpack(last.word);
  el('g7-lastpacket').innerHTML =
    '<span class="g7-gold">' + bits(packet.src,4) + '</span> ' +
    '<span class="g7-cyan">' + bits(packet.dst,4) + '</span> ' +
    '<span class="g7-blue">' + bits(packet.address,10) + '</span> ' +
    '<span class="g7-purple">' + bits(packet.kind,4) + '</span> ' +
    '<span class="g7-green">' + bits(packet.data,8) + '</span> ' + bits(packet.flags,2);
  el('g7-log').textContent = vm.trace.slice(-5).reverse().map(p => {
    const item = unpack(p.word);
    return 't' + p.tick + ' · ' + item.src + ' → ' + item.dst +
      ' · type ' + item.kind + ' · data ' + item.data +
      ' · cell ' + item.address;
  }).join('\n');
}
function compile() {
  setRun(false);
  try {
    const next = parseSource(textArea.value);
    const newVm = new BinaryMachine(next,cp);
    compiled = next;
    vm = newVm;
    comparison = null;
    el('g7-control').textContent = 'Ready for controlled observation.';
    el('g7-diagnostics').textContent = '✓ Valid · ' +
      next.units.length + ' sandbox(s)' +
      (next.warnings.length ? ' · ' + next.warnings.join(' ') : '');
    el('g7-diagnostics').className = 'g7-ok';
    for (const id of ['g7-run','g7-step','g7-reset','g7-paired','g7-export'])
      (el(id) as HTMLButtonElement).disabled = false;
    refreshPrograms();update();
  } catch (e) {
    el('g7-diagnostics').textContent = String(e instanceof Error ? e.message : e);
    el('g7-diagnostics').className = 'g7-bad';
    compiled = null;
    vm = null;
    el('g7-codelen').textContent = 'Compilation blocked';
    el('g7-assembly').textContent = 'No program was loaded. Correct the indicated source line.';
    for (const id of ['g7-run','g7-step','g7-reset','g7-paired','g7-export'])
      (el(id) as HTMLButtonElement).disabled = true;
    update();
  }
}
el('g7-compile').addEventListener('click',compile);
el('g7-help').addEventListener('click',() => { el('g7-grammar').setAttribute('open',''); });
preset.addEventListener('change',() => { textArea.value = PRESETS[preset.value as keyof typeof PRESETS]; });
el('g7-run').addEventListener('click',() => setRun(!live));
el('g7-step').addEventListener('click',() => { setRun(false); vm?.step(); update(); });
el('g7-reset').addEventListener('click',() => {
  setRun(false);
  if (compiled) vm = new BinaryMachine(compiled,cp);
  comparison = null;
  el('g7-control').textContent = 'Program reset to its initial state.';
  update();
});
el('g7-paired').addEventListener('click',() => {
  if (!compiled) return;
  comparison = paired(compiled);
  const outcome = comparison;
  el('g7-control').textContent = '60-tick intervention · ' +
    outcome.connectedPackets + ' packets emitted. ' +
    outcome.perUnit.map(u => 'Sandbox ' + u.name +
      ': |Δbias| ' + u.biasDelta.toFixed(4) +
      ', |Δmodel| ' + u.modelDelta.toFixed(4) +
      ', |Δenergy| ' + u.energyDelta.toFixed(1) +
      ', spatial distance ' + u.positionDelta.toFixed(2)
    ).join(' · ') +
    '. Differences indicate sensitivity to coupling, not proof of emergence.';
});
el('g7-export').addEventListener('click',() => {
  if (!compiled || !vm) return;
  download('atunbi-g7-binary-evidence.json',{
    format:'atunbi.binary-sentence-g7/1',
    spatialShape:[10,10,10],
    address:'100*z+10*y+x',
    instructionFields:[['opcode',4],['address',10],['argument',8],['flags',2]],
    packetFields:[['source',4],['destination',4],['address',10],['type',4],['data',8],['flags',2]],
    source:compiled.source,
    programs:compiled.units.map(u => ({ ...u, code:u.code.map(ins =>
      ({ ...ins, binary:bits(ins.word,24), decoded:decode(ins.word) })) })),
    runtime:{ tick:vm.tick,coupling:vm.coupling,totalPackets:vm.totalPackets,
      states:vm.units.map(u => ({ id:u.id,name:u.name,position:u.at,energy:u.e,bias:u.b,
        model:u.model,error:u.error,received:u.received,
        occupancyBinary:Array.from({ length:1000 },(_,i) => cell(u.at) === i ? '1' : '0').join(''),
        trail:u.path
      })),
      packetTrace:vm.trace.map(p => ({ tick:p.tick,binary:bits(p.word,32),
        decoded:unpack(p.word) })) },
    pairedExperiment:comparison
  });
});
el<HTMLInputElement>('g7-coupling').addEventListener('input',event => {
  cp = num((event.target as HTMLInputElement).value) / 100;
  el('g7-coupling-label').textContent = Math.round(cp * 100) + '%';
  if (vm) vm.coupling = cp;
});
el<HTMLInputElement>('g7-speed').addEventListener('input',event => {
  hz = num((event.target as HTMLInputElement).value);
  el('g7-speed-label').textContent = hz + '/s';
  if (live) setRun(true);
});
window.addEventListener('resize',update);
try { el('g7-selftest').textContent = checkBinary(); }
catch (e) { el('g7-selftest').textContent = 'SELF TEST FAILED: ' + String(e); }
registerView('g7',render_g7);
function update() {publishState('g7',{tick:vm?.tick||0,packets:vm?.totalPackets||0});}
update();
(window as unknown as { __ATUNBI_G7: unknown }).__ATUNBI_G7 = {
  parseSource,encode,decode,pack,unpack,paired,
  getState:() => ({
    compiled:!!compiled,tick:vm?.tick || 0,packets:vm?.totalPackets || 0,
    error:el('g7-diagnostics').textContent,
    comparison
  })
};

document.addEventListener('atunbi:pause-all',()=>setRun(false));
