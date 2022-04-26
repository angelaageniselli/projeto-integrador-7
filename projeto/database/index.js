//Concexão com o banco
const Sequelize = require('sequelize');
const configDB = require('../config/database');

const conexao = new Sequelize(configDB);


module.exports = conexao;