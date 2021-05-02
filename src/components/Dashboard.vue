<template>
  <header>
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
          <router-link to="/home/clients"> Clientes2 </router-link>
        </li>
        <li class="header-nav__item">
          <router-link to="/home/products"> Productos </router-link>
        </li>
        <li v-if="levelPermisos == 2" class="header-nav__item">
          <router-link to="/home/reports"> Reportes </router-link>
        </li>
        <li class="header-nav__item margin-top">
          <p>{{ userName }}</p>
          <div class="triangulo"></div>
          <div class="container-menu">
            <div class="container-user-data">
              <button class="button-logout">Cerrar sesion</button>
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
  data() {
    return {
      levelPermisos: 0,
      userName: "",
    };
  },
  created() {
    this.levelPermisos = this.$route.query.levelPermisos;
    this.userName = this.$route.query.userName;
  },
};
</script>

<style>
header {
  background-color: #f08a5d;
  margin: 0;
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
  height: 100px;
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
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
