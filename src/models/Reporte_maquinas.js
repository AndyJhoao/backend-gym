const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reporteMaquinasSchema = new Schema({
  type: String,
  description: String,
  fecha: {
    type: Date,
    default: Date.now,
  },
  array: [
    {
      id_maquina: mongoose.Schema.Types.ObjectId,
      nom_maquina: String,
      description: String,
      cantidad: Number,
      estado: Boolean,
    },
  ],
});

//Crear el modelo
const reporteMaquinas = mongoose.model(
  "reporteMaquinas",
  reporteMaquinasSchema
);

module.exports = reporteMaquinas;
