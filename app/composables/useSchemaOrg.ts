import { SITE_URL, club } from '~/data/club'
import type { Race } from '~/data/races'
import { racePoster } from '~/utils/racePoster'

// JSON-LD builders. Every node uses a stable @id so pages can reference the club,
// the track and the website without repeating them.
export const schemaIds = {
  club: `${SITE_URL}/#club`,
  logo: `${SITE_URL}/#logo`,
  track: `${SITE_URL}/#track`,
  website: `${SITE_URL}/#website`,
}

const absolute = (path: string) => (path.startsWith('http') ? path : SITE_URL + path)

export function clubNodes() {
  return [
    {
      '@type': 'SportsClub',
      '@id': schemaIds.club,
      'name': club.name,
      'alternateName': [club.acronym, club.shortName],
      'url': `${SITE_URL}/`,
      'email': club.email,
      'telephone': club.phoneE164,
      'foundingDate': String(club.foundingYear),
      'sport': 'Voitures radiocommandées sur piste',
      'description': `Club de voitures radiocommandées sur piste à Montpellier, affilié à la FFVRC (club n°${club.ffvrcNumber}) depuis ${club.foundingYear}. Échelles ${club.scales.join(', ')}, loisir et compétition, jeunes et adultes.`,
      'identifier': [
        { '@type': 'PropertyValue', 'propertyID': 'RNA', 'value': club.rna },
        { '@type': 'PropertyValue', 'propertyID': 'FFVRC', 'value': club.ffvrcNumber },
      ],
      'logo': { '@id': schemaIds.logo },
      'image': absolute(club.ogImage.url),
      'address': postalAddress(),
      'location': { '@id': schemaIds.track },
      'sameAs': [club.links.facebook, club.links.mylaps],
      'memberOf': {
        '@type': 'SportsOrganization',
        'name': 'Fédération Française de Voitures Radio Commandées',
        'alternateName': 'FFVRC',
        'url': club.links.ffvrc,
      },
    },
    {
      '@type': 'ImageObject',
      '@id': schemaIds.logo,
      'url': absolute(club.logo.url),
      'contentUrl': absolute(club.logo.url),
      'width': club.logo.width,
      'height': club.logo.height,
      'caption': `Logo ${club.name} (${club.shortName})`,
    },
    {
      '@type': 'SportsActivityLocation',
      '@id': schemaIds.track,
      'name': club.address.venue,
      'url': `${SITE_URL}/piste-grammont`,
      'telephone': club.phoneE164,
      'address': postalAddress(),
      'geo': { '@type': 'GeoCoordinates', 'latitude': club.geo.lat, 'longitude': club.geo.lng },
      'hasMap': club.mapsUrl,
      'containedInPlace': { '@type': 'Park', 'name': 'Parc de Grammont', 'address': { '@type': 'PostalAddress', 'addressLocality': club.address.city, 'addressCountry': club.address.country } },
    },
    {
      '@type': 'WebSite',
      '@id': schemaIds.website,
      'name': club.shortName,
      'url': `${SITE_URL}/`,
      'inLanguage': 'fr-FR',
      'publisher': { '@id': schemaIds.club },
    },
  ]
}

export function postalAddress() {
  return {
    '@type': 'PostalAddress',
    'streetAddress': club.address.street,
    'postalCode': club.address.postalCode,
    'addressLocality': club.address.city,
    'addressRegion': club.address.region,
    'addressCountry': club.address.country,
  }
}

export function webPageNode(path: string, name: string, description: string) {
  const url = SITE_URL + path
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    'url': url,
    'name': name,
    'description': description,
    'inLanguage': 'fr-FR',
    'isPartOf': { '@id': schemaIds.website },
    'about': { '@id': schemaIds.club },
  }
}

export function eventNode(race: Race) {
  const url = `${SITE_URL}/courses/${race.slug}`
  return {
    '@type': 'SportsEvent',
    '@id': `${url}#event`,
    'name': race.title,
    'sport': 'Voitures radiocommandées sur piste',
    'startDate': race.startDate,
    'endDate': race.endDate,
    'eventStatus': race.rescheduled ? 'https://schema.org/EventRescheduled' : 'https://schema.org/EventScheduled',
    ...(race.rescheduled ? { previousStartDate: race.rescheduled.previousStartDate } : {}),
    'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
    'description': race.summary,
    'url': url,
    'image': [absolute(racePoster(race)?.jpg ?? club.ogImage.url)],
    'organizer': { '@id': schemaIds.club },
    'location': { '@id': schemaIds.track },
  }
}

export function breadcrumbNode(items: { name: string, path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'name': item.name,
      'item': SITE_URL + item.path,
    })),
  }
}

/** Injects one JSON-LD @graph into the page head. Club, track and website nodes are always included. */
export function useSchemaGraph(nodes: object[]) {
  useHead({
    script: [{
      key: 'schema-org-graph',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({ '@context': 'https://schema.org', '@graph': [...clubNodes(), ...nodes] }),
    }],
  })
}
