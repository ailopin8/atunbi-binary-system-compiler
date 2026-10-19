# One system, specialized components

The matrix remains the execution engine. The workspace composes tools above it. A component should receive information when it has a defined consuming task; broadcasting every update to every component would create ambiguity, accidental feedback and unnecessary work.

## Interface design

The home page now offers a system overview before the page directory. It groups registered components by role, lists incoming/outgoing active connections and available ports, shows scalar fields from the latest published state, and exposes recent deliveries and failures. Every page carries a compact link back to the whole system with active connection count and workflow tick. The overview reads the runtime as an observer; it is not an additional processing cube.

Information flows through declared typed ports. Binary matrices, definitions, run configurations and exports are transferable artifacts. They can serve as a software representation of material, but copying is not physical consumption. Completed deliveries and simulation ticks indicate activity, not energy, power or CPU time.

To model energy explicitly in a future domain, define a stock, units, initial budget, transfer rule, consumption per operation, replenishment and behavior on exhaustion. To model conserved material, define quantities, ownership and whether a transfer copies or moves them. These domain models must remain above the binary engine rather than silently redefining all bits as physical quantities.

## Current useful relationships

- Creation → registry → connected-system and algorithm-combination tools: distribute validated executable definitions.
- Engine → controller: initialize the binary plant from a declared matrix.
- Controller → pattern tests: use the plant output as a matched experiment seed.
- Engine → pattern tests: independently import the original matrix when comparison calls for it.
- Models → views: show state without assigning physical meaning.
- Models → state collector: keep latest updates, not an implied aggregate dashboard.
- Experiments → exports and observer records: preserve evidence and distinguish interpretation.
- Research → human design decisions: inform changes; research prose is not executable input.

## Connected workflow

The home-page action checks that the engine and discovery command routes, controller command route, engine-to-controller edge, controller-to-discovery edge and source-to-discovery edge are enabled and immediate. If any are missing it stops before changing models.

With valid routes it compiles current engine instructions, checks compilation success, steps the binary engine, imports the matrix into the controller, steps the controlled plant, selects workflow input in pattern testing, runs the configured matched experiment and verifies replay. Compile and import pause their respective engines. No autonomous run starts. Current user settings are retained; successful intermediate changes remain applied if a later stage fails. This is a staged workflow, not an atomic transaction or a continuous all-to-all feedback loop.

## Further relationships that need explicit adapters

Composed algorithms → discovery requires preserving the algorithm's full dynamics, not just its bits. Descriptors → controller feedback requires chosen variables, units, sample interval, delay and stability checks. Resource budgets → scheduling requires a scheduler that actually consumes credits. A graph of ports alone does not implement these behaviors. The existing relationship-purpose review retains these distinctions.

## Verification

The system browser check verifies the complete connected path, a 1,000-bit experiment seed, exact replay, missing-edge preflight, invalid-source stopping, global status and mobile layout. Existing model, browser, architecture, relationship and accessibility checks remain part of `npm run verify`; CI also runs the system check. Real-headset behavior remains outside simulated XR validation.
