import type { Metadata } from "next";
import Image from "next/image";
import { PARTIDOS, PROPUESTAS_A } from "@/data/partidos";

export const metadata: Metadata = {
  title: "Qué propone cada partido",
  description: "Diez propuestas anunciadas por PP, PSOE y Vox para las elecciones del 29 de noviembre de 2026, con su fuente.",
  openGraph: {
    title: "Qué propone cada partido",
    description: "Diez propuestas anunciadas por PP, PSOE y Vox para el 29 de noviembre de 2026, con su fuente.",
    url: "/partidos",
    locale: "es_ES",
    siteName: "Vota informado",
  },
};

export default function Partidos() {
  return (
    <main>
      <section className="contenedor portada">
        <div className="antetitulo">Elecciones generales · 29 de noviembre de 2026</div>
        <h1>Qué propone cada partido</h1>
        <p className="bajada">
          Diez propuestas de cada uno de los tres partidos con más escaños en el Congreso. Se recogen tal como las han anunciado,
          sin valorarlas.
        </p>
      </section>

      <section className="contenedor avisos">
        <div className="caja">
          <h2 className="rotulo">Todavía no hay programas oficiales</h2>
          <p>
            A {PROPUESTAS_A} ningún partido ha publicado su programa para estas elecciones. Lo que sigue son propuestas ya
            anunciadas, y cada una indica de dónde sale y de cuándo es. Esta página se actualizará cuando se publiquen.
          </p>
        </div>
        <div className="caja">
          <h2 className="rotulo">Por qué estos tres y en este orden</h2>
          <p>
            Son los tres partidos con más diputados en el Congreso elegido en 2023, ordenados por número de escaños. La selección
            de las diez propuestas es de esta web: se han elegido las más concretas y las que afectan a más gente.
          </p>
        </div>
      </section>

      <section className="contenedor partidos">
        {PARTIDOS.map((p) => (
          <article key={p.id} className="partido" style={{ "--partido": p.color, "--sobre": p.sobreColor } as React.CSSProperties}>
            <div className="partido-banda">
              <span>{p.siglas}</span>
              <span className="mono">{p.escanos} escaños en 2023</span>
            </div>
            <div className="partido-cabecera">
              <Image src={p.foto.src} alt={p.foto.alt} width={560} height={700} sizes="(max-width: 640px) 120px, 132px" className="partido-foto" />
              <div>
                <h2>{p.nombre}</h2>
                <p className="partido-candidato">Candidato: {p.candidato}</p>
              </div>
            </div>
            <ol className="propuestas">
              {p.propuestas.map((pr, i) => (
                <li key={pr.texto}>
                  <span className="propuesta-n" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <span className="solidez">{pr.tema}</span>
                    <p>{pr.texto}</p>
                    <p className="propuesta-origen">
                      {pr.origen}.{" "}
                      <a href={pr.fuente.url} target="_blank" rel="noopener noreferrer">
                        Fuente: {pr.fuente.titulo}
                      </a>
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="partido-credito">
              Foto:{" "}
              <a href={p.foto.url} target="_blank" rel="noopener noreferrer">
                {p.foto.credito}
              </a>
              , {p.foto.licencia}, vía Wikimedia Commons.
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
