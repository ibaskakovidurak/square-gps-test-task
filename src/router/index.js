import { createRouter, createWebHistory } from 'vue-router'
import PageNotFoundView from '../views/PageNotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('@/views/MapView.vue')
    },
    {
      path: '/map/:id',
      name: 'mapItem',
      component: () => import('@/views/MapView.vue')
    },
    // Emulate 404 page
    {
      path: '/not-found',
      name: 'notFound',
      component: PageNotFoundView
    },
    // Real 404 page
    {
      path: '/:notFound(.*)',
      name: 'NotFound',
      component: PageNotFoundView
    }
  ]
})

export default router
