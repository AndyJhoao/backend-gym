import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Machine from "../views/Machines.vue";
import Eliptica from "../views/Eliptica.vue";
import BancoPesas from "../views/BancoPesas.vue";
import Bicicleta from "../views/Bicicleta.vue";
import Caminadora from "../views/Caminadora.vue";
import Crossfit from "../views/Crossfit.vue";
import Poleas from "../views/Poleas.vue";
import PrensaPierna from "../views/PrensaPierna.vue";
import Remo from "../views/Remo.vue";

import Clients from "../views/Clients.vue";
import Reports from "../views/Reports.vue";
import Products from "../views/Products.vue";
import PuntoVenta from "../views/PuntoVenta.vue";
import AgregarProducto from "../views/AgregarProducto.vue";

import ActualizarProducto from "../views/ActualizarProducto.vue";
import Inventario from "../views/Inventario.vue";

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
    path: "/home/machines/banco-pesas",
    name: "banco-pesas",
    component: BancoPesas,
  },
  {
    path: "/home/machines/bicicleta",
    name: "bicicleta",
    component: Bicicleta,
  },
  {
    path: "/home/machines/crossfit",
    name: "crossfit",
    component: Crossfit,
  },
  {
    path: "/home/machines/poleas",
    name: "poleas",
    component: Poleas,
  },
  {
    path: "/home/machines/prensa-pierna",
    name: "prensa-pierna",
    component: PrensaPierna,
  },
  {
    path: "/home/machines/remo",
    name: "remo",
    component: Remo,
  },
  {
    path: "/home/machines/caminadoras",
    name: "caminadoras",
    component: Caminadora,
  },
  {
    path: "/home/products/punto-de-venta",
    name: "punto-de-venta",
    component: PuntoVenta,
  },
  {
    path: "/home/products/agregar-producto",
    name: "agregar-producto",
    component: AgregarProducto,
  },
  {
    path: "/home/products/actualizar-producto",
    name: "actualizar-producto",
    component: ActualizarProducto,
  },
  {
    path: "/home/products/inventario",
    name: "inventario",
    component: Inventario,
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
