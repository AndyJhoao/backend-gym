<template>
  <div class="contenedor">
    <dashboard />
    <agregarproducto />
  </div>
</template>

<script>
import dashboard from "@/components/Dashboard.vue";
import agregarproducto from "@/components/AgregarProducto.vue";
export default {
  name: "AgregarProducto",
  components: {
    dashboard,
    agregarproducto,
  },
};
</script>

<style>
.contenedor {
  width: 100%;
  height: 100%;
}
</style>
