"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LuCalendarClock } from "react-icons/lu";

const images = ["/imagens/drpedro2.webp", "/imagens/drpedro3.webp"];

export default function SobreSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="sobre" className="relative bg-white text-[#021C2C] py-24 px-6 md:px-0 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <Image
          src="/imagens/rins.png"
          alt="Fundo Rins"
          fill
          className="object-contain object-center"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-[330px] h-[580px] rounded-[40px] overflow-hidden shadow-xl mx-auto">
            <Image
              key={images[currentImage]}
              src={images[currentImage]}
              alt="Dr. Pedro Pajolli"
              fill
              className="object-cover object-top transition-opacity duration-1000 ease-in-out"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-2xl md:text-3xl font-[var(--font-title)]">
            Sobre o Dr. Pedro Pajolli
          </h2>

          <p className="text-sm font-[var(--font-body)] font-extralight leading-relaxed text-justify">
            Médico urologista formado em 2011 pela Universidade Estadual Paulista Júlio de Mesquita Filho (UNESP), com especialização em Cirurgia e Urologia pela mesma instituição.
          </p>

          <p className="text-sm font-[var(--font-body)] font-extralight leading-relaxed text-justify">
            Realizou um Observer Fellowship na Johns Hopkins School of Medicine/Brady Urological Institute em 2016, com ênfase em cirurgia robótica, e possui certificação internacional em Endourologia, Laparoscopia e Cirurgia Minimamente Invasiva pela Endourological Society.
          </p>

          <p className="text-sm font-[var(--font-body)] font-extralight leading-relaxed text-justify">
            Doutor em Cirurgia e Medicina Translacional pela UNESP, atua como urologista na Unimed Bauru, no Hospital Estadual e no Hospital de Base de Bauru. É também membro titular da Sociedade Brasileira de Urologia.
          </p>

          <p className="text-sm font-[var(--font-body)] font-extralight leading-relaxed text-justify">
            Seu compromisso vai além da técnica: acredita em um atendimento humano, respeitoso e personalizado, que valoriza a individualidade de cada paciente.
          </p>

          <a
            href="https://wa.me/5514999053626"
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded bg-[#d9a84e] text-black font-[var(--font-body)] font-medium text-sm shadow hover:bg-[#c99942] transition w-fit"
          >
            <LuCalendarClock size={18} />
            AGENDAR CONSULTA
          </a>
        </motion.div>
      </div>
    </section>
  );
}
