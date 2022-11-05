const Sequelize = require('sequelize')
const sequelize = new Sequelize(
  'sistemaDeCadastro',
  'root',
  'Italo@kennedy2021',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
)

//testar conexão com o banco

// sequelize.authenticate().then(_ =>{
//   console.log("Sucesso ao relizar conexão com o banco! ");
// }).catch(_ =>{
//   console.log("Erro ao relizar conexão com o banco: ");
// })

//criando uma tabela (sequelize model) com o sequelize
const Usuarios = sequelize.define('usuarios', {
  nome: {
    type: Sequelize.STRING //TEM LIMITE DE TAMANHO
  },
  idade: {
    type: Sequelize.STRING //NÃO TEM LIMITE DE TAMANHO
  }
})
