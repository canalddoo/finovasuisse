"use client";

import React from "react";

export default function AproposPage() {
  return (
    <div>
      {/* BANNER / HEADER */}
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <strong>Chi siamo ?</strong>
          </div>
          <div className="about-tagline">PROFESSIONISTI DEL CREDITO</div>
          <h1 className="about-hero-title">Chi siamo ?</h1>
          <p className="about-hero-subtitle">
            Professionisti del credito al vostro servizio, a Torino e in tutta Italia.
          </p>
        </div>
      </section>

      {/* CONTENUTO PRINCIPALE */}
      <div className="about-container">
        {/* SEZIONE 1: MISSIONE & PERCHÉ SCEGLIERCI */}
        <section className="about-mission-grid">
          <div className="about-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
              alt="Stretta di mano professionale"
              className="about-img-main"
            />
          </div>

          <div>
            <h2 className="about-section-h2">La nostra missione</h2>
            <p className="about-paragraph">
              Nova Evoluzione nasce con un obiettivo preciso: rendere il credito professionale accessibile a tutti gli imprenditori, liberi professionisti e piccole imprese che ne hanno bisogno, senza le complessità burocratiche che spesso ne frenano la crescita.
            </p>
            <p className="about-paragraph">
              In qualità di agenti finanziari iscritti all'OAM, agiamo come intermediari tra le imprese e una rete selezionata di istituti finanziari e bancari, garantendo trasparenza, professionalità e il massimo vantaggio per il cliente.
            </p>

            <h2 className="about-section-h2" style={{ marginTop: "32px" }}>
              Perché sceglierci ?
            </h2>
            <ul className="about-why-list">
              <li className="about-why-item">
                <strong>Accesso a oltre 20 istituti partner:</strong> individua le migliori condizioni per la tua situazione.
              </li>
              <li className="about-why-item">
                <strong>Nessun costo iniziale:</strong> siamo remunerati dai partner finanziari e non dai clienti.
              </li>
              <li className="about-why-item">
                <strong>Processo 100% digitale:</strong> dalla richiesta all'erogazione, senza spostamenti.
              </li>
              <li className="about-why-item">
                <strong>Risposta garantita entro 24 ore lavorative</strong> dalla ricezione della pratica completa.
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* SEZIONE 2: COSA CI DISTINGUE (Schede) */}
      <section className="about-values-section">
        <div className="about-values-header">
          <div className="about-tagline" style={{ textAlign: "center" }}>
            I NOSTRI VALORI
          </div>
          <h2 className="about-hero-title" style={{ color: "#0f172a" }}>
            Cosa ci distingue
          </h2>
        </div>

        <div className="about-values-grid">
          {/* Scheda 1 */}
          <div className="about-value-card">
            <img
              src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
              alt="Trasparenza"
              className="about-value-card-img"
            />
            <div className="about-value-card-content">
              <h3 className="about-value-card-title">Trasparenza</h3>
              <p className="about-value-card-text">
                Nessun costo nascosto, nessuna sorpresa. Tutte le condizioni vengono spiegate prima di qualsiasi impegno.
              </p>
            </div>
          </div>

          {/* Scheda 2 */}
          <div className="about-value-card">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
              alt="Professionalità"
              className="about-value-card-img"
            />
            <div className="about-value-card-content">
              <h3 className="about-value-card-title">Professionalità</h3>
              <p className="about-value-card-text">
                Anni di esperienza nel settore del credito italiano. Conosciamo il mercato e le sue regole.
              </p>
            </div>
          </div>

          {/* Scheda 3 */}
          <div className="about-value-card">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
              alt="Orientamento al cliente"
              className="about-value-card-img"
            />
            <div className="about-value-card-content">
              <h3 className="about-value-card-title">Orientamento al cliente</h3>
              <p className="about-value-card-text">
                Non vendiamo prodotti, creiamo soluzioni. Il tuo obiettivo finanziario è al centro di ogni consulenza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE 3: DATI SOCIETARI & LAVORA CON NOI */}
      <div className="about-container" style={{ paddingTop: 0 }}>
        <div className="about-company-grid">
          <div className="about-company-left">
            {/* Tabella dati societari */}
            <div className="about-data-card">
              <h3 className="about-data-title">Dati societari</h3>
              <table className="about-data-table">
                <tbody>
                  <tr>
                    <td className="about-data-label">Nome</td>
                    <td className="about-data-val">Nova Evoluzione</td>
                  </tr>
                  <tr>
                    <td className="about-data-label">Qualifica</td>
                    <td className="about-data-val">Agente finanziario</td>
                  </tr>
                  <tr>
                    <td className="about-data-label">Registro OAM</td>
                    <td className="about-data-val">
                      In corso di registrazione
                    </td>
                  </tr>
                  <tr>
                    <td className="about-data-label">Sede</td>
                    <td className="about-data-val">
                      Via San Francesco da Paola, 8<br />10121 Torino (TO)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Scheda Lavora con noi */}
            <div className="about-work-card">
              <h3 className="about-work-title">Lavora con noi</h3>
              <p className="about-work-text">
                Siamo sempre alla ricerca di professionisti della finanza motivati e qualificati.
              </p>
              <a href="/contact" className="about-work-link">
                <span>Contattaci</span>
                <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
          </div>

          {/* Immagine Statistiche / Analytics a destra */}
          <div>
            <img
              src="/img/proof.avif"
              alt="Statistiche e grafici"
              className="about-right-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}