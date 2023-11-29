const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasksList = await Task.find();
    return res.render("index", { tasksList: tasksList });
  } catch (err) {
    res.status(500).send({ erro: err.mesage });
  }
};

const createTask = async (req, res) => {
  const task = req.body;

  if (!task.task) {
    return res.redirect("/");
  }

  try {
    await Task.create(task);
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ erro: err.message });
  }
};

const getById = async (req, res) => {
  const task = await req.findOne({ _id: req.params.id });

  res.render("index", { task, tasksList });
};

module.exports = {
  getAllTasks,
  createTask,
  getById,
};
