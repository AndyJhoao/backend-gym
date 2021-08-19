import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import VueSwal from "vue-swal";
import firebase from "firebase";
import {
  activeMembership,
  money_Format,
  date_Format,
  capitalize,
} from "./filters/filters";

var firebaseConfig = {
  apiKey: "AIzaSyBd6O6Ls9ARemH1ABEWRlXczHSCDnGiRn4",
  authDomain: "gym-project-7014c.firebaseapp.com",
  projectId: "gym-project-7014c",
  storageBucket: "gym-project-7014c.appspot.com",
  messagingSenderId: "66316355461",
  appId: "1:66316355461:web:592849dd8357cf952fa6ec",
  measurementId: "G-J5R4DK8SKH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

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
