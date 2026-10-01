<script setup>
import { club } from '~/data/club'

useSeoPage({
  title: 'Mentions légales | AMO Montpellier',
  description: "Mentions légales du site de l'Association Modéliste Occitane (AMO Montpellier) : éditeur, directeur de la publication, hébergeur.",
  path: '/mentions-legales',
})
</script>

<template>
  <main>
    <PageHero title="Mentions légales" :crumbs="[{ name: 'Accueil', to: '/' }, { name: 'Mentions légales' }]" />

    <div class="bg-slate-100">
      <div class="container mx-auto px-4 py-12 md:py-16">
        <div class="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 text-slate-700 leading-relaxed">
          <section class="md:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 border-t-4 border-t-red-600">
            <h2 class="text-xl font-bold mb-3 text-slate-900">Éditeur du site</h2>
            <p>
              {{ club.name }} ({{ club.acronym }}), association loi 1901 créée en {{ club.foundingYear }},
              enregistrée au répertoire national des associations sous le numéro {{ club.rna }}.<br>
              Affiliée à la Fédération française de voitures radiocommandées (FFVRC), club n°{{ club.ffvrcNumber }}.<br>
              Siège : {{ club.address.venue }}, {{ club.address.street }}, {{ club.address.postalCode }} {{ club.address.city }}.<br>
              Email : <a :href="`mailto:${club.email}`" class="text-red-700 hover:underline">{{ club.email }}</a> ·
              Téléphone : <a :href="`tel:${club.phoneE164}`" class="text-red-700 hover:underline">{{ club.phone }}</a>
            </p>
          </section>

          <section class="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 border-t-4 border-t-blue-600">
            <h2 class="text-xl font-bold mb-3 text-slate-900">Directeur de la publication</h2>
            <p>Jean-Marie Recagno, président de l'association.</p>
            <h2 class="text-xl font-bold mt-6 mb-3 text-slate-900">Conception et réalisation</h2>
            <p>Quentin Gauny.</p>
          </section>

          <section class="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 border-t-4 border-t-amber-500">
            <h2 class="text-xl font-bold mb-3 text-slate-900">Hébergement</h2>
            <p>IONOS SARL, 7 place de la Gare, BP 70109, 57201 Sarreguemines Cedex, France.</p>
            <h2 class="text-xl font-bold mt-6 mb-3 text-slate-900">Crédits</h2>
            <p>Photos et vidéos : AMO Montpellier. Vidéo de la piste : chaîne YouTube RC en PLS. Reportages : Boeri Modélisme.</p>
          </section>

          <section class="md:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 border-t-4 border-t-slate-500">
            <h2 class="text-xl font-bold mb-3 text-slate-900">Données personnelles et cookies</h2>
            <p>
              Ce site ne contient pas de formulaire et ne dépose pas de cookie de mesure d'audience.
              Les vidéos (YouTube, Facebook) et la carte (Google Maps) ne sont chargées qu'après un clic de votre part ;
              ces services peuvent alors déposer leurs propres cookies.
              Pour toute question sur vos données, écrivez à <a :href="`mailto:${club.email}`" class="text-red-700 hover:underline">{{ club.email }}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>
