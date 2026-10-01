import type { Race } from '~/data/races'

// Race posters live in app/assets/images/courses/<name>.jpg and .webp and are compiled by Vite
// (hashed file names, long-term caching). races.ts only stores the file name, because the
// server sitemap route also imports races.ts and cannot import images.
const files = import.meta.glob('../assets/images/courses/*.{jpg,webp}', { eager: true, import: 'default' }) as Record<string, string>

function find(name: string, ext: 'jpg' | 'webp') {
  return Object.entries(files).find(([path]) => path.endsWith(`/${name}.${ext}`))?.[1]
}

/** Compiled URLs of a race poster, or undefined when the race has none (or the file is missing). */
export function racePoster(race: Race) {
  if (!race.poster) return undefined
  const jpg = find(race.poster.name, 'jpg')
  const webp = find(race.poster.name, 'webp')
  if (!jpg || !webp) return undefined
  return { ...race.poster, jpg, webp }
}
