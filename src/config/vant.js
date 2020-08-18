import Vue from 'vue'
import 'vant/lib/index.css';
import { Toast,Button } from 'vant';

Vue.prototype.$toast = Toast;
Vue.use(Button);
