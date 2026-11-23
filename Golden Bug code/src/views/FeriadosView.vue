<script setup>
import { ref, computed, onMounted } from 'vue'

const URL_API = 'https://brasilapi.com.br/api/feriados/v1/2026'

const feriados = ref([])
const carregando = ref(false)
const erro = ref('')
const busca = ref('')
const mes = ref('todos')

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

async function carregar() {
  carregando.value = true
  erro.value = ''
  try {
    const resposta = await fetch(URL_API)
    if (!resposta.ok) throw new Error(`Erro ${resposta.status}`)
    feriados.value = await resposta.json()
  } catch (e) {
    erro.value = 'Não foi possível carregar os feriados. Tente novamente.'
  } finally {
    carregando.value = false
  }
}

function normalizar(t) {
  return t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}

function formatarData(iso) {
  const [ano, m, dia] = iso.split('-')
  return `${dia}/${m}/${ano}`
}

const feriadosFiltrados = computed(() =>
  feriados.value.filter((f) => {
    const combinaNome = normalizar(f.name).includes(normalizar(busca.value))
    const combinaMes = mes.value === 'todos' || Number(f.date.split('-')[1]) === Number(mes.value)
    return combinaNome && combinaMes
  })
)

onMounted(carregar)
</script>

<template>
  <section class="eventos">
    <h2>Feriados de 2026</h2>
    <p>Dados da BrasilAPI para você planejar seus eventos.</p>

    <div class="row g-2 mb-3">
      <div class="col-md-8">
        <input v-model="busca" type="text" class="form-control" placeholder="Pesquisar feriado..." />
      </div>
      <div class="col-md-4">
        <select v-model="mes" class="form-select">
          <option value="todos">Todos os meses</option>
          <option v-for="(nome, i) in meses" :key="nome" :value="i + 1">{{ nome }}</option>
        </select>
      </div>
    </div>

    <p v-if="carregando" class="sem-eventos">Carregando...</p>

    <div v-else-if="erro" class="sem-eventos">
      <p>{{ erro }}</p>
      <button class="btn btn-warning" @click="carregar">Tentar novamente</button>
    </div>

    <template v-else>
      <div class="contador"><span>{{ feriadosFiltrados.length }} feriado(s)</span></div>

      <div v-if="feriadosFiltrados.length > 0" class="eventos-grid">
        <article v-for="f in feriadosFiltrados" :key="f.date" class="card">
          <span class="card-categoria">Feriado nacional</span>
          <h3>{{ f.name }}</h3>
          <p class="card-info"><strong>Data</strong> {{ formatarData(f.date) }}</p>
        </article>
      </div>

      <p v-else class="sem-eventos">Nenhum feriado encontrado.</p>
    </template>
  </section>
</template>