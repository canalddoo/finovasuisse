"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

const STORAGE_KEY = "devis_form_data";

interface FormDataState {
  typeFinancement: string;
  montant: number;
  duree: number;
  objectif: string;
  nomEntreprise: string;
  formeLegale: string;
  numeroTVA: string;
  codeFiscal: string;
  codeATECO: string;
  chiffreAffaires: string;
  siegeSocial: string;
  prenom: string;
  nom: string;
  role: string;
  email: string;
  telephone: string;
  preferenceContact: string;
  acceptPolitique: boolean;
  acceptConditions: boolean;
  acceptMarketing: boolean;
}

const initialFormState: FormDataState = {
  typeFinancement: "Prêt commercial",
  montant: 50000,
  duree: 60,
  objectif: "",
  nomEntreprise: "",
  formeLegale: "",
  numeroTVA: "",
  codeFiscal: "",
  codeATECO: "",
  chiffreAffaires: "",
  siegeSocial: "",
  prenom: "",
  nom: "",
  role: "",
  email: "",
  telephone: "",
  preferenceContact: "E-mail",
  acceptPolitique: false,
  acceptConditions: false,
  acceptMarketing: false,
};

export default function DevisPage() {
  const [step, setStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataState>(initialFormState);

  // Charger depuis le localStorage au montage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const { savedStep, data } = JSON.parse(saved);
        if (data) setFormData((prev) => ({ ...prev, ...data }));
        if (savedStep) setStep(savedStep);
      } catch (err) {
        console.error("Erreur lors de la lecture du localStorage", err);
      }
    }
  }, []);

  // Sauvegarder automatiquement dans le localStorage
  useEffect(() => {
    if (!isSubmitted) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ savedStep: step, data: formData })
      );
    }
  }, [formData, step, isSubmitted]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 5));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.acceptPolitique || !formData.acceptConditions) {
      alert("Veuillez accepter les consentements obligatoires.");
      return;
    }

    console.log("Données du devis à envoyer :", formData);
    setIsSubmitted(true);
    localStorage.removeItem(STORAGE_KEY);
  };

  if (isSubmitted) {
    return (
      <div className="devis-success-card">
        <div className="devis-success-icon">
          <i className="fa-solid fa-check"></i>
        </div>
        <h2 className="devis-step-title">Demande envoyée avec succès !</h2>
        <p className="devis-step-desc">
          Nous avons bien reçu vos informations. Un conseiller étudiera votre dossier et vous contactera sous 24h.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* HEADER BANNER */}
      <header className="devis-header">
        <div className="devis-header-container">
          <span className="devis-badge">Gratuit – Sans obligation</span>
          <h1 className="devis-title">Demandez votre devis</h1>
          <p className="devis-subtitle">
            Remplissez le formulaire en quelques minutes seulement. C'est gratuit et sans engagement.
          </p>

          {/* STEPPER */}
          <nav className="devis-stepper">
            {[
              { id: 1, label: "Projet" },
              { id: 2, label: "Agence" },
              { id: 3, label: "Personne de contact" },
              { id: 4, label: "Documents" },
              { id: 5, label: "Consentements" },
            ].map((s) => {
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

      {/* CONTENU PRINCIPAL */}
      <div className="devis-layout">
        {/* SIDEBAR GAUCHE */}
        <aside className="devis-sidebar">
          <div className="devis-card">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
              alt="Pourquoi nous choisir"
              className="devis-card-img"
            />
            <h3 className="devis-card-title">Pourquoi nous choisir ?</h3>
            <ul className="devis-feature-list">
              <li className="devis-feature-item">
                <i className="fa-solid fa-check"></i> Aucun frais initial
              </li>
              <li className="devis-feature-item">
                <i className="fa-solid fa-check"></i> Réponse garantie sous 24 heures
              </li>
              <li className="devis-feature-item">
                <i className="fa-solid fa-check"></i> Plus de 20 institutions partenaires
              </li>
              <li className="devis-feature-item">
                <i className="fa-solid fa-check"></i> Processus 100% numérique
              </li>
              <li className="devis-feature-item">
                <i className="fa-solid fa-check"></i> Opérateur OAM enregistré
              </li>
            </ul>
          </div>

          <div className="devis-card devis-card-assistance">
            <span className="devis-assistance-badge">Assistance</span>
            <p className="devis-assistance-text">
              Besoin d'aide ? Appelez-nous gratuitement.
            </p>
            <a href="tel:+393534808704" className="devis-phone-link">
              <i className="fa-solid fa-phone"></i>
              <span>+39 353 480 8704</span>
            </a>
            <div className="devis-assistance-hours">
              Du lundi au vendredi : 9h00 - 18h00
            </div>
          </div>

          <div className="devis-card devis-card-rating">
            <div className="devis-rating-val">98%</div>
            <div className="devis-rating-label">clients satisfaits</div>
            <div className="devis-rating-stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </aside>

        {/* CONTENU FORMULAIRE */}
        <main className="devis-form-card">
          {/* ÉTAPE 1 : PROJET */}
          {step === 1 && (
            <section>
              <h2 className="devis-step-title">Votre projet</h2>
              <p className="devis-step-desc">
                Parlez-nous du financement que vous recherchez.
              </p>

              <div className="devis-form-group">
                <label className="devis-label">
                  Type de financement <span className="devis-required">*</span>
                </label>
                <div className="devis-radio-grid">
                  {[
                    "Prêt commercial",
                    "Location de matériel",
                    "Affacturage",
                    "Financement par les membres",
                    "Crédit non garanti",
                    "Prêt de liquidités",
                    "Financement de start-up",
                    "Autre",
                  ].map((type) => (
                    <label
                      key={type}
                      className={`devis-radio-card ${
                        formData.typeFinancement === type ? "selected" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="typeFinancement"
                        value={type}
                        checked={formData.typeFinancement === type}
                        onChange={handleChange}
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* SLIDER MONTANT */}
              <div className="devis-form-group">
                <div className="devis-slider-header">
                  <label className="devis-label" style={{ margin: 0 }}>
                    Montant demandé
                  </label>
                  <span className="devis-slider-value">
                    {Number(formData.montant).toLocaleString()} €
                  </span>
                </div>
                <input
                  type="range"
                  name="montant"
                  min="5000"
                  max="500000"
                  step="5000"
                  value={formData.montant}
                  onChange={handleChange}
                  className="devis-range-input"
                />
                <div className="devis-slider-labels">
                  <span>5 000 €</span>
                  <span>500 000 €</span>
                </div>
              </div>

              {/* SLIDER DUREE */}
              <div className="devis-form-group">
                <div className="devis-slider-header">
                  <label className="devis-label" style={{ margin: 0 }}>
                    Durée souhaitée
                  </label>
                  <span className="devis-slider-value">
                    {formData.duree} mois
                  </span>
                </div>
                <input
                  type="range"
                  name="duree"
                  min="12"
                  max="120"
                  step="6"
                  value={formData.duree}
                  onChange={handleChange}
                  className="devis-range-input"
                />
                <div className="devis-slider-labels">
                  <span>12 mois</span>
                  <span>120 mois</span>
                </div>
              </div>

              {/* OBJECTIF */}
              <div className="devis-form-group">
                <label className="devis-label">
                  Objectif du financement{" "}
                  <span className="devis-optional">(facultatif)</span>
                </label>
                <textarea
                  name="objectif"
                  rows={3}
                  value={formData.objectif}
                  onChange={handleChange}
                  placeholder="Veuillez décrire brièvement à quoi sert ce financement..."
                  className="devis-textarea"
                />
              </div>
            </section>
          )}

          {/* ÉTAPE 2 : AGENCE / ENTREPRISE */}
          {step === 2 && (
            <section>
              <h2 className="devis-step-title">
                Les données de votre entreprise
              </h2>
              <p className="devis-step-desc">
                Informations sur l'entreprise candidate
              </p>

              <div className="devis-form-group">
                <label className="devis-label">
                  Nom de l'entreprise <span className="devis-required">*</span>
                </label>
                <input
                  type="text"
                  name="nomEntreprise"
                  value={formData.nomEntreprise}
                  onChange={handleChange}
                  className="devis-input"
                />
              </div>

              <div className="devis-grid-2">
                <div className="devis-form-group">
                  <label className="devis-label">
                    Forme légale <span className="devis-required">*</span>
                  </label>
                  <select
                    name="formeLegale"
                    value={formData.formeLegale}
                    onChange={handleChange}
                    className="devis-select"
                  >
                    <option value="">Sélectionner...</option>
                    <option value="SARL">SARL / EURL</option>
                    <option value="SAS">SAS / SASU</option>
                    <option value="SA">SA</option>
                    <option value="Auto-entrepreneur">Auto-entrepreneur</option>
                  </select>
                </div>

                <div className="devis-form-group">
                  <label className="devis-label">
                    Numéro de TVA <span className="devis-required">*</span>
                  </label>
                  <input
                    type="text"
                    name="numeroTVA"
                    value={formData.numeroTVA}
                    onChange={handleChange}
                    className="devis-input"
                  />
                </div>
              </div>

              <div className="devis-grid-2">
                <div className="devis-form-group">
                  <label className="devis-label">
                    Code d'identification fiscale
                  </label>
                  <input
                    type="text"
                    name="codeFiscal"
                    value={formData.codeFiscal}
                    onChange={handleChange}
                    className="devis-input"
                  />
                </div>

                <div className="devis-form-group">
                  <label className="devis-label">Code ATECO / NAF</label>
                  <input
                    type="text"
                    name="codeATECO"
                    value={formData.codeATECO}
                    onChange={handleChange}
                    className="devis-input"
                  />
                </div>
              </div>

              <div className="devis-form-group">
                <label className="devis-label">
                  Chiffre d'affaires annuel (EUR)
                </label>
                <input
                  type="number"
                  name="chiffreAffaires"
                  value={formData.chiffreAffaires}
                  onChange={handleChange}
                  className="devis-input"
                />
              </div>

              <div className="devis-form-group">
                <label className="devis-label">
                  Siège social <span className="devis-required">*</span>
                </label>
                <input
                  type="text"
                  name="siegeSocial"
                  value={formData.siegeSocial}
                  onChange={handleChange}
                  placeholder="Rue, numéro de maison, code postal, ville (province)"
                  className="devis-input"
                />
              </div>
            </section>
          )}

          {/* ÉTAPE 3 : PERSONNE DE CONTACT */}
          {step === 3 && (
            <section>
              <h2 className="devis-step-title">
                Données de la personne de contact
              </h2>
              <p className="devis-step-desc">
                La personne qui gère le cabinet
              </p>

              <div className="devis-grid-2">
                <div className="devis-form-group">
                  <label className="devis-label">
                    Nom <span className="devis-required">*</span>
                  </label>
                  <input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    className="devis-input"
                  />
                </div>

                <div className="devis-form-group">
                  <label className="devis-label">
                    Nom de famille <span className="devis-required">*</span>
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className="devis-input"
                  />
                </div>
              </div>

              <div className="devis-grid-2">
                <div className="devis-form-group">
                  <label className="devis-label">
                    Rôle au sein de l'entreprise
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Propriétaire, administrateur..."
                    className="devis-input"
                  />
                </div>

                <div className="devis-form-group">
                  <label className="devis-label">
                    E-mail <span className="devis-required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="devis-input"
                  />
                </div>
              </div>

              <div className="devis-grid-2">
                <div className="devis-form-group">
                  <label className="devis-label">
                    Téléphone <span className="devis-required">*</span>
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="devis-input"
                  />
                </div>

                <div className="devis-form-group">
                  <label className="devis-label">Préférence de contact</label>
                  <select
                    name="preferenceContact"
                    value={formData.preferenceContact}
                    onChange={handleChange}
                    className="devis-select"
                  >
                    <option value="E-mail">E-mail</option>
                    <option value="Téléphone">Téléphone</option>
                    <option value="WhatsApp">WhatsApp</option>
                  </select>
                </div>
              </div>
            </section>
          )}

          {/* ÉTAPE 4 : DOCUMENTS */}
          {step === 4 && (
            <section>
              <h2 className="devis-step-title">Documents requis</h2>
              <p className="devis-step-desc">
                Téléversez vos pièces justificatives pour accélérer l'analyse de votre demande.
              </p>

              <div className="devis-dropzone">
                <div className="devis-dropzone-icon">
                  <i className="fa-solid fa-cloud-arrow-up"></i>
                </div>
                <p className="devis-dropzone-text">
                  Glissez-déposez vos fichiers ici ou{" "}
                  <span style={{ color: "#2563eb" }}>parcourez</span>
                </p>
                <div className="devis-dropzone-subtext">
                  Formats acceptés : PDF, PNG, JPG (Max 10Mo)
                </div>
              </div>
            </section>
          )}

          {/* ÉTAPE 5 : CONSENTEMENTS & RECAPITULATIF */}
          {step === 5 && (
            <section>
              <h2 className="devis-step-title">Consentements et envoi</h2>
              <p className="devis-step-desc">
                Veuillez lire et accepter avant d'envoyer la demande.
              </p>

              {/* RÉCAPITULATIF */}
              <div className="devis-summary-box">
                <div className="devis-summary-row">
                  <span className="devis-summary-label">Produit</span>
                  <span className="devis-summary-val">{formData.typeFinancement}</span>
                </div>
                <div className="devis-summary-row">
                  <span className="devis-summary-label">Montant</span>
                  <span className="devis-summary-val">
                    {Number(formData.montant).toLocaleString()} €
                  </span>
                </div>
                <div className="devis-summary-row">
                  <span className="devis-summary-label">Durée</span>
                  <span className="devis-summary-val">{formData.duree} mois</span>
                </div>
                <div className="devis-summary-row">
                  <span className="devis-summary-label">Entreprise</span>
                  <span className="devis-summary-val">{formData.nomEntreprise || "-"}</span>
                </div>
                <div className="devis-summary-row">
                  <span className="devis-summary-label">Personne de contact</span>
                  <span className="devis-summary-val">
                    {formData.prenom} {formData.nom}
                  </span>
                </div>
              </div>

              {/* CHECKBOXES */}
              <div className="devis-checkbox-group">
                <label className="devis-checkbox-label">
                  <input
                    type="checkbox"
                    name="acceptPolitique"
                    checked={formData.acceptPolitique}
                    onChange={handleChange}
                  />
                  <span>
                    J'ai lu et j'accepte la{" "}
                    <a href="#">Politique de confidentialité</a>. Je consens au traitement de mes données personnelles aux fins du traitement de ma demande. <span className="devis-required">*</span>
                  </span>
                </label>

                <label className="devis-checkbox-label">
                  <input
                    type="checkbox"
                    name="acceptConditions"
                    checked={formData.acceptConditions}
                    onChange={handleChange}
                  />
                  <span>
                    J'ai lu et j'accepte les{" "}
                    <a href="#">conditions générales</a> et la{" "}
                    <a href="#">politique de transparence</a>. <span className="devis-required">*</span>
                  </span>
                </label>

                <label className="devis-checkbox-label">
                  <input
                    type="checkbox"
                    name="acceptMarketing"
                    checked={formData.acceptMarketing}
                    onChange={handleChange}
                  />
                  <span>
                    J'accepte de recevoir des communications commerciales et des mises à jour de produits. <span className="devis-optional">(facultatif)</span>
                  </span>
                </label>
              </div>
            </section>
          )}

          {/* ACTIONS / BOUTONS */}
          <div className="devis-actions">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="devis-btn-back"
              >
                En arrière
              </button>
            )}

            {step < 5 ? (
              <button
                type="button"
                onClick={handleNext}
                className="devis-btn-next"
              >
                Continue
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="devis-btn-next"
              >
                Envoyer une requête
              </button>
            )}
          </div>
        </main>
      </div>

      <div className="devis-footer-note">
        Données protégées — Sans engagement — Devis gratuit
      </div>
    </div>
  );
}