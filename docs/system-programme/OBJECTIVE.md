Goal

Act as Atunbi’s systems engineering lead, interaction designer, and frontend/backend architect. Develop the existing application at `http://127.0.0.1:4173/` into one coherent, modular, visual environment for creating algorithms, composing tools, running systems, observing behaviour, testing explanations, and preserving reusable results.

Use systems engineering management to connect purpose → user needs → measurable requirements → functions → modules → interface contracts → implementation → verification → validation. Use SEBoK v2.14 as the starting reference when available. Apply its methods proportionately; distinguish the reference’s principles from your proposed application to Atunbi.

Modularity is a core acceptance requirement. A module must have a clear responsibility, explicit inputs and outputs, owned state, declared timing, independently testable behaviour, and a replaceable implementation. A page is an interface to those capabilities; it is not automatically a separate runtime, database, or service.

Make the interface understandable primarily through meaningful visual relationships and immediate feedback. Use concise, consistent labels and progressive disclosure. Every retained page must support a useful action or decision and show where its information comes from and where its outputs go.

Interpret “visuals are algorithms” precisely: every functional visual represents a declared computation, state projection, or command interface. Visuals communicate through application contracts and shared context. A chart can receive observations and emit a selection; a node can transform input; a control can emit a command. Do not force a reference card, logo, or camera movement to alter the binary simulation. Integrate information where it serves the purpose; do not connect everything to everything.

## Starting evidence: recheck before changing anything

The inspected application has a home page and 18 module routes: `builder`, `workshop`, `compiler`, `network`, `layers`, `relationships`, `spatial`, `binary`, `pid`, `ecology`, `discovery`, `experiments`, `metrics`, `wiring`, `features`, `controllers`, `references`, and `theory`.

The current foundation includes:

- A blank-canvas tool builder with typed modules, binary/number/text adapters, connections, execution, replay checks, local saves, imports/exports, and reusable tools.
- A custom binary-rule workshop, built-in algorithm registry, and delivery of saved rules to G6 and G11.
- G6 connected environments and internal layers, its 3D view, state inspection, and controlled comparisons.
- A G7 structured-sentence compiler and separate VM; a G8 binary compiler/engine with two 1,000-bit matrices and messages; a G10 feedback controller; and G11 algorithm composition with binary projections of numeric algorithms.
- G9 matched pattern experiments, optional incoming binary seeds, replay, and observer hypotheses.
- A typed website flow runtime, wiring editor, feature inventory, shared action menu, purpose hierarchy, and reference library.

The home page reported 28 components and 51 active connections during inspection. These are runtime observations, not fixed product requirements. Its engine → controller → pattern-test command completed and reported exact replay passed. This demonstrates one working path, not complete system correctness.

Important boundaries found in the current source and interface:

- G6, G7, G8, G10, G11, and the tool builder retain distinct execution semantics. The main spatial viewer is G6-specific.
- Related-page links do not prove data interoperability. A common `binary` or `snapshot` type does not prove compatible meaning.
- The website flow clock and simulation clocks are distinct. Existing website feedback requires a delayed edge; G11 reads previous-tick values.
- Navigation retains mounted models in a session; refresh restarts unsaved simulations. Rules, notes, wiring, and builder saves have separate browser-storage mechanisms.
- The inspected application uses Vite/TypeScript, DOM interfaces, Three.js, browser execution, and local storage. No application API or database backend was identified in the inspected source. Verify repository/deployment context before concluding none exists elsewhere.
- Narrow-screen screenshots showed navigation, repeated titles, descriptions, and purpose allocations filling the initial viewport before working controls. Several pages are extensive lists or tables, while dependent pages can open into an empty state.
- The feature documentation says 17 module pages in one section, while the current route registry contains 18. Generate inventories from authoritative registries and eliminate this drift.

Preserve working behaviour and scientific distinctions. Do not replace executable features with mock visuals. Treat existing documentation and test reports as claims until checked against current behaviour.

## Execution algorithm

