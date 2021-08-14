const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql://mvc-web-services:mvc-web-services@localhost:3306/mvc-web-services')

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    connect: sequelize,
}
