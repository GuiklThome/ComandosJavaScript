const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 10.45}',
    '{"nome": "Kit Lapis", "preco": 1.45}',
    '{"nome": "Caneta", "preco": 6.45}' 
]
    
const paraObjeto  = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)