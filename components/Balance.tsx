"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { GRUPOS, ORDEN_GRUPOS, TEMAS, type Grupo, type Punto, type Tema } from "@/data/tipos";
import { Tarjeta } from "./Tarjeta";

const VISIBLES = 4;
const CON_TARJETA: Grupo[] = ["favor-letra", "favor-sostiene", "contra-firme", "contra-matices"];

export function Balance({ puntos }: { puntos: Punto[] }) {
  const [tema, setTema] = useState<Tema | "todo">("todo");
  const [abiertos, setAbiertos] = useState<Record<string, boolean>>({});

  const temas = useMemo(() => {
    const cuenta = new Map<Tema, number>();
    for (const p of puntos) cuenta.set(p.tema, (cuenta.get(p.tema) ?? 0) + 1);
    return (Object.keys(TEMAS) as Tema[]).filter((t) => cuenta.has(t)).map((t) => ({ tema: t, n: cuenta.get(t) ?? 0 }));
  }, [puntos]);

  const filtrados = tema === "todo" ? puntos : puntos.filter((p) => p.tema === tema);

  return (
    <>
      <div className="filtro">
        <div className="contenedor" role="group" aria-label="Filtrar por tema">
          <span className="filtro-rotulo">Tema</span>
          <button type="button" className="pastilla" aria-pressed={tema === "todo"} onClick={() => setTema("todo")}>
            Todo<span className="n">{puntos.length}</span>
          </button>
          {temas.map((t) => (
            <button key={t.tema} type="button" className="pastilla" aria-pressed={tema === t.tema} onClick={() => setTema(t.tema)}>
              {TEMAS[t.tema]}
              <span className="n">{t.n}</span>
            </button>
          ))}
        </div>
      </div>

      <main className="contenedor">
        {ORDEN_GRUPOS.map((g) => {
          const delGrupo = filtrados.filter((p) => p.grupo === g);
          if (delGrupo.length === 0) return null;
          const info = GRUPOS[g];
          const conTarjeta = CON_TARJETA.includes(g);
          const todos = tema !== "todo" || abiertos[g] || !conTarjeta;
          const mostrados = todos ? delGrupo : delGrupo.slice(0, VISIBLES);
          const resto = delGrupo.length - mostrados.length;

          return (
            <section key={g} id={g} className="grupo" aria-labelledby={`t-${g}`}>
              <div className="grupo-cabecera">
                <span className={`etiqueta ${info.lado}`}>{info.etiqueta}</span>
                <h2 id={`t-${g}`}>{info.titulo}</h2>
                <span className="grupo-n">
                  {delGrupo.length} {delGrupo.length === 1 ? "punto" : "puntos"}
                </span>
              </div>
              <p className="grupo-explicacion">{info.explicacion}</p>

              {conTarjeta ? (
                <div className="rejilla">
                  {mostrados.map((p) => (
                    <Tarjeta key={p.slug} punto={p} />
                  ))}
                </div>
              ) : (
                <ul className="lista">
                  {mostrados.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/punto/${p.slug}`}>{p.titulo}</Link>
                      <p>{p.resumen}</p>
                    </li>
                  ))}
                </ul>
              )}

              {resto > 0 ? (
                <button type="button" className="boton" onClick={() => setAbiertos((a) => ({ ...a, [g]: true }))}>
                  Ver {resto === 1 ? "el punto restante" : `los ${resto} restantes`}
                </button>
              ) : null}
            </section>
          );
        })}
        {filtrados.length === 0 ? <p className="vacio">No hay puntos en este tema.</p> : null}
      </main>
    </>
  );
}
