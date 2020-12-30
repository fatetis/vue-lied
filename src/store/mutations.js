import { setStore, removeStore, saveAccessToken } from '@/util/mUtils'
export default {
    setToken(state, res) {
        saveAccessToken(state, res)
    },
    setOrderQuery(state, res) {
        setStore('orderQuery', res)
        state.orderQuery = JSON.stringify(res)
    }
}