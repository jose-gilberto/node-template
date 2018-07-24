'use strict'

// importando app
const app = require('./bin/www')
const port = 8080

app.listen(port, () => {
    console.log('Servidor iniciado na porta ' + port)
})