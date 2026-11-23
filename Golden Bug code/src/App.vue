<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Fooster.vue'
</script>

<template>
  <Header />

  <main class="container py-4">
    <RouterView />
  </main>

  <Footer />
</template>