class carro {

    Modelo;
    Cor;

    constructor(modelo, cor) {
        this.Modelo = modelo;
        this.Cor = cor;
    }

    apresetar() {
        console.log(`Carro: ${this.Modelo}\nCor: ${this.Cor}\n`)
    }
}
const listaCarros = []
const carro1 = new carro("Corolla", "Preto")
const carro2 = new carro("Celta", "Vermelha")
const carro3 = new carro("Astra", "Branca")

listaCarros.push(carro1)
listaCarros.push(carro2)
listaCarros.push(carro3)

console.log("Carros Estacionados no Bigodes Vagas!")

for (let carros of listaCarros) {
    carros.apresetar()
}

