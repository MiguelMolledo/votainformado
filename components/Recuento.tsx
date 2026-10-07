import Link from "next/link";
import { GRUPOS, type Grupo } from "@/data/tipos";

/** Orden visual de la barra: de lo más favorable a lo más desfavorable y, al final, lo no resuelto. */
const ORDEN_BARRA: Grupo[] = ["favor-sostiene", "favor-letra", "contra-firme", "contra-matices", "tribunales", "depende"];

export function Recuento({ cuenta, total }: { cuenta: Record<Grupo, number>; total: number }) {
  const descripcion = ORDEN_BARRA.map((g) => `${cuenta[g]} ${GRUPOS[g].etiqueta.toLowerCase()}, ${GRUPOS[g].titulo.toLowerCase()}`).join("; ");
  return (
    <div className="recuento">
      <div className="recuento-cabecera">
        <h2>Cómo queda el recuento</h2>
        <Link href="/como-contamos" style={{ fontSize: 14 }}>
          Cómo se clasifica cada punto
        </Link>
      </div>
      <div className="recuento-barra" role="img" aria-label={`Reparto de los ${total} puntos: ${descripcion}.`}>
        {ORDEN_BARRA.map((g) => (
          <div key={g} className={`seg-${g}`} style={{ flex: cuenta[g] }} />
        ))}
      </div>
      <ul className="recuento-leyenda">
        {ORDEN_BARRA.map((g) => (
          <li key={g}>
            <a href={`#${g}`}>
              <span className={`recuento-num lado-${GRUPOS[g].lado}`}>
                <i className={`seg-${g}`} aria-hidden="true" />
                {cuenta[g]}
              </span>
              <span className="recuento-nombre">
                {GRUPOS[g].etiqueta}, {GRUPOS[g].titulo.toLowerCase()}
              </span>
              <span className="recuento-desc">{GRUPOS[g].corto}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
