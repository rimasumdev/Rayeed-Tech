import Hero from "@/components/hero/hero";
import Nav from "@/components/nav/nav";
import Features from "@/components/features/features";
import Philosophy from "@/components/philosophy/philosophy";
import Technology from "@/components/technology/technology";
import FunFact from "@/components/funFact/funfact";
import Cta from "@/components/cta/cta";
import Footer from "@/components/footer/footerpage";
export default function Home() {
  return (
    <>
      <Nav />
      <div className="relative min-h-[820px] w-full z-10">
        <Hero />
      </div>
      <Features />
      <Philosophy />
      <Technology />
      <FunFact />
      <Cta />
      <Footer />
    </>
  );
}
