'use client';

import { useState } from 'react';
import type { Video } from '@/lib/data';

interface VideoCardProps {
  video: Video;
  onSelect?: (video: Video) => void;
  index?: number;
}

export default function VideoCard({ video, onSelect, index = 0 }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const categoryColors: Record<string, string> = {
    VLOG: 'var(--accent-cool)',
    GUIDE: 'var(--accent-primary)',
    RAW: 'var(--accent-warm)',
    SHORT: 'var(--accent-purple)',
  };

  return (
    <div
      className={`video-card ${isHovered ? 'video-card--hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect?.(video)}
      role="button"
      tabIndex={0}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Thumbnail */}
      <div className="video-card__thumb">
        <div className="video-card__thumb-placeholder">
          <span className="video-card__thumb-icon">▶</span>
        </div>

        {/* Overlay */}
        <div className="video-card__thumb-overlay">
          <div className="video-card__play-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </div>

        {/* Duration */}
        <span className="video-card__duration">{video.duration}</span>
      </div>

      {/* Info */}
      <div className="video-card__info">
        <h3 className="video-card__title">{video.title}</h3>
        <div className="video-card__meta">
          <span>{video.views} vues</span>
          <span className="video-card__meta-dot">·</span>
          <span>{video.date}</span>
        </div>
        {video.tracklist.length > 0 && (
          <div className="video-card__tracks">
            <span className="video-card__tracks-icon">♫</span>
            <span>{video.tracklist.length} morceaux</span>
          </div>
        )}
      </div>

      <style jsx>{`
        .video-card {
          cursor: pointer;
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: transform var(--duration-normal) var(--ease-out);
        }

        .video-card--hovered {
          transform: translateY(-4px);
        }

        .video-card__thumb {
          position: relative;
          aspect-ratio: 16/9;
          overflow: hidden;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
          background: var(--bg-card);
        }

        .video-card__thumb-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%);
          font-size: 2rem;
          color: var(--text-muted);
        }

        .video-card__thumb-icon {
          opacity: 0.3;
        }

        .video-card__thumb-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--duration-normal) var(--ease-out);
        }

        .video-card--hovered .video-card__thumb-overlay {
          opacity: 1;
        }

        .video-card__play-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--accent-primary);
          color: var(--text-inverse);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(0.8);
          transition: transform var(--duration-normal) var(--ease-out);
        }

        .video-card--hovered .video-card__play-btn {
          transform: scale(1);
        }

        .video-card__duration {
          position: absolute;
          bottom: 8px;
          right: 8px;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 600;
          background: rgba(0, 0, 0, 0.8);
          color: var(--text-primary);
          padding: 2px 6px;
          border-radius: var(--radius-sm);
        }

        .video-card__badge {
          position: absolute;
          top: 8px;
          left: 8px;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 3px 8px;
          border-radius: var(--radius-sm);
          border: 1px solid;
          backdrop-filter: blur(8px);
        }

        .video-card__info {
          padding: 0.875rem 0.25rem;
        }

        .video-card__title {
          font-family: var(--font-heading);
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 0.375rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .video-card__meta {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }

        .video-card__meta-dot {
          color: var(--border-accent);
        }

        .video-card__tracks {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          margin-top: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: var(--accent-primary);
        }

        .video-card__tracks-icon {
          font-size: 0.8rem;
        }
      `}</style>
    </div>
  );
}
