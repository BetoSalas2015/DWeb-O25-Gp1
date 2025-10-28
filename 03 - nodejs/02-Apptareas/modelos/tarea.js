import { v4 as uuidv4 } from 'uuid'

export class Tarea {
    id = '';
    descripcion = '';
    completado = null;

    constructor(desc) {
        this.id = uuidv4();
        this.descripcion = desc;
        this.completado = null;
    }
}

