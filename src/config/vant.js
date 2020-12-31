import Vue from 'vue'
import 'vant/lib/index.css';
import { Toast, AddressEdit, AddressList, Badge} from 'vant';

Vue.prototype.$toast = Toast;
Vue.use(AddressEdit, AddressList, Badge)
Vue.use(AddressList)
Vue.use(Badge)
