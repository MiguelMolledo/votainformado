"use client";

import { useMemo, useState } from "react";
import { AMBITOS, TIPOS, type Ambito, type CambioFiscal } from "@/data/impuestos";

type Sentido = "todo" | "subidas" | "bajadas";

export function Cronologia({ cambios }: { cambios: CambioFiscal[] }) {
  const [sentido, setSentido] = useState<Sentido>("todo");
  const [ambito, setAmbito] = useState<Ambito | "todo">("todo");

  const cuenta = useMemo(() => {
    const subidas = cambios.filter((c) => TIPOS[c.tipo].grupo === "subidas").length;
    return { subidas, bajadas: cambios.length - subidas };
  }, [cambios]);

  const ambitos = useMemo(() => (Object.keys(AMBITOS) as Ambito[]).filter((a) => cambios.some((c) => c.ambito === a)), [cambios]);

  const visibles = cambios.filter(
    (c) => (sentido === "todo" || TIPOS[c.tipo].grupo === sentido) && (ambito === "todo" || c.ambito === ambito),
  );
  const anios = [...new Set(visibles.map((c) => c.fecha.slice(0, 4)))];

  return (
    <>
      <div className="filtro">
        <div className="contenedor" role="group" aria-label="Filtrar la cronología">
          <span className="filtro-rotulo">Ver</span>
          <button type="button" className="pastilla" aria-pressed={sentido === "todo"} onClick={() => setSentido("todo")}>
            Todo<span className="n">{cambios.length}</span>
          </button>
          <button type="button" className="pastilla" aria-pressed={sentido === "subidas"} onClick={() => setSentido("subidas")}>
            Subidas<span className="n">{cuenta.subidas}</span>
          </button>
          <button type="button" className="pastilla" aria-pressed={sentido === "bajadas"} onClick={() => setSentido("bajadas")}>
            Bajadas<span className="n">{cuenta.bajadas}</span>
          </button>
          <span className="filtro-rotulo" style={{ marginLeft: 12 }}>
            Ámbito
          </span>
          <button type="button" className="pastilla" aria-pressed={ambito === "todo"} onClick={() => setAmbito("todo")}>
            Todos
          </button>
          {ambitos.map((a) => (
            <button key={a} type="button" className="pastilla" aria-pressed={ambito === a} onClick={() => setAmbito(a)}>
              {AMBITOS[a]}
            </button>
          ))}
        </div>
      </div>

      <div className="contenedor cronologia">
        {anios.map((anio) => (
          <section key={anio} className="anio" aria-labelledby={`a-${anio}`}>
            <h2 id={`a-${anio}`} className="anio-numero">
              {anio}
            </h2>
            <ol className="anio-lista">
              {visibles
                .filter((c) => c.fecha.startsWith(anio))
                .map((c) => (
                  <li key={c.fecha + c.titulo} className={`cambio ${TIPOS[c.tipo].grupo}`}>
                    <div className="cambio-meta">
                      <span className={`marca-tipo ${c.tipo}`}>{TIPOS[c.tipo].etiqueta}</span>
                      <span className="solidez">
                        {c.mes} · {AMBITOS[c.ambito]}
                      </span>
                    </div>
                    <h3>{c.titulo}</h3>
                    <p>{c.detalle}</p>
                    <p className="cambio-quien">
                      <strong>A quién afecta.</strong> {c.quien}
                    </p>
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="cambio-norma">
                      {c.norma}
                    </a>
                  </li>
                ))}
            </ol>
          </section>
        ))}
        {visibles.length === 0 ? <p className="vacio">No hay cambios con este filtro.</p> : null}
      </div>
    </>
  );
}
