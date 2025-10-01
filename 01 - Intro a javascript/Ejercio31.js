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

const getInfoUsuario = async(id) => {
    const empleado = await getEmpleado(id);
    const salario =  await getSalario(id);
    return `El empleado ${empleado} tiene un salario de ${salario}.`;
};

getEmpleado(id)
    .then((empleado) => {
        const emp = empleado;
        return getSalario(id)
            .then((salario) => {
                console.log(`El empleado ${empleado} tiene el salario ${salario}`);
            });
    })
    .catch((err) => { console.log(err)});

getInfoUsuario(id).then((msg) => { console.log(msg)})
                .catch((err) => { console.log(err)});