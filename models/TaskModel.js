const { Sequelize } = require("sequelize");
const db = require("../config/Database.js");

const { DataTypes } = Sequelize;

const Task = db.define(
  "tasks",
  {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    done: DataTypes.BOOLEAN,
  },
  {
    freezeTableName: true,
  }
);

module.exports = Task;

(async () => {
  await db.sync();
})();
