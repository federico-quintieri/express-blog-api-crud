// Importo oggetto/funzione express
const express = require("express");
// Creo un istanza di Ruoter
const router = express.Router();
// Richiamo il mio array di dati
const arrRicette = require("../data/ricette");

// index => get => read
router.get("/", (req, res) => {
  res.send("Visualizzo tutti gli elementi");
});

// show => get => read
router.get("/:id", (req, res) => {
  // Accediamo alla nuova proprietà parametro id
  const ricettaID = req.params.id;
  res.send("Visualizzo un solo elemento");
});

// store => post => create
router.post("/:id", (req, res) => {
  const ricettaID = req.params.id;
  res.send("Creo un nuovo elemento specifico con un nuovo id");
});
// update => put => update
router.put("/:id", (req, res) => {
  const ricettaID = req.params.id;
  res.send("Modifica totale di un elemento");
});

// modify => patch => update
router.patch("/:id", (req, res) => {
  const ricettaID = req.params.id;
  res.send("Modifica parziale elemento");
});

// destroy => delete => delete
router.delete("/:id", (req, res) => {
  const ricettaID = req.params.id;
  res.send("Elimino un elemento");
});

// Per elemento si intende dell'array, quindi di un oggetto
