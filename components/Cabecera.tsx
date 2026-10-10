import Link from "next/link";
import { Cuenta } from "./Cuenta";

export function Cabecera() {
  return (
    <>
      <div className="aviso">Web independiente. No pertenece a ninguna administración, junta electoral ni partido político.</div>
      <header className="cabecera">
        <div className="contenedor">
          <Link href="/" className="marca">
            <span className="marca-nombre">Vota informado</span>
            <span className="marca-lema">Balance del Gobierno · 2018–2026</span>
          </Link>
          <nav className="nav" aria-label="Principal">
            <Link href="/">Balance</Link>
            <Link href="/impuestos">Impuestos</Link>
            <Link href="/partidos">Partidos</Link>
            <Link href="/#tribunales">Tribunales</Link>
            <Link href="/como-contamos">Cómo contamos</Link>
            <Cuenta />
          </nav>
        </div>
      </header>
    </>
  );
}
