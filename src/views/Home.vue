<template>
  <div class="contenedor">
    <spinnerLoader class="center" :loading="isLoading" v-if="isLoading" />
    <body_main v-if="!isLoading" :lvlpermisos="lvlpermisos" />
  </div>
</template>

<script>
import body_main from "@/components/Body-Main.vue";
import spinnerLoader from "@/components/SpinnerLoader.vue";

export default {
  name: "Home",
  props: ["lvlpermisos"],
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    body_main,
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
.opacityoff {
  opacity: 0.1;
}
.contenedor {
  width: 100%;
  height: 100%;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
