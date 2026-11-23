<script setup>
import { ref, computed } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import EventCard from '../components/EventoCard.vue'
import { meusEventos, favoritos, alternarFavorito, estaFavorito } from '../data/eventos'

const pesquisa = ref('')
const categoriaSelecionada = ref('Todos')

const categorias = computed(() => [
  'Todos',
  ...new Set(meusEventos.value.map((evento) => evento.Categoria)),
])

function normalizar(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}

const eventosFiltrados = computed(() => {
  return meusEventos.value.filter((evento) => {
    const combinaNome = normalizar(evento.Nome).includes(normalizar(pesquisa.value))
    const combinaCategoria =
      categoriaSelecionada.value === 'Todos' || evento.Categoria === categoriaSelecionada.value
    return combinaNome && combinaCategoria
  })
})

function mudarPesquisa(valor) {
  pesquisa.value = valor
}

function mudarCategoria(categoria) {
  categoriaSelecionada.value = categoria
}
</script>

<template>
  <section class="eventos">
    <h2>Eventos</h2>

    <SearchBar @pesquisar="mudarPesquisa" />

    <div class="categorias">
      <button
        v-for="categoria in categorias"
        :key="categoria"
        :class="{ ativo: categoriaSelecionada === categoria }"
        @click="mudarCategoria(categoria)"
      >
        {{ categoria }}
      </button>
    </div>

    <div class="contador">
      <span>{{ eventosFiltrados.length }} evento(s)</span>
      <span>{{ favoritos.length }} favorito(s)</span>
    </div>

    <div v-if="eventosFiltrados.length > 0" class="eventos-grid">
      <EventCard
        v-for="evento in eventosFiltrados"
        :key="evento.id"
        :Id="evento.id"
        :Nome="evento.Nome"
        :Data="evento.Data"
        :Local="evento.Local"
        :Categoria="evento.Categoria"
        :Descricao="evento.Descricao"
        :Favorito="estaFavorito(evento.id)"
        @favoritar="alternarFavorito"
      />
    </div>

    <p v-else class="sem-eventos">
      Nenhum evento encontrado. Tente outro nome ou escolha outra categoria.
    </p>
  </section>
</template>