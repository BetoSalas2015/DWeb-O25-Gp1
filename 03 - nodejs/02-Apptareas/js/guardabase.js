import { writeFileSync, existsSync, readFileSync } from 'node:fs'

const filepath = './db/data.json'

export const guardabase = (data) => {
    writeFileSync(filepath, JSON.stringify( data));
};

export const cargabase = () => {
    if (!existsSync(filepath)) {
        return null;
    }
    const tareas = readFileSync(filepath, { encoding: 'utf-8'});
    return JSON.parse(tareas);
};