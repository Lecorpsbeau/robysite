'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const titleWords = ['ALLOW', 'YOURSELF', 'TO', 'DREAM', '(TOO)', 'BIG'];
  const stats = [
    { value: '29.5K', label: 'Abonnés' },
    { value: '30', label: 'Vidéos' },
    { value: '90', label: 'Jours' },
  ];

  return (
    <section className="hero">
      {/* Video Background */}
      <div className="hero__bg">
        <div className="hero__bg-gradient"></div>
        <div className="hero__bg-grid"></div>
      </div>

      <div className="hero__content">
        {/* Label */}
        <div className={`hero__label ${loaded ? 'visible' : ''}`}>
          <span className="hero__label-dot"></span>
          <span>THE RAW DREAMER&apos;S DIARY</span>
        </div>

        {/* Title */}
        <h1 className="hero__title">
          {titleWords.map((word, i) => (
            <span
              key={word + i}
              className={`hero__title-word ${loaded ? 'visible' : ''}`}
              style={{ animationDelay: `${0.3 + i * 0.08}s` }}
            >
              {word === '(TOO)' ? (
                <span className="hero__title-accent">{word}</span>
              ) : (
                word
              )}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className={`hero__subtitle ${loaded ? 'visible' : ''}`}>
          Personal Branding · Self-Improvement · Lifestyle · Community
        </p>

        {/* CTAs */}
        <div className={`hero__ctas ${loaded ? 'visible' : ''}`}>
          <a href="/diary" className="btn btn--primary btn--lg">
            Explorer le Diary
          </a>
          <a href="/glow-up" className="btn btn--secondary btn--lg">
            Commencer le Glow Up
          </a>
        </div>

        {/* Stats */}
        <div className={`hero__stats ${loaded ? 'visible' : ''}`}>
          {stats.map((stat, i) => (
            <div key={stat.label} className="hero__stat" style={{ animationDelay: `${1 + i * 0.1}s` }}>
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`hero__scroll ${loaded ? 'visible' : ''}`}>
        <div className="hero__scroll-line"></div>
        <span className="hero__scroll-text">SCROLL</span>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 6rem var(--container-padding) 4rem;
        }

        .hero__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero__bg-gradient {
          position: absolute;
          inset: 0;
          background: var(--gradient-hero);
        }

        .hero__bg-gradient::after {
          content: '';
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(200, 255, 0, 0.03) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .hero__bg-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, black, transparent);
        }

        .hero__content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .hero__label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--accent-primary);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.6s var(--ease-out) 0.1s;
        }

        .hero__label.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero__label-dot {
          width: 6px;
          height: 6px;
          background: var(--accent-primary);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        .hero__title {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0 0.4em;
          font-size: clamp(2.5rem, 7vw, 5.5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.05;
          margin-bottom: 1.5rem;
        }

        .hero__title-word {
          display: inline-block;
          opacity: 0;
          transform: translateY(40px) rotateX(20deg);
          transition: none;
        }

        .hero__title-word.visible {
          animation: titleReveal 0.7s var(--ease-out) forwards;
        }

        .hero__title-accent {
          color: var(--accent-primary);
          font-style: italic;
        }

        .hero__subtitle {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          color: var(--text-secondary);
          letter-spacing: 0.05em;
          margin-bottom: 2.5rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s var(--ease-out) 0.8s;
        }

        .hero__subtitle.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero__ctas {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s var(--ease-out) 0.9s;
        }

        .hero__ctas.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero__stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3rem;
          opacity: 0;
          transition: opacity 0.6s var(--ease-out) 1s;
        }

        .hero__stats.visible {
          opacity: 1;
        }

        .hero__stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          opacity: 0;
        }

        .hero__stats.visible .hero__stat {
          animation: countUp 0.5s var(--ease-out) forwards;
        }

        .hero__stat-value {
          font-family: var(--font-heading);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .hero__stat-label {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .hero__scroll {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          opacity: 0;
          transition: opacity 0.6s var(--ease-out) 1.5s;
        }

        .hero__scroll.visible {
          opacity: 1;
        }

        .hero__scroll-line {
          width: 1px;
          height: 40px;
          background: var(--border-accent);
          position: relative;
          overflow: hidden;
        }

        .hero__scroll-line::after {
          content: '';
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 50%;
          background: var(--accent-primary);
          animation: scrollDown 1.5s ease-in-out infinite;
        }

        .hero__scroll-text {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: var(--text-muted);
          letter-spacing: 0.2em;
        }

        @keyframes titleReveal {
          from {
            opacity: 0;
            transform: translateY(40px) rotateX(20deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scrollDown {
          0% { top: -50%; }
          100% { top: 100%; }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 5rem var(--container-padding) 3rem;
          }

          .hero__title {
            gap: 0 0.3em;
          }

          .hero__ctas {
            flex-direction: column;
          }

          .hero__stats {
            gap: 2rem;
          }

          .hero__stat-value {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
