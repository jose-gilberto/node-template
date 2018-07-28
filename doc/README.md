
# Node-Template

Estrutura de arquivos baseadas em um template para Node, Express e Sequelize.

## Instalação

1. Clone o repositório com o comando `git clone https://github.com/jose-gilberto/node-template`
2. Instale as dependências usando o `npm install`
3. Execute o comando `npm run make:env` para criar o arquivo de configuração da aplicação
4. Altere o arquivo `.env` localizado na pasta config com suas variáveis de ambiente
5. Execute o comando `npm run start` para iniciar a aplicação
6. Acesse: http://localhost:8080

## Issues
Para reportar uma Issue basta acessar o link https://github.com/jose-gilberto/node-template/issues e clicar em New Issue.

As Issues serão resolvidas conforme a ordem e a urgência.

## Ferramentas

### Node-TCLI

No node-template pode-se usar de scripts para criar Rotas, Models e Controllers mais facilmente. Além de, poder criar o arquivo .env nos padrões pré-definidos do projeto.

#### Criação do `.env`

Para criar o arquivo `.env` de sua aplicação basta seguir os seguintes passos:  
Execute o comando `npm run make:env`  
Agora basta alterar o arquivo que foi criado dentro da pasta `config/.env` com as suas variáveis de ambiente.

#### Criação de Models

Para criar uma model basta seguir os seguintes passos:  
Execute o comando `npm run make:model <model-name>`  
No lugar do parâmetro `<model-name>` basta passar o nome da sua Model, lembrando que:  
* O nome da model não pode conter números;
* Não pode conter caracteres especiais;
* Não pode conter espaços nem nada além de letras.


Agora basta configurar sua model localizada na pasta `models`, utilizando o Sequelize, pode-se definir os atributos dela no JSON especificado pelo comentário.

#### Criação de Controllers

Para cria um controller basta seguir os seguintes passos:  
Execute o comando `npm run make:controller <controller-name>`  
No lugar do parâmetro `<controller-name>` basta passar o nome do seu Controller, lembrando que:  
* O nome da controller não pode conter a palavra Controller ou Controlle;
* Não pode conter caracteres especiais;
* Não pode conter espaços nem nada além de letras.


Agora basta configurar seu Controller na pasta `controllers`, utilizando o Sequelize para importar suas models e definindo novas funções.

#### Criação de Routers

Para criar um Router basta seguir os seguintes passos:  
Execute o comando `npm run make:router <router-name>`  
No lugar do parâmetro `<router-name>` basta passar o nome do seu Router, lembrando que:  
* O nome do Router não pode conter a palavra Router ou Route;
* Não pode conter caracteres especiais;
* Não pode conter espaços nem nada além de letras.


Agora basta configurar seu Router na pasta `Router` com as rotas, importando sua controller para utilizar as funções.

## Esqueleto da aplicação

### Bin
Nesta pasta estão todos os arquivos essênciais para o start da aplicação.

### Config
Nesta pasta estão todas as configurações nescessárias para rodar a aplicação, tais como app_name, porta, dados do banco e chaves de segurança.

### Controllers
Nesta pasta estão os controladores, que por sua vez fazem o intermédio das chamadas de funções das Model e as rotas. Por exemplo, a rota x precisa chamar a função y da model z. Quem realiza esse trabalho é o Controller.

### Database
Nesta pasta estão todos os arquivos de conexão com banco de dados.

### Doc
Nesta pasta se encontra toda a documentação detalhada da aplicação, bem como, instação, requerimentos, recursos e ferramentas.

### Fixtures
Nesta pasta estão os arquivos que vizam solucionar problemas específicos da aplicação.

### Middlewares
Nesta pasta estão todos os middlewares utilizados na aplicação.

### Models
Nesta pasta estão todas as Models, ou seja, todas as entidades que são referenciadas do banco de dados e podem ser utilizadas na aplicação, tanto por Controllers como por qualquer outro arquivo.

### Routes
Nesta pasta estão todas as Rotas da aplicação, todo mapeamento dividido em arquivos específicos separando as rotas por recursos ou entidades.

### Tests
Nesta pasta estão todos os tests referentes a qualquer arquivo da aplicação, tanto para APIs quanto para arquivos diversos que necessitam de testes automatizados.