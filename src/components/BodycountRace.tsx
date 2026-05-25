'use client';

import Image from 'next/image';

export default function BodycountRace() {
  // Liste fictive basée sur ton idée de graphique de suivi de course
  const participants = [
    { name: "Roby", count: 14, avatar: "/images/roby-profile.jpg", color: "var(--accent-primary)", isLeader: true },
    { name: "Samir", count: 9, avatar: "/images/samir-profile.jpg", color: "var(--accent-secondary)", isLeader: false },
    { name: "Tom", count: 5, avatar: "/images/tom-profile.jpg", color: "#9d4edd", isLeader: false },
  ];

  const maxCount = Math.max(...participants.map(p => p.count));

  return (
    <section className="race-section">
      <div className="container">
        <h2 className="section-title neon-glow-pink">LIVE TRACKER : THE RIVALRY</h2>
        <p className="section-subtitle">Suivi en temps réel de la course d'objectifs</p>

        <div className="race-tracks">
          {participants.map((player) => {
            const percentage = (player.count / maxCount) * 100;
            return (
              <div key={player.name} className="track-row">
                <div className="player-info">
                  <div className="avatar-wrapper" style={{ borderColor: player.color }}>
                    {/* Remplace les src par tes vraies images une fois iCloud synchronisé ! */}
                    <div className="avatar-placeholder">{player.name[0]}</div>
                  </div>
                  <span className="player-name">{player.name} {player.isLeader && "👑"}</span>
                </div>

                <div className="bar-wrapper">
                  <div 
                    className="progress-bar" 
                    style={{ 
                      width: `${percentage}%`, 
                      backgroundColor: player.color,
                      boxShadow: `0 0 15px ${player.color}`
                    }}
                  >
                    <span className="count-badge">{player.count} PTS</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .race-section {
          padding: 6rem var(--container-padding);
          background: var(--bg-primary);
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
          color: var(--accent-primary);
          text-align: center;
          margin-bottom: 0.5rem;
        }
        .section-subtitle {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-secondary);
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 4rem;
        }
        .race-tracks {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          background: rgba(19, 10, 42, 0.4);
          padding: 2.5rem;
          border-radius: 4px;
          border: 1px solid var(--border);
        }
        .track-row {
          display: grid;
          grid-template-columns: 200px 1fr;
          align-items: center;
          gap: 2rem;
        }
        .player-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .avatar-wrapper {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: 2px solid;
          overflow: hidden;
          background: #23154c;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .avatar-placeholder {
          font-family: var(--font-heading);
          font-weight: 700;
          color: #fff;
        }
        .player-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .bar-wrapper {
          background: rgba(255, 255, 255, 0.03);
          height: 35px;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          display: flex;
          align-items: center;
        }
        .progress-bar {
          height: 100%;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 1rem;
          transition: width 1s var(--ease-out);
          min-width: 80px;
        }
        .count-badge {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: #000;
          background: #fff;
          padding: 0.15rem 0.5rem;
          border-radius: 2px;
        }
        @media (max-width: 600px) {
          .track-row {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}