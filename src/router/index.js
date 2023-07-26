import { createRouter, createWebHashHistory } from 'vue-router'
import CartList from '../views/CartList.vue'
import MainView from '../views/MainView.vue'
import ShopList from '../views/ShopList.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/products',
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
      component: ShopList
    },
    {
      path: '/',
      name: 'home',
      redirect: '/products'
    }
  ]
})

export default router
