const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1' //localhost
const PORT = process.env.PORT || 3000 //porta onde o projeto vai rodar

//criando um servidor
const server = http.createServer((req, res) => {
  let url = req.url

  if (url === '/') {
    if (fs.existsSync('../public/index.html')) {
      console.log('existe o path')
    } else {
      console.log('Não existe o path.')
    }

    fs.readFileSync('../public/index.html', (err, content) => {
      if (err) {
        throw err
      }

      res.statusCode = 200
      res.setHeader('Content-type', 'text/html; charset=utf-8')
      res.end(content)
    })
  } else if (url === '/sobre') {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/html; charset=utf-8')
    res.end('<h1> Página de sobre.</h1>')
  } else {
    res.statusCode = 404
    res.setHeader('Content-type', 'text/html; charset=utf-8')
    res.end('<h1> Error 404. página não encontrada.</h1>')
  }
})

//colocando o serivor pra rodar
server.listen(PORT, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${PORT}`)
})
