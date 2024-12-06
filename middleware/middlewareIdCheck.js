const arrayRicette = require("../data/ricette");

// Facciamo una callback middleware per controllare id
const checkRequestID = (req, res, next) => {
  // Prendo parametro ID dalla request
  const ricettaID = parseInt(req.params.id);

  // Trovo indice oggetto in array con stessa chiave ID di parametro ID
  const elemento = arrayRicette.find((currItem) => currItem.id === ricettaID);

  // Se l'elemento non è undefined allora id è corretto e vai avanti
  if (elemento) {
    next();
  }
  // Altrimenti inviami un errore come risposta JSON perché ID inserito come parametro url è sbagliato
  else {
    res.statusCode = 404;
    res.json({
      error: true,
      message: "Not Found",
    });
  }
};

module.exports = checkRequestID;
