# Àtúnbí systems design and architecture

Underlying purpose: binary matrix engine. Secondary aim: modular workspace above the engine. Applications include simulation, feedback control and exploratory research. The engine stays the engine.

## Frameworks

Systems engineering management coordinates technical planning, decisions, risk, configuration, measurement and verification throughout development. [SEBoK](https://sebokwiki.org/wiki/Systems_Engineering_Management).

Stafford Beer's Viable System Model distinguishes operations (S1), coordination (S2), internal control (S3), environmental adaptation (S4), and identity/policy (S5); S3* provides audit. Here it allocates responsibilities, not proof of autonomous software viability. [Metaphorum](https://metaphorum.org/staffords-work/viable-system-model).

System dynamics studies changes over time through stocks, flows, feedback and delays. A structural matrix does not itself establish dynamic behavior. [System Dynamics Society UK](https://systemdynamics.org.uk/about-system-dynamics.html).

## Boundary and requirements

The browser application includes engines, process definitions, message routing, local storage and views. Users, GitHub, hosting, research sources and browser/headset capabilities are external. Current runtime components are inventoried below at the functional module level; subsystem descriptions decompose their internal parts. This is not a symbol-level code dependency graph.

- R1: preserve the engine/workspace boundary; verify binary invariants and unchanged engine replay.
- R2: show every registered component and directed edge; compare inventory with runtime maps.
- R3: group related components adjacently; group filter must preserve complete exports.
- R4: expose ports, enabled status, explicit delays and readable importance ratings; verify disabled edge and cell inspection.
- R5: separate current implementation from proposed policy and workspace capabilities.
- R6: support keyboard access, mobile horizontal scrolling and export failure feedback.

## Matrix interpretation

The website's theory page contains the interactive 27 × 27 dependency matrix. Rows send; columns receive. Components are grouped Engine (blue), Workspace (purple), Observation (green), Governance (amber), Interface (pink). Cell colors have a separate meaning: crimson 3 = operation dependency (command, binary, source); blue 2 = state or definition support (snapshot); olive 1 = evidence or annotation support. Disabled cells say off; D marks delayed edges. These are editorial design ratings by signal function, not measured causal strengths or global criticality. Parallel edges share a cell; the highest enabled rating is displayed and inspection lists every edge. Group filtering hides cross-group cells; full export retains them. Refresh reads current wiring.

## Subsystem architecture

### Engine — S1 · operations

Execute declared algorithms while preserving the binary kernel boundary.

G8: 1,000-bit state, instruction compiler, VM, messages and clock. G7: sentence compiler and VM. G6: environments, internal layers, numeric fields and signed edges. G10: PID registers, drivers and binary plant. G11: algorithm catalogue, node state, parameters and synchronous coupling.

Contract: Declared configuration and inputs → next state, binary output and evidence. Numerical registers belong to the relevant algorithm adapter, not implicit meaning in the binary cells.

Acceptance: Binary bounds; deterministic replay; prior-state immutability; full-state export/import continuation.

### Workspace — S1 operations / S2 coordination

Compose processes above the engine; keep definitions separate from running instances.

Rule workshop: identity, truth table, validation, saved definitions. Registry: versioned definitions and installation. Flow runtime: typed ports, edge validation, queues, delay ticks and trace. Wiring editor: connect, disconnect and save. General blank canvas and reusable composite modules: proposed.

Contract: Definitions + graph + commands → validated instances and routed messages. A process has inputs, state, algorithm and outputs.

Acceptance: Reject incompatible ports and immediate cycles; bound messages; preserve explicit delays; reject invalid imports atomically.

### Observation — S3* · audit / S4 · investigation

Make behavior inspectable and compare explanations against controlled evidence.

G9: descriptors, exact recurrence, matched interventions and annotation status. Metrics: snapshots and displays. Notebook: observer hypotheses. Exports: configurations and evidence. Experiment tools: edge ablations, baselines and replay.

Contract: State and run configuration → observations, comparisons and provenance. A descriptor is not proof of emergence.

Acceptance: Known fixtures; matched initial states; non-mutating comparisons; explicit hypothesis status and reproducible exports.

### Governance — S3 control / S4 adaptation / S5 identity

Manage technical decisions, verification, risk and changes while retaining the engine purpose.

Foundation: purpose and research. Feature inventory: responsibilities and connections. References: external knowledge. Tests and CI: verification. Git history: configuration baseline. Deployment service: release boundary. Automated resource policy, compatibility migration and runtime health supervisor: proposed.

Contract: Needs and evidence → requirements, architecture decisions, acceptance checks and reviewed releases. People retain policy authority.

Acceptance: Requirement-to-test traceability; versioned baselines; release checks; rollback source. VSM is a design analogy, not a claim of autonomous viability.

### Interface — S2 coordination / human interface

Expose processes without changing what the engine means.

Navigation and home: page organization. Module views: controls and state display. Controllers: categorized actions and guards. Spatial viewer: camera, 3D volume, WebXR and desktop fallback. Logo and shell: identity.

Contract: User intent → validated command; model snapshot → accessible view. A webpage is an interface, not necessarily a separate processor.

Acceptance: Keyboard and screen-reader checks; routing/history; controller guards; simulated XR. Physical headset validation remains separate.

## Component inventory

| Group | Component | Inputs | Outputs |
|---|---|---|---|
| Interface | controllers — Controller menu | none | g6: command, g7: command, g8: command, g9: command, composition: command, ecology: command, workshop: command, foundation: command, workflow: command |
| Engine | g6 — G6 | command: command, library: snapshot | state: snapshot, definitions: snapshot, binary: binary, evidence: evidence, annotation: annotation |
| Engine | g7 — G7 | command: command | state: snapshot, definitions: snapshot, binary: binary, evidence: evidence, annotation: annotation |
| Engine | g8 — G8 | command: command | state: snapshot, definitions: snapshot, binary: binary, evidence: evidence, annotation: annotation |
| Observation | g9 — G9 | command: command, source: source, binary: binary | state: snapshot, definitions: snapshot, binary: binary, evidence: evidence, annotation: annotation |
| Engine | composition — G10 composition | command: command, binary: binary | state: snapshot, definitions: snapshot, binary: binary, evidence: evidence, annotation: annotation |
| Engine | ecology — ECOLOGY | command: command, library: snapshot | state: snapshot, definitions: snapshot, binary: binary, evidence: evidence, annotation: annotation |
| Workspace | workshop — WORKSHOP | command: command | state: snapshot, definitions: snapshot, binary: binary, evidence: evidence, annotation: annotation |
| Governance | foundation — FOUNDATION | command: command | state: snapshot, definitions: snapshot, binary: binary, evidence: evidence, annotation: annotation |
| Workspace | workflow — WORKFLOW | command: command | state: snapshot, definitions: snapshot, binary: binary, evidence: evidence, annotation: annotation |
| Workspace | sources — Source editors | none | source: source |
| Observation | metrics — Metrics | data: snapshot | none |
| Observation | notebook — Notebook | data: annotation | none |
| Observation | exports — Exports | data: evidence | none |
| Governance | references — References | data: snapshot | none |
| Governance | feature-inventory — Feature and connection map | snapshot: snapshot | evidence: evidence |
| Interface | navigation — Home and module pages | none | page: snapshot |
| Interface | g6-view — G6 view | state: snapshot | none |
| Interface | g7-view — G7 view | state: snapshot | none |
| Interface | g8-view — G8 view | state: snapshot | none |
| Interface | g9-view — G9 view | state: snapshot | none |
| Interface | composition-view — COMPOSITION view | state: snapshot | none |
| Interface | ecology-view — ECOLOGY view | state: snapshot | none |
| Workspace | algorithm-registry — Algorithm registry | definitions: snapshot | library: snapshot |
| Governance | reference-source — Reference catalogue | none | items: snapshot |
| Interface | identity — Brand configuration | none | identity: snapshot |
| Interface | shell — Website shell | identity: snapshot | none |

## Directed interfaces

| Source → destination | Signal | Importance | Status | Timing |
|---|---|---|---|---|
| controllers.g6 → g6.command | command | 3 | enabled | immediate |
| controllers.g7 → g7.command | command | 3 | enabled | immediate |
| controllers.g8 → g8.command | command | 3 | enabled | immediate |
| controllers.g9 → g9.command | command | 3 | enabled | immediate |
| controllers.composition → composition.command | command | 3 | enabled | immediate |
| controllers.ecology → ecology.command | command | 3 | enabled | immediate |
| controllers.workshop → workshop.command | command | 3 | enabled | immediate |
| controllers.foundation → foundation.command | command | 3 | enabled | immediate |
| controllers.workflow → workflow.command | command | 3 | enabled | immediate |
| sources.source → g9.source | source | 3 | enabled | immediate |
| g6.state → metrics.data | snapshot | 2 | enabled | immediate |
| g6.evidence → exports.data | evidence | 1 | enabled | immediate |
| g7.state → metrics.data | snapshot | 2 | enabled | immediate |
| g7.evidence → exports.data | evidence | 1 | enabled | immediate |
| g8.state → metrics.data | snapshot | 2 | enabled | immediate |
| g8.evidence → exports.data | evidence | 1 | enabled | immediate |
| g9.state → metrics.data | snapshot | 2 | enabled | immediate |
| g9.evidence → exports.data | evidence | 1 | enabled | immediate |
| composition.state → metrics.data | snapshot | 2 | enabled | immediate |
| composition.evidence → exports.data | evidence | 1 | enabled | immediate |
| ecology.state → metrics.data | snapshot | 2 | enabled | immediate |
| ecology.evidence → exports.data | evidence | 1 | enabled | immediate |
| workshop.state → metrics.data | snapshot | 2 | enabled | immediate |
| workshop.evidence → exports.data | evidence | 1 | enabled | immediate |
| foundation.state → metrics.data | snapshot | 2 | enabled | immediate |
| foundation.evidence → exports.data | evidence | 1 | enabled | immediate |
| workflow.state → metrics.data | snapshot | 2 | enabled | immediate |
| workflow.evidence → exports.data | evidence | 1 | enabled | immediate |
| g8.annotation → notebook.data | annotation | 1 | enabled | immediate |
| g9.annotation → notebook.data | annotation | 1 | enabled | immediate |
| g8.binary → composition.binary | binary | 3 | enabled | immediate |
| composition.binary → g9.binary | binary | 3 | enabled | immediate |
| workflow.state → feature-inventory.snapshot | snapshot | 2 | enabled | immediate |
| feature-inventory.evidence → exports.data | evidence | 1 | enabled | immediate |
| navigation.page → metrics.data | snapshot | 2 | enabled | immediate |
| g6.state → g6-view.state | snapshot | 2 | enabled | immediate |
| g7.state → g7-view.state | snapshot | 2 | enabled | immediate |
| g8.state → g8-view.state | snapshot | 2 | enabled | immediate |
| g9.state → g9-view.state | snapshot | 2 | enabled | immediate |
| composition.state → composition-view.state | snapshot | 2 | enabled | immediate |
| ecology.state → ecology-view.state | snapshot | 2 | enabled | immediate |
| workshop.definitions → algorithm-registry.definitions | snapshot | 2 | enabled | immediate |
| algorithm-registry.library → ecology.library | snapshot | 2 | enabled | immediate |
| algorithm-registry.library → g6.library | snapshot | 2 | enabled | immediate |
| reference-source.items → references.data | snapshot | 2 | enabled | immediate |
| identity.identity → shell.identity | snapshot | 2 | enabled | immediate |

## Dynamic view

General stock model: state(t+dt) = state(t) + (inflow − outflow)dt, where a rate-based model applies. Discrete binary state instead follows its declared transition function. Do not interpret all Boolean transitions as conserved physical flows.

### Matrix and algorithm state

Inflow: Declared transition / incoming signal. Outflow: Reset or replacement. Feedback: Output → measurement → controller → next input. Implemented in specific engines; signs and gains are configuration dependent.

### Pending messages

Inflow: Emission onto delayed edges. Outflow: Explicit workflow advance; disabling an edge removes pending messages. Feedback: Queue growth → proposed resource supervisor → producer throttling. Bounded queues and explicit advance implemented; adaptive throttling proposed.

### Saved algorithm definitions

Inflow: Validated rule creation or import. Outflow: Removal or replacement under registry rules. Feedback: Test result → revise definition → test again. Human-guided iteration; no autonomous algorithm improvement claimed.

### Evidence and observer records

Inflow: Measurements, experiments, annotations. Outflow: User deletion or external archival. Feedback: Comparison → hypothesis revision → new experiment. Human interpretation; no claim that accumulating records automatically increases knowledge.

## Management, risks and next decisions

People own S5 policy and S4 research decisions. CI and experiment evidence provide audit; a full resource supervisor, automatic throttling, compatibility migrations and reusable composite workspace tools remain proposed. Existing queues have bounds, not adaptive scheduling. Adding another engine needs a versioned port/state contract, owner, validation and acceptance tests.

Central typed routing improves traceability but can become a bottleneck; bounded local queues and explicit delay semantics are current controls. The matrix remains readable by grouping and filtering, but larger inventories may need hierarchical zoom. Persistence and external release availability remain separate concerns: local storage is not a durable shared database. Physical headset usability requires real-device evaluation. Review importance per use case before treating any connection as mission-critical.
