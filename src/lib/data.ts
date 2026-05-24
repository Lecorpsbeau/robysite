// ============================================
// ROBY DALIER — Data Layer (Mock Data)
// ============================================

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  date: string;
  category: 'VLOG' | 'GUIDE' | 'RAW' | 'SHORT';
  youtubeId: string;
  tracklist: Track[];
}

export interface Track {
  timestamp: string;
  title: string;
  artist: string;
  spotifyUrl?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  status: string; // Acceptation de tous les statuts textuels (Limited, Drop Live, etc.)
  category?: string;
  dropDate?: string;
  subtitle?: string;
  stockMax?: number;
  stockLeft?: number;
  mantra?: string;
}

export interface GuideSection {
  slug: string;
  title: string;
  subtitle: string;
  coverImage: string;
  pdfFilename: string;
  pdfSize: string;
  color: string;
  description: string;
}

export interface ChallengeDay {
  day: number;
  tasks: {
    sport: boolean;
    reading: boolean;
    noPhone: boolean;
    nutrition: boolean;
    sleep: boolean;
  };
}

export interface RoutineConfig {
  axis: 'productivity' | 'physique' | 'balanced';
  intensity: 'beginner' | 'intermediate' | 'advanced';
  age: number;
  goals: string[];
}

// --- Videos ---
export const videos: Video[] = [
  {
    id: 'v1',
    title: 'PLAN COMPLET pour glow up avant l\'été',
    description: 'Le guide ultime pour ta transformation en 90 jours. Sport, nutrition, style, mindset — tout y est.',
    thumbnail: '/images/thumb-glowup.jpg',
    duration: '28:40',
    views: '75K',
    date: 'Il y a 1 an',
    category: 'GUIDE',
    youtubeId: 'RdjMT7x6nYs',
    tracklist: [
      { timestamp: '0:00', title: 'Intro Beat', artist: 'Roby Edit', spotifyUrl: '#' },
      { timestamp: '3:24', title: 'After Dark', artist: 'Mr.Kitty', spotifyUrl: 'https://open.spotify.com/track/2LKOHdMsL2K8KaINbWnUI5' },
      { timestamp: '8:15', title: 'Myth', artist: 'Beach House', spotifyUrl: 'https://open.spotify.com/track/1duRMU2IN2hQr8HpAYmPf7' },
      { timestamp: '15:30', title: 'Le temps est bon', artist: 'Bon Entendeur', spotifyUrl: '#' },
      { timestamp: '22:00', title: 'Resonance', artist: 'HOME', spotifyUrl: 'https://open.spotify.com/track/6b2RcmUt1g9N9mQ3CbjX2Y' },
    ]
  },
  {
    id: 'v2',
    title: 'Les 3 règles pour TOUJOURS être bien habillé',
    description: 'La règle 1/3 – 2/3, les basiques, et comment construire un style intentionnel sans budget.',
    thumbnail: '/images/thumb-style.jpg',
    duration: '19:33',
    views: '30K',
    date: 'Il y a 1 an',
    category: 'GUIDE',
    youtubeId: 'IUU7bDvKU4U',
    tracklist: [
      { timestamp: '0:00', title: 'Glory Box', artist: 'Portishead', spotifyUrl: '#' },
      { timestamp: '5:12', title: 'Tadow', artist: 'Masego, FKJ', spotifyUrl: '#' },
      { timestamp: '12:45', title: 'Sunset Lover', artist: 'Petit Biscuit', spotifyUrl: '#' },
    ]
  },
  {
    id: 'v3',
    title: '6 choses À FAIRE le matin pour changer ta vie en tant que LYCÉEN',
    description: 'La morning routine qui a tout changé. Hydratation, exercice, lecture — le protocole complet.',
    thumbnail: '/images/thumb-morning.jpg',
    duration: '31:31',
    views: '24K',
    date: 'Il y a 1 an',
    category: 'GUIDE',
    youtubeId: 'Bgrd6YcRcus',
    tracklist: [
      { timestamp: '0:00', title: 'Snowfall', artist: 'Øneheart', spotifyUrl: '#' },
      { timestamp: '7:30', title: 'Sweater Weather', artist: 'The Neighbourhood', spotifyUrl: '#' },
    ]
  },
  {
    id: 'v4',
    title: 'THE RAW DREAMER\'S DIARY — Ski Edit',
    description: 'Les grands espaces, la poudreuse, et un montage brut capturant l\'essence de la montagne.',
    thumbnail: '/images/thumb-ski.jpg',
    duration: '12:08',
    views: '18K',
    date: 'Il y a 8 mois',
    category: 'VLOG',
    youtubeId: '3kUQDTGPAFI',
    tracklist: [
      { timestamp: '0:00', title: 'Skinny Love', artist: 'Bon Iver', spotifyUrl: '#' },
      { timestamp: '4:20', title: 'Re: Stacks', artist: 'Bon Iver', spotifyUrl: '#' },
      { timestamp: '8:45', title: 'Intro', artist: 'The xx', spotifyUrl: '#' },
    ]
  },
  {
    id: 'v5',
    title: 'UNFILTERED — Ma vraie journée type (sans filtre)',
    description: 'Pas de montage fancy, pas de musique. Juste ma réalité brute, du réveil au coucher.',
    thumbnail: '/images/thumb-unfiltered.jpg',
    duration: '45:20',
    views: '12K',
    date: 'Il y a 6 mois',
    category: 'RAW',
    youtubeId: 'or4PfnEJBMU',
    tracklist: []
  },
  {
    id: 'v6',
    title: 'Comment avoir une MÂCHOIRE SCULPTÉE (Mewing Guide)',
    description: 'Le protocole complet de Mewing : technique du N, cheesy swallowing, et vacuum effect expliqués.',
    thumbnail: '/images/thumb-jawline.jpg',
    duration: '22:15',
    views: '42K',
    date: 'Il y a 5 mois',
    category: 'GUIDE',
    youtubeId: 'P-ZmH0JQFgg',
    tracklist: [
      { timestamp: '0:00', title: 'SLOW DANCING IN THE DARK', artist: 'Joji', spotifyUrl: '#' },
      { timestamp: '10:30', title: 'Nights', artist: 'Frank Ocean', spotifyUrl: '#' },
    ]
  },
];

