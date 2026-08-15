"use client";

import React from "react";

export default function AproposPage() {
  return (
    <div>
      {/* BANNIÈRE / HEADER */}
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-breadcrumb">
            <a href="/">Maison</a>
            <span>/</span>
            <strong>Qui sommes-nous ?</strong>
          </div>
          <div className="about-tagline">PROFESSIONNELS DU CRÉDIT</div>
          <h1 className="about-hero-title">Qui sommes-nous ?</h1>
          <p className="about-hero-subtitle">
            Des professionnels du crédit à votre service, à Turin et dans toute l'Italie.
          </p>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <div className="about-container">
        {/* SECTION 1 : MISSION & POURQUOI NOUS CHOISIR */}
        <section className="about-mission-grid">
          <div className="about-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
              alt="Poignée de main professionnelle"
              className="about-img-main"
            />
           
          </div>

          <div>
            <h2 className="about-section-h2">Notre mission</h2>
            <p className="about-paragraph">
              Nova Evoluzione est née avec un objectif précis : rendre le crédit professionnel accessible à tous les entrepreneurs, indépendants et petites entreprises qui en ont besoin, sans les complexités bureaucratiques qui freinent souvent leur croissance.
            </p>
            <p className="about-paragraph">
              En tant qu'agents financiers inscrits à l'OAM, nous agissons comme intermédiaires entre les entreprises et un réseau sélect d'institutions financières et bancaires, garantissant transparence, professionnalisme et un avantage client maximal.
            </p>

            <h2 className="about-section-h2" style={{ marginTop: "32px" }}>
              Pourquoi nous choisir ?
            </h2>
            <ul className="about-why-list">
              <li className="about-why-item">
                <strong>Accès à plus de 20 établissements partenaires :</strong> trouvez les meilleures conditions pour votre situation
              </li>
              <li className="about-why-item">
                <strong>Aucun frais initial :</strong> nous sommes rémunérés par des partenaires financiers, et non par les clients.
              </li>
              <li className="about-why-item">
                <strong>Processus 100 % numérique :</strong> de la demande à la livraison, sans déplacement.
              </li>
              <li className="about-why-item">
                <strong>Réponse garantie sous 24 heures ouvrables</strong> à compter de la réception du dossier complet
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* SECTION 2 : CE QUI NOUS DISTINGUE (Cartes) */}
      <section className="about-values-section">
        <div className="about-values-header">
          <div className="about-tagline" style={{ textAlign: "center" }}>
            NOS VALEURS
          </div>
          <h2 className="about-hero-title" style={{ color: "#0f172a" }}>
            Ce qui nous distingue
          </h2>
        </div>

        <div className="about-values-grid">
          {/* Carte 1 */}
          <div className="about-value-card">
            <img
              src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
              alt="Transparence"
              className="about-value-card-img"
            />
            <div className="about-value-card-content">
              <h3 className="about-value-card-title">Transparence</h3>
              <p className="about-value-card-text">
                Aucun frais caché, aucune surprise. Toutes les conditions sont expliquées avant tout engagement.
              </p>
            </div>
          </div>

          {/* Carte 2 */}
          <div className="about-value-card">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
              alt="Professionnalisme"
              className="about-value-card-img"
            />
            <div className="about-value-card-content">
              <h3 className="about-value-card-title">Professionnalisme</h3>
              <p className="about-value-card-text">
                Des années d'expérience dans le secteur du crédit italien. Nous connaissons le marché et ses règles.
              </p>
            </div>
          </div>

          {/* Carte 3 */}
          <div className="about-value-card">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
              alt="Orientation"
              className="about-value-card-img"
            />
            <div className="about-value-card-content">
              <h3 className="about-value-card-title">Orientation</h3>
              <p className="about-value-card-text">
                Nous ne vendons pas de produits, nous créons des solutions. Votre objectif financier est au cœur de chaque consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 : DONNÉES ET RECRUTEMENT */}
      <div className="about-container" style={{ paddingTop: 0 }}>
        <div className="about-company-grid">
          <div className="about-company-left">
            {/* Tableau données entreprise */}
            <div className="about-data-card">
              <h3 className="about-data-title">Données de l'entreprise</h3>
              <table className="about-data-table">
                <tbody>
                  <tr>
                    <td className="about-data-label">Nom</td>
                    <td className="about-data-val">Nouvelle évolution</td>
                  </tr>
                  <tr>
                    <td className="about-data-label">Qualification</td>
                    <td className="about-data-val">agent financier</td>
                  </tr>
                  <tr>
                    <td className="about-data-label">Registre OAM</td>
                    <td className="about-data-val">
                      Dans le cadre du processus d'inscription
                    </td>
                  </tr>
                  <tr>
                    <td className="about-data-label">Site</td>
                    <td className="about-data-val">
                      Via San Francesco da Paola, 8<br />10121 Turin (TO)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Carte Recrutement */}
            <div className="about-work-card">
              <h3 className="about-work-title">Travaillez avec nous</h3>
              <p className="about-work-text">
                Nous sommes toujours à la recherche de professionnels de la finance motivés et qualifiés.
              </p>
              <a href="/contact" className="about-work-link">
                <span>Contactez-nous</span>
                <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
          </div>

          {/* Image Graphique / Analytics à droite */}
          <div>
            <img
              src="/img/proof.avif"
              alt="Statistiques et graphiques"
              className="about-right-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}