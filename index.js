// Import part
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");

const app = express();

app.use(express.json());

const port = 3000;

// Importo il file dove ho effettuato gli endpoint default di routing
const routing = require("./routes/post");

app.use("/Ricette", routing);

// Endpoint default
app.get("/", (req, res) => res.send("Hello World!"));

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Server in ascolto
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

mongoose
  .connect(
    "mongodb+srv://Federico:LJX30PQl2pjJNjr4@cluster0.bebya.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connesso al database");
  })
  .catch((err) => {
    console.log("Errore connessione al database" + err);
  });
