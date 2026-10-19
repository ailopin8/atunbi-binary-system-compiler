# Àtúnbí Binary System Compiler

An experimental systems laboratory combining a 3D G6 network, G7 system-sentence compiler, G8 binary-only kernel and G9 Semantic Discovery Lab, G10 PID/composition lab and an executable modular website workflow.

[Live application](https://atunbi-algorithmic-sandbox-network-g8lqqr.v2.appdeploy.ai/) · [Observed features and controller menu](FEATURES.md) · [Module contracts and algorithm references](docs/MODULAR-WORKFLOW.md)

## Run locally

Use Node.js 22 or later.

```sh
npm ci
npm run dev
```

Open the URL printed by the development server. Opening `index.html` directly as a local file does not compile TypeScript modules.

## Verify

```sh
npm run typecheck
npm test
npm run build
npx playwright install chromium
BROWSER_CHANNEL=chromium npm run test:browser
```

The browser suite starts its own local server, checks desktop/mobile workflows and accessibility, and exercises a simulated WebXR session. Results are written to `test-results/feature-checks.json`. It uses installed Chrome by default, falling back to Playwright Chromium. GitHub Actions runs the same checks using Chromium.

## Controller menu

Use the **Controller menu** navigation link on the page. In VR, point the controller ray at a category or action and press select. Thumbstick up/down changes the highlighted entry; select activates that entry when the ray misses. Grip goes back. Previous/Next paginate categories and actions.

Reset, clear and example replacement require an in-menu confirmation. The same action definitions drive page buttons and VR targets. Text entry, imports and downloads remain page actions and are explicitly unavailable in VR. Leaving VR or hiding the page pauses the running runtimes.

The 3D scene shows G6. G7/G8/G9 remain independent runtimes whose results can be read in the menu and on the page. WebXR tracking, controller mappings, readability and comfort still require verification on a physical headset. Native Unity/Android SDKs and native hand-tracking components are not bundled.

## Binary observation

G8 cells store only 0 or 1. G9 measures population, unlike neighboring edges, ON-cell components, largest component, changed bits, final-step stability, exact state recurrence and full-VM cycles within a bounded window. Component analysis uses six-neighbor periodic 3D topology; G8's elementary update rule runs along x. Cycle identity includes all matrices and queued messages.

Baseline and intervention share initial state, program and duration. Interventions are no-op, one-bit flip and receiving disabled. Replay compares the full result exactly. Cross-arm recurrence is not independent replication; annotations and observer-assigned hypothesis status do not modify executable state.

## Source and merges

This repository was empty when source synchronization began. There were no remote commits, branches or pull requests to merge. The first import includes the existing deployed app, later controller changes and tests. Subsequent updates should fetch and merge remote changes, resolve overlapping edits without discarding features, and rerun verification before pushing.

## PID and modular workflow

Open **G10 composition** for PID, oscillator, logistic map, binary neighborhood diffusion and rule 90. Compare a controlled and open-loop plant from identical 1000-bit seeds and verify exact replay. Open **Modular workflow** to inspect declared ports, connect or disable edges, step delayed messages and save/export wiring. Import a compiled G8 matrix into composition; G9 can explicitly use the received matrix as its initial seed.

The logo is an image resource at `public/resources/atunbi-logo.png`. It is distributed with the source and staged through the deployment resource uploader.

`node scripts/generate-menu.mjs` regenerates the menu inventory. Signal-engine and composition tests run with `npm test`; browser checks exercise all current categorized actions.


### G11: algorithm ecology

The researched 12-algorithm library adds configurable directed networks in periodic 10×10×10 matrices, measured influence colors, outcome-only and individual views, coupled/isolated comparisons, seed/parameter sweeps and exact replay. Read [ALGORITHM-ECOLOGY.md](docs/ALGORITHM-ECOLOGY.md) for formulas, primary research, GitHub references, numerical adaptations and limits. `npm test` includes 128-tick boundedness checks for every equation and exact counterfactual mask checks. The full browser suite covers all 84 controller actions.

Deployment of this revision is pending: AppDeploy reported its daily deployment credit limit on 19 October 2026, resetting 20 October at 00:00 UTC. The existing live app remains available; the G11 source can be run locally with `npm ci && npm run dev`.

### Algorithm workshop and feature map

Create native binary algorithms using one explicit contract: three prior-state bit inputs → eight-row truth table → one next-state bit per cell. A three-step creator validates and tests each rule before registering it for G11. Saved rules include name, category, purpose, aim and color, support browser persistence and JSON backup, and remain embedded in running experiments after later edits. Registry delivery is a genuine workflow connection.

The interface now offers module guides, grouped explanations, a module focus mode and an exportable feature/connection map. See [workshop documentation](docs/ALGORITHM-WORKSHOP.md) and [complete feature and controller list](docs/FEATURE-CONNECTIONS.md). The shared menu contains 12 categories and 88 actions.

### Home and dedicated module pages

The root opens a home page organized into Create, Simulate, Inspect, Connect and Learn. Each of the 17 modules has its own address, heading, title and related links. For example, `?page=workshop` opens the creator and `?page=ecology` opens G11. Browser navigation retains models and drafts in the current session. Old section links continue to work. See [page directory and navigation contracts](docs/WEBSITE-PAGES.md).

### Research foundation and G6 algorithm expansion

The Theory page now provides BARE v2: a proposed purpose hierarchy with six decomposed purposes, seven principles, five testable hypotheses, 22 annotated papers and purpose allocations for all pages and 90 controller actions. The home and page headers expose their contribution to this hierarchy. Read the [research report](docs/RESEARCH-FOUNDATION.md) or export the structured map from `?page=theory`.

G6 now executes its original four fields plus all 12 lattice algorithms and saved workshop rules. Both primary and internal selectors group the choices by type. Numeric registers and embedded custom definitions survive steps, counterfactual experiments and network export/import. See [the G6 adapter contract](docs/RESEARCH-FOUNDATION.md#5-g6-execution-repair-and-numerical-contract). The original field solvers and periodic library solvers have explicitly different boundaries; G8 remains the strict binary kernel.

The framework does not claim that visual complexity proves emergence, that voxels reproduce biological cells, or that 10³ output establishes a fractal dimension. G-emergence, effective information, Lenia, mechanical morphogenesis and VR cognitive benefits are clearly labelled research proposals. Deployment remains pending the existing hosting credit limit.

## Systems architecture

The theory page includes a grouped, directed 2D dependency matrix, component ports, subsystem contracts, framework definitions and a stock/flow/feedback view. See [systems architecture](docs/SYSTEMS-ARCHITECTURE.md) and [exported graph](docs/systems-architecture.json). `npm run test:architecture` starts a test server and checks the UI. Importance colors are design ratings, not empirical influence.

## Relationship purposes and verification

Pages and runtime modules use plain action names while IDs and saved links stay stable. The theory page lists every relationship’s purpose, expected receiving result, check method and live delivery evidence. Use binary engine matrix on the pattern-test page imports bits directly without passing through the controller. See [relationship contracts and the update algorithm](docs/RELATIONSHIP-PURPOSES.md). Run `npm run verify` before accepting changes; CI includes the architecture and relationship browser checks. Proposed integrations remain explicitly marked.

## Whole-system home

The home page presents components, current connections, published state and delivery activity as one system. A staged workflow runs engine → controller → pattern testing → exact replay using existing settings and validated routes. See [whole-system architecture](docs/WHOLE-SYSTEM-WORKSPACE.md). Artifacts and processing activity are distinguished from physical material and energy. `npm run test:system` checks the connected workflow and failure guards.

## Build a modular tool

Open `?page=builder` to start with a blank canvas. Add modules, connect matching ports, and step the graph. Use a target example to try inversion, counting or a Unicode text round trip. Verify replay before saving a reusable tool; its Tool input/output modules become its ports. Save work locally or export JSON for a portable backup. Reusable instances have separate memory, and feedback requires an explicit delay.

The binary matrix remains the engine substrate. Number and text adapters declare their encodings; browser modules do not imply physical energy or material conservation. See [the 15-step delivery record and limits](docs/WORKSPACE-BUILD.md). Run `npm run verify` for the full automated checks.

## Coherent modular environment programme

The ongoing 25-subgoal programme is tracked in [the implementation plan](docs/system-programme/PLAN.md), [living ledger](docs/system-programme/ledger.json), and [requirements](docs/system-programme/requirements.json). [Fresh baseline evidence](docs/system-programme/BASELINE.md) distinguishes current working behavior from the new acceptance requirements. Run `node scripts/check-programme.mjs` to check record integrity; it does not certify product completion.
