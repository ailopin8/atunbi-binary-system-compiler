# Home and module pages

The root URL opens a grouped home page. Each module has an addressable client-side page at `?page=<id>`. These query URLs work with the existing static host without adding server rewrite requirements. They are genuine navigable application pages with a selected module, page heading, document title, related links, browser history and a shared Home link.

The home groups tools into Create, Simulate, Inspect, Connect and Learn. G6's editor, layers, relationships, spatial viewer, metrics, theory and experiments are separated rather than keeping the entire workbench on every page. G7–G11, the creator, references, website wiring, controllers and the feature map each have their own page.

Navigation retains mounted models, event handlers and drafts during the current session. Moving to another page does not restart a simulation or change its edges. Hidden modules may keep running if the user started them; use pause controls when needed. Refreshing or opening another tab initializes a new working session; saved rules and explicitly saved wiring remain browser-persisted. Simulation snapshots must be exported if they need to be retained.

Old bookmarks such as `#g11-lab` are canonicalized to `?page=ecology`. Internal module links navigate without a full reload. Editor-focus actions in the controller menu open the owning page before focusing the editor. Browser Back/Forward selects the corresponding page without resetting mounted state. Unknown pages show the home page with a readable recovery message.

The `navigation.page → metrics.data` edge records the selected page as a presentation snapshot. It does not feed page selection into the binary kernels. Module wiring and simulated algorithm edges retain their existing execution contracts.

The feature map's old single-page focus toolbar is superseded by page navigation in normal use. Navigation to hidden modules restores their visibility. `?integration-test=1` exposes all mounted modules only for the existing cross-module regression harness; it is not linked from the home page. Separate browser tests exercise the real default home and all 17 page routes.

## Validation

- Every page has unique IDs and valid related links.
- Check home, all 17 pages, legacy URLs, refresh, Back/Forward and invalid route recovery.
- Verify a G11 matrix and a workshop draft survive navigation.
- Verify controller editor-focus navigation and mobile width.
- Check automated accessibility on home and an open workshop page, plus existing integration workflows and simulated WebXR.

Deployment remains blocked by AppDeploy's daily credit limit reported 19 October 2026, resetting 20 October at 00:00 UTC. Source changes are tested locally and pushed to GitHub; deployment is not implied by a successful push.

## Page directory

| Group | Page | URL |
|---|---|---|
| Create | Create algorithms | `?page=workshop` |
| Create | System compiler · G7 | `?page=compiler` |
| Simulate | Pattern network · G6 | `?page=network` |
| Simulate | Inside an environment | `?page=layers` |
| Connect | Environment connections | `?page=relationships` |
| Inspect | 3D viewer and WebXR | `?page=spatial` |
| Simulate | Binary kernel · G8 | `?page=binary` |
| Simulate | PID composition · G10 | `?page=pid` |
| Simulate | Algorithm ecology · G11 | `?page=ecology` |
| Inspect | Semantic discovery · G9 | `?page=discovery` |
| Inspect | Controlled experiments · G6 | `?page=experiments` |
| Inspect | Live inspection · G6 | `?page=metrics` |
| Connect | Website wiring | `?page=wiring` |
| Connect | Features and connections | `?page=features` |
| Connect | Controller menu | `?page=controllers` |
| Learn | Reference library | `?page=references` |
| Learn | Purpose and experimental theory | `?page=theory` |
