const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ventaSchema = new Schema({
  fecha: {
    type: Date,
    default: Date.now,
  },
  id_producto: Array,
  subtotal: mongoose.Types.Decimal128,
  total: mongoose.Types.Decimal128,
  tipo_pago: String,
  cambio: mongoose.Types.Decimal128,
});

//Crear el modelo
const Venta = mongoose.model("Venta", ventaSchema);

module.exports = Venta;
