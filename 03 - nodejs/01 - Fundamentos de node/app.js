import { crearArchivo } from "./modulos/multiplicar.js"
import { argv } from "./modulos/yargs.js"

console.clear()
console.log(argv);
const base = argv.base;
                
crearArchivo(base).then( (nombreArchivo) => { console.log(`Archivo ${nombreArchivo} creado.`);})
                   .catch( (err) => { console.log(err); });
                   
