"use client";

import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#021C2C] text-white border-b border-white/10 shadow-sm scroll-smooth">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center">
          <Image
            src="/imagens/logo.png"
            alt="Logo Dr. Pedro Pajolli"
            width={100}
            height={100}
            className="object-contain"
          />
        </a>

        {/* Navegação */}
        <nav className="hidden md:flex gap-10 text-base font-[var(--font-body)] font-light tracking-wide">
          <a href="#inicio" className="hover:underline underline-offset-4">Início</a>
          <a href="#especialidades" className="hover:underline underline-offset-4">Especialidades</a>
          <a href="#sobre" className="hover:underline underline-offset-4">Sobre</a>
          <a href="#tratamentos" className="hover:underline underline-offset-4">Tratamentos</a>
          <a href="#contato" className="hover:underline underline-offset-4">Contato</a>
          <a href="#duvidas" className="hover:underline underline-offset-4">Dúvidas Frequentes</a>
          
        </nav>
      </div>
    </header>
  );
}
