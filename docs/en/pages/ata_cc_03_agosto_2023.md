
!!! warning "AI-Translated Page"

      This page was translated using artificial intelligence (AI). The content may contain inaccuracies or misinterpretations. For critical or official use, please consult the site [administrator](mailto:mcstu.inpe@gmail.com) to confirm the information.


# August 3, 2023

## MINUTES 001/2023 - Revision 002

![type:video](https://youtube.com/embed/pBdrKYZKR5Q)

Meeting of the Scientific Committee of the Ocean, Land Surface, and
Atmosphere Forecasting Model. At 2:00 p.m. on August 3, 2023,
representatives of
[INPE](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://portal.inmet.gov.br/)
(National Institute for Space Research),
[INMET](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://portal.inmet.gov.br/)
(National Institute of Meteorology),
[UFCG](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://portal.ufcg.edu.br/)
(Federal University of Campina Grande), USP (University of São Paulo),
[LNCC](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.gov.br/lncc/pt-br)
(National Laboratory for Scientific Computing),
[UFRJ](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://ufrj.br/)
(Federal University of Rio de Janeiro),
[UFMS](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.ufms.br/)
(Federal University of Mato Grosso do Sul),
[UFPA](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.ufpa.br/)
(Federal University of Pará),
[UFPel](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://portal.ufpel.edu.br/)
(Federal University of Pelotas),
[UECE](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.uece.br/)
(State University of Ceará),
[FAB](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.fab.mil.br/index.php)
(Brazilian Air Force),
[MB](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.marinha.mil.br/)
(Brazilian Navy),
[MCTI](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.gov.br/mcti/pt-br)
(Ministry of Science, Technology and Innovation), and
[SMN](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.smn.gob.ar/)
(National Meteorological Service of Argentina) met virtually. In order
to advance the work and discussions of the Scientific Committee (
[CC](https://monanadmin-github-io.translate.goog/monan_cc_docs/?_x_tr_sl=pt&_x_tr_tl=en&_x_tr_hl=pt-BR&_x_tr_pto=wapp)
) and the decision-making on the adoption of the
[MPAS](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://ncar.ucar.edu/what-we-offer/models/model-prediction-across-scales-mpas)
(Model for Prediction Across Scales) model as the atmospheric dynamic
core of
[MONAN](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://github.com/monanadmin)
(Model for Ocean-laNd-Atmosphere-predictioN). These minutes record the
memory of the meeting held and gather the information inserted in the
chat, such as links and other information relevant to the discussions
held. Following the opening of the meeting, led by the institutional
coordinators Saulo Freitas/INPE and Pedro Dias/USP, this document is
oriented according to the guidelines established by Saulo Freitas,
during his presentation.

At the beginning of the 9th Meeting of the MONAN Scientific Committee,
Saulo Freitas welcomed all participants and announced the items to be
discussed during the MONAN CC meeting. He highlighted and thanked Gilvan
Sampaio, Coordinator of the General Coordination of Earth Sciences
[(CGCT)](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.gov.br/inpe/pt-br/composicao/diretoria/coordenacao-geral-de-ciencias-da-terra-cgct)
of INPE, and Antonio Mendonça, representing MCTI, for their
participation. Saulo Freitas then announced that he would briefly
explain the agenda, announce the new members, and briefly retrospect the
actions taken to develop MONAN, including obtaining resources for the
program. Next, he would present the proposal to adopt the MPAS of
[NCAR](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://ncar.ucar.edu/)
(National Center for Atmospheric Research) as the basis for supporting
the dynamic core of the atmospheric component of MONAN; starting with
two presentations, one on the computational aspects by Luiz Flávio/INPE
and another on the evaluation of the physics aspects by Ariane
Frassoni/INPE. Once the presentations are complete, a general discussion
of the CC will be opened, aiming at the decision-making and confirmation
of the CC for the adoption of MPAS as the dynamic core of the
atmospheric component of MONAN. Saulo Freitas will also speak about the
planning of activities for the coming months. Finally, researcher Pedro
Peixoto/USP will announce the [Course on Finite Volume Methods for
Multiscale Global
Models](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.ime.usp.br/~pedrosp/modelagem-numerica-atmosfera/)
with a focus on MPAS, which he will teach to the community. We will then
discuss the details of what should be the first course within the scope
of MONAN for a solid understanding of MPAS.

## Agenda 1 - New Members and General Updates

Saulo Freitas greets and welcomes the new members of the MONAN CC: 1.
[Yanina García
Skabar](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://ri.conicet.gov.ar/author/20961)
, Director of Environmental Modeling and Remote Sensing Products of the
National Directorate of Science and Innovation in Products and Services
of the National Meteorological Service (SMN) of Argentina; 2. [Fabricio
Pereira
Härter](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/9865056179221557)
from UFPel, representing the universities of southern Brazil. Since
Otávio Acevedo is in the United States, it is important that Fabrício
Härter can assume this position; 3. Gilson de Paula e Silva as Executive
Secretary in the Executive Advisory Board of the MONAN Program. Saulo
Freitas thanks the participation of researchers [Rafael
Maroneze](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/5444644395117575)
from UFSM, as a guest and representing researcher Otávio Acevedo. Saulo
Freitas comments that the researchers recently published a scientific
article on a new parameterization of turbulence, something promising for
testing within the scope of MONAN. Regarding FUNCEME, it informs that
researchers Alexandre Araújo and Francisco Vasconcelos, who were unable
to participate in this meeting due to their agendas.

## Agenda 2 - Actions taken in search of resources for the MONAN project

Saulo Freitas summarizes the actions carried out within the scope of
MONAN. He emphasizes that the MONAN CC was created in 2021, with the
participation of several national institutions and that it now also
includes the participation of the SMN of Argentina. The intention is to
open up to other meteorological and research centers in South America
and Latin America, so that MONAN becomes a system for the Americas,
working in these regions. This is the ninth meeting of the CC, the
development of MONAN is in INPE's strategic planning and was recognized
as an institutional project of MCTI, with a budget and duration of 10
years. There was an internal reorganization of INPE with a focus on
MONAN for the development of numerical modeling to be the basis of the
new generation of numerical products. Since its creation, five internal
workshops have been held at the
[DIMNT](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://www3.cptec.inpe.br/dimnt/)
(Division of Numerical Modeling of the Earth System) of CGCT/INPE,
involving themes such as the atmosphere, oceans and cryosphere and data
assimilation, preparing INPE internally for MONAN. Since MONAN is an
institutional project of MCTI, in the current budget for 2023, R$5
million were requested, but only R$96,000.00 were approved. For this
reason, resources are very scarce, mainly to involve the entire national
community. What was proposed is that in the next PPA (Multi-Annual Plan)
in 2024, R$6 million will be allocated and from then on, R$6 million
annually, and the commitment is that 50% of MONAN's budget will be
allocated to the national community through
[CNPq](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.gov.br/cnpq/pt-br)
(National Council for Scientific and Technological Development) notices.

Saulo Freitas also comments on the [RISC
Project](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.gov.br/inpe/pt-br/assuntos/anuncio-de-oportunidades/abertos/repositorio-de-arquivos/rfi_0022022_supercomputador_risc.pdf)
(Renewal of the Supercomputing Infrastructure) and reports that there
are difficulties in accessing financial resources to purchase the new
supercomputer, but that, despite this, the process is underway. Saulo
Freitas also comments on the rejection of the proposal to establish
MONAN as an INCT (National Institute of Science and Technology). He adds
that there were also several actions with CNPq, MCTI and
[CAPES](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.gov.br/capes/pt-br)
(Coordination for the Improvement of Higher Education Personnel) to
obtain support and that all this search for resources culminated in a
meeting with
[SEPPE](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.gov.br/mcti/pt-br/composicao/seppe)
(Secretariat of Policies and Strategic Programs) of MCTI. This meeting,
held on June 23, 2023, was attended by researchers [Osvaldo Luiz Leal de
Moraes](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/0593135962205202)
, director of the [Department of Climate and Sustainability of
MCTI](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/cgcl)
, [Ricardo Magnus Osorio
Galvão](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/1443260585180322)
, president of CNPq, [Olival Freire
Junior](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/5534156006634736)
, scientific director of CNPq, [Clezio Marcos de
Nardin](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/8030262077949409)
, director of INPE, [Gilvan Sampaio de
Oliveira](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/0236607123089481)
, coordinator of CGCT/INPE, [Saulo Ribeiro de
Freitas,](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/9873289111461387)
coordinator of DIMNT-CGCT/INPE and researchers [Pedro da Silva
Dias](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/9273702863744424)
, [Júlia Clarinda Paiva
Cohen](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/0293299378753887)
, [Fabrício Pereira
Härter](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/9865056179221557)
, [Enio Pereira
Souza](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/7752212981363912)
, [Márcia Akemi
Yamasoe](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/7363881469488210)
, [Vinícius Buscioli
Capistrano](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/5095346131063174)
, [Karla Maria Longo de
Freitas](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/9945965136609657)
and the administrative advisor of MONAN, Gilson de Paula e Silva. At
this meeting, to which all representatives of the academic community
from the five regions of the country were invited, a detailed
presentation of the MONAN project was made and the demand for the model
project. At this meeting, a new action was proposed for the PPA
2024-2027: a proposal to create a computational platform for research
and innovation in weather, climate and environment for Brazil, based on
MONAN, in addition to the computational structure designed by CENAPAD
<sup><a
href="https://monanadmin-github-io.translate.goog/monan_cc_docs/ata_cc_03_agosto_2023/?_x_tr_sl=pt&amp;_x_tr_tl=en&amp;_x_tr_hl=pt-BR&amp;_x_tr_pto=wapp#fn:1"
class="footnote-ref">1</a></sup>(National Center for High Performance
Processing) and the LNCC, as high performance processing centers. A
supercomputing service platform for the national community to access the
high performance computing service so that they can effectively
participate in the development, applications and use of MONAN. This
proposal aligns very well with the basic guidelines of the new
government in the PPA, with a reduction of regional asymmetries, a focus
on the implementation of multi-user systems, training of human resources
and the application of science and technology for sustainability in
environmental issues. One of the ideas is to create a new CENAPAD, but
also to instrument and modernize the CENAPADs that currently exist,
prioritizing the North and Northeast regions. In addition, requests were
made at the meeting for scientific initiation programs, master's
degrees, doctorates, post-doctorate scholarships abroad (for the
improvement of young researchers) and resources for a scientific
training plan, in addition to infrastructure and computer equipment for
members.

Next, Saulo Freitas invites Gilvan Sampaio to talk about the PPA. Gilvan
Sampaio highlights that attempts were made to negotiate a new action in
the PPA. Although well received by the MCTI, when the proposal arrived
at the [Ministry of
Planning](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.gov.br/economia/pt-br/acesso-a-informacao/institucional/planejamento)
, there were several questions and the perspective at this time is that
there would be no increase in the budget with a new action, that this
would end up sharing the existing resource with a possible new action.
Since there is already a budget for MONAN in force in the LOA (Annual
Budget Law) 2023, it would be better to request an increase in the
budget in the PLOA (Annual Budget Bill) 2024, and work from now until
2024. Gilvan Sampaio adds that it is necessary to wait for the amount of
the PLOA 2024 to know whether it was contemplated or not. Additionally,
Saulo Freitas comments on the importance of this action with MCTI, to
achieve this budget and make the previously mentioned platform viable.
Saulo Freitas adds that it is important to make the platform for
accessing computing resources viable to allow the country's universities
to contribute to the development of MONAN.

## Agenda 3 - Proposal to adopt MPAS/NCAR as the basis for the data structure and dynamics of the atmospheric component of MONAN

Saulo Freitas announces the presentations to be made within this agenda
and invites Luiz Flávio to present the report on the evaluation of the
candidates on the computational aspects of the dynamic cores tested.
Luiz Flávio begins his presentation by thanking the team members who
worked on the evaluations. He mentions the technologists [Denis
Magalhães de Almeida
Eiras](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/5730926226268088)
, [Eduardo Georges
Khamis](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/8750542728494463)
, [Carlos Renato de
Souza](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/2349556260957146)
, [João Messias da
Silva](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/0185098295394379)
from the
[GCC](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://github.com/GCC-DIMNT-CPTEC)
(Scientific Computing Group) of INPE, as well as the collaborators of
LNCC, [Roberto P.
Souto](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/1471432563506193)
and [Eduardo Lucio Mendes
Garcia](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/2825302557451331)
.

### Assessment of Software Quality Requirements for Dynamic Kernels (GCC)

Luiz Flávio explains that the focus is on software quality requirements,
which are essential to ensure the software's survival. He adds that he
usually uses Brazil's
[SCD-1](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://www.inpe.br/scd1/site_scd/scd1/osatelite.htm)
(Data Collection Satellite-1) as a reference, which broke the record as
the oldest satellite in space, with 30 years of service. He comments
that this was possible due to the concern with software quality, in
which methods, processes, techniques and standards were used to
guarantee quality and quality controls. Luiz Flávio adds that this is
the care they are taking in working on MONAN. Luiz Flávio explains that
the first step to this was to determine a normative technical document.
The version presented is for 2023, but there is a newer version that is
receiving updates due to the collaboration agreement with
[NOAA](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.noaa.gov/)
(National Oceanic and Atmospheric Administration) and NCAR. This
document contains the coding standard to be used in MONAN to improve
software quality, as well as how the code should be documented
internally and what its internal structure should be. It adds that, with
these standards, it was possible to evaluate each of the dynamic cores
tested and determine which one best fits the [MONAN software
requirements](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://github.com/monanadmin/monan/blob/main/doc/criterios_de_escolha_do_core_dinamico_para_o_monan.md)
. It comments that all dynamic cores still have developments to be
carried out, but that despite this, it is necessary to know which one is
most compatible with the current state of the art in software
development and quality.

In the context of software quality, Luiz Flávio mentions the main
principles of
[ISO9126](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://pt.wikipedia.org/wiki/ISO/IEC_9126)
, which deals with the internal and external quality of software, as
well as aspects related to functionality, reliability, usability,
efficiency, performance, maintainability and portability of software. He
comments that the GCC focused on the aspects of performance, efficiency,
model behavior in relation to time (whether it is fast or slow),
computational cost, whether it complies with current software efficiency
standards, maintainability (whether it is easy to understand and
modify), whether it is stable and whether it complies with our standard.
Regarding portability, he mentions that there are many machines with
different processors and compilers, and that it is known that when
migrating from one machine to another, in general, it is necessary to
adapt the software to the new machine. He adds that this is a common
problem that will continue to occur, because machines evolve very
quickly. The DIMNT
[GAM](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://github.com/GAM-DIMNT-CPTEC)
(Model Evaluation Group), led by Ariane Frassoni, was responsible for
analyzing the functionality, reliability and usability aspects of the
model.

Regarding the choice of the MONAN dynamic core, considering the software
quality criteria and non-functional requirements, Luiz Flávio reports
that free and open source tools were chosen for testing the dynamic
cores. Luiz Flávio adds that they chose NCAR's MPAS, which most people
are familiar with and which has the possibility of regionalization. He
comments that the
[GEF](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://bdtd.ibict.br/vufind/Record/INPE_6222c92138c160b4406374440fe14b9c)
(Global Eta Framework) models, based on the CPTEC [Eta model, and
the](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://www3.cptec.inpe.br/eta/)
[FV3](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.gfdl.noaa.gov/fv3/)
, currently adopted by NOAA, work with a grid in the form of a cubic
sphere and can also be regionalized. He comments that, around 2014,
these three models had been evaluated by NOAA to choose its new dynamic
core. Therefore, it was decided to focus on the dynamic cores of these
three models, disregarding the physical parameterizations and evaluating
how the dynamic cores behave in relation to software quality.

Regarding the way the tests and evaluations were conducted, Luiz Flávio
mentions the difficulties faced in relation to the infrastructure. He
comments that, unfortunately, the CPTEC supercomputer is operating with
limitations, but that it should soon be raised again through a project.
He mentions that during the evaluations, it was not possible to use all
nodes of the supercomputer due to its use by CPTEC's operations. He adds
that the Egeon cluster (a Dell machine acquired by CPTEC in 2022) was
used, which has 33 nodes with two [AMD
Epyc](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.amd.com/pt/processors/epyc-server-cpu-family)
CPUs each. He also mentions the use of the Minerva cluster, which was
provided by Dell for testing (we are publicly grateful to Dell for
providing the machine for testing). This machine has 64 nodes, very
similar to these nodes in CPTEC's Egeon cluster. He adds that they also
used the Rattler cluster, which has 7 nodes with GPU (each node with 2
AMD Epyc CPUs and 4 NVIDIA A100 GPUs). Luiz Flávio mentions that despite
the 7 available nodes, they managed to use more nodes.

Luiz Flávio continues his presentation by presenting the results of the
evaluations performed. In the maintainability evaluation, he mentions
that aspects such as analyzability were examined to identify the ease of
diagnosing problems and the ability to understand and identify failures
in the software, in addition to the ease of modifying codes. He
highlighted the importance of comprehensive documentation, in order to
allow a clear understanding of the structures of loops and functions
(modifiability). He also mentions that reusability was analyzed in terms
of the possibility of easily reusing the software and its stability, in
which stability is not restricted to the model not failing, but rather
the ability of changes not to cause negative side effects. He adds that
characteristics that can cause serious side effects were identified. In
testability, he mentions that the ability to isolate the software for
testing was considered, using metrics such as McCabe's cyclomatic
complexity and software metrics from
[RADC](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://en.wikipedia.org/wiki/Rome_Laboratory)
(Rome Air Development Center). Open tools were used, adapted to meet the
needs of GCC evaluation and with the details present in the document in
the
[monanadmin](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://github.com/monanadmin)
<sup><a
href="https://monanadmin-github-io.translate.goog/monan_cc_docs/ata_cc_03_agosto_2023/?_x_tr_sl=pt&amp;_x_tr_tl=en&amp;_x_tr_hl=pt-BR&amp;_x_tr_pto=wapp#fn:2"
class="footnote-ref">2</a></sup> GitHub repository .

Luiz Flávio comments that the quality of the software was evaluated, and
the results are detailed in the document to be published in the INPE
Library. He mentions that the three models were analyzed in relation to
the maintainability subcharacteristics. The GEF model, due to lack of
resources, had the worst performance and was abandoned, focusing on the
other two. The comparison between the FV3 and MPAS models revealed that
MPAS presented advantages in terms of analyzability and stability.
Usability was similar between the two, with a slight advantage for FV3
in terms of stability in the metrics. MPAS demonstrated a slight
advantage in testability. Regarding portability, interdependence issues
were verified in different architectures, evaluating adaptability and
installation capacity, considering portability reliability. Luiz Flávio
adds that AMD and Intel processors were evaluated in relation to their
functional capabilities, granting points for each compatible processor.
Software with fewer library packages was prioritized, since more
packages complicate installation. The need for compatibility with
[MPI](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://pt.wikipedia.org/wiki/Message_Passing_Interface)
(Massive Parsing Interface),
[OpenMP](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.open-mpi.org/)
and
[OpenACC](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.openacc.org/)
, as well as NVIDIA and Intel compilers, was highlighted, scoring for
each supported library and compiler. The final results indicated that
MPAS had the best overall score of 8.2 points, with compatibility with
NVIDIA compiler and fewer packages. FV3 had an overall score of 4.4
points, facing challenges with more libraries and lack of NVIDIA
compiler support.

The scalability of the models was evaluated, observing the increase in
nodes and the behavior of the performance curves. Luiz Flávio comments
that the efficiency of MPAS increased above 100% as the nodes increased,
with a superlinear curve, possibly related to memory usage. He comments
that the speed up was successful with the use of GPU, and the efficiency
of MPAS fell below 30% with a greater number of nodes. He adds that the
comparative performance highlighted that MPAS presented inferior
performance to FV3 with the use of CPUs, but FV3 with GPU had a positive
extrapolation to 150 seconds with 64 nodes. It was mentioned that the
absence of GPU results for FV3 was due to the lack of access to NVIDIA
data. The normalization of the maintainability, portability and
performance criteria was conducted, highlighting the superiority of MPAS
in maintainability (152 points) and portability (8.4 points) compared to
FV3 (132 points and 4.4 points, respectively). In terms of performance,
MPAS outperformed FV3 using CPUs, and FV3 using GPUs had 90% of the MPAS
performance. The following figure shows a comparison of the performance
of the FV3 and MPAS dynamic cores in the Minerva cluster.

<figure>
<p><a
href="https://monanadmin-github-io.translate.goog/monan_cc_docs/figs/compara.png?_x_tr_sl=pt&amp;_x_tr_tl=en&amp;_x_tr_hl=pt-BR&amp;_x_tr_pto=wapp"
class="glightbox" data-type="image" data-width="auto" data-height="auto"
data-desc-position="bottom"><img
src="https://monanadmin.github.io/monan_cc_docs/figs/compara.png"
alt="SHiELD and MPAS Scorecard" /></a></p>
<figcaption>Performance comparison of FV3 and MPAS dynamic cores in
Minerva cluster.</figcaption>
</figure>

Luiz Flávio mentions that the detailed numbers are not present in the
submitted report, but that they will be available in the final report to
be published in the INPE library. He comments that no special weight was
assigned to specific criteria and that the conclusions were based on
analyses of code quality, maintainability, portability and performance.
The following table summarizes the final normalized scores of the FV3
and MPAS dynamic cores (the explanation of the values ​​in the table below
can be found at
[31'56"](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://youtu.be/pBdrKYZKR5Q?t%3D1916)
of the CC meeting record).

<table>
<thead>
<tr class="header">
<th>Criterion</th>
<th>MPAS Score (Best = 1.0)</th>
<th>FV3 Score (Best = 1.0)</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Maintainability</td>
<td>152 (1.0)</td>
<td>132 (0.9)</td>
</tr>
<tr class="even">
<td>Portability</td>
<td>8.4 (1.0)</td>
<td>4.4 (0.5)</td>
</tr>
<tr class="odd">
<td>PEE (Performance, Scalability and Efficiency)</td>
<td><strong>239</strong> / <em>150</em> ( <strong>CPU=0.7</strong> )(
<em>GPU=1.0</em> )</td>
<td><strong>166</strong> ( <strong>CPU=1.0</strong> )(GPU=0.9)</td>
</tr>
<tr class="even">
<td><strong>Final Score (Maximum of 3 points = Grade 10)</strong></td>
<td>CPU/CPU - Note 9, GPU/CPU - Note 10</td>
<td>CPU/CPU - Rating 8, GPU/CPU - Rating 7.6</td>
</tr>
</tbody>
</table>

After Luiz Flávio's presentation, Saulo Freitas opens the floor for some
questions from the participants.

Haroldo Fraga asks Luiz Flávio if the performance test provides a more
detailed report on which routines require more computing time. Haroldo
Fraga comments that this is important information that allows us to
understand where the bottlenecks in the code are. Luis Flávio answers
that they are not. He comments that there are results on the
partitioning of the values ​​of each routine in the dynamics that were
evaluated, but that the physical part of the models was not included in
this discussion. He adds that GCC has already been working to determine
whether it finds specific bottlenecks within the dynamics of the models
tested. He also comments that in both codes there is no one responsible
for the bottlenecks, there is no routine that increases the processing
time of the dynamics, the time is more or less evenly distributed, that
is, all the routines consume a lot or equally. Luiz Flávio explains
that, for those who already work with HPC (High Performance Computing),
it is easy to find, attack and resolve when there is a responsible
routine. When there is uniform performance, it means that it is
necessary to attack everything, to improve overall performance. However,
this is work that GCC will have to do later, when it is already working
with MONAN and no longer with MPAS or FV3. Haroldo Fraga comments that
sometimes it is not possible to have just one routine, but two or three
routines that can impact performance. Luiz Flávio agrees and comments
that there is other information that is not in the report, but that is
in the documents <sup><a
href="https://monanadmin-github-io.translate.goog/monan_cc_docs/ata_cc_03_agosto_2023/?_x_tr_sl=pt&amp;_x_tr_tl=en&amp;_x_tr_hl=pt-BR&amp;_x_tr_pto=wapp#fn:2"
class="footnote-ref">2</a></sup> available in the repository.

Fabrício Härter asks about the installation of MPAS, if there are any
difficulties with the
[PIO](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www2.cesm.ucar.edu/models/cesm1.2/cesm/doc/usersguide/x2147.html)
(Parallel I/O) library. Luiz Flávio says yes and that the way to install
MPAS has been documented. He adds that, if MPAS is chosen as the dynamic
core of the atmospheric component of MONAN, the new version of MPAS no
longer needs PIO, since
[SMIOL](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://github.com/MPAS-Dev/SMIOL)
(Simple MPAS I/O Layer) is being used. Pedro Peixoto says that he has
been working on the
[MPAS-BR](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://github.com/pedrospeixoto/MPAS-BR)
repository , which is more for scientific developments, but where a
series of MPAS installation scripts can be found.

Saulo Freitas hands over to Ariane Frassoni, who will talk about the
meteorological and physics aspects of the dynamic cores tested and
evaluated.

### Assessment of Software Functionality Requirements for Dynamic Cores (GAM)

Ariane Frassoni begins her presentation by thanking everyone for the
opportunity to participate in the MONAN CC meeting. She mentions that
she will present the results that GAM generated, focusing on the
functionality of the dynamic cores tested. She mentions that her group
is composed of her and collaborators [Julio Pablo Reyes
Fernandez](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/0873439630646612)
, [Marcelo Barbio
Rosa](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/1550003350972703)
, [Bárbara Alessandra Gonçalves Pinheiro
Yamada](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/0664846779572544)
, as well as members of other DIMNT groups: [Carlos Frederico
Bastarz](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/2410960909883784)
and [João Gerd Zell de
Mattos](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/4563659436339486)
from the Data Assimilation group, and also [Jose Roberto
Rozante](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/3781543923591839)
from DIPTC (Weather and Climate Forecasting Division), who has a lot of
experience in evaluating precipitation. She takes the opportunity to
thank the GCC, especially [Denis Magalhães de Almeida
Eiras,](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://lattes.cnpq.br/5730926226268088)
who helped her to better understand software quality assessment metrics.

Ariane Frassoni comments that the main objective was to analyze the
global models evaluated in terms of functionality. She mentions the
interest in how these models meet MONAN's needs, considering external
users and colleagues who will operate the models on a daily basis.

Regarding the aspects related to functionality, Ariane Frassoni mentions
suitability, interoperability, accuracy and ease of use. She comments
that the dynamic cores FV3,
[SHiELD](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.gfdl.noaa.gov/shield/)
(System for High-resolution modeling for Earth-to-Local Domains), MPAS
and GEF were evaluated. She adds that they took into consideration how
MONAN would be applied within the Earth system approach, to meet the
needs of various institutions at various time and space scales. In this
sense, she comments that MONAN will involve several academic and
policy-making institutions, and its products will be used for a variety
of environmental services at different scales. Therefore, the models
must meet a wide range of needs, from local to regional scales and state
meteorological centers. The sub-characteristics related to functionality
aspects are the suitability sub-characteristics, whether this software
is suitable for the proposed objectives, whether it is interoperable,
whether it communicates with other components necessary for the work to
be carried out, the accuracy that is evaluated in statistical and
meteorological terms and also the ease of use, which falls within
usability.

It is also understood that MONAN will have as actors several public and
private academic institutions, public policy makers in science and
meteorology and the numerical products will be used based on the
provision of a series of environmental services, on different time and
space scales. Therefore, they need to meet needs on different scales,
not only local ones, but also on the regional scale and on the local
scale, aiming at the use of state meteorology centers.

In terms of operability, in this approach to the Earth system, the
dynamic core of MONAN needs to be able to receive other components, such
as oceans, data assimilation, surface, among others. This
sub-characteristic is important to identify whether the evaluated models
consider this interoperability capability.

In terms of usability, it is a more subjective aspect, but it takes into
account the software's ability to enable the user to understand how it
works. It mentions the question that Fabrício Härter asked about some
challenges in installing MPAS. Whether this software is appropriate, how
it can be used in the various activities of this user and whether it is
easy to understand. Whether the user can understand what the software
proposes, whether it can be operated, whether it complies with some
pre-established standards. And in addition to these issues mentioned
here, we include usability and the capacity for collaboration, which is
the ease of communicating, of contributing to other centers. All of this
involves this model, so we focused on this issue of having the
possibility of having greater interaction between the groups that are
developers of this software.

In terms of accuracy, the focus was on the statistical evaluation
measure of the numerical experiments performed. Regarding the
experiments, Ariane Frassoni mentions that they comprise short-term
scales, at this time, for the initial objective of MONAN, it is the
scale of numerical weather prediction. These models with approximately
15 km of horizontal resolution and the vertical levels that were
available, with a forecast period of up to 10 days, were considered. The
group proposed to carry out evaluations of up to 10 days of forecast
starting at 00 UTC and the initial conditions used came from the
[Era5](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.ecmwf.int/en/forecasts/dataset/ecmwf-reanalysis-v5)
reanalysis , for a one-year evaluation period from July 2021 to June
2022. Within this period, due to the available computational resources,
it was necessary to reduce the number of cases evaluated and some days
from this period were selected. Every five days the model was
initialized again to compose 64 experiment cases. The temporal
resolution adopted was 6 hours and the spatial resolution was
interpolated to 0.25 degrees of latitude and longitude, this only so
that it would be possible to directly compare with the Era5 reanalysis.
To visualize the results, some essential variables were post-processed
to meet the accuracy analysis objectives, considering some aspects.

In terms of the physical parameterizations used, the models' default
options were adopted. Ariane Frassoni clarifies that no sensitivity
tests were performed, since the objective was not to analyze the physics
of the models, but to understand how the models behave with their
default options, in statistical and meteorological terms. Furthermore,
she adds, the physics should be developed within CPTEC in collaboration
with several partners. Next, Ariane Frassoni lists the models' default
physics options for radiation, continental surface, and surface
processes. For the SHiELD model, which is a simplified model that
calculates surface-ocean and atmospheric fluxes, cloud microphysics,
shallow and deep convection, gravity waves, planetary boundary layer,
and aerosol chemistry, although both models (MPAS and SHiELD) have
conditions executed with these two components (chemistry and aerosols),
they were turned off.

Regarding the recommendations of the
[WMO](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://worldweather.wmo.int/pt/home.html)
(World Meteorological Organization), Ariane Frassoni explains that there
are certain metrics and spatial areas for assessing forecasts of
continuous variables and dichotomous forecasts, which are binary
forecasts (yes or no, occurs or does not occur). She adds that all
aspects recommended by the WMO in the [WMO Integrated Processing and
Prediction
System](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://community.wmo.int/en/activity-areas/wmo-integrated-processing-and-prediction-system-wipps)
(WIPPS) manuals and other manuals also made available by the WMO were
considered.

The reference data used in the evaluations were Era5 for meteorological
variables, except for precipitation, for which the
[GPM](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://gpm.nasa.gov/missions/GPM)
(Global Precipitation Measurement Mission) was considered for the global
domain. For the South American domain,
[MERGE](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=http://ftp.cptec.inpe.br/modelos/tempo/MERGE/rozante_et.al.2010.pdf)
<sup><a
href="https://monanadmin-github-io.translate.goog/monan_cc_docs/ata_cc_03_agosto_2023/?_x_tr_sl=pt&amp;_x_tr_tl=en&amp;_x_tr_hl=pt-BR&amp;_x_tr_pto=wapp#fn:3"
class="footnote-ref">3</a></sup> was considered , which is a product
developed at CPTEC and has been continuously improved.

Regarding the initialization of the models, they were initialized at 00
UTC, but in order to be able to evaluate the precipitation considering
mainly the MERGE, the precipitation forecasts were accumulated from 12
hours of integration, so that our 24-hour forecasts presented are the
36-hour forecasts, the 48-hour forecasts are the 60-hour forecasts and
so on.

To assess the physical parameterizations, evaluation metrics recommended
by the WMO were also used, such as anomaly correlation, bias, and root
mean square error for continuous variables. For simplicity, she
explains, a performance diagram will be presented, which summarizes some
of these dichotomous indices. In addition to these metrics known and
recommended by the WMO, Ariane Frassoni explains that the [Mahalanobis
distance](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://en.wikipedia.org/wiki/Mahalanobis_distance)
, which was implemented by Marcelo Barbio, was also calculated. The
Mahalanobis distance consists of a multivariate metric that considers
the difference between a series of variables. Ariane Frassoni explains
that this metric was used to provide an overview of how the errors of
these two models behave.

Regarding the results obtained, the first metric considered involves the
aspects of some subcharacteristics. It was assessed whether the dynamic
core of the models met the needs of the MONAN project. To this end, she
explains, it was considered that this model would need to meet the
global and regional scales and, therefore, it is necessary for the
dynamic core to be non-hydrostatic. She adds that, as explained by Luiz
Flávio, these items were scored and three points were attributed to both
SHiELD and MPAS and one point to GEF, which in this case was considered
inappropriate for the intended applications for MONAN. As a result, the
GEF model was no longer evaluated in the other items in terms of
accuracy, mainly due to the computing time required. In addition, Ariane
Frassoni mentions the technical manuals of the models and whether they
are available and easily accessible. Therefore, she continues, if the
technical manual of the model were available and easily accessible, it
would receive 3 points; If it were not available, not easily accessible
or usable, or both, it would receive 1 point. Thus, in terms of
comparison, MPAS received 3 points and SHiELD only 1 point, due to the
difficulty in finding information to understand aspects of the model,
such as installation and post-processing. In addition to what was
mentioned, Ariane Frassoni also mentions other relevant aspects such as
understanding the use of the model and numerical stability. In terms of
numerical stability, she comments that both models obtained maximum
scores and did not have any type of instability over the integration
time. She adds that, basically, the models considered have very similar
applications and application possibilities, with variations in one or
another application (e.g., ocean waves, urban climate, air quality,
agriculture, weather forecasting) and their final scores are very close.
During her presentation, Ariane Frassoni explains that not all the
metrics evaluated were shown, but that all the results of these metrics
will be available in the final report that will be published in the INPE
library.

Continuing her presentation, Ariane Frassoni presents the results of the
forecasts of the models considered. Starting with the average intensity
of precipitation over 24 and 120 hours over the global domain, in
mm/day, compared with the GPM and MERGE data. In general terms, compared
with the GPM, the models represent the spatial distribution of
precipitation satisfactorily, where large-scale aspects of precipitation
can be identified, such as the intertropical convergence zones, the
convergence zones of the South Pacific and the Atlantic Ocean. She also
adds that areas of precipitation associated with the passage of frontal
systems can be identified, which is considered a general large-scale
aspect well represented. Observing the Tropics region in more detail, it
is clear that the SHiELD model tends to overestimate precipitation while
the MPAS model tends to underestimate it. These opposite characteristics
are reflected numerically in the comparison of the MPAS and SHiELD
averages with the MERGE average. In the explanation, Ariane Frassoni
explains that MPAS has a precipitation of 3.1%, corresponding to a
difference in relation to MERGE of -3.2%, while SHiELD presents a
difference in the average precipitation intensity of approximately 3.5%.
Still in terms of the percentage difference, she explains, the highest
value found was 8.5% of the SHiELD model in relation to MERGE (in the
average of the 24-hour forecast). For 120 hours of integration, it was
noted that MPAS tends to overestimate the precipitation intensity for
longer forecast periods, with a percentage difference of 3.2%, while
SHiELD increases this difference to 15%. Comparing all integration
periods, it was noted that the MPAS model - in comparison with the
SHiELD model, tends to be more consistent in terms of the representation
of the average precipitation intensity per day. In this sense, the
SHiELD model tends to increase the average precipitation over the
integration time.

Regarding the dichotomous forecast indexes in terms of performance
diagrams, Bias and Frequency Bias are shown, showing the frequency of
precipitation occurrence versus the probability of events occurring.
Other metrics are also presented, such as POD (Probability of
Detection), SR (Success Ratio), CSI (Critical Success Index), among
others. She comments that the evaluation of these indexes was made on
the global domain, but also on areas of South America, where MERGE data
were used. Ariane Frassoni comments that the areas of South America
chosen for the evaluations are based on the work of Figueroa et al.
(2016) <sup><a
href="https://monanadmin-github-io.translate.goog/monan_cc_docs/ata_cc_03_agosto_2023/?_x_tr_sl=pt&amp;_x_tr_tl=en&amp;_x_tr_hl=pt-BR&amp;_x_tr_pto=wapp#fn:4"
class="footnote-ref">4</a></sup> . During the presentation, Ariane
Frassoni points out the areas of interest: area B1, corresponding to
part of Argentina and the southern region of Brazil, Paraguay and
Uruguay; area B2 to the east of Brazil, area B3 corresponds to part of
the south-central region and part of the central region of Bolivia,
Paraguay, northern Paraguay; area B4 corresponding to most of the
Northeast; and area B5, corresponding to most of the Amazon region.

Since there are so many results, Ariane Frassoni presents only a few.
She shows the 36-hour forecasts (which are actually 24-hour forecasts)
for all areas B1, B2, B3, B4 and B5 and the precipitation thresholds,
with circles from smallest to largest, each representing a precipitation
threshold ranging from 0.5 to 50 mm. The SHiELD model is represented in
black and the MPAS model in red. In general, the MPAS tends to
underestimate precipitation for some thresholds, while the MPAS either
overestimates or underestimates, depending on the precipitation
thresholds. For example, for region B1, southern Brazil and northeastern
Argentina, the MPAS performs better up to 20 mm and has a bias close to
1, while the SHiELD bias in this region indicates an underestimation of
precipitation for these thresholds of 2 to 20 mm. In terms of rare
events, for 50 mm forecasts, SHiELD presents a greater bias than MPAS.
In this sense, for area B1, the tendency is for the SHiELD model to
present a superior performance related to the probability of detection.

For the other areas, for example, for area B5 (Amazon), there is a
greater dispersion of these thresholds. There is a tendency for
overestimations, because there are lower and medium thresholds and for
higher thresholds beyond 5 mm, the bias is closer to 1. Ariane Frassoni
highlights that there is a greater probability of detecting SHIELD
compared to MPAS, but on the other hand there is an overestimation of
SHIELD compared to MPAS over the region.

For precipitation up to 10 mm (global domain), the bias remains close to
1 throughout the integration time for MPAS, while the bias increases for
SHiELD. The MPAS POD has a positive sign compared to SHiELD, despite the
10 mm threshold being evaluated in this case. On the other hand, the SR,
which is the probability of the observed event given that it was
predicted, is higher for MPAS and lower for SHiELD. The CSI is also a
good indicator for these precipitation thresholds, although it is not a
good indicator for higher precipitation thresholds and rare events. In
this case, the MPAS dominates for lower precipitation thresholds.

For precipitation greater than 35 mm, the behavior of the models
changes. Considering that the POD is a good indicator for rare events,
it was found that SHiELD has a better performance for these rare events,
such as more intense precipitation. In terms of bias, the MPAS model
starts to underestimate precipitation from this threshold, while the
SHiELD model also underestimates it.

In general terms, what was found is a slightly superior performance of
SHiELD compared to MPAS. The following figure summarizes the results of
this evaluation.

<figure>
<p><a
href="https://monanadmin-github-io.translate.goog/monan_cc_docs/figs/cards.png?_x_tr_sl=pt&amp;_x_tr_tl=en&amp;_x_tr_hl=pt-BR&amp;_x_tr_pto=wapp"
class="glightbox" data-type="image" data-width="auto" data-height="auto"
data-desc-position="bottom"><img
src="https://monanadmin.github.io/monan_cc_docs/figs/cards.png"
alt="SHiELD and MPAS Scorecard" /></a></p>
<figcaption>Scorecard with summary of BIAS, POD, SR and CSI statistics
for precipitation up to 10 and 35 mm, for MPAS and SHiELD models. Blue
(red) indicates better (worse) performance; up (down) arrow indicates
increase (decrease) in relation to the lower threshold.</figcaption>
</figure>

In terms of the Mahalanobis distance, the wind and temperature variables
were considered along the atmospheric column for the 48-hour forecasts
of the MPAS and SHiELD models. The periods considered were summer,
December, January and February, and winter, June, July and August.
Ariane Frassoni explains that, for the Mahalanobis distances, the
greater the distance, the greater the gap between the forecast and the
observation (in this case, the reference is the Era5 reanalysis).
Therefore, the Mahalanobis distance indicates better performance when
the predominant color in the graphs is blue, and the smaller the
distance, the better.

For the 48-hour forecast period, the distances are smaller in the summer
period, being more predominant in the central region of Brazil near the
region where the Convergence Zone occurs and in the south of South
America, for both models. For the winter, a similar pattern also occurs,
but with some differences. For the initial forecast periods, the
distance is smaller, while for longer forecast periods, the distance
tends to increase. Observing the most sensitive regions, for example,
the Andes, comparing summer with winter, the MPAS shows a greater
distance in this region. Ariane Frassoni comments that this was one of
the factors that drew attention and that it had already been highlighted
in an internal meeting of the DIMNT and that it is possibly associated
with the vertical coordinate of the model. Ariane Frassoni highlights
that this is a sensitive point that should be considered by the MONAN CC
and that it is important to invest in the evaluation and improvement of
the vertical coordinate of the model. Regarding this part, he concludes
by saying that both models tend to present greater distance values ​​over
the Andes region, with MPAS being the model that presents the greatest
values. For the 120-hour forecast period, there is a tendency for these
distances to present greater values, with greater variability in the
southern region of South America, while there is less variability in the
Tropical region and these differences increase over the Andes region.

Ariane Frassoni lists some of the advantages and limitations of the
models evaluated. She comments that the SHiELD model has the advantage
of being the operational model of the
[NCEP](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.weather.gov/ncep/)
(National Center for Environmental Predictions), with Lagrangian
vertical coordinates. She mentions that the MPAS model is also
operational, but in a private company, which has good support from NCAR,
which, over the course of the work, was proven by NCAR's support in
understanding some processes. Another advantage of the MPAS model, as
mentioned by Luiz Flávio, is the use of GPUs for its processing, a
fundamental point, especially considering the current scenario of
evolution of machines and supercomputers and the trend of increasing use
of GPUs. Regarding the disadvantages, she comments that SHiELD does not
have good support and documentation, mentions the deficiencies found
with the vertical coordinate of the MPAS model and that both models are
limited in terms of post-processing options.

Ariane Frassoni mentions that the correlations of anomalies in the
models were also verified. She comments that both models present, on
average, 8 days of useful forecast. In addition, she comments that the
differences in the precipitation fields of the models may be associated
with the physical parameterizations tested. Regarding the errors in the
topographies, they comment that this needs to be further investigated.
She adds that it is also necessary to complement the study with a
significance calculation, to ascertain whether the differences - mainly
in the performance diagrams - are statistically significant.

Ariane Frassoni ends her presentation by informing that a complete
report will be published in the INPE library and that it will be made
available to the MONAN CC.

### Discussion on the Selection of the MONAN Dynamic Core

After the presentations by Luiz Flávio and Ariane Frassoni, Saulo
Freitas begins discussions with the members of the MONAN CC to define
which dynamic nucleus will be adopted for the atmospheric component of
MONAN. In the recording of the MONAN CC meeting, the discussions begin
at
[1h18'15"](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://youtu.be/pBdrKYZKR5Q?t%3D4695)
. Saulo Freitas expresses his opinion and says that there is a clear
direction towards the MPAS model, but that the decision must be
collective.

Pedro Dias comments that he has applied the MPAS model with his students
and that the documentation and ease of use of MPAS are very important
factors. Regarding FV3, he comments that he has also heard reports of
difficulties in using and solving problems, due to the lack of
documentation of FV3. Regarding the problem with the vertical
coordinates pointed out by Ariane Frassoni, he comments that this is a
challenge that should be addressed and that he has discussed the subject
with Pedro Peixoto and believes that MONAN can contribute to the
solution of this problem, which does not only occur in the Andes, but in
regions with very steep topography. He adds that the solution to this
problem should be considered with the highest priority.

Pedro Peixoto comments that, despite its shortcomings, the CC is seeking
a model that will serve as a basis for MONAN, so that the MONAN
scientific community can build on it in a sustainable manner. He adds
that he perceives that the FV3 model has several good aspects in terms
of performance, but that its basis was designed in a more complicated
way, which makes it less accessible in this sense. On the other hand, he
says that the MPAS model has a more manageable basis and that, in this
sense, the decision to use MPAS seems to be a wise decision by the MONAN
CC. He also comments that, if the option to be adopted were a model that
did not contain any problems or challenges, the MONAN community would
simply be a user of this model. In this way, the MONAN scientific
community has the potential to help solve these problems.

Saulo Freitas contributes by reporting a discussion on the applications
of the FV3 model on a convective scale and the problems and challenges
that NOAA has been facing with this. He comments that, according to a
critic of the NOAA organization <sup><a
href="https://monanadmin-github-io.translate.goog/monan_cc_docs/ata_cc_03_agosto_2023/?_x_tr_sl=pt&amp;_x_tr_tl=en&amp;_x_tr_hl=pt-BR&amp;_x_tr_pto=wapp#fn:5"
class="footnote-ref">5</a></sup> <sup><a
href="https://monanadmin-github-io.translate.goog/monan_cc_docs/ata_cc_03_agosto_2023/?_x_tr_sl=pt&amp;_x_tr_tl=en&amp;_x_tr_hl=pt-BR&amp;_x_tr_pto=wapp#fn:6"
class="footnote-ref">6</a></sup> , despite the United States having made
a large investment in weather and climate forecasting, it has not yet
managed, over time, to improve its performance compared to, for example,
the
[ECMWF](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.ecmwf.int/)
(European Centre for Medium-range Weather Forecasts). He adds that the
problems faced with the FV3 are intrinsic to the formulation of the
model and that NOAA itself is considering adopting the MPAS to replace
the FV3. He also comments that for the MONAN community, it is very
difficult to adopt a model that is already heavily criticized and that
it is difficult to obtain support and collaboration. He concludes his
contribution by saying that Brazil wants to achieve a level of global
maturity, that it wants to stop being a user and want to become a
developer, and that the MPAS, despite its defects, represents an
opportunity for this.

Haroldo Fraga comments that it is necessary to choose a model that
provides a software structure that allows the objectives proposed by
MONAN to be achieved. He cites as an example the application of
unstructured grids so that it is possible to regionalize the model and
detail the areas of interest. He adds that, in his view, he believes it
is easier to cooperate with NCAR than with NCEP. In his position, he
says, he opts for the MPAS model.

Luciano Pezzi gives his contribution. He comments that his group (Ocean
and Continental and Sea Ice) has considered adopting the
[MOM6](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.gfdl.noaa.gov/mom-ocean-model/)
(Modular Ocean Model 6) model as a user. He adds that, in the case of
the atmospheric component, he understands that, due to the community
aspect and MONAN's desire to effectively contribute to developments -
and also receive feedback from the model's user community, he believes
that choosing MPAS is more interesting. Saulo Freitas comments that the
team that develops MPAS is the same team that also developed the
[WRF](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.mmm.ucar.edu/models/wrf)
(Weather Research and Forecasting Model). Since the WRF model is widely
used and applied worldwide, this shows that its user base is large
because it receives support and feedback from the development team,
which is also an advantage. Pedro Dias adds that the MPAS model has also
received developments to be coupled with the MOM6 model and that this
can make the coupling between the components more integrated.

Caio Coelho questions whether the model's applications on subseasonal,
seasonal and climatic scales are being considered when choosing the new
dynamic core for the atmospheric component of MONAN. Caio Coelho
explains that this choice should also consider these applications and
that it is important to start developing MONAN together with the
climatic part. Caio Coelho cites
[CESM](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.cesm.ucar.edu/)
(Communit Earth System Model) as a starting point for developing MONAN
for applications on a climatic scale, since CESM already has the MOM6
model coupled to it. Saulo Freitas argues that NCAR itself has in its
work plan to ensure that CESM also has MPAS as the dynamic core of CESM.
He adds that Brazil already has experience with the MOM6 model and that
these factors also support the choice of MPAS as the dynamic core of
MONAN's atmospheric component. Pedro Dias endorses Saulo Freitas'
arguments and adds that having MPAS as the dynamic core of CESM is one
of NCAR's priorities. Caio Coelho thanks the responses and comments that
the outlook is promising.

Enio Pereira comments that, in his opinion, the choice for MPAS is the
right one. He asks when and how the transition from MPAS to MONAN will
be made. Luiz Flávio comments that he has been discussing with Pedro
Peixoto the use of a common repository so that it is possible to
disseminate appropriate tools for MPAS pre- and post-processing. He adds
that regionalizing the model using the MPAS Voronoi grid is not an easy
task, in addition to the need to prepare the data for its use, among
other aspects. He also comments that the GCC is working on the logistics
of interaction with NCAR so that it is possible to obtain the physics
and code updates for application to MONAN. Likewise, this logistics also
involves MONAN's contributions to MPAS. In short, he comments that MPAS
is the starting point for the MONAN code and that the idea is to have
the first release of MONAN by September 2023. Luiz Flávio's comments can
be found in the MONAN CC meeting record at
[1:43'46"](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://youtu.be/pBdrKYZKR5Q?t%3D6226)
.

Pedro Peixoto comments that, from a practical point of view, INPE should
manage the main
[MONAN](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://github.com/monanadmin)
repository . He adds that it has an
[MPAS-BR](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://github.com/pedrospeixoto/MPAS-BR)
repository where it has developed tools for MPAS preprocessing, which
can now be incorporated into the MONAN repository for use. In his view,
the two repositories should communicate, along with the
[MPAS](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://github.com/MPAS-Dev)
official repository , so that contributions are centralized in the MONAN
repository. In this way, the MPAS repository can also use MONAN
developments that are important to NCAR. He concludes by saying that it
is important to concentrate efforts and avoid unnecessary efforts to
accelerate the learning curve of participants.

Haroldo Fraga and Pedro Peixoto comment on the generation of the MPAS
grid. Pedro Peixoto comments that there is already a ready-made tool for
this, which greatly reduces the efforts and difficulties in generating
the grids for the model, which should be made available to everyone.
Haroldo Fraga comments that it is necessary to have a page for MONAN
with all the manuals and instructions for creating the model. In his
view, it is important to have these aspects consolidated so that the
model begins to be truly community-based, so that colleagues from South
America and Latin America can also use and contribute to MONAN.

Caio Coelho questions whether the MOU (Memorandum of Understanding)
between INPE and NCAR includes CESM or whether it explicitly mentions
only MPAS. Luiz Flávio comments that the MOU is not yet finalized and
there is room to include other aspects in the agreement between the two
institutions.

After the discussions, Saulo Freitas directed the meeting to make a
formal decision about the choice of the dynamic nucleus of the
atmospheric component of MONAN. Among the meeting's agendas, he
mentioned the proposal that the MONAN CC adopt the MPAS as the basis for
MONAN, in addition to the physical parameterizations of the surface and
atmosphere model that are already embedded in the MPAS. With this, the
next step is the organization of the initial version of MONAN and the
versioning of the code by the GCC. Then, this version of the atmospheric
MONAN will be operationalized, on an experimental basis, by the DIPTC of
CGCT/INPE for performance evaluation. He added that, at this moment, for
computational reasons, it will not be possible to configure MONAN with a
variable resolution, so that the model domain will be global, with a
resolution between 10 and 20 km (depending on the computational cost),
with integration of up to 10 days. As the model is integrated, the
results will be reported to the MONAN CC.

Saulo Freitas announces, in accordance with the mutual understanding of
the MONAN CC, the approval of MPAS as the data structure for MONAN's
atmospheric dynamics.

## Other Matters

Pedro Peixoto announces the offering of an intensive online course, to
be held over the course of a month (three times a week) on the
horizontal part of the MPAS model. According to him, the course content
begins with a one-dimensional advection model in finite volumes, then
advances to the two-dimensional dimension in shallow water, and
continues on to the sphere in this type of mesh. The course also
involves the discussion of MPAS meshes and extends to how these concepts
connect with the MPAS code. More information about the course can be
found at
[https://www.ime.usp.br/~pedrosp/modelagem-numerica-atmosfera/](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.ime.usp.br/~pedrosp/modelagem-numerica-atmosfera/)
.

## Activities for the Next 6 to 12 Months

1.  Signing of the agreement between NCAR and INPE;
2.  Experimental implementation of MONAN;
3.  Definition of the ocean and cryosphere components and continental
    surface component;
4.  Data assimilation system, the
    [GAD](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://github.com/GAD-DIMNT-CPTEC)
    (Data Assimilation Group) group is studying the adoption of the
    [JEDI](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://www.jcsda.org/jcsda-project-jedi)
    (Joint Effort for Data Assimilation Integration) system;
5.  Development of the initial version of atmospheric MONAN, with
    version control system and availability to the community;
6.  If resources are available, a training workshop will be held in the
    next semester. Regarding resources, another form of financing will
    be necessary, as the resources available to date are insufficient to
    handle this workshop. The workshop would be an important starting
    point for the community to begin using MPAS, installing it and
    starting to produce results.

??? example "Attachments"

    * [Recording of the MONAN Scientific Committee Meeting - August 3, 2023](https://monanadmin-github-io.translate.goog/monan_cc_docs/ata_cc_03_agosto_2023/?_x_tr_sl=pt&_x_tr_tl=en&_x_tr_hl=pt-BR&_x_tr_pto=wapp)
    * [Presentation by Luiz Flavio](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://drive.google.com/file/d/1-i6K_tTYqfXxLgtNon1xK-Pim30gYpJ-/view?usp%3Dsharing)
    * [Presentation by Ariane Frassoni](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://drive.google.com/file/d/1DykT2bJRv7PMve4HGB6dceZfOe9eI1EH/view?usp%3Dsharing)
    * [Article Rozante et al. (2020)](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://drive.google.com/file/d/1h3TbpDNiAOFG568usiPlfntw0TOZe_Uy/view?usp%3Dsharing)
    * [Article Figueroa et al. (2016)](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://drive.google.com/file/d/1ceBqmP05QGqeV7o7bsFp-6-zP7d5KkMh/view?usp%3Dsharing)

------------------------------------------------------------------------

1.  In Brazil, there are currently nine CENAPADs that make up the
    SINAPAD program (National High Performance Processing System). <a
    href="https://monanadmin-github-io.translate.goog/monan_cc_docs/ata_cc_03_agosto_2023/?_x_tr_sl=pt&amp;_x_tr_tl=en&amp;_x_tr_hl=pt-BR&amp;_x_tr_pto=wapp#fnref:1"
    class="footnote-backref"
    title="Jump back to footnote 1 in the text">↩︎</a>

2.  Other information, in addition to the scripts used in the
    evaluations, can be found at
    [https://github.com/monanadmin/monan/wiki](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://github.com/monanadmin/monan/wiki)
    and
    [https://github.com/monanadmin/monan/tree/main/tools/qas\_eval](https://translate.google.com/website?sl=pt&tl=en&hl=pt-BR&client=webapp&u=https://github.com/monanadmin/monan/tree/main/tools/qas_eval)
    . <a
    href="https://monanadmin-github-io.translate.goog/monan_cc_docs/ata_cc_03_agosto_2023/?_x_tr_sl=pt&amp;_x_tr_tl=en&amp;_x_tr_hl=pt-BR&amp;_x_tr_pto=wapp#fnref:2"
    class="footnote-backref"
    title="Jump back to footnote 2 in the text">↩︎</a><a
    href="https://monanadmin-github-io.translate.goog/monan_cc_docs/ata_cc_03_agosto_2023/?_x_tr_sl=pt&amp;_x_tr_tl=en&amp;_x_tr_hl=pt-BR&amp;_x_tr_pto=wapp#fnref2:2"
    class="footnote-backref"
    title="Jump back to footnote 2 in the text">↩︎</a>

3.  José Roberto Rozante, Enver Ramirez Gutierrez, Alex de Almeida
    Fernandes & Daniel A. Vila (2020) Performance of precipitation
    products obtained from combinations of satellite and surface
    observations, International Journal of Remote Sensing, 41:19,
    7585-7604, DOI: 10.1080/01431161.2020.1763504. <a
    href="https://monanadmin-github-io.translate.goog/monan_cc_docs/ata_cc_03_agosto_2023/?_x_tr_sl=pt&amp;_x_tr_tl=en&amp;_x_tr_hl=pt-BR&amp;_x_tr_pto=wapp#fnref:3"
    class="footnote-backref"
    title="Jump back to footnote 3 in the text">↩︎</a>

4.  Figueroa, SN, and Coauthors, 2016: The Brazilian Global Atmospheric
    Model (BAM): Performance for Tropical Rainfall Forecasting and
    Sensitivity to Convective Scheme and Horizontal Resolution. Wea.
    Forecasting, 31, 1547–1572,
    https://doi.org/10.1175/WAF-D-16-0062.1. <a
    href="https://monanadmin-github-io.translate.goog/monan_cc_docs/ata_cc_03_agosto_2023/?_x_tr_sl=pt&amp;_x_tr_tl=en&amp;_x_tr_hl=pt-BR&amp;_x_tr_pto=wapp#fnref:4"
    class="footnote-backref"
    title="Jump back to footnote 4 in the text">↩︎</a>

5.  Mass, C., 2006: The Uncoordinated Giant: Why US Weather Research and
    Prediction Are Not Achieving Their Potential. Bull. Amer. Meteor.
    Soc., 87, 573–584, https://doi.org/10.1175/BAMS-87-5-573. <a
    href="https://monanadmin-github-io.translate.goog/monan_cc_docs/ata_cc_03_agosto_2023/?_x_tr_sl=pt&amp;_x_tr_tl=en&amp;_x_tr_hl=pt-BR&amp;_x_tr_pto=wapp#fnref:5"
    class="footnote-backref"
    title="Jump back to footnote 5 in the text">↩︎</a>

6.  Mass, C., 2023: The Uncoordinated Giant II: Why US Operational
    Numerical Weather Prediction Is Still Lagging and How to Fix It.
    Bull. Amer. Meteor. Soc., 104, E851–E871,
    https://doi.org/10.1175/BAMS-D-22-0037.1. <a
    href="https://monanadmin-github-io.translate.goog/monan_cc_docs/ata_cc_03_agosto_2023/?_x_tr_sl=pt&amp;_x_tr_tl=en&amp;_x_tr_hl=pt-BR&amp;_x_tr_pto=wapp#fnref:6"
    class="footnote-backref"
    title="Jump back to footnote 6 in the text">↩︎</a>
