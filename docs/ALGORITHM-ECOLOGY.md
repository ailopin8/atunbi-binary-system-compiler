# G11 algorithm ecology

Research gathered 19 October 2026. The library uses independent implementations of equations, not copied repository code. All adaptations are intentionally small and run on a periodic 10³ domain. Numeric registers are not binary cells: each node projects its registers to a 1,000-bit port using its configurable threshold.

| Type | Algorithms | Purpose / aim |
|---|---|---|
| Boolean | XOR/rule 90, rule 30, face majority, 3D B6/S567 | Difference propagation, asymmetric mixing, consensus, birth and survival |
| Transport | Diffusion, periodic shift | Smoothing and movement |
| Nonlinear maps | Logistic, tent, coupled logistic lattice | Local sensitivity, stretching/folding, spatial mixing |
| Oscillators | Sine, locally coupled phase | Rhythms and synchronization |
| Reaction–diffusion | Gray–Scott | Competition between reaction and spatial transport |

PID remains in G10, where its actuator and controlled variable are explicit. Lenia is a research candidate, not advertised as an implemented thirteenth algorithm.

## Research trail

- [Wolfram CellularAutomaton documentation](https://reference.wolfram.com/language/ref/CellularAutomaton.html): elementary Boolean rule conventions. G11 applies rule 30/90 independently along x in the cube, with periodic boundaries.
- [Kaneko and Yanagita, Coupled maps](https://www.scholarpedia.org/article/Coupled_maps): local nonlinear maps and lattice coupling. G11 uses six face neighbors and ε=.25 for its coupled logistic map.
- [Fractal Tent Map with Application to Surrogate Testing](https://www.mdpi.com/2504-3110/8/6/344): research context for the classical tent-map family. G11 implements the classical symmetric map, not the paper's fractal extension.
- [Pearson, Complex Patterns in a Simple System (1993)](https://arxiv.org/abs/patt-sol/9304003), [MIT Gray–Scott model](https://groups.csail.mit.edu/mac/projects/amorphous/GrayScott/), [ETH cselab implementation](https://github.com/cselab/gray-scott): reaction–diffusion motivation, equations and numerical implementation reference. G11 uses a coarse 3D seven-point Laplacian, forward Euler dt=.2, Du=.16, Dv=.08, kill=.06, configurable feed capped at .1. Clamping is an explicit bounded adaptation, not proof of PDE accuracy. A 10-cell edge cannot reproduce the published large-domain patterns faithfully.
- [Non-linear oscillators with Kuramoto-like local coupling (2023)](https://arxiv.org/abs/2310.00821): motivation for exploring phase coordination and complexity. G11 uses a basic six-neighbor sine coupling with K=.15; it is not a reproduction of the full paper.
- [3D cellular automata implementation reference](https://github.com/c0re-i5/3d-cellular-automata): neighborhood and 3D rule examples. Majority, shift, and the chosen B6/S567 setting are app-level experimental rules, not claims of canonical life behavior.
- [Chan, Lenia: Biology of Artificial Life](https://arxiv.org/abs/1812.05433): future extension. Its continuous kernel and growth function deserve separate implementation and validation.

## Execution contract

One to six nodes, at most 30 unique directed edges, no self edges. Internal spatial neighbors supply self feedback; directed cycles between nodes are allowed and synchronous. Every node reads immutable prior-tick states before all results commit.

Each algorithm calculates an intrinsic register value v. Incoming binary samples b contribute weighted differences: v′=clamp(v + Σ w(b−v)/max(1,Σ|w|),0,1). This coupling adapter is our design, separate from the cited intrinsic equations. The output bit is 1[v′≥threshold]. Negative edges repel; positive edges attract. Zero-weight edges have no effect. The UI documents parameter caps and unused parameters for discrete rules.

## Influence display

Each algorithm has a stable color and each instance a node ID. For each edge, evaluate the same tick again with only that edge omitted, holding every prior state fixed. The per-cell mask is 1 if the output bit differs. Color bands show all incoming edges with a nonzero mask, including cells switched OFF. The overlay is direct marginal influence, not a history of provenance; interacting edges can cancel or redundantly mask one another. A zero mask can coexist with numerical register influence below the output threshold. Colors cannot establish total causal contribution. Outcome-only view uses neutral ON voxels and leaves state unchanged. A selected-node view isolates a sandbox visually while preserving its connections.

## Experimental evidence

Coupled versus isolated runs start from the same seed, node algorithms, parameters, register arrays, thresholds and duration. Only external coupling edges differ. Record per-node Hamming differences over time, final complete register snapshots, distinct joint binary outputs and observed binary repeats. Repeats do not certify a full dynamical period. Exact replay compares the full report including registers. Three-seed trials and nearby parameter trials each use their own matched baseline. Observations are hypotheses about emergence, not a guarantee of complexity, uniqueness or life.

## Website modularity and limits

G11 is an `ecology` module in the existing typed website flow. Controller commands, state-to-view rendering, metrics and exports use the same enabled/disabled-edge contracts as other modules. Algorithm graph edges are model connections inside that module, distinct from website module connections. The G11 matrices use accessible canvas previews and exact text slices; the WebXR spatial volume remains G6, while the shared controller menu can operate G11 and report status. No physical headset validation has been performed.

As node counts or horizons grow, revisit worker execution and cached numerical counterfactuals. Current bounds keep trials deliberate and bounded. Binary outputs and numeric registers are exportable; editing a draft has no effect until Apply and reset.
