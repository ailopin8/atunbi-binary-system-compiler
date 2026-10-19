# Requirement allocation and verification plan

Original clauses remain immutable in requirements.json. Every row below allocates a requirement group; each clause has its own stable ID, need, owner, acceptance, verification route and evidence field. Planned paths are not claims of implementation. No product requirement is verified by this allocation alone.

| Group | Function | Module owner | Contract | Verification route |
|---|---|---|---|---|
| SG01 | inventory | scripts/audit-baseline.mjs | route registry | node scripts/audit-baseline.mjs |
| SG02 | purpose allocation | docs/system-programme/CONOPS.md | scenario success and failure | review every route against CONOPS |
| SG03 | requirements management | scripts/check-programme.mjs | original clause traceability | node scripts/check-programme.mjs |
| SG04 | domain isolation | src/engines/; src/algorithms/; src/workbench/ | state ownership and replaceable domain interfaces | tests/module-boundaries.test.mjs |
| SG05 | identity and context | src/domain/ (planned) | entity identity, revisions and lifecycle | tests/domain.test.mjs (planned) |
| SG06 | semantic exchange | src/flow/runtime.ts; src/flow/contracts.ts (planned) | versioned envelope and adapter catalogue | tests/contracts.test.mjs (planned) |
| SG07 | schedule and execute | src/engines/; src/flow/runtime.ts; src/workbench/engine.ts | clocks, staged commit, queues and cancellation | tests/kernels.test.mjs; tests/flow.test.mjs; scheduler cases planned |
| SG08 | repository and executor boundary | src/services/ (planned) | repository revisions, executor jobs, migrations | tests/services.test.mjs (planned) |
| SG09 | visual projection and intent | src/ui/ (planned); src/styles.css | visual state, input, command and selection | tests/visual-language-browser.mjs (planned) |
| SG10 | navigate and select | src/site-pages.ts; src/domain/ (planned) | shared context, dirty state and safe deep links | tests/context-browser.mjs (planned) |
| SG11 | start and resume | src/system-overview.ts; src/site-pages.ts | workspace/run selection and workflow result | tests/system-browser.mjs; resume cases planned |
| SG12 | author and version | src/algorithm-workshop.ts; src/algorithms/library.ts | immutable rule versions and supported adapters | tests/workshop.test.mjs; version-history cases planned |
| SG13 | compose and package | src/workbench/ | versioned graph boundaries, instances and editing history | tests/workbench.test.mjs; tests/workbench-browser.mjs; registry/redo cases planned |
| SG14 | edit environment and relationships | src/editor.ts; src/engines/g6.ts (planned) | one G6 workspace and shared selection | tests/g6-selection-browser.mjs (planned) |
| SG15 | compile and execute binary | src/engines/g7.ts; src/engines/g8.ts; src/g7.ts; src/g8.ts | draft versus applied program, snapshots and seeds | tests/kernels.test.mjs; provenance cases planned |
| SG16 | control and measure | src/algorithms/composition.ts; src/composition-lab.ts | PID numeric registers, actuator, seed lineage | tests/composition.test.mjs; loop-visual cases planned |
| SG17 | compose algorithms and compare | src/algorithms/library.ts; src/library-lab.ts | previous-tick coupling, projection and measured effect | tests/library.test.mjs; edge-inspector cases planned |
| SG18 | observe and select | src/observation/ (planned); src/editor.ts | engine-specific snapshot projection and shared selection | tests/observation.test.mjs (planned) |
| SG19 | experiment and annotate | src/discovery.js; src/g9.ts; src/emergence.ts | frozen conditions, evidence and linked hypothesis | tests/discovery.test.mjs; evidence lifecycle cases planned |
| SG20 | connect and inspect delivery | src/flow/runtime.ts; src/workflow-view.ts; src/feature-map.ts | configured/enabled/delivered/consumed/freshness | tests/flow.test.mjs; receipt/freshness cases planned |
| SG21 | dispatch command | src/commands/ (planned); src/lab-actions.ts | validated context command, capability and result | tests/commands.test.mjs (planned) |
| SG22 | trace purpose and sources | src/theory-lab.ts; src/references.ts | purpose/requirement/evidence/reference selection | tests/purpose-browser.mjs (planned) |
| SG23 | persist and recover | src/services/ (planned); src/workbench/storage.ts | revisioned atomic save/import/checkpoint and recovery | tests/persistence.test.mjs (planned) |
| SG24 | verify and validate | tests/; scripts/check-programme.mjs | seven full demonstrations, accessibility and workload budget | npm run verify plus new requirement scenarios and measurements |
| SG25 | release and maintain | docs/system-programme/; .github/workflows/verify.yml | original-scope completion, extension and rollback | final requirement audit and release smoke/rollback check |

## Acceptance policy

Exact checks use 1,000-bit equality, immutable version identity, no partial import mutation, independent instance memory and deterministic command histories. Numeric comparisons must declare tolerance per algorithm before testing. Every advertised edge requires its own schema and consuming-behavior check, not just transport success. Every retained route requires a useful action/decision, keyboard/touch path and result/source identity. Missing evidence stays missing.

Performance workload budget: retain current 1,000-bit signals, builder 64 nodes/128 edges/four graph levels/256 expanded nodes and workflow 128 edges/512 queued messages as the initial supported upper workloads; test a minimal graph, representative 12-node graph and limits. Record OS/CPU/browser, viewport, warmup and p50/p95 for startup, tick and navigation before choosing latency thresholds. Numeric engine horizons retain their validated limits. Do not silently lower existing workloads to meet a new target.

Mandatory: portable local operation, explicit storage failure, save/reload, recovery and supported continuation only. Optional: hosted collaboration and new engine/VR adapters. Browser storage must never be described as cloud sync. Full replay checkpoints require all state, not just visible matrices. Human study and physical-headset evidence cannot be substituted by automated checks.
