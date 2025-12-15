function ex01() {
  const valor = Number(prompt("Digite um valor numérico"))
  const formatado = valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
  alert(`Valor em reais: ${formatado}`)
}

function ex02() {
  const texto = prompt("Digite uma frase ou palavra")
  alert(texto.toUpperCase())
}

function ex03() {
  const texto = prompt("Digite uma frase ou palavra")
  alert(texto.toLowerCase())
}

function ex04() {
  const nome = prompt("Digite seu nome completo")
  const total = nome.replace(/ /g, "").length
  alert(`Total de letras (sem espaços): ${total}`)
}

function ex05() {
  const resultado = 10 / 3
  alert(`10 dividido por 3: ${resultado.toFixed(2).replace(".", ",")}`)
}

function ex06() {
  const nome = prompt("Digite seu primeiro nome")
  const maiusculo = nome.toUpperCase()
  const letras = nome.length
  alert(`Nome: ${maiusculo}\nQuantidade de letras: ${letras}`)
}

function ex07() {
  const valores = [
    Number(prompt("Digite o valor 1")),
    Number(prompt("Digite o valor 2")),
    Number(prompt("Digite o valor 3"))
  ]
  
  const soma = valores.reduce((acc, atual) => acc + atual, 0)
  const media = soma / valores.length
  const formatado = media.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
  
  alert(`Média formatada: ${formatado}`)
}

document.getElementById("btn-01").addEventListener("click", ex01)
document.getElementById("btn-02").addEventListener("click", ex02)
document.getElementById("btn-03").addEventListener("click", ex03)
document.getElementById("btn-04").addEventListener("click", ex04)
document.getElementById("btn-05").addEventListener("click", ex05)
document.getElementById("btn-06").addEventListener("click", ex06)
document.getElementById("btn-07").addEventListener("click", ex07)