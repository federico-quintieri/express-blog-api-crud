// Importiamo il file con l'array di ricette
const ricette = require("../data/ricette");

// callback per index
const index = (req, res) => {
  // Prendiamo la query string dall'URL
  const queryObject = req.query;
  const chiaveTags = queryObject.tags?.toLowerCase(); // Usa l'optional chaining per evitare errori se `tags` è undefined

  // Inizializziamo le ricette da inviare con tutte le ricette
  let ricetteDaInviare = ricette;

  // Applichiamo il filtro solo se `tags` è presente
  if (chiaveTags) {
    ricetteDaInviare = ricette.filter(
      (curRicetta) => curRicetta.tags.toLowerCase() === chiaveTags
    );
  }

  // Mostriamo tutto l'array di ricette (filtrate o meno)
  res.json(ricetteDaInviare);
};

// callback per show
const show = (req, res) => {
  // Converte l'id in numero intero
  const ricettaID = parseInt(req.params.id);

  const elemento = ricette.find((currItem) => currItem.id === ricettaID);

  if (elemento === undefined) {
    res.json(`Stato 404, non esiste id ${ricettaID} in array oggetti`);
  } else res.json(elemento);
};

// callback per store
const store = (req, res) => {
  const ricettaID = req.params.id;
  res.send("Creo un nuovo elemento specifico con un nuovo id");
};

// callback per update
const update = (req, res) => {
  const ricettaID = req.params.id;
  res.send("Modifica totale di un elemento");
};

// callback per modify
const modify = (req, res) => {
  const ricettaID = req.params.id;
  res.send("Modifica parziale elemento");
};

// callback per destroy
const destroy = (req, res) => {
  // Convertiamo la stringa in numero
  const ricettaID = parseInt(req.params.id, 10);

  // Settiamo variabile appoggio
  let indexToDelete = -1;

  // A noi serve indice array dell'oggetto da cancellare
  ricette.forEach((currObject, currIndex) => {
    if (currObject.id === ricettaID) indexToDelete = currIndex;
  });

  if (indexToDelete === -1) {
    res.json(`Stato 404, non esiste index ${ricettaID} in array oggetti`);
  }
  // Altrimenti vuol dire che esiste l'index array da togliere
  else {
    // Cancelliamo l'elemento con index idToDelete
    ricette.splice(indexToDelete, 1);
    // Mostriamo l'array dopo aver rimosso un elemento
    res.send(ricette);
  }
};

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy,
};
