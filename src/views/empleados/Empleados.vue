<template>
  <div class="contenedor-prin fullViewHeight">
    <main>
      <section>
        <h2><router-link to="/home/"> Home </router-link> // Personal //</h2>
        <infoPersonal
          v-if="showPersonalInfo"
          @closePersonalInfo="showPersonalInfo = false"
          :data="personal"
        />
        <agregarPersonal
          v-if="showModalEmpleado"
          @cerrarModalEmpleado="showModalEmpleado = false"
        />
        <editarPersonal
          v-if="showEditPersonal"
          @cerrarPersonalEdit="showEditPersonal = false"
          :infoPersonal="personal"
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
                @click="showModalEmpleado = true"
              >
                Agregar Empleado
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
                  <th>Puesto</th>
                  <th>Nombre de Usuario</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody class="body">
                <tr v-for="person in Personal" :key="person._id">
                  <td>{{ person.registro }}</td>
                  <td>{{ person.nombre | capitalize }}</td>
                  <td>{{ person.apellidos | capitalize }}</td>
                  <td>{{ person.puesto | capitalize }}</td>
                  <td>{{ person.n_usuario }}</td>
                  <td>
                    <button
                      class="b-eliminar"
                      @click="getDataPersonal(person._id)"
                    >
                      mas info...
                    </button>
                    <button
                      class="b-editar"
                      @click="editDataPersonal(person._id)"
                    >
                      editar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <p v-if="Personal.length < 1" class="centerTextNotFound">
              <i>No se encontraron coincidencias</i>
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import spinnerLoader from "@/components/SpinnerLoader.vue";
import agregarPersonal from "@/components/empleados/agregarPersonal.vue";
import infoPersonal from "@/components/empleados/infoPersonal.vue";
import editarPersonal from "@/components/empleados/editarPersonal.vue";
import axios from "axios";
export default {
  name: "empleados",
  components: { spinnerLoader, agregarPersonal, infoPersonal, editarPersonal },
  data() {
    return {
      isLoading: false,
      showModalEmpleado: false,
      showPersonalInfo: false,
      showEditPersonal: false,
      arrayPersonal: [],
      filter: "",
      personal: {},
    };
  },
  created() {
    this.getPersonal();
  },
  methods: {
    getPersonal() {
      this.isLoading = true;
      axios
        .get("http://localhost:5000/home/personal")
        .then((data) => {
          this.arrayPersonal = data.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
    getDataPersonal(id) {
      axios
        .get("http://localhost:5000/home/personal/" + id)
        .then((data) => {
          this.personal = data.data;
          this.showPersonalInfo = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editDataPersonal(id) {
      axios
        .get("http://localhost:5000/home/personal/" + id)
        .then((data) => {
          this.personal = data.data;
          this.showEditPersonal = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    cerrarModalEmpleado() {
      this.showModal = false;
      this.getPersonal();
    },
  },
  computed: {
    Personal() {
      return this.arrayPersonal.filter((a) =>
        a.nombre.toLowerCase().includes(this.filter.toLowerCase())
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
.contenedor-prin {
  width: 100%;
  height: 100%;
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
