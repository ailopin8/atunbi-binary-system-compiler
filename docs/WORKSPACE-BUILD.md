# Modular workspace delivery

Target: build, verify, save and reuse working tools from connected binary-driven processes. The matrix remains the engine substrate; typed number/text adapters supply explicit encodings above it.

## Acceptance and limits

- New workspace is empty. Add, edit, move, connect, remove and undo modules using pointer or keyboard controls.
- Each binary signal is exactly 1,000 bits. Logical gates and rule operators transform those bits. Numbers and text cross explicit encoding modules.
- Deterministic ticks, explicit one-tick delay feedback, private per-instance state and atomic failed ticks.
- Local saves and portable JSON preserve graphs and embedded tool definitions. Imports validate before changing current work.
- Verified graphs can become reusable modules with exposed inputs/outputs; two instances have independent state.
- Challenges check actual outputs, not visual appearance. Replay verifies repeatability, not arbitrary semantic correctness.
- Limits: 64 nodes, 128 edges per graph, four nested graph levels, 256 expanded nodes, 16 definitions per graph, 1 MB import, bounded runs. No arbitrary script execution.
- Existing labs, engine semantics, saved URLs, WebXR and controller functions remain supported.

## Sequential delivery record

1. COMPLETE — requirements, contracts, scope and acceptance recorded here.
2. COMPLETE — portable versioned graph, node, edge, value and embedded-tool contracts in model.ts.
3. COMPLETE — matching typed ports, one writer per input, bounded schema validation and explicit-delay cycle checks.
4. COMPLETE — staged deterministic ticks, topological evaluation, explicit delay initialization and private nested memory.
5. COMPLETE — sources, AND/OR/XOR/NOT, periodic shift, eight-bit rules, counter and explicit memory operators.
6. COMPLETE — unsigned byte adapters and bounded UTF-8 frames with strict decoding.
7. COMPLETE — blank scrollable canvas, categorized palette and colored module cards.
8. COMPLETE — typed connection editor, inspector, pointer/keyboard movement, removal and bounded undo.
9. COMPLETE — per-module outputs, tool outputs, bounded execution, explicit errors and replay verification.
10. COMPLETE — explicit bounded local saves, reopen/delete, portable export and validated atomic import.
11. COMPLETE — replay-gated packaging with explicit purpose, exposed ports, immutable embedded definitions and local tool library.
12. COMPLETE — composite evaluation uses per-instance nested memory; insertion embeds exact definitions and detects ID conflicts.
13. COMPLETE — behavioral checks for full-matrix inversion, exact counter sequences and Unicode text round trips, with loadable examples.
14. COMPLETE — dedicated page, website command/state/export ports, direct G8 seed input, home navigation, module inventory and controller actions.
15. COMPLETE — full verification passed; delivery committed to main for GitHub publication.

## Design decisions

The executable workspace graph is separate from the website's page-routing graph. Its processing nodes have private state; website pages are views and controls. Composite definitions embed their full implementation rather than resolving a mutable global library at replay time. Cycles require an explicit delay at the graph level where they occur. A failed tick preserves all previous module state. Physical resource budgets remain a separately specified future model.

## Verification evidence — 19 October 2026

`npm run verify` passed: TypeScript checks, 45 model tests, production build, 19 main browser workflows, architecture inspection (28 components), relationship checks (51 contracts), whole-system workflow and the dedicated tool-workspace browser suite. All 97 controller actions were exercised. Browser checks include mobile layout, automated accessibility and simulated WebXR; physical-headset testing is not claimed.

The new workspace checks cover manual construction, typed connections, actual outputs, replay, packaging, reuse, local persistence, JSON exports/imports, rejected imports, keyboard edits, incompatible ports, direct G8 input and its disabled-route guard. Model tests include atomic failed ticks, delayed feedback, independent nested state, strict encodings, storage failure and nesting limits.

Known release limits: the production bundle triggers a size warning; page-level code splitting is a follow-up. AppDeploy publication remains blocked by the existing quota until its reset. GitHub source and the local app include this update; the hosted URL must not be described as updated until deployment succeeds.
