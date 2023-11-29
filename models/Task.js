const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  tasks: {
    type: String,
    require: true,
  },
  check: {
    type: boolean,
    require: true,
  },
  date: {
    type: Date,
    default: date.now(),
  },
});

module.exports = mongoose.model("Task", taskSchema);
