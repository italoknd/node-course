//maneira mais recente de importação
import {
  somar,
  subtrair,
  outrasOperacoes,
  calcularPotencia,
  userInfos
} from './modules/calculadora.js'
//<<<< importante colocar a extensão js (?)

console.log(somar(2, 5))
console.log(subtrair(2, 5))
console.log(outrasOperacoes.mult(2, 5))
console.log(outrasOperacoes.divisao(2, 5))

console.log(calcularPotencia(5, 2))

console.log(
  (userInfos.nome = 'Italo'),
  (userInfos.sobrenome = 'Pedroza'),
  (userInfos.idade = 22),
  (userInfos.sexo = 'M')
)

//maneira comum de importação (commonjs)
// const calc = require('./modules/calculadora')

// console.log(calc.a.somar(2, 2))
// console.log(calc.a.subtrair(15, 6.5))
// console.log(calc.b.mult(2, 5))
// console.log(calc.b.divisao(2, 2))
