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
    image: '/images/hoodie.webp',
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

export const guideSections: GuideSection[] = [
  {
    slug: 'deep-work',
    title: 'Deep Work',
    subtitle: 'Cal Newport',
    coverImage: '/images/deepwork.jpg',
    pdfFilename: 'deepwork.pdf',
    pdfSize: '2.8 Mo',
    color: 'var(--accent-primary)',
    description: 'La méthode exacte pour éliminer totalement les distractions, basculer en Monk Mode et accomplir en 2 heures ce que les autres font en une semaine.',
  },
  {
    slug: 'atomic-habits',
    title: 'Atomic Habits',
    subtitle: 'James Clear',
    coverImage: '/images/atomic-habits.jpg',
    pdfFilename: 'atomic-habits.pdf',
    pdfSize: '5.1 Mo',
    color: 'var(--accent-warm)',
    description: 'Comment de micro-changements de 1% dans ta routine quotidienne détruisent tes mauvaises habitudes pour hacker ton physique, ton code et ton business.',
  },
  {
    slug: '48-laws-of-power',
    title: 'Les 48 Lois du Pouvoir',
    subtitle: 'Robert Greene',
    coverImage: '/images/power.jpg',
    pdfFilename: 'les-48-lois-du-pouvoir.pdf',
    pdfSize: '2.1 Mo',
    color: 'var(--accent-danger)',
    description: 'Le blueprint de l\'ingénierie sociale. Maîtrise ton image, décode les dynamiques de groupe et protège ton attention des manipulateurs.',
  },
  {
    slug: 'cant-hurt-me-fr',
    title: "Can't Hurt Me (FR)",
    subtitle: 'David Goggins',
    coverImage: '/images/goggins-fr.jpg',
    pdfFilename: 'cant-hurt-me-fr.pdf',
    pdfSize: '4.5 Mo',
    color: 'var(--accent-purple)',
    description: 'Le protocole de la résilience pure en version française. Comment briser la barrière psychologique des 40% et reprogrammer ton esprit.',
  },
  {
    slug: 'cant-hurt-me-en',
    title: "Can't Hurt Me (EN)",
    subtitle: 'David Goggins',
    coverImage: '/images/goggins-en.jpg',
    pdfFilename: 'cant-hurt-me-en.pdf',
    pdfSize: '4.2 Mo',
    color: 'var(--accent-muted)',
    description: 'The original military-grade discipline blueprint by David Goggins. Master your mind and defy the odds.',
  },
  {
    slug: 'bansenshukai',
    title: 'Bansenshukai',
    subtitle: 'L\'Art Secret des Ninjas',
    coverImage: '/images/bansenshukai.jpg',
    pdfFilename: 'bansenshukai.pdf',
    pdfSize: '6.4 Mo',
    color: 'var(--accent-dark)',
    description: 'L\'anthologie secrète de la stratégie shinobi. Philosophie de l\'infiltration, de l\'esprit calme et de l\'adaptation totale au terrain.',
  },
  {
    slug: 'be-obsessed',
    title: 'Be Obsessed or Be Average',
    subtitle: 'Grant Cardone',
    coverImage: '/images/be-obsessed.jpg',
    pdfFilename: 'be-obsessed.pdf',
    pdfSize: '3.1 Mo',
    color: 'var(--accent-warning)',
    description: 'Pourquoi l\'obsession saine est ton seul outil pour sortir de la masse. Utilise ton hyperactivité et ton ambition comme des super-pouvoirs.',
  },
  {
    slug: 'comment-se-faire-des-amis',
    title: 'Comment se faire des Amis',
    subtitle: 'Dale Carnegie',
    coverImage: '/images/carnegie.jpg',
    pdfFilename: 'comment-se-faire-des-amis.pdf',
    pdfSize: '1.9 Mo',
    color: 'var(--accent-success)',
    description: 'Les clés fondamentales des relations humaines et du leadership. Indispensable pour manager, réseauter et comprendre la psychologie de tes interlocuteurs.',
  },
  {
    slug: 'les-quatre-accords-tolteques',
    title: 'Les Quatre Accords Toltèques',
    subtitle: 'Don Miguel Ruiz',
    coverImage: '/images/tolteques.jpg',
    pdfFilename: 'les-quatre-accords-tolteques.pdf',
    pdfSize: '1.2 Mo',
    color: 'var(--accent-teal)',
    description: 'Le code de conduite ancestral pour atteindre une liberté intérieure totale, nettoyer son ego et stopper le parasitage mental.',
  },
  {
    slug: 'influence-et-manipulation',
    title: 'Influence et Manipulation',
    subtitle: 'Robert Cialdini',
    coverImage: '/images/cialdini.jpg',
    pdfFilename: 'influence-et-manipulation.pdf',
    pdfSize: '3.7 Mo',
    color: 'var(--accent-indigo)',
    description: 'Les 6 piliers de la persuasion. Apprends comment fonctionnent les déclencheurs psychologiques de la vente et du marketing pour mieux les maîtriser.',
  },
  {
    slug: 'l-art-subtil-de-s-en-foutre',
    title: "L'Art Subtil de s'en Foutre",
    subtitle: 'Mark Manson',
    coverImage: '/images/manson.jpg',
    pdfFilename: 'l-art-subtil-de-s-en-foutre.pdf',
    pdfSize: '2.5 Mo',
    color: 'var(--accent-orange)',
    description: 'Le guide anti-développement personnel. Choisis tes combats et arrête de gaspiller ton précieux capital d\'attention pour des détails futiles.',
  },
  {
    slug: 'la-semaine-de-4-heures',
    title: 'La Semaine de 4 Heures',
    subtitle: 'Tim Ferriss',
    coverImage: '/images/ferriss.jpg',
    pdfFilename: 'la-semaine-de-4-heures.pdf',
    pdfSize: '4.8 Mo',
    color: 'var(--accent-lime)',
    description: 'Automatisation, délégation et optimisation radicale de tes projets pour t\'émanciper du temps et bosser d\'où tu veux.',
  },
  {
    slug: 'le-manuel-du-succes',
    title: 'Le Manuel du Succès (Inédit)',
    subtitle: 'Inconnu',
    coverImage: '/images/manuel-succes.jpg',
    pdfFilename: 'le-manuel-du-succes-que-l-on-ne-vous-a-jamais-dit.pdf',
    pdfSize: '1.5 Mo',
    color: 'var(--accent-violet)',
    description: 'Les règles non écrites et les secrets de mindset de performance que le système éducatif traditionnel ne t\'enseignera jamais.',
  },
  {
    slug: 'le-personal-mba',
    title: 'Le Personal MBA',
    subtitle: 'Josh Kaufman',
    coverImage: '/images/mba.jpg',
    pdfFilename: 'le-personal-mba.pdf',
    pdfSize: '5.9 Mo',
    color: 'var(--accent-blue)',
    description: 'Tout le programme des écoles de commerce d\'élite résumé dans les concepts cruciaux de la création de valeur, du marketing et du business.',
  },
  {
    slug: 'le-manuel-d-epictete',
    title: "Le Manuel d'Épictète",
    subtitle: 'Épictète',
    coverImage: '/images/epictete.jpg',
    pdfFilename: 'le-manuel-d-epictete.pdf',
    pdfSize: '0.9 Mo',
    color: 'var(--accent-stone)',
    description: 'Les fondations du stoïcisme pur. Sépare instantanément ce qui dépend de toi de ce qui n\'en dépend pas pour devenir émotionnellement invulnérable.',
  },
  {
    slug: 'platon-sophiste',
    title: 'Sophiste',
    subtitle: 'Platon',
    coverImage: '/images/platon.jpg',
    pdfFilename: 'platon-sophiste.pdf',
    pdfSize: '1.4 Mo',
    color: 'var(--accent-gray)',
    description: 'Une étude philosophique profonde sur la vérité, l\'illusion, le discours et l\'art de l\'argumentation face aux faux semblants.',
  },
  {
    slug: 'pouvoir-illimite',
    title: 'Pouvoir Illimité',
    subtitle: 'Tony Robbins',
    coverImage: '/images/robbins.jpg',
    pdfFilename: 'pouvoir-illimite-fr.pdf',
    pdfSize: '4.1 Mo',
    color: 'var(--accent-gold)',
    description: 'Programmation Neuro-Linguistique (PNL) appliquée à l\'excellence. Prends le contrôle de tes réactions physiques et de ta biochimie pour performer.',
  },
  {
    slug: 'l-art-de-la-guerre',
    title: "L'Art de la Guerre",
    subtitle: 'Sun Tzu',
    coverImage: '/images/sun-tzu.jpg',
    pdfFilename: 'l-art-de-la-guerre.pdf',
    pdfSize: '1.1 Mo',
    color: 'var(--accent-crimson)',
    description: 'Le traité de stratégie le plus puissant de l\'histoire humaine. Remporter le combat avant même d\'avoir engagé la bataille grâce au positionnement.',
  },
  {
    slug: 'the-one-thing',
    title: 'The One Thing',
    subtitle: 'Gary Keller',
    coverImage: '/images/the-one-thing.jpg',
    pdfFilename: 'the-one-thing.pdf',
    pdfSize: '2.3 Mo',
    color: 'var(--accent-emerald)',
    description: 'Trouve la tâche unique qui, une fois accomplie, rendra toutes les autres plus faciles ou carrément inutiles. L\'effet domino de la productivité.',
  },
  {
    slug: 'zero-to-one',
    title: 'Zero to One',
    subtitle: 'Peter Thiel',
    coverImage: '/images/zero-to-one.jpg',
    pdfFilename: 'zero-to-one.pdf',
    pdfSize: '3.4 Mo',
    color: 'var(--accent-cyan)',
    description: 'Le guide des start-ups et monopoles du futur par le co-fondateur de PayPal. Comment construire des entreprises qui créent une valeur radicalement neuve.',
  }
];

