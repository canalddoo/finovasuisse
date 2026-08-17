"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

interface ContactFormData {
  nomPrenom: string;
  email: string;
  telephone: string;
  message: string;
  acceptPolitique: boolean;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    nomPrenom: "",
    email: "",
    telephone: "",
    message: "",
    acceptPolitique: false,
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.acceptPolitique) {
      alert("Si prega di accettare l'Informativa sulla Privacy.");
      return;
    }

    console.log("Messaggio di contatto inviato:", formData);
    setIsSubmitted(true);
  };

  return (
    <div>
      {/* BANNER / HEADER */}
      <section className="contact-hero">
        <div className="contact-hero-container">
          <div className="contact-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <strong>Contatti</strong>
          </div>
          <div className="contact-tagline">SIAMO QUI PER TE</div>
          <h1 className="contact-hero-title">Contatti</h1>
          <p className="contact-hero-subtitle">
            Siamo a tua completa disposizione per qualsiasi informazione.
          </p>
        </div>
      </section>

      {/* CONTENUTO PRINCIPALE */}
      <div className="contact-main">
        {/* COLONNA SINISTRA: INFO DI CONTATTO & ORARI */}
        <aside>
          <h2 className="contact-section-title">Come contattarci</h2>
          
          <div className="contact-info-list">
            {/* Indirizzo */}
            <div className="contact-info-item">
              <i className="fa-solid fa-location-dot contact-info-icon"></i>
              <div className="contact-info-content">
                <span className="contact-info-label">Sede</span>
                <span className="contact-info-text">
                  Via San Francesco da Paola, 8 — 10121 Torino (TO), Piemonte, Italia
                </span>
              </div>
            </div>

            {/* Telefono */}
            <div className="contact-info-item">
              <i className="fa-solid fa-phone contact-info-icon"></i>
              <div className="contact-info-content">
                <span className="contact-info-label">Telefono</span>
                <a href="tel:+393534808704" className="contact-info-text">
                  +39 353 480 8704
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="contact-info-item">
              <i className="fa-regular fa-envelope contact-info-icon"></i>
              <div className="contact-info-content">
                <span className="contact-info-label">E-mail</span>
                <a href="mailto:contact@nova-evoluzione.it" className="contact-info-text">
                  contact@nova-evoluzione.it
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="contact-info-item">
              <i className="fa-regular fa-comment-dots contact-info-icon"></i>
              <div className="contact-info-content">
                <span className="contact-info-label">WhatsApp</span>
                <a
                  href="https://wa.me/393534808704"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-text"
                >
                  Scrivici su WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Orari di apertura */}
          <h2 className="contact-section-title">Orari di apertura</h2>
          <table className="contact-hours-table">
            <tbody>
              <tr>
                <td className="contact-hours-day">Lunedì — venerdì</td>
                <td className="contact-hours-time">Dal lunedì al venerdì: 09:00 - 18:00</td>
              </tr>
              <tr>
                <td className="contact-hours-day">Sabato</td>
                <td className="contact-hours-time">Sabato: su appuntamento</td>
              </tr>
              <tr>
                <td className="contact-hours-day">Domenica</td>
                <td className="contact-hours-time">Chiuso</td>
              </tr>
            </tbody>
          </table>

          {/* Pulsante verde WhatsApp Banner */}
          <a
            href="https://wa.me/393534808704"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn-banner"
          >
            <i className="fa-brands fa-whatsapp"></i>
            <span>Scrivici su WhatsApp</span>
          </a>
        </aside>

        {/* COLONNA DESTRA: FORM DI CONTATTO */}
        <main>
          {isSubmitted ? (
            <div
              style={{
                backgroundColor: "#f0fdf4",
                border: "1px solid #bbf7d0",
                color: "#166534",
                padding: "24px",
                borderRadius: "12px",
                textAlign: "center",
              }}
            >
              <i
                className="fa-solid fa-circle-check"
                style={{ fontSize: "36px", marginBottom: "12px" }}
              ></i>
              <h3 style={{ margin: "0 0 8px 0" }}>Messaggio inviato con successo!</h3>
              <p style={{ margin: 0, fontSize: "14px" }}>
                Grazie per averci contattato. Ti risponderemo il prima possibile.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-grid-2">
                <div className="contact-form-group">
                  <label className="contact-label">
                    Nome e cognome <span className="contact-required">*</span>
                  </label>
                  <input
                    type="text"
                    name="nomPrenom"
                    value={formData.nomPrenom}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </div>

                <div className="contact-form-group">
                  <label className="contact-label">
                    E-mail <span className="contact-required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </div>
              </div>

              <div className="contact-form-group">
                <label className="contact-label">
                  Telefono <span className="contact-optional">(opzionale)</span>
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="contact-input"
                />
              </div>

              <div className="contact-form-group">
                <label className="contact-label">
                  Messaggio <span className="contact-required">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descrivi le tue esigenze di finanziamento..."
                  required
                  className="contact-textarea"
                />
              </div>

              <label className="contact-checkbox-label">
                <input
                  type="checkbox"
                  name="acceptPolitique"
                  checked={formData.acceptPolitique}
                  onChange={handleChange}
                  required
                />
                <span>
                  Ho letto e accetto l'{" "}
                  <a href="#">Informativa sulla Privacy</a> . Acconsento al trattamento dei miei dati per rispondere alla mia richiesta. <span className="contact-required">*</span>
                </span>
              </label>

              <button type="submit" className="contact-submit-btn">
                Invia messaggio
              </button>
            </form>
          )}
        </main>
      </div>
    </div>
  );
}