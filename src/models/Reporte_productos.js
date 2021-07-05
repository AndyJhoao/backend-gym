const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reporteProductosSchema = new Schema({
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
      cantidad: Number,
    },
  ],
});

//Crear el modelo
const reporteProductos = mongoose.model(
  "reporteProductos",
  reporteProductosSchema
);

module.exports = reporteProductos;
