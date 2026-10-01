// Single source of truth for the club's identity (NAP). Reused by the pages,
// the footer and the JSON-LD so the three never drift apart.
// Sources: FFVRC club directory (n°0008), membership form 2026 (RNA),
// Journal officiel (declaration of 23 October 1978).
import logoUrl from '~/assets/images/logo-amo.png'
import ogImageUrl from '~/assets/images/og-amo-montpellier.jpg'

export const SITE_URL = 'https://amo-montpellier.fr'

export const club = {
  name: 'Association Modéliste Occitane',
  shortName: 'AMO Montpellier',
  acronym: 'AMO',
  foundingYear: 1978,
  rna: 'W343013325',
  ffvrcNumber: '0008',
  email: 'amo.montpellier@gmail.com',
  phone: '06 44 24 38 64',
  phoneE164: '+33644243864',
  address: {
    venue: "Piste municipale d'auto-modélisme du parc de Grammont",
    street: 'Allée Alexis Vastine, Parc de Grammont',
    postalCode: '34000',
    city: 'Montpellier',
    region: 'Occitanie',
    country: 'FR',
  },
  geo: { lat: 43.614614, lng: 3.92427 },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=43.614614,3.92427',
  scales: ['1/10', '1/8', 'GT8', '1/5', '1/4'],
  links: {
    facebook: 'https://www.facebook.com/montpellier.amo/',
    facebookPhotos: 'https://www.facebook.com/montpellier.amo/photos',
    mylaps: 'https://speedhive.mylaps.com/Practice/2912',
    paypal: 'https://paypal.me/amomontpellier',
    ffvrc: 'https://www.ffvrc.fr/',
    ffvrcRegistration: 'https://www.ffvrcweb.fr/inscription/',
    ffvrcCalendar: 'https://www.ffvrc.fr/fr/calendrier.html',
  },
  membershipForm: '/images/adhesion_officielle_2026_amo.pdf',
  logo: { url: logoUrl, width: 600, height: 193 },
  ogImage: { url: ogImageUrl, width: 1200, height: 630 },
}

export const fullAddress = `${club.address.street}, ${club.address.postalCode} ${club.address.city}`
