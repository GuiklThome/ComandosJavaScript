const alunos = [
    { nome: 'João', nota: 7.5 , bolsista: false},
    { nome: 'Maria', nota: 9.5 , bolsista: true},
    { nome: 'Pedro', nota: 9.8 , bolsista: false},
    { nome: 'Ana', nota: 8.1 , bolsista: true}
]

const todosBolsistas = (resultado , bolsistas) => resultado && bolsistas
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


const algumBolsistas = (resultado , bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))