'use client';

import { useState } from 'react';
import { Video } from '@/lib/data'; // Importation du vrai type global
import VideoCard from '@/components/VideoCard';
import VideoPlayer from '@/components/VideoPlayer';
import TracklistPlayer from '@/components/TracklistPlayer';

// 1. Vidéo à la une (Mise en avant tout en haut)
const featuredVideo: Video = {
  id: 'featured-1',
  youtubeId: 'RdjMT7x6nYs',
  title: "3 choses que j'aurais aimé savoir avant le lycée",
  category: 'GUIDE',
  views: '1.2K', 
  date: 'Mai 2026',
  description: "Ce que personne ne te dit sur les années lycée. Conseils bruts, organisation et mindset pour aborder cette étape sereinement sans perdre de temps.",
  thumbnail: 'https://img.youtube.com/vi/RdjMT7x6nYs/maxresdefault.jpg',
  duration: '12:45',
  tracklist: [] 
};

// 2. Les 5 autres vidéos pour la grille du dessous
const diaryVideos: Video[] = [
  {
    id: 'v-1',
    youtubeId: 'IUU7bDvKU4U',
    title: 'VLOG • Focus & Journaling Nocturne',
    category: 'VLOG',
    views: '840',
    date: 'Mai 2026',
    description: 'Une plongée dans les sessions de travail de nuit, le process de création et la mise en place du projet.',
    thumbnail: 'https://img.youtube.com/vi/IUU7bDvKU4U/maxresdefault.jpg',
    duration: '15:20',
    tracklist: []
  },
  {
    id: 'v-2',
    youtubeId: 'Bgrd6YcRcus',
    title: 'GUIDE • Setup Automne/Hiver : Minimalisme & Code',
    category: 'GUIDE',
    views: '950',
    date: 'Avril 2026',
    description: 'Optimisation de l\'espace de travail et outils indispensables pour dev et créer du contenu au quotidien.',
    thumbnail: 'https://img.youtube.com/vi/Bgrd6YcRcus/maxresdefault.jpg',
    duration: '08:15',
    tracklist: []
  },
  {
    id: 'v-3',
    youtubeId: 'g6AYzsBNbg0',
    title: 'RAW • Exploration Urbaine & Caméra Embarquée',
    category: 'RAW',
    views: '1.1K',
    date: 'Avril 2026',
    description: 'Rushs bruts et sessions de vlogging immersives sans fioritures.',
    thumbnail: 'https://img.youtube.com/vi/g6AYzsBNbg0/maxresdefault.jpg',
    duration: '22:40',
    tracklist: []
  },
  {
    id: 'v-4',
    youtubeId: 'or4PfnEJBMU',
    title: 'VLOG • Trip Épisode Spécial',
    category: 'VLOG',
    views: '1.5K',
    date: 'Avril 2026',
    description: 'Carnet de bord visuel, rencontres et esthétique underground.',
    thumbnail: 'https://img.youtube.com/vi/or4PfnEJBMU/maxresdefault.jpg',
    duration: '18:10',
    tracklist: []
  },
  {
    id: 'v-5',
    youtubeId: '3kUQDTGPAFI',
    title: 'RAW • Session Créative & Sound Design',
    category: 'RAW',
    views: '620',
    date: 'Mars 2026',
    description: 'Focus sur l\'ambiance sonore, la sélection des tracks et le montage brut.',
    thumbnail: 'https://img.youtube.com/vi/3kUQDTGPAFI/maxresdefault.jpg',
    duration: '05:50',
    tracklist: []
  }
];

