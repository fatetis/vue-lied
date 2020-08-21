import {get, post} from '../config/http'

// 获取首页banner
export const indexAdv = (arr) => get('/v1/index/adv', arr);
// 获取验证码
export const verifyCode = (arr) => post('/v1/mobile/verify/code', arr);
// 验证码登录
export const loginByMobile = (arr) => post('/v1/mobile/login', arr);
// 刷新access_token
export const refreshToken = (arr) => post('/v1/client/api/mobile/refresh', arr);
// [账号|邮箱|手机号]密码登录
export const loginByAccount = (arr) => post('/v1/clients/api/mobile/login', arr);