export interface Propuesta {
  tema: string;
  texto: string;
  /** De dónde sale: anuncio de campaña, resolución de congreso, iniciativa parlamentaria… */
  origen: string;
  fuente: { titulo: string; url: string };
}

export interface Partido {
  id: "pp" | "psoe" | "vox";
  nombre: string;
  siglas: string;
  candidato: string;
  /** Escaños en el Congreso tras las elecciones de julio de 2023. */
  escanos: number;
  color: string;
  /** Color del texto sobre el color del partido, para que se lea. */
  sobreColor: string;
  foto: { src: string; alt: string; credito: string; licencia: string; url: string };
  propuestas: Propuesta[];
}

/** Fecha hasta la que se han recogido propuestas. */
export const PROPUESTAS_A = "10 de octubre de 2026";

const FORBES = {
  titulo: "Forbes",
  url: "https://forbes.es/actualidad/1036705/elecciones-2026-batallas-economicas-29-n/",
};
const EL_DEBATE = {
  titulo: "El Debate",
  url: "https://www.eldebate.com/espana/20261010/compromisos-feijoo-cara-elecciones-derogar-leyes-sanchistas-bajar-impuestos-millon-casas_466730.html",
};
const NUEVA_RADIO = {
  titulo: "Nueva Radio",
  url: "https://www.nuevaradio.org/2026/10/07/feijoo-presenta-reformas-significativas-en-impuestos-vivienda-y-restricciones-dirigidas-a-vox/",
};
const DIARIO_SOCIALISTA = {
  titulo: "Diario Socialista",
  url: "https://diariosocialista.net/2026/10/07/sanchez-inicia-la-campana-electoral-retomando-los-decretos-de-vivienda/",
};
const CONGRESO_PSOE = {
  titulo: "Noticias de Navarra",
  url: "https://www.noticiasdenavarra.com/politica/2024/11/30/psoe-ratifica-propuesta-llegar-jornada-laboral-36-horas-2030-8998740.html",
};
const EURONEWS_VOX = {
  titulo: "Euronews",
  url: "https://es.euronews.com/2026/10/05/vox-pp-condiciones-gobernar-espana-remigracion-desregularizacion-prioridad-nacional",
};
const VOX_FEBRERO = {
  titulo: "Vox",
  url: "https://www.voxespana.es/grupo_parlamentario/actividad-parlamentaria/regularizacion-masiva-rechazo-frontal-de-vox-al-plan-de-sustitucion-demografica-del-gobierno-y-una-advertencia-la-inmigracion-masiva-sobrecarga-de-manera-terminal-los-servicios-publicos-esencial-20260203",
};

const CAMPANA = "Anunciado en octubre de 2026";
const DECALOGO_PP = "Propuesta económica del PP, 2026";
const DECRETOS = "Decretos aprobados tras convocar las elecciones, octubre de 2026";
const CONGRESO_2024 = "Resolución del 41.º Congreso del PSOE, 2024";
const PROGRAMA_VOX = "Programa económico de Vox";
const INICIATIVA_VOX = "Iniciativa parlamentaria de Vox, febrero de 2026";

