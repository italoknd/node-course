const num1 = 10
const num2 = 20

function sum() {
  console.log(`The sum is equal to: ${num1 + num2}`)
}

function sub() {
  console.log(`The subtraction is equal to: ${num1 - num2}`)
}

const person = {
  name: 'Italo',
  age: 22
}

const address = {
  street: 'Rua 10',
  district: 'Nova cidade'
}

module.exports = { person, address }
sum()
sub()
