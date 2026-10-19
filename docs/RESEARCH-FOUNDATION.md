# Àtúnbí: a philosophy and research framework for bounded algorithmic sandboxes

Version 2 · research reviewed 19 October 2026. This is a proposed engineering and research framework, not a newly established law of nature. It develops the existing Bounded Algorithmic Relational Emergence (BARE) concept. The purpose hierarchy and website allocations are design proposals; the papers provide distinct theories, examples and methodological constraints rather than jointly proving BARE.

## Research approach and scope

The review followed six question families: local rules and cellular automata; systems organization and cellular complexity; emergence and its measurement; reaction–diffusion and morphogenesis; dimension, topology and fractality; and immersive observation. Searches targeted original papers, author repositories and publisher records. Both supportive examples and critiques were included. Access varies: the bibliography states where full texts were inspected and where only abstracts or records were available. No inaccessible paper is represented as having been fully reviewed. This focused synthesis is not a systematic review or a claim to exhaust the literature.

The systems-engineering starting point was SEBoK v2.14, **Logical Architecture**, printed pp. 574–575 and 578 (physical PDF pp. 587–588 and 591). Its distinction between functional decomposition and behavioral/input–output views informs the approach: a hierarchy alone does not show whether functions exchange the information needed to achieve an outcome. The particular purpose, ontology and allocations below are our interpretation for this website.

## 1. The top purpose, built from its contributions

**P0: Make the formation, organization and causal dependence of patterns constructible, observable and testable, so sandbox exploration can produce reproducible knowledge.**

The artifact is a laboratory for asking questions, not a machine that guarantees emergence. Its value is not the number of algorithms, the brightness of a visualization or the apparent lifelikeness of a pattern. Its value is the ability to construct a declared system, observe it through declared measurements, change a cause under controlled conditions and preserve enough information to repeat or challenge the interpretation.

Start from existing capabilities as well as desired outcomes. The creator and compilers contribute constructibility; the engines contribute execution; edges contribute controllable interaction; descriptors and views contribute observability; ablations contribute experimental discrimination; and exports, references and usable controls contribute repeatability and critique. Synthesizing those contributions gives P0. If a tool does not contribute to any branch, it needs either a justified new purpose or removal. If a branch lacks a working capability, its purpose is a requirement rather than an accomplished result.

### P1 — Define a bounded system

- P1.1: define state, instruction and port schemas.
- P1.2: define the domain, neighborhood and boundary conditions.
- P1.3: define initial conditions, seed, time and model scope.

Evidence sought: a configuration that another person can instantiate without guessing its meaning. G6 fields, G8 bits and G11 numerical registers are not interchangeable descriptions. A label such as “energy” is not a physical unit unless an explicit model and validation establish it.

### P2 — Generate and transform patterns

- P2.1: author and validate rules.
- P2.2: compile and execute declared transitions.
- P2.3: explore parameters and reusable algorithms.

Evidence sought: executable rules with bounded, correctly typed outputs and repeatable trajectories. The new G6 choices repair a gap between the library and an execution page: a research card alone does not satisfy this purpose.

### P3 — Relate processes and regulate flows

- P3.1: compose internal and external algorithm instances.
- P3.2: transform typed outputs into inputs.
- P3.3: control feedback, timing and interventions.

Evidence sought: delivery and effect can be checked, disabled edges stop subsequent delivery, and synchronous execution does not depend on iteration order. A diagram is an explanation of a mechanism only when the connections actually execute.

### P4 — Observe structure across descriptions

- P4.1: inspect cells, fields and trajectories.
- P4.2: measure recurrence, spatial organization and change.
- P4.3: provide text, slices, colors, 3D and optional VR.

Evidence sought: measurements name their topology and scale; changing a view does not change the model. Multiple descriptions are useful because no single descriptor captures every form of organization.

### P5 — Test explanations and revise hypotheses

