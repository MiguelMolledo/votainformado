import type { Metadata } from "next";
import { IBM_Plex_Mono, Public_Sans, Source_Serif_4 } from "next/font/google";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import "./globals.css";

const serif = Source_Serif_4({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--fuente-serif", display: "swap" });
const sans = Public_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--fuente-sans", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--fuente-mono", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Vota informado", template: "%s · Vota informado" },
  description:
    "Ocho años de Gobierno, punto por punto: cada hecho con su dato, su letra pequeña y su fuente, antes de las elecciones del 29 de noviembre de 2026.",
  openGraph: {
    title: "Vota informado",
    description: "Ocho años de Gobierno, punto por punto. Cada hecho con su dato, su letra pequeña y su fuente.",
    locale: "es_ES",
    type: "website",
    siteName: "Vota informado",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <Cabecera />
        {children}
        <Pie />
      </body>
    </html>
  );
}
