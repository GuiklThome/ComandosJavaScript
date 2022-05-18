function getInteriroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opsao = 0

while (opsao != -1) {
    opsao = getInteriroAleatorioEntre(-1, 10)
    console.log(`Opsão escolhida foi ${opsao}`)
}

console.log('até a proxima')