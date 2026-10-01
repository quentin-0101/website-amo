<script setup>
import { club } from '~/data/club'
import presidentPhoto from '~/assets/images/bureau/president.webp'
import vicePresidentPhoto from '~/assets/images/bureau/vice-president.webp'
import tresorierPhoto from '~/assets/images/bureau/tresorier.webp'
import secretairePhoto from '~/assets/images/bureau/secretaire.webp'
import trackPhoto from '~/assets/images/piste-grammont-revetement.webp'

const board = [
  { role: 'Président', name: 'Jean-Marie Recagno', email: 'jm.recagno@gmail.com', photo: presidentPhoto, size: 400 },
  { role: 'Vice-président', name: 'Didier Dahan', email: 'didahan@sfr.fr', photo: vicePresidentPhoto, size: 249 },
  { role: 'Trésorier', name: "Bruno Ternisien d'Ouville", email: 'btdo870@gmail.com', photo: tresorierPhoto, size: 400 },
  { role: 'Secrétaire', name: 'Sébastien Barathieu', email: 'barathieu@gmail.com', photo: secretairePhoto, size: 400 },
]
</script>

<template>
  <section id="contacter" class="py-12 bg-white relative overflow-hidden scroll-mt-20">
    <!-- Decorative Circle -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">Contactez-nous</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-red-500 to-red-400 mx-auto rounded-full" />
      </div>

      <div class="max-w-6xl mx-auto">
        <div class="flex flex-wrap lg:flex-nowrap bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <!-- Contact Info Left Side -->
          <div class="w-full lg:w-7/12 p-8 md:p-12">
            <h3 class="text-3xl font-bold mb-8 text-slate-900">Restons en contact</h3>
            <div class="mb-10 p-6 bg-blue-50/50 rounded-2xl border border-blue-100 space-y-4 text-lg text-gray-700">
              <p class="flex items-center gap-3">
                <span class="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0"><AppIcon name="envelope" /></span>
                <span>Email : <a :href="`mailto:${club.email}`" class="font-bold text-red-600 hover:text-slate-900 transition-colors break-all">{{ club.email }}</a></span>
              </p>
              <p class="flex items-center gap-3">
                <span class="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0"><AppIcon name="phone" /></span>
                <span>Téléphone : <a :href="`tel:${club.phoneE164}`" class="font-bold text-red-600 hover:text-slate-900 transition-colors">{{ club.phone }}</a></span>
              </p>
              <p class="flex items-start gap-3">
                <span class="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0"><AppIcon name="map-marker" /></span>
                <span>{{ club.address.street }}, {{ club.address.postalCode }} {{ club.address.city }}</span>
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div
                v-for="member in board"
                :key="member.role"
                class="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <div class="mb-4">
                  <span class="inline-block px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wide">{{ member.role }}</span>
                </div>
                <p class="text-xl font-bold mb-1 text-slate-900">{{ member.name }}</p>
                <a :href="`mailto:${member.email}`" class="text-sm text-gray-500 hover:text-red-600 transition-colors flex items-center gap-2 break-all">
                  <AppIcon name="envelope-o" /> {{ member.email }}
                </a>
              </div>
            </div>
          </div>

          <!-- Background Image Right Side -->
          <div class="w-full lg:w-5/12 bg-cover bg-center min-h-[400px] relative" :style="{ backgroundImage: `url(${trackPhoto})` }">
            <div class="absolute inset-0 bg-blue-900/20 backdrop-brightness-75" />
            <div class="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black/80 to-transparent">
              <p class="text-lg font-light italic">« Une passion partagée sur la piste de Grammont »</p>
            </div>
          </div>
        </div>

        <!-- Team Photos -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <figure v-for="member in board" :key="member.role" class="group text-center">
            <div class="relative w-full max-w-[200px] mx-auto aspect-square mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:border-red-500 transition-colors duration-300">
              <img
                :src="member.photo"
                :alt="`${member.name}, ${member.role.toLowerCase()} de l'AMO Montpellier`"
                :width="member.size"
                :height="member.size"
                loading="lazy"
                decoding="async"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              >
            </div>
            <figcaption>
              <span class="block font-bold text-lg text-slate-900 group-hover:text-red-600 transition-colors">{{ member.role }}</span>
              <span class="block text-sm text-gray-600">{{ member.name }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
