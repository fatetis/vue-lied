import { getStore } from '@/util/mUtils'

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
        return state.loginStatus
    },
    getOrderQuery(state) {
        if (!state.orderQuery) {
            state.orderQuery = getStore('orderQuery')
        }
        return state.orderQuery
    }
}