
!!! warning "Página traducida con IA"

    Esta página fue traducida utilizando inteligencia artificial (IA). El contenido puede contener imprecisiones o interpretaciones erróneas. Para uso oficial o crítico, consulte al [administrador](mailto:mcstu.inpe@gmail.com) del sitio para confirmar la información.


# 06 de Diciembre de 2021

## ACTAS 005/2021 - Revisión 001

![type:video](https://youtube.com/embed/odVF6XhGUm8)

Reunión del Comité Científico del Modelo de Predicción del Océano, la
Superficie Terrestre y la Atmósfera.

El 6 de diciembre de 2021, a las 9:00 h, representantes del Instituto
Nacional de Investigaciones Espaciales (INPE), el Instituto Tecnológico
de Aeronáutica (ITA), la Universidad Federal de Santa María (UFSM), la
Universidad de São Paulo (USP), el Laboratorio Nacional de Computación
Científica (LNCC), la Marina de Brasil (MB) y la Fuerza Aérea Brasileña
(FAB) se reunieron virtualmente para debatir y continuar el trabajo del
Comité Científico del Modelo de Pronóstico de Océanos, Superficies
Terrestres y Atmósfera. Estas actas registran la memoria de la reunión y
recopilan la información insertada en el chat, como enlaces e
información relevante para las discusiones mantenidas. Este documento se
basa en las directrices establecidas por Saulo Freitas durante su
presentación.

## Apertura

Saulo Freitas inició la sesión recordando que esta es la sexta reunión
del Comité Científico (CC) del Modelo Comunitario del Sistema Tierra
Unida y que esta actividad cumplirá un año, período que marca la idea
inicial del modelo en diciembre de 2020. Recordó que primero hubo una
reunión informal, seguida de una reunión con el director del INPE, a
partir de la cual se creó el comité inicial y, posteriormente, el inicio
de las reuniones. Mencionó que el CC está comprometido con la obtención
de los recursos necesarios para llevar a cabo las actividades
relacionadas con el desarrollo del modelo. Añadió que el país atraviesa
dificultades, lo que dificulta la obtención de los recursos, pero que
esto no puede impedir el desarrollo del modelo, que debe otorgar al país
la autonomía técnico-científica que necesita en esta área. Saulo Freitas
pasó a presentar la agenda de la reunión.

## Agenda 1 - El proceso de elección del nombre del Modelo Comunitario del Sistema Terrestre Unificado - Informe

Saulo Freitas presenta el informe sobre el proceso de elección del
nombre del modelo comunitario. Recuerda que dicho proceso se llevó a
cabo mediante una encuesta en la que los miembros del CC sugirieron
nombres con sus argumentos. Los nombres fueron recopilados y difundidos
para la selección de los miembros del CC por Fabielle Alves. Para ello,
fueron necesarias dos rondas de sugerencias, ya que en la primera ronda
los nombres sugeridos contenían referencias a Brasil (tras las
discusiones previas, se llegó a un consenso en que el nombre del país no
debía formar parte del nombre del modelo), además de siglas que ya
utilizaban otros modelos. En la segunda ronda, se sugirieron nuevos
nombres que cumplían con los requisitos propuestos. Al no haber
objeciones y no ser necesaria una tercera ronda para elegir el nombre
del modelo comunitario, el proceso concluyó. El nombre elegido, con 8
votos, fue **"Modelo para la predicción Océano-Terrestre y Atmósfera
(MONAN)"** , cuya traducción al portugués es **"Modelo paraPrincípio dos
Oceanos, Superfícies Terrestres e Atmosfera"** . En ambos idiomas, el
acrónimo del modelo es MONAN. Saulo Freitas añade que el nombre elegido
debería utilizarse ya en las próximas reuniones, y que esto se
comunicará a los organismos y divisiones pertinentes. El grupo de
Procesamiento de Alto Rendimiento (PAD) también debería empezar a
utilizar el nombre elegido para la organización de repositorios y otras
actividades.

## Agenda 2 - Informe de las reuniones del Subcomité - Superficie continental, suelos y atmósfera

Saulo Freitas comienza la presentación del informe de la reunión del
subcomité sobre la atmósfera. Comenta que el [26 de noviembre de
2021](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://www.youtube.com/watch?v%3DbzczKGQaK_g)
se celebró una reunión a la que se invitó a 26 investigadores de la
comunidad científica brasileña relacionados con el modelado atmosférico.
De los 26 invitados, 20 pudieron participar. Uno de los aspectos
fundamentales discutidos inicialmente fueron las escalas espaciales y
temporales que deben considerarse en MONAN. En vista de las discusiones
del grupo, se concluyó que el modelo debe ser capaz de realizar
predicciones en una escala espacial de 1 km y una escala temporal de 1
hora. Esta conclusión se debe a las limitaciones impuestas por los
núcleos dinámicos actualmente existentes, que están preparados para
operar dentro de estos límites. A pesar de esto, el grupo espera que sea
posible, con los expertos asociados a MONAN, superar estas limitaciones.
Además, el grupo pretende trabajar en los procesos de la Capa Límite
Planetaria (PLL), que se observan en una escala espacial de decenas de
metros.

Pedro Dias comenta sobre las escalas de implementación del modelo
comunitario. Menciona que cuando se dice que el modelo tiene una escala
de 1 km, significa que debería representar fenómenos que están en una
escala de 1 km. En consecuencia, la resolución del modelo debería ser
menor. Saulo Freitas concuerda con Pedro Dias y comenta que existe
confusión entre lo que es la resolución efectiva del modelo y el
espaciamiento entre los puntos de su cuadrícula. Saulo Freitas agrega
que los modelos que utilizan los núcleos dinámicos Model for Prediction
Across Scales (
[MPAS](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://mpas-dev.github.io/)
) y Finite Volume Cubed-Sphere Dynamical Core (
[FV3](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://www.gfdl.noaa.gov/fv3/)
) no tienen física lo suficientemente refinada como para resolver
explícitamente procesos en una escala de 1 km.

Saulo Freitas también comenta que, durante la reunión del subcomité de
modelado atmosférico, se discutieron algunas características deseables
para MONAN, en términos de núcleo dinámico, método de discretización y
malla computacional. Entre las características de la malla
computacional, se discutió si debía ser de tipo no estructurado con
posibilidad de refinamiento o con anidamiento de mallas; si debía ser
global o de área limitada (límites abiertos); y si debía discretizarse
en volúmenes definidos, elementos espectrales o mediante otro método. En
cuanto al núcleo dinámico, el grupo discutió si debía ser localmente
conservativo en masa, si debía ser hidrostático o no hidrostático, si
debía ser completamente comprensible, si debía ser adecuado para la
atmósfera profunda y cuál debía ser su nivel de precisión global y
efectiva. Respecto a este último aspecto, destaca el detalle presentado
por Pedro Peixoto durante la reunión. También cabe destacar que Chou
Chan habló sobre la versión del Global Eta Framework (
[GEF](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://www.proquest.com/docview/1920221462?pq-origsite%3Dgscholar%26fromopenview%3Dtrue)
) – modelo Eta a escala global, destacando las principales
características de esta versión del modelo.

Pedro Peixoto comenta los límites de la aplicación del método espectral
en modelos a escala global y las opciones disponibles para los núcleos
dinámicos de MPAS, FV3 y GEF. Debido a la escalabilidad computacional,
las mallas pueden ser estructuras hexagonales o pentagonales (mallas de
Voronoi, de FV3 y MPAS), o pueden ser estructuras con un cubo proyectado
sobre una esfera (esfera cúbica, de GEF). Entre estas opciones, hay
ventajas y desventajas. La esfera cúbica requiere la aplicación de
operadores de mayor precisión, además de requerir anidamiento de malla.
Por otro lado, aunque la precisión de los operadores en las mallas de
Voronoi es menor, es más flexible y permite mejores refinamientos de
malla para alta resolución a escala regional. Además, existe la
coordenada vertical. FV3 utiliza una coordenada de presión vertical, que
sigue el terreno, mientras que MPAS utiliza una coordenada de altura que
también sigue el terreno. Entre las discusiones del subcomité de
modelado atmosférico, Pedro Peixoto comentó sobre la idoneidad de estas
coordenadas que siguen el terreno para representar regiones con gran
variación topográfica, como la cordillera de los Andes. Añadió que todos
estos aspectos se discutieron, pero que no se llegó a una decisión sobre
qué debería utilizar el MONAN.

Pedro Dias añade sobre la flexibilidad de la cuadrícula y los problemas
que surgen del uso de una cuadrícula no homogénea. Comenta que la
[impronta](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://pedrosp.ime.usp.br/papers/PeixotoBarros2013.pdf)
que surge en estas cuadrículas es un problema localizado que se puede
controlar. La elección de la coordenada vertical es preocupante, ya que
en América del Sur hay accidentes geográficos como los Andes y Serra do
Mar, que tienen una importante influencia en la meteorología. Con
respecto a la coordenada vertical Eta, también utilizada en la versión
global del Modelo Océano Tierra Atmósfera (
[OLAM](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://sourceforge.net/projects/olam-model/)
), comenta que la variación en la resolución vertical, cerca de la
superficie, es muy gruesa y no representa adecuadamente los procesos
cercanos a la superficie. El anidamiento vertical puede ser una
alternativa, como refinar la resolución vertical sobre los Andes. El
problema con hacer esto son los residuos generados por la integración
numérica, que se pueden resolver con difusión, lo que no es
necesariamente algo bueno. Añade que la formulación clásica de la
coordenada vertical Eta ya no se utiliza y que existe una versión más
moderna que considera una inclinación entre los diferentes estratos de
la coordenada ( [escalones de compras o celdas
afeitadas](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://link.springer.com/article/10.1007/s00703-012-0182-z)
), lo que alivia el problema de los flujos perpendiculares a la montaña,
permitiendo la ocurrencia de flujos horizontales. Esta característica
reduce la necesidad de difusión numérica. Pedro Dias corrobora la
afirmación de Pedro Peixoto y afirma que será necesario estudiar las
opciones con más profundidad, especialmente la aplicación de la
coordenada Eta, y que será necesario diseñar experimentos para
probarlas.

Jairo Panetta pregunta si en las discusiones también se están
considerando los modelos del Centro Europeo de Predicciones
Meteorológicas a Plazo Medio (
[ECMWF](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://www.ecmwf.int/)
), además de los modelos americanos MPAS y FV3. Pedro Peixoto responde
diciendo que el modelo ECMWF, el Sistema Integrado de Predicciones (
[IFS](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://www.ecmwf.int/en/forecasts/documentation-and-support)
), es un modelo de volumen finito, con una malla octaédrica y que
preserva las líneas de latitud. Esto significa que pueden aplicar la
transformada de Fourier, al menos localmente, y preservar toda la
estructura computacional del IFS. Esta versión del [IFS-Volumen
Finito](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://www.ecmwf.int/en/newsletter/158/meteorology/nonhydrostatic-finite-volume-option-ifs)
usa una discretización similar a la usada en el FV3, pero usa todo el
pre y postprocesamiento que ya usa el modelo ECMWF. El [Met
Office](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://www.metoffice.gov.uk/)
está desarrollando un núcleo dinámico en una malla cúbica con elementos
finitos mixtos. También comenta que Francia está siguiendo una línea
similar a la del MPAS y que en Alemania están realizando otro tipo de
pruebas. El núcleo dinámico ECMWF es el más recomendable. Jairo Panetta
también cuestiona si no es buena idea seguir los avances del ECWMF.
Pedro Dias y Saulo Freitas comentan que el ECMWF no publica el código
operativo del IFS, solo versiones anteriores, y que podría haber
restricciones en el uso operativo del IFS por parte de otros centros.

Saulo Freitas comenta la posibilidad de utilizar el mismo núcleo
dinámico con una coordenada vertical en un dominio urbano, para simular
el flujo en cañones urbanos.

Pedro Dias añade que, según su experiencia, esto solo fue posible
utilizando la versión moderna de la coordenada Eta o utilizando
diferentes modelos (con diferentes resoluciones) anidados. Respecto al
uso del mismo modelo, menciona que solo pudo realizar este tipo de
simulación utilizando la versión moderna de la coordenada Eta. Saulo
Freitas añade que el grupo PAD es importante porque podrá explorar todos
estos aspectos relacionados con los núcleos dinámicos.

Saulo Freitas comenta sobre las parametrizaciones físicas y cómo un
modelo debe ser capaz de simular de forma fluida, con parametrizaciones
físicas que se adapten a resoluciones variables (sistema continuo), lo
cual debería ser uno de los puntos principales del modelo. También
menciona otros aspectos, como los módulos de radiación solar y
terrestre, la microfísica de nubes y el acoplamiento con el modelo de
aerosoles para la predicción de núcleos de condensación de agua líquida
y hielo. Añade que es necesario contar con una formulación única de
parametrización de nubes para cualquier escala espacial, especialmente a
escala submalla y en la denominada zona gris (donde una parametrización
puede intentar resolver fenómenos a escala de malla y submalla que
contribuyen a los procesos turbulentos). Respecto al tratamiento de la
turbulencia, destaca la necesidad de una simulación explícita de los
procesos de mezcla horizontal a escalas de tormenta (entre 1 y 4 km).
También menciona los desafíos relacionados con la representación de la
composición atmosférica y la calidad del aire, como los módulos de
emisiones antropogénicas y naturales y los flujos biogénicos. En cuanto
a los requisitos de la malla computacional del modelo, menciona que es
deseable que MONAN cuente con una malla global de resolución variable,
con un refinamiento en Sudamérica. Asimismo, comenta que una de las
posibilidades es la generación de pronósticos ambientales a escala
regional y local simultáneamente.

Saulo Freitas invita a Otávio Acevedo a presentar el informe de la
subcomisión de capa superficial y límite.

Otávio Acevedo comienza su presentación comentando sobre la composición
del subcomité de superficie y capa límite. Comenta que el objetivo no es
comenzar desarrollos desde cero, sino aprovechar los desarrollos
existentes, como los paquetes desarrollados por el Centro Nacional de
Investigación Atmosférica (
[NCAR](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://ncar.ucar.edu/)
). Comenta sobre las dificultades encontradas en esfuerzos anteriores
(p. ej., el Modelo Integrado de Procesos de Superficie -
[Interior](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=http://inland.ccst.inpe.br/)
, debido a problemas de PAD). Menciona que este modelo ya está
desactualizado en relación con otros, y que la asimilación de datos es
importante, aunque hasta ahora no se ha priorizado. Agrega otros
aspectos relevantes, como la necesidad de mejorar la representación de
la remoción de dióxido de carbono. Otávio Acevedo también agrega que el
grupo planteó temas relevantes para el desarrollo de MONAN en América
del Sur, como el importante papel en el balance global de carbono, el
liderazgo de Brasil en la solución de los principales problemas
ambientales y, específicamente, la representación de la Amazonía, la
cordillera de los Andes, la meteorología tropical, la convección, entre
otros.

Otávio Acevedo, en relación con la representación de la Capa Límite
Planetaria (PLL), destaca la importancia de representar la turbulencia y
la PLC nocturna para pronosticar fenómenos meteorológicos extremos,
entre otros. Menciona problemas relacionados con el acoplamiento del
modelo PLC al modelo de superficie y añade que el Modelo de
Investigación y Pronóstico del Tiempo (
[WRF](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://www.mmm.ucar.edu/weather-research-and-forecasting-model)
) cuenta con un módulo independiente para resolver la interfaz entre los
flujos de la capa superficial y la PLC.

Saulo Freitas destaca la importancia del subcomité de capa superficial y
límite, ya que es un grupo capaz de probar diferentes soluciones e
implementaciones de parametrizaciones en MONAN, a diferentes escalas
espaciales. La sinergia entre los diferentes grupos para la resolución
de problemas también es un aspecto importante, ya que brinda la
oportunidad de abordar los problemas aprovechando la experiencia de sus
miembros.

Pedro Dias destaca como muy positivo el intercambio de experiencias, la
interacción entre grupos y el intercambio de información dentro de
MONAN. Otávio Acevedo coincide y menciona que otros grupos también
tienen demandas sobre el CLP, lo cual es importante. Añade que Brasil
tiene una tradición superior a la media en observaciones de CLP, con
plataformas de observación que pueden utilizarse en el desarrollo de
MONAN. Pedro Dias coincide y menciona que la diversidad de grupos
involucrados y los datos observacionales también son importantes para el
modelado numérico. En la charla, Márcia Yamasoe informa que su grupo de
trabajo está evaluando el efecto de los aerosoles de los incendios
forestales en la irradiancia solar incidente y superficial.

Luciano Pezzi comenta sobre la base de datos de observaciones de buques
que se ha utilizado para estudiar y comprender fenómenos. Afirma que
estos datos también deberían utilizarse para mejorar los modelos
numéricos.

## Agenda 3 - Demandas y Requisitos de la Marina de Brasil

Flávia Pinheiro comenzó su presentación mencionando los servicios
meteorológicos que brinda la Armada a través de la Dirección de
Hidrografía y Navegación (
[DHN](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://www.marinha.mil.br/dhn/)
). Mencionó que el Servicio Meteorológico Marino (
[SMM](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://www.marinha.mil.br/chm/banner/servico-meteorologico-marinho)
) involucra aspectos operativos y de investigación, pero las
limitaciones computacionales del SMM limitan las actividades de
investigación y desarrollo. Comentó que el SMM proporciona pronósticos
no solo para áreas oceánicas sino también para regiones ribereñas, y que
los servicios que brinda el SMM cubren tanto áreas oceanográficas como
meteorológicas. Entre los servicios brindados, comentó que el monitoreo
meteorológico y oceanográfico de áreas de búsqueda y rescate es el más
importante. Los productos que brinda el SMM incluyen cartas sinópticas,
boletines meteorológicos y climatológicos, alertas de clima severo,
pronósticos especiales, boletines de información ambiental y ayudas para
la toma de decisiones. Con respecto a los boletines climáticos, explica
las dificultades relacionadas con el hecho de que el SMM no realiza
pronósticos climáticos y que es necesario recopilar una gran cantidad de
información para su preparación. Comenta que estos productos sirven no
solo a la MB, sino también a la sociedad civil.

Flávia Pinheiro, respecto al modelado realizado por el SMM, menciona que
se utilizan cinco modelos diferentes. Para el modelado atmosférico,
comenta que se utilizan principalmente los modelos del Consorcio para
Modelado a Pequeña Escala (
[COSMO](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://www.cosmo-model.org/)
) y, más recientemente, el modelo Icosahedral Nonhydrostatic Model -
Limited Area Mode (
[ICON-LAM](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://www.dwd.de/EN/research/weatherforecasting/num_modelling/01_num_weather_prediction_modells/icon_description.html)
), ambos con una resolución horizontal de 7 km (este último modelo,
recientemente instalado y en fase de configuración y ajuste). Comenta
que el modelo WRF (con una resolución horizontal de 10 km) se utiliza
como contingencia pero que, a pesar de las necesidades, un factor
limitante es la capacidad computacional del SMM para realizar estos
modelos. Menciona que el MB ha tenido una asociación con The Deutscher
Wetterdienst (
[DWD](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://www.dwd.de/EN/Home/home_node.html)
) desde que se estableció el pronóstico numérico en el MB. Saulo Freitas
cuestiona el tiempo necesario para realizar los pronósticos y el alcance
de los pronósticos realizados. Flávia Pinheiro comenta que el modelo
ICON-LAM se ejecuta durante un máximo de 120 horas (es decir, 5 días) y
que se necesita 1 hora para su ejecución completa, con dos ejecuciones
diarias a partir de las cuales se generan todos los productos. Con
respecto al modelo de olas, comenta que el SMM utiliza Wave Watch III (
[WW3](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://polar.ncep.noaa.gov/waves/wavewatch/)
), realizado con forzamientos del Sistema Global de Pronóstico (
[GFS](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast)
), modelos ICON y COSMO. Menciona que, aunque el SMM no puede realizar
un conjunto de los modelos, estos tres forzamientos se utilizan para
generar un producto similar que ayuda en los pronósticos. Pedro Dias
cuestiona si, en el caso de los forzamientos del GFS, se utilizan los
conjuntos de pronósticos o solo los pronósticos de control. Flávia
Pinheiro responde que solo se utilizan los pronósticos de control. Con
respecto a los modelos oceanográficos, menciona que el SMM produce el
Modelo Híbrido de Coordenadas Oceánicas (
[HYCOM](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://www.hycom.org/)
), con un importante apoyo al desarrollo de la Red de Modelado y
Observación Oceanográfica (
[REMO](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://www.rederemo.org/)
) y el Centro de Hidrografía de la Armada (
[CHM](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://www.marinha.mil.br/chm/)
). Comenta que el modelo HYCOM cuenta con un esquema de asimilación de
datos basado en la Interpolación Óptima de Conjuntos, con dos
cuadrículas diferentes de aproximadamente 9 km y 4 km de resolución
horizontal. Menciona algunos trabajos conjuntos con el equipo REMO (p.
ej., el Sistema de Pronóstico de Corrientes de Marea en Aguas Someras,
parte integral del Pronóstico Ambiental de la Armada -
[PAM](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://www.marinha.mil.br/noticias/diretoria-de-hidrografia-e-navegacao-desenvolve-visualizador-para-previsoes-de-correntes)
). Pedro Dias pregunta si existe algún producto para la desembocadura
del río Amazonas. Flávia Pinheiro responde que el MB realiza pronósticos
para zonas ribereñas, pero que es muy difícil realizar pronósticos para
regiones fluviales específicas debido a que el modelo COSMO domina el
océano. Comenta que el continente está bajo la jurisdicción del
Instituto Nacional de Meteorología (
[INMET).](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://portal.inmet.gov.br/)),
pero que el MB también tiene la responsabilidad de contar con
información sobre el continente (en las regiones ribereñas), pero que
existe dificultad para realizar predicciones con los modelos actuales.
Flávia Pinheiro demuestra, mediante PAM, que las predicciones del modelo
COSMO se realizan para las regiones ribereñas, pero que su nivel de
detalle es mucho menor en relación con el dominio oceánico.

Flávia Pinheiro, en relación con las necesidades y demandas de la MB
para MONAN, menciona que la asimilación de datos atmosféricos es uno de
los principales problemas a resolver. Comenta que el principal factor
limitante en este punto es el componente computacional. El modelo HYCOM
cuenta con un esquema de asimilación de datos, pero el componente
atmosférico no. Otro punto a destacar es el modelo acoplado
océano-atmósfera, que tampoco está contemplado por el SMM. Comenta que
un modelo acoplado podría proporcionar pronósticos a más largo plazo
(actualmente, los pronósticos del SMM están limitados a 5 días). Las
anomalías de la temperatura superficial del mar también son importantes
para el pronóstico de eventos extremos sobre el océano y que esto
representa un desafío para el SMM. También menciona la aplicación de un
modelo CLP que, en el contexto de los productos y servicios que ofrece
el SMM, es importante para el pronóstico de niebla costera y oceánica.
Concluye afirmando que si MONAN cuenta con algunos de estos aspectos
destacados, será de gran valor para las actividades que realiza la MB.

Saulo Freitas agradece a Flávia Pinheiro su presentación y abre el
debate entre los demás miembros del CC de MONAN. Freitas pregunta cuál
sería el espaciado ideal de la cuadrícula para los pronósticos
oceánicos, considerando lo deseable y lo factible. Flávia Pinheiro
responde que, actualmente, no es posible aumentar la resolución de los
modelos utilizados por el SMM debido a limitaciones computacionales.
Comenta que, para la situación actual, una resolución horizontal de 4 km
es ideal, principalmente debido a la interpolación realizada en los
forzamientos atmosféricos (el modelo HYCOM en uso tiene una resolución
horizontal de aproximadamente 4 km, mientras que el forzamiento
atmosférico tiene una resolución horizontal de 7 km). Esta interpolación
no es ideal y la paridad entre las resoluciones del modelo oceánico y
los forzamientos atmosféricos es un aspecto importante a considerar.
Comenta que una solución es invertir en el modelo WRF, por ser un modelo
más conocido y fácil de usar, para intentar aumentar su resolución.

Saulo Freitas comenta que un problema con el uso del modelo WRF es la
pérdida de la inicialización del modelo. Saulo Freitas cuestiona si la
interacción entre los procesos atmosféricos y oceánicos es de
retroalimentación o está completamente desacoplada. Flávia Pinheiro
responde que la interacción entre estos procesos está completamente
desacoplada, pero que, a pesar de ello, el modelo WW3 en uso está bien
configurado para el dominio MB. Por estas razones, comenta la necesidad
de un modelo acoplado.

Pedro Dias cuestiona cómo es el soporte computacional en términos de PAD
para SMM.

Flávia Pinheiro responde que la SMM cuenta con 10 oficiales, quienes
también son responsables de la parte PAD de los modelos utilizados.
Comenta que la acumulación de tareas relacionadas con las actividades de
modelado (modelado, optimización e implementación operativa de los
modelos) supone un gran desafío. Entre otros aspectos de los desafíos y
actividades de la SMM, Flávia Pinheiro también comenta las exigencias
derivadas del derrame de petróleo en la costa brasileña ocurrido en
2019.

Pedro Peixoto pregunta sobre el acuerdo con DWD. Flávia Pinheiro comenta
que el acuerdo entre DWD (desarrollador del modelo COSMO) y MB comenzó
en 1997, cuando se estableció la previsión numérica en MB. Comenta que
los costes del modelo COSMO (licencia y soporte) son de aproximadamente
20 000 euros anuales. Esto se debe a que el modelo es de código cerrado.

## Agenda 4 - Próximas acciones

Saulo Freitas presenta las próximas acciones a ser llevadas a cabo en el
ámbito del desarrollo de MONAN. Como acciones iniciales, menciona la
implementación de los núcleos dinámicos FV3, MPAS y Global-Eta en el
INPE y en el Laboratorio Nacional de Computación Científica (
[LNCC](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://sso.acesso.gov.br/login?client_id%3Dgovbr%26authorization_id%3D180046f9ec1)
), para el inicio de las actividades de exploración y evaluación.
Comenta que esta acción será realizada junto con la comunidad para tener
ideas sobre lo que debe ser probado y para el intercambio de información
y experiencias entre los involucrados para que todos puedan converger en
la elección del núcleo dinámico que será utilizado por MONAN. Menciona
que se planean reuniones internas con el programa de posgrado de
Meteorología del INPE (
[PGMET](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=http://www.inpe.br/posgraduacao/met/)
) y la División de Modelado Numérico del Sistema Terrestre (
[DIMNT](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=http://inpe.br/institucional/sobre_inpe/organograma/orgUnidade.php?siglaUnidade%3DDIMNT)
) para definir sus roles en el desarrollo de MONAN. Comenta que en el
ámbito de PGMET se creará una línea especial enfocada en temas
específicos para la investigación y desarrollo del modelo comunitario.

Saulo Freitas menciona la importancia de continuar las reuniones de los
subcomités sobre atmósfera, capa superficial y límite, y PAD. También
comenta la sugerencia del director del INPE sobre la presentación del
proyecto MONAN a la Fundación de Apoyo a la Investigación Científica del
Estado de São Paulo (
[FAPESP](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://fapesp.br/)
) en 2022. Otras acciones incluyen la presentación de las demandas del
Centro de Gestión y Operación del Sistema de Protección de la Amazonía (
[CENSIPAM](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://www.gov.br/defesa/pt-br/assuntos/censipam)
) y del INMET para el modelo comunitario, a través de sus respectivos
representantes, Ivan Saraiva y Francisco Quixaba.

## Acciones para la próxima reunión

-   Presentación del informe de la reunión del subcomité sobre océanos y
    criosfera.

??? example "Archivos adjuntos"

    * [Diapositivas Saulo Freitas](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://drive.google.com/file/d/1K3-5-gQQ1Nk6agdB-_NnpolTsFbfx3Mp/view?usp%3Dsharing)
    * [Acta de la reunión del Comité Científico de MONAN - 6 de diciembre de 2021](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://drive.google.com/file/d/19xStktNTxVpi7wR-hrj64i1wbS7w235W/view?usp%3Dsharing)
    * [Grabación de la reunión del Comité Científico de MONAN - 6 de diciembre de 2021](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://youtu.be/odVF6XhGUm8)
    * [Artículo de Latinovic et al. (2017)](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://www.proquest.com/docview/1920221462?pq-origsite%3Dgscholar%26fromopenview%3Dtrue)
    * [Artículo de Peixoto y Barros (2013)](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://pedrosp.ime.usp.br/papers/PeixotoBarros2013.pdf)
    * [Artículo Messinger et al. (2012)](https://translate.google.com/website?sl=pt&tl=es&hl=pt-BR&client=webapp&u=https://link.springer.com/article/10.1007/s00703-012-0182-z)

