'use strict'

const path = require('path')
const fs = require('fs')

if (process.argv.length <= 2) {
    console.log('O comando make:controller requer o parâmetro <controller-name>.')
} else {
    let controller_name = process.argv[2].toLowerCase()

    let pattern = /^(?=.*?[A-Za-z])[A-Za-z+]+$/

    if (controller_name.toLowerCase().indexOf("controller") != -1 || controller_name.toLowerCase().indexOf("controlle") != -1 || !pattern.test(controller_name)) {
        console.log('O parâmetro <controller-name> não aceita:')
        console.log('- O nome Controller ou Controlle no parâmetro')
        console.log('- Controller com números no nome')
        console.log('- Controller com caracteres especiais')
    } else {
        let caminho = './controllers/' + controller_name + 'Controller.js'

        let content = `'use strict'

const path = require('path')
const sequelize = require('../database/database')
// import an especific model of this controller

exports.methodExample = (req, res) => {
    res.json({ method: 'Hello from ${controller_name} method!' })
}

`
        fs.writeFile(caminho, content, 'utf8', (err)=> {
            if (err) throw err
            console.log(`Arquivo ${controller_name}Controller.js criado com sucesso!`)
        })
    }
}