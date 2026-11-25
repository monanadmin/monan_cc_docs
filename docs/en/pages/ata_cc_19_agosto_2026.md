!!! warning "AI-Translated Page"

    This page was translated using artificial intelligence (AI). The content may contain inaccuracies or misinterpretations. For critical or official use, please consult the site [administrator](mailto:mcstu.inpe@gmail.com) to confirm the information.

# August 19, 2026

## MINUTES 001/2026 - Revision 000

![type:video](https://youtube.com/embed/6SxmaQGU1cg?si=u0uYd3b4u86epCDI)

Meeting of the Scientific Committee of the Community Earth System Prediction Model (MONAN). On August 19, 2026, at 14:00, the Scientific Committee of the Community Earth System Prediction Model (MONAN) held its regular meeting remotely, with researchers and representatives from the National Institute for Space Research (INPE), the National Laboratory for Scientific Computing (LNCC), the University of São Paulo (USP), the National Institute of Meteorology (INMET), as well as international representatives from Colombia, Cuba, El Salvador and the World Meteorological Organization (WMO). These minutes record the proceedings of the meeting and bring together the information presented during the discussions, with the overall objective of assessing technical progress on the model's atmospheric, oceanic and data assimilation components.

**The opening proceedings were led by Dr. Saulo Ribeiro de Freitas, from the National Institute for Space Research, and Professor Dr. Pedro Leite da Silva Dias, from the Institute of Astronomy, Geophysics and Atmospheric Sciences at the University of São Paulo, who welcomed participants and presented the meeting agenda, highlighting the extensive technical topics to be covered. Dr. Saulo Freitas introduced the new committee members, highlighting the arrival of Lieutenant Colonel and Meteorology Specialist Mário Paulo Alves Júnior (ICEA/DECEA); Dr. Daniel Hernández Deckers, Assistant Professor in the Department of Geosciences at the Faculty of Sciences of the National University of Colombia (UNAL); Dr. Maibys Sierra Lorenzo, representing the Institute of Meteorology of Cuba (INSMET); Professor Dr. Jaci Maria Bilhalva Saraiva, from the Atmosphere–Ocean Interaction Laboratory (FURG); Dr. Janice Trotte Duhá, Director of the National Institute for Ocean Research (INPO); and William Abarca, attending as an observer with a view to formalizing his future membership, representing El Salvador (MARN).

## Agenda 1 - New Members of the MONAN Scientific Committee and General News

Saulo Freitas and Pedro Dias introduced the new members nominated to join the MONAN Scientific Committee:

1. **Lieutenant Colonel and Meteorology Specialist Mário Paulo Alves Júnior** (ICEA/DECEA), nominated by the Department of Airspace Control to replace Colonel and Meteorology Specialist José Hélio Abreu Nogueira, representing the national air forces.
2. **Dr. Daniel Hernández Deckers** (Assistant Professor in the Department of Geosciences at the Faculty of Sciences of the National University of Colombia), representing Colombian academia.
3. **Dr. Maibys Sierra Lorenzo** (Researcher at INSMET, Cuba), representing the Institute of Meteorology of Cuba. Saulo reported that a work plan had been prepared to apply the Cuban group's expertise in tropical cyclones to evaluating MONAN.
4. **Professor Dr. Jaci Maria Bilhalva Saraiva** (Atmosphere–Ocean Interaction Laboratory - FURG), as a collaborator.
5. **Dr. Janice Trotte Duhá** (Director of the National Institute for Ocean Research - INPO), invited to join the Scientific Committee. Ronald Buss emphasized the importance of INPO (a Social Organization partnering with INPE) in recruiting personnel and securing extrabudgetary funding. Janice was initially represented by Fernando Monteiro (Director of Infrastructure) and Lidiane Lima (Research and Innovation Directorate), joining the meeting herself later.
6. **William Abarca** (MARN, El Salvador), attending as an observer with a view to formalizing his future membership.

### General News

* **MONAN 10 km Global:** In experimental operation (pre-operational phase) on INPE's Jaci supercomputer since January 1, 2026, with stable simulations and good forecast skill (Version 1.4.5, production release);
* **MONAN 5 km Regional (LA-CAR):** Covering Latin America and the Caribbean, developed and implemented in pre-operational mode on Jaci since July 1, 2026, with runs four times a day. Once stability and reasonable skill are confirmed, INPE's Operations Division will be notified to consider making it operational.
* **Version 2.0:** Development has begun. It will include innovations from NCAR and in-house developments:
    * NCAR: New gravity wave drag parameterization, NOAH-MP (Noah Multi-Parameterization land surface model), an interface with JEDI (Joint Effort for Data assimilation Integration), and the MPAS dynamical core ported to GPUs (allowing the code to run on CPUs or GPUs).
    * In-house developments: A new turbulence option with mass flux (SHOCMF, by G. Farache, PGMET/INPE) aimed at unifying turbulence, shallow convection and stratocumulus; a new PAMPA PBL turbulence parameterization (by Rafael Maronesi, Unipampa); a turbulence parameterization based on Taylor's theory (by Eduardo Eras and Haroldo de Campos Velho); a global soil color map for albedo and flexible soil layers in NOAH-MP (developed by DIMNT's land surface group).
