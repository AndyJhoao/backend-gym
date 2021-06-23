const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const counterSchema = new Schema({
  _id: { type: String, required: true },
  seq: { type: Number, def: 0 },
});

counterSchema.index({ _id: 1, seq: 1 }, { unique: true });

const counterModel = mongoose.model("counter", counterSchema);

const autoIncremental = function (mondelName, doc, next) {
  counterModel.findByIdAndUpdate(
    mondelName,
    { $inc: { sec: 1 } },
    { new: true, upsert: true },
    function (error, counter) {
      if (error) return next(error);
      doc.registro = counter.seq;
      next();
    }
  );
};

module.exports = autoIncremental;
