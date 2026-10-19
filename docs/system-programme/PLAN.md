# Coherent modular environment — implementation plan

The complete scope is preserved in OBJECTIVE.md; ledger.json tracks exactly SG01–SG25. Prior delivery is a baseline, not proof of this programme's completion. No synced project reference is modified.

## Current evidence and gaps

Baseline commit: ed6f9540ee43cf332eb1670e7826eedc8aaacec1. Localhost responded HTTP 200 on 19 October 2026. Source registry defines 18 routes. Existing tests will be rerun before their claims become baseline evidence. G6, G7, G8, PID, G11 and builder remain separate engines.

Source inspection confirms broad signal-kind matching in flow/runtime.ts, receipt accounting without an explicit consumption acknowledgement, command fallback through DOM controls, local storage calls in several UI modules, and no common project/run identity service. These are gaps against SG05/06/08/20/21/23, not reasons to remove working engines. Repository scan found Vite/browser sources and no API/database implementation; external hosting services are not thereby ruled out.

## Dependency-ordered work

1. SG01: inspect every route and major capability; record empty/populated screenshots, controls, storage boundaries and fresh regression results. Preserve Git baseline and isolated browser test storage.
2. SG02–04: establish operating scenarios, measurable requirement IDs and ownership; decompose author/validate/compile/compose/execute/observe/compare/annotate/persist/export; record architecture alternatives.
3. SG05–08: implement identity/context and versioned envelopes, semantic adapters, deterministic execution contracts, UI-independent repositories and executor/service boundary. Choose browser/local/hosted storage from explicit requirements. Do not add a server merely to match page count.
4. SG09–11: establish shared visual tokens and shell; reduce introductory viewport overhead; build an operational Home with source-aware context and real result navigation.
5. SG12–17: version the registry, integrate builder rules and redo, coordinate G6 selection, expose compiler draft/applied state, and add real PID/G11 visual computations with provenance.
6. SG18–20: linked source-specific inspection; frozen experiments/evidence/hypotheses; semantic connection editor with delivered versus consumed/freshness states.
7. SG21–23: complete domain command extraction; purpose/evidence and reference exploration; migrations, recovery and supported checkpoint continuation.
8. SG24–25: exercise all mandatory demonstrations, performance and accessibility checks, original-scope completion audit, release/rollback and extension guides. Push completed source to GitHub. Keep publishing status explicit.

Each subgoal follows inspect → baseline → contract/alternatives → implementation → consumer/failure verification → interface validation → traceability. A prerequisite cannot be treated as satisfied by a static diagram. Existing tests are maintained, expanded or replaced according to the actual requirement, not used to redefine it.

## Architecture direction to evaluate

Use a modular application: domain engines and registry; command/executor orchestration; versioned repository services; observation/evidence adapters; presentation and navigation. Pages consume these services and shared selection. Preserve distinct clocks and numeric/binary semantics. Prefer explicit copied seeds and frozen evidence over implied universal live coupling. External deployment remains a separate operation.

Trade-off to resolve at SG08: browser storage gives offline simplicity but limited durability; a local service supports filesystem recovery and jobs but needs installation; hosted storage supports collaboration but adds authentication, privacy, cost and operations. No choice is represented as implemented yet.

## Evidence and limitations

Automated checks establish covered behavior only. Human usability testing and physical-headset validation remain unverified unless actually performed. Every mandatory requirement must have an owner, acceptance and concrete evidence at final audit. Performance targets follow measured device/workload budgets. Reviewable artifacts and tests remain versioned; screenshots and verbose runtime logs stay under output/ or test-results/.
