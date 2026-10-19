# Website features and connections

Generated from the module contracts and controller registry. The app’s Feature map adds live edge status, page controls and an export.

## G6 pattern network and 3D / WebXR

- Input: Algorithms, layers, parameters, enabled internal and external edges
- Process: Synchronous spatial simulation; matched edge ablation
- Output: Fields, 3D scene, descriptors and experiment evidence
- Affects: G6 view, metrics and exports; headset controls operate the same menu

## G7 sentence compiler

- Input: Structured system sentences and coupling settings
- Process: Compile instructions, execute its own VM, compare coupled behavior
- Output: Instruction words, messages, simulation state and evidence
- Affects: G7 view, metrics and exports

## G8 binary kernel

- Input: Binary source, rule numbers and packet settings
- Process: Compile and transform two 1,000-bit matrices
- Output: Binary states, messages and causal comparisons
- Affects: G8 view; G10 seed through g8-composition; metrics, notebook and exports

## G9 semantic discovery

- Input: G8 source; optional received binary seed; intervention settings; observer notes
- Process: Matched experiments, exact recurrence and structural descriptors
- Output: Pattern evidence and explicitly labelled hypotheses
- Affects: G9 view, metrics, notebook and exports; labels do not alter bits

## G10 PID composition

- Input: Target, gains, seed, optional drivers and G8 seed
- Process: Feedback controller and bounded bit actuator
- Output: Binary plant, numeric registers, error comparison and replay
- Affects: G10 view; optional G9 experiment seed through composition-g9; metrics and exports

## G11 algorithm ecology

- Input: Built-in or custom rules, node parameters, seed and directed binary edges
- Process: Run separate cubes synchronously; measure per-edge counterfactuals
- Output: Binary matrices, influence colors, descriptors, matched comparisons and sweeps
- Affects: Ecology view, metrics and exports; algorithm edges affect only their receiving nodes

## Algorithm workshop and registry

- Input: Name, purpose, category, color, three bit inputs and eight output bits
- Process: Validate, test 16 ticks, verify replay, save and register definitions
- Output: Versioned binary-rule definitions; portable JSON backup
- Affects: Algorithm registry → G11 selectable rules. Existing runs retain embedded definitions

## Website wiring

- Input: Compatible module ports; enabled / delayed edges; saved or imported wiring
- Process: Validate contracts; route copied messages; explicitly advance delays
- Output: Executable edges, delivery counts, trace and wiring JSON
- Affects: All downstream deliveries; disconnecting a view freezes presentation, not its model

## Controller menu and view controls

- Input: Mouse, keyboard or simulated / physical XR selection
- Process: Check prerequisites, confirmations and available actions
- Output: Commands, focus changes and action feedback
- Affects: Selected lab only; camera commands affect G6; pause-all pauses active runtimes

## Feature and connection map

- Input: Module contracts, controller action registry and current executable edges
- Process: Group features, inspect controls, focus a module and export the inventory
- Output: Readable feature list and versioned connection JSON
- Affects: Navigation and presentation only; no matrix state changes

## Reference library and identity

- Input: Curated guidance and logo configuration
- Process: Present guidance, navigation and identity
- Output: Reference cards, source links and shell logo
- Affects: Presentation and navigation; reference text does not execute algorithms

## Controls: Workspace

- Load example
- Add empty sandbox
- Edit algorithms and links — page only
- Import network JSON — page only
- Clear workspace

## Controls: G6 simulation

- Run / pause G6
- Step G6 +1
- Reset G6
- Run G6 experiment
- Next ablation mode
- Next experiment horizon

## Controls: G7 compiler

- Compile G7 source
- Run / pause G7
- Step G7 +1
- Reset G7
- Compare G7 coupling
- Next G7 preset
- Edit system sentences — page only

## Controls: G8 binary kernel

- Compile G8 source
- Run / pause G8
- Step G8 +1
- Reset G8
- Test G8 causality
- Reciprocal XOR preset
- One-way preset
- Isolated preset
- Next binary depth slice
- Edit binary source — page only
- Annotate G8 meaning — page only

## Controls: G9 discovery

- Run discovery
- Verify exact replay
- Next intervention mode
- Next duration
- Next flip address
- Next intervention tick
- Next detected pattern
- Read measured evidence
- Write observer hypothesis — page only

## Controls: View and safety

- Recenter view
- Describe G6 state
- Pause all runtimes
- Orbit left — page only
- Orbit right — page only
- Orbit up — page only
- Orbit down — page only
- Zoom in — page only
- Zoom out — page only

## Controls: Evidence and notebook

- Export G6 network — page only
- Export G6 experiment — page only
- Export G7 evidence — page only
- Export G8 binary — page only
- Export G9 evidence — page only
- Open hypothesis notebook — page only

## Controls: Reference library

- Web UI and UX process
- PhET simulation guidance
- PhET accessibility
- Meta Quest references
- Open all original links — page only

## Controls: G10 composition

- Step system +1
- Run / pause system
- Reset system
- Compare PID / open loop
- Verify system replay
- Import G8 matrix
- Export system evidence — page only
- Next system preset
- Toggle oscillator edge
- Edit PID gains — page only

## Controls: G11 algorithm ecology

- Step algorithm network
- Run / pause algorithm network
- Reset same seed
- Compare coupled / isolated
- Verify ecology replay
- Sweep seeds and parameters
- Export ecology evidence — page only
- Toggle influence colors
- Next sandbox view
- Edit algorithms and edges — page only

## Controls: Algorithm workshop

- Create new algorithm — page only
- Export custom rules — page only
- Browse complete registry — page only
- Read features and connections — page only

## Controls: Modular workflow

- Advance workflow tick
- Save wiring — page only
- Load saved wiring — page only
- Restore default wiring
- Export wiring JSON — page only
- Edit module connections — page only

## Executable wiring

Controllers → each lab command input. Each lab state → its view and metrics. Each lab evidence → export sink. G8 → G10 binary seed. G10 → optional G9 binary seed. Source editor → G9 source. G8/G9 annotations → notebook. Workshop definitions → registry → G11 library. Identity → shell. Reference source → reference view. Delayed edges deliver only on an explicit workflow tick; disabled edges stop future delivery.

G6/G11 simulated node edges are independent of website edges. Local draft controls update local settings until Apply/Compile/Save; view controls affect presentation. The Feature map exports exact current endpoint IDs and state.

The feature map receives `workflow.state` at `feature-inventory.snapshot` and sends its own evidence through `feature-inventory-exports`. Turning off that export edge prevents download and reports the disconnected route. Module navigation restores hidden sections when necessary.
