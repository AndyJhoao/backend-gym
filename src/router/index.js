import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Machine from "../views/Machines.vue";
import Clients from "../views/Clients.vue";
import Reports from "../views/Reports.vue";
import Eliptica from "../views/Eliptica.vue";
import Products from "../views/Products.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/home/machines",
    name: "machines",
    component: Machine,
  },
  {
    path: "/home/clients",
    name: "clients",
    component: Clients,
  },
  {
    path: "/home/reports",
    name: "reports",
    component: Reports,
  },
  {
    path: "/home/products",
    name: "products",
    component: Products,
  },
  {
    path: "/home/machines/eliptica",
    name: "elipticas",
    component: Eliptica,
  },
  {
    path: "/facebook",
    name: "Facebook",
    beforeEnter() {
      window.open("https://www.facebook.com", "_blank");
    },
  },
  {
    path: "/instagram",
    name: "Instagram",
    beforeEnter() {
      window.open("https://www.instagram.com", "_blank");
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
