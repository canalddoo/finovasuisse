"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  rating: number;
  quote: string;
  name: string;
  company: string;
  city: string;
  avatar: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    quote:
      "« J'ai recommandé Nova Evoluzione à plusieurs de mes clients pour le financement de leurs entreprises. À chaque fois, j'ai été impressionné par le soin qu'ils apportent au traitement de chaque dossier et par leur connaissance du marché. »",
    name: "Giulia Marchetti",
    company: "Marchetti & Associés",
    city: "Milan",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 2,
    rating: 5,
    quote:
      "Je cherchais une solution pour financer l'expansion de mon cabinet d'avocats. Nova Evoluzione m'a trouvé un prêt hypothécaire à des conditions excellentes en un temps record. Je les recommande vivement à tous.",
    name: "Carla Romano",
    company: "Studio Romano & Partners",
    city: "Rome",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 3,
    rating: 5,
    quote:
      "Après une période difficile, nous avions besoin de liquidités pour rénover nos locaux. L'équipe de Nova Evoluzione nous a accompagnés à chaque étape en trouvant le produit idéal pour nos besoins.",
    name: "Francesco Vito",
    company: "Restaurant Il Vecchio Borgo",
    city: "Naples",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 4,
    rating: 5,
    quote:
      "Un service d'accompagnement remarquable. Leur réactivité et la clarté de leurs propositions financières nous ont permis de concrétiser notre projet dans des délais très courts.",
    name: "Marco Rossi",
    company: "Rossi Digital Studio",
    city: "Turin",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 5,
    rating: 5,
    quote: "Professionnalisme et écoute du client exceptionnels. Ils maîtrisent parfaitement les offres bancaires et négocient au mieux de vos intérêts.",
    name: "Elena Bianchi",
    company: "Bianchi Design",
    city: "Florence",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 6,
    rating: 5,
    quote: "Je remercie toute l'équipe pour leur disponibilité et leur soutien. Une relation de confiance indispensable pour le développement de notre PME.",
    name: "Matteo Conti",
    company: "Conti Logistics",
    city: "Bologne",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  // --- ANIMATION REVEAL AU SCROLL ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elementsToAnimate = sectionRef.current?.querySelectorAll(".reveal");
    elementsToAnimate?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="testimonials-container">
        {/* EN-TÊTE */}
        <div className="testimonials-header reveal reveal-up">
          <span className="badge-blue">TÉMOIGNAGES</span>
          <h2 className="testimonials-title">Ce que disent les clients</h2>
        </div>

        {/* CARROUSEL DES TÉMOIGNAGES */}
        <div className="carousel-wrapper reveal reveal-up" style={{ transitionDelay: "0.2s" }}>
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 350}px)`,
            }}
          >
            {testimonialsData.map((item) => (
              <div className="testimonial-card" key={item.id}>
                {/* ÉTOILES */}
                <div className="rating-stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="star-icon">
                      ★
                    </span>
                  ))}
                </div>

                {/* TEXTE / CITATION */}
                <p className="testimonial-quote">{item.quote}</p>

                <hr className="card-divider" />

                {/* AUTEUR */}
                <div className="author-info">
                  <div className="avatar-wrapper">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="author-avatar"
                    />
                  </div>
                  <div className="author-details">
                    <h4 className="author-name">{item.name}</h4>
                    <p className="author-meta">
                      {item.company} , {item.city}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INDICATEURS (DOTS) */}
        <div className="carousel-dots reveal reveal-up" style={{ transitionDelay: "0.3s" }}>
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Aller au témoignage ${idx + 1}`}
            />
          ))}
        </div>

        {/* NAVIGATION FLÈCHES */}
        <div className="carousel-controls reveal reveal-up" style={{ transitionDelay: "0.4s" }}>
          <button
            onClick={handlePrev}
            className="nav-btn"
            aria-label="Témoignage précédent"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <span className="voir-tout-link"> </span>

          <button
            onClick={handleNext}
            className="nav-btn"
            aria-label="Témoignage suivant"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}