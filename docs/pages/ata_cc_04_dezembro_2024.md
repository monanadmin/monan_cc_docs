!!! warning "Ata produzida com auxílio de IA"

    Esta ata foi produzida utilizando inteligência artificial (IA). O conteúdo foi revisado pelo relator mas pode conter imprecisões ou interpretações errôneas. Para uso oficial, consulte o [administrador](mailto:mcstu.inpe@gmail.com) da página para confirmar as informações.

# 04 de Dezembro de 2024

## ATA 002/2024 - Revisão 003

![type:video](https://youtube.com/embed/fuaIPofBWuQ)

??? info "Informações"


    === "Ata da Reunião do Comitê Científico do MONAN"

         * Preparado por: Carlos Frederico Bastarz - relator e Gilson de Paula e Silva - assessor administrativo
         * 04 de Dezembro de 2024

         **Coordenação:** Saulo Ribeiro de Freitas e Pedro Leite da Silva Dias

    === "Histórico de Revisões"

        | REVISÃO | DATA DA REVISÃO | ALTERAÇÕES |
        |---------|-----------------|------------|
        | R003    | 21/10/2025      | Publicação online |

    === "Participações"

        **Membros Participantes**

        * **Brasil**

            - **INPE:** Antonio Ocimar Manzi, Carlos Frederico Bastarz, João Gerd Zell de Mattos, Jorge Luís Gomes, Luciano Ponzi Pezzi, Luiz Flávio Rodrigues, Paulo Yoshio Kubota, Renato Galante Negri, Saulo Ribeiro de Freitas.
            - **UFRJ:** Afonso de Moraes Paiva
            - **MCTI:** Antonio Marcos Mendonça
            - **WMO:** Daniel Alejandro Vila
            - **UFCG:** Enio Pereira Souza
            - **UFPel:** Fabricio Pereira Härter
            - **FUNCEME:** Francisco das Chagas Vasconcelos Júnior
            - **INMET:** Gilberto Ricardo Bonatti
            - **FAB:** José Hélio Abreu Nogueira
            - **UFPA:** Julia Clarinda Paiva Cohen
            - **INPA:** Luiz Antonio Candido
            - **CENSIPAM:** Marcio Nirlando Gomes Lopes
            - **USP:** Pedro Leite da Silva Dias, Ricardo de Camargo
            - **LNCC:** Roberto P. Souto

        * **Argentina**:
        
            - **SMN:** Yanina Garcia Skabar

        **Participantes Convidados**

        * **Brasil**
        
            - **INPE:** Carlos Renato Souza, Eduardo Georges Khamis, João Messias, Marcelo Paiva Ramos, Rosio Del Pilar Camayo Maita
            - **UFRGS:** Juliana Costi
            - **UFF:** Lucia Drummond, Mateus Silva de Melo
            - **ELETROBRAS:** Marlos José Ribeiro Guimarães

        * **Chile**
            
            - **UV:** Jorge Arevalo
            
        * **Costa Rica**
            
            - **UCR:** Daniel Poleo


    === "Registro"

        **Local, Data e Hora**

        * Plataforma ConferênciaWeb
        * 04 de Dezembro de 2024, das 10:00 horas às 12:00 horas

        **Link da gravação**

        * [https://youtube.com/embed/fuaIPofBWuQ](https://youtube.com/embed/fuaIPofBWuQ)

        **Repositório das apresentações**

        * [https://drive.google.com/drive/folders/1NJfrOA4qc-pRany2J37wggzCiRsoe4GZ?usp=drive_link](https://drive.google.com/drive/folders/1NJfrOA4qc-pRany2J37wggzCiRsoe4GZ?usp=drive_link)


## Pauta 1 - Apresentação sobre o uso de Computação em Nuvem para Modelagem de Previsão do Tempo

A reunião teve início com a apresentação da Professora Lúcia M. A. Drummond (UFF) e do aluno Mateus S. de Melo sobre o uso de computação em nuvem para modelagem de previsão do tempo. A Professora Lúcia explicou que o trabalho é fruto da dissertação de mestrado de Mateus, orientada por ela e por Roberto P. Souto do LNCC. Roberto agradeceu a Lúcia e Mateus pela apresentação, destacando o trabalho como o mestrado de Mateus no tema de computação em nuvem aplicada a modelos de previsão. Roberto ressaltou a tendência de usar a nuvem como plataforma para aplicações de alto desempenho (HPC), mencionando que grandes usuários de supercomputação, como a Petrobras, já realizam o transbordo de aplicações para a nuvem em momentos de alta demanda. Ele enfatizou que a computação em nuvem é cara, e o desafio é minimizar o custo sem prejudicar o tempo.

Mateus detalhou que o objetivo do trabalho foi propor uma abordagem para reduzir os custos financeiros associados à utilização de clusters na nuvem para a execução de modelos de previsão do tempo. Duas estratégias principais foram desenvolvidas: 1) A utilização exclusiva de instâncias Spot, que são mais econômicas, mas sujeitas à revogação de acesso; e 2) Um algoritmo de seleção de máquinas virtuais aliado a uma estratégia de reescalonamento em instâncias On-Demand, que são mais caras, porém não sujeitas à revogação. O modelo BRAMS foi empregado para os testes. O supercomputador Santos Dumont do LNCC foi utilizado como referência para comparação, com capacidade de 5,1 petaflops. Na nuvem, o serviço Amazon EC2 foi usado para instâncias virtuais, com diferentes famílias de configurações. A ferramenta AWS Parallel Cluster foi utilizada para criar e gerenciar os clusters na nuvem.

A primeira estratégia, de reescalonamento em instâncias Spot, incluiu um procedimento que monitorava falhas e revogações de jobs, configurando o BRAMS para reiniciar a partir de checkpoints, garantindo um ambiente tolerante a falhas. A execução do BRAMS foi comparada no Santos Dumont e na AWS (instâncias R5n.12xlarge), revelando que, embora o Santos Dumont fosse inicialmente mais rápido com menos nós, a diferença diminuía com o aumento do número de nós. O custo por hora de uso foi significativamente menor nas instâncias Spot (U$1,744) em comparação com as On-Demand (U$3,576), com baixo custo de gravação de checkpoints. As simulações de revogações indicaram um aumento considerável no tempo de execução e no custo, o que motivou a segunda estratégia.

A segunda estratégia consistiu em um algoritmo de seleção de instâncias para encontrar a melhor relação custo-benefício e um reescalonamento para instâncias On-Demand em caso de revogação de instâncias Spot. Uma arquitetura de cluster com três filas (Spot, On-Demand e controladora) foi implementada. A análise de arquitetura para o Head Node sugeriu que o uso de instâncias mais baratas (ex: T2.micro) não impactava significativamente o desempenho e reduzia o custo em 20%. Para o Compute Node, instâncias com arquitetura ARM (Graviton) demonstraram custos de execução menores em comparação com CPUs x86.

A aplicação dessas propostas com o modelo BRAMS resultou em reduções de custo de até 89% no melhor caso de teste, combinando instâncias Spot com reescalonamento em On-Demand. A estratégia de reescalonamento em On-Demand foi mais vantajosa quando as revogações ocorriam no meio ou final da execução. A identificação e exclusão da recriação redundante de arquivos de radiação durante o reescalonamento resultaram em uma redução adicional de 72% a 76% no custo. Testes com um domínio espacial maior (5km, 48h de previsão) confirmaram a redução de custo em quase 90% com o uso potencial de instâncias Spot. A comparação com o Santos Dumont para o domínio maior mostrou um tempo de execução ligeiramente maior no supercomputador e um alto tempo de espera em ambientes on-premises.

As conclusões apontaram que a migração de aplicações para a nuvem deve considerar tanto o tempo quanto o custo. O uso de instâncias Spot e o algoritmo de seleção de instâncias se mostraram eficazes na redução de custos. As Instâncias ARM são mais econômicas, e o reescalonamento em On-Demand é benéfico para revogações. A nuvem oferece menores tempos de execução e de espera em comparação com sistemas on-premises. Os trabalhos futuros incluem o monitoramento de variações de preço Spot durante a execução, a reutilização de arquivos de radiação e a investigação de variações de desempenho.

Pedro Dias questionou sobre a aparente anomalia no gráfico comparativo de tempo Santos Dumont vs Nuvem, onde o Santos Dumont era mais rápido com um nó, mas a nuvem se tornava mais rápida com mais nós. Mateus explicou que isso é um trabalho futuro a ser investigado, possivelmente relacionado a contenção de memória. Pedro elogiou o trabalho, destacando a importância da análise de custos e o potencial para o uso do MONAN em previsões regionais. Lúcia acrescentou que o CNPq já aceita rubricas para pagamento de provedores de nuvem e que existem editais CNPq/AWS que oferecem créditos para projetos de pesquisa. Pedro acrescentou que a FAPESP e outras agências de fomento incentivam o uso de serviços de nuvem para aplicações menores, otimizando o uso de grandes supercomputadores.

## Pauta 2 - Boas-vindas a novos membros do Comitê Científico MONAN

Saulo Freitas deu as boas-vindas a novos membros do comitê científico do MONAN:

* Professor Jorge Arevalo, da Universidade de Valparaíso, Chile, que se apresentou, mencionando sua pesquisa com machine learning para simular processos hidrológicos e seu interesse em colaborar para aprimorar modelos.
* Daniel Poleo, do Instituto Meteorológico de Costa Rica, que estava presente na reunião, mas com problemas no microfone, não conseguiu se apresentar.
* Marlos Guimarães, engenheiro da Eletrobras, que representa o primeiro "stakeholder" a integrar o comitê. Ele também não conseguiu se apresentar no momento.

## Pauta 3 - Informes Gerais dos Componentes do Sistema MONANjoão

### Assimilação de Dados (João Gerd)

João Gerd apresentou as implementações do JEDI (Joint Effort for Data Assimilation Infrastructure) e os planos para o MONAN. O objetivo é expandir a capacidade de assimilação de dados no CPTEC e realizar a transição do JEDI para o MONAN, priorizando avanços na assimilação de dados. Uma colaboração com o NCAR permitiu acoplar o JEDI com a versão atual do MPAS. As vantagens do JEDI incluem suporte a diversos métodos de assimilação, compatibilidade com MPAS global e regional, e suporte a mais sensores e dados de satélite. A estratégia de transição será em fases: 3D-Var-FGAT (a partir de setembro), seguido por 3D-EnVar e, finalmente, Hybrid 3D-EnVar. Os desafios incluem maior demanda computacional para 3D-EnVar, a necessidade de treinamento para o grupo no sistema JEDI (que difere do GSI) e a inclusão de novos dados. O planejamento prevê a validação do 3D-Var-FGAT até junho de 2025 e o sistema híbrido completo até o final de 2026, com expectativas de melhorias na incorporação de sensores e redução de erros.

Pedro Dias indagou sobre a assimilação regional. João Guerd afirmou que, após o foco global, a assimilação regional é um objetivo futuro, o que seria importante para evitar o "Cold Start" em previsões regionais. Pedro perguntou sobre a possibilidade de acelerar o desenvolvimento. João Gerd indicou que o maior desafio é a necessidade de mais pessoas dedicadas 100% à assimilação. Saulo complementou que a aceleração poderia vir de maior interação com a NOAA e o NCAR (com viagens e intercâmbios planejados) e da mobilização da comunidade e parceiros.

### Oceanos e Criosfera (Rosio Camayo)

Rosio Camayo apresentou os esforços para a escolha da componente Oceânica para o MONAN. O grupo está avaliando candidatos como o HYCOM e o MOM6. A comunidade internacional utiliza modelos como HYCOM, MOM6 e NEMO. O INPE tem experiência com modelos acoplados como BAM e MOM6 com gelo marinho CICE6. A comunidade oceanográfica brasileira possui forte experiência com o HYCOM, o que justifica a parceria com o Professor Afonso Paiva. O modelo MPAS-Ocean foi considerado, mas seu suporte será descontinuado. A componente oceânica do MONAN deve resolver fenômenos e padrões climáticos principais, acoplar-se a futuras componentes (ondas, ciclos biogeoquímicos) e fornecer dados de condições de fronteira para modelos regionais. O grande desafio é a escolha do acoplador.

A estratégia de avaliação envolve a implementação de HYCOM e MOM6 no EGEON, a configuração de experimentos globais e a avaliação física e computacional. Os resultados preliminares incluem a compilação e rodada satisfatória do HYCOM no EGEON para o ano de 2016, que mostrou o padrão espacial da Temperatura da Superfície do Mar (TSM), exceto para o Pacífico Sul e Leste, onde houve deficiência em relação ao GLORYS de 9 km. A implementação do MOM6 Global no EGEON para o ano de 2015 mostrou deficiências na região tropical, necessitando de equilíbrio para representar as temperaturas máximas no Atlântico e Pacífico tropical.

Os próximos passos incluem rodadas longas de 20 anos (2004-2023) com HYCOM e MOM6, forçando com MERRA-2 e testando diferentes condições iniciais climatológicas para o spinup. A definição de parâmetros físicos e a avaliação da performance física, numérica e computacional, com colaboração da comunidade, são cruciais. Pedro Dias observou que o problema na costa oeste da América do Sul é recorrente e pode estar ligado à reprodução de nuvens baixas pelo modelo atmosférico ou à resolução em função da batimetria. Ele sugeriu parcerias para explorar essas deficiências. Luciano complementou que o problema pode ser um impacto da forçante colocada no modelo oceânico, possivelmente um "upwelling" exacerbado, e que as nuvens são um "prato cheio" para explorar com as parametrizações do MONAN.

### Atmosfera (Paulo Kubota)

Paulo Kubota apresentou as realizações do grupo da atmosfera em 2024 e o planejamento para 2025, visando um estado de modelagem do sistema terrestre. As metas de 2024 incluíram:

* Correções no geopotencial e interpolação vertical, ajustando o diagnóstico do modelo para maior compatibilidade com reanálises e continuidade em regiões de topografia elevada.
* Cálculo de médias para variáveis prognósticas e diagnósticas, essencial para simulações longas.
* Implementação da parametrização de convecção Grell-Freitas com representação de piscinas frias.
* Pós-processamento para grade regular, com modificações nos softwares `convert_mpas` e `mpas_cat`, facilitando a visualização e uso dos dados.
* Desenvolvimento de um software de análise energética modal por Paulo Bon, para diagnóstico das simulações.
* Avaliação de simulações de alta resolução (3km) para eventos na Amazônia pelo Dr. Jonathan, comparando com o modelo WRF-LES e indicando a necessidade de ajustes.
* Pré-processamento de dados estáticos (topografia, albedo, vegetação, solo) e dados oceânicos (TSM, gelo marinho) para simulações de médio e longo prazo.
* Testes de simulações de médio e longo prazo (ex: El Niño e La Niña 97-99) mostraram boa resposta do modelo às forçantes climáticas e reprodução da climatologia de precipitação.
* Organização de 14 reuniões gerais do MONAN e do primeiro treinamento MONAN/JEDI.
* Disponibilização de uma versão do MONAN para notebooks e PCs no GitHub.
* Trabalhos em microfísica de nuvens, com uma interface para acoplar diferentes parametrizações e planos para implementar uma nova formulação com graupel.

O planejamento para 2025 tem como principal objetivo tornar o MONAN operacional no primeiro semestre, utilizando análises de alta resolução para inicialização. Outras metas incluem: trabalhar em novas formulações de convecção de Grell (com subsidência 3D lateral), implementação da microfísica WSM6, desenvolvimento de uma camada limite seca e úmida (por Guilherme Machado), modelos de aerossol (Carla Longo e Rosário), emulação de assimilação de dados por rede neural (Otávio, Haroldo, Saulo), e pesquisas em dinâmica do MPAS para escala de nuvens.

Pedro Dias elogiou a apresentação, destacando a relevância dos temas para os trópicos. Ele questionou sobre o gráfico de pressão, sugerindo investigação de uma queda abrupta em julho de 97, e ressaltou a importância de diagnósticos de conservação de massa e água durante a rodada do modelo na malha original. Saulo reforçou a importância das reuniões gerais quinzenais do MONAN, organizadas e conduzidas por Paulo Kubota.

### Superfície (Antonio Manzi)

Manzi apresentou a composição do grupo de superfície e as atividades de 2024, focadas na avaliação de esquemas de superfície para previsão do tempo, e o planejamento para 2025. O grupo inclui Manzi (membro nato), Paulo Kubota (integração), João Gerd (assimilação de água no solo), e colaborações com outros grupos e Celso von Randow. Está prevista a contratação de dois novos pesquisadores em 2025 para processos físicos de superfície/ecofisiologia e vegetação dinâmica/ciclo de nutrientes, o que aumentará significativamente o potencial de desenvolvimento.

As prioridades de 2024 incluíram a atualização do mapa de tipos de vegetação sobre o Brasil, em colaboração com o sensoriamento remoto do INPE (Cláudio Almeida, Luciana Soler) e Embrapa, utilizando dados do IBGE, PRODES, TerraClass e MapBiomas. Também foi desenvolvido um balanço hídrico global para inicialização do conteúdo de água no solo, usando reanálises e dados de precipitação (MERGE) e radiação de satélite. Houve cooperação com Otávio Acevedo para avaliação de fluxo de superfície no bioma Pampa.

O planejamento para 2025 visa vitalizar e operacionalizar o esquema de balanço hídrico para previsão do tempo, com foco na inserção de água no solo e seu impacto na partição de energia. A finalização do mapa de tipos de vegetação e a seleção do esquema de superfície para o MONAN e aplicações climáticas também são prioridades. Candidatos incluem NOAH-MP (já embarcado no MPAS), IBIS, JULES e CLM. O NOAH-MP no MPAS apresenta desvantagens como uma camada de solo rasa (2m com 4 camadas), e ausência de alocação de carbono em raízes/folhas e dinâmica da vegetação.

Manzi explicou os componentes dos esquemas de superfície: balanço radiativo, partição de energia (fluxos de calor latente e sensível), balanço hídrico, fisiologia vegetal e ciclos biogeoquímicos. Ele detalhou as equações e processos da radiação, partição de energia (incluindo armazenamento no solo e vegetação) e evapotranspiração (evaporação direta do solo, transpiração e evaporação de água interceptada). O balanço hídrico no solo (precipitação, escoamento, drenagem, evapotranspiração) também foi descrito. O esquema de superfície NOAH no MONAN 1.0 (MPAS 8.1) possui quatro camadas de solo e requer condições de contorno e iniciais, mas não trata estoques e fluxos de carbono.

A avaliação de NOAH vs NOAH-MP foi apresentada com base em simulações realizadas por Paulo Kubota com MPAS 8.2 (com NOAH-MP e uma versão corrigida) e MPAS 8.1 (com NOAH). Análises de balanço de energia em um ponto na Amazônia (2.5°S, 60°W) revelaram que o NOAH-MP original apresentava um grande desbalanço (quase -5 W/m²) e dificuldade em equilibrar a temperatura do solo, necessitando de muitos ajustes. O MONAN 1.0 (MPAS 8.1 com NOAH) mostrou um resíduo do balanço de energia próximo de zero na Amazônia. A versão MPAS 8.2 com NOAH teve um resíduo mais ruidoso, mas ainda próximo de zero. A versão NOAH-MP corrigida (pelo Paulo Kubota) ainda apresentou um desbalanço persistente (-5 W/m²) e um secamento do solo no primeiro ano, com redução do fluxo de calor latente e aumento do sensível, o que não foi observado em outras integrações. Isso sugere que o NOAH-MP, apesar de ser um código moderno, requer considerável trabalho e calibração.

Comparações anuais globais (60°S a 60°N) entre NOAH e NOAH-MP (corrigido) indicaram que o NOAH-MP tem mais radiação solar incidente, menor albedo, maior emissão de radiação de onda longa, e um saldo de radiação menor. O fluxo de calor sensível é ligeiramente maior e o latente é menor. A temperatura em 2m aumentou em 1.5°C na região tropical, e a umidade específica em 2m é muito maior com NOAH-MP, que parece ser um erro de diagnóstico. Análises do ciclo diurno médio (31 dias) na Amazônia e Saara mostraram que, na Amazônia, o NOAH-MP teve uma atmosfera mais transparente (maior radiação solar incidente), saldo de radiação maior e fluxo de calor latente menor (exceto pela manhã), com fluxo de calor sensível maior. O fluxo de calor no solo foi muito grande com NOAH-MP. No Saara, o NOAH-MP apresentou menor albedo, resultando em um saldo de radiação maior. O fluxo de calor latente foi praticamente zero, e o fluxo de calor no solo foi maior. As temperaturas do solo foram bem mais quentes com NOAH-MP na Amazônia e Saara. A temperatura em 2m foi maior à noite, com variações estranhas na umidade específica, que já foi corrigida pelo NCAR. A altura da camada limite planetária foi mais desenvolvida com NOAH-MP na Amazônia devido ao aumento do fluxo de calor sensível. O ciclo de precipitação (total e convectiva) apresentou diferenças entre NOAH e NOAH-MP. Manzi concluiu que o NOAH-MP ainda precisa de muito trabalho e calibração, mas o NCAR já realizou algumas correções. Saulo ressaltou a importância de especificar as parametrizações físicas utilizadas ao apresentar resultados.

## Pauta 4 - Validação e Intercomparação Regional do MONAN

Saulo reforçou as principais ações do MONAN, incluindo a criação da versão oficial no GitHub (release 1.1) com scripts e tutoriais, e o trabalho de atualização para a versão 8.22 do MPAS. Ele mencionou os testes contínuos para sintonização e melhoria de vieses, um processo complexo que ainda não atingiu o ponto ideal para testes pré-operacionais. A suite de físicas própria do MONAN inclui novas parametrizações de convecção e microfísica de nuvens. O primeiro treinamento MONAN/JEDI ocorreu em agosto, com 30 pesquisadores e recursos do MCTI. Saulo destacou a capacidade do MONAN de reproduzir eventos extremos, como as inundações no Rio Grande do Sul (abril/maio) e o furacão Beryl, mostrando-se competitivo com o ERA5 e mais consistente com observações (GPM) mesmo em resoluções semelhantes. Ele concluiu que o modelo de superfície e atmosférico é competitivo, e a programação visa coroar em 2026 com a integração de oceanos e assimilação de dados.

Pedro Dias complementou, reiterando a importância da validação contínua do modelo utilizando o sistema de intercomparação de métricas de superfície (T2m, umidade 2m, vento 10m, chuva, radiação), que existe há mais de 20 anos e tem sido eficaz na identificação de problemas em parametrizações. A ideia é estimular o uso do MONAN em centros regionais, expandindo o sistema de validação para receber dados de simulações de parceiros. Ele ressaltou que a experiência diária com previsões pode revelar problemas que longas integrações não mostram. O acesso à supercomputação para centros regionais é crucial, mencionando a expansão do Santos Dumont e a criação de um Portal MONAN no SINPAD. O INPE também planeja abrir acesso para países da América do Sul com a chegada do novo supercomputador.

## Pauta 5 - Atividades da Organização Meteorológica Mundial (OMM) e o MONAN na América Latina

Daniel Vila (OMM) destacou a relevância do MONAN no contexto da iniciativa da ONU "Early Warning for All" (Alerta Temprana para Todos), que visa aprimorar as previsões em todas as escalas temporais. A iniciativa, que deve se estender até 2030, oferece um "bom chão" para o MONAN. Ele mencionou o curso virtual e presencial do INPE para previsores da América do Sul e Central.

Daniel Vila relatou a visita da comitiva do INPE ao escritório regional da OMM nas Américas, onde o MONAN foi um tema central para envolver a comunidade latino-americana (América do Sul, Central, Caribe). Ele apresentou o MONAN para o projeto "Severe Weather Forecast Program" na América Central, gerando grande interesse em usar o MONAN para monitoramento de tempo severo, razão pela qual Daniel Poleo (Costa Rica) participa das reuniões. Na reunião da Associação Regional 3 da OMM (América do Sul), a delegação do Brasil propôs reforçar e estabelecer um mecanismo de coordenação regional para melhorar as capacidades de previsão do sistema terrestre, com o desenvolvimento de modelos numéricos. Esta proposta foi aprovada e servirá de "norte" para apoiar atividades como o MONAN. Daniel Vila expressou a intenção de continuar o "marketing" do MONAN e espera que outros países, como a Argentina, se unam para compartilhar conhecimento e colaborar, com um treinamento para países da América Latina no planejamento futuro.

## Pauta 6 - Considerações Finais e Próximos Passos do MONAN

Saulo Freitas pediu desculpas pelo tempo estendido da reunião e reiterou a disponibilidade total da equipe MONAN para colaborar, tirar dúvidas e apoiar localmente (com orçamento para viagens em 2025) ou via workshops online. Ele enfatizou a importância da comunidade usar, identificar problemas, avaliar e desenvolver novas parametrizações mais adequadas às condições climáticas e territoriais do Brasil, para avançar na qualidade das previsões. Saulo desejou bom final de ano e reforçou as metas para 2025 (sintonizar e operacionalizar o modelo) e 2026 (assimilação de dados, modelagem oceânica, competitividade internacional em tempo médio, e entrada na previsão sub-sazonal/sazonal para ampliar a carteira de produtos do MONAN).

??? example "Anexos"

    * [Gravação da Reunião do Comitê Científico do MONAN - 04 de Dezembro de 2024](https://youtube.com/embed/fuaIPofBWuQ)
    * [Apresentação Saulo Freitas](https://drive.google.com/file/d/1-rgCHTeoIRGuoPNs8RQSvbTC6qBwe0JZ/view?usp=drive_link)
    * [Apresentação Mateus Melo](https://drive.google.com/file/d/1MySKQWlqHXLlmD7_fD7HVZTXDr5ty9r8/view?usp=drive_link)
    * [Apresentação Paulo Kubota](https://drive.google.com/file/d/1e1jNIHirDOX4o4K3wOx44fyT7MSDuAo3/view?usp=drive_link)
    * [Apresentação João Gerd](https://drive.google.com/file/d/1S7pGKKqsqHv554WqyPLHNm27CQdpHsNx/view?usp=drive_link)
    * [Apresentação Antônio Manzi](https://drive.google.com/file/d/1CDrXzdvdr4Br5QFk9dmsyVopsh_CD4Jc/view?usp=drive_link)
    * [Apresentação Rosio Camayo](https://drive.google.com/file/d/1b28Tf0tIzsmaG95TS0pV_8YgXTSkuTYc/view?usp=drive_link)


