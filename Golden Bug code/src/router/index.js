import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventosView from '../views/EventosView.vue'
import SobreView from '../views/SobreView.vue'
import FeriadosView from '../views/FeriadosView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/eventos', name: 'eventos', component: EventosView },
    { path: '/feriados', name: 'feriados', component: FeriadosView },
    { path: '/sobre', name: 'sobre', component: SobreView },
    {
      path: '/evento/:id',
      name: 'evento-detalhe',
      component: () => import('../views/EventoDetalheView.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router