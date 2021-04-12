<template>
  <div class="contenedor">
    <dashboard />
    <caminadora />
  </div>
</template>
<script>
import dashboard from "@/components/Dashboard.vue";
import caminadora from "@/components/Mach-Caminadora.vue";

export default {
  name: "view Machine",
  components: {
    dashboard,
    caminadora,
  },
};
</script>
<style>
.contenedor {
  width: 100%;
  height: 100%;
}
</style>
