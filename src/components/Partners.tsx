"use client";

import React from "react";

interface Partner {
  id: string;
  name: string;
  logoUrl?: string; // Optionnel : lien de l'image du logo
  accentColor?: string; // Optionnel : couleur de la barre verticale si c'est un badge textuel
}

const partnersData: Partner[] = [
  {
    id: "1",
    name: "Intesa Sanpaolo",
    logoUrl: "/img/Intesa.jpg",
  },
  {
    id: "2",
    name: "UniCredit",
    logoUrl: "/img/UniCredit.jpg",
  },
  {
    id: "3",
    name: "Banco BPM",
    logoUrl: "/img/banco-bpm.png",
  },
  {
    id: "4",
    name: "BPER Banca",
    logoUrl: "/img/BPERBanca.png",
  },
  
];

export default function Partners() {
  return (
    <section className="partners-section">
      <h2 className="partners-title">Nos institutions partenaires</h2>

      <div className="partners-grid">
        {partnersData.map((partner) => (
          <div key={partner.id} className="partner-item">
            {partner.logoUrl ? (
              <img
                src={partner.logoUrl}
                alt={partner.name}
                className="partner-logo"
              />
            ) : (
              <div className="partner-badge">
                <span
                  className="partner-badge-bar"
                  style={{ backgroundColor: partner.accentColor || "#2563eb" }}
                />
                <span>{partner.name}</span>
              </div> 
            )}
          </div>
        ))}
      </div>
    </section>
  );
}