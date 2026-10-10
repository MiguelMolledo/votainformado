export type Estado = "contrario" | "incumplida" | "bloqueada" | "disputada" | "cumplida";

export interface Promesa {
  slug: string;
  estado: Estado;
  tema: string;
  titulo: string;
  /** Lo que dijo o firmó, con la cita cuando existe. */
  dijo: string;
  /** Cuándo y dónde lo dijo. */
  cuando: string;
  /** Lo que ocurrió después. */
  hizo: string;
  /** Contexto que conviene saber, a favor o en contra. */
  matiz?: string;
  fuentes: { titulo: string; url: string }[];
}

export const ESTADOS: Record<Estado, { etiqueta: string; explicacion: string }> = {
  contrario: { etiqueta: "Hizo lo contrario", explicacion: "Descartó algo en público y después lo hizo." },
  incumplida: { etiqueta: "No cumplida", explicacion: "Lo prometió y no lo hizo." },
  bloqueada: { etiqueta: "No salió adelante", explicacion: "Lo intentó y no logró los votos." },
  disputada: { etiqueta: "En disputa", explicacion: "El Gobierno la da por cumplida y los datos no lo aclaran." },
  cumplida: { etiqueta: "Cumplida", explicacion: "Lo prometió y lo hizo." },
};

export const ORDEN_ESTADOS: Estado[] = ["contrario", "incumplida", "bloqueada", "disputada", "cumplida"];

const BOE = (id: string) => `https://www.boe.es/buscar/doc.php?id=${id}`;
const EL_DEBATE_HEMEROTECA = {
  titulo: "El Debate. Hemeroteca de promesas, octubre de 2026",
  url: "https://www.eldebate.com/espana/20261007/hemeroteca-promesas-sanchez-desde-bildu-no-vamos-pactar-hasta-agotare-legislatura_467020.html",
};
const EL_ESPANOL_PRUEBAS = {
  titulo: "El Español. Declaraciones de Sánchez sobre el procés",
  url: "https://www.elespanol.com/espana/politica/20230925/trece-pruebas-sanchez-oponia-amnistia-pedia-jueces-perseguir-proces/796670407_0.html",
};