export default function DiaryPage() {
  // Ajout de "SHORT" dans le type de l'état pour correspondre au fichier global
  const [activeGridVideo, setActiveGridVideo] = useState<Video | null>(diaryVideos[0]);
  const [filter, setFilter] = useState<'ALL' | 'VLOG' | 'GUIDE' | 'RAW' | 'SHORT'>('ALL');

  const filteredVideos = filter === 'ALL' 
    ? diaryVideos 
    : diaryVideos.filter(v => v.category === filter);

  const handleSelectVideo = (video: Video) => {
    setActiveGridVideo(video);
    const element = document.getElementById('grid-player-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="diary-page">
      <div className="container">
        
        <header className="diary-header">
          <h1 className="diary-title">THE DIARY</h1>
          <p className="diary-subtitle">Explore l&apos;intégralité des vlogs, guides et contenus bruts.</p>
        </header>

        {/* SECTION 1 : LA VIDÉO INCONTOURNABLE (Toujours fixe en haut) */}
        <section className="diary-section-featured">
          <div className="section-label">À LA UNE</div>
          <div className="diary-featured">
            <div className="diary-featured__player">
              <VideoPlayer youtubeId={featuredVideo.youtubeId} title={featuredVideo.title} />
              
              <div className="diary-featured__info">
                <h2>{featuredVideo.title}</h2>
                <div className="diary-featured__meta">
                  <span className="label-category">{featuredVideo.category}</span>
                  <span>•</span>
                  <span>{featuredVideo.views} vues</span>
                  <span>•</span>
                  <span>{featuredVideo.date}</span>
                </div>
                <p>{featuredVideo.description}</p>
              </div>
            </div>
            
            <div className="diary-featured__sidebar">
              <TracklistPlayer tracks={featuredVideo.tracklist || []} videoTitle={featuredVideo.title} />
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* SECTION 2 : LE LECTEUR DE LA GRILLE */}
        {activeGridVideo && (
          <section id="grid-player-section" className="diary-section-grid-player">
            <div className="diary-featured">
              <div className="diary-featured__player">
                <VideoPlayer youtubeId={activeGridVideo.youtubeId} title={activeGridVideo.title} />
                
                <div className="diary-featured__info">
                  <h2>{activeGridVideo.title}</h2>
                  <div className="diary-featured__meta">
                    <span className="label-category">{activeGridVideo.category}</span>
                    <span>•</span>
                    <span>{activeGridVideo.views} vues</span>
                    <span>•</span>
                    <span>{activeGridVideo.date}</span>
                  </div>
                  <p>{activeGridVideo.description}</p>
                </div>
              </div>
              
              <div className="diary-featured__sidebar">
                <TracklistPlayer tracks={activeGridVideo.tracklist || []} videoTitle={activeGridVideo.title} />
              </div>
            </div>
          </section>
        )}

        {/* FILTRES POUR LES 5 VIDÉOS (Inclusion du type SHORT au cas où) */}
        <div className="diary-filters">
          {(['ALL', 'VLOG', 'GUIDE', 'RAW', 'SHORT'] as const).map(f => (
            <button 
              key={f}
              className={`diary-filter ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'ALL' ? 'Tout voir' : f}
            </button>
          ))}
        </div>

        {/* LA GRILLE DES 5 VIDÉOS */}
        <div className="grid grid--3">
          {filteredVideos.map((video, index) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              index={index} 
              onSelect={handleSelectVideo}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .diary-page {
          padding: calc(var(--space-4xl) + 60px) 0 var(--space-4xl);
        }

        .diary-header {
          margin-bottom: var(--space-3xl);
          text-align: center;
        }

        .diary-title {
          margin-bottom: 0.5rem;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .diary-subtitle {
          color: var(--text-secondary);
        }

        .section-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 0.1em;
          margin-bottom: var(--space-md);
          text-transform: uppercase;
        }

        .section-divider {
          border: 0;
          height: 1px;
          background: var(--border);
          margin: var(--space-3xl) 0;
        }

        .diary-featured {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--space-xl);
          margin-bottom: var(--space-xl);
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

        .label-category {
          background: var(--bg-secondary);
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid var(--border);
        }

        .diary-featured__info p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .diary-filters {
          display: flex;
          gap: 0.5rem;
          margin-top: var(--space-2xl);
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