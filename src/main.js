import Vue from 'vue'
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import api from './service';
import store_plugin from './store';
import rules from './plugins/rules';
import VueAxios from "vue-axios";

Vue.config.productionTip = false

// Config conexão
Vue.use(VueAxios, api);
Vue.use(store_plugin);

// Configs login
localStorage.removeItem("token");

new Vue({
  vuetify,
  router,
  rules,
  render: h => h(App)
}).$mount('#app')

