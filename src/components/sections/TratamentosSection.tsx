"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";

const condicoes = [
  {
    titulo: "Cálculos Renais",
    descricao:
      "Os cálculos renais são formações sólidas de sais e minerais que se acumulam nos rins ou nas vias urinárias. Eles podem causar dor intensa, conhecida como cólica renal, além de náuseas e sangramento na urina. O tratamento pode incluir hidratação, medicamentos para dor, litotripsia ou procedimentos minimamente invasivos para remoção das pedras. O diagnóstico precoce é essencial para evitar complicações como infecções urinárias ou perda da função renal.",
  },
  {
    titulo: "Câncer de próstata",
    descricao:
      "O câncer de próstata é uma das neoplasias mais comuns entre os homens, especialmente acima dos 50 anos. Geralmente, é silencioso nas fases iniciais, sendo detectado através de exames preventivos como o PSA e o toque retal. Quando diagnosticado precocemente, possui altas taxas de cura. Os tratamentos incluem cirurgia robótica, radioterapia, bloqueio hormonal e acompanhamento ativo, dependendo do estágio e da agressividade do tumor.",
  },
  {
    titulo: "Câncer de Rim",
    descricao:
      "O câncer renal pode surgir de forma silenciosa e é muitas vezes descoberto em exames de imagem solicitados por outros motivos. Os sintomas, quando presentes, podem incluir sangue na urina, dor lombar e massa abdominal. O tratamento depende do tamanho e da localização do tumor e pode envolver cirurgia minimamente invasiva, como a nefrectomia parcial ou total, com ou sem auxílio da cirurgia robótica.",
  },
  {
    titulo: "Câncer de testículo",
    descricao:
      "Mais comum em homens jovens, o câncer de testículo geralmente se manifesta como um nódulo indolor ou aumento do volume testicular. É um dos tumores com maior índice de cura quando tratado corretamente. O tratamento inicial é cirúrgico e pode ser seguido por quimioterapia ou radioterapia, dependendo do tipo histológico e do estadiamento da doença.",
  },
  {
    titulo: "Disfunção Erétil",
    descricao:
      "A disfunção erétil é a dificuldade persistente de alcançar ou manter uma ereção satisfatória para a relação sexual. Pode estar relacionada a causas hormonais, vasculares, neurológicas ou psicológicas. O tratamento é individualizado e pode envolver mudanças no estilo de vida, uso de medicamentos orais, terapia de reposição hormonal, injeções penianas e, em casos específicos, próteses penianas.",
  },
  {
    titulo: "Doenças dos Rins e Aparelho Urinário",
    descricao:
      "Incluem condições como pielonefrite, infecções urinárias de repetição, hidronefrose, refluxo vesicoureteral, entre outras. Essas doenças podem afetar desde a infância até a idade adulta e causar desde desconforto leve até comprometimento da função renal. A abordagem pode ser medicamentosa ou cirúrgica, sempre com foco na preservação da saúde renal e na prevenção de complicações.",
  },
  {
    titulo: "Preenchimento Peniano",
    descricao:
      "O preenchimento peniano é um procedimento estético e funcional que visa aumentar a circunferência do pênis utilizando substâncias seguras e reabsorvíveis. É indicado para homens que desejam melhorar a autoestima e a proporção peniana, sempre respeitando os limites anatômicos. O procedimento é realizado de forma minimamente invasiva e possui rápida recuperação.",
  },
  {
    titulo: "Doenças Urológicas",
    descricao:
      "Englobam uma ampla gama de condições que afetam o trato urinário masculino e feminino, como infecção urinária, hiperplasia prostática benigna, incontinência urinária, estenose de uretra, entre outras. O tratamento é baseado na causa específica, podendo envolver desde medicações até intervenções cirúrgicas minimamente invasivas, sempre com foco na qualidade de vida do paciente.",
  },
];

export default function TratamentosSection() {
  const [ativo, setAtivo] = useState<string | null>(null);

  return (
    <section id="tratamentos" className="bg-[#021C2C] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto bg-[#021C2C] rounded-3xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-[var(--font-title)] text-[var(--amarelo)] text-center mb-12">
          Condições Tratadas
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {condicoes.map(({ titulo, descricao }) => {
            const aberto = ativo === titulo;
            return (
              <div
                key={titulo}
                className="bg-[#0d2736] rounded-2xl shadow-md border border-[#163244]"
              >
                <button
                  onClick={() => setAtivo(aberto ? null : titulo)}
                  className="flex justify-between items-center w-full text-left px-6 py-5 focus:outline-none"
                >
                  <span className="font-semibold text-[var(--amarelo)] text-lg md:text-xl">
                    {titulo}
                  </span>
                  <motion.div
                    animate={{ rotate: aberto ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[var(--amarelo)]"
                  >
                    <FaChevronDown size={18} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {aberto && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-5 text-sm font-[var(--font-body)] font-extralight text-justify"
                    >
                      {descricao}
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
