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
  status: 'LIVE' | 'SOLD_OUT' | 'COMING_SOON';
  category: string;
  dropDate?: string;
}

export interface GuideSection {
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
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
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  status: 'LIVE' | 'SOLD_OUT' | 'COMING_SOON';
  category?: string;  // ← Ajoute le petit "?" ici pour la rendre optionnelle !
  dropDate?: string;
  subtitle?: string;  // Au cas où tu l'utilises aussi
  stockMax?: number;
  stockLeft?: number;
  mantra?: string;
}
export const products = [
  {
    id: 'hoodie-dreamer',
    name: 'THE DREAMER Hoodie — Noir',
    subtitle: 'COTON LOURD 400G • CROP DIY',
    price: 79,
    image: '/images/sweatshirt-gris.webp', // Chemin de ton image
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
    image: '/images/tee.webp', // Chemin de ton image
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
    image: '/images/hat.webp', // Chemin de ton image
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
  // Supprime la ligne icon ici
}

export const guideSections: GuideSection[] = [
  {
    slug: 'deep-work',
    title: 'Deep Work',
    subtitle: 'Cal Newport',
    coverImage: '/images/cover-deepwork.jpg',
    pdfFilename: 'Deep_Work_Cal_Newport.pdf', // Ajuste le nom exact de ton PDF
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
  lookmaxxing: {
    title: 'Maîtrise du Lookmaxxing',
    intro: 'Le visage et le corps sont des actifs que l\'on optimise. L\'objectif est d\'envoyer des signaux de haute valeur biologique. Pour Roby, l\'apparence physique n\'est pas une futilité — c\'est un indicateur de santé et de discipline.',
    sections: [
      {
        title: 'Le Protocole Mewing',
        content: 'La technique centrale est le Mewing, mais elle nécessite une précision chirurgicale. Il ne suffit pas de poser la langue au palais ; il faut engager la langue sur toute sa longueur pour éviter de bloquer les voies respiratoires.',
        tips: [
          'L\'Effet Ventouse (Vacuum Effect) : En avalant ta salive, tu crées une pression négative qui plaque la langue contre le palais de façon permanente.',
          'La Technique du "N" : Prononce un "N" de manière désinvolte pour trouver le End Spot (juste derrière les incisives).',
          'Cheesy Swallowing : Avale en souriant largement pour forcer la langue à faire tout le travail de déglutition, isolant ainsi les muscles buccinateurs pour creuser les joues.',
        ],
      },
      {
        title: 'Hollow Cheeks & Jawline',
        content: 'Les joues creusées et une mâchoire définie sont les marqueurs d\'un visage sculpté. Le Mewing combiné à une faible masse graisseuse faciale et à la mastication régulière (chewing gum dur) va restructurer progressivement la zone mandibulaire.',
        tips: [
          'Mastique du chewing-gum dur (type Falim) 30 minutes par jour pour hypertrophier les masséters.',
          'Réduis le sodium et bois 2-3L d\'eau par jour pour limiter la rétention d\'eau faciale.',
          'Dors sur le dos pour éviter la compression asymétrique du visage.',
        ],
      },
    ],
    table: {
      headers: ['Avantages Beauté', 'Avantages Santé'],
      rows: [
        ['Mâchoire sculptée et projetée', 'Alignement dentaire naturel'],
        ['Pommettes rehaussées', 'Optimisation de la respiration nasale'],
        ['Joues creusées (Hollow Cheeks)', 'Réduction de l\'apnée du sommeil'],
        ['Regard plus "hunter"', 'Correction de la posture cervicale'],
      ],
    },
  },
  yoke: {
    title: 'Architecture du Yoke',
    intro: 'Pour imposer une présence physique (la Frame), Roby privilégie le Yoke plutôt que la masse globale. Le but est de créer un contraste maximal entre la région claviculaire et la taille — le fameux V-Taper.',
    sections: [
      {
        title: 'Anatomie Stratégique',
        content: 'Cible les trapèzes supérieurs (en respectant leur orientation de fibres diagonale), le haut des pectoraux, les deltoïdes latéraux et le cou. Ces muscles créent l\'illusion d\'une carrure massive même sous des vêtements.',
        tips: [
          'Trapèzes : Shrugs avec barre, farmer\'s walks lourds (3×12-15)',
          'Pectoraux supérieurs : Guillotine Press à la Smith Machine — barre descendant au niveau des clavicules',
          'Deltoïdes latéraux : Élévations latérales avec buste légèrement penché en avant (4×15-20)',
          'Cou : Neck curls et Side-to-side (50-100 reps au poids de corps, ou 10-15 reps lestées)',
        ],
      },
      {
        title: 'Le Programme Yoke Builder',
        content: 'Un programme de 4 jours par semaine focalisé sur le haut du corps et la région claviculaire, avec des techniques d\'intensification pour maximiser l\'hypertrophie.',
        tips: [
          'Jour 1 : Push (Pec supérieur + Deltoïdes + Triceps)',
          'Jour 2 : Pull (Dos largeur + Trapèzes + Biceps)',
          'Jour 3 : Repos actif (cardio LISS 30 min)',
          'Jour 4 : Yoke Focus (Cou + Trapèzes + Deltoïdes latéraux)',
          'Jour 5 : Legs (Squat + Deadlift — pour la testostérone)',
        ],
      },
    ],
  },
  style: {
    title: 'Style Intentionnel',
    intro: 'S\'habiller n\'est pas une question de goût, c\'est de la communication visuelle. Roby rejette la fast-fashion de mauvaise qualité pour une stratégie d\'investissement temporel. Si tu n\'as pas de budget, investis du temps.',
    sections: [
      {
        title: 'La Règle d\'Or des Proportions',
        content: 'Respecte systématiquement le ratio 1/3 en haut, 2/3 en bas. Cela allonge les jambes et structure la silhouette. Les hauts doivent être "croppés" ou retroussés pour marquer la taille.',
        tips: [
          'Retrousse légèrement le bas de tes pantalons pour créer une cassure nette à la cheville.',
          'Les t-shirts doivent s\'arrêter au niveau des hanches, jamais en dessous.',
          'Utilise Pinterest comme moodboard avant tout achat — définis ton esthétique (Old Money, Dark Confidence, Star Boy).',
        ],
      },
      {
        title: 'Stratégie d\'Achat : Temps vs Argent',
        content: 'Si tu n\'as pas de budget, tu dois investir du temps. Uniqlo est l\'unique exception acceptable en fast-fashion pour sa durabilité. Le reste se construit en seconde main.',
      },
    ],
    table: {
      headers: ['Pièce', 'Budget Max (Seconde Main)'],
      rows: [
        ['Hauts (T-shirts, Chemises)', '2€ à 15€'],
        ['Bas (Coupes larges/baggy)', '25€ à 30€'],
        ['Pulls / Hoodies', '20€ à 30€'],
        ['Grosses pièces (Manteaux)', '100€ à 150€'],
        ['Chaussures (EXCEPTION: Full Price)', 'Air Force 1, Salomon, Gazelle'],
      ],
    },
  },
  'bio-optimization': {
    title: 'Optimisation Biologique',
    intro: 'L\'adolescence est la seule fenêtre de tir pour hacker ta génétique. Roby en est la preuve vivante : il a atteint 1,81-1,82m alors que ses deux parents font moins de 1,70m.',
    sections: [
      {
        title: 'Le Sommeil comme Dopage Naturel',
        content: 'L\'hormone de croissance est sécrétée lors de la première phase du sommeil. Louper cette fenêtre à cause de la lumière bleue est du sabotage pur.',
        tips: [
          'Coupe les lumières zénithales 2h avant le coucher. Utilise des bougies (15-20 Lux).',
          'Active le filtre rouge sur ton smartphone — indispensable pour neutraliser la lumière bleue.',
          'Douche chaude avant le dodo pour forcer le corps à se refroidir par réaction.',
          'Chambre fraîche (18-19°C) pour optimiser la thermorégulation.',
          'Vise 8-9h de sommeil — non négociable pendant la croissance.',
        ],
      },
      {
        title: 'Nutrition de Haute Densité',
        content: 'Ton corps est une machine de construction osseuse et musculaire. Nourris-le comme tel.',
        tips: [
          '8 à 10 œufs par jour — l\'aliment le plus dense nutritionnellement.',
          'Protéines : 2g par kg de poids de corps minimum.',
          'Calcium : produits laitiers crus, lait entier, fromage.',
          'Collagène : bouillon d\'os ou supplémentation pour les articulations.',
          'Sport à haute intensité : charges lourdes + sprints de 20-25 secondes pour stimuler la croissance.',
        ],
      },
    ],
  },
  mindset: {
    title: 'Ingénierie Sociale & Mindset',
    intro: 'La gestion de l\'attention est la monnaie du 21ème siècle. Roby prône une déconnexion radicale pour se reconstruire. Pendant que les autres dorment ou se détruisent, toi tu construis.',
    sections: [
      {
        title: 'Détox de Dopamine',
        content: 'Supprime Instagram et TikTok pendant un mois. Le contenu rapide détruit ton système de récompense et te rend incapable de fournir un effort soutenu.',
        tips: [
          'Semaine 1-2 : Supprime toutes les apps de réseaux sociaux. L\'ennui est ton allié.',
          'Semaine 3-4 : Remplace le scroll par de la lecture (30 min/jour minimum).',
          'Après 30 jours : Réinstalle Instagram uniquement comme portfolio/carte de visite.',
          'Règle absolue : Crée plus que tu ne consommes.',
        ],
      },
      {
        title: 'Le Cercle de Qualité',
        content: 'Pourquoi craindre d\'être exclu par des gens dont les seuls hobbies sont de fumer, boire et traîner ? La vraie popularité se construit par l\'excellence.',
        tips: [
          'Privilégie les rencontres via des activités : Gym, Billard, Festivals, Sport outdoor.',
          'Entoure-toi de gens qui partagent une vision de progrès constant.',
          'Ton feed Instagram = ta carte de visite. Clean, stratégique, orienté statut.',
          'La logique du rejet social : les gens qui te rejettent pour tes ambitions ne méritent pas ton énergie.',
        ],
      },
    ],
  },
};

