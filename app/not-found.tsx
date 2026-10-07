import Link from "next/link";

export default function NoEncontrada() {
  return (
    <main className="contenedor prosa">
      <h1>Esta página no existe</h1>
      <p>
        Puede que el enlace esté mal escrito o que el punto haya cambiado de nombre. <Link href="/">Volver al balance</Link>.
      </p>
    </main>
  );
}
