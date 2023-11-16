const { Sequelize, sequelize } = require('./db');

const Usuario = sequelize.define('usuarios', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Usuario;
