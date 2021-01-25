import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@views/index/index'
import city from '@views/city/city'
import category from '@views/category/category'
import cart from '@views/cart/cart'
import login from '@views/user/login'
import productDetail from '@views/product/detail'
import orderIndex from '@views/order'
import addressEdit from '@views/user/addressEdit'
import addressList from '@views/user/addressList'
import payIndex from '@views/pay/pay'
import payResult from '@views/pay/payResult'
import userCenter from '@views/user/userCenter'
import orderList from '@views/user/orderList'
import setting from '@views/user/setting'

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
  },
  {
    path: '/category',
    name: 'category',
    component: category
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/product/:id',
    name: 'product',
    component: productDetail
  },
  {
    path: '/order',
    name: 'order',
    component: orderIndex,
  },
  {
    path: '/address/edit/:id',
    name: 'addressEdit',
    component: addressEdit
  },
  {
    path: '/address/list',
    name: 'addressList',
    component: addressList
  },
  {
    path: '/pay/result',
    name: 'payResult',
    component: payResult
  },
  {
    path: '/pay/:id',
    name: 'payIndex',
    component: payIndex
  },
  {
    path: '/user/center',
    name: 'userCenter',
    component: userCenter
  },
  {
    path: '/order/list',
    name: 'orderList',
    component: orderList
  },
  {
    path: '/user/setting',
    name: 'setting',
    component: setting
  },
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router
