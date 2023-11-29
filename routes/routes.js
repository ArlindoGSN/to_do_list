const routes = require("express").Router();
const taskController = require("../controller/TaskController");

routes.get("/", taskController.getAllTasks);

routes.post("/create", taskController.createTask)

routes.get("/getById", taskController.getById)

module.exports = routes;