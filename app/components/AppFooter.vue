<script setup>
import { club } from '~/data/club'
</script>

<template>
  <footer class="bg-slate-900 text-gray-300 pt-14 pb-10">
    <div class="container mx-auto px-4">
      <div class="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        <!-- Identity / NAP -->
        <div>
          <p class="text-white font-bold text-lg mb-3">{{ club.name }} ({{ club.acronym }})</p>
          <address class="not-italic space-y-1 text-sm leading-relaxed">
            <p>{{ club.address.venue }}</p>
            <p>{{ club.address.street }}<br>{{ club.address.postalCode }} {{ club.address.city }}</p>
            <p class="pt-2">
              <AppIcon name="phone" class="mr-2 text-red-400" />
              <a :href="`tel:${club.phoneE164}`" class="hover:text-white">{{ club.phone }}</a>
            </p>
            <p>
              <AppIcon name="envelope" class="mr-2 text-red-400" />
              <a :href="`mailto:${club.email}`" class="hover:text-white">{{ club.email }}</a>
            </p>
          </address>
          <p class="text-xs text-gray-400 mt-4">
            Association loi 1901 créée en {{ club.foundingYear }} · RNA {{ club.rna }} · Club FFVRC n°{{ club.ffvrcNumber }}
          </p>
        </div>

        <!-- Site links -->
        <nav aria-label="Pages du site">
          <p class="text-white font-bold text-lg mb-3">Le site</p>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/" class="hover:text-white">Accueil</NuxtLink></li>
            <li><NuxtLink to="/courses" class="hover:text-white">Calendrier des courses</NuxtLink></li>
            <li><NuxtLink to="/piste-grammont" class="hover:text-white">La piste du parc de Grammont</NuxtLink></li>
            <li><NuxtLink to="/adhesion" class="hover:text-white">Adhésion et tarifs 2026</NuxtLink></li>
            <li><NuxtLink to="/#contacter" class="hover:text-white">Contact</NuxtLink></li>
            <li><NuxtLink to="/mentions-legales" class="hover:text-white">Mentions légales</NuxtLink></li>
          </ul>
        </nav>

        <!-- External -->
        <div>
          <p class="text-white font-bold text-lg mb-3">Suivre le club</p>
          <ul class="space-y-2 text-sm">
            <li>
              <a :href="club.links.facebook" target="_blank" rel="noopener noreferrer" class="hover:text-white">
                <AppIcon name="facebook-official" class="mr-2 text-blue-400" />Page Facebook de l'AMO
              </a>
            </li>
            <li>
              <a :href="club.links.facebookPhotos" target="_blank" rel="noopener noreferrer" class="hover:text-white">
                <AppIcon name="external-link" class="mr-2 text-gray-400" />Photos du club
              </a>
            </li>
            <li>
              <a :href="club.links.mylaps" target="_blank" rel="noopener noreferrer" class="hover:text-white">
                <AppIcon name="clock-o" class="mr-2 text-gray-400" />Chronos des entraînements (Mylaps)
              </a>
            </li>
            <li>
              <a :href="club.links.ffvrc" target="_blank" rel="noopener noreferrer" class="hover:text-white">
                <AppIcon name="external-link" class="mr-2 text-gray-400" />Fédération (FFVRC)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p class="text-center text-xs text-gray-400 mt-12">
        Copyright &copy; {{ club.name }} {{ new Date().getFullYear() }} · Site réalisé par Quentin Gauny
      </p>
    </div>
  </footer>
</template>
