'use strict'

const fs = require('fs')
const path = require('path')

let content = `# APP CONFIG 
# As configurações aqui listadas são somente para desenvolvimento, altere-as conforme a documentação 
# Dependendo do seu ambiente de desenvolvimento as configurações podem mudar, consulte a documentação 
# Configurações da aplicação
APP=Node-Template
APP_ENV=dev
APP_PORT=8080
# Configurações do banco de dados
DB_HOST=localhost
DB_PORT=5432
DB_TYPE=postgres
DB_DATABASE=homestead
DB_USER=postgres
DB_PASSWD=secret
`

fs.writeFile('./config/.env', content, 'utf8', (err)=> {
    if (err) throw err
    console.log('Arquivo de configurações criado com sucesso!')
})