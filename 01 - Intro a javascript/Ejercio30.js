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

const getEmpleado = function( id ) {
    const promesa = new Promise( (resolve, reject) => {
        const empleado = empleados.find( e => e.id === id )?.nombre
        if (empleado) {
            resolve(empleado);
        } else {
            reject(`El empleado con ID ${id} no existe`)
        }
    } );
    return promesa;
}

const getSalario = function(id) {
    return new Promise( (resolve, reject) => {
        const salario = salarios.find( e => e.id === id)?.salario
        salario ? resolve(salario) : reject(`El salario para el ID ${id} no existe`)
        })
    
}

let id = 4

getEmpleado(id)
    .then((empleado) => {
        const emp = empleado;
        return getSalario(id)
            .then((salario) => {
                console.log(`El empleado ${empleado} tiene el salario ${salario}`);
            });
    })
    .catch((err) => { console.log(err)});



getEmpleado(id).then( (empleado) => { 
                        getSalario(id).then( (salario) => { 
                            console.log(`El empleado ${empleado} tien un salario de ${salario}.`) } )
                                      .catch((err) => { console.log(err) })
                        console.log(empleado) 
                    } )
               .catch((err) => { console.log(err) });


/*getEmpleado(id, (err, empleado) => {
    if (err) {
       return console.log(err);
    }
    getSalario(id, (err, salario) => {
            if (err) {
                return console.log( `El empleado ${empleado} no tiene salario`);
            }
            console.log(`El empleado ${empleado} gana ${salario}`);
        })
})*/
