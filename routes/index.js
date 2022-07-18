const express = require("express");
const router = express.Router();

// importar express validator
const { body } = require("express-validator/check");

// importar el controller
const proyectoController = require("../controllers/proyectoController");

module.exports = () => {
  router.get(`/`, proyectoController.mostrarNaves);
  
  router.post(
    `/`,
    body("nombre").not().isEmpty().trim().escape(),
    body("pais").not().isEmpty().trim().escape(),
    body("combustible").not().isEmpty().trim().escape(),
    body("tipo").not().isEmpty().trim().escape(),
    proyectoController.nuevaNave
  );

  // Eliminar nave
  router.delete("/:id", proyectoController.eliminarNave);

  return router;
};
