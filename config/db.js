const Sequelize = require("sequelize");

const db = new Sequelize("railway", "root", "EyYSffXENlYnS00PHCyL", {
  host: "containers-us-west-50.railway.app",
  dialect: "mysql",
  port: "5681",
  operatorAliases: false,
  define: {
    defaultScope: {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    },
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquired: 30000,
    idle: 10000,
  },
});

module.exports = db;
