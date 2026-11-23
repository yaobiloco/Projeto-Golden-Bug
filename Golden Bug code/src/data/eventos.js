import { ref } from 'vue'

export const meusEventos = ref([
  {
    id: 1,
    Nome: 'Festa de Halloween',
    Data: '30/10/2026',
    Local: 'Salão Golden Bug',
    Categoria: 'Festa',
    Descricao: 'Evento especial de Halloween',
  },
  {
    id: 2,
    Nome: 'Oficina Ubíqua',
    Data: '19/10/2026 a 24/10/2026',
    Local: 'Unama Alcino Cacela',
    Categoria: 'Acadêmico',
    Descricao: 'Evento acadêmico',
  },
  {
    id: 3,
    Nome: 'Show da Turnê Liniker Bye Bye Caju',
    Data: '07/11/2026',
    Local: 'Espaço Náutico Marine Club',
    Categoria: 'Música',
    Descricao: 'Evento musical',
  },
  {
    id: 4,
    Nome: 'Festival Psica 2026',
    Data: '10/12/2026',
    Local: 'Estádio Olímpico do Pará (Mangueirão)',
    Categoria: 'Música',
    Descricao: 'Festival de música',
  },
])

export const favoritos = ref([])

export function alternarFavorito(id) {
  if (favoritos.value.includes(id)) {
    favoritos.value = favoritos.value.filter((item) => item !== id)
  } else {
    favoritos.value.push(id)
  }
}

export function estaFavorito(id) {
  return favoritos.value.includes(id)
}