Maintain a living ledger for SG01–SG25 with status, prerequisites, requirement IDs, output artifacts, changed modules, evidence, risks, and next action. Use `not started`, `in progress`, `blocked`, and `verified` honestly.

For each subgoal:

1. Inspect its current implementation and verify prerequisites.
2. Identify the user outcome and failure condition; establish a baseline.
3. Specify its contract and the smallest complete change that meets the outcome.
4. Compare meaningful alternatives and record the decision where trade-offs matter.
5. Implement through declared module boundaries, preserving compatibility or providing migration.
6. Verify the changed behaviour and affected consumers, including a relevant failure path.
7. Validate that the interface communicates the result and supports the user’s task.
8. Record evidence and update traceability. Mark verified only when the gate passes; otherwise repair or record the exact blocker.

Proceed in dependency order. Do independent work while resolving genuine uncertainties. Do not invent user-study findings, backend availability, working adapters, test results, or scientific conclusions. If localhost is inaccessible, state that limitation and request the repository or a reachable preview; do not pretend a cloud agent can open another machine’s loopback address.

Create a reviewable implementation plan before substantial changes. Continue through implementation and checks when execution is authorised. Keep production publishing, account access, and external sharing within the user’s actual authorisation. Do not edit read-only synced project sources.

## The 25 subgoals

### SG01 — Establish the current system baseline

**Depends on:** none.

Visit every route and inspect the source, assets, runtime, storage, tests, and available backend. Inventory controls, algorithms, visuals, saved artifacts, imports/exports, routes, contracts, and dependencies. Classify each as observed working, partially working, documented only, untested, or broken. Capture representative populated and empty states. Distinguish review evidence from inherited test reports.

**Deliver:** an evidence-backed system inventory and reproducible baseline.

**Gate:** every current route and major feature is accounted for; uncertain capability is explicitly labelled; the baseline can be restored.

### SG02 — Define purpose, users, and operating scenarios

**Depends on:** SG01.

Define Atunbi’s system boundary and its primary purpose: compose explicit processes above the binary engine to create useful, inspectable tools. Treat research, simulation, feedback control, and pattern exploration as supported applications. Define provisional users—new explorer, tool author, researcher, maintainer—and validate them when people are available. Describe their goals without assuming every user understands G6–G11 terminology.

Specify three end-to-end scenarios: create and reuse a rule; compose and operate a tool; run a controlled experiment and preserve reproducible evidence.

**Deliver:** a short concept of operations, purpose tree, stakeholder needs, and scenario success measures.

**Gate:** each existing capability supports a stated outcome or has a justified disposition; no page exists solely because of implementation history.

### SG03 — Turn needs into measurable requirements

**Depends on:** SG01–SG02.

Assign stable requirement IDs. Cover modularity, visual understanding, consistent language, shared context, meaningful integration, deterministic execution, persistence, recovery, accessibility, performance, and backend operation. Separate mandatory requirements from proposed targets and optional capabilities. Attach a verification method to each requirement.

Initial proposed targets: all retained routes have a functional task; every advertised data connection has an enforced schema and behavioural test; every displayed result identifies its run and source; core commands work with keyboard and touch; supported saves survive reload; invalid imports cause no partial changes. Establish device and graph-size budgets before fixing latency thresholds.

**Deliver:** requirements and traceability matrix: need → requirement → function → module → contract → test → evidence.

**Gate:** no mandatory requirement lacks an owner, acceptance condition, or verification route.

### SG04 — Decompose functions and choose module boundaries

**Depends on:** SG02–SG03.

Decompose into author, validate, compile, compose, execute, observe, compare, annotate, persist, and share/export. Allocate each function to modules with high internal cohesion and limited external dependencies. Separate domain algorithms, runtime orchestration, storage, presentation, and commands. Map pages to these capabilities; allow several pages to share one model.

Prefer an initially modular application/backend over creating a microservice for every page. Split deployment units only when independent scaling, security, ownership, or failure isolation justifies it.

**Deliver:** context diagram, functional decomposition, module responsibility map, and architecture decision record.

**Gate:** each state item has one authoritative owner; each module can be exercised without mounting a page or clicking a hidden button.

