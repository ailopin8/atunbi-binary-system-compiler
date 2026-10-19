# Relationship purposes and module naming procedure

The binary matrix remains the engine. The workspace composes tools above it. This document defines why each current relationship exists and how to verify its receiving result. Technical IDs and URL aliases remain stable. Names are actions in plain language, not claims that proposed functionality already works.

## Update algorithm

1. List current modules, ports and saved identifiers; keep identifiers stable so saved work and links still open.

2. Describe each process as an action and its result. Write what it receives and what it produces.

3. For each relationship, define the receiving task, expected result, timing and reason it is needed.

4. Check both endpoints and port types. Type compatibility is necessary; it does not prove the receiver uses the data.

5. Exercise the feature with known inputs. Check the receiving state or result, then repeat with the connection disabled and with invalid input.

6. Record observed delivery separately from a successful feature test. Missing, failed or untested behavior remains unverified; do not rename a proposal as a finished feature.

7. Choose a short action-based name, apply it to page navigation, module cards and connection descriptions, and preserve the old technical identifier.

8. Run model, browser, export, replay and accessibility checks. Fix failures and rerun affected checks before committing the change.

9. Export the purpose map and test evidence, push the checked changes, and publish only when hosting permits.

## Functional verification gate

Run `npm run verify`: type checking → model tests → production build → full browser workflows → architecture checks → direct-relationship checks. Stop on the first failed stage. CI runs the same constituent checks. The direct-path browser check compares all 1,000 imported bits against the engine initialization, runs an experiment, verifies replay and checks disconnected-route and disconnected-command failures. Model tests cover invalid payloads and typed routing. Physical headset behavior requires a separate device test.

The website’s Check current relationships button is deliberately read-only: it checks endpoints, matching types, a receiver and retained delivery evidence. It does not exercise every feature or mark a delivered message as a passed feature test. Each row states its required behavioral check. Trace evidence is bounded and session-specific; no retained event does not mean a feature is broken.

## Naming map

| ID (unchanged) | Plain name |
|---|---|
| controllers | Choose an action |
| g6 | Build connected systems |
| g7 | Compile instructions |
| g8 | Run the binary engine |
| g9 | Find and test patterns |
| composition | Control a system |
| ecology | Combine algorithms |
| workshop | Create algorithms |
| foundation | Purpose and design |
| workflow | Connect tools |
| workbench | Build a tool |
| sources | Edit instructions |
| metrics | Collect state updates |
| exports | Download results |
| notebook | Collect observer notes |
| feature-inventory | Explore tool connections |
| navigation | Choose a page |
| g6-view | View: Build connected systems |
| g7-view | View: Compile instructions |
| g8-view | View: Run the binary engine |
| g9-view | View: Find and test patterns |
| composition-view | View: Control a system |
| ecology-view | View: Combine algorithms |
| algorithm-registry | Share saved algorithms |
| reference-source | Provide references |
| references | Read references |
| identity | Set the logo |
| shell | Show the website |

## Relationship contracts

### Choose an action → Build connected systems

ID: controls-g6. Output g6 → input command (command); immediate delivery.

Purpose: Send a chosen action to Build connected systems.

Expected result: The requested control executes only when its prerequisites and guards allow it.

Functional check: Exercise the action and inspect its result; disconnect this route and confirm the action is blocked.

### Choose an action → Compile instructions

ID: controls-g7. Output g7 → input command (command); immediate delivery.

Purpose: Send a chosen action to Compile instructions.

Expected result: The requested control executes only when its prerequisites and guards allow it.

Functional check: Exercise the action and inspect its result; disconnect this route and confirm the action is blocked.

### Choose an action → Run the binary engine

ID: controls-g8. Output g8 → input command (command); immediate delivery.

Purpose: Send a chosen action to Run the binary engine.

Expected result: The requested control executes only when its prerequisites and guards allow it.

Functional check: Exercise the action and inspect its result; disconnect this route and confirm the action is blocked.

### Choose an action → Find and test patterns

ID: controls-g9. Output g9 → input command (command); immediate delivery.

Purpose: Send a chosen action to Find and test patterns.

Expected result: The requested control executes only when its prerequisites and guards allow it.

