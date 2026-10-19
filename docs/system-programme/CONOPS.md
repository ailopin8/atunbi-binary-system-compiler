# SG02 — purpose, users and operating scenarios

## Purpose and boundary

Primary purpose: compose explicit processes above the binary engine to create useful, inspectable tools. The 10×10×10 binary matrix remains the engine substrate. Workspaces organise processes; pages expose those capabilities. Research, simulation, feedback control and pattern exploration are applications, not meanings inherent in bits.

Inside: algorithm definitions and versions, editable workspaces, runtime instances, scheduling, semantic adapters, inspection, experiments, evidence, hypotheses, repository services and commands. Outside: user goals/interpretations, local device/browser/headset, GitHub, deployment, referenced research and any future identity provider. A logo communicates identity; camera changes project a view. Neither must mutate simulation state.

Purpose decomposition: P-A author explicit rules; P-C compose compatible processes; P-R execute under declared semantics; P-I inspect identified outcomes; P-T compare controlled explanations; P-S preserve and reuse reproducible artifacts. Cross-cutting purposes: accessible understanding, bounded execution, recoverability and traceable decisions.

## Provisional users and needs

These personas are design assumptions from the requested tasks, not validated research findings. No representative participants were available during this baseline.

| User | Need ID | Goal | Success / failure |
|---|---|---|---|
| New explorer | N01 | Start a small example and see which input caused which output | Can run and locate an output/source; fails if an empty dependent page gives no next action |
| Tool author | N02 | Create rules and package connected tools with replaceable parts | Supported consumers execute the saved version; fails on silent incompatibility or shared instance memory |
| Researcher | N03 | Freeze conditions, compare an intervention and preserve a qualified interpretation | Replays exact promised state and identifies sources; fails if labels alter execution or replay is presented as scientific validity |
| Maintainer | N04 | Extend one capability without breaking consumers | Contract, owner, tests and migration are explicit; fails if UI mounting is required to exercise domain logic |
| All | N05 | Keep work and recover from mistakes | Supported saves survive reload and invalid imports cause no partial state change |
| All | N06 | Use clear keyboard/touch/visual interactions | Controls expose target, prerequisites and result; no colour-only meaning |

## Three end-to-end scenarios

S1 Create and reuse a rule: open authoring → edit neighbourhood/truth table → preview and run tests → save a version → select a supported engine → install and execute → inspect output provenance → reopen saved definition → edit to a new version. Success: exact version used downstream, unchanged earlier evidence, explicit rejection for unsupported consumers. Existing tests cover creation/install but historical versions remain a gap.

S2 Compose and operate a tool: start blank → add boundary input, transform and output → connect compatible ports → run and inspect → verify behavior/replay → save and package → instantiate twice → step with independent memory → export/reopen. Success: correct outputs, distinct state, same versioned contract, incompatible link leaves graph unchanged, keyboard/touch path works. Existing builder covers much of this; registry integration, redo and common identities remain gaps.

S3 Controlled experiment and evidence: compile/step G8 → explicitly copy seed into controller → apply declared gains and step → freeze resulting seed with lineage → run matched baseline/intervention under G9 semantics → inspect difference and replay → attach hypothesis → save/export evidence → reopen and reproduce. Success: run, source revision, seed copies and full promised replay state recorded; zero effect and inconclusive interpretation remain valid. Existing path executes but end-to-end provenance/persistent evidence is incomplete.

Record task time, errors and assistance in SG24 with available people. No fabricated completion-time threshold or participant result is adopted now. Automated correctness measures are exact state/revision equality, declared numeric tolerance, atomic rejection, and consistent source identities.

## Capability disposition

Retain all current routes and aliases initially. Create group (builder/workshop/compiler) serves P-A/P-C; G6 network/layers/relationships and G11 serve P-C/P-R; binary and PID serve P-R; spatial/metrics serve P-I; discovery/experiments serve P-T/P-S; wiring/features/controllers serve P-C and operational understanding; references/theory serve evidence/design decisions; Home serves start/resume and dependency diagnosis. Existing detailed source/packet tables remain in Inspect/Help. No route is justified solely by a generation label; retained pages must pass an action-or-decision check in SG24.

## SEBoK basis and design interpretation

Checked local v2.14 printed pages 477, 544, 567, 611, 621 and 633 (physical page = printed + 13). Configuration management supports identifiable baselines/version changes; requirements translate stakeholder needs; functional architecture relates transformations and inputs/outputs; integration checks assembled interfaces; verification compares actual to specified properties; validation addresses intended use. Our six purpose groups, personas, browser architecture and visual workflows are Atunbi proposals. SEBoK does not prescribe those exact components or prove usability.
