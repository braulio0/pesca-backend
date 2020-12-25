const {DB, USER, PASSWORD, HOST, dialect, pool } = require('../config/db.config.js');

const Sequelize = require("sequelize");
const sequelize = new Sequelize(DB, USER, PASSWORD,{
  host:HOST,
  dialect:dialect,
  operatorsAliases: false,
   pool,

});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.Solicitate = require("./Solicitante.model.js")(sequelize, Sequelize);
db.Office = require("./office.model.js")(sequelize, Sequelize);
db.Club = require("./Club.model.js")(sequelize, Sequelize);

module.exports = db;