export const PROMESAS: Promesa[] = [
  {
    slug: "amnistia",
    estado: "contrario",
    tema: "Cataluña",
    titulo: "La amnistía",
    dijo: "La amnistía «no entra en la legislación ni en la Constitución española». Tres días antes de las elecciones de 2023 presumió de que el independentismo «no ha tenido la amnistía».",
    cuando: "10 de noviembre de 2022 y julio de 2023, en laSexta",
    hizo: "Pactó la amnistía con Junts y ERC para ser investido en noviembre de 2023. La ley se publicó en junio de 2024.",
    matiz: "En enero de 2024 reconoció un «cambio de opinión». El Tribunal Constitucional y el Tribunal de Justicia de la UE han avalado la ley.",
    fuentes: [EL_ESPANOL_PRUEBAS, EL_DEBATE_HEMEROTECA, { titulo: "BOE. Ley Orgánica 1/2024, de amnistía", url: BOE("BOE-A-2024-11776") }],
  },
  {
    slug: "indultos",
    estado: "contrario",
    tema: "Cataluña",
    titulo: "Los indultos del procés",
    dijo: "«Acatamiento significa el íntegro cumplimiento» de la sentencia. Días después: «No procede en absoluto hablar de indultos».",
    cuando: "Octubre y noviembre de 2019, tras la sentencia del Supremo",
    hizo: "El 22 de junio de 2021 su Gobierno indultó a los nueve condenados a prisión, con informes en contra del Tribunal Supremo y de la Fiscalía.",
    matiz: "Los indultos fueron parciales: se mantuvo la inhabilitación.",
    fuentes: [
      EL_ESPANOL_PRUEBAS,
      EL_DEBATE_HEMEROTECA,
      { titulo: "La Moncloa. Concesión de los indultos", url: "https://www.lamoncloa.gob.es/consejodeministros/resumenes/paginas/2021/220621-cministros.aspx" },
    ],
  },
  {
    slug: "puigdemont",
    estado: "contrario",
    tema: "Cataluña",
    titulo: "Traer a Puigdemont ante la justicia",
    dijo: "«Yo me comprometo, hoy y aquí, a traerlo de vuelta a España.»",
    cuando: "Debate electoral de noviembre de 2019",
    hizo: "Puigdemont no fue entregado. La amnistía pactada con su partido borró la causa, y en octubre de 2026 el Constitucional abrió su regreso sin juicio.",
    fuentes: [
      EL_ESPANOL_PRUEBAS,
      { titulo: "Moncloa.com. El Constitucional avala la amnistía a Puigdemont", url: "https://www.moncloa.com/2026/10/06/constitucional-puigdemont-3443370/" },
    ],
  },
  {
    slug: "bildu",
    estado: "contrario",
    tema: "Pactos",
    titulo: "No pactar con Bildu",
    dijo: "«Con Bildu no vamos a pactar, si quiere se lo digo cinco veces o veinte.»",
    cuando: "Abril de 2015, en Navarra Televisión. Lo repitió en 2016 y 2019, según Newtral",
    hizo: "Bildu apoyó su investidura en noviembre de 2023. El 28 de diciembre de ese año los socialistas navarros dieron a Bildu la alcaldía de Pamplona.",
    matiz: "Bildu no ha formado parte del Gobierno. Los acuerdos han sido parlamentarios.",
    fuentes: [
      {
        titulo: "El Debate. Del «no vamos a pactar» al acuerdo con Bildu",
        url: "https://www.eldebate.com/espana/20231014/bildu-no-vamos-pactar-quiere-digo-20-veces-esto-deci-pedro-sanchez-2015_146478.html",
      },
      { titulo: "Newtral. Hemeroteca sobre los pactos con Bildu", url: "https://www.newtral.es/newtral-hemeroteca-pedro-sanchez-pactos-bildu/20201112/" },
    ],
  },
  {
    slug: "podemos",
    estado: "contrario",
    tema: "Pactos",
    titulo: "No gobernar con Podemos",
    dijo: "«Ni yo dormiría tranquilo ni tampoco el 95 % de los ciudadanos» con ministros de Podemos en el Gobierno.",
    cuando: "19 de septiembre de 2019, en laSexta",
    hizo: "Dos días después de las elecciones del 10 de noviembre de 2019 firmó un preacuerdo de coalición con Pablo Iglesias. El Gobierno conjunto duró hasta 2023.",
    matiz: "Entre la frase y el pacto hubo unas elecciones en las que el PSOE perdió escaños.",
    fuentes: [
      {
        titulo: "El Independiente. La entrevista de septiembre de 2019",
        url: "https://www.elindependiente.com/politica/2019/09/19/sanchez-el-95-de-los-espanoles-no-dormiria-con-podemos-en-el-gobierno/",
      },
      { titulo: "Newtral. Del insomnio al abrazo", url: "https://www.newtral.es/newtral-hemeroteca-gobierno-coalicion-insomnio-abrazo/20191112/" },
    ],
  },
  {
    slug: "sahara",
    estado: "contrario",
    tema: "Exterior",
    titulo: "La autodeterminación del Sáhara",
    dijo: "El programa electoral prometía una solución que garantizara «el derecho de autodeterminación del pueblo saharaui».",
    cuando: "Programa del PSOE para las elecciones de abril de 2019",
    hizo: "En marzo de 2022 Sánchez apoyó por carta el plan marroquí de autonomía. La dirección del PSOE admitió que era un cambio respecto al programa.",
    fuentes: [
      {
        titulo: "El Independiente. Cómo enterró el PSOE su apoyo a la autodeterminación",
        url: "https://www.elindependiente.com/espana/2023/07/07/asi-enterro-el-psoe-su-apoyo-a-la-autodeterminacion-del-sahara/",
      },
      { titulo: "Maldita.es. El discurso del PSOE sobre el Sáhara", url: "https://maldita.es/malditahemeroteca/20220323/PSOE-sahara-referendum-autonomia-marruecos/" },
    ],
  },
  {
    slug: "presupuestos",
    estado: "incumplida",
    tema: "Instituciones",
    titulo: "Presentar los Presupuestos",
    dijo: "Que presentaría los Presupuestos de 2026 antes de que acabara 2025. En junio de 2026: habrá presupuestos en 2026 y elecciones en 2027.",
    cuando: "1 de septiembre de 2025, en TVE, y 19 de junio de 2026, en Bruselas",
    hizo: "No envió ningún proyecto de Presupuestos al Congreso en toda la legislatura. Es la primera vez en democracia.",
    matiz: "No tenía los votos para aprobarlos. La Constitución obliga a presentarlos igualmente.",
    fuentes: [
      { titulo: "Newtral. Cuando prometía presentar los presupuestos", url: "https://www.newtral.es/pedro-sanchez-presupuestos-elecciones-hemeroteca/20261005/" },
      { titulo: "Newtral. Los presupuestos de 2026 que no llegaron", url: "https://www.newtral.es/sanchez-presupuestos-2026/20251230/" },
      { titulo: "Maldita.es. Lo que decía el Gobierno sobre los Presupuestos", url: "https://maldita.es/malditahemeroteca/20250905/gobierno-sanchez-presupuestos-excusas/" },
    ],
  },
  {
    slug: "legislatura",
    estado: "incumplida",
    tema: "Instituciones",
    titulo: "Agotar la legislatura",
    dijo: "«Mi voluntad firme es acabar la legislatura en 2027.» En julio de 2026: «Queda un año para culminar esta legislatura».",
    cuando: "Diciembre de 2025 y 28 de julio de 2026, en la Moncloa",
    hizo: "El 5 de octubre de 2026 disolvió las Cortes y convocó elecciones para el 29 de noviembre, ocho meses antes del límite.",
    matiz: "Convocó tres días después de que el Congreso derogara sus decretos de vivienda.",
    fuentes: [
      EL_DEBATE_HEMEROTECA,
      { titulo: "Maldita.es. Cuando decía que las elecciones serían en 2027", url: "https://maldita.es/control-del-poder/20261005/sanchez-elecciones-29-noviembre-legislatura-2027/" },
    ],
  },
  {
    slug: "amnistia-fiscal",
    estado: "incumplida",
    tema: "Transparencia",
    titulo: "Publicar la lista de la amnistía fiscal",
    dijo: "En la oposición pidió o prometió al menos diez veces publicar los nombres de quienes se acogieron a la amnistía fiscal de 2012.",
    cuando: "Antes de llegar a la Moncloa, según la hemeroteca de Maldita.es",
    hizo: "En julio de 2018, con Sánchez ya en la Moncloa, la ministra de Hacienda anunció que no se publicaría.",
    matiz: "El Gobierno alegó que la ley no permite hacerlo con efecto retroactivo. Un exdirector de la Agencia Tributaria sostuvo que bastaba cambiar la ley.",
    fuentes: [
      {
        titulo: "Maldita.es. Diez veces que pidió o prometió publicar la lista",
        url: "https://maldita.es/malditahemeroteca/20201014/10-veces-en-las-que-pedro-sanchez-pidio-que-se-publicara-la-lista-de-la-amnistia-fiscal-o-prometio-publicarla-cuando-llegara-al-gobierno/",
      },
      { titulo: "Público. Críticas por negarse a publicarla", url: "https://www.publico.es/politica/criticas-sanchez-ambos-flancos-negarse-publicar-lista-defraudadores.html" },
    ],
  },
  {
    slug: "referendum-ilegal",
    estado: "incumplida",
    tema: "Cataluña",
    titulo: "Castigar los referéndums ilegales",
    dijo: "Que incluiría en el Código Penal la prohibición de convocar referéndums ilegales.",
    cuando: "Campaña de noviembre de 2019, en laSexta",
    hizo: "El delito no se creó. En diciembre de 2022 derogó la sedición y rebajó la malversación.",
    fuentes: [EL_DEBATE_HEMEROTECA, { titulo: "BOE. Ley Orgánica 14/2022", url: BOE("BOE-A-2022-21800") }],
  },
  {
    slug: "reforma-laboral",
    estado: "incumplida",
    tema: "Empleo",
    titulo: "Derogar entera la reforma laboral de 2012",
    dijo: "El PSOE firmó con Unidas Podemos y Bildu derogar «de manera íntegra» la reforma laboral del PP.",
    cuando: "Acuerdo del 20 de mayo de 2020, a cambio de prorrogar el estado de alarma",
    hizo: "Rectificó esa misma noche: la derogación no sería íntegra. La reforma laboral de 2021 modificó la de 2012, pero no la derogó.",
    matiz: "La reforma de 2021 se pactó con patronal y sindicatos y redujo la temporalidad a menos de la mitad en la empresa privada.",
    fuentes: [
      {
        titulo: "Público. El acuerdo para la derogación íntegra",
        url: "https://www.publico.es/politica/derogacion-reforma-laboral-bildu-pacta-psoe-unidas-derogacion-reforma-laboral-pp-emergencia-covid-19.html",
      },
      {
        titulo: "El Economista. El Gobierno rectifica",
        url: "https://www.eleconomista.es/economia/noticias/10555655/05/20/El-Gobierno-pacta-con-Bildu-la-derogacion-integra-de-la-reforma-laboral-del-PP-a-corto-plazo.html",
      },
    ],
  },
  {
    slug: "ley-mordaza",
    estado: "incumplida",
    tema: "Derechos",
    titulo: "Derogar la «ley mordaza»",
    dijo: "La derogación de la Ley de Seguridad Ciudadana de 2015 figuró en programas electorales y acuerdos de Gobierno del PSOE.",
    cuando: "Desde 2015. En el pacto de coalición de 2019 y en el acuerdo con Sumar de 2024",
    hizo: "La ley sigue en vigor once años después. La reforma en trámite decayó con la disolución de las Cortes.",
    matiz: "El programa de 2023 ya no hablaba de derogarla, según El Salto.",
    fuentes: [
      {
        titulo: "elDiario.es. Diez años sin derogación a la vista",
        url: "https://www.eldiario.es/politica/ley-mordaza-cumple-diez-anos-derogacion-vista-recaudar-1-000-millones-multas-cat_1_12171627.html",
      },
      { titulo: "Moncloa.com. Los incumplimientos del pacto PSOE-Sumar", url: "https://www.moncloa.com/2026/08/25/pacto-psoe-sumar-3-anos-3420158/" },
    ],
  },
  {
    slug: "jornada",
    estado: "bloqueada",
    tema: "Empleo",
    titulo: "Jornada laboral de 37,5 horas",
    dijo: "Reducir la jornada máxima de 40 a 37,5 horas semanales sin bajar el sueldo.",
    cuando: "Acuerdo de Gobierno entre PSOE y Sumar, octubre de 2023",
    hizo: "El Gobierno llevó la ley al Congreso, que la rechazó el 10 de septiembre de 2025.",
    matiz: "Aquí la promesa se intentó cumplir: faltaron los votos de Junts, PP y Vox.",
    fuentes: [
      { titulo: "Moncloa.com. Los incumplimientos del pacto PSOE-Sumar", url: "https://www.moncloa.com/2026/08/25/pacto-psoe-sumar-3-anos-3420158/" },
      { titulo: "Newtral. Medidas pendientes de los pactos de investidura", url: "https://www.newtral.es/gobierno-medidas-pactos-investidura-sanchez/20260723/" },
    ],
  },
  {
    slug: "viviendas-publicas",
    estado: "disputada",
    tema: "Vivienda",
    titulo: "184.000 viviendas públicas",
    dijo: "Entre 2021 y 2024 anunció hasta 184.000 viviendas públicas de alquiler asequible.",
    cuando: "Anuncios sucesivos de 2021 a 2024",
    hizo: "El Gobierno cuenta 120.479 viviendas «movilizadas» a abril de 2026, pero no ha dicho cuántas están construidas y entregadas.",
    matiz: "«Movilizada» incluye desde viviendas entregadas hasta proyectos en obras. Sin el desglose no se puede comprobar.",
    fuentes: [
      { titulo: "Maldita.es. No hay datos públicos de casas entregadas", url: "https://maldita.es/malditahemeroteca/20260430/vivienda-social-espana-sanchez/" },
      {
        titulo: "El Economista. La incógnita de las 184.000 viviendas",
        url: "https://www.eleconomista.es/vivienda-inmobiliario/noticias/14018416/10/26/la-incognita-de-las-184000-viviendas-que-prometio-sanchez-el-gobierno-no-aclara-cuantas-estan-disponibles.html",
      },
    ],
  },
  {
    slug: "factura-de-la-luz",
    estado: "disputada",
    tema: "Energía",
    titulo: "Pagar en 2021 la misma luz que en 2018",
    dijo: "«Mi compromiso es que todos los ciudadanos con un consumo medio a final de 2021 paguen una cuantía similar a la que pagaron en 2018.»",
    cuando: "Septiembre de 2021, entrevista en El País",
    hizo: "En diciembre la dio por cumplida de media y descontando la inflación. Reconoció que tres de cada diez contratos, los de tarifa regulada, pagaron más.",
    matiz: "El cumplimiento depende de aceptar esos dos ajustes, que no figuraban en la frase original.",
    fuentes: [
      { titulo: "La Moncloa. Transcripción de la entrevista", url: "https://www.lamoncloa.gob.es/presidente/intervenciones/Paginas/2021/prar20210906.aspx" },
      {
        titulo: "El Plural. Sánchez asegura que ha cumplido",
        url: "https://www.elplural.com/economia/sanchez-asegura-ha-cumplido-compromiso-con-recibo-luz-ahi-estan-datos-eurostat_281345102",
      },
    ],
  },
  {
    slug: "pensiones-ipc",
    estado: "cumplida",
    tema: "Pensiones",
    titulo: "Subir las pensiones con el IPC por ley",
    dijo: "Garantizar por ley que las pensiones suban cada año lo mismo que los precios.",
    cuando: "Acuerdo de coalición de 2019",
    hizo: "La Ley 21/2021 lo estableció. En 2023 subieron un 8,5 %.",
    fuentes: [{ titulo: "BOE. Ley 21/2021", url: BOE("BOE-A-2021-21652") }],
  },
  {
    slug: "salario-minimo",
    estado: "cumplida",
    tema: "Salarios",
    titulo: "Subir el salario mínimo",
    dijo: "Subir el salario mínimo de forma progresiva hasta el 60 % del salario medio.",
    cuando: "Acuerdo de coalición de 2019",
    hizo: "Ha subido todos los años: de 735,9 euros en 2018 a 1.221 en 2026.",
    matiz: "Esta web no ha podido comprobar si ya equivale al 60 % del salario medio.",
    fuentes: [
      { titulo: "BOE. Salario mínimo para 2018", url: BOE("BOE-A-2017-15848") },
      { titulo: "Iberley. Salario mínimo para 2026", url: "https://www.iberley.es/noticias/publicado-salario-minimo-interprofesional-2026-36093" },
    ],
  },
  {
    slug: "eutanasia",
    estado: "cumplida",
    tema: "Derechos",
    titulo: "Regular la eutanasia",
    dijo: "Aprobar una ley que regulara el derecho a la eutanasia.",
    cuando: "Acuerdo de coalición de 2019",
    hizo: "La Ley Orgánica 3/2021 entró en vigor en junio de 2021.",
    fuentes: [{ titulo: "BOE. Ley Orgánica 3/2021", url: BOE("BOE-A-2021-4628") }],
  },
  {
    slug: "ley-de-vivienda",
    estado: "cumplida",
    tema: "Vivienda",
    titulo: "Aprobar una ley estatal de vivienda",
    dijo: "Aprobar la primera ley estatal por el derecho a la vivienda.",
    cuando: "Acuerdo de coalición de 2019",
    hizo: "La Ley 12/2023 se aprobó en mayo de 2023.",
    matiz: "Que la ley exista no significa que haya funcionado: los precios suben al mayor ritmo desde 2007.",
    fuentes: [{ titulo: "BOE. Ley 12/2023", url: BOE("BOE-A-2023-12203") }],
  },
];
