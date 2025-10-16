import { writeFile } from "node:fs";

export const crearArchivo = (base = 5) => {
let salida = ""

console.log("====================");
console.log(`   Tabla del ${base}`);
console.log("====================");

for (let i = 1; i < 10; i++) {
    salida += `${base} * ${i} = ${ base * i}\n`
   
} 

console.log(salida);

writeFile(`Tabla-${base}.txt`, salida, (err) => {
    if(err) throw err;
    console.log(`El archivo Tabla-${base}.txt creado`);
})
}

/* 
Importar todo el módulo:
import * as miModulo from './mimodulo.js'

Importar partes del modulo
import { fun1, fun2 } from './mimodulo.js'

Importar con un alias
import { fun1 as nuevoNombre } from './mimodulo.js'
*/