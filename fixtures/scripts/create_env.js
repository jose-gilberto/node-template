'use strict'

const fs = require('fs')
const path = require('path')

let content = '# APP CONFIG \r\n'
content += '# As configurações aqui listadas são somente para desenvolvimento, altere-as conforme a documentação \r\n'
content += '# Dependendo do seu ambiente de desenvolvimento as configurações podem mudar, consulte a documentação \r\n'
content += '\r\n# Configurações da aplicação \r\n'
content += "APP='nome_aplicacao' \r\n"
content += "APP_ENV='dev' \r\n"
content += "APP_PORT=8080 \r\n"
content += "\r\n# Configurações do banco de dados \r\n"
content += "DB_HOST='localhost' \r\n"
content += "DB_PORT=5432 \r\n"
content += "DB_TYPE='postgres'\r\n"
content += "DB_DATABASE='node' \r\n"
content += "DB_USER='postgres' \r\n"
content += "DB_PASSWD='postgres' \r\n"

fs.writeFile('./config/.env', content, 'utf8', (err)=> {
    if (err) throw err
    console.log('Arquivo de configurações criado com sucesso!')
})