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
      alert("Veuillez accepter la politique de confidentialité.");
      return;
    }

    console.log("Message de contact envoyé :", formData);
    setIsSubmitted(true);
  };

  return (
    <div>
      {/* BANNIÈRE / HEADER */}
      <section className="contact-hero">
        <div className="contact-hero-container">
          <div className="contact-breadcrumb">
            <a href="/">Maison</a>
            <span>/</span>
            <strong>Contacts</strong>
          </div>
          <div className="contact-tagline">NOUS SOMMES LÀ POUR VOUS</div>
          <h1 className="contact-hero-title">Contacts</h1>
          <p className="contact-hero-subtitle">
            Nous sommes à votre disposition pour toute information.
          </p>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <div className="contact-main">
        {/* COLONNE GAUCHE : INFOS DE CONTACT & HORAIRES */}
        <aside>
          <h2 className="contact-section-title">Comment nous contacter</h2>
          
          <div className="contact-info-list">
            {/* Adresse */}
            <div className="contact-info-item">
              <i className="fa-solid fa-location-dot contact-info-icon"></i>
              <div className="contact-info-content">
                <span className="contact-info-label">Site</span>
                <span className="contact-info-text">
                  Via San Francesco da Paola, 8 — 10121 Turin (TO), Piémont, Italie
                </span>
              </div>
            </div>

            {/* Téléphone */}
            <div className="contact-info-item">
              <i className="fa-solid fa-phone contact-info-icon"></i>
              <div className="contact-info-content">
                <span className="contact-info-label">Téléphone</span>
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
                  Écrivez-nous sur WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Horaires d'ouverture */}
          <h2 className="contact-section-title">Horaires d'ouverture</h2>
          <table className="contact-hours-table">
            <tbody>
              <tr>
                <td className="contact-hours-day">Lundi — vendredi</td>
                <td className="contact-hours-time">Du lundi au vendredi : 9h00 - 18h00</td>
              </tr>
              <tr>
                <td className="contact-hours-day">Samedi</td>
                <td className="contact-hours-time">Samedi : sur rendez-vous</td>
              </tr>
              <tr>
                <td className="contact-hours-day">Dimanche</td>
                <td className="contact-hours-time">Fermé</td>
              </tr>
            </tbody>
          </table>

          {/* Bouton vert WhatsApp Banner */}
          <a
            href="https://wa.me/393534808704"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn-banner"
          >
            <i className="fa-brands fa-whatsapp"></i>
            <span>Écrivez-nous sur WhatsApp</span>
          </a>
        </aside>

        {/* COLONNE DROITE : FORMULAIRE DE CONTACT */}
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
              <h3 style={{ margin: "0 0 8px 0" }}>Message envoyé avec succès !</h3>
              <p style={{ margin: 0, fontSize: "14px" }}>
                Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-grid-2">
                <div className="contact-form-group">
                  <label className="contact-label">
                    Nom et prénom <span className="contact-required">*</span>
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
                  Téléphone <span className="contact-optional">(facultatif)</span>
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
                  Message <span className="contact-required">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez vos besoins de financement..."
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
                  J'ai lu et j'accepte la{" "}
                  <a href="#">Politique de confidentialité</a> . Je consens au traitement de mes données afin de répondre à ma demande. <span className="contact-required">*</span>
                </span>
              </label>

              <button type="submit" className="contact-submit-btn">
                Envoyer un message
              </button>
            </form>
          )}
        </main>
      </div>
    </div>
  );
}