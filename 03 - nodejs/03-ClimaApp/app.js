const colors = await import('colors');
import { inquirerMenu, capturaEntrada, pausa } from './js/inquirer.js';

const main = async () => {
    let resp;
    do {
        resp = await inquirerMenu();
        switch (resp) {
            case 1:
                
                break;
            case 2:
                
                break;
        }
        if (resp === 0) {
            await pausa();
        }
        
    } while (resp !== 0);
    console.clear();
}

main()