<template>
  <div class="contenedor">
    <spinnerLoader class="center" :loading="isLoading" v-if="isLoading" />
    <body_products :lvlpermisos="lvlpermisos" />
  </div>
</template>

<script>
import spinnerLoader from "@/components/SpinnerLoader.vue";
import body_products from "@/components/Body-Products.vue";
export default {
  name: "Products",
  props: ["lvlpermisos"],
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    body_products,
    spinnerLoader,
  },
  created() {
    this.isLoading = true;
    setTimeout(() => (this.isLoading = false), 1000);
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
