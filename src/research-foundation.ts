// A proposed design framework, not a new scientific law. Research reviewed 19 October 2026.
export const topPurpose='Make the formation, organization and causal dependence of patterns constructible, observable and testable, so sandbox exploration can produce reproducible knowledge.';
export const purposes=[
 {id:'P1',title:'Define a bounded system',question:'What exists, and under which assumptions?',leaves:['State schema and instruction format','Spatial domain, neighbors and boundaries','Initial conditions, seed and model scope'],evidence:'A run records its rules, initial state, boundary convention and numerical registers.'},
 {id:'P2',title:'Generate and transform patterns',question:'What can the rules produce?',leaves:['Author and validate rules','Compile and execute transitions','Explore parameters and reusable algorithms'],evidence:'Rules run, outputs obey their state contract and repeated configurations replay.'},
 {id:'P3',title:'Relate processes and regulate flows',question:'What affects what?',leaves:['Compose internal and external nodes','Transform typed inputs and outputs','Control feedback, timing and interventions'],evidence:'Enabled edges deliver; disabled edges stop delivery; counterfactuals isolate specified connections.'},
 {id:'P4',title:'Observe structure across descriptions',question:'What happened at the chosen scale?',leaves:['Inspect cells, fields and trajectories','Measure recurrence, components and spatial change','Offer color, slices, text, 3D and optional VR'],evidence:'Descriptors state their topology and scale; views preserve the underlying model state.'},
 {id:'P5',title:'Test explanations and revise hypotheses',question:'Which explanation survives a controlled comparison?',leaves:['Use matched initial conditions','Ablate edges or perturb bits','Separate observations, candidate emergence and biological analogy'],evidence:'A claim has an explicit intervention, baseline, duration and failure condition.'},
 {id:'P6',title:'Preserve, communicate and make knowledge usable',question:'Can someone inspect, repeat and challenge the result?',leaves:['Export configurations and evidence','Map pages and controls to purpose','Provide accessible controls, references and recoverable navigation'],evidence:'Evidence includes provenance; every page and controller action has a purpose allocation.'}
];
export const pagePurposes:Record<string,string[]>={home:['P1','P6'],workshop:['P1','P2','P6'],compiler:['P1','P2'],network:['P1','P2','P3'],layers:['P2','P3'],relationships:['P3','P5'],spatial:['P4','P6'],binary:['P1','P2','P3'],pid:['P2','P3','P5'],ecology:['P2','P3','P4','P5'],discovery:['P4','P5','P6'],experiments:['P5','P6'],metrics:['P4'],wiring:['P1','P3','P6'],features:['P1','P6'],controllers:['P3','P6'],references:['P1','P6'],theory:['P1','P5','P6']};
export const categoryPurposes:Record<string,string[]>={workspace:['P1','P2','P3'],simulation:['P2','P5'],g7:['P1','P2'],g8:['P1','P2','P3'],g9:['P4','P5'],view:['P4','P6'],evidence:['P5','P6'],references:['P1','P6'],composition:['P2','P3','P5'],ecology:['P2','P3','P4','P5'],workshop:['P1','P2','P6'],workflow:['P3','P6']};
export function actionPurposes(category:string,action:string){if(/export|notebook|note|save|load/.test(action))return ['P6'];if(/replay|compare|experiment|causality|sweep/.test(action))return ['P5','P6'];return categoryPurposes[category]||[];}
export const principles=[
 {name:'Operational patterns before semantic labels',text:'A cell is an indexed state position, not automatically a biological cell. Meaning is an observer hypothesis. Pattern descriptors must not depend on the name or color assigned by an observer.'},
 {name:'State includes the machinery that changes the bits',text:'Write S=(X,R,Q,C): binary cells X, numeric registers R, pending messages Q and relevant clocks C. A recurrence of X alone is not necessarily a recurrence of the whole system.'},
 {name:'Relations are mechanisms, not decorations',text:'For a node i, Sᵢ(t+1)=Fᵢ(Sᵢ(t),Σ Aⱼᵢ·Tⱼᵢ(outputⱼ(t));θᵢ,B,dt). Each engine documents its actual input adapter. A colored connection is evidence only when its delivery and effect can be checked.'},
 {name:'Emergence is a research question',text:'Trajectory divergence, recurrence and visually rich patterns are observations. Weak emergence, causal emergence, intelligence and life are distinct claims requiring their own definitions and tests. Noise is not automatically organized complexity.'},
 {name:'Boundaries, scale and dimensionality are part of the model',text:'A periodic cube, a bounded field, a graph and a tissue are different domains. Three coordinate axes, graph connectivity and visual immersion are different kinds of dimensionality. A 10³ grid cannot establish asymptotic fractality.'},
 {name:'Purpose belongs to the engineered laboratory',text:'The top-level purpose is our reason for building the website, not a goal supposedly possessed by every pattern or by nature. Bottom-up evaluation must check whether the available functions actually support that purpose.'},
 {name:'The observer is accountable',text:'Use matched baselines, disclose thresholds and numerical approximations, preserve failed or trivial outcomes, and keep hypotheses revisable. VR is an optional inspection interface whose value needs user studies, not a source of extra physical validity.'}
];
export const hypotheses=[
 {id:'H1',claim:'Specified edges alter a receiving trajectory under controlled conditions.',test:'Same initial state and parameters; remove one edge or a declared set; compare state trajectories.',status:'Supported test mechanism exists; effect depends on configuration.'},
 {id:'H2',claim:'Some couplings change spatial organization beyond isolated execution.',test:'Compare gradient, components and persistence across matched seeds; record zero effects too.',status:'Explorable with current descriptors; not a universal guarantee.'},
 {id:'H3',claim:'A macro-description can add useful predictive structure.',test:'Define coarse-graining; compare held-out predictors, uncertainty and intervention distributions.',status:'Research proposal. G-emergence and effective information are not implemented.'},
 {id:'H4',claim:'A pattern exhibits scale-consistent geometry.',test:'Use multiple grid sizes and a defensible scaling range, with boundary and threshold sensitivity controls.',status:'Research proposal. No certified fractal dimension from this 10³ prototype.'},
 {id:'H5',claim:'Immersive inspection improves a particular analysis task.',test:'Compare desktop, slices and VR on accuracy, time, accessibility and comfort with participants.',status:'Research proposal. Simulated XR tests establish software behavior, not cognitive benefit.'}
];

