'use client';

import { guideSections } from '@/lib/data';
import SectionReveal from '@/components/SectionReveal';

export default function GuideIndexPage() {
  return (
    <div className="guide-page">
      <div className="container">
        
        {/* HEADER */}
        <header className="page-header">
          <SectionReveal>
            <span className="label label--accent">ENCYCLOPEDIA</span>
            <h1 className="page-title">L&apos;INGÉNIERIE DU NOUVEAU LYCÉEN</h1>
            <p className="page-subtitle">Le blueprint de la métamorphose. Les meilleures lectures de focus et discipline décryptées.</p>
          </SectionReveal>
        </header>

        {/* SECTION DES LIVRES & RÉSUMÉS */}
        <SectionReveal>
          <h2 className="section-divider-title">◆ La Bibliothèque Élite (Deep Work)</h2>
        </SectionReveal>
        
        <div className="grid grid--2">
          {guideSections.map((book, index) => (
            <SectionReveal key={book.slug} delay={index * 0.1}>
              <div className="book-card">
                
                <div className="book-card__main">
                  {/* COUVERTURE DU LIVRE VIA BALISE STANDARD */}
                  <div className="book-cover-wrapper" style={{ '--book-border': book.color } as React.CSSProperties}>
                    <img 
                      src={book.coverImage} 
                      alt={`Couverture de ${book.title}`} 
                      className="book-cover"
                      width={105}
                      height={155}
                    />
                  </div>

                  {/* TITRE ET RÉSUMÉ */}
                  <div className="book-card__content">
                    <span className="book-author" style={{ color: book.color }}>{book.subtitle}</span>
                    <h2 className="book-title">
                      <a href={`/guide/${book.slug}`} className="book-title-link">
                        {book.title}
                      </a>
                    </h2>
                    <p className="book-desc">{book.description}</p>
                  </div>
                </div>

                {/* BOUTON DE TÉLÉCHARGEMENT DIRECT */}
                <div className="book-card__footer">
                  <a 
                    href={`/pdfs/${book.pdfFilename}`} 
                    download 
                    className="btn-download"
                    style={{ '--btn-hover-color': book.color } as React.CSSProperties}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-dl">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4M7 10l5 5 5-5M12 15V3"/>
                    </svg>
                    <span>Télécharger le PDF</span>
                    <span className="file-size">({book.pdfSize})</span>
                  </a>
                </div>

              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .guide-page {
          padding: calc(var(--space-4xl) + 60px) 0 var(--space-4xl);
          background: var(--bg-primary);
        }

        .page-header {
          text-align: center;
          margin-bottom: var(--space-3xl);
          max-width: 800px;
          margin-inline: auto;
        }

        .page-title {
          font-family: var(--font-titles);
          margin-top: 0.5rem;
          margin-bottom: 1rem;
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
        }

        /* Cartes de Livres Structurées */
        .book-card {
          display: flex;
          flex-direction: column;
          padding: 2rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          height: 100%;
          transition: all var(--duration-normal) var(--ease-out);
        }

        .book-card:hover {
          border-color: var(--border-accent);
          background: var(--bg-secondary);
          transform: translateY(-2px);
        }

        .book-card__main {
          display: flex;
          align-items: flex-start;
          gap: 1.75rem;
          flex-grow: 1;
          margin-bottom: 1.75rem;
        }

        /* Couverture de livre réaliste style vertical */
        .book-cover-wrapper {
          position: relative;
          width: 105px;
          height: 155px;
          flex-shrink: 0;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
          border-left: 3px solid var(--book-border);
        }

        .book-cover {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .book-card__content {
          display: flex;
          flex-direction: column;
        }

        .book-author {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.25rem;
        }

        .book-title {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .book-title-link {
          color: inherit;
          text-decoration: none;
        }

        .book-title-link:hover {
          text-decoration: underline;
        }

        .book-desc {
          color: var(--text-secondary);
          font-size: 0.925rem;
          line-height: 1.6;
        }

        /* Bouton Télécharger Customisé */
        .book-card__footer {
          margin-top: auto;
        }

        .btn-download {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.25rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm, 6px);
          color: var(--text-primary);
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s ease;
          width: 100%;
          justify-content: center;
        }

        .btn-download:hover {
          border-color: var(--btn-hover-color);
          background: var(--bg-card);
          color: var(--text-primary);
        }

        .icon-dl {
          color: var(--text-muted);
          transition: transform 0.2s ease;
        }

        .btn-download:hover .icon-dl {
          transform: translateY(1px);
          color: var(--text-primary);
        }

        .file-size {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}