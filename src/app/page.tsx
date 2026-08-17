import Hero from "@/components/Hero";
import SolutionsSection from "@/components/SolutionsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LoanCalculator from "@/components/LoanCalculator";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* SECTION AVANTAGES / REASSURANCE */}

     <section className="features-bar">
        <div className="features-container">
          
          <div className="feature-item">
            <h3 className="feature-title">RISPOSTA ENTRO 24 ORE</h3>
            <p className="feature-desc">Preventivo gratuito e senza impegno</p>
          </div>

          <div className="feature-divider"></div>

          <div className="feature-item">
            <h3 className="feature-title">OLTRE 20 ISTITUTI</h3>
            <p className="feature-desc">Accesso a un'ampia rete di partner</p>
          </div>

          <div className="feature-divider"></div>

          <div className="feature-item">
            <h3 className="feature-title">100% DIGITALE</h3>
            <p className="feature-desc">Processo interamente online</p>
          </div>

          <div className="feature-divider"></div>

          <div className="feature-item">
            <h3 className="feature-title">INTERMEDIARIO FINMA</h3>
            <p className="feature-desc">Registro degli operatori finanziari svizzeri</p>
          </div>

        </div>
      </section>
      <SolutionsSection />
      <HowItWorksSection />
      <LoanCalculator />
      <Partners/>
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}