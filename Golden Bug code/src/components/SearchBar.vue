<script setup>
import { ref } from 'vue'

const texto = ref('')
const emit = defineEmits(['pesquisar'])

function pesquisar() {
  emit('pesquisar', texto.value)
}
</script>

<template>
  <form class="input-group mb-3" @submit.prevent="pesquisar">
    <input
      v-model="texto"
      @input="pesquisar"
      type="text"
      class="form-control"
      placeholder="Pesquisar por nome do evento..."
    >
    <button type="submit" class="btn btn-warning">Pesquisar</button>
  </form>
</template>