!!! warning "Página traducida con IA"

    Esta página fue traducida utilizando inteligencia artificial (IA). El contenido puede contener imprecisiones o interpretaciones erróneas. Para uso oficial o crítico, consulte al [administrador](mailto:mcstu.inpe@gmail.com) del sitio para confirmar la información.

# 19 de Agosto de 2026

## ACTAS 001/2026 - Revisión 000

![type:video](https://youtube.com/embed/6SxmaQGU1cg?si=u0uYd3b4u86epCDI)

Reunión del Comité Científico del Modelo Comunitario de Predicción del Sistema Terrestre (MONAN). El 19 de agosto de 2026, a las 14:00 horas, se reunió de forma ordinaria y remota el Comité Científico del Modelo Comunitario de Predicción del Sistema Terrestre (MONAN), con la presencia de investigadores y representantes del Instituto Nacional de Investigaciones Espaciales (INPE), del Laboratorio Nacional de Computación Científica (LNCC), de la Universidad de São Paulo (USP), del Instituto Nacional de Meteorología (INMET), así como de representantes internacionales de Colombia, Cuba, El Salvador y de la Organización Meteorológica Mundial (WMO). La presente acta recoge la memoria de la reunión celebrada y reúne la información presentada durante los debates, con el objetivo general de evaluar el progreso técnico de los componentes atmosférico, oceánico y de asimilación de datos del modelo.

**La apertura de la sesión estuvo a cargo del Dr. Saulo Ribeiro de Freitas, del Instituto Nacional de Investigaciones Espaciales, y del profesor Dr. Pedro Leite da Silva Dias, del Instituto de Astronomía, Geofísica y Ciencias Atmosféricas de la Universidad de São Paulo, quienes dieron la bienvenida a los participantes y presentaron el orden del día, destacando la amplitud de los temas técnicos que se abordarían. El Dr. Saulo Freitas presentó a los nuevos miembros del comité, destacando la incorporación del teniente coronel especialista en Meteorología Mário Paulo Alves Júnior (ICEA/DECEA); del Dr. Daniel Hernández Deckers, profesor asistente del Departamento de Geociencias de la Facultad de Ciencias de la Universidad Nacional de Colombia (UNAL); de la Dra. Maibys Sierra Lorenzo, en representación del Instituto de Meteorología de Cuba (INSMET); de la profesora Dra. Jaci Maria Bilhalva Saraiva, del Laboratorio de Interacción Atmósfera-Océano (FURG); de la Dra. Janice Trotte Duhá, directora del Instituto Nacional de Investigaciones Oceánicas (INPO); y de William Abarca, quien participó como observador con vistas a formalizar su futura incorporación, en representación de El Salvador (MARN).

## Agenda 1 - Nuevos Miembros del CC del MONAN y Noticias Generales

Saulo Freitas y Pedro Dias presentaron a los nuevos miembros propuestos para integrar el Comité Científico del MONAN:

1. **Teniente coronel especialista en Meteorología Mário Paulo Alves Júnior** (ICEA/DECEA), designado por el Departamento de Control del Espacio Aéreo en sustitución del coronel especialista en Meteorología José Hélio Abreu Nogueira, para representar a las fuerzas aeronáuticas nacionales.
2. **Dr. Daniel Hernández Deckers** (profesor asistente del Departamento de Geociencias de la Facultad de Ciencias de la Universidad Nacional de Colombia), en representación del ámbito académico colombiano.
3. **Dra. Maibys Sierra Lorenzo** (investigadora del INSMET, Cuba), en representación del Instituto de Meteorología de Cuba. Saulo informó de la elaboración de un plan de trabajo para aplicar la experiencia del grupo de Cuba en ciclones tropicales a la evaluación del MONAN.
4. **Profesora Dra. Jaci Maria Bilhalva Saraiva** (Laboratorio de Interacción Atmósfera-Océano - FURG), como colaboradora.
5. **Dra. Janice Trotte Duhá** (directora del Instituto Nacional de Investigaciones Oceánicas - INPO), invitada a integrar el CC. Ronald Buss destacó la importancia del INPO (Organización Social asociada al INPE) en la contratación de personal y la obtención de recursos de fuentes extrapresupuestarias. Janice estuvo inicialmente representada por Fernando Monteiro (director de Infraestructura) y Lidiane Lima (Dirección de Investigación e Innovación), y se incorporó personalmente durante la reunión.
6. **William Abarca** (MARN, El Salvador), participante como observador con vistas a formalizar su futura incorporación.

### Noticias Generales

* **MONAN 10 km Global:** En operación experimental (fase preoperativa) en la supercomputadora Jaci del INPE desde el 1 de enero de 2026, con simulaciones estables y buena habilidad predictiva (versión 1.4.5, versión de producción);
* **MONAN 5 km Regional (LA-CAR):** Cubre América Latina y el Caribe; desarrollado e implementado en fase preoperativa en Jaci desde el 1 de julio de 2026, con ejecuciones cuatro veces al día. Una vez confirmadas la estabilidad y una habilidad predictiva razonable, se informará a la División de Operaciones del INPE para considerar su paso a operación.
* **Versión 2.0:** El desarrollo ya comenzó. Incorporará innovaciones del NCAR y desarrollos internos:
    * NCAR: Nueva parametrización del arrastre por ondas de gravedad, NOAH-MP (Noah Multi-Parameterization land surface model), interfaz con JEDI (Joint Effort for Data assimilation Integration) y núcleo dinámico del MPAS adaptado para GPU (lo que permite ejecutar el código en CPU o GPU).
    * Desarrollos internos: Nueva opción de turbulencia con flujo de masa (SHOCMF, de G. Farache, PGMET/INPE) orientada a unificar turbulencia, convección somera y estratocúmulos; nueva parametrización de turbulencia de la capa límite planetaria PAMPA (de Rafael Maronesi, Unipampa); parametrización de turbulencia basada en la teoría de Taylor (de Eduardo Eras y Haroldo de Campos Velho); mapa global de colores del suelo para el albedo y capas de suelo flexibles en NOAH-MP (desarrollado por el grupo de superficie de la DIMNT).
* **Capacitación y Eventos:** Gestiones para el primer curso de modelización numérica de la atmósfera (CAPES) en el INPE, en Cachoeira Paulista, previsto del 19 al 30 de octubre de 2026. Gestiones para la tercera capacitación del MONAN, dirigida por el profesor Enio Souza (UFCG), con apoyo de Funceme, prevista para abril de 2027.
* **Página Web:** En desarrollo para datos y evaluación estadística.
* **Desarrollos a Medio Plazo:** MONAN con aerosoles (MONAN-GOCARTG2, colaboración entre NCAR, INPE y UFSJ); MONAN-CHEM con reactividad química adaptada desde BRAMS; adaptación del sistema GEDAI de asimilación de datos (dirigida por João Gerd Zell de Mattos); acoplamiento del MONAN con WaveWatch para la predicción del oleaje (resultados ya muy avanzados con predicciones forzadas por MONAN).

## Agenda 2 - Estado del Portal de Ejecución del MONAN en el LNCC

Roberto Souto abrió las presentaciones e informó de que Kleucio Claudio y Rafael Magalhães lideran el desarrollo técnico, con un apoyo importante del grupo GCC del INPE (Redado Câmara, João Messias). Kleucio Claudio presentó los avances técnicos e hizo una demostración práctica del portal:

* El portal consiste en el desarrollo de una interfaz web para ejecutar el MONAN en un entorno HPC. Actualmente funciona en un clúster local de pruebas Xeon de cuatro nodos y está migrando a Santos Dumont, en el LNCC.
* Desarrollado en Python (Flask, Gunicorn), con servidor web Nginx e integración con Slurm.
* **Diagnósticos Dinámicos:** Corrección de la opción de niveles de las variables de diagnóstico. El campo de niveles se activa o desactiva dinámicamente según la variable seleccionada (p. ej., la temperatura a 2 m desactiva el campo de nivel), alineando la interfaz con la *stream list* del script CDCT.
* **Diseño y Estandarización:** Ajustes estéticos completos del diseño, con paneles superpuestos que usan transparencia en la página de resultados. Estandarización completa de los encabezados y pies de página de todo el portal.
* **Seguimiento:** Se añadieron la visualización del estado de la simulación (enviada, iniciada, finalizada), los registros del script CDCT en tiempo real y la visualización directa de los gráficos generados (se mostró un ejemplo de temperatura a 2 m con una malla de 120 km y 3 horas de simulación).
* **Base de Datos:** Implementación del almacenamiento de todas las simulaciones y sus salidas en una base de datos estructurada para su recuperación histórica.
* **Seguridad:** Se diseñó el front-end de las pantallas de inicio de sesión, registro y validación de contraseñas, pero el back-end en Python y la conexión definitiva a la base de datos para la autenticación aún no están operativos. Los requisitos de seguridad se adaptarán en el futuro a las exigencias del LNCC.

### Debate

Pedro Dias destacó la importancia de integrar diagnósticos listos para usar (balances de momento, calor, vorticidad, etc.) directamente en el portal para facilitar el análisis directo por parte de investigadores y estudiantes. Saulo estuvo de acuerdo con la creación de una biblioteca de diagnósticos. Saulo y Roberto debatieron la importancia de garantizar la sostenibilidad y financiación del portal a largo plazo, con un equipo permanente dedicado al mantenimiento y la evolución técnica.

## Agenda 3 - Evaluación del MONAN 10 km Global y 5 km Regional

Saulo Freitas presentó el informe elaborado por DIMNT/ATM (André Lyra, Eduardo Eras, Guilherme Mendonça, Lianet Hernandez, Madeleine Sanchez Gacita, Paulo Kubota y Saulo Freitas). La evaluación abarca el período de julio de 2025 a junio de 2026.

### MONAN 10 km Global (Versión 1.4.5)

* Ejecuciones deterministas con inicializaciones a las 00 y 12 UTC, que generan predicciones de 11 días. Condición inicial a partir de los análisis del GFS-FV3 (incluido el suelo). TSM constante durante la integración.
* Resolución de 10 km (6 millones de celdas computacionales), paso de tiempo de 60 s, radiación cada 30 min y convección cada 15 min. Transporte monótono de hidrometeoros.
* Salida en una malla regular de latitud-longitud de 0,1°, con 18 niveles verticales, cada 3 horas, que contiene 27 variables.
* En la versión 2.0, el número de niveles verticales aumentará de 55 a 84 (refinando la capa límite planetaria y la transición troposfera-estratosfera), y el tope ascenderá de 35 km a 50 km (propuesta del profesor Bonatti), lo que supondrá un aumento del costo computacional del 60 %, necesario para una mejor caracterización vertical.
* Escalabilidad superlineal demostrada por el grupo de computación hasta 32 nodos (256 núcleos por nodo) en Jaci. Permite simular 24 horas en 10 minutos y 11 días en menos de 2 horas.
* **Huracán Melissa (2025):** Simulación estable de 3 días de predicción con resoluciones de 120 km a 3 km. Las resoluciones de 30 km, 10 km y 3 km convergieron hacia trayectorias muy similares a las del conjunto del NHC, demostrando la estabilidad y la calidad física y dinámica del modelo. Fue la primera vez que el CPTEC ejecutó un modelo global con una resolución espacial de 3 km.
* **Morfología de la Precipitación:** La comparación del caso del 1 de marzo de 2026 (precipitación intensa en el nordeste de Brasil) con GPM-IMERG y GFS-FV3 mostró que el MONAN capturó perfectamente los gradientes de lluvia y la estructura espacial del fenómeno.
* **ZCAS (10 de febrero de 2026):** Comparación del MONAN con el modelo BAM en predicciones con hasta 10 días de anticipación. Con 10 días de anticipación, el BAM perdió por completo la señal, mientras que el MONAN mantuvo la Zona de Convergencia del Atlántico Sur (ZCAS) y predijo lluvias severas. Lo mismo ocurrió con el tifón Dolphine y las lluvias intensas en el sur de Brasil: el MONAN mantuvo la estructura del tifón con 7 días de anticipación, mientras que el BAM la perdió a los 5 días.
* **Métricas Cuantitativas (Verano de 2026 - DJF):**
    * El sesgo medio (BIAS) de lluvia respecto de los productos satelitales GPM y MSWEP es menos pronunciado en el MONAN que en BAM y GFS (tonos más claros de azul/rojo, especialmente en la Amazonía). A las 120 h, el BAM desarrolla un sesgo muy fuerte en la Amazonía, que el MONAN mitiga de forma satisfactoria. El sesgo de ERA-5 también es similar, lo que muestra que el modelo está en la frontera del conocimiento científico.
    * Las métricas ETS, POD y falsa alarma del MONAN, comparadas con las del GFS, muestran que el MONAN es superior o similar en casi todos los umbrales de lluvia de 1 a 50 mm y en todos los plazos de predicción, lo que representa un hito histórico para el CPTEC.
    * **Fractions Skill Score (FSS):** Demuestra una mayor área de aciertos y mayor precisión del MONAN que de BAM y GFS para umbrales más severos (como 50 mm).
    * **Evaluación Independiente (Profesor Demerval Moreira - UNESP):** utilizando 970 estaciones (METAR, SYNOP, plataformas de recolección de datos del INMET):
        * Temperatura a 2 m: Errores del MONAN y GFS similares e inferiores a los del BAM.
        * Punto de rocío: MONAN superior (menor error) a GFS y BAM.
        * Viento a 10 m: MONAN presentó un error mayor (peor habilidad predictiva) que GFS y BAM, lo que indica la necesidad de ajustar la representación de la superficie.
        * Precipitación: Los pluviómetros muestran que el MONAN tiene un ETS mayor, una mayor probabilidad de detección y un sesgo cercano al ideal (1), y captura muchos más eventos severos de 25,4 mm/6 h y 50,4 mm/6 h, mientras que los demás modelos subestimaron considerablemente la detección.

### Debate sobre el Error Sistemático (Sesgo) en los Andes

Enver Ramirez planteó la presencia de un sesgo de precipitación excesiva sobre la región andina. Daniel Vila explicó que la estimación satelital de referencia (GPM-IMERG) tiene limitaciones importantes en topografías complejas y con nieve, y sugirió que la propia referencia observacional podría ser incorrecta. Pedro Peixoto y Saulo destacaron que es posible realizar pruebas sencillas refinando la resolución horizontal de la malla variable sobre los Andes, pero modificar la coordenada vertical en el código (como la coordenada eta del ETA, de Mesinger) sería estructuralmente muy complejo y difícil en el MPAS.

## Agenda 4 - Definición de los Componentes de Océanos y Criosfera del MONAN

Ronald Buss presentó el progreso técnico del equipo del INPE (13 integrantes, entre ellos Emanuel Giarola, Rosio Camayo, Fernanda Casagrande, Luciano Pezzi, Helena Soares, Regiane Moura, Priscila Farias, Vinicio Santos, Breno Tramontini, Vitor Pereira, Mariana Gandra y Leticia Stachelski), en colaboración con COPPE/UFRJ (profesor Afonso Paiva, Mariela Gabioux, Efraime Daniel, Ana Carine Resende, Aron Nunes, Fernando Dix Barberini).

### Intercomparación MOM6 vs. HYCOM

* **Metodología:** Simulación climatológica global larga de 21 años (2004 a 2024), resolución de 1/4° (~25 km en el ecuador), forzamiento ERA-5 y condición inicial de GLORYS diario, en la supercomputadora Jaci.
* Malla vertical de 41 capas híbridas, con mayor detalle en el océano superior.
* La batimetría del MOM6 se refinó con la base de datos **GEBCO 2023** (15 segundos de arco, resolviendo problemas de representación de la costa brasileña y del posicionamiento del eje principal de la Corriente de Brasil, que presentaba errores en la coordenada anterior del BESM basada en ETOPO1). El HYCOM utilizó la base NAVO.
* El hielo marino del MOM6 utilizó el modelo **SIS2**, acoplado mediante FMS, mientras que el HYCOM utilizó el *Energy Loan Ice Model*.
* Las simulaciones alcanzaron el equilibrio a partir del segundo año (2005), según las métricas de energía cinética media y temperatura potencial media. Las principales masas de agua (Agua Intermedia Antártica, Agua Profunda del Atlántico Norte y Agua de Fondo Antártica) estuvieron muy bien representadas en los diagramas TS frente a la climatología WOA23.
* El HYCOM (Mconf de Remo) subestima la extensión estacional del hielo marino tanto en el hemisferio norte como en el sur, en comparación con MOM6 y los datos satelitales.
* Ambos modelos representaron bien el transporte de masa acumulado a lo largo de la Corriente de Brasil hasta 500 m de profundidad y la Corriente Costera de Brasil (esencial para la ecología y la pesca de la sardina en el sur y sudeste de Brasil).

### Consenso sobre la Elección

El grupo recomendó la adopción de **MOM6 + SIS2**. Motivos: física y métodos numéricos más actuales, mayor comunidad internacional de desarrolladores y experiencia previa del INPE con BESM. Las simulaciones operativas con MOM6 también se adoptarán en Estados Unidos en los próximos años (según Gustavo Marques). El profesor Afonso Paiva destacó el trabajo del equipo joven y señaló que ambos modelos proporcionaron resultados excelentes y equivalentes. Sugirió que las intercomparaciones continúen incluso después de la adopción del MOM6, para la formación de personal.

### Participación del INPO y Contratación Tecnológica

La Dra. Janice Trotte-Duhá (directora del INPO) informó sobre el trabajo de reestructuración del Banco Nacional de Datos Oceanográficos (BNDO) y la implementación de una capa nacional de interoperabilidad de datos para la modelización oceánica, superando los silos de datos. El INPO, en cooperación con Mercator Internacional (gemelo digital del océano Atlántico Sur), el INPE y otras instituciones marinas de la CIRME (Plan Sectorial para los Recursos del Mar), propuso una **Contratación Tecnológica en el marco del programa 'SOS Clima Brasil' del FNDCT/MCTI**. La propuesta tiene tres ejes: reestructuración del BNDO, interoperabilidad de datos y atención a las necesidades de la modelización oceánica. Janice solicitó que la propuesta se finalizara antes del fin de semana y que se mencionara al MONAN de forma expresa y específica para trabajar conjuntamente.

## Agenda 5 - Proyecto de Acoplamiento Océano-Atmósfera

Paulo Yoshio Kubota presentó los avances del GTA-DIMNT (Emanuel Giarola, Rosio Camayo, Eduardo Khamis, Daniel Massaru, Carlos Renato, João Messias). El objetivo es acoplar el MONAN-A 2.0 (malla Voronoi de ~120 km) al modelo MOM6+SIS2 (malla tripolar de 1°).

### Aspectos Computacionales y de Implementación

* Utiliza el framework **NUOPC / ESMF 8.9.1** en la supercomputadora Jaci, con el mediador explícito **CMEPS** (con fórmulas bulk NCAR COARE 3.0). La elección de un mediador explícito fue una decisión de diseño crucial para que las interpolaciones y el remallado Voronoi-LatLon fueran visibles y auditables.
* El mediador dirige la ejecución, el paso de tiempo, la inicialización y la finalización de ambos modelos, y controla el intercambio de 14 campos. El prototipo ya se ejecuta de forma secuencial o concurrente con hasta 7.680 núcleos. Los parámetros se configuran mediante XML (sin recompilación).
* El orden de ejecución se modificó recientemente para ejecutar primero el océano.

### Desafíos y Correcciones (Proceso de Depuración)

1. *Malla Oceánica Incorrecta en el Mediador*: Se corrigió cambiando las dimensiones de 1440x720 a las reales del MOM6 tripolar (180x155) y utilizando las coordenadas de las celdas T directamente de la supermalla FRE-NCtools, lo que eliminó la discontinuidad en el océano Índico.
2. *Inyección de SST/Skintemp*: Se corrigió un error de índice escalar (faltaba el término `iCell` en el bucle), se resolvió el bloqueo del arranque en frío en el paso 1 suspendiendo las inyecciones antes del avance del MOM6, y se añadieron una SST de respaldo variable con la latitud (de 298 K a 271,35 K) y una protección frente a NaN en `mpas_import`.
3. *Extrapolación de SST en el Mediador*: El sistema predeterminado del ESMF (`zeroregion` y `srcMaskValues`) acumulaba valores obsoletos. Se sustituyó por una combinación explícita de interpolación bilineal y vecino más cercano (NN), adaptada desde `coupling_0.0.3` (búferes puestos a cero antes de cada remallado, NN para los huecos, límite inferior de seguridad SST_BULK_FALLBACK=290K y suavizado 50/50).
4. *Artefactos de la Máscara Costera*: Se corrigieron añadiendo la máscara real del MOM6 (`So_omask`) al `importState` del mediador (sincronizada con `GRIDITEM_MASK`).
5. *Malla Voronoi del MPAS en el Mediador*: Como los conectores NUOPC (IPDv3) no propagan la geometría `ESMF_Mesh` (los campos llegan como Grid de rango 2), el mediador pasó a cargar la malla `mpas_mesh.nc` directamente mediante `ESMF_MeshCreate`.
6. *Malla ATM Dinámica + Celdas Halo*: Se corrigió el error de acceso fuera de los límites (`out-of-bounds`). La malla ATM del mediador pasó a seguir al modelo activo (360x180 con MPAS, 640x320 con DATM/JRA55); los bucles se corrigieron para utilizar `nCells` como límite en lugar de `size(atm_bnd%sst)`, debido a las celdas halo.
7. *Rugosidad Oceánica (`Sf_zorl`)*: Se produjo una incompatibilidad intratable entre los espacios de índices del data-domain y el compute-domain del MOM6 (`forces%ustar` vs. `Ocean_sfc%ustar`). Se revirtió el cálculo y se mantuvo con un valor de respaldo estable de 0,01 m hasta que se implemente una solución interna del MOM6.

### Lecciones Aprendidas y Cuestiones Pendientes

* Es necesario mejorar la conservación de masa y energía en la interpolación (actualmente se utilizan métodos no conservativos). La principal dificultad es implementar una interpolación conservativa de primer orden para calor, masa y momento.
* Persisten cuestiones en *Si_ifrac* (fracción de hielo marino con artefactos de borde de interpolación en *state_get_field_1d*), *So_s*, *So_u* y *So_v*, pendientes en el cap del MPAS, y la reconciliación de *Sa_lfrac_mpas* en el mediador.
* Los próximos pasos incluyen probar el **MPAS-ESM** del NCAR/Boulder (que utiliza ESMF+NUOPC+CMEPS, un enfoque idéntico al del INPE) como referencia, evaluar si se puede reutilizar el cap del MPAS del NCAR y adaptar elementos de `coupling_0.0.3`.
* Pedro Dias y Saulo elogiaron ampliamente al grupo de Paulo Kubota por su rapidez y, sobre todo, por haber mantenido los códigos originales del MPAS y MOM6 sin modificaciones, evitando una pesadilla de mantenimiento.

## Agenda 6 - Actividades Preoperativas de la Versión MONAN-AI

Haroldo de Campos Velho presentó la propuesta para desarrollar y operar un modelo de inteligencia artificial de predicción del tiempo y del clima (**MONAN-AI**), siguiendo los avances del ECMWF (sistema AIFS operativo desde febrero de 2025, que supera a los modelos basados en la física en los plazos más largos).

### Aspectos Técnicos

* Utiliza un mapeo de malla esférica en 3D y 2D denominado **HEALPix Grids** y una red neuronal convolucional generativa de difusión (basada en *flow matching*).
* Escalas temporales: Predicción subestacional (S2S) de 7 a 15 días y predicción climática mensual.
* Los primeros resultados en baja resolución (~100 km), con el objetivo de alcanzar 5 km, mostraron un desempeño razonable (hasta un 50 % de acierto) en la simulación de la Oscilación de Madden-Julian durante hasta 10–12 días, capturando también la ZCAS.
* Código desarrollado en Python, ejecutado en GPU A100 y H100, con necesidad de migrar a la arquitectura B200.

### Debate

* Pedro Dias argumentó que es necesario evaluar con cautela los modelos de IA y sugirió compararlos no solo con modelos puramente físicos, sino también con referencias estadísticas tradicionales de posprocesamiento muy sencillas y económicas, para verificar si la mejora real de la habilidad predictiva compensa el costo. Haroldo y Luiz Flávio argumentaron que la IA es mucho más económica desde el punto de vista computacional y ofrece excelentes tiempos de ejecución.
* Afonso Paiva informó de que COPPE también está utilizando IA (incluidos modelos de difusión) para mejorar las predicciones oceánicas y manifestó gran interés en colaborar. Coincidió en que la IA y los modelos físicos avanzan juntos (IA entrenada con reanálisis o guiada por restricciones físicas - PINN - redes neuronales informadas por la física).
* Luiz Flávio propuso centrar la IA en sustituir parametrizaciones físicas extremadamente costosas del modelo numérico tradicional, como la radiación (que consume mucho tiempo y aún no se ha adaptado para GPU) o los procesos químicos. Esto reduciría drásticamente el tiempo de ejecución y permitiría resoluciones horizontales mucho más finas.
* Haroldo destacó la necesidad de una decisión formal del Comité Científico para utilizar IA en el MONAN, a fin de estructurar las tareas, el cronograma y un equipo, y señaló que la convocatoria TR-11 del MCTI es una excelente oportunidad para captar recursos para esta área de IA, en paralelo a TR-12 (clima).
* Saulo propuso, y el comité aprobó, la creación de un **Macrogrupo de IA en el MONAN**, dirigido por Haroldo de Campos Velho, para organizar el trabajo interno en el INPE y buscar colaboraciones externas.
* El comité decidió programar una nueva reunión dentro de dos meses (octubre de 2026), con el uso de la IA en el MONAN como punto principal del orden del día, para permitir el establecimiento de un plan formal.

## Otros Asuntos

* Francisco Quixaba Filho preguntó a Pedro Dias sobre el convenio INMET-CPTEC (puede consultarse en la grabación del chat a partir de 58'46").
* Haroldo de Campos Velho sugirió en el chat utilizar Conferênciaweb de la RNP para grabar las reuniones.
* Carlos Bastarz sugirió estandarizar el entorno de desarrollo mediante el uso de contenedores.

## Acciones para la Próxima Reunión

1. Enviar las cuatro presentaciones (Club de la Atmósfera, Haroldo, Ronald, Kubota) a Gilson para su distribución a todos los miembros del CC (sugerencia de Saulo).
2. Crear y formalizar el Macrogrupo de IA del MONAN, dirigido por Haroldo de Campos Velho, organizando el trabajo interno y buscando colaboraciones externas (COPPE/UFRJ).
3. Elaborar una propuesta en el marco de TR-11 (Inteligencia Artificial) para obtener recursos destinados a la IA en el MONAN.
4. Finalizar antes del fin de semana la propuesta de Contratación Tecnológica de FINEP/MCTI (SOS Clima Brasil) del INPE junto con el INPO, mencionando expresamente al MONAN.
5. La División de Operaciones del INPE (Enver Ramirez) deberá evaluar la incorporación de la versión regional de 5 km del MONAN como operativa.
6. El grupo de superficie deberá trabajar en la verificación de la magnitud del viento a 10 metros para reducir los errores sistemáticos identificados.
7. Continuar las comparaciones entre MOM6 y HYCOM para la evolución y formación de personal, incluso después de la elección del MOM6.
8. Estudiar el uso de la salida del MONAN para alimentar otras mallas (método definido por Paulo Kubota).
9. Aplicar métricas estadísticas robustas de dispersión de puntos entre MOM6 y HYCOM en la superficie.
10. Mejorar la conservación de masa y energía (interpolación conservativa de primer orden) en el acoplador y aumentar la resolución del océano y la atmósfera.
11. Probar el MPAS-ESM del NCAR como referencia de acoplamiento.
12. Programar una nueva reunión dentro de dos meses (octubre de 2026), centrada principalmente en la Inteligencia Artificial en el MONAN.

??? example "Archivos adjuntos"

    * [Grabación de la Reunión del Comité Científico del MONAN - 19 de agosto de 2026](https://youtu.be/6SxmaQGU1cg?si=r11rUiHZ8_7NEFRT)
    * [Presentación de Saulo Freitas](https://drive.google.com/file/d/1TiWPKP6Vk5Lx7H1VDbgUMGHgY8W832lq/view?usp=drive_link)
    * [Presentación de Paulo Kubota](https://drive.google.com/file/d/1m-kOUVE_uERcUkGBkiyPgiLIkDFMnt4U/view?usp=drive_link)
    * [Presentación de Haroldo F. de Campos Velho](https://drive.google.com/file/d/1exiFAlTqvdR7kS9hMT2OJUNtx-6TLqjK/view?usp=drive_link)
    * [Presentación de Ronald Buss](https://drive.google.com/file/d/1b3qmYQk2Qc0pmbfMoBkiwwq7m9w2Tr1s/view?usp=drive_link)
