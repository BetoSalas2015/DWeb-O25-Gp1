//   Objetos en Javascript
//   Estilo JAva
Persona = new Object();

Persona["nombre"] = "Roberto"
Persona["apellido"] = "Salazar"

console.log(Persona);

var campo = "nombre"
console.log(Persona[campo]); 

// Operador punto
Persona2 = new Object()
Persona2.nombre = "Roberto"
Persona2.apellido = "Salazar"
Persona2.direccion = new Object()
Persona2.direccion.calle = "2 Sur 2"

console.log(Persona2);

// Objetos literales
var Persona3 = {
    nombre: "Roberto",
    apellido: "Salazar",
    direccion: {
        calle: "2 sur 2"
    },
    saludo: function () {
        console.log("hola");
    }
}

console.log(Persona3);
Persona3.saludo();


