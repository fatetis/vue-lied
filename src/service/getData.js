import {get, post} from '../config/http'
import {getStore} from '../config/mUtils'

/**
 * 获取首页默认地址
 */

// export const city = () => fetch('/statics/mock/city.json', {
// 	type: 'get'
// });

export const indexAdv = (arr) => get('/v1/index/adv', arr);
