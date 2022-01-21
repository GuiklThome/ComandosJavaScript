const sequencia = {
    _valor: 1, //conveção
    get valor() { return this._valor++ },
    set valor(valor){ 
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia._valor, sequencia._valor)
sequencia._valor = 1000
console.log(sequencia._valor, sequencia._valor)
sequencia._valor = 900
console.log(sequencia._valor, sequencia._valor)
