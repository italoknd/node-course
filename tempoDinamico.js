const data_postagem = '2022-08-07 23:50'
const data_atual = '2022-08-07 23:59'

//calcular minutos
const calculo = new Date(data_atual) - new Date(data_postagem)
const minutos_convertidos = calculo / 1000 / 60

let horas
let dias
let meses
let anos

//calcular horas
if (minutos_convertidos / 60 > 0) {
  horas = parseInt(minutos_convertidos / 60)
}

//calcular dias
if (horas > 23) {
  dias = parseInt(horas / 24)
}

function tempoPassado() {
  if (dias >= 1) {
    dias == 1
      ? console.log(`Enviado há ${dias} dia.`)
      : console.log(`Enviado há ${dias} dias.`)
  } else if (minutos_convertidos >= 60) {
    horas == 1
      ? console.log(`Enviado há ${horas} hora.`)
      : console.log(`Enviado há ${horas} horas.`)
  } else {
    console.log(`Enviado há ${minutos_convertidos} minutos.`)
  }
}

tempoPassado()