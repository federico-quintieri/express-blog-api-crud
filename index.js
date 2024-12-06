const express = require("express");
const mongoose = require("mongoose");
const routing = require("./routes/post");
const Product = require("./models/product.model.js");

const app = express();
const port = 3000;

// Importo la callback per gestire errore request (ritorna callback function)
const middlewareHandleError = require("./middleware/middlewareError.js");
// console.log(middlewareHandleError);

// Use JSON parser middleware
app.use(express.json());

// Apply routes
app.use("/Ricette", routing);

// Default endpoint
app.get("/", (req, res) => res.send("Hello World!"));

// Forzo errore per vedere se il middleware è gestito correttamente
app.get("/force-error", (req, res, next) => {
  const error = new Error("Errore interno simulato");
  error.status = 500;
  next(error); // Passa l'errore al middleware
});

// Utilizzo la callback middleware error per gestire errore risposta server
// Si mette dopo che sono stati specificati i vari endpoint
app.use(middlewareHandleError);

// Start server
app.listen(port, () =>
  console.log(`Esempio server in ascolto a porta:${port}!`)
);

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://Federico:LJX30PQl2pjJNjr4@cluster0.bebya.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connesso al database");
  })
  .catch((err) => {
    console.log("Errore connessione al database: " + err);
  });

app.post("/api/products", async function creazioneProdotto(req, res) {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
