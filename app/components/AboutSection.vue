<script setup>
import { club } from '~/data/club'
import reportCf15_2026 from '~/assets/images/reportages/coupe-de-france-piste-1-5-montpellier-2026.webp'
import reportMrtp2023 from '~/assets/images/reportages/challenge-mrtp-montpellier-2023.webp'
import reportCf15_2023 from '~/assets/images/reportages/coupe-de-france-piste-1-5-montpellier-2023.webp'

// Race reports by Boeri Modélisme, most recent first.
const reports = [
  {
    url: 'https://boerimodelisme.fr/courses/cf-piste-1-5-montpellier-amo-2026/',
    image: reportCf15_2026,
    title: 'Coupe de France piste 1/5 à Montpellier, 28 et 29 mars 2026',
    alt: "Pilotes de la Coupe de France piste 1/5 thermique et électrique sur la piste de l'AMO à Montpellier, mars 2026",
  },
  {
    url: 'https://boerimodelisme.fr/courses/challenge-mrtp-montpellier-3-decembre-2023/',
    image: reportMrtp2023,
    title: 'Challenge MRTP à Montpellier, 3 décembre 2023',
    alt: "Challenge MRTP sur la piste de l'AMO à Montpellier, 3 décembre 2023",
  },
  {
    url: 'https://boerimodelisme.fr/courses/2eme-cf-piste-1-5-montpellier-amo/',
    image: reportCf15_2023,
    title: '2e manche de la Coupe de France piste 1/5 à Montpellier, 25 et 26 mars 2023',
    alt: "2e manche de la Coupe de France piste 1/5 sur la piste de l'AMO à Montpellier, mars 2023",
  },
]
</script>

