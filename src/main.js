import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBd6O6Ls9ARemH1ABEWRlXczHSCDnGiRn4",
  authDomain: "gym-project-7014c.firebaseapp.com",
  projectId: "gym-project-7014c",
  storageBucket: "gym-project-7014c.appspot.com",
  messagingSenderId: "66316355461",
  appId: "1:66316355461:web:592849dd8357cf952fa6ec",
  measurementId: "G-J5R4DK8SKH",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
