<template>
  <div>
    <main>
      <section>
        <h2><router-link to="/home"> Home </router-link>// Productos //</h2>
        <div class="body">
          <article class="card">
            <img
              class="img"
              src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/ventas.jpg?alt=media&token=9b924c49-248c-4ac3-b83e-1d16497c5334"
              alt="ventas"
            />
          </article>
          <router-link to="/home/products/punto-de-venta">
            <div class="sombra">
              <p>Punto de Venta</p>
            </div>
          </router-link>
          <article class="card">
            <img
              class="img"
              src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/registro.jpg?alt=media&token=8b63a7fe-0841-458d-8f69-a0b22ad93b27"
              alt="registro"
            />
          </article>
          <router-link to="/home/products/punto-de-venta">
            <div class="sombra">
              <p>Agregar Producto</p>
            </div>
          </router-link>
          <article class="card">
            <img
              class="img"
              src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/update.jpeg?alt=media&token=8f65a373-81b0-49d0-ad30-3f514728030e"
              alt="Update"
            />
          </article>
          <router-link to="/home/products/actualizar-producto">
            <div class="sombra">
              <p>Editar Productos</p>
            </div>
          </router-link>
          <article class="card">
            <img
              class="img"
              src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/inventario2.png?alt=media&token=3cf6b0c7-a26f-46b9-b785-410a0eaf7b51"
              alt="Inventario"
            />
          </article>
          <router-link to="/home/products/inventario">
            <div class="sombra">
              <p>inventario</p>
            </div>
          </router-link>
        </div>
      </section>
    </main>
  </div>
</template>

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
  margin-top: 100px;
  background: wheat;
}

.sombra {
  border-radius: 5px;
  margin: 10px;
  width: 300px;
  height: 300px;
  margin-top: 100px;
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
