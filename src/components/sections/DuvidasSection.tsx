"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";

const videosDestaque = [
  {
    pergunta: "Cirurgia robótica pode falhar?",
    videoUrl: "/videos/pode-falhar-cirurgia-robotica.mp4",
    descricao:
      "Apesar de envolver alta tecnologia, a cirurgia robótica é um dos métodos mais seguros da atualidade. Ela oferece máxima precisão, menor risco de sangramento, recuperação mais rápida e menor trauma aos tecidos, sendo amplamente utilizada nos melhores centros médicos do mundo. As falhas são extremamente raras e, quando ocorrem, geralmente estão relacionadas a fatores humanos, variações anatômicas do paciente ou limitações específicas do equipamento. Ainda assim, esses riscos são minimizados por uma equipe experiente, treinada e por protocolos rigorosos de segurança."
  },
  {
    pergunta: "Câncer de próstata: quando indicar cirurgia robótica?",
    videoUrl: "/videos/cancer-prostata-cirurgia-robotica.mp4",
    descricao:
      "A cirurgia robótica oferece uma alternativa menos invasiva e com recuperação mais rápida para o câncer de próstata. Ela é indicada principalmente em casos localizados, nos quais é possível preservar estruturas importantes como nervos e vasos, promovendo melhor qualidade de vida no pós-operatório."
  },
  {
    pergunta: "O que acontece quando a testosterona está baixa?",
    videoUrl: "/videos/testosterona-baixa.mp4",
    descricao:
      "A baixa testosterona pode causar fadiga, diminuição da libido, alterações de humor e perda de massa muscular. O tratamento adequado é baseado na reposição hormonal e em mudanças no estilo de vida, sempre com acompanhamento médico."
  },
  {
    pergunta: "Vasectomia diminui a testosterona?",
    videoUrl: "/videos/vasectomia-diminui-testosterona.mp4",
    descricao:
      "Não. A vasectomia não interfere na produção de testosterona, pois não altera a função dos testículos. O procedimento apenas interrompe a passagem dos espermatozoides, sem afetar os hormônios."
  },
  {
    pergunta: "É possível engravidar após vasectomia?",
    videoUrl: "/videos/engravida-apos-vasectomia.mp4",
    descricao:
      "Embora a vasectomia seja um método altamente eficaz de contracepção masculina, com taxas de sucesso superiores a 99%, ainda existe uma chance extremamente rara de gravidez espontânea. Isso pode ocorrer por recanalização dos canais deferentes, mesmo anos após o procedimento. Além disso, é possível engravidar por meio de reversão da vasectomia, feita por microcirurgia. As chances de sucesso nesse caso variam conforme o tempo decorrido desde a cirurgia e as condições clínicas do paciente."
  },
  {
    pergunta: "Cirurgia robótica vs laparoscópica: qual escolher?",
    videoUrl: "/videos/cirurgia-robotica-vs-laparoscopica.mp4",
    descricao:
      "A cirurgia robótica proporciona maior precisão, menor trauma e recuperação mais rápida. É indicada em muitos casos com mais benefícios do que a laparoscopia tradicional."
  },
  {
    pergunta: "Caroço ou nódulo: o que pode ser?",
    videoUrl: "/videos/caroco-ou-nodulo-o-que-pode-ser.mp4",
    descricao:
      "Um caroço pode indicar desde inflamações simples até tumores. A avaliação médica com exames de imagem é fundamental para o diagnóstico correto."
  },
  {
    pergunta: "Preenchimento peniano aumenta em repouso?",
    videoUrl: "/videos/preenchimento-aumenta-em-repouso.mp4",
    descricao:
      "Sim. O procedimento visa melhorar a proporção peniana mesmo em estado flácido, promovendo mais autoestima e satisfação estética."
  },
  {
    pergunta: "Preenchimento peniano causa impotência?",
    videoUrl: "/videos/preenchimento-gera-hipotencia.mp4",
    descricao:
      "Não. Quando realizado com técnica adequada, o preenchimento não compromete a função erétil nem a sensibilidade do pênis."
  },
  {
    pergunta: "Quais os sinais de pedra nos rins?",
    videoUrl: "/videos/sinais-de-pedra-nos-rins.mp4",
    descricao:
      "Dor intensa na lombar, urina com sangue, náuseas e urgência para urinar são sintomas comuns. A dor costuma ser súbita e muito forte."
  },
  {
    pergunta: "Segurar urina faz mal?",
    videoUrl: "/videos/segurar-urina-faz-mal.mp4",
    descricao:
      "Sim. Segurar a urina por longos períodos pode favorecer infecções, aumento da pressão vesical e comprometer a função da bexiga ao longo do tempo."
  },
  {
    pergunta: "Preenchimento peniano altera a sensibilidade?",
    videoUrl: "/videos/preenchimento-muda-sensibilidade.mp4",
    descricao:
      "Não. O procedimento respeita as estruturas sensíveis do pênis e, quando feito corretamente, não altera a sensibilidade tátil."
  },
  {
    pergunta: "Vasectomia pode ser revertida?",
    videoUrl: "/videos/vasectomia-pode-reverter.mp4",
    descricao:
      "Embora muitas pessoas tenham dúvidas sobre a reversão natural da vasectomia, é importante esclarecer que isso é extremamente raro e improvável. Para que ocorra uma nova gravidez, geralmente é necessário recorrer à microcirurgia específica, realizada por especialistas. O sucesso do procedimento depende de diversos fatores, como o tempo desde a vasectomia, a técnica utilizada originalmente e as condições anatômicas do paciente. Mesmo com alta tecnologia, a reversão exige avaliação individualizada para garantir segurança e bons resultados."
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
                      <div className="flex-1 max-w-xl text-sm font-[var(--font-body)] font-extralight text-justify flex items-center">
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
