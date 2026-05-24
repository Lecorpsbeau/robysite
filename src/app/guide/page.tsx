'use client';

import Link from 'next/link';
import { guideSections } from '@/lib/data';
import SectionReveal from '@/components/SectionReveal';

export default function GuideIndexPage() {
  return (
    <div className="guide-page">
      <div className="container">
        <header className="page-header">
          <SectionReveal>
            <span className="label label--accent">ENCYCLOPEDIA</span>
            <h1 className="page-title">L&apos;INGÉNIERIE DU NOUVEAU LYCÉEN</h1>
            <p className="page-subtitle">Le blueprint complet de la métamorphose. Physique, style, et mindset.</p>
          </SectionReveal>
        </header>

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
      </div>

      <style jsx>{`
        .guide-page {
          padding: calc(var(--space-4xl) + 60px) 0 var(--space-4xl);
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
        }

        .page-subtitle {
          color: var(--text-secondary);
          font-size: 1.125rem;
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

        .guide-card__footer {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
