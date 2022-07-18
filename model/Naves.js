const Sequelize = require("sequelize");
const db = require("../config/db");

const Naves = db.define("naves", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: Sequelize.STRING,
  pais: Sequelize.STRING,
  combustible: Sequelize.STRING,
  tipo: Sequelize.STRING,
});

module.exports = Naves;


