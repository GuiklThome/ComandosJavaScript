const produtos = [
    { nome: 'NoteBook', preco: 1999 , fragil: true},
    { nome: 'Ipad Pro', preco: 3000 , fragil: true},
    { nome: 'Copo de Vidro', preco: 19.99, fragil: true},
    { nome: 'Copo de Plastico', preco: 1.99 , fragil: false}
]

console.log(produtos.filter(function(p){
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))