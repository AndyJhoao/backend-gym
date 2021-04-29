<template>
  <div class="contenedor">
    <Dashboard />
    <body_main />
  </div>
</template>

<script>
import body_main from "@/components/Body-Main.vue";
import Dashboard from "../components/Dashboard.vue";

export default {
  name: "Home",
  components: {
    body_main,
    Dashboard,
  },
};
</script>

<style>
.contenedor {
  width: 100%;
  height: 100%;
}
</style>
