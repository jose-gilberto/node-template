'use strict'

const sequelize = require('../database/database')

const User = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        }
    })
}

module.exports = User
