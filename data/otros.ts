import type { Punto } from "./tipos";

export const MAS_CONTRA: Punto[] = [
  {
    slug: "melilla-2022",
    grupo: "contra-firme",
    tema: "fronteras",
    solidez: "Dato oficial (Marruecos) y decreto de la Fiscalía",
    titulo: "Al menos 23 muertos en la valla de Melilla",
    resumen: "El 24 de junio de 2022 murieron al menos 23 migrantes en un intento de salto a la valla de Melilla.",
    cifras: [
      { valor: "23", nota: "1", texto: "migrantes muertos el 24 de junio de 2022, según Marruecos" },
    ],
    notas: [
      { marca: "1", texto: "Las ONG elevan la cifra hasta 37. La ONU condenó el uso excesivo de la fuerza." },
      { marca: "+", texto: "La Fiscalía española archivó su investigación en diciembre de 2022 y exoneró a Interior y a la Guardia Civil." },
    ],
    entradilla:
      "Entre 500 y 2.000 personas, en su mayoría de Sudán, Sudán del Sur y Chad, intentaron cruzar la valla.",
    comoPaso: [
      "Marruecos comunicó 23 migrantes y dos gendarmes muertos.",
      "Sánchez elogió ese día el «extraordinario trabajo» del Gobierno marroquí y atribuyó la responsabilidad a las mafias.",
      "La Fiscalía archivó las diligencias el 23 de diciembre de 2022.",
    ],
    defensa: "La Fiscalía no apreció delito en la actuación de los agentes españoles.",
    critica: "El presidente avaló la operación antes de conocerse los hechos y ninguna autoridad ha respondido por las muertes.",
    legal: "Investigación de la Fiscalía archivada en diciembre de 2022.",
    fuentes: [{ titulo: "Wikipedia. Tragedia de la valla de Melilla", url: "https://es.wikipedia.org/wiki/Tragedia_de_la_valla_de_Melilla" }],
  },
  {
    slug: "puertas-giratorias",
    grupo: "contra-firme",
    tema: "instituciones",
    solidez: "Hechos públicos (BOE)",
    titulo: "Del Consejo de Ministros a los órganos de control",
    resumen: "Tres ministros de Sánchez pasaron a la Fiscalía General, el Tribunal Constitucional y el Banco de España.",
    cifras: [
      { valor: "3", nota: "1", texto: "ministros de Sánchez pasaron a dirigir o integrar órganos que deben ser independientes del Gobierno" },
    ],
    notas: [
      {
        marca: "1",
        texto:
          "Dolores Delgado, de ministra de Justicia a fiscal general en 2020. Juan Carlos Campo, ministro de Justicia hasta 2021, magistrado del Constitucional. José Luis Escrivá, de ministro a gobernador del Banco de España en 2024.",
      },
      { marca: "+", texto: "Los tres nombramientos son legales. Campo se abstuvo en las sentencias sobre la amnistía." },
    ],
    entradilla:
      "La Fiscalía, el Tribunal Constitucional y el Banco de España existen para actuar con independencia del Gobierno. En los tres se sienta o se ha sentado un ministro de Sánchez.",
    comoPaso: [
      "Dolores Delgado dejó el Ministerio de Justicia en enero de 2020 y fue nombrada fiscal general del Estado. Ocupó el cargo hasta julio de 2022.",
      "José Luis Escrivá fue el primer ministro en ejercicio que pasó directamente a gobernador del Banco de España, el 6 de septiembre de 2024, con el PP en contra.",
      "Juan Carlos Campo fue ministro de Justicia entre enero de 2020 y julio de 2021 y después magistrado del Tribunal Constitucional.",
    ],
    defensa: "Todos cumplen los requisitos legales y otros gobiernos han situado a personas de su confianza en instituciones.",
    critica: "El paso directo del Gobierno al órgano que debe vigilarlo o contrapesarlo erosiona la apariencia de independencia.",
    fuentes: [
      {
        titulo: "Público. El mandato de Dolores Delgado como fiscal general",
        url: "https://www.publico.es/politica/dolores-delgado-dos-anos-medio-mandato-polemico-fiscal-general.html",
      },
      {
        titulo: "Infobae. Escrivá, gobernador del Banco de España",
        url: "https://www.infobae.com/espana/2024/09/04/sanchez-designa-a-jose-luis-escriva-nuevo-gobernador-del-banco-de-espana-con-el-pp-en-su-contra/",
      },
      {
        titulo: "elDiario.es. Campo se aparta de las sentencias sobre la amnistía",
        url: "https://www.eldiario.es/catalunya/exministro-campo-aparta-sentencias-constitucional-ley-amnistia_1_11625367.html",
      },
    ],
  },
];

