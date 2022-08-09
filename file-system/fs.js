const fs = require('fs')

//fs.existsSync()                 PARA VERIFICAR SE UMA PASTA EXISTE
//fs.mkdirSync()                  PARA CRIAR UMA PASTA
//fs.rmdir()                      PARA DELETAR UMA PASTA
//fs.renameSync()                 PARA RENOMEAR UMA PASTA

//CRIANDO UMA PASTA
// if (!fs.existsSync('./public')) {
//   fs.mkdirSync('./public', err => {
//     if (err) {
//       throw err
//     }

//     console.log('Pasta criada com sucesso!')
//   })
// } else {
//   console.log('A pasta já existe!')
// }

//FORMA MAIS SIMPLIFICADA DO CÓDIGO ACIMA
// fs.existsSync('./public') || fs.mkdirSync('./public')

//RENOMEANDO UMA PASTA APÓS VERIFICAR SE A MESMA EXISTE
// if (fs.existsSync('./public')) {
//   fs.renameSync('./public', './italo', err => {
//     if (err) {
//       throw err
//     }
//     console.log('Pasta renomeada com sucesso!')
//   })
// } else {
//   console.log('A pasta em questão não existe!')
// }

//RENOMEAR SEM VERIFICAR SE A PASTA JÁ EXISTE
// fs.renameSync('./italo', './public', err => {
// if (err) {
// throw err
// }
// })
//

//DELETAR UMA PASTA VERIFICANDO SE ELA EXISTE ANTES:
// if (fs.existsSync('./public')) {
// fs.rmdir('./public', err => {
// if (err) {
// throw err
// }
// console.log('Pasta deletada com sucesso!')
// })
// } else {
// console.log('A pasta em questão não existe!')
// }

//DELETAR PASTA SEM VERIFICAÇÃO
// fs.rmdir('./public', err => {
//   if (err) {
//     throw err
//   }
// })

//DELETAR PASTA COM TODO O SEU CONTEÚDO DENTRO.
// fs.rmdir('./public', {recursive: true}, (err)=>{
//   if(err){
//     throw err
//   }
// })
