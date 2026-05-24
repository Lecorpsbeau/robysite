'use client';

import Link from 'next/link';
import Image from 'next/image';
import { guideSections } from '@/lib/data';
import SectionReveal from '@/components/SectionReveal';

// La liste de tes PDFs présents dans ton dossier /pdfs
const libraryPDFs = [
  { title: "Atomic Habits", author: "James Clear", filename: "Atomic habits ( PDFDrive ).pdf", size: "5.1 Mo" },
  { title: "Les 4 Accords Toltèques", author: "Don Miguel Ruiz", filename: "don-miguel-ruiz-les-quatre-accords-tolteques.pdf", size: "852 Ko" },
  { title: "L'Art de la Guerre", author: "Sun Tzu", filename: "shun tzu - art de la guerre.pdf", size: "261 Ko" },
  { title: "Comment se faire des amis", author: "Dale Carnegie", filename: "Comment_se_faire_des_amis.pdf", size: "834 Ko" },
  { title: "Les 48 lois du pouvoir", author: "Robert Greene", filename: "Power_les_48_lois_du_pouvoir_Robert_Greene_Z-Library (1).pdf", size: "2.1 Mo" },
  { title: "Influence et Manipulation", author: "Robert Cialdini", filename: "Influence_et_manipulation_Compr...n_Robert_Cialdini_Z-Library (1).pdf", size: "4.4 Mo" },
  { title: "La semaine de 4 heures", author: "Tim Ferriss", filename: "La_semaine_de_4_heures (1).pdf", size: "2.4 Mo" },
  { title: "Can't Hurt Me", author: "David Goggins", filename: "Can_t-Hurt-Me-David-Goggins (1).pdf", size: "4.5 Mo" }
];

