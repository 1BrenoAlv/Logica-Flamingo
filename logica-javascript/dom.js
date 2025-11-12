let trocarCor = document.getElementById('bg-dom')
let corTrocada = document.getElementById('bg-color')

trocarCor.addEventListener('input', function () {
    const novaCor = trocarCor.value

    corTrocada.style.backgroundColor = novaCor
})


const botao = document.querySelector("#botao")
const texto = document.querySelector("#texto-mudar")



function trocaTexto() {
    if (texto.innerText == "CRICAR") {
        texto.innerText = "CRICOU"
        return
    }else{
        texto.innerText = "DESCRICAR"

    }
    texto.innerText = "Mudar"
}

botao.addEventListener("click", trocaTexto)

const chamarFuncao = () => {
    alert('1º função')
    segundaFuncao()
}

function segundaFuncao() {
    alert('2º função')
    terceiraFuncao()
}

const terceiraFuncao = function () {
    alert('3º função')
}


