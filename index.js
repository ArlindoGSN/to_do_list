const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Tá tudo Ok");
});

app.listen(3000);
