

!!! warning "AI-Translated Page"

      This page was translated using artificial intelligence (AI). The content may contain inaccuracies or misinterpretations. For critical or official use, please consult the site [administrator](mailto:mcstu.inpe@gmail.com) to confirm the information.


# December 6, 2021

## MINUTES 005/2021 - Revision 001

![type:video](https://youtube.com/embed/pBdrKYZKR5Q)

Meeting of the Scientific Committee of the Ocean, Land Surface and
Atmosphere Forecasting Model.

At 9:00 a.m. on December 6, 2021, representatives from the National
Institute for Space Research (INPE), Technological Institute of
Aeronautics (ITA), Federal University of Santa Maria (UFSM), University
of São Paulo (USP), National Laboratory for Scientific Computing (LNCC),
Brazilian Navy (MB), and Brazilian Air Force (FAB) met virtually to
discuss and continue the work of the Scientific Committee for the Model
for Forecasting the Oceans, Land Surfaces, and Atmosphere. These minutes
record the meeting's memory and gather the information inserted in the
chat, such as links and information relevant to the discussions held.
This document is oriented according to the guidelines established by
Saulo Freitas during his presentation.

## Opening

Saulo Freitas began the proceedings by reminding everyone that this is
the 6th meeting of the Scientific Committee (SC) of the Community Model
of the United Earth System and that this activity will complete 1 year,
a period that marks the initial idea of ​​the model in December 2020. He
recalled that first there was an informal meeting, followed by a meeting
with the director of INPE, from which the initial committee was created
and, subsequently, the beginning of the meetings. He mentioned that the
SC is committed to obtaining the necessary resources to carry out the
activities related to the development of the model. He added that the
country is going through difficulties, which makes it difficult to
obtain the resources, but that this cannot prevent the development of
the model, which should give the country the technical-scientific
autonomy it needs in this area. Saulo Freitas moved on to present the
meeting agenda.

## Agenda 1 - The Process of Choosing the Name of the Unified Earth System Community Model - Report

Saulo Freitas presents the report on the process of choosing the name of
the community model. He recalls that the process of choosing the name
was carried out through a survey in which the members of the CC
suggested names with their reasoning. The names were compiled and
disseminated for the selection of the CC members by Fabielle Alves. To
this end, two rounds of suggestions were necessary because, in the first
round, the suggested names contained references to Brazil (given the
previous discussions, a consensus was reached that the name of the
country should not be part of the name of the model), in addition to
acronyms that were already being used by other models. In the second
round, new names were suggested that met the proposed requirements.
Since there were no objections and there was no need for a third round
to choose the name of the community model, the process was concluded.
The name chosen, with 8 votes, was **"Model for Ocean-laNdAtmosphere
predictioN (MONAN)"** , with the translation into Portuguese **"Modelo
paraPrincípio dos Oceanos, Superfícies Terrestres e Atmosfera"** . In
both languages, the acronym for the model is MONAN. Saulo Freitas adds
that the chosen name should already be used from the next meetings, and
this will be communicated to the relevant bodies and divisions. The High
Performance Processing (PAD) group should also start using the chosen
name for the organization of repositories and other activities.

## Agenda 2 - Report of the Subcommittee Meetings - Continental Surface, Soils and Atmosphere

Saulo Freitas begins the presentation of the report of the meeting of
the subcommittee on the atmosphere. He comments that a meeting was held
on [November 26,
2021](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.youtube.com/watch?v%3DbzczKGQaK_g)
, to which 26 researchers from the Brazilian scientific community
related to atmospheric modeling were invited. Of the 26 invited, 20 were
able to participate. One of the fundamental aspects discussed initially
was the spatial and temporal scales that should be considered in MONAN.
In view of the group's discussions, it was concluded that the model must
be capable of making predictions on a spatial scale of 1 km and a
temporal scale of 1 hour. This conclusion is due to the limitations
imposed by the currently existing dynamic cores, which are prepared to
operate within these limits. Despite this, the group expects that it
will be possible, with the experts associated with MONAN, for these
limitations to be overcome. In addition, the group aims to work on the
processes of the Planetary Boundary Layer (PLL), which are observed on a
spatial scale of tens of meters.

Pedro Dias comments on the scales of implementation of the community
model. He mentions that when it is said that the model has a scale of 1
km, it means that it should represent phenomena that are on a scale of 1
km. Consequently, the resolution of the model should be lower. Saulo
Freitas agrees with Pedro Dias and comments that there is confusion
between what is the effective resolution of the model and the spacing
between the points of its grid. Saulo Freitas adds that the models that
use the dynamic cores Model for Prediction Across Scales (
[MPAS](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://mpas-dev.github.io/)
) and Finite Volume Cubed-Sphere Dynamical Core (
[FV3](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.gfdl.noaa.gov/fv3/)
) do not have physics that are refined enough to explicitly resolve
processes on a scale of 1 km.

Saulo Freitas also comments that during the meeting of the atmospheric
modeling subcommittee, some of the desirable characteristics for MONAN
were discussed, in terms of dynamical core, discretization method and
computational grid. Among the characteristics of the computational grid,
it was discussed whether it should be of the unstructured type with
possibility of refinement or with grid nesting; whether it should be
global or limited area (open boundaries); and whether it should be
discretized in definite volumes, spectral elements or in another method.
In terms of the dynamical core, the group discussed whether it should be
locally conservative in mass, whether it should be hydrostatic or
non-hydrostatic, whether it should be fully comprehensible, whether it
should be suitable for the "deep" atmosphere and what its order of
global and effective accuracy should be. Regarding this last aspect, he
highlights the detail presented by Pedro Peixoto during the meeting. It
is also worth highlighting that Chou Chan spoke about the version of the
Global Eta Framework (
[GEF](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.proquest.com/docview/1920221462?pq-origsite%3Dgscholar%26fromopenview%3Dtrue)
) - Eta model on a global scale, highlighting the main characteristics
of this version of the model.

Pedro Peixoto comments on the limits of the application of the spectral
method in global-scale models and the options available for the dynamic
cores of MPAS, FV3 and GEF. Due to computational scalability, the meshes
may be hexagonal or pentagonal structures (Voronoi meshes, from FV3 and
MPAS), or they may be structures with a cube projected onto a sphere
(cubed sphere, from GEF). Among these options, there are advantages and
disadvantages. The cubic sphere requires the application of
higher-precision operators, in addition to requiring mesh nesting. On
the other hand, although the accuracy of the operators in Voronoi meshes
is lower, it is more flexible and allows better mesh refinements for
high resolution on a regional scale. In addition, there is the vertical
coordinate. FV3 uses a vertical pressure coordinate, which follows the
terrain, while MPAS uses a height coordinate that also follows the
terrain. Among the discussions held by the atmospheric modeling
subcommittee, Pedro Peixoto commented on the discussions on whether
these coordinates that follow the terrain are suitable for representing
regions with great topographic variation such as the Andes mountain
range. He added that these aspects were all discussed, but that there
was no decision on what should be used by MONAN.

Pedro Dias adds about the flexibility of the grid and the problems
arising from the use of a non-homogeneous grid. He comments that the
[imprinting](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://pedrosp.ime.usp.br/papers/PeixotoBarros2013.pdf)
that arises in these grids is a localized problem that can be
controlled. The choice of the vertical coordinate is worrying, since in
South America there are geographical features such as the Andes and
Serra do Mar, which have an important influence on meteorology.
Regarding the vertical coordinate Eta, also used in the global version
of the Ocean Land Atmosphere Model (
[OLAM](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://sourceforge.net/projects/olam-model/)
), he comments that the variation in vertical resolution, close to the
surface, is very coarse and does not adequately represent the processes
close to the surface. Vertical nesting can be an alternative, such as
refining the vertical resolution over the Andes. The problem with doing
this is the residuals generated by numerical integration, which can be
solved with diffusion, which is not necessarily a good thing. He adds
that the classic formulation of the vertical coordinate Eta is no longer
used and that there is a more modern version that considers an
inclination between the different strata of the coordinate ( [shopping
steps or shaved
cells](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://link.springer.com/article/10.1007/s00703-012-0182-z)
), which alleviates the problem of flows perpendicular to the mountain,
allowing horizontal flows to occur. This characteristic reduces the need
for numerical diffusion. Pedro Dias corroborates Pedro Peixoto's
statement and says that it will be necessary to study the options
further, especially the application of the coordinate Eta and that it
will be necessary to design experiments to test the options.

Jairo Panetta asks whether the models of the European Centre for
Medium-Range Weather Forecasts (
[ECMWF](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.ecmwf.int/)
) are also being considered in the discussions, in addition to the
American models MPAS and FV3. Pedro Peixoto responds by saying that the
ECMWF model, the Integrated Forecast System (
[IFS](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.ecmwf.int/en/forecasts/documentation-and-support)
), is a finite volume model, with an octahedral mesh and that preserves
the latitude lines. This means that they can apply the Fourier
transform, at least locally, and preserve the entire computational
structure of the IFS. This version of the [IFS-Finite
Volume](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.ecmwf.int/en/newsletter/158/meteorology/nonhydrostatic-finite-volume-option-ifs)
uses a discretization similar to that used in the FV3, but uses all the
pre- and post-processing already used by the ECMWF model. The [Met
Office](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.metoffice.gov.uk/)
is developing a dynamic core in a cubic mesh with mixed finite elements.
He also comments that France is following a similar line to that of the
MPAS and that in Germany, they are carrying out other types of tests.
The ECMWF dynamic core is the most recommended. Jairo Panetta also
questions whether it is not a good idea to follow the developments of
the ECWMF. Pedro Dias and Saulo Freitas comment that the ECMWF does not
make the operational code of the IFS available, only previous versions,
and that there may be restrictions on the operational use of the IFS by
other centers.

Saulo Freitas comments on the possibility of using the same dynamic
nucleus with a vertical coordinate in an urban domain, to simulate flow
in urban canyons.

Pedro Dias adds that, in his experience, this was only possible using
the modern version of the Eta coordinate, or using different models (and
with different resolutions) nested together. Regarding the use of the
same model, he mentions that he was only able to do this type of
simulation using the modern version of the Eta coordinate. Saulo Freitas
adds that the PAD group is important because it will be able to explore
all these aspects related to dynamic cores.

Saulo Freitas comments on physical parameterizations, on how a model
must be able to simulate seamlessly, with physical parameterizations
that adapt to variable resolutions (seamless system), which should be
one of the main points of the model. He also mentions other aspects
discussed, such as solar and terrestrial radiation modules, cloud
microphysics, and coupling with the aerosol model for the prediction of
condensation nuclei of liquid water and ice. He adds that there is a
need to have a single formulation of cloud parameterization for any
spatial scale, especially at the subgrid scale and in the so-called gray
zone (where a parameterization can attempt to resolve phenomena at the
grid and subgrid scales that contribute to turbulent processes).
Regarding the treatment of turbulence, he highlights the need for
explicit simulation of horizontal mixing processes at storm scales
(between 1 and 4 km). He also mentions the challenges related to the
representation of atmospheric composition and air quality, such as the
modules of anthropogenic and natural emissions and biogenic fluxes. In
terms of the requirements of the model's computational grid, he mentions
that it is desirable for MONAN to have a global grid of variable
resolution, with a refinement over South America. Still on this aspect,
he comments that one of the possibilities is the production of
environmental forecasts on a simultaneous regional and local scale.

Saulo Freitas invites Otávio Acevedo to present the report of the
surface and boundary layer subcommittee.

Otávio Acevedo begins his presentation by commenting on the composition
of the surface and boundary layer subcommittee. He comments that the
objective is not to start developments from scratch, but to take
advantage of existing developments, such as packages developed by the
National Center for Atmospheric Research (
[NCAR](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://ncar.ucar.edu/)
). He comments on the difficulties encountered in previous efforts
(e.g., the Integrated Model of Surface Processes -
[Inland](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://inland.ccst.inpe.br/)
, due to PAD problems). He mentions that this model is already outdated
in relation to others, and that data assimilation is important, although
it has not been prioritized until now. He adds other relevant aspects,
such as the need to improve the representation of carbon dioxide
removal. Otávio Acevedo also adds that the group raised relevant issues
for the development of MONAN on South America, such as the important
role in the global carbon balance, Brazil's leading role in solving
major environmental problems and, specifically, the representation of
the Amazon, the Andes mountain range, tropical meteorology, convection,
among others.

Otávio Acevedo, regarding the representation of the Planetary Boundary
Layer (PLL), highlights the importance of representing turbulence and
nocturnal PLC for forecasting extremes, severe weather, among others. He
cites problems related to coupling the PLC model to the surface model
and adds that the Weather Research and Forecasting Model (
[WRF](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.mmm.ucar.edu/weather-research-and-forecasting-model)
) has a separate module to resolve the interface between the surface
layer flows and the PLC.

Saulo Freitas highlights the importance of the surface and boundary
layer subcommittee, as it is a group capable of testing different
solutions and implementations of parameterizations in MONAN, at
different spatial scales. The synergy between the different groups for
problem-solving is also an important aspect, as there is the opportunity
to attack the problems using the experience of the group members.

Pedro Dias highlights the exchange of experiences as something very
positive, the interaction between groups and the exchange of information
within MONAN. Otávio Acevedo agrees and mentions that other groups also
have demands on the CLP and that this is also something important. He
adds that Brazil has an above-average tradition in CLP observations,
with observational platforms that can be used in the development of
MONAN. Pedro Dias agrees and mentions that the diversity of groups
involved and the observational data are also important in numerical
modeling. In the chat, Márcia Yamasoe informs that her working group is
evaluating the effect of aerosols from forest fires on incident and
surface solar irradiance.

Luciano Pezzi comments on the database of ship observations that has
been used to study and understand phenomena. He states that these data
should also be used to improve numerical models.

## Agenda 3 - Demands and Requirements of the Brazilian Navy

Flávia Pinheiro began her presentation by mentioning the meteorological
services provided by the Navy through the Hydrography and Navigation
Directorate (
[DHN](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.marinha.mil.br/dhn/)
). She mentioned that the Marine Meteorological Service (
[SMM](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.marinha.mil.br/chm/banner/servico-meteorologico-marinho)
) involves operational and research aspects, but the computational
limitations of the SMM limit research and development activities. She
commented that the SMM provides forecasts not only for oceanic areas but
also for riverine regions, and that the services provided by the SMM
cover both oceanographic and meteorological areas. Among the services
provided, she commented that meteorological and oceanographic monitoring
of search and rescue areas is the most important. The products provided
by the SMM include synoptic charts, meteorological and climatological
bulletins, severe weather warnings, special forecasts, environmental
information bulletins, and decision-making aids. Regarding climate
bulletins, he explains the difficulties related to the fact that the SMM
does not make climate forecasts and that it is necessary to gather a
large amount of information for their preparation. He comments that
these products serve not only the MB, but also civil society.

Flávia Pinheiro, regarding the modeling conducted by the SMM, mentions
that five different models are used. For atmospheric modeling, she
comments that the Consortium for Small-scale Modeling (
[COSMO](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.cosmo-model.org/)
) models and, more recently, the Icosahedral Nonhydrostatic Model -
Limited Area Mode (
[ICON-LAM](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.dwd.de/EN/research/weatherforecasting/num_modelling/01_num_weather_prediction_modells/icon_description.html)
) model are mainly used, both with a horizontal resolution of 7 km (the
latter model, recently installed and in the configuration and adjustment
phase). She comments that the WRF model (with 10 km horizontal
resolution) is used as a contingency but that, despite the needs, a
limiting factor is the SMM's computational capacity to perform these
models. She mentions that the MB has had a partnership with The
Deutscher Wetterdienst (
[DWD](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.dwd.de/EN/Home/home_node.html)
) since numerical forecasting was established at the MB. Saulo Freitas
questions the time needed to perform the forecasts and the extent of the
forecasts performed. Flávia Pinheiro comments that the ICON-LAM model is
performed for up to 120 hours (i.e., 5 days) and that 1 hour is needed
for its complete execution, with two daily executions from which all
products are generated. Regarding the wave model, she comments that the
SMM uses Wave Watch III (
[WW3](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://polar.ncep.noaa.gov/waves/wavewatch/)
), performed with forcings from the Global Forecast System (
[GFS](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast)
), ICON and COSMO models. She mentions that, although the SMM cannot
perform an ensemble of the models, these three forcings are used to
generate a similar product that assists in forecasts. Pedro Dias
questions whether, in the case of GFS forcings, the forecast ensembles
or only the control forecasts are used. Flávia Pinheiro responds that
only the control forecasts are used. Regarding oceanographic models, he
mentions that the SMM produces the HYbrid Coordinate Ocean Model (
[HYCOM](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.hycom.org/)
), with significant development support from the Oceanographic Modeling
and Observation Network (
[REMO](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.rederemo.org/)
) and the Navy Hydrography Center (
[CHM](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.marinha.mil.br/chm/)
). He comments that the HYCOM model has a data assimilation scheme based
on Ensemble Optimal Interpolation, with two different grids of
approximately 9 km and 4 km of horizontal resolution. With the REMO
team, he mentions some work carried out jointly (e.g., the Shallow Water
Tidal Current Forecast System, an integral part of the Navy
Environmental Forecast -
[PAM](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.marinha.mil.br/noticias/diretoria-de-hidrografia-e-navegacao-desenvolve-visualizador-para-previsoes-de-correntes)
). Pedro Dias asks if there is any product for the mouth of the Amazon
River. Flávia Pinheiro responds that the MB makes forecasts for
riverside areas but that it is very difficult to make forecasts for
specific river regions because the COSMO model dominates the ocean.
Comments that the continent is under the jurisdiction of the National
Institute of Meteorology (
[INMET](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://portal.inmet.gov.br/)),
but that the MB also has the responsibility of having information about
the continent (in riverside regions), but that there is difficulty in
making predictions using current models. Flávia Pinheiro demonstrates,
through PAM, that the COSMO model predictions are made for riverside
regions, but that their detail is much lower in relation to the oceanic
domain.

Flávia Pinheiro, regarding the MB's needs and demands for MONAN,
mentions that atmospheric data assimilation is one of the main problems
to be solved. She comments that the main limiting factor at this point
is the computational part. The HYCOM model has a data assimilation
scheme, but the atmospheric part does not. Another highlight is the
coupled ocean-atmosphere model, which is also not covered by the SMM.
She comments that a coupled model could provide longer-term forecasts
(currently, SMM forecasts are limited to 5 days). Sea surface
temperature anomalies are also important for forecasting extreme events
over the ocean and that this is a challenge for the SMM. She also
mentions the application of a CLP model which, in the context of the
products and services provided by the SMM, is important for forecasting
coastal and oceanic fog. She concludes by saying that if MONAN has some
of these highlighted aspects, it will be of great value for the
activities carried out by the MB.

Saulo Freitas thanks Flávia Pinheiro for her presentation and opens the
floor for discussions among the other members of the MONAN CC. Saulo
Freitas asks what the ideal grid spacing would be for ocean forecasts,
thinking about what is desirable and what is feasible. Flávia Pinheiro
responds by saying that, currently, it is not possible to increase the
resolution of the models used by the SMM, due to computational
limitations. She comments that, for the current situation, 4 km of
horizontal resolution is ideal, mainly due to the interpolation that is
done in the atmospheric forcings (the HYCOM model in use has a
horizontal resolution of approximately 4 km, while the atmospheric
forcing has a horizontal resolution of 7 km). This interpolation is not
ideal and the parity between the resolutions of the ocean model and the
atmospheric forcings is an important aspect to be considered. She
comments that one solution is to invest in the WRF model because it is a
more well-known and user-friendly model, in an attempt to increase its
resolution.

Saulo Freitas comments that one problem with using the WRF model is the
loss of model initialization. Saulo Freitas questions whether the
interaction between atmospheric and oceanic processes is feedback or
completely decoupled. Flávia Pinheiro responds that the interaction
between these processes is completely decoupled, but that despite this,
the WW3 model in use is well configured for the MB domain. For these
reasons, she comments on the need for a coupled model.

Pedro Dias questions what the computational support is like in terms of
PAD for SMM.

Flávia Pinheiro responds that there are 10 officers at the SMM and that
they are also responsible for the PAD part of the models used. She
comments that the accumulation of assignments related to modeling
activities is a major challenge (modeling, optimization and operational
implementation of the models). Among other aspects of the SMM's
challenges and activities, Flávia Pinheiro also comments on the demands
arising from the oil spill episode on the Brazilian coast that occurred
in 2019.

Pedro Peixoto asks about the agreement with DWD. Flávia Pinheiro
comments that the agreement with DWD (developer of the COSMO model) with
MB began in 1997 when the numerical forecast was established at MB. She
comments that the costs of the COSMO model (licensing and support) are
approximately 20 thousand euros per year. This is due to the fact that
the model is closed source.

## Agenda 4 - Next Actions

Saulo Freitas presents the next actions to be carried out within the
scope of the development of MONAN. As initial actions, he mentions the
implementation of the dynamic cores FV3, MPAS and Global-Eta at INPE and
at the National Laboratory of Scientific Computing (
[LNCC](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://sso.acesso.gov.br/login?client_id%3Dgovbr%26authorization_id%3D180046f9ec1)
), for the beginning of the exploration and evaluation activities. He
comments that this action will be carried out together with the
community to have ideas about what should be tested and for the exchange
of information and experiences among those involved so that everyone can
converge in the choice of the dynamic core to be used by MONAN. He
mentions that internal meetings are planned with the INPE Meteorology
postgraduate program (
[PGMET](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://www.inpe.br/posgraduacao/met/)
) and the Earth System Numerical Modeling Division (
[DIMNT](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://inpe.br/institucional/sobre_inpe/organograma/orgUnidade.php?siglaUnidade%3DDIMNT)
) to define their roles in the development of MONAN. He comments that
within the scope of PGMET a special line will be created focused on
specific subjects for research and development of the community model.

Saulo Freitas mentions the importance of continuing the meetings of the
subcommittees on the atmosphere, surface and boundary layer and PAD. He
also comments on the suggestion by the director of INPE regarding the
presentation of the MONAN project to the São Paulo Research Foundation (
[FAPESP](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://fapesp.br/)
) in 2022. Other actions include the presentation of the demands of the
Management and Operational Center of the Amazon Protection System (
[CENSIPAM](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.gov.br/defesa/pt-br/assuntos/censipam)
) and INMET for the community model, through their respective
representatives, Ivan Saraiva and Francisco Quixaba.

## Actions for the Next Meeting

* Presentation of the report of the meeting of the subcommittee on oceans and cryosphere.

??? example "Attachments"

    * [Slides Saulo Freitas](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://drive.google.com/file/d/1K3-5-gQQ1Nk6agdB-_NnpolTsFbfx3Mp/view?usp%3Dsharing)
    * [Minutes of the MONAN Scientific Committee Meeting - December 6, 2021](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://drive.google.com/file/d/19xStktNTxVpi7wR-hrj64i1wbS7w235W/view?usp%3Dsharing)
    * [Recording of the MONAN Scientific Committee Meeting - December 6, 2021](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://youtu.be/odVF6XhGUm8)
    * [Article Latinovic et al. (2017)](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.proquest.com/docview/1920221462?pq-origsite%3Dgscholar%26fromopenview%3Dtrue)
    * [Article by Peixoto and Barros (2013)](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://pedrosp.ime.usp.br/papers/PeixotoBarros2013.pdf)
    * [Article Messinger et al. (2012)](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://link.springer.com/article/10.1007/s00703-012-0182-z)

