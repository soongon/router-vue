import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(
                /* webpackChunkName: "products" */ 
                '../views/ProductsView.vue')
  },
  {
    path: '/products/:id',
    name: 'productDetail',
    component: () => import(
                /* webpackChunkName: "productDetail" */ 
                '../views/ProductDetailView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import(
                /* webpackChunkName: "notfound" */ 
                '../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
