<template>
  <div class="contenedor">
    <machine />
  </div>
</template>
<script>
import machine from "@/components/Machine.vue";
export default {
  name: "machines",
  components: {
    machine,
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
