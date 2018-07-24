'use strict'

const Sequelize = require('sequelize')
const sequelize = new Sequelize('node', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

// testando a conexão
sequelize
    .authenticate()
    .then(() => {
        console.log('Conexão estabelecida com sucesso!')
    })
    .catch(err => {
        console.log('Não foi possível se conectar ao banco de dados: ', err)
    })

module.exports = sequelize