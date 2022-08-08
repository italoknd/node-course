function somar(a, b) {
  return a + b
}

function subtrair(a, b) {
  return a - b
}

const outrasOperacoes = {
  mult: function (a, b) {
    return a * b
  },
  divisao: function (a, b) {
    return a / b
  }
}

//maneira comum de exportação (commomjs)
//module.exports = { a: { somar, subtrair }, b: outrasOperacoes }

//maneira mais recente de exportação
export { somar, subtrair, outrasOperacoes }

/************** OUTRA MANEIRA DE EXPORTAR MÓDULOS ******************/
export const calcularPotencia = function (a, b) {
  return a ** b
}

export const userInfos = {
  nome: '',
  sobrenome: '',
  idade: null,
  sexo: ''
}
