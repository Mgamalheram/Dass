import { createStore } from "vuex"

const store = createStore({
    state: {
        token: null,
        authenticated: false
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload;
        },

        setAuthenticated(state, payload) {
            state.authenticated = payload;
        },
    }
})
export default store
