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

module.exports = { a: { somar, subtrair }, b: outrasOperacoes }
