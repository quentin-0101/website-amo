<script setup>
import pisteImage from '~/assets/images/amo_piste.webp'

useSeoMeta({
  title: 'Documents Club - AMO Montpellier',
  description: 'Téléchargez les documents du club AMO Montpellier : bulletin d\'adhésion 2026 et paiement en ligne via PayPal.',
  ogTitle: 'Documents Club - AMO Montpellier',
  ogDescription: 'Téléchargez les documents du club AMO Montpellier : bulletin d\'adhésion 2026 et paiement en ligne via PayPal.',
  ogImage: 'https://amo-montpellier.fr/images/amo_piste.webp',
  ogUrl: 'https://amo-montpellier.fr/documents',
  twitterTitle: 'Documents Club - AMO Montpellier',
  twitterDescription: 'Téléchargez les documents du club AMO Montpellier : bulletin d\'adhésion 2026 et paiement en ligne via PayPal.',
  twitterImage: 'https://amo-montpellier.fr/images/amo_piste.webp',
  twitterCard: 'summary_large_image'
})

useHead({
  htmlAttrs: {
    lang: 'fr'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://amo-montpellier.fr/documents'
    }
  ]
})
</script>

<template>
  <div class="font-sans antialiased text-gray-800 pt-20"> <!-- Added padding-top to account for fixed header -->
    <AppHeader />
    
    <main class="py-16 md:py-24 bg-gray-50 min-h-screen relative overflow-hidden">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${pisteImage})` }"></div>
        <div class="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-900/35 to-blue-900/45"></div>
      </div>

      <!-- Content -->
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto bg-white/95 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20">
          <div class="heading text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-amo-dark">Documents Club</h2>
            <div class="w-24 h-1 bg-gradient-to-r from-amo-primary to-amo-primary-light mx-auto rounded-full"></div>
          </div>

          <div class="space-y-6">
             <div class="p-4 border border-gray-200 rounded bg-gray-50 flex items-center hover:shadow-md transition-shadow">
               <i class="fa fa-file-pdf-o text-red-600 text-3xl mr-4"></i>
               <a href="/images/adhesion_officielle_2026_amo.pdf" target="_blank" class="text-lg font-semibold hover:text-amo-blue">
                 Bulletin d'adhésion 2026 AMO
               </a>
             </div>

             <!-- PayPal Payment Section -->
             <div class="p-6 border-2 border-blue-200 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50">
               <div class="flex items-start gap-4">
                 <div class="flex-shrink-0">
                   <i class="fa fa-paypal text-blue-600 text-4xl"></i>
                 </div>
                 <div class="flex-1">
                   <h3 class="text-xl font-bold text-amo-dark mb-2 flex items-center gap-2">
                     Paiement de l'adhésion
                     <span class="inline-block bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">PayPal</span>
                   </h3>
                   <p class="text-gray-600 mb-4">Vous pouvez régler votre cotisation facilement et en toute sécurité via PayPal.</p>
                   <a href="https://paypal.me/amomontpellier" target="_blank" rel="noopener noreferrer" 
                      class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg">
                     <i class="fa fa-credit-card"></i>
                     Payer via PayPal
                     <i class="fa fa-external-link text-sm"></i>
                   </a>
                 </div>
               </div>
             </div>
          </div>
          
           <div class="mt-8 text-center">
            <NuxtLink to="/" class="inline-flex items-center gap-2 bg-gradient-to-r from-amo-primary to-red-600 hover:from-red-700 hover:to-amo-primary text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <i class="fa fa-arrow-left"></i> Retour à l'accueil
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
    
    <AppFooter />
  </div>
</template>
