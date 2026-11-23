<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark px-3">
    <RouterLink class="navbar-brand fw-bold" to="/">GoldenBugEvents</RouterLink>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#menu"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="menu" class="collapse navbar-collapse">
      <div class="navbar-nav ms-auto">
        <RouterLink class="nav-link" to="/">Início</RouterLink>
        <RouterLink class="nav-link" to="/eventos">Eventos</RouterLink>
        <RouterLink class="nav-link" to="/feriados">Feriados</RouterLink>
        <RouterLink class="nav-link" to="/sobre">Sobre</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar .nav-link.router-link-exact-active {
  color: #f5b301;
  font-weight: bold;
}
</style>