import { setStore } from '@/util/mUtils'
export default {
    setToken(state, res) {
        let date = new Date();
        let access_token = res.access_token;
        // 扣减300s的安全时间
        let expires_in = (res.expires_in - 300)*1000
        let currentTime = date.getTime();
        res.time = currentTime + expires_in
        state.token = access_token
        setStore('tokenInfo', JSON.stringify(res))
        setStore('token', access_token) //同步存储token至localStorage
    },
    setOrderQuery(state, res) {
        setStore('orderQuery', res)
        state.orderQuery = JSON.stringify(res)
    }
}