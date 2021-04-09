<template>
  <div class="contenedor">
    <dashboard />
    <body_reports />
  </div>
</template>

<script>
import body_reports from "@/components/Body-Reports.vue";
import dashboard from "@/components/Dashboard.vue";

export default {
  name: "view Reports",
  components: {
    dashboard,
    body_reports,
  },
};
</script>

<style>
.contenedor {
  width: 100%;
  height: 100%;
}
</style>
