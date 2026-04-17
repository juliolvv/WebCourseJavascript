function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Área acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2)) // Retorna NaN, pois a multiplicação de um número por undefined resulta em NaN
console.log(area()) // Retorna NaN, pois a multiplicação de undefined por undefined resulta em NaN
console.log(area(2, 3, 17, 22, 44)) // Retorna 6, pois os parâmetros extras são ignorados
console.log(area(5, 5)) // Retorna "Área acima do permitido: 25m2.", pois a área é maior que 20


