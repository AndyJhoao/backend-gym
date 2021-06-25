<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h3>Editar Cliente {{ dataClient.nombre }}</h3>
        </div>

        <div class="modal-body">
          <div class="container-form">
            <div class="form-flex-column">
              <input type="text" placeholder="Nombre(s)" v-model="nombre" />

              <!-- <select name="genero" id="genero" v-model="sexo">
                <option disabled value="">Sexo :</option>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
              </select> -->
              <input type="text" placeholder="Dirección" v-model="direccion" />
            </div>
            <div class="form-flex-column">
              <input
                type="text"
                placeholder="Apellido(s)"
                v-model="apellidos"
              />
              <input type="number" placeholder="Teléfono" v-model="telefono" />
              <input
                type="text"
                placeholder="Observaciones"
                v-model="observaciones"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <div class="logo__footer">
              <figure>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/gym-project-7014c.appspot.com/o/logosvg.svg?alt=media&token=43e848cf-f8d8-4000-9fa1-ccf9b8acffa5"
                  alt="logo"
                  height="70px"
                  width="auto"
                />
              </figure>
              GYM Spartans
            </div>
            <div>
              <button
                class="modal-default-button"
                @click="$emit('close')"
                v-on:click="createUser"
              >
                Guardar
              </button>
              <button
                class="modal-default-button"
                @click="$emit('close')"
                v-on:click="log"
              >
                Cancelar
              </button>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
require("promise.prototype.finally").shim();
export default {
  name: "editarCliente",
  props: ["dataClient"],
  data() {
    return {
      selected: "",
      nombre: this.dataClient.nombre,
      apellidos: this.dataClient.apellidos,
      sexo: this.dataClient.sexo,
      telefono: this.dataClient.telefono,
      direccion: this.dataClient.direccion,
      observaciones: this.dataClient.observaciones,
      suscripcion: this.dataClient.suscripcion,
      tipopago: this.dataClient.tipopago,
      cuota: this.dataClient.cuota,
    };
  },
  methods: {
    createUser() {
      let user = {
        nombre: this.nombre,
        apellidos: this.apellidos,
        sexo: this.sexo,
        telefono: this.telefono,
        direccion: this.direccion,
        observaciones: this.observaciones,
        suscripcion: this.suscripcion,
        tipopago: this.tipopago,
        cuota: this.cuota,
      };
      axios
        .post(
          "http://localhost:5000/home/clients/edit-clients/" +
            this.dataClient._id,
          user
        )
        .then(() => {
          this.$swal({
            title: "Usuario actualizado correctamente.!",
            timer: 2000,
            icon: "success",
          });
        })
        .finally(() => {
          this.updateTable();
        });
      // .finally(() => {
      //   this.updateTable();
      //   // console.log("alo");
      // });
      // axios.post("http://localhost:5000/home/signup");
      // axios.get("http://localhost:5000/home/signup");
    },
    updateTable() {
      this.$emit("createNewUser");
    },
  },
};
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 900px;
  height: 370px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  font-size: 1.6rem;
  color: #42b983;
  text-align: center;
}
.subtittle {
  font-size: 1.4rem;
  margin: 10px 0px;
  text-align: center;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
  width: 140px;
  height: 35px;
  padding: 5px;
  margin: 10px;
}
.modal-footer {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.container-form {
  display: flex;
  width: 100%;
}
.form-flex-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}
input {
  width: 320px;
  padding: 5px;
  height: 40px;
  margin: 10px;
  font-size: 1.2rem;
}
select {
  width: 320px;
  height: 40px;
  padding: 5px;
  margin: 10px;
  font-size: 1.2rem;
}
.logo__footer {
  width: 200px;
  margin-top: 20px;
  text-align: center;
}
</style>
