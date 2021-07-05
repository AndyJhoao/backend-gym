const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reporteProveedoresSchema = new Schema({
  type: String,
  description: String,
  fecha: {
    type: Date,
    default: Date.now,
  },
  array: [
    {
      id_proveedor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Proveedor",
      },
    },
  ],
});

//Crear el modelo
const reporteProveedores = mongoose.model(
  "reporteProveedores",
  reporteProveedoresSchema
);

module.exports = reporteProveedores;
