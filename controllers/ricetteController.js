// Importiamo il file con l'array di ricette
const ricette = require("../data/ricette");

// callback per index
const index = (req, res) => {
  // Prendiamo la query stringa nell'url
  const queryString = req.query;
  console.log(queryString);

  // Mostriamo tutto l'array di ricette
  res.json(ricette);
};

// callback per show
const show = (req, res) => {
  // Converte l'id in numero intero
  const ricettaID = parseInt(req.params.id);

  const elemento = ricette.find((currItem) => currItem.id === ricettaID);

  res.json(elemento);
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
  let idToDelete = -1;

  // A noi serve indice array dell'oggetto da cancellare
  ricette.forEach((currObject, currIndex) => {
    if (currObject.id === ricettaID) idToDelete = currIndex;
  });

  // Cancelliamo l'elemento con index idToDelete
  ricette.splice(idToDelete, 1);

  // Mostriamo l'array dopo aver rimosso un elemento
  res.send(ricette);
};

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy,
};
