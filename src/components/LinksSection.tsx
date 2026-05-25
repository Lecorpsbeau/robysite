'use client';

export default function LinksSection() {
  const links = [
    { title: "Rejoindre le Discord Officiel", description: "L'espace communautaire principal", url: "https://discord.gg/robydalier", tag: "Communauté" },
    { title: "Dernier Salon de Discussion", description: "Là où tout le monde parle en temps réel", url: "https://discord.com/channels/...", tag: "Discord" },
    { title: "Chaîne Principale YouTube", description: "Les vlogs et vidéos principales", url: "https://www.youtube.com/@RobyDalier", tag: "YouTube" },
    { title: "Roby Unfiltered", description: "Contenu brut et sans filtre", url: "https://www.youtube.com/@RobyUnfiltered", tag: "YouTube" },
  ];

  return (
    <section className="links-section">
      <div className="container">
        <h2 className="section-title neon-glow-cyan">RESSOURCES & LIENS</h2>
        <div className="links-grid">
          {links.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="link-card">
              <div className="link-card__content">
                <span className="link-card__tag">{link.tag}</span>
                <h3 className="link-card__title">{link.title}</h3>
                <p className="link-card__desc">{link.description}</p>
              </div>
              <span className="link-card__arrow">→</span>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .links-section {
          padding: 6rem var(--container-padding);
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
        }
        .container {
          max-width: var(--container-max);
          margin: 0 auto;
        }
        .section-title {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: var(--accent-secondary);
          margin-bottom: 3rem;
          text-align: center;
        }
        .links-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .link-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          background: rgba(9, 4, 20, 0.6);
          border: 1px solid var(--border);
          border-radius: 4px;
          text-decoration: none;
          transition: all var(--duration-fast) var(--ease-out);
        }
        .link-card:hover {
          border-color: var(--accent-primary);
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(255, 0, 127, 0.15);
        }
        .link-card__tag {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          text-transform: uppercase;
          color: var(--accent-primary);
          letter-spacing: 0.1em;
        }
        .link-card__title {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0.25rem 0;
        }
        .link-card__desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin: 0;
        }
        .link-card__arrow {
          font-size: 1.5rem;
          color: var(--text-muted);
          transition: color var(--duration-fast) var(--ease-out);
        }
        .link-card:hover .link-card__arrow {
          color: var(--accent-primary);
        }
        @media (max-width: 768px) {
          .links-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}