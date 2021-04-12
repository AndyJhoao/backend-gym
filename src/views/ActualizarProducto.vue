<template>
  <div class="contenedor">
    <dashboard />
    <actualizarproducto />
  </div>
</template>

<script>
import dashboard from "@/components/Dashboard.vue";
import actualizarproducto from "@/components/ActualizarProducto.vue";
export default {
  name: "AgregarProducto",
  components: {
    dashboard,
    actualizarproducto,
  },
};
</script>

<style>
.contenedor {
  width: 100%;
  height: 100%;
}
</style>
