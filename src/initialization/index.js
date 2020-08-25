import store from '../store/index'
import { getStore } from '@/util/mUtils';
import { refreshToken } from '../service/getData'
// 检测access_token是否快过期，有300s的安全期
export default () => {
    let tokenInfo = getStore('tokenInfo')
    if(tokenInfo) {
        tokenInfo = eval('(' + tokenInfo + ')');
        let date = new Date().getTime();
        if(date >= tokenInfo.time) {
            refreshToken({
                access_token: store.getters.getToken,
                refresh_token: tokenInfo.refresh_token
            }).then((res) => {
                store.commit('setToken', res)
            })
        } 
    }
}