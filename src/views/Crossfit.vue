<template>
  <div class="contenedor">
    <dashboard />
    <crossfit />
  </div>
</template>
<script>
import dashboard from "@/components/Dashboard.vue";
import crossfit from "@/components/Mach-Crossfit.vue";

export default {
  name: "view Machine",
  components: {
    dashboard,
    crossfit,
  },
};
</script>
<style>
.contenedor {
  width: 100%;
  height: 100%;
}
</style>
