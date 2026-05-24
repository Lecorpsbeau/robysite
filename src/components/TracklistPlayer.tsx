'use client';

import { useState } from 'react';
import type { Track } from '@/lib/data';

interface TracklistPlayerProps {
  tracks: Track[];
  videoTitle: string;
}

export default function TracklistPlayer({ tracks, videoTitle }: TracklistPlayerProps) {
  const [activeTrack, setActiveTrack] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  if (tracks.length === 0) return null;

  return (
    <div className="tracklist">
      <button
        className="tracklist__header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="tracklist__header-left">
          <span className="tracklist__icon">♫</span>
          <span className="tracklist__title">Tracklist</span>
          <span className="tracklist__count">{tracks.length} morceaux</span>
        </div>
        <span className={`tracklist__chevron ${isExpanded ? 'open' : ''}`}>▾</span>
      </button>

      <div className={`tracklist__body ${isExpanded ? 'open' : ''}`}>
        {tracks.map((track, index) => (
          <div
            key={index}
            className={`tracklist__track ${activeTrack === index ? 'active' : ''}`}
            onClick={() => setActiveTrack(activeTrack === index ? null : index)}
          >
            <div className="tracklist__track-left">
              <span className="tracklist__timestamp">{track.timestamp}</span>
              <div className="tracklist__track-info">
                <span className="tracklist__track-title">{track.title}</span>
                <span className="tracklist__track-artist">{track.artist}</span>
              </div>
            </div>

            <div className="tracklist__track-actions">
              {track.spotifyUrl && track.spotifyUrl !== '#' && (
                <a
                  href={track.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tracklist__spotify-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  Spotify ↗
                </a>
              )}
              <div className={`tracklist__eq ${activeTrack === index ? 'playing' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        ))}

        <div className="tracklist__footer">
          <span className="tracklist__footer-text">
            Tracklist de &quot;{videoTitle}&quot;
          </span>
        </div>
      </div>

      <style jsx>{`
        .tracklist {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .tracklist__header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          background: none;
          border: none;
          cursor: pointer;
          transition: background var(--duration-fast) var(--ease-out);
        }

        .tracklist__header:hover {
          background: rgba(255, 255, 255, 0.02);
        }

        .tracklist__header-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .tracklist__icon {
          color: var(--accent-primary);
          font-size: 1rem;
        }

        .tracklist__title {
          font-family: var(--font-heading);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .tracklist__count {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: var(--text-muted);
        }

        .tracklist__chevron {
          color: var(--text-muted);
          transition: transform var(--duration-normal) var(--ease-out);
          font-size: 1.25rem;
        }

        .tracklist__chevron.open {
          transform: rotate(180deg);
        }

        .tracklist__body {
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--duration-slow) var(--ease-out);
        }

        .tracklist__body.open {
          max-height: 600px;
        }

        .tracklist__track {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.25rem;
          border-top: 1px solid var(--border);
          cursor: pointer;
          transition: background var(--duration-fast) var(--ease-out);
        }

        .tracklist__track:hover {
          background: rgba(255, 255, 255, 0.02);
        }

        .tracklist__track.active {
          background: var(--accent-primary-dim);
          border-left: 2px solid var(--accent-primary);
        }

        .tracklist__track-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .tracklist__timestamp {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-primary);
          min-width: 40px;
        }

        .tracklist__track-info {
          display: flex;
          flex-direction: column;
          gap: 0.125rem;
        }

        .tracklist__track-title {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .tracklist__track-artist {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .tracklist__track-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .tracklist__spotify-btn {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: #1DB954;
          text-decoration: none;
          padding: 0.25rem 0.5rem;
          border: 1px solid rgba(29, 185, 84, 0.3);
          border-radius: var(--radius-sm);
          transition: all var(--duration-fast) var(--ease-out);
        }

        .tracklist__spotify-btn:hover {
          background: rgba(29, 185, 84, 0.1);
        }

        .tracklist__eq {
          display: flex;
          align-items: flex-end;
          gap: 2px;
          height: 16px;
        }

        .tracklist__eq span {
          width: 3px;
          height: 4px;
          background: var(--text-muted);
          border-radius: 1px;
          transition: height var(--duration-fast) ease;
        }

        .tracklist__eq.playing span:nth-child(1) {
          animation: eqBar1 0.5s ease-in-out infinite alternate;
          background: var(--accent-primary);
        }

        .tracklist__eq.playing span:nth-child(2) {
          animation: eqBar2 0.4s ease-in-out infinite alternate;
          background: var(--accent-primary);
        }

        .tracklist__eq.playing span:nth-child(3) {
          animation: eqBar3 0.6s ease-in-out infinite alternate;
          background: var(--accent-primary);
        }

        .tracklist__footer {
          padding: 0.75rem 1.25rem;
          border-top: 1px solid var(--border);
        }

        .tracklist__footer-text {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: var(--text-muted);
        }

        @keyframes eqBar1 {
          from { height: 4px; }
          to { height: 14px; }
        }

        @keyframes eqBar2 {
          from { height: 6px; }
          to { height: 10px; }
        }

        @keyframes eqBar3 {
          from { height: 3px; }
          to { height: 16px; }
        }
      `}</style>
    </div>
  );
}
