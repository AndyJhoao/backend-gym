//Importe de moongose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creación de esquema
const clienteSchema = new Schema({
  registro: Number,
  nombre: String,
  apellidos: String,
  genero: String,
  telefono: Number,
  direccion: String,
  observaciones: String,
  fecha: {
    type: Date,
    default: Date.now,
  },
  tipo_suscripcion: String,
  cuota: mongoose.Types.Decimal128,
  membresia: Boolean,
  tipo_pago: String,

  estado_suscripcion: {
    horario: {
      type: Date,
      default: Date.now,
    },
    ini_suscripcion: {
      type: Date,
      default: Date.now,
    },
    exp_suscripcion: {
      type: Date,
      default: Date.now,
    },
    renovar: Boolean,
  },
});

//Crear el modelo
const Cliente = mongoose.model("Cliente", clienteSchema);

module.exports = Cliente;
