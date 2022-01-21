const notas = [8.8, 7.7, 8.3, 8.2, 4.4, 5.5]

//Sem callBack
let notasBaixas1 = []


for(let i in notas){
    if(notas[i] < 7)
    notasBaixas1.push(notas[i])
}
console.log(notasBaixas1)

//Com Callback
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

const notasMenorque7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorque7)
console.log(notasBaixas3)