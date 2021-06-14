<template>
  <div class="contenedor">
    <body_reports />
  </div>
</template>

<script>
import body_reports from "@/components/Body-Reports.vue";

export default {
  name: "viewReports",
  components: {
    body_reports,
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
