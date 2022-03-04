const alunos = [
    { nome: 'João', nota: 7.5 , bolsista: false},
    { nome: 'Maria', nota: 9.5 , bolsista: true},
    { nome: 'Pedro', nota: 9.8 , bolsista: false},
    { nome: 'Ana', nota: 8.1 , bolsista: true}
]
console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)