<template>
  <div>
    <main>
      <section>
        <h2><router-link to="/home"> Home </router-link>// Productos //</h2>
        <div class="body">
          <article class="card">
            <img
              class="img"
              src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/punto-venta.jpg?alt=media&token=a60b3851-2e98-45dc-9f1a-e128607e702b"
              alt="ventas"
            />
          </article>
          <router-link to="/home/products/punto-de-venta">
            <div class="sombra">
              <p>Punto de Venta</p>
            </div>
          </router-link>
          <article class="card" v-if="lvlpermisos == 2">
            <img
              class="img"
              src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/registro.jpg?alt=media&token=2bc9c2b1-829b-40c1-8c64-314384d77aa2"
              alt="registro"
            />
          </article>
          <router-link
            to="/home/products/agregar-producto"
            v-if="lvlpermisos == 2"
          >
            <div class="sombra">
              <p>Agregar Producto</p>
            </div>
          </router-link>
          <article class="card" v-if="lvlpermisos == 2">
            <img
              class="img"
              src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/update.jpeg?alt=media&token=383afc95-2def-49d8-9de1-2ed4bdb5a98d"
              alt="Update"
            />
          </article>
          <router-link
            to="/home/products/actualizar-producto"
            v-if="lvlpermisos == 2"
          >
            <div class="sombra">
              <p>Editar Productos</p>
            </div>
          </router-link>
          <article class="card" v-if="lvlpermisos == 2">
            <img
              class="img"
              src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/inventario2.png?alt=media&token=8f8dc05f-9842-451d-9e6a-7107617ea904"
              alt="Inventario"
            />
          </article>
          <router-link to="/home/products/inventario" v-if="lvlpermisos == 2">
            <div class="sombra">
              <p>Inventario</p>
            </div>
          </router-link>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  name: "BodyProducts",
  props: ["lvlpermisos"],
};
</script>

<style scoped>
h2 {
  font-size: 2em;
  padding: 10px;
}
h2 a {
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
