//Função sem retorno
function imprimindoSoma(a , b ){
    console.log(a + b)
}

imprimindoSoma(2,3)
imprimindoSoma(2)
imprimindoSoma(2,4,4,8,9,1) //Pega os dois primeiros somente
imprimindoSoma()

//função com retorno
function soma (a, b = 0){
    return a + b
}

console.log(`\n ${soma(2,3)}`)
console.log(soma(2))