// --- Products ---
export const products: Product[] = [
  {
    id: 'hoodie-dreamer',
    name: 'THE DREAMER Hoodie — Noir',
    subtitle: 'COTON LOURD 400G • CROP DIY',
    price: 79,
    image: '/images/sweatshirt-gris.webp',
    description: 'Coton brut, coupe oversize boxy. Broderie ocre "Allow Yourself to Dream" au dos.',
    stockMax: 100,
    stockLeft: 34,
    mantra: 'N’oublie pas de t’autoriser à rêver trop grand.',
    status: 'Limited'
  },
  {
    id: 'tee-diary',
    name: 'RAW DIARY Tee — Blanc cassé',
    subtitle: 'COTON BIO • PRINT MINIMALISTE',
    price: 39,
    image: '/images/tee.webp',
    description: 'T-shirt minimaliste, print "The Raw Dreamer’s Diary" au cœur.',
    stockMax: 50,
    stockLeft: 12,
    status: 'Drop Live'
  },
  {
    id: 'hat-chiefs',
    name: 'CHIEFS Casquette — Olive',
    subtitle: '5 PANELS • OLIVE PATCH',
    price: 29,
    image: '/images/hat.webp',
    description: 'Casquette technique, broderie "Chiefs Club".',
    status: 'Sold Out'
  }
];

// --- Guide Sections ---
export const guideSections: GuideSection[] = [
  {
    slug: 'deep-work',
    title: 'Deep Work',
    subtitle: 'Cal Newport',
    coverImage: '/images/cover-deepwork.jpg',
    pdfFilename: 'Deep_Work_Cal_Newport.pdf',
    pdfSize: '2.8 Mo',
    color: 'var(--accent-primary)',
    description: 'La méthode exacte pour éliminer totalement les distractions, basculer en Monk Mode et accomplir en 2 heures ce que les autres font en une semaine.',
  },
  {
    slug: 'atomic-habits',
    title: 'Atomic Habits',
    subtitle: 'James Clear',
    coverImage: '/images/cover-atomic.jpg',
    pdfFilename: 'Atomic habits ( PDFDrive ).pdf',
    pdfSize: '5.1 Mo',
    color: 'var(--accent-warm)',
    description: 'Comment de micro-changements de 1% dans ta routine quotidienne détruisent tes mauvaises habitudes pour hacker ton physique, ton code et ton business.',
  },
  {
    slug: '48-laws-of-power',
    title: 'Les 48 Lois du Pouvoir',
    subtitle: 'Robert Greene',
    coverImage: '/images/cover-power.jpg',
    pdfFilename: 'Power_les_48_lois_du_pouvoir_Robert_Greene_Z-Library (1).pdf',
    pdfSize: '2.1 Mo',
    color: 'var(--accent-danger)',
    description: 'Le blueprint de l\'ingénierie sociale. Maîtrise ton image, décode les dynamiques de groupe et protège ton attention des manipulateurs.',
  },
  {
    slug: 'cant-hurt-me',
    title: 'Can\'t Hurt Me',
    subtitle: 'David Goggins',
    coverImage: '/images/cover-goggins.jpg',
    pdfFilename: 'Can_t-Hurt-Me-David-Goggins (1).pdf',
    pdfSize: '4.5 Mo',
    color: 'var(--accent-purple)',
    description: 'Le protocole de la résilience pure. Comment briser la barrière psychologique des 40% et reprogrammer ton esprit pour la discipline militaire.',
  }
];

// --- Guide Content ---
export const guideContent: Record<string, {
  title: string;
  intro: string;
  sections: { title: string; content: string; tips?: string[] }[];
  table?: { headers: string[]; rows: string[][] };
}> = {
  'deep-work': {
    title: 'Maîtrise du Deep Work & Focus',
    intro: 'Le blueprint complet pour éliminer les distractions et basculer en Monk Mode.',
    sections: [
      {
        title: 'Le Protocole Monk Mode',
        content: 'Comment s\'isoler pour charbonner à l\'abri des regards...',
        tips: ['Mode avion radical', 'Blocs de 90 minutes']
      }
    ]
  },
  'atomic-habits': {
    title: 'La Science des Atomes d\'Habitudes',
    intro: 'Comment 1% de changement redéfinit ta discipline au quotidien.',
    sections: [
      {
        title: 'L\'identité avant le résultat',
        content: 'Deviens un bâtisseur avant de vouloir un résultat parfait.'
      }
    ]
  },
  '48-laws-of-power': {
    title: 'Décryptage des Lois du Pouvoir',
    intro: 'L\'ingénierie sociale expliquée pour protéger ton attention.',
    sections: []
  },
  'cant-hurt-me': {
    title: 'Esprit Inattaquable',
    intro: 'Reprogrammer sa tolérance à l\'effort et briser ses barrières psychologiques.',
    sections: []
  }
};