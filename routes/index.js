'use strict'

const express = require('express')
const router = express.Router()
const middlewares = require('../middlewares')

// importando rotas adicionais
const userRouter = require('./userRouter')

router.get('/', (req, res) => {
    res.status(200)
       .json({ mensagem: 'Bem vindo ao Node-Template!' })
})

// aplicando rotas adicionais
router.use('/user', userRouter)

module.exports = router