export default function GuideIndexPage() {
  return (
    <div className="guide-page">
      <div className="container">
        
        {/* HEADER REVISITÉ AVEC TA PHOTO DE PROFIL COMME ICÔNE D'AUTEUR */}
        <header className="page-header">
          <SectionReveal>
            <div className="author-avatar-wrapper">
              <Image 
                src="/images/profile.jpg" 
                alt="Augustin" 
                width={90} 
                height={90} 
                className="author-avatar"
                priority
              />
              <div className="avatar-pulse"></div>
            </div>
            <span className="label label--accent">ENCYCLOPEDIA</span>
            <h1 className="page-title">L&apos;INGÉNIERIE DU NOUVEAU LYCÉEN</h1>
            <p className="page-subtitle">Le blueprint complet de la métamorphose. Physique, style, et mindset.</p>
          </SectionReveal>
        </header>

        {/* SECTION 1 : LES PROTOCOLES (BENTO CARDS EXISTANTES) */}
        <SectionReveal>
          <h2 className="section-divider-title">◆ Les Protocoles de Base</h2>
        </SectionReveal>
        
        <div className="grid grid--2">
          {guideSections.map((section, index) => (
            <SectionReveal key={section.slug} delay={index * 0.1}>
              <Link href={`/guide/${section.slug}`} className="guide-card">
                <div className="guide-card__header">
                  <span className="guide-card__icon" style={{ color: section.color }}>{section.icon}</span>
                  <div className="guide-card__titles">
                    <h2>{section.title}</h2>
                    <span className="guide-card__subtitle">{section.subtitle}</span>
                  </div>
                </div>
                <p className="guide-card__desc">{section.description}</p>
                <div className="guide-card__footer">
                  <span className="btn btn--ghost" style={{ padding: 0 }}>Lire le protocole →</span>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>

        {/* SECTION 2 : LA BIBLIOTHÈQUE NUMÉRIQUE (TÉLÉCHARGEMENT DES PDFS) */}
        <div className="pdf-section">
          <SectionReveal>
            <div className="pdf-header">
              <span className="label label--secondary">RESSOURCES</span>
              <h2 className="pdf-main-title">Le Cabinet de Lecture Stratégique</h2>
              <p className="pdf-subtitle">Les fondations théoriques du mindset et de la discipline à télécharger directement.</p>
            </div>
          </SectionReveal>

          <div className="pdf-grid">
            {libraryPDFs.map((pdf, index) => (
              <SectionReveal key={index} delay={index * 0.05}>
                <a 
                  href={`/pdfs/${pdf.filename}`} 
                  download 
                  className="pdf-card"
                >
                  <div className="pdf-card__icon">📚</div>
                  <div className="pdf-card__info">
                    <h3>{pdf.title}</h3>
                    <p>{pdf.author} • <span className="pdf-size">{pdf.size}</span></p>
                  </div>
                  <div className="pdf-card__action">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4M7 10l5 5 5-5M12 15V3"/>
                    </svg>
                  </div>
                </a>
              </SectionReveal>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .guide-page {
          padding: calc(var(--space-4xl) + 60px) 0 var(--space-4xl);
        }

        /* Avatar Augustin */
        .author-avatar-wrapper {
          position: relative;
          width: 90px;
          height: 90px;
          margin: 0 auto 1.5rem;
        }

        .author-avatar {
          border-radius: 50%;
          border: 2px solid var(--border-accent);
          object-fit: cover;
          z-index: 2;
          position: relative;
        }

        .avatar-pulse {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: var(--border-accent);
          opacity: 0.15;
          animation: pulse 3s infinite ease-in-out;
          z-index: 1;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.08); opacity: 0.3; }
          100% { transform: scale(1); opacity: 0.15; }
        }

        .page-header {
          text-align: center;
          margin-bottom: var(--space-3xl);
          max-width: 800px;
          margin-inline: auto;
        }

        .page-title {
          margin-top: 0.5rem;
          margin-bottom: 1rem;
          font-family: var(--font-titles);
        }

        .page-subtitle {
          color: var(--text-secondary);
          font-size: 1.125rem;
        }

        .section-divider-title {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          margin-bottom: var(--space-xl);
          margin-top: var(--space-2xl);
        }

        .guide-card {
          display: flex;
          flex-direction: column;
          padding: 2.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          height: 100%;
          text-decoration: none;
          transition: all var(--duration-normal) var(--ease-out);
        }

        .guide-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-accent);
          background: var(--bg-secondary);
        }

        .guide-card__header {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .guide-card__icon {
          font-size: 2.5rem;
          line-height: 1;
        }

        .guide-card__titles {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .guide-card__titles h2 {
          font-size: 1.5rem;
          color: var(--text-primary);
        }

        .guide-card__subtitle {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .guide-card__desc {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        /* Section Bibliothèque PDF */
        .pdf-section {
          margin-top: var(--space-4xl);
          border-top: 1px dashed var(--border);
          padding-top: var(--space-3xl);
        }

        .pdf-header {
          text-align: center;
          margin-bottom: var(--space-2xl);
        }

        .pdf-main-title {
          font-size: 2rem;
          margin-top: 0.5rem;
          color: var(--text-primary);
        }

        .pdf-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1xl));
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .pdf-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .pdf-card {
          display: flex;
          align-items: center;
          padding: 1.25rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .pdf-card:hover {
          border-color: var(--accent-primary, var(--border-accent));
          background: var(--bg-secondary);
          transform: translateX(4px);
        }

        .pdf-card__icon {
          font-size: 1.75rem;
          margin-right: 1.25rem;
        }

        .pdf-card__info {
          flex-grow: 1;
        }

        .pdf-card__info h3 {
          font-size: 1rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .pdf-card__info p {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .pdf-size {
          font-family: var(--font-mono);
          color: var(--text-muted);
        }

        .pdf-card__action {
          color: var(--text-muted);
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
        }

        .pdf-card:hover .pdf-card__action {
          color: var(--text-primary);
        }
      `}</style>
    </div>
  );
}