<template>
  <section id="sites" class="py-12 bg-gray-50/50 scroll-mt-20">
    <div class="container mx-auto px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Heading -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900">Le club AMO, à Montpellier depuis {{ club.foundingYear }}</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-red-500 to-red-400 mx-auto rounded-full" />
        </div>

        <!-- Bento Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <!-- YouTube Video - FULL WIDTH SPOTLIGHT -->
          <figure class="md:col-span-3 bg-black rounded-3xl overflow-hidden shadow-2xl relative border-2 border-red-500/50">
            <EmbedFacade
              src="https://www.youtube-nocookie.com/embed/booALn7QHlQ"
              thumbnail="https://i.ytimg.com/vi/booALn7QHlQ/hqdefault.jpg"
              title="Vidéo YouTube : la nouvelle piste de l'AMO à Montpellier (chaîne RC en PLS)"
              label="Lire la vidéo : la nouvelle piste de l'AMO"
            />
            <figcaption class="absolute top-4 left-4 pointer-events-none">
              <span class="text-white font-bold text-sm border-2 border-red-700 bg-red-700 rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                <AppIcon name="youtube-play" /> Vidéo : la piste de l'AMO
              </span>
            </figcaption>
          </figure>

          <!-- Text Card 1 - Introduction (Span 2) -->
          <div class="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <h3 class="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-3">
              <span class="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                <AppIcon name="info" />
              </span>
              Qu'est-ce que l'Association Modéliste Occitane ?
            </h3>
            <div class="text-gray-600 space-y-4 leading-relaxed text-base">
              <p>
                L'<strong>Association Modéliste Occitane (AMO)</strong> est un club de voitures radiocommandées sur piste créé en {{ club.foundingYear }} à Montpellier.
                Association loi 1901 (RNA {{ club.rna }}), elle est affiliée à la Fédération française de voitures radiocommandées (FFVRC) sous le numéro de club {{ club.ffvrcNumber }}, ce qui en fait l'un des plus anciens clubs de France.
              </p>
              <p>
                Le club est installé sur la piste municipale d'auto-modélisme du <NuxtLink to="/piste-grammont" class="font-semibold text-red-600 hover:underline">parc de Grammont, à Montpellier</NuxtLink>, à deux pas de l'entrée de l'autoroute A9.
                Il accueille et développe la pratique de la voiture radiocommandée en loisir et en compétition, pour les jeunes comme pour les adultes.
              </p>
              <p>Grâce à une météo presque toujours ensoleillée et à la qualité de la piste et des installations, les membres peuvent rouler tous les jours de l'année.</p>
            </div>
          </div>

          <!-- Video Card 1 - Facebook Reel -->
          <div class="bg-black rounded-3xl overflow-hidden shadow-lg relative min-h-[16rem]">
            <EmbedFacade
              src="https://www.facebook.com/plugins/video.php?height=560&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1357608702226507%2F&show_text=false&width=560&t=0"
              title="Vidéo Facebook : courte vidéo du club AMO Montpellier"
              label="Lire la vidéo du club (Facebook)"
              aspect-class="aspect-square md:aspect-auto md:h-full"
            />
          </div>

          <!-- Video Card 2 - Facebook Video (Span 2) -->
          <div class="md:col-span-2 bg-black rounded-3xl overflow-hidden shadow-lg relative">
            <EmbedFacade
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F747169851760054%2F&show_text=false&width=560&t=0"
              title="Vidéo Facebook : action sur la piste de l'AMO Montpellier"
              label="Lire la vidéo « Action piste » (Facebook)"
            />
          </div>

          <!-- Text Card 2 - Pilotes & Compétitions -->
          <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <h3 class="text-xl font-bold mb-4 text-slate-900 flex items-center gap-3">
              <span class="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-600">
                <AppIcon name="trophy" />
              </span>
              Excellence et compétition
            </h3>
            <div class="text-gray-600 space-y-3 leading-relaxed text-base">
              <p>L'AMO compte parmi ses membres des pilotes titrés aux niveaux national, européen et même mondial, en électrique comme en thermique.</p>
              <p>Le club organise des courses amicales, des challenges de marque et des courses officielles régionales et nationales, qui réunissent jusqu'à 80 pilotes, certains venant même de l'étranger.</p>
              <p>Échelles pratiquées : <strong>{{ club.scales.join(', ') }}</strong>.</p>
              <p><NuxtLink to="/courses" class="font-semibold text-red-600 hover:underline">Voir le calendrier des courses</NuxtLink></p>
            </div>
          </div>

          <!-- Text Card 3 - Infrastructures & Jeunes (Span 2) -->
          <div class="md:col-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-sm border border-blue-100 hover:shadow-lg transition-shadow duration-300">
            <h3 class="text-xl font-bold mb-4 text-slate-900 flex items-center gap-3">
              <span class="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600">
                <AppIcon name="wrench" />
              </span>
              Installations et formation
            </h3>
            <div class="text-gray-600 space-y-3 leading-relaxed text-base">
              <p>Les jeunes sont accueillis avec plaisir, et un projet d'école de pilotage est en cours.</p>
              <p>Tous les stands sont couverts, éclairés et équipés de prises 220 V, avec une soufflette permanente pour nettoyer les voitures.</p>
              <p>
                Pour devenir membre, il suffit d'être à jour de sa cotisation, d'être licencié à la FFVRC et d'adhérer aux statuts et au règlement intérieur du club.
                Les inscriptions se font sur place ou par email à <a :href="`mailto:${club.email}`" class="text-red-600 hover:underline font-semibold">{{ club.email }}</a>.
              </p>
              <p><NuxtLink to="/adhesion" class="font-semibold text-red-600 hover:underline">Tarifs et adhésion 2026</NuxtLink></p>
            </div>
          </div>

          <!-- Stats / Info Card -->
          <div class="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
            <!-- Background Pattern -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />

            <div class="relative z-10 space-y-6">
              <div>
                <h3 class="text-2xl font-bold mb-4">Rejoignez-nous !</h3>
                <p class="text-gray-300 mb-6">Jeunes et adultes bienvenus.</p>
                <NuxtLink to="/adhesion" class="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm">
                  <AppIcon name="users" />
                  Adhérer au club
                </NuxtLink>
              </div>
              <div class="grid grid-cols-2 gap-4 pt-4">
                <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center">
                  <div class="text-3xl font-bold text-yellow-400">80</div>
                  <div class="text-sm text-gray-300">pilotes max. par course</div>
                </div>
                <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center">
                  <div class="text-3xl font-bold text-blue-400">{{ club.scales.length }}</div>
                  <div class="text-sm text-gray-300">échelles pratiquées</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Reportages Section -->
        <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <h3 class="text-2xl font-bold mb-8 text-center">Reportages sur nos courses</h3>
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              v-for="report in reports"
              :key="report.url"
              :href="report.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-100"
            >
              <span class="block overflow-hidden">
                <img
                  :src="report.image"
                  :alt="report.alt"
                  width="800"
                  height="420"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                >
              </span>
              <span class="flex flex-col gap-1 px-4 py-3 text-sm">
                <span class="font-semibold text-slate-900">{{ report.title }}</span>
                <span class="text-red-700 font-semibold">Lire le reportage (Boeri Modélisme)</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
