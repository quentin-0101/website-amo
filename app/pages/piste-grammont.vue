<script setup>
import { club, fullAddress } from '~/data/club'

const title = 'Piste RC de Grammont, Montpellier : accès et équipements | AMO'
const description = "Piste municipale d'auto-modélisme du parc de Grammont à Montpellier : adresse, accès près de l'A9, stands couverts avec 220 V et contact du club AMO."

useSeoPage({ title, description, path: '/piste-grammont' })
useSchemaGraph([
  {
    ...webPageNode('/piste-grammont', title, description),
    about: { '@id': schemaIds.track },
  },
  breadcrumbNode([{ name: 'Accueil', path: '/' }, { name: 'La piste', path: '/piste-grammont' }]),
])

const equipments = [
  { icon: 'check', text: 'Stands couverts et éclairés' },
  { icon: 'plug', text: 'Prises électriques 220 V à chaque stand' },
  { icon: 'wrench', text: 'Soufflette permanente pour nettoyer les voitures' },
  { icon: 'map-marker', text: "Point d'eau et parking sur place" },
]
</script>

<template>
  <main>
    <PageHero
      eyebrow="La piste"
      title="La piste d'auto-modélisme du parc de Grammont, à Montpellier"
      image-alt="Vue d'ensemble de la piste d'auto-modélisme du parc de Grammont à Montpellier"
      :crumbs="[{ name: 'Accueil', to: '/' }, { name: 'La piste' }]"
    >
      <p class="mt-6 text-lg text-gray-200 max-w-3xl leading-relaxed">
        La piste de l'AMO est la piste municipale d'auto-modélisme du parc de Grammont, {{ fullAddress }},
        à deux pas de l'entrée de l'autoroute A9 et du Zénith Sud. C'est une piste asphaltée pour voitures radiocommandées,
        sur laquelle les membres du club roulent tous les jours de l'année, en loisir comme en compétition.
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <a :href="club.mapsUrl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-full shadow-lg">
          <AppIcon name="map-marker" /> Itinéraire Google Maps
        </a>
        <a :href="club.links.mylaps" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 border-2 border-white/80 text-white font-bold px-6 py-3 rounded-full hover:bg-white/10">
          <AppIcon name="clock-o" /> Chronos des entraînements
        </a>
      </div>
    </PageHero>

    <div class="bg-slate-100">
      <div class="container mx-auto px-4 py-12 md:py-16">
        <div class="max-w-5xl mx-auto space-y-8">
          <div class="grid gap-8 md:grid-cols-2">
            <section class="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 border-t-4 border-t-red-600" aria-labelledby="acces-h">
              <h2 id="acces-h" class="text-2xl font-bold mb-5 text-slate-900 flex items-center gap-3">
                <span class="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center"><AppIcon name="map-marker" /></span>
                Adresse et accès
              </h2>
              <address class="not-italic space-y-2 text-slate-700">
                <p class="font-semibold text-slate-900">{{ club.address.venue }}</p>
                <p>{{ club.address.street }}<br>{{ club.address.postalCode }} {{ club.address.city }}</p>
                <p class="flex items-center gap-2"><AppIcon name="phone" class="text-red-600" /><a :href="`tel:${club.phoneE164}`" class="text-red-700 font-semibold hover:underline">{{ club.phone }}</a></p>
                <p class="flex items-center gap-2"><AppIcon name="envelope" class="text-red-600" /><a :href="`mailto:${club.email}`" class="text-red-700 font-semibold hover:underline break-all">{{ club.email }}</a></p>
              </address>
              <ul class="space-y-2 text-slate-700 mt-5 pt-5 border-t border-slate-100">
                <li class="flex gap-3"><AppIcon name="check" class="text-red-600 mt-1 shrink-0" /><span>Près de l'entrée de l'autoroute A9 et du Zénith Sud.</span></li>
                <li class="flex gap-3"><AppIcon name="check" class="text-red-600 mt-1 shrink-0" /><span>Parking sur place.</span></li>
                <li class="flex gap-3"><AppIcon name="check" class="text-red-600 mt-1 shrink-0" /><span>Hôtel le plus proche : Campanile Montpellier Le Millénaire, 1080 avenue Henri Becquerel (2,5 km).</span></li>
              </ul>
            </section>

            <section class="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 border-t-4 border-t-green-600" aria-labelledby="equipements-h">
              <h2 id="equipements-h" class="text-2xl font-bold mb-5 text-slate-900 flex items-center gap-3">
                <span class="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center"><AppIcon name="wrench" /></span>
                Équipements
              </h2>
              <ul class="space-y-3">
                <li v-for="item in equipments" :key="item.text" class="flex items-center gap-4 rounded-2xl bg-slate-50 border border-slate-100 px-4 py-3 text-slate-800">
                  <span class="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center shrink-0"><AppIcon :name="item.icon" /></span>
                  {{ item.text }}
                </li>
                <li class="flex items-center gap-4 rounded-2xl bg-slate-50 border border-slate-100 px-4 py-3 text-slate-800">
                  <span class="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center shrink-0"><AppIcon name="clock-o" /></span>
                  <span>Chronométrage des entraînements :
                    <a :href="club.links.mylaps" target="_blank" rel="noopener noreferrer" class="text-red-700 font-semibold hover:underline">temps au tour sur MYLAPS Speedhive</a></span>
                </li>
              </ul>
            </section>
          </div>

          <!-- What you can do there -->
          <section class="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 md:p-10 shadow-lg" aria-labelledby="pratique-h">
            <div class="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
            <div class="relative">
              <h2 id="pratique-h" class="text-2xl md:text-3xl font-bold mb-4">Ce qu'on y pratique</h2>
              <ul class="flex flex-wrap gap-2 mb-5">
                <li v-for="scale in club.scales" :key="scale" class="font-bold text-yellow-400 bg-white/10 border border-white/15 rounded-full px-4 py-1.5">{{ scale }}</li>
              </ul>
              <p class="text-slate-200 leading-relaxed max-w-3xl">
                Voitures radiocommandées sur piste, en électrique et en thermique. La piste accueille les entraînements des membres
                et des courses officielles FFVRC. Pour rouler, il faut être membre du club et licencié FFVRC. Pour une visite ou un essai, contactez le club.
              </p>
              <div class="flex flex-wrap gap-3 mt-6">
                <NuxtLink to="/adhesion" class="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-6 py-3 rounded-full hover:bg-gray-100">
                  <AppIcon name="users" /> Tarifs et adhésion
                </NuxtLink>
                <NuxtLink to="/courses" class="inline-flex items-center gap-2 border-2 border-white/80 text-white font-bold px-6 py-3 rounded-full hover:bg-white/10">
                  <AppIcon name="flag-checkered" /> Calendrier des courses
                </NuxtLink>
              </div>
            </div>
          </section>

          <section aria-labelledby="images-h">
            <h2 id="images-h" class="text-2xl font-bold mb-5 text-slate-900">La piste en images</h2>
            <div class="grid gap-6 md:grid-cols-2 items-start">
              <figure class="bg-white rounded-3xl p-3 shadow-sm border border-slate-200">
                <img
                  src="~/assets/images/piste-grammont-revetement.webp"
                  alt="Revêtement asphalte et vibreurs bleus et jaunes de la piste de Grammont"
                  width="800"
                  height="1039"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-auto rounded-2xl"
                >
                <figcaption class="text-sm text-slate-500 mt-2 px-1">Le revêtement et les vibreurs de la piste.</figcaption>
              </figure>
              <figure class="bg-white rounded-3xl p-3 shadow-sm border border-slate-200">
                <div class="rounded-2xl overflow-hidden">
                  <EmbedFacade
                    src="https://www.youtube-nocookie.com/embed/booALn7QHlQ"
                    thumbnail="https://i.ytimg.com/vi/booALn7QHlQ/hqdefault.jpg"
                    title="Vidéo YouTube : la nouvelle piste de l'AMO à Montpellier (chaîne RC en PLS)"
                    label="Lire la vidéo de la piste"
                  />
                </div>
                <figcaption class="text-sm text-slate-500 mt-2 px-1">Vidéo de la piste par la chaîne YouTube RC en PLS.</figcaption>
              </figure>
            </div>
          </section>
        </div>
      </div>
    </div>

    <ContactBand title="Envie de venir rouler ?" text="Pour une visite ou un essai sur la piste, contactez le bureau du club." />
  </main>
</template>
