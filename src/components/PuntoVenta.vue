<template>
  <div>
    <main>
      <section class="padre">
        <h2>
          <router-link to="/home/"> Home </router-link> //
          <router-link to="/home/products"> Productos </router-link> // Punto de
          Venta
        </h2>
        <venta
          v-if="listProductsModal"
          @close="closeList"
          @openProduct="addListVenta"
        />
        <div class="contenedor">
          <div class="container-table">
            <table class="tabla">
              <thead class="head">
                <tr class="head_row">
                  <th class="a-cel15">Cantidad</th>
                  <th class="a-cel25">Nombre del producto</th>
                  <th class="a-cel25">Descripcion</th>
                  <th class="a-cel15">Precio</th>
                  <th class="a-cel15">Subtotal</th>
                  <th class="a-cel20">Acciones</th>
                </tr>
              </thead>

              <tbody class="body">
                <tr v-for="product in listSellTable" :key="product._id">
                  <td>{{ product.cant_existencia }}</td>
                  <td>{{ product.nom_producto }}</td>
                  <td>{{ product.descripcion }}</td>
                  <td>{{ product.precio_venta.$numberDecimal | money }}</td>
                  <td>
                    {{ product.subtotal | money }}
                  </td>
                  <td>
                    <button
                      type="button"
                      class="b-eliminar"
                      @click="deleteProductList(product._id)"
                    >
                      Retirar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <p class="centerTextNotFound" v-if="listSellTable.length < 1">
              <i>No se encontraron coincidencias</i>
            </p>
          </div>
          <form class="form-search margint-10">
            <div class="align-left">
              <input
                type="text"
                class="menu input-search search-width"
                placeholder="Buscar"
              />
              <button type="button" class="btn-b" @click="openList">
                Buscar
              </button>
            </div>

            <div class="align-right">
              <p class="totalSell">Total ${{ precioTotal }}</p>
              <button type="button" class="b-editar" @click="sellList">
                Venta
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import axios from "axios";
import venta from "./venta/selectProductVenta.vue";
export default {
  name: "PuntoDeVenta",
  components: { venta },
  data() {
    return {
      listProducts: [],
      listSellTable: [],
      listProductsModal: false,
      isLoading: true,
      filter: "",
      subtotal: 0,
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios
        .get("http://localhost:5000/home/products/actualizar-producto")
        .then((data) => {
          this.listProducts = data.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
    closeList() {
      this.listProductsModal = false;
    },
    openList() {
      this.listProductsModal = true;
    },
    addListVenta(product, cantidad) {
      if (product._id != null) {
        if (cantidad > 0) {
          if (
            this.listSellTable.filter((e) => e._id === product._id).length > 0
          ) {
            let indexProduct = this.listSellTable.findIndex(
              (e) => e._id === product._id
            );
            const productToUpdate = this.listSellTable[indexProduct];
            productToUpdate.cant_existencia =
              parseInt(productToUpdate.cant_existencia) + parseInt(cantidad);
          } else {
            let productUpdated = product;
            productUpdated.cant_existencia = cantidad;
            productUpdated.subtotal =
              parseInt(cantidad) *
              parseInt(productUpdated.precio_venta.$numberDecimal);
            this.listSellTable.push(productUpdated);
          }
        } else {
          this.$swal({
            title: "Favor de ingresar una cantidad mayor a cero",
            text: "Se necesita ingresar una cantidad mayor a cero",
            icon: "warning",
            timer: 2000,
          });
        }
      } else {
        this.$swal({
          title: "Favor de seleccionar un producto",
          text: "Se debe seleccionar un producto de la lista",
          icon: "warning",
          timer: 2000,
        });
      }
    },
    deleteProductList(id) {
      const index = this.listSellTable.findIndex(
        (arrayItemProduct) => arrayItemProduct._id === id
      );
      if (index > -1) {
        this.listSellTable.splice(index, 1);

        this.$swal({
          title: "Producto eliminado",
          text: "Producto eliminado de la lista",
          timer: 2000,
          icon: "success",
        });
      } else {
        this.$swal({
          title: "No se encontró",
          text: "No se encontró el producto a eliminar",
          timer: 2000,
          icon: "warning",
        });
      }
    },
    sellList() {
      let datafull = this.listSellTable;
      axios
        .post(
          "http://localhost:5000/home/products/punto-de-venta/" +
            this.precioTotal,
          this.listSellTable
        )
        .then((response) => {
          this.listSellTable.splice(0, 1);
          axios.post(
            "http://localhost:5000/home/products/punto-de-venta/update/" +
              response.data.id,
            this.listSellTable
          );
          this.$swal({
            title: "Venta generada correctamente",
            text: "Venta almacenada en reporte por fecha",
            icon: "success",
            timer: 2000,
          });
          this.listSellTable = [];
        });
      console.log(datafull);
      axios.post(
        "http://localhost:5000/home/products/update/existencias",
        datafull
      );
    },
  },
  computed: {
    precioTotal() {
      let precioTotal = 0;
      this.listSellTable.forEach(
        (product) =>
          (precioTotal +=
            product.precio_venta.$numberDecimal * product.cant_existencia)
      );
      return precioTotal;
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* contenedor principal */
.contenedor {
  margin: auto;
  margin-top: 13px;
  padding: 20px;
  width: 80%;
  height: auto;
  border: solid 1px grey;
  border-radius: 5px;
  background-color: white;
}

/* contenedor formulario */
.form-search {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
}
/* contenedores */

/* del menu de opciones lista desplegable */
.menu-op {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

/* del boton buscar */
.b-search {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
/*del boton agregar*/
.b-add {
  margin-right: 10px;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
}

/*-------Estilos de las clases de los elementos-------------*/

/* menu lista desplegable e input de fecha*/

.menu,
.fecha {
  width: 100%;
  height: auto;
  padding: 10px;
  margin-right: 15px;
  outline: none;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1em;
  border: solid 1px gainsboro;
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

/* boton agregar */
.btn-add {
  width: 40%;
  height: auto;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1em;
  background-color: white;
  border-radius: 5px;
  color: yellowgreen;
  border: solid 1px yellowgreen;
}

.btn-add:hover {
  width: 40%;
  height: auto;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1em;
  background-color: yellowgreen;
  color: white;
  border-color: yellowgreen;
  border-radius: 5px;
  outline: none;
}

/* estilos de la tabla */

/* estilo del cuerpo de la tabla */
.container-table {
  overflow-y: auto;
  height: 400px;
}
.tabla {
  width: 100%;
  min-height: 100px;
  max-height: 400px;
  padding: 10px;
  border-radius: 5px;
  border: solid 1px gainsboro;
}
.head {
  height: 90px;
}
.body {
  height: calc(100% - 90px);
}
.head_row {
  height: 90px;
}
/* encabezado de la tabla  */
th {
  border: solid 0px;
  background-color: #35b0df;
  color: white;
  font-size: 1em;
  padding: 5px;
}

/* celdas de la tabla  */
td {
  text-align: center;
  font-family: sans-serif;
  height: 90px;
}

/* estilo del boton editar*/
.b-editar {
  width: 100px;
  height: auto;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1em;
  background-color: white;
  border-radius: 5px;
  color: #60db22;
  border: solid 1px #60db22;
}

.b-editar:hover {
  width: 100px;
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
  width: 100px;
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
  width: 100px;
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

/*estilos extra de la pagina search */

.botones {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.margin-5 {
  margin-bottom: 5px;
}

.centrar {
  display: flex;
  flex-direction: row;
  margin: auto;
}

.search-width {
  width: 250px;
}

/*Estilos extra de la pagina inventario*/
.margint-10 {
  margin-top: 20px;
}

.a-cel {
  width: 25%;
}

.izquierda {
  display: flex;
  flex-direction: row;
  margin-right: 120px;
}

.centro {
  display: flex;
  flex-direction: row;
  margin-right: 120px;
}

.derecha {
  display: flex;
  flex-direction: row;
}
/*estilos extra de la tabla punto de venta*/
.a-cel35 {
  width: 35%;
}

.a-cel20 {
  width: 20%;
}
.a-cel25 {
  width: 25%;
}

.a-cel15 {
  width: 15%;
}

.a-cel10 {
  width: 10%;
}

.align-left {
  display: flex;
  flex-direction: row;
  flex: 1;
}

.align-right {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
}
.totalSell {
  padding: 10px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.4rem;
}
.centerTextNotFound {
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.3rem;
  opacity: 0.5;
  padding-top: 30px;
}
</style>
