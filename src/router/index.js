import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Box.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
    ,
    {
      path: '/Nav',
      name: 'nav',
      component: () => import('../views/Nav.vue')
    }
    ,
    {
      path: '/Goods',
      name: 'goods',
      component: () => import('../views/Goods.vue')
    }
    ,
    {
      path: '/Box',
      name: 'box',
      component: () => import('../views/Box.vue')
    }
    ,
    {
      path: '/Product',
      name: 'product',
      component: () => import('../views/Product.vue')
    }
  ]
})

export default router
