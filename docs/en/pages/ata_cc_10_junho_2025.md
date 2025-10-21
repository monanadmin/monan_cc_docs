
!!! warning "AI-Translated Page"

      This page was translated using artificial intelligence (AI). The content may contain inaccuracies or misinterpretations. For critical or official use, please consult the site [administrator](mailto:mcstu.inpe@gmail.com) to confirm the information.


# June 10, 2025

## MINUTES 001/2025 - Revision 001

![type:video](https://youtube.com/embed/DlO_W7UxqjU)

## Agenda 1 – Meeting Opening and Welcome to New Members

The meeting was initiated by Saulo, who greeted the attendees and welcomed the new members of the MONAN Scientific Committee. The presence of José B. Lucas, representing Biofy, and the new member Dr. Jorge Arevalo, professor at the University of Valparaíso in Chile, was highlighted. Dr. Arevalo is the first Chilean representative on the scientific committee. The University of Valparaíso is interested in using MPAS and is participating in a project with MONAN to implement the model in the region.

Saulo reported that Dr. Pedro Dias could not attend due to family matters, as Assunção was still hospitalized at the start of the meeting but was discharged later. Saulo also mentioned that Dr. Antônio Miguel had been appointed Interim Director of INPE at the turn of the year, and that Dr. José Aravéquia had been chosen as General Coordinator of Earth Sciences, both participating in this committee for the first time.

## Agenda 2 – Introduction of New Members

Saulo asked the new members to introduce themselves.

* Dr. Jorge Arevalo (University of Valparaíso, Chile): He introduced himself as a PhD in Hydrometeorology with 15 years of experience in WRF models for hydrological services in Chile. He is currently involved in machine learning and leading two proposals: one linking to learn and validate MONAN in Chile and another to obtain funding for the first meteorological radar in Chile, aimed at understanding extreme precipitation. His main interest is to participate in evaluation and identify improvements for MONAN at mid-latitudes, seeking to involve the Chilean scientific community in the project.
* Dr. Marlos Guimarães (Eletrobras): He expressed his honor in joining the committee. As a civil engineer, he sees great potential to improve engineering models by using simulated signals on finer temporal scales, in contrast with the static charts currently used for design and feasibility studies.
* Eusébio (Biofy): He thanked the committee for the opportunity and explained that Biofy is a technology company focused on artificial intelligence (AI), partnered with Oracle and NVIDIA. The company emerged from the opportunity to train and develop NVIDIA AI for meteorology. Biofy's interest is to contribute its expertise in AI and software development, seeking the technical knowledge of committee members to aid the MONAN project development.

## Agenda 3 – MONAN Vision in the General Coordination of Earth Sciences (CGCT) 

Dr. José Aravéquia (General Coordinator of Earth Sciences) presented CGCT's vision regarding MONAN. He emphasized that MONAN is a community-developed Earth system model, strategic for engaging research efforts in Brazil and Latin American countries. He highlighted the platform and modern "dynamic core" structure, at the forefront of knowledge, and compatibility with the Jedi assimilation system. For INPE and Brazil, MONAN is crucial for independence in producing initial conditions and modeling across all scales (short-term, subseasonal forecast, seasonal, and climate change scenarios). Dr. Aravequia expressed satisfaction with the growth of the scientific community engaged in the project and with Saulo's coordination.

## Agenda 4 – INPE Management's Vision on MONAN 

Dr. Antônio Miguel (Interim Director of INPE) joined the meeting. He apologized for being late due to commitments related to federal budget constraints. Dr. Miguel reaffirmed that INPE management considers MONAN as a structuring program of the Institute, essential to recover the time and climate area. He classified MONAN as the "last chance" for the numerical weather prediction area to succeed at INPE, assuring that the institution will strengthen the program.

The Director acknowledged the budgetary challenges of a community model and reported that he has already started discussions with the CNPq president, Galvão, to seek a minimum budget allowing MONAN partners to start their work, even initially with scholarships.

He also highlighted two new thematic funding lines at FNDCT (via FINEP):

* An AI line with nearly 80 million reais.
* A climate crisis line.

He suggested that MONAN should apply for these lines to fund human resources, including partners, with management support.

Dr. Miguel requested that INPE management always be invited to scientific committee meetings. Finally, he expressed great concern about data assimilation, a historical issue that, in his view, needs to be resolved. He suggested using the cooperation agreement with the European Center (ECMWF) to seek a partnership that leads to a concrete solution to this long-standing problem.

Saulo thanked the Director for his "extremely encouraging and promising" words, highlighting the recognition of MONAN as a structuring program, the pursuit of a minimum budget, FNDCT opportunities, and convergence on the importance of data assimilation. Saulo also mentioned that the inauguration of INPE's new supercomputing infrastructure, crucial for MONAN, is scheduled for the second half of August, possibly with the presence of the Minister and the President.

## Agenda 5 – Current Status of the MONAN Model (Pre-Operational Version) 

Paulo Kubota (researcher from the modeling division) presented the current status of MONAN, detailing the version offered to the operations division as pre-operational. He explained that MONAN aims to improve weather and climate forecasting across all temporal and spatial scales for Brazil and South America, focusing on extreme events and climate change. The model is planned as an Earth system modeling system, to be coupled in the future with ocean, cryosphere, and aerosol models.

The MONAN version was based on MPAS 8.1p1, leveraging its "dynamic core" structure and parallelism. Modifications were made to make it flexible and operational, including pre-processing and post-processing, which can be used by the scientific community. INPE's development team is divided into macro-groups (atmosphere, surface, cryosphere, data assimilation, evaluation, scientific computing, coupled system, and AI).

Kubota highlighted work on pre-processing, aimed at creating more refined initial conditions from data such as ECMWF (0.075º resolution), in contrast with GFS (0.25º). In the atmospheric model, physical parameterizations such as GF and CU puls (from the BRAMS model) were implemented, along with bug fixes. Pre-operational version 1.3/1.4 includes GF parameterizations and an optimized "convex suite for MONAN," with output restructured to 18 levels for storage optimization.

He also showed significant improvements in vertical interpolation and geopotential calculation, which previously had extrapolation problems over topographies such as Antarctica, generating biases. In post-processing, model output was adapted to standard isobaric levels (based on Convert software) and variable names standardized according to WMO for easier use by the meteorological community.

The pre-operational version does not include some recent changes, such as Dr. Manzi's surface model, which will be incorporated in future versions. Kubota emphasized that the software is available for download on Git, encouraging the community to contribute to future development. He noted that INPE leverages NCAR developments, especially GPU parallelization, due to the lack of skilled personnel to develop everything internally.

Saulo praised the "enormous work" of the modeling division, recognizing Paulo Kubota, the scientific computing group (Eduardo Khamis, Carlos Renato, Marcelo Paiva, and João Messias), and the evaluation group. He highlighted the GitHub scripts infrastructure to facilitate MONAN installation, configuration, and execution.

## Agenda 6 – Status of MONAN Pre-Operational Version at DPTC 

Dr. Enver Ramirez (Head of the Weather and Climate Forecasting Division – DPTC) presented the status of the MONAN pre-operational version at DPTC. He explained that the division is responsible for operations, serving multiple scales and demands, and for running models. The MONAN pre-operational version (1.4.1 RC) is running on the EGON supercomputer at two times (00Z and 12Z), with forecasts of 10 and 5 days, respectively.

Enver described a tool for organizing and accessing MONAN products, developed by the web group, which centralizes access, facilitates navigation by categories, and has user-profile-based access control, with external access planned for the future. Initial authentication uses corporate login (INPE/CPTEC, Gmail), and the technologies include Vit, Blade, Telgwint (frontend), Laravel (backend), MySQL (database), Docker Containers, and Git.

He presented some preliminary results (less than a month of runs) of meteorological maps, comparing MONAN with BAN and GFS, showing good agreement and detail. In terms of precipitation bias (compared to the Merge product), MONAN performed slightly better than GFS for 24 hours over the continent, though it shows underestimation of precipitation in the tropical region.

Enver mentioned that DPTC is working on resuming synoptic discussions and modernizing the forecast room for collaborative MONAN evaluation and development.

In response to Haroldo, Enver clarified that MONAN is not inside the Docker container; the container serves to make the application's results (images, synoptic charts) available. When asked about using MySQL instead of PostgreSQL for the database, Enver admitted that MySQL was used for "ease," but acknowledged that PostgreSQL is more robust for large data volumes, which could be a future limitation.

## Agenda 7 – Access Portal and Supercomputing Services for the MONAN Community 

Roberto P. Souto (LNCC) presented the idea of developing a job submission portal for the MONAN community on the Santos Dumont supercomputer. The idea originated with Professor Pedro, former director of LNCC, leveraging the expertise of the Sinapad team (coordinated by Antonio Tadeu Gomes) in portal development.

LNCC intends to use Open OnDemand, an open-source web portal widely used in HPC, developed by the Ohio Supercomputer Center. This portal is user-friendly and facilitates the submission of complex tasks, especially for users less experienced with supercomputer commands. The LNCC team (Antonio Tadeu Gomes, Rafael Ferreira Soares, and a contracted professional) will develop a specific MONAN application in Open OnDemand.

Work to implement Open OnDemand at Santos Dumont, in partnership with Eviden, is expected to begin in July or August. Roberto highlighted the importance of interaction with MONAN developers and users to define the portal layout, features, and graphical visualization.

Asked about implementing Open OnDemand on other SINAPAD machines across the country, Roberto stated that the initial focus is Santos Dumont, but the application can be adapted to other HPC systems with Open OnDemand, depending on availability and interest. He also clarified that, although LNCC does not have a resource-opening policy for communities outside Brazil, projects coordinated by Brazilian institutions can have international partnerships, facilitating access for collaborators from countries such as Argentina and Chile.

Saulo considered the initiative "promising", reiterating the need for a user-friendly graphical interface to facilitate model configuration, job submission, and post-processing, closely following project development.

## Agenda 8 – Status of Data Assimilation Developments 

João Gerd (Data Assimilation Group) presented the group's activities, focusing on implementing the Jedi system for MONAN and maintaining the DSI system with the BAN model.

* Maintenance of DSI (BAN model): The DSI system (with 3DVar FGAT methodology) was migrated from XC50 to EGON, focusing on operational stability and bug fixes related to unassimilated data. The team also migrated to a more recent DSI version (NCEP-compatible) and is validating the full assimilation cycle. Radiance data issues (such as non-assimilation of satellite wind data over South America with the previous DSI version) were corrected with the new version.
* Sensor Replacement: The group is testing the replacement of MHS data (NOAA satellites) with ATMS due to the imminent decommissioning of the former.
* Monitoring and Tools: Carlos is developing a monitoring system for SNMA, which can be used in Jedi. The group also developed Read Diag, software to evaluate the assimilation system (data impact, cost function, quality control flags).
* Jedi Implementation (for MONAN):
    * Spack Stack: The group is developing a Spack Stack version (environment with packages and libraries) for EGON, with automated compilation and testing scripts, to be migrated to the new supercomputer.
    * MP Jedi: An automated script exists for compiling Jedi and MP (MONAN) in the EGON environment, following the Spack Stack concept, which will also be migrated to the institutional Git.
    * Validation: Fernando Sapucci and Caroline Viezel are validating Jedi in the region but face account issues.
    * Data Ingestion: Pre-processing of observed and meteorological data is crucial for ingestion into assimilation systems. Obsproc (NCEP) is used for conventional data, generating Prep Buffr format, which is then converted to NetCDF for Jedi's IODA. The CPTEC workflow involves raw data collection, pre-processing, validation, quality control, and delivery for assimilation.

Challenges:

* Migration from GTS to WIS2 (WMO).
* Replacement of MHS by ATMS and ingestion of future data.
* Personnel deficit (approximately 35% of required workforce), causing delays in planning milestones (e.g., calibration of B matrix).
* High EGON usage, requiring dedicated quota or optimization of time windows.
* Need for a formal agreement between divisions (DIMNT, DIPTC, DISSM) for data, quality control, and assimilation.
* Delay in delivering a functional Jedi version with 3DVar FGAT (scheduled for March).
* Need to automate tests and migrate repositories to institutional Git.

In discussion, Fabrício asked about the relationship between MPAS and WRF regarding assimilation packages, and João clarified that, although activities are similar, Obsproc is not the same package for both. He explained that DSI requires prior data quality control, while Jedi (via IODA) performs its own internal quality control.

Haroldo questioned the comparison of BAN analysis (with DSI) to NCEP analysis, suggesting an evaluation of forecasting capability (24, 48, 72h, 5, 7, 10, 15 days) using different initial conditions for BAN and MONAN, focusing on precipitation as the key metric. Carlos added a chat link for evaluating the latest SMNA version (2.3.1). Enver confirmed that DPTC performs routine evaluations, showing gains in some variables with BAN/SMNA, although it is not the best configuration or version. João emphasized that precipitation is a sensitive metric for assimilation errors, and although MONAN with assimilation is not yet optimal, it is within expectations, with no serious precipitation issues.

## Agenda 9 – Final Considerations and Next Steps

Saulo summarized the meeting, reiterating FNDCT opportunities (AI and climate crisis) for which MONAN should apply, MONAN's recognition as a structuring program by INPE, and the pursuit of funding through MCTI for external partners.

He recapped:

* Paulo Kubota showed the current status of the MONAN pre-operational version.
* Enver Ramirez presented preliminary results, expecting DPTC meteorologists to support identifying gross errors.
* Roberto P. Souto presented the "promising" LNCC supercomputing portal initiative for community access.
* João Gerd detailed the status of data assimilation, a crucial point requiring resources and community support, especially from Fabrício and Haroldo, due to the complexity and interaction among CPTEC's three divisions.

Saulo thanked everyone for their presence and concluded the meeting, noting that a new meeting will be scheduled soon to discuss results from the MONAN pre-operational version.

??? example "Attachments"

    * [Recording of the MONAN Scientific Committee Meeting - June 10, 2025](https://youtube.com/embed/DlO_W7UxqjU)
    * [Presentation by Saulo Freitas](https://drive.google.com/file/d/1tK8weSfc-6f3rVxr4VXECqpUtos3jIXk/view?usp=drive_link)
    * [Presentation by Paulo Kubota](https://drive.google.com/file/d/1uPF9zIDCXWq0AC5hbHi5m7xHWS3ea0Z5/view?usp=drive_link)
    * [Presentation by Roberto Souto](https://drive.google.com/file/d/1hhERMHxMiDvOoLJdpCeSBDkGmJ0Oe0ma/view?usp=drive_link)
    * [Presentation by João Gerd](https://drive.google.com/file/d/1RPWTkvBQlU7kgSNbMOgdMXzWyOD7PCOU/view?usp=drive_link)
    * [Presentation by Enver Ramirez](https://drive.google.com/file/d/1hVpJlTtDBeXty9gFiMlUWpNgMoPaJB47/view?usp=drive_link)
