import { CONTRA } from "./contra";
import { FAVOR } from "./favor";
import { DEPENDE, MAS_CONTRA, TRIBUNALES } from "./otros";
import { ORDEN_GRUPOS, type Grupo, type Punto } from "./tipos";

export const PUNTOS: Punto[] = [...FAVOR, ...CONTRA, ...MAS_CONTRA, ...TRIBUNALES, ...DEPENDE];

export function puntosDe(grupo: Grupo): Punto[] {
  return PUNTOS.filter((p) => p.grupo === grupo);
}

export function puntoPorSlug(slug: string): Punto | undefined {
  return PUNTOS.find((p) => p.slug === slug);
}

/** Puntos en el orden en que aparecen en la portada, para «anterior» y «siguiente». */
export const PUNTOS_ORDENADOS: Punto[] = ORDEN_GRUPOS.flatMap((g) => puntosDe(g));

export function recuento(): Record<Grupo, number> {
  const r = {} as Record<Grupo, number>;
  for (const g of ORDEN_GRUPOS) r[g] = puntosDe(g).length;
  return r;
}
