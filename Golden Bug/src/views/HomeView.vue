<script setup>
import { RouterLink } from 'vue-router'
import { meusEventos } from '../data/eventos'
</script>

<template>
  <section class="inicio">
    <h2>Encontre seu próximo evento</h2>

    <p>
      Descubra eventos de música, esportes,
      tecnologia, cultura e muito mais.
    </p>

    <p>Temos {{ meusEventos.length }} eventos cadastrados.</p>

    <RouterLink to="/eventos">Ver todos os eventos</RouterLink>
  </section>
</template>