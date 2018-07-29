'use strict'

const sequelize = require('../database/database')

const User = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        nome: {
            type: DataTypes.STRING
        },
        sobrenome: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    })
}

module.exports = User