### SG05 — Define the shared domain and identity model

**Depends on:** SG03–SG04.

Specify Project, Workspace, AlgorithmDefinition, AlgorithmVersion, ModuleInstance, Port, Connection, Run, Snapshot, Experiment, Observation, Hypothesis, EvidenceArtifact, and Reference. Give them stable IDs and version relationships. Define a shared context containing project, workspace, run, selected module, selected time, and saved/dirty status.

Keep definition, editable draft, applied configuration, running state, view state, and recorded evidence distinct. Specify full replay state including matrices, numeric registers, message queues, clocks, seeds, scheduler version, and algorithm versions where applicable.

**Deliver:** domain schemas, lifecycle diagrams, identity rules, and ownership table.

**Gate:** two interfaces selecting the same entity refer to the same ID and revision; historical runs remain interpretable after definitions change.

### SG06 — Specify contracts and semantic adapters

**Depends on:** SG04–SG05.

For every connection specify producer, consumer, purpose, schema/version, units, shape, topology, encoding, ordering, timing, validity, delivery behaviour, and failure policy. Distinguish commands, source, binary matrices, numeric fields, snapshots, measurements, evidence, and annotations. A 1,000-bit payload must declare dimension order and coordinate addressing; numeric conversions must declare range, precision, threshold, clipping, and information loss.

Use an envelope containing event ID, project/workspace/run IDs, producer, schema version, source tick, sequence, configuration revision, and payload. Include causation/correlation IDs where needed. Document live subscriptions versus copied seeds versus full checkpoints. Reject unsupported adapters visibly.

**Deliver:** an interface contract catalogue and adapter compatibility matrix.

**Gate:** matching type names alone never authorise a connection; malformed, incompatible, duplicate, and obsolete messages have defined outcomes.

### SG07 — Define execution, scheduling, and feedback

**Depends on:** SG05–SG06.

Document each engine’s transition rule, clock, update ordering, and numeric assumptions. Define how a composed workflow coordinates multiple engines without silently equating their clocks. Establish deterministic reads, computations, commits, emissions, and observation points. Require explicit delays for cycles where the scheduler needs them; reject accidental immediate recursion.

Separate simulation time, workflow delivery ticks, and wall-clock playback speed. Specify queue bounds, cancellation, backpressure, stale events, failure propagation, and restart behaviour. View refresh and camera motion must not advance scientific state.

**Deliver:** scheduler specification and sequence diagrams for a normal tick, delayed cycle, cancellation, and failure.

**Gate:** the same complete initial state and command history produces the promised reproducibility level; disconnecting a route has an observable, documented effect.

### SG08 — Design the backend and persistence boundary

**Depends on:** SG04–SG07.

Compare browser-only, local service, and hosted service against offline use, portability, long runs, collaboration, recovery, privacy, cost, and maintenance. Select and justify the smallest architecture meeting the requirements. Explicitly design backend services for projects/workspaces, versioned algorithms, run jobs, snapshots, evidence, and export/import. Even with browser execution, domain and persistence services must be independent of UI code.

Define repository interfaces and schema migrations. If a server is selected, specify APIs, validation, authorisation, job ownership, progress/cancellation, revision-conflict handling, idempotency, and backup/restore. Do not imply that browser local storage is cloud synchronisation. Keep heavy compute behind a worker/executor interface so it can later run locally or remotely without rewriting pages.

**Deliver:** frontend/backend responsibility diagram, data schema, API/service contracts, storage decision, and migration plan.

**Gate:** save/load and run management have an implementable contract; offline, unavailable storage, stale revisions, and failed jobs have defined behaviour.

### SG09 — Build the shared visual language

**Depends on:** SG02–SG06.

Define common node shapes, port markers, arrows, status symbols, selection states, units, chart axes, typography, spacing, and motion. Use short verbs: Create, Connect, Run, Pause, Step, Inspect, Compare, Save, Export. Use the same word for the same action; hide historical generation labels in technical details where practical.

