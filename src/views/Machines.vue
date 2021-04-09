<template>
  <div class="contenedor">
    <dashboard />
    <body_machine />
  </div>
</template>

<script>
import body_machine from "@/components/Body-Machines.vue";
import dashboard from "@/components/Dashboard.vue";

export default {
  name: "view Machine",
  components: {
    dashboard,
    body_machine,
  },
};
</script>

<style>
.contenedor {
  width: 100%;
  height: 100%;
}
</style>
