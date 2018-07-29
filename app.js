'use strict'

// importando módulos
require('dotenv').config({ path: './config/.env' })

// importando app
const app = require('./bin/server')

// configurando porta
const port = process.env.APP_PORT || 3000

app.listen(port, () => {
    console.log('Servidor iniciado na porta ' + port)
})

module.exports = app