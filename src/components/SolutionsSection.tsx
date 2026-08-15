import Image from "next/image";
import Link from "next/link";

interface SolutionItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

const solutionsData: SolutionItem[] = [
  {
    id: "prets",
    title: "Prêts aux entreprises",
    description: "Financement à long terme pour l'achat ou la rénovation de propriétés commerciales.",
    imageSrc: "/img/solutions/solution-1.avif",
    link: "#prets",
  },
  {
    id: "location",
    title: "Location de matériel",
    description: "Location opérationnelle de machines, de véhicules et d'équipements professionnels.",
    imageSrc: "/img/solutions/solution-2.avif",
    link: "#location",
  },
  {
    id: "affacturage",
    title: "Affacturage",
    description: "Cession de créances commerciales pour améliorer la trésorerie.",
    imageSrc: "/img/solutions/solution-3.avif",
    link: "#affacturage",
  },
  {
    id: "membres",
    title: "Financement par les membres",
    description: "Des solutions dédiées aux membres fondateurs de sociétés par actions.",
    imageSrc: "/img/solutions/solution-4.avif",
    link: "#membres",
  },
  {
    id: "non-garanti",
    title: "Crédit non garanti",
    description: "Financement non garanti pour les besoins de liquidités à moyen terme.",
    imageSrc: "/img/solutions/solution-5.avif",
    link: "#non-garanti",
  },
  {
    id: "liquidites",
    title: "Prêts de liquidités",
    description: "Lignes de crédit renouvelables pour gérer les pics d'activité.",
    imageSrc: "/img/solutions/solution-6.avif",
    link: "#liquidites",
  },
  {
    id: "startups",
    title: "Start-ups et nouvelles entreprises",
    description: "Accès au crédit pour les entreprises créées il y a moins de 24 mois.",
    imageSrc: "/img/solutions/solution-7.avif",
    link: "#startups",
  },
];

export default function SolutionsSection() {
  return (
    <section className="solutions-section" id="solutions">
      <div className="solutions-container">
        {/* EN-TÊTE DE SECTION */}
        <div className="solutions-header">
          <span className="section-subtitle">NOS PRODUITS</span>
          <h2 className="section-title">Nos solutions</h2>
          <p className="section-description">
            Des produits financiers sélectionnés pour répondre à tous les besoins des entreprises
          </p>
        </div>

        {/* GRILLE DE CARTE SOLUTIONS */}
        <div className="solutions-grid">
          {solutionsData.map((item) => (
            <Link href={item.link} key={item.id} className="solution-card">
              <div className="card-image-wrapper">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  width={320}
                  height={190}
                  className="card-image"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.description}</p>
                <div className="card-link">
                  <span>En savoir plus</span>
                  <i className="fa-solid fa-chevron-right link-icon"></i>
                </div>
              </div>
            </Link>
          ))}

          {/* CARTE D'APPEL À L'ACTION (CTA BLEU FONCÉ) */}
          <div className="solution-card cta-card">
            <div className="cta-card-content">
              <h3 className="cta-title">Vous ne savez pas lequel choisir ?</h3>
              <p className="cta-desc">
                Nos experts vous guideront dans le choix de la meilleure option pour votre situation.
              </p>
              <Link href="/contact" className="btn-cta-white">
                Parlez-nous de votre projet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}