* **Training and Events:** Arrangements for the first atmospheric numerical modeling course (CAPES) at INPE in Cachoeira Paulista, scheduled for October 19–30, 2026. Arrangements for the third MONAN training course, led by Professor Enio Souza (UFCG) with support from Funceme, scheduled for April 2027.
* **Website:** Being developed for data and statistical evaluation.
* **Medium-Term Developments:** MONAN with aerosols (MONAN-GOCARTG2, a collaboration among NCAR, INPE and UFSJ); MONAN-CHEM with chemical reactivity ported from BRAMS; porting of the GEDAI data assimilation system (led by João Gerd Zell de Mattos); coupling MONAN with WaveWatch for wave forecasting (results already well advanced with forecasts forced by MONAN).

## Agenda 2 - Status of the MONAN Execution Portal at LNCC

Roberto Souto opened the presentations, reporting that Kleucio Claudio and Rafael Magalhães are leading technical development, with important support from INPE's GCC group (Redado Câmara, João Messias). Kleucio Claudio presented the technical progress and gave a practical demonstration of the portal:

* The portal involves the development of a web interface for running MONAN in an HPC environment. It currently runs on a local four-node Xeon test cluster and is being migrated to Santos Dumont at LNCC.
* Developed in Python (Flask, Gunicorn) with an Nginx web server and Slurm integration.
* **Dynamic Diagnostics:** A fix to the diagnostic variable level selection option. The level field becomes active or inactive dynamically according to the selected variable (e.g., 2 m temperature disables the level field), aligning the interface with the CDCT script's *stream list*.
* **Layout and Standardization:** Comprehensive visual layout adjustments with overlapping panels using transparency on the results page. Full standardization of headers and footers throughout the portal.
* **Monitoring:** Added simulation status display (submitted, started, completed), real-time CDCT script logs, and direct viewing of generated plots (the example shown was 2 m temperature on a 120 km grid for a 3-hour simulation).
* **Database:** Implementation of storage for all simulations and their outputs in a structured database for historical retrieval.
* **Security:** The front end for the login, registration and password validation screens has been designed, but the Python back end and the final database connection for authentication are not yet operational. Security requirements will be adapted to LNCC's requirements in the future.

### Discussion

Pedro Dias emphasized the importance of integrating ready-to-use diagnostics (momentum, heat and vorticity budgets, etc.) directly into the portal to facilitate direct analysis by researchers and students. Saulo agreed with creating a diagnostics library. Saulo and Roberto discussed the importance of ensuring the portal's long-term sustainability and funding, with a permanent team focused on maintenance and technical development.

## Agenda 3 - Evaluation of MONAN 10 km Global and 5 km Regional

Saulo Freitas presented the report prepared by DIMNT/ATM (André Lyra, Eduardo Eras, Guilherme Mendonça, Lianet Hernandez, Madeleine Sanchez Gacita, Paulo Kubota and Saulo Freitas). The evaluation covers July 2025 to June 2026.

