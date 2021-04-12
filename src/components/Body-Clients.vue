<template>
  <div>
    <main>
      <section>
        <h2><router-link to="/home/"> Home </router-link> // Clientes //</h2>
        <div class="contenedor">
          <form class="form-search">
            <div class="buscadores">
              <input type="search" class="search" placeholder="Buscador" />
              <button type="submit" class="btn-s">Buscar</button>
            </div>

            <div class="boton-añadircliente">
              <button class="venta">Agregar Cliente</button>
            </div>
          </form>

          <table class="tabla">
            <thead>
              <tr>
                <th>Clave</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Membresia</th>
                <th>Tipo</th>
                <th>Telefono</th>
                <th>Genero</th>
                <th>boton</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>001</td>
                <td>Daniel</td>
                <td>Escamilla Cervantes</td>
                <td>Activa</td>
                <td>Mensual</td>
                <td>1234567891</td>
                <td>F</td>
                <td>
                  <button type="button" class="b-editar">Mas Info</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* .contenedor-3 {
  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3em;
  margin: 1em;
} */
h2 {
  font-size: 2em;
}
.contenedor {
  width: 90%;
  height: 77%;
  margin: auto;
  margin-top: 20px;
  border: solid 3px crimson;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border-color: gainsboro;
  font-size: 1.5em;
  background-color: white;
}
.form-search {
  width: 100%;
  height: 20%;
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.buscadores {
  width: 500px;
  display: flex;
  align-items: center;
  margin-left: 30px;
}

.boton-añadircliente {
  width: 300px;
  display: flex;
  align-items: center;
}
.venta {
  width: 250px;
  height: 50px;
  margin-right: 90px;
  font-size: 1.1em;
  border: black solid 0.5px;
  border-radius: 4px 4px 4px 4px;
  font-family: sans-serif;
  font-weight: bold;
  color: black;
  padding: 5px;
  background-color: rgb(23, 204, 93);
}

.search {
  width: 300px;
  height: 50px;
  border: black solid 0.5px;
  border-radius: 4px 4px 4px 4px;
  font-family: sans-serif;
  font-weight: bold;
  color: black;
  font-size: 1.5em;
  border-color: gray;
  padding: 5px;
}
.btn-s {
  height: 50px;
  width: 130px;
  font-size: 1.1em;
  font-weight: bold;
  border-radius: 4px 4px 4px 4px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: dodgerblue;
  color: white;
  border-color: white;
  margin-left: 10px;
}

/* estilos de la tabla */

/* estilo del cuerpo de la tabla */
.tabla {
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: solid 1px gainsboro;
  background-color: white;
}

/* encabezado de la tabla  */
th {
  width: 9.3%;
  border: solid 0px;
  background-color: #35b0df;
  color: white;
  font-size: 1em;
  padding: 5px;
}

/* celdas de la tabla  */
td {
  padding: 10px;
  width: 12.65%;
  text-align: center;
  font-family: sans-serif;
}
/* estilo del boton editar*/
.b-editar {
  width: 80%;
  height: auto;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1em;
  background-color: white;
  border-radius: 5px;
  color: #60db22;
  border: solid 1px #60db22;
}
thead,
tbody {
  display: block;
}
tbody {
  width: 100%;
  height: 335px;
  overflow-y: auto;
  overflow-x: hidden;
}

.b-editar:hover {
  height: auto;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1em;
  background-color: #60db22;
  color: white;
  border-color: #60db22;
  border-radius: 5px;
  outline: none;
}

/* estilo del boton eliminar*/
.b-eliminar {
  width: 40%;
  height: auto;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1em;
  background-color: white;
  border-radius: 5px;
  color: #ec1207;
  border: solid 1px #ec1207;
}

.b-eliminar:hover {
  width: 40%;
  height: auto;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1em;
  background-color: #ec1207;
  color: white;
  border-color: #ec1207;
  border-radius: 5px;
  outline: none;
}
</style>
