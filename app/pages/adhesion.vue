<script setup>
import { club } from '~/data/club'

const title = 'Adhésion 2026 : tarifs et licence FFVRC | AMO Montpellier'
const description = "Adhérer à l'AMO Montpellier en 2026 : cotisation 90\u00a0€ adulte, 45\u00a0€ moins de 17 ans, licence FFVRC de 20 à 50\u00a0€, bulletin d'adhésion et paiement en 3 fois."

useSeoPage({ title, description, path: '/adhesion' })
useSchemaGraph([
  webPageNode('/adhesion', title, description),
  breadcrumbNode([{ name: 'Accueil', path: '/' }, { name: 'Adhésion', path: '/adhesion' }]),
])

// Source: bulletin d'adhésion 2026 (public/images/adhesion_officielle_2026_amo.pdf)
const cotisations = [
  { label: 'Adulte (plus de 17 ans)', price: '90\u00a0€', july: '45\u00a0€', note: "45\u00a0€ si vous habitez à plus de 200 km" },
  { label: 'Jeune (moins de 17 ans)', price: '45\u00a0€', july: '23\u00a0€' },
  { label: '2e pilote de la famille, plus de 17 ans (–50\u00a0%)', price: '45\u00a0€', july: '23\u00a0€' },
  { label: '2e pilote de la famille, moins de 17 ans (–50\u00a0%)', price: '23\u00a0€', july: 'voir le bulletin' },
  { label: 'Non-pilote (accès piste, sans droit de vote)', price: '10\u00a0€', july: '' },
  { label: 'Non-pilote avec droit de vote', price: '45\u00a0€', july: '' },
]
const licences = [
  { label: 'Licence Passion', price: '20\u00a0€', use: 'Accompagnateur ou organisateur, sans roulage' },
  { label: 'Licence Loisir', price: '30\u00a0€', use: 'Roulage au club et courses amicales' },
  { label: 'Licence Compétition (moins de 17 ans)', price: '20\u00a0€', use: 'Toutes les courses : ligue, nationales, internationales' },
  { label: 'Licence Compétition', price: '50\u00a0€', use: 'Toutes les courses : ligue, nationales, internationales' },
]
const highlights = [
  { label: 'Adulte', value: '90\u00a0€' },
  { label: 'Moins de 17 ans', value: '45\u00a0€' },
  { label: 'Licence FFVRC', value: 'dès 20\u00a0€' },
  { label: 'Paiement', value: 'en 3 fois' },
]
</script>

