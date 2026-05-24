'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'YouTube', href: 'https://www.youtube.com/@RobyUnfiltered', icon: '▶' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@robydalier', icon: '♪' },
    { label: 'Discord', href: '/api/discord/invite', icon: '◆' },
    { label: 'Spotify', href: 'https://open.spotify.com/show/57EZfD4yx65soP0ruZuk6u?si=92edacc6b1474f4f&nd=1&dlsi=52c3702dfc004c8c', icon: '●' },
    { label: 'Patreon', href: 'https://www.patreon.com/c/RobyDLR/home', icon: '◇' },
  ];

  const footerLinks = [
    { label: 'Diary', href: '/diary' },
    { label: 'Glow Up', href: '/glow-up' },
    { label: 'Routine', href: '/routine' },
    { label: 'Shop', href: '/shop' },
    { label: 'Chiefs', href: '/chiefs' },
    { label: 'Guide', href: '/guide' },
  ];

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Top */}
        <div className="footer__top">
          <div className="footer__brand">
            <Link href="/" className="footer__logo">
              ROBY<span className="footer__logo-dot">.</span>
            </Link>
            <p className="footer__tagline">
              Allow yourself to dream (too) big.
            </p>
          </div>

          <div className="footer__nav">
            <span className="footer__nav-title">Navigation</span>
            <div className="footer__nav-links">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer__nav-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer__social">
            <span className="footer__nav-title">Suivre</span>
            <div className="footer__social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={link.label}
                >
                  <span className="footer__social-icon">{link.icon}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider"></div>

        {/* Bottom */}
        <div className="footer__bottom">
          <span className="footer__copy">
            © {currentYear} Roby Dalier. Tous droits réservés.
          </span>
          <span className="footer__quote">
            Ne faites pas les bakas — le travail commence maintenant.
          </span>
        </div>
      </div>

      <style jsx>{`
        .footer {
          border-top: 1px solid var(--border);
          padding: var(--space-4xl) 0 var(--space-xl);
          background: var(--bg-primary);
        }

        .footer__inner {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 0 var(--container-padding);
        }

        .footer__top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: var(--space-3xl);
          margin-bottom: var(--space-3xl);
        }

        .footer__logo {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
          text-decoration: none;
          display: inline-block;
          margin-bottom: var(--space-md);
        }

        .footer__logo-dot {
          color: var(--accent-primary);
        }

        .footer__tagline {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          color: var(--text-muted);
          font-style: italic;
        }

        .footer__nav-title {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: var(--space-lg);
        }

        .footer__nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer__nav-link {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color var(--duration-fast) var(--ease-out);
        }

        .footer__nav-link:hover {
          color: var(--text-primary);
        }

        .footer__social-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer__social-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9375rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color var(--duration-fast) var(--ease-out);
        }

        .footer__social-link:hover {
          color: var(--accent-primary);
        }

        .footer__social-icon {
          font-size: 0.75rem;
          width: 1.25rem;
          text-align: center;
        }

        .footer__divider {
          height: 1px;
          background: var(--border);
          margin-bottom: var(--space-xl);
        }

        .footer__bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .footer__copy {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .footer__quote {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          font-style: italic;
        }

        @media (max-width: 768px) {
          .footer__top {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
          }

          .footer__bottom {
            flex-direction: column;
            gap: var(--space-md);
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
