import yargs from "yargs"
import { hideBin } from "yargs/helpers"

export const argv = yargs(hideBin(process.argv))
                .option('b', {
                    alias: 'base',
                    demandOption: true,
                    default: 5,
                    description: 'Base de la tabla de multiplicar',
                    type: 'number'
                })
                .check((argv, option) => {
                    if(isNaN(argv.base))
                        throw "El argumento no es un numero"
                    return true;
                })
                .argv;