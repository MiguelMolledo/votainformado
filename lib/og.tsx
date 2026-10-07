import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const TAMANO = { width: 1200, height: 630 };

export const COLOR = {
  blanco: "#ffffff",
  papel: "#f4f5f2",
  tinta: "#15181d",
  tinta2: "#454b54",
  regla: "#d9dcd6",
  favor: "#0b5d57",
  favorClaro: "#7fb3ad",
  contra: "#b3400e",
  contraClaro: "#e3a583",
  gris: "#6b727c",
  grisClaro: "#c9cdd3",
};

export async function fuentes() {
  const dir = join(process.cwd(), "assets", "fuentes");
  const [serif, sans, sansSemi, mono] = await Promise.all([
    readFile(join(dir, "SourceSerif4-Bold.ttf")),
    readFile(join(dir, "PublicSans-Regular.ttf")),
    readFile(join(dir, "PublicSans-SemiBold.ttf")),
    readFile(join(dir, "IBMPlexMono-Medium.ttf")),
  ]);
  return [
    { name: "Serif", data: serif, weight: 700 as const, style: "normal" as const },
    { name: "Sans", data: sans, weight: 400 as const, style: "normal" as const },
    { name: "Sans", data: sansSemi, weight: 600 as const, style: "normal" as const },
    { name: "Mono", data: mono, weight: 500 as const, style: "normal" as const },
  ];
}

/** Las fuentes de la imagen solo llevan el juego latino: se sustituyen los signos que no tienen. */
export function limpiar(texto: string): string {
  return texto.replace(/−/g, "-").replace(/≈\s?/g, "~").replace(/ /g, " ");
}

export function recortar(texto: string, max: number): string {
  const t = limpiar(texto);
  if (t.length <= max) return t;
  const corte = t.slice(0, max);
  return corte.slice(0, corte.lastIndexOf(" ")).replace(/[,.;:]$/, "") + "…";
}
