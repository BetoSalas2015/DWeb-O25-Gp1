const colors = await import('colors');
import readline from 'readline';

export const mostrarMenu = () => {
    console.clear();
    console.log(colors.default.green(`===================================`));
    console.log(colors.default.green(`=      Seleccione una opción      =`));
    console.log(colors.default.green(`===================================`));
    console.log("");
    console.log(`${colors.default.green('1.')} Crear tarea.`);
    console.log(`${colors.default.green('2.')} Listar tareas.`);
    console.log(`${colors.default.green('3.')} Listar tareas terminadas.`);
    console.log(`${colors.default.green('4.')} Listar tareas pendientes.`);
    console.log(`${colors.default.green('5.')} Completar tarea.`);
    console.log(`${colors.default.green('6.')} Borrar tarea.`);
    console.log(`${colors.default.green('0.')} Salir.`);
    
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    r1.question("Seleccione una opción: ", (opc) => {
        console.log(opc);
        r1.close(); 
    })
};