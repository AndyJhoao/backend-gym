<template>
  <div class="fullViewHeight">
    <main>
      <section>
        <h2><router-link to="/home/"> Home </router-link> // Clientes //</h2>
        <masInfoModal
          v-if="showModalInfo"
          @close="showModalInfo = false"
          :data="dataClient"
        />
        <agregar-usuario-modal
          v-if="showModal"
          @close="cerrarModalUser"
          @newData="updateTable"
        />
        <editClients
          v-if="showEditClient"
          @close="closeEditClient"
          @update="getClientes"
          :dataClient="dataClient"
        />
        <div class="contenedor">
          <form class="form-search">
            <div class="menu-op">
              <input
                type="text"
                class="menu input-search"
                placeholder="Buscar"
                name="filter"
                v-model="filter"
              />
            </div>

            <div class="b-add">
              <button
                id="show-modal"
                type="button"
                class="btn-add"
                @click="showModal = true"
              >
                Agregar Cliente
              </button>
            </div>
          </form>
          <spinner-loader :loading="isLoading" v-if="isLoading" />
          <div class="container-table" v-if="!isLoading">
            <table class="tabla">
              <thead class="head">
                <tr class="head_row">
                  <th>Clave</th>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>Membresia</th>
                  <th>plan</th>
                  <th>Telefono</th>
                  <th>Genero</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody class="body">
                <tr v-for="clientes in Clients" :key="clientes._id">
                  <td>{{ clientes.registro }}</td>
                  <td>{{ clientes.nombre | capitalize }}</td>
                  <td>{{ clientes.apellidos | capitalize }}</td>
                  <td>{{ clientes.membresia | membresia }}</td>
                  <td>
                    {{ clientes.tipo_suscripcion | capitalize }}
                  </td>
                  <td>{{ clientes.telefono }}</td>
                  <td>
                    {{ clientes.genero | capitalize }}
                  </td>
                  <td>
                    <button
                      class="b-eliminar"
                      @click="getDataClient(clientes._id)"
                    >
                      más info...
                    </button>
                    <button
                      class="b-editar"
                      @click="editDataClient(clientes._id)"
                    >
                      editar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <p class="centerTextNotFound" v-if="Clients.length < 1">
              <i>No se encontraron coincidencias</i>
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import AgregarUsuarioModal from "./AgregarUsuarioModal.vue";
import masInfoModal from "./MasInfoUsuarioModal.vue";
import editClients from "./clients/editClients.vue";
import spinnerLoader from "./SpinnerLoader.vue";
import axios from "axios";
export default {
  components: { AgregarUsuarioModal, spinnerLoader, masInfoModal, editClients },
  name: "body-client",
  data() {
    return {
      showModal: false,
      showModalInfo: false,
      showEditClient: false,
      isLoading: false,
      arrayClients: [],
      filter: "",
      dataClient: {},
    };
  },
  mounted() {
    this.getClientes();
  },
  methods: {
    getClientes() {
      this.isLoading = true;
      axios
        .get("http://localhost:5000/home/clients")
        .then((data) => {
          this.arrayClients = data.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
    getDataClient(id) {
      axios
        .get("http://localhost:5000/home/clients/" + id)
        .then((data) => {
          this.dataClient = data.data;
          this.showModalInfo = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editDataClient(id) {
      axios
        .get("http://localhost:5000/home/clients/" + id)
        .then((data) => {
          this.dataClient = data.data;
          this.showEditClient = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    closeEditClient() {
      this.showEditClient = false;
      this.getClientes();
    },
    cerrarModalUser() {
      this.showModal = false;
      this.getClientes();
    },
    updateTable() {
      console.log("");
    },
  },
  computed: {
    Clients() {
      return this.arrayClientsComputed.filter((a) =>
        a.nombre.toLowerCase().includes(this.filter.toLowerCase())
      );
    },
    arrayClientsComputed() {
      return this.arrayClients;
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
  width: 90%;
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
  width: 30%;
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
  width: 30%;
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
  outline: none;
  padding: 5px;
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
  padding: 5px;
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
.fullViewHeight {
  height: calc(100vh - 107px);
}
</style>
