const peso1 = 1.0
const peso2 = Number('2.0')


console.log(peso1,peso2)
console.log(Number.isInteger(peso1))   //Se passado no peso1 = 1.1 o retorno seria false
console.log(Number.isInteger(peso2))   //Se passado no peso2 = 2.1 o retorno seria false

const avalicao1 = 9.898
const avalicao2 = 4.878

const total = avalicao1 * peso1 + avalicao2 *peso2
const media = total / (peso1 + peso2)

console.log('Valor total  => ' + total)
console.log('Media do valor  => ' + media)

console.log(media.toFixed(2))          //toFixed definir o numero de casas decimais a exibir
console.log(media.toString(2))         //em binário

console.log(typeof media)
console.log(typeof Number)