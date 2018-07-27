'use strict'

const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', (req, res) => {
    res.status(200)
       .json({ mensagem: 'Bem vindo ao Node-Template!' })
})

router.get('/users', userController.findAll)

module.exports = router