const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    pesp: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})

Object.defineProperties()