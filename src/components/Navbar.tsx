"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Accueil");

  const solutionsList = [
    { title: "Crédit Entreprise", desc: "Financement flexible pour vos besoins de trésorerie", href: "#credit" },
    { title: "Leasing Équipement", desc: "Financez vos machines et véhicules sans impacter vos fonds", href: "#leasing" },
    { title: "Financement de Projet", desc: "Pour vos investissements lourds et développements", href: "#projets" },
  ];

  const handleLinkClick = (name: string) => {
    setActiveLink(name);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      {/* 1. TOP BAR D'INFORMATION (Inspirée de la capture) */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-left">
            <span>
              <i className="fa-solid fa-location-dot"></i> Rue du Rhône 42 — 1204 Genève, Suisse
            </span>
            <span>
              <i className="fa-regular fa-clock"></i> Lu - Ve : 08h00 - 18h00
            </span>
          </div>
          <div className="top-bar-right">
            <a href="tel:+41221234567">
              <i className="fa-solid fa-phone"></i> +41 22 123 45 67
            </a>
            <a href="mailto:contact@finova-suisse.ch">
              <i className="fa-regular fa-envelope"></i> contact@finova-suisse.ch
            </a>
            <span className="badge-finma">Intermédiaire agréé FINMA</span>
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION PRINCIPALE */}
      <nav className="main-nav">
        <div className="nav-container">
          {/* LOGO */}
          <Link href="/" className="logo-link" onClick={() => setActiveLink("Accueil")}>
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
                className={`nav-item ${activeLink === "Accueil" ? "active" : ""}`}
                onClick={() => handleLinkClick("Accueil")}
              >
                Accueil
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className={`nav-item ${activeLink === "À propos" ? "active" : ""}`}
                onClick={() => handleLinkClick("À propos")}
              >
                À propos
              </Link>
            </li>

            <li>
              <Link
                href="#solutions"
                className={`nav-item ${activeLink === "À propos" ? "active" : ""}`}
                onClick={() => handleLinkClick("À propos")}
              >
                Solutions
              </Link>
            </li>

           

            <li>
              <Link
                href="#process"
                className={`nav-item ${activeLink === "Comment ça marche" ? "active" : ""}`}
                onClick={() => handleLinkClick("Comment ça marche")}
              >
                Comment ça marche
              </Link>
            </li>

          

           

            <li>
              <Link
                href="/contact"
                className={`nav-item ${activeLink === "Contact" ? "active" : ""}`}
                onClick={() => handleLinkClick("Contact")}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* BOUTONS D'ACTION (DESKTOP) */}
          <div className="nav-actions">
            <Link href="/loan" className="btn-secondary">
              Simulateur
            </Link>
            <Link href="/devis" className="btn-primary">
              Demander un financement
            </Link>
          </div>

          {/* BOUTON HAMBURGER (MOBILE) */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>

        {/* MENU MOBILE INTERACTIF ET ANIMÉ */}
        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          <ul className="mobile-links">
            <li>
              <Link
                href="/"
                className={`mobile-item ${activeLink === "Accueil" ? "active" : ""}`}
                onClick={() => handleLinkClick("Accueil")}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`mobile-item ${activeLink === "À propos" ? "active" : ""}`}
                onClick={() => handleLinkClick("À propos")}
              >
                À propos
              </Link>
            </li>

           <li>
              <Link
                href="#solutions"
                className={`nav-item ${activeLink === "À propos" ? "active" : ""}`}
                onClick={() => handleLinkClick("À propos")}
              >
                Solutions
              </Link>
            </li>

            <li>
              <Link
                href="#process"
                className={`mobile-item ${activeLink === "Comment ça marche" ? "active" : ""}`}
                onClick={() => handleLinkClick("Comment ça marche")}
              >
                Comment ça marche
              </Link>
            </li>
           
            
            <li>

              <Link
                href="/contact"
                className={`mobile-item ${activeLink === "Contact" ? "active" : ""}`}
                onClick={() => handleLinkClick("Contact")}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="mobile-actions">
            <Link
              href="/loan"
              className="btn-secondary w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Simulateur
            </Link>
            <Link
              href="/devis"
              className="btn-primary w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Demander un financement
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}