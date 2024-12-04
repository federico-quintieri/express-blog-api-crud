const arrayTag = ["Dolce", "Salato"];

// Creo un file seprato l'array di oggetti contenente i dati di ogni dolce.
const arrayRicette = [
  {
    id: 4,
    titolo: "Ciambellone",
    contenuto: "Non c'è contenuto",
    immagine: "./public/ciambellone.jpeg",
    tags: arrayTag[0],
  },
  {
    id: 1,
    titolo: "Cracker Barbabietola",
    contenuto: "Non c'è contenuto",
    immagine: "./public/cracker_barbabietola.jpeg",
    tags: arrayTag[1],
  },
  {
    id: 2,
    titolo: "Pane fritto dolce",
    contenuto: "Non c'è contenuto",
    immagine: "./public/pane_fritto_dolce.jpeg",
    tags: arrayTag[0],
  },
  {
    id: 3,
    titolo: "Pasta barbabietola",
    contenuto: "Non c'è contenuto",
    immagine: "./public/pasta_barbabietola.jpeg",
    tags: arrayTag[1],
  },
  {
    id: 5,
    titolo: "Torta paesana",
    contenuto: "Non c'è contenuto",
    immagine: "./public/torta_paesana.jpeg",
    tags: arrayTag[0],
  },
];

module.exports = arrayRicette ;
