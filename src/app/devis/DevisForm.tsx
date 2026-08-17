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
  typeFinancement: "Prestito commerciale",
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

interface DevisFormProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function DevisForm({ step, setStep }: DevisFormProps) {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataState>(initialFormState);

  // Caricamento dal localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const { savedStep, data } = JSON.parse(saved);
        if (data) setFormData((prev) => ({ ...prev, ...data }));
        if (savedStep) setStep(savedStep);
      } catch (err) {
        console.error("Errore durante la lettura del localStorage", err);
      }
    }
  }, [setStep]);

  // Salvataggio automatico nel localStorage
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
      alert("Si prega di accettare i consensi obbligatori.");
      return;
    }

    console.log("Dati della richiesta da inviare:", formData);
    setIsSubmitted(true);
    localStorage.removeItem(STORAGE_KEY);
  };

  if (isSubmitted) {
    return (
      <div className="devis-success-card">
        <div className="devis-success-icon">
          <i className="fa-solid fa-check"></i>
        </div>
        <h2 className="devis-step-title">Richiesta inviata con successo!</h2>
        <p className="devis-step-desc">
          Abbiamo ricevuto le tue informazioni. Un consulente esaminerà la tua pratica e ti contatterà entro 24 ore.
        </p>
      </div>
    );
  }

  return (
    <main className="devis-form-card">
      {/* PASSO 1: PROGETTO */}
      {step === 1 && (
        <section>
          <h2 className="devis-step-title">Il tuo progetto</h2>
          <p className="devis-step-desc">
            Raccontaci del finanziamento che stai cercando.
          </p>

          <div className="devis-form-group">
            <label className="devis-label">
              Tipo di finanziamento <span className="devis-required">*</span>
            </label>
            <div className="devis-radio-grid">
              {[
                "Prestito commerciale",
                "Noleggio operativo / Leasing",
                "Factoring",
                "Finanziamento soci",
                "Credito non garantito",
                "Prestito di liquidità",
                "Finanziamento Start-up",
                "Altro",
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

          {/* SLIDER IMPORTO */}
          <div className="devis-form-group">
            <div className="devis-slider-header">
              <label className="devis-label" style={{ margin: 0 }}>
                Importo richiesto
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
              <span>5.000 €</span>
              <span>500.000 €</span>
            </div>
          </div>

          {/* SLIDER DURATA */}
          <div className="devis-form-group">
            <div className="devis-slider-header">
              <label className="devis-label" style={{ margin: 0 }}>
                Durata desiderata
              </label>
              <span className="devis-slider-value">
                {formData.duree} mesi
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
              <span>12 mesi</span>
              <span>120 mesi</span>
            </div>
          </div>

          {/* OBIETTIVO */}
          <div className="devis-form-group">
            <label className="devis-label">
              Obiettivo del finanziamento{" "}
              <span className="devis-optional">(opzionale)</span>
            </label>
            <textarea
              name="objectif"
              rows={3}
              value={formData.objectif}
              onChange={handleChange}
              placeholder="Descrivi brevemente a cosa servirà questo finanziamento..."
              className="devis-textarea"
            />
          </div>
        </section>
      )}

      {/* PASSO 2: AZIENDA */}
      {step === 2 && (
        <section>
          <h2 className="devis-step-title">
            I dati della tua azienda
          </h2>
          <p className="devis-step-desc">
            Informazioni sull'azienda richiedente
          </p>

          <div className="devis-form-group">
            <label className="devis-label">
              Ragione sociale / Nome azienda <span className="devis-required">*</span>
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
                Forma giuridica <span className="devis-required">*</span>
              </label>
              <select
                name="formeLegale"
                value={formData.formeLegale}
                onChange={handleChange}
                className="devis-select"
              >
                <option value="">Seleziona...</option>
                <option value="SRL">S.r.l. / S.r.l.s.</option>
                <option value="SPA">S.p.A.</option>
                <option value="SNC">S.n.c. / S.a.s.</option>
                <option value="Ditta Individuale">Ditta Individuale / Libero Prof.</option>
              </select>
            </div>

            <div className="devis-form-group">
              <label className="devis-label">
                Partita IVA <span className="devis-required">*</span>
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
              <label className="devis-label">Codice Fiscale</label>
              <input
                type="text"
                name="codeFiscal"
                value={formData.codeFiscal}
                onChange={handleChange}
                className="devis-input"
              />
            </div>

            <div className="devis-form-group">
              <label className="devis-label">Codice ATECO / NAF</label>
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
            <label className="devis-label">Fatturato annuo (EUR)</label>
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
              Sede legale <span className="devis-required">*</span>
            </label>
            <input
              type="text"
              name="siegeSocial"
              value={formData.siegeSocial}
              onChange={handleChange}
              placeholder="Via, civico, CAP, città, provincia"
              className="devis-input"
            />
          </div>
        </section>
      )}

      {/* PASSO 3: PERSONA DI CONTATTO */}
      {step === 3 && (
        <section>
          <h2 className="devis-step-title">
            Dati del referente di contatto
          </h2>
          <p className="devis-step-desc">
            La persona che gestisce la richiesta
          </p>

          <div className="devis-grid-2">
            <div className="devis-form-group">
              <label className="devis-label">
                Nome <span className="devis-required">*</span>
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
                Cognome <span className="devis-required">*</span>
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
              <label className="devis-label">Ruolo in azienda</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Titolare, amministratore..."
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
                Telefono <span className="devis-required">*</span>
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
              <label className="devis-label">Canale di contatto preferito</label>
              <select
                name="preferenceContact"
                value={formData.preferenceContact}
                onChange={handleChange}
                className="devis-select"
              >
                <option value="E-mail">E-mail</option>
                <option value="Telefono">Telefono</option>
                <option value="WhatsApp">WhatsApp</option>
              </select>
            </div>
          </div>
        </section>
      )}

      {/* PASSO 4: DOCUMENTI */}
      {step === 4 && (
        <section>
          <h2 className="devis-step-title">Documenti richiesti</h2>
          <p className="devis-step-desc">
            Carica i tuoi documenti giustificativi per velocizzare l'analisi della richiesta.
          </p>

          <div className="devis-dropzone">
            <div className="devis-dropzone-icon">
              <i className="fa-solid fa-cloud-arrow-up"></i>
            </div>
            <p className="devis-dropzone-text">
              Trascina qui i tuoi file oppure{" "}
              <span style={{ color: "#2563eb" }}>sfoglia</span>
            </p>
            <div className="devis-dropzone-subtext">
              Formati accettati: PDF, PNG, JPG (Max 10MB)
            </div>
          </div>
        </section>
      )}

      {/* PASSO 5: CONSENSI E RIEPILOGO */}
      {step === 5 && (
        <section>
          <h2 className="devis-step-title">Consensi e invio</h2>
          <p className="devis-step-desc">
            Si prega di leggere e accettare prima di inviare la richiesta.
          </p>

          {/* RIEPILOGO */}
          <div className="devis-summary-box">
            <div className="devis-summary-row">
              <span className="devis-summary-label">Prodotto</span>
              <span className="devis-summary-val">{formData.typeFinancement}</span>
            </div>
            <div className="devis-summary-row">
              <span className="devis-summary-label">Importo</span>
              <span className="devis-summary-val">
                {Number(formData.montant).toLocaleString()} €
              </span>
            </div>
            <div className="devis-summary-row">
              <span className="devis-summary-label">Durata</span>
              <span className="devis-summary-val">{formData.duree} mesi</span>
            </div>
            <div className="devis-summary-row">
              <span className="devis-summary-label">Azienda</span>
              <span className="devis-summary-val">{formData.nomEntreprise || "-"}</span>
            </div>
            <div className="devis-summary-row">
              <span className="devis-summary-label">Persona di contatto</span>
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
                Ho letto e accetto l'<a href="#">Informativa sulla privacy</a>. Acconsento al trattamento dei miei dati personali per la gestione della richiesta. <span className="devis-required">*</span>
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
                Ho letto e accetto i <a href="#">Termini e Condizioni</a> e la{" "}
                <a href="#">Politica di Trasparenza</a>. <span className="devis-required">*</span>
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
                Acconsento a ricevere comunicazioni commerciali e aggiornamenti sui prodotti. <span className="devis-optional">(opzionale)</span>
              </span>
            </label>
          </div>
        </section>
      )}

      {/* AZIONI / PULSANTI */}
      <div className="devis-actions">
        {step > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            className="devis-btn-back"
          >
            Indietro
          </button>
        )}

        {step < 5 ? (
          <button
            type="button"
            onClick={handleNext}
            className="devis-btn-next"
          >
            Continua
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="devis-btn-next"
          >
            Invia richiesta
          </button>
        )}
      </div>
    </main>
  );
}