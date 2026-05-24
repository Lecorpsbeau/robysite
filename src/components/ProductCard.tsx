'use client';

import { useState } from 'react';
import type { Product } from '@/lib/data';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const statusConfig: Record<string, { label: string; color: string; bgColor: string }> = {
    LIVE: { label: 'DROP LIVE', color: 'var(--accent-primary)', bgColor: 'var(--accent-primary-dim)' },
    SOLD_OUT: { label: 'SOLD OUT', color: 'var(--accent-danger)', bgColor: 'var(--accent-danger-dim)' },
    COMING_SOON: { label: 'BIENTÔT', color: 'var(--accent-cool)', bgColor: 'var(--accent-cool-dim)' },
  };

  const status = statusConfig[product.status];

  return (
    <div
      className={`product-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="product-card__image">
        <div className="product-card__image-placeholder">
          <span className="product-card__image-icon">◆</span>
          <span className="product-card__image-text">{product.category}</span>
        </div>

        {/* Status Badge */}
        <span
          className="product-card__status"
          style={{ color: status.color, background: status.bgColor, borderColor: `${status.color}40` }}
        >
          <span className="product-card__status-dot" style={{ background: status.color }}></span>
          {status.label}
        </span>
      </div>

      {/* Info */}
      <div className="product-card__info">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>
        <div className="product-card__footer">
          <span className="product-card__price">{formatPrice(product.price)}</span>
          {product.status === 'LIVE' && (
            <a href="https://www.patreon.com/c/RobyDLR/home" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm" style={{ textDecoration: 'none' }}>
              Soutenir (Patreon)
            </a>
          )}
          {product.status === 'COMING_SOON' && (
            <button className="btn btn--secondary btn--sm">
              Notifier
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        .product-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: all var(--duration-normal) var(--ease-out);
        }

        .product-card.hovered {
          border-color: var(--border-accent);
          transform: translateY(-4px);
        }

        .product-card__image {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
          background: var(--bg-secondary);
        }

        .product-card__image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-elevated) 100%);
        }

        .product-card__image-icon {
          font-size: 2.5rem;
          color: var(--text-muted);
          opacity: 0.3;
        }

        .product-card__image-text {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }

        .product-card__status {
          position: absolute;
          top: 12px;
          right: 12px;
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          border: 1px solid;
          backdrop-filter: blur(8px);
        }

        .product-card__status-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        .product-card__info {
          padding: 1.25rem;
        }

        .product-card__name {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.375rem;
        }

        .product-card__desc {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-card__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .product-card__price {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
