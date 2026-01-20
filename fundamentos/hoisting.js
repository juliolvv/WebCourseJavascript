console.log("a =", a)
var a = 2
console.log("a = ", a)

// funciona da mesma forma com funções

function teste() {
    console.log("b =", b)
    var b = 3
    console.log("b =", b)
}
teste()
// console.log("b =", b) // Erro! b não está definido fora da função

console.log("a =", a)
let a = 2
console.log("a = ", a)