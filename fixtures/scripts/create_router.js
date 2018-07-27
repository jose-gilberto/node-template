'use strict'

const path = require('path')
const fs = require('fs')

if (process.argv.length <= 2) {
    console.log('O comando make:route requer o parâmetro <route-name>.')
} else {
    let route_name = process.argv[2].toLowerCase()
    let pattern = /^(?=.*?[A-Za-z])[A-Za-z+]+$/

    if (route_name.toLowerCase().indexOf("route") != -1 || route_name.toLowerCase().indexOf("router") != -1 || !pattern.test(route_name)) {
        console.log('O parâmetro <route-name> não aceita:')
        console.log('- Rotas com números no nome')
        console.log('- O nome Route ou Router no parâmetro')
        console.log('- Rotas com caracteres especiais')
    } else {
        let caminho = './routes/' + route_name + 'Router.js'

        let content = `'use strict'

const express = require('express')
const router = express.Router()
// require controller for router
// const ${route_name}Controller = require('path to controller') - example

router.get('/', (req, res) => {
    res.json({ router_get: 'Hello from ${route_name}Router' })
})

// add the adicional routes

module.exports = router

`
        fs.writeFile(caminho, content, 'utf8', (err)=> {
            if (err) throw err
            console.log(`Arquivo ${route_name}Router.js criado com sucesso!`)
        })
    }
}