### MONAN 10 km Global (Version 1.4.5)

* Deterministic runs initialized at 00 and 12 UTC, producing 11-day forecasts. Initial conditions from GFS-FV3 analyses (including soil). SST held constant during integration.
* 10 km resolution (6 million computational cells), a 60 s time step, radiation every 30 min, convection every 15 min. Monotonic transport for hydrometeors.
* Output on a regular 0.1° latitude–longitude grid with 18 vertical levels, every 3 hours, containing 27 variables.
* In Version 2.0, the number of vertical levels will increase from 55 to 84 (refining the planetary boundary layer and the troposphere–stratosphere transition), and the model top will rise from 35 km to 50 km (Professor Bonatti's proposal), increasing computational cost by 60%, but necessary for improved vertical characterization.
* Superlinear scaling demonstrated by the computing group up to 32 nodes (256 cores per node) on Jaci. This allows 24 hours to be simulated in 10 minutes, and 11 days in less than 2 hours.
* **Hurricane Melissa (2025):** Stable 3-day forecast simulations at resolutions ranging from 120 km to 3 km. The 30 km, 10 km and 3 km resolutions converged to tracks very similar to the NHC ensemble, demonstrating the model's stability and physical and dynamical quality. This was the first time CPTEC ran a global model at 3 km spatial resolution.
* **Precipitation Morphology:** Comparison of the March 1, 2026 case (heavy precipitation in northeastern Brazil) against GPM-IMERG and GFS-FV3 showed MONAN capturing the rainfall gradients and the phenomenon's spatial structure perfectly.
* **SACZ (February 10, 2026):** Comparison of MONAN with the BAM model in forecasts up to 10 days ahead. At a 10-day lead time, BAM lost the signal completely, while MONAN retained the South Atlantic Convergence Zone (SACZ) and predicted severe rainfall. The same occurred for Typhoon Dolphine and heavy rainfall in southern Brazil, where MONAN retained the typhoon's structure 7 days ahead, while BAM lost it at 5 days.
* **Quantitative Metrics (Summer 2026 - DJF):**
    * Mean rainfall bias (BIAS) against GPM and MSWEP satellite products is less pronounced in MONAN than in BAM and GFS (lighter shades of blue/red, especially in the Amazon). At 120 h, BAM develops a very strong bias in the Amazon, which MONAN mitigates satisfactorily. ERA-5's bias is also similar, showing that the model is at the forefront of scientific knowledge.
    * MONAN's ETS, POD and false alarm metrics compared with GFS show that MONAN is superior or similar at almost all rainfall thresholds from 1 to 50 mm across all forecast lead times, representing a historic milestone for CPTEC.
    * **Fractions Skill Score (FSS):** Demonstrates a larger area of successful forecasts and greater accuracy for MONAN than BAM and GFS at more severe thresholds (such as 50 mm).
    * **Independent Evaluation (Professor Demerval Moreira - UNESP):** using 970 stations (METAR, SYNOP, INMET data collection platforms):
        * 2 m temperature: MONAN and GFS errors are similar and lower than BAM's.
        * Dew point: MONAN outperforms GFS and BAM (lower error).
        * 10 m wind: MONAN showed greater error (poorer skill) than GFS and BAM, indicating a need to adjust the surface representation.
        * Precipitation: Rain gauges show MONAN with higher ETS, higher probability of detection and bias close to the ideal value (1), capturing many more severe events of 25.4 mm/6 h and 50.4 mm/6 h, while the other models substantially underestimated detection.

### Discussion of Systematic Error (Bias) over the Andes

Enver Ramirez questioned the presence of excessive precipitation bias over the Andean region. Daniel Vila explained that the reference satellite estimate (GPM-IMERG) has severe limitations over complex terrain and snow, suggesting that the observational reference itself may be incorrect. Pedro Peixoto and Saulo emphasized that straightforward tests could be performed by refining the variable mesh's horizontal resolution over the Andes, but changing the vertical coordinate in the code (such as Mesinger's eta coordinate in ETA) would be structurally very complex and difficult in MPAS.

