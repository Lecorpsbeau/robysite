import { notFound } from 'next/navigation';
import Link from 'next/link';
import { guideSections, guideContent } from '@/lib/data';
import SectionReveal from '@/components/SectionReveal';
import './styles.css';

interface GuideDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all guide pages
export function generateStaticParams() {
  return guideSections.map((section) => ({
    slug: section.slug,
  }));
}

export default async function GuideDetailPage({ params }: GuideDetailPageProps) {
  const resolvedParams = await params;
  const section = guideSections.find(s => s.slug === resolvedParams.slug);
  const content = guideContent[resolvedParams.slug];

  if (!section || !content) {
    notFound();
  }

  return (
    <div className="guide-detail">
      <div className="container container--narrow">
        {/* Back link */}
        <Link href="/guide" className="back-link">
          ← Retour à l&apos;Encyclopedia
        </Link>

        {/* Header */}
        <header className="detail-header">
            <SectionReveal>
  <div className="detail-header__cover-wrapper" style={{ '--book-color': section.color } as React.CSSProperties}>
    {/* Remplacement par une balise HTML standard pour bypass le bug de types */}
    <img 
      src={section.coverImage} 
      alt={`Couverture de ${section.title}`}
      width={120}
      height={175}
      className="detail-header__cover"
    />
  </div>
  <span className="label" style={{ color: section.color, marginBottom: '1rem', display: 'block' }}>
    {section.subtitle}
  </span>
  <h1 className="detail-title">{section.title}</h1>
  <p className="detail-intro">{content.intro}</p>
</SectionReveal>
        </header>

        {/* Content Sections */}
        <div className="detail-content">
          {content.sections.map((sec, index) => (
            <SectionReveal key={index} delay={0.1}>
              <div className="content-section">
                <h2>{sec.title}</h2>
                <p>{sec.content}</p>
                
                {sec.tips && sec.tips.length > 0 && (
                  <div className="tips-box">
                    <h4>Points Clés :</h4>
                    <ul>
                      {sec.tips.map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </SectionReveal>
          ))}

          {/* Table (if any) */}
          {content.table && (
            <SectionReveal delay={0.2}>
              <div className="table-container">
                <table className="content-table">
                  <thead>
                    <tr>
                      {content.table.headers.map((header, i) => (
                        <th key={i}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {content.table.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionReveal>
          )}
        </div>
      </div>
    </div>
  );
}
