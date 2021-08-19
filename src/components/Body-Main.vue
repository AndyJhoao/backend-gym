<template>
  <div class="fullViewHeight">
    <main>
      <section>
        <h1><router-link to="/home/"> Home </router-link> //</h1>
        <div class="body">
          <article class="card">
            <img
              class="img"
              src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/maquinas.jpg?alt=media&token=9e16fc71-7f02-4380-be56-c564912daf28"
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
              src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/clientes.jpg?alt=media&token=e6fb8c94-612e-401f-a4a9-150aa6b1c8c2"
              alt="clientes"
            />
          </article>
          <router-link to="/home/clients">
            <div class="sombra">
              <p>Clientes</p>
            </div>
          </router-link>
          <article class="card" v-if="lvlpermisos == 2">
            <img
              class="img"
              src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/reportes.jpg?alt=media&token=aeafe8dd-8ec7-43ad-a8e7-1134efe28352"
              alt="reportes"
            />
          </article>
          <router-link to="/home/reports" v-if="lvlpermisos == 2">
            <div class="sombra">
              <p>Reportes</p>
            </div>
          </router-link>
          <article class="card">
            <img
              class="img"
              src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/productos.png?alt=media&token=266f7ff9-73bc-42e3-9c72-f67d28684743"
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
<script>
export default {
  name: "BodyMain",
  props: ["lvlpermisos"],
};
</script>
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
.fullViewHeight {
  height: calc(100vh - 107px);
}
</style>