// --- Guide Content Stubs ---
export const guideContent: Record<string, {
  title: string;
  intro: string;
  sections: { title: string; content: string; tips?: string[] }[];
  table?: { headers: string[]; rows: string[][] };
}> = {
  'deep-work': {
    title: 'Maîtrise du Deep Work & Focus',
    intro: 'Le blueprint complet pour éliminer les distractions et basculer en Monk Mode.',
    sections: [{ title: 'Le Protocole Monk Mode', content: 'S\'isoler pour charbonner à l\'abri des regards.', tips: ['Mode avion radical', 'Blocs de 90 minutes'] }]
  },
  'atomic-habits': {
    title: 'La Science des Atomes d\'Habitudes',
    intro: 'Comment 1% de changement redéfinit ta discipline au quotidien.',
    sections: [{ title: 'L\'identité avant le résultat', content: 'Deviens un bâtisseur avant de vouloir un résultat parfait.' }]
  },
  '48-laws-of-power': {
    title: 'Décryptage des Lois du Pouvoir',
    intro: 'L\'ingénierie sociale expliquée pour protéger ton attention.',
    sections: [{ title: 'La Maîtrise de l\'Image', content: 'Ne surpasse jamais le maître et protège ta réputation comme un trésor.' }]
  },
  'cant-hurt-me-fr': {
    title: 'Esprit Inattaquable',
    intro: 'Reprogrammer sa tolérance à l\'effort et briser ses barrières psychologiques.',
    sections: [{ title: 'La règle des 40%', content: 'Quand ton esprit te dit que tu as fini, tu n\'es qu\'à 40% de tes capacités.' }]
  }
};