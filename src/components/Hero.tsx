import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* COLONNE GAUCHE : TEXTE ET CALL TO ACTION */}
        <div className="hero-content">
          {/* BADGE PILULE */}
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Intermédiaire agréé FINMA — Genève, Suisse</span>
          </div>

          {/* TITRE PRINCIPAL */}
          <h1 className="hero-title">
            Financement professionnel <br />
            <span className="hero-title-highlight">pour votre entreprise</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="hero-description">
            Solutions de crédit sur mesure pour les PME, les indépendants et les
            entreprises individuelles. Devis gratuit et sans engagement sous 24h.
          </p>

          {/* BOUTONS D'ACTION */}
          <div className="hero-actions">
            <Link href="/devis" className="btn-hero-primary">
              Demander un devis gratuit
              <i className="fa-solid fa-chevron-right icon-arrow"></i>
            </Link>
            <Link href="/contact" className="btn-hero-secondary">
              Contact
            </Link>
          </div>
        </div>

        {/* COLONNE DROITE : IMAGE AVEC BORDURES ARRONDIES */}
        <div className="hero-image-wrapper">
          <Image
            src="/img/hero.jpg"
            alt="Financement professionnel Finova Suisse"
            width={600}
            height={420}
            className="hero-img"
            priority
          />
        </div>
      </div>
    </section>
  );
}