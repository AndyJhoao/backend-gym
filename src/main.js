import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSwal from "vue-swal";
import {
  activeMembership,
  money_Format,
  date_Format,
  capitalize,
} from "./filters/filters";

Vue.use(VueSwal);
Vue.filter("membresia", activeMembership);
Vue.filter("money", money_Format);
Vue.filter("date", date_Format);
Vue.filter("capitalize", capitalize);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
