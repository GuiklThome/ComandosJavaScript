const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 240
}

console.log(ferrari.__photo__)
console.log(ferrari.__photo__ === Object.prototype)
console.log(volvo.__photo__ === Object.prototype)
console.log(Object.prototype.__photo__)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)