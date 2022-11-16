const { readFile } = require('fs')

const getText = path => {
  return new Promise((res, rej) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) rej(err)
      else res(data)
    })
  })
}

const start = async () => {
  const first = await getText(__dirname + '/index.html')
  try {
    console.log(first)
  } catch (err) {
    console.log(err)
  }
}

console.log(start())

// getText(__dirname + '/index.html')
// .then(res => console.log(res)
// .catch(err => console.log(err)
// )
