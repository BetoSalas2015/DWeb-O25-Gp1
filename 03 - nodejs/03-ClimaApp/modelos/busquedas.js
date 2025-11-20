import axios from "axios";

export class Busquedas {
    historial = [];

    constructor() {

    }

    async ciudad(lugar = '') {
        const consulta = axios.create({
            baseURL: 'https://api.mapbox.com/search/geocode/v6/forward',
            params: {
                q: `${lugar}`,
                language: 'es', 
                limit: 5,
                'access_token': process.env.MAPBOX_KEY
            }
        });
        const { data } = await consulta.get();
        return data.features.map( (ubicacion) => ({
            id: ubicacion.id,
            lugar: ubicacion.properties.full_address,
            lon: ubicacion.geometry.coordinates[0],
            lat: ubicacion.geometry.coordinates[1] 
        }));
        
    }
}