const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reporteVentasSchema = new Schema({
  type: String,
  description: String,
  fecha: {
    type: Date,
    default: Date.now,
  },
  array: [
    {
      id_producto: mongoose.Schema.Types.ObjectId,
      nom_producto: String,
      description: String,
      subtotal: Number,
      cantidad: Number,
    },
  ],
});

//Crear el modelo
const reporteVentas = mongoose.model("reporteVentas", reporteVentasSchema);

module.exports = reporteVentas;
