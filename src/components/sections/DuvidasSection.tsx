"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";

const videosDestaque = [
  {
    pergunta: "Cirurgia robótica pode falhar?",
    videoUrl: "/videos/pode-falhar-cirurgia-robotica.mp4",
    descricao:
      "Apesar da alta tecnologia, a cirurgia robótica pode apresentar falhas, principalmente por fatores humanos, anatômicos ou limitações técnicas."
  },
  {
    pergunta: "Câncer de próstata: quando indicar cirurgia robótica?",
    videoUrl: "/videos/cancer-prostata-cirurgia-robotica.mp4",
    descricao:
      "A cirurgia robótica oferece uma alternativa menos invasiva e com recuperação mais rápida para o câncer de próstata."
  },
  {
    pergunta: "O que acontece quando a testosterona está baixa?",
    videoUrl: "/videos/testosterona-baixa.mp4",
    descricao:
      "A baixa testosterona pode causar fadiga, diminuição da libido, alterações de humor e perda de massa muscular. A avaliação médica é fundamental."
  },
  {
    pergunta: "Vasectomia diminui a testosterona?",
    videoUrl: "/videos/vasectomia-diminui-testosterona.mp4",
    descricao:
      "Não. A vasectomia não interfere na produção de testosterona, pois não altera a função dos testículos."
  },
  {
    pergunta: "É possível engravidar após vasectomia?",
    videoUrl: "/videos/engravida-apos-vasectomia.mp4",
    descricao:
      "A reversão da vasectomia pode permitir uma nova gravidez, mas o sucesso depende do tempo decorrido e da técnica usada."
  },
  {
    pergunta: "Cirurgia robótica vs laparoscópica: qual escolher?",
    videoUrl: "/videos/cirurgia-robotica-vs-laparoscopica.mp4",
    descricao:
      "A cirurgia robótica proporciona maior precisão e menor agressão ao corpo, sendo indicada em muitos casos sobre a laparoscópica tradicional."
  },
  {
    pergunta: "Caroço ou nódulo: o que pode ser?",
    videoUrl: "/videos/caroco-ou-nodulo-o-que-pode-ser.mp4",
    descricao:
      "Um caroço pode indicar desde inflamações simples até tumores. A avaliação médica com exames de imagem é essencial."
  },
  {
    pergunta: "Preenchimento peniano aumenta em repouso?",
    videoUrl: "/videos/preenchimento-aumenta-em-repouso.mp4",
    descricao:
      "Sim. O procedimento busca melhorar a proporção peniana mesmo em estado flácido, gerando mais satisfação estética."
  },
  {
    pergunta: "Preenchimento peniano causa impotência?",
    videoUrl: "/videos/preenchimento-gera-hipotencia.mp4",
    descricao:
      "Não. Quando bem executado, o preenchimento não causa impotência, pois respeita as estruturas funcionais do pênis."
  },
  {
    pergunta: "Quais os sinais de pedra nos rins?",
    videoUrl: "/videos/sinais-de-pedra-nos-rins.mp4",
    descricao:
      "Dor intensa na lombar, urina com sangue, náuseas e urgência para urinar são alguns dos principais sinais."
  },
  {
    pergunta: "Segurar urina faz mal?",
    videoUrl: "/videos/segurar-urina-faz-mal.mp4",
    descricao:
      "Sim. Segurar urina com frequência pode favorecer infecções e sobrecarga da bexiga, afetando sua função."
  },
  {
    pergunta: "Preenchimento peniano altera a sensibilidade?",
    videoUrl: "/videos/preenchimento-muda-sensibilidade.mp4",
    descricao:
      "Em geral, não. Quando feito corretamente, o preenchimento respeita áreas sensíveis, mantendo as sensações táteis preservadas."
  },
  {
    pergunta: "Vasectomia pode ser revertida?",
    videoUrl: "/videos/vasectomia-pode-reverter.mp4",
    descricao:
      "Sim. Em muitos casos, é possível realizar a reversão da vasectomia por microcirurgia, com taxas de sucesso variáveis."
  }
];

export default function DuvidasSection() {
  const [aberta, setAberta] = useState<string | null>(null);

  return (
    <section id="duvidas" className="bg-[#021C2C] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-[var(--font-title)] text-yellow-400 text-center mb-12">
          Dúvidas Frequentes
        </h2>

        <div className="space-y-6">
          {videosDestaque.map(({ pergunta, videoUrl, descricao }) => {
            const ativa = aberta === pergunta;
            return (
              <div
                key={pergunta}
                className="bg-[#0d2736] rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setAberta(ativa ? null : pergunta)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between"
                >
                  <span className="font-semibold font-[var(--font-title)] text-base md:text-lg">
                    {pergunta}
                  </span>
                  <motion.div
                    animate={{ rotate: ativa ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-yellow-400"
                  >
                    <FaChevronDown />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {ativa && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col md:flex-row gap-6 px-6 pb-6"
                    >
                      <div className="flex-1 text-sm font-[var(--font-body)] font-extralight text-justify flex items-center">
                        {descricao}
                      </div>
                      <div className="flex justify-center md:justify-end">
                        <div className="w-[260px] h-[460px] rounded-xl overflow-hidden">
                          <video
                            src={videoUrl}
                            controls
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
