<template>
  <div class="contenedor">
    <dashboard />
    <prensaPierna />
  </div>
</template>
<script>
import dashboard from "@/components/Dashboard.vue";
import prensaPierna from "@/components/PrensaPierna.vue";

export default {
  name: "view Machine",
  components: {
    dashboard,
    prensaPierna,
  },
};
</script>
<style>
.contenedor {
  width: 100%;
  height: 100%;
}
</style>
