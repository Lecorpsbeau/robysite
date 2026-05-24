'use client';

import { useState } from 'react';
import { videos } from '@/lib/data';
import type { Video } from '@/lib/data';
import VideoCard from '@/components/VideoCard';
import VideoPlayer from '@/components/VideoPlayer';
import TracklistPlayer from '@/components/TracklistPlayer';

export default function DiaryPage() {
  const [activeVideo, setActiveVideo] = useState<Video | null>(videos[0]);
  const [filter, setFilter] = useState<'ALL' | 'VLOG' | 'GUIDE' | 'RAW'>('ALL');

  const filteredVideos = filter === 'ALL' 
    ? videos 
    : videos.filter(v => v.category === filter);

  // Fonction pour changer de vidéo et remonter doucement vers le lecteur
  const handleSelectVideo = (video: Video) => {
    setActiveVideo(video);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="diary-page">
      <div className="container">
        <header className="diary-header">
          <h1 className="diary-title">THE DIARY</h1>
          <p className="diary-subtitle">Explore l&apos;intégralité des vlogs, guides et contenus bruts.</p>
        </header>

        {/* Featured Video Player Area */}
        {activeVideo && (
          <div className="diary-featured">
            <div className="diary-featured__player">
              <VideoPlayer youtubeId={activeVideo.youtubeId} title={activeVideo.title} />
              
              <div className="diary-featured__info">
                <h2>{activeVideo.title}</h2>
                <div className="diary-featured__meta">
                  <span className="label">{activeVideo.category}</span>
                  <span>•</span>
                  <span>{activeVideo.views} vues</span>
                  <span>•</span>
                  <span>{activeVideo.date}</span>
                </div>
                <p>{activeVideo.description}</p>
              </div>
            </div>
            
            <div className="diary-featured__sidebar">
              <TracklistPlayer tracks={activeVideo.tracklist} videoTitle={activeVideo.title} />
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="diary-filters">
          {(['ALL', 'VLOG', 'GUIDE', 'RAW'] as const).map(f => (
            <button 
              key={f}
              className={`diary-filter ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'ALL' ? 'Tout voir' : f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid--3">
          {filteredVideos.map((video, index) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              index={index} 
              onSelect={handleSelectVideo} // Utilise la nouvelle fonction ici
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .diary-page {
          padding: calc(var(--space-4xl) + 60px) 0 var(--space-4xl);
        }

        .diary-header {
          margin-bottom: var(--space-2xl);
          text-align: center;
        }

        .diary-title {
          margin-bottom: 0.5rem;
        }

        .diary-subtitle {
          color: var(--text-secondary);
        }

        .diary-featured {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--space-xl);
          margin-bottom: var(--space-3xl);
          padding-bottom: var(--space-2xl);
          border-bottom: 1px solid var(--border);
        }

        .diary-featured__info {
          margin-top: var(--space-lg);
        }

        .diary-featured__info h2 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .diary-featured__meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }

        .diary-featured__info p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .diary-filters {
          display: flex;
          gap: 0.5rem;
          margin-bottom: var(--space-xl);
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }

        .diary-filter {
          padding: 0.5rem 1rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          white-space: nowrap;
          transition: all var(--duration-fast) var(--ease-out);
        }

        .diary-filter:hover {
          color: var(--text-primary);
          border-color: var(--border-accent);
        }

        .diary-filter.active {
          color: var(--bg-primary);
          background: var(--text-primary);
          border-color: var(--text-primary);
        }

        @media (max-width: 900px) {
          .diary-featured {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}