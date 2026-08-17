import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* COLONNA SINISTRA: TESTO E CALL TO ACTION */}
        <div className="hero-content">
          {/* BADGE A PILLOLA */}
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Intermediario autorizzato FINMA — Ginevra, Svizzera</span>
          </div>

          {/* TITOLO PRINCIPALE */}
          <h1 className="hero-title">
            Finanziamento professionale <br />
            <span className="hero-title-highlight">per la tua impresa</span>
          </h1>

          {/* DESCRIZIONE */}
          <p className="hero-description">
            Soluzioni di credito su misura per PMI, liberi professionisti e
            ditte individuali. Preventivo gratuito e senza impegno entro 24 ore.
          </p>

          {/* PULSANTI D'AZIONE */}
          <div className="hero-actions">
            <Link href="/devis" className="btn-hero-primary">
              Richiedi un preventivo gratuito
              <i className="fa-solid fa-chevron-right icon-arrow"></i>
            </Link>
            <Link href="/contact" className="btn-hero-secondary">
              Contatti
            </Link>
          </div>
        </div>

        {/* COLONNA DESTRA: IMMAGINE CON BORDI ARROTONDATI */}
        <div className="hero-image-wrapper">
          <Image
            src="/img/hero.jpg"
            alt="Finanziamento professionale Finova Suisse"
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
