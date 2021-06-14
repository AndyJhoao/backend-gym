<template>
  <div class="contenedor">
    <actualizarproducto />
  </div>
</template>

<script>
import actualizarproducto from "@/components/ActualizarProducto.vue";
export default {
  name: "AgregarProducto",
  components: {
    actualizarproducto,
  },
  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    }
  },
};
</script>

<style>
.contenedor {
  width: 100%;
  height: 100%;
}
</style>