Functional check: Exercise the action and inspect its result; disconnect this route and confirm the action is blocked.

### Choose an action → Control a system

ID: controls-composition. Output composition → input command (command); immediate delivery.

Purpose: Send a chosen action to Control a system.

Expected result: The requested control executes only when its prerequisites and guards allow it.

Functional check: Exercise the action and inspect its result; disconnect this route and confirm the action is blocked.

### Choose an action → Combine algorithms

ID: controls-ecology. Output ecology → input command (command); immediate delivery.

Purpose: Send a chosen action to Combine algorithms.

Expected result: The requested control executes only when its prerequisites and guards allow it.

Functional check: Exercise the action and inspect its result; disconnect this route and confirm the action is blocked.

### Choose an action → Create algorithms

ID: controls-workshop. Output workshop → input command (command); immediate delivery.

Purpose: Send a chosen action to Create algorithms.

Expected result: The requested control executes only when its prerequisites and guards allow it.

Functional check: Exercise the action and inspect its result; disconnect this route and confirm the action is blocked.

### Choose an action → Purpose and design

ID: controls-foundation. Output foundation → input command (command); immediate delivery.

Purpose: Send a chosen action to Purpose and design.

Expected result: The requested control executes only when its prerequisites and guards allow it.

Functional check: Exercise the action and inspect its result; disconnect this route and confirm the action is blocked.

### Choose an action → Connect tools

ID: controls-workflow. Output workflow → input command (command); immediate delivery.

Purpose: Send a chosen action to Connect tools.

Expected result: The requested control executes only when its prerequisites and guards allow it.

Functional check: Exercise the action and inspect its result; disconnect this route and confirm the action is blocked.

### Choose an action → Build a tool

ID: controls-workbench. Output workbench → input command (command); immediate delivery.

Purpose: Send a chosen action to Build a tool.

Expected result: The requested control executes only when its prerequisites and guards allow it.

Functional check: Exercise the action and inspect its result; disconnect this route and confirm the action is blocked.

### Edit instructions → Find and test patterns

ID: source-g9. Output source → input source (source); immediate delivery.

Purpose: Give pattern tests the same declared binary instructions as the engine.

Expected result: Discovery validates and compiles the provided source before an experiment.

Functional check: Valid source runs; invalid source and disconnected delivery block the experiment.

### Build connected systems → Collect state updates

ID: g6-metrics. Output state → input data (snapshot); immediate delivery.

Purpose: Keep the latest state update for inspection.

Expected result: The shared collector stores the latest payload; this alone does not imply a cross-tool dashboard or aggregation.

Functional check: Publish a state change and check the stored payload and delivery trace.

### Build connected systems → Download results

ID: g6-exports. Output evidence → input data (evidence); immediate delivery.

Purpose: Let the user download results from Build connected systems.

Expected result: An evidence payload with download=true produces a JSON file; download=false only stores a payload.

Functional check: Download and parse the file; verify provenance and content, and check disconnected-export feedback.

### Compile instructions → Collect state updates

ID: g7-metrics. Output state → input data (snapshot); immediate delivery.

Purpose: Keep the latest state update for inspection.

Expected result: The shared collector stores the latest payload; this alone does not imply a cross-tool dashboard or aggregation.

Functional check: Publish a state change and check the stored payload and delivery trace.

### Compile instructions → Download results

ID: g7-exports. Output evidence → input data (evidence); immediate delivery.

Purpose: Let the user download results from Compile instructions.

Expected result: An evidence payload with download=true produces a JSON file; download=false only stores a payload.

Functional check: Download and parse the file; verify provenance and content, and check disconnected-export feedback.

### Run the binary engine → Collect state updates

ID: g8-metrics. Output state → input data (snapshot); immediate delivery.

Purpose: Keep the latest state update for inspection.

Expected result: The shared collector stores the latest payload; this alone does not imply a cross-tool dashboard or aggregation.

Functional check: Publish a state change and check the stored payload and delivery trace.

### Run the binary engine → Download results

ID: g8-exports. Output evidence → input data (evidence); immediate delivery.

Purpose: Let the user download results from Run the binary engine.

