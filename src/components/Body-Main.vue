<template>
  <div>
    <main>
      <section>
        <h1><router-link to="/home/"> Home </router-link> //</h1>
        <div class="contenedor-1">
          <div class="caja-Maquina">
            <router-link to="/home/machines">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/maquinas.jpg?alt=media&token=6ca85662-feda-42b0-b15b-68c06701db46"
                alt="Maquinas"
                width="300px"
                height="300px"
              />
              <h2>Maquinas</h2>
            </router-link>
          </div>

          <div class="caja-Clientes">
            <router-link to="/home/clients">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/users.jpg?alt=media&token=a0e36394-3041-451c-a756-6b905aef4f44"
                alt="Clientes"
                width="300px"
                height="300px"
              />
              <h2>Clientes</h2>
            </router-link>
          </div>

          <div class="caja-Clientes">
            <router-link to="/home/productos">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/productos.jpg?alt=media&token=1823d520-5142-4674-a6b4-7e4bb9e07136"
                alt="Productos"
                width="300px"
                height="300px"
              />
              <h2>Productos</h2>
            </router-link>
          </div>

          <div class="caja-Reportes">
            <router-link to="/home/reports">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/reportes.jpg?alt=media&token=ba27d6e5-1aca-479f-80ac-c42606c34ba4"
                alt="Reportes"
                width="300px"
                height="300px"
              />
              <h2>Reportes</h2>
            </router-link>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
h1 {
  font-size: 2em;
  padding: 10px;
}
h1 a {
  text-decoration: none;
  color: black;
}
.contenedor-1 {
  /*background-color: blue;*/
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3em;
  margin: 1em;
}
.caja-Maquina {
  text-align: center;
  margin: auto;
  transition: 1s;
}
.caja-Maquina:hover {
  transform: scale(1.3);
}
.caja-Maquina a {
  text-decoration: none;
  color: black;
}
.caja-Clientes {
  text-align: center;
  margin: auto;
  transition: 1s;
}
.caja-Clientes:hover {
  transform: scale(1.3);
}
.caja-Clientes a {
  text-decoration: none;
  color: black;
}
.caja-Reportes {
  text-align: center;
  margin: auto;
  transition: 1s;
}
.caja-Reportes:hover {
  transform: scale(1.3);
}
.caja-Reportes a {
  text-decoration: none;
  color: black;
}
h2 {
  font-size: 3em;
  padding: 0.5em;
}
</style>
