const Sequelize = require('sequelize');
const config = require('../../config/default.json');

const instancia = new Sequelize(
    'petshop',
    'root',
    'Andersonam',
    {
        host: '127.0.0.1',
        dialect: 'mysql'
    }
);

module.exports = instancia;