export const TRIBUNALES: Punto[] = [
  {
    slug: "hermano-del-presidente",
    grupo: "tribunales",
    tema: "justicia",
    solidez: "Sentencia recurrible (Audiencia de Badajoz)",
    titulo: "El hermano del presidente",
    resumen: "Condenado por prevaricación en julio de 2026. Cabe recurso.",
    cifras: [{ valor: "9 años", nota: "1", texto: "de inhabilitación para David Sánchez por prevaricación administrativa" }],
    notas: [
      {
        marca: "1",
        texto: "Fue contratado por la Diputación de Badajoz en julio de 2017, antes de que su hermano llegara a la Moncloa. Lo condenado es el cambio de puesto de 2022.",
      },
    ],
    entradilla:
      "La Audiencia de Badajoz considera probado que la Diputación adaptó un puesto de trabajo a la medida de David Sánchez Pérez-Castejón.",
    comoPaso: [
      "David Sánchez entró en la Diputación de Badajoz en 2017 como coordinador de los conservatorios. Según la sentencia, fue dejando esas funciones para dedicarse a un programa de ópera ajeno a su contrato.",
      "En 2022 su puesto se transformó en el de jefe de la Oficina de Artes Escénicas. El tribunal concluye que el cambio buscaba dar apariencia de legalidad a una situación que ya se daba de hecho.",
    ],
    defensa: "La sentencia no es firme y la contratación original es anterior a la presidencia de su hermano.",
    critica: "Una administración gobernada por el PSOE creó un puesto a medida para el hermano del presidente del Gobierno.",
    legal: "Sentencia de 14 de julio de 2026. No es firme: cabe recurso.",
    fuentes: [
      {
        titulo: "LegalToday. Condena de la Audiencia de Badajoz",
        url: "https://www.legaltoday.com/practica-juridica/derecho-penal/la-audiencia-de-badajoz-condena-al-hermano-de-pedro-sanchez-a-nueve-anos-de-inhabilitacion-por-prevaricacion-2026-07-14/",
      },
      {
        titulo: "Infobae. Por qué ha sido condenado",
        url: "https://www.infobae.com/espana/2026/07/14/por-que-ha-sido-condenado-david-sanchez-hermano-de-pedro-sanchez-y-las-frases-clave-de-la-sentencia-no-se-lo-puedo-decir/",
      },
    ],
  },
  {
    slug: "esposa-del-presidente",
    grupo: "tribunales",
    tema: "justicia",
    solidez: "Auto de apertura de juicio",
    titulo: "La esposa del presidente",
    resumen: "A juicio con jurado por tráfico de influencias y malversación. Sin fecha.",
    cifras: [],
    notas: [],
    entradilla:
      "Begoña Gómez será juzgada por un jurado popular por la cátedra que dirigió en la Universidad Complutense y por el uso de una asesora de la Moncloa.",
    comoPaso: [
      "La investigación se abrió en abril de 2024. El 21 de septiembre de 2026 el juez Juan Carlos Peinado abrió juicio oral contra Gómez por tráfico de influencias y malversación, y contra su asesora Cristina Álvarez por malversación.",
      "Los hechos son dos: la creación de la cátedra y sus gestiones a favor del empresario Juan Carlos Barrabés, y el uso para fines privados del software de la cátedra y de la asesora pagada por Presidencia.",
    ],
    defensa: "No hay condena. El Gobierno sostiene que la causa nace de denuncias de organizaciones ultras y carece de base.",
    critica: "Un juez ha visto indicios suficientes de que la esposa del presidente usó su posición y medios públicos en beneficio propio.",
    legal: "Pendiente de juicio con jurado en la Audiencia Provincial de Madrid. Rige la presunción de inocencia.",
    fuentes: [
      {
        titulo: "Infobae. El juez envía a Begoña Gómez a juicio con jurado",
        url: "https://www.infobae.com/espana/2026/09/21/el-juez-peinado-envia-a-begona-gomez-a-juicio-ante-un-jurado-popular-en-la-audiencia-provincial-de-madrid-por-malversacion-y-trafico-de-influencias/",
      },
      { titulo: "Wikipedia. Caso Begoña Gómez", url: "https://es.wikipedia.org/wiki/Caso_Bego%C3%B1a_G%C3%B3mez" },
    ],
  },
  {
    slug: "cerdan-y-la-obra-publica",
    grupo: "tribunales",
    tema: "justicia",
    solidez: "Investigación judicial (Audiencia Nacional)",
    titulo: "Santos Cerdán y la obra pública",
    resumen: "14 investigados por presuntos amaños de contratos. Cerdán fue número tres del PSOE.",
    cifras: [{ valor: "14", nota: "1", texto: "investigados por presuntos amaños de obra pública" }],
    notas: [
      { marca: "1", texto: "Ocho directivos ligados a constructoras, cinco políticos o altos cargos y el comisionista Víctor de Aldama." },
    ],
    entradilla:
      "Santos Cerdán sucedió a Ábalos como secretario de Organización del PSOE. Los investigadores lo sitúan al frente de una presunta trama de adjudicaciones amañadas.",
    comoPaso: [
      "La pieza nació del caso mascarillas. Tras renunciar Ábalos a su escaño, el Supremo la envió a la Audiencia Nacional en febrero de 2026.",
      "Se investigan presuntos amaños de contratos de obra pública e irregularidades en contratos de la SEPI. ADIF sigue remitiendo contratos al juzgado.",
    ],
    defensa: "No hay acusación formal ni juicio. Cerdán dimitió de todos sus cargos cuando se conoció el informe policial.",
    critica: "Es el segundo secretario de Organización consecutivo de Sánchez señalado por corrupción.",
    legal: "En instrucción. Rige la presunción de inocencia.",
    fuentes: [
      { titulo: "Moncloa.com. Los 14 investigados", url: "https://www.moncloa.com/2026/03/10/santos-cerdan14-investigados-3364850/" },
      {
        titulo: "El Español. El Supremo deriva la pieza a la Audiencia Nacional",
        url: "https://www.elespanol.com/espana/tribunales/20260202/supremo-deriva-audiencia-causa-amanos-obra-publica-renuncia-abalos-acta-diputado/1003744112875_0.html",
      },
    ],
  },
  {
    slug: "pagos-en-efectivo-del-psoe",
    grupo: "tribunales",
    tema: "justicia",
    solidez: "Investigación judicial (Audiencia Nacional)",
    titulo: "Los pagos en efectivo del PSOE",
    resumen: "Pieza secreta sobre los pagos en metálico de la sede del partido. No hay acusación formal.",
    cifras: [{ valor: "2017–2024", nota: "1", texto: "periodo de pagos en efectivo del PSOE que revisa el juez" }],
    notas: [
      { marca: "1", texto: "La pieza es secreta. No hay acusación formal contra el partido ni contra sus responsables." },
    ],
    entradilla:
      "La Audiencia Nacional examina la contabilidad en efectivo del PSOE para aclarar si lo entregado a Ábalos y a Koldo García cuadra con los gastos que justificaron.",
    comoPaso: [
      "El juez Ismael Moreno pidió al PSOE el detalle de todos los pagos en metálico a sus miembros entre 2017 y 2024. El partido entregó la información en un lápiz de memoria en diciembre de 2025.",
      "El juez abrió entonces una pieza separada y secreta. La causa se alarga por el volumen de documentación.",
    ],
    defensa: "El PSOE entregó la documentación y sostiene que todos los pagos corresponden a gastos justificados.",
    critica: "Un partido que maneja pagos en efectivo durante años no puede acreditar con facilidad su destino.",
    legal: "En instrucción, bajo secreto. Rige la presunción de inocencia.",
    fuentes: [
      {
        titulo: "El Independiente. La causa sobre los pagos del PSOE se alarga",
        url: "https://www.elindependiente.com/espana/2026/09/11/la-causa-sobre-los-pagos-del-psoe-se-alarga-por-el-volumen-de-documentacion-y-efectivo/",
      },
      {
        titulo: "El Debate. El juez abre pieza separada",
        url: "https://www.eldebate.com/espana/20251217/juez-moreno-abre-pieza-separada-sobre-financiacion-ilegal-psoe-recibir-pen-drive-pagos-efectivo_366440.html",
      },
    ],
  },
  {
    slug: "zapatero-y-plus-ultra",
    grupo: "tribunales",
    tema: "justicia",
    solidez: "Investigación judicial (Audiencia Nacional)",
    titulo: "Zapatero y el rescate de Plus Ultra",
    resumen: "El expresidente Zapatero, imputado en mayo de 2026 por el rescate público de la aerolínea.",
    cifras: [{ valor: "53 M€", nota: "1", texto: "de dinero público para rescatar la aerolínea Plus Ultra en 2021" }],
    notas: [
      {
        marca: "1",
        texto: "El juez investiga si José Luis Rodríguez Zapatero presionó para acelerar el rescate y si una sociedad en Dubái cobró el 1 %, 530.000 euros.",
      },
    ],
    entradilla:
      "Es la primera vez en democracia que un expresidente del Gobierno es imputado. El rescate lo aprobó el Gobierno de Sánchez durante la pandemia.",
    comoPaso: [
      "En 2021 el Gobierno rescató Plus Ultra con 53 millones del fondo para empresas estratégicas.",
      "El 19 de mayo de 2026 el juez José Luis Calama imputó a Zapatero por organización criminal, tráfico de influencias y falsedad documental.",
    ],
    defensa: "Zapatero no formaba parte del Gobierno y no hay acusación formal ni juicio.",
    critica: "El Gobierno concedió 53 millones a la aerolínea, y el juez investiga si un expresidente socialista medió para ello.",
    legal: "En instrucción. Rige la presunción de inocencia.",
    fuentes: [
      {
        titulo: "The Objective. La Audiencia Nacional imputa a Zapatero",
        url: "https://theobjective.com/espana/tribunales/2026-05-19/zapatero-imputado-blanqueo-audiencia-nacional/",
      },
    ],
  },
];

