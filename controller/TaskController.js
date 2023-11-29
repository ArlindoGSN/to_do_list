const Task = require("../models/Task");

const getAllTasks = async (req, res) => {

  try{
    const tasksList = await Task.find()
    return res.render("index");
  }catch(err){
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
    res.status(500).send({ erro: err.mesage });
  }
};

module.exports = {
  getAllTasks,
  createTask,
};
