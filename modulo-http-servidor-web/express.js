const http = require('http')
const { readFile } = require('fs')

const hostname = 'localhost'
const PORT = 9001

http
  .createServer((req, res) => {
    let url = req.url

    if (url === '/') {
      readFile(__dirname + '/index.html', 'utf8', (err, data) => {
        if (err) throw err
        else res.end(data)
      })
    } else if (url === '/signup') {
      res.write('Info your name:')
      res.end()
    }
  })
  .listen(PORT, hostname, () => {
    console.log(`servidor rodando! end: http://${hostname + ':' + PORT}`)
  })
