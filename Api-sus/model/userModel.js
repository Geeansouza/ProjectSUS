//IMPORTAÇÃO DO SEQUELIZE
const Sequelize = require('sequelize');

//IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS
const connection = require('../database/database');

/*
REPRESENTAÇÃO DO MODELO DE DADOS tbl_livro
PARAMETROS DO MÉTODO define:
1 - NOME DA TABELA
2 - OBJETO JSON CONTENDO:
                        NOME DO CAMPO
                        TIPO DE DADO
                        REGRAS DO CAMPO

*/
const userModel = connection.define(
    'tbl_paciente',
    {
        cod_paciente:{
            type: Sequelize.INTEGER(10),
            primaryKey:true,
            autoIncrement:true
        },
        nome_paciente:{
            type: Sequelize.STRING(500),
            allowNull:true
        },
        telefone_paciente:{
            type: Sequelize.STRING(10),
            allowNull:true
        },
        celular_paciente:{
            type: Sequelize.STRING(11),
            allowNull:true
        },
        email_paciente:{
            type: Sequelize.STRING(100),
            allowNull:true
        },
        nome_responsavelx:{
            type: Sequelize.STRING(500),
            allowNull:false
        },
        telefone_responsavelx:{
            type: Sequelize.STRING(10),
            allowNull:false
        }
    }
);
// LivroModel.sync({force:true});

module.exports = LivroModel;