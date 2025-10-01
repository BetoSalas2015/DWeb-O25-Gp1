//*  Callbacks

const empleados = [
    {
        id: 1,
        nombre: "Juan"
    },
    {
        id: 2,
        nombre: "Pedro"
    },
    {
        id: 3,
        nombre: "Jorge"
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = function( id, callback ) {
    const empleado = empleados.find( e => e.id === id )?.nombre
    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`El empleado con ID ${id} no existe`)
    }
    
}

const getSalario = function(id, callback) {
    const salario = salarios.find( e => e.id === id)?.salario
    if (salario) {
        callback(null, salario)
    } else {
        callback(`El salario para el ID ${id} no existe`)
    }
}

let id = 4

getEmpleado(id, (err, empleado) => {
    if (err) {
       return console.log(err);
    }
    getSalario(id, (err, salario) => {
            if (err) {
                return console.log( `El empleado ${empleado} no tiene salario`);
            }
            console.log(`El empleado ${empleado} gana ${salario}`);
        })
})
