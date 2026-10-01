// Official races on the AMO track. One entry = one card on the homepage,
// one page under /courses/<slug>, one SportsEvent in the JSON-LD and one sitemap URL.
// Dates must match the FFVRC calendar: https://www.ffvrc.fr/fr/calendrier.html
export interface Race {
  slug: string
  title: string
  /** <title> tag, ≤ 60 characters */
  seoTitle: string
  /** Short label for cards and the banner */
  shortTitle: string
  type: string
  startDate: string // ISO yyyy-mm-dd, first race day
  endDate: string // ISO yyyy-mm-dd, last race day
  /** Human-readable dates, shown as-is */
  dateLabel: string
  practiceNote?: string
  /** Set when the race was postponed: shown on the site and sent as EventRescheduled in the JSON-LD */
  rescheduled?: { previousStartDate: string, previousDateLabel: string }
  categories: string[]
  summary: string
  practicalInfo?: string[]
  /** Poster file name (without extension) in app/assets/images/courses/, as .jpg and .webp */
  poster?: { name: string, width: number, height: number, alt: string }
  color: string
}

export const races: Race[] = [
  {
    slug: 'course-de-ligue-11-octobre-2026',
    title: 'Course de Ligue Occitanie du 11 octobre 2026',
    seoTitle: 'Course de Ligue RC du 11 octobre 2026 à Montpellier | AMO',
    shortTitle: 'Course de Ligue',
    type: 'Course régionale officielle FFVRC',
    startDate: '2026-10-11',
    endDate: '2026-10-11',
    dateLabel: 'Dimanche 11 octobre 2026',
    practiceNote: 'Roulage libre le samedi 10 octobre.',
    categories: [
      '1/10 DTM 13.5T Stock',
      '1/10 Pancar 13.5T Stock',
      '1/8 4x4 électrique et thermique',
      'GT8 électrique',
    ],
    summary: "La course de Ligue Occitanie du dimanche 11 octobre 2026 se court sur la piste de l'AMO, au parc de Grammont à Montpellier. Course régionale officielle FFVRC, elle accueille les catégories 1/10 DTM et Pancar 13.5T Stock, 1/8 4x4 électrique et thermique, et GT8 électrique.",
    practicalInfo: [
      'Minimum 5 pilotes par catégorie.',
      'Roulage libre le samedi 10 octobre.',
      'Buvette ouverte le dimanche.',
    ],
    poster: {
      name: 'affiche-course-de-ligue-2026-10-11',
      width: 640,
      height: 773,
      alt: "Affiche de la course de Ligue AMO Montpellier du 11 octobre 2026 : 1/10 DTM et Pancar 13.5 Stock, 1/8 4x4 thermique et électrique, GT8 électrique",
    },
    color: 'from-orange-500 to-amber-500',
  },
  {
    slug: 'coupe-de-france-piste-1-8-4x4-2026',
    title: 'Coupe de France Piste 1/8 4x4 2026',
    seoTitle: 'Coupe de France Piste 1/8 4x4 RC 2026 à Montpellier | AMO',
    shortTitle: 'Coupe de France 1/8 4x4',
    type: 'Coupe de France FFVRC',
    startDate: '2026-10-24',
    endDate: '2026-10-25',
    dateLabel: 'Samedi 24 et dimanche 25 octobre 2026',
    practiceNote: 'Essais libres le vendredi 23 octobre.',
    categories: ['1/8 4x4 électrique et thermique'],
    summary: "La Coupe de France FFVRC de piste 1/8 4x4 se court les samedi 24 et dimanche 25 octobre 2026 sur la piste de l'AMO, au parc de Grammont à Montpellier, avec des essais libres le vendredi 23 octobre. Elle est organisée par l'Association Modéliste Occitane, club FFVRC n°0008.",
    color: 'from-red-600 to-red-500',
  },
  {
    slug: 'challenge-inter-club-1-5-1-4-15-novembre-2026',
    title: 'Challenge Inter Club 1/5 et 1/4 : 4e manche du 15 novembre 2026',
    seoTitle: 'Challenge Inter Club RC 1/5 et 1/4, 15 novembre 2026 | AMO',
    shortTitle: 'Challenge Inter Club 1/5 + 1/4',
    type: 'Challenge Inter Club · 4e manche',
    startDate: '2026-11-15',
    endDate: '2026-11-15',
    dateLabel: 'Dimanche 15 novembre 2026',
    rescheduled: { previousStartDate: '2026-11-08', previousDateLabel: 'dimanche 8 novembre 2026' },
    categories: ['Piste 1/5', 'Piste 1/4'],
    summary: "La 4e manche du Challenge Inter Club 1/5 et 1/4 est reportée au dimanche 15 novembre 2026, au lieu du dimanche 8 novembre. Elle se court sur la piste de l'AMO, au parc de Grammont à Montpellier.",
    color: 'from-blue-600 to-sky-500',
  },
]

/** Races whose last day is today or later, in date order. */
export function upcomingRaces(today = new Date()): Race[] {
  const iso = today.toISOString().slice(0, 10)
  return races
    .filter(r => r.endDate >= iso)
    .sort((a, b) => a.startDate.localeCompare(b.startDate))
}

export function raceBySlug(slug: string): Race | undefined {
  return races.find(r => r.slug === slug)
}
