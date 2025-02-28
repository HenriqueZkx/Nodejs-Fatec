const { type } = require('os')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('exemplo', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.autheticate().then(function(){
    console.log('conectado com sucesso')
}).catch(function(erro){
    console.log('falha ao se conectar: '+erro)
})

const Agendamentos = sequelize.define('agendamentos',{
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    cpf: {
        type: Sequelize.STRING
    }
})

Agendamentos.create({
    nome: 'Henrique de Moraes',
    email: 'henrique.rodrigues34@fatec.sp.gov.br',
    telefone: '11981095380',
    cpf: '1234567'
})