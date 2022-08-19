const express = require('express')
const app = express() // a variavel app vai receber tudo que tem dentro do modulo express

const PORT = process.env.PORT || 3000 

app.get('/', (req, res)=>{
  res.sendFile(__dirname + './public/index.html')
})

app.listen(PORT, ()=>{
  console.log(`Servidor rodando em http://localhost:${PORT}`)
});