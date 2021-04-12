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
          <div class="container-table">
            <table class="table">
              <thead>
                <tr class="filas-cabeza">
                  <th class="id-size">Cantidad</th>
                  <th class="desc-size">Nombre producto</th>
                  <th class="precio-size">Precio</th>
                  <th class="desc-size">Descripcion</th>
                  <th class="precio-size">Acciones</th>
                </tr>
              </thead>

              <tbody>
                <tr class="filas-tamaño">
                  <td class="id-size">jb87hb097</td>
                  <td class="desc-size">Suero de leche</td>
                  <td class="precio-size">$ 17.90</td>
                  <td class="desc-size">
                    Suero de leche hidrolizado sabor chocolate
                  </td>
                  <td class="precio-size">
                    <button class="quitar">Retirar</button>
                  </td>
                </tr>
                <tr class="filas-tamaño">
                  <td class="id-size">jb87hb097</td>
                  <td class="desc-size">Suero de leche</td>
                  <td class="precio-size">$ 17.90</td>
                  <td class="desc-size">
                    Suero de leche hidrolizado sabor chocolate
                  </td>
                  <td class="precio-size">
                    <button class="quitar">Retirar</button>
                  </td>
                </tr>
                <tr class="filas-tamaño">
                  <td class="id-size">jb87hb097</td>
                  <td class="desc-size">Suero de leche</td>
                  <td class="precio-size">$ 17.90</td>
                  <td class="desc-size">
                    Suero de leche hidrolizado sabor chocolate
                  </td>
                  <td class="precio-size">
                    <button class="quitar">Retirar</button>
                  </td>
                </tr>
                <tr class="filas-tamaño">
                  <td class="id-size">jb87hb097</td>
                  <td class="desc-size">Suero de leche</td>
                  <td class="precio-size">$ 17.90</td>
                  <td class="desc-size">
                    Suero de leche hidrolizado sabor chocolate
                  </td>
                  <td class="precio-size">
                    <button class="quitar">Retirar</button>
                  </td>
                </tr>
                <tr class="filas-tamaño">
                  <td class="id-size">jb87hb097</td>
                  <td class="desc-size">Suero de leche</td>
                  <td class="precio-size">$ 17.90</td>
                  <td class="desc-size">
                    Suero de leche hidrolizado sabor chocolate
                  </td>
                  <td class="precio-size">
                    <button class="quitar">Retirar</button>
                  </td>
                </tr>
                <tr class="filas-tamaño">
                  <td class="id-size">jb87hb097</td>
                  <td class="desc-size">Suero de leche</td>
                  <td class="precio-size">$ 17.90</td>
                  <td class="desc-size">
                    Suero de leche hidrolizado sabor chocolate
                  </td>
                  <td class="precio-size">
                    <button class="quitar">Retirar</button>
                  </td>
                </tr>
                <tr class="filas-tamaño">
                  <td class="id-size">jb87hb097</td>
                  <td class="desc-size">Suero de leche</td>
                  <td class="precio-size">$ 17.90</td>
                  <td class="desc-size">
                    Suero de leche hidrolizado sabor chocolate
                  </td>
                  <td class="precio-size">
                    <button class="quitar">Retirar</button>
                  </td>
                </tr>
                <tr class="filas-tamaño">
                  <td class="id-size">jb87hb097</td>
                  <td class="desc-size">Suero de leche</td>
                  <td class="precio-size">$ 17.90</td>
                  <td class="desc-size">
                    Suero de leche hidrolizado sabor chocolate
                  </td>
                  <td class="precio-size">
                    <button class="quitar">Retirar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <form class="form-search">
            <div class="buscadores">
              <input type="search" class="search" placeholder="Buscador" />
              <button type="submit" class="btn-s">Buscar</button>
            </div>
            <button class="venta">venta</button>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
h2 {
  font-size: 2em;
}
.padre {
  width: 100%;
  height: 85vh;
}
.contenedor {
  width: 80%;
  height: 75%;
  margin: auto;
  margin-top: 20px;
  padding: 10px;
  border: solid 3px crimson;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border-color: gainsboro;
  font-size: 1.5em;
  background-color: white;
}
.form-search {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  justify-content: space-between;
}
.buscadores {
  width: 500px;
  display: flex;
  align-items: center;
  margin-left: 30px;
}
.table {
  border: 1px solid;
  border-radius: 3px;
  width: 100%;
  height: auto;
  display: block;
  background-color: white;
}
.container-table {
  width: 100%;
  height: 80%;
}
th {
  padding: 5px;
  width: 1225px;
  text-align: center;
  border-bottom: 0.2px solid;
}
thead,
tbody {
  display: flex;
  flex-direction: column;
  align-items: initial;
}
.id-size {
  width: 150px;
}
.precio-size {
  width: 120px;
}
.desc-size {
  width: 433px !important ;
}
tbody {
  width: 100%;
  height: 335px;
  overflow-y: auto;
  overflow-x: hidden;
}
.filas-tamaño {
  width: 1225px;
  height: auto;
  border-bottom: 0.2px solid;
}
td {
  width: 300px;
  padding: 10px 0;
  text-align: center;
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
.quitar {
  width: auto;
  height: 30px;
  background-color: rgb(252, 50, 50);
  color: white;
  border-radius: 5px;
  padding: 3px;
}
.quitar:hover {
  transform: scale(1.08);
}
.venta {
  width: 100px;
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
</style>
