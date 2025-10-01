//  Función constructora
function Persona(nombre) {
    this.nombre = nombre
}

Persona.prototype.saludar = function() {
    return "Hola, soy " + this.nombre;
}

var persona1 = new Persona("Jaun")
var persona2 = new Persona("Pedro")

console.log(persona1.saludar());
console.log(persona2.saludar());

console.log(persona1);
console.log(persona2);
console.log(persona2.toString());

var numero = new Number(3)
console.log(numero);


