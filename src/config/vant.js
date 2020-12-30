import Vue from 'vue'
import 'vant/lib/index.css';
import { Toast, AddressEdit, AddressList, Swipe, SwipeItem, Lazyload  } from 'vant';

Vue.prototype.$toast = Toast;
Vue.use(AddressEdit)
Vue.use(AddressList)
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
