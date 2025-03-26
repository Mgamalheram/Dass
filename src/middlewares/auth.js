import axios, { Axios } from "axios";
import { useStore } from "vuex";

export default async function authMiddleware(_JUserSession, router) {
    let token = null;
    let store = useStore();
    if (store.state.token) {
        token = store.state.token;
    } else {
        if (_JUserSession) {
            token = _JUserSession;
        }
    }

    let status = await axios.get("http://127.0.0.1:8000/api/user/profile", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
        .then(function () {
            if (!store.state.token) {
                store.commit("setAuthenticated", true)
                store.commit("setToken", store.state.token)
            }
            return true;
        })
        .catch(() => {
            return false;
        })
    return status;
}