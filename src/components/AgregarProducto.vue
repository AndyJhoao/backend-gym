<template>
  <div>
    <main>
      <section class="padre">
        <h2>
          <router-link to="/home/"> Home </router-link> //
          <router-link to="/home/products"> Productos </router-link> // Punto de
          Venta
        </h2>
        <div class="contenedor">
          <form>
            <div class="titulo">
              <h3>Agregar Productos</h3>
            </div>

            <div class="descripcion">
              <label>Nombre del Producto: </label>
              <input type="text" class="nomb" /> <br />
            </div>

            <div class="descripcion">
              <label>Descripcion: </label> <input type="text" class="nomb" />
              <br />
            </div>

            <p>Precio</p>
            <div class="descripcion">
              <label>Precio Compra: </label
              ><input type="number" class="precio" /><br />
            </div>
            <div class="descripcion">
              <label>Precio Venta: </label
              ><input type="number" class="precio" /> <br />
            </div>

            <div class="descripcion">
              <label>RFC Proveedor: </label> <input type="text" class="nomb" />
              <br />
            </div>
            <div class="titulo">
              <button>Guardar</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.contenedor {
  width: 90%;
  height: 77%;
  margin: auto;
  margin-top: 20px;
  padding: 10px;
  border: solid 3px crimson;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border-color: gainsboro;
  font-size: 1.5em;
  background-color: white;
}
label {
  text-align: end;
  margin: 10px;
  display: inline-block;
  width: 400px;
}
label,
p {
  font-size: 1.5em;
}
p {
  text-align: center;
  font-weight: bold;
  padding: 20px;
}
.nomb {
  width: 300px;
  height: 40px;
}
.desc {
  width: 400px;
  height: 75px;
}
.precio {
  width: 200px;
  height: 30px;
}
.descripcion {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.titulo {
  font-size: 1.5em;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
button {
  width: 180px;
  height: auto;
  font-size: 1em;
  background-color: lawngreen;
  border-radius: 10px;
}
input {
  font-size: 1em;
  outline: 0;
  border-width: 0 0 2px;
  border-color: grey;
  padding-left: 5px;
}
input:focus {
  border-radius: 5px;
  border-width: 2px;
  border-color: green;
}
</style>