Expected result: An evidence payload with download=true produces a JSON file; download=false only stores a payload.

Functional check: Download and parse the file; verify provenance and content, and check disconnected-export feedback.

### Find and test patterns → Collect state updates

ID: g9-metrics. Output state → input data (snapshot); immediate delivery.

Purpose: Keep the latest state update for inspection.

Expected result: The shared collector stores the latest payload; this alone does not imply a cross-tool dashboard or aggregation.

Functional check: Publish a state change and check the stored payload and delivery trace.

### Find and test patterns → Download results

ID: g9-exports. Output evidence → input data (evidence); immediate delivery.

Purpose: Let the user download results from Find and test patterns.

Expected result: An evidence payload with download=true produces a JSON file; download=false only stores a payload.

Functional check: Download and parse the file; verify provenance and content, and check disconnected-export feedback.

### Control a system → Collect state updates

ID: composition-metrics. Output state → input data (snapshot); immediate delivery.

Purpose: Keep the latest state update for inspection.

Expected result: The shared collector stores the latest payload; this alone does not imply a cross-tool dashboard or aggregation.

Functional check: Publish a state change and check the stored payload and delivery trace.

### Control a system → Download results

ID: composition-exports. Output evidence → input data (evidence); immediate delivery.

Purpose: Let the user download results from Control a system.

Expected result: An evidence payload with download=true produces a JSON file; download=false only stores a payload.

Functional check: Download and parse the file; verify provenance and content, and check disconnected-export feedback.

### Combine algorithms → Collect state updates

ID: ecology-metrics. Output state → input data (snapshot); immediate delivery.

Purpose: Keep the latest state update for inspection.

Expected result: The shared collector stores the latest payload; this alone does not imply a cross-tool dashboard or aggregation.

Functional check: Publish a state change and check the stored payload and delivery trace.

### Combine algorithms → Download results

ID: ecology-exports. Output evidence → input data (evidence); immediate delivery.

Purpose: Let the user download results from Combine algorithms.

Expected result: An evidence payload with download=true produces a JSON file; download=false only stores a payload.

Functional check: Download and parse the file; verify provenance and content, and check disconnected-export feedback.

### Create algorithms → Collect state updates

ID: workshop-metrics. Output state → input data (snapshot); immediate delivery.

Purpose: Keep the latest state update for inspection.

Expected result: The shared collector stores the latest payload; this alone does not imply a cross-tool dashboard or aggregation.

Functional check: Publish a state change and check the stored payload and delivery trace.

### Create algorithms → Download results

ID: workshop-exports. Output evidence → input data (evidence); immediate delivery.

Purpose: Let the user download results from Create algorithms.

Expected result: An evidence payload with download=true produces a JSON file; download=false only stores a payload.

Functional check: Download and parse the file; verify provenance and content, and check disconnected-export feedback.

### Purpose and design → Collect state updates

ID: foundation-metrics. Output state → input data (snapshot); immediate delivery.

Purpose: Keep the latest state update for inspection.

Expected result: The shared collector stores the latest payload; this alone does not imply a cross-tool dashboard or aggregation.

Functional check: Publish a state change and check the stored payload and delivery trace.

### Purpose and design → Download results

ID: foundation-exports. Output evidence → input data (evidence); immediate delivery.

Purpose: Let the user download results from Purpose and design.

Expected result: An evidence payload with download=true produces a JSON file; download=false only stores a payload.

Functional check: Download and parse the file; verify provenance and content, and check disconnected-export feedback.

### Connect tools → Collect state updates

ID: workflow-metrics. Output state → input data (snapshot); immediate delivery.

Purpose: Keep the latest state update for inspection.

Expected result: The shared collector stores the latest payload; this alone does not imply a cross-tool dashboard or aggregation.

Functional check: Publish a state change and check the stored payload and delivery trace.

### Connect tools → Download results

ID: workflow-exports. Output evidence → input data (evidence); immediate delivery.

Purpose: Let the user download results from Connect tools.

Expected result: An evidence payload with download=true produces a JSON file; download=false only stores a payload.

Functional check: Download and parse the file; verify provenance and content, and check disconnected-export feedback.

