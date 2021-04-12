<template>
  <div class="contenedor">
    <dashboard />
    <puntoventa />
  </div>
</template>

<script>
import dashboard from "@/components/Dashboard.vue";
import puntoventa from "@/components/PuntoVenta.vue";
export default {
  name: "PuntoVenta",
  components: {
    dashboard,
    puntoventa,
  },
};
</script>
<style>
.contenedor {
  width: 100%;
  height: 100%;
}
</style>
