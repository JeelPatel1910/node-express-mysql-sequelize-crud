const dbConfig = require('../config/db.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DATABASE,dbConfig.USER,dbConfig.PASSWORD,{
   host: dbConfig.HOST,
   dialect: dbConfig.DIALECT,

   pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.sequelize = sequelize;
db.models = {};
db.models.Todo = require('./Todo')(sequelize,Sequelize.DataTypes);

module.exports = db;