/** Los tres partidos con más escaños en el Congreso elegido en 2023, por ese orden. */
export const PARTIDOS: Partido[] = [
  {
    id: "pp",
    nombre: "Partido Popular",
    siglas: "PP",
    candidato: "Alberto Núñez Feijóo",
    escanos: 137,
    color: "#0056a7",
    sobreColor: "#ffffff",
    foto: {
      src: "/partidos/feijoo.jpg",
      alt: "Retrato de Alberto Núñez Feijóo",
      credito: "Partido Popular",
      licencia: "CC0",
      url: "https://commons.wikimedia.org/wiki/File:ALBERTO_N%C3%9A%C3%91EZ_FEIJ%C3%93O.jpg",
    },
    propuestas: [
      {
        tema: "Vivienda",
        texto: "Construir un millón de viviendas en cuatro años, con una ley del suelo y licencias en 90 días por silencio administrativo.",
        origen: CAMPANA,
        fuente: EL_DEBATE,
      },
      {
        tema: "Vivienda",
        texto: "Para los jóvenes: IVA de la vivienda nueva del 10 % al 4 % y avales públicos del 95 % al 100 % de la hipoteca.",
        origen: CAMPANA,
        fuente: EL_DEBATE,
      },
      {
        tema: "Vivienda",
        texto: "Derogar la Ley de Vivienda, eliminar las zonas tensionadas y aprobar una ley contra la okupación.",
        origen: CAMPANA,
        fuente: EL_DEBATE,
      },
      {
        tema: "Impuestos",
        texto: "Actualizar la tarifa del IRPF con la inflación y duplicar el mínimo por hijo: de 2.400 a 4.800 euros por el primero.",
        origen: DECALOGO_PP,
        fuente: FORBES,
      },
      {
        tema: "Impuestos",
        texto: "IVA del 0 % en alimentos básicos y del 10 % en la energía. Sin IVA para autónomos que facturen menos de 85.000 euros.",
        origen: DECALOGO_PP,
        fuente: FORBES,
      },
      {
        tema: "Inmigración",
        texto: "Visado por puntos, presencia permanente de Frontex en la frontera sur, nueva ley de nacionalidad y expulsión de extranjeros que delincan.",
        origen: CAMPANA,
        fuente: NUEVA_RADIO,
      },
      {
        tema: "Instituciones",
        texto: "Sesenta medidas en cien días: que los jueces elijan a 12 de los 20 vocales del Poder Judicial y directores no políticos en el CIS, el INE o la CNMV.",
        origen: CAMPANA,
        fuente: NUEVA_RADIO,
      },
      {
        tema: "Leyes",
        texto: "Derogar las leyes de amnistía, memoria democrática y trans, y revertir la reforma de la sedición y la malversación.",
        origen: CAMPANA,
        fuente: EL_DEBATE,
      },
      {
        tema: "Energía",
        texto: "Prolongar la vida de las centrales nucleares y eliminar el impuesto a la generación eléctrica.",
        origen: DECALOGO_PP,
        fuente: FORBES,
      },
      {
        tema: "Autónomos",
        texto: "«Tarifa cero» para nuevos autónomos y un año sin ciertas cotizaciones por el primer trabajador contratado.",
        origen: DECALOGO_PP,
        fuente: FORBES,
      },
    ],
  },
  {
    id: "psoe",
    nombre: "Partido Socialista Obrero Español",
    siglas: "PSOE",
    candidato: "Pedro Sánchez",
    escanos: 121,
    color: "#e30613",
    sobreColor: "#ffffff",
    foto: {
      src: "/partidos/sanchez.jpg",
      alt: "Retrato de Pedro Sánchez",
      credito: "Pool Moncloa / Carlos Spottorno de las Morenas",
      licencia: "uso con atribución",
      url: "https://commons.wikimedia.org/wiki/File:Pedro_S%C3%A1nchez_in_2026.jpg",
    },
    propuestas: [
      {
        tema: "Vivienda",
        texto: "Recuperar los decretos tumbados por el Congreso: frenar desahucios y prorrogar de forma indefinida los contratos de alquiler.",
        origen: DECRETOS,
        fuente: DIARIO_SOCIALISTA,
      },
      {
        tema: "Vivienda",
        texto: "10.000 millones en préstamos públicos sin intereses, de hasta 50.000 euros, para comprar la primera vivienda.",
        origen: DECRETOS,
        fuente: DIARIO_SOCIALISTA,
      },
      {
        tema: "Vivienda",
        texto: "Limitar hasta 2028 la compra de viviendas por fondos por debajo del 70 % de su tasación.",
        origen: DECRETOS,
        fuente: DIARIO_SOCIALISTA,
      },
      {
        tema: "Vivienda",
        texto: "Desgravación de hasta el 100 % para el propietario que baje el alquiler y deducción del 10 % para inquilinos con rentas bajas.",
        origen: DECRETOS,
        fuente: DIARIO_SOCIALISTA,
      },
      {
        tema: "Vivienda",
        texto: "Empresa Estatal de Vivienda y un parque público por encima del 6 % del total. Plan Estatal 2026–2030 con 7.000 millones.",
        origen: "Plan presentado en junio de 2026",
        fuente: FORBES,
      },
      {
        tema: "Empleo",
        texto: "Reducir la jornada laboral a 36 horas semanales antes de 2030.",
        origen: CONGRESO_2024,
        fuente: CONGRESO_PSOE,
      },
      {
        tema: "Salarios",
        texto: "Fijar en la Constitución que el salario mínimo no baje del 60 % del salario medio.",
        origen: CONGRESO_2024,
        fuente: CONGRESO_PSOE,
      },
      {
        tema: "Empresas",
        texto: "Subir el impuesto de sociedades a las empresas cuyos directivos cobren 40 veces más que la media y obligar a las grandes a repartir beneficios con la plantilla.",
        origen: CONGRESO_2024,
        fuente: CONGRESO_PSOE,
      },
      {
        tema: "Empleo",
        texto: "Nuevo Estatuto de los Trabajadores, nueva ley de negociación colectiva y fin de los falsos autónomos.",
        origen: CONGRESO_2024,
        fuente: CONGRESO_PSOE,
      },
      {
        tema: "Jóvenes",
        texto: "Aprobar un Estatuto del Becario.",
        origen: "Recogido por Forbes, octubre de 2026",
        fuente: FORBES,
      },
    ],
  },
  {
    id: "vox",
    nombre: "Vox",
    siglas: "Vox",
    candidato: "Santiago Abascal",
    escanos: 33,
    color: "#63be21",
    sobreColor: "#15181d",
    foto: {
      src: "/partidos/abascal.jpg",
      alt: "Retrato de Santiago Abascal",
      credito: "Gage Skidmore",
      licencia: "CC BY-SA 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Santiago_Abascal_(54349274173)_(cropped).jpg",
    },
    propuestas: [
      {
        tema: "Inmigración",
        texto: "«Remigración»: revertir lo que el partido llama «invasión migratoria». Es una de sus tres condiciones para pactar con el PP.",
        origen: CAMPANA,
        fuente: EURONEWS_VOX,
      },
      {
        tema: "Ayudas",
        texto: "«Prioridad nacional»: que los españoles vayan por delante en ayudas sociales, vivienda pública y servicios.",
        origen: CAMPANA,
        fuente: EURONEWS_VOX,
      },
      {
        tema: "Inmigración",
        texto: "Deportar a los extranjeros, con papeles o sin ellos, que cometan delitos graves.",
        origen: INICIATIVA_VOX,
        fuente: VOX_FEBRERO,
      },
      {
        tema: "Inmigración",
        texto: "Suprimir el arraigo como vía para obtener papeles e impedir el empadronamiento de inmigrantes irregulares.",
        origen: INICIATIVA_VOX,
        fuente: VOX_FEBRERO,
      },
      {
        tema: "Economía",
        texto: "Desregulación: menos normas y menos cargas para empresas y autónomos. Es otra de sus condiciones al PP.",
        origen: CAMPANA,
        fuente: EURONEWS_VOX,
      },
      {
        tema: "Impuestos",
        texto: "Rebajar los tipos del IRPF, reducir el IVA y dejar el impuesto de sociedades en el 15 %.",
        origen: PROGRAMA_VOX,
        fuente: FORBES,
      },
      {
        tema: "Autónomos",
        texto: "Sin cuota para los autónomos que ingresen menos que el salario mínimo y menos cotizaciones para subir el sueldo neto.",
        origen: PROGRAMA_VOX,
        fuente: FORBES,
      },
      {
        tema: "Vivienda",
        texto: "Liberar suelo, bajar los impuestos de la compra y recuperar la deducción por vivienda habitual.",
        origen: PROGRAMA_VOX,
        fuente: FORBES,
      },
      {
        tema: "Energía",
        texto: "Prolongar las centrales nucleares y construir nuevas. Revisar la descarbonización que reste competitividad a la industria.",
        origen: PROGRAMA_VOX,
        fuente: FORBES,
      },
      {
        tema: "Empleo",
        texto: "Rechazo a reducir la jornada por ley y más flexibilidad para las pymes.",
        origen: PROGRAMA_VOX,
        fuente: FORBES,
      },
    ],
  },
];
