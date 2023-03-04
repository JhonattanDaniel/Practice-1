const mongoose = require("mongoose");
const ofertaServicio_shema = mongoose.Schema({
  nitEmpresa: { type: String, require: true, unique: true },
  nombreEmpresa: { type: String, require: true },
  servicios: { type: Array, require: true },
  precio: { type: Number, require: true },
  encargadoAuditoria: { type: String, require: true },
  fechaAuditoria: { type: Date, require: true },
  resultadoAuditoria: {
    type: Object,
    require: true,
    opLimpia: { type: String, require: true },
    opSalvedad: { type: String, require: true },
    opAdversa: { type: String, require: true },
    opDenegada: { type: String, require: true },
  },
});

module.exports = mongoose.model(
  "OfertaServicioColection",
  ofertaServicio_shema
);
