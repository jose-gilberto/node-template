'use strict'

const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', (req, res) => {
    res.send('HOME PAGE')
})

router.get('/users', userController.findAll)

module.exports = router