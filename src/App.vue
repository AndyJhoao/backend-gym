<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

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
  width: 100%;
  height: 100vh;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/background-gym.jpg?alt=media&token=9f7ee7e7-2606-4fbf-b573-f660a2ddd7d6");
  background-size: cover;
}
</style>
