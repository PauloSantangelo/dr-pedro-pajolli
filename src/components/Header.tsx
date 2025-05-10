"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => setMenuAberto(!menuAberto);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#021C2C] text-white border-b border-white/10 shadow-sm">
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

        {/* Botão hamburguer no mobile */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          {menuAberto ? <HiX /> : <HiMenu />}
        </button>

        {/* Navegação padrão (desktop) */}
        <nav className="hidden md:flex gap-10 text-base font-[var(--font-body)] font-light tracking-wide">
          <a href="#inicio" className="hover:underline underline-offset-4">Início</a>
          <a href="#especialidades" className="hover:underline underline-offset-4">Especialidades</a>
          <a href="#sobre" className="hover:underline underline-offset-4">Sobre</a>
          <a href="#tratamentos" className="hover:underline underline-offset-4">Tratamentos</a>
          <a href="#contato" className="hover:underline underline-offset-4">Contato</a>
          <a href="#duvidas" className="hover:underline underline-offset-4">Dúvidas Frequentes</a>
        </nav>
      </div>

      {/* Menu mobile */}
      {menuAberto && (
        <div className="md:hidden bg-[#021C2C] px-6 py-4 space-y-4 text-base font-[var(--font-body)] font-light tracking-wide">
          <a onClick={fecharMenu} href="#inicio" className="block">Início</a>
          <a onClick={fecharMenu} href="#especialidades" className="block">Especialidades</a>
          <a onClick={fecharMenu} href="#sobre" className="block">Sobre</a>
          <a onClick={fecharMenu} href="#tratamentos" className="block">Tratamentos</a>
          <a onClick={fecharMenu} href="#contato" className="block">Contato</a>
          <a onClick={fecharMenu} href="#duvidas" className="block">Dúvidas Frequentes</a>
        </div>
      )}
    </header>
  );
}
