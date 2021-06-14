<template>
  <div class="contenedor">
    <agregarproducto />
  </div>
</template>

<script>
import agregarproducto from "@/components/AgregarProducto.vue";
export default {
  name: "AgregarProducto",
  components: {
    agregarproducto,
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
