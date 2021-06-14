const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reporteProductosSchema = new Schema({
  type: String,
  description: String,
  fecha_reporte: {
    type: Date,
    default: Date.now,
  },
});

//Crear el modelo
const reporteProductos = mongoose.model(
  "reporteProductos",
  reporteProductosSchema
);

module.exports = reporteProductos;
