'use client';

import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import SectionReveal from '@/components/SectionReveal';

export default function ShopPage() {
  return (
    <div className="shop-page">
      <div className="container">
        <header className="page-header">
          <SectionReveal>
            <span className="label label--danger">STORE</span>
            <h1 className="page-title">DROPS OFFICIELS</h1>
            <p className="page-subtitle">Chaos & Authenticity. Éditions limitées.</p>
          </SectionReveal>
        </header>

        <div className="grid grid--3">
          {products.map((product, index) => (
            <SectionReveal key={product.id} delay={index * 0.1}>
              <ProductCard product={product} />
            </SectionReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .shop-page {
          padding: calc(var(--space-4xl) + 60px) 0 var(--space-4xl);
        }

        .page-header {
          text-align: center;
          margin-bottom: var(--space-3xl);
        }

        .page-title {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .page-subtitle {
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
}