Give each functional visual a specification: input → transformation/projection → display → user action → emitted command/selection → consumers. Use shape, labels, and line style as well as colour. Show actual flow on delivery, not continuous decorative particles. Keep readable labels and accessible descriptions rather than replacing all text with ambiguous icons.

**Deliver:** design tokens, component/state catalogue, terminology map, and worked visual examples.

**Gate:** equivalent controls behave consistently across pages; a user can distinguish editable state, observation, action, and navigation.

### SG10 — Create the common application shell and context

**Depends on:** SG05, SG09.

Make project/workspace, active run, selection, time, and save status visible and persistent across navigation. Organise navigation around Create → Connect → Run → Inspect → Compare → Save while preserving direct routes and useful aliases. Provide contextual next steps and upstream/downstream links that carry entity identity.

Use one concise page title and purpose sentence. Put the primary task and working visual near the top. Move detailed purpose allocations and implementation explanations into Inspect or Help. Distinguish dirty drafts from applied state and running jobs; do not discard work through routine navigation.

**Deliver:** common shell, navigation/context service, and recovery states.

**Gate:** route changes and Back/Forward retain the intended context; deep links resolve safely; empty routes offer a relevant creation or selection action.

### SG11 — Turn Home into a useful system overview

**Depends on:** SG06, SG09–SG10.

Replace the long introductory directory as the dominant view with a compact, live system map and clear Start blank, Resume, and Open example actions. Show the current workspace, its upstream/downstream structure, blocked dependencies, and saved state. Keep the full directory available on demand.

Show the verified engine → controller → experiment path as selectable connected stages. Explain whether running it changes current state or creates a new run. Provide progress and a direct link to its resulting evidence. Make component counts secondary and sourced from the registry.

**Deliver:** operational Home interface driven by shared project/run data.

**Gate:** the user can start or resume a task and inspect a blockage without reading the whole site; completion links to the actual resulting run.

### SG12 — Unify algorithm authoring and the registry

**Depends on:** SG05–SG10.

Improve Create algorithms with a visual neighbourhood selector, truth table, input preview, output preview, and explicit test controls. Retain equations and technical contracts in details. Version each saved rule; changing it creates a new version rather than silently altering past runs.

Make the registry the source of available algorithms for compatible consumers. Show which engines support each definition and which adapter is required. Pass algorithm IDs and versions directly into Build a tool, Build connected systems, and Combine algorithms where execution is supported.

**Deliver:** versioned registry service and visual authoring workflow.

**Gate:** a saved supported rule can be selected and executed downstream with traceable provenance; unsupported consumers are identified; prior evidence remains unchanged.

### SG13 — Make Build a tool the main composition workspace

**Depends on:** SG06–SG10, SG12.

Present a modular canvas with an add-module palette, visible typed ports, compatible-connection hints, selected-node inspector, and live outputs. Provide a keyboard/touch alternative to dragging. Use explicit input and output boundary nodes. Keep internal graphs encapsulated when packaging a reusable tool.

Support nested composition with bounded depth, named ports, versioned definitions, undo/redo, portable import/export, and meaningful validation. Show whether the selected node is waiting, ready, running, stale, or failed. Provide a tiny runnable example without replacing the blank-start option.

**Deliver:** reusable graph workspace connected to the registry, runtime, and persistence services.

**Gate:** create a tool, verify its behaviour, package it, instantiate it twice, and show that instances have independent state and the same declared contract.

### SG14 — Integrate environments, layers, and relationships

**Depends on:** SG06–SG07, SG09–SG10, SG12.

Treat Build connected systems, Build internal layers, and Connect systems as coordinated views of the same G6 workspace. Selecting an environment carries its ID into the internal-layer editor; selecting an edge opens its transformation and effect. Changes update all affected views through model events.

Visually distinguish internal algorithm edges, environment-to-environment influences, and website-module data routes. Provide clear parameter units and boundary conditions. Empty layer/relationship pages offer the exact prerequisite action and return to the intended context afterward.

**Deliver:** synchronised G6 editing and inspection views.

