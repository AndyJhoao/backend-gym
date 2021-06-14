const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productoSchema = new Schema({
  nom_producto: String,
  precio_compra: mongoose.Types.Decimal128,
  precio_venta: mongoose.Types.Decimal128,
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

//Crear el modelo

const Producto = mongoose.model("Producto", productoSchema);

var SchemaEntity = mongoose.Schema({
  testvalue: {
    type: String,
  },
});

SchemaEntity.pre("save", function (next) {
  var doc = this;
  Producto.findByIdAndUpdate(
    { _id: "entityId" },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  )
    .then(function (count) {
      console.log("...count: " + JSON.stringify(count));
      doc.sort = count.seq;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = Producto;
