import type { Race } from '~/data/races'

const MONTHS = ['JANV', 'FÉVR', 'MARS', 'AVR', 'MAI', 'JUIN', 'JUIL', 'AOÛT', 'SEPT', 'OCT', 'NOV', 'DÉC']

/** Date badge parts for a race card: { month: 'OCT', day: '24-25', year: '2026' }. */
export function raceBadge(race: Race) {
  const [y1, m1, d1] = race.startDate.split('-').map(Number)
  const [, m2, d2] = race.endDate.split('-').map(Number)
  const day = race.startDate === race.endDate
    ? String(d1)
    : m1 === m2 ? `${d1}-${d2}` : `${d1}/${m1}-${d2}/${m2}`
  return { month: MONTHS[m1 - 1], day, year: String(y1) }
}
