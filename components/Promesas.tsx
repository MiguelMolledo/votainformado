"use client";

import { useState } from "react";
import { ESTADOS, ORDEN_ESTADOS, type Estado, type Promesa } from "@/data/promesas";

export function Promesas({ promesas }: { promesas: Promesa[] }) {
  const [estado, setEstado] = useState<Estado | "todo">("todo");
  const cuenta = (e: Estado) => promesas.filter((p) => p.estado === e).length;
  const estados = ORDEN_ESTADOS.filter((e) => cuenta(e) > 0);
  const visibles = estados.filter((e) => estado === "todo" || estado === e);

  return (
    <>
      <div className="filtro">
        <div className="contenedor" role="group" aria-label="Filtrar por resultado">
          <span className="filtro-rotulo">Resultado</span>
          <button type="button" className="pastilla" aria-pressed={estado === "todo"} onClick={() => setEstado("todo")}>
            Todo<span className="n">{promesas.length}</span>
          </button>
          {estados.map((e) => (
            <button key={e} type="button" className="pastilla" aria-pressed={estado === e} onClick={() => setEstado(e)}>
              {ESTADOS[e].etiqueta}
              <span className="n">{cuenta(e)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="contenedor">
        {visibles.map((e) => (
          <section key={e} id={e} className="grupo" aria-labelledby={`e-${e}`}>
            <div className="grupo-cabecera">
              <h2 id={`e-${e}`}>{ESTADOS[e].etiqueta}</h2>
              <span className="grupo-n">
                {cuenta(e)} {cuenta(e) === 1 ? "promesa" : "promesas"}
              </span>
            </div>
            <p className="grupo-explicacion">{ESTADOS[e].explicacion}</p>
            <div className="promesas">
              {promesas
                .filter((p) => p.estado === e)
                .map((p) => (
                  <article key={p.slug} id={p.slug} className={`promesa estado-${p.estado}`}>
                    <div className="promesa-cabecera">
                      <span className="solidez">{p.tema}</span>
                      <h3>{p.titulo}</h3>
                    </div>
                    <div className="promesa-cuerpo">
                      <div className="promesa-dijo">
                        <p className="letra-rotulo">Lo que dijo</p>
                        <p>{p.dijo}</p>
                        <p className="promesa-cuando">{p.cuando}.</p>
                      </div>
                      <div className="promesa-hizo">
                        <p className="letra-rotulo">Lo que pasó</p>
                        <p>{p.hizo}</p>
                      </div>
                    </div>
                    {p.matiz ? (
                      <p className="promesa-matiz">
                        <strong>La letra pequeña.</strong> {p.matiz}
                      </p>
                    ) : null}
                    <p className="promesa-fuentes">
                      Fuentes:{" "}
                      {p.fuentes.map((f, i) => (
                        <span key={f.url}>
                          {i > 0 ? " · " : ""}
                          <a href={f.url} target="_blank" rel="noopener noreferrer">
                            {f.titulo}
                          </a>
                        </span>
                      ))}
                    </p>
                  </article>
                ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
