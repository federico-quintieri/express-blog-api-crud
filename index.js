const express = require("express");
const app = express();
const port = 3000;
// Importo il file dove ho effettuato gli endpoint default di routing
const routing = require("./routes/post");


app.use("/Ricette", routing);

// Endpoint default
app.get("/", (req, res) => res.send("Hello World!"));

// Server in ascolto
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
