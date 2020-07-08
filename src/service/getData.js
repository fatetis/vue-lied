import fetch from '../config/fetch'
import {getStore} from '../config/mUtils'

/**
 * 获取首页默认地址
 */

export const city = () => fetch('/statics/mock/city.json', {
	type: 'get'
});

