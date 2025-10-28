import { writeFile } from "node:fs";
const colors = await import('colors');

export const crearArchivo = async (base = 5) => {
let salida = ""

console.log(colors.default.green("===================="));
console.log(colors.default.yellow(`   Tabla del ${base}`));
console.log(colors.default.green("===================="));

for (let i = 1; i < 10; i++) {
    salida += `${base} * ${i} = ${ base * i}\n`
   
} 

console.log(salida);

writeFile(`Tabla-${base}.txt`, salida, (err) => {
    if(err) throw err;
    console.log(`El archivo Tabla-${base}.txt creado`);
})
}