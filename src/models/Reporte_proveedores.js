const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reporteProveedoresSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id_proveedor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Proveedor",
  },
  type: String,
  description: String,
  fecha_reporte: {
    type: Date,
    default: Date.now,
  },
});

//Crear el modelo
const reporteProveedores = mongoose.model(
  "reporteProveedores",
  reporteProveedoresSchema
);

module.exports = reporteProveedores;
