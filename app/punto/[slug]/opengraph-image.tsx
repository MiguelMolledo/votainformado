import { ImageResponse } from "next/og";
import { PUNTOS_ORDENADOS, puntoPorSlug } from "@/data/puntos";
import { GRUPOS } from "@/data/tipos";
import { COLOR, TAMANO, fuentes, limpiar, recortar } from "@/lib/og";

export const alt = "Vota informado";
export const size = TAMANO;
export const contentType = "image/png";

export function generateStaticParams() {
  return PUNTOS_ORDENADOS.map((p) => ({ slug: p.slug }));
}

export default async function Imagen({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const punto = puntoPorSlug(slug);
  if (!punto) return new Response("No encontrado", { status: 404 });

  const grupo = GRUPOS[punto.grupo];
  const color = grupo.lado === "favor" ? COLOR.favor : grupo.lado === "contra" ? COLOR.contra : COLOR.tinta2;
  const cifras = punto.cifras.slice(0, 2);
  const nota = punto.notas[0];
  const titulo = limpiar(punto.titulo);
  const cuerpoTitulo = titulo.length > 40 ? 58 : 70;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: COLOR.blanco, color: COLOR.tinta, fontFamily: "Sans" }}>
        <div style={{ height: 14, background: color, display: "flex" }} />
        <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "36px 72px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ background: color, color: COLOR.blanco, fontSize: 20, fontWeight: 600, letterSpacing: 1.5, padding: "6px 14px", borderRadius: 4, marginRight: 14 }}>
                {grupo.etiqueta.toUpperCase()}
              </div>
              <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: 1.5 }}>{grupo.titulo.toUpperCase()}</div>
            </div>
            <div style={{ fontFamily: "Serif", fontSize: 30, letterSpacing: -0.5 }}>Vota informado</div>
          </div>

          <div style={{ fontFamily: "Serif", fontSize: cuerpoTitulo, lineHeight: 1.06, letterSpacing: -1.5, marginTop: 30, maxWidth: 1000 }}>{titulo}</div>

          {cifras.length > 0 ? (
            <div style={{ display: "flex", marginTop: 30 }}>
              {cifras.map((c) => (
                <div key={c.valor + c.texto} style={{ display: "flex", flexDirection: "column", width: cifras.length > 1 ? 500 : 900, marginRight: 28 }}>
                  <div style={{ fontFamily: "Mono", fontSize: 72, lineHeight: 1, letterSpacing: -2 }}>{limpiar(c.valor)}</div>
                  <div style={{ fontSize: 23, color: COLOR.tinta2, marginTop: 10, lineHeight: 1.3 }}>{recortar(c.texto, cifras.length > 1 ? 70 : 120)}</div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ fontSize: 38, color: COLOR.tinta2, marginTop: 30, lineHeight: 1.35, maxWidth: 1000 }}>{recortar(punto.resumen, 170)}</div>
          )}
        </div>

        {nota ? (
          <div style={{ display: "flex", flexDirection: "column", background: COLOR.papel, borderTop: `2px dashed ${COLOR.gris}`, padding: "20px 72px 26px" }}>
            <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: 1.5 }}>LA LETRA PEQUEÑA</div>
            <div style={{ fontSize: 25, lineHeight: 1.3, marginTop: 6 }}>{recortar(nota.texto, 150)}</div>
          </div>
        ) : (
          <div style={{ display: "flex", background: COLOR.papel, borderTop: `2px solid ${COLOR.regla}`, padding: "22px 72px 26px", fontSize: 24, color: COLOR.tinta2 }}>
            Los hechos, las dos lecturas y las fuentes, en la ficha.
          </div>
        )}
      </div>
    ),
    { ...TAMANO, fonts: await fuentes() },
  );
}
