"use client";

import Image from "next/image";
import { LuMapPin, LuPhone } from "react-icons/lu";

export default function ContatoSection() {
  return (
    <section id="contato" className="bg-white text-[#021C2C] py-20 px-6 md:px-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-[var(--font-title)] text-[#d1a144] mb-10">
          Unidades de Atendimento
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Local 1 */}
          <div className="bg-[#0d2736] text-white p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold font-[var(--font-title)] mb-4 text-center min-h-[3rem]">
                Unimed Bauru
              </h3>

              <div className="flex items-start gap-3 mb-2">
                <LuMapPin size={20} className="text-[#d1a144] mt-1 shrink-0" />
                <p className="text-sm font-[var(--font-body)] font-extralight">
                  Rua Rio Branco 65, Bauru - SP
                </p>
              </div>

              <div className="flex items-start gap-3">
                <LuPhone size={20} className="text-[#d1a144] mt-1 shrink-0" />
                <p className="text-sm font-[var(--font-body)] font-extralight">
                  (14) 3235-3322 | (14) 3235-3350
                </p>
              </div>

              <a
                href="https://wa.me/5514999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-[#d1a144] bg-[#d1a144] px-5 py-3 text-sm font-medium text-[#0d2736] transition hover:opacity-90"
              >
                Agendar consulta
              </a>
            </div>

            <div className="mt-6">
              <Image
                src="/imagens/unimed.jpg"
                alt="Unimed Bauru"
                width={600}
                height={400}
                className="rounded-md w-full h-[260px] object-cover"
              />
            </div>
          </div>

          {/* Local 2 */}
          <div className="bg-[#0d2736] text-white p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold font-[var(--font-title)] mb-4 text-center min-h-[3rem]">
                CMC - Clínica Médica
              </h3>

              <div className="flex items-start gap-3 mb-2">
                <LuMapPin size={20} className="text-[#d1a144] mt-1 shrink-0" />
                <p className="text-sm font-[var(--font-body)] font-extralight">
                  R. Gustavo Maciel, 21-21 - Jardim Estoril, Bauru - SP, 17012-110
                </p>
              </div>

              <div className="flex items-start gap-3">
                <LuPhone size={20} className="text-[#d1a144] mt-1 shrink-0" />
                <p className="text-sm font-[var(--font-body)] font-extralight">
                  (14) 3234-1959
                </p>
              </div>

              <a
                href="https://wa.me/5514999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-[#d1a144] bg-[#d1a144] px-5 py-3 text-sm font-medium text-[#0d2736] transition hover:opacity-90"
              >
                Agendar consulta
              </a>
            </div>

            <div className="mt-6">
              <Image
                src="/imagens/uro.webp"
                alt="Clínica Médica"
                width={600}
                height={400}
                className="rounded-md w-full h-[260px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}