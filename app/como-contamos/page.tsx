import type { Metadata } from "next";
import Link from "next/link";
import { recuento, PUNTOS_ORDENADOS } from "@/data/puntos";
import { ACTUALIZADO, GRUPOS, ORDEN_GRUPOS } from "@/data/tipos";

export const metadata: Metadata = {
  title: "Cómo contamos",
  description: "El método de Vota informado: qué periodo cubre, cómo se clasifica cada punto y de dónde salen los datos.",
};

export default function ComoContamos() {
  const cuenta = recuento();
  return (
    <main className="contenedor prosa">
      <div className="antetitulo">Método</div>
      <h1>Cómo contamos</h1>
      <p>
        Esta web repasa lo que hicieron los gobiernos presididos por Pedro Sánchez entre el 1 de junio de 2018 y el 5 de octubre
        de 2026, día en que se convocaron las elecciones del 29 de noviembre. No pide el voto para nadie. Reúne hechos y datos
        para que cada cual los valore.
      </p>

      <h2>Qué periodo cubre</h2>
      <p>
        Son tres gobiernos. El primero, del PSOE en solitario, llegó con la moción de censura de junio de 2018. El segundo fue una
        coalición del PSOE con Unidas Podemos, de enero de 2020 a noviembre de 2023. El tercero es una coalición del PSOE con
        Sumar. Podemos no forma parte del Gobierno desde 2023.
      </p>

      <h2>Cómo se clasifica cada punto</h2>
      <p>
        Hay {PUNTOS_ORDENADOS.length} puntos repartidos en seis grupos. El grupo no lo decide la simpatía, sino lo que dicen el
        dato y los tribunales.
      </p>
      <div className="tabla-caja">
        <table>
          <thead>
            <tr>
              <th>Grupo</th>
              <th>Qué entra</th>
              <th>Puntos</th>
            </tr>
          </thead>
          <tbody>
            {ORDEN_GRUPOS.map((g) => (
              <tr key={g}>
                <td>
                  <Link href={`/#${g}`}>
                    {GRUPOS[g].etiqueta}, {GRUPOS[g].titulo.toLowerCase()}
                  </Link>
                </td>
                <td>{GRUPOS[g].explicacion}</td>
                <td className="mono">{cuenta[g]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Las reglas</h2>
      <p>
        <strong>Cada cifra tiene fuente.</strong> Se usa el organismo que produce el dato: INE, BOE, Banco de España, Eurostat,
        AIReF, Seguridad Social o el Poder Judicial. Cuando el enlace lleva a un medio, se indica qué organismo dio la cifra. Lo
        que no se ha podido comprobar no se publica.
      </p>
      <p>
        <strong>«Ilegal» solo si lo dijo un tribunal.</strong> Una investigación abierta no es una condena. Las causas sin
        sentencia firme van en un grupo aparte y bajo presunción de inocencia.
      </p>
      <p>
        <strong>La letra pequeña va en los dos lados.</strong> Un dato favorable se acompaña del contexto que lo rebaja, y un
        hecho desfavorable, del que lo matiza. Si un tribunal sitúa la responsabilidad en otra administración, se dice.
      </p>
      <p>
        <strong>Las opiniones van aparte y con dueño.</strong> En cada ficha, «Quien lo defiende» y «Quien lo critica» resumen los
        argumentos de cada parte. No son la posición de esta web.
      </p>
      <p>
        <strong>El recuento no es una nota.</strong> Hay más puntos en contra que a favor porque es lo que sale de aplicar estas
        reglas, pero los puntos no pesan lo mismo y el número depende de cómo se divide cada tema. Sirve para orientarse, no para
        sumar.
      </p>

      <h2>Lo que no cubre</h2>
      <p>
        Quedan fuera las competencias exclusivas de comunidades y ayuntamientos, salvo cuando ayudan a entender un punto. Tampoco
        se valoran los programas electorales ni lo que haría cada partido.
      </p>

      <h2>Actualización</h2>
      <p>
        Los datos están revisados a {ACTUALIZADO}. Las causas judiciales abiertas pueden cambiar. Cada ficha enlaza sus fuentes
        para que cualquiera pueda comprobarlas.
      </p>
    </main>
  );
}