**Gate:** edit one selected environment or relationship and observe the corresponding state and visuals change without manually recreating data elsewhere.

### SG15 — Make compilation and binary execution legible

**Depends on:** SG06–SG10.

Present source → validation → compiled instructions → engine state → messages as a compact visual sequence. Link diagnostics to source and affected modules. Provide stable Run/Pause/Step/Reset semantics and show compiled versus edited versions.

Preserve G7 and G8 as distinct execution backends unless an explicit equivalence/migration case is proved. Make G8 binary outputs available through supported contracts to the builder, controller, and experiments. Label snapshot seeding separately from live coupling. Keep instruction words and packet fields available for detailed inspection.

**Deliver:** coherent compiler/engine interfaces and tested output adapters.

**Gate:** invalid source leaves the previous valid run intact or clearly replaces it according to a documented policy; stepping produces inspectable state and correctly attributed outputs.

### SG16 — Make feedback control visually understandable

**Depends on:** SG06–SG10, SG15.

Present Control a system as target → error → controller → actuator → matrix → sensor → feedback. Show target and measured trajectories, actuator limits, and saturation state. Expose relevant gains beside the selected controller; reveal advanced equations on demand.

Receive an explicit G8 snapshot or another supported source, preserve its lineage, and emit identified controlled snapshots to downstream tests. Differentiate previewed parameter edits from Apply/reset and current-run changes. Keep PID numeric registers distinct from binary cells.

**Deliver:** functional feedback-loop interface with source and consumer visibility.

**Gate:** a controlled/open-loop comparison uses matched initial conditions; displayed numbers reconcile with the underlying result; a changed gain has a traceable effect.

### SG17 — Improve algorithm composition and influence inspection

**Depends on:** SG06–SG10, SG12.

Make Combine algorithms primarily a network of algorithm instances with miniature state previews and selectable edges. Put the reference catalogue behind search/details. Show node-specific parameters with meaningful labels instead of a generic Parameter field whose interpretation changes across algorithms.

Expose binary projection thresholds, numeric-register state, boundary rules, seed, and previous-tick coupling. Distinguish active edges from measured effects: a delivered input may legitimately change zero output bits. Provide matched coupled/isolated runs and parameter sweeps with clear result context.

**Deliver:** G11 graph interface and compatible observation/output contracts.

**Gate:** an edge selection reveals its actual source, receiver, transformation, timing, and measured effect; identical seeds and versions reproduce supported results.

### SG18 — Unify inspection, charts, slices, and spatial views

**Depends on:** SG05–SG10, SG14–SG17.

Provide a common inspection context across Inspect system state, 3D views, matrix slices, trajectories, and node previews. Selecting a node, cell, region, or time should highlight the same entity in compatible views. Display source engine, run, revision, tick, and live/frozen/stale status.

Keep the G6 viewer explicitly G6-specific until real adapters support other engines. Add engine adapters deliberately; never relabel a G6 scene as another runtime. Use 3D when it helps a spatial question; use 2D slices/charts when more legible. Preserve accessible summaries and numerical inspection.

**Deliver:** observation adapter interfaces and linked visual inspection.

**Gate:** changing camera, colour, selection, or slice does not change model state; multiple views of one snapshot agree; unsupported sources cannot appear as supported.

### SG19 — Integrate experiments, evidence, and hypotheses

**Depends on:** SG05–SG08, SG15–SG18.

Unify the experiment workflow across Find and test patterns and Compare system changes: choose source → freeze starting conditions → select intervention → run matched baseline/control → inspect difference → verify → record interpretation → preserve evidence. Keep engine-specific experiment semantics explicit.

Show baseline/intervention side by side with shared scales and time selection. Store observations separately from hypotheses and link each claim to the exact run, metric, intervention, and reference. Represent inconclusive and zero-effect results clearly. Do not equate replay success with scientific validity or visual complexity with emergence.

**Deliver:** experiment specification, comparison interface, evidence bundle, and hypothesis records.

**Gate:** a saved experiment records enough state and versions to reproduce the promised result; changing an observer label cannot alter execution.

