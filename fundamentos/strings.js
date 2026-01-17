const escola = "Cod3r"
console.log(escola.charAt(4)) // caractere na posição 4
console.log(escola.charAt(5)) // posição 5 não existe
console.log(escola.charCodeAt(3)) // código Unicode do caractere na posição 3
console.log(escola.indexOf('3')) // posição do caractere '3'

console.log(escola.substring(1)) // substring a partir da posição 1
console.log(escola.substring(0, 3)) // substring da posição 0 até a 3 (sem incluir a 3)

console.log('Escola '.concat(escola).concat("!")) // concatenação de strings
console.log('Escola ' + escola + "!") // outra forma de concatenar strings
console.log(escola.replace(3, 'e')) // substitui o caractere '3' por 'e'

console.log('Ana,Maria,Pedro'.split(',')) // divide a string em um array usando ',' como separador