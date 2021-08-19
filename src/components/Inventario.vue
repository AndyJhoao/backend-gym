<template>
  <div class="fullViewHeight">
    <main>
      <section class="padre">
        <h2>
          <router-link to="/home/"> Home </router-link> //
          <router-link to="/home/products"> Productos </router-link> //
          Inventario
        </h2>
        <selectProduct
          v-if="showSelectProduct"
          @close="closeListProducts"
          :listProducts="products"
          :search="search"
          @openProduct="addProductData"
        />
        <div class="contenedor">
          <div class="container-table">
            <table class="tabla">
              <thead class="head">
                <tr class="head_row">
                  <th class="a-cel">Clave</th>
                  <th class="a-cel">Nombre</th>
                  <th class="a-cel">Descripcion</th>
                  <th class="a-cel">Cantidad</th>
                  <th class="a-cel">Precio compra</th>
                  <th class="a-cel">Acciones</th>
                </tr>
              </thead>

              <tbody class="body">
                <tr
                  v-for="productos in listProducts"
                  :key="productos._id"
                  class="deleteProduct"
                >
                  <td>{{ productos.id }}</td>
                  <td>{{ productos.nom_producto }}</td>
                  <td>{{ productos.descripcion }}</td>
                  <td>{{ productos.cant_existencia }}</td>
                  <td>{{ productos.precio_compra | money }}</td>
                  <td>
                    <button
                      type="button"
                      class="btn-delete"
                      @click="deleteProduct(productos.id)"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <p class="centerTextNotFound" v-if="listProducts.length < 1">
              <i>No se encontraron coincidencias</i>
            </p>
          </div>
          <form class="form-search margint-10">
            <div class="izquierda">
              <input
                type="text"
                class="menu input-search search-width"
                placeholder="Buscar"
                v-model="search"
              />
              <button type="button" class="btn-b" @click="selectProduct">
                Buscar
              </button>
            </div>
            <div class="centro">
              <input
                type="text"
                class="menu input-search search-width margin-left"
                placeholder="Nombre"
                disabled
                v-model="nom_producto"
              />
              <input
                type="text"
                class="menu input-search search-width margin-left"
                placeholder="Descripcion"
                disabled
                v-model="descripcion"
              />
              <input
                type="number"
                class="menu input-search search-width-number margin-left"
                placeholder="Cantidad"
                v-model="cant_existencia"
              />
              <input
                type="number"
                class="menu input-search search-width-number margin-left"
                placeholder="Precio Compra"
                v-model="precio_compra"
              />
            </div>

            <div class="derecha">
              <button type="button" class="btn-b" @click="addProductTable">
                Agregar
              </button>
              <button type="button" class="b-eliminar" @click="updateAll">
                Finalizar
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
import selectProduct from "./invetory/selectProduct.vue";
require("promise.prototype.finally").shim();
export default {
  name: "Inventory",
  components: { selectProduct },
  data() {
    return {
      products: [],
      listProducts: [],
      search: "",
      id: "",
      cant_existencia: 0,
      nom_producto: "",
      descripcion: "",
      precio_compra: 0,
      showSelectProduct: false,
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
          this.products = data.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
    selectProduct() {
      this.showSelectProduct = true;
    },
    closeListProducts() {
      this.showSelectProduct = false;
      this.search = "";
    },
    addProductData(product) {
      this.id = product._id;
      this.nom_producto = product.nom_producto;
      this.descripcion = product.descripcion;
      this.cant_existencia = product.cant_existencia;
      this.precio_compra = product.precio_compra;
    },
    addProductTable() {
      if (this.id != null) {
        if (this.cant_existencia > 0) {
          if (this.precio_compra > 0) {
            if (this.listProducts.filter((e) => e.id === this.id).length > 0) {
              this.$swal({
                title: "Ya existe.!",
                text:
                  "El producto que deseas agregar ya se enecuentra dentro de la tabla." +
                  "¿Deseas actualizar la cantidad y el precio por los actuales?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              }).then((updateQuantity) => {
                if (updateQuantity) {
                  const indexProduct = this.listProducts.findIndex(
                    (e) => e.id === this.id
                  );
                  const productToUpdate = this.listProducts[indexProduct];
                  productToUpdate.cant_existencia = this.cant_existencia;
                  productToUpdate.precio_compra = this.precio_compra;
                } else {
                  this.id = "";
                  this.nom_producto = "";
                  this.descripcion = "";
                  this.cant_existencia = "";
                  this.precio_compra = "";
                }
              });
            } else {
              let productoTable = {
                id: this.id,
                cant_existencia: this.cant_existencia,
                nom_producto: this.nom_producto,
                descripcion: this.descripcion,
                precio_compra: this.precio_compra,
              };
              this.listProducts.push(productoTable);
            }
          } else {
            this.$swal({
              title: "Precio de compra invalido",
              text: "El valor del precio de compra es invalido",
              icon: "warning",
              timer: 2000,
            });
          }
        } else {
          this.$swal({
            title: "Cantidad no aceptada",
            text: "La cantidad a ingresar no es correcta",
            icon: "warning",
            timer: 2000,
          });
        }
      } else {
        this.$swal({
          title: "Favor de buscar un producto y seleccionarlo",
          timer: 2000,
          icon: "warning",
        });
      }
    },
    deleteProduct(id) {
      const index = this.listProducts.findIndex(
        (arrayItem) => arrayItem.id === id
      );
      if (index > -1) {
        this.listProducts.splice(index, 1);
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
    updateAll() {
      axios
        .post(
          "http://localhost:5000/home/products/update-all-products",
          this.listProducts
        )
        .then(function () {
          console.log("Guardo");
          this.$swal({
            title: "Cantidades agregadas correctamente",
            text: "Las cantidades de cada producto fueron añadidas con exito",
            timer: 2000,
            icon: "success",
          });
        })
        .catch((err) => {
          console.log(err);
        });
      this.$swal({
        title: "Cantidades agregadas correctamente",
        text: "Las cantidades de cada producto fueron añadidas con exito",
        timer: 2000,
        icon: "success",
      });
      this.listProducts = [];
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
  background-color: white;
  margin: auto;
  margin-top: 12px;
  padding: 20px;
  width: 80%;
  height: auto;
  border: solid 1px grey;
  border-radius: 5px;
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
.btn-delete {
  width: 100px;
  height: auto;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1em;
  background-color: white;
  border-radius: 5px;
  color: yellowgreen;
  border: solid 1px yellowgreen;
  cursor: pointer;
}
.btn-delete:hover {
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
  border-collapse: collapse;
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
  width: 200px;
}
.search-width-number {
  width: 140px;
}

/*Estilos extra de la pagina inventario*/
.margint-10 {
  margin-top: 20px;
}

.a-cel {
  width: 18%;
}

.izquierda {
  display: flex;
  flex-direction: row;
  margin-right: 120px;
}

.centro {
  display: flex;
  flex-direction: row;
}

.derecha {
  display: flex;
  justify-content: space-around;
  width: 360px;
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
tr:nth-child(odd) {
  background-color: rgba(113, 165, 135, 0.3);
}
tr:nth-child(even) {
  background-color: rgba(86, 146, 113, 0.3);
  border-bottom: 1px solid;
  border-top: 1px solid;
}
.deleteProduct:hover {
  background-color: rgba(68, 173, 99, 0.479);
  cursor: pointer;
}
.centerTextNotFound {
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.3rem;
  opacity: 0.5;
  padding-top: 30px;
}
.fullViewHeight {
  height: calc(100vh - 107px);
}
</style>
