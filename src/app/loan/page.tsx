"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function LoanCalculator() {
  const [amount, setAmount] = useState<number>(159000);
  const [months, setMonths] = useState<number>(60);
  const sectionRef = useRef<HTMLDivElement>(null);

  // --- FORMULA DI CALCOLO FINANZIARIO (TAEG 6.5%) ---
  const taeg = 0.065;
  const monthlyRate = taeg / 12;

  // Formula Rata Mensile : P * (r * (1 + r)^n) / ((1 + r)^n - 1)
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

  // Formattazione dei numeri con separatore delle migliaia (es: 159 000 €)
  const formatCurrency = (val: number) => {
    return val.toLocaleString("it-IT").replace(/\s/g, " ");
  };

  // --- ANIMAZIONE REVEAL ALLO SCROLL ---
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
        {/* COLONNA SINISTRA (TESTO + PULSANTE) */}
        <div className="calculator-text-side reveal reveal-left">
          <span className="badge-yellow">STRUMENTO GRATUITO</span>
          <h2 className="calculator-title">Calcola la tua rata mensile</h2>
          <p className="calculator-desc">
            Utilizza il nostro calcolatore per farti un'idea della tua rata mensile e del costo totale. I risultati sono forniti a titolo indicativo.
          </p>
          <Link href="#simulateur-complet" className="btn-blue-outline">
            Apri il simulatore completo
          </Link>
        </div>

        {/* COLONNA DESTRA (SCHEDA DEL CALCOLATORE) */}
        <div className="calculator-card reveal reveal-up" style={{ transitionDelay: "0.2s" }}>
          {/* SLIDER 1: IMPORTO */}
          <div className="slider-group">
            <div className="slider-label-row">
              <span className="slider-label">Importo richiesto</span>
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

          {/* SLIDER 2: DURATA */}
          <div className="slider-group">
            <div className="slider-label-row">
              <span className="slider-label">Durata</span>
              <span className="slider-value">{months} mesi</span>
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
              <span>12 mesi</span>
              <span>120 mesi</span>
            </div>
          </div>

          <hr className="calc-divider" />

          {/* RISULTATI DINAMICI */}
          <div className="results-grid">
            <div className="result-item">
              <div className="result-number">{formatCurrency(monthlyPayment)}</div>
              <div className="result-label">Rata mensile €</div>
            </div>
            <div className="result-item">
              <div className="result-number">{formatCurrency(totalAmount)}</div>
              <div className="result-label">Totale €</div>
            </div>
            <div className="result-item">
              <div className="result-number">{formatCurrency(totalInterest)}</div>
              <div className="result-label">Interessi €</div>
            </div>
          </div>

          <p className="disclaimer-text">
            Calcolo indicativo con un TAEG del 6,5%. Il TAEG effettivo dipende dalla tua situazione. Consulta un esperto.
          </p>

          <Link href="#demande-devis" className="btn-blue-submit">
            Richiedi un preventivo
          </Link>
        </div>
      </div>
    </section>
  );
}