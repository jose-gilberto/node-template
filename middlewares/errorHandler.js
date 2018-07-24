'use strict'

const DEFAULT_ERROR_MESSAGE = 'Ocorreu um erro, se esta mensagem persistir contate o administrador do sistema.'
const DEFAULT_ERROR_NOTFOUND = 'Desculpe, não foi possível localizar o conteúdo especificado!'

exports.notFound = (req, res, next) => {
    res.status(404)
       .json({ message: DEFAULT_ERROR_NOTFOUND })
}

exports.logErrors = (err, req, res, next) => {
    console.log(err.stack)
    next(err)
}

exports.serverError = (err, req, res, next) => {
    res.status(err.status || 500)
       .json({ message: DEFAULT_ERROR_MESSAGE })
}