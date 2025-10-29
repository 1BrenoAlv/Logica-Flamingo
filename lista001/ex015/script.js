let opcao = parseInt(prompt("Digite um valor para calcular a area de figuras\n1-Quadrado\t2-Retangulo\t3-Triangulo"))

switch(opcao){
    case 1: let lado = parseInt(prompt("Digite o lado do quadrado"))
    alert(quadrado(lado))
    break
    case 2:  let hRetangulo = parseInt(prompt("Digite a hipotenusa retangulo"))
    let bRetangulo = parseInt(prompt("Digite a base do retangulo"))
    alert(retangulo(hRetangulo,bRetangulo))
    break
    case 3:  let hTriangulo = parseInt(prompt("Digite a hipotenusa triangulo"))
    let bTriangulo = parseInt(prompt("Digite a base do triangulo"))
    alert(triangulo(hTriangulo,bTriangulo))
}

function quadrado(l){
    return `A area do quadrado é ${Math.pow(l, 2)}`
}
function retangulo(h,b){
    if(h == b)
        alert("FALHA")
    return `A area do retangulo é ${b*h}`
}
function triangulo(b,h){
     if(h == b)
        alert("FALHA")
    return `A area do triangulo é ${b*h/2}`
}