const express = require('express')
const app = express() // a variavel app vai receber tudo que tem dentro do modulo express

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
//dirname serve para dizer que o arquivo esta no diretorio da aplicação

app.get('/boasvindas/:nome/:cargo', (req, res) => {
  const nome = req.params.nome
  const cargo = req.params.cargo
  res.send(`Olá, ${cargo} ${nome}`)
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