<template>
  <main>
    <PageHero
      eyebrow="Adhésion 2026"
      title="Adhérer à l'AMO : tarifs 2026, licence et inscription"
      lead="Cotisation au club, licence FFVRC, autres frais et étapes d'inscription : tout pour rejoindre l'AMO, jeunes et adultes."
      :crumbs="[{ name: 'Accueil', to: '/' }, { name: 'Adhésion' }]"
    >
      <dl class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
        <div v-for="h in highlights" :key="h.label" class="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3">
          <dt class="text-xs uppercase tracking-wider text-gray-300">{{ h.label }}</dt>
          <dd class="text-2xl font-bold text-yellow-400 tabular-nums">{{ h.value }}</dd>
        </div>
      </dl>
    </PageHero>

    <div class="bg-slate-100">
      <div class="container mx-auto px-4 py-12 md:py-16">
        <div class="max-w-5xl mx-auto space-y-8">
          <!-- Answer block -->
          <p class="text-lg text-gray-700 leading-relaxed bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 border-l-8 border-l-red-600">
            Adhérer à l'AMO en 2026 coûte <strong>90&nbsp;€ pour un adulte</strong> (plus de 17 ans) et <strong>45&nbsp;€ pour un jeune de moins de 17 ans</strong>,
            plus la licence FFVRC obligatoire : 30&nbsp;€ en Loisir (roulage au club et courses amicales) ou 50&nbsp;€ en Compétition (20&nbsp;€ pour les moins de 17 ans).
            Le deuxième pilote d'une même famille bénéficie de 50&nbsp;% de réduction. À partir du 1er juillet 2026, la cotisation est réduite (45&nbsp;€ pour un adulte).
          </p>

          <div class="grid gap-8 lg:grid-cols-2">
            <!-- Cotisations -->
            <section class="min-w-0 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 border-t-4 border-t-red-600" aria-labelledby="cotisations-h">
              <h2 id="cotisations-h" class="text-2xl font-bold mb-5 text-slate-900 flex items-center gap-3">
                <span class="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center"><AppIcon name="users" /></span>
                Cotisation au club
              </h2>
              <div class="overflow-x-auto">
                <table class="w-full text-left text-sm min-w-[420px]">
                  <thead>
                    <tr class="border-b-2 border-slate-200 text-slate-600">
                      <th scope="col" class="py-2 pr-3 font-semibold">Formule</th>
                      <th scope="col" class="py-2 pr-3 font-semibold">2026</th>
                      <th scope="col" class="py-2 font-semibold">Dès le 1er juillet</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="row in cotisations" :key="row.label" class="border-b border-slate-100">
                      <th scope="row" class="py-3 pr-3 font-medium text-slate-800">
                        {{ row.label }}
                        <span v-if="row.note" class="block text-xs font-normal text-slate-500">{{ row.note }}</span>
                      </th>
                      <td class="py-3 pr-3 font-bold text-red-700 tabular-nums whitespace-nowrap">{{ row.price }}</td>
                      <td class="py-3 text-slate-700 tabular-nums">{{ row.july || '–' }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-sm text-slate-600 mt-4">La cotisation n'est pas remboursable.</p>
            </section>

            <!-- Licences -->
            <section class="min-w-0 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 border-t-4 border-t-blue-600" aria-labelledby="licences-h">
              <h2 id="licences-h" class="text-2xl font-bold mb-5 text-slate-900 flex items-center gap-3">
                <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center"><AppIcon name="trophy" /></span>
                Licence FFVRC (obligatoire)
              </h2>
              <ul class="space-y-3">
                <li v-for="row in licences" :key="row.label" class="flex items-start justify-between gap-4 rounded-2xl bg-slate-50 border border-slate-100 px-4 py-3">
                  <span>
                    <span class="block font-semibold text-slate-900">{{ row.label }}</span>
                    <span class="block text-sm text-slate-600">{{ row.use }}</span>
                  </span>
                  <span class="text-xl font-bold text-blue-700 tabular-nums whitespace-nowrap">{{ row.price }}</span>
                </li>
              </ul>
              <p class="text-sm text-slate-600 mt-4">La licence comprend l'assurance. Licence plastifiée en option : 3&nbsp;€.</p>
            </section>
          </div>

          <div class="grid gap-8 lg:grid-cols-5">
            <!-- Other fees -->
            <section class="lg:col-span-3 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 border-t-4 border-t-amber-500" aria-labelledby="autres-h">
              <h2 id="autres-h" class="text-2xl font-bold mb-5 text-slate-900 flex items-center gap-3">
                <span class="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center"><AppIcon name="wrench" /></span>
                Autres frais à l'inscription
              </h2>
              <ul class="space-y-3 text-slate-700">
                <li class="flex gap-3"><AppIcon name="check" class="text-amber-600 mt-1 shrink-0" /><span><strong>Caution pour la clé de la piste : 10&nbsp;€</strong> (encaissée).</span></li>
                <li class="flex gap-3"><AppIcon name="check" class="text-amber-600 mt-1 shrink-0" /><span><strong>Participation à la vie du club : 80&nbsp;€</strong>, remboursée 20&nbsp;€ par demi-journée de participation (travaux, buvette, organisation des courses).</span></li>
              </ul>
            </section>

            <!-- Worked example -->
            <aside class="lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 md:p-8 shadow-lg" aria-label="Exemple de coût">
              <div class="absolute -top-16 -right-16 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />
              <p class="relative text-sm font-bold uppercase tracking-widest text-amber-400 mb-2">Exemple</p>
              <p class="relative text-slate-200">Un adulte qui roule en loisir : 90&nbsp;€ de cotisation + 30&nbsp;€ de licence + 10&nbsp;€ de caution</p>
              <p class="relative text-5xl font-bold text-yellow-400 my-3 tabular-nums">130&nbsp;€</p>
              <p class="relative text-sm text-slate-300">plus 80&nbsp;€ de participation remboursable.</p>
            </aside>
          </div>

          <!-- Steps -->
          <section class="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200" aria-labelledby="etapes-h">
            <h2 id="etapes-h" class="text-2xl font-bold mb-6 text-slate-900">Comment s'inscrire</h2>
            <ol class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <li class="relative">
                <span class="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-500 text-white font-bold flex items-center justify-center shadow-md mb-3" aria-hidden="true">1</span>
                <p class="text-slate-700">
                  Téléchargez et remplissez le
                  <a :href="club.membershipForm" target="_blank" class="font-semibold text-red-700 hover:underline">bulletin d'adhésion 2026 (PDF)</a>,
                  signé par les parents pour les mineurs.
                </p>
              </li>
              <li>
                <span class="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-500 text-white font-bold flex items-center justify-center shadow-md mb-3" aria-hidden="true">2</span>
                <p class="text-slate-700">Choisissez votre licence FFVRC : Passion, Loisir ou Compétition.</p>
              </li>
              <li>
                <span class="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-500 text-white font-bold flex items-center justify-center shadow-md mb-3" aria-hidden="true">3</span>
                <p class="text-slate-700">Réglez par PayPal, espèces, chèque ou virement. Le paiement peut se faire en 3 fois consécutives.</p>
              </li>
              <li>
                <span class="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-500 text-white font-bold flex items-center justify-center shadow-md mb-3" aria-hidden="true">4</span>
                <p class="text-slate-700">
                  Remettez le bulletin sur place, à la piste, ou envoyez-le à
                  <a :href="`mailto:${club.email}`" class="font-semibold text-red-700 hover:underline break-words">{{ club.email }}</a>.
                </p>
              </li>
            </ol>
            <p class="mt-6 text-slate-600 text-sm">
              En adhérant, vous vous engagez à respecter le règlement intérieur de l'association et à participer à la vie du club.
            </p>
          </section>

          <!-- Actions -->
          <div class="grid gap-6 md:grid-cols-2">
            <a
              :href="club.membershipForm"
              target="_blank"
              class="group p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center gap-5 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <span class="w-14 h-14 rounded-2xl bg-red-100 text-red-700 flex items-center justify-center shrink-0"><AppIcon name="file-pdf-o" class="text-3xl" /></span>
              <span>
                <span class="block text-lg font-bold text-slate-900 group-hover:text-red-700">Bulletin d'adhésion 2026</span>
                <span class="block text-sm text-slate-600">PDF à imprimer et à signer</span>
              </span>
            </a>

            <div class="p-6 rounded-3xl bg-gradient-to-br from-blue-700 to-blue-600 text-white shadow-lg">
              <p class="text-lg font-bold mb-1 flex items-center gap-2">
                <AppIcon name="paypal" /> Payer en ligne
              </p>
              <p class="text-blue-100 text-sm mb-4">Indiquez le nom du pilote dans le message du paiement.</p>
              <a
                :href="club.links.paypal"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-6 rounded-full transition-colors shadow-md"
              >
                <AppIcon name="credit-card" /> Payer via PayPal <AppIcon name="external-link" class="text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ContactBand text="Une question sur l'adhésion, les licences ou un essai ? Le bureau vous répond." />
  </main>
</template>
