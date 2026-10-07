export type Grupo =
  | "favor-letra"
  | "favor-sostiene"
  | "contra-firme"
  | "contra-matices"
  | "tribunales"
  | "depende";

export type Tema =
  | "economia"
  | "vivienda"
  | "covid"
  | "justicia"
  | "cataluna"
  | "fronteras"
  | "exterior"
  | "instituciones"
  | "sociedad"
  | "emergencias";

export interface Cifra {
  valor: string;
  /** Marca de la nota de «la letra pequeña» a la que remite, si la hay. */
  nota?: string;
  texto: string;
}

export interface Nota {
  /** «1», «2» o «+» para el contexto que no cuelga de una cifra. */
  marca: string;
  texto: string;
}

export interface Fuente {
  titulo: string;
  url: string;
}

export interface Punto {
  slug: string;
  grupo: Grupo;
  tema: Tema;
  /** De dónde sale el hecho: «Dato oficial (INE)», «Sentencia (Tribunal Supremo)»… */
  solidez: string;
  titulo: string;
  /** Una frase para listados y para compartir. */
  resumen: string;
  cifras: Cifra[];
  notas: Nota[];
  entradilla: string;
  comoPaso: string[];
  defensa: string;
  critica: string;
  /** Situación judicial, cuando la hay. */
  legal?: string;
  /** Brecha medible que sigue abierta. */
  pendiente?: string;
  fuentes: Fuente[];
}

export const GRUPOS: Record<
  Grupo,
  { lado: "favor" | "contra" | "neutro"; etiqueta: string; titulo: string; explicacion: string; corto: string }
> = {
  "favor-letra": {
    lado: "favor",
    etiqueta: "A favor",
    titulo: "Con letra pequeña",
    explicacion: "El dato es cierto y oficial. Debajo de cada cifra, lo que falta en el titular.",
    corto: "Dato cierto que el contexto rebaja",
  },
  "favor-sostiene": {
    lado: "favor",
    etiqueta: "A favor",
    titulo: "Se sostiene",
    explicacion: "También tienen contexto, pero no cambia la conclusión.",
    corto: "El contexto no cambia la conclusión",
  },
  "contra-firme": {
    lado: "contra",
    etiqueta: "En contra",
    titulo: "Hecho firme",
    explicacion: "Lo dice una sentencia o un dato oficial. La letra pequeña se aplica igual en este lado.",
    corto: "Sentencia o dato oficial",
  },
  "contra-matices": {
    lado: "contra",
    etiqueta: "En contra",
    titulo: "Con matices",
    explicacion: "El hecho es grave, pero la responsabilidad no es solo del Gobierno.",
    corto: "La responsabilidad está repartida",
  },
  tribunales: {
    lado: "neutro",
    etiqueta: "Pendiente",
    titulo: "En los tribunales",
    explicacion: "Causas abiertas o con recurso posible. Rige la presunción de inocencia.",
    corto: "Sin sentencia firme todavía",
  },
  depende: {
    lado: "neutro",
    etiqueta: "A debate",
    titulo: "Depende de la ideología",
    explicacion: "Los hechos están claros. Lo que cambia es cómo los juzga cada uno.",
    corto: "Hechos claros, juicio dividido",
  },
};

export const ORDEN_GRUPOS: Grupo[] = [
  "favor-letra",
  "favor-sostiene",
  "contra-firme",
  "contra-matices",
  "tribunales",
  "depende",
];

export const TEMAS: Record<Tema, string> = {
  economia: "Economía",
  vivienda: "Vivienda",
  covid: "Covid",
  justicia: "Justicia y corrupción",
  cataluna: "Cataluña",
  fronteras: "Fronteras",
  exterior: "Exterior",
  instituciones: "Instituciones",
  sociedad: "Sociedad",
  emergencias: "Emergencias",
};

export const ACTUALIZADO = "7 de octubre de 2026";
export const FECHA_ELECCIONES = "2026-11-29";
