<template>
  <div class="container__form--login">
    <div class="form__login--tittle"><p>Iniciar sesion</p></div>
    <div class="form__login--body">
      <div class="login__body--user">
        <div class="body__user--name">
          <div class="user__name--label font_size-24">
            <label for="username">Nombre de usuario : </label>
          </div>
          <div class="user__name--field">
            <input
              type="text"
              name="username__login"
              id="username"
              v-model="name"
            />
          </div>
        </div>
        <div class="body__user--password">
          <div class="user__password--label font_size-24">
            <label for="password__login">Contraseña : </label>
          </div>
          <div class="user__password--field font_size-24">
            <input
              type="password"
              name="password__login"
              id="password__login"
              v-model="password"
            />
          </div>
        </div>
        <div class="body__user--button">
          <div class="user__button--sign">
            <button class="font_size-24" v-on:click="callSign">
              Ingresar ->
            </button>
          </div>
          <div class="user__button--forgot">
            <button class="font_size-20 bg-none" v-on:click="forgottPassword">
              <u>Olvidaste tu contraseña?</u>
            </button>
          </div>
        </div>
      </div>
      <div class="login__body--social font_size-24">
        <p>Siguenos en nuestras redes sociales</p>
        <div class="body__social--redes">
          <div class="social__redes--facebook spacingV-5">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/facebook-brands.svg?alt=media&token=6986bffb-b6ed-4d6a-944c-8f53e8e09409"
              alt="facebook-logo"
              width="40px"
              height="40px"
            />
            <router-link class="spacingH-13" to="/facebook"
              >Facebook</router-link
            >
          </div>
          <div class="social__redes--instagram spacingV-5">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/instagram-brands.svg?alt=media&token=632e88f7-9e66-4520-b9fb-7e3d96c6a7d0"
              alt="instagram-logo"
              width="40px"
              height="40px"
            />

            <router-link class="spacingH-10" to="/instagram"
              >Instagram</router-link
            >
          </div>
        </div>
        <div class="body__social--register">
          <p>Todos los derechos reservados</p>
          <p>GYM Spartans &copy;</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    callSign() {
      // if (this.name == "" && this.password == "") {
      //   this.$swal(
      //     "Favor de llenar los campos",
      //     "Ingresa tu usuario y contraseña",
      //     "error"
      //   );
      // } else if (this.name == "admin" && this.password == "1234") {
      //   this.$router.push({
      //     path: "/home",
      //     query: { userName: this.name, levelPermisos: 2 },
      //   });
      // } else if (this.name == "andy" && this.password == "1234") {
      //   this.$router.push({
      //     path: "/home",
      //     query: { userName: this.name, levelPermisos: 1 },
      //   });
      // } else {
      // this.$swal(
      //   "USUARIO O CONTRASEÑA INCORRECTOS",
      //   "Verifica tus credenciales.!",
      //   "error"
      // );
      // }
      this.$emit("signUp", { name: this.name, password: this.password });
    },
    forgottPassword() {
      // this.$swal({
      //   text: "Ingresa tu correo electronico",
      //   content: "input",
      //   button: {
      //     text: "Enviar",
      //     closeModal: false,
      //   },
      // })
      //   .then((email) => {
      //     if (!email) throw null;
      //     return this.$swal({
      //       title: "Enviado correctamente.!",
      //       text: "Se envio un link para restablecer la contraseña",
      //     });
      //   })
      //   .catch((err) => {
      //     return this.$swal(
      //       "No se ah podido enviar al correo.!",
      //       "No se pudo enviar al correo electronico proporcionado.",
      //       err
      //     );
      //   });
    },
  },
};
</script>

<style scoped>
.bg-none {
  background: transparent;
  border: none;
  cursor: pointer;
}
.font_size-24 {
  font-size: 22px;
}
.font_size-20 {
  font-size: 20px;
  color: #000000;
}
.spacingH-10 {
  padding: 0px 10px;
}
.spacingH-13 {
  padding: 0px 13px;
}
.spacingV-5 {
  padding: 5px 0px;
}
.style-none {
  color: #000000;
}
.container__form--login {
  height: 385px;
  width: 944px;
  background-color: rgba(240, 138, 93, 0.95);
  border-radius: 10px;
}
.form__login--tittle {
  font-size: 38px;
  height: 25%;
}
.form__login--tittle p {
  margin: 0px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form__login--body {
  display: flex;
  width: 100%;
  height: 75%;
}
.login__body--user {
  width: 60%;
  height: 100%;
}
.login__body--social {
  width: 40%;
  height: 70%;
  border-left: 2px solid rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.login__body--social p {
  margin: 0;
}
.body__social--redes {
  height: 70%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.body__social--register {
  text-align: center;
}
.social__redes--facebook {
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.social__redes--facebook a {
  text-decoration: none;
  color: #000000;
}
.social__redes--instagram {
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.social__redes--instagram a {
  text-decoration: none;
  color: #000000;
}
.body__user--name {
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.user__name--label {
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.user__name--field {
  width: 50%;
  height: 60%;
  display: flex;
  padding: 5px;
}
.user__name--field input {
  width: 100%;
  border-radius: 5px;
  outline: none;
  padding: 5px;
}
.user__password--label {
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.user__password--field {
  width: 50%;
  height: 60%;
  display: flex;
  padding: 5px;
}
.user__password--field input {
  width: 100%;
  border-radius: 5px;
  outline: none;
  padding: 5px;
}
.body__user--password {
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.body__user--button {
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
}
.user__button--sign {
  width: auto;
  height: 37%;
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: center;
  margin-left: 40%;
}
.user__button--sign button {
  height: 70%;
  width: 60%;
  border-radius: 5px;
  background-color: #ffd460;
  border: 2px #000000 solid;
  cursor: pointer;
}
.user__button--forgot {
  width: auto;
  height: 40%;
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: center;
  margin-left: 40%;
}
</style>
