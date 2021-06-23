<template>
  <header v-show="lvlpermisos >= 1">
    <nav>
      <ul class="header-nav-logo">
        <li>
          <figure>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/logosvg.svg?alt=media&token=43e848cf-f8d8-4000-9fa1-ccf9b8acffa5"
              alt="logo"
              height="100px"
              width="auto"
            />
          </figure>
        </li>
        <li><h1>Gym Spartans</h1></li>
      </ul>
      <ul class="header-nav">
        <li class="header-nav__item">
          <router-link to="/home/machines"> Maquinas </router-link>
        </li>
        <li class="header-nav__item">
          <router-link to="/home/clients"> Clientes </router-link>
        </li>
        <li class="header-nav__item">
          <router-link to="/home/products"> Productos </router-link>
        </li>
        <li v-if="lvlpermisos == 2" class="header-nav__item">
          <router-link to="/home/reports"> Reportes </router-link>
        </li>
        <li class="header-nav__item margin-top">
          <p>{{ username }}</p>
          <div class="triangulo"></div>
          <div class="container-menu">
            <div class="container-user-data">
              <button
                v-if="lvlpermisos == 2"
                class="button-logout"
                @click="toEmpleados"
              >
                Empleados
              </button>
              <button
                v-if="lvlpermisos == 2"
                class="button-logout"
                @click="toMaquinas"
              >
                Maquinas
              </button>
              <button class="button-logout" @click="logout">
                Cerrar sesion
              </button>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Dashboard",
  props: {
    lvlpermisos: Number,
    username: String,
  },
  created() {
    if (!localStorage.getItem("token") === null) {
      console.log("hay token");
    }
  },
  mounted() {
    if (!localStorage.getItem("token") === null) {
      console.log("hay token mounted");
    }
  },
  methods: {
    logout() {
      this.$emit("logout");
      localStorage.clear();
      this.$router.push("/login");
    },
    toEmpleados() {
      this.$router.push("/home/empleados");
    },
    toMaquinas() {
      this.$router.push("/home/maquinas");
    },
  },
};
</script>

<style>
header {
  background-color: #f08a5d;
  margin: 0;
  width: 100%;
}
ul {
  list-style: none;
}
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.header-nav-logo {
  display: flex;
  flex-direction: row;
  text-align: left;
  align-items: center;
  padding: 2px;
}
.header-nav-logo h1 {
  font-family: "Oswald", sans-serif;
}
.header-nav {
  margin: 0;
  align-items: flex-end;
  text-align: right;
}
.header-nav__item {
  align-items: flex-end;
  display: inline-block;
  font-size: 2em;
  padding: 25px;
}
.header-nav__item a {
  color: black;
  text-decoration: none;
}
.header-nav__item a:hover {
  color: blue;
}
.margin-top {
  top: 100px;
}
.margin-top:hover .container-menu {
  height: 190px;
}
.margin-top:hover .triangulo {
  border-bottom: 10px solid #fbe8d3;
}
.container-menu:hover {
  display: block;
}
.container-menu {
  overflow: hidden;
  position: absolute;
  top: 88px;
  right: 0.2px;
  background: #fbe8d3;
  width: 139px;
  height: 0;
  border-radius: 5px;
  -webkit-animation: ease 0.5s;
  -moz-transition: ease 0.5s;
  transition: all 0.5s ease;
}
.container-user-data {
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 10px;
}
.button-logout {
  width: 80%;
  height: 40%;
  border: 2px solid gray;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition: all 0.5s;
  font-size: 1.1rem;
  margin: 10px 0px;
}
.button-logout:hover {
  background-color: #ffd460;
}
.triangulo {
  width: 0;
  height: 0;
  position: absolute;
  top: 69px;
  border-radius: 1px;
  border-left: 10px solid transparent;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid transparent;
  -webkit-animation: ease 0.5s;
  -moz-transition: ease 0.5s;
  transition: all ease 0.5s;
}
</style>
