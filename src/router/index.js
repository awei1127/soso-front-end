import { createRouter, createWebHistory } from 'vue-router'
import CartList from '../views/CartList.vue'
import MainView from '../views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main/search',
      name: 'search',
    },
    {
      path: '/main',
      name: 'main',
      component: MainView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartList
    },
    {
      path: '/shop',
      name: 'shop',
    },
    {
      path: '/signin',
      name: 'singin',
    },
    {
      path: '/logout',
      name: 'logout',
    },
    {
      path: '/',
      name: 'home',
      redirect: '/main'
    }
  ]
})

export default router
