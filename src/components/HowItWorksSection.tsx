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
    title: "Demander un devis",
    description: "Remplissez le formulaire en ligne en quelques minutes seulement. Sans engagement, sans frais.",
  },
  {
    number: "02",
    title: "Analyse de la situation",
    description: "Nos consultants sélectionnent les meilleures offres de notre réseau.",
  },
  {
    number: "03",
    title: "Sélection de produits",
    description: "Nous vous présentons le TAEG et les mensualités. Choisissez en toute transparence.",
  },
  {
    number: "04",
    title: "Paiement sur le compte",
    description: "Les fonds sont versés directement sur le compte de votre entreprise.",
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
        {/* COLONNE GAUCHE : IMAGE + BADGE STATS */}
        <div className="how-it-works-media reveal reveal-left">
          <div className="image-wrapper">
            <Image
              src="/img/how-it-works.avif"
              alt="Conseillère financière souriante"
              width={600}
              height={550}
              className="process-image"
              priority
            />

            {/* OVERLAY GLASSMORPHISM / STATS */}
            <div className="stats-glass-card">
              <div className="stat-item">
                <span className="stat-number">24h</span>
                <span className="stat-label">Réponse garantie</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">partenaires financiers</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">0</span>
                <span className="stat-label">coûts initiaux</span>
              </div>
            </div>
          </div>
        </div>

        {/* COLONNE DROITE : CONTENU & ÉTAPES */}
        <div className="how-it-works-content">
          <div className="content-header reveal reveal-up">
            <span className="section-subtitle">PROCESSUS SIMPLE</span>
            <h2 className="section-title">Comment ça marche</h2>
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
            <Link href="#en-savoir-plus" className="process-link">
              <span>Apprenez-en davantage sur le processus</span>
              <i className="fa-solid fa-chevron-right link-arrow"></i>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}