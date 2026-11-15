<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="logo">
      <h1>GoldenBugEvents</h1>
      <p>Encontre eventos perto de você</p>
    </div>

    <nav>
      <RouterLink to="/">Início</RouterLink>
      <RouterLink to="/eventos">Eventos</RouterLink>
      <RouterLink to="/sobre">Sobre</RouterLink>
    </nav>
  </header>
</template>

<style>
/* o Vue Router coloca esta classe no link da página atual */
.header nav a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>