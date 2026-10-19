# Algorithm workshop and common binary contract

## Input → instruction → output

A custom rule uses a versioned `atunbi.binary-rule.v1` envelope. It names three read locations `a,b,c`: self; left/right (X−/X+); down/up (Y−/Y+); back/front (Z−/Z+); constant zero or one. All reads use the prior tick in a periodic 10³ matrix.

The instruction is exactly eight output bits, ordered by input pattern `000,001,010,011,100,101,110,111`. The row index is `4a+2b+c`. Each cell writes the selected table bit into the next matrix, then all cells commit synchronously. This prevents ambiguous reading or iteration-order effects.

Example: left, self, right with table `01011010` implements left XOR right, matching the built-in rule 90. This same envelope supports transport, constant signals, local memory, Boolean combinations and experimental rules. It does not execute arbitrary scripts or infer executable rules from prose. The built-in numerical algorithms retain their documented registers and threshold adapters while sharing 1,000-bit output ports.

## Guided workflow

1. Identity: enter name, category, purpose/hypothesis and color.
2. Instruction: choose the three bit inputs and eight output bits; inspect the truth table.
3. Verification: test a seed-42 isolated cube for 16 ticks, verify exact replay, then save the exact tested definition.
4. Library: select the new rule in a G11 node and Apply and reset.
5. Connection: add outgoing/incoming edges, compare coupled and isolated runs, export evidence.

Editing any draft input invalidates its test. Editing a saved rule updates the registry only after retesting; existing engines and exported experiments retain embedded original definitions. Draft edits and cancelled creation never commit to simulation state.

## Registry and persistence

The registry groups G11 built-ins, saved custom rules and adapters linking the G6/G7/G8/G10 algorithm families to their own editors. The creator permits at most 32 custom definitions. Browser storage is local to this origin and browser profile. Export/import provides a portable versioned backup. Invalid format, duplicate rule IDs, unsupported inputs, malformed tables and files above 1 MB are rejected. Imports merge identical IDs and reject differing definitions under the same ID, preserving the current library.

Input strings render as text; no untrusted rule text executes as code. Metadata and colors remain observer/display information outside cell state.

## Executable module connections

`workshop.definitions → algorithm-registry.definitions → ecology.library`

The registry validates definitions, the ecology input installs selectable metadata and dispatches a local editor update, and G11 embeds the definitions when applying a network. Both edges must have the correct endpoints, be enabled and immediate to commit a library change. A disconnected edge prevents saving/importing an apparently usable algorithm. Storage and installed definitions roll back if delivery fails.

Controller commands, metrics and evidence use the existing typed flow. The new controller category provides Create new algorithm, Export custom rules, Browse complete registry, and Read features and connections. Creation and file actions require the page; they are visibly unavailable in XR.

## UI organization and feature inventory

Each major module has a collapsible guide: input, operation, output and downstream effects. Long explanations are grouped inside module help. The feature map lists every controller action by category, page button inventory and live website edge status. It exports contracts, control inventory and executable wiring together. Focus mode can show one working module at a time, while retaining the feature-map controls needed to restore all modules. View mode does not alter simulation state.

The graph inside G11 connects simulated algorithm nodes. The website wiring graph connects UI/model/data modules. Local draft editors are documented as local edits, not inaccurately described as binary instructions or routed simulation commands. Legacy DOM action adapters remain explicit boundaries.

## Verification / release checklist

- Validate rule schema and truth-table ordering for every supported input location.
- Match custom XOR against the built-in implementation; test immutable definitions and exact replay.
- Test disconnected registry edges, editing invalidation, cancelled creation, persistence and JSON round trips.
- Check module focus/restore, inventories, all controller actions and existing lab workflows.
- Run type checking, model tests, production build, browser accessibility and simulated WebXR checks.
- Check the remote branch before pushing. Deployment is currently blocked by AppDeploy's daily credit limit, resetting 20 October 2026 at 00:00 UTC; the current live app is unchanged.

As authoring grows, revisit multi-stage rule composition, larger neighborhoods and a versioned migration UI rather than accepting arbitrary code. Physical headset validation remains separate from simulated XR tests.

The feature map is also an executable module: `workflow.state → feature-inventory.snapshot`, and `feature-inventory.evidence → exports.data`. Disabling its export edge blocks the download with visible feedback. Its default edges are registered before the wiring editor captures defaults. Navigation to a hidden module restores visibility before following the link.
