import type { Punto } from "./tipos";

export const FAVOR: Punto[] = [
  {
    slug: "empleo",
    grupo: "favor-letra",
    tema: "economia",
    solidez: "Dato oficial (INE)",
    titulo: "Empleo en máximos",
    resumen: "22,78 millones de ocupados y paro por debajo del 10 %, pero sigue siendo el segundo más alto de la UE.",
    cifras: [
      { valor: "22,78 M", nota: "1", texto: "ocupados en el segundo trimestre de 2026. Eran 19,34 millones en 2018" },
      { valor: "9,87 %", nota: "2", texto: "de paro, el más bajo desde 2008. En 2018 era el 15,28 %" },
    ],
    notas: [
      {
        marca: "1",
        texto:
          "España tiene 49,8 millones de habitantes, unos tres millones más que en 2018. 10,3 millones de residentes han nacido en el extranjero.",
      },
      {
        marca: "2",
        texto:
          "Es la segunda tasa de paro más alta de la UE: 10 % según Eurostat, por detrás de Finlandia y con la media en el 6,1 %. El paro juvenil es del 22,7 %.",
      },
      {
        marca: "+",
        texto: "Más población sin más casas: el Banco de España calcula que faltan unas 700.000 viviendas.",
      },
    ],
    entradilla:
      "Nunca había trabajado tanta gente en España. El dato es cierto. Lo que no dice es cuánta más gente hay, dónde vive y por qué el paro sigue entre los peores de Europa.",
    comoPaso: [
      "La reforma laboral de 2021 se pactó con la patronal y los sindicatos y limitó los contratos temporales. Durante la pandemia, los ERTE pagados por el Estado mantuvieron en nómina a 3,4 millones de trabajadores.",
      "Después llegó un fuerte aumento de la población activa por la inmigración. Según el Banco Central Europeo, el 80 % del crecimiento económico de España entre 2019 y 2025 se debe a la población extranjera.",
      "La construcción de vivienda no acompañó: se forman muchos más hogares de los que se levantan, y los precios suben al mayor ritmo desde 2007.",
    ],
    defensa:
      "Hay 3,4 millones de ocupados más que en 2018 y la tasa de paro ha bajado 5,4 puntos, sin los despidos masivos de la crisis de 2008.",
    critica:
      "El empleo crece sumando población, no productividad. La tasa de paro sigue 3,9 puntos por encima de la media europea y la vivienda no se ha construido al ritmo de la población.",
    pendiente: "La tasa de paro española (10 %) sigue 3,9 puntos por encima de la media de la UE (6,1 %).",
    fuentes: [
      { titulo: "INE. Encuesta de Población Activa, segundo trimestre de 2026", url: "https://www.ine.es/dyngs/Prensa/EPA2T26.htm" },
      { titulo: "INE. Encuesta de Población Activa, segundo trimestre de 2018", url: "https://www.ine.es/daco/daco42/daco4211/epa0218.pdf" },
      { titulo: "INE. Estadística Continua de Población, 1 de julio de 2026", url: "https://www.ine.es/dyngs/Prensa/ECP2T26.htm" },
      {
        titulo: "Eurostat (vía EFE). Paro en la UE, agosto de 2026",
        url: "https://www.infobae.com/america/agencias/2026/10/01/el-paro-en-la-ue-encadena-siete-meses-en-el-61-y-espana-repite-en-segundo-lugar/",
      },
      {
        titulo: "Banco de España (vía Idealista). Déficit de 700.000 viviendas",
        url: "https://www.idealista.com/news/inmobiliario/vivienda/2025/09/23/861046-el-banco-de-espana-recula-y-ahora-cifra-en-700-000-las-viviendas-que-faltan-en-el",
      },
    ],
  },
  {
    slug: "crecimiento",
    grupo: "favor-letra",
    tema: "economia",
    solidez: "Dato oficial (INE)",
    titulo: "La gran economía del euro que más crece",
    resumen: "El PIB sube un 3,7 % en 2024 y un 2,6 % en 2025, pero por habitante avanza menos de la mitad.",
    cifras: [
      { valor: "+3,7 %", nota: "1", texto: "de PIB en 2024" },
      { valor: "+2,6 %", nota: "2", texto: "de PIB en 2025" },
    ],
    notas: [
      {
        marca: "1",
        texto: "En 2020 el PIB cayó un 10,9 %, la mayor caída de la UE. Quien más cae, más rebota.",
      },
      {
        marca: "2",
        texto:
          "Desde 2019 el PIB ha crecido un 7,9 % y el PIB por habitante un 3,4 %: menos de la mitad.",
      },
      {
        marca: "+",
        texto:
          "Según el Banco Central Europeo, el 80 % del crecimiento de 2019 a 2025 se debe a la población extranjera.",
      },
    ],
    entradilla:
      "España crece más que Alemania, Francia e Italia. Parte de esa ventaja es rebote tras la mayor caída de Europa, y casi toda viene de tener más gente trabajando, no de producir más por persona.",
    comoPaso: [
      "En 2020 la economía española se contrajo un 10,9 %, más que ninguna otra de la UE, por el peso del turismo y la dureza del confinamiento.",
      "A partir de 2021 el crecimiento se apoyó en la recuperación del turismo, los fondos europeos, el gasto público y la llegada de población. El INE cifra el avance en un 2,4 % en 2023, un 3,7 % en 2024 y un 2,6 % en 2025.",
      "El reparto por habitante es más modesto: entre 2019 y 2025 el PIB total subió un 7,9 % y el PIB por persona un 3,4 %.",
    ],
    defensa: "Es el mayor crecimiento entre las cuatro grandes economías del euro durante tres años seguidos.",
    critica:
      "Se crece por volumen: más población y más gasto. La renta por habitante avanza menos de la mitad que el PIB y la deuda está en máximos.",
    pendiente: "El PIB por habitante ha crecido un 3,4 % en seis años, frente al 7,9 % del PIB total.",
    fuentes: [
      {
        titulo: "INE (vía El Español). Revisión del PIB de 2023, 2024 y 2025",
        url: "https://www.elespanol.com/invertia/economia/20260918/ine-recorta-crecimiento-pib-eleva-rebaja/1003744388299_0.html",
      },
      {
        titulo: "INE (vía Vozpópuli). Caída del PIB en 2020",
        url: "https://www.vozpopuli.com/economia/pib-2020-revision.html",
      },
      {
        titulo: "El Independiente. PIB frente a PIB por habitante desde 2019",
        url: "https://www.elindependiente.com/economia/2025/10/26/espana-crece-riqueza-reparte-renta-avanza-mitad-pib/",
      },
      {
        titulo: "Banco Central Europeo (vía Infobae). Aportación de la población extranjera",
        url: "https://www.infobae.com/espana/2025/12/07/el-80-del-crecimiento-que-se-ha-registrado-en-espana-entre-2019-y-2025-se-debe-a-la-poblacion-extranjera-segun-el-banco-central-europeo/",
      },
    ],
  },
  {
    slug: "deficit",
    grupo: "favor-letra",
    tema: "economia",
    solidez: "Dato oficial (Hacienda y Eurostat)",
    titulo: "El déficit más bajo desde 2008",
    resumen: "El déficit baja al 2,2 % del PIB sin contar la DANA, pero la deuda sube en 550.000 millones.",
    cifras: [
      { valor: "2,2 %", nota: "1", texto: "del PIB de déficit en 2025 sin el gasto de la DANA. Con él, el 2,4 %" },
      { valor: "100,7 %", nota: "2", texto: "del PIB de deuda pública al cierre de 2025" },
    ],
    notas: [
      {
        marca: "1",
        texto:
          "El déficit baja, pero sigue habiendo déficit: la deuda en euros marca récord, 1,72 billones, 550.000 millones más que al cierre de 2018.",
      },
      {
        marca: "2",
        texto: "Al cierre de 2018 la deuda era el 97,1 % del PIB. Pesa hoy más que entonces, tras tocar el 119,3 % en 2020.",
      },
      {
        marca: "+",
        texto: "Tres años sin Presupuestos nuevos: las cuentas de 2023 siguen prorrogadas.",
      },
    ],
    entradilla:
      "El desequilibrio anual de las cuentas públicas es el menor en 18 años. La deuda acumulada, en cambio, es la mayor de la historia en euros y pesa más sobre el PIB que cuando empezó el periodo.",
    comoPaso: [
      "El déficit se disparó al entorno del 10 % del PIB en 2020 por la pandemia. Desde entonces se ha reducido cada año gracias al crecimiento y a una recaudación en máximos.",
      "En 2025 cerró en el 2,4 % según Eurostat, o el 2,2 % si se descuenta el gasto extraordinario de la DANA de Valencia.",
      "La deuda pública pasó de 1,173 billones al cierre de 2018 a 1,723 billones en febrero de 2026, según el Banco de España.",
    ],
    defensa: "Es el déficit más bajo desde 2008 y mejora el objetivo pactado con Bruselas.",
    critica:
      "Con la economía creciendo por encima de la media europea, el Estado sigue gastando más de lo que ingresa y la deuda no ha bajado del 100 % del PIB.",
    pendiente: "La deuda pública equivale al 100,7 % del PIB, frente al 97,1 % de 2018.",
    fuentes: [
      {
        titulo: "CaixaBank Research. Déficit público de 2025",
        url: "https://www.caixabankresearch.com/es/publicaciones/notas-breves-actualidad-economica-y-financiera/espana/deficit-publico-se-situo-2025",
      },
      {
        titulo: "Eurostat (vía EFE). Déficit y deuda de 2025",
        url: "https://www.swissinfo.ch/spa/espa%C3%B1a-cerr%C3%B3-2025-con-un-d%C3%A9ficit-del-2,4-%25-y-una-deuda-del-100,7-%25-del-pib,-seg%C3%BAn-eurostat/91297182",
      },
      {
        titulo: "Banco de España (vía Euronews). Deuda de 1,72 billones",
        url: "https://es.euronews.com/2026/04/22/deuda-publica-espanola-alcanza-maximos-historicos-febrero-con-172-billones-de-euros",
      },
      {
        titulo: "Banco de España (vía Okdiario). Deuda al cierre de 2018",
        url: "https://okdiario.com/economia/banco-espana-situa-971-del-pib-deuda-publica-2018-revisarla-baja-900-millones-4020955",
      },
    ],
  },
  {
    slug: "cataluna-sin-mayoria-independentista",
    grupo: "favor-letra",
    tema: "cataluna",
    solidez: "Resultado electoral",
    titulo: "Cataluña, sin mayoría independentista",
    resumen: "En 2024 el independentismo pierde la mayoría en el Parlament. El precio fueron indultos, reforma penal y amnistía.",
    cifras: [
      { valor: "59/135", nota: "1", texto: "escaños de Junts, ERC y la CUP en 2024. La mayoría son 68" },
      { valor: "42", nota: "2", texto: "escaños del PSC, primera fuerza" },
    ],
    notas: [
      {
        marca: "1",
        texto: "El precio: indultos en 2021, derogación de la sedición en 2022 y amnistía en 2024.",
      },
      {
        marca: "2",
        texto:
          "La amnistía se pactó a cambio de los votos de la investidura de 2023. Antes de esas elecciones, Sánchez había dicho que no cabía en la Constitución.",
      },
    ],
    entradilla:
      "Por primera vez desde el inicio del procés, los partidos independentistas no suman mayoría en el Parlament y gobierna un partido no independentista. El camino hasta ahí pasó por tres decisiones penales a favor de los condenados.",
    comoPaso: [
      "En junio de 2021 el Gobierno indultó parcialmente a los nueve líderes del procés encarcelados. En diciembre de 2022 derogó el delito de sedición y rebajó la malversación sin lucro personal.",
      "Tras las elecciones de julio de 2023, el PSOE pactó con Junts y ERC una ley de amnistía a cambio de la investidura. Se aprobó en mayo de 2024.",
      "En las elecciones catalanas del 12 de mayo de 2024 el PSC ganó con 42 escaños. Junts obtuvo 35, ERC 20 y la CUP 4.",
    ],
    defensa: "Cataluña vive su periodo de menor tensión política desde 2017 y el independentismo ha perdido la mayoría en las urnas.",
    critica:
      "El resultado se obtuvo cambiando el Código Penal y aprobando una amnistía que el propio presidente había descartado, negociada con sus beneficiarios.",
    fuentes: [
      {
        titulo: "EITB. Resultados de las elecciones al Parlament de 2024",
        url: "https://www.eitb.eus/es/noticias/politica/detalle/9493659/resultados-de-elecciones-al-parlamento-de-cataluna-12-mayo-2024/",
      },
      { titulo: "BOE. Ley Orgánica 1/2024, de amnistía", url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2024-11776" },
      { titulo: "BOE. Ley Orgánica 14/2022, reforma de sedición y malversación", url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2022-21800" },
      {
        titulo: "Infobae. Declaraciones de Sánchez y sus ministros sobre la amnistía",
        url: "https://www.infobae.com/espana/2023/09/08/pedro-sanchez-dijo-que-la-amnistia-no-entra-dentro-de-la-constitucion-y-una-decena-de-sus-ministros-tambien-se-ha-opuesto-a-ella/",
      },
    ],
  },
  {
    slug: "pensiones",
    grupo: "favor-letra",
    tema: "economia",
    solidez: "Ley en vigor (BOE)",
    titulo: "Pensiones ligadas al IPC por ley",
    resumen: "Las pensiones suben con la inflación desde 2021. La AIReF avisa de que el sistema empuja la deuda al 123 % del PIB.",
    cifras: [
      { valor: "+8,5 %", nota: "1", texto: "subieron las pensiones en 2023, lo mismo que los precios" },
      { valor: "14,6 %", nota: "2", texto: "del PIB costarán de media hasta 2050, según la AIReF" },
    ],
    notas: [
      {
        marca: "1",
        texto: "Se paga en parte con más cotizaciones de trabajadores y empresas, mediante un recargo creado en 2023.",
      },
      {
        marca: "2",
        texto:
          "La AIReF dice que la regla de gasto se cumple en lo formal, pero que está mal diseñada, y prevé que la deuda pública suba hasta el 123 % del PIB por el envejecimiento.",
      },
    ],
    entradilla:
      "Los pensionistas no pierden poder adquisitivo: la ley obliga a subir las pensiones lo mismo que los precios. El organismo que vigila las cuentas públicas advierte del coste a largo plazo.",
    comoPaso: [
      "La Ley 21/2021 recuperó la revalorización automática con el IPC y derogó el índice de 2013, que limitaba las subidas al 0,25 % cuando el sistema estaba en déficit.",
      "Para financiarlo se crearon nuevas cotizaciones, entre ellas el Mecanismo de Equidad Intergeneracional, que pagan empresas y trabajadores.",
      "En su estudio de 2026, la AIReF calcula un gasto bruto medio del 14,6 % del PIB entre 2022 y 2050, y del 13 % una vez descontados los nuevos ingresos.",
    ],
    defensa: "Las pensiones mantienen su poder de compra y la regla de gasto pactada con Bruselas se cumple en lo formal.",
    critica:
      "El coste recae en quienes trabajan hoy y en la deuda futura. La AIReF considera que el indicador usado no mide bien la sostenibilidad.",
    pendiente: "La AIReF prevé que la deuda pública suba hasta el 123 % del PIB por el envejecimiento.",
    fuentes: [
      { titulo: "BOE. Ley 21/2021, de garantía del poder adquisitivo de las pensiones", url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2021-21652" },
      {
        titulo: "AIReF. Estudio de evaluación de la regla de gasto de pensiones, mayo de 2026",
        url: "https://www.airef.es/wp-content/uploads/2026/05/Pensiones/AIReF.-Estudio-de-evaluacion-de-la-regla-de-gasto-de-pensiones.pdf",
      },
    ],
  },
  {
    slug: "fondos-europeos",
    grupo: "favor-letra",
    tema: "economia",
    solidez: "Dato oficial (Gobierno)",
    titulo: "Casi 80.000 millones europeos a fondo perdido",
    resumen: "España recibió una de las mayores asignaciones de fondos europeos y renunció al 73 % de los créditos.",
    cifras: [
      { valor: "79.854 M€", nota: "1", texto: "en transferencias europeas que no hay que devolver" },
      { valor: "60.360 M€", nota: "2", texto: "en créditos europeos a los que España renunció" },
    ],
    notas: [
      {
        marca: "1",
        texto: "A finales de 2025 el Gobierno admitía dificultades para adjudicar 15.000 millones antes del plazo.",
      },
      {
        marca: "2",
        texto:
          "De 83.160 millones disponibles en préstamos solo pedirá 22.800. El Gobierno alega que financiarse en el mercado ya cuesta casi lo mismo.",
      },
    ],
    entradilla:
      "El plan europeo de recuperación asignó a España 163.014 millones entre ayudas y créditos. Las ayudas se han recibido; tres cuartas partes de los créditos se han dejado sin pedir.",
    comoPaso: [
      "El fondo Next Generation EU se creó en 2020 para responder a la pandemia. A España le correspondieron 79.854 millones en transferencias y 83.160 millones en préstamos.",
      "En diciembre de 2025 el Gobierno aprobó una modificación del plan por la que renuncia a 60.360 millones en créditos, el 73 % del tramo.",
    ],
    defensa: "España es de los países que más ayudas directas ha obtenido, y renunciar a créditos evita aumentar la deuda.",
    critica:
      "El dinero se ha gestionado con retraso, parte está sin adjudicar a meses del fin del plazo y se han dejado sin usar más de 60.000 millones.",
    fuentes: [
      {
        titulo: "El Independiente. España renuncia a 60.000 millones en créditos europeos",
        url: "https://www.elindependiente.com/economia/2025/12/09/espana-renuncia-60000-millones-euros-creditos-fondos-europeos/",
      },
      {
        titulo: "The Objective. Dificultades para adjudicar 15.000 millones",
        url: "https://theobjective.com/economia/macroeconomia/2025-12-03/gobierno-renuncia-fondos-ue/",
      },
    ],
  },
  {
    slug: "ingreso-minimo-vital",
    grupo: "favor-letra",
    tema: "sociedad",
    solidez: "Ley en vigor (BOE) y evaluación de la AIReF",
    titulo: "La primera renta mínima estatal",
    resumen: "El Ingreso Mínimo Vital existe desde 2020, pero más de la mitad de los hogares con derecho no lo pide.",
    cifras: [
      { valor: "342.856", nota: "1", texto: "hogares cobraban el Ingreso Mínimo Vital en 2023" },
      { valor: "55 %", nota: "2", texto: "de los hogares con derecho no lo solicita" },
    ],
    notas: [
      { marca: "1", texto: "Son el 36 % de los 951.702 hogares que podían recibirlo." },
      {
        marca: "2",
        texto: "La AIReF repite el dato año tras año sin mejora y calcula que la ayuda llega a uno de cada cinco hogares en pobreza.",
      },
    ],
    entradilla:
      "España no tenía una renta mínima común a todo el país hasta 2020. Seis años después, el organismo que la evalúa concluye que llega a una parte pequeña de quienes la necesitan.",
    comoPaso: [
      "El Ingreso Mínimo Vital se aprobó por decreto-ley en mayo de 2020, en plena pandemia, y después se convirtió en ley.",
      "La AIReF lo evalúa cada año por mandato legal. En su última opinión mantiene que el 55 % de los hogares que podrían cobrarlo no lo solicita, y que su diseño reduce poco la tasa de pobreza.",
    ],
    defensa: "Cientos de miles de hogares sin ingresos cobran una prestación estatal que antes no existía.",
    critica: "Llega a un tercio de los hogares previstos y la falta de solicitudes no se ha corregido en seis años.",
    pendiente: "El 55 % de los hogares con derecho al Ingreso Mínimo Vital no lo solicita.",
    fuentes: [
      { titulo: "BOE. Real Decreto-ley 20/2020, Ingreso Mínimo Vital", url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2020-5493" },
      {
        titulo: "AIReF (vía El Economista). El IMV llega al 35 % de los hogares que podrían recibirlo",
        url: "https://www.eleconomista.es/economia/noticias/12324829/06/23/la-airef-denuncia-que-el-ingreso-minimo-vital-solo-llega-al-35-de-hogares-que-podrian-recibirlo.html",
      },
      {
        titulo: "AIReF (vía The Objective). Cobertura de hogares en pobreza, 2026",
        url: "https://theobjective.com/economia/2026-02-04/airef-ingreso-minimo-hogares-pobreza/",
      },
    ],
  },
  {
    slug: "renovables",
    grupo: "favor-letra",
    tema: "emergencias",
    solidez: "Dato oficial (Red Eléctrica)",
    titulo: "Más de la mitad de la luz, renovable",
    resumen: "Las renovables producen más del 55 % de la electricidad. El apagón de 2025 destapó que la red no estaba preparada.",
    cifras: [
      { valor: "56,8 %", nota: "1", texto: "de la electricidad de 2024 fue renovable, récord histórico" },
      { valor: "55,5 %", texto: "en 2025, con máximo de producción" },
    ],
    notas: [
      {
        marca: "1",
        texto:
          "El apagón total del 28 de abril de 2025 mostró un control de tensión insuficiente y una regulación de red anticuada, según el informe europeo. El mismo informe descarta que la causa fueran solo las renovables.",
      },
    ],
    entradilla:
      "España produce más electricidad renovable que nunca. El mayor apagón europeo en dos décadas ocurrió en ese mismo sistema.",
    comoPaso: [
      "La potencia renovable instalada ha crecido cada año. En 2024 la eólica fue la primera fuente de generación y la solar fotovoltaica batió su récord por sexto año seguido.",
      "El 28 de abril de 2025 una sobretensión provocó desconexiones en cadena y dejó sin luz a toda la península. El informe final de los operadores europeos lo atribuye a varias causas técnicas encadenadas.",
    ],
    defensa: "La electricidad renovable reduce la dependencia del gas importado y las emisiones.",
    critica: "Se instaló generación más deprisa de lo que se reforzaron la red y su regulación.",
    fuentes: [
      {
        titulo: "Red Eléctrica (vía EFE). Generación renovable en 2024",
        url: "https://www.infobae.com/espana/agencias/2025/02/18/las-energias-renovables-aportaron-el-5681-de-la-generacion-electrica-espanola-en-2024/",
      },
      {
        titulo: "Review Energy. Generación renovable en 2025",
        url: "https://www.review-energy.com/otras-fuentes/espana-aumenta-su-consumo-electrico-y-alcanza-un-56-6-de-generacion-renovable-en-2025",
      },
      {
        titulo: "Review Energy. Informe de ENTSO-E sobre el apagón",
        url: "https://www.review-energy.com/otras-fuentes/entso-e-publica-el-relato-completo-del-apagon-iberico-asi-colapso-la-red",
      },
    ],
  },
  {
    slug: "salario-minimo",
    grupo: "favor-sostiene",
    tema: "economia",
    solidez: "Dato oficial (BOE)",
    titulo: "El salario mínimo sube dos tercios",
    resumen: "De 735,9 € en 2018 a 1.221 € en 2026, muy por encima de la inflación del periodo.",
    cifras: [
      { valor: "+66 %", nota: "1", texto: "de 735,9 € al mes en 2018 a 1.221 € en 2026, en 14 pagas" },
    ],
    notas: [
      {
        marca: "1",
        texto: "Los precios subieron en torno a un 25 % entre 2018 y 2025, según el IPC del INE. La ganancia real es clara.",
      },
      {
        marca: "+",
        texto:
          "El Banco de España estimó que, tras la subida de 2019, el empleo de los trabajadores afectados creció entre 6 y 11 puntos menos de lo esperado.",
      },
    ],
    entradilla:
      "El salario mínimo ha subido todos los años desde 2019. El estudio del Banco de España sobre la primera subida encontró un freno al empleo de los sueldos más bajos.",
    comoPaso: [
      "El salario mínimo se fija cada año por real decreto. Subió un 22,3 % en 2019, hasta 900 euros, y ha vuelto a subir en todos los ejercicios siguientes.",
      "En 2026 quedó en 1.221 euros mensuales en 14 pagas, 17.094 euros brutos al año.",
    ],
    defensa: "Los sueldos más bajos han ganado poder de compra por encima de cualquier otro grupo.",
    critica: "La subida encarece la contratación de los trabajadores menos cualificados, según la estimación del Banco de España para 2019.",
    fuentes: [
      { titulo: "BOE. Real Decreto 1077/2017, salario mínimo para 2018", url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2017-15848" },
      { titulo: "Iberley. Salario mínimo para 2026", url: "https://www.iberley.es/noticias/publicado-salario-minimo-interprofesional-2026-36093" },
      {
        titulo: "Agenda Pública. Qué dice el Banco de España sobre la subida de 2019",
        url: "https://agendapublica.es/noticia/17230/qu-nos-dice-qu-no-banco-espana-sobre-subida-smi",
      },
      { titulo: "INE. Índice de Precios de Consumo", url: "https://www.ine.es/prensa/ipc_tabla.htm" },
    ],
  },
  {
    slug: "temporalidad",
    grupo: "favor-sostiene",
    tema: "economia",
    solidez: "Dato oficial (INE)",
    titulo: "La temporalidad se hunde en la empresa privada",
    resumen: "Los contratos temporales bajan al 12,3 % en el sector privado. En la Administración siguen en el 27,3 %.",
    cifras: [
      { valor: "12,3 %", nota: "1", texto: "de temporalidad en el sector privado. La tasa total era del 26,8 % en 2018" },
      { valor: "27,3 %", nota: "2", texto: "de temporalidad en el sector público" },
    ],
    notas: [
      {
        marca: "1",
        texto:
          "En el paro registrado, los fijos discontinuos sin actividad no figuran como parados, sino como «demandantes con relación laboral»: 892.933 al cierre de 2025, récord.",
      },
      { marca: "2", texto: "La Administración no se aplica la receta: su temporalidad es más del doble que la privada." },
    ],
    entradilla:
      "La reforma laboral de 2021 redujo a menos de la mitad los contratos temporales en las empresas. Dos efectos la matizan: el auge de los fijos discontinuos y el retraso del sector público.",
    comoPaso: [
      "El Real Decreto-ley 32/2021, pactado con CEOE, CCOO y UGT, eliminó el contrato por obra y limitó los temporales a causas tasadas.",
      "En el segundo trimestre de 2026 la temporalidad era del 12,3 % en el sector privado y del 27,3 % en el público.",
    ],
    defensa: "Millones de trabajadores han pasado de un contrato temporal a uno indefinido.",
    critica:
      "Parte de la mejora es un cambio de etiqueta: los fijos discontinuos alternan periodos sin trabajo que no cuentan como paro registrado.",
    pendiente: "La temporalidad en el sector público es del 27,3 %, más del doble que en el privado.",
    fuentes: [
      { titulo: "BOE. Real Decreto-ley 32/2021, reforma laboral", url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2021-21788" },
      { titulo: "INE. Encuesta de Población Activa, segundo trimestre de 2018", url: "https://www.ine.es/daco/daco42/daco4211/epa0218.pdf" },
      {
        titulo: "El Economista. Temporalidad pública y privada en 2026",
        url: "https://www.eleconomista.es/economia/noticias/14004528/07/26/la-temporalidad-del-sector-publico-frente-al-privado-se-duplica-desde-2021.html",
      },
      {
        titulo: "El Economista. Fijos discontinuos inscritos como demandantes",
        url: "https://www.eleconomista.es/economia/noticias/13720601/01/26/los-fijos-discontinuos-apuntados-al-paro-no-encuentran-techo-con-un-record-de-860000-que-supera-a-los-que-estan-trabajando.html",
      },
    ],
  },
  {
    slug: "erte",
    grupo: "favor-sostiene",
    tema: "covid",
    solidez: "Dato oficial (Seguridad Social)",
    titulo: "Los ERTE evitaron despidos masivos",
    resumen: "En abril de 2020 los ERTE protegían a 3,39 millones de trabajadores, uno de cada cuatro afiliados.",
    cifras: [
      { valor: "3,39 M", nota: "1", texto: "trabajadores en ERTE el 30 de abril de 2020, el 24 % de los afiliados" },
    ],
    notas: [
      { marca: "1", texto: "Aun así, 2020 cerró con la mayor caída del PIB de la UE: un 10,9 %." },
      { marca: "+", texto: "El coste lo asumió el Estado con deuda, que llegó al 119,3 % del PIB en 2020." },
    ],
    entradilla:
      "Durante el confinamiento el Estado pagó parte del sueldo de millones de trabajadores para que sus empresas no los despidieran. El empleo aguantó mucho mejor que la economía.",
    comoPaso: [
      "Los expedientes de regulación temporal de empleo ya existían, pero se flexibilizaron por decreto en marzo de 2020 y se prorrogaron varias veces con acuerdo de patronal y sindicatos.",
      "El 30 de abril de 2020 había 3.386.785 trabajadores acogidos, la mayoría por fuerza mayor. La hostelería y el comercio concentraban los casos.",
    ],
    defensa: "El paro subió mucho menos que en la crisis de 2008 pese a una caída económica mayor.",
    critica: "La factura se pagó con deuda pública, que llegó al 119,3 % del PIB en 2020.",
    fuentes: [
      {
        titulo: "Seguridad Social (vía El Español). Trabajadores en ERTE a 30 de abril de 2020",
        url: "https://www.elespanol.com/invertia/economia/empleo/20200505/trabajadores-afectados-erte-suponen-afiliados-seguridad-social/487701592_0.html",
      },
    ],
  },
  {
    slug: "vacunacion",
    grupo: "favor-sostiene",
    tema: "covid",
    solidez: "Dato oficial (Ministerio de Sanidad)",
    titulo: "El 90 % de vacunados en un año",
    resumen: "A finales de 2021, el 89,9 % de los mayores de 12 años tenía la pauta completa.",
    cifras: [
      { valor: "89,9 %", nota: "1", texto: "de los mayores de 12 años con pauta completa el 28 de diciembre de 2021" },
    ],
    notas: [
      {
        marca: "1",
        texto: "Las vacunas las compró la Comisión Europea y las pusieron las comunidades autónomas. El mérito es compartido.",
      },
      {
        marca: "+",
        texto: "Llegó después de una primera ola con 47.105 muertes más que el año anterior entre marzo y mayo de 2020.",
      },
    ],
    entradilla:
      "La campaña de vacunación alcanzó en doce meses a casi 38 millones de personas. Fue una operación de tres administraciones.",
    comoPaso: [
      "La estrategia nacional la fijó el Ministerio de Sanidad con las comunidades. La compra fue centralizada por la Comisión Europea y la administración corrió a cargo de los servicios de salud autonómicos.",
      "El 28 de diciembre de 2021, 37.858.971 personas tenían la pauta completa.",
    ],
    defensa: "Nueve de cada diez mayores de 12 años se vacunaron en un año, sin vacunación obligatoria.",
    critica: "El Gobierno central se atribuye un resultado que ejecutaron las comunidades con vacunas compradas por Bruselas.",
    fuentes: [
      {
        titulo: "Ministerio de Sanidad (vía COPE). Cobertura a 28 de diciembre de 2021",
        url: "https://www.cope.es/actualidad/sociedad/noticias/casi-poblacion-mayor-anos-tiene-pauta-completa-vacunacion-contra-covid-19-20211228_1702069",
      },
      { titulo: "INE. Defunciones de enero a mayo de 2020", url: "https://www.ine.es/prensa/edcm_ene_may_19_20.pdf" },
    ],
  },
  {
    slug: "excepcion-iberica",
    grupo: "favor-sostiene",
    tema: "economia",
    solidez: "Norma en vigor (BOE)",
    titulo: "El tope al gas abarató la luz",
    resumen: "España y Portugal lograron en 2022 limitar el precio del gas para generar electricidad.",
    cifras: [
      { valor: "2022", nota: "1", texto: "España y Portugal obtienen de Bruselas un tope al gas, vigente hasta diciembre de 2023" },
    ],
    notas: [
      {
        marca: "1",
        texto: "El tope lo pagaban los propios consumidores, con una compensación a las centrales de gas incluida en la factura.",
      },
    ],
    entradilla:
      "En plena crisis energética por la guerra de Ucrania, la península consiguió una excepción a las reglas del mercado eléctrico europeo.",
    comoPaso: [
      "El Real Decreto-ley 10/2022 limitó temporalmente el precio del gas usado para producir electricidad, con autorización de la Comisión Europea.",
      "La diferencia entre el tope y el precio real del gas se compensaba a las centrales con un cargo repartido entre los consumidores beneficiados.",
    ],
    defensa: "El mecanismo rebajó el precio mayorista de la electricidad mientras el gas estuvo por encima del tope.",
    critica: "El ahorro neto fue menor que la rebaja del precio mayorista, porque la compensación a las centrales se sumaba a la factura.",
    fuentes: [
      { titulo: "BOE. Real Decreto-ley 10/2022, mecanismo de ajuste del precio del gas", url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2022-7843" },
    ],
  },
  {
    slug: "permisos-nacimiento",
    grupo: "favor-sostiene",
    tema: "sociedad",
    solidez: "Norma en vigor (BOE)",
    titulo: "Permisos por nacimiento iguales",
    resumen: "Desde 2021 ambos progenitores tienen 16 semanas de permiso, iguales e intransferibles.",
    cifras: [
      { valor: "16", nota: "1", texto: "semanas de permiso para cada progenitor desde 2021" },
    ],
    notas: [
      { marca: "1", texto: "Se aplicó por fases: 8 semanas en 2019, 12 en 2020 y 16 en 2021." },
    ],
    entradilla:
      "El permiso de paternidad pasó de 5 a 16 semanas en tres años y se igualó con el de maternidad.",
    comoPaso: [
      "El Real Decreto-ley 6/2019 equiparó de forma progresiva los permisos por nacimiento y cuidado del menor, pagados al 100 % por la Seguridad Social.",
    ],
    defensa: "Reparte el cuidado entre los dos progenitores y reduce la penalización laboral de las madres.",
    critica: "El coste recae en la Seguridad Social y la medida se aprobó por decreto-ley a semanas de unas elecciones.",
    fuentes: [
      { titulo: "BOE. Real Decreto-ley 6/2019, igualdad en el empleo", url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2019-3244" },
    ],
  },
];
