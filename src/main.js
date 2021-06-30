import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import 'lib-flexible'
import './config/vant'
import scrollTop from '@components/common/scrollTop'
import selfImage from '@components/common/selfImage'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}

Vue.component('scroll-top', scrollTop)
Vue.component('self-image', selfImage)

// Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
