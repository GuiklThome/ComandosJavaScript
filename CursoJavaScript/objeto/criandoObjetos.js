//usando a notação literal

const obj1 = {}
    console.log(obj1)

//Objct em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome

    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    } 
}

const p1 = new Produto('Caneta', 7.99,  0.1)
const p2 = new Produto('NoteBook', 2999,  0.25)
console.log(p1.getPrecoComDesconto(),' E ', p2.getPrecoComDesconto())

//Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7890, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), ' E ', f2.getSalario())