### Build a tool → Collect state updates

ID: workbench-metrics. Output state → input data (snapshot); immediate delivery.

Purpose: Keep the latest state update for inspection.

Expected result: The shared collector stores the latest payload; this alone does not imply a cross-tool dashboard or aggregation.

Functional check: Publish a state change and check the stored payload and delivery trace.

### Build a tool → Download results

ID: workbench-exports. Output evidence → input data (evidence); immediate delivery.

Purpose: Let the user download results from Build a tool.

Expected result: An evidence payload with download=true produces a JSON file; download=false only stores a payload.

Functional check: Download and parse the file; verify provenance and content, and check disconnected-export feedback.

### Run the binary engine → Collect observer notes

ID: g8-notebook. Output annotation → input data (annotation); immediate delivery.

Purpose: Collect an observer note separately from binary state.

Expected result: The collector stores the latest annotation; persistence of the full note history belongs to the originating lab.

Functional check: Add a note; check its delivery and the originating lab’s saved notes.

### Find and test patterns → Collect observer notes

ID: g9-notebook. Output annotation → input data (annotation); immediate delivery.

Purpose: Collect an observer note separately from binary state.

Expected result: The collector stores the latest annotation; persistence of the full note history belongs to the originating lab.

Functional check: Add a note; check its delivery and the originating lab’s saved notes.

### Run the binary engine → Control a system

ID: g8-composition. Output binary → input binary (binary); immediate delivery.

Purpose: Use a binary engine matrix as the starting state of the controlled system.

Expected result: The controller stops, resets its engine from exactly 1000 received bits and refreshes its state.

Functional check: Import a known matrix; inspect plant state and deterministic replay.

### Control a system → Find and test patterns

ID: composition-g9. Output binary → input binary (binary); immediate delivery.

Purpose: Use the controlled system output as a pattern-test starting state.

Expected result: Received bits are cached; the user must choose workflow input before running a test.

Functional check: Enable workflow input, run matched discovery and verify exact replay.

### Connect tools → Explore tool connections

ID: workflow-feature-inventory. Output state → input snapshot (snapshot); immediate delivery.

Purpose: Make changed tool wiring available to the connection inventory.

Expected result: A workflow snapshot refreshes the registered inventory consumer.

Functional check: Change wiring and confirm the inventory reflects the change.

### Explore tool connections → Download results

ID: feature-inventory-exports. Output evidence → input data (evidence); immediate delivery.

Purpose: Let the user download results from Explore tool connections.

Expected result: An evidence payload with download=true produces a JSON file; download=false only stores a payload.

Functional check: Download and parse the file; verify provenance and content, and check disconnected-export feedback.

### Choose a page → Collect state updates

ID: navigation-metrics. Output page → input data (snapshot); immediate delivery.

Purpose: Keep the latest state update for inspection.

Expected result: The shared collector stores the latest payload; this alone does not imply a cross-tool dashboard or aggregation.

Functional check: Publish a state change and check the stored payload and delivery trace.

### Run the binary engine → Find and test patterns

ID: g8-discovery. Output directBinary → input binary (binary); immediate delivery.

Purpose: Test the current binary matrix directly, without changing it through a controller.

Expected result: Pattern tests receive the exact 1000-bit matrix, with origin and tick.

Functional check: Import a compiled matrix, run discovery and replay; disabling this edge must block import.

### Run the binary engine → Build a tool

ID: g8-workbench. Output workspaceBinary → input binary (binary); immediate delivery.

Purpose: Seed a selected workspace input with the binary engine matrix.

Expected result: The selected binary input receives all 1000 bits; execution and verification are reset.

Functional check: Import into a selected input and compare all bits; missing selection or disabled route blocks import.

### Build connected systems → View: Build connected systems

ID: g6-view. Output state → input state (snapshot); immediate delivery.

Purpose: Display the current state from Build connected systems.

Expected result: The matching view redraws when a state snapshot arrives.

Functional check: Change model state and check the display; disconnect and confirm display updates stop.

### Compile instructions → View: Compile instructions

ID: g7-view. Output state → input state (snapshot); immediate delivery.

Purpose: Display the current state from Compile instructions.

