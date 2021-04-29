<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
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
