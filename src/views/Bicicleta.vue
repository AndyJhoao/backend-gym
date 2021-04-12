<template>
  <div class="contenedor">
    <dashboard />
    <bicicletas />
  </div>
</template>
<script>
import dashboard from "@/components/Dashboard.vue";
import bicicletas from "@/components/Mach-Bicicletas.vue";

export default {
  name: "view Machine",
  components: {
    dashboard,
    bicicletas,
  },
};
</script>
<style>
.contenedor {
  width: 100%;
  height: 100%;
}
</style>
