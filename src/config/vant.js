import Vue from 'vue'
import 'vant/lib/index.css';
import { 
    Toast, 
    AddressEdit, 
    AddressList, 
    Badge, 
    Icon, 
    Image as VanImage, 
    ImagePreview, 
    Lazyload, 
    Swipe, 
    SwipeItem,
    Field,
    Uploader,
    Checkbox,
    CheckboxGroup, 
    Popover 
} from 'vant';

Vue.prototype.$toast = Toast;
Vue.use(AddressEdit)
Vue.use(AddressList)
Vue.use(Badge)
Vue.use(Icon)
Vue.use(VanImage)
Vue.use(ImagePreview)
Vue.prototype.$imagePreview = ImagePreview
Vue.use(Lazyload, {
    lazyComponent: true,
    preload: 500,
})
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Field)
Vue.use(Uploader)
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Popover);