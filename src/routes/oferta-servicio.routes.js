const express = require("express");
const ofertaServicio_model = require("../models/oferta-servicio.model");
const ofertaServicio_routes_http = express.Router();

/*  Crear una nueva oferta de servicio 
    http: post
    mongoose method: save()
    http://localhost:5000/
*/
ofertaServicio_routes_http.post("/", (req, res) => {
  const new_ofertaServicio = ofertaServicio_model(req.body);
  new_ofertaServicio
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

/*  Listar todos los registros de la bd 
    http: get
    mongoose method: find()*/
ofertaServicio_routes_http.get("/", (req, res) => {
  ofertaServicio_model
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

/*  Consultar un oferta de forma específica por el id 
    http: get
    mongoose method: findById({_id: ?})
*/
ofertaServicio_routes_http.get("/:ofertaServicioId", (req, res) => {
  const { ofertaServicioId } = req.params;
  ofertaServicioId_model
    .findById({ _id: ofertaServicioIdId })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

/*
    Editar una oferta de servicio de forma específica por el id 
    http: put
    mongoose method: updateOne({_id: ?}, {$set:{...}})
*/
ofertaServicio_routes_http.put("/:ofertaServicioId", (req, res) => {
  const { ofertaServicioId } = req.params;
  const { nitEmpresa, nombreEmpresa, servicios, precio, encargadoAuditoria, fechaAuditoria, resultadoAuditoria } = req.body;
  ofertaServicio_model
    .updateOne(
      { _id: ofertaServicioId },
      { $set: { nitEmpresa, nombreEmpresa, servicios, precio, encargadoAuditoria, fechaAuditoria, resultadoAuditoria } }
    )
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

/*ELIMINAR uno de las ofertas de servicio existentes en la BD
http: delete
mongoose method: deleteOne({_id: ?}
*/
ofertaServicio_routes_http.delete("/:ofertaServicioId", (req, res) => {
  const { ofertaServicioId } = req.params;
  ofertaServicio_model
    .deleteOne({ _id: ofertaServicioId })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

/*
Eliminar todas las coincidencias realizando la busqueda
por una propiedad especifica
http: DELETE
mongoose method: deleteMany
*/

ofertaServicio_routes_http.delete("/", (req, res) => {
  const query = { nitEmpresa: { $regex: "ABC123456789" } };
  ofertaServicio_model
    .deleteMany(query)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

module.exports = ofertaServicio_routes_http;