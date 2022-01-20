const escola = 'cod3r'

console.log(escola.charAt(4))     //ira retornar a letra R
console.log(escola.charAt(5))     //Ira retornar um valor vazio
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))  //verifica se possui o numero e retorna a posicao

console.log(escola.substring(1)) //Apartir da posição indicada retorne o resto da string
console.log(escola.substring(0, 3 )) //do primeiro ate o desejado não incluindo o numero 3 ou desejado


console.log('Escola '.concat(escola).concat('!!!'))
console.log('Escola ' + escola + '!!!')
console.log(escola.replace(3,'e'))  //substitui o 3 por e


console.log('Ana,Maria,Pedro'.split(',')) //Está criado um arrey e o parametro é a ',' QUE FOI POSTO