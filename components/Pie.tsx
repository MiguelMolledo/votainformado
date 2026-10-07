import Link from "next/link";
import { ACTUALIZADO } from "@/data/tipos";

export function Pie() {
  return (
    <footer className="pie">
      <div className="contenedor">
        <div>
          <div className="marca-nombre">Vota informado</div>
          <p>Proyecto independiente y sin ánimo de lucro. No es una web oficial ni pertenece a ningún partido.</p>
        </div>
        <div>
          <h2>Cómo contamos</h2>
          <p>
            Un punto es «a favor» o «en contra» por lo que dicen el dato y los tribunales. Todos llevan letra pequeña, también los
            negativos. «Ilegal» solo se usa si lo dijo una sentencia. <Link href="/como-contamos">Leer el método</Link>.
          </p>
        </div>
        <div>
          <h2>Fuentes y correcciones</h2>
          <p>
            INE, BOE, Banco de España, Eurostat, AIReF, sentencias y prensa de distinto signo. Cada punto enlaza las suyas.
            Actualizado el {ACTUALIZADO}.
          </p>
        </div>
      </div>
    </footer>
  );
}
