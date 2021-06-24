<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h3>Editar Personal {{ infoPersonal.nombre }}</h3>
        </div>

        <div class="modal-body">
          <div class="container-form">
            <div class="form-flex-column">
              <input type="text" placeholder="Nombre" v-model="nombre" />
              <input type="text" placeholder="Apellidos" v-model="apellidos" />
              <input type="text" placeholder="Puesto" v-model="puesto" />
            </div>
            <div class="form-flex-column">
              <select name="permisos" id="permisos" v-model="permisos">
                <option disabled value="">Permisos</option>
                <option value="vendedor">Vendedor</option>
                <option value="administrador">Administrador</option>
              </select>
              <input
                type="text"
                placeholder="Nombre de usuario"
                v-model="username"
              />
              <input
                type="password"
                v-model="contraseña"
                placeholder="Contraseña"
              />
              <button class="info" @click="infoEdit">i</button>
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
                @click="$emit('cerrarPersonalEdit')"
                v-on:click="editPersonal"
              >
                Guardar
              </button>
              <button
                class="modal-default-button"
                @click="$emit('cerrarPersonalEdit')"
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
export default {
  name: "editarPersonal",
  props: ["infoPersonal"],
  data() {
    return {
      nombre: this.infoPersonal.nombre,
      apellidos: this.infoPersonal.apellidos,
      puesto: this.infoPersonal.puesto,
      username: this.infoPersonal.n_usuario,
      contraseña: this.infoPersonal.contraseña,
      permisos: this.infoPersonal.permisos,
    };
  },
  methods: {
    editPersonal() {
      let personal = {
        nombre: this.nombre,
        apellidos: this.apellidos,
        username: this.username,
        puesto: this.puesto,
        password: this.contraseña,
        permisos: this.permisos,
      };
      console.log(this.infoPersonal);
      console.log(personal);
      if (personal.nombre == "") {
        personal.nombre = this.infoPersonal.nombre;
      }
      if (personal.apellidos == "") {
        personal.apellidos = this.infoPersonal.apellidos;
      }
      if (personal.username == "") {
        personal.username = this.infoPersonal.n_usuario;
      }
      if (personal.puesto == "") {
        personal.puesto = this.infoPersonal.puesto;
      }
      if (personal.password == "") {
        personal.password = this.infoPersonal.contraseña;
      }
      if (personal.permisos == "") {
        personal.permisos = this.infoPersonal.permisos;
      }
      axios
        .post(
          "http://localhost:5000/home/personal/edit-personal/" +
            this.infoPersonal._id,
          personal
        )
        .then(() => {
          this.$swal({
            title: "Personal actualizado correctamente.!",
            timer: 2000,
            icon: "success",
          });
        });
      //   axios.post("http://localhost:5000/home/signup");
      //   axios.get("http://localhost:5000/home/signup");
    },
    infoEdit() {
      alert(
        "Para mantener la misma contraseña dejar el campo vacio.\nPara mantener los permisos iguales dejar vacio el campo."
      );
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
  height: 350px;
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
  text-align: center;
}
.info {
  width: 20px;
}
</style>
