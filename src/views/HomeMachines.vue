<template>
  <div class="contenedor">
    <body_machine />
  </div>
</template>

<script>
import body_machine from "@/components/Body-Machines.vue";

export default {
  name: "MachineView",
  components: {
    body_machine,
  },
  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    }
  },
};
</script>

<style>
.contenedor {
  width: 100%;
  height: 100%;
}
</style>