export const bibliography=[
 {
  "id": "life",
  "topic": "Cellular automata",
  "year": 1970,
  "authors": "Gardner / Conway",
  "title": "Mathematical Games: the fantastic combinations of Conway’s game Life",
  "url": "https://www.scientificamerican.com/article/mathematical-games-1970-10/",
  "access": "Publisher record; historical introduction",
  "finding": "Local binary updates can sustain recognizable moving or recurring configurations.",
  "application": "Use explicit neighborhoods and reproducible rules. Conway Life is 2D B3/S23; the implemented 3D B6/S567 rule is a different model."
 },
 {
  "id": "turing",
  "topic": "Morphogenesis",
  "year": 1952,
  "authors": "A. M. Turing",
  "title": "The Chemical Basis of Morphogenesis",
  "url": "https://www.damtp.cam.ac.uk/user/gold/pdfs/teaching/old_literature/Turing1952.pdf",
  "access": "Original full text",
  "finding": "Reaction and diffusion can destabilize a homogeneous state under specified conditions.",
  "application": "Separate a mechanism from a visual resemblance. Spotted output alone does not identify a Turing instability."
 },
 {
  "id": "systems",
  "topic": "Systems theory",
  "year": 1950,
  "authors": "L. von Bertalanffy",
  "title": "An Outline of General System Theory",
  "url": "https://www.isnature.org/Events/2009/Summer/r/Bertalanffy1950-GST_Outline_SELECT.pdf",
  "access": "Selected original text",
  "finding": "Relations and system organization motivate principles that cross disciplinary boundaries.",
  "application": "Model boundaries and whole/part relations explicitly; analogies do not establish identical mechanisms."
 },
 {
  "id": "open",
  "topic": "Systems theory",
  "year": 1950,
  "authors": "L. von Bertalanffy",
  "title": "The Theory of Open Systems in Physics and Biology",
  "url": "https://pubmed.ncbi.nlm.nih.gov/15398815/",
  "access": "Bibliographic record; no abstract",
  "finding": "Foundational treatment of open systems.",
  "application": "Use the publication as historical grounding; distinguish a module receiving inputs from a globally autonomous simulation. Detailed claims require the full paper."
 },
 {
  "id": "kitano",
  "topic": "Cellular systems",
  "year": 2002,
  "authors": "H. Kitano",
  "title": "Computational Systems Biology",
  "url": "https://www.nature.com/articles/nature01254",
  "access": "Publisher abstract / record",
  "finding": "Computational and experimental approaches are combined to study biological systems.",
  "application": "Connect model building to hypothesis testing. Bits and network edges do not supply metabolism, division or validated biological chemistry."
 },
 {
  "id": "rhythms",
  "topic": "Cellular systems",
  "year": 2002,
  "authors": "A. Goldbeter",
  "title": "Computational Approaches to Cellular Rhythms",
  "url": "https://www.nature.com/articles/nature01259",
  "access": "Publisher abstract / record",
  "finding": "Models connect feedback and biochemical mechanisms to cellular rhythms.",
  "application": "Study oscillator coupling and regulation, while treating biological correspondence as a separate validation task."
 },
 {
  "id": "complexity",
  "topic": "Complexity",
  "year": 2012,
  "authors": "J. P. Crutchfield",
  "title": "Between Order and Chaos",
  "url": "https://www.nature.com/articles/nphys2190",
  "access": "Publisher abstract and record",
  "finding": "Information and computation offer tools for studying structured complexity.",
  "application": "Avoid equating entropy, randomness or visual detail with useful organization; measure more than one aspect."
 },
 {
  "id": "edge",
  "topic": "Complexity",
  "year": 1990,
  "authors": "C. G. Langton",
  "title": "Computation at the Edge of Chaos",
  "url": "https://www.sciencedirect.com/science/article/pii/016727899090064V",
  "access": "Publisher abstract",
  "finding": "Cellular automata were used to investigate relations between dynamics and computational behavior.",
  "application": "Treat criticality as a model-dependent hypothesis rather than a universal design target."
 },
 {
  "id": "critique",
  "topic": "Complexity",
  "year": 1993,
  "authors": "Mitchell, Hraber and Crutchfield",
  "title": "Dynamics, Computation, and the Edge of Chaos: A Re-Examination",
  "url": "https://arxiv.org/abs/adap-org/9306003",
  "access": "Author preprint record / abstract",
  "finding": "Re-examines proposed links between cellular-automaton dynamics and computation.",
  "application": "Include counterevidence and avoid promising complexity at a special parameter boundary."
 },
 {
  "id": "weak",
  "topic": "Emergence",
  "year": 1997,
  "authors": "M. A. Bedau",
  "title": "Weak Emergence",
  "url": "https://onlinelibrary.wiley.com/doi/abs/10.1111/0029-4624.31.s11.17",
  "access": "Publisher record / philosophical paper",
  "finding": "Distinguishes a simulation-based conception of weak emergence.",
  "application": "Use a defined notion of emergence. A finite demonstration does not prove the absence of every explanatory shortcut."
 },
 {
  "id": "g-emergence",
  "topic": "Emergence",
  "year": 2008,
  "authors": "A. K. Seth",
  "title": "Measuring Emergence via Nonlinear Granger Causality",
  "url": "https://users.sussex.ac.uk/~anils/Papers/seth_emergence_alife2008.pdf",
  "access": "Original full text",
  "finding": "Proposes prediction-based dependence and autonomy relative to chosen micro/macro descriptions.",
  "application": "A possible future measure requiring explicit variables and validated predictive models; current Hamming comparisons are not this measure."
 },
 {
  "id": "causal",
  "topic": "Emergence",
  "year": 2013,
  "authors": "Hoel, Albantakis and Tononi",
  "title": "Quantifying Causal Emergence Shows That Macro Can Beat Micro",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3856819/",
  "access": "Primary article abstract; intermittent full-text access",
  "finding": "Compares causal models at micro and macro scales using effective information.",
  "application": "Requires an intervention distribution and coarse-graining. The app does not currently compute effective information."
 },
 {
  "id": "gray",
  "topic": "Morphogenesis",
  "year": 1993,
  "authors": "J. E. Pearson",
  "title": "Complex Patterns in a Simple System",
  "url": "https://arxiv.org/abs/patt-sol/9304003",
  "access": "Author preprint record / abstract",
  "finding": "A simple reaction–diffusion model exhibits varied spatiotemporal patterns.",
  "application": "Use Gray–Scott as a parameterized model family; this coarse clamped 3D solver is not a reproduction of the original simulations."
 },
 {
  "id": "chemical-cells",
  "topic": "Morphogenesis",
  "year": 2014,
  "authors": "Research article",
  "title": "Testing Turing’s Theory of Morphogenesis in Chemical Cells",
  "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3970514/",
  "access": "Original article text inspected",
  "finding": "Synthetic chemical-cell experiments test reaction–diffusion predictions under controlled conditions.",
  "application": "The experimental comparison illustrates why model-specific measurements matter more than resemblance."
 },
 {
  "id": "directed",
  "topic": "Networks and dimension",
  "year": 2014,
  "authors": "Research article",
  "title": "The Theory of Pattern Formation on Directed Networks",
  "url": "https://www.nature.com/articles/ncomms5517",
  "access": "Publisher abstract / record",
  "finding": "Directed topology can change the conditions for pattern-forming instabilities.",
  "application": "Distinguish embedding geometry from network topology. Current app links are not automatically this paper’s reaction–diffusion operator."
 },
 {
  "id": "three-d",
  "topic": "Networks and dimension",
  "year": 2018,
  "authors": "Research article",
  "title": "Combining Turing and 3D Vertex Models Reproduces Autonomous Multicellular Morphogenesis with Undulation, Tubulation, and Branching",
  "url": "https://www.nature.com/articles/s41598-018-20678-6.pdf",
  "access": "Original full text",
  "finding": "Combines chemical patterning with deforming multicellular geometry in three dimensions.",
  "application": "A fixed voxel cube omits the mechanical geometry and growth in that model; do not claim tissue morphogenesis."
 },
 {
  "id": "lenia",
  "topic": "Cellular automata",
  "year": 2019,
  "authors": "B. W.-C. Chan",
  "title": "Lenia: Biology of Artificial Life",
  "url": "https://arxiv.org/abs/1812.05433",
  "access": "Author preprint record / abstract",
  "finding": "Continuous cellular automata support diverse organized patterns under generalized local rules.",
  "application": "Useful future algorithm family; Lenia and its published organisms are not currently implemented."
 },
 {
  "id": "lenia3d",
  "topic": "Networks and dimension",
  "year": 2020,
  "authors": "B. W.-C. Chan",
  "title": "Lenia and Expanded Universe",
  "url": "https://arxiv.org/abs/2005.03742",
  "access": "Author preprint record / abstract",
  "finding": "Extends Lenia across dimensions, kernels and channels.",
  "application": "Dimensions and channels are independent design axes; added axes alone do not guarantee greater organization."
 },
 {
  "id": "fractal",
  "topic": "Fractality",
  "year": 1967,
  "authors": "B. Mandelbrot",
  "title": "How Long Is the Coast of Britain? Statistical Self-Similarity and Fractional Dimension",
  "url": "https://gis.humboldt.edu/olm/courses/gsp_510/Articles/Mandelbrot1967.pdf",
  "access": "Original full text",
  "finding": "Scale-dependent measurement and statistical self-similarity motivate fractional-dimension descriptions.",
  "application": "Fractal claims need a scaling range. Four coarse box widths in a 10-cell edge are not an asymptotic dimension estimate."
 },
 {
  "id": "presence",
  "topic": "Virtual reality",
  "year": 2009,
  "authors": "M. Slater",
  "title": "Place Illusion and Plausibility Can Lead to Realistic Behaviour in Immersive Virtual Environments",
  "url": "https://diposit.ub.edu/dspace/bitstream/2445/53086/1/617004.pdf",
  "access": "Primary article repository / abstract",
  "finding": "Distinguishes aspects of experienced presence in immersive environments.",
  "application": "Presence is an observer property, not proof that simulated patterns have additional physical reality."
 },
 {
  "id": "presence-update",
  "topic": "Virtual reality",
  "year": 2022,
  "authors": "Slater and colleagues",
  "title": "A Separate Reality: An Update on Place Illusion and Plausibility in Virtual Reality",
  "url": "https://www.frontiersin.org/journals/virtual-reality/articles/10.3389/frvir.2022.914392/full",
  "access": "Original full text",
  "finding": "Reviews presence concepts, measurement approaches and unresolved questions.",
  "application": "Evaluate the viewing experience separately from the accuracy of the underlying simulation."
 },
 {
  "id": "analytics",
  "topic": "Virtual reality",
  "year": 2022,
  "authors": "Kraus and colleagues",
  "title": "Immersive Analytics with Abstract 3D Visualizations: A Survey",
  "url": "https://onlinelibrary.wiley.com/doi/10.1111/cgf.14430",
  "access": "Original review full text",
  "finding": "Surveys visualization, interaction and evaluation in immersive analytics.",
  "application": "Choose VR by analysis task and compare against desktop and slices; benefits are not universal."
 }
];
