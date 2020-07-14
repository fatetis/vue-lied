import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@views/index/index'
import city from '@views/city/city'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/city',
    name: 'city',
    component: city
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router
