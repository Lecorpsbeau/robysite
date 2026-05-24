'use client';

import { useState } from 'react';
import { Video } from '@/lib/data'; // Importation du vrai type global
import VideoCard from '@/components/VideoCard';
import VideoPlayer from '@/components/VideoPlayer';
import TracklistPlayer from '@/components/TracklistPlayer';

// Utilisation des vraies vidéos synchronisées avec ton fichier data
const allVideos: Video[] = [
  {
    id: 'v1',
    title: "PLAN COMPLET pour glow up avant l'été",
    description: "Le guide ultime et le plan d'action en 90 jours pour transformer physiquement et mentalement ton quotidien avant l'arrivée des beaux jours.",
    thumbnail: '/images/glowup.jpg',
    duration: '28:40',
    views: '75K',
    date: 'Il y a 1 an',
    youtubeId: 'RdjMT7x6nYs',
    tracklist: [
      { timestamp: '0:00', title: 'Intro Beat', artist: 'Roby Edit', spotifyUrl: '#' },
      { timestamp: '3:24', title: 'After Dark', artist: 'Mr.Kitty', spotifyUrl: '#' },
      { timestamp: '8:15', title: 'Myth', artist: 'Beach House', spotifyUrl: '#' },
      { timestamp: '15:30', title: 'Le temps est bon', artist: 'Bon Entendeur', spotifyUrl: '#' },
      { timestamp: '22:00', title: 'Resonance', artist: 'HOME', spotifyUrl: '#' },
    ]
  },
  {
    id: 'v2',
    title: 'GUIDE COMPLET pour avoir un insta CLEAN',
    description: "Toutes les étapes indispensables pour nettoyer ton feed, optimiser ta bio, gérer ton personal branding et construire une esthétique Instagram impactante.",
    thumbnail: '/images/insta-clean.jpg',
    duration: '19:33',
    views: '30K',
    date: 'Il y a 1 an',
    youtubeId: 'IUU7bDvKU4U',
    tracklist: [
      { timestamp: '0:00', title: 'Glory Box', artist: 'Portishead', spotifyUrl: '#' },
      { timestamp: '5:12', title: 'Tadow', artist: 'Masego, FKJ', spotifyUrl: '#' },
      { timestamp: '12:45', title: 'Sunset Lover', artist: 'Petit Biscuit', spotifyUrl: '#' },
    ]
  },
  {
    id: 'v3',
    title: 'La MEILLEURE méthode pour avoir une jawline (GUIDE COMPLET)',
    description: 'Analyse et protocole complet autour du Mewing : posture de la langue, déglutition et exercices pour sculpter et redéfinir la structure de ta mâchoire.',
    thumbnail: '/images/jawline.jpg',
    duration: '22:15',
    views: '42K',
    date: 'Il y a 5 mois',
    youtubeId: 'P-ZmH0JQFgg',
    tracklist: [
      { timestamp: '0:00', title: 'SLOW DANCING IN THE DARK', artist: 'Joji', spotifyUrl: '#' },
      { timestamp: '10:30', title: 'Nights', artist: 'Frank Ocean', spotifyUrl: '#' },
    ]
  },
  {
    id: 'v4',
    title: 'Comment OPTIMISER sa CROISSANCE en tant qu’ADOLESCENT',
    description: "Sommeil, alimentation ciblée, entraînements adaptés et micro-nutriments. Tout ce que la science dit pour maximiser ton potentiel de croissance pendant l'adolescence.",
    thumbnail: '/images/croissance.jpg',
    duration: '15:45',
    views: '58K',
    date: 'Il y a 4 mois',
    youtubeId: '3kUQDTGPAFI',
    tracklist: [
      { timestamp: '0:00', title: 'Skinny Love', artist: 'Bon Iver', spotifyUrl: '#' },
      { timestamp: '4:20', title: 'Re: Stacks', artist: 'Bon Iver', spotifyUrl: '#' }
    ]
  },
  {
    id: 'v5',
    title: 'Full routine pour avoir des DENTS BLANCHES et des lèvres pulpeuses',
    description: "Mes secrets et ma routine d'hygiène buccale au quotidien pour un sourire éclatant et prendre soin de tes lèvres naturellement.",
    thumbnail: '/images/hygiene-buccale.jpg',
    duration: '18:22',
    views: '29K',
    date: 'Il y a 3 mois',
    youtubeId: 'or4PfnEJBMU',
    tracklist: []
  },
  {
    id: 'v6',
    title: '3 trucs que j’aurais exposé savoir avant le LYCÉE',
    description: "Erreurs classiques, gestion du statut social, productivité et mindset. Ce que j'aurais aimé qu'on me dise le jour de ma rentrée en Seconde.",
    thumbnail: '/images/lycee.jpg',
    duration: '31:31',
    views: '64K',
    date: 'Il y a 2 mois',
    youtubeId: 'Bgrd6YcRcus',
    tracklist: [
      { timestamp: '0:00', title: 'Snowfall', artist: 'Øneheart', spotifyUrl: '#' },
      { timestamp: '7:30', title: 'Sweater Weather', artist: 'The Neighbourhood', spotifyUrl: '#' },
    ]
  }
];

export default function DiaryPage() {
  // Par défaut, la vidéo active au chargement est la première de la liste
  const [activeVideo, setActiveVideo] = useState<Video>(allVideos[0]);

  // On filtre uniquement pour exclure la vidéo active (lecteur du haut) des suggestions
  const recommendationVideos = allVideos.filter(video => video.id !== activeVideo.id);

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
          <p className="diary-subtitle">Explore l&apos;intégralité des vidéos, guides et contenus.</p>
        </header>

        {/* LECTEUR PRINCIPAL (En haut de l'interface, s'actualise dynamiquement) */}
        <section id="main-player-section" className="diary-section-featured">
          <div className="section-label">LECTEUR EN COURS</div>
          <div className="diary-featured">
            <div className="diary-featured__player">
              <VideoPlayer youtubeId={activeVideo.youtubeId} title={activeVideo.title} />
              
              <div className="diary-featured__info">
                <h2>{activeVideo.title}</h2>
                <div className="diary-featured__meta">
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

        {/* EN-TÊTE DES RECOMMANDATIONS SANS FILTRES */}
        <div className="diary-filters-header">
          <div className="section-label" style={{ margin: 0 }}>PLUS DE VIDÉOS</div>
        </div>

        {/* GRILLE DES RECOMMANDATIONS */}
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
          <p className="no-results">Aucune autre vidéo disponible.</p>
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

        .diary-featured__info p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .diary-filters-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-xl);
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
        }
      `}</style>
    </div>
  );
}