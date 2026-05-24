'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Liste des réseaux officiels avec leurs logos SVG exacts insérés directement
  const socialLinks = [
    { 
      label: 'YouTube (Principal)', 
      href: 'https://www.youtube.com/@RobyDalier', 
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    { 
      label: 'YouTube (Unfiltered)', 
      href: 'https://www.youtube.com/@RobyUnfiltered', 
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    { 
      label: 'Instagram', 
      href: 'https://www.instagram.com/robydalier', 
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    { 
      label: 'TikTok', 
      href: 'https://www.tiktok.com/@robydalier', 
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M12.525.02c1.31.01 2.61.1 3.86.31v4.29c-.88-.25-1.8-.37-2.72-.36-.4 0-.8.03-1.19.1v10.1c0 2.37-1.93 4.3-4.3 4.3a4.3 4.3 0 0 1-4.3-4.3 4.3 4.3 0 0 1 4.3-4.3c.67 0 1.33.15 1.93.45V6.15c-.63-.12-1.28-.18-1.93-.18A8.59 8.59 0 0 0 3.6 14.56a8.59 8.59 0 0 0 8.59 8.59 8.59 8.59 0 0 0 8.59-8.59v-7.1c1.51 1.1 3.37 1.72 5.28 1.76V4.36c-1.13-.04-2.23-.42-3.15-1.1a7.71 7.71 0 0 1-1.92-2.14l-3.46-.1v-.1h-1.01z"/>
        </svg>
      )
    },
    { 
      label: 'Patreon', 
      href: 'https://www.patreon.com/c/RobyDLR/home', 
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M0 .48v23.04h4.15V.48H0zm15.34 0C10.55.48 6.66 4.37 6.66 9.17c0 4.79 3.89 8.68 8.68 8.68 4.79 0 8.68-3.89 8.68-8.68C24.02 4.37 20.13.48 15.34.48z"/>
        </svg>
      )
    },
    { 
      label: 'Spotify', 
      href: 'https://open.spotify.com/show/57EZfD4yx65soP0ruZuk6u', 
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.501 17.311c-.219.359-.68.474-1.039.256-2.883-1.761-6.512-2.16-10.785-1.183-.41.094-.82-.16-.915-.569-.094-.41.16-.82.569-.915 4.675-1.069 8.675-.615 11.914 1.362.359.218.474.68.256 1.039zm1.472-3.26c-.275.449-.865.597-1.314.321-3.298-2.029-8.327-2.617-12.227-1.433-.5.152-1.025-.133-1.178-.634-.151-.5.133-1.025.634-1.177 4.455-1.352 10.002-.693 13.763 1.621.449.276.598.866.322 1.314zm.126-3.385c-3.955-2.349-10.485-2.564-14.269-1.415-.606.184-1.242-.153-1.426-.759-.184-.606.153-1.242.759-1.426 4.341-1.318 11.543-1.06 16.1 1.644.545.323.725 1.034.401 1.579-.323.545-1.034.726-1.579.401z"/>
        </svg>
      )
    },
  ];

  const footerLinks = [
    { label: 'Diary', href: '/diary' },
    { label: 'Shop', href: '/shop' },
    { label: 'Chiefs', href: '/chiefs' },
    { label: 'Guide', href: '/guide' },
  ];

  const legalLinks = [
    { label: 'Mentions Légales', href: '/mentions-legales' },
    { label: 'Conditions d\'Utilisation (CGU)', href: '/cgu' },
    { label: 'Politique de Cookies', href: '/cookies' },
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
                  <span className="footer__social-icon">{link.svg}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer__legal-nav">
            <span className="footer__nav-title">Légal</span>
            <div className="footer__nav-links">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer__nav-link legal-link">
                  {link.label}
                </Link>
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
          grid-template-columns: 1.5fr 1fr 1.3fr 1fr;
          gap: var(--space-2xl);
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

        .legal-link {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer__social-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer__social-link {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.9375rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all var(--duration-fast) var(--ease-out);
        }

        .footer__social-link:hover {
          color: var(--text-primary);
        }

        .footer__social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: color var(--duration-fast) var(--ease-out);
        }

        .footer__social-link:hover .footer__social-icon {
          color: var(--text-primary);
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

        @media (max-width: 900px) {
          .footer__top {
            grid-template-columns: 1fr 1fr;
            gap: var(--space-2xl);
          }
        }

        @media (max-width: 600px) {
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