### SG20 — Make connection editing and inspection one coherent capability

**Depends on:** SG06–SG07, SG09–SG10, SG13–SG19.

Use one authoritative module/contract registry for Connect tools, Explore tool connections, and the Home map. Provide a visual graph plus a searchable accessible table. Selecting an edge shows its contract, source snapshot, last receipt, actual application, consumer freshness, and failure details.

Distinguish configured, enabled, delivered, consumed, and behaviourally verified states. A transport count must not be presented as proof that the receiver used the information. Show impacts before disconnecting; retain last data with a visible stale/frozen label where appropriate. Reject semantically unsupported routes and immediate cycles.

**Deliver:** graph editor, live connection inspector, and generated inventory.

**Gate:** disconnecting stops subsequent delivery, reconnecting has documented resynchronisation semantics, and a delivered-but-unused message is detectable.

### SG21 — Unify commands across pages, keyboard, and spatial controls

**Depends on:** SG06, SG09–SG10, SG14–SG20.

Replace command routing that relies on hidden DOM buttons with a command service and one capability-aware action registry. Choose an action, page controls, keyboard shortcuts, and optional VR controls invoke the same validated command with explicit target context.

Show prerequisites beside unavailable actions. Identify which runtime is being controlled. Keep text entry and file operations on appropriate interfaces. Stop background work predictably and preserve cancellation/recovery behaviour. Keep simulated VR tests distinct from physical-headset validation.

**Deliver:** shared command service and consistent control surfaces.

**Gate:** equivalent inputs produce the same domain command and result; a menu cannot accidentally run one engine while displaying another as its target.

### SG22 — Turn purpose and references into working interfaces

**Depends on:** SG02–SG06, SG09–SG10, SG19–SG20.

Give Purpose and design a navigable purpose → requirement → module → test → evidence map with coverage gaps and change impact. Give Read references searchable topic cards linked to the algorithms, assumptions, design decisions, or hypotheses they support. Preserve established findings, proposed adaptations, implemented measurements, and future ideas as separate statuses.

These pages receive registry/evidence/context data and emit useful selections, linked reference IDs, or review actions. They need not mutate simulation state to be functional.

**Deliver:** purpose/evidence explorer and contextual reference browser.

**Gate:** a user can trace a visible result to its purpose, method, and supporting source; missing evidence stays visibly missing.

### SG23 — Implement durable saves, recovery, and backend operations

**Depends on:** SG08, SG12–SG22.

Implement the selected storage/backend design with incremental migration from existing browser saves. Separate saving a definition, saving a workspace, checkpointing execution, and exporting evidence. Make each operation’s scope explicit. Preserve embedded versions, clocks, and pending messages when promising continuation.

Implement atomic imports, schema checks, size limits, corrupted-storage recovery, useful errors, and portable exports. For remote services, enforce ownership/permissions, idempotent commands, revision checks, cancellation, and recoverable job states. Keep secrets out of client code. Define retention and backup/restore according to actual deployment needs.

**Deliver:** working persistence/API integration, migrations, recovery procedures, and operational diagnostics.

**Gate:** reload, export/import, interrupted operation, rejected import, and supported resume scenarios behave as specified; one project cannot access another project’s protected data if multi-user service exists.

### SG24 — Verify integration and validate visual usability

**Depends on:** SG01–SG23.

Run proportionate unit, contract, integration, and browser checks. Cover positive and negative data paths, versions, clocks, feedback, stale states, duplicate events, failed saves, and rollback. Validate all routes at representative narrow and wide widths; test keyboard navigation, touch alternatives, reduced motion, descriptions, focus, contrast, and chart/table equivalence.

Measure performance with declared hardware and workloads. Test meaningful workflows with representative users when available: can they identify the next action, follow an input to its consequence, and explain what a result means? Record time, errors, and assistance. If people are unavailable, record heuristic review separately and leave user-validation claims unverified.

**Deliver:** requirement-by-requirement evidence, performance results, usability findings, and remaining defects.

