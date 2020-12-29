import { setStore } from '@/util/mUtils'
export default {
    setToken(state, res) {
        let loginStatus
        if(res === null) {
            state.token = null
            loginStatus = 0
			localStorage.removeItem('token');
			localStorage.removeItem('tokenInfo');
        } else {
            let date = new Date();
            let access_token = res.access_token;
            // 扣减300s的安全时间
            let expires_in = (res.expires_in - 300)*1000
            let currentTime = date.getTime();
            res.time = currentTime + expires_in
            state.token = access_token
            loginStatus = 1
            setStore('tokenInfo', JSON.stringify(res))
            setStore('token', access_token) //同步存储token至localStorage
        }
        state.loginStatus = loginStatus
        setStore('loginStatus', loginStatus) //同步存储loginStatus至localStorage
    },
    setOrderQuery(state, res) {
        setStore('orderQuery', res)
        state.orderQuery = JSON.stringify(res)
    }
}