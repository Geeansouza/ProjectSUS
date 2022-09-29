//IMPORTAÇÃO DO MODULO DO SEQUELIZE
const Sequelize = require('sequelize')

/*
CRIAÇÃO DE UMA INSTANCIA DO SEQUELIZE E CONEXÃO COM O BANCO MYSQL
PARAMETROS DE CONEXÃO COM O BANCO DE DADOS
1 - NOME DO BANCO DE DADOS 
2 - USUARIO DO BANCO DE DADOS
3 - SENHA DO BANCO DE DADOS
4 - OBJETO JSON - DETERMINA AS CONFIGURAÇÕES DE USO DO BANCO DE DADOS:
4.1 - LOCAL DA INSTANCIA DO BANCO DE DADOS (LOCALHOST)
4.2 - TIPO DO BANCO DE DADOS (MYSQL)
4.3 - DEFINIÇÃO DO FUSO HORARIO DO BANCO DE DADOS
*/ 
const connection = new Sequelize(
    'dbhospital',
    'root',
    '12345678',
    {
        host:'localhost',
        dialect:'mysql',
        timezone:'-03:00'

    }
);
module.exports = connection;