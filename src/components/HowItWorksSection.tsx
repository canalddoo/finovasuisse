"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const stepsData: StepItem[] = [
  {
    number: "01",
    title: "Richiedi un preventivo",
    description: "Compila il modulo online in pochissimi minuti. Senza impegno e senza costi.",
  },
  {
    number: "02",
    title: "Analisi della situazione",
    description: "I nostri consulenti selezionano le migliori offerte della nostra rete.",
  },
  {
    number: "03",
    title: "Selezione dei prodotti",
    description: "Ti presentiamo il TAN/TAEG e le rate mensili. Scegli in totale trasparenza.",
  },
  {
    number: "04",
    title: "Accredito sul conto",
    description: "I fondi vengono versati direttamente sul conto della tua azienda.",
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section className="how-it-works-section" id="process" ref={sectionRef}>
      <div className="how-it-works-container">
        {/* COLONNA SINISTRA: IMMAGINE + BADGE STATISTICHE */}
        <div className="how-it-works-media reveal reveal-left">
          <div className="image-wrapper">
            <Image
              src="/img/how-it-works.avif"
              alt="Consulente finanziaria sorridente"
              width={600}
              height={550}
              className="process-image"
              priority
            />

            {/* OVERLAY GLASSMORPHISM / STATISTICHE */}
            <div className="stats-glass-card">
              <div className="stat-item">
                <span className="stat-number">24h</span>
                <span className="stat-label">Risposta garantita</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">partner finanziari</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">0</span>
                <span className="stat-label">costi iniziali</span>
              </div>
            </div>
          </div>
        </div>

        {/* COLONNA DESTRA: CONTENUTO E PASSAGGI */}
        <div className="how-it-works-content">
          <div className="content-header reveal reveal-up">
            <span className="section-subtitle">PROCESSO SEMPLICE</span>
            <h2 className="section-title">Come funziona</h2>
          </div>

          <div className="steps-list">
            {stepsData.map((step, index) => (
              <div
                key={step.number}
                className="step-card reveal reveal-up"
                style={{ transitionDelay: `${0.15 * (index + 1)}s` }}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-body">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="content-footer reveal reveal-up" style={{ transitionDelay: "0.8s" }}>
            <Link href="#scopri-di-piu" className="process-link">
              <span>Scopri di più sul processo</span>
              <i className="fa-solid fa-chevron-right link-arrow"></i>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}