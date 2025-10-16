const { crearArchivo } = require("./modulos/multiplicar")
const argv = require("yargs")
            .option('b', {
                alias: 'base',
                demandOption: true,
                default: 5,
                description: 'Base de la tabla a multiplicar',
                type: 'number'

            }).argv

//console.clear()





/*
//const arg3 = process.argv[2]
const [,,arg3] = process.argv;
const [,base = 5] = arg3.split('=')


crearArchivo(base).then( (nombreArchivo) => { console.log(`Archivo ${nombreArchivo} creado.`);})
                   .catch( (err) => { console.log(err); });
                   */
