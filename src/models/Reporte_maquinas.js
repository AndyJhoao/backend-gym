const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reporteMaquinasSchema = new Schema({
  type: String,
  description: String,
  fecha_reporte: {
    type: Date,
    default: Date.now,
  },
});

//Crear el modelo
const reporteMaquinas = mongoose.model(
  "reporteMaquinas",
  reporteMaquinasSchema
);

module.exports = reporteMaquinas;
