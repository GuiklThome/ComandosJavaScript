const notas = [6.7, 7.7, 6.6, 8.4, 9.9, 5.5]

for (let i in notas) {
    console.log("Indice => " + i + " Notas = ", notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atricuto in pessoa) {
    console.log(`${atricuto} = ${pessoa[atricuto]}`)
}