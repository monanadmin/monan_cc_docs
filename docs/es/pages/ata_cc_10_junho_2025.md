
!!! warning "Página traducida con IA"

    Esta página fue traducida utilizando inteligencia artificial (IA). El contenido puede contener imprecisiones o interpretaciones erróneas. Para uso oficial o crítico, consulte al [administrador](mailto:mcstu.inpe@gmail.com) del sitio para confirmar la información.


# 10 de Junio de 2025


## ACTAS 001/2025 - Revisión 001

![type:video](https://youtube.com/embed/DlO_W7UxqjU)


## Agenda 1 - Apertura de la Reunión y Bienvenida a los Nuevos Miembros

La reunión fue iniciada por Saulo, quien saludó a los presentes y dio la bienvenida a los nuevos miembros del Comité Científico del MONAN. Se destacó la presencia de José B. Lucas, representando a Biofy, y del nuevo miembro Dr. Jorge Arevalo, profesor de la Universidad de Valparaíso de Chile, quien es el primer representante de Chile en el comité científico. La Universidad de Valparaíso está interesada en usar el MPAS y participa en un proyecto con el MONAN para implementar el modelo en la región.

Saulo informó que el Doctor Pedro Dias no pudo asistir debido a cuestiones familiares, ya que Assunção aún estaba hospitalizada al inicio de la reunión, pero fue dada de alta posteriormente. Saulo también mencionó que el Dr. Antônio Miguel había sido nombrado Director Interino del INPE a finales de año y que el Dr. José Aravéquia había sido elegido como Coordinador General de Ciencias de la Tierra, ambos participando por primera vez en este comité.

## Agenda 2 - Presentación de Nuevos Miembros

Saulo solicitó que los nuevos miembros se presentaran.

* Dr. Jorge Arevalo (Universidad de Valparaíso, Chile): Se presentó como doctor en Hidrometeorología, con 15 años de experiencia en modelos WRF para servicios hidrológicos en Chile. Actualmente, está involucrado en aprendizaje automático y liderando dos propuestas: una de vinculación para aprender y validar el MONAN en Chile y otra para conseguir financiamiento para el primer radar meteorológico en Chile, con el objetivo de entender precipitaciones extremas. Su interés principal es participar en la evaluación e identificar mejoras para el MONAN en latitudes medias, buscando involucrar a la comunidad científica chilena en el proyecto.
* Dr. Marlos Guimarães (Eletrobras): Expresó el honor de participar en el comité. Como ingeniero civil, percibe un gran potencial para la mejora de los modelos de ingeniería al utilizar señales simuladas en escalas de tiempo más refinadas, en contraste con las cartas estáticas actualmente utilizadas para dimensionamientos y estudios de viabilidad.
* Eusébio (Biofy): Agradeció la oportunidad y explicó que Biofy es una empresa de tecnología enfocada en inteligencia artificial (IA), socia de Oracle y NVIDIA. La empresa surgió con la oportunidad de entrenar y desarrollar una IA de NVIDIA para meteorología. El interés de Biofy es contribuir con su experiencia en IA y desarrollo de software, buscando la contraparte del conocimiento técnico de los miembros del comité para ayudar en el desarrollo del proyecto MONAN.

## Agenda 3 - Visión del MONAN en la Coordinación General de Ciencias de la Tierra (CGCT)

El Dr. José Aravéquia (Coordinador General de Ciencias de la Tierra) presentó la visión de la CGCT sobre el MONAN. Enfatizó que el MONAN es un modelo del sistema terrestre de desarrollo comunitario, estratégico para que los esfuerzos de investigación en Brasil y países latinoamericanos se involucren en su desarrollo. Destacó la plataforma y estructura de "color dinámico" moderna, en la frontera del conocimiento, y la compatibilidad del sistema de asimilación Jedi. Para el INPE y Brasil, el MONAN es crucial para la independencia en la producción de condiciones iniciales y en la modelación a todas las escalas (corto plazo, previsión subestacional, estacional y escenarios de cambio climático). El Dr. Aravéquia expresó satisfacción con el crecimiento de la comunidad científica involucrada en el proyecto y con la coordinación de Saulo.

## Agenda 4 - Visión de la Dirección del INPE sobre el MONAN

El Dr. Antônio Miguel (Director Interino del INPE) se unió a la reunión. Se disculpó por el retraso debido a compromisos relacionados con el contingente presupuestario federal. El Dr. Miguel reafirmó que la gestión del INPE considera el MONAN como un programa estructurante del Instituto, esencial para recuperar el área de tiempo y clima. Clasificó al MONAN como la "última oportunidad" para que el área de predicción numérica del tiempo tenga éxito en el INPE, asegurando que la institución fortalecerá el programa.

El Director reconoció las dificultades presupuestarias de un modelo comunitario e informó que ya inició conversaciones con el presidente del CNPq, Galvão, para buscar un presupuesto mínimo que permita a los socios del MONAN iniciar sus trabajos, aunque inicialmente con becas.

También destacó dos nuevas líneas temáticas de financiamiento en el FNDCT (a través de FINEP):

* Una línea de IA con casi 80 millones de reales.
* Una línea de crisis climática.

Sugirió que el MONAN debería postularse a estas líneas para financiar recursos humanos, incluso para los socios, con el apoyo de la dirección.

El Dr. Miguel solicitó que la dirección del INPE siempre sea invitada a las reuniones del comité científico. Por último, expresó gran preocupación por la asimilación de datos, un problema histórico que, en su visión, debe resolverse. Sugirió usar el acuerdo de cooperación con el Centro Europeo (ECMWF) para buscar una colaboración que lleve a una solución concreta para este problema, que se arrastra desde hace mucho tiempo.

Saulo agradeció las palabras "extremadamente alentadoras y prometedoras" del Director, destacando el reconocimiento del MONAN como programa estructurante, la búsqueda de presupuesto mínimo, las oportunidades del FNDCT y la convergencia sobre la importancia de la asimilación de datos. Saulo también informó que la inauguración de la nueva infraestructura de supercomputación del INPE, fundamental para el MONAN, está prevista para la segunda quincena de agosto, con posible presencia de la ministra y del presidente.

## Agenda 5 - Estado Actual del Modelo MONAN (Versión Preoperacional)

Paulo Kubota (investigador de la división de modelado) presentó el estado actual del MONAN, detallando la versión ofrecida a la división de operaciones como preoperacional. Explicó que el MONAN busca mejorar la predicción de tiempo y clima en todas las escalas temporales y espaciales para Brasil y América del Sur, con foco en eventos extremos y cambios climáticos. El modelo está planeado como un sistema de modelado del sistema terrestre, acoplado en el futuro con modelos oceánicos, de criósfera y aerosoles.

La versión del MONAN partió del modelo MPAS 8.1p1, aprovechando su estructura de "color dinámico" y paralelismo. Se hicieron modificaciones para hacerlo flexible y operativo, incluyendo preprocesamiento y posprocesamiento, que pueden ser aprovechados por la comunidad científica. El equipo de desarrollo del INPE está dividido en macrogrupos (atmósfera, superficie, criósfera, asimilación de datos, evaluación, computación científica, sistema acoplado e IA).

Kubota destacó el trabajo en preprocesamiento, que busca crear condiciones iniciales más refinadas a partir de datos como los del ECMWF (0.075º de resolución), en contraste con el GFS (0.25º). En el modelo atmosférico se implementaron parametrizaciones físicas como GF y CU puls (del modelo BRAMS), además de correcciones de errores. La versión preoperacional 1.3/1.4 incluye parametrizaciones GF y una "suite de convex permite MONAN" optimizada, con salida reestructurada a 18 niveles para optimización de almacenamiento.

También mostró mejoras significativas en la interpolación vertical y cálculo del geopotencial, que anteriormente presentaban problemas de extrapolación sobre topografías como la Antártida, generando sesgos. En posprocesamiento, la salida del modelo fue adaptada a niveles isobáricos estándar (basado en el software Convert) y los nombres de las variables estandarizados según la WMO para facilitar el uso por la comunidad meteorológica.

La versión preoperacional no incluye algunas modificaciones más recientes, como el modelo de superficie del Dr. Manzi, que serán incorporadas en futuras versiones. Kubota enfatizó que el software está disponible para descarga en Git, incentivando a la comunidad a contribuir al desarrollo futuro. Destacó que el INPE aprovecha desarrollos del NCAR, especialmente en paralelización con GPU, debido a la falta de personal capacitado para desarrollar todo internamente.

Saulo elogió el "enorme trabajo" de la división de modelado, reconociendo a Paulo Kubota, al grupo de computación científica (Eduardo Khamis, Carlos Renato, Marcelo Paiva y João Messias), y al grupo de evaluación. Destacó la infraestructura de scripts en GitHub para facilitar la instalación, configuración y ejecución del MONAN.

## Agenda 6 - Estado de la Versión Preoperacional del MONAN en la DPTC

Dr. Enver Ramirez (Jefe de la División de Predicción de Tiempo y Clima - DPTC) presentó el estado de la versión preoperacional del MONAN en la DPTC. Explicó que la división es responsable de las operaciones, atendiendo diversas escalas y demandas, y de la operación de los modelos. La versión preoperacional del MONAN (1.4.1 RC) se está ejecutando en la supercomputadora EGON en dos horarios (00Z y 12Z), con pronósticos de 10 y 5 días, respectivamente.

Enver describió una herramienta de organización y acceso a los productos del MONAN, desarrollada por el grupo web, que centralizará el acceso, facilitará la navegación por categorías y tendrá control de acceso por perfil de usuario, con acceso externo previsto en el futuro. La autenticación inicial utiliza login corporativo (INPE/CPTEC, Gmail) y las tecnologías incluyen Vit, Blade, Telgwint (frontend), Laravel (backend), MySQL (base de datos), Docker Containers y Git.

Presentó algunos resultados parciales (menos de un mes de corridas) de mapas meteorológicos, comparando el MONAN con BAM y GFS, mostrando buena correspondencia y detalle. En términos de sesgo de precipitación (comparando con el producto Merge), el MONAN tuvo un desempeño ligeramente superior al GFS para 24 horas sobre el continente, aunque muestra subestimación de precipitación en la región tropical.

Enver mencionó que la DPTC está trabajando en retomar las discusiones sinópticas y en modernizar la sala de predicción para evaluación y desarrollo colaborativo del MONAN.

En respuesta a Haroldo, Enver aclaró que el MONAN no está dentro del contenedor Docker; el contenedor sirve para disponibilizar los resultados (imágenes, cartas sinópticas) de la aplicación web. Preguntado sobre el uso de MySQL en lugar de PostgreSQL para la base de datos, Enver admitió que MySQL se utilizó por "mayor facilidad", pero reconoció que PostgreSQL es más robusto para grandes volúmenes de datos, indicando que podría ser una limitación futura.

## Agenda 7 - Portal de Acceso y Servicios de Supercomputación para la Comunidad MONAN

Roberto P. Souto (LNCC) presentó la idea de desarrollar un portal de envío de jobs para la comunidad MONAN en la supercomputadora Santos Dumont. La idea surgió del Profesor Pedro, exdirector del LNCC, aprovechando la experiencia del equipo de Sinapad (coordinado por Antonio Tadeu Gomes) en desarrollo de portales.

El LNCC pretende usar Open OnDemand, un portal web de código abierto ampliamente utilizado en HPC, desarrollado por el Ohio Supercomputer Center. Este portal es amigable y facilita el envío de tareas complejas, especialmente para usuarios menos experimentados en comandos de supercomputadoras. El equipo del LNCC (Antonio Tadeu Gomes, Rafael Ferreira Soares y un profesional tercerizado) desarrollará una aplicación específica para el MONAN en Open OnDemand.

Los trabajos para implementar Open OnDemand en Santos Dumont, en asociación con Eviden, están previstos para iniciar en julio o agosto. Roberto destacó la importancia de la interacción con desarrolladores y usuarios del MONAN para definir el diseño, funcionalidades y visualización gráfica del portal.

Cuestionado sobre la posibilidad de implementar Open OnDemand en otras máquinas del SINAPAD distribuidas por el país, Roberto afirmó que, inicialmente, el enfoque es Santos Dumont, pero la aplicación puede adaptarse a otros sistemas HPC con Open OnDemand, dependiendo de la disponibilidad e interés. También aclaró que, aunque LNCC no tiene política de apertura de recursos para comunidades fuera de Brasil, proyectos coordinados por instituciones brasileñas pueden tener colaboraciones internacionales, facilitando el acceso de colaboradores de países como Argentina y Chile.

Saulo consideró la iniciativa "prometedora", reiterando la necesidad de una interfaz gráfica amigable que facilite la configuración, envío de jobs y posprocesamiento del modelo, siguiendo de cerca la evolución del proyecto.

## Agenda 8 - Estado de los Desarrollos en Asimilación de Datos

João Gerd (Grupo de Asimilación de Datos) presentó las actividades del grupo, enfocándose en la implementación del sistema Jedi para el MONAN y en el mantenimiento del sistema DSI con el modelo BAM.

* Mantenimiento del DSI (modelo BAM): El sistema DSI (con metodología 3DVar FGAT) fue migrado del XC50 al EGON, con enfoque en estabilidad operacional y corrección de errores relacionados con datos no asimilados. El equipo también migró a una versión más reciente del DSI (compatible con NCEP) y está validando el ciclo completo de asimilación. Problemas en datos de radiancia (como la no asimilación de datos de viento por satélite sobre América del Sur con la versión anterior del DSI) fueron corregidos con la nueva versión.
* Sustitución de Sensores: El grupo está probando reemplazar los datos MHS (satélites NOAA) por ATMS debido al inminente apagado del primero.
* Monitoreo y Herramientas: Carlos está desarrollando un sistema de monitoreo del SNMA, que podrá ser usado en Jedi. El grupo también desarrolló Read Diag, un software para evaluar el sistema de asimilación (impacto de los datos, función costo, flags de control de calidad).
* Implementación del Jedi (para MONAN):
    * Spack Stack: El grupo está desarrollando una versión del Spack Stack (entorno con paquetes y bibliotecas) para EGON, con scripts automatizados para compilación y prueba, que será migrada al nuevo supercomputador.
    * MP Jedi: Hay un script automatizado para compilación del Jedi y del MP (MONAN) en el entorno EGON, siguiendo la misma idea del Spack Stack, que también será migrado al Git institucional.
    * Validación: Fernando Sapucci y Caroline Viezel están validando el Jedi en la región, pero enfrentan problemas con la cuenta de Fernando Sapucci.
    * Ingesta de Datos: Es crucial el preprocesamiento de datos (observados y meteorológicos) para su ingestión en los sistemas de asimilación. Obsproc (NCEP) se utiliza para datos convencionales, generando el formato Prep Buffr, que luego se convierte a NetCDF para el IODA del Jedi. El flujo en CPTEC involucra recolección de datos brutos, preprocesamiento, validación, control de calidad y entrega para asimilación.

Desafíos:

* Migración del GTS a WIS2 (WMO).
* Sustitución del MHS por ATMS e ingesta de futuros datos.
*Déficit de personal (aproximadamente 35% de la fuerza laboral necesaria), causando retrasos en los hitos del plan (por ejemplo, calibración de la matriz B).
* Uso elevado de la máquina EGON, necesitando cuota dedicada o optimización de ventana.
* Necesidad de un acuerdo formal entre las divisiones (DIMNT, DIPTC, DISSM) para datos, control de calidad y asimilación.
* Retraso en la entrega de la versión funcional del Jedi con 3DVar FGAT (prevista para marzo).
* Necesidad de automatizar pruebas y migrar repositorios al Git institucional.

En discusión, Fabrício preguntó sobre la relación entre MPAS y WRF en términos de paquetes de asimilación, y João aclaró que, aunque las actividades son similares, Obsproc no es el mismo paquete para ambos. Explicó que el DSI exige control de calidad previo de los datos, mientras que Jedi (a través de IODA) realiza su propio control de calidad interno.

Haroldo cuestionó la comparación del análisis del BAM (con DSI) con el análisis del NCEP, sugiriendo una evaluación de la capacidad de predicción (24, 48, 72h, 5, 7, 10, 15 días) usando diferentes condiciones iniciales para BAM y MONAN, enfocándose en la precipitación como métrica clave. Carlos complementó, indicando un enlace en el chat para la evaluación de la versión más reciente del SMNA (2.3.1). Enver confirmó que la DPTC realiza evaluaciones rutinarias, mostrando mejoras en algunas variables con BAM/SMNA, aunque no sea la mejor configuración o versión. João destacó que la precipitación es una métrica sensible a errores en la asimilación, y que, aunque MONAN con asimilación aún no está óptimo, se encuentra dentro de lo esperado, sin problemas graves de precipitación.

## Agenda 9 - Consideraciones Finales y Próximos Pasos

Saulo resumió la reunión, reiterando las oportunidades del FNDCT (IA y crisis climática) que MONAN debe buscar, el reconocimiento de MONAN como programa estructurante por el INPE, y la búsqueda de presupuesto junto al MCTI para socios externos.

Recapituló:

* Paulo Kubota mostró el estado actual de la versión preoperacional del MONAN.
* Enver Ramirez presentó resultados preliminares, con la expectativa de que meteorólogos de la DPTC apoyen la identificación de errores gruesos.
* Roberto P. Souto presentó la "prometedora" iniciativa del portal de supercomputación del LNCC para acceso de la comunidad.
* João Gerd detalló el estado de la asimilación de datos, un punto fundamental que requiere recursos y apoyo de la comunidad, especialmente de Fabrício y Haroldo, debido a la complejidad de la actividad y la interacción entre las tres divisiones del CPTEC.

Saulo agradeció a todos por su presencia y cerró la reunión, informando que se convocará una nueva reunión próximamente para discutir los resultados de la versión preoperacional del MONAN.

??? example "Archivos adjuntos"

    * [Grabación de la reunión del Comité Científico de MONAN - 10 de junio de 2025](https://youtube.com/embed/DlO_W7UxqjU)
    * [Presentación de Saulo Freitas](https://drive.google.com/file/d/1tK8weSfc-6f3rVxr4VXECqpUtos3jIXk/view?usp=drive_link)
    * [Presentación de Paulo Kubota](https://drive.google.com/file/d/1uPF9zIDCXWq0AC5hbHi5m7xHWS3ea0Z5/view?usp=drive_link)
    * [Presentación de Roberto Souto](https://drive.google.com/file/d/1hhERMHxMiDvOoLJdpCeSBDkGmJ0Oe0ma/view?usp=drive_link)
    * [Presentación de João Gerd](https://drive.google.com/file/d/1RPWTkvBQlU7kgSNbMOgdMXzWyOD7PCOU/view?usp=drive_link)
    * [Presentación de Enver Ramirez](https://drive.google.com/file/d/1hVpJlTtDBeXty9gFiMlUWpNgMoPaJB47/view?usp=drive_link)
