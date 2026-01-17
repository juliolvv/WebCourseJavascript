console.log(7 / 0) 
console.log("10" / 2)// divisão por zero retorna Infinity
// strings numéricas são convertidas automaticamente em números
console.log("show!" * 2) // operação inválida retorna NaN (Not a Number).isNaN(6.7)) 
console.log(Number.isNaN("show" / 2)) // verifica se o valor é NaN
console.log("10,2" / 2) // vírgula não é reconhecida como separador decimalisInteger(6.7))
console.log(0.1 + 0.7) // imprecisão em operações com ponto flutuante
// console.log(10.toString()) // erro de sintaxe
console.log((10).toFixed(2)) // contorna o problema acima
console.log(typeof 10)
console.log(10.3456789.toFixed(2)) // limita o número de casas decimais