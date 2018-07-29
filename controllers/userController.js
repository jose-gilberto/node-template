'use strict'

const path = require('path')
const sequelize = require('../database/database')
const User = sequelize.import('../models/User')

exports.findAll = (req, res) => {
    User.findAll()
        .then((users) => {
            return res.json(users)
    })
}

exports.findOne = (req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            return res.json(user)
    })
}

exports.addUser = (req, res) => {
    User.create(req.body)
        .then(() => {
            res.json({ mensagem: 'Usuário adicionado com sucesso!' })
        })
        .catch((err) => {
            res.json({ mensagem: 'Error: ' + err })
        })
}

exports.updateUser = (req, res) => {
    User.update(req.body, { 
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.json({ mensagem: 'Usuário atualizado com sucesso!' })
    }).catch((err) => {
        res.json({ mensagem: 'Error: ' + err })
    })
}

exports.deleteUser = (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.json({ mensagem: 'Usuário deletado com sucesso!' })
    })
}
