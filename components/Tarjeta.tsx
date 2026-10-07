import Link from "next/link";
import { TEMAS, type Punto } from "@/data/tipos";

export function Cifras({ punto }: { punto: Punto }) {
  if (punto.cifras.length === 0) return null;
  return (
    <div className="cifras">
      {punto.cifras.map((c) => (
        <div key={c.valor + c.texto}>
          <div className="cifra-valor">
            {c.valor}
            {c.nota ? (
              <sup>
                <span className="oculto-visual">nota </span>
                {c.nota}
              </sup>
            ) : null}
          </div>
          <div className="cifra-texto">{c.texto}</div>
        </div>
      ))}
    </div>
  );
}

export function Notas({ punto }: { punto: Punto }) {
  if (punto.notas.length === 0) return null;
  return (
    <dl className="notas">
      {punto.notas.map((n) => (
        <div key={n.marca + n.texto} style={{ display: "contents" }}>
          <dt>{n.marca}</dt>
          <dd>{n.texto}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Tarjeta({ punto }: { punto: Punto }) {
  return (
    <article className="tarjeta">
      <div className="tarjeta-dato">
        <div className="solidez">
          {TEMAS[punto.tema]} · {punto.solidez}
        </div>
        <h3>
          <Link href={`/punto/${punto.slug}`}>{punto.titulo}</Link>
        </h3>
        <Cifras punto={punto} />
      </div>
      <div className="letra">
        <p className="letra-rotulo">La letra pequeña</p>
        <Notas punto={punto} />
        <Link href={`/punto/${punto.slug}`} className="enlace-ficha">
          Cómo pasó y fuentes
        </Link>
      </div>
    </article>
  );
}
