<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
    <formLogin v-on:signUp="signIn" />
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
    };
  },
  methods: {
    signIn(data) {
      axios.post("http://localhost:5000/signin", data);
    },
  },
};
</script>
