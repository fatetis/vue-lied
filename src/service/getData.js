import {get, post} from '../config/http'

// 获取首页banner
export const indexAdv = (arr) => get('/v1/index/adv', arr);
// 获取验证码
export const verifyCode = (arr) => post('/v1/mobile/verify/code', arr);
// 验证码登录
export const loginByMobile = (arr) => post('/v1/mobile/login', arr);
