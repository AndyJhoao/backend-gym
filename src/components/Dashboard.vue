<template>
  <header>
    <nav>
      <ul class="header-nav-logo">
        <li>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/logosvg.svg?alt=media&token=43e848cf-f8d8-4000-9fa1-ccf9b8acffa5"
            alt="logo"
            height="100px"
            width="auto"
          />
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
        <li class="header-nav__item">
          <router-link to="/home/reports"> Reportes </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
header {
  background-color: #f7be79;
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
</style>
