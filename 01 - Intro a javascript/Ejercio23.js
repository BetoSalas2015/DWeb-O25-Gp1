// Objeto base
var Persona = {
    saludar: function() {
        return "Hola soy " + this.nombre
    },
    despedir: function() {
        return "Adios desde " + this.nombre
    }
}

var attr = {
        nombre: "Juan",
        edad: 24,
        estudiar: function() {
            return this.nombre + " está estudiando Javascript."
        }
    }

var estudiante = Object.create(Persona, attr)

console.log(estudiante.saludar());
console.log(estudiante.despedir());
console.log(estudiante.estudiar());

//  Verificando la cadena de prototipos
console.log(Object.getPrototypeOf(estudiante) === Persona);

