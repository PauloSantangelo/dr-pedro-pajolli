"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { LuCalendarClock } from "react-icons/lu";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[90vh] bg-[#021C2C] text-white flex flex-col justify-center overflow-hidden"
    >
      {/* Gradiente sutil ao fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#021C2C] via-[#03273E] to-[#021C2C] opacity-95" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* === Texto à esquerda === */}
        <motion.div
          className="flex-1 text-center lg:text-left space-y-6 mt-10 lg:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl xl:text-5xl leading-snug font-[var(--font-title)]">
            <span className="text-[#d1a144]">Saúde Urológica</span> com <br />
            Tecnologia, Precisão <br />
            e Confiança
          </h1>

          <div className="text-sm md:text-base font-[var(--font-body)] font-extralight max-w-xl mx-auto lg:mx-0 text-justify leading-relaxed space-y-4">
            <p>
              Com ampla experiência em Urologia e Cirurgia Robótica, o Dr. Pedro Pajolli atua no diagnóstico e tratamento de doenças da próstata, cálculos renais, disfunção erétil e saúde íntima masculina.
            </p>
            <p>
              Seu foco está na excelência técnica com cuidado individualizado, usando técnicas minimamente invasivas para preservar a saúde e o bem-estar em todas as fases da vida do homem.
            </p>
          </div>

          <div className="flex justify-center lg:justify-start">
            <a
              href="https://wa.me/5514999053626"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#d1a144] text-black font-[var(--font-body)] font-medium text-sm shadow-lg hover:bg-[#c99942] transition"
            >
              <LuCalendarClock size={20} />
              AGENDAR CONSULTA
            </a>
          </div>
        </motion.div>

        {/* === Imagem com transição === */}
        <motion.div
          className="relative flex-1 flex items-center justify-center h-[400px] md:h-[520px] lg:h-[650px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Fundo circular dourado */}
          <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-[#d1a144]/80 rounded-full blur-xl opacity-25" />

          {/* Imagens sobrepostas */}
          <div className="relative w-[260px] h-[420px] md:w-[340px] md:h-[550px] lg:w-[420px] lg:h-[640px] rounded-2xl overflow-hidden shadow-2xl">
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 1, 0] }}
              transition={{
                duration: 7,
                times: [0, 0.85, 1],
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Image
                src="/imagens/pedro (1).png"
                alt="Dr. Pedro Pajolli"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>

            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 7,
                times: [0, 0.1, 0.9, 1],
                repeat: Infinity,
                repeatType: "loop",
                delay: 0.8,
              }}
            >
              <Image
                src="/imagens/pedro (2).png"
                alt="Dr. Pedro Pajolli"
                fill
                className="object-cover object-top"
              />
            </motion.div>

            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 7,
                times: [0, 0.1, 0.9, 1],
                repeat: Infinity,
                repeatType: "loop",
                delay: 0.8,
              }}
            >
              <Image
                src="/imagens/pedro (3).png"
                alt="Dr. Pedro Pajolli"
                fill
                className="object-cover object-top"
              />
            </motion.div>
          </div>

          {/* === Frase sobre as fotos (sem blur, apenas sombra) === */}
          <motion.div
            className="absolute bottom-6 right-4 lg:bottom-10 lg:right-10 max-w-sm text-right font-[var(--font-body)] text-sm md:text-base italic text-white z-20 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            “Meu compromisso é oferecer um atendimento ético e preciso, com foco na saúde urológica do homem moderno. Cuidar com tecnologia é uma escolha. Cuidar com atenção, é um valor.”
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
