function ex01() {
    const idade = Number(prompt("Digite sua idade"))
    const resultado = idade >= 16 ? "Pode entrar" : "Não pode entrar"
    alert(resultado)
}

function ex02() {
    const idade = Number(prompt("Digite sua idade"))
    const resultado = idade >= 18 ? "Maior de idade" : "Menor de idade"
    alert(resultado)
}

function ex03() {
    const n1 = Number(prompt("Digite o primeiro número"))
    const n2 = Number(prompt("Digite o segundo número"))
    const resultado = n1 === n2 ? "São iguais" : "Não são iguais"
    alert(resultado)
}

function ex04() {
    const idade1 = Number(prompt("Idade da primeira pessoa"))
    const idade2 = Number(prompt("Idade da segunda pessoa"))
    const resultado = idade1 > idade2 ? "Pessoa 1 é mais velha"
        : idade2 > idade1 ? "Pessoa 2 é mais velha"
            : "Têm a mesma idade"
    alert(resultado)
}

function ex05() {
    const idade = Number(prompt("Digite sua idade"))
    const resultado = idade >= 18 ? "Pode tirar habilitação" : "Não pode tirar habilitação"
    alert(resultado)
}

function ex06() {
    const peso = Number(prompt("Digite o peso (kg)"))
    const altura = Number(prompt("Digite a altura (m)"))
    const imc = peso / (altura * altura)

    const msg = imc < 18.5 ? "Abaixo do peso"
        : imc < 25 ? "Peso normal"
            : imc < 30 ? "Sobrepeso"
                : "Obesidade"

    alert(`IMC: ${imc.toFixed(1)} - ${msg}`)
}

function ex07() {
    const numero = Number(prompt("Digite um número"))
    const resultado = numero > 0 ? "Positivo"
        : numero < 0 ? "Negativo"
            : "Zero"
    alert(resultado)
}

function ex08() {
    const nota = Number(prompt("Digite a nota final"))
    const resultado = nota >= 60 ? "Aprovado" : "Reprovado"
    alert(resultado)
}

function ex09() {
    const hora = Number(prompt("Digite a hora (0-23)"))
    const periodo = hora >= 5 && hora <= 11 ? "Manhã"
        : hora >= 12 && hora <= 17 ? "Tarde"
            : hora >= 18 && hora <= 23 ? "Noite"
                : "Madrugada"
    alert(periodo)
}

function ex10() {
    const numero = Number(prompt("Digite um número"))
    const resultado = numero % 2 === 0 ? "Par" : "Ímpar"
    alert(resultado)
}

function ex11() {
    const valor = Number(prompt("Valor total da compra"))
    const codigo = prompt("Código de desconto").toUpperCase()
    const final = codigo === "DESC10" ? valor * 0.9 : valor

    const formatado = final.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    alert(`Valor final: ${formatado}`)
}

function ex12() {
    const palavra = prompt("Digite uma palavra")
    const msg = palavra === "JavaScript" ? "Você escolheu a linguagem correta!" : "Escolha outra linguagem"
    alert(msg)
}

function ex13() {
    const nome = prompt("Digite um nome")
    const resultado = nome.length > 5 ? "Nome longo" : "Nome curto"
    alert(resultado)
}

function ex14() {
    const temp = Number(prompt("Digite a temperatura em Celsius"))
    const clima = temp < 15 ? "Frio"
        : temp <= 25 ? "Agradável"
            : "Quente"
    alert(clima)
}

function ex15() {
    const nota = Number(prompt("Digite a nota (0-10)"))
    const classif = nota >= 9 ? "Excelente"
        : nota >= 7 ? "Bom"
            : nota >= 5 ? "Regular"
                : "Insuficiente"
    alert(classif)
}

function ex16() {
    const idade = Number(prompt("Digite sua idade"))
    const br = idade >= 18 ? "Sim" : "Não"
    const eua = idade >= 21 ? "Sim" : "Não"
    alert(`Maior no Brasil? ${br}\nMaior nos EUA? ${eua}`)
}

function ex17() {
    const temp = Number(prompt("Digite a temperatura"))
    const unidade = prompt("Digite a unidade atual (C ou F)").toUpperCase()

    const convertido = unidade === "C" ? (temp * 9 / 5) + 32
        : unidade === "F" ? (temp - 32) * 5 / 9
            : null

    const msg = converted !== null ? `Convertido: ${convertido.toFixed(1)}` : "Unidade inválida"
    alert(msg)
}

function ex18() {
    const letra = prompt("Digite uma letra")
    const tipo = letra === letra.toUpperCase() ? "Maiúscula" : "Minúscula"
    alert(tipo)
}

function ex19() {
    const n1 = Number(prompt("Nota 1"))
    const n2 = Number(prompt("Nota 2"))
    const n3 = Number(prompt("Nota 3"))
    const media = (n1 + n2 + n3) / 3

    const status = media >= 6 ? "Aprovado" : "Reprovado"
    alert(`Média: ${media.toFixed(1)} - ${status}`)
}

function ex20() {
    const preco = Number(prompt("Preço do produto"))
    const classif = preco < 20 ? "Barato"
        : preco <= 100 ? "Médio"
            : "Caro"
    alert(classif)
}

const buttons = [
    ex01, ex02, ex03, ex04, ex05, ex06, ex07, ex08, ex09, ex10,
    ex11, ex12, ex13, ex14, ex15, ex16, ex17, ex18, ex19, ex20
]

buttons.forEach((fn, index) => {
    const id = `btn-${String(index + 1).padStart(2, '0')}`
    const btn = document.getElementById(id)
    if (btn) btn.addEventListener("click", fn)
})