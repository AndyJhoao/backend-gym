//Importe de moongose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const autoincrement = Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});

var counter = mongoose.model("counter", autoincrement);

//Creación de esquema
const clienteSchema = new Schema({
  registro: { type: String },
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
clienteSchema.pre("save", function (next) {
  var doc = this;
  counter
    .findByIdAndUpdate(
      { _id: "entityId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    )
    .then(function (res) {
      // console.log("...count" + JSON.stringify(res));
      doc.registro = res.seq;
      next();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
});
//Crear el modelo
const Cliente = mongoose.model("Cliente", clienteSchema);

module.exports = Cliente;
