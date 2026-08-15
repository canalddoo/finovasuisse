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
            <h3 className="feature-title">RÉPONSE SOUS 24 HEURES</h3>
            <p className="feature-desc">Devis gratuit et sans engagement</p>
          </div>

          <div className="feature-divider"></div>

          <div className="feature-item">
            <h3 className="feature-title">PLUS DE 20 INSTITUTS</h3>
            <p className="feature-desc">Accès à un vaste réseau de partenaires</p>
          </div>

          <div className="feature-divider"></div>

          <div className="feature-item">
            <h3 className="feature-title">100% NUMÉRIQUE</h3>
            <p className="feature-desc">Processus entièrement en ligne</p>
          </div>

          <div className="feature-divider"></div>

          <div className="feature-item">
            <h3 className="feature-title">INTERMÉDIAIRE FINMA</h3>
            <p className="feature-desc">Registre des opérateurs financiers suisses</p>
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