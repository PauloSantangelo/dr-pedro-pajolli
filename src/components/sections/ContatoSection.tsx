"use client";

import Image from "next/image";
import { LuMapPin, LuPhone } from "react-icons/lu";

export default function ContatoSection() {
  return (
    <section id="contato" className="bg-white text-[#021C2C] py-20 px-6 md:px-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-[var(--font-title)] text-[#d1a144] mb-10">
          Onde Atendo
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Local 1 */}
          <div className="bg-[#0d2736] text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold font-[var(--font-title)] mb-4 text-center">
              Unimed Bauru
            </h3>
            <div className="flex items-start gap-3 mb-2">
              <LuMapPin size={20} className="text-[#d1a144] mt-1" />
              <p className="text-sm font-[var(--font-body)] font-extralight">
                Rua Rio Branco 65, Bauru - SP
              </p>
            </div>
            <div className="flex items-start gap-3">
              <LuPhone size={20} className="text-[#d1a144] mt-1" />
              <p className="text-sm font-[var(--font-body)] font-extralight">
                (14) 0000-0000 | (14) 0000-0000
              </p>
            </div>
            <div className="mt-6">
              <Image
                src="/imagens/unimed.jpg"
                alt="Unimed Bauru"
                width={600}
                height={400}
                className="rounded-md w-full object-cover"
              />
            </div>
          </div>

          {/* Local 2 */}
          <div className="bg-[#0d2736] text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold font-[var(--font-title)] mb-4 text-center">
              Uroanest Clinica Medica
            </h3>
            <div className="flex items-start gap-3 mb-2">
              <LuMapPin size={20} className="text-[#d1a144] mt-1" />
              <p className="text-sm font-[var(--font-body)] font-extralight">
                Av. Duque de Caxias, 2-8 - Vila Mesquita – Bauru - SP, 17015-311
              </p>
            </div>
            <div className="flex items-start gap-3">
              <LuPhone size={20} className="text-[#d1a144] mt-1" />
              <p className="text-sm font-[var(--font-body)] font-extralight">
                (14) 3366-5831 | (14) 99772-8827
              </p>
            </div>
            <div className="mt-6">
              <Image
                src="/imagens/uro.jpg"
                alt="Uroanest Clinica Medica"
                width={600}
                height={400}
                className="rounded-md w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
