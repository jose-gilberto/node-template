'use strict'

// importando app
const app = require('./bin/server')
const port = 8080

app.listen(port, () => {
    console.log('Servidor iniciado na porta ' + port)
})