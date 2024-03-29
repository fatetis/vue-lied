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
import orderList from '@views/order/orderList'
import setting from '@views/user/setting'
import search from '@views/search'
import comment from '@views/order/comment'
import commentReview from '@views/order/commentReview'
import orderAddressNotify from '@views/order/orderAddressModify'
import orderDetail from '@views/order/orderDetail'
import userInfo from '@views/user/userInfo'

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
  {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '/comment',
    name: 'comment',
    component: comment
  },
  {
    path: '/comment/review',
    name: 'commentReview',
    component: commentReview
  },
  {
    path: '/order/address/notify',
    name: 'orderAddressNotify',
    component: orderAddressNotify
  },
  {
    path: '/order/detail/:orderno',
    name: 'orderDetail',
    component: orderDetail
  },
  {
    path: '/user/info',
    name: 'userInfo',
    component: userInfo
  },
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router
