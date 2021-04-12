<template>
  <div>
    <main>
      <section class="padre">
        <h2><router-link to="/home/"> Home </router-link> // Reportes //</h2>
        <div class="contenedor">
          <form class="form-search">
            <div class="menu-op">
              <select name="" class="menu">
                <option value="1">Productos</option>
                <option value="2">Usuarios</option>
                <option value="3">Mensualidades</option>
                <option value="4">Proveedores</option>
              </select>
            </div>
            <div class="in-date">
              <input type="date" class="fecha" />
            </div>
            <div class="b-search">
              <button type="submit" class="btn-b">Buscar</button>
            </div>
          </form>
          <div class="container">
            <table class="table">
              <thead class="thead">
                <tr class="rows">
                  <th class="title1"><p>Clave</p></th>
                  <th class="title2"><p>Tipo</p></th>
                  <th class="title3"><p>Descripcion</p></th>
                  <th class="title4"><p>Fecha</p></th>
                  <th class="title5"><p>Boton</p></th>
                </tr>
              </thead>

              <tbody class="tbody">
                <tr class="rows">
                  <td class="cell1"><p>1</p></td>
                  <td class="cell2"><p>Ventas</p></td>
                  <td class="cell3"><p>Ventas del mes de junio</p></td>
                  <td class="cell4"><p>10 de Febrero</p></td>
                  <td class="cell5">
                    <button type="button" class="b-editar">Imprimir</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
h2 {
  font-size: 2em;
}
.contenedor {
  width: 90%;
  height: 95%;
  margin: auto;
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

/* contenedor formulario */
.form-search {
  width: 100%;
  height: 10%;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 40px;
}

/* contenedores */

/* del menu de opciones lista desplegable */
.menu-op {
  flex: 0.26;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

/* del input de tipo texto */
.in-date {
  flex: 0.25;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

/* del boton buscar */
.b-search {
  flex: 0.4;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

/* Estilos de las clases de los elementos */

/* menu lista desplegable e input de fecha*/
.menu,
.fecha {
  width: 60%;
  height: auto;
  padding: 10px;
  outline: none;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1em;
  border: solid 2px gainsboro;
  border-radius: 5px;
  color: grey;
}

/* boton buscar */
.btn-b {
  width: 30%;
  height: auto;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1em;
  background-color: white;
  border-radius: 5px;
  color: #ffbe00;
  border: solid 1px #ffbe00;
}

.btn-b:hover {
  width: 30%;
  height: auto;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1em;
  background-color: #ffbe00;
  color: white;
  border-color: #ffbe00;
  border-radius: 5px;
  outline: none;
}
.b-editar {
  width: 90%;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1em;
  background-color: white;
  border-radius: 5px;
  color: #60db22;
  border: solid 1px #60db22;
}
.b-editar:hover {
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1em;
  background-color: #60db22;
  color: white;
  border-color: #60db22;
  border-radius: 5px;
  outline: none;
}

body {
  width: 100%;
  height: 100vh;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.table {
  width: 980px;
  height: 100%;
  border: 2px solid;
  background-color: white;
}
.thead {
  display: block;
}
.tbody {
  display: block;
  height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
}
td,
th {
  text-align: center;
  height: auto;
}
th {
  color: white;
  font-size: 1em;
  background-color: #35b0df;
}

.cell1,
.title1 {
  min-width: 130px;
  max-width: 130px;
  height: auto;
  width: 130px;
}
.cell2,
.title2 {
  min-width: 130px;
  max-width: 130px;
  height: auto;
  width: 130px;
}
.cell3,
.title3 {
  min-width: 400px;
  max-width: 400px;
  height: auto;
  width: 400px;
}
.cell4,
.title4 {
  min-width: 130px;
  max-width: 130px;
  height: auto;
  width: 130px;
}
.cell5,
.title5 {
  min-width: 150px;
  max-width: 150px;
  height: auto;
  width: 150px;
}
.title1 {
  height: 90px;
}
.rows {
  display: block;
  width: 950px;
  height: auto;
}
p {
  width: 100%;
  height: auto;
  overflow: auto;
  white-space: initial;
  text-overflow: ellipsis;
}
.padre {
  width: 100%;
  height: 72vh;
}
</style>
