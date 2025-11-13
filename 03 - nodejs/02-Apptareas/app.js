const colors = await import('colors');
import { inquirerMenu, 
            pausa, 
            capturaEntrada, 
            listadoTareasBorrar, 
            confirmar,
            listadoSeleccionar } from "./js/inquirer.js";
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
            await tareas.cargarListado(tareasbd);
        }
        switch (opc) {
            case 1: const resp = await capturaEntrada("Descripción: ");
                    tareas.crearTarea(resp); break;
            case 2: tareas.imprimeTareas(); break;
            case 3: tareas.imprimePendientesCompletadas(true); break;
            case 4: tareas.imprimePendientesCompletadas(false); break;
            case 5: const comp = await listadoSeleccionar(tareas.listadoArr);
                    tareas.cambiarTareas(comp);
                    
                    break;
            case 6: const id = await listadoTareasBorrar(tareas.listadoArr); 
                    const ok = await confirmar('¿Desea Borrar la tarea?');
                    if (ok) {
                        tareas.borrarTarea(id); 
                        console.log(`${colors.default.green('Tarea Borrada')}`);
                        
                    }
                    break;
        
        }
        guardabase(tareas.listadoArr);
        if (opc !== 0) {
            await pausa();
        }
    } while (opc !== 0);
    
    
};

main();