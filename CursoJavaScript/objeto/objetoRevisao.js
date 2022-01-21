const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 29999.99,
    proprietarios: {
        nome:'Raul',
        idade: 56,
        endereco: {
            longradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome:'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
    }
}

carro.proprietarios.endereco.numero = 1000
carro['proprietarios']['endereco']['longradouro']
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)

