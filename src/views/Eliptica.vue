<template>
  <div class="contenedor">
    <dashboard />
    <eliptica />
  </div>
</template>
<script>
import dashboard from "@/components/Dashboard.vue";
import eliptica from "@/components/Mach-Eliptica.vue";

export default {
  name: "view Machine",
  components: {
    dashboard,
    eliptica,
  },
};
</script>
<style>
.contenedor {
  width: 100%;
  height: 100%;
}
</style>
