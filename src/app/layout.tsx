import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Pedro Pajolli | Cirurgia Robótica e Urologia Estética",
  description: "Especialista em cirurgia robótica e preenchimento peniano. Atendimento com tecnologia avançada e segurança.",
  keywords: "Dr Pedro Pajolli, urologista, cirurgia robótica, preenchimento peniano, saúde masculina",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
