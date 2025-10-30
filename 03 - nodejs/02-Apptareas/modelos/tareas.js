import { Tarea } from "./tarea.js";

export class Tareas {
    constructor() {
        this.listado = {}
    }

    crearTarea = (desc) => {
        const tarea = new Tarea(desc);
        this.listado[tarea.id] = tarea;
    };

    get listadoArr() {
        const listadoArr = [];
        Object.keys(this.listado).forEach( (key) => {
            const tarea = this.listado[key];
            listadoArr.push(tarea);
        } );
        return listadoArr;
    }

    const cargarListado = () => {
        
    };
}

