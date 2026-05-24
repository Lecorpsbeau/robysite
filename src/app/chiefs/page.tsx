'use client';

import SectionReveal from '@/components/SectionReveal';

export default function ChiefsPage() {
  return (
    <div className="chiefs-page">
      <div className="container">
        <header className="page-header">
          <SectionReveal>
            <h1 className="page-title">CHIEFS CLUB</h1>
            <p className="page-subtitle">Rejoins l&apos;élite des Dreamers. Progressons ensemble.</p>
          </SectionReveal>
        </header>

        <div className="grid grid--2">
          {/* Discord Card */}
          <SectionReveal delay={0.1}>
            <div className="chief-card discord-card">
              <div className="chief-card__icon">◆</div>
              <h2>Serveur Discord Privé</h2>
              <p>Échange avec les autres membres, partage tes objectifs et reçois du feedback en temps réel.</p>
              
              <ul className="discord-features">
                <li><span className="discord-color">#</span> général</li>
                <li><span className="discord-color">#</span> glow-up-tracker</li>
                <li><span className="discord-color">#</span> style-feedback</li>
                <li><span className="discord-color">#</span> vocaux-travail</li>
              </ul>
              
              <a href="/api/discord/invite" target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{ width: '100%', marginTop: '1rem' }}>
                Rejoindre le Discord
              </a>
            </div>
          </SectionReveal>

          {/* Events Card */}
          <SectionReveal delay={0.2}>
            <div className="chief-card events-card">
              <div className="chief-card__icon">▲</div>
              <h2>Événements IRL</h2>
              <p>Parce que la vraie vie se passe en dehors des écrans. Rencontres outdoor et événements exclusifs.</p>
              
              <div className="events-list">
                <div className="event-item">
                  <div className="event-date">
                    <span className="event-month">JAN</span>
                    <span className="event-day">15</span>
                  </div>
                  <div className="event-info">
                    <h4>Session Ski - Alps</h4>
                    <span className="label">À VENIR</span>
                  </div>
                </div>
                <div className="event-item">
                  <div className="event-date">
                    <span className="event-month">AVR</span>
                    <span className="event-day">03</span>
                  </div>
                  <div className="event-info">
                    <h4>Street Workout Meetup - Paris</h4>
                    <span className="label">À VENIR</span>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>

      <style jsx>{`
        .chiefs-page {
          padding: calc(var(--space-4xl) + 60px) 0 var(--space-4xl);
        }

        .page-header {
          text-align: center;
          margin-bottom: var(--space-3xl);
        }

        .page-title {
          margin-bottom: 0.5rem;
        }

        .page-subtitle {
          color: var(--text-secondary);
        }

        .chief-card {
          padding: 2.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          height: 100%;
        }

        .chief-card__icon {
          font-size: 2rem;
          color: var(--accent-primary);
          margin-bottom: 1rem;
        }

        .chief-card h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .chief-card p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .discord-features {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2rem;
          background: var(--bg-secondary);
          padding: 1.5rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.875rem;
        }

        .discord-color {
          color: #5865F2; /* Discord Blurple */
          margin-right: 0.5rem;
        }

        .events-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .event-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
        }

        .event-date {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-right: 1.5rem;
          border-right: 1px solid var(--border);
        }

        .event-month {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-primary);
          font-weight: 600;
        }

        .event-day {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
        }

        .event-info h4 {
          margin-bottom: 0.25rem;
        }
      `}</style>
    </div>
  );
}
