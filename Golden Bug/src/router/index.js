import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventosView from '../views/EventosView.vue'
import SobreView from '../views/SobreView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/eventos', name: 'eventos', component: EventosView },
    { path: '/sobre', name: 'sobre', component: SobreView },

    // Rota dinâmica (desafio opcional): :id é um parâmetro
    {
      path: '/evento/:id',
      name: 'evento-detalhe',
      component: () => import('../views/EventoDetalheView.vue'),
      props: true,
    },

    // 404: qualquer caminho que não bateu com as rotas acima
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router