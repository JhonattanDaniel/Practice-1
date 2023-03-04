const express = require("express");
const ofertaServicio_routes_access = require("./oferta-servicio.routes");
const routes = express.Router();

const app_routes_system = (app) => {
    /*http://localhost:5000/api/v1*/
  app.use("/api/v1", routes);
  /*http://localhost:5000/api/v1/ofertaServicioS */
  routes.use("/ofertaServicios", ofertaServicio_routes_access);
};

module.exports = app_routes_system;