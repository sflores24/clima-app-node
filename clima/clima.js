const axios = require('axios');

const getClimaLatLng = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=66472a60bcb37a77d91ecebfc55dddfa`);

    if (resp.cod === '400') {
        throw new Error(`La Latitud ${lat} o Longitud ${lng} es incorrecta`);
    }

    //console.log(resp);
    let temperatura = resp.data.main.temp;

    return temperatura;
}

module.exports = {
    getClimaLatLng
}