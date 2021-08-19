<template>
  <div class="contenedor">
    <body_products :lvlpermisos="lvlpermisos" />
  </div>
</template>

<script>
import body_products from "@/components/Body-Products.vue";
export default {
  name: "Products",
  props: ["lvlpermisos"],

  components: {
    body_products,
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