**Gate:** critical workflows pass; mandatory requirements have appropriate evidence; limitations and pending human/device validation are explicit.

### SG25 — Complete integration, release readiness, and maintainability

**Depends on:** SG24 and closure of mandatory failures.

Run a final audit against the original purpose and every requirement, not just completed tickets. Reconcile routes, diagrams, contracts, documentation, and actual runtime behaviour. Produce a concise architecture guide, module-extension recipe, migration/recovery guide, known limitations, and prioritised backlog.

Record residual risks with owner, trigger, mitigation, and evidence. Prepare a release and rollback plan appropriate to the selected deployment. Demonstrate the complete system; do not mark complete on screenshots, static cards, successful builds, or unverified connection counts alone.

**Deliver:** integrated working application, final evidence index, and maintainable handover.

**Gate:** every mandatory requirement passes or is explicitly changed by the authorised stakeholder; no hidden mock replaces a promised function; deferred work is clearly reported.

## Required page relationships

Use this table as the initial target allocation. “Proposed” means the route must be implemented and verified before the UI advertises it. All new consumers must obey SG06; do not fabricate compatibility.

| Current interface | Receives / depends on | Main operation and visual | Output / consumer |
|---|---|---|---|
| Home | Workspace, run status, module registry, connection health | Start/resume; select a stage on a live map | Shared context and explicit workflow commands |
| Build a tool | Typed definitions, supported seed inputs, reusable tools | Compose graph and inspect ports/results | Executable/versioned tool; snapshots, saves and evidence |
| Create algorithms | Rule draft, neighbourhood, tests | Edit a visual rule and preview transformation | Versioned registry definition → compatible G6/G11; builder adapter where supported |
| Compile instructions | Structured source and G7 settings | Source → validation → instructions → execution | G7 state/evidence; no assumed G7→G8 translation |
| Build connected systems | G6 workspace and algorithm versions | Create/select environments in a graph | Shared G6 model → layers, relationships, spatial, metrics, experiments |
| Build internal layers | Selected G6 environment | Edit its internal process graph | Updated G6 configuration and dependent views |
| Connect systems | G6 environments and valid ports | Inspect/edit simulated influence | G6 edges → execution and controlled comparisons |
| View systems in 3D | G6 snapshots now; further adapters proposed | Spatial inspection and selection | View/selection state; commands only through explicit controls |
| Run the binary engine | G8 source, validated program and initial state | Step matrices and inspect message flow | Supported copied matrices → builder, PID, discovery; snapshots/evidence |
| Control a system | Seed matrix, target, gains, drivers | Inspect and operate feedback loop | Controlled snapshots → discovery; trajectory/evidence |
| Combine algorithms | Registry versions, seed, parameters, directed edges | Compose and compare algorithm network | G11 state/influence/evidence; wider observation adapters proposed |
| Find and test patterns | G8 source or explicitly selected received matrix, intervention | Matched runs and linked differences | Observations, replay evidence and separately stored hypotheses |
| Compare system changes | Frozen G6 configuration/state and ablation choice | Compare matched connected/ablated runs | G6 comparison evidence; shared comparison shell proposed |
| Inspect system state | G6 state now; other typed observation adapters proposed | Read linked metrics, state and selection | Inspection context and evidence selections |
| Connect tools | Module contracts and actual wiring | Create, enable, disable and inspect routes | Validated routing configuration and delivery events |
| Explore tool connections | Same registry, contracts and trace | Read relationship graph/table and effect | Selection, diagnostics and exported inventory |
| Choose an action | Commands, capabilities and target context | Search/select an available action | Validated command → owning service/runtime |
| Read references | Sources, topics and linked entities | Find support for an algorithm or claim | Reference selection and provenance links |
| Purpose and design | Purpose tree, requirements, module/test/evidence registry | Inspect coverage and gaps | Review selections, impact analysis and exports |

## Canonical information flow

