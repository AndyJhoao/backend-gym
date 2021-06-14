const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reporteVentasSchema = new Schema({
  type: String,
  description: String,
  fecha_reporte: {
    type: Date,
    default: Date.now,
  },
});

//Crear el modelo
const reporteVentas = mongoose.model("reporteVentas", reporteVentasSchema);

module.exports = reporteVentas;
