import Vue from 'vue'
import VueRouter from 'vue-router'
// import Feed from '../views/Feed.vue'
// import Login from '../views/Login.vue'
// import Perfil from '../views/Perfil.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    // component: Login
    component: () => import('../views/Login.vue')
  },
  {
    path: '/feed',
    name: 'Feed',
    // component: Feed
    component: () => import('../views/Feed.vue')
  },
  {
    path: '/perfil',
    name: 'Perfil',
    // component: Perfil
    component: () => import('../views/Perfil.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
