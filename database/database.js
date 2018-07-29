'use strict'

// importando módulos
const path = require('path')
const Sequelize = require('sequelize')
require('dotenv').config({ path: path.resolve('config/.env') })

// variáveis de db
const database = process.env.DB_DATABASE
const host = process.env.DB_HOST || 'localhost'
const port = process.env.DB_PORT || 5432
const dialect = process.env.DB_TYPE || 'postgres'
const user = process.env.DB_USER || 'postgres'
const passwd = process.env.DB_PASSWD || ''

const sequelize = new Sequelize({
    host: host,
    port: port,
    database: database,
    username: user,
    password: passwd,
    dialect: dialect,
    operatorsAliases: false,
    logging: false
    //pool: {
    //    max: 5,
    //    min: 0,
    //    acquire: 30000,
    //    idle: 10000
    //}
})

// testando a conexão
sequelize
    .authenticate()
    .then(() => console.log('Conexão estabelecida com sucesso!'))
    .catch(err => {
        console.log('Não foi possível se conectar ao banco de dados: ', err)
    })

sequelize.sync()

module.exports = sequelize