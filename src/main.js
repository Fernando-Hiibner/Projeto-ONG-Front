import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import api from './service'
import VueAxios from "vue-axios";
// import VueCurrencyFilter from "vue-currency-filter";
// import "./plugins/vuetify-money.js";

Vue.config.productionTip = false

// Config conexão
Vue.use(VueAxios, api);

// Pega a hora atual
const moment = require("moment");
require("moment/locale/pt-br");
Vue.use(require("vue-moment"), {
  moment,
});

/*
// Use 'currency' in HTML
Vue.use(VueCurrencyFilter, {
  symbol: "",
  thousandsSeparator: ".",
  fractionCount: 2,
  fractionSeparator: ",",
  symbolPosition: "front",
  symbolSpacing: false,
});
*/

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

