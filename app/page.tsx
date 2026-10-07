import { Balance } from "@/components/Balance";
import { Recuento } from "@/components/Recuento";
import { PUNTOS_ORDENADOS, recuento } from "@/data/puntos";

export default function Portada() {
  const total = PUNTOS_ORDENADOS.length;
  return (
    <>
      <section className="contenedor portada">
        <div className="antetitulo">Elecciones generales · 29 de noviembre de 2026</div>
        <h1>Ocho años de Gobierno, punto por punto</h1>
        <p className="bajada">
          {total} hechos entre junio de 2018 y octubre de 2026. Cada uno con su dato, su letra pequeña y su fuente, para que el
          titular no llegue solo.
        </p>
        <Recuento cuenta={recuento()} total={total} />
      </section>
      <Balance puntos={PUNTOS_ORDENADOS} />
    </>
  );
}
