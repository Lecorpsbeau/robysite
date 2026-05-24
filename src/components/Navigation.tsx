'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { href: '/diary', label: 'Diary' },
    { href: '/shop', label: 'Shop' },
    { href: '/chiefs', label: 'Chiefs' },
    { href: '/guide', label: 'Guide' },
  ];

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <Link href="/" className="nav__logo" onClick={() => setMobileOpen(false)}>
            <span className="nav__logo-text">ROBY</span>
            <span className="nav__logo-dot"></span>
          </Link>

          <div className="nav__links hide-mobile">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav__link">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="nav__actions">
            <a
              href="/api/discord/invite"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--sm btn--primary hide-mobile"
            >
              Rejoindre
            </a>

            <button
              className="nav__hamburger hide-desktop"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span className={`nav__hamburger-line ${mobileOpen ? 'open' : ''}`}></span>
              <span className={`nav__hamburger-line ${mobileOpen ? 'open' : ''}`}></span>
              <span className={`nav__hamburger-line ${mobileOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__content">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-menu__link"
              onClick={() => setMobileOpen(false)}
              style={{ animationDelay: `${0.1 + i * 0.05}s` }}
            >
              <span className="mobile-menu__link-number">{String(i + 1).padStart(2, '0')}</span>
              <span className="mobile-menu__link-text">{link.label}</span>
            </Link>
          ))}
          <div className="mobile-menu__footer">
            <a
              href="/api/discord/invite"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--lg"
              style={{ width: '100%' }}
            >
              Rejoindre le Chiefs Club
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: var(--z-sticky);
          padding: 1rem 0;
          transition: all var(--duration-normal) var(--ease-out);
        }

        .nav--scrolled {
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          padding: 0.75rem 0;
        }

        .nav__inner {
          max-width: var(--container-wide);
          margin: 0 auto;
          padding: 0 var(--container-padding);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav__logo {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          text-decoration: none;
          position: relative;
        }

        .nav__logo-dot {
          width: 6px;
          height: 6px;
          background: var(--accent-primary);
          border-radius: 50%;
          margin-top: -0.75rem;
        }

        .nav__links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav__link {
          font-family: var(--font-mono);
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          transition: color var(--duration-fast) var(--ease-out);
          position: relative;
        }

        .nav__link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--accent-primary);
          transition: width var(--duration-normal) var(--ease-out);
        }

        .nav__link:hover {
          color: var(--text-primary);
        }

        .nav__link:hover::after {
          width: 100%;
        }

        .nav__actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav__hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 4px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: calc(var(--z-overlay) + 1);
        }

        .nav__hamburger-line {
          width: 24px;
          height: 2px;
          background: var(--text-primary);
          transition: all var(--duration-normal) var(--ease-out);
          transform-origin: center;
        }

        .nav__hamburger-line.open:first-child {
          transform: translateY(7px) rotate(45deg);
        }

        .nav__hamburger-line.open:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }

        .nav__hamburger-line.open:last-child {
          transform: translateY(-7px) rotate(-45deg);
        }

        .mobile-menu {
          position: fixed;
          inset: 0;
          background: var(--bg-primary);
          z-index: var(--z-overlay);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity var(--duration-slow) var(--ease-out);
        }

        .mobile-menu--open {
          opacity: 1;
          pointer-events: all;
        }

        .mobile-menu__content {
          display: flex;
          flex-direction: column;
          gap: 0;
          width: 100%;
          padding: 0 var(--container-padding);
        }

        .mobile-menu__link {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.25rem 0;
          border-bottom: 1px solid var(--border);
          text-decoration: none;
          opacity: 0;
          transform: translateX(-20px);
        }

        .mobile-menu--open .mobile-menu__link {
          animation: slideInLeft 0.5s var(--ease-out) forwards;
        }

        .mobile-menu__link-number {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-primary);
        }

        .mobile-menu__link-text {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }

        .mobile-menu__footer {
          margin-top: 2rem;
          opacity: 0;
        }

        .mobile-menu--open .mobile-menu__footer {
          animation: fadeUp 0.5s var(--ease-out) 0.5s forwards;
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
