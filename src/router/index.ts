import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChangePasswordView from '../views/ChangePasswordView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductDetailsView from '../views/ProductDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/recover',
      name: 'recover',
      component: () => import('../views/RecoverView.vue')
    },
    {
      path: '/change-password',
      name: 'change-password',
      component: ChangePasswordView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/product-details',
      name: 'product-details',
      component: ProductDetailsView
    }
  ]
})

export default router
