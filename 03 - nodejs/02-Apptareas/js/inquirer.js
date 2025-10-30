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
