<template>
  <div class="contenedor">
    <dashboard />
    <body_clients />
  </div>
</template>

<script>
import body_clients from "@/components/Body-Clients.vue";
import dashboard from "@/components/Dashboard.vue";

export default {
  name: "view Clients",
  components: {
    dashboard,
    body_clients,
  },
};
</script>

<style>
.contenedor {
  width: 100%;
  height: 100%;
}
</style>
