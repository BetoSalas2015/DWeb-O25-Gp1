import { Tarea } from "./tarea.js";
const colors = await import('colors');

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

    cargarListado = (arreglo) => {
        arreglo.forEach( (tarea) => {
            this.listado[tarea.id] = tarea;
        })
    };

    imprimeTareas = () => {
        let salida = "";
        let cont = 1;
        this.listadoArr.forEach( (tarea) => {
            salida = `${colors.default.green(cont.toString() + '.')} ${colors.default.gray(tarea.descripcion)} ::`;
            if (tarea.completado !== null) {
                salida += `${colors.default.green(' Completado.')}`
            } else {
                salida += `${colors.default.red(' Pendiente.')}`
            }
            console.log(salida);
            cont++;
        });
    };

    imprimePendientesCompletadas = (tipo) => {
        let salida = ""
        let cont = 1
        if (tipo) {
            this.listadoArr.forEach((tarea) => {
                if (tarea.completado !== null) {
                    salida = `${colors.default.green(cont.toString() + '.')} ${colors.default.gray(tarea.descripcion)} :: ${colors.default.green(" Completado")}`
                    console.log(salida);
                     cont++;
                }
               
            })
        } else {
            this.listadoArr.forEach((tarea) => {
                if (tarea.completado === null) {
                    salida = `${colors.default.green(cont.toString() + '.')} ${colors.default.gray(tarea.descripcion)} :: ${colors.default.red(" Pendiente")}`
                    console.log(salida);
                     cont++;
                }  
               
            })
            
        }
    };

    borrarTarea  = (id) => {
        if (this.listado[id]) {
            delete this.listado[id];
        }
    };

    cambiarTareas = (ids = []) => {
        ids.forEach((id) => {
            const tarea = this.listado[id];
            if(!tarea.completado) {
                tarea.completado = new Date().toISOString() 
            }
            this.listadoArr.forEach((tarea) => {
                if(!ids.includes(tarea.id)) {
                    this.listado[tarea.id].completado = null;
                }
            })
        })
    };

}



