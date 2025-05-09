"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaUserMd, FaSyringe, FaVenusMars, FaTools } from "react-icons/fa";

export default function TratamentosSection() {
  return (
    <section id="especialidades" className="bg-[#011520] text-white py-20 px-6 md:px-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-[var(--font-title)] text-[#d1a144] mb-4">
          Minhas Especialidades
        </h2>
        <p className="text-center max-w-2xl mx-auto text-sm font-[var(--font-body)] font-extralight mb-12">
          Atendimento completo com foco na saúde do homem moderno, utilizando tecnologia, precisão e cuidado individualizado.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              Icon: FaUserMd,
              title: "Consultas Urológicas",
              text: "Diagnóstico e acompanhamento de problemas urológicos, com atendimento individualizado e foco na saúde masculina.",
              delay: 0.5,
            },
            {
              Icon: FaSyringe,
              title: "Cirurgia Robótica",
              text: "Especialização em laparoscopia e endourologia para procedimentos de alta precisão, com menos dor e recuperação mais rápida.",
              delay: 0.6,
            },
            {
              Icon: FaVenusMars,
              title: "Saúde Sexual e Metabólica",
              text: "Tratamento de disfunção erétil, andropausa, saúde metabólica e outros fatores que afetam a qualidade de vida do homem.",
              delay: 0.7,
            },
            {
              Icon: FaTools,
              title: "Preenchimento Peniano",
              text: "Procedimento estético e funcional, realizado com técnicas minimamente invasivas, respeitando a individualidade de cada paciente.",
              delay: 0.8,
            },
          ].map(({ Icon, title, text, delay }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" }}
              transition={{ duration: 0.2, delay, ease: "easeOut" }}
              className="bg-[#0d2736] rounded-xl p-6 shadow-lg cursor-pointer"
            >
              <Icon size={36} className="text-[#d1a144] mb-4" />
              <h3 className="text-lg font-semibold font-[var(--font-title)] mb-2 text-[#d1a144]">
                {title}
              </h3>
              <p className="text-sm font-[var(--font-body)] font-extralight leading-relaxed text-justify">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
