'use strict'

const path = require('path')
const fs = require('fs')

if (process.argv.length <= 2) {
    console.log('O comando make:model requer o parâmetro <model-name>.')
} else {
    let model_name = process.argv[2].toLowerCase()

    model_name = model_name.replace(/(^|\s|$)(?!de|do|d$)(.)/g, (geral, match1, match2) => match1 + match2.toUpperCase());

    let pattern = /^(?=.*?[A-Za-z])[A-Za-z+]+$/

    if (!pattern.test(model_name)) {
        console.log('O parâmetro <model-name> não aceita:')
        console.log('- Models com números no nome')
        console.log('- Models com caracteres especiais')
    } else {
        let caminho = './models/' + model_name + '.js'

        let content = `'use strict'

const sequelize = require('../database/database')

const ${model_name} = (sequelize, DataTypes) => {
    return sequelize.define('${model_name.toLowerCase()}s', {
        // config the attr for the especific model
    })
}
        
module.exports = ${model_name}

`
        fs.writeFile(caminho, content, 'utf8', (err)=> {
            if (err) throw err
            console.log(`Arquivo ${model_name}.js criado com sucesso!`)
        })
    }
}