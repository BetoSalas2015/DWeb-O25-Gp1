import inquirer  from "inquirer";
const colors = await import('colors')

const menu = [{
    type: 'list',
    name: 'menuOpt',
    message: 'Seleccione una opción',
    choices: [{
        value: 1,
        name: `1. Crear Tarea`
    },
    {
        value: 2,
        name: `2. Listar Tareas.`
    },
    {
        value: 3,
        name: `3. Listar Tareas terminadas.`
    },
    {
        value: 4,
        name: `4. Listar Tareas pendientes.`
    },
    {
        value: 5,
        name: `5. Completar Tareas.`
    },
    {
        value: 6,
        name: `6. Borrar Tareas.`
    },
    {
        value: 0,
        name: `0. Salir Tareas.`
    },
    ]
}];

export const inquirerMenu = async () => {
    console.clear();
    console.log(colors.default.green(`===================================`));
    console.log(colors.default.green(`=      Seleccione una opción      =`));
    console.log(colors.default.green(`===================================`));

    const { menuOpt } = await inquirer.prompt(menu);
    return menuOpt;
};

export const pausa = async () => {
    await inquirer.prompt([{
        type: 'input',
        name: 'pausaOpt',
        message: `Presione ${colors.default.yellow('<<ENTER>>')} para continuar`
    }]);
};

export const capturaEntrada = async (message) => {
    const respuesta = await inquirer.prompt([{
        type: 'input',
        name: 'resp',
        message,
        validate: (entrada) => {
            if (entrada.length === 0 ) {
                return 'Èntrada inválida. Reintente'
            } else {
                return true;
            }
        }
    }]);
    return respuesta.resp;
};

export const listadoTareasBorrar = async (listado = []) => {
    let cont = 0;
    const choices = listado.map( (tarea) => {
        cont++;
        return {
            value: tarea.id,
            name: `${colors.default.green(cont.toString() + ".")} ${colors.default.gray(tarea.descripcion)}`
        }
    } );
    const respuesta = await inquirer.prompt([{
        type: 'list',
        name: 'resp', 
        message: '¿Que tarea desea borrar?',
        choices
    }])
    return respuesta.resp;
}

export const confirmar = async (message) => {
    const { ok } = await inquirer.prompt([{
        type: 'confirm',
        name: 'ok',
        message
    }]);
    return ok;
};

export const listadoSeleccionar = async (listado) => {
    const choices = listado.map( (tarea) => {
        return {
            value: tarea.id,
            name: tarea.descripcion,
            checked: (tarea.completado) ? true : false
        }
    } );
    const respuesta = await inquirer.prompt([{
        type: 'checkbox',
        name: 'resp',
        message:  'Marque las tareas cpmpletadas',
        choices
    }]);
    return respuesta.resp;
};
