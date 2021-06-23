const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const maquinasSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: String,
  cantidad: Number,
  imagen: Buffer,
  fecha: {
    type: Date,
    default: Date.now,
  },
});
const Maquinas = mongoose.model("Maquinas", maquinasSchema);

module.exports = Maquinas;
