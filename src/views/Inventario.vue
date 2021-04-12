<template>
  <div class="contenedor">
    <dashboard />
    <inventario />
  </div>
</template>

<script>
import dashboard from "@/components/Dashboard.vue";
import Inventario from "@/components/Inventario.vue";
export default {
  name: "AgregarProducto",
  components: {
    dashboard,
    Inventario,
  },
};
</script>

<style>
.contenedor {
  width: 100%;
  height: 100%;
}
</style>
