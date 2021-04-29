<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
    <figure class="container-logo-login">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/logosvg.svg?alt=media&token=43e848cf-f8d8-4000-9fa1-ccf9b8acffa5"
        alt="logo"
        height="150px"
        width="auto"
      />
      <figcaption>GYM Spartans</figcaption>
    </figure>
    <formLogin v-on:signUp="signIn" @userName="userName" @permisos="permisos" />
  </div>
</template>

<script>
// @ is an alias to /src
import formLogin from "@/components/formLogin.vue";
import axios from "axios";

export default {
  name: "Login",
  components: {
    formLogin,
  },
  data() {
    return {
      name: "",
      password: "",
      levelpermisos: 0,
    };
  },
  methods: {
    userName(user_Name) {
      this.name = user_Name;
    },
    permisos(levelpermisos) {
      this.levelpermisos = levelpermisos;
    },
    signIn(data) {
      this.$emit("levelPermisos", this.levelpermisos);
      this.$emit("userName", this.name);
      axios.post("http://localhost:5000/signin", data);
    },
  },
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.container-logo-login {
  width: 85%;
  height: 150px;
  display: flex;
  margin-top: 50px;
  margin-bottom: 30px;
  align-items: center;
}
figcaption {
  font-size: 3em;
}
</style>
