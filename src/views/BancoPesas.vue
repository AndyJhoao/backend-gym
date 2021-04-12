<template>
  <div class="contenedor">
    <dashboard />
    <bancoPesas />
  </div>
</template>
<script>
import dashboard from "@/components/Dashboard.vue";
import bancoPesas from "@/components/Mach-BancoPesas.vue";

export default {
  name: "view Machine",
  components: {
    dashboard,
    bancoPesas,
  },
};
</script>
<style>
.contenedor {
  width: 100%;
  height: 100%;
}
</style>
