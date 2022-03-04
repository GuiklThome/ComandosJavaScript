const pilotos = ['Vetel', 'Alonso', 'Raikkonen' , 'Masssa']

pilotos.pop() //massa quebrou o carro
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //Remove primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona no inicio do Array
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) //Novo Array
console.log(algunsPilotos)
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
