const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  tasks: {
    type: String,
    required: true,
  },
  check: {
    type: Boolean, 
    required: true,
  },
  date: {
    type: Date,
    default: Date.now, 
  },
});

module.exports = mongoose.model("Task", taskSchema);
