const { Sequelize } = require("sequelize");

const db = new Sequelize("NJSTest", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
