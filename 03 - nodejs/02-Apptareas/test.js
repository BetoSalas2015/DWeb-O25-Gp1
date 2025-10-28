import { Tarea } from "./modelos/tarea.js";
import { Tareas } from "./modelos/tareas.js";

const tarea = new Tarea('Comprar libro');
console.log(tarea);

const tareas = new Tareas();
tareas.listado[tarea.id] = tarea;
console.log(tareas);
