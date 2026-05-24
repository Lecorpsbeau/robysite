'use client';

import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import SectionReveal from '@/components/SectionReveal';
import Image from 'next/image';

export default function ShopPage() {
  return (
    <div className="shop-page">
      <div className="container">
        
        {/* HEADER IMMERSIF AVEC TON ICÔNE PROFIL COMME AUTHENTIFICATION */}
        <header className="page-header">
          <SectionReveal>
            <div className="author-auth-badge">
              <Image 
                src="/images/profile.jpg" 
                alt="Authentifié par Augustin" 
                width={60} 
                height={60} 
                className="author-icon"
                priority
              />
              <span className="auth-mantra">ROBY DALIER — VISION</span>
            </div>
            <span className="label label--secondary">STORE</span>
            <h1 className="page-title">DROPS OFFICIELS</h1>
            <p className="page-subtitle">Authenticité & Proportions. Éditions limitées.</p>
          </SectionReveal>
        </header>

        {/* GRILLE DE PRODUITS AVEC TES VÊTEMENTS */}
        <div className="grid grid--3">
          {products.map((product, index) => (
            <SectionReveal key={product.id} delay={index * 0.1}>
              {/* Note: Ton composant ProductCard devra être mis à jour pour afficher l'image du produit */}
              <ProductCard product={product} />
            </SectionReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .shop-page {
          padding: calc(var(--space-4xl) + 60px) 0 var(--space-4xl);
          background: var(--bg-primary); /* Fond Deep Forest */
        }

        .page-header {
          text-align: center;
          margin-bottom: var(--space-3xl);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .author-auth-badge {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding: 0.5rem 1rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-pill, 100px);
        }

        .author-icon {
          border-radius: 50%;
          border: 1.5px solid var(--border-accent);
          object-fit: cover;
        }

        .auth-mantra {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .page-title {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-family: var(--font-titles);
        }

        .page-subtitle {
          color: var(--text-secondary);
          max-width: 600px;
          margin-inline: auto;
        }
      `}</style>
    </div>
  );
}