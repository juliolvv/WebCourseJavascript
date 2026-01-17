// Função sem retorno

function imprimirSoma(a,b) {
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2) // NaN // not a number
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // ignora os outros // valida apenas os dois primeiros parâmetros declarados na função 
imprimirSoma() // NaN   

// Função com retorno

function soma(a, b = 0) {
    return a + b
}

// soma(2, 3) // retornaria 5, mas como não tem console.log, não aparece nada na tela // pois a função retorna o valor, mas não imprime diferente da função imprimirSoma 

console.log(soma(2, 3))
console.log(soma(2)) // se não passar o segundo parâmetro, ele assume o valor 0 que foi definido na função
console.log(soma()) // NaN // pois o primeiro parâmetro não foi definido e não tem valor padrão