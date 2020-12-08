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
// 产品分类
export const productCategory = (arr) => get('/v1/prod/category/pid', arr);
// 产品详情
export const productDetail = (arr, id) => get('/v1/prod/detail/' + id, arr);
// 产品校验
export const productValidate = (arr) => post('/v1/product/validate', arr);
// 产品列表
export const productList = (arr) => post('/v1/product/list', arr);
// 区域列表
export const regionPca = (arr) => get('/v1/region/pca/get', arr);
// 我的收货地址
export const getAddress = (arr) => get('/v1/address/get', arr);
// 获取一条收货地址
export const findAddress = (arr) => get('/v1/address/find', arr);
// 创建或者更新收货地址
export const updateOrCreateAddress = (arr) => post('/v1/address/modify', arr);
// 删除收货地址
export const deleteAddress = (arr) => post('/v1/address/delete', arr);
// 获取产品sku的详情数据
export const productSkuDetail = (arr, id) => get('/v1/prod/sku/' + id, arr);