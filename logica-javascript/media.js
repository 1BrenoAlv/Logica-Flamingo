let numero1 = Number(prompt("Digite uma nota:"))
let numero2 = Number(prompt("Digite uma nota:"))
let numero3 = Number(prompt("Digite uma nota:"))
let numero4 = Number(prompt("Digite uma nota:"))

let resultado = [numero1,numero2,numero3,numero4]
let soma = 0
for(let i = 0; i < resultado.length; i++){
    soma += resultado[i]
}

let media = soma / resultado.length

if(media < 6)
    alert("Reprovado(a)")
else
    alert("Aprovado(a)")

alert(`Sua media é ${media}`)