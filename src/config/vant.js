import Vue from 'vue'
import 'vant/lib/index.css';
import { Toast, AddressEdit, AddressList, Badge, Icon, ImagePreview, Lazyload, Image as VanImage} from 'vant';

Vue.prototype.$toast = Toast;
Vue.use(AddressEdit)
Vue.use(AddressList)
Vue.use(Badge)
Vue.use(Icon)
Vue.use(ImagePreview)
Vue.use(Lazyload, {
    lazyComponent: true,
    preload: 500,
});
Vue.use(VanImage)
Vue.prototype.$imagePreview = ImagePreview