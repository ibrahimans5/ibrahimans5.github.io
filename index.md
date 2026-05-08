# Digital Manufacturing Blog
### 6E7V0013 | MSc Digital Design and Manufacturing | Manchester Met

---

## Week 1 — Introduction to Digital Manufacturing & Setting Up the Blog

This week marked the beginning of the Digital Manufacturing module. The introductory lecture gave a broad overview of Industry 4.0 (I4.0) and how digital technologies are transforming modern manufacturing. Key concepts introduced included vertical and horizontal integration, the role of digital twins, and how additive manufacturing fits into the modern factory.

The scenario for the module was introduced — acting as a manufacturer of plastic phone casings for a fictional company "Phones-R-Us", tasked with producing 50,000 modular mobile phone cases per annum using additive manufacturing processes.

This week I also set up this blog using GitHub Pages as my platform of choice. I chose GitHub Pages because it gives me full control over the design and content, and it's a skill that's directly transferable to industry where version-controlled documentation is increasingly common.

**Key takeaway:** Digital manufacturing isn't just about the machines — it's about connecting data, people, and processes. The I4.0 framework showed me how a seemingly simple product like a phone case sits within a complex digital ecosystem.

---

## Week 2 — First Look at the FESTO CP Lab & Introduction to Plant Simulation

This week we had our first timetabled session in the lab where we were introduced to the FESTO CP Lab — a scaled industrial assembly line that replicates a real phone assembly process. The lab consists of 6 stations:

1. Front Magazine
2. Press
3. Heating Oven
4. Measuring
5. Pick by Light
6. Output

What immediately struck me was how automated and streamlined the process was. Each station performs a specific operation and passes the part along the conveyor — very much mirroring a real production line. The ease of use surprised me; despite the complexity of the system, the interface was intuitive and the machine ran smoothly.

We also had an introduction to **Tecnomatix Plant Simulation** by Siemens — the software we'll use to create a virtual model of this assembly line. The aim is to simulate the production process and calculate whether 50,000 phones per year is achievable.

**Key takeaway:** Seeing the physical assembly line first before modelling it digitally gave me a much better understanding of what each station actually does — something that would have been hard to grasp from a diagram alone.

---

## Week 3 — 3D Printing the Phone Cases: Process Selection & First Prints

This week we began the additive manufacturing phase of the assignment. I was tasked with producing both the top and bottom phone casings using the **Bambu Labs P1S** FDM printer, printing in **PLA** filament.

The bottom casing was produced from engineering drawings provided. The top casing required reverse engineering from the master casing — studying its geometry and recreating it digitally before printing.

**Initial prints** revealed an issue: the support structures were leaving a rough surface finish on the critical inner surfaces of the casing where the two halves mate together. This was causing fit issues when tested against the master casing.

**Solution:** I introduced a **PETG support interface layer** — a thin layer of PETG between the PLA part and the PLA supports. Because PLA and PETG don't bond well, the supports detached cleanly leaving a much smoother surface finish on the final part.

| Print Attempt | Material | Support Interface | Surface Quality | Fit Result |
|---|---|---|---|---|
| 1 | PLA | None | Rough | Poor |
| 2 | PLA | PETG interface | Smooth | Good |

**Key takeaway:** Material selection for supports is just as important as material selection for the part itself. The PETG interface layer was a simple but highly effective process improvement.

---

## Week 4 — FESTO Lab Testing: First Prototype on the Assembly Line

This week the first printed prototypes were taken to the FESTO CP Lab for testing on the physical assembly line. The aim was to see whether the cases would flow through all 6 stations without issue.

The measuring station was particularly important — it performs an automated dimensional check on the casing to verify it falls within the specified tolerances:
- **Lower limit:** 1.6mm
- **Upper limit:** 2.2mm
- **My part measured:** 1.9mm ✅

The case passed the measuring station check and flowed through all 6 stations successfully. This was a significant milestone — it confirmed that my 3D printing process was capable of producing parts within the required tolerance.

However, testing multiple casings revealed some variability between prints — a key challenge in additive manufacturing when supplying parts to an assembly line expecting consistency.

**Key takeaway:** Dimensional accuracy is critical in a multi-supplier manufacturing environment. Even small variations between prints can cause assembly issues, highlighting why metrology and process control are so important in digital manufacturing.

