import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cifras, Notas } from "@/components/Tarjeta";
import { PUNTOS_ORDENADOS, puntoPorSlug } from "@/data/puntos";
import { GRUPOS, TEMAS } from "@/data/tipos";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return PUNTOS_ORDENADOS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const punto = puntoPorSlug(slug);
  if (!punto) return {};
  return {
    title: punto.titulo,
    description: punto.resumen,
    openGraph: {
      title: punto.titulo,
      description: punto.resumen,
      type: "article",
      locale: "es_ES",
      siteName: "Vota informado",
      url: `/punto/${punto.slug}`,
    },
  };
}

export default async function Ficha({ params }: Props) {
  const { slug } = await params;
  const punto = puntoPorSlug(slug);
  if (!punto) notFound();

  const grupo = GRUPOS[punto.grupo];
  const i = PUNTOS_ORDENADOS.findIndex((p) => p.slug === punto.slug);
  const anterior = PUNTOS_ORDENADOS[i - 1];
  const siguiente = PUNTOS_ORDENADOS[i + 1];
  const tieneDato = punto.cifras.length > 0 || punto.notas.length > 0;

  return (
    <main className="contenedor ficha">
      <Link href={`/#${punto.grupo}`}>Volver al balance</Link>

      <div className="ficha-etiquetas">
        <span className={`etiqueta ${grupo.lado}`}>{grupo.etiqueta}</span>
        <span className="etiqueta hueca">{grupo.titulo}</span>
        <span className="solidez">
          {TEMAS[punto.tema]} · {punto.solidez}
        </span>
      </div>
      <h1>{punto.titulo}</h1>
      <p className="entradilla">{punto.entradilla}</p>

      {tieneDato ? (
        <section className="dato-y-letra">
          <div className="dato-ficha">
            <h2 className="rotulo">El dato</h2>
            <Cifras punto={punto} />
          </div>
          {punto.notas.length > 0 ? (
            <div className="letra-ficha">
              <h2 className="rotulo">La letra pequeña</h2>
              <Notas punto={punto} />
            </div>
          ) : null}
        </section>
      ) : null}

      <section className="seccion">
        <h2>Cómo pasó</h2>
        {punto.comoPaso.map((parrafo) => (
          <p key={parrafo}>{parrafo}</p>
        ))}
      </section>

      <section className="seccion">
        <h2>Las dos lecturas</h2>
        <div className="lecturas">
          <div className="lectura defensa">
            <h3>Quien lo defiende</h3>
            <p>{punto.defensa}</p>
          </div>
          <div className="lectura critica">
            <h3>Quien lo critica</h3>
            <p>{punto.critica}</p>
          </div>
        </div>
      </section>

      {punto.legal ? (
        <section className="seccion">
          <div className="caja">
            <h2 className="rotulo">Situación judicial</h2>
            <p>{punto.legal}</p>
          </div>
        </section>
      ) : null}

      {punto.pendiente ? (
        <section className="seccion">
          <div className="caja">
            <h2 className="rotulo">Lo que queda pendiente</h2>
            <p>{punto.pendiente}</p>
          </div>
        </section>
      ) : null}

      {punto.enlace ? (
        <p className="seccion">
          <Link href={punto.enlace.href} className="boton">
            {punto.enlace.texto}
          </Link>
        </p>
      ) : null}

      <section className="fuentes">
        <h2 className="rotulo">Fuentes</h2>
        <ul>
          {punto.fuentes.map((f) => (
            <li key={f.url}>
              <a href={f.url} target="_blank" rel="noopener noreferrer">
                {f.titulo}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <nav className="paginacion" aria-label="Otros puntos">
        {anterior ? (
          <Link href={`/punto/${anterior.slug}`} className="boton">
            Anterior: {anterior.titulo}
          </Link>
        ) : (
          <span />
        )}
        {siguiente ? (
          <Link href={`/punto/${siguiente.slug}`} className="boton lleno">
            Siguiente: {siguiente.titulo}
          </Link>
        ) : null}
      </nav>
    </main>
  );
}