## Agenda 4 - Selection of MONAN's Ocean and Cryosphere Components

Ronald Buss presented the technical progress of the INPE team (13 members, including Emanuel Giarola, Rosio Camayo, Fernanda Casagrande, Luciano Pezzi, Helena Soares, Regiane Moura, Priscila Farias, Vinicio Santos, Breno Tramontini, Vitor Pereira, Mariana Gandra and Leticia Stachelski) in partnership with COPPE/UFRJ (Professor Afonso Paiva, Mariela Gabioux, Efraime Daniel, Ana Carine Resende, Aron Nunes, Fernando Dix Barberini).

### MOM6 vs. HYCOM Intercomparison

* **Methodology:** A long, 21-year global climatological run (2004 to 2024), 1/4° resolution (~25 km at the Equator), ERA-5 forcing, daily GLORYS initial conditions, on the Jaci supercomputer.
* Vertical grid with 41 hybrid layers, with enhanced detail in the upper ocean.
* MOM6's bathymetry was refined using the **GEBCO 2023** database (15 arcseconds, resolving problems in the representation of the Brazilian coastline and the position of the Brazil Current's main axis, which had errors in BESM's previous coordinate system based on ETOPO1). HYCOM used the NAVO database.
* MOM6's sea ice used the **SIS2** model coupled through FMS, while HYCOM used the *Energy Loan Ice Model*.
* The simulations reached equilibrium from the second year (2005), according to mean kinetic energy and mean potential temperature metrics. The main water masses (Antarctic Intermediate Water, North Atlantic Deep Water, Antarctic Bottom Water) were very well represented in TS diagrams against WOA23 climatology.
* HYCOM (REMO's Mconf) underestimates seasonal sea ice extent in both the Northern and Southern Hemispheres compared with MOM6 and satellite data.
* Both models represented cumulative mass transport well along the Brazil Current down to 500 m depth, as well as the Brazilian Coastal Current (essential for sardine ecology and fisheries in southern and southeastern Brazil).

### Consensus on Model Selection

The group recommended adopting **MOM6 + SIS2**. Reasons: more up-to-date physics and numerical methods, a larger international developer community, and INPE's previous experience with BESM. Operational simulations with MOM6 will also be adopted in the United States in the coming years (according to Gustavo Marques). Professor Afonso Paiva highlighted the young team's work and noted that both models delivered excellent and equivalent results. He suggested continuing the intercomparisons even after MOM6 is adopted, to support personnel training.

### INPO Participation and Technological Procurement

Dr. Janice Trotte-Duhá (INPO Director) described work on restructuring the National Oceanographic Data Bank (BNDO) and implementing a national data interoperability layer for ocean modeling, overcoming data silos. INPO, in cooperation with Mercator International (South Atlantic Ocean digital twin), INPE and other marine institutions within CIRME (Sectoral Plan for Marine Resources), proposed a **Technological Procurement initiative under FNDCT/MCTI's 'SOS Clima Brasil' program**. The proposal has three pillars: restructuring BNDO, data interoperability, and a focus on ocean modeling needs. Janice requested that the proposal be finalized by the end of the week and that MONAN be explicitly and specifically named for joint work.

## Agenda 5 - Ocean–Atmosphere Coupling Project

Paulo Yoshio Kubota presented progress by GTA-DIMNT (Emanuel Giarola, Rosio Camayo, Eduardo Khamis, Daniel Massaru, Carlos Renato, João Messias). The objective is to couple MONAN-A 2.0 (Voronoi mesh ~120 km) with the MOM6+SIS2 model (1° tripolar grid).

### Computational and Implementation Aspects

* Uses the **NUOPC / ESMF 8.9.1** framework on the Jaci supercomputer, with the explicit **CMEPS** mediator (with NCAR COARE 3.0 bulk formulas). Choosing an explicit mediator was a crucial design decision to make interpolation and Voronoi–LatLon regridding visible and auditable.
* The mediator manages execution, time stepping, initialization and finalization of both models, controlling the exchange of 14 fields. The prototype already runs sequentially or concurrently with up to 7,680 cores. Parameters are configured through XML (without recompilation).
* The execution order was recently changed to run the ocean first.

### Challenges and Fixes (Debugging Process)

1. *Incorrect Ocean Grid in the Mediator*: Fixed by changing the dimensions from 1440x720 to the actual MOM6 tripolar dimensions (180x155) and using T-cell coordinates directly from the FRE-NCtools supergrid, eliminating the seam in the Indian Ocean.
2. *SST/Skintemp Injection*: Fixed a scalar index bug (the `iCell` term was missing in the loop), resolved cold-start freezing at step 1 by suspending injections before MOM6 advances, and added latitude-dependent fallback SST (298 K to 271.35 K) and a NaN guard in `mpas_import`.
3. *SST Extrapolation in the Mediator*: ESMF's default system (`zeroregion` and `srcMaskValues`) accumulated stale values. It was replaced by an explicit bilinear + nearest-neighbor (NN) merge ported from `coupling_0.0.3` (buffers zeroed before each regrid, NN for gaps, SST_BULK_FALLBACK=290K safety floor, and 50/50 smoothing).
4. *Coastal Mask Artifacts*: Fixed by adding MOM6's actual mask (`So_omask`) to the mediator's `importState` (synchronized with `GRIDITEM_MASK`).
5. *MPAS Voronoi Mesh in the Mediator*: Because NUOPC connectors (IPDv3) do not propagate `ESMF_Mesh` geometry (fields arrive as rank-2 Grids), the mediator now loads the `mpas_mesh.nc` mesh directly through `ESMF_MeshCreate`.
6. *Dynamic ATM Grid + Halo Cells*: Fixed the out-of-bounds access error (`out-of-bounds`). The mediator's ATM grid now follows the active model (360x180 with MPAS, 640x320 with DATM/JRA55); loops were corrected to use `nCells` as the loop limit instead of `size(atm_bnd%sst)` because of halo cells.
7. *Ocean Roughness (`Sf_zorl`)*: There was an intractable index-space mismatch between MOM6's data-domain and compute-domain (`forces%ustar` vs. `Ocean_sfc%ustar`). The calculation was reverted and retained with a stable 0.01 m fallback until an internal MOM6 solution is implemented.

### Lessons Learned and Open Issues

* Mass and energy conservation during interpolation need improvement (non-conservative methods are currently used). The main difficulty is implementing first-order conservative interpolation for heat, mass and momentum.
* Remaining issues involve *Si_ifrac* (sea ice fraction with interpolation edge artifacts in *state_get_field_1d*), *So_s*, *So_u*, *So_v* pending in the MPAS cap, and reconciliation of *Sa_lfrac_mpas* in the mediator.
* Next steps include testing NCAR/Boulder's **MPAS-ESM** (which uses ESMF+NUOPC+CMEPS, an approach identical to INPE's) as a reference, assessing whether NCAR's MPAS cap can be reused, and porting items from `coupling_0.0.3`.
* Pedro Dias and Saulo strongly praised Paulo Kubota's group for their speed and, especially, for keeping the original MPAS and MOM6 code unchanged, avoiding a maintenance nightmare.

