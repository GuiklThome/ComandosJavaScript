let valor //não inicializada
console.log(valor)

valor = null //ausência de valor
console.log(valor)
// console.log(valor.toString())  //Vai dar erro

const produto ={}
console.log(produto.preco)
console.log(produto)

produto.preco = 9.99
console.log(produto)

produto.preco = undefined  //evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)