```text
Rule editor ──versioned definition──> Registry ──supported adapter──> Runtime
Tool builder ──validated graph─────> Executor ──snapshot──────────> Inspector
G8 engine ──explicit seed copy─────> Controller ──seed/result──────> Experiment
G6 model ─────────────────────────> Layers / Relationships / 3D / Metrics
Frozen source + intervention ─────> Matched comparison ──────────> Evidence
Evidence + observer interpretation ─────────────────────────────> Hypothesis
Definitions + workspace + optional checkpoint + evidence ────────> Persistence
Purpose / requirements / references <──traceable links───────────> All capabilities
```

The data arrows above do not imply a single universal clock or an automatic live subscription. Every connection declares whether it sends a definition, command, seed, state update, checkpoint, selection, or evidence.

For a normal user interaction, follow: capture intent → identify target/context → validate command and revision → update a draft or commit domain state → execute under the declared scheduler → publish identified outputs → apply compatible consumer updates → refresh affected views → show success/failure and freshness → persist according to the selected save policy. An observer/view event must not re-enter the simulation unless a separate explicit command authorises that transition.

## Mandatory demonstrations

- Create a custom rule, test it, save a version, install it in a supported runtime, inspect its output, and reopen its definition. Confirm historical runs retain the prior version after an edit.
- Build a small input → transform → output tool, execute it, package it, and reuse independent instances in another workspace. Show an incompatible connection being rejected without corrupting the graph.
- Compile G8, step it, seed the controller, run a matched pattern experiment, verify replay, attach a hypothesis, and export evidence. Show provenance through the entire chain and explain which transfers are seed copies.
- Edit a G6 environment and relationship; inspect consistent updates in layers, 3D, metrics, and controlled comparison. Verify comparison does not mutate the source run.
- Disconnect a route, trigger new data, show the downstream stale/blocked state, reconnect, and demonstrate the documented recovery. Distinguish transport delivery from verified consumption.
- Save and reopen a workspace; resume only where checkpoint continuation is supported. Reject a malformed import atomically and recover from an unavailable persistence service.
- Complete the core workflow using keyboard and on a narrow screen. Confirm selections and camera changes leave scientific state unchanged.

## Required reporting

Start with the current-state evidence and gaps, then present the architecture, page/dependency map, contracts, and prioritised execution order. Track progress against exactly these 25 subgoals; use subtasks within them without silently shrinking the goal.

Report what changed, why, what passed, what remains unverified, and the next dependency to resolve. Keep routine implementation detail out of the product interface. At completion provide the working result, requirement/evidence index, and practical limitations. Never substitute a visual redesign for real integration, or technical integration for a comprehensible interface.

---

## Research basis for this prompt

The Atunbi-specific architecture and proposed visual designs above are design recommendations, not claims that a source mandates this exact implementation.

- **SEBoK v2.14, local project reference:** System Requirements Definition (printed pp. 544–554), Functional Architecture (pp. 567–568), System Integration (pp. 611–620), System Verification (pp. 621–622), System Validation (pp. 633–634), and Configuration Management (pp. 477–478). The consulted sections support requirements traceability, input/output decomposition, planned integration, comparison against expected results, validation against needs, and configuration integrity. Local PDF page numbers are printed numbers plus 13 in these sections.
- **[PhET-associated research: Implicit scaffolding in interactive simulations](https://arxiv.org/abs/1306.6544):** use affordances, constraints, cues, and feedback to support exploration. Here this informs compatible-port hints, prerequisite actions, immediate previews, and visible consequences; those are proposed Atunbi applications and require validation.
- **[W3C WAI: Complex Images](https://www.w3.org/WAI/tutorials/images/complex/):** retain short descriptions and access to fuller equivalent information for complex diagrams/charts. Here this informs linked data tables, readable summaries, and graph alternatives alongside the visual interface.

Inspection evidence: live browser traversal of Home and all 18 module pages; narrow-screen screenshots of Home, builder and controller; successful UI-reported connected workflow/replay; source inspection of `src/pages.ts`, `src/site-pages.ts`, `src/flow/site.ts`, `src/flow/runtime.ts`, storage call sites, and feature documentation. This preparation did not exhaustively test every control, run physical-headset validation, conduct a user study, or certify accessibility.