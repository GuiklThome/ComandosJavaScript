//Formal literal
function fun1(){ }

//Armazenar em uma variavel
const fun2 = function (){ }

//Armazenar em Array
const array = [function(a, b){ return a + b}, fun1, fun2]
console.log(array[0](2, 3))

const obj = {}
obj.falar = function (){ return 'Opa'}
console.log(obj.falar())

//passar função como parametro
function run(fun){
    fun()
}

run(function(){ console.log('Executando...')})

//Um função pode retornar/conter um funçao
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)