<template>
  <div>
    <main>
      <section class="padre">
        <h2>
          <router-link to="/home/"> Home </router-link> //
          <router-link to="/home/products"> Productos </router-link> //
          Actualizar Producto
        </h2>
        <div class="contenedor">
          <form class="form-search">
            <div class="centrar">
              <input
                type="text"
                class="menu input-search search-width"
                placeholder="Buscar"
                name="filter"
                v-model="filter"
              />
            </div>
          </form>
          <editarProductoModal
            :productInfo="productInfo"
            v-if="showEditInfo"
            @close="showEditInfo = false"
          />
          <spinnerLoader v-if="isLoading" />
          <div class="container-table" v-if="!isLoading">
            <table class="tabla">
              <thead class="head">
                <tr class="head_row">
                  <th>Clave</th>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Precio venta</th>
                  <th>Precio compra</th>
                  <th>RFC proveedor</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody class="body">
                <tr
                  class="line_bottom"
                  v-for="product in ProductosFilter"
                  :key="product._id"
                >
                  <td>{{ product.registro }}</td>
                  <td>{{ product.nom_producto | capitalize }}</td>
                  <td>{{ product.descripcion | capitalize }}</td>
                  <td>${{ product.precio_venta }}</td>
                  <td>${{ product.precio_compra }}</td>
                  <td>{{ product.id_proveedor }}</td>
                  <td class="botones">
                    <button
                      type="button"
                      class="b-eliminar margin-5"
                      @click="deleteUser(product._id)"
                    >
                      <!--  subir uno arriba-->
                      Eliminar
                    </button>
                    <button
                      class="b-editar margin-5"
                      @click="editarProducto(product._id)"
                    >
                      <!--  subir uno arriba-->
                      Editar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <p v-if="ProductosFilter.length < 1" class="centerTextNotFound">
              <i>No se encontraron coincidencias</i>
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import axios from "axios";
import spinnerLoader from "@/components/SpinnerLoader.vue";
import editarProductoModal from "@/components/editarProductoModal.vue";
export default {
  name: "ActualizarProducto",
  components: { spinnerLoader, editarProductoModal },
  data() {
    return {
      productos: {},
      productInfo: {},
      isLoading: false,
      showEditInfo: false,
      filter: "",
    };
  },
  created() {
    this.getProductos();
  },
  methods: {
    getProductos() {
      this.isLoading = true;
      axios
        .get("http://localhost:5000/home/products/actualizar-producto")
        .then((data) => {
          this.productos = data.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
    deleteUser(id) {
      this.$swal("¿Seguro que deseas eliminar este producto?", {
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((isDelete) => {
        if (isDelete) {
          axios
            .post(
              "http://localhost:5000/home/products/actualizar-producto/" + id
            )
            .then(() => {
              this.$swal("Producto Eliminado.!", { icon: "success" });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
    editarProducto(id) {
      axios
        .get("http://localhost:5000/home/products/actualizar-producto/" + id)
        .then((data) => {
          this.productInfo = data.data;
          this.showEditInfo = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    ProductosFilter() {
      return this.productos.filter(
        (a) =>
          a.nom_producto.toLowerCase().includes(this.filter.toLowerCase()) ||
          a.descripcion.toLowerCase().includes(this.filter.toLowerCase())
      );
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
  margin-top: 40px;
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
tr:nth-child(odd) {
  background-color: rgba(240, 138, 93, 0.2);
}
tr:nth-child(even) {
  background-color: rgb(228, 222, 222, 0.2);
}
.line_bottom td {
  border-bottom: 1px rgb(216, 212, 212) solid;
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
  justify-content: center;
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
  margin-top: 400px;
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
.centerTextNotFound {
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.3rem;
  opacity: 0.5;
  padding-top: 30px;
}
</style>
