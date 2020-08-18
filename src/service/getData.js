import {get, post} from '../config/http'
import {getStore} from '../config/mUtils'

export const indexAdv = (arr) => get('/v1/index/adv', arr);
