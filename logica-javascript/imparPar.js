let numero = parseInt(prompt("Digite um numero"))

if(numero % 2 == 0)
    alert(`o número ${numero} é par`)
else
    alert(`o número ${numero} é ímpar`)


function fatorial(n) {
  if (n == 1) 
    return 1
  
  return n * fatorial(n -1)
}

const soma = fatorial(5)

alert(soma)  // Calculando fatorial usando recursividade
