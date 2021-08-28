'use strict'
const db = require('./db')
const index = {};

index.Sequelize = db.Sequelize;
index.sequelize = db.sequelize;
index.connect = db.connect

index.shops = require('./Shops')(db.sequelize, db.Sequelize);

module.exports = index;