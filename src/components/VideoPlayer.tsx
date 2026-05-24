'use client';

import { useState } from 'react';

interface VideoPlayerProps {
  youtubeId: string;
  title: string;
}

export default function VideoPlayer({ youtubeId, title }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="video-player">
      {!isPlaying ? (
        <div className="video-player__overlay" onClick={() => setIsPlaying(true)}>
          <div className="video-player__thumb" style={{ backgroundImage: `url(https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg)` }} />
          <div className="video-player__dimmer" />
          <button className="video-player__play" aria-label="Play video">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </button>
        </div>
      ) : (
        <iframe
          className="video-player__iframe"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}

      <style jsx>{`
        .video-player {
          position: relative;
          aspect-ratio: 16/9;
          width: 100%;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .video-player__overlay {
          position: absolute;
          inset: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .video-player__thumb {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform var(--duration-slow) var(--ease-out);
        }

        .video-player__overlay:hover .video-player__thumb {
          transform: scale(1.05);
        }

        .video-player__dimmer {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          transition: background var(--duration-normal) var(--ease-out);
        }

        .video-player__overlay:hover .video-player__dimmer {
          background: rgba(0, 0, 0, 0.2);
        }

        .video-player__play {
          position: relative;
          z-index: 1;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: var(--accent-primary);
          color: var(--text-inverse);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--duration-normal) var(--ease-out);
        }

        .video-player__play svg {
          width: 32px;
          height: 32px;
          margin-left: 4px;
        }

        .video-player__overlay:hover .video-player__play {
          transform: scale(1.1);
        }

        .video-player__iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }
      `}</style>
    </div>
  );
}
