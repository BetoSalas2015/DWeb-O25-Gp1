const colors = await import('colors');
import { inquirerMenu, pausa } from "./js/inquirer.js";
import { Tarea } from './modelos/tarea.js'
import ( Tareas ) from './modelos/tareas.js'

const main = async () => {
    console.clear();
    let opc = 0
    let tareas = new Tareas(); 
    do {
        opc = await inquirerMenu();
        if (opc !== 0) {
            pausa();
        }
    } while (opc !== 0);
    
    
};

main();