const http = require('http')

const hostname = 'localhost'
const PORT = 9001

http
  .createServer((req, res) => {
    let url = req.url

    if (url === '/') {
      res.write('Welcome to our page!')
      res.end()
    } else if (url === '/signup') {
      res.write('Info your name:')
      res.end()
    }
  })
  .listen(PORT, hostname, () => {
    console.log(`servidor rodando! end: http://${hostname + ':' + PORT}`)
  })
