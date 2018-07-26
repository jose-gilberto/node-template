'use strict'

const path = require('path')
const sequelize = require('../database/database')
const User = sequelize.import('../models/User')

exports.findAll = (req, res) => {
    User.findAll()
        .then((users) => {
            console.log(users)
    })
}