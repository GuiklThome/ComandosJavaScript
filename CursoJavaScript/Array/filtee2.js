Array.prototype.filter2= function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i , this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'NoteBook', preco: 1999 , fragil: true},
    { nome: 'Ipad Pro', preco: 3000 , fragil: true},
    { nome: 'Copo de Vidro', preco: 19.99, fragil: true},
    { nome: 'Copo de Plastico', preco: 1.99 , fragil: false}
]


const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))