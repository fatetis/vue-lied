import Vue from 'vue'
import 'vant/lib/index.css';
import { Toast, AddressEdit, AddressList, Badge, Icon, Tab, Tabs} from 'vant';

Vue.prototype.$toast = Toast;
Vue.use(AddressEdit)
Vue.use(AddressList)
Vue.use(Badge)
Vue.use(Icon)

Vue.use(Tab)
Vue.use(Tabs)
