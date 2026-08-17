"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const solutionsList = [
    { title: "Credito Aziendale", desc: "Finanziamento flessibile per le tue esigenze di liquidità", href: "#credit" },
    { title: "Leasing Strumentale", desc: "Finanzia macchinari e veicoli senza intaccare la liquidità", href: "#leasing" },
    { title: "Finanziamento Progetti", desc: "Per i tuoi grandi investimenti e progetti di sviluppo", href: "#projets" },
  ];

  const handleLinkClick = (name: string) => {
    setActiveLink(name);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      {/* 1. TOP BAR D'INFORMAZIONE */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-left">
            <span>
              <i className="fa-solid fa-location-dot"></i> Rue du Rhône 42 — 1204 Ginevra, Svizzera
            </span>
            <span>
              <i className="fa-regular fa-clock"></i> Lun - Ven: 08:00 - 18:00
            </span>
          </div>
          <div className="top-bar-right">
            <a href="tel:+41221234567">
              <i className="fa-solid fa-phone"></i> +41 22 123 45 67
            </a>
            <a href="mailto:contact@finova-suisse.ch">
              <i className="fa-regular fa-envelope"></i> contact@finova-suisse.ch
            </a>
            <span className="badge-finma">Intermediario autorizzato FINMA</span>
          </div>
        </div>
      </div>

      {/* 2. NAVIGAZIONE PRINCIPALE */}
      <nav className="main-nav">
        <div className="nav-container">
          {/* LOGO */}
          <Link href="/" className="logo-link" onClick={() => setActiveLink("Home")}>
            <Image
              src="/img/logo.png"
              alt="Finova Suisse Logo"
              width={160}
              height={50}
              className="logo-img"
              priority
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="nav-links">
            <li>
              <Link
                href="/"
                className={`nav-item ${activeLink === "Home" ? "active" : ""}`}
                onClick={() => handleLinkClick("Home")}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className={`nav-item ${activeLink === "Chi siamo" ? "active" : ""}`}
                onClick={() => handleLinkClick("Chi siamo")}
              >
                Chi siamo
              </Link>
            </li>

            <li>
              <Link
                href="#solutions"
                className={`nav-item ${activeLink === "Soluzioni" ? "active" : ""}`}
                onClick={() => handleLinkClick("Soluzioni")}
              >
                Soluzioni
              </Link>
            </li>

            <li>
              <Link
                href="#process"
                className={`nav-item ${activeLink === "Come funziona" ? "active" : ""}`}
                onClick={() => handleLinkClick("Come funziona")}
              >
                Come funciona
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={`nav-item ${activeLink === "Contatti" ? "active" : ""}`}
                onClick={() => handleLinkClick("Contatti")}
              >
                Contatti
              </Link>
            </li>
          </ul>

          {/* PULSANTI D'AZIONE (DESKTOP) */}
          <div className="nav-actions">
            <Link href="/loan" className="btn-secondary">
              Simulatore
            </Link>
            <Link href="/devis" className="btn-primary">
              Richiedi un finanziamento
            </Link>
          </div>

          {/* PULSANTE HAMBURGER (MOBILE) */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>

        {/* MENU MOBILE INTERATTIVO */}
        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          <ul className="mobile-links">
            <li>
              <Link
                href="/"
                className={`mobile-item ${activeLink === "Home" ? "active" : ""}`}
                onClick={() => handleLinkClick("Home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`mobile-item ${activeLink === "Chi siamo" ? "active" : ""}`}
                onClick={() => handleLinkClick("Chi siamo")}
              >
                Chi siamo
              </Link>
            </li>

            <li>
              <Link
                href="#solutions"
                className={`mobile-item ${activeLink === "Soluzioni" ? "active" : ""}`}
                onClick={() => handleLinkClick("Soluzioni")}
              >
                Soluzioni
              </Link>
            </li>

            <li>
              <Link
                href="#process"
                className={`mobile-item ${activeLink === "Come funciona" ? "active" : ""}`}
                onClick={() => handleLinkClick("Come funciona")}
              >
                Come funziona
              </Link>
            </li>
            
            <li>
              <Link
                href="/contact"
                className={`mobile-item ${activeLink === "Contatti" ? "active" : ""}`}
                onClick={() => handleLinkClick("Contatti")}
              >
                Contatti
              </Link>
            </li>
          </ul>

          <div className="mobile-actions">
            <Link
              href="/loan"
              className="btn-secondary w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Simulatore
            </Link>
            <Link
              href="/devis"
              className="btn-primary w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Richiedi un finanziamento
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}