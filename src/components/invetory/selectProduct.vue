<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h3>Lista de Productos</h3>
        </div>
        <div class="modal-body">
          <div class="container-table">
            <table class="table">
              <thead class="head">
                <tr class="tr_head">
                  <th>ID</th>
                  <th>NOMBRE</th>
                  <th>DESCRIPCION</th>
                  <th>EXISTENCIA</th>
                </tr>
              </thead>
              <tbody class="body">
                <tr
                  v-for="productsSelect in listProducts"
                  :key="productsSelect._id"
                >
                  <td>{{ productsSelect._id }}</td>
                  <td>{{ productsSelect.nom_producto }}</td>
                  <td>{{ productsSelect.descripcion }}</td>
                  <td>{{ productsSelect.cant_existencia }}</td>
                </tr>
              </tbody>
            </table>
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
            <input type="text" name="search" id="search" v-model="search" />
            <div>
              <button
                class="modal-default-button"
                @click="$emit('close')"
                v-on:click="openProduct"
              >
                Abrir
              </button>
              <button class="modal-default-button" @click="$emit('close')">
                Cerrar
              </button>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "selectProduct",
  props: ["listProducts"],
  data() {
    return {
      filter: "",
      search: "",
    };
  },
  methods: {
    openProduct() {},
    click() {},
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
  width: 1200px;
  height: 550px;
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
.container-table {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  height: 400px;
  border: 2px black solid;
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
.table {
  width: auto;
  height: auto;
  text-align: center;
  border-collapse: collapse;
  min-height: 100px;
  max-height: 400px;
}
.head {
  height: 50px;
  background-color: rgb(255, 201, 119);
}
.tr_head {
  height: 40px;
}
td {
  height: 40px;
}
tr:nth-child(even) {
  background-color: rgba(255, 235, 205, 1);
}
tr:nth-child(odd) {
  background-color: rgba(255, 235, 205, 0.5);
}
</style>
