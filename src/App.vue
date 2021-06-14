<template>
  <div id="app">
    <dashboard :lvlpermisos="permisos" :username="name" v-on:logout="logout" />
    <router-view v-on:autorizado="autorizar" :lvlpermisos="permisos" />
  </div>
</template>
<script>
import Dashboard from "./components/Dashboard.vue";
export default {
  components: { Dashboard },
  name: "app",
  data() {
    return {
      name: "",
      permisos: 0,
    };
  },
  methods: {
    autorizar(data) {
      this.name = data.name;
      this.permisos = data.permisos;
    },
    logout() {
      this.name = "";
      this.permisos = 0;
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
* {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/fondo-1(1).png?alt=media&token=8dab756a-1c1e-4ff3-893e-1193808ec142");
  object-fit: cover;
}
</style>