export const DEPENDE: Punto[] = [
  {
    slug: "amnistia-por-investidura",
    grupo: "depende",
    tema: "cataluna",
    solidez: "Ley en vigor, avalada por los tribunales",
    titulo: "Amnistía a cambio de la investidura",
    resumen: "Pacificación legal para unos; impunidad comprada para otros.",
    cifras: [],
    notas: [],
    entradilla:
      "La ley de amnistía borró las causas del procés. Se pactó con los partidos de los beneficiarios a cambio de los votos que Sánchez necesitaba para seguir gobernando.",
    comoPaso: [
      "Antes de las elecciones de julio de 2023, Sánchez dijo que la amnistía no entraba en la Constitución, y una decena de sus ministros se había pronunciado en contra.",
      "Tras las elecciones, el PSOE la pactó con Junts y ERC. La ley se publicó en junio de 2024.",
      "El Tribunal de Justicia de la UE la avaló en julio de 2026. El Supremo se negó a aplicarla a la malversación de Carles Puigdemont, y el Constitucional lo corrigió el 6 de octubre de 2026.",
    ],
    defensa: "La ley ha superado el examen del Tribunal Constitucional y de la justicia europea, y Cataluña está más tranquila que en 2017.",
    critica: "El presidente hizo lo contrario de lo que dijo antes de votar, y quienes se beneficiaban de la ley negociaron su contenido.",
    legal: "Ley Orgánica 1/2024, avalada por el Tribunal Constitucional y por el Tribunal de Justicia de la UE.",
    fuentes: [
      { titulo: "BOE. Ley Orgánica 1/2024, de amnistía", url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2024-11776" },
      {
        titulo: "Infobae. Lo que dijeron Sánchez y sus ministros",
        url: "https://www.infobae.com/espana/2023/09/08/pedro-sanchez-dijo-que-la-amnistia-no-entra-dentro-de-la-constitucion-y-una-decena-de-sus-ministros-tambien-se-ha-opuesto-a-ella/",
      },
      {
        titulo: "The Objective. El Supremo y el Tribunal de Justicia de la UE",
        url: "https://theobjective.com/espana/tribunales/2026-09-15/llarena-amnistia-puigdemont-malversacion-tjue/",
      },
      { titulo: "Moncloa.com. El Constitucional avala la amnistía a Puigdemont", url: "https://www.moncloa.com/2026/10/06/constitucional-puigdemont-3443370/" },
    ],
  },
  {
    slug: "giro-del-sahara",
    grupo: "depende",
    tema: "exterior",
    solidez: "Hecho documentado",
    titulo: "El giro sobre el Sáhara",
    resumen: "Sánchez apoyó por carta el plan marroquí en 2022. Argelia suspendió el tratado de amistad.",
    cifras: [],
    notas: [],
    entradilla:
      "En marzo de 2022 España abandonó casi medio siglo de neutralidad sobre el Sáhara Occidental. La decisión se conoció por un comunicado de Marruecos.",
    comoPaso: [
      "Sánchez escribió al rey Mohamed VI que el plan marroquí de autonomía es la base más seria, creíble y realista para resolver el conflicto.",
      "Argelia llamó a consultas a su embajador el 19 de marzo y el 8 de junio de 2022 suspendió el Tratado de Amistad firmado en 2002.",
      "En julio de 2026 Sánchez tenía previsto viajar a Argelia para dar por cerrada la crisis.",
    ],
    defensa: "Normalizó la relación con Marruecos, socio clave en migración, seguridad y comercio.",
    critica: "Una decisión de Estado tomada por carta, sin debate previo, que costó cuatro años de crisis con Argelia y no evitó la crisis de Ceuta de 2026.",
    fuentes: [
      {
        titulo: "Público. Argelia suspende el Tratado de Amistad",
        url: "https://www.publico.es/politica/argelia-suspende-tratado-amistad-espana-posicion-sobre-sahara.html",
      },
      {
        titulo: "Infobae. Viaje de Sánchez a Argelia en 2026",
        url: "https://www.infobae.com/espana/agencias/2026/07/13/sanchez-viajara-el-proximo-lunes-argelia-para-terminar-de-dejar-atras-la-crisis-diplomatica-por-el-sahara/",
      },
    ],
  },
  {
    slug: "no-a-la-guerra-de-iran",
    grupo: "depende",
    tema: "exterior",
    solidez: "Hecho documentado",
    titulo: "El no a la guerra de Irán",
    resumen: "España negó sus bases a Estados Unidos para atacar Irán. Trump amenazó con represalias comerciales.",
    cifras: [],
    notas: [],
    entradilla:
      "Desde el 28 de febrero de 2026 España se opone a la ofensiva de Estados Unidos e Israel contra Irán y no permite usar su territorio para ella.",
    comoPaso: [
      "El Gobierno negó el uso de las bases de Rota y Morón para operaciones de ataque y el 30 de marzo cerró el espacio aéreo a los aviones estadounidenses que participaban en ellas.",
      "Trump respondió con amenazas de sanciones comerciales. España mantuvo sus misiones defensivas y envió una fragata a Chipre.",
    ],
    defensa: "Coherencia con el derecho internacional y con la posición mayoritaria de la opinión pública española.",
    critica: "Enfrentó a España con su principal aliado militar y expuso sus exportaciones a represalias.",
    fuentes: [
      { titulo: "Wikipedia. Spain in the 2026 Iran war", url: "https://en.wikipedia.org/wiki/Spain_in_the_2026_Iran_war" },
      {
        titulo: "CNN. Trump amenaza con cortar el comercio con España",
        url: "https://cnnespanol.cnn.com/2026/03/03/mundo/trump-amenaza-cortar-comercio-espana-gasto-otan-trax",
      },
    ],
  },
  {
    slug: "rechazo-al-5-en-defensa",
    grupo: "depende",
    tema: "exterior",
    solidez: "Hecho documentado",
    titulo: "El rechazo al 5 % en defensa",
    resumen: "España firmó el objetivo de la OTAN, pero anunció que gastará el 2,1 % del PIB.",
    cifras: [],
    notas: [],
    entradilla:
      "En la cumbre de La Haya de junio de 2025 los 32 aliados acordaron gastar el 5 % del PIB en defensa en 2035. España firmó y dijo que no lo cumpliría.",
    comoPaso: [
      "Sánchez sostuvo que no existía una obligación formal y que España gastaría el 2,1 %. El secretario general de la OTAN le concedió por carta «flexibilidad» si cumple los objetivos de capacidades.",
      "En julio de 2026 el Gobierno aprobó 6.287 millones adicionales para alcanzar el 2 % del PIB.",
    ],
    defensa: "Protege el gasto social y cumple los objetivos de capacidades con menos dinero.",
    critica: "España sigue a la cola de la OTAN en gasto sobre el PIB y se expone a represalias de Washington.",
    fuentes: [
      {
        titulo: "Infobae. España firma el 5 %, pero gastará el 2,1 %",
        url: "https://www.infobae.com/america/mundo/2025/06/25/espana-firmo-el-acuerdo-de-la-otan-para-invertir-el-5-de-su-pib-en-defensa-pero-sanchez-dice-que-solo-gastara-21/",
      },
      { titulo: "Qué. Los 6.287 millones adicionales", url: "https://www.que.es/2026/07/09/gasto-defensa-espana-6287-millones-otan/" },
    ],
  },
  {
    slug: "palestina-e-israel",
    grupo: "depende",
    tema: "exterior",
    solidez: "Hecho documentado",
    titulo: "Palestina e Israel",
    resumen: "España reconoció el Estado palestino en 2024 y embargó las armas a Israel en 2025.",
    cifras: [],
    notas: [],
    entradilla:
      "Dos decisiones marcan la posición española sobre la guerra de Gaza: el reconocimiento de Palestina y el embargo de armas a Israel.",
    comoPaso: [
      "El 28 de mayo de 2024 España reconoció el Estado de Palestina, junto a Irlanda y Noruega.",
      "En septiembre de 2025 el Gobierno aprobó por decreto-ley un embargo de armas a Israel, que el Congreso convalidó por 178 votos a 169.",
      "En marzo de 2026 retiró a su embajador en Israel.",
    ],
    defensa: "Aplicó el derecho internacional humanitario antes que otros socios europeos.",
    critica: "Rompió la relación con un aliado y convirtió la política exterior en bandera interna.",
    fuentes: [
      {
        titulo: "La Moncloa. Reconocimiento del Estado de Palestina",
        url: "https://www.lamoncloa.gob.es/consejodeministros/resumenes/paginas/2024/280524-rueda-de-prensa-ministros.aspx",
      },
      {
        titulo: "Infobae. El Congreso convalida el embargo de armas",
        url: "https://www.infobae.com/espana/2025/10/08/el-congreso-convalida-el-decreto-del-embargo-de-armas-a-israel-con-el-apoyo-de-ultima-hora-de-podemos/",
      },
    ],
  },
  {
    slug: "regularizacion-de-2026",
    grupo: "depende",
    tema: "fronteras",
    solidez: "Dato oficial (Ministerio de Inclusión)",
    titulo: "La regularización de 2026",
    resumen: "1,17 millones de solicitudes, la mayor regularización de la democracia.",
    cifras: [
      { valor: "1.174.978", nota: "1", texto: "solicitudes de regularización presentadas hasta el 30 de junio de 2026" },
    ],
    notas: [
      { marca: "1", texto: "A mediados de julio se habían admitido a trámite 822.000, lo que ya da derecho a residir y trabajar. La de 2005 benefició a unas 700.000 personas." },
    ],
    entradilla:
      "El Gobierno abrió por real decreto un proceso extraordinario para dar papeles a extranjeros que ya vivían en España.",
    comoPaso: [
      "El Real Decreto 316/2026 abrió el plazo del 16 de abril al 30 de junio de 2026.",
      "Un mes después de cerrarse el plazo se produjo la entrada masiva en Ceuta.",
    ],
    defensa: "Saca de la economía sumergida a cientos de miles de personas que ya trabajaban aquí y aumenta la recaudación.",
    critica: "Premia la entrada irregular y se aprobó por decreto, sin pasar por el Congreso.",
    fuentes: [
      {
        titulo: "Moncloa.com. 822.000 solicitudes en trámite",
        url: "https://www.moncloa.com/2026/07/24/regularizacion-extraordinaria-migrantes-822000-3404704/",
      },
      {
        titulo: "Maldita.es. Preguntas y respuestas sobre la regularización",
        url: "https://maldita.es/malditobulo/20260708/regularizacion-extraordinaria-inmigrantes-espana/",
      },
    ],
  },
  {
    slug: "indultos-y-sedicion",
    grupo: "depende",
    tema: "cataluna",
    solidez: "Hecho documentado (BOE)",
    titulo: "Indultos y reforma de la sedición",
    resumen: "El Gobierno indultó a los nueve presos del procés en 2021 y derogó la sedición en 2022.",
    cifras: [],
    notas: [],
    entradilla:
      "Antes de la amnistía hubo dos decisiones penales a favor de los condenados por el procés.",
    comoPaso: [
      "El 22 de junio de 2021 el Consejo de Ministros indultó a los nueve condenados a prisión, con informes en contra del Tribunal Supremo y de la Fiscalía. Se mantuvo la inhabilitación.",
      "En diciembre de 2022 una ley orgánica derogó el delito de sedición y rebajó la malversación sin ánimo de lucro.",
    ],
    defensa: "Abrieron una etapa de diálogo y el indulto es una potestad legal del Gobierno.",
    critica: "El tribunal sentenciador se opuso porque ninguno de los condenados mostró arrepentimiento, y el Código Penal se cambió para casos concretos.",
    fuentes: [
      {
        titulo: "La Moncloa. El Gobierno concede el indulto a los nueve condenados",
        url: "https://www.lamoncloa.gob.es/consejodeministros/resumenes/paginas/2021/220621-cministros.aspx",
      },
      { titulo: "Newtral. Los indultos, explicados", url: "https://www.newtral.es/indulto-presos-proces-gobierno/20210622/" },
      { titulo: "BOE. Ley Orgánica 14/2022", url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2022-21800" },
    ],
  },
  {
    slug: "memoria-democratica",
    grupo: "depende",
    tema: "sociedad",
    solidez: "Ley en vigor (BOE)",
    titulo: "Memoria democrática",
    resumen: "La ley de 2022 amplía el reconocimiento a las víctimas del franquismo.",
    cifras: [],
    notas: [],
    entradilla:
      "La Ley de Memoria Democrática sustituyó a la de 2007 y amplió las políticas de reparación a las víctimas de la Guerra Civil y la dictadura.",
    comoPaso: [
      "La Ley 20/2022 se publicó en octubre de 2022. Entre otras medidas, permite adquirir la nacionalidad a descendientes de exiliados, lo que ha ampliado el censo de españoles en el exterior.",
    ],
    defensa: "Repara a víctimas que llevaban décadas sin reconocimiento y encarga al Estado la búsqueda de desaparecidos.",
    critica: "Reabre un debate que la Transición dio por cerrado y se aprobó sin el apoyo de la oposición.",
    fuentes: [{ titulo: "BOE. Ley 20/2022, de Memoria Democrática", url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2022-17099" }],
  },
  {
    slug: "eutanasia-y-ley-trans",
    grupo: "depende",
    tema: "sociedad",
    solidez: "Leyes en vigor (BOE)",
    titulo: "Eutanasia y ley trans",
    resumen: "Dos leyes de derechos civiles que dividen por convicciones, no por datos.",
    cifras: [],
    notas: [],
    entradilla:
      "España reguló la eutanasia en 2021 y el cambio registral de sexo por autodeterminación en 2023.",
    comoPaso: [
      "La Ley Orgánica 3/2021 reconoce el derecho a pedir ayuda para morir en casos de enfermedad grave e incurable o padecimiento crónico e imposibilitante.",
      "La Ley 4/2023 permite cambiar el sexo en el Registro Civil sin informes médicos.",
    ],
    defensa: "Amplían la libertad de decisión de cada persona sobre su vida y su identidad.",
    critica: "Las objeciones son éticas en la eutanasia y de garantías en la ley trans, sobre todo respecto a los menores.",
    fuentes: [
      { titulo: "BOE. Ley Orgánica 3/2021, de regulación de la eutanasia", url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2021-4628" },
      { titulo: "BOE. Ley 4/2023, de igualdad de las personas trans", url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2023-5366" },
    ],
  },
];
