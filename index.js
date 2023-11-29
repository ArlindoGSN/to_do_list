const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const app = express();
const connecTodb = require("./database/db");
connecTodb();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => {
  console.log(`The server is runing in http://localhost:${port}`);
});
