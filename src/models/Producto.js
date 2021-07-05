const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const autoincrementProduct = Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});

var counterProduct = mongoose.model("counterproduct", autoincrementProduct);

const productoSchema = new Schema({
  registro: Number,
  nom_producto: String,
  precio_compra: Number,
  precio_venta: Number,
  cant_existencia: Number,
  descripcion: String,
  id_proveedor: String,
  fecha: {
    type: Date,
    default: Date.now,
  },
  seq: {
    type: Number,
    default: 0,
  },
});

productoSchema.pre("save", function (next) {
  var doc = this;
  counterProduct
    .findByIdAndUpdate(
      { _id: "entityId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    )
    .then(function (count) {
      console.log("...count: " + JSON.stringify(count));
      doc.registro = count.seq;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

//Crear el modelo

const Producto = mongoose.model("Producto", productoSchema);

module.exports = Producto;
