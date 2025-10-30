const colors = await import('colors');
import { inquirerMenu, pausa, capturaEntrada } from "./js/inquirer.js";
import { Tarea } from './modelos/tarea.js'
import  { Tareas }  from './modelos/tareas.js'
import { guardabase, cargabase } from './js/guardabase.js'

const main = async () => {
    console.clear();
    let opc = 0
    let tareas = new Tareas(); 
    do {
        opc = await inquirerMenu();
        const tareasbd = await cargabase();
        if (tareasbd) {
            
        }
        switch (opc) {
            case 1: const resp = await capturaEntrada("Descripción: ");
                    tareas.crearTarea(resp); break;
            case 2: console.log(tareas.listadoArr); break;
        
        }
        guardabase(tareas.listadoArr);
        if (opc !== 0) {
            await pausa();
        }
    } while (opc !== 0);
    
    
};

main();