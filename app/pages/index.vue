<template>
  <main>
    <HeroSection />
    <AboutSection />
    <LocationSection />
    <CalendarSection />
    <ContactSection />
  </main>
</template>

<script setup>
import { upcomingRaces } from '~/data/races'

const title = 'Club de modélisme RC à Montpellier – Piste de Grammont | AMO'
const description = 'Club de voitures radiocommandées sur piste à Montpellier depuis 1978 : piste du parc de Grammont, courses FFVRC 1/10, 1/8, GT8, 1/5, loisir et compétition.'

useSeoPage({ title, description, path: '/' })
useSchemaGraph([
  webPageNode('/', title, description),
  ...upcomingRaces().map(eventNode),
])
</script>
