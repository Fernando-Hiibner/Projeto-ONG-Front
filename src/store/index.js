import Vue from "vue";
import Vuex from "vuex";
import api from "../service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMobile: false,
    status: "",
    token: localStorage.getItem("token") || "",
    usuario: null,
  },
  mutations: {
    mobileDetect(state, isMobile) {
      state.isMobile = isMobile;
    },
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token) {
      state.status = "success";
      state.token = token;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    },
    setPermissao(state, perm) {
      state.permissao = perm;
    },
  },
  actions: {
    login({ commit, state }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        api
          .post("/login", user)
          .then((resp) => {
            const token = "Bearer " + resp.data.token;
            const usuario = resp.data.user;
            state.usuario = usuario;
            localStorage.setItem("token", token);
            api.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token);
            resolve(resp);
          })
          .catch((err) => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit("logout");
        localStorage.removeItem("token");
        delete api.defaults.headers.common["Authorization"];
        resolve();
      });
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
    getUser: (state) => state.usuario,
  },
});