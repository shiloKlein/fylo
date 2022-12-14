import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../app.vue'
import about from '../views/about.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: app,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    }
  ],
})

export default router