---

## Week 5 — FESTO Lab Testing: Process Capability & Variability Analysis

This week focused on understanding the **consistency** of my printing process through further testing on the FESTO line. Multiple casings were printed and tested to understand the process capability.

The results showed that while all parts fell within the 1.6mm–2.2mm tolerance band, there was natural variation between prints. This is a known characteristic of FDM printing — factors such as bed temperature, ambient temperature, and filament moisture content can all introduce variability.

This led me to consider the concept of **Process Capability (Cp/Cpk)** — a statistical measure of how well a process meets its specification limits. A Cp value above 1.33 is generally considered capable in industry.

The FESTO measuring station's automated checking demonstrated exactly why digital measurement systems are superior to manual inspection — they provide consistent, unbiased data on every single part rather than sampling.

**Key takeaway:** Understanding process variability is crucial when supplying parts to an assembly line. A single good part is not enough — the process needs to be consistently capable of producing parts within tolerance every time.

---

## Week 6 — FESTO Lab Testing: Final Validation & Process Selection

This week marked the final round of testing on the FESTO CP Lab. Based on the previous weeks' results, the Bambu Labs P1S printing in PLA with PETG support interface was confirmed as my selected manufacturing process.

The final printed cases performed flawlessly on the assembly line — passing through all 6 stations without errors and meeting the dimensional requirements at the measuring station. The cases also fitted seamlessly with the master casings produced by the reference supplier.

Key process parameters confirmed:
- **Print time:** 2 hours 15 minutes (both cases simultaneously on one build plate)
- **Material:** PLA with PETG support interface
- **Dimensional accuracy:** 1.9mm (within 1.6–2.2mm tolerance) ✅
- **Surface finish:** Acceptable for assembly line use ✅

**Key takeaway:** The iterative testing approach — print, test, refine — mirrors real-world manufacturing validation processes such as PPAP (Production Part Approval Process). Each test provided data that informed the next iteration.

---

## Week 7 — Plant Simulation: Building the CP Lab Digital Model

This week I began building the digital twin of the FESTO CP Lab in **Tecnomatix Plant Simulation**. Starting from a blank canvas, I modelled all 6 stations in their correct U-shaped layout, connected by conveyors, with a Source feeding parts in and a Drain collecting finished assemblies.

Real process times measured from the physical CP Lab were entered for each station:

| Station | Process Time |
|---|---|
| Front Magazine | 9 seconds |
| Press | 11 seconds |
| Measuring | 12 seconds |
| Pick by Light | 22 seconds |
| Oven | 29 seconds |
| Output | 9 seconds |

Running the simulation for 1 week (40 hours) produced **960 parts** — equivalent to **49,920 parts per year**. The bottleneck analysis clearly identified the **Oven Station** as the limiting factor, being blocked 80.6% of the time.

A **worker** was also added to the Pick by Light station — the only station requiring manual operation — using the WorkerPool, Broker and Workplace objects.

**Key takeaway:** The bottleneck analysis is a powerful tool — it immediately identified where to focus improvement efforts rather than trying to optimise every station equally.

---

## Week 8 — Plant Simulation: Adding the 3D Printer & Optimisation

This week I extended the Plant Simulation model to include the **3D printing process** as a parallel manufacturing station feeding the assembly line — making it a true end-to-end digital model of my manufacturing process.

The Bambu Labs P1S was modelled as a **parallel processing station (AMMachine)** with a processing time of **2 hours 15 minutes** per build plate (producing both top and bottom cases simultaneously).

Using the **Experiment Manager**, I tested different numbers of printers to find the minimum required to meet the 50,000/year target:

| Number of Printers | Parts/Week | Parts/Year |
|---|---|---|
| 16 (2×8) | 272 | ~14,144 |
| 32 (4×8) | 512 | ~26,624 |
| 48 (6×8) | 720 | ~37,440 |
| 64 (8×8) | 960 | ~49,920 |
| 80 (10×8) | 1,120 | ~58,240 |

Running the simulation for a full **365 days** confirmed **52,640 cases per annum** with 80 printers — exceeding the 50,000 target by 5%, providing a buffer for unplanned downtime and quality rejects.

A **PickAndPlace robot** was also added between the Output station and Drain to replicate the physical transfer mechanism seen in the FESTO lab.

