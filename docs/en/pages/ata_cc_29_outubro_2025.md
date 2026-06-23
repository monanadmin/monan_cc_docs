!!! warning "AI-Translated Page"

      This page was translated using artificial intelligence (AI). The content may contain inaccuracies or misinterpretations. For critical or official use, please consult the site [administrator](mailto:mcstu.inpe@gmail.com) to confirm the information.


# October 29, 2025

## MINUTES 002/2025 - Revision 002

![type:video](https://youtube.com/embed/iFJRV_fgjXo?si=LMh09PivO_LN0_tH)

On October 29, 2025, at 2:00 PM, the Scientific Committee of the Community Earth System Prediction Model (MONAN) convened remotely for its regular meeting, with the participation of researchers and representatives from the National Institute for Space Research (INPE), the National Laboratory for Scientific Computing (LNCC), the University of São Paulo (USP), the National Institute of Meteorology (INMET), Itaipu Binacional, as well as international representatives from Costa Rica, Argentina, and Peru. These minutes record the proceedings of the meeting and compile the information presented throughout the discussions. The overall objective was to assess the technical progress of the atmospheric, oceanic, and data assimilation components of the model, as well as to plan pre-operational milestones for the 2025–2026 period.

The meeting was opened by Dr. Saulo Ribeiro de Freitas of the National Institute for Space Research and Professor Pedro Leite da Silva Dias of the Institute of Astronomy, Geophysics and Atmospheric Sciences of the University of São Paulo. They welcomed the participants and presented the meeting agenda, highlighting the breadth and complexity of the technical topics to be addressed. Dr. Saulo Freitas introduced the new members of the committee, including Daniel Poleo from the National Meteorological Institute of Costa Rica, Marcelo Zaikovski representing Itaipu Binacional, and Marcos Antônio Júnior, who joined the committee as the representative of the National Institute of Meteorology, replacing Gilberto Bonatti. Daniel Poleo expressed his satisfaction in joining the project and explained that Costa Rica is seeking alternatives to the GFS model for forecasting severe events such as hurricanes and tropical waves, viewing MONAN as a strategic opportunity for the Central American region. Dr. Daniel Vila added that observers from Argentina and Peru were attending the meeting, reinforcing the international character of the initiative and the growing regional interest in the project.

## Agenda 1 – MONAN Portal Initiative at LNCC

Dr. Roberto Souto of the National Laboratory for Scientific Computing presented the current stage of development of the supercomputing services portal designed for the MONAN community, whose implementation began in August 2025. He explained that the portal will serve as an interface for job submission to the Santos Dumont supercomputer, allowing users to configure parameters such as initialization time, forecast length, and desired resolution. He emphasized that the platform will enable testing of the model on different computing architectures, including Graphics Processing Units (GPUs), which is essential for ensuring the portability and efficiency of the model's dynamical core. Professor Pedro Dias suggested that the portal should provide initialization using ERA5 data as a default option in order to facilitate academic research. In response, Professor Pedro Peixoto noted that scripts for automatic ERA5 data retrieval and custom mesh generation have already been integrated into the MONAN execution framework, ensuring that the portal can support these initial conditions seamlessly.

## Agenda 2 – Report on the First Operational Ocean Modeling Workshop (REMO-MONAN)

Dr. Ronald Buss de Souza presented the results of the workshop held in partnership with COPPE at the Federal University of Rio de Janeiro in September 2025. He reported that the meeting focused on fostering convergence between the Ocean Modeling and Observation Network (REMO) and the MONAN project in support of selecting the oceanic and cryospheric components of the model. Dr. Ronald Buss emphasized that the evaluation of candidate models, HYCOM and MOM6, should not be limited to point-by-point statistical metrics but should instead focus on the realistic representation of oceanographic processes such as gyres, water masses, and current transport. Professor Afonso Paiva observed that, although both models are robust, there is a tendency toward adopting MOM6 due to its extensive developer community and the maturity of its data assimilation tools. Professor Pedro Dias proposed that the committee continue monitoring developments in the MPAS-Ocean project to ensure future consistency in heat and momentum exchanges between the ocean and atmosphere, given that both components share the same variable-resolution mesh infrastructure.

## Agenda 3 – Development and Evaluation of the Atmospheric Component

Dr. Saulo Freitas presented the latest evaluations of MONAN Release 1.4, highlighting that the model has demonstrated competitive performance relative to leading global forecasting centers. He noted, however, the persistence of a continental cold bias in two-meter temperature forecasts, possibly caused by excessive atmospheric transparency in the simulations, which will require further tuning of radiation, microphysics, and turbulence parameterizations. He highlighted successful simulations of the Amazon precipitation diurnal cycle and of extreme events such as the heavy rainfall episodes in Rio Grande do Sul and Cyclone Akará. He announced that the primary objective for the 2025–2026 period is the implementation of a deterministic pre-operational global version with 10-kilometer horizontal resolution and 55 vertical levels within the INPE Operations Division. He further proposed the development of a variable-resolution mesh with 5-kilometer refinement over Latin America and the Caribbean, with the goal of providing regional data sovereignty.

## Agenda 4 – Proposal for Artificial Intelligence Integration

Dr. Haroldo Campos Velho presented a strategic agenda for integrating Artificial Intelligence (AI) techniques into MONAN. He explained that the objective is not to replace physics-based models but rather to develop complementary tools for forecasting extreme events, such as lightning and frost, and for high-resolution downscaling applications. He emphasized that AI techniques could significantly reduce the computational cost associated with generating ensembles for uncertainty quantification. He invited the committee to organize a dedicated technical workshop to align AI-related initiatives with the needs of both the atmospheric and oceanic communities, mentioning NVIDIA's expressed interest in potential collaboration. Professor Pedro Dias reinforced that the use of machine learning techniques to increase ensemble membership is an emerging trend that the project should actively pursue.

## Agenda 5 – Status of JEDI Framework Development

Researcher João Gerd presented recent progress in the implementation of the JEDI framework for data assimilation. He reported the successful execution of six-hour cycling experiments for the first half of September 2025 using conventional observations, GPS data, and satellite-derived wind products. Carlos Bastarz explained that a major technical milestone was the successful computation of the Forecast Error Covariance Matrix (B Matrix) at 60-kilometer resolution, overcoming a critical bottleneck that had previously limited progress in data assimilation development. João Gerd added that the next steps include the incorporation of satellite radiances, which are essential for improving analysis quality in the Southern Hemisphere, and the execution of fully integrated experiments directly within the MONAN source code.

## Decisions

By consensus, the committee reaffirmed the need to define the final ocean component of MONAN (MOM6 or HYCOM) before the end of 2025, based on the results of the ongoing 20-year global simulations being conducted for process-oriented comparisons. The committee agreed to strengthen collaboration with LNCC to make a testing version of the supercomputing portal available during 2025. It was also agreed that the technical teams would prioritize the inclusion of satellite observations in JEDI and the physical tuning efforts required to reduce the thermal biases identified in the atmospheric component. Finally, the committee welcomed Daniel Vila's proposal to initiate diplomatic discussions, through the World Meteorological Organization (WMO) and the Brazilian Ministry of Foreign Affairs, regarding the potential establishment of a Latin American regional forecasting center based on MONAN technology.

## Closing Remarks

In the final remarks, Professor Pedro Dias emphasized that the project has reached a stage of solid maturity, evolving from conceptual proposals to concrete technical achievements. Saulo Freitas thanked all participating teams for their dedication and informed the committee that presentation materials would be shared through Google Drive for detailed review by committee members. With no further matters to discuss, the meeting was adjourned at 4:10 PM.


??? example "Attachments"

    * [Recording of the MONAN Scientific Committee Meeting - October 29, 2025](https://youtube.com/embed/iFJRV_fgjXo?si=LMh09PivO_LN0_tH)
    * [Presentation by Saulo Freitas](https://drive.google.com/file/d/1BJZemmXAZALDK7Px-rc7Y_lprZR9szGB/view?usp=drive_link)
    * [Presentation by João Gerd](https://drive.google.com/file/d/1cys6FZSeaGueD-dP_Lu8WYGSDFpfOvni/view?usp=drive_link)
    * [Presentation by Ronald Buss](https://drive.google.com/file/d/1EtfZ-JmUKstS0Ahe37D1lrSyW3C8JOhH/view?usp=drive_link)
