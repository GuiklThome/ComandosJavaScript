const valores = [7.7, 8.9, 6.3, 9.9]
console.log(valores[0],`E`, valores[3])
console.log(`\n ${valores[0]} E ${valores[3]}`)
console.log(valores[4])

valores [4] = 10
console.log(valores[4])
console.log(valores)
console.log(valores.length)  //Quantidade de elementos

valores.push({id: 3 } , false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // exclui o ultimo elemento
console.log(valores)
delete valores[0]
console.log(valores)

console.log(typeof valores)



