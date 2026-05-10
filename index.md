<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Digital Manufacturing Blog | 6E7V0013</title>
<style>
  body { font-family: Georgia, serif; font-size: 17px; line-height: 1.75; max-width: 780px; margin: 60px auto; padding: 0 24px; color: #222; background: #fff; }
  h1 { font-size: 1.5rem; margin-bottom: 0.2rem; }
  h2 { font-size: 1.25rem; margin-top: 3rem; margin-bottom: 0.5rem; border-bottom: 1px solid #ddd; padding-bottom: 0.3rem; }
  h3 { font-size: 1rem; margin-top: 1.5rem; margin-bottom: 0.25rem; }
  p { margin: 0.75rem 0; }
  ul, ol { margin: 0.75rem 0 0.75rem 1.5rem; }
  li { margin-bottom: 0.3rem; }
  hr { border: none; border-top: 1px solid #ddd; margin: 3rem 0; }
  .meta { color: #888; font-size: 0.85rem; font-family: Arial, sans-serif; margin-bottom: 2rem; }
  .placeholder { background: #f5f5f5; border-left: 3px solid #bbb; padding: 0.6rem 1rem; margin: 1rem 0; font-style: italic; color: #666; font-size: 0.9rem; }
  table { border-collapse: collapse; width: 100%; font-size: 0.82rem; margin: 1rem 0; }
  th { background: #f0f0f0; text-align: left; padding: 0.5rem 0.6rem; border: 1px solid #ccc; }
  td { padding: 0.45rem 0.6rem; border: 1px solid #ddd; vertical-align: top; }
  tr:nth-child(even) { background: #fafafa; }
  .ref { font-size: 0.8rem; color: #666; margin-top: 2rem; border-top: 1px solid #eee; padding-top: 0.75rem; }
  .refs-section { font-size: 0.85rem; color: #444; line-height: 2; }
  .refs-section p { margin: 0.2rem 0; }
</style>
</head>
<body>

<h1>Digital Manufacturing — 6E7V0013</h1>
<p class="meta">MSc Digital Design and Manufacturing / MSc Robotics and Automation / MEng Mechanical Engineering<br>Manchester Metropolitan University · 2025–26</p>

<hr>

<h2>Week 1 — The Brief</h2>

<p>The brief for this module is to manufacture top and bottom phone casings for Phones-R-Us using FDM 3D printing. The casings need to fit the injection-moulded master parts, pass through the FESTO CP Lab assembly line, and include some form of traceability. The two assessments are the physical casing (1CWK40, 40%) and this blog (2CWK60, 60%).</p>

<p>First visit to the FESTO CP Lab — a 6-station automated assembly line that builds a modular phone using conveyors and pick-and-place systems. This line also needs to be modelled in Tecnomatix Plant Simulation to understand whether 50,000 units per year is achievable and how many resources it requires.</p>

<p>The scenario sets up a problem that runs through the whole module: Phones-R-Us uses multiple suppliers for the same casing. Vertically, the factory needs to be digitally connected from machine to management. Horizontally, the supply chain needs consistency across suppliers. The risk is that casings from different suppliers — all made to the same drawing — still vary enough that they're not interchangeable. That's what the printing, measuring, and process capability work is about.</p>

<p>Printers available: Ultimaker FDM in PrintCity. The submission must use FDM only. Signed up for PrintCity inductions and started the CAD model in Fusion 360.</p>

<hr>

<h2>Week 2 — Industry 4.0 & Blog Setup</h2>

<p>The lecture introduced Industry 4.0 and why digital transformation matters at a manufacturing level. The Siemens ventilator case study was the most directly relevant — using plant simulation they designed a production line in 4 days and scaled from 10 to 1,500 units per week, reducing floor footprint by 66%. That same approach of simulating before committing to physical resources applies to the Phones-R-Us line.</p>

<p>The broader context is that UK manufacturing policy — including the Made Smarter initiative — is pushing industry toward exactly these tools: digital twins, simulation, IoT integration. Oesterreich and Teuteberg (2016) argue that Industry 4.0 technologies create value not just through efficiency gains but through enabling entirely new service models, which the Rolls-Royce predictive maintenance case demonstrates.<sup>[1]</sup></p>

<p>Workshop was setting up the blog. Three options were presented: Adobe Express, WordPress, or HTML with Copilot hosted on GitHub Pages. I used <em>[your platform here]</em>. The main point with Copilot-generated HTML is to front-load all requirements — layout, navigation, styling, hosting — in the first prompt rather than building them incrementally.</p>

<div class="placeholder">📸 [Screenshot of your blog / Fusion 360 CAD model at this stage]</div>
<p><em>[Where the CAD model is at this point — e.g. overall body profile done, working on internal tolerances for the snap-fit]</em></p>

<p class="ref">[1] Oesterreich, T.D. and Teuteberg, F. (2016) 'Understanding the implications of digitisation and automation in the context of Industry 4.0', <em>Computers in Industry</em>, 83, pp. 121–139.</p>

<hr>

<h2>Week 3 — PFMEA & Print Iteration 1</h2>

<p>PFMEA is a structured method for identifying and prioritising manufacturing risks before they occur. Each failure mode is scored on Severity (how bad), Occurrence (how likely), and Detection (how easily caught) — multiplied together to give the Risk Priority Number: RPN = S × O × D, maximum 1000. Higher RPN means higher priority to address.</p>

<p>Liu et al. (2019) note that PFMEA applied to FDM processes is more uncertain than for conventional manufacturing because parameters interact non-linearly — changing layer height affects dimensional accuracy, surface finish, and residual stress simultaneously.<sup>[2]</sup></p>

<p>The table below covers the key failure modes for the FDM casing process from CAD through to inspection. Adjust S, O, and D to reflect what you actually observed, then multiply to get the RPN.</p>

<div style="overflow-x:auto;">
<table>
  <thead>
    <tr>
      <th>Process Step</th>
      <th>Failure Mode</th>
      <th>Effect</th>
      <th>Cause</th>
      <th>S</th><th>O</th><th>D</th><th>RPN</th>
      <th>Recommended Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>CAD</td>
      <td>Incorrect tolerance in model</td>
      <td>Casing doesn't fit master part; fails assembly</td>
      <td>Drawing misread; no FDM shrinkage offset applied</td>
      <td>8</td><td>6</td><td>4</td><td><em>[fill]</em></td>
      <td>Cross-check critical dims before slicing; apply known shrinkage offset</td>
    </tr>
    <tr>
      <td>Slicing</td>
      <td>Wrong print orientation</td>
      <td>Anisotropic weakness at snap-fit; poor finish on visible face</td>
      <td>No orientation standard defined</td>
      <td>6</td><td>4</td><td>5</td><td><em>[fill]</em></td>
      <td>Print flat face down; define standard orientation before first iteration</td>
    </tr>
    <tr>
      <td>Printing</td>
      <td>Base layer warping</td>
      <td>Part lifts from bed; geometry distorted; unusable on FESTO line</td>
      <td>Poor bed adhesion; no brim; ambient temperature variation</td>
      <td>9</td><td>7</td><td>3</td><td><em>[fill]</em></td>
      <td>Use brim; calibrate first layer; increase bed temperature</td>
    </tr>
    <tr>
      <td>Printing</td>
      <td>Mid-print failure / filament runout</td>
      <td>Partial print; time and material entirely lost</td>
      <td>Filament tangle; clog; printer unmonitored</td>
      <td>7</td><td>5</td><td>6</td><td><em>[fill]</em></td>
      <td>Check spool before job; monitor start of print; use printer with runout sensor</td>
    </tr>
    <tr>
      <td>Printing</td>
      <td>Over/under extrusion</td>
      <td>Walls too thick/thin; snap-fit fails; casing too large for pallet</td>
      <td>Incorrect flow rate; worn nozzle; filament diameter variation</td>
      <td>8</td><td>5</td><td>4</td><td><em>[fill]</em></td>
      <td>Calibrate flow rate; print test cube first; use consistent filament brand</td>
    </tr>
    <tr>
      <td>Post-processing</td>
      <td>Support material not fully removed</td>
      <td>Protrusions prevent correct seating against master casing</td>
      <td>Inaccessible geometry; rushed removal</td>
      <td>6</td><td>4</td><td>3</td><td><em>[fill]</em></td>
      <td>Minimise supports via orientation; use support blockers; inspect all faces after removal</td>
    </tr>
    <tr>
      <td>Inspection</td>
      <td>Non-conforming part passed to assembly</td>
      <td>Casing jams or fails on FESTO line; production stops</td>
      <td>No defined inspection step before line run</td>
      <td>9</td><td>4</td><td>7</td><td><em>[fill]</em></td>
      <td>Define go/no-go checklist; measure critical dims with calipers before every FESTO run</td>
    </tr>
  </tbody>
</table>
</div>

<p>Prioritise any RPN above 200 for immediate corrective action. The three likely highest-scoring rows are base layer warping (9×7×3 = 189), non-conforming part passed to assembly (9×4×7 = 252), and incorrect tolerance in CAD (8×6×4 = 192) — these are also most directly linked to the supplier variability problem in the brief.</p>

<h3>Print 1</h3>
<p><em>[Settings — printer model, layer height, infill %, print speed, supports yes/no, material. Key measured dimensions vs drawing — note the actual error. Did it fit the master casing? What were the main issues?]</em></p>
<div class="placeholder">📸 [Photo of Print 1 next to the master casing]</div>

<p class="ref">[2] Liu, R. et al. (2019) 'A review of FMEA and its application to additive manufacturing', <em>Engineering Failure Analysis</em>, 105, pp. 1–23.</p>

<hr>

<h2>Week 4 — Manufacturing System Design & Print Iteration 2</h2>

<p>Manufacturing System Design this week — Value Stream Maps, Takt Time, and Process Flow Diagrams. Takt time is available production time divided by customer demand. Assuming a two-shift operation, 8 hours per shift, 5 days per week, 48 working weeks per year:</p>

<p><strong>Takt time = (2 × 8 × 60 × 60 × 5 × 48) ÷ 50,000 ≈ 27.6 seconds per unit.</strong> Every station on the line must complete its operation within this window or the line falls behind the annual target.</p>

<p>In the workshop each group ran the CP Lab and timed every station, aiming to produce 5 phones as fast as possible. Those timings feed directly into Tecnomatix. The bottleneck station showed up clearly — queue building in front of one station while the next sat idle.</p>

<div class="placeholder">📸 [Photo of the CP Lab running / your group timing the stations]</div>
<p><em>[Your actual station times — FrontMag: Xs, Measuring: Xs, iPick: Xs, Press: Xs, Oven: Xs, Output: Xs. Note which was the bottleneck.]</em></p>

<h3>Print 2</h3>
<p><em>[What changed from Print 1 — scaling, brim, infill, orientation? What improved and what still needs work?]</em></p>
<div class="placeholder">📸 [Photo of Print 2 / side-by-side with Print 1]</div>

<hr>

<h2>Week 5 — Introduction to Plant Simulation & Print Iteration 3</h2>

<p>First session in Tecnomatix Plant Simulation. Discrete Event Simulation models a process as a sequence of timed events — each changes the system state and can trigger the next. Built a basic source → station → drain model, extended to 4 stations with a bottleneck analysis. The slower station blocked everything upstream — the fixes are reducing its cycle time or parallelising it. At the end of the session the task was to start building a model of the CP Lab using the station timings from week 4.</p>

<div class="placeholder">📸 [Screenshot of your first Tecnomatix model]</div>

<p>Mourtzis et al. (2014) identify DES as the key enabling technology for flexible manufacturing system design, noting it reduces design iteration time by allowing virtual experiments that would take weeks to run physically.<sup>[3]</sup> For Phones-R-Us, committing to a physical line configuration without simulating it first is an expensive way to find bottlenecks.</p>

<h3>Print 3</h3>
<p><em>[Next iteration — what changed, what improved, what are you still trying to fix?]</em></p>
<div class="placeholder">📸 [Photo of Print 3 / measurement against drawing]</div>

<p class="ref">[3] Mourtzis, D., Doukas, M. and Bernidaki, D. (2014) 'Simulation in manufacturing: review and challenges', <em>Procedia CIRP</em>, 25, pp. 213–229.</p>

<hr>

<h2>Week 6 — CP Lab in Tecnomatix & First FESTO Run</h2>

<p>Built the full CP Lab model in Tecnomatix — all 6 stations (FrontMagStation, MeasuringStation, iPick, PressStation, OvenStation, OutputStation) connected by conveyors, with a source and drain. Workers added via a Broker and Worker Pool, assigned to both processing and transport roles. Station timings from Week 4 used as inputs.</p>

<p>Once the real timings were in, the bottleneck showed up clearly in the stats. Adding more workers beyond a certain point made no difference — the constraint was process time, not headcount. Used the Experiment Manager to sweep worker counts rather than changing the value manually each time.</p>

<div class="placeholder">📸 [Screenshot of your Tecnomatix CP Lab model — station layout, conveyors, worker pool, source/drain]</div>
<p><em>[Note on what the initial simulation output was — how many units per week before any optimisation? Was it on track for 50,000/year at this point?]</em></p>

<h3>Print 4 / First FESTO Run</h3>
<p><em>[Did a casing go through the FESTO line this week? What happened at each station — did it pass through cleanly, jam, fail the measuring station? What does this tell you about the dimensional accuracy of the current print?]</em></p>
<div class="placeholder">📸 [Photo or video of your casing on the FESTO line / result of the test]</div>

<hr>

<h2>Week 7 — Simulation Optimisation & Final Print</h2>

<p>This week the simulation was extended to run for a full year (365 days) and optimised to test whether 50,000 units is achievable. A shift calendar was added (two shifts, Mon–Sat, with breaks), the worker pool tuned using the Experiment Manager, and SimTalk code generated with Copilot used to apply parameters from a TableFile across all stations programmatically. The AI-generated code needed correcting — SimTalk object paths are model-specific and some were wrong.</p>

<p>Final simulation setup: 6 stations, shift calendar, worker pool with broker, experiment manager, bottleneck analyser, chart. <strong>Output: 52,640 units over 365 days — above the 50,000 target.</strong></p>

<div class="placeholder">📸 [Screenshot of the completed simulation — the 52,640 figure visible at the output station, plus bottleneck analyser results and experiment manager chart]</div>

<p><em>[Optimisation notes — which station was the bottleneck? What percentage of time was it active vs blocked vs idle? What configurations did you test — number of workers, shift patterns, parallel stations? What was the minimum resource configuration that still hit 50,000?]</em></p>

<p>The simulation assumes constant process times. In practice the FESTO line will have variability at each station. Adding stochastic process times — distributions rather than fixed values — would give a more realistic output range. <em>[If you tested this, note what happened to the output and whether 50,000 was still reliably achievable.]</em></p>

<h3>Final Print / Final FESTO Run</h3>
<p><em>[Final casing — print settings, key measured dimensions vs drawing, how it performed on the FESTO line. Did it pass all 6 stations? Any issues at the measuring station specifically?]</em></p>
<div class="placeholder">📸 [Photo of final casing / video of it running through the FESTO line]</div>

<hr>

<h2>Week 8 — Machine Qualification & Process Capability</h2>

<p>Machine Qualification verifies that a machine can produce parts to spec consistently before committing to production. MQ1 is done at the supplier's site, MQ2 after installation. For the Ultimaker in PrintCity this process isn't formally conducted — but the same logic applies when deciding whether to trust the printer for a critical-fit part.</p>

<p><strong>Cp</strong> measures whether the process spread fits within the tolerance band. <strong>Cpk</strong> also accounts for centring — a precise but offset process still produces out-of-tolerance parts. Montgomery (2009) defines a process as capable when Cpk ≥ 1.33, equivalent to roughly 64 defects per million opportunities.<sup>[4]</sup></p>

<ul>
  <li>Cp = (USL − LSL) / (6σ)</li>
  <li>Cpk = min[(USL − x̄), (x̄ − LSL)] / (3σ)</li>
</ul>

<p><em>[If you measured the same dimension across multiple prints — e.g. overall length, snap-fit width — calculate a rough Cp and Cpk for the Ultimaker on this geometry. Note the mean, standard deviation, and tolerance limits from the drawing. Was the printer capable? Was it centred?]</em></p>

<div class="placeholder">📸 [Table of dimension measurements across your print iterations]</div>

<p>This connects directly to the Phones-R-Us supplier variability problem. Different suppliers printing to the same drawing will have different Cp and Cpk values — parts from some may be interchangeable with the master casing while others aren't, even if all are nominally "to drawing". Without measuring capability you can't know which situation you're in until something jams on the assembly line.</p>

<p class="ref">[4] Montgomery, D.C. (2009) <em>Introduction to Statistical Quality Control</em>. 6th edn. Hoboken: Wiley.</p>

<hr>

<h2>Week 9 — IoT & Insights Hub</h2>

<p>This week covered Siemens Insights Hub — the IIoT platform connecting the CP Lab to the cloud. Each station has a PLC with sensor outputs. MindConnect is the gateway between the physical hardware and Insights Hub, which stores and visualises the data.</p>

<p>In the workshop a virtual representation of one station was built in three layers:</p>
<ol>
  <li><strong>Aspect Type</strong> — the variables (e.g. FM_start, FM_end, FM_position)</li>
  <li><strong>Asset Type</strong> — the station template built from the aspect</li>
  <li><strong>Asset</strong> — the live instance of that station</li>
</ol>

<p>Variable names must be exact — a typo breaks the data mapping. The station's PLC IP address is added as a data source in MindConnect with a 1-second cycle time and the datapoints mapped across.</p>

<div class="placeholder">📸 [Screenshot of your Insights Hub asset / datapoints coming in from the station]</div>

<p>IIoT data closes the loop that simulation opens. The Tecnomatix model predicts how the line should perform — Insights Hub shows how it actually performs. If cycle times from IoT data differ from the simulation inputs, the model needs updating, and that gap is itself useful information about process variability.</p>

<p>Xu et al. (2018) describe this feedback loop — simulation to physical, physical data back to simulation — as a key characteristic of true cyber-physical systems, and what distinguishes Industry 4.0 from earlier digitisation efforts.<sup>[5]</sup></p>

<p class="ref">[5] Xu, L.D., Xu, E.L. and Li, L. (2018) 'Industry 4.0: state of the art and future trends', <em>International Journal of Production Research</em>, 56(8), pp. 2941–2962.</p>

<hr>

<h2>Final Reflections</h2>

<p><strong>On the manufacturing process:</strong> <em>[Summarise the print iteration journey — how many iterations, what was the main thing that improved dimensional accuracy, what would you do differently starting from iteration 1?]</em></p>

<p><strong>On supplier variability:</strong> The core challenge in the Phones-R-Us scenario isn't printing a single good casing — it's producing casings consistently enough that they're interchangeable with master parts regardless of which printer or operator produced them. The Cp/Cpk analysis from week 8 shows how that consistency is measured. Without a capable process, batch-matching by supplier becomes unavoidable, which is exactly what Phones-R-Us is trying to avoid.</p>

<p><strong>On the plant simulation:</strong> The simulation output of 52,640 units per year demonstrates the 50,000 target is achievable with the current line configuration. That figure assumes fixed process times — a stochastic model would give a range rather than a single number. <em>[Note whether you tested this and what the output range was.]</em></p>

<p><strong>On sustainability and lifecycle:</strong> FDM generates material waste through supports, failed prints, and end-of-life parts that are difficult to recycle due to mixed polymer compositions. Compared to injection moulding at scale, FDM has a higher energy cost per part but removes tooling investment entirely — which makes sense for the small batch sizes Phones-R-Us operates at. Mani et al. (2014) note that additive manufacturing reduces material waste by 40–90% compared to subtractive methods when part complexity is high, though this advantage diminishes for simple geometries.<sup>[6]</sup> For a phone casing the sustainability case depends heavily on batch size and print efficiency.</p>

<p><strong>On digital manufacturing broadly:</strong> The tools across this module — simulation, IoT, digital twins, PFMEA — are individually useful. What makes them valuable at an Industry 4.0 level is the connection between them: real station timings feeding the simulation, IoT data validating the simulation output, PFMEA informing which process parameters to control most tightly. <em>[Add your own opinion here — which tool did you find most useful, and what would you want to explore further?]</em></p>

<div class="placeholder">📸 [Final photo of your submitted casing / video from FESTO runs — the brief specifically mentions videos as evidence of outstanding quality]</div>

<p class="ref">[6] Mani, M. et al. (2014) 'Sustainability characterisation for additive manufacturing', <em>Journal of Research of the National Institute of Standards and Technology</em>, 119, pp. 419–428.</p>

<hr>

<h2>References</h2>

<div class="refs-section">
  <p>[1] Oesterreich, T.D. and Teuteberg, F. (2016) 'Understanding the implications of digitisation and automation in the context of Industry 4.0', <em>Computers in Industry</em>, 83, pp. 121–139.</p>
  <p>[2] Liu, R. et al. (2019) 'A review of FMEA and its application to additive manufacturing', <em>Engineering Failure Analysis</em>, 105, pp. 1–23.</p>
  <p>[3] Mourtzis, D., Doukas, M. and Bernidaki, D. (2014) 'Simulation in manufacturing: review and challenges', <em>Procedia CIRP</em>, 25, pp. 213–229.</p>
  <p>[4] Montgomery, D.C. (2009) <em>Introduction to Statistical Quality Control</em>. 6th edn. Hoboken: Wiley.</p>
  <p>[5] Xu, L.D., Xu, E.L. and Li, L. (2018) 'Industry 4.0: state of the art and future trends', <em>International Journal of Production Research</em>, 56(8), pp. 2941–2962.</p>
  <p>[6] Mani, M. et al. (2014) 'Sustainability characterisation for additive manufacturing', <em>Journal of Research of the National Institute of Standards and Technology</em>, 119, pp. 419–428.</p>
  <p style="margin-top:1rem; color:#999; font-size:0.8rem;"><em>Add further peer-reviewed sources as you reference them. Google Scholar, IEEE Xplore, and ScienceDirect are good starting points. Aim for at least 6–8 sources across the blog.</em></p>
</div>

</body>
</html>
