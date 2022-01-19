const pessoa = {
    nome: 'ana',
    idade: 22,
    endereco: {
        longradouro: 'Rua ABC',
        numero: 780
    }
}

const { nome, idade } = pessoa
console.log(nome,idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome , bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { longradouro, numero, cep} } = pessoa
console.log(longradouro,numero,cep)
