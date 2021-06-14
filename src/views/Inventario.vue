<template>
  <div class="contenedor">
    <inventario />
  </div>
</template>

<script>
import Inventario from "@/components/Inventario.vue";
export default {
  name: "AgregarProducto",
  components: {
    Inventario,
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
