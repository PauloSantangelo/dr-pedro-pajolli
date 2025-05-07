"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center bg-[#F5F5F5]">
      <Image
        src="/hero-dr-pajolli.webp"
        alt="Dr. Pedro Pajolli"
        fill
        priority
        className="object-cover z-0"
      />
      <div className="absolute bg-white/80 p-6 md:p-10 rounded-xl text-center max-w-xl z-10">
        <h1 className="text-[#7A3B2E] text-2xl md:text-4xl font-bold leading-tight">
          Dr. Pedro Pajolli
        </h1>
        <p className="text-[#7A3B2E] text-sm md:text-lg mt-2 font-medium">
          Cirurgia Robótica • Preenchimento Peniano
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
