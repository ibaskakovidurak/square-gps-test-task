import { createStore } from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

const state = {
    markerList: [],
    locale: localStorage.getItem('locale') || import.meta.env.VITE_LOCALE
}

/**
 * Init the store
 */
export default createStore({
    state,
    getters,
    actions,
    mutations,
})