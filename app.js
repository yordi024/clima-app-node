// const axios = require('axios');
const argv = require('./config/config').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


let getInfo = async(direccion) => {
    try {
        let coords = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima en ${ direccion } es de ${ temp }`
    } catch (error) {
        return `No se pudo determinar el clima en ${ direccion }`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));