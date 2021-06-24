<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header" v-if="!isLoading">
          <h3>Editar Producto {{ productInfo.nom_producto }}</h3>
        </div>

        <div class="modal-body">
          <spinnerLoader v-if="isLoading" />
          <div class="container-form" v-if="!isLoading">
            <div class="form-flex-column">
              <input
                type="text"
                :placeholder="productInfo.nom_producto"
                v-model="nom_producto"
              />
              <input
                type="text"
                :placeholder="productInfo.id_proveedor"
                v-model="id_proveedor"
              />
            </div>
            <div class="form-flex-column">
              <input
                type="text"
                :placeholder="productInfo.descripcion"
                v-model="descripcion"
              />
              <input
                type="number"
                :placeholder="productInfo.precio_compra.$numberDecimal"
                v-model="precio_compra"
              />
              <input
                type="number"
                :placeholder="productInfo.precio_venta.$numberDecimal"
                v-model="precio_venta"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer" v-if="!isLoading">
          <slot name="footer">
            GYM Spartans
            <div>
              <button
                class="modal-default-button"
                @click="$emit('close')"
                v-on:click="updateProduct"
              >
                Guardar
              </button>
              <button class="modal-default-button" @click="$emit('close')">
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
import spinnerLoader from "@/components/SpinnerLoader.vue";
export default {
  name: "editarProductoModal",
  props: ["productInfo"],
  components: { spinnerLoader },
  data() {
    return {
      nom_producto: "",
      descripcion: "",
      id_proveedor: "",
      precio_compra: "",
      precio_venta: "",
      isLoading: false,
    };
  },
  created() {
    this.isLoading = true;
    setTimeout(() => (this.isLoading = false), 1000);
    this.getProductInfo();
  },
  methods: {
    getProductInfo() {
      this.nom_producto = this.productInfo.nom_producto;
      this.descripcion = this.productInfo.descripcion;
      this.id_proveedor = this.productInfo.id_proveedor;
      this.precio_compra = this.productInfo.precio_compra.$numberDecimal;
      this.precio_venta = this.productInfo.precio_venta.$numberDecimal;
    },
    updateProduct() {
      let product = {
        nom_producto: this.nom_producto,
        descripcion: this.descripcion,
        id_proveedor: this.id_proveedor,
        precio_compra: this.precio_compra,
        precio_venta: this.precio_venta,
      };
      console.log(this.productInfo);
      console.log(product);
      axios
        .post(
          "http://localhost:5000/home/products/editar-producto/" +
            this.productInfo._id,
          product
        )
        .then(() => {
          this.$swal({
            title: "Producto actualizado correctamente.!",
            timer: 2000,
            icon: "success",
          });
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
</style>
