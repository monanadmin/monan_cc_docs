
!!! warning "AI-Translated Page"

      This page was translated using artificial intelligence (AI). The content may contain inaccuracies or misinterpretations. For critical or official use, please consult the site [administrator](mailto:mcstu.inpe@gmail.com) to confirm the information.

      
# December 4, 2024      
      
## MINUTES 002/2024 - Revision 003

![type:video](https://youtube.com/embed/fuaIPofBWuQ)

## Agenda 1 – Presentation on the Use of Cloud Computing for Weather Forecast Modeling

The meeting began with a presentation by Professor Lúcia M. A. Drummond (UFF) and student Mateus S. de Melo on the use of cloud computing for weather forecast modeling. Professor Lúcia explained that the work stems from Mateus's master's thesis, supervised by her and Roberto P. Souto from LNCC. Roberto thanked Lúcia and Mateus for the presentation, highlighting the work as Mateus's master's project on cloud computing applied to forecast models. Roberto emphasized the growing trend of using the cloud as a platform for high-performance computing (HPC) applications, noting that major supercomputing users, such as Petrobras, already shift applications to the cloud during periods of high demand. He stressed that cloud computing is expensive and that the challenge lies in minimizing costs without compromising execution time.

Mateus explained that the objective of the study was to propose an approach to reduce the financial costs associated with using cloud clusters to run weather forecast models. Two main strategies were developed:

The exclusive use of Spot instances, which are more economical but subject to access revocation; and
An algorithm for selecting virtual machines combined with a rescheduling strategy using On-Demand instances, which are more expensive but not subject to revocation.

The BRAMS model was used for testing. The Santos Dumont supercomputer at LNCC, with a capacity of 5.1 petaflops, served as a benchmark for comparison. In the cloud, the Amazon EC2 service was used to create virtual instances with various configuration families. The AWS ParallelCluster tool was used to create and manage the cloud clusters.

The first strategy, rescheduling on Spot instances, included a procedure that monitored job failures and revocations, configuring BRAMS to restart from checkpoints, thereby ensuring a fault-tolerant environment. BRAMS execution was compared between Santos Dumont and AWS (R5n.12xlarge instances), revealing that although Santos Dumont was initially faster with fewer nodes, the difference decreased as the number of nodes increased. The hourly usage cost was significantly lower for Spot instances (US$1.744) compared to On-Demand instances (US$3.576), with a low cost for writing checkpoints. Simulated revocations showed a considerable increase in execution time and cost, motivating the development of the second strategy.

The second strategy involved an instance selection algorithm to find the best cost-benefit ratio and rescheduling to On-Demand instances in case of Spot instance revocation. A cluster architecture with three queues (Spot, On-Demand, and Controller) was implemented. Head Node architecture analysis suggested that using cheaper instances (e.g., T2.micro) did not significantly impact performance and reduced costs by 20%. For Compute Nodes, ARM-based instances (Graviton) showed lower execution costs compared to x86 CPUs.

Applying these strategies with the BRAMS model resulted in cost reductions of up to 89% in the best test case, combining Spot instances with rescheduling to On-Demand instances. The On-Demand rescheduling strategy was more advantageous when revocations occurred in the middle or toward the end of execution. Identifying and eliminating redundant recreation of radiation files during rescheduling yielded an additional 72–76% cost reduction. Tests with a larger spatial domain (5 km resolution, 48-hour forecast) confirmed nearly 90% cost reduction with potential Spot instance usage. The comparison with Santos Dumont for the larger domain showed slightly longer execution time on the supercomputer and higher queue times on on-premises environments.

The conclusions indicated that migrating applications to the cloud should consider both time and cost. The use of Spot instances and the instance selection algorithm proved effective in reducing costs. ARM instances were more economical, and rescheduling to On-Demand instances was beneficial in cases of revocation. The cloud offered shorter execution and queue times compared to on-premises systems. Future work includes monitoring Spot price variations during execution, reusing radiation files, and investigating performance variability.

Pedro Dias questioned the apparent anomaly in the comparative graph of Santos Dumont vs. Cloud execution time, where Santos Dumont was faster with one node but the cloud became faster with more nodes. Mateus explained that this is a topic for future investigation, possibly related to memory contention. Pedro praised the work, highlighting the importance of cost analysis and the potential for using MONAN in regional forecasts. Lúcia added that CNPq already accepts budget lines for cloud provider payments and that there are CNPq/AWS calls offering cloud credits for research projects. Pedro further noted that FAPESP and other funding agencies encourage the use of cloud services for smaller applications, optimizing the use of large supercomputers.

## Agenda 2 – Welcome to New Members of the MONAN Scientific Committee

Saulo Freitas welcomed new members to the MONAN Scientific Committee:

* Professor Jorge Arevalo from the University of Valparaíso, Chile, who introduced himself and mentioned his research on machine learning for simulating hydrological processes and his interest in collaborating to improve modeling.
* Daniel Poleo from the Meteorological Institute of Costa Rica, who attended the meeting but was unable to introduce himself due to microphone issues.
* Marlos Guimarães, an engineer from Eletrobras, the first stakeholder to join the committee, who was also unable to introduce himself at that moment.

## Agenda 3 – General Updates from MONAN System Components

### Data Assimilation (João Gerd)

João Gerd presented the JEDI (Joint Effort for Data Assimilation Infrastructure) implementations and the plans for MONAN. The goal is to expand data assimilation capacity at CPTEC and transition JEDI to MONAN, prioritizing advances in data assimilation. A collaboration with NCAR enabled coupling JEDI with the current version of MPAS. Advantages of JEDI include support for various assimilation methods, compatibility with global and regional MPAS configurations, and support for additional sensors and satellite data. The transition strategy will occur in phases: 3D-Var-FGAT (starting September), followed by 3D-EnVar and finally Hybrid 3D-EnVar. Challenges include higher computational demand for 3D-EnVar, the need for team training in the JEDI system (which differs from GSI), and the incorporation of new data. The plan aims to validate 3D-Var-FGAT by June 2025 and achieve a full hybrid system by the end of 2026, with expected improvements in sensor integration and error reduction.

Pedro Dias inquired about regional assimilation. João Gerd stated that after focusing on the global system, regional assimilation is a future goal, which would be important to avoid "cold starts" in regional forecasts. Pedro asked about the possibility of accelerating development. João Gerd indicated that the main challenge is the need for more staff dedicated 100% to assimilation efforts. Saulo added that acceleration could come from greater interaction with NOAA and NCAR (through planned exchanges and visits) and from broader community and partner engagement.

### Oceans and Cryosphere (Rosio Camayo)

Rosio Camayo presented efforts toward selecting the Ocean component for MONAN. The group is evaluating candidates such as HYCOM and MOM6. The international community commonly uses HYCOM, MOM6, and NEMO. INPE has experience with coupled models such as BAM and MOM6 with the CICE6 sea ice model. The Brazilian oceanographic community has strong expertise with HYCOM, justifying a partnership with Professor Afonso Paiva. The MPAS-Ocean model was considered but will no longer be supported. MONAN's ocean component should resolve major climate phenomena and patterns, couple with future components (waves, biogeochemical cycles), and provide boundary condition data for regional models. The main challenge lies in choosing the coupler.

The evaluation strategy involves implementing HYCOM and MOM6 in EGEON, configuring global experiments, and assessing physical and computational performance. Preliminary results include successful compilation and execution of HYCOM in EGEON for 2016, showing the spatial pattern of Sea Surface Temperature (SST), except for the South and Eastern Pacific, where deficiencies appeared compared to the 9 km GLORYS dataset. The MOM6 Global implementation in EGEON for 2015 showed deficiencies in the tropical region, requiring balance adjustments to represent maximum temperatures in the tropical Atlantic and Pacific.

Next steps include 20-year runs (2004–2023) with HYCOM and MOM6 forced with MERRA-2 and testing different climatological initial conditions for spinup. Defining physical parameters and evaluating physical, numerical, and computational performance with community collaboration are crucial. Pedro Dias observed that the coastal issue off South America is recurring and may be linked to low-cloud reproduction in the atmospheric model or resolution/bathymetry effects. He suggested partnerships to explore these deficiencies. Luciano added that the issue might result from ocean model forcing, possibly an exaggerated upwelling, and that clouds offer a rich subject for MONAN parameterization studies.

### Atmosphere (Paulo Kubota)

Paulo Kubota presented the achievements of the atmospheric group in 2024 and the plans for 2025, aiming to advance toward a full Earth system modeling state. The 2024 goals included:

* Corrections to geopotential and vertical interpolation, improving diagnostic consistency with reanalyses and continuity in high-topography regions.
* Calculation of means for prognostic and diagnostic variables, essential for long-term simulations.
* Implementation of the Grell-Freitas convection scheme with representation of cold pools.
* Post-processing for regular grids, modifying the convert_mpas and mpas_cat tools to facilitate visualization and data usage.
* Development of a modal energy analysis tool by Paulo Bon for simulation diagnostics.
* Evaluation of high-resolution (3 km) simulations for Amazon events by Dr. Jonathan, compared with the WRF-LES model, indicating areas for adjustment.
* Preprocessing of static (topography, albedo, vegetation, soil) and oceanic (SST, sea ice) data for medium- and long-term simulations.
* Medium- and long-term simulation tests (e.g., El Niño and La Niña 1997–99) showed good model response to climatic forcing and precipitation climatology reproduction.
* Organization of 14 MONAN general meetings and the first MONAN/JEDI training.
* Availability of a MONAN version for notebooks and PCs on GitHub.
* Work on cloud microphysics, developing an interface to couple different schemes and plans to implement a new graupel formulation.

The 2025 plan aims to make MONAN operational in the first half of the year, using high-resolution analyses for initialization. Other goals include: new Grell convection formulations (with 3D lateral subsidence), implementation of WSM6 microphysics, development of dry and moist boundary layer schemes (by Guilherme Machado), aerosol models (by Carla Longo and Rosário), neural network data assimilation emulation (by Otávio, Haroldo, Saulo), and MPAS dynamics studies at cloud scale.

Pedro Dias praised the presentation, emphasizing the relevance of the topics for the tropics. He pointed out an abrupt pressure drop in July 1997 that should be investigated and highlighted the importance of mass and water conservation diagnostics on the native grid. Saulo reinforced the importance of the biweekly MONAN general meetings, organized and led by Paulo Kubota.

### Surface (Antonio Manzi)

Manzi presented the composition and 2024 activities of the surface group, focused on evaluating land surface schemes for weather prediction, and the 2025 plan. The group includes Manzi (core member), Paulo Kubota (integration), João Gerd (soil water assimilation), and collaborations with other groups and Celso von Randow. Two new researchers are expected to be hired in 2025 for surface/ecophysiology and dynamic vegetation/nutrient cycle processes, significantly enhancing development capacity.

Priorities for 2024 included updating Brazil's vegetation type map in collaboration with INPE's remote sensing group (Cláudio Almeida, Luciana Soler) and Embrapa, using IBGE, PRODES, TerraClass, and MapBiomas data. A global water balance was also developed to initialize soil water content using reanalysis, precipitation (MERGE), and satellite radiation data. Cooperation with Otávio Acevedo focused on surface flux evaluation in the Pampa biome.

The 2025 plan aims to operationalize the water balance scheme for weather forecasting, focusing on soil water initialization and its impact on energy partitioning. Completing the vegetation type map and selecting the surface scheme for MONAN and climate applications are also priorities. Candidates include NOAH-MP (already integrated into MPAS), IBIS, JULES, and CLM. NOAH-MP within MPAS has disadvantages, such as a shallow soil layer (2 m with 4 layers) and lack of carbon allocation in roots/leaves and vegetation dynamics.

Manzi explained surface scheme components: radiative balance, energy partition (latent and sensible heat fluxes), water balance, vegetation physiology, and biogeochemical cycles. He detailed the equations and processes of radiation, energy partition (including soil and vegetation heat storage), and evapotranspiration (direct soil evaporation, transpiration, and intercepted water evaporation). The soil water balance (precipitation, runoff, drainage, evapotranspiration) was also described. The NOAH surface scheme in MONAN 1.0 (MPAS 8.1) has four soil layers and requires boundary and initial conditions but does not handle carbon fluxes or stocks.

The NOAH vs. NOAH-MP evaluation was presented based on simulations conducted by Paulo Kubota using MPAS 8.2 (with NOAH-MP and a corrected version) and MPAS 8.1 (with NOAH). Energy balance analyses at an Amazon point (2.5°S, 60°W) showed that the original NOAH-MP had a large imbalance (≈ -5 W/m²) and struggled to stabilize soil temperature, requiring many adjustments. MONAN 1.0 (MPAS 8.1 with NOAH) showed an energy balance residual close to zero in the Amazon. MPAS 8.2 with NOAH had a noisier but near-zero residual. The corrected NOAH-MP (by Paulo Kubota) still showed a persistent imbalance (-5 W/m²) and soil drying in the first year, with reduced latent and increased sensible heat fluxes—behavior not observed in other runs. This suggests that NOAH-MP, despite being modern, requires significant work and calibration.

Global annual comparisons (60°S–60°N) between NOAH and NOAH-MP (corrected) indicated that NOAH-MP had higher incoming solar radiation, lower albedo, higher longwave emission, and a smaller net radiation balance. Sensible heat flux was slightly higher, and latent heat flux lower. The 2 m temperature increased by 1.5°C in the tropics, and 2 m specific humidity was much higher with NOAH-MP—apparently a diagnostic error. Mean diurnal cycles (31 days) in the Amazon and Sahara showed that in the Amazon, NOAH-MP produced a more transparent atmosphere (more solar radiation), higher net radiation, lower latent (except in the morning) and higher sensible heat fluxes, and very large ground heat fluxes. In the Sahara, NOAH-MP had lower albedo, larger net radiation, negligible latent heat flux, and higher ground heat flux. Soil temperatures were much warmer with NOAH-MP in both regions. The 2 m air temperature was higher at night, with previously corrected anomalies in specific humidity (by NCAR). The planetary boundary layer height was higher with NOAH-MP in the Amazon due to stronger sensible heat flux. The precipitation cycle (total and convective) showed differences between NOAH and NOAH-MP. Manzi concluded that NOAH-MP still requires substantial work and calibration, although NCAR has already implemented some corrections. Saulo stressed the importance of specifying the physical parameterizations used when presenting results.

## Agenda 4 – MONAN Regional Validation and Intercomparison

Saulo reinforced MONAN's main actions, including the creation of the official GitHub version (release 1.1) with scripts and tutorials, and the ongoing update to MPAS version 8.22. He mentioned continuous testing for bias tuning and improvement, a complex process not yet ready for pre-operational testing. MONAN's custom physics suite includes new convection and cloud microphysics parameterizations. The first MONAN/JEDI training took place in August, with 30 researchers and MCTI funding. Saulo highlighted MONAN's ability to reproduce extreme events, such as the Rio Grande do Sul floods (April/May) and Hurricane Beryl, showing competitive results with ERA5 and greater consistency with observations (GPM) even at similar resolutions. He concluded that the atmospheric and surface models are competitive and that the program aims to culminate in 2026 with the integration of ocean and data assimilation components.

Pedro Dias added that continuous model validation using the long-standing surface metrics intercomparison system (T2m, 2 m humidity, 10 m wind, rainfall, radiation) is crucial. This system has been effective in identifying parameterization issues for over 20 years. The goal is to encourage MONAN use in regional centers and expand the validation system to include partner simulation data. He emphasized that daily forecasting experience can reveal problems not evident in long integrations. Access to supercomputing resources for regional centers is essential, noting Santos Dumont's expansion and the creation of a MONAN Portal within SINPAD. INPE also plans to open access to South American countries with the arrival of the new supercomputer.

## Agenda 5 – WMO Activities and MONAN in Latin America

Daniel Vila (WMO) emphasized MONAN's relevance within the UN's "Early Warning for All" initiative, which aims to enhance forecasts across all timescales. The initiative, extending through 2030, provides a solid foundation for MONAN. He mentioned INPE's virtual and in-person forecasting courses for South and Central American meteorologists.

Daniel Vila reported on the INPE delegation's visit to the WMO Regional Office for the Americas, where MONAN was a central topic for engaging the Latin American community (South, Central, and Caribbean regions). He presented MONAN to the "Severe Weather Forecast Program" in Central America, generating strong interest in using MONAN for severe weather monitoring—hence the participation of Daniel Poleo (Costa Rica) in meetings. At the WMO Regional Association III (South America) meeting, the Brazilian delegation proposed establishing a regional coordination mechanism to improve Earth system forecasting capabilities through model development. This proposal was approved and will serve as a guideline to support initiatives such as MONAN. Daniel Vila expressed his intention to continue promoting MONAN and hopes that other countries, such as Argentina, will join in sharing knowledge and collaboration, with training for Latin American countries planned.

## Agenda 6 – Final Remarks and Next Steps for MONAN

Saulo Freitas apologized for the extended meeting and reiterated the MONAN team's full availability to collaborate, answer questions, and provide support locally (with 2025 travel funding) or through online workshops. He emphasized the importance of community engagement—using, identifying issues, evaluating, and developing new parameterizations better suited to Brazil's climatic and territorial conditions—to advance forecast quality. Saulo wished everyone a good end of the year and reiterated the goals for 2025 (fine-tuning and operationalizing the model) and 2026 (completing the Earth system). He thanked all participants and closed the meeting.

??? example "Attachments"

    * [Recording of the MONAN Scientific Committee Meeting - Dezembro 4, 2024](https://youtube.com/embed/fuaIPofBWuQ)
    * [Presentation by Saulo Freitas](https://drive.google.com/file/d/1-rgCHTeoIRGuoPNs8RQSvbTC6qBwe0JZ/view?usp=drive_link)
    * [Presentation by Mateus Melo](https://drive.google.com/file/d/1MySKQWlqHXLlmD7_fD7HVZTXDr5ty9r8/view?usp=drive_link)
    * [Presentation by Paulo Kubota](https://drive.google.com/file/d/1e1jNIHirDOX4o4K3wOx44fyT7MSDuAo3/view?usp=drive_link)
    * [Presentation by João Gerd](https://drive.google.com/file/d/1S7pGKKqsqHv554WqyPLHNm27CQdpHsNx/view?usp=drive_link)
    * [Presentation by Antônio Manzi](https://drive.google.com/file/d/1CDrXzdvdr4Br5QFk9dmsyVopsh_CD4Jc/view?usp=drive_link)
    * [Presentation by Rosio Camayo](https://drive.google.com/file/d/1b28Tf0tIzsmaG95TS0pV_8YgXTSkuTYc/view?usp=drive_link)
