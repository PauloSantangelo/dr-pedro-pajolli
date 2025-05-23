"use client";

import Image from "next/image";
import React from "react";
import { LuCalendarClock } from "react-icons/lu";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen lg:min-h-[82vh] bg-[#021C2C] text-white px-6 py-16 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Texto à esquerda */}
        <motion.div
          className="flex-1 space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl leading-snug font-[var(--font-title)]">
            <span className="text-[#d1a144]">Saúde Urológica</span> com <br />
            Tecnologia, Precisão <br />
            e Confiança
          </h1>

          <div className="text-sm md:text-base font-[var(--font-body)] font-extralight max-w-xl mx-auto lg:mx-0 text-justify space-y-4 leading-relaxed">
            <p>
              Com ampla experiência em Urologia e Cirurgia Robótica, o Dr. Pedro Pajolli atua no diagnóstico e tratamento de doenças da próstata, cálculos renais, disfunção erétil e saúde íntima masculina.
            </p>
            <p>
              Seu foco está na excelência técnica com cuidado individualizado, usando técnicas minimamente invasivas para preservar a saúde e o bem-estar em todas as fases da vida do homem.
            </p>
          </div>

          <div className="flex justify-center lg:justify-start">
            <a
              href="#agendar"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#d9a84e] text-black font-[var(--font-body)] font-medium text-sm shadow hover:bg-[#c99942] transition mt-2"
            >
              <LuCalendarClock size={20} />
              AGENDAR CONSULTA
            </a>
          </div>
        </motion.div>

        {/* Imagem do Dr. com fundo dinâmico */}
        <motion.div
          className="relative flex-1 flex items-end justify-center h-[480px] md:h-[600px] lg:h-[720px]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {/* Círculo de fundo para mobile */}
          <div className="absolute bottom-0 w-[260px] h-[260px] bg-[#d1a144] rounded-full z-0 lg:hidden" />

          {/* Moldura tradicional apenas no desktop */}
          <div className="hidden lg:block absolute bottom-0 w-[410px] h-[450px] bg-[#d1a144] rounded-t-[180px] z-0" />

          {/* Foto do Dr. Pedro */}
          <div className="relative w-[260px] h-[420px] md:w-[380px] md:h-[600px] lg:w-[460px] lg:h-[700px] z-10">
            <Image
              src="/imagens/drpedro1.webp"
              alt="Dr. Pedro Pajolli"
              fill
              className="object-cover object-bottom"
              priority
            />
          </div>
        </motion.div>

        {/* Citação visível apenas no desktop */}
        <motion.div
          className="hidden lg:flex flex-1 items-center justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <p className="max-w-sm text-lg text-justify italic leading-relaxed font-[var(--font-body)] font-extralight relative before:content-['“'] before:absolute before:-top-4 before:-left-3 before:text-4xl before:text-[#d1a144]">
            Meu compromisso é oferecer um atendimento ético e preciso, com foco na saúde urológica do homem moderno. Cuidar com tecnologia é uma escolha. Cuidar com atenção, é um valor.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
