let content = `'use strict'
`

const path = require('path')
const fs = require('fs')


if (process.argv.length <= 2) {
    console.log('O comando make:route requer o parâmetro <route-name>.')
} else {
    let route_name = process.argv[2].toLowerCase()
    if (route_name.toLowerCase().indexOf("route") != -1 || route_name.toLowerCase().indexOf("router") != -1) {
        console.log('O parâmetro <route-name> não aceita:')
        console.log('- Rotas com números no nome')
        console.log('- O nome Route ou Router no parâmetro')
        console.log('- Rotas com caracteres especiais')
    } else {
        let pattern = /^(?=.*?[A-Za-z])[A-Za-z+]+$/
        if (pattern.test(route_name)) {
            let caminho = './routes/' + route_name + 'Router.js'

            fs.writeFile(caminho, 'let msg = "ola"', 'utf8', (err)=> {
                if (err) throw err
                console.log(`Arquivo ${route_name}Router.js criado com sucesso!`)
            })
        } else {
            console.log('O parâmetro <route-name> não aceita:')
            console.log('- Rotas com números no nome')
            console.log('- O nome Route ou Router no parâmetro')
            console.log('- Rotas com caracteres especiais')
        }
    }
}
console.log()