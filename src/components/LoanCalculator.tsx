"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function LoanCalculator() {
  const [amount, setAmount] = useState<number>(159000);
  const [months, setMonths] = useState<number>(60);
  const sectionRef = useRef<HTMLDivElement>(null);

  // --- FORMULE DE CALCUL FINANCIER (TAEG 6.5%) ---
  const taeg = 0.065;
  const monthlyRate = taeg / 12;

  // Formule Mensualité : P * (r * (1 + r)^n) / ((1 + r)^n - 1)
  const calculateMonthlyPayment = (): number => {
    if (amount <= 0 || months <= 0) return 0;
    const payment =
      (amount * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(payment);
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalAmount = Math.round(monthlyPayment * months);
  const totalInterest = Math.round(totalAmount - amount);

  // Formater les nombres avec séparation des milliers (ex: 159 000 €)
  const formatCurrency = (val: number) => {
    return val.toLocaleString("fr-FR").replace(/\s/g, " ");
  };

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
    <section className="calculator-section" ref={sectionRef}>
      <div className="calculator-container">
        {/* COLONNE GAUCHE (TEXTE + BOUTON) */}
        <div className="calculator-text-side reveal reveal-left">
          <span className="badge-yellow">OUTIL GRATUIT</span>
          <h2 className="calculator-title">Calculez votre mensualité</h2>
          <p className="calculator-desc">
            Utilisez notre calculateur pour avoir une idée de votre mensualité et
            du coût total. Les résultats sont donnés à titre indicatif.
          </p>
          <Link href="#simulateur-complet" className="btn-blue-outline">
            Ouvrir le simulateur complet
          </Link>
        </div>

        {/* COLONNE DROITE (CARTE DU CALCULATEUR) */}
        <div className="calculator-card reveal reveal-up" style={{ transitionDelay: "0.2s" }}>
          {/* SLIDER 1 : MONTANT */}
          <div className="slider-group">
            <div className="slider-label-row">
              <span className="slider-label">Montant demandé</span>
              <span className="slider-value">{formatCurrency(amount)} €</span>
            </div>
            <input
              type="range"
              min={5000}
              max={500000}
              step={1000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="custom-range"
              style={{
                backgroundSize: `${((amount - 5000) * 100) / (500000 - 5000)}% 100%`,
              }}
            />
            <div className="slider-range-limits">
              <span>5 000 €</span>
              <span>500 000 €</span>
            </div>
          </div>

          {/* SLIDER 2 : DURÉE */}
          <div className="slider-group">
            <div className="slider-label-row">
              <span className="slider-label">Durée</span>
              <span className="slider-value">{months} mois</span>
            </div>
            <input
              type="range"
              min={12}
              max={120}
              step={1}
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="custom-range"
              style={{
                backgroundSize: `${((months - 12) * 100) / (120 - 12)}% 100%`,
              }}
            />
            <div className="slider-range-limits">
              <span>12 mois</span>
              <span>120 mois</span>
            </div>
          </div>

          <hr className="calc-divider" />

          {/* RÉSULTATS DYNAMIQUES */}
          <div className="results-grid">
            <div className="result-item">
              <div className="result-number">{formatCurrency(monthlyPayment)}</div>
              <div className="result-label">Versement mensuel €</div>
            </div>
            <div className="result-item">
              <div className="result-number">{formatCurrency(totalAmount)}</div>
              <div className="result-label">Total €</div>
            </div>
            <div className="result-item">
              <div className="result-number">{formatCurrency(totalInterest)}</div>
              <div className="result-label">Intérêts €</div>
            </div>
          </div>

          <p className="disclaimer-text">
            Calcul indicatif avec un TAEG de 6,5 %. Le TAEG réel dépend de votre situation. Consultez un expert.
          </p>

          <Link href="#demande-devis" className="btn-blue-submit">
            Demander un devis
          </Link>
        </div>
      </div>
    </section>
  );
}