**Key takeaway:** The Experiment Manager is an incredibly powerful optimisation tool — it automatically runs multiple scenarios and identifies the optimal configuration, something that would take days to do manually in a real factory.

---

## Week 9 — IoT & Insights Hub: Connecting the Physical to the Digital

This week focused on the IoT connectivity layer — how the physical FESTO CP Lab sensors connect to the cloud via **Siemens Insights Hub** (formerly MindSphere).

The process involved three steps:
1. **Virtual Representation** — creating Asset Types and Aspect Types in Insights Hub to represent each physical station
2. **Physical Representation** — connecting to the CP Lab PLCs via their IP addresses (172.21.x.1) using the MindConnect gateway
3. **Data Mapping** — linking physical sensor datapoints (FM_start, FM_end, FM_position) to virtual variables

Each station has Boolean sensor variables that record when a part arrives and departs — from which processing time can be calculated. This data is streamed to the cloud at 1-second intervals via the S7 protocol.

**Key takeaway:** The IoT gateway architecture — where one physical gateway streams data from multiple PLCs to the cloud — is a scalable approach to factory connectivity. The data cycle time (1 second) is a deliberate engineering choice balancing data resolution against bandwidth.

---

## Week 10 — Digital Twin: Closing the Loop with Factory Twin

This week we attempted to close the loop between the physical FESTO CP Lab and the Plant Simulation model using **Factory Twin** in Insights Hub — creating a true digital twin where real sensor data drives the simulation.

The process involved generating a MindSphere Mapping File from Plant Simulation, uploading it to Factory Twin, creating recipes to calculate processing times from sensor timestamps, and feeding the results back into Plant Simulation via an access token.

It is worth noting that **Siemens has since discontinued the Factory Twin application** — as explicitly acknowledged in the module's assessment support materials. This meant the full closed-loop digital twin could not be completed as originally planned. However, the process demonstrated the principle: real-world data can be used to continuously update and validate a simulation model, making it a true digital twin rather than a static model.

The manually entered process times used in my simulation were validated against the real CP Lab data (04/03/2024, 12:00–14:00) confirming they were representative of actual machine performance.

**Key takeaway:** A digital twin is only as good as its data connection. The discontinuation of Factory Twin highlights a real challenge in industry — platform dependency. When a vendor discontinues a tool, companies that have built processes around it face significant disruption.

---

## Week 11 — Final Reflections: Lessons Learnt

This final post captures the key lessons from the entire module.

### What Worked Well
- The **PETG support interface** was a simple but highly effective process improvement that solved the surface finish issue
- The **Bambu Labs P1S** proved to be a reliable and accurate printer — all final parts passed the FESTO measuring station checks
- **Plant Simulation** was an incredibly powerful tool — the ability to model, test, and optimise a manufacturing line digitally before committing to physical resources is genuinely transformative

### Challenges
- **Supplier variability** — even printing identical files on the same machine produced slight dimensional variation between prints. This is a fundamental challenge in additive manufacturing and highlights why process capability analysis is so important
- **Multiple supplier consistency** — the module scenario of multiple suppliers producing to the same drawing is a real industry challenge. Our class produced cases on different printers and the variation between suppliers was noticeably greater than within a single supplier's process
- **Scale limitations of additive manufacturing** — the calculation showing 80 printers are needed to produce 50,000 cases/year highlights that FDM printing is not inherently scalable for high-volume production. At this scale, injection moulding would likely be more cost-effective — an important consideration for any manufacturer evaluating digital manufacturing technologies

### The Benefit of Plant Simulation
The ability to model the entire factory virtually — testing different scenarios, shift patterns, and equipment configurations — before investing in physical resources is enormously valuable. The bottleneck analysis alone could save a manufacturer significant capital expenditure by identifying where investment will have the most impact.

### Final Thoughts
This module gave me a genuine appreciation for the complexity behind what appears to be a simple product. A phone case involves drawing interpretation, additive manufacturing process selection, quality metrology, IoT connectivity, digital simulation, and supply chain management — all before a single unit reaches the customer. Industry 4.0 technologies like digital twins and plant simulation are not just buzzwords — they are practical tools that genuinely improve manufacturing outcomes.

---

*Blog produced as part of 6E7V0013 Digital Manufacturing, Manchester Metropolitan University, 2025-26*
