# SG01 — current system baseline

Reviewed 19 October 2026 at Git baseline ed6f9540ee43cf332eb1670e7826eedc8aaacec1. The isolated route audit reached localhost and reviewed Home plus all 18 module routes at 1280×900 and 390×844. It inventoried 561 controls (including nested/inactive controls), headings and visual elements. No route overflow or page exception was observed. See baseline-routes.json for the actual inventory, not a fixed product count. Screenshots: output/playwright/sg01; reproduce with `node scripts/audit-baseline.mjs` while the local server is available.

## Capability review

| Routes / responsibility | Baseline classification | Fresh verification / limitations |
|---|---|---|
| builder: typed composition, logic, encodings, replay, local saves, export/import, reusable tools | observed working for covered workflows; partial against new goal | tests/workbench-browser.mjs and workbench.test.mjs; no redo or versioned custom-rule registry adapter |
| workshop: rule editing, tests, installation into G6/G11 | observed working; version history partial | main browser workflow + workshop/g6-library tests; editing/history identities need SG12 |
| compiler: G7 source/compiler/VM | observed working for presets and covered errors | main browser + kernels tests; separate semantics, no G7→G8 adapter |
| network/layers/relationships: shared G6 state, algorithm layers and influences | observed working for covered mutations/comparisons; selection continuity partial | main browser + g6-library tests; SG14 selection/context not established |
| spatial: G6 Three.js view, camera and optional XR controls | desktop and simulated XR observed working; headset untested | main browser + spatial.test.html; scene remains G6-specific |
| binary: G8 source/compiler, matrices/messages, copied outputs | observed working | kernel/browser/direct relationship tests; no shared run/version envelope |
| pid: numeric PID with bounded binary actuator | observed working; new visual loop/provenance partial | composition tests and browser paths; numeric state is distinct from bits |
| ecology: built-in/custom algorithms, previous-tick coupling, projections and comparisons | observed working for covered cases; linked inspection partial | library/browser tests; generic parameter labels and separate observations remain |
| discovery: matched experiments, descriptors, replay, notes | observed working; evidence identity partial | discovery tests/browser; observer labels separate, notes not exact shared run entities |
| experiments: G6 matched connected/ablated comparison | observed working | browser tests; source preservation checked; no universal experiment model |
| metrics: G6 observations | observed rendering and covered G6 state updates | no adapters proving other engines supported |
| wiring/features: website routes, traces, inventory | observed working transport; semantic/consumption distinction incomplete | flow tests, relationship browser; broad payload matching does not prove meaningful use |
| controllers: categorized page and XR commands | covered actions observed working; architecture partial | 97 actions exercised; fallback still clicks DOM; not UI-independent |
| references/theory: reference filtering, purpose allocation, matrix and export | observed working for existing interactions; traceability partial | foundation/architecture/browser; requirements/test/evidence links incomplete |
| Home: directory, whole-system state and staged command | observed working for covered path; task-first layout partial | system-browser; counts derived, no shared project identity/resume |

## Assets, dependencies and backend boundary

Vite + TypeScript, Three.js, DOM rendering; static index, bundled styles, logo PNG and favicon SVG. Source and package inventory found no application HTTP API, database schema, server executable or server dependencies. The local server is Vite. Git remote is ailopin8/atunbi-binary-system-compiler; build configuration supports AppDeploy output paths. This establishes browser-only code in this repository, not absence of services in unrelated accounts. No unknown account/service was provisioned or claimed.

The route audit records observed XHR/fetch requests. Static asset delivery and browser compute are not an application backend. No user authentication, multi-user ownership or cloud synchronization capability is advertised by this baseline.

## State and artifact inventory

- Builder: graph/tool definitions with embedded graphs; browser keys atunbi.workspaces.v1 and atunbi.tools.v1. Save opens at initial execution state, not a checkpoint.
- Workshop: custom rule browser storage and JSON backup; definitions install into compatible G6/G11 registries.
- Wiring: atunbi.workflow, edge configuration only; pending queues are cleared on restore.
- Discovery: atunbi.g9.notes; observer notes stored separately from executable state.
- G6/G7/G8/PID/G11: distinct in-session states and exports; full cross-engine checkpoint continuation is not established.
- Evidence and source exports are browser downloads; views and related links do not imply subscriptions or compatible replay formats.

## Gaps and review evidence

The narrow builder screenshot shows its first working control below the initial viewport after navigation, repeated title, purpose allocations and guidance. This is a heuristic usability observation, not a user-study finding. SG09–11 will reduce that overhead. Empty dependency pages need precise upstream actions; screenshots document current states rather than proving task clarity.

Broad signal kinds, absent universal IDs/versions, DOM command fallback, UI-owned storage and no explicit consumption acknowledgement are source-confirmed gaps. The README still stated 17 modules while the route registry contains 18: inventories must become generated. Existing queue/graph bounds are real, but no latency budget or measured device performance baseline has yet been established.

## Restore and reproduction

Do not reset the working checkout to restore a baseline. Create a separate checkout at the baseline SHA, install with `npm ci`, then run `npm run verify` and `npm run dev -- --host 127.0.0.1 --port 4173`. Browser checks use isolated contexts. The audit does not read or overwrite the user's browser storage. Save/export user artifacts before later migration tests; do not infer recovery from a Git snapshot of source alone.

Fresh verification results are indexed in baseline-verification.json after completion. Uncovered behavior, physical headset use, human usability and future adapters remain unverified. Source/assets, routes, major capabilities, dependencies, artifacts and restoration are accounted for; this baseline does not certify the new programme.
