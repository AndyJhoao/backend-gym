<template>
  <div class="contenedor">
    <dashboard />
    <poleas />
  </div>
</template>
<script>
import dashboard from "@/components/Dashboard.vue";
import poleas from "@/components/Mach-Poleas.vue";

export default {
  name: "view Machine",
  components: {
    dashboard,
    poleas,
  },
};
</script>
<style>
.contenedor {
  width: 100%;
  height: 100%;
}
</style>
