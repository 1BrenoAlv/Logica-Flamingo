const soma = (a, b) => {
    return a + b
}
const subtracao = (a, b) => {
    return a - b
}
const multiplicacao = (a, b) => {
    return a * b
}
const divisao = (a, b) => {
    return a / b
}

let numero01 = document.getElementById('numero01')
let numero02 = document.getElementById('numero02')
let h2Resultado = document.getElementById('resultado')

const somar = (e) => {
    e.preventDefault()
    let n1 = parseInt(numero01.value)
    let n2 = parseInt(numero02.value)
    if (isNaN(n1) && isNaN(n2)) {
        h2Resultado.innerHTML = 'Preencha os campos para somar!!!'
        return
    }
    let resultadoFinal = soma(n1, n2)

    h2Resultado.innerHTML = `Resultado da soma é ${resultadoFinal}`
}

const subtrair = (e) => {
    e.preventDefault()
    let n1 = parseInt(numero01.value)
    let n2 = parseInt(numero02.value)
    if (isNaN(n1) && isNaN(n2)) {
        h2Resultado.innerHTML = 'Preencha os campos para subtrair!!!'
        return
    }
    let resultadoFinal = subtracao(n1, n2)

    h2Resultado.innerHTML = `Resultado da subtração é ${resultadoFinal}`
}
const multiplicar = (e) => {
    e.preventDefault()
    let n1 = parseInt(numero01.value)
    let n2 = parseInt(numero02.value)
    if (isNaN(n1) && isNaN(n2)) {
        h2Resultado.innerHTML = 'Preencha os campos para multiplicar!!!'
        return
    }
    let resultadoFinal = multiplicacao(n1, n2)

    h2Resultado.innerHTML = `Resultado da multiplicação é ${resultadoFinal}`
}
const dividir = (e) => {
    e.preventDefault()
    let n1 = parseInt(numero01.value)
    let n2 = parseInt(numero02.value)
    if (isNaN(n1) && isNaN(n2)) {
        h2Resultado.innerHTML = 'Preencha os campos para dividir!!!'
        return
    }
    let resultadoFinal = divisao(n1, n2)

    h2Resultado.innerHTML = `Resultado da divisão é ${resultadoFinal}`
}
