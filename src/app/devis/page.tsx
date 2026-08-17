"use client";

import React, { useState } from "react";
import DevisForm from "./DevisForm";

export default function DevisPage() {
  const [step, setStep] = useState<number>(1);

  const stepsList = [
    { id: 1, label: "Progetto" },
    { id: 2, label: "Azienda" },
    { id: 3, label: "Contatto" },
    { id: 4, label: "Documenti" },
    { id: 5, label: "Consensi" },
  ];

  return (
    <div>
      {/* HEADER BANNER */}
      <header className="devis-header">
        <div className="devis-header-container">
          <span className="devis-badge">Gratuito – Senza impegno</span>
          <h1 className="devis-title">Richiedi il tuo preventivo</h1>
          <p className="devis-subtitle">
            Compila il modulo in pochi minuti. È gratuito e senza alcun impegno.
          </p>

          {/* STEPPER */}
          <nav className="devis-stepper">
            {stepsList.map((s) => {
              let numClass = "inactive";
              if (step === s.id) numClass = "active";
              else if (step > s.id) numClass = "completed";

              return (
                <div key={s.id} className="devis-step-item">
                  <div className={`devis-step-number ${numClass}`}>
                    {step > s.id ? <i className="fa-solid fa-check"></i> : s.id}
                  </div>
                  <span className={`devis-step-label ${step === s.id ? "active" : ""}`}>
                    {s.label}
                  </span>
                </div>
              );
            })}
          </nav>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <div className="devis-layout">
        {/* SIDEBAR SINISTRA */}
        <aside className="devis-sidebar">
          <div className="devis-card">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
              alt="Perché sceglierci"
              className="devis-card-img"
            />
            <h3 className="devis-card-title">Perché sceglierci?</h3>
            <ul className="devis-feature-list">
              <li className="devis-feature-item">
                <i className="fa-solid fa-check"></i> Nessun costo iniziale
              </li>
              <li className="devis-feature-item">
                <i className="fa-solid fa-check"></i> Risposta garantita entro 24 ore
              </li>
              <li className="devis-feature-item">
                <i className="fa-solid fa-check"></i> Più di 20 istituti partner
              </li>
              <li className="devis-feature-item">
                <i className="fa-solid fa-check"></i> Processo 100% digitale
              </li>
              <li className="devis-feature-item">
                <i className="fa-solid fa-check"></i> Operatore iscritto all'OAM
              </li>
            </ul>
          </div>

          <div className="devis-card devis-card-assistance">
            <span className="devis-assistance-badge">Assistenza</span>
            <p className="devis-assistance-text">
              Hai bisogno di aiuto? Chiamaci gratuitamente.
            </p>
            <a href="tel:+393534808704" className="devis-phone-link">
              <i className="fa-solid fa-phone"></i>
              <span>+39 353 480 8704</span>
            </a>
            <div className="devis-assistance-hours">
              Dal lunedì al venerdì: 09:00 - 18:00
            </div>
          </div>

          <div className="devis-card devis-card-rating">
            <div className="devis-rating-val">98%</div>
            <div className="devis-rating-label">clienti soddisfatti</div>
            <div className="devis-rating-stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </aside>

        {/* COMPONENTE FORMULARE */}
        <DevisForm step={step} setStep={setStep} />
      </div>

      <div className="devis-footer-note">
        Dati protetti — Senza impegno — Preventivo gratuito
      </div>
    </div>
  );
}