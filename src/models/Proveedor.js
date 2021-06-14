const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const proveedorSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  rfc: String,
  razon_social: String,
  id_producto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Producto",
  },
  contacto: {
    representante: String,
    direccion: String,
    telefono: Number,
    email: String,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
});

//Crear el modelo
const Proveedor = mongoose.model("Proveedor", proveedorSchema);

module.exports = Proveedor;
