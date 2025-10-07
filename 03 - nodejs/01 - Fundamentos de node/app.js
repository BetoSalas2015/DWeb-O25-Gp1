const fs = require('node:fs')

console.clear()

let base = 7
let salida = ""

console.log("============================");
console.log(`     Tabla del ${base}      `);
console.log("============================");


for (let i = 1 ; i <= 10; i++) {
    salida += `${base} * ${i} = ${base * i}\n`
}

fs.writeFile(`Tabla-${base}.txt`, salida, (err) => {
    if(err) throw err;
    console.log(`Archivo Tabla-5-txt creado.`);
    
})
console.log(salida);
