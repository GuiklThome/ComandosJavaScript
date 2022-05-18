function getInteriroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opsao = -1

do {
    opsao = getInteriroAleatorioEntre(-1, 10)
    console.log(`Opsão escolhida foi ${opsao}`)
} while (opsao != -1)

console.log('até a proxima')