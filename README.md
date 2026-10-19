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
