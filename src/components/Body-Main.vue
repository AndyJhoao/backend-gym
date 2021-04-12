<template>
  <div>
    <main>
      <section>
        <h1><router-link to="/home/"> Home </router-link> //</h1>
        <div class="body">
          <article class="card">
            <img
              class="img"
              src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/maquinas.jpg?alt=media&token=6ca85662-feda-42b0-b15b-68c06701db46"
              alt="maquinas"
            />
          </article>
          <router-link to="/home/machines">
            <div class="sombra">
              <p>Maquinas</p>
            </div>
          </router-link>
          <article class="card">
            <img
              class="img"
              src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/users.jpg?alt=media&token=a0e36394-3041-451c-a756-6b905aef4f44"
              alt="clientes"
            />
          </article>
          <router-link to="/home/clients">
            <div class="sombra">
              <p>Clientes</p>
            </div>
          </router-link>
          <article class="card">
            <img
              class="img"
              src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/reportes.jpg?alt=media&token=ba27d6e5-1aca-479f-80ac-c42606c34ba4"
              alt="reportes"
            />
          </article>
          <router-link to="/home/reports">
            <div class="sombra">
              <p>Reportes</p>
            </div>
          </router-link>
          <article class="card">
            <img
              class="img"
              src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/productos.jpg?alt=media&token=1823d520-5142-4674-a6b4-7e4bb9e07136"
              alt="productos"
            />
          </article>
          <router-link to="/home/products">
            <div class="sombra">
              <p>Productos</p>
            </div>
          </router-link>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2em;
  padding: 10px;
}
h1 a {
  text-decoration: none;
  color: black;
}
.body {
  margin: auto;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 2em;
}

.card {
  border-radius: 5px;
  margin: 10px;
  width: 300px;
  height: 300px;
  margin-top: 50px;
  background: wheat;
}

.sombra {
  border-radius: 5px;
  margin: 10px;
  width: 300px;
  height: 300px;
  margin-top: 50px;
  margin-left: -310px;
  color: white;
  background: rgb(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
a {
  text-decoration: none;
}
p {
  margin-top: 50%;
  font-family: sans-serif;
  font-size: 35px;
  transition: all 1s;
}

.sombra:hover > p {
  margin-top: 80%;
  font-family: sans-serif;
  font-size: 35px;
}

.img {
  border-radius: 5px;
  width: 300px;
  height: 300px;
}
</style>
