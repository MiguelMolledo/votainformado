import type { Metadata } from "next";
import Link from "next/link";
import { Promesas } from "@/components/Promesas";
import { ORDEN_ESTADOS, PROMESAS } from "@/data/promesas";

export const metadata: Metadata = {
  title: "Lo que dijo y lo que hizo",
  description:
    "Promesas y compromisos de Pedro Sánchez y del PSOE entre 2015 y 2026, con la cita, la fecha y lo que ocurrió después.",
  openGraph: {
    title: "Lo que dijo y lo que hizo",
    description: "Promesas de Pedro Sánchez y del PSOE, con la cita, la fecha y lo que ocurrió después.",
    url: "/promesas",
    locale: "es_ES",
    siteName: "Vota informado",
  },
};

export default function PaginaPromesas() {
  const ordenadas = ORDEN_ESTADOS.flatMap((e) => PROMESAS.filter((p) => p.estado === e));
  const n = (e: string) => PROMESAS.filter((p) => p.estado === e).length;

  return (
    <main>
      <section className="contenedor portada">
        <div className="antetitulo">Promesas del PSOE · 2015–2026</div>
        <h1>Lo que dijo y lo que hizo</h1>
        <p className="bajada">
          {PROMESAS.length} promesas y compromisos de Pedro Sánchez y de su partido, cada uno con la cita, la fecha y lo que ocurrió
          después: {n("contrario")} en las que hizo lo contrario, {n("incumplida")} que no cumplió, {n("bloqueada")} que no salió
          adelante, {n("disputada")} en disputa y {n("cumplida")} cumplidas.
        </p>

        <div className="recuento">
          <div className="cifras tres">
            <div>
              <div className="cifra-valor">60 %</div>
              <div className="cifra-texto">
                de las promesas verificables del pacto de coalición de 2019 estaban cumplidas en junio de 2023, según Newtral.
              </div>
            </div>
            <div>
              <div className="cifra-valor">76 %</div>
              <div className="cifra-texto">
                de las medidas de los pactos de investidura de 2023 seguían pendientes en julio de 2026, según Newtral.
              </div>
            </div>
            <div>
              <div className="cifra-valor">0</div>
              <div className="cifra-texto">Presupuestos presentados al Congreso entre 2023 y 2026, pese a anunciarlos varias veces.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="contenedor avisos">
        <div className="caja">
          <h2 className="rotulo">Cómo leer esta página</h2>
          <p>
            Cada entrada recoge lo que se dijo o se firmó y lo que pasó después. No entra en si hubo intención de engañar: eso no
            se puede comprobar. Cuando el cambio tuvo una explicación, o cuando la promesa se intentó y no salió, se dice.
          </p>
        </div>
        <div className="caja">
          <h2 className="rotulo">Por qué solo el PSOE</h2>
          <p>
            Es el único partido que ha gobernado España en este periodo, así que es el único cuyas promesas se pueden contrastar
            con hechos. Lo que proponen ahora los demás está en <Link href="/partidos">Partidos</Link>. La lista no es completa: el
            Gobierno publica su propio balance en el informe «Cumpliendo».
          </p>
        </div>
      </section>

      <Promesas promesas={ordenadas} />

      <section className="contenedor prosa" style={{ paddingTop: 48, paddingBottom: 0 }}>
        <h2>De dónde salen los datos</h2>
        <p>
          Las citas proceden de las hemerotecas de Newtral y Maldita.es, de transcripciones de La Moncloa y de prensa de distinto
          signo. Los porcentajes de cumplimiento son del proyecto Pactocheck de Newtral, que solo cuenta las promesas que se pueden
          medir. El balance oficial del Gobierno está en{" "}
          <a href="https://www.lamoncloa.gob.es/paginas/cumpliendo/index.aspx" target="_blank" rel="noopener noreferrer">
            «Cumpliendo»
          </a>
          .
        </p>
        <p>
          <a href="https://www.newtral.es/compromisos-gobierno-coalicion-pactocheck/20230603/" target="_blank" rel="noopener noreferrer">
            Newtral: 60 % del acuerdo de coalición
          </a>{" "}
          ·{" "}
          <a href="https://www.newtral.es/gobierno-medidas-pactos-investidura-sanchez/20260723/" target="_blank" rel="noopener noreferrer">
            Newtral: 76 % de los pactos de investidura, pendiente
          </a>
        </p>
      </section>
    </main>
  );
}
