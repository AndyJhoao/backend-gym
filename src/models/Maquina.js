const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const maquinaSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: String,
  imagen: Buffer,
  descripcion: String,
  fecha: {
    type: Date,
    default: Date.now,
  },
  estado: Boolean,
  /*uso_maquina: {
    id_socio: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cliente",
    },
    hora_entrada: {
      type: Date,
      default: Date.now,
    },
    hora_salida: {
      type: Date,
      default: Date.now,
    },
  },*/
});

//Crear el modelo
const Maquina = mongoose.model("Maquina", maquinaSchema);

module.exports = Maquina;
