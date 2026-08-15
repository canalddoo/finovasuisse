"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function CtaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // --- ANIMATION REVEAL AU SCROLL ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elementsToAnimate = sectionRef.current?.querySelectorAll(".reveal");
    elementsToAnimate?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta-section" ref={sectionRef}>
      {/* OVERLAY AVEC LA GRILLE ARCHITECTURALE */}
      <div className="cta-grid-overlay" />

      {/* CONTENU CENTRAL */}
      <div className="cta-container">
        <h2 className="cta-title reveal reveal-up">
          Prêt à développer <br className="mobile-only-br" />
          <span className="text-yellow">votre entreprise ?</span>
        </h2>

        <p className="cta-subtitle reveal reveal-up" style={{ transitionDelay: "0.15s" }}>
          Demandez votre devis personnalisé dès maintenant. Gratuit et sans
          engagement, sous 24 heures.
        </p>

        {/* GROUPE DE BOUTONS */}
        <div className="cta-buttons reveal reveal-up" style={{ transitionDelay: "0.3s" }}>
          <Link href="#demande-devis" className="btn-cta-primary">
            <span>Demandez un devis gratuit</span>
            <svg
              className="btn-arrow"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>

          <a href="tel:+393534808704" className="btn-cta-secondary">
            Appelez le : +39 353 480 8704
          </a>
        </div>
      </div>
    </section>
  );
}