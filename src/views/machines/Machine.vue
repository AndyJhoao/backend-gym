<template>
  <div class="contenedor-prin fullViewHeight">
    <main>
      <section>
        <h2><router-link to="/home/"> Home </router-link> // Maquinas //</h2>
        <infoMachine
          v-if="showMachineInfo"
          @closeMachineInfo="showMachineInfo = false"
          :data="machines"
        />
        <agregarMachine
          v-if="showModalMachine"
          @cerrarModalMachine="showModalMachine = false"
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
                @click="showModalMachine = true"
              >
                Agregar Maquina
              </button>
            </div>
          </form>
          <spinner-loader :loading="isLoading" v-if="isLoading" />
          <div class="container-table" v-if="!isLoading">
            <table class="tabla">
              <thead class="head">
                <tr class="head_row">
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Cantidad</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody class="body">
                <tr v-for="maquina in MachineComputed" :key="maquina._id">
                  <td>
                    <img
                      :src="maquina.imagen"
                      :alt="maquina.nombre"
                      class="imageTable"
                    />
                  </td>
                  <td>{{ maquina.nombre }}</td>
                  <td>{{ maquina.descripcion }}</td>
                  <td>{{ maquina.cantidad }}</td>
                  <td>{{ maquina.estado | membresia }}</td>
                  <td>
                    <button class="b-eliminar" @click="showInfo(maquina._id)">
                      mas info...
                    </button>
                    <button
                      class="b-eliminar"
                      @click="deleteMachine(maquina._id)"
                    >
                      eliminar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <p v-if="MachineComputed.length < 1" class="centerTextNotFound">
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
import agregarMachine from "@/components/machines/agregarMachine.vue";
import infoMachine from "@/components/machines/infoMachine.vue";
import axios from "axios";
export default {
  name: "machines",
  components: { spinnerLoader, agregarMachine, infoMachine },
  data() {
    return {
      isLoading: false,
      showModalMachine: false,
      showMachineInfo: false,
      arrayMachines: [],
      filter: "",
      machines: {},
    };
  },
  created() {
    this.getMachines();
  },
  methods: {
    getMachines() {
      this.isLoading = true;
      axios
        .get("http://localhost:5000/home/maquina")
        .then((data) => {
          this.arrayMachines = data.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
    showInfo(id) {
      axios
        .get("http://localhost:5000/home/machine/" + id)
        .then((data) => {
          this.machines = data.data;
          this.showMachineInfo = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    cerrarModalMachine() {
      this.showModalMachine = false;
      this.getMachines();
    },
    deleteMachine(id) {
      console.log(id);
      let indexMachine = this.arrayMachines.findIndex((e) => e._id === id);
      console.log(indexMachine);
    },
  },
  computed: {
    MachineComputed() {
      return this.arrayMachines.filter((a) =>
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
.imageTable {
  width: 70px;
  height: 70px;
}
.fullViewHeight {
  height: calc(100vh - 107px);
}
</style>