## Agenda 6 - Pre-Operational Activities for the MONAN-AI Version

Haroldo de Campos Velho presented the proposal to develop and operate an artificial intelligence weather and climate forecasting model (**MONAN-AI**), following ECMWF's advances (the AIFS system has been running operationally since February 2025, outperforming physics-based models at longer lead times).

### Technical Aspects

* Uses 3D and 2D spherical grid mapping called **HEALPix Grids** and a convolutional generative diffusion neural network (based on *flow matching*).
* Time scales: Subseasonal (S2S) forecasting from 7 to 15 days and monthly climate forecasting.
* Initial low-resolution results (~100 km), aiming to reach 5 km, showed reasonable performance (up to 50% accuracy) in simulating the Madden–Julian Oscillation for up to 10–12 days, also capturing the SACZ.
* Code developed in Python, running on A100 and H100 GPUs, with a need to migrate to the B200 architecture.

### Discussion

* Pedro Dias argued that caution is needed when evaluating AI models, suggesting comparing them not only with purely physical models, but also with very simple and inexpensive traditional statistical post-processing baselines, to determine whether the actual skill gain justifies the cost. Haroldo and Luiz Flávio argued that AI is much cheaper computationally and offers excellent run times.
* Afonso Paiva reported that COPPE is also using AI (including diffusion models) to improve ocean forecasts, expressing strong interest in collaborating. He agreed that AI and physical models go hand in hand (AI being trained on reanalysis or guided by physical constraints - PINN - Physics-Informed Neural Networks).
* Luiz Flávio proposed focusing AI on replacing extremely expensive physical parameterizations in traditional numerical models, such as radiation (which takes substantial time and has not yet been ported to GPUs) or chemical processes. This would drastically reduce run times, enabling much finer horizontal resolutions.
* Haroldo stressed the need for a formal Scientific Committee decision to use AI in MONAN in order to structure tasks, a schedule and a team, noting that MCTI's TR-11 call is an excellent opportunity to secure funding for this AI area, alongside TR-12 (climate).
* Saulo suggested, and the committee approved, the creation of a **MONAN AI Macrogroup**, led by Haroldo de Campos Velho, to organize internal work at INPE and seek external partnerships.
* The committee decided to schedule another meeting in two months (October 2026), with the use of AI in MONAN as the main agenda item, allowing a formal plan to be established.

