//Importe de moongose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creación de esquema
const detalle_ventaSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id_venta: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Venta",
  },
  id_producto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Producto",
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
  detalle_producto: {
    nom_producto: String,
    precio_venta: mongoose.Types.Decimal128,
    cantidad: Number,
  },
});

//Crear el modelo
const detalleVenta = mongoose.model("detalleVenta", detalle_ventaSchema);

module.exports = detalleVenta;
