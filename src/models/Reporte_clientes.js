const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reporteClientesSchema = new Schema({
  type: String,
  description: String,
  fecha: {
    type: Date,
    default: Date.now,
  },
  array: [
    {
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
    },
  ],
});

//Crear el modelo
const reporteClientes = mongoose.model(
  "reporteClientes",
  reporteClientesSchema
);

module.exports = reporteClientes;
