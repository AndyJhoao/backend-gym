<template>
  <div class="contenedor">
    <puntoventa />
  </div>
</template>

<script>
import puntoventa from "@/components/PuntoVenta.vue";
export default {
  name: "PuntoVenta",
  components: {
    puntoventa,
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
