import Vue from 'vue'
import 'vant/lib/index.css';
import { Toast, AddressEdit, AddressList } from 'vant';

Vue.prototype.$toast = Toast;
Vue.use(AddressEdit)
Vue.use(AddressList)
