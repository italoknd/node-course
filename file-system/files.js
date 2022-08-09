const fs = require('fs')

//CRIAR ARQUIVOS
//writeFile()             SUBSTITUI o arquivo e o conteudo CASO EXISTA, SE NÃO EXISTE ELE CRIA UM NOVO arquivo com o conteúdo que você passar

//appendChild()           adiciona conteudo num arquivo, se o arquivo nao existir, ele cria

//CRIANDO ARQUIVOS SEM VERIFICAR SE ELE JA EXISTE
// fs.writeFile('teste.txt', 'Olá Mundo!', err => {
//   if (err) {
//     throw err
//   }

//   console.log('Arquivo criado com sucesso!')
// })

// fs.writeFile('teste.html', '<h1> Teste</h1>', err => {
//   if (err) {
//     throw err
//   }

//   console.log('Arquivo criado com sucesso!')
// })

//VERFICANDO SE ARQUIVO JA EXISTE ANTES DE CRIAR
// if (!fs.existsSync('teste.txt')) {
//   fs.writeFile('teste.txt', 'Teste de conteúdo', err => {
//     if (err) {
//       throw err
//     }

//     console.log('Arquivo criado com sucesso!')
//   })
// }

//ADICIONANDO CONTEÚDO A UM ARQUIVO JA EXISTENTE
// fs.appendFile('teste.txt', ' \nconteúdo adicionado', err =>{
//   if(err){
//     throw err
//   }

//   console.log("Conteúdo adicionado.");
// })

//RENOMEANDO ARQUIVO SEM VERIFICAR SE ELE JÁ EXISTE
// fs.rename('./teste2.txt', './teste3.txt', err => {
//   if (err) {
//     throw err
//   }
//   console.log('Arquivo renomeado com sucesso!')
// })

//RENOMEANDO ARQUIVO DEPOIS DE VERIFICAR SE ELE JÁ EXISTE
// if(fs.existsSync('./teste3.txt')){
//   fs.rename('teste3.txt', 'text4.txt', err =>{
//     if(err){
//       throw err
//     }

//     console.log("Arquivo renomeado com sucesso.");
//   })
// }else{
//   console.log("Arquivo informado é inexistente.");
// }

//EXCLUINDO ARQUIVO
// fs.unlink('text4.txt', err => {
//   if (err) {
//     throw err
//   }

//   console.log('Arquivo excluído com sucesso!')
// })

//VERIFICANDO ANTES SE O ARQUIVO EXISTE ANTES DE DELETAR
if(fs.existsSync('./text4.txt')){
  fs.unlink('./text4.txt', err =>{
    if(err){
      throw err
    }

    console.log("Arquivo excluído com sucesso!");
  })
}else{
  console.log("Arquivo informado não existe!");
}