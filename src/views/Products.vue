<template>
  <div class="contenedor">
    <dashboard />
    <body_products />
  </div>
</template>

<script>
import dashboard from "@/components/Dashboard.vue";
import body_products from "@/components/Body-Products.vue";
export default {
  name: "Products",
  components: {
    dashboard,
    body_products,
  },
};
</script>

<style>
.contenedor {
  width: 100%;
  height: 100%;
}
</style>
