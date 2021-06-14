const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personalSchema = new Schema({
  registro: Number,
  nombre: String,
  apellidos: String,
  puesto: String,
  n_usuario: String,
  contraseña: String,
  permisos: Number,
  fecha: {
    type: Date,
    default: Date.now,
  },
});

//Crear el modelo
const Personal = mongoose.model("Personal", personalSchema);

module.exports = Personal;
