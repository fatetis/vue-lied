import { getStore } from '@/util/mUtils'

export default {
    getToken(state) {
        if (!state.token) {
            state.token = getStore('token')
        }
        return state.token
    }
}