## Other Matters

* Francisco Quixaba Filho asked Pedro Dias about the INMET–CPTEC agreement (this can be checked in the chat recording from 58'46").
* Haroldo de Campos Velho suggested in the chat using RNP's Conferênciaweb to record meetings.
* Carlos Bastarz suggested standardizing the development environment by using containers.

## Actions for the Next Meeting

1. Send the four presentations (Atmosphere Club, Haroldo, Ronald, Kubota) to Gilson for distribution to all Scientific Committee members (Saulo's suggestion).
2. Create and formalize the MONAN AI Macrogroup led by Haroldo de Campos Velho, organizing internal work and seeking external partnerships (COPPE/UFRJ).
3. Prepare a proposal under TR-11 (Artificial Intelligence) for AI funding for MONAN.
4. Finalize INPE's FINEP/MCTI Technological Procurement proposal (SOS Clima Brasil) with INPO by the end of the week, explicitly naming MONAN.
5. INPE's Operations Division (Enver Ramirez) to assess making the 5 km regional version of MONAN operational.
6. The land surface group to work on verifying 10 m wind speed to reduce the identified systematic errors.
7. Continue comparisons between MOM6 and HYCOM to support development and personnel training, even after MOM6 is selected.
8. Study the use of MONAN output to drive other grids (method defined by Paulo Kubota).
9. Apply robust statistical metrics to surface point scatter comparisons between MOM6 and HYCOM.
10. Improve mass and energy conservation (first-order conservative interpolation) in the coupler and increase ocean and atmosphere resolution.
11. Test NCAR's MPAS-ESM as a coupling reference.
12. Schedule another meeting in two months (October 2026), focusing primarily on Artificial Intelligence in MONAN.

??? example "Attachments"

    * [Recording of the MONAN Scientific Committee Meeting - August 19, 2026](https://youtu.be/6SxmaQGU1cg?si=r11rUiHZ8_7NEFRT)
    * [Saulo Freitas Presentation](https://drive.google.com/file/d/1TiWPKP6Vk5Lx7H1VDbgUMGHgY8W832lq/view?usp=drive_link)
    * [Paulo Kubota Presentation](https://drive.google.com/file/d/1m-kOUVE_uERcUkGBkiyPgiLIkDFMnt4U/view?usp=drive_link)
    * [Haroldo F. de Campos Velho Presentation](https://drive.google.com/file/d/1exiFAlTqvdR7kS9hMT2OJUNtx-6TLqjK/view?usp=drive_link)
    * [Ronald Buss Presentation](https://drive.google.com/file/d/1b3qmYQk2Qc0pmbfMoBkiwwq7m9w2Tr1s/view?usp=drive_link)
