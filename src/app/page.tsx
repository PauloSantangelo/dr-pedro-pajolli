import HeroSection from "@/components/sections/HeroSection";
import EspecialidadesSection from "@/components/sections/EspecialidadesSection";
import SobreSection from "@/components/sections/SobreSection";
import TratamentosSection from "@/components/sections/TratamentosSection";
import ContatoSection from "@/components/sections/ContatoSection";
import DuvidasSection from "@/components/sections/DuvidasSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <EspecialidadesSection />
      <SobreSection />
      <TratamentosSection />
      <ContatoSection />
      <DuvidasSection />
    </main>
  );
}
