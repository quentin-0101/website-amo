<script setup>
import { club } from '~/data/club'
import mapThumbnail from '~/assets/images/piste-rc-grammont-montpellier-768.webp'
</script>

<template>
  <section id="location" class="py-16 md:py-12 bg-white relative scroll-mt-20">
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <div class="heading text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-light mb-4">Accès à la piste du parc de Grammont</h2>
          <div class="w-24 h-[2px] bg-amber-500 mx-auto" />
        </div>

        <div class="grid gap-8 md:grid-cols-5 items-start">
          <!-- NAP + access -->
          <div class="md:col-span-2 space-y-5 text-gray-700">
            <p class="leading-relaxed">
              La piste de l'AMO est la piste municipale d'auto-modélisme du parc de Grammont, à Montpellier,
              à deux pas de l'entrée de l'autoroute A9 et du Zénith Sud. Les membres y roulent tous les jours de l'année.
            </p>
            <address class="not-italic bg-gray-50 border border-gray-100 rounded-2xl p-5 space-y-2">
              <p class="font-bold text-slate-900">{{ club.name }} ({{ club.acronym }})</p>
              <p class="flex gap-3">
                <AppIcon name="map-marker" class="text-red-600 mt-1 shrink-0" />
                <span>{{ club.address.venue }}<br>{{ club.address.street }}<br>{{ club.address.postalCode }} {{ club.address.city }}</span>
              </p>
              <p class="flex gap-3 items-center">
                <AppIcon name="phone" class="text-red-600 shrink-0" />
                <a :href="`tel:${club.phoneE164}`" class="hover:text-red-600">{{ club.phone }}</a>
              </p>
              <p class="flex gap-3 items-center">
                <AppIcon name="envelope" class="text-red-600 shrink-0" />
                <a :href="`mailto:${club.email}`" class="hover:text-red-600 break-all">{{ club.email }}</a>
              </p>
            </address>
            <p class="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
              <a :href="club.mapsUrl" target="_blank" rel="noopener noreferrer" class="text-red-600 hover:underline">Itinéraire Google Maps</a>
              <NuxtLink to="/piste-grammont" class="text-red-600 hover:underline">Tout savoir sur la piste</NuxtLink>
            </p>
            <p class="text-sm text-gray-600">
              Hôtel le plus proche :
              <a
                href="https://www.google.com/maps/search/?api=1&query=Campanile+Montpellier+Le+Mill%C3%A9naire+1080+avenue+Henri+Becquerel"
                target="_blank"
                rel="noopener noreferrer"
                class="underline hover:text-red-600"
              >Campanile Montpellier Le Millénaire</a>, 1080 avenue Henri Becquerel (2,5 km, environ 5 min en voiture).
            </p>
          </div>

          <!-- Map (loaded on click) -->
          <div class="md:col-span-3 rounded-2xl overflow-hidden shadow-md bg-gray-100">
            <EmbedFacade
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.3398195450866!2d3.921250631578913!3d43.6149528075153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6a59921ef2181%3A0xd1fe0a75c37a336b!2sAssociation%20Mod%C3%A9lisme%20Occitane!5e0!3m2!1sfr!2sfr!4v1668121566872!5m2!1sfr!2sfr"
              title="Carte : piste d'auto-modélisme du parc de Grammont, Montpellier"
              label="Afficher la carte"
              :thumbnail="mapThumbnail"
              aspect-class="aspect-[4/3]"
              allow="fullscreen"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
