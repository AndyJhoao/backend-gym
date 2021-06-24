<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header" v-if="!isLoading">
          <h3>Informacion sobre {{ data.nombre }}</h3>
        </div>

        <div class="modal-body">
          <spinnerLoader :loading="isLoading" v-if="isLoading" />
          <div v-if="!isLoading">
            <p>Registro : {{ data.registro }}</p>
            <br />
            <p>Nombre : {{ data.nombre | capitalize }}</p>
            <br />
            <p>Apellidos : {{ data.apellidos | capitalize }}</p>
            <br />
            <p>Puesto : {{ data.puesto | capitalize }}</p>
            <br />
            <p>Nombre de Usuario : {{ data.n_usuario }}</p>
            <br />
            <p>Permisos : {{ data.permisos }}</p>
            <br />
            <p>Fecha : {{ data.fecha | date }}</p>
            <br />
          </div>
          <slot name="footer" v-if="!isLoading">
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
            <div class="buttonsCont">
              <button
                class="modal-default-button"
                @click="$emit('closePersonalInfo')"
              >
                Volver
              </button>
              <button
                class="modal-default-button"
                v-on:click="deleteUser(data._id)"
                @click="$emit('closePersonalInfo')"
              >
                Eliminar
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
import spinnerLoader from "@/components/SpinnerLoader.vue";
export default {
  name: "masInfoPersonal",
  components: { spinnerLoader },
  props: ["data"],
  data() {
    return {
      isLoading: false,
    };
  },
  created() {
    this.isLoading = true;
    setTimeout(() => (this.isLoading = false), 1000);
  },
  methods: {
    deleteUser(id) {
      this.$swal("¿Seguro que deseas eliminar este registro?", {
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((isDelete) => {
        if (isDelete) {
          axios
            .post("http://localhost:5000/home/personal/" + id)
            .then(() => {
              this.$swal("Empleado Eliminado.!", { icon: "success" });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
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
  width: 600px;
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
.buttonsCont {
  height: 20px;
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
  width: 900px;
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
</style>
