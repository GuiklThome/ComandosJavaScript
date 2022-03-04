const nums = [1, 2, 3, 4, 5]

//for com propósito
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado , nums)

const soma10 = e => e + 10
const tripo = e => e * 3
const paraDiametro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`


resultado = nums.map(soma10).map(tripo).map(paraDiametro)
console.log(resultado)