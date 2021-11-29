import { getStore, saveAccessToken } from '@/util/mUtils'
import { refreshToken } from '../service/getData'
let timer = true;
export default {
    getToken(state) {
        if (!state.token) {
            state.token = getStore('token')
        }
        return state.token
    },
    
    getLoginStatus(state) {
        if (!state.loginStatus) {
            state.loginStatus = Number(getStore('loginStatus'))
        }
        // 节流
        if(!timer) return state.loginStatus
        setTimeout(() => {
            if(state.loginStatus === 1) {
                let tokenInfo = getStore('tokenInfo')
                if(tokenInfo) {
                    tokenInfo = eval('(' + tokenInfo + ')');
                    let date = new Date().getTime();
                    let expires = date - tokenInfo.time;
                    // 若当前时间减去最后过期时间大于0，说明access_token已过期
                    if(expires >= 0) {
                        // 若当前时间减去最后过期时间大于(30天-300秒[安全期])，说明refresh_token已过期;需要用户重新登录 
                        if(expires <= 107999700) {
                            refreshToken({
                                refresh_token: tokenInfo.refresh_token
                            }).then((res) => {
                                timer = false
                                saveAccessToken(state, res)
                            })
                        }else{
                            saveAccessToken(state, null)
                        }
                    }  
                }
            }
        }, 500)
        return state.loginStatus
    },

    getOrderQuery(state) {
        if (!state.orderQuery) {
            state.orderQuery = getStore('orderQuery')
        }
        return state.orderQuery
    }
}

