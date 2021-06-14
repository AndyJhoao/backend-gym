<template>
  <div class="contenedor">
    <body_clients />
  </div>
</template>

<script>
import body_clients from "@/components/Body-Clients.vue";

export default {
  name: "Clients",
  components: {
    body_clients,
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
