<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h3>Agregar Nueva Maquina</h3>
        </div>

        <div class="modal-body">
          <div class="container-form">
            <div class="form-flex-column">
              <input type="file" @change="seleccionarImagen" />
              <input type="text" placeholder="Nombre" v-model="nombre" />

              <input
                type="text"
                placeholder="Descripcion"
                v-model="descripcion"
              />
              <input type="number" placeholder="Cantidad" v-model="cantidad" />
              <progress :value="uploadValue" max="100" />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            GYM Spartans
            <div>
              <button class="modal-default-button" v-on:click="createMachine">
                Guardar
              </button>
              <button
                class="modal-default-button"
                @click="$emit('cerrarModalMachine')"
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
import firebase from "firebase";
export default {
  name: "agregarMaquina",
  data() {
    return {
      nombre: "",
      descripcion: "",
      estado: true,
      cantidad: 0,

      imagen: null,
      uploadValue: 0,
      picture: null,
    };
  },
  methods: {
    createMachine() {
      const storageRef = firebase.storage().ref(`/${this.imagen.name}`);
      const task = storageRef.put(this.imagen);
      task.on(
        "state_changed",
        (snapshot) => {
          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.uploadValue = percentage;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          task.snapshot.ref.getDownloadURL().then((url) => {
            this.picture = url;
            console.log(this.picture);
            let maquina = {
              nombre: this.nombre,
              imagen: this.picture,
              descripcion: this.descripcion,
              estado: this.estado,
              cantidad: this.cantidad,
            };
            console.log(maquina);
            axios
              .post("http://localhost:5000/home/crear-maquina", maquina)
              .then(() => {
                this.$swal({
                  title: "Maquina creada correctamente.!",
                  timer: 2000,
                  icon: "success",
                });
              });
            this.$emit("cerrarModalMachine");
          });
        }
      );

      // console.log(image);
    },
    seleccionarImagen(event) {
      this.imagen = event.target.files[0];
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
  width: 100%;
}
input {
  width: 400px;
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
</style>
