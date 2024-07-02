const Sequelize = require('sequelize');

//create a connection to database

const sequelize = new Sequelize('just_tech_news_db', 'rawanfatima', 'password', {
    
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;