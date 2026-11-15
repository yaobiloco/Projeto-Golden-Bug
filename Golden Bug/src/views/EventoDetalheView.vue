<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { meusEventos, alternarFavorito, estaFavorito } from '../data/eventos'

// vem da rota /evento/:id (props: true). Chega como string!
const props = defineProps({ id: String })

const evento = computed(() =>
  meusEventos.value.find((e) => e.id === Number(props.id))
)
</script>

<template>
  <section v-if="evento" class="eventos">
    <span class="card-categoria">{{ evento.Categoria }}</span>
    <h2>{{ evento.Nome }}</h2>

    <p class="card-info"><strong>Data</strong> {{ evento.Data }}</p>
    <p class="card-info"><strong>Local</strong> {{ evento.Local }}</p>
    <p>{{ evento.Descricao }}</p>

    <button
      class="btn-favorito"
      :class="{ ativo: estaFavorito(evento.id) }"
      @click="alternarFavorito(evento.id)"
    >
      {{ estaFavorito(evento.id) ? '♥ Favoritado' : '♡ Favoritar' }}
    </button>

    <p><RouterLink to="/eventos">← Voltar para os eventos</RouterLink></p>
  </section>

  <section v-else class="eventos">
    <h2>Evento não encontrado</h2>
    <RouterLink to="/eventos">← Voltar para os eventos</RouterLink>
  </section>
</template>