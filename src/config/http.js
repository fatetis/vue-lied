/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import router from '../router';
import { Toast } from 'vant';
import store from '../store/index'

import {
	baseUrl
} from './env'
/** 
 * 提示函数 
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = msg => {
	Toast({
		message: msg,
		duration: 1500,
		forbidClick: true
	});
}

const load = () => {
	return Toast.loading({
		message: '加载中...',
		forbidClick: true,
		loadingType: 'spinner',
		duration: 15000
	  });
}

/** 
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
	router.replace({
		path: '/login',
		query: {
			redirect: router.currentRoute.fullPath
		}
	});
}

const reqno = () => {
	let date = new Date();
	const year = date.getFullYear()
	let month = date.getMonth() + 1
	let strDate = date.getDate()
	let hour = date.getHours()
	let minutes = date.getMinutes()
	let seconds = date.getSeconds()
	
	if (month >= 1 && month <= 9) {
	  month = '0' + month
	}
	if (strDate >= 0 && strDate <= 9) {
	  strDate = '0' + strDate
	}
	if (hour >= 0 && hour <= 9) {
		hour = '0' + hour
	}
	if (minutes >= 0 && minutes <= 9) {
		minutes = '0' + minutes
	}
	if (seconds >= 0 && seconds <= 9) {
		seconds = '0' + seconds
	}

	let Num="";
	for(var i=0;i<6;i++)
	{
		Num+=Math.floor(Math.random()*10);
	}
	return year + month + strDate + hour + minutes + date.getSeconds() + Num
}

/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
	// 状态码判断
	switch (status) {
		// 401: 未登录状态，跳转登录页
		case 401:
			toLogin();
			break;
		// 403 token过期
		// 清除token并跳转登录页
		case 403:
			tip('登录过期，请重新登录');
			store.commit('setToken', null);
			setTimeout(() => {
				toLogin();
			}, 1500);
			break;
		// 404请求不存在
		case 404:
			tip('请求的资源不存在');
			break;
		default:
			console.log(other)
			break;
	}
}

// 创建axios实例
var instance = axios.create({ timeout: 1000 * 12 });
// 设置post请求头
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers.post['Content-Type'] = 'application/json';
/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */
instance.interceptors.request.use(
	config => {
		// 登录流程控制中，根据本地是否存在token判断用户的登录情况        
		// 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token        
		// 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码        
		// 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。  
		const token = store.getters.getToken;
		token && (config.headers.Authorization = "Bearer " + token);
		return config;
	},
	error => Promise.error(error)
)

// 响应拦截器
instance.interceptors.response.use(
	// 请求成功
	res => (
		res.status === 200 
		&& res.data.data.header.return_code === 'S' 
		&& res.data.data.header.result_code === '00000'
	)  ? Promise.resolve(res) : Promise.reject(res),

	// 请求失败
	error => {
		const { response } = error;
		if (response) {
			// 请求已发出，但是不在2xx的范围 
			errorHandle(response.status, response.data.message);
			return Promise.reject(response);
		} else {
			// 处理断网的情况
			// eg:请求超时或断网时，更新state的network状态
			// network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
			// 关于断网组件中的刷新重新获取数据，会在断网组件中说明
			tip('网络中断，请检查网络情况');
			// store.commit('changeNetwork', false);
		}
	}
);

/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params) {
	const loading = load();
	url = baseUrl + url;
	params = params || {};
	params.reqno = reqno();
	return new Promise((resolve, reject) => {
		instance.get(url, {
			params: params
		})
			.then(res => {
				loading.clear()
				resolve(res.data.data.body);
			})
			.catch(err => {
				loading.clear()
				let msg = err.message || err.data.message || err.data.data.header.result_msg + '[' + err.data.data.header.result_code + ']'
				tip(msg);
			})
	});
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
	const loading = load();
	url = baseUrl + url;
	params = params || {};
	params.reqno = reqno();
	return new Promise((resolve, reject) => {
		instance.post(url, params)
			.then(res => {
				loading.clear()
				resolve(res.data.data.body);
			})
			.catch(err => {
				loading.clear()
				let msg = err.message || err.data.message || err.data.data.header.result_msg + '[' + err.data.data.header.result_code + ']'
				tip(msg);
				// reject(err.data)
			})
	});
}

export default instance;
