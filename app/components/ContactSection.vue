<script setup>
import bgImage from '~/assets/images/bg.jpg'
</script>

<template>
  <section id="contacter" class="py-12 bg-white relative overflow-hidden">
    <!-- Decorative Circle -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-amo-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-amo-dark tracking-tight">Contactez-nous</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-amo-primary to-amo-primary-light mx-auto rounded-full"></div>
      </div>

      <div class="max-w-6xl mx-auto">
        <div class="flex flex-wrap lg:flex-nowrap bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
           <!-- Contact Info Left Side -->
            <div class="w-full lg:w-7/12 p-8 md:p-12">
                <h3 class="text-3xl font-bold mb-8 text-amo-dark">Restons en contact</h3>
                <div class="mb-10 p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                    <p class="text-lg text-gray-700 flex items-center gap-3">
                        <span class="w-10 h-10 rounded-full bg-amo-primary text-white flex items-center justify-center shrink-0">
                          <i class="fa fa-envelope"></i>
                        </span>
                        <span>
                          Email général : 
                          <a href="mailto:amo.montpellier@gmail.com" class="font-bold text-amo-primary hover:text-amo-dark transition-colors">amo.montpellier@gmail.com</a>
                        </span>
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Cards -->
                    <div class="group border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                        <div class="mb-4">
                           <span class="inline-block px-3 py-1 rounded-full bg-blue-100 text-amo-primary text-xs font-bold uppercase tracking-wide">Président</span>
                        </div>
                        <h5 class="text-xl font-bold mb-1 text-amo-dark">Jean Marie Recagno</h5>
                        <a href="mailto:jm.recagno@gmail.com" class="text-sm text-gray-500 hover:text-amo-primary transition-colors flex items-center gap-2">
                           <i class="fa fa-envelope-o"></i> jm.recagno@gmail.com
                        </a>
                    </div>

                    <div class="group border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                        <div class="mb-4">
                           <span class="inline-block px-3 py-1 rounded-full bg-blue-100 text-amo-primary text-xs font-bold uppercase tracking-wide">Vice Président</span>
                        </div>
                        <h5 class="text-xl font-bold mb-1 text-amo-dark">Didier Dahan</h5>
                        <a href="mailto:didahan@sfr.fr" class="text-sm text-gray-500 hover:text-amo-primary transition-colors flex items-center gap-2">
                           <i class="fa fa-envelope-o"></i> didahan@sfr.fr
                        </a>
                    </div>
                
                    <div class="group border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                        <div class="mb-4">
                           <span class="inline-block px-3 py-1 rounded-full bg-blue-100 text-amo-primary text-xs font-bold uppercase tracking-wide">Trésorier</span>
                        </div>
                        <h5 class="text-xl font-bold mb-1 text-amo-dark">Bruno Ternisien d'Ouville</h5>
                        <a href="mailto:btdo870@gmail.com" class="text-sm text-gray-500 hover:text-amo-primary transition-colors flex items-center gap-2">
                           <i class="fa fa-envelope-o"></i> btdo870@gmail.com
                        </a>
                    </div>

                    <div class="group border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                        <div class="mb-4">
                           <span class="inline-block px-3 py-1 rounded-full bg-blue-100 text-amo-primary text-xs font-bold uppercase tracking-wide">Secrétaire</span>
                        </div>
                        <h5 class="text-xl font-bold mb-1 text-amo-dark">Sébastien Barathieu</h5>
                        <a href="mailto:barathieu@gmail.com" class="text-sm text-gray-500 hover:text-amo-primary transition-colors flex items-center gap-2">
                           <i class="fa fa-envelope-o"></i> barathieu@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            <!-- Background Image Right Side -->
            <div class="w-full lg:w-5/12 bg-cover bg-center min-h-[400px] relative" :style="{ backgroundImage: `url(${bgImage})` }">
              <div class="absolute inset-0 bg-blue-900/20 backdrop-brightness-75"></div>
              <div class="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black/80 to-transparent">
                 <p class="text-lg font-light italic">"Une passion partagée sur la piste de Grammont"</p>
              </div>
            </div>
        </div>

        <!-- Team Photos -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div class="group text-center">
                <div class="relative w-full max-w-[200px] mx-auto aspect-square mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:border-amo-primary transition-colors duration-300">
                   <img src="~/assets/images/president-amo.jpg" alt="Président" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                </div>
                <figcaption class="font-bold text-lg text-amo-dark group-hover:text-amo-primary transition-colors">Président</figcaption>
            </div>
             <div class="group text-center">
                <div class="relative w-full max-w-[200px] mx-auto aspect-square mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:border-amo-primary transition-colors duration-300">
                   <img src="~/assets/images/vice-president.jpg" alt="Vice-Président" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                </div>
                <figcaption class="font-bold text-lg text-amo-dark group-hover:text-amo-primary transition-colors">Vice-Président</figcaption>
            </div>

             <div class="group text-center">
                <div class="relative w-full max-w-[200px] mx-auto aspect-square mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:border-amo-primary transition-colors duration-300">
                   <img src="~/assets/images/tresorier.jpg" alt="Trésorier" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                </div>
                <figcaption class="font-bold text-lg text-amo-dark group-hover:text-amo-primary transition-colors">Trésorier</figcaption>
            </div>

            <div class="group text-center">
                <div class="relative w-full max-w-[200px] mx-auto aspect-square mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:border-amo-primary transition-colors duration-300">
                   <img src="~/assets/images/secretaire.jpg" alt="Secrétaire" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                </div>
                <figcaption class="font-bold text-lg text-amo-dark group-hover:text-amo-primary transition-colors">Secrétaire</figcaption>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>
