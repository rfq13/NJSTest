const Task = require("../models/TaskModel.js");
const { v4 } = require("uuid");
const logger = require("../utils/logger");

const getTasks = async (req, res) => {
  try {
    const response = await Task.findAll();
    res.status(200).json(response);
  } catch (error) {
    logger.error(error.message);
  }
};

const getTaskById = async (req, res) => {
  try {
    const response = await Task.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    logger.error(error.message);
  }
};

const createTask = async (req, res) => {
  try {
    const data = {
      ...req.body,
      id: v4(),
    };
    await Task.create(data);
    res.status(201).json({ msg: "Task Created" });
  } catch (error) {
    logger.error(error.message);
  }
};

const updateTask = async (req, res) => {
  try {
    await Task.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Task Updated" });
  } catch (error) {
    logger.error(error.message);
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Task Deleted" });
  } catch (error) {
    logger.error(error.message);
  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
