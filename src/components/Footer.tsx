import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* COLONNA 1: BRAND & INFO */}
        <div className="footer-col brand-col">
          <Link href="/" className="footer-logo">
            <Image
              src="/img/logo.png"
              alt="Finova Suisse Logo"
              width={150}
              height={70}
            />
          </Link>
          <p className="footer-desc">
            Soluzioni di finanziamento professionali per PMI, liberi professionisti e ditte individuali.
          </p>
          <span className="footer-badge">Intermediario finanziario — FINMA</span>
        </div>

        {/* COLONNA 2: NAVIGAZIONE */}
        <div className="footer-col">
          <h4 className="footer-title">NAVIGAZIONE</h4>
          <ul className="footer-links">
            <li><Link href="/about">Chi siamo</Link></li>
            <li><Link href="#solutions">Soluzioni</Link></li>
            <li><Link href="#process">Come funziona</Link></li>
            <li><Link href="/contact">Contatti</Link></li>
            <li><Link href="/loan">Calcolatore di prestito</Link></li>
          </ul>
        </div>

        {/* COLONNA 3: SERVIZI */}
        <div className="footer-col">
          <h4 className="footer-title">SERVIZI</h4>
          <ul className="footer-links">
            <li><Link href="/devis">Credito Aziendale</Link></li>
            <li><Link href="#leasing">Leasing Strumentale</Link></li>
            <li><Link href="#tresorerie">Liquidità & Fatture</Link></li>
            <li><Link href="#affacturage">Factoring</Link></li>
            <li><Link href="#projets">Finanziamento Progetti</Link></li>
          </ul>
        </div>

        {/* COLONNA 4: CONTATTI */}
        <div className="footer-col">
          <h4 className="footer-title">CONTATTI</h4>
          <p className="contact-item">Rue du Rhône 42 — 1204 Ginevra, Svizzera</p>
          <p className="contact-item">+41 22 123 45 67</p>
          <p className="contact-item">contact@finova-suisse.ch</p>
          <p className="contact-item highlight">Dal lunedì al venerdì: 08:00 - 18:00</p>
        </div>
      </div>

      {/* COPYRIGHT & NOTE LEGALI */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© 2026 Finova Suisse. Tutti i diritti riservati.</p>
          <div className="legal-links">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Note legali</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}