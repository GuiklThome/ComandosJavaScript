const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'

delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)