- P5.1: establish matched initial conditions and baselines.
- P5.2: ablate relationships or perturb declared variables.
- P5.3: distinguish observations, candidate emergence and biological analogies.

Evidence sought: an explanatory claim includes an intervention, expected effect, duration and condition under which it would fail. Failure, extinction, convergence and zero measured influence remain legitimate results.

### P6 — Preserve, communicate and make knowledge usable

- P6.1: export configurations, trajectories and provenance.
- P6.2: trace pages and functions to their contributions.
- P6.3: supply accessible controls, references and recoverable navigation.

Evidence sought: a result can be repeated and questioned, and the interface does not make access to the phenomenon depend on a headset or color discrimination.

The hierarchy is many-to-many: a compiler can support both definition and execution; a controller can support both regulation and accessibility. Allocations express intended contributions, not proof that the top purpose has already been achieved in every scientific sense.

## 2. What exists in a sandbox

The ontology separates ten kinds of entities:

| Entity | Meaning | Not automatically equivalent to |
|---|---|---|
| Domain | Indexed positions with geometry, neighbors and boundaries | Physical space |
| State | Values needed to determine a future transition | Displayed pixels alone |
| Rule | A declared transition procedure | A semantic interpretation |
| Node | An instance of a rule with its own state | A biological organism |
| Edge | An output-to-input transformation with timing | A decorative line |
| Run | A configuration, initial condition, seed and time history | A screenshot |
| Pattern | A description of observations at a chosen level | Life, meaning or intelligence |
| Observer | A person or procedure selecting measurements and hypotheses | An intrinsic label inside a bit |
| Evidence | Preserved configuration, intervention and measurements | A persuasive animation |
| View | A rendering or accessible description of data | The complete underlying state |

For one binary matrix, X belongs to {0,1}^1000. In a system with numerical registers, messages or external timing, the complete state is better written S=(X,R,Q,C). A generic transition is S(t+1)=F(S(t),U(t);theta,G,B,dt), with parameters theta, relation structure G, boundaries B and time step dt. A measurement M=pi(S) is a chosen description of that state. Two states can share the same measurement while differing in the registers that determine what happens next.

The custom-rule creator uses a deliberately small native format: three prior-state bit inputs, an eight-row Boolean truth table, and one next bit per cell. This makes authored rules inspectable. Numerical algorithms retain their own registers and expose an explicit binary projection or a G6 field adapter. Binary communication does not mean a controller has no numerical representation above the cell substrate.

“Categorification” here means an explicit taxonomy of purposes, entities and relations. One could later model state schemas as objects and compatible transitions as morphisms, but that would require defining composition, identities, timing and feedback rigorously. The website does not claim that its current flow graph establishes a category-theoretic theorem.

## 3. What the inspirations contribute—and where they stop

### Local rules and cellular organization

