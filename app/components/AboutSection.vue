<template>
  <section id="sites" class="py-12 bg-gray-50/50">
    <div class="container mx-auto px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Heading -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-amo-dark">À propos du club</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-amo-primary to-amo-primary-light mx-auto rounded-full"></div>
        </div>

        <!-- Bento Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <!-- YouTube Video - FULL WIDTH SPOTLIGHT -->
          <div class="md:col-span-3 bg-black rounded-3xl overflow-hidden shadow-2xl relative group border-2 border-red-500/50 hover:border-red-500">
            <iframe 
              src="https://www.youtube.com/embed/booALn7QHlQ"
              class="w-full aspect-video" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
            <div class="absolute top-4 left-4 pointer-events-none">
              <span class="text-white font-bold text-sm border-2 border-red-500 bg-red-500 rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                <i class="fa fa-youtube-play"></i> Vidéo Principale
              </span>
            </div>
          </div>

          <!-- Text Card 1 - Introduction (Span 2) -->
          <div class="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <h3 class="text-2xl font-bold mb-6 text-amo-dark flex items-center gap-3">
              <span class="w-10 h-10 rounded-full bg-amo-primary/10 flex items-center justify-center text-amo-primary">
                <i class="fa fa-info"></i>
              </span>
              L'Association Modéliste Occitane
            </h3>
            <div class="text-gray-600 space-y-4 leading-relaxed text-base">
              <p>L' AMO, Association Modéliste Occitane, est une association loi 1901, affiliée à la FFVRC sous le N° 08, ce qui en fait un des plus anciens clubs de France ayant adhéré à la Fédération.</p>
              <p>Installé sur la piste municipale d' auto-modélisme du <span class="font-semibold text-amo-primary">Parc de GRAMMONT</span>, à deux pas de l' entrée de l' autoroute A9, le club accueille et développe la pratique de la voiture radiocommandée en loisir et en compétition pour les jeunes et les adultes.</p>
              <p>La météo quasi toujours ensoleillée, et la qualité de la piste et des installations permettent à tous les membres de pratiquer leur passion tous les jours de l'année.</p>
            </div>
          </div>

          <!-- Video Card 1 - Facebook Reel -->
          <div class="bg-black rounded-3xl overflow-hidden shadow-lg relative group" style="touch-action: manipulation;">
            <iframe 
              src="https://www.facebook.com/plugins/video.php?height=560&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1357608702226507%2F&show_text=false&width=560&t=0"
              class="w-full h-full aspect-video" 
              style="border:none;overflow:hidden;overscroll-behavior:contain;" 
              scrolling="no" 
              frameborder="0" 
              allowfullscreen="true" 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              @load="preventIframeScroll">
            </iframe>
            <div class="absolute top-4 left-4 pointer-events-none">
              <span class="text-white font-medium text-sm border border-white/30 rounded-full px-3 py-1 backdrop-blur-sm bg-black/30">Reel AMO</span>
            </div>
          </div>

          <!-- Video Card 2 - Facebook Video (Span 2) -->
          <div class="md:col-span-2 bg-black rounded-3xl overflow-hidden shadow-lg relative group" style="touch-action: manipulation;">
            <iframe 
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F747169851760054%2F&show_text=false&width=560&t=0"
              class="w-full h-full aspect-video" 
              style="border:none;overflow:hidden;overscroll-behavior:contain;" 
              scrolling="no" 
              frameborder="0" 
              allowfullscreen="true" 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              @load="preventIframeScroll">
            </iframe>
            <div class="absolute top-4 left-4 pointer-events-none">
              <span class="text-white font-medium text-sm border border-white/30 rounded-full px-3 py-1 backdrop-blur-sm bg-black/30">Action Piste</span>
            </div>
          </div>

          <!-- Text Card 2 - Pilotes & Compétitions -->
          <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <h3 class="text-xl font-bold mb-4 text-amo-dark flex items-center gap-3">
              <span class="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-600">
                <i class="fa fa-trophy"></i>
              </span>
              Excellence & Compétition
            </h3>
            <div class="text-gray-600 space-y-3 leading-relaxed text-base">
              <p>L' AMO compte parmi ses membres des pilotes titrés au niveau National, Européen et même Mondial dans les catégories électriques et thermiques.</p>
              <p>Le club organise des courses amicales, des challenges de marque, et des courses officielles régionales et nationales regroupant jusqu' à 80 pilotes, certains venant même de l' étranger.</p>
              <p>Les échelles présentes : <strong>1:10, 1:8, 1:5 et 1:4</strong>.</p>
            </div>
          </div>

          <!-- Text Card 3 - Infrastructures & Jeunes (Span 2) -->
          <div class="md:col-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-sm border border-blue-100 hover:shadow-lg transition-shadow duration-300">
            <h3 class="text-xl font-bold mb-4 text-amo-dark flex items-center gap-3">
              <span class="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600">
                <i class="fa fa-wrench"></i>
              </span>
              Infrastructures & Formation
            </h3>
            <div class="text-gray-600 space-y-3 leading-relaxed text-base">
              <p>Les jeunes sont accueillis avec plaisir, et un projet d' école de pilotage est en cours pour l' année à venir.</p>
              <p>Tous les stands sont couverts, éclairés et dotés du courant 220v et même d' une soufflette permanente utilisée pour nettoyer les modèles.</p>
              <p>Pour être membre du club, il suffit d' être à jour de sa cotisation, licencié et d' adhérer aux statuts et au règlement intérieur du club. Les inscriptions peuvent se prendre sur place ou par contact email <a href="mailto:amo.montpellier@gmail.com" class="text-amo-primary hover:underline font-semibold">amo.montpellier@gmail.com</a>.</p>
            </div>
          </div>

          <!-- Stats / Info Card -->
          <div class="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
            <!-- Background Pattern -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div class="relative z-10 space-y-6">
              <div>
                <h3 class="text-2xl font-bold mb-4">Rejoignez-nous !</h3>
                <p class="text-gray-300 mb-6">Jeunes et adultes bienvenus.</p>
                <a href="mailto:amo.montpellier@gmail.com" class="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm">
                  <i class="fa fa-envelope"></i>
                  Nous contacter
                </a>
              </div>
              <div class="grid grid-cols-2 gap-4 pt-4">
                <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center">
                  <div class="text-3xl font-bold text-yellow-400">80+</div>
                  <div class="text-sm text-gray-300">Pilotes</div>
                </div>
                <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center">
                  <div class="text-3xl font-bold text-blue-400">4</div>
                  <div class="text-sm text-gray-300">Catégories</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Reportages Section -->
        <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
           <h3 class="text-2xl font-bold mb-8 text-center">Reportages RC 2023</h3>
           <div class="flex flex-wrap justify-center gap-8">
                <a href="https://boerimodelisme.fr/courses/challenge-mrtp-montpellier-3-decembre-2023/" target="_blank" rel="noopener noreferrer"
                   class="group block relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 max-w-[400px]">
                    <img src="~/assets/images/reportages/mrtp.jpg" alt="Reportage MRTP" class="w-full h-auto transition-transform duration-500 group-hover:scale-105">
                    <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span class="text-white font-bold text-lg border-2 border-white px-6 py-2 rounded-full">Voir le reportage</span>
                    </div>
                </a>
                
                <a href="https://boerimodelisme.fr/courses/2eme-cf-piste-1-5-montpellier-amo/" target="_blank" rel="noopener noreferrer"
                   class="group block relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 max-w-[400px]">
                    <img src="~/assets/images/reportages/1-5.jpg" alt="Reportage 1/5" class="w-full h-auto transition-transform duration-500 group-hover:scale-105">
                     <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span class="text-white font-bold text-lg border-2 border-white px-6 py-2 rounded-full">Voir le reportage</span>
                    </div>
                </a>
            </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const preventIframeScroll = (event) => {
  const iframe = event.target;
  if (iframe && iframe.contentWindow) {
    try {
      // Add CSS to prevent scroll within the iframe if accessible
      iframe.style.pointerEvents = 'auto';
    } catch (e) {
      // Cross-origin restriction, can't access iframe content
      console.log('Cannot access iframe content due to cross-origin policy');
    }
  }
};
</script>
