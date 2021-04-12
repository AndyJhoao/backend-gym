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
          <form class="form-search">
            <div class="buscadores">
              <input type="search" class="search" placeholder="Buscador" />
              <button type="submit" class="btn-s">Buscar</button>
            </div>
          </form>

          <div class="container">
            <table class="table">
              <thead class="thead">
                <tr class="rows">
                  <th class="title1"><p>Clave</p></th>
                  <th class="title2"><p>Nombre</p></th>
                  <th class="title3"><p>Precio compra</p></th>
                  <th class="title4"><p>Precio Venta</p></th>
                  <th class="title5"><p>Descripción</p></th>
                  <th class="title6"><p>RFC Proveedor</p></th>
                  <th class="title7"><p>Acciones</p></th>
                </tr>
              </thead>

              <tbody class="tbody">
                <tr class="rows">
                  <td class="cell1"><p>nb98b78</p></td>
                  <td class="cell2">
                    <p>Suero hidroliza doasdadasa asdasdsd</p>
                  </td>
                  <td class="cell3"><p>$ 19.75</p></td>
                  <td class="cell4"><p>$ 21.90</p></td>
                  <td class="cell5">
                    <p>Es una prona uwuEs una proteina mamalona uwu</p>
                  </td>
                  <td class="cell6"><p>LKDOD0998h</p></td>
                  <td class="cell7">
                    <button type="button" class="b-editar">Editar</button>
                    <button type="button" class="b-eliminar">Eliminar</button>
                  </td>
                </tr>
                <tr class="rows">
                  <td class="cell1"><p>nb98b78</p></td>
                  <td class="cell2">
                    <p>Suero hidroliza doasdadasa asdasdsd</p>
                  </td>
                  <td class="cell3"><p>$ 19.75</p></td>
                  <td class="cell4"><p>$ 21.90</p></td>
                  <td class="cell5">
                    <p>Es una prona uwuEs una proteina mamalona uwu</p>
                  </td>
                  <td class="cell6"><p>LKDOD0998h</p></td>
                  <td class="cell7">
                    <button type="button" class="b-editar">Editar</button>
                    <button type="button" class="b-eliminar">Eliminar</button>
                  </td>
                </tr>
                <tr class="rows">
                  <td class="cell1"><p>nb98b78</p></td>
                  <td class="cell2">
                    <p>Suero hidroliza doasdadasa asdasdsd</p>
                  </td>
                  <td class="cell3"><p>$ 19.75</p></td>
                  <td class="cell4"><p>$ 21.90</p></td>
                  <td class="cell5">
                    <p>Es una prona uwuEs una proteina mamalona uwu</p>
                  </td>
                  <td class="cell6"><p>LKDOD0998h</p></td>
                  <td class="cell7">
                    <button type="button" class="b-editar">Editar</button>
                    <button type="button" class="b-eliminar">Eliminar</button>
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

body {
  width: 100%;
  height: 100vh;
}
.container {
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.table {
  height: 100%;
  border: 2px solid;
  table-layout: fixed;
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
  min-width: 150px;
  max-width: 150px;
  width: 150px;
  height: auto;
}
.cell2,
.title2 {
  min-width: 196px;
  max-width: 196px;
  width: 196px;
  height: auto;
}
.cell3,
.title3 {
  min-width: 160px;
  max-width: 160px;
  width: 160px;
  height: auto;
}
.cell4,
.title4 {
  min-width: 160px;
  max-width: 160px;
  width: 160px;
  height: auto;
}
.cell5,
.title5 {
  min-width: 199px;
  max-width: 199px;
  width: 199px;
  height: auto;
}
.cell6,
.title6 {
  min-width: 173px;
  max-width: 173px;
  width: 173px;
  height: auto;
}
.cell7,
.title7 {
  min-width: 173px;
  max-width: 173px;
  width: 173px;
  padding: 10px 0px;
  height: auto;
}

.title1 {
  height: 90px;
}
.rows {
  display: block;
  width: 1281px;
  height: auto;
}
p {
  width: 100%;
  height: auto;
  overflow: auto;
  white-space: initial;
  text-overflow: ellipsis;
}
.b-editar {
  width: 85%;
  height: auto;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1em;
  background-color: white;
  border-radius: 5px;
  color: #60db22;
  border: solid 1px #60db22;
  margin: 5px 0px;
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

.b-eliminar {
  width: 85%;
  height: auto;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1em;
  background-color: white;
  border-radius: 5px;
  color: #ec1207;
  border: solid 1px #ec1207;
  margin: 5px 0px;
}

.b-eliminar:hover {
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1em;
  background-color: #ec1207;
  color: white;
  border-color: #ec1207;
  border-radius: 5px;
  outline: none;
}
.form-search {
  padding: 20px 0px;
  height: 20%;
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
  outline: none;
}
</style>
