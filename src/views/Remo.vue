<template>
  <div class="contenedor">
    <dashboard />
    <remo />
  </div>
</template>
<script>
import dashboard from "@/components/Dashboard.vue";
import remo from "@/components/Mach-Remo.vue";

export default {
  name: "view Machine",
  components: {
    dashboard,
    remo,
  },
};
</script>
<style>
.contenedor {
  width: 100%;
  height: 100%;
}
</style>
