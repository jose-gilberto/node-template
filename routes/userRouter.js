'use strict'

const express = require('express')
const router = express.Router()
// require controller for router
const userController = require('../controllers/userController')

router.get('/', userController.findAll)
router.get('/:id', userController.findOne)
router.post('/', userController.addUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router
