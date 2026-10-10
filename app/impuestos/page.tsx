import type { Metadata } from "next";
import Link from "next/link";
import { Cronologia } from "@/components/Cronologia";
import { CAMBIOS_ORDENADOS, TIPOS } from "@/data/impuestos";

export const metadata: Metadata = {
  title: "Impuestos: qué ha subido y qué ha bajado",
  description:
    "Cronología de los cambios de impuestos y cotizaciones entre 2018 y 2026, con el tipo, a quién afecta y la norma del BOE que lo aprobó.",
  openGraph: {
    title: "Impuestos: qué ha subido y qué ha bajado",
    description: "Cronología de los cambios de impuestos y cotizaciones entre 2018 y 2026, con la norma del BOE de cada uno.",
    url: "/impuestos",
    locale: "es_ES",
    siteName: "Vota informado",
  },
};

export default function Impuestos() {
  const subidas = CAMBIOS_ORDENADOS.filter((c) => TIPOS[c.tipo].grupo === "subidas").length;
  const bajadas = CAMBIOS_ORDENADOS.length - subidas;

  return (
    <main>
      <section className="contenedor portada">
        <div className="antetitulo">Impuestos y cotizaciones · 2018–2026</div>
        <h1>Qué ha subido y qué ha bajado</h1>
        <p className="bajada">
          {CAMBIOS_ORDENADOS.length} cambios de ámbito estatal, con su tipo, a quién afectan y la norma que los aprobó: {subidas}{" "}
          subidas o impuestos nuevos y {bajadas} bajadas.
        </p>

        <div className="recuento">
          <div className="cifras tres">
            <div>
              <div className="cifra-valor">+56 %</div>
              <div className="cifra-texto">
                de recaudación tributaria: de 208.685 millones en 2018 a 325.356 en 2025. Los precios subieron en torno a un 25 %.
              </div>
            </div>
            <div>
              <div className="cifra-valor">41,4 %</div>
              <div className="cifra-texto">
                del coste de un sueldo medio se va en IRPF y cotizaciones. La media de la OCDE es el 35,1 %.
              </div>
            </div>
            <div>
              <div className="cifra-valor">12,8 → 14,7 %</div>
              <div className="cifra-texto">
                subió el tipo medio efectivo del IRPF entre 2019 y 2023. La mitad, por no ajustarlo a la inflación.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contenedor avisos">
        <div className="caja">
          <h2 className="rotulo">La subida que no está en el BOE</h2>
          <p>
            La que paga más gente no aparece en esta cronología porque no se aprobó: es no actualizar los tramos del IRPF cuando
            suben los precios. <Link href="/punto/irpf-sin-ajustar-a-la-inflacion">Ver el dato del Banco de España</Link>.
          </p>
        </div>
        <div className="caja">
          <h2 className="rotulo">Cuántas subidas son</h2>
          <p>
            No hay un recuento oficial. El Instituto Juan de Mariana, un centro de estudios liberal, cuenta 141, pero 46 son
            tramos del IRPF sin actualizar y 32 son revisiones del catastro. Aquí solo figuran cambios comprobados en la norma, de
            modo que la lista no es completa.
          </p>
        </div>
      </section>

      <Cronologia cambios={CAMBIOS_ORDENADOS} />

      <section className="contenedor prosa" style={{ paddingTop: 48, paddingBottom: 0 }}>
        <h2>De dónde salen los datos</h2>
        <p>
          Los tipos, umbrales y fechas están leídos en la norma publicada en el Boletín Oficial del Estado, enlazada en cada
          entrada. Cuando la fuente es otra, se indica. La recaudación es de los informes anuales de la Agencia Tributaria, la
          carga sobre el salario es del informe <i>Taxing Wages</i> de la OCDE y el dato del IRPF es de un estudio del Banco de
          España. No se incluyen tributos autonómicos ni municipales.
        </p>
        <p>
          <Link href="/punto/impuestos-y-cotizaciones">Ver las dos lecturas sobre la subida de impuestos</Link>.
        </p>
      </section>
    </main>
  );
}
