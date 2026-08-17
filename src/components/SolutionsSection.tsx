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
    title: "Prestiti aziendali",
    description: "Finanziamento a lungo termine per l'acquisto o la ristrutturazione di immobili commerciali.",
    imageSrc: "/img/solutions/solution-1.avif",
    link: "#prets",
  },
  {
    id: "location",
    title: "Noleggio di attrezzature",
    description: "Noleggio operativo di macchinari, veicoli e attrezzature professionali.",
    imageSrc: "/img/solutions/solution-2.avif",
    link: "#location",
  },
  {
    id: "affacturage",
    title: "Factoring",
    description: "Cessione dei crediti commerciali per migliorare la liquidità.",
    imageSrc: "/img/solutions/solution-3.avif",
    link: "#affacturage",
  },
  {
    id: "membres",
    title: "Finanziamento soci",
    description: "Soluzioni dedicate ai soci fondatori di società di capitali.",
    imageSrc: "/img/solutions/solution-4.avif",
    link: "#membres",
  },
  {
    id: "non-garanti",
    title: "Credito chirografario",
    description: "Finanziamento non garantito per le esigenze di liquidità a medio termine.",
    imageSrc: "/img/solutions/solution-5.avif",
    link: "#non-garanti",
  },
  {
    id: "liquidites",
    title: "Prestiti di liquidità",
    description: "Linee di credito d'esercizio per gestire i picchi di attività.",
    imageSrc: "/img/solutions/solution-6.avif",
    link: "#liquidites",
  },
  {
    id: "startups",
    title: "Start-up e nuove imprese",
    description: "Accesso al credito per le aziende costituite da meno di 24 mesi.",
    imageSrc: "/img/solutions/solution-7.avif",
    link: "#startups",
  },
];

export default function SolutionsSection() {
  return (
    <section className="solutions-section" id="solutions">
      <div className="solutions-container">
        {/* INTESTAZIONE DELLA SEZIONE */}
        <div className="solutions-header">
          <span className="section-subtitle">I NOSTRI PRODOTTI</span>
          <h2 className="section-title">Le nostre soluzioni</h2>
          <p className="section-description">
            Prodotti finanziari selezionati per rispondere a tutte le esigenze delle imprese
          </p>
        </div>

        {/* GRIGLIA DELLE SCHEDE SOLUZIONI */}
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
                  <span>Scopri di più</span>
                  <i className="fa-solid fa-chevron-right link-icon"></i>
                </div>
              </div>
            </Link>
          ))}

          {/* SCHEDA CALL TO ACTION (CTA) */}
          <div className="solution-card cta-card">
            <div className="cta-card-content">
              <h3 className="cta-title">Non sai quale scegliere?</h3>
              <p className="cta-desc">
                I nostri esperti ti guideranno nella scelta della migliore opzione per la tua situazione.
              </p>
              <Link href="/contact" className="btn-cta-white">
                Parlaci del tuo progetto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}