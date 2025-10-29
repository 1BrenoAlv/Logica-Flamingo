let numero = parseInt(prompt("Digite um numero para ver a tabuada"))
let i = 1, tabuada = 0
do{
    tabuada = numero * i
    console.log(`${numero} x ${i} = ${tabuada}`)
    alert(`${numero} x ${i} = ${tabuada}`)
    i++
}while(i < 11)