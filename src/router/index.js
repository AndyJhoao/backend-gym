import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Machines from "../views/HomeMachines.vue";
import Machine from "../views/Machines.vue";
import Maquinas from "../views/machines/Machine.vue";
import Clients from "../views/Clients.vue";
import Reports from "../views/Reports.vue";
import Products from "../views/Products.vue";
import PuntoVenta from "../views/PuntoVenta.vue";
import Empleados from "../views/empleados/Empleados.vue";
import AgregarProducto from "../views/AgregarProducto.vue";

import ActualizarProducto from "../views/ActualizarProducto.vue";
import Inventario from "../views/Inventario.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
    name: "homeinfo",
    component: Login,
    children: [
      {
        path: "login",
        name: "login",
        component: Login,
      },
    ],
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/home/machines",
    name: "machines",
    component: Machines,
  },
  {
    path: "/home/maquinas",
    name: "maquinas",
    component: Maquinas,
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
    path: "/home/empleados",
    name: "empleados",
    component: Empleados,
  },
  {
    path: "/home/machines/:id",
    name: "MachineView",
    component: Machine,
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
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
