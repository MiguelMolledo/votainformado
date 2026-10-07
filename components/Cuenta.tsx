"use client";

import { useEffect, useState } from "react";
import { FECHA_ELECCIONES } from "@/data/tipos";

function diasHasta(fecha: string): number {
  const hoy = new Date();
  const [a, m, d] = fecha.split("-").map(Number);
  const inicioHoy = Date.UTC(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
  return Math.round((Date.UTC(a, m - 1, d) - inicioHoy) / 86_400_000);
}

export function Cuenta() {
  const [dias, setDias] = useState<number | null>(null);

  useEffect(() => {
    setDias(diasHasta(FECHA_ELECCIONES));
  }, []);

  let texto = "29 de noviembre";
  if (dias !== null) {
    if (dias > 1) texto = `Faltan ${dias} días`;
    else if (dias === 1) texto = "Falta 1 día";
    else if (dias === 0) texto = "Hoy se vota";
  }

  return <span className="cuenta">{texto}</span>;
}
