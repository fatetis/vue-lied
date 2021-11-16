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
      /**
       * 兼容ios端vant框架组件Popover需点击两次才触发选中事件的问题
       */
      FastClick.attach(document.getElementById("app"));
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
