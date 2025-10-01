//* 1ra forma de declarar una funcion
function sumar(a, b) {
    return a + b
}

//? 2da Forma de declarar una función
let sumar2 = function(a, b) {
    return  a + b
}

//! 3ra FORMA DE declarar una función
let sumar3 = (a, b) => {
    return  a + b
}

//! Simplificación de 3ra FORMA DE declarar una función
let sumar4 = (a, b) => a + b

let saludo = nombre =>  `Saludos desde ${ nombre}`

console.log(sumar(3,4));
console.log(sumar2(3,4));
console.log(sumar3(3,4));
console.log(sumar4(3,4));
console.log(saludo("Puebla "));
