const express = require("express");
const mongoose = require("mongoose");
const routing = require("./routes/post");
const Product = require("./models/product.model.js");

const app = express();
const port = 3000;

// Use JSON parser middleware
app.use(express.json());

// Apply routes
app.use("/Ricette", routing);

// Default endpoint
app.get("/", (req, res) => res.send("Hello World!"));

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
