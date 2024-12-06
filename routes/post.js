// Importo oggetto/funzione express
const express = require("express");

// Creo un istanza di Ruoter
const router = express.Router();

// Qui importiamo callback function specifiche all'id
const middlewareCheckID = require("../middleware/middlewareIdCheck");

// Importo il controller ricette
const controllerRicette = require("../controllers/ricetteController");

// index => get
router.get("/", controllerRicette.index);

// show => get
router.get("/:id", middlewareCheckID, controllerRicette.show);

// store => post
router.post("/", controllerRicette.store);

// update => put
router.put("/:id", middlewareCheckID, controllerRicette.update);

// modify => patch
router.patch("/:id", middlewareCheckID, controllerRicette.modify);

// destroy => delete
router.delete("/:id", middlewareCheckID, controllerRicette.destroy);

// Esporto il router
module.exports = router;
