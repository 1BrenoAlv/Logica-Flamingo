let numero01 = 10
let numero02 = 20

alert(`${numero01} - ${numero02}`)
// let todoNumero = [numero01, numero02] // Maneira que nao foi ensinado ainda usando vetor
// numero01 = todoNumero[1]
// numero02 = todoNumero[0]

let numeroGuardado = numero01
numero01 = numero02
numero02 = numeroGuardado

alert(`${numero01} - ${numero02}`)
