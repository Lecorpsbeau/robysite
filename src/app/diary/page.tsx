'use client';

import { useState } from 'react';
import { Video } from '@/lib/data'; // Importation du vrai type global
import VideoCard from '@/components/VideoCard';
import VideoPlayer from '@/components/VideoPlayer';
import TracklistPlayer from '@/components/TracklistPlayer';

// Centralisation de toutes les vidéos pour pouvoir basculer de l'une à l'autre dynamiquement
const allVideos: Video[] = [
  {
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
  },
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
  // Par défaut, la vidéo active au chargement est la première de la liste
  const [activeVideo, setActiveVideo] = useState<Video>(allVideos[0]);
  const [filter, setFilter] = useState<'ALL' | 'VLOG' | 'GUIDE' | 'RAW' | 'SHORT'>('ALL');

  // Filtrage : on garde toutes les vidéos ou seulement celles de la catégorie sélectionnée, 
  // MAIS on exclut la vidéo actuellement en cours de lecture pour faire office de "recommandations"
  const recommendationVideos = allVideos.filter(video => {
    const matchesCategory = filter === 'ALL' || video.category === filter;
    const isNotPlaying = video.id !== activeVideo.id;
    return matchesCategory && isNotPlaying;
  });

  const handleSelectVideo = (video: Video) => {
    setActiveVideo(video);
    // Remonte en douceur vers le lecteur haut de page
    const element = document.getElementById('main-player-section');
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

        {/* LECTEUR PRINCIPAL (En haut de l'interface, s'actualise dynamiquement) */}
        <section id="main-player-section" className="diary-section-featured">
          <div className="section-label">LECTEUR EN COURS</div>
          <div className="diary-featured">
            <div className="diary-featured__player">
              {/* Le lecteur reçoit l'ID YouTube de la vidéo sélectionnée activement */}
              <VideoPlayer youtubeId={activeVideo.youtubeId} title={activeVideo.title} />
              
              <div className="diary-featured__info">
                <h2>{activeVideo.title}</h2>
                <div className="diary-featured__meta">
                  <span className="label-category">{activeVideo.category}</span>
                  <span>•</span>
                  <span>{activeVideo.views || '1K'} vues</span>
                  <span>•</span>
                  <span>{activeVideo.date}</span>
                </div>
                <p>{activeVideo.description}</p>
              </div>
            </div>
            
            <div className="diary-featured__sidebar">
              <TracklistPlayer tracks={activeVideo.tracklist || []} videoTitle={activeVideo.title} />
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        {/* FILTRES POUR LES SUGGESTIONS */}
        <div className="diary-filters-header">
          <div className="section-label" style={{ margin: 0 }}>SUGGESTIONS & RECOMMANDATIONS</div>
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
        </div>

        {/* GRILLE DES RECOMMANDATIONS (Affiche les 5 autres vidéos) */}
        {recommendationVideos.length > 0 ? (
          <div className="grid grid--3">
            {recommendationVideos.map((video, index) => (
              <VideoCard 
                key={video.id} 
                video={video} 
                index={index} 
                onSelect={handleSelectVideo}
              />
            ))}
          </div>
        ) : (
          <p className="no-results">Aucune autre vidéo disponible dans cette catégorie.</p>
        )}
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

        .diary-filters-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--space-md);
          margin-bottom: var(--space-xl);
        }

        .diary-filters {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
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

        .no-results {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-muted);
          text-align: center;
          padding: var(--space-xl) 0;
        }

        @media (max-width: 900px) {
          .diary-featured {
            grid-template-columns: 1fr;
          }
          .diary-filters-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}