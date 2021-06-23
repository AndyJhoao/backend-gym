const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const autoincrementPersonal = Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});

var counterPersonal = mongoose.model("counterpersonal", autoincrementPersonal);

const personalSchema = new Schema({
  registro: String,
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

personalSchema.pre("save", function (next) {
  var doc = this;
  counterPersonal
    .findByIdAndUpdate(
      {
        _id: "entityId",
      },
      {
        $inc: { seq: 1 },
      },
      { new: true, upsert: true }
    )
    .then((res) => {
      doc.registro = res.seq;
      next();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
});

//Crear el modelo
const Personal = mongoose.model("Personal", personalSchema);

module.exports = Personal;
