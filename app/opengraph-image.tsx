import { ImageResponse } from "next/og";
import { recuento, PUNTOS_ORDENADOS } from "@/data/puntos";
import { COLOR, TAMANO, fuentes } from "@/lib/og";

export const alt = "Vota informado. Ocho años de Gobierno, punto por punto.";
export const size = TAMANO;
export const contentType = "image/png";

export default async function Imagen() {
  const c = recuento();
  const favor = c["favor-letra"] + c["favor-sostiene"];
  const contra = c["contra-firme"] + c["contra-matices"];
  const barra = [
    { n: c["favor-sostiene"], color: COLOR.favor },
    { n: c["favor-letra"], color: COLOR.favorClaro },
    { n: c["contra-firme"], color: COLOR.contra },
    { n: c["contra-matices"], color: COLOR.contraClaro },
    { n: c.tribunales, color: COLOR.gris },
    { n: c.depende, color: COLOR.grisClaro },
  ];
  const leyenda = [
    { n: favor, texto: "a favor", color: COLOR.favor },
    { n: contra, texto: "en contra", color: COLOR.contra },
    { n: c.tribunales, texto: "en los tribunales", color: COLOR.gris },
    { n: c.depende, texto: "a debate", color: COLOR.grisClaro },
  ];

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: COLOR.blanco, color: COLOR.tinta, fontFamily: "Sans" }}>
        <div style={{ height: 14, background: COLOR.tinta, display: "flex" }} />
        <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "44px 72px 52px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontFamily: "Serif", fontSize: 36, letterSpacing: -0.5 }}>Vota informado</div>
            <div style={{ fontFamily: "Mono", fontSize: 22, letterSpacing: 1.5, color: COLOR.tinta2 }}>ELECCIONES · 29 NOV 2026</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontFamily: "Serif", fontSize: 88, lineHeight: 1.04, letterSpacing: -2.5, marginTop: 52 }}>
            <div>Ocho años de Gobierno,</div>
            <div>punto por punto</div>
          </div>
          <div style={{ fontSize: 30, color: COLOR.tinta2, marginTop: 22 }}>
            {`${PUNTOS_ORDENADOS.length} hechos, cada uno con su dato, su letra pequeña y su fuente.`}
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: "auto" }}>
            <div style={{ display: "flex", height: 30 }}>
              {barra.map((b, i) => (
                <div key={i} style={{ flex: b.n, background: b.color, marginRight: i < barra.length - 1 ? 3 : 0, display: "flex" }} />
              ))}
            </div>
            <div style={{ display: "flex", marginTop: 20 }}>
              {leyenda.map((l) => (
                <div key={l.texto} style={{ display: "flex", alignItems: "center", marginRight: 44 }}>
                  <div style={{ width: 18, height: 18, background: l.color, marginRight: 12, display: "flex" }} />
                  <div style={{ fontFamily: "Mono", fontSize: 30, marginRight: 10 }}>{String(l.n)}</div>
                  <div style={{ fontSize: 26, fontWeight: 600 }}>{l.texto}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...TAMANO, fonts: await fuentes() },
  );
}
