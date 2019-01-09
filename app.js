const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        console.log(coors);
        let temp = await clima.getClimaLatLng(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} con coordenadas lat ${coors.lat} y lng ${coors.lng} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log('Error', e));