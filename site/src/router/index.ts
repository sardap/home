import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/games',
      name: 'Games',
      component: () => import('../views/games/GameSelect.vue'),
    },
    {
      path: '/games/:game',
      component: () => import('../views/games/GameView.vue'),
    },
    {
      path: '/modes',
      name: 'Modes',
      component: () => import('../views/modes/ModesSelect.vue'),
    },
    {
      path: '/modes/:mode',
      component: () => import('../views/modes/ModesView.vue'),
    },
    {
      path: '/sites',
      component: () => import('../views/sites/SitesSelect.vue'),
    },
  ],
})

export default router
