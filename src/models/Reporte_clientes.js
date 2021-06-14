const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reporteClientesSchema = new Schema({
  type: String,
  description: String,
  fecha_reporte: {
    type: Date,
    default: Date.now,
  },
});

//Crear el modelo
const reporteClientes = mongoose.model(
  "reporteClientes",
  reporteClientesSchema
);

module.exports = reporteClientes;
