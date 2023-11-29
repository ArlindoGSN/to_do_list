const mongoose = require("mongoose");

const connecTodb = () => {
  mongoose
    .connect(
      "mongodb+srv://admin:admin@todolistagsn.eiztycr.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("MongoDB Conected");
    })
    .catch((err) => console.log(err));
};

module.exports = connecTodb;
