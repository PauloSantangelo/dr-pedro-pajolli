import type { Metadata } from "next";
import { Poppins, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200"],
  display: "swap",
  variable: "--font-body",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "Dr. Pedro Pajolli | Cirurgia Robótica e Urologia Estética",
  description:
    "Especialista em cirurgia robótica e preenchimento peniano. Atendimento com tecnologia avançada e segurança.",
  keywords:
    "Dr Pedro Pajolli, urologista, cirurgia robótica, preenchimento peniano, saúde masculina, urologista em Bauru, saúde masculina em Bauru, cirurgia robótica Bauru, preenchimento peniano em Bauru, médico urologista Bauru, tratamento íntimo masculino Bauru, especialista em saúde do homem Bauru",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${dmSerif.variable}`}>
      <body>
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