Conway’s Life is a useful methodological model: declare a local rule and investigate the structures its repeated application supports. Its standard rule is 2D B3/S23. A cube using 26 neighbors with B6/S567 is a different automaton, not “3D Conway Life” by renaming. The transferable principle is explicit local mechanism and reproducible observation, not a guarantee of life from binary rules. Lenia suggests future exploration of continuous local rules and additional channels; it is not implemented here. [Gardner / Conway (1970)](https://www.scientificamerican.com/article/mathematical-games-1970-10/); [Chan (2019)](https://arxiv.org/abs/1812.05433).

Systems biology supplies a second discipline: connect model structure to a question and compare the model with evidence. Biological cells involve chemistry, energetics, regulation and physical organization absent from a generic voxel. Oscillation, memory or a recognizable shape may be useful analogies, but biological correspondence is a separate validation task. [Kitano (2002)](https://www.nature.com/articles/nature01254); [Goldbeter (2002)](https://www.nature.com/articles/nature01259).

### Whole/part relations and openness

General systems theory motivates examining organization and relations across levels. Our application is to describe a module both internally and through its interfaces. Openness is relative to a declared boundary: an algorithm node receiving other nodes’ outputs is open relative to itself, while the total autonomous network may be closed. Periodic spatial boundaries alone do not make a system open. Purpose is the intention behind the engineered laboratory, not an intention attributed to nature or to every generated configuration. [Bertalanffy (1950), original selected text](https://www.isnature.org/Events/2009/Summer/r/Bertalanffy1950-GST_Outline_SELECT.pdf). The boundary and purpose applications are our interpretation.

### Pattern formation and morphogenesis

For a two-field reaction–diffusion model, homogeneous stability concerns a reaction Jacobian J. Spatial modes instead involve J−k²D, or J+lambda D for a discrete Laplacian eigenvalue lambda. A diffusion-driven instability requires a mode becoming unstable while the homogeneous reaction equilibrium is stable. Consequently, spots alone do not establish that mechanism. A coarse clamped Gray–Scott demonstration needs additional numerical and stability checks before a specific Turing-instability claim. [Turing (1952)](https://www.damtp.cam.ac.uk/user/gold/pdfs/teaching/old_literature/Turing1952.pdf).

Fixed voxels also omit deforming geometry. The 3D vertex-model paper provides a concrete contrast: chemical patterning and mechanical shape interact there. The website currently explores a fixed computational domain and does not reproduce multicellular tissue mechanics. [Okuda and colleagues (2018)](https://www.nature.com/articles/s41598-018-20678-6.pdf).

### Complexity and emergence

The research does not justify optimizing a single “complexity score.” Population describes occupancy; gradient describes spatial change; components describe connectivity under a specified neighborhood; recurrence describes repeated observations; perturbation divergence describes sensitivity. High randomness can conceal little reusable structure, while a simple recurring configuration can have a precise explanation. “More colorful” is therefore not the scientific objective. [Crutchfield (2012)](https://www.nature.com/articles/nphys2190).

Edge-of-chaos work is a research motivation, accompanied here by a published re-examination. The app should compare regimes rather than presuppose one universally optimal boundary. A divergence between coupled and isolated trajectories establishes a consequence of that intervention, not an absence of simpler explanations. [Langton (1990)](https://www.sciencedirect.com/science/article/pii/016727899090064V); [Mitchell, Hraber and Crutchfield (1993)](https://arxiv.org/abs/adap-org/9306003).

Weak emergence, prediction-based G-emergence and effective-information-based causal emergence are different notions. Each requires a declared question and method. Current ablations do not compute the latter two measures. Future macro-level work would need explicit coarse-graining, held-out predictions or intervention distributions, and a comparison against competing descriptions. No finite demonstration can establish strong emergence by visual inspection. [Bedau (1997)](https://onlinelibrary.wiley.com/doi/abs/10.1111/0029-4624.31.s11.17); [Seth (2008)](https://users.sussex.ac.uk/~anils/Papers/seth_emergence_alife2008.pdf); [Hoel, Albantakis and Tononi (2013)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3856819/).

### Dimension and fractality

Distinguish coordinate dimension (the cube), graph connectivity (six, 26 or directed neighbors), state-space dimension (all variables and registers), descriptive scale (the measurement map), and display dimension (screen or immersive view). Increasing one does not automatically increase the others. Changing geometry or topology changes the model rather than simply increasing its visual richness.

Fractal geometry asks how a measure behaves across scale. On an edge of length ten, widths 1, 2, 5 and 10 provide only a small finite diagnostic. They do not establish an asymptotic power law or a certified fractal dimension. Serious scale studies should compare larger domains, multiple thresholds, boundary conventions and a justified fitting range. Fractal measurement is a future research protocol, not an implemented result of this release. [Mandelbrot (1967)](https://gis.humboldt.edu/olm/courses/gsp_510/Articles/Mandelbrot1967.pdf).

### Virtual reality as observation

Presence and analytical usefulness are separate questions. An immersive view may help with a particular spatial task, but the same model must remain inspectable through desktop views, slices and text. The appropriate evaluation compares task accuracy, time, accessibility and comfort across interfaces. Software XR tests check controls and state restoration; they do not establish a cognitive advantage or validate the simulated physics. The bibliography includes both presence research and an immersive-analytics survey to keep those goals distinct. [Slater and colleagues (2022)](https://www.frontiersin.org/journals/virtual-reality/articles/10.3389/frvir.2022.914392/full); [Kraus and colleagues (2022)](https://onlinelibrary.wiley.com/doi/10.1111/cgf.14430).

## 4. A practical inquiry protocol

1. State the question and choose a model family. Specify whether it concerns bits, numeric fields, control or interpretation.
2. Freeze the configuration: rule versions, parameters, complete initial state, clocks, topology and boundaries.
3. Choose observations before interpreting the result. Declare thresholds, connectivity and temporal horizon.
4. Run the baseline and declared intervention from matched states. Keep any external drives identical.
5. Record trajectories and relevant registers, not only the final image.
6. Compare multiple seeds and parameter regimes where appropriate. Record null and degenerate outcomes.
7. Label the conclusion at the level supported: observation, intervention sensitivity, structural change or a candidate explanation.
8. Export provenance and test replay. Revisions of a rule must not silently rewrite prior evidence.

Useful example questions include: Does one incoming rule change a connected component under a fixed threshold? Does an apparent oscillator depend on an external clock? Does removing a feedback link alter persistence rather than merely brightness? Does a candidate macro-variable predict held-out future behavior better than an equally simple baseline? The last question needs a new validated analysis, not a renamed existing Hamming metric.

Five hypotheses are exposed in the website: edge sensitivity, structural consequence, useful macro-prediction, scale-consistent geometry and task-specific immersive benefit. Each includes its test and present implementation status. The first two are investigable with existing tools; the latter three remain research proposals.

## 5. G6 execution repair and numerical contract

G6 now preserves its four original driven fields and offers the 12 G11 lattice algorithms: XOR/rule 90, rule 30, face majority, 3D B6/S567, diffusion, periodic shift, logistic, tent, coupled logistic, sine oscillator, local phase coupling and Gray–Scott. They are grouped in both the primary selector and internal-layer installer, with the same identifying colors as the library. Saved custom rules are delivered through `algorithm-registry.library → g6.library`, alongside the existing G11 connection.

The G6 adapters reuse the actual library engine. Original G6 neighbors remain bounded; lattice algorithms are periodic. Numeric output receives `clamp(value + .24 * input,0,1)`. Native binary outputs retain their intrinsic bit unless an incoming field is at least .25 (activate) or at most −.25 (inhibit). This is a declared G6 input adapter, not the G11 edge formula. Parameter controls expose r, tent slope, diffusion mixing, feed or oscillator speed where applicable. G11’s documented caps and fixed constants still apply.

Both Gray–Scott registers and oscillator phases persist between ticks. A coupled and an uncoupled one-step evaluation read the same original registers without mutating them. The ablation engine clones these registers and embedded custom definitions into both experimental arms. Network and experiment exports preserve that extended state. Imports validate bounded arrays and matching embedded rules while retaining v2/v3 compatibility for prior valid networks. A rule imported in a network can execute from its embedded definition without requiring the browser’s creator registry.

This fixes functionality as well as discovery: the new choices are executable G6 layers, not links to G11 or decorative metadata. It does not turn all G6 numerical fields into strict binary cells; G8 remains the dedicated binary kernel.

## 6. Validation and remaining research

Software checks cover every added algorithm, finite bounded states, native binary outputs, persistent registers, nonmutating counterfactuals, matched extended-state replay, G6 export/import continuation, parameter controls, registry integration, purpose-allocation coverage, paper filtering and exports, existing pages and controllers, accessibility, and simulated XR. These checks establish software behavior under their tested conditions, not a scientific proof of emergence.

Larger domains, systematic parameter designs, formal coarse-graining, predictive complexity, scale estimation, mechanically deforming tissue and human VR studies require separate work. Their absence is recorded as a research boundary rather than hidden behind aspirational labels.

The following generated sections provide the research records and complete page/controller allocations. They also exist as structured JSON and an in-app export.

## Annotated research library

### Gardner / Conway (1970) — Mathematical Games: the fantastic combinations of Conway’s game Life

[Paper / primary record](https://www.scientificamerican.com/article/mathematical-games-1970-10/) · Cellular automata · Access: Publisher record; historical introduction.

Local binary updates can sustain recognizable moving or recurring configurations. Use explicit neighborhoods and reproducible rules. Conway Life is 2D B3/S23; the implemented 3D B6/S567 rule is a different model.

### A. M. Turing (1952) — The Chemical Basis of Morphogenesis

[Paper / primary record](https://www.damtp.cam.ac.uk/user/gold/pdfs/teaching/old_literature/Turing1952.pdf) · Morphogenesis · Access: Original full text.

Reaction and diffusion can destabilize a homogeneous state under specified conditions. Separate a mechanism from a visual resemblance. Spotted output alone does not identify a Turing instability.

### L. von Bertalanffy (1950) — An Outline of General System Theory

[Paper / primary record](https://www.isnature.org/Events/2009/Summer/r/Bertalanffy1950-GST_Outline_SELECT.pdf) · Systems theory · Access: Selected original text.

Relations and system organization motivate principles that cross disciplinary boundaries. Model boundaries and whole/part relations explicitly; analogies do not establish identical mechanisms.

### L. von Bertalanffy (1950) — The Theory of Open Systems in Physics and Biology

[Paper / primary record](https://pubmed.ncbi.nlm.nih.gov/15398815/) · Systems theory · Access: Bibliographic record; no abstract.

Foundational treatment of open systems. Use the publication as historical grounding; distinguish a module receiving inputs from a globally autonomous simulation. Detailed claims require the full paper.

### H. Kitano (2002) — Computational Systems Biology

[Paper / primary record](https://www.nature.com/articles/nature01254) · Cellular systems · Access: Publisher abstract / record.

Computational and experimental approaches are combined to study biological systems. Connect model building to hypothesis testing. Bits and network edges do not supply metabolism, division or validated biological chemistry.

### A. Goldbeter (2002) — Computational Approaches to Cellular Rhythms

[Paper / primary record](https://www.nature.com/articles/nature01259) · Cellular systems · Access: Publisher abstract / record.

Models connect feedback and biochemical mechanisms to cellular rhythms. Study oscillator coupling and regulation, while treating biological correspondence as a separate validation task.

### J. P. Crutchfield (2012) — Between Order and Chaos

[Paper / primary record](https://www.nature.com/articles/nphys2190) · Complexity · Access: Publisher abstract and record.

Information and computation offer tools for studying structured complexity. Avoid equating entropy, randomness or visual detail with useful organization; measure more than one aspect.

### C. G. Langton (1990) — Computation at the Edge of Chaos

[Paper / primary record](https://www.sciencedirect.com/science/article/pii/016727899090064V) · Complexity · Access: Publisher abstract.

Cellular automata were used to investigate relations between dynamics and computational behavior. Treat criticality as a model-dependent hypothesis rather than a universal design target.

### Mitchell, Hraber and Crutchfield (1993) — Dynamics, Computation, and the Edge of Chaos: A Re-Examination

[Paper / primary record](https://arxiv.org/abs/adap-org/9306003) · Complexity · Access: Author preprint record / abstract.

Re-examines proposed links between cellular-automaton dynamics and computation. Include counterevidence and avoid promising complexity at a special parameter boundary.

### M. A. Bedau (1997) — Weak Emergence

[Paper / primary record](https://onlinelibrary.wiley.com/doi/abs/10.1111/0029-4624.31.s11.17) · Emergence · Access: Publisher record / philosophical paper.

Distinguishes a simulation-based conception of weak emergence. Use a defined notion of emergence. A finite demonstration does not prove the absence of every explanatory shortcut.

### A. K. Seth (2008) — Measuring Emergence via Nonlinear Granger Causality

[Paper / primary record](https://users.sussex.ac.uk/~anils/Papers/seth_emergence_alife2008.pdf) · Emergence · Access: Original full text.

Proposes prediction-based dependence and autonomy relative to chosen micro/macro descriptions. A possible future measure requiring explicit variables and validated predictive models; current Hamming comparisons are not this measure.

### Hoel, Albantakis and Tononi (2013) — Quantifying Causal Emergence Shows That Macro Can Beat Micro

[Paper / primary record](https://pmc.ncbi.nlm.nih.gov/articles/PMC3856819/) · Emergence · Access: Primary article abstract; intermittent full-text access.

Compares causal models at micro and macro scales using effective information. Requires an intervention distribution and coarse-graining. The app does not currently compute effective information.

### J. E. Pearson (1993) — Complex Patterns in a Simple System

[Paper / primary record](https://arxiv.org/abs/patt-sol/9304003) · Morphogenesis · Access: Author preprint record / abstract.

A simple reaction–diffusion model exhibits varied spatiotemporal patterns. Use Gray–Scott as a parameterized model family; this coarse clamped 3D solver is not a reproduction of the original simulations.

### Research article (2014) — Testing Turing’s Theory of Morphogenesis in Chemical Cells

[Paper / primary record](https://pmc.ncbi.nlm.nih.gov/articles/PMC3970514/) · Morphogenesis · Access: Original article text inspected.

Synthetic chemical-cell experiments test reaction–diffusion predictions under controlled conditions. The experimental comparison illustrates why model-specific measurements matter more than resemblance.

### Research article (2014) — The Theory of Pattern Formation on Directed Networks

[Paper / primary record](https://www.nature.com/articles/ncomms5517) · Networks and dimension · Access: Publisher abstract / record.

Directed topology can change the conditions for pattern-forming instabilities. Distinguish embedding geometry from network topology. Current app links are not automatically this paper’s reaction–diffusion operator.

### Research article (2018) — Combining Turing and 3D Vertex Models Reproduces Autonomous Multicellular Morphogenesis with Undulation, Tubulation, and Branching

[Paper / primary record](https://www.nature.com/articles/s41598-018-20678-6.pdf) · Networks and dimension · Access: Original full text.

Combines chemical patterning with deforming multicellular geometry in three dimensions. A fixed voxel cube omits the mechanical geometry and growth in that model; do not claim tissue morphogenesis.

### B. W.-C. Chan (2019) — Lenia: Biology of Artificial Life

[Paper / primary record](https://arxiv.org/abs/1812.05433) · Cellular automata · Access: Author preprint record / abstract.

Continuous cellular automata support diverse organized patterns under generalized local rules. Useful future algorithm family; Lenia and its published organisms are not currently implemented.

### B. W.-C. Chan (2020) — Lenia and Expanded Universe

[Paper / primary record](https://arxiv.org/abs/2005.03742) · Networks and dimension · Access: Author preprint record / abstract.

Extends Lenia across dimensions, kernels and channels. Dimensions and channels are independent design axes; added axes alone do not guarantee greater organization.

### B. Mandelbrot (1967) — How Long Is the Coast of Britain? Statistical Self-Similarity and Fractional Dimension

[Paper / primary record](https://gis.humboldt.edu/olm/courses/gsp_510/Articles/Mandelbrot1967.pdf) · Fractality · Access: Original full text.

Scale-dependent measurement and statistical self-similarity motivate fractional-dimension descriptions. Fractal claims need a scaling range. Four coarse box widths in a 10-cell edge are not an asymptotic dimension estimate.

### M. Slater (2009) — Place Illusion and Plausibility Can Lead to Realistic Behaviour in Immersive Virtual Environments

[Paper / primary record](https://diposit.ub.edu/dspace/bitstream/2445/53086/1/617004.pdf) · Virtual reality · Access: Primary article repository / abstract.

Distinguishes aspects of experienced presence in immersive environments. Presence is an observer property, not proof that simulated patterns have additional physical reality.

### Slater and colleagues (2022) — A Separate Reality: An Update on Place Illusion and Plausibility in Virtual Reality

[Paper / primary record](https://www.frontiersin.org/journals/virtual-reality/articles/10.3389/frvir.2022.914392/full) · Virtual reality · Access: Original full text.

Reviews presence concepts, measurement approaches and unresolved questions. Evaluate the viewing experience separately from the accuracy of the underlying simulation.

### Kraus and colleagues (2022) — Immersive Analytics with Abstract 3D Visualizations: A Survey

[Paper / primary record](https://onlinelibrary.wiley.com/doi/10.1111/cgf.14430) · Virtual reality · Access: Original review full text.

Surveys visualization, interaction and evaluation in immersive analytics. Choose VR by analysis task and compare against desktop and slices; benefits are not universal.

## Page allocation

| Page | Purposes | Contribution |
|---|---|---|
| Home | P1, P6 | Orient users and make the purpose navigable. |
| Create algorithms | P1, P2, P6 | Define, test and save new binary rules. |
| System compiler · G7 | P1, P2 | Turn system sentences into executable instructions. |
| Pattern network · G6 | P1, P2, P3 | Create environments and connect their algorithmic outputs. |
| Inside an environment | P2, P3 | Install algorithms and wire their internal layers. |
| Environment connections | P3, P5 | Control how one environment affects another. |
| 3D viewer and WebXR | P4, P6 | Observe the G6 volume, orbit the camera or enter VR. |
| Binary kernel · G8 | P1, P2, P3 | Compile and run two 1,000-bit matrices with binary messages. |
| PID composition · G10 | P2, P3, P5 | Connect feedback, drivers and a bounded binary actuator. |
| Algorithm ecology · G11 | P2, P3, P4, P5 | Combine built-in and custom algorithms in connected cubes. |
| Semantic discovery · G9 | P4, P5, P6 | Measure patterns and test explicit observer hypotheses. |
| Controlled experiments · G6 | P5, P6 | Compare the same network with selected connections removed. |
| Live inspection · G6 | P4 | Read the current state of the G6 environments. |
| Website wiring | P1, P3, P6 | Connect typed module ports and inspect deliveries. |
| Features and connections | P1, P6 | See what each module receives, produces and affects. |
| Controller menu | P3, P6 | Operate the labs through a shared categorized action menu. |
| Reference library | P1, P6 | Read the UI, accessibility, simulation and Quest references. |
| Purpose and research foundation | P1, P5, P6 | Trace the purpose hierarchy, research evidence and testable hypotheses. |

## Complete controller-function allocation

| Category | Function | Purposes |
|---|---|---|
| workspace | Load example | P1, P2, P3 |
| workspace | Add empty sandbox | P1, P2, P3 |
| workspace | Edit algorithms and links | P1, P2, P3 |
| workspace | Import network JSON | P1, P2, P3 |
| workspace | Clear workspace | P1, P2, P3 |
| simulation | Run / pause G6 | P2, P5 |
| simulation | Step G6 +1 | P2, P5 |
| simulation | Reset G6 | P2, P5 |
| simulation | Run G6 experiment | P5, P6 |
| simulation | Next ablation mode | P2, P5 |
| simulation | Next experiment horizon | P2, P5 |
| g7 | Compile G7 source | P1, P2 |
| g7 | Run / pause G7 | P1, P2 |
| g7 | Step G7 +1 | P1, P2 |
| g7 | Reset G7 | P1, P2 |
| g7 | Compare G7 coupling | P5, P6 |
| g7 | Next G7 preset | P1, P2 |
| g7 | Edit system sentences | P1, P2 |
| g8 | Compile G8 source | P1, P2, P3 |
| g8 | Run / pause G8 | P1, P2, P3 |
| g8 | Step G8 +1 | P1, P2, P3 |
| g8 | Reset G8 | P1, P2, P3 |
| g8 | Test G8 causality | P5, P6 |
| g8 | Reciprocal XOR preset | P1, P2, P3 |
| g8 | One-way preset | P1, P2, P3 |
| g8 | Isolated preset | P1, P2, P3 |
| g8 | Next binary depth slice | P1, P2, P3 |
| g8 | Edit binary source | P1, P2, P3 |
| g8 | Annotate G8 meaning | P1, P2, P3 |
| g9 | Run discovery | P4, P5 |
| g9 | Verify exact replay | P5, P6 |
| g9 | Next intervention mode | P4, P5 |
| g9 | Next duration | P4, P5 |
| g9 | Next flip address | P4, P5 |
| g9 | Next intervention tick | P4, P5 |
| g9 | Next detected pattern | P4, P5 |
| g9 | Read measured evidence | P4, P5 |
| g9 | Write observer hypothesis | P6 |
| view | Recenter view | P4, P6 |
| view | Describe G6 state | P4, P6 |
| view | Pause all runtimes | P4, P6 |
| view | Orbit left | P4, P6 |
| view | Orbit right | P4, P6 |
| view | Orbit up | P4, P6 |
| view | Orbit down | P4, P6 |
| view | Zoom in | P4, P6 |
| view | Zoom out | P4, P6 |
| evidence | Export G6 network | P6 |
| evidence | Export G6 experiment | P6 |
| evidence | Export G7 evidence | P6 |
| evidence | Export G8 binary | P6 |
| evidence | Export G9 evidence | P6 |
| evidence | Open hypothesis notebook | P6 |
| references | Web UI and UX process | P1, P6 |
| references | PhET simulation guidance | P1, P6 |
| references | PhET accessibility | P1, P6 |
| references | Meta Quest references | P1, P6 |
| references | Read purpose hierarchy | P1, P6 |
| references | Export research and purpose map | P6 |
| references | Open all original links | P1, P6 |
| composition | Step system +1 | P2, P3, P5 |
| composition | Run / pause system | P2, P3, P5 |
| composition | Reset system | P2, P3, P5 |
| composition | Compare PID / open loop | P5, P6 |
| composition | Verify system replay | P5, P6 |
| composition | Import G8 matrix | P2, P3, P5 |
| composition | Export system evidence | P6 |
| composition | Next system preset | P2, P3, P5 |
| composition | Toggle oscillator edge | P2, P3, P5 |
| composition | Edit PID gains | P2, P3, P5 |
| ecology | Step algorithm network | P2, P3, P4, P5 |
| ecology | Run / pause algorithm network | P2, P3, P4, P5 |
| ecology | Reset same seed | P2, P3, P4, P5 |
| ecology | Compare coupled / isolated | P5, P6 |
| ecology | Verify ecology replay | P5, P6 |
| ecology | Sweep seeds and parameters | P5, P6 |
| ecology | Export ecology evidence | P6 |
| ecology | Toggle influence colors | P2, P3, P4, P5 |
| ecology | Next sandbox view | P2, P3, P4, P5 |
| ecology | Edit algorithms and edges | P2, P3, P4, P5 |
| workshop | Create new algorithm | P1, P2, P6 |
| workshop | Export custom rules | P6 |
| workshop | Browse complete registry | P1, P2, P6 |
| workshop | Read features and connections | P1, P2, P6 |
| workflow | Advance workflow tick | P3, P6 |
| workflow | Save wiring | P6 |
| workflow | Load saved wiring | P6 |
| workflow | Restore default wiring | P3, P6 |
| workflow | Export wiring JSON | P6 |
| workflow | Edit module connections | P3, P6 |
