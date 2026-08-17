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
      "« Ho consigliato Nova Evoluzione a diversi miei clienti per il finanziamento delle loro aziende. Ogni volta sono rimasto impressionato dalla cura che dedicano alla gestione di ciascuna pratica e dalla loro conoscenza del mercato. »",
    name: "Giulia Marchetti",
    company: "Marchetti & Associati",
    city: "Milano",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 2,
    rating: 5,
    quote:
      "Cercavo una soluzione per finanziare l'espansione del mio studio legale. Nova Evoluzione mi ha trovato un mutuo a condizioni eccellenti in tempi record. Li consiglio vivamente a tutti.",
    name: "Carla Romano",
    company: "Studio Romano & Partners",
    city: "Roma",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 3,
    rating: 5,
    quote:
      "Dopo un periodo difficile, avevamo bisogno di liquidità per ristrutturare i nostri locali. Il team di Nova Evoluzione ci ha accompagnato in ogni fase trovando il prodotto ideale per le nostre esigenze.",
    name: "Francesco Vito",
    company: "Ristorante Il Vecchio Borgo",
    city: "Napoli",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 4,
    rating: 5,
    quote:
      "Un servizio di consulenza straordinario. La loro reattività e la chiarezza delle proposte finanziarie ci hanno permesso di concretizzare il nostro progetto in tempi brevissimi.",
    name: "Marco Rossi",
    company: "Rossi Digital Studio",
    city: "Torino",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 5,
    rating: 5,
    quote: "Professionalità ed ascolto del cliente eccezionali. Dominano perfettamente le offerte bancarie e negoziano al meglio per i vostri interessi.",
    name: "Elena Bianchi",
    company: "Bianchi Design",
    city: "Firenze",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 6,
    rating: 5,
    quote: "Ringrazio tutto il team per la disponibilità e il supporto. Una relazione di fiducia indispensabile per lo sviluppo della nostra PMI.",
    name: "Matteo Conti",
    company: "Conti Logistics",
    city: "Bologna",
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
        {/* INTESTAZIONE */}
        <div className="testimonials-header reveal reveal-up">
          <span className="badge-blue">TESTIMONIANZE</span>
          <h2 className="testimonials-title">Cosa dicono i nostri clienti</h2>
        </div>

        {/* CAROSELLO TESTIMONIANZE */}
        <div className="carousel-wrapper reveal reveal-up" style={{ transitionDelay: "0.2s" }}>
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 350}px)`,
            }}
          >
            {testimonialsData.map((item) => (
              <div className="testimonial-card" key={item.id}>
                {/* STELLE */}
                <div className="rating-stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="star-icon">
                      ★
                    </span>
                  ))}
                </div>

                {/* TESTO / CITAZIONE */}
                <p className="testimonial-quote">{item.quote}</p>

                <hr className="card-divider" />

                {/* AUTORE */}
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

        {/* INDICATORI (DOTS) */}
        <div className="carousel-dots reveal reveal-up" style={{ transitionDelay: "0.3s" }}>
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Vai alla testimonianza ${idx + 1}`}
            />
          ))}
        </div>

        {/* CONTROLLI NAVIGAZIONE */}
        <div className="carousel-controls reveal reveal-up" style={{ transitionDelay: "0.4s" }}>
          <button
            onClick={handlePrev}
            className="nav-btn"
            aria-label="Testimonianza precedente"
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
            aria-label="Testimonianza successiva"
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