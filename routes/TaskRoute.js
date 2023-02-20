const express = require("express");
const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/TaskController.js");

const router = express.Router();
const validate = require("../validation/validator.js");
const taskValidation = require("../validation/taskValidation.js");

router.get("/tasks", getTasks);
router.get("/tasks/:id", validate(taskValidation.getOne), getTaskById);
router.post("/tasks", validate(taskValidation.create), createTask);
router.patch("/tasks/:id", validate(taskValidation.update), updateTask);
router.delete("/tasks/:id", validate(taskValidation.delete), deleteTask);

module.exports = router;
