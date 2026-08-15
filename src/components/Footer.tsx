import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* COLONNE 1 : BRAND & INFOS */}
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
            Solutions de financement professionnelles pour les PME, les travailleurs indépendants et les entreprises individuelles.
          </p>
          <span className="footer-badge">Intermédiaire financier — FINMA</span>
        </div>

        {/* COLONNE 2 : NAVIGATION */}
        <div className="footer-col">
          <h4 className="footer-title">NAVIGATION</h4>
          <ul className="footer-links">
            <li><Link href="/about">À propos</Link></li>
            <li><Link href="#solutions">Solutions</Link></li>
            <li><Link href="#process">Comment ça marche</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/loan">Simulateur de prêt</Link></li>
          </ul>
        </div>

        {/* COLONNE 3 : SERVICES */}
        <div className="footer-col">
          <h4 className="footer-title">SERVICES</h4>
          <ul className="footer-links">
            <li><Link href="/devis">Crédit Entreprise</Link></li>
            <li><Link href="#leasing">Leasing Équipement</Link></li>
            <li><Link href="#tresorerie">Trésorerie & Factures</Link></li>
            <li><Link href="#affacturage">Affacturage</Link></li>
            <li><Link href="#projets">Financement de Projet</Link></li>
          </ul>
        </div>

        {/* COLONNE 4 : CONTACTS */}
        <div className="footer-col">
          <h4 className="footer-title">CONTACTS</h4>
          <p className="contact-item">Rue du Rhône 42 — 1204 Genève, Suisse</p>
          <p className="contact-item">+41 22 123 45 67</p>
          <p className="contact-item">contact@finova-suisse.ch</p>
          <p className="contact-item highlight">Du lundi au vendredi : 8h00 - 18h00</p>
        </div>
      </div>

      {/* COPYRIGHT & MENTIONS LEGALES */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© 2026 Finova Suisse. Tous droits réservés.</p>
          <div className="legal-links">
            <Link href="#">Confidentialité</Link>
            <Link href="#">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}