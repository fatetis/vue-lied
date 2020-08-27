"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productValidate = exports.productDetail = exports.productCategory = exports.loginByAccount = exports.refreshToken = exports.loginByMobile = exports.verifyCode = exports.indexAdv = void 0;

var _http = require("../config/http");

var indexAdv = function indexAdv(arr) {
  return (0, _http.get)('/v1/index/adv', arr);
}; // 获取验证码


exports.indexAdv = indexAdv;

var verifyCode = function verifyCode(arr) {
  return (0, _http.post)('/v1/mobile/verify/code', arr);
}; // 验证码登录


exports.verifyCode = verifyCode;

var loginByMobile = function loginByMobile(arr) {
  return (0, _http.post)('/v1/mobile/login', arr);
}; // 刷新access_token


exports.loginByMobile = loginByMobile;

var refreshToken = function refreshToken(arr) {
  return (0, _http.post)('/v1/client/api/mobile/refresh', arr);
}; // [账号|邮箱|手机号]密码登录


exports.refreshToken = refreshToken;

var loginByAccount = function loginByAccount(arr) {
  return (0, _http.post)('/v1/clients/api/mobile/login', arr);
}; // 产品分类


exports.loginByAccount = loginByAccount;

var productCategory = function productCategory(arr) {
  return (0, _http.get)('/v1/prod/category/pid', arr);
}; // 产品详情


exports.productCategory = productCategory;

var productDetail = function productDetail(arr, id) {
  return (0, _http.get)('/v1/prod/detail/' + id, arr);
}; // 产品校验


exports.productDetail = productDetail;

var productValidate = function productValidate(arr) {
  return (0, _http.post)('/v1/product/validate', arr);
};

exports.productValidate = productValidate;