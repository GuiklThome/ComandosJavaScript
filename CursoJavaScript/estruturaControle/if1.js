function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É VERDADE... ' + valor)
    }
}

seVerdadeEuFalo()
seVerdadeEuFalo(null)
seVerdadeEuFalo(undefined)
seVerdadeEuFalo(NaN)
seVerdadeEuFalo('')
seVerdadeEuFalo(0)
seVerdadeEuFalo(-1)
seVerdadeEuFalo(' ')
seVerdadeEuFalo('?')
seVerdadeEuFalo([])
seVerdadeEuFalo([1, 2])
seVerdadeEuFalo({})