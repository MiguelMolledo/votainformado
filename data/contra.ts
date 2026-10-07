import type { Punto } from "./tipos";

export const CONTRA: Punto[] = [
  {
    slug: "confinamiento-inconstitucional",
    grupo: "contra-firme",
    tema: "covid",
    solidez: "Sentencia (Tribunal Constitucional)",
    titulo: "El confinamiento fue inconstitucional",
    resumen: "El Constitucional anuló en 2021 el encierro domiciliario del primer estado de alarma y la prórroga de seis meses del segundo.",
    cifras: [
      { valor: "2021", nota: "1", texto: "el Constitucional anula el encierro domiciliario de 2020" },
      { valor: "1,14 M", nota: "2", texto: "de multas propuestas durante el primer estado de alarma" },
    ],
    notas: [
      {
        marca: "1",
        texto:
          "El tribunal no dijo que las medidas sobraran. Dijo que suspender la libertad de circulación exigía el estado de excepción, con permiso previo del Congreso. Salió por seis votos a cinco.",
      },
      { marca: "2", texto: "Las multas quedaron sin base legal. La sentencia no dio derecho a indemnización por los daños del cierre." },
    ],
    entradilla:
      "El 14 de marzo de 2020 el Gobierno ordenó por decreto que la población no saliera de casa. Dieciséis meses después, el Tribunal Constitucional dijo que no podía hacerlo con esa herramienta.",
    comoPaso: [
      "El primer estado de alarma duró del 14 de marzo al 21 de junio de 2020, con seis prórrogas. El segundo empezó en octubre de 2020 con una única prórroga de seis meses y delegó las restricciones en los presidentes autonómicos.",
      "A instancias de Vox, el Constitucional declaró inconstitucional el confinamiento domiciliario en julio de 2021 (sentencia 148/2021). En octubre anuló también la prórroga de seis meses y la delegación en las autonomías (sentencia 183/2021).",
    ],
    defensa: "Se actuó con la herramienta disponible ante una emergencia sin precedentes, y el tribunal no cuestionó que las medidas fueran necesarias.",
    critica: "El Gobierno suspendió un derecho fundamental sin la autorización previa del Congreso que exige la Constitución, y repitió el esquema en el segundo estado de alarma.",
    legal: "Firme. Sentencias 148/2021 y 183/2021 del Tribunal Constitucional.",
    fuentes: [
      { titulo: "BOE. Sentencia 148/2021 del Tribunal Constitucional", url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2021-13032" },
      { titulo: "BOE. Sentencia 183/2021 del Tribunal Constitucional", url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2021-19512" },
      {
        titulo: "elDiario.es. Qué pasa con las multas tras la sentencia",
        url: "https://www.eldiario.es/politica/consecuencias-decision-constitucional-pasa-multas-posibles-reclamaciones-alarma_1_8137065.html",
      },
    ],
  },
  {
    slug: "cierre-del-congreso",
    grupo: "contra-firme",
    tema: "instituciones",
    solidez: "Sentencia (Tribunal Constitucional)",
    titulo: "El Congreso, parado en plena alarma",
    resumen: "El Constitucional declaró en 2021 que suspender la actividad del Congreso en marzo de 2020 vulneró los derechos de los diputados.",
    cifras: [
      { valor: "19 mar 2020", nota: "1", texto: "la Mesa del Congreso suspende los plazos de todas las iniciativas" },
      { valor: "2021", nota: "2", texto: "el Constitucional lo declara contrario al derecho de participación política" },
    ],
    notas: [
      { marca: "1", texto: "La decisión fue de la Mesa del Congreso, con mayoría de PSOE y Unidas Podemos, no del Consejo de Ministros." },
      { marca: "2", texto: "La Constitución dice que el funcionamiento de las Cámaras no puede interrumpirse durante un estado de alarma." },
    ],
    entradilla:
      "En las primeras semanas del confinamiento, con el Gobierno ejerciendo poderes extraordinarios, el Congreso dejó de tramitar las iniciativas de control.",
    comoPaso: [
      "El 19 de marzo de 2020 la Mesa del Congreso acordó suspender el cómputo de plazos de las iniciativas en tramitación.",
      "Los diputados de Vox recurrieron en amparo. En octubre de 2021 el Tribunal Constitucional les dio la razón (sentencia 168/2021).",
    ],
    defensa: "Fue una medida sanitaria temporal adoptada por el órgano de gobierno de la Cámara, no por el Ejecutivo.",
    critica: "El control parlamentario se interrumpió justo cuando el Gobierno acumulaba más poder.",
    legal: "Firme. Sentencia 168/2021 del Tribunal Constitucional.",
    fuentes: [{ titulo: "BOE. Sentencia 168/2021 del Tribunal Constitucional", url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2021-18371" }],
  },
  {
    slug: "abalos-condenado",
    grupo: "contra-firme",
    tema: "justicia",
    solidez: "Sentencia (Tribunal Supremo)",
    titulo: "Un exministro, condenado por organización criminal",
    resumen: "El Supremo condenó en 2026 a José Luis Ábalos a 24 años y 3 meses por las comisiones de las mascarillas.",
    cifras: [
      { valor: "24 años", nota: "1", texto: "y 3 meses para José Luis Ábalos, exministro de Transportes" },
      { valor: "19 años", nota: "2", texto: "y 8 meses para su asesor, Koldo García" },
    ],
    notas: [
      { marca: "1", texto: "El PSOE lo apartó en 2024. Ninguna resolución judicial atribuye hoy financiación ilegal al partido." },
      { marca: "2", texto: "El comisionista Víctor de Aldama fue condenado a 4 años y medio, con la pena suspendida por colaborar." },
      {
        marca: "+",
        texto: "Ábalos fue secretario de Organización del PSOE. Su sucesor, Santos Cerdán, pasó por prisión preventiva y sigue investigado.",
      },
    ],
    entradilla:
      "El hombre que defendió en el Congreso la moción de censura contra la corrupción del PP ha sido condenado por cobrar comisiones en la compra de mascarillas durante la pandemia.",
    comoPaso: [
      "En 2020, con el estado de alarma, el Ministerio de Transportes compró material sanitario por contratación de emergencia, sin concurso.",
      "En febrero de 2024 fue detenido Koldo García, asesor del ministro. El caso llegó al Supremo por la condición de diputado de Ábalos.",
      "El 22 de junio de 2026 la Sala de lo Penal los condenó por unanimidad por organización criminal, cohecho, tráfico de influencias y malversación, entre otros delitos. La sentencia describe una organización con reparto de funciones.",
    ],
    defensa: "El partido expulsó a los implicados y ha colaborado con la justicia. La condena es a personas, no al PSOE.",
    critica: "Los dos secretarios de Organización que tuvo Sánchez desde 2017 han pasado por prisión. O el presidente lo sabía o no controlaba a sus hombres de confianza.",
    legal: "Firme. El Supremo es la única instancia para aforados. Sigue abierta en la Audiencia Nacional la pieza sobre obra pública.",
    fuentes: [
      {
        titulo: "The Objective. Texto de la sentencia del Supremo",
        url: "https://theobjective.com/espana/tribunales/2026-06-22/sentencia-tribunal-supremo-abalos-koldo-aldama/",
      },
      {
        titulo: "Telecinco. Claves de la sentencia",
        url: "https://www.telecinco.es/noticias/espana/20260622/claves-sentencia-tribunal-supremo-jose-luis-abalos-koldo-garcia-victor-aldama_18_019516683.html",
      },
    ],
  },
  {
    slug: "fiscal-general-condenado",
    grupo: "contra-firme",
    tema: "justicia",
    solidez: "Sentencia (Tribunal Supremo)",
    titulo: "El fiscal general, condenado",
    resumen: "El Supremo inhabilitó dos años a Álvaro García Ortiz por revelar datos reservados. Es la primera condena a un fiscal general.",
    cifras: [
      { valor: "2 años", nota: "1", texto: "de inhabilitación para Álvaro García Ortiz por revelación de datos reservados" },
      { valor: "5–2", nota: "2", texto: "fue la votación en la Sala de lo Penal" },
    ],
    notas: [
      {
        marca: "1",
        texto: "El dato filtrado era un correo en el que el abogado de la pareja de Isabel Díaz Ayuso ofrecía admitir dos delitos fiscales.",
      },
      { marca: "2", texto: "Dos magistradas pidieron la absolución por falta de prueba. Cabe recurso de amparo ante el Constitucional." },
    ],
    entradilla:
      "El jefe de los fiscales, nombrado por el Gobierno, fue juzgado y condenado por filtrar información confidencial de un particular enfrentado a una rival política del Ejecutivo.",
    comoPaso: [
      "En marzo de 2024 varios medios publicaron un correo del abogado de Alberto González Amador, pareja de la presidenta madrileña, en negociación con la Fiscalía.",
      "El Supremo consideró probado que García Ortiz, o alguien de su entorno con su conocimiento, lo filtró. Lo condenó a dos años de inhabilitación, 7.200 euros de multa y 10.000 de indemnización.",
      "En febrero de 2026 rechazó anular la condena.",
    ],
    defensa: "Dos de los siete magistrados vieron la prueba insuficiente, y varios periodistas declararon que el fiscal no fue su fuente.",
    critica: "El Gobierno mantuvo al fiscal general en el cargo durante toda la causa y cuestionó al tribunal tras la sentencia.",
    legal: "Firme en vía ordinaria. Pendiente de un posible recurso de amparo.",
    fuentes: [
      {
        titulo: "Poder Judicial. Nota del Tribunal Supremo sobre la condena",
        url: "https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Tribunal-Supremo/Noticias-Judiciales/El-Tribunal-Supremo-condena-a-Alvaro-Garcia-Ortiz-por-un-delito-de-revelacion-de-secretos-a-pena-de-multa-y-2-anos-de-inhabilitacion-para-el-cargo-de-fiscal-general-del-Estado",
      },
      {
        titulo: "El Español. El Supremo rechaza anular la condena",
        url: "https://www.elespanol.com/espana/tribunales/20260226/tribunal-supremo-rechaza-anular-condena-garcia-ortiz-exfiscal-general-puede-acudir-constitucional/1003744147061_0.html",
      },
    ],
  },
  {
    slug: "sin-presupuestos",
    grupo: "contra-firme",
    tema: "instituciones",
    solidez: "Dato oficial",
    titulo: "Una legislatura entera sin Presupuestos",
    resumen: "Las cuentas de 2023 se han prorrogado tres veces. Es la primera legislatura que termina sin aprobar unas nuevas.",
    cifras: [
      { valor: "3", nota: "1", texto: "prórrogas seguidas de los Presupuestos de 2023" },
      { valor: "0", nota: "2", texto: "Presupuestos aprobados entre 2023 y 2026" },
    ],
    notas: [
      { marca: "1", texto: "Prorrogar es legal: la Constitución lo prevé si no hay cuentas nuevas el 1 de enero." },
      {
        marca: "2",
        texto: "Lo que la Constitución exige es que el Gobierno presente el proyecto cada año. En abril de 2026 el Ejecutivo dijo que no pensaba presentarlo.",
      },
    ],
    entradilla:
      "España funciona en 2026 con un presupuesto pensado para 2023. Nunca en democracia se habían encadenado tres años de prórroga.",
    comoPaso: [
      "Los últimos Presupuestos aprobados son los de 2023. Desde las elecciones de julio de ese año el Gobierno no ha reunido los votos para sacar adelante otros.",
      "El 27 de abril de 2026 el ministro Félix Bolaños declaró que el Gobierno no preveía presentar el proyecto «en este momento».",
    ],
    defensa: "La prórroga es un mecanismo constitucional y el déficit se ha reducido igualmente.",
    critica: "Sin Presupuestos, el Parlamento no fija las prioridades de gasto y el Gobierno las ajusta por decreto y modificaciones de crédito.",
    fuentes: [
      {
        titulo: "El Diario de Madrid. La legislatura termina sin Presupuestos",
        url: "https://www.eldiariodemadrid.es/articulo/politica/legislatura-sanchez-nuevos-presupuestos-generales-estado-pge-2023-prorrogados/20261005103413143316.html",
      },
      {
        titulo: "Canal Sur. Tercera prórroga consecutiva",
        url: "https://www.canalsur.es/noticias/espana/presupuestos-prorrogan-tercer-ano-consecutivo_1_1361296.html",
      },
    ],
  },
  {
    slug: "vivienda",
    grupo: "contra-firme",
    tema: "vivienda",
    solidez: "Dato oficial (INE y Banco de España)",
    titulo: "La vivienda sube al mayor ritmo desde 2007",
    resumen: "Los precios crecen un 12,9 % interanual y faltan 700.000 viviendas, según el Banco de España.",
    cifras: [
      { valor: "+12,9 %", nota: "1", texto: "interanual en el primer trimestre de 2026" },
      { valor: "700.000", nota: "2", texto: "viviendas faltan, según el Banco de España" },
    ],
    notas: [
      { marca: "1", texto: "Suelo y urbanismo dependen de comunidades y ayuntamientos, no solo del Gobierno." },
      {
        marca: "2",
        texto: "La ley estatal de 2023 solo permite topar alquileres donde la comunidad lo pida. Los decretos de 2026 los derogó el Congreso a los tres días.",
      },
    ],
    entradilla:
      "El precio de la vivienda sube más deprisa que en ningún momento desde la burbuja. La causa que señala el Banco de España es aritmética: se forman muchos más hogares de los que se construyen.",
    comoPaso: [
      "La población ha crecido en unos tres millones de personas desde 2018 mientras la construcción de vivienda nueva se mantenía en mínimos.",
      "La Ley por el derecho a la vivienda de 2023 creó las zonas tensionadas, cuya declaración corresponde a las comunidades autónomas.",
      "El 29 de septiembre de 2026 el Gobierno aprobó dos decretos-ley con medidas sobre desahucios, alquiler de temporada y fondos de inversión. El Congreso los derogó el 2 de octubre con los votos de PP, Vox, Junts y UPN.",
    ],
    defensa: "Es el primer Gobierno con una ley estatal de vivienda. Varias comunidades se niegan a aplicarla y la oposición tumbó las medidas de protección.",
    critica: "En ocho años de mandato el déficit de vivienda ha crecido y los precios suben más que nunca desde 2007.",
    pendiente: "Faltan unas 700.000 viviendas para cubrir los hogares que se han formado.",
    fuentes: [
      {
        titulo: "INE (vía Infoconstrucción). Índice de Precios de Vivienda, primer trimestre de 2026",
        url: "https://www.infoconstruccion.es/noticias/20260608/precio-vivienda-primer-trimestre-2026-subida-interanual-12-9",
      },
      {
        titulo: "Banco de España (vía Idealista). Déficit de 700.000 viviendas",
        url: "https://www.idealista.com/news/inmobiliario/vivienda/2025/09/23/861046-el-banco-de-espana-recula-y-ahora-cifra-en-700-000-las-viviendas-que-faltan-en-el",
      },
      { titulo: "BOE. Ley 12/2023, por el derecho a la vivienda", url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2023-12203" },
      { titulo: "BOE. Real Decreto-ley 26/2026, derogado", url: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-20266" },
      {
        titulo: "Público. Votación del 2 de octubre de 2026",
        url: "https://www.publico.es/politica/ultima-hora-votacion-decretos-sobre-vivienda-congreso-directo.html",
      },
    ],
  },
  {
    slug: "solo-si-es-si",
    grupo: "contra-firme",
    tema: "justicia",
    solidez: "Dato oficial (Consejo General del Poder Judicial)",
    titulo: "La ley del «solo sí es sí» rebajó penas",
    resumen: "La ley de 2022 provocó al menos 1.205 rebajas de pena y 121 excarcelaciones de condenados por delitos sexuales.",
    cifras: [
      { valor: "1.205", nota: "1", texto: "rebajas de pena a condenados por delitos sexuales" },
      { valor: "121", nota: "2", texto: "excarcelaciones" },
    ],
    notas: [
      { marca: "1", texto: "El Consejo General del Poder Judicial había advertido del riesgo en su informe previo a la ley." },
      { marca: "2", texto: "El PSOE la corrigió en abril de 2023 con los votos del PP. El modelo basado en el consentimiento sigue en vigor." },
    ],
    entradilla:
      "Una ley pensada para proteger mejor a las víctimas de agresiones sexuales acabó reduciendo condenas ya firmes.",
    comoPaso: [
      "La Ley Orgánica 10/2022 unificó los delitos de abuso y agresión sexual. Al fusionarlos bajó algunas penas mínimas.",
      "La ley penal más favorable se aplica con efecto retroactivo, así que los tribunales tuvieron que revisar condenas. Las rebajas fueron el 31,4 % de los casos revisados, según el Poder Judicial.",
      "La ley no incluía una disposición transitoria que lo evitara. Se reformó en abril de 2023.",
    ],
    defensa: "El consentimiento como eje del delito era una demanda social tras el caso de La Manada. El error técnico se corrigió.",
    critica: "El fallo estaba avisado por el órgano de los jueces. El Gobierno tardó seis meses en rectificar mientras se acumulaban las rebajas.",
    fuentes: [
      { titulo: "BOE. Ley Orgánica 10/2022, de garantía integral de la libertad sexual", url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2022-14630" },
      {
        titulo: "Consejo General del Poder Judicial (vía Canal Sur). Balance de rebajas y excarcelaciones",
        url: "https://www.canalsur.es/noticias/andalucia/el-cgpj-eleva-a-1205-las-rebajas-de-pena-y-a-121-las--excarcelaciones-por-la-ley-del-solo-si-es-si/1964975.html",
      },
    ],
  },
  {
    slug: "ceuta-2026",
    grupo: "contra-firme",
    tema: "fronteras",
    solidez: "Dato oficial (Ministerio del Interior)",
    titulo: "Ceuta, la mayor crisis fronteriza registrada",
    resumen: "Unas 72.000 personas entraron en Ceuta en dos días de julio de 2026. Murieron 88 en el lado español.",
    cifras: [
      { valor: "72.000", nota: "1", texto: "entradas el 30 y 31 de julio de 2026" },
      { valor: "88", nota: "2", texto: "muertos en aguas y costas españolas" },
    ],
    notas: [
      { marca: "1", texto: "Los servicios de inteligencia concluyeron que Marruecos permitió los cruces. Rabat lo niega." },
      { marca: "2", texto: "La ONG Caminando Fronteras eleva la cifra a unas 145 contando el lado marroquí, que Marruecos no ha confirmado." },
      { marca: "+", texto: "Es la segunda crisis en Ceuta con el mismo vecino, después del giro sobre el Sáhara de 2022." },
    ],
    entradilla:
      "En 48 horas cruzó a Ceuta el equivalente a casi toda su población. Es el mayor episodio de entrada irregular registrado en la frontera con Marruecos.",
    comoPaso: [
      "El 8 de julio de 2026 el Tribunal Supremo limitó las devoluciones en caliente de quienes entran a nado. Redes de tráfico difundieron la sentencia como una apertura de la frontera.",
      "El 30 y 31 de julio unas 72.000 personas cruzaron, sobre todo por el espigón del Tarajal. Unas 48.300 regresaron a Marruecos en 48 horas.",
      "El Gobierno desplegó al Ejército y calificó los hechos de violación de la integridad territorial. La Audiencia Nacional investiga el papel de las autoridades marroquíes.",
    ],
    defensa: "Marruecos usa la frontera como instrumento de presión con cualquier gobierno, y la mayoría de las personas regresó en dos días.",
    critica: "La frontera cedió por segunda vez en cinco años pese a las concesiones a Rabat, y hubo alertas previas.",
    legal: "Investigación abierta en la Audiencia Nacional.",
    fuentes: [
      { titulo: "Wikipedia. Crisis migratoria de Ceuta de 2026", url: "https://es.wikipedia.org/wiki/Crisis_migratoria_de_Ceuta_de_2026" },
      {
        titulo: "Diario Libre (EFE). Cifras de fallecidos según las ONG",
        url: "https://www.diariolibre.com/mundo/espana/2026/08/05/una-ong-cifra-en-141-los-fallecidos-en-la-crisis-en-ceuta/3620269",
      },
    ],
  },
  {
    slug: "devolucion-de-menores",
    grupo: "contra-firme",
    tema: "fronteras",
    solidez: "Sentencia (Tribunal Supremo)",
    titulo: "Devolución ilegal de menores desde Ceuta",
    resumen: "El Supremo declaró ilegal en 2024 la devolución de menores a Marruecos hecha en agosto de 2021.",
    cifras: [
      { valor: "≈ 45", nota: "1", texto: "menores devueltos a Marruecos en agosto de 2021" },
      { valor: "2024", nota: "2", texto: "el Supremo lo declara ilegal" },
    ],
    notas: [
      { marca: "1", texto: "Habían entrado en la crisis de mayo de 2021. Se les devolvió en furgonetas, unos 15 al día, sin conocimiento de la Fiscalía." },
      { marca: "2", texto: "El tribunal apreció un «incumplimiento absoluto» de la Ley de Extranjería y lo consideró una expulsión colectiva." },
    ],
    entradilla:
      "Tras la entrada masiva de mayo de 2021, el Ministerio del Interior devolvió a decenas de menores sin el expediente individual que exige la ley.",
    comoPaso: [
      "En agosto de 2021 Interior empezó a devolver menores marroquíes amparándose en el acuerdo bilateral sobre menores.",
      "En enero de 2024 el Tribunal Supremo confirmó que el acuerdo no permite saltarse el procedimiento de la Ley de Extranjería, centrado en el interés del menor.",
    ],
    defensa: "Interior sostuvo que actuaba conforme a un acuerdo bilateral con Marruecos.",
    critica: "Se expulsó a menores sin escucharlos ni avisar a la Fiscalía, que es quien debe protegerlos.",
    legal: "Firme. Sentencia del Tribunal Supremo de enero de 2024.",
    fuentes: [
      {
        titulo: "LegalToday. El Supremo confirma la ilegalidad de la devolución",
        url: "https://www.legaltoday.com/actualidad-juridica/noticias-de-derecho/el-tribunal-supremo-confirma-que-la-devolucion-de-menores-desde-ceuta-a-marruecos-en-agosto-de-2021-fue-ilegal-al-no-seguir-el-procedimiento-previsto-en-la-ley-de-extranjeria-2024-01-23/",
      },
    ],
  },
  {
    slug: "pobreza-infantil",
    grupo: "contra-firme",
    tema: "sociedad",
    solidez: "Dato oficial (INE y Eurostat)",
    titulo: "La pobreza infantil, la más alta de la UE",
    resumen: "Uno de cada tres menores está en riesgo de pobreza o exclusión. Es la tasa de pobreza infantil más alta de la Unión.",
    cifras: [
      { valor: "33,8 %", nota: "1", texto: "de los menores en riesgo de pobreza o exclusión en 2025" },
      { valor: "1.º", nota: "2", texto: "puesto de la UE en pobreza infantil, según Eurostat" },
    ],
    notas: [
      { marca: "1", texto: "Entre los adultos la tasa es del 24,6 % y baja. Entre los menores, no." },
      { marca: "2", texto: "El Ingreso Mínimo Vital llega a uno de cada cinco hogares en pobreza, según la AIReF." },
    ],
    entradilla:
      "Con la economía creciendo y el empleo en máximos, la pobreza entre los niños no ha bajado. España encabeza la clasificación europea.",
    comoPaso: [
      "La Encuesta de Condiciones de Vida del INE sitúa en el 33,8 % la tasa de riesgo de pobreza o exclusión entre los menores de 18 años en 2025, y en el 28,3 % la de riesgo de pobreza.",
      "Eurostat coloca a España en el primer puesto de la UE en pobreza infantil, con una media comunitaria del 19,3 %.",
    ],
    defensa: "El Gobierno creó el Ingreso Mínimo Vital y un complemento de ayuda a la infancia, y subió el salario mínimo.",
    critica: "Las medidas no han movido el indicador: tener hijos duplica el riesgo de pobreza y las ayudas no llegan a la mayoría de los hogares pobres.",
    pendiente: "La pobreza infantil española supera en unos 9 puntos la media de la UE.",
    fuentes: [
      {
        titulo: "INE, Encuesta de Condiciones de Vida (vía El Diario de Madrid)",
        url: "https://www.eldiariodemadrid.es/articulo/sociedad/pobreza-infantil-espana-2025-menores-riesgo-pobreza-arope/20260905110111140795.html",
      },
      {
        titulo: "Eurostat (vía El Economista). Pobreza infantil en la UE",
        url: "https://www.eleconomista.es/economia/noticias/13899811/05/26/espana-vuelve-a-registrar-la-tasa-de-pobreza-infantil-mas-elevada-de-la-ue-segun-eurostat.html",
      },
    ],
  },
  {
    slug: "nombramientos-anulados",
    grupo: "contra-firme",
    tema: "instituciones",
    solidez: "Sentencias (Tribunal Supremo)",
    titulo: "Tres decisiones de personal, anuladas",
    resumen: "El Supremo anuló el ascenso de la exministra Delgado, un nombramiento en el Consejo de Estado y el cese de un coronel.",
    cifras: [{ valor: "3", nota: "1", texto: "decisiones del Gobierno sobre altos cargos anuladas por el Supremo en 2023" }],
    notas: [
      {
        marca: "1",
        texto:
          "El ascenso de Dolores Delgado a fiscal de sala, por desviación de poder. El nombramiento de Magdalena Valerio al frente del Consejo de Estado, por no ser jurista de reconocido prestigio. Y el cese del coronel Pérez de los Cobos.",
      },
      { marca: "+", texto: "En 2021 el Constitucional anuló además el decreto-ley que incluía a Pablo Iglesias en la comisión del CNI." },
    ],
    entradilla: "En un mismo año, el Tribunal Supremo tumbó tres decisiones del Gobierno o de su fiscal general sobre quién ocupa qué puesto.",
    comoPaso: [
      "En marzo de 2023 el Supremo anuló el cese del coronel de la Guardia Civil Diego Pérez de los Cobos, destituido por el ministro del Interior en 2020.",
      "En noviembre de 2023 apreció desviación de poder en el ascenso de Dolores Delgado a la máxima categoría fiscal, propuesto por su sucesor justo después de dejar ella la Fiscalía General.",
      "Días después anuló el nombramiento de la exministra Magdalena Valerio como presidenta del Consejo de Estado, a instancias de la Fundación Hay Derecho.",
    ],
    defensa: "Son resoluciones sobre casos concretos y el Gobierno las acató.",
    critica: "Muestran un patrón: colocar a personas afines en puestos que la ley reserva al mérito o a la independencia.",
    legal: "Firmes.",
    fuentes: [
      {
        titulo: "COPE. El Supremo anula el ascenso de Dolores Delgado",
        url: "https://www.cope.es/actualidad/espana/noticias/supremo-anula-ascenso-dolores-delgado-fiscal-sala-por-desviacion-poder-20231121_3012248",
      },
      {
        titulo: "elDiario.es. El Supremo anula el nombramiento de Magdalena Valerio",
        url: "https://www.eldiario.es/politica/supremo-anula-nombramiento-exministra-valerio-presidenta-consejo_1_10731760.html",
      },
      {
        titulo: "elDiario.es. El Supremo anula el cese de Pérez de los Cobos",
        url: "https://www.eldiario.es/politica/supremo-anula-cese-perez-cobos-jefe-comandancia-madrid_1_10055787.html",
      },
      { titulo: "BOE. Sentencia 110/2021 del Tribunal Constitucional", url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2021-10023" },
    ],
  },
  {
    slug: "caida-de-2020",
    grupo: "contra-firme",
    tema: "covid",
    solidez: "Dato oficial (INE)",
    titulo: "2020: la mayor caída económica de la UE",
    resumen: "El PIB cayó un 10,9 % en 2020, más que en ningún otro país de la UE, y murieron 47.105 personas más entre marzo y mayo.",
    cifras: [
      { valor: "−10,9 %", nota: "1", texto: "de PIB en 2020, la mayor caída de la Unión Europea" },
      { valor: "47.105", nota: "2", texto: "muertes más entre marzo y mayo de 2020 que un año antes" },
    ],
    notas: [
      { marca: "1", texto: "La economía española depende más que otras del turismo, que se paró por completo." },
      { marca: "2", texto: "Un 44,8 % más de fallecimientos que en los mismos meses de 2019, según el INE. Las residencias de mayores eran competencia autonómica." },
    ],
    entradilla:
      "En la primera ola España tuvo un confinamiento domiciliario, 47.105 muertes más que el año anterior y la mayor caída del PIB de la UE.",
    comoPaso: [
      "El estado de alarma se declaró el 14 de marzo de 2020. Entre marzo y mayo fallecieron 47.105 personas más que en el mismo periodo de 2019.",
      "El PIB de 2020 cayó un 10,9 % según la serie revisada del INE. Ningún otro país de la UE cayó tanto.",
    ],
    defensa: "La pandemia golpeó a todos los países, y el peso del turismo hacía a la economía española más vulnerable.",
    critica: "El confinamiento domiciliario no evitó ni el exceso de muertes ni la mayor caída económica de la UE.",
    fuentes: [
      { titulo: "INE. Defunciones de enero a mayo de 2020", url: "https://www.ine.es/prensa/edcm_ene_may_19_20.pdf" },
      { titulo: "INE (vía Vozpópuli). Caída del PIB en 2020", url: "https://www.vozpopuli.com/economia/pib-2020-revision.html" },
    ],
  },
  {
    slug: "dana-valencia",
    grupo: "contra-matices",
    tema: "emergencias",
    solidez: "Responsabilidad disputada",
    titulo: "La DANA de Valencia",
    resumen: "230 muertos. El Gobierno no asumió el mando y pagó las ayudas despacio, pero la jueza sitúa la responsabilidad en la Generalitat.",
    cifras: [
      { valor: "230", nota: "1", texto: "muertos en la provincia de Valencia por la riada del 29 de octubre de 2024" },
      { valor: "5,86 %", nota: "2", texto: "de las ayudas estatales anunciadas, pagado al cierre de 2024" },
    ],
    notas: [
      {
        marca: "1",
        texto:
          "La jueza sitúa la responsabilidad de la emergencia en la Generalitat y no ha imputado a ningún cargo estatal. La alerta a los móviles, autonómica, salió a las 20:11.",
      },
      { marca: "2", texto: "El Gobierno había movilizado 16.600 millones. Cinco meses después llevaba pagado en torno al 14 %." },
      { marca: "+", texto: "La ley permitía al Gobierno declarar la emergencia nacional y asumir el mando por iniciativa propia. No lo hizo." },
    ],
    entradilla:
      "Fue la peor catástrofe natural en España en décadas. Dos administraciones de distinto color se reprochan desde entonces quién debió actuar.",
    comoPaso: [
      "La Agencia Estatal de Meteorología emitió el aviso rojo a las 7:36 del 29 de octubre. La alerta masiva a los móviles, que dependía de la Generalitat, se envió a las 20:11.",
      "La emergencia se gestionó bajo mando autonómico. El 2 de noviembre Sánchez anunció más militares y dijo que, si la Generalitat necesitaba más recursos, los pidiera.",
      "La jueza de Catarroja investiga a la exconsejera de Emergencias y a su número dos. El Tribunal Superior valenciano rechazó en marzo de 2026 imputar al expresidente Carlos Mazón, que dimitió en noviembre de 2025.",
    ],
    defensa: "La competencia y el mando eran de la Generalitat, que avisó tarde. La instrucción judicial lo confirma.",
    critica: "Con cientos de muertos y una autonomía desbordada, el Gobierno esperó a que le pidieran ayuda en lugar de tomar el mando, y las ayudas tardaron meses.",
    legal: "Causa abierta en Catarroja contra dos ex altos cargos de la Generalitat. Ningún cargo estatal investigado.",
    fuentes: [
      { titulo: "Wikipedia. Inundaciones de la DANA de 2024 en España", url: "https://es.wikipedia.org/wiki/Inundaciones_de_la_DANA_de_2024_en_Espa%C3%B1a" },
      {
        titulo: "El Español. «Si necesita más recursos, que los pida»",
        url: "https://www.elespanol.com/espana/politica/20241102/sanchez-anuncia-efectivos-valencia-recuerda-mazon-necesitan-recursos-pidan/898160190_0.html",
      },
      {
        titulo: "El Español. Ayudas pagadas al cierre de 2024",
        url: "https://www.elespanol.com/valencia/20250101/gobierno-repartido-millones-prometidos-dana-cierre/912908929_0.html",
      },
      {
        titulo: "elDiario.es. El Tribunal Superior descarta imputar a Mazón",
        url: "https://www.eldiario.es/comunitat-valenciana/tsj-descarta-indicios-mazon-devuelve-causa-dana-jueza_1_13070268.html",
      },
    ],
  },
  {
    slug: "deuda-publica",
    grupo: "contra-matices",
    tema: "economia",
    solidez: "Dato oficial (Banco de España)",
    titulo: "La deuda pública, en récord",
    resumen: "La deuda sube de 1,17 a 1,72 billones de euros. El mayor salto fue en 2020, con la pandemia.",
    cifras: [
      { valor: "1,72 B€", nota: "1", texto: "de deuda pública en febrero de 2026, máximo histórico" },
      { valor: "+550.000 M€", nota: "2", texto: "más que al cierre de 2018" },
    ],
    notas: [
      { marca: "1", texto: "Sobre el PIB es el 100,7 %, 3,6 puntos más que en 2018 y casi 19 menos que en el pico de 2020." },
      { marca: "2", texto: "El mayor salto fue en 2020, cuando la pandemia la llevó al 119,3 % del PIB, como en el resto de Europa." },
    ],
    entradilla:
      "El Estado debe medio billón de euros más que cuando Sánchez llegó a la Moncloa. Medida sobre el tamaño de la economía, la deuda ha vuelto cerca del punto de partida.",
    comoPaso: [
      "Al cierre de 2018 la deuda era de 1,173 billones, el 97,1 % del PIB. En 2020 se disparó al 119,3 % por el desplome de la economía y el gasto de la pandemia.",
      "Desde entonces la ratio baja porque el PIB crece más deprisa que la deuda, que sigue aumentando en euros cada año.",
    ],
    defensa: "La ratio de deuda ha bajado casi 19 puntos desde el pico de 2020.",
    critica: "Ni en los años de mayor crecimiento se ha dejado de aumentar la deuda en euros.",
    pendiente: "La deuda sigue por encima del 100 % del PIB. El límite de referencia europeo es el 60 %.",
    fuentes: [
      {
        titulo: "Banco de España (vía Euronews). Deuda de 1,72 billones",
        url: "https://es.euronews.com/2026/04/22/deuda-publica-espanola-alcanza-maximos-historicos-febrero-con-172-billones-de-euros",
      },
      {
        titulo: "Banco de España (vía Okdiario). Deuda al cierre de 2018",
        url: "https://okdiario.com/economia/banco-espana-situa-971-del-pib-deuda-publica-2018-revisarla-baja-900-millones-4020955",
      },
      {
        titulo: "Eurostat (vía EFE). Deuda al cierre de 2025",
        url: "https://www.swissinfo.ch/spa/espa%C3%B1a-cerr%C3%B3-2025-con-un-d%C3%A9ficit-del-2,4-%25-y-una-deuda-del-100,7-%25-del-pib,-seg%C3%BAn-eurostat/91297182",
      },
    ],
  },
  {
    slug: "apagon-2025",
    grupo: "contra-matices",
    tema: "emergencias",
    solidez: "Informe técnico (ENTSO-E)",
    titulo: "El apagón total de 2025",
    resumen: "El 28 de abril de 2025 se fue la luz en toda la península. El informe europeo habla de varias causas técnicas encadenadas.",
    cifras: [{ valor: "28 abr 2025", nota: "1", texto: "toda la península se queda sin luz" }],
    notas: [
      {
        marca: "1",
        texto: "El informe europeo habla de sobretensión y desconexiones en cadena. Descarta el sabotaje y que la culpa fuera solo de las renovables.",
      },
      { marca: "+", texto: "Red Eléctrica, con participación del Estado, y las compañías eléctricas se culpan entre sí." },
    ],
    entradilla:
      "Es el mayor incidente eléctrico en Europa en más de dos décadas. Las investigaciones apuntan a un fallo del sistema en su conjunto, no a un único responsable.",
    comoPaso: [
      "A las 12:32 del 28 de abril de 2025 la tensión empezó a subir con rapidez y varias centrales se desconectaron en cadena en distintas provincias. El sistema peninsular cayó a cero.",
      "El informe final de la red europea de operadores (ENTSO-E) lo atribuye a deficiencias en el control dinámico de tensión, oscilaciones y desconexiones prematuras, con una regulación de red anticuada.",
    ],
    defensa: "Fue un fallo técnico con varias causas y sin precedentes. El suministro se repuso en horas.",
    critica: "La red y sus normas no se actualizaron al ritmo al que cambió la generación. El operador del sistema es una empresa con participación pública.",
    fuentes: [
      {
        titulo: "Review Energy. Informe de ENTSO-E sobre el apagón",
        url: "https://www.review-energy.com/otras-fuentes/entso-e-publica-el-relato-completo-del-apagon-iberico-asi-colapso-la-red",
      },
      {
        titulo: "Agencia SINC. Claves del apagón",
        url: "https://www.agenciasinc.es/Noticias/Las-claves-del-gran-apagon-fallo-en-el-control-de-tension-y-cascada-de-desconexiones",
      },
    ],
  },
  {
    slug: "accidente-de-adamuz",
    grupo: "contra-matices",
    tema: "emergencias",
    solidez: "Informe oficial (CIAF)",
    titulo: "El accidente de Adamuz",
    resumen: "46 muertos en enero de 2026 por la rotura de un carril en la alta velocidad. Los maquinistas habían avisado del desgaste.",
    cifras: [
      { valor: "46", nota: "1", texto: "muertos el 18 de enero de 2026 en la alta velocidad" },
      { valor: "ago 2025", nota: "2", texto: "los maquinistas avisan a ADIF del desgaste de las vías" },
    ],
    notas: [
      { marca: "1", texto: "La comisión oficial atribuye el origen a la rotura de un carril y descarta fallos previos en los trenes." },
      { marca: "2", texto: "El aviso es del sindicato de maquinistas SEMAF. Las responsabilidades están por determinar." },
    ],
    entradilla:
      "Es el accidente ferroviario más grave en España desde 2013. Ocurrió en la primera línea de alta velocidad del país.",
    comoPaso: [
      "A las 19:39 del 18 de enero de 2026 un tren de Iryo procedente de Málaga descarriló en Adamuz (Córdoba) e invadió la vía contigua, donde chocó con un tren de Renfe. Hubo 46 muertos y más de 120 heridos.",
      "La Comisión de Investigación de Accidentes Ferroviarios sitúa el origen en la rotura de un carril en el punto kilométrico 318,681.",
    ],
    defensa: "La investigación técnica sigue abierta y no ha atribuido responsabilidades personales.",
    critica: "ADIF, empresa pública dependiente del Ministerio de Transportes, había recibido avisos sobre el estado de la vía cinco meses antes.",
    legal: "Investigación técnica y judicial en curso.",
    fuentes: [
      {
        titulo: "Ministerio de Transportes. Investigación de la CIAF sobre Adamuz",
        url: "https://www.transportes.gob.es/organos-colegiados/ciaf/investigaciones-en-curso/adamuz",
      },
      {
        titulo: "Infobae. Conclusiones de la CIAF",
        url: "https://www.infobae.com/espana/2026/04/28/conclusion-del-accidente-de-adamuz-la-ciaf-dice-que-se-rompio-el-carril-y-descarta-anomalias-previas-en-los-trenes/",
      },
      { titulo: "Wikipedia. 2026 Adamuz rail disaster", url: "https://en.wikipedia.org/wiki/2026_Adamuz_rail_disaster" },
    ],
  },
];
