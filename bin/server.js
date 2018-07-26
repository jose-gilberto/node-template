'use strict'

// importando módulos
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')


// carregando middlewares
const middlewares = require('../middlewares')
const errorHandler = require('../middlewares/errorHandler')

// instância do express
const app = express()

// registrando os middlewares
middlewares.register(
    logger('dev'), // configurando morgan
    // utilizando o helmet para segurança # http://expressjs.com/pt-br/advanced/best-practice-security.html
    helmet(),
    // configurando o body-parser
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    cors(),
    require('../routes/')
)(app)

// rota para teste de error 500
app.get('/error500', (req, res) => {
    res.send(error)
})

// capturadores de erros
app.use(errorHandler.notFound)
app.use(errorHandler.logErrors)
app.use(errorHandler.serverError)

module.exports = app;