const Sequelize = require('sequelize')

const sequelize = new Sequelize('max_book', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

console.log('Conectado ao Banco De Dados.');

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}