Expected result: The matching view redraws when a state snapshot arrives.

Functional check: Change model state and check the display; disconnect and confirm display updates stop.

### Run the binary engine → View: Run the binary engine

ID: g8-view. Output state → input state (snapshot); immediate delivery.

Purpose: Display the current state from Run the binary engine.

Expected result: The matching view redraws when a state snapshot arrives.

Functional check: Change model state and check the display; disconnect and confirm display updates stop.

### Find and test patterns → View: Find and test patterns

ID: g9-view. Output state → input state (snapshot); immediate delivery.

Purpose: Display the current state from Find and test patterns.

Expected result: The matching view redraws when a state snapshot arrives.

Functional check: Change model state and check the display; disconnect and confirm display updates stop.

### Control a system → View: Control a system

ID: composition-view. Output state → input state (snapshot); immediate delivery.

Purpose: Display the current state from Control a system.

Expected result: The matching view redraws when a state snapshot arrives.

Functional check: Change model state and check the display; disconnect and confirm display updates stop.

### Combine algorithms → View: Combine algorithms

ID: ecology-view. Output state → input state (snapshot); immediate delivery.

Purpose: Display the current state from Combine algorithms.

Expected result: The matching view redraws when a state snapshot arrives.

Functional check: Change model state and check the display; disconnect and confirm display updates stop.

### Create algorithms → Share saved algorithms

ID: workshop-registry. Output definitions → input definitions (snapshot); immediate delivery.

Purpose: Share a validated saved algorithm with tools that can execute it.

Expected result: The registry validates the definitions before publishing the library.

Functional check: Create, test and save a rule; confirm both consuming tools can execute it.

### Share saved algorithms → Combine algorithms

ID: registry-ecology. Output library → input library (snapshot); immediate delivery.

Purpose: Make saved rules available in Combine algorithms.

Expected result: Validated definitions appear as selectable executable algorithms; existing runs retain embedded rules.

Functional check: Install a rule, execute it, then verify saved-run replay.

### Share saved algorithms → Build connected systems

ID: registry-g6. Output library → input library (snapshot); immediate delivery.

Purpose: Make saved rules available in Build connected systems.

Expected result: Validated definitions appear as selectable executable algorithms; existing runs retain embedded rules.

Functional check: Install a rule, execute it, then verify saved-run replay.

### Provide references → Read references

ID: reference-library. Output items → input data (snapshot); immediate delivery.

Purpose: Provide the reference catalogue to the references collector.

Expected result: The references receiver stores the catalogue snapshot and renders its reference cards.

Functional check: Check catalogue delivery and that the rendered reference links open the expected resources.

### Set the logo → Show the website

ID: identity-shell. Output identity → input identity (snapshot); immediate delivery.

Purpose: Show the selected project identity in the website header.

Expected result: The shell receives the logo configuration and updates its identity view.

Functional check: Check the rendered logo and identity delivery.

## Possible relationships still requiring design

### Combine algorithms → Find and test patterns

Input: Selected cube bits and full run configuration. Purpose: Compare a selected composed cube against a controlled baseline.

Proposed: needs an adapter; discovery currently executes the G8 instruction model, so transferring bits alone does not preserve G11 dynamics.

### Find and test patterns → Control a system

Input: Measured population or another explicitly selected descriptor. Purpose: Use a measured outcome as a control target or feedback signal.

Proposed: requires units, sampling interval, delay and stability tests. Do not wire generic snapshots as controller feedback.

### Purpose and design → Connect tools

Input: Reviewed module and relationship contracts. Purpose: Offer task-specific connection suggestions.

Advisory here; automatically changing wiring remains proposed and requires explicit validation.

## Implemented new relationship

The binary engine exposes a separate directBinary output connected to pattern testing by g8-discovery. Use binary engine matrix sends a compiled 1,000-bit state only on explicit request. The direct path is independent of the existing engine → controller → discovery path; it does not broadcast into the controller. It requires an enabled immediate route and the engine command route. Pattern tests still execute the declared G8 source; receiving another engine’s bits would not reproduce that engine’s full dynamics. Future updates from the controlled-system route can replace the last received seed; import the desired